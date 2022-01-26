/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EDataServer-1.2
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';

export namespace EDataServer {

enum ClientError {
    INVALID_ARG,
    BUSY,
    SOURCE_NOT_LOADED,
    SOURCE_ALREADY_LOADED,
    AUTHENTICATION_FAILED,
    AUTHENTICATION_REQUIRED,
    REPOSITORY_OFFLINE,
    OFFLINE_UNAVAILABLE,
    PERMISSION_DENIED,
    CANCELLED,
    COULD_NOT_CANCEL,
    NOT_SUPPORTED,
    TLS_NOT_AVAILABLE,
    UNSUPPORTED_AUTHENTICATION_METHOD,
    SEARCH_SIZE_LIMIT_EXCEEDED,
    SEARCH_TIME_LIMIT_EXCEEDED,
    INVALID_QUERY,
    QUERY_REFUSED,
    DBUS_ERROR,
    OTHER_ERROR,
    NOT_OPENED,
    OUT_OF_SYNC,
}
enum CollatorError {
    OPEN,
    CONVERSION,
    INVALID_LOCALE,
}
enum ConflictResolution {
    FAIL,
    USE_NEWER,
    KEEP_SERVER,
    KEEP_LOCAL,
    WRITE_COPY,
}
enum MdnResponsePolicy {
    NEVER,
    ALWAYS,
    ASK,
}
enum OAuth2ServiceNavigationPolicy {
    DENY,
    ALLOW,
    ABORT,
}
enum ProxyMethod {
    DEFAULT,
    MANUAL,
    AUTO,
    NONE,
}
enum SourceAuthenticationResult {
    UNKNOWN,
    ERROR,
    ERROR_SSL_FAILED,
    ACCEPTED,
    REJECTED,
    REQUIRED,
}
enum SourceConnectionStatus {
    DISCONNECTED,
    AWAITING_CREDENTIALS,
    SSL_FAILED,
    CONNECTING,
    CONNECTED,
}
enum SourceCredentialsReason {
    UNKNOWN,
    REQUIRED,
    REJECTED,
    SSL_FAILED,
    ERROR,
}
enum SourceLDAPAuthentication {
    NONE,
    EMAIL,
    BINDDN,
}
enum SourceLDAPScope {
    ONELEVEL,
    SUBTREE,
}
enum SourceLDAPSecurity {
    NONE,
    LDAPS,
    STARTTLS,
}
enum SourceMailCompositionReplyStyle {
    DEFAULT,
    QUOTED,
    DO_NOT_QUOTE,
    ATTACH,
    OUTLOOK,
}
enum SourceWeatherUnits {
    FAHRENHEIT,
    CENTIGRADE,
    KELVIN,
}
enum ThreeState {
    OFF,
    ON,
    INCONSISTENT,
}
enum TimeParseStatus {
    OK,
    NONE,
    INVALID,
}
enum TrustPromptResponse {
    UNKNOWN,
    REJECT,
    ACCEPT,
    ACCEPT_TEMPORARILY,
    REJECT_TEMPORARILY,
}
enum WebDAVACEPrincipalKind {
    UNKNOWN,
    HREF,
    ALL,
    AUTHENTICATED,
    UNAUTHENTICATED,
    PROPERTY,
    SELF,
    OWNER,
}
enum WebDAVLockScope {
    EXCLUSIVE,
    SHARED,
}
enum WebDAVPrivilegeHint {
    UNKNOWN,
    READ,
    WRITE,
    WRITE_PROPERTIES,
    WRITE_CONTENT,
    UNLOCK,
    READ_ACL,
    WRITE_ACL,
    READ_CURRENT_USER_PRIVILEGE_SET,
    BIND,
    UNBIND,
    ALL,
    CALDAV_READ_FREE_BUSY,
}
enum WebDAVPrivilegeKind {
    UNKNOWN,
    ABSTRACT,
    AGGREGATE,
    COMMON,
}
enum WebDAVPropertyChangeKind {
    SET,
    REMOVE,
}
enum WebDAVResourceKind {
    UNKNOWN,
    ADDRESSBOOK,
    CALENDAR,
    PRINCIPAL,
    COLLECTION,
    RESOURCE,
    SUBSCRIBED_ICALENDAR,
    WEBDAV_NOTES,
}
enum XmlHashStatus {
    SAME,
    DIFFERENT,
    NOT_FOUND,
}
enum XmlHashType {
    OBJECT_UID,
    PROPERTY,
}
enum OAuth2ServiceFlags {
    NONE,
    EXTRACT_REQUIRES_PAGE_CONTENT,
}
enum WebDAVACEFlag {
    UNKNOWN,
    GRANT,
    DENY,
    INVERT,
    PROTECTED,
    INHERITED,
}
enum WebDAVACLRestrictions {
    NONE,
    GRANT_ONLY,
    NO_INVERT,
    DENY_BEFORE_GRANT,
    REQUIRED_PRINCIPAL,
}
enum WebDAVDiscoverSupports {
    NONE,
    CONTACTS,
    EVENTS,
    MEMOS,
    TASKS,
    WEBDAV_NOTES,
    CALENDAR_AUTO_SCHEDULE,
    SUBSCRIBED_ICALENDAR,
}
enum WebDAVListFlags {
    ALL,
    NONE,
    SUPPORTS,
    ETAG,
    DISPLAY_NAME,
    CONTENT_TYPE,
    CONTENT_LENGTH,
    CREATION_DATE,
    LAST_MODIFIED,
    DESCRIPTION,
    COLOR,
    ORDER,
    ONLY_CALENDAR,
    ONLY_ADDRESSBOOK,
}
enum WebDAVResourceSupports {
    NONE,
    CONTACTS,
    EVENTS,
    MEMOS,
    TASKS,
    FREEBUSY,
    TIMEZONE,
    WEBDAV_NOTES,
    LAST,
}
const CLIENT_BACKEND_PROPERTY_CACHE_DIR: string
const CLIENT_BACKEND_PROPERTY_CAPABILITIES: string
const CLIENT_BACKEND_PROPERTY_ONLINE: string
const CLIENT_BACKEND_PROPERTY_OPENED: string
const CLIENT_BACKEND_PROPERTY_OPENING: string
const CLIENT_BACKEND_PROPERTY_READONLY: string
const CLIENT_BACKEND_PROPERTY_REVISION: string
const DEBUG_LOG_DOMAIN_CAL_QUERIES: string
const DEBUG_LOG_DOMAIN_GLOG: string
const DEBUG_LOG_DOMAIN_USER: string
const EDS_MAJOR_VERSION: number
const EDS_MICRO_VERSION: number
const EDS_MINOR_VERSION: number
const NETWORK_MONITOR_ALWAYS_ONLINE_NAME: string
const OAUTH2_SECRET_ACCESS_TOKEN: string
const OAUTH2_SECRET_EXPIRES_AFTER: string
const OAUTH2_SECRET_REFRESH_TOKEN: string
const SOURCE_CREDENTIAL_PASSWORD: string
const SOURCE_CREDENTIAL_SSL_TRUST: string
const SOURCE_CREDENTIAL_USERNAME: string
const SOURCE_EXTENSION_ADDRESS_BOOK: string
const SOURCE_EXTENSION_ALARMS: string
const SOURCE_EXTENSION_AUTHENTICATION: string
const SOURCE_EXTENSION_AUTOCOMPLETE: string
const SOURCE_EXTENSION_AUTOCONFIG: string
const SOURCE_EXTENSION_CALENDAR: string
const SOURCE_EXTENSION_COLLECTION: string
const SOURCE_EXTENSION_CONTACTS_BACKEND: string
const SOURCE_EXTENSION_GOA: string
const SOURCE_EXTENSION_LDAP_BACKEND: string
const SOURCE_EXTENSION_LOCAL_BACKEND: string
const SOURCE_EXTENSION_MAIL_ACCOUNT: string
const SOURCE_EXTENSION_MAIL_COMPOSITION: string
const SOURCE_EXTENSION_MAIL_IDENTITY: string
const SOURCE_EXTENSION_MAIL_SIGNATURE: string
const SOURCE_EXTENSION_MAIL_SUBMISSION: string
const SOURCE_EXTENSION_MAIL_TRANSPORT: string
const SOURCE_EXTENSION_MDN: string
const SOURCE_EXTENSION_MEMO_LIST: string
const SOURCE_EXTENSION_OFFLINE: string
const SOURCE_EXTENSION_OPENPGP: string
const SOURCE_EXTENSION_PROXY: string
const SOURCE_EXTENSION_REFRESH: string
const SOURCE_EXTENSION_RESOURCE: string
const SOURCE_EXTENSION_REVISION_GUARDS: string
const SOURCE_EXTENSION_SECURITY: string
const SOURCE_EXTENSION_SMIME: string
const SOURCE_EXTENSION_TASK_LIST: string
const SOURCE_EXTENSION_UOA: string
const SOURCE_EXTENSION_WEATHER_BACKEND: string
const SOURCE_EXTENSION_WEBDAV_BACKEND: string
const SOURCE_EXTENSION_WEBDAV_NOTES: string
const SOURCE_PARAM_SETTING: number
const WEBDAV_CAPABILITY_ACCESS_CONTROL: string
const WEBDAV_CAPABILITY_ADDRESSBOOK: string
const WEBDAV_CAPABILITY_BIND: string
const WEBDAV_CAPABILITY_CALENDAR_ACCESS: string
const WEBDAV_CAPABILITY_CALENDAR_AUTO_SCHEDULE: string
const WEBDAV_CAPABILITY_CALENDAR_PROXY: string
const WEBDAV_CAPABILITY_CALENDAR_SCHEDULE: string
const WEBDAV_CAPABILITY_CLASS_1: string
const WEBDAV_CAPABILITY_CLASS_2: string
const WEBDAV_CAPABILITY_CLASS_3: string
const WEBDAV_CAPABILITY_EXTENDED_MKCOL: string
const WEBDAV_COLLATION_ASCII_CASEMAP: string
const WEBDAV_COLLATION_ASCII_CASEMAP_SUFFIX: string
const WEBDAV_COLLATION_ASCII_NUMERIC: string
const WEBDAV_COLLATION_ASCII_NUMERIC_SUFFIX: string
const WEBDAV_COLLATION_OCTET: string
const WEBDAV_COLLATION_OCTET_SUFFIX: string
const WEBDAV_COLLATION_UNICODE_CASEMAP: string
const WEBDAV_COLLATION_UNICODE_CASEMAP_SUFFIX: string
const WEBDAV_CONTENT_TYPE_CALENDAR: string
const WEBDAV_CONTENT_TYPE_VCARD: string
const WEBDAV_CONTENT_TYPE_XML: string
const WEBDAV_DEPTH_INFINITY: string
const WEBDAV_DEPTH_THIS: string
const WEBDAV_DEPTH_THIS_AND_CHILDREN: string
const WEBDAV_NS_CALDAV: string
const WEBDAV_NS_CALENDARSERVER: string
const WEBDAV_NS_CARDDAV: string
const WEBDAV_NS_DAV: string
const WEBDAV_NS_ICAL: string
function bindingBindProperty(source: GObject.Object, sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
function bindingBindPropertyFull(source: GObject.Object, sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo?: Function | null, transformFrom?: Function | null): GObject.Binding
function bindingTransformEnumNickToValue(binding: GObject.Binding, sourceValue: any, targetValue: any, notUsed?: object | null): boolean
function bindingTransformEnumValueToNick(binding: GObject.Binding, sourceValue: any, targetValue: any, notUsed?: object | null): boolean
function categoriesAdd(category: string, unused: string, iconFile: string, searchable: boolean): void
function categoriesDupIconFileFor(category: string): string
function categoriesDupList(): string[]
function categoriesExist(category: string): boolean
function categoriesGetIconFileFor(category: string): string
function categoriesGetList(): string[]
function categoriesIsSearchable(category: string): boolean
function categoriesRegisterChangeListener(listener: GObject.Callback): void
function categoriesRemove(category: string): void
function categoriesSetIconFileFor(category: string, iconFile: string): void
function categoriesUnregisterChangeListener(listener: GObject.Callback): void
function collatorErrorQuark(): GLib.Quark
function dataServerUtilGetDbusCallTimeout(): number
function dataServerUtilSetDbusCallTimeout(timeoutMsec: number): void
function debugLogClear(): void
function debugLogDisableDomains(domains: string[]): void
function debugLogDump(filename: string): boolean
function debugLogDumpToDatedFile(): boolean
function debugLogEnableDomains(domains: string[]): void
function debugLogGetMaxLines(): number
function debugLogIsDomainEnabled(domain: string): boolean
function debugLogLoadConfiguration(filename: string): boolean
function debugLogSetMaxLines(numLines: number): void
function edsCheckVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
function enumFromString(enumType: GObject.Type, string: string, enumValue: number): boolean
function enumToString(enumType: GObject.Type, enumValue: number): string
function fileRecursiveDelete(file: Gio.File, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function fileRecursiveDeleteFinish(file: Gio.File, result: Gio.AsyncResult): boolean
function fileRecursiveDeleteSync(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
function filenameMakeSafe(string: string): void
function filenameMkdirEncoded(basepath: string, fileprefix: string, filename: string, fileindex: number): string
function freeFormExpToSexp(freeFormExp: string, symbols: FreeFormExpSymbol): string
function getUserCacheDir(): string
function getUserConfigDir(): string
function getUserDataDir(): string
function localtimeWithOffset(tt: number, tm: object | null, offset: number): void
function mktimeUtc(tm?: object | null): number
function oauth2ServiceUtilSetToForm(form: GLib.HashTable, name: string, value?: string | null): void
function oauth2ServiceUtilTakeToForm(form: GLib.HashTable, name: string, value?: string | null): void
function queueTransfer(srcQueue: GLib.Queue, dstQueue: GLib.Queue): void
function secretStoreDeleteSync(uid: string, cancellable?: Gio.Cancellable | null): boolean
function secretStoreLookupSync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSecret */ string ]
function secretStoreStoreSync(uid: string, secret: string, label: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
function soupLoggerAttach(message: Soup.Message, inputStream: Gio.InputStream): Gio.InputStream
function soupSslTrustConnect(soupMessage: Soup.Message, source: Source): void
function strftime(string: string, max: number, fmt: string, tm?: object | null): number
function timeFormatDateAndTime(dateTm: object | null, use24HourFormat: boolean, showMidnight: boolean, showZeroSeconds: boolean, buffer: string, bufferSize: number): void
function timeFormatTime(dateTm: object | null, use24HourFormat: boolean, showZeroSeconds: boolean, buffer: string, bufferSize: number): void
function timeGetDFmtWith4digitYear(): string
function timeParseDate(value: string, result?: object | null): TimeParseStatus
function timeParseDateAndTime(value: string, result?: object | null): TimeParseStatus
function timeParseDateAndTimeEx(value: string, result: object | null, twoDigitYear: boolean): TimeParseStatus
function timeParseDateEx(value: string, result: object | null, twoDigitYear: boolean): TimeParseStatus
function timeParseTime(value: string, result?: object | null): TimeParseStatus
function timeoutAddSecondsWithName(priority: number, interval: number, name: string | null, function_: GLib.SourceFunc): number
function timeoutAddWithName(priority: number, interval: number, name: string | null, function_: GLib.SourceFunc): number
function typeTraverse(parentType: GObject.Type, func: TypeFunc): void
function uidNew(): string
function utf8Strftime(string: string, max: number, fmt: string, tm?: object | null): number
function utilCanUseCollectionAsCredentialSource(collectionSource?: object | null, childSource?: object | null): boolean
function utilCopyObjectSlist(copyTo: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[]
function utilCopyStringSlist(copyTo: string[] | null, strings: string[]): string[]
function utilEnsureGdbusString(str: string, gdbusStr: string): string
function utilFreeNullableObjectSlist(objects: GObject.Object[]): void
function utilFreeObjectSlist(objects: GObject.Object[]): void
function utilFreeStringSlist(strings: string[]): void
function utilGenerateUid(): string
function utilGetDirectoryVariants(mainPath: string, replacePrefix: string, withModulesDir: boolean): string[]
function utilGetSourceFullName(registry?: object | null, source?: object | null): string
function utilGthreadId(thread: GLib.Thread): number
function utilIdentityCanSend(registry?: object | null, identitySource?: object | null): boolean
function utilSafeFreeString(str: string): void
function utilSlistToStrv(strings: string[]): string[]
function utilSourceCompareForSort(sourceA?: object | null, sourceB?: object | null): number
function utilStrcmp0(str1?: string | null, str2?: string | null): number
function utilStrdupStrip(string?: string | null): string | null
function utilStrstrcase(haystack: string, needle: string): string | null
function utilStrvEqual(v1: string[], v2: string[]): boolean
function utilStrvToSlist(strv: string): string[]
function utilUnicodeGetUtf8(text: string, out: number): string | null
function utilUnrefInThread(object?: object | null): void
function utilUtf8DataMakeValid(data: string, dataBytes: number): string
function utilUtf8Decompose(text: string): string
function utilUtf8MakeValid(str: string): string
function utilUtf8Normalize(str?: string | null): string | null
function utilUtf8RemoveAccents(str: string): string
function utilUtf8Strcasecmp(s1: string, s2: string): number
function utilUtf8Strstrcase(haystack?: string | null, needle?: string | null): string | null
function utilUtf8Strstrcasedecomp(haystack: string, needle: string): string
function webdavAccessControlEntryFree(ptr?: object | null): void
function webdavDiscoverFreeDiscoveredSources(discoveredSources: WebDAVDiscoveredSource[]): void
function webdavDiscoverSources(source: Source, urlUsePath: string | null, onlySupports: number, credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function webdavDiscoverSourcesFinish(source: Source, result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags | null, /* outDiscoveredSources */ WebDAVDiscoveredSource[] | null, /* outCalendarUserAddresses */ string[] | null ]
function webdavDiscoverSourcesFull(source: Source, urlUsePath: string | null, onlySupports: number, credentials?: NamedParameters | null, refSourceFunc?: WebDAVDiscoverRefSourceFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function webdavDiscoverSourcesFullSync(source: Source, urlUsePath: string | null, onlySupports: number, credentials?: NamedParameters | null, refSourceFunc?: WebDAVDiscoverRefSourceFunc | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags | null, /* outDiscoveredSources */ WebDAVDiscoveredSource[] | null, /* outCalendarUserAddresses */ string[] | null ]
function webdavDiscoverSourcesSync(source: Source, urlUsePath: string | null, onlySupports: number, credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags | null, /* outDiscoveredSources */ WebDAVDiscoveredSource[] | null, /* outCalendarUserAddresses */ string[] | null ]
function webdavPrivilegeFree(ptr?: object | null): void
function webdavPropertyChangeFree(ptr?: object | null): void
function webdavResourceFree(ptr?: object | null): void
function xmlDestroyHash(hash: GLib.HashTable): void
function xmlSaveFile(filename: string, doc: libxml2.Doc): number
function xmlToHash(doc: libxml2.Doc, type: XmlHashType): GLib.HashTable
function xmlhashAdd(hash: XmlHash, key: string, data: string): void
function xmlhashCompare(hash: XmlHash, key: string, compareData: string): XmlHashStatus
function xmlhashDestroy(hash: XmlHash): void
function xmlhashForeachKey(hash: XmlHash, func: XmlHashFunc): void
function xmlhashForeachKeyRemove(hash: XmlHash, func: XmlHashRemoveFunc): void
function xmlhashRemove(hash: XmlHash, key: string): void
function xmlhashWrite(hash: XmlHash): void
interface FreeFormExpBuildSexpFunc {
    (word: string, options: string, hint: string): string
}
interface OAuth2ServiceRefSourceFunc {
    (uid: string): Source | null
}
interface SourceRefreshFunc {
    (source: Source): void
}
interface TypeFunc {
    (type: GObject.Type): void
}
interface WebDAVDiscoverRefSourceFunc {
    (uid: string): Source | null
}
interface WebDAVPropstatTraverseFunc {
    (webdav: WebDAVSession, propNode: libxml2.Node, requestUri: Soup.URI, href: string | null, statusCode: number): boolean
}
interface XmlHashFunc {
    (key: string, value: string): void
}
interface XmlHashRemoveFunc {
    (key: string, value: string): boolean
}
class Extensible {
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): Extension[]
    loadExtensions(): void
    static name: string
}
class OAuth2Service {
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Service */
    canProcess(source: Source): boolean
    deleteTokenSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    extractAuthorizationCode(source: Source, pageTitle: string, pageUri: string, pageContent?: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string ]
    getAccessTokenSync(source: Source, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    getAuthenticationPolicy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    getAuthenticationUri(source: Source): string
    getClientId(source: Source): string
    getClientSecret(source: Source): string | null
    getDisplayName(): string
    getFlags(): number
    getName(): string
    getRedirectUri(source: Source): string | null
    getRefreshUri(source: Source): string
    guessCanProcess(protocol?: string | null, hostname?: string | null): boolean
    prepareAuthenticationUriQuery(source: Source, uriQuery: GLib.HashTable): void
    prepareGetTokenForm(source: Source, authorizationCode: string, form: GLib.HashTable): void
    prepareGetTokenMessage(source: Source, message: Soup.Message): void
    prepareRefreshTokenForm(source: Source, refreshToken: string, form: GLib.HashTable): void
    prepareRefreshTokenMessage(source: Source, message: Soup.Message): void
    receiveAndStoreTokenSync(source: Source, authorizationCode: string, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    refreshAndStoreTokenSync(source: Source, refreshToken: string, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static utilSetToForm(form: GLib.HashTable, name: string, value?: string | null): void
    static utilTakeToForm(form: GLib.HashTable, name: string, value?: string | null): void
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.Client */
    online?: boolean
    source?: Source
}
class Client {
    /* Properties of EDataServer-1.2.EDataServer.Client */
    readonly capabilities: object
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Client */
    cancelAll(): void
    checkCapability(capability: string): boolean
    checkRefreshSupported(): boolean
    dupBusName(): string
    getBackendProperty(propName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getBackendPropertyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* propValue */ string ]
    getBackendPropertySync(propName: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* propValue */ string ]
    getCapabilities(): string[]
    getSource(): Source
    isOnline(): boolean
    isOpened(): boolean
    isReadonly(): boolean
    open(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openSync(onlyIfExists: boolean, cancellable?: Gio.Cancellable | null): boolean
    refMainContext(): GLib.MainContext
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    refreshSync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    removeSync(cancellable?: Gio.Cancellable | null): boolean
    retrieveCapabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieveCapabilitiesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieveCapabilitiesSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieveProperties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrievePropertiesFinish(result: Gio.AsyncResult): boolean
    retrievePropertiesSync(cancellable?: Gio.Cancellable | null): boolean
    setBackendProperty(propName: string, propValue: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setBackendPropertyFinish(result: Gio.AsyncResult): boolean
    setBackendPropertySync(propName: string, propValue: string, cancellable?: Gio.Cancellable | null): boolean
    setBusName(busName: string): void
    unwrapDbusError(dbusError: GLib.Error): void
    waitForConnected(timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    waitForConnectedFinish(result: Gio.AsyncResult): boolean
    waitForConnectedSync(timeoutSeconds: number, cancellable?: Gio.Cancellable | null): boolean
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
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (() => void)): number
    on(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-died", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-died", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: ((object: string) => void)): number
    on(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-error", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backend-property-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backend-property-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: ((object: GLib.Error) => void)): number
    on(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "opened", object: GLib.Error): void
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
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::readonly", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static errorCreate(code: ClientError, customMsg?: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    static errorToString(code: ClientError): string
    static utilCopyObjectSlist(copyTo: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[]
    static utilCopyStringSlist(copyTo: string[] | null, strings: string[]): string[]
    static utilFreeObjectSlist(objects: GObject.Object[]): void
    static utilFreeStringSlist(strings: string[]): void
    static utilParseCommaStrings(strings: string): string[]
    static utilSlistToStrv(strings: string[]): string[]
    static utilStrvToSlist(strv: string): string[]
    static utilUnwrapDbusError(dbusError: GLib.Error, knownErrors: ClientErrorsList, knownErrorsCount: number, knownErrorsDomain: GLib.Quark, failWhenNoneMatched: boolean): [ /* returnType */ boolean, /* clientError */ GLib.Error ]
    static $gtype: GObject.Type
}
interface Extension_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.Extension */
    extensible?: Extensible
}
class Extension {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): Extensible
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
    constructor (config?: Extension_ConstructProps)
    _init (config?: Extension_ConstructProps): void
    static $gtype: GObject.Type
}
interface GDataOAuth2Authorizer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer */
    serviceType?: GObject.Type
    source?: Source
}
class GDataOAuth2Authorizer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer */
    cloneCredentials(): NamedParameters | null
    getServiceType(): GObject.Type
    isExpired(): boolean
    refSource(): Source
    setCredentials(credentials?: NamedParameters | null): void
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
    /* Methods of GData-0.0.GData.Authorizer */
    isAuthorizedForDomain(domain: GData.AuthorizationDomain): boolean
    processRequest(domain: GData.AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
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
    constructor (config?: GDataOAuth2Authorizer_ConstructProps)
    _init (config?: GDataOAuth2Authorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Source, serviceType: GObject.Type): GDataOAuth2Authorizer
    static supported(): boolean
    static $gtype: GObject.Type
}
interface Module_ConstructProps extends GObject.TypeModule_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.Module */
    filename?: string
}
class Module {
    /* Fields of GObject-2.0.GObject.TypeModule */
    readonly parentInstance: GObject.Object
    readonly useCount: number
    readonly typeInfos: object[]
    readonly interfaceInfos: object[]
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Module */
    getFilename(): string
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
    constructor (config?: Module_ConstructProps)
    _init (config?: Module_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): Module
    static loadAllInDirectory(dirname: string): Module[]
    static loadAllInDirectoryAndPrefixes(dirname: string, dirprefix?: string | null): Module[]
    static loadFile(filename: string): Module
    static $gtype: GObject.Type
}
interface NetworkMonitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.NetworkMonitor */
    gioName?: string
}
class NetworkMonitor {
    /* Properties of EDataServer-1.2.EDataServer.NetworkMonitor */
    gioName: string
    /* Properties of Gio-2.0.Gio.NetworkMonitor */
    readonly connectivity: Gio.NetworkConnectivity
    readonly networkAvailable: boolean
    readonly networkMetered: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.NetworkMonitor */
    dupGioName(): string
    listGioNames(): string[]
    setGioName(gioName?: string | null): void
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.NetworkMonitor */
    canReach(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null): boolean
    canReachAsync(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    canReachFinish(result: Gio.AsyncResult): boolean
    getConnectivity(): Gio.NetworkConnectivity
    getNetworkAvailable(): boolean
    getNetworkMetered(): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.NetworkMonitor */
    connect(sigName: "network-changed", callback: ((networkAvailable: boolean) => void)): number
    on(sigName: "network-changed", callback: (networkAvailable: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "network-changed", callback: (networkAvailable: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "network-changed", callback: (networkAvailable: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "network-changed", networkAvailable: boolean): void
    connect(sigName: "notify::gio-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gio-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gio-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gio-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gio-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connectivity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectivity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-available", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-available", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-available", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-metered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-metered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-metered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-metered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-metered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NetworkMonitor_ConstructProps)
    _init (config?: NetworkMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Gio.NetworkMonitor
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface OAuth2ServiceBase_ConstructProps extends Extension_ConstructProps {
}
class OAuth2ServiceBase {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): Extensible
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
    constructor (config?: OAuth2ServiceBase_ConstructProps)
    _init (config?: OAuth2ServiceBase_ConstructProps): void
    static $gtype: GObject.Type
}
interface OAuth2ServiceGoogle_ConstructProps extends OAuth2ServiceBase_ConstructProps {
}
class OAuth2ServiceGoogle {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceBase */
    readonly parent: Extension
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): Extensible
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
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Service */
    canProcess(source: Source): boolean
    deleteTokenSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    extractAuthorizationCode(source: Source, pageTitle: string, pageUri: string, pageContent?: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string ]
    getAccessTokenSync(source: Source, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    getAuthenticationPolicy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    getAuthenticationUri(source: Source): string
    getClientId(source: Source): string
    getClientSecret(source: Source): string | null
    getDisplayName(): string
    getFlags(): number
    getName(): string
    getRedirectUri(source: Source): string | null
    getRefreshUri(source: Source): string
    guessCanProcess(protocol?: string | null, hostname?: string | null): boolean
    prepareAuthenticationUriQuery(source: Source, uriQuery: GLib.HashTable): void
    prepareGetTokenForm(source: Source, authorizationCode: string, form: GLib.HashTable): void
    prepareGetTokenMessage(source: Source, message: Soup.Message): void
    prepareRefreshTokenForm(source: Source, refreshToken: string, form: GLib.HashTable): void
    prepareRefreshTokenMessage(source: Source, message: Soup.Message): void
    receiveAndStoreTokenSync(source: Source, authorizationCode: string, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    refreshAndStoreTokenSync(source: Source, refreshToken: string, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: OAuth2ServiceGoogle_ConstructProps)
    _init (config?: OAuth2ServiceGoogle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static utilSetToForm(form: GLib.HashTable, name: string, value?: string | null): void
    static utilTakeToForm(form: GLib.HashTable, name: string, value?: string | null): void
    static $gtype: GObject.Type
}
interface OAuth2ServiceOutlook_ConstructProps extends OAuth2ServiceBase_ConstructProps {
}
class OAuth2ServiceOutlook {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceBase */
    readonly parent: Extension
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): Extensible
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
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Service */
    canProcess(source: Source): boolean
    deleteTokenSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    extractAuthorizationCode(source: Source, pageTitle: string, pageUri: string, pageContent?: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string ]
    getAccessTokenSync(source: Source, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    getAuthenticationPolicy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    getAuthenticationUri(source: Source): string
    getClientId(source: Source): string
    getClientSecret(source: Source): string | null
    getDisplayName(): string
    getFlags(): number
    getName(): string
    getRedirectUri(source: Source): string | null
    getRefreshUri(source: Source): string
    guessCanProcess(protocol?: string | null, hostname?: string | null): boolean
    prepareAuthenticationUriQuery(source: Source, uriQuery: GLib.HashTable): void
    prepareGetTokenForm(source: Source, authorizationCode: string, form: GLib.HashTable): void
    prepareGetTokenMessage(source: Source, message: Soup.Message): void
    prepareRefreshTokenForm(source: Source, refreshToken: string, form: GLib.HashTable): void
    prepareRefreshTokenMessage(source: Source, message: Soup.Message): void
    receiveAndStoreTokenSync(source: Source, authorizationCode: string, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    refreshAndStoreTokenSync(source: Source, refreshToken: string, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: OAuth2ServiceOutlook_ConstructProps)
    _init (config?: OAuth2ServiceOutlook_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static utilSetToForm(form: GLib.HashTable, name: string, value?: string | null): void
    static utilTakeToForm(form: GLib.HashTable, name: string, value?: string | null): void
    static $gtype: GObject.Type
}
interface OAuth2ServiceYahoo_ConstructProps extends OAuth2ServiceBase_ConstructProps {
}
class OAuth2ServiceYahoo {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceBase */
    readonly parent: Extension
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): Extensible
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
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Service */
    canProcess(source: Source): boolean
    deleteTokenSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    extractAuthorizationCode(source: Source, pageTitle: string, pageUri: string, pageContent?: string | null): [ /* returnType */ boolean, /* outAuthorizationCode */ string ]
    getAccessTokenSync(source: Source, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    getAuthenticationPolicy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    getAuthenticationUri(source: Source): string
    getClientId(source: Source): string
    getClientSecret(source: Source): string | null
    getDisplayName(): string
    getFlags(): number
    getName(): string
    getRedirectUri(source: Source): string | null
    getRefreshUri(source: Source): string
    guessCanProcess(protocol?: string | null, hostname?: string | null): boolean
    prepareAuthenticationUriQuery(source: Source, uriQuery: GLib.HashTable): void
    prepareGetTokenForm(source: Source, authorizationCode: string, form: GLib.HashTable): void
    prepareGetTokenMessage(source: Source, message: Soup.Message): void
    prepareRefreshTokenForm(source: Source, refreshToken: string, form: GLib.HashTable): void
    prepareRefreshTokenMessage(source: Source, message: Soup.Message): void
    receiveAndStoreTokenSync(source: Source, authorizationCode: string, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    refreshAndStoreTokenSync(source: Source, refreshToken: string, refSource: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
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
    constructor (config?: OAuth2ServiceYahoo_ConstructProps)
    _init (config?: OAuth2ServiceYahoo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static utilSetToForm(form: GLib.HashTable, name: string, value?: string | null): void
    static utilTakeToForm(form: GLib.HashTable, name: string, value?: string | null): void
    static $gtype: GObject.Type
}
interface OAuth2Services_ConstructProps extends GObject.Object_ConstructProps {
}
class OAuth2Services {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Services */
    add(service: OAuth2Service): void
    find(source: Source): OAuth2Service | null
    guess(protocol?: string | null, hostname?: string | null): OAuth2Service | null
    isOauth2Alias(authMethod?: string | null): boolean
    list(): OAuth2Service[]
    remove(service: OAuth2Service): void
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    listExtensions(extensionType: GObject.Type): Extension[]
    loadExtensions(): void
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
    constructor (config?: OAuth2Services_ConstructProps)
    _init (config?: OAuth2Services_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OAuth2Services
    static isOauth2AliasStatic(authMethod?: string | null): boolean
    static isSupported(): boolean
    static $gtype: GObject.Type
}
interface SoupAuthBearer_ConstructProps extends Soup.Auth_ConstructProps {
}
class SoupAuthBearer {
    /* Properties of Soup-2.4.Soup.Auth */
    host: string
    readonly isAuthenticated: boolean
    isForProxy: boolean
    readonly schemeName: string
    /* Fields of Soup-2.4.Soup.Auth */
    readonly parent: GObject.Object
    readonly realm: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SoupAuthBearer */
    isExpired(): boolean
    setAccessToken(accessToken: string, expiresInSeconds: number): void
    /* Methods of Soup-2.4.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Soup.Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: Soup.URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Soup.Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Soup.Message, authHeader: string): boolean
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
    connect(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-for-proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SoupAuthBearer_ConstructProps)
    _init (config?: SoupAuthBearer_ConstructProps): void
    static $gtype: GObject.Type
}
interface SoupSession_ConstructProps extends Soup.Session_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SoupSession */
    credentials?: NamedParameters
    source?: Source
}
class SoupSession {
    /* Properties of EDataServer-1.2.EDataServer.SoupSession */
    credentials: NamedParameters
    /* Properties of Soup-2.4.Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    httpAliases: string[]
    httpsAliases: string[]
    idleTimeout: number
    maxConns: number
    maxConnsPerHost: number
    proxyResolver: Gio.ProxyResolver
    proxyUri: Soup.URI
    sslCaFile: string
    sslStrict: boolean
    sslUseSystemCaFile: boolean
    timeout: number
    tlsDatabase: Gio.TlsDatabase
    tlsInteraction: Gio.TlsInteraction
    useNtlm: boolean
    useThreadContext: boolean
    userAgent: string
    /* Fields of Soup-2.4.Soup.Session */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SoupSession */
    checkResult(request: Soup.RequestHTTP, readBytes: object | null, bytesLength: number): boolean
    dupCredentials(): NamedParameters | null
    getAuthenticationRequiresCredentials(): boolean
    getLogLevel(): Soup.LoggerLogLevel
    getSource(): Source
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    newRequest(method: string, uriString: string): Soup.RequestHTTP
    newRequestUri(method: string, uri: Soup.URI): Soup.RequestHTTP
    sendRequestSimpleSync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Uint8Array
    sendRequestSync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Gio.InputStream
    setCredentials(credentials?: NamedParameters | null): void
    setupLogging(loggingLevel?: string | null): void
    /* Methods of Soup-2.4.Soup.Session */
    abort(): void
    addFeature(feature: Soup.SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    cancelMessage(msg: Soup.Message, statusCode: number): void
    connectAsync(uri: Soup.URI, cancellable?: Gio.Cancellable | null, progressCallback?: Soup.SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    getAsyncContext(): GLib.MainContext | null
    getFeature(featureType: GObject.Type): Soup.SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Soup.Message): Soup.SessionFeature | null
    getFeatures(featureType: GObject.Type): Soup.SessionFeature[]
    hasFeature(featureType: GObject.Type): boolean
    pauseMessage(msg: Soup.Message): void
    prefetchDns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Soup.AddressCallback | null): void
    prepareForUri(uri: Soup.URI): void
    queueMessage(msg: Soup.Message, callback?: Soup.SessionCallback | null): void
    redirectMessage(msg: Soup.Message): boolean
    removeFeature(feature: Soup.SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    request(uriString: string): Soup.Request
    requestHttp(method: string, uriString: string): Soup.RequestHTTP
    requestHttpUri(method: string, uri: Soup.URI): Soup.RequestHTTP
    requestUri(uri: Soup.URI): Soup.Request
    requeueMessage(msg: Soup.Message): void
    send(msg: Soup.Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(msg: Soup.Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    sendMessage(msg: Soup.Message): number
    stealConnection(msg: Soup.Message): Gio.IOStream
    unpauseMessage(msg: Soup.Message): void
    websocketConnectAsync(msg: Soup.Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): Soup.WebsocketConnection
    wouldRedirect(msg: Soup.Message): boolean
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
    /* Signals of Soup-2.4.Soup.Session */
    connect(sigName: "authenticate", callback: ((msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void)): number
    on(sigName: "authenticate", callback: (msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", msg: Soup.Message, auth: Soup.Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: ((connection: GObject.Object) => void)): number
    on(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: (connection: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: ((msg: Soup.Message) => void)): number
    on(sigName: "request-queued", callback: (msg: Soup.Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (msg: Soup.Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (msg: Soup.Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-queued", msg: Soup.Message): void
    connect(sigName: "request-started", callback: ((msg: Soup.Message, socket: Soup.Socket) => void)): number
    on(sigName: "request-started", callback: (msg: Soup.Message, socket: Soup.Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (msg: Soup.Message, socket: Soup.Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (msg: Soup.Message, socket: Soup.Socket) => void): NodeJS.EventEmitter
    emit(sigName: "request-started", msg: Soup.Message, socket: Soup.Socket): void
    connect(sigName: "request-unqueued", callback: ((msg: Soup.Message) => void)): number
    on(sigName: "request-unqueued", callback: (msg: Soup.Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (msg: Soup.Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (msg: Soup.Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-unqueued", msg: Soup.Message): void
    connect(sigName: "tunneling", callback: ((connection: GObject.Object) => void)): number
    on(sigName: "tunneling", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tunneling", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tunneling", callback: (connection: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "tunneling", connection: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::credentials", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credentials", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language-auto", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::https-aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns-per-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::ssl-use-system-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-database", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-ntlm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-thread-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SoupSession_ConstructProps)
    _init (config?: SoupSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Source): SoupSession
    /* Function overloads */
    static new(): SoupSession
    static utilNormalizeUriPath(suri: Soup.URI): boolean
    static utilStatusToString(statusCode: number, reasonPhrase?: string | null): string
    static $gtype: GObject.Type
}
interface Source_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.Source */
    displayName?: string
    enabled?: boolean
    mainContext?: GLib.MainContext
    parent?: string
    uid?: string
}
class Source {
    /* Properties of EDataServer-1.2.EDataServer.Source */
    readonly connectionStatus: SourceConnectionStatus
    displayName: string
    enabled: boolean
    parent: string
    readonly remoteCreatable: boolean
    readonly remoteDeletable: boolean
    readonly removable: boolean
    readonly writable: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Source */
    camelConfigureService(service: Camel.Service): void
    changed(): void
    compareByDisplayName(source2: Source): number
    deletePassword(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deletePasswordFinish(result: Gio.AsyncResult): boolean
    deletePasswordSync(cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupParent(): string | null
    dupSecretLabel(): string
    dupUid(): string
    emitCredentialsRequired(reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null): void
    equal(source2: Source): boolean
    getConnectionStatus(): SourceConnectionStatus
    getDisplayName(): string
    getEnabled(): boolean
    getExtension(extensionName: string): SourceExtension
    getLastCredentialsRequiredArguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outReason */ SourceCredentialsReason, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    getLastCredentialsRequiredArgumentsSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outReason */ SourceCredentialsReason, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags, /* outOpError */ GLib.Error ]
    getOauth2AccessToken(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getOauth2AccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getOauth2AccessTokenSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getParent(): string | null
    getRemoteCreatable(): boolean
    getRemoteDeletable(): boolean
    getRemovable(): boolean
    getUid(): string
    getWritable(): boolean
    hasExtension(extensionName: string): boolean
    hash(): number
    invokeAuthenticate(credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeAuthenticateFinish(result: Gio.AsyncResult): boolean
    invokeAuthenticateSync(credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null): boolean
    invokeCredentialsRequired(reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invokeCredentialsRequiredFinish(result: Gio.AsyncResult): boolean
    invokeCredentialsRequiredSync(reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    lookupPassword(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupPasswordFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    lookupPasswordSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    mailSignatureLoad(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureLoadFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mailSignatureLoadSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mailSignatureReplace(contents: string, length: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureReplaceFinish(result: Gio.AsyncResult): boolean
    mailSignatureReplaceSync(contents: string, length: number, cancellable?: Gio.Cancellable | null): boolean
    mailSignatureSymlink(symlinkTarget: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mailSignatureSymlinkFinish(result: Gio.AsyncResult): boolean
    mailSignatureSymlinkSync(symlinkTarget: string, cancellable?: Gio.Cancellable | null): boolean
    proxyLookup(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    proxyLookupFinish(result: Gio.AsyncResult): string[]
    proxyLookupSync(uri: string, cancellable?: Gio.Cancellable | null): string[]
    refDbusObject(): Gio.DBusObject | null
    refMainContext(): GLib.MainContext
    refreshAddTimeout(context: GLib.MainContext | null, callback: SourceRefreshFunc): number
    refreshForceTimeout(): void
    refreshRemoveTimeout(refreshTimeoutId: number): boolean
    refreshRemoveTimeoutsByData(userData?: object | null): number
    remoteCreate(scratchSource: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remoteCreateFinish(result: Gio.AsyncResult): boolean
    remoteCreateSync(scratchSource: Source, cancellable?: Gio.Cancellable | null): boolean
    remoteDelete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remoteDeleteFinish(result: Gio.AsyncResult): boolean
    remoteDeleteSync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    removeSync(cancellable?: Gio.Cancellable | null): boolean
    setConnectionStatus(connectionStatus: SourceConnectionStatus): void
    setDisplayName(displayName: string): void
    setEnabled(enabled: boolean): void
    setParent(parent?: string | null): void
    storePassword(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storePasswordFinish(result: Gio.AsyncResult): boolean
    storePasswordSync(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    toString(): [ /* returnType */ string, /* length */ number | null ]
    unsetLastCredentialsRequiredArguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unsetLastCredentialsRequiredArgumentsFinish(result: Gio.AsyncResult): boolean
    unsetLastCredentialsRequiredArgumentsSync(cancellable?: Gio.Cancellable | null): boolean
    write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeFinish(result: Gio.AsyncResult): boolean
    writeSync(cancellable?: Gio.Cancellable | null): boolean
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.ProxyResolver */
    isSupported(): boolean
    lookup(uri: string, cancellable?: Gio.Cancellable | null): string[]
    lookupAsync(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(result: Gio.AsyncResult): string[]
    /* Signals of EDataServer-1.2.EDataServer.Source */
    connect(sigName: "authenticate", callback: ((credentials: NamedParameters) => void)): number
    on(sigName: "authenticate", callback: (credentials: NamedParameters) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (credentials: NamedParameters) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (credentials: NamedParameters) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", credentials: NamedParameters): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "credentials-required", callback: ((reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void)): number
    on(sigName: "credentials-required", callback: (reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "credentials-required", callback: (reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "credentials-required", callback: (reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "credentials-required", reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-creatable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-creatable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remote-deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::removable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(dbusObject?: Gio.DBusObject | null, mainContext?: GLib.MainContext | null): Source
    static newWithUid(uid: string, mainContext?: GLib.MainContext | null): Source
    static parameterToKey(paramName: string): string
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static getDefault(): Gio.ProxyResolver
    static $gtype: GObject.Type
}
interface SourceAddressBook_ConstructProps extends SourceBackend_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceAddressBook */
    order?: number
}
class SourceAddressBook {
    /* Properties of EDataServer-1.2.EDataServer.SourceAddressBook */
    order: number
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAddressBook */
    getOrder(): number
    setOrder(order: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceAddressBook_ConstructProps)
    _init (config?: SourceAddressBook_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceAlarms_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceAlarms */
    includeMe?: boolean
    lastNotified?: string
}
class SourceAlarms {
    /* Properties of EDataServer-1.2.EDataServer.SourceAlarms */
    includeMe: boolean
    lastNotified: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAlarms */
    dupLastNotified(): string | null
    getIncludeMe(): boolean
    getLastNotified(): string | null
    setIncludeMe(includeMe: boolean): void
    setLastNotified(lastNotified?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::include-me", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-me", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-notified", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-notified", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-notified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-notified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-notified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceAlarms_ConstructProps)
    _init (config?: SourceAlarms_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceAuthentication_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceAuthentication */
    credentialName?: string
    host?: string
    isExternal?: boolean
    method?: string
    port?: number
    proxyUid?: string
    rememberPassword?: boolean
    user?: string
}
class SourceAuthentication {
    /* Properties of EDataServer-1.2.EDataServer.SourceAuthentication */
    readonly connectable: Gio.SocketConnectable
    credentialName: string
    host: string
    isExternal: boolean
    method: string
    port: number
    proxyUid: string
    rememberPassword: boolean
    user: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAuthentication */
    dupCredentialName(): string | null
    dupHost(): string | null
    dupMethod(): string | null
    dupProxyUid(): string
    dupUser(): string | null
    getCredentialName(): string | null
    getHost(): string | null
    getIsExternal(): boolean
    getMethod(): string | null
    getPort(): number
    getProxyUid(): string
    getRememberPassword(): boolean
    getUser(): string | null
    refConnectable(): Gio.SocketConnectable | null
    required(): boolean
    setCredentialName(credentialName?: string | null): void
    setHost(host?: string | null): void
    setIsExternal(isExternal: boolean): void
    setMethod(method?: string | null): void
    setPort(port: number): void
    setProxyUid(proxyUid: string): void
    setRememberPassword(rememberPassword: boolean): void
    setUser(user?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::credential-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credential-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::credential-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::credential-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::credential-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-external", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-external", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-external", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-external", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-external", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remember-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remember-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remember-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remember-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remember-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceAuthentication_ConstructProps)
    _init (config?: SourceAuthentication_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceAutocomplete_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceAutocomplete */
    includeMe?: boolean
}
class SourceAutocomplete {
    /* Properties of EDataServer-1.2.EDataServer.SourceAutocomplete */
    includeMe: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAutocomplete */
    getIncludeMe(): boolean
    setIncludeMe(includeMe: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::include-me", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-me", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceAutocomplete_ConstructProps)
    _init (config?: SourceAutocomplete_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceAutoconfig_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceAutoconfig */
    revision?: string
}
class SourceAutoconfig {
    /* Properties of EDataServer-1.2.EDataServer.SourceAutoconfig */
    revision: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAutoconfig */
    dupRevision(): string
    getRevision(): string
    setRevision(revision: string): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::revision", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceAutoconfig_ConstructProps)
    _init (config?: SourceAutoconfig_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceBackend_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName?: string
}
class SourceBackend {
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceBackend_ConstructProps)
    _init (config?: SourceBackend_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceCalendar_ConstructProps extends SourceSelectable_ConstructProps {
}
class SourceCalendar {
    /* Properties of EDataServer-1.2.EDataServer.SourceSelectable */
    color: string
    order: number
    selected: boolean
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSelectable */
    dupColor(): string | null
    getColor(): string | null
    getOrder(): number
    getSelected(): boolean
    setColor(color?: string | null): void
    setOrder(order: number): void
    setSelected(selected: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceCalendar_ConstructProps)
    _init (config?: SourceCalendar_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceCamel_ConstructProps extends SourceExtension_ConstructProps {
}
class SourceCamel {
    /* Properties of EDataServer-1.2.EDataServer.SourceCamel */
    readonly settings: Camel.Settings
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCamel */
    getSettings(): Camel.Settings
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceCamel_ConstructProps)
    _init (config?: SourceCamel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static generateSubtype(protocol: string, settingsType: GObject.Type): GObject.Type
    static getExtensionName(protocol: string): string
    static getTypeName(protocol: string): string
    static registerTypes(): void
    static $gtype: GObject.Type
}
interface SourceCollection_ConstructProps extends SourceBackend_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceCollection */
    allowSourcesRename?: boolean
    calendarEnabled?: boolean
    calendarUrl?: string
    contactsEnabled?: boolean
    contactsUrl?: string
    identity?: string
    mailEnabled?: boolean
}
class SourceCollection {
    /* Properties of EDataServer-1.2.EDataServer.SourceCollection */
    allowSourcesRename: boolean
    calendarEnabled: boolean
    calendarUrl: string
    contactsEnabled: boolean
    contactsUrl: string
    identity: string
    mailEnabled: boolean
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCollection */
    dupCalendarUrl(): string | null
    dupContactsUrl(): string | null
    dupIdentity(): string | null
    getAllowSourcesRename(): boolean
    getCalendarEnabled(): boolean
    getCalendarUrl(): string | null
    getContactsEnabled(): boolean
    getContactsUrl(): string | null
    getIdentity(): string | null
    getMailEnabled(): boolean
    setAllowSourcesRename(allowSourcesRename: boolean): void
    setCalendarEnabled(calendarEnabled: boolean): void
    setCalendarUrl(calendarUrl?: string | null): void
    setContactsEnabled(contactsEnabled: boolean): void
    setContactsUrl(contactsUrl?: string | null): void
    setIdentity(identity?: string | null): void
    setMailEnabled(mailEnabled: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::allow-sources-rename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-sources-rename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-sources-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-sources-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-sources-rename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceCollection_ConstructProps)
    _init (config?: SourceCollection_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceContacts_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceContacts */
    includeMe?: boolean
}
class SourceContacts {
    /* Properties of EDataServer-1.2.EDataServer.SourceContacts */
    includeMe: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceContacts */
    getIncludeMe(): boolean
    setIncludeMe(includeMe: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::include-me", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-me", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::include-me", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceContacts_ConstructProps)
    _init (config?: SourceContacts_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceCredentialsProvider_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceCredentialsProvider */
    registry?: GObject.Object
}
class SourceCredentialsProvider {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider */
    canPrompt(source: Source): boolean
    canStore(source: Source): boolean
    delete(source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    deleteSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    lookup(source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    lookupSync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    refCredentialsSource(source: Source): Source
    refRegistry(): GObject.Object
    refSource(uid: string): Source
    registerImpl(providerImpl: SourceCredentialsProviderImpl): boolean
    store(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    storeFinish(result: Gio.AsyncResult): boolean
    storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    unregisterImpl(providerImpl: SourceCredentialsProviderImpl): void
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
    constructor (config?: SourceCredentialsProvider_ConstructProps)
    _init (config?: SourceCredentialsProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: SourceRegistry): SourceCredentialsProvider
    static $gtype: GObject.Type
}
interface SourceCredentialsProviderImpl_ConstructProps extends Extension_ConstructProps {
}
class SourceCredentialsProviderImpl {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    canProcess(source: Source): boolean
    canPrompt(): boolean
    canStore(): boolean
    deleteSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    getProvider(): object | null
    lookupSync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): Extensible
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
    constructor (config?: SourceCredentialsProviderImpl_ConstructProps)
    _init (config?: SourceCredentialsProviderImpl_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceCredentialsProviderImplOAuth2_ConstructProps extends SourceCredentialsProviderImpl_ConstructProps {
}
class SourceCredentialsProviderImplOAuth2 {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    canProcess(source: Source): boolean
    canPrompt(): boolean
    canStore(): boolean
    deleteSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    getProvider(): object | null
    lookupSync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): Extensible
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
    constructor (config?: SourceCredentialsProviderImplOAuth2_ConstructProps)
    _init (config?: SourceCredentialsProviderImplOAuth2_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceCredentialsProviderImplPassword_ConstructProps extends SourceCredentialsProviderImpl_ConstructProps {
}
class SourceCredentialsProviderImplPassword {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    canProcess(source: Source): boolean
    canPrompt(): boolean
    canStore(): boolean
    deleteSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    getProvider(): object | null
    lookupSync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    storeSync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    getExtensible(): Extensible
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
    constructor (config?: SourceCredentialsProviderImplPassword_ConstructProps)
    _init (config?: SourceCredentialsProviderImplPassword_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceExtension_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceExtension */
    source?: Source
}
class SourceExtension {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    constructor (config?: SourceExtension_ConstructProps)
    _init (config?: SourceExtension_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceGoa_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceGoa */
    accountId?: string
    address?: string
    calendarUrl?: string
    contactsUrl?: string
    name?: string
}
class SourceGoa {
    /* Properties of EDataServer-1.2.EDataServer.SourceGoa */
    accountId: string
    address: string
    calendarUrl: string
    contactsUrl: string
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceGoa */
    dupAccountId(): string | null
    dupAddress(): string | null
    dupCalendarUrl(): string | null
    dupContactsUrl(): string | null
    dupName(): string | null
    getAccountId(): string | null
    getAddress(): string | null
    getCalendarUrl(): string | null
    getContactsUrl(): string | null
    getName(): string | null
    setAccountId(accountId?: string | null): void
    setAddress(address?: string | null): void
    setCalendarUrl(calendarUrl?: string | null): void
    setContactsUrl(contactsUrl?: string | null): void
    setName(name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::account-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contacts-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contacts-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contacts-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contacts-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: SourceGoa_ConstructProps)
    _init (config?: SourceGoa_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceLDAP_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceLDAP */
    authentication?: SourceLDAPAuthentication
    canBrowse?: boolean
    filter?: string
    limit?: number
    rootDn?: string
    scope?: SourceLDAPScope
    security?: SourceLDAPSecurity
}
class SourceLDAP {
    /* Properties of EDataServer-1.2.EDataServer.SourceLDAP */
    authentication: SourceLDAPAuthentication
    canBrowse: boolean
    filter: string
    limit: number
    rootDn: string
    scope: SourceLDAPScope
    security: SourceLDAPSecurity
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceLDAP */
    dupFilter(): string
    dupRootDn(): string
    getAuthentication(): SourceLDAPAuthentication
    getCanBrowse(): boolean
    getFilter(): string
    getLimit(): number
    getRootDn(): string
    getScope(): SourceLDAPScope
    getSecurity(): SourceLDAPSecurity
    setAuthentication(authentication: SourceLDAPAuthentication): void
    setCanBrowse(canBrowse: boolean): void
    setFilter(filter: string): void
    setLimit(limit: number): void
    setRootDn(rootDn: string): void
    setScope(scope: SourceLDAPScope): void
    setSecurity(security: SourceLDAPSecurity): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::authentication", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authentication", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authentication", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authentication", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authentication", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-browse", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-browse", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-browse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-browse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-browse", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root-dn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-dn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root-dn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root-dn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root-dn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceLDAP_ConstructProps)
    _init (config?: SourceLDAP_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceLocal_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceLocal */
    customFile?: Gio.File
    emailAddress?: string
    writable?: boolean
}
class SourceLocal {
    /* Properties of EDataServer-1.2.EDataServer.SourceLocal */
    customFile: Gio.File
    emailAddress: string
    writable: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceLocal */
    dupCustomFile(): Gio.File | null
    dupEmailAddress(): string
    getCustomFile(): Gio.File | null
    getEmailAddress(): string | null
    getWritable(): boolean
    setCustomFile(customFile?: Gio.File | null): void
    setEmailAddress(emailAddress?: string | null): void
    setWritable(writable: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::custom-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::custom-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::custom-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::custom-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceLocal_ConstructProps)
    _init (config?: SourceLocal_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMDN_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMDN */
    responsePolicy?: MdnResponsePolicy
}
class SourceMDN {
    /* Properties of EDataServer-1.2.EDataServer.SourceMDN */
    responsePolicy: MdnResponsePolicy
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMDN */
    getResponsePolicy(): MdnResponsePolicy
    setResponsePolicy(responsePolicy: MdnResponsePolicy): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::response-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceMDN_ConstructProps)
    _init (config?: SourceMDN_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailAccount_ConstructProps extends SourceBackend_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailAccount */
    archiveFolder?: string
    identityUid?: string
    markSeen?: ThreeState
    markSeenTimeout?: number
    needsInitialSetup?: boolean
}
class SourceMailAccount {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailAccount */
    archiveFolder: string
    identityUid: string
    markSeen: ThreeState
    markSeenTimeout: number
    needsInitialSetup: boolean
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailAccount */
    dupArchiveFolder(): string | null
    dupIdentityUid(): string | null
    getArchiveFolder(): string | null
    getIdentityUid(): string | null
    getMarkSeen(): ThreeState
    getMarkSeenTimeout(): number
    getNeedsInitialSetup(): boolean
    setArchiveFolder(archiveFolder?: string | null): void
    setIdentityUid(identityUid?: string | null): void
    setMarkSeen(markSeen: ThreeState): void
    setMarkSeenTimeout(timeout: number): void
    setNeedsInitialSetup(needsInitialSetup: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::archive-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::archive-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::archive-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::archive-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mark-seen", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mark-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mark-seen-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mark-seen-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::needs-initial-setup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::needs-initial-setup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::needs-initial-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::needs-initial-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::needs-initial-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceMailAccount_ConstructProps)
    _init (config?: SourceMailAccount_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailComposition_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailComposition */
    bcc?: string[]
    cc?: string[]
    draftsFolder?: string
    language?: string
    replyStyle?: SourceMailCompositionReplyStyle
    signImip?: boolean
    startBottom?: ThreeState
    templatesFolder?: string
    topSignature?: ThreeState
}
class SourceMailComposition {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailComposition */
    bcc: string[]
    cc: string[]
    draftsFolder: string
    language: string
    replyStyle: SourceMailCompositionReplyStyle
    signImip: boolean
    startBottom: ThreeState
    templatesFolder: string
    topSignature: ThreeState
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailComposition */
    dupBcc(): string[]
    dupCc(): string[]
    dupDraftsFolder(): string | null
    dupLanguage(): string | null
    dupTemplatesFolder(): string | null
    getBcc(): string[]
    getCc(): string[]
    getDraftsFolder(): string | null
    getLanguage(): string | null
    getReplyStyle(): SourceMailCompositionReplyStyle
    getSignImip(): boolean
    getStartBottom(): ThreeState
    getTemplatesFolder(): string | null
    getTopSignature(): ThreeState
    setBcc(bcc: string[]): void
    setCc(cc: string[]): void
    setDraftsFolder(draftsFolder?: string | null): void
    setLanguage(language?: string | null): void
    setReplyStyle(replyStyle: SourceMailCompositionReplyStyle): void
    setSignImip(signImip: boolean): void
    setStartBottom(startBottom: ThreeState): void
    setTemplatesFolder(templatesFolder?: string | null): void
    setTopSignature(topSignature: ThreeState): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::bcc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bcc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bcc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bcc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bcc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::drafts-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drafts-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::drafts-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::drafts-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::drafts-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reply-style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reply-style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reply-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reply-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reply-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sign-imip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sign-imip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sign-imip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sign-imip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sign-imip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::templates-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::templates-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::templates-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::templates-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::templates-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::top-signature", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-signature", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::top-signature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::top-signature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::top-signature", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceMailComposition_ConstructProps)
    _init (config?: SourceMailComposition_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailIdentity_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailIdentity */
    address?: string
    aliases?: string
    name?: string
    organization?: string
    replyTo?: string
    signatureUid?: string
}
class SourceMailIdentity {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailIdentity */
    address: string
    aliases: string
    name: string
    organization: string
    replyTo: string
    signatureUid: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailIdentity */
    dupAddress(): string | null
    dupAliases(): string | null
    dupName(): string | null
    dupOrganization(): string | null
    dupReplyTo(): string | null
    dupSignatureUid(): string | null
    getAddress(): string | null
    getAliases(): string | null
    getAliasesAsHashTable(): GLib.HashTable | null
    getName(): string | null
    getOrganization(): string | null
    getReplyTo(): string | null
    getSignatureUid(): string | null
    setAddress(address?: string | null): void
    setAliases(aliases?: string | null): void
    setName(name?: string | null): void
    setOrganization(organization?: string | null): void
    setReplyTo(replyTo?: string | null): void
    setSignatureUid(signatureUid?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::organization", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::organization", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::organization", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::organization", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::organization", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reply-to", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reply-to", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reply-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reply-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reply-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::signature-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signature-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signature-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signature-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceMailIdentity_ConstructProps)
    _init (config?: SourceMailIdentity_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailSignature_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailSignature */
    mimeType?: string
}
class SourceMailSignature {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailSignature */
    readonly file: Gio.File
    mimeType: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailSignature */
    dupMimeType(): string | null
    getFile(): Gio.File
    getMimeType(): string | null
    setMimeType(mimeType?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceMailSignature_ConstructProps)
    _init (config?: SourceMailSignature_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailSubmission_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailSubmission */
    repliesToOriginFolder?: boolean
    sentFolder?: string
    transportUid?: string
    useSentFolder?: boolean
}
class SourceMailSubmission {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailSubmission */
    repliesToOriginFolder: boolean
    sentFolder: string
    transportUid: string
    useSentFolder: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailSubmission */
    dupSentFolder(): string | null
    dupTransportUid(): string | null
    getRepliesToOriginFolder(): boolean
    getSentFolder(): string | null
    getTransportUid(): string | null
    getUseSentFolder(): boolean
    setRepliesToOriginFolder(repliesToOriginFolder: boolean): void
    setSentFolder(sentFolder?: string | null): void
    setTransportUid(transportUid?: string | null): void
    setUseSentFolder(useSentFolder: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::replies-to-origin-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::replies-to-origin-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::replies-to-origin-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::replies-to-origin-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::replies-to-origin-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sent-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sent-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sent-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sent-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sent-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-sent-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-sent-folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-sent-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-sent-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-sent-folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceMailSubmission_ConstructProps)
    _init (config?: SourceMailSubmission_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailTransport_ConstructProps extends SourceBackend_ConstructProps {
}
class SourceMailTransport {
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceMailTransport_ConstructProps)
    _init (config?: SourceMailTransport_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMemoList_ConstructProps extends SourceSelectable_ConstructProps {
}
class SourceMemoList {
    /* Properties of EDataServer-1.2.EDataServer.SourceSelectable */
    color: string
    order: number
    selected: boolean
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSelectable */
    dupColor(): string | null
    getColor(): string | null
    getOrder(): number
    getSelected(): boolean
    setColor(color?: string | null): void
    setOrder(order: number): void
    setSelected(selected: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceMemoList_ConstructProps)
    _init (config?: SourceMemoList_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceOffline_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceOffline */
    staySynchronized?: boolean
}
class SourceOffline {
    /* Properties of EDataServer-1.2.EDataServer.SourceOffline */
    staySynchronized: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceOffline */
    getStaySynchronized(): boolean
    setStaySynchronized(staySynchronized: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::stay-synchronized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stay-synchronized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceOffline_ConstructProps)
    _init (config?: SourceOffline_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceOpenPGP_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceOpenPGP */
    alwaysTrust?: boolean
    encryptByDefault?: boolean
    encryptToSelf?: boolean
    keyId?: string
    preferInline?: boolean
    signByDefault?: boolean
    signingAlgorithm?: string
}
class SourceOpenPGP {
    /* Properties of EDataServer-1.2.EDataServer.SourceOpenPGP */
    alwaysTrust: boolean
    encryptByDefault: boolean
    encryptToSelf: boolean
    keyId: string
    preferInline: boolean
    signByDefault: boolean
    signingAlgorithm: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceOpenPGP */
    dupKeyId(): string
    dupSigningAlgorithm(): string
    getAlwaysTrust(): boolean
    getEncryptByDefault(): boolean
    getEncryptToSelf(): boolean
    getKeyId(): string
    getPreferInline(): boolean
    getSignByDefault(): boolean
    getSigningAlgorithm(): string
    setAlwaysTrust(alwaysTrust: boolean): void
    setEncryptByDefault(encryptByDefault: boolean): void
    setEncryptToSelf(encryptToSelf: boolean): void
    setKeyId(keyId: string): void
    setPreferInline(preferInline: boolean): void
    setSignByDefault(signByDefault: boolean): void
    setSigningAlgorithm(signingAlgorithm: string): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::always-trust", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-trust", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encrypt-by-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypt-by-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encrypt-to-self", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypt-to-self", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefer-inline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefer-inline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sign-by-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sign-by-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::signing-algorithm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signing-algorithm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceOpenPGP_ConstructProps)
    _init (config?: SourceOpenPGP_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceProxy_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceProxy */
    autoconfigUrl?: string
    ftpHost?: string
    ftpPort?: number
    httpAuthPassword?: string
    httpAuthUser?: string
    httpHost?: string
    httpPort?: number
    httpUseAuth?: boolean
    httpsHost?: string
    httpsPort?: number
    ignoreHosts?: string[]
    method?: ProxyMethod
    socksHost?: string
    socksPort?: number
}
class SourceProxy {
    /* Properties of EDataServer-1.2.EDataServer.SourceProxy */
    autoconfigUrl: string
    ftpHost: string
    ftpPort: number
    httpAuthPassword: string
    httpAuthUser: string
    httpHost: string
    httpPort: number
    httpUseAuth: boolean
    httpsHost: string
    httpsPort: number
    ignoreHosts: string[]
    method: ProxyMethod
    socksHost: string
    socksPort: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceProxy */
    dupAutoconfigUrl(): string
    dupFtpHost(): string
    dupHttpAuthPassword(): string
    dupHttpAuthUser(): string
    dupHttpHost(): string
    dupHttpsHost(): string
    dupIgnoreHosts(): string[]
    dupSocksHost(): string
    getAutoconfigUrl(): string
    getFtpHost(): string
    getFtpPort(): number
    getHttpAuthPassword(): string
    getHttpAuthUser(): string
    getHttpHost(): string
    getHttpPort(): number
    getHttpUseAuth(): boolean
    getHttpsHost(): string
    getHttpsPort(): number
    getIgnoreHosts(): string[]
    getMethod(): ProxyMethod
    getSocksHost(): string
    getSocksPort(): number
    setAutoconfigUrl(autoconfigUrl: string): void
    setFtpHost(ftpHost: string): void
    setFtpPort(ftpPort: number): void
    setHttpAuthPassword(httpAuthPassword: string): void
    setHttpAuthUser(httpAuthUser: string): void
    setHttpHost(httpHost: string): void
    setHttpPort(httpPort: number): void
    setHttpUseAuth(httpUseAuth: boolean): void
    setHttpsHost(httpsHost: string): void
    setHttpsPort(httpsPort: number): void
    setIgnoreHosts(ignoreHosts: string): void
    setMethod(method: ProxyMethod): void
    setSocksHost(socksHost: string): void
    setSocksPort(socksPort: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::autoconfig-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconfig-url", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconfig-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconfig-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconfig-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ftp-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ftp-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ftp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ftp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ftp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ftp-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ftp-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ftp-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ftp-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ftp-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-auth-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-auth-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-auth-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-auth-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-auth-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-auth-user", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-auth-user", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-auth-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-auth-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-auth-user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-use-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-use-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::https-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::https-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::https-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::https-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::https-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::https-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::https-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::https-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-hosts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-hosts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-hosts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socks-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socks-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socks-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socks-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socks-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socks-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socks-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socks-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socks-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socks-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceProxy_ConstructProps)
    _init (config?: SourceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceRefresh_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceRefresh */
    enabled?: boolean
    intervalMinutes?: number
}
class SourceRefresh {
    /* Properties of EDataServer-1.2.EDataServer.SourceRefresh */
    enabled: boolean
    intervalMinutes: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceRefresh */
    getEnabled(): boolean
    getIntervalMinutes(): number
    setEnabled(enabled: boolean): void
    setIntervalMinutes(intervalMinutes: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interval-minutes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interval-minutes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interval-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interval-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interval-minutes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceRefresh_ConstructProps)
    _init (config?: SourceRefresh_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceRegistry_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceRegistry */
    defaultAddressBook?: Source
    defaultCalendar?: Source
    defaultMailAccount?: Source
    defaultMailIdentity?: Source
    defaultMemoList?: Source
    defaultTaskList?: Source
}
class SourceRegistry {
    /* Properties of EDataServer-1.2.EDataServer.SourceRegistry */
    defaultAddressBook: Source
    defaultCalendar: Source
    defaultMailAccount: Source
    defaultMailIdentity: Source
    defaultMemoList: Source
    defaultTaskList: Source
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceRegistry */
    checkEnabled(source: Source): boolean
    commitSource(source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    commitSourceFinish(result: Gio.AsyncResult): boolean
    commitSourceSync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    createSources(listOfSources: Source[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createSourcesFinish(result: Gio.AsyncResult): boolean
    createSourcesSync(listOfSources: Source[], cancellable?: Gio.Cancellable | null): boolean
    debugDump(extensionName?: string | null): void
    dupUniqueDisplayName(source: Source, extensionName?: string | null): string
    findExtension(source: Source, extensionName: string): Source | null
    getOauth2Services(): OAuth2Services
    listEnabled(extensionName?: string | null): Source[]
    listSources(extensionName?: string | null): Source[]
    refBuiltinAddressBook(): Source
    refBuiltinCalendar(): Source
    refBuiltinMailAccount(): Source
    refBuiltinMemoList(): Source
    refBuiltinProxy(): Source
    refBuiltinTaskList(): Source
    refDefaultAddressBook(): Source
    refDefaultCalendar(): Source
    refDefaultForExtensionName(extensionName: string): Source | null
    refDefaultMailAccount(): Source
    refDefaultMailIdentity(): Source
    refDefaultMemoList(): Source
    refDefaultTaskList(): Source
    refSource(uid: string): Source | null
    refreshBackend(sourceUid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshBackendFinish(result: Gio.AsyncResult): boolean
    refreshBackendSync(sourceUid: string, cancellable?: Gio.Cancellable | null): boolean
    setDefaultAddressBook(defaultSource?: Source | null): void
    setDefaultCalendar(defaultSource?: Source | null): void
    setDefaultForExtensionName(extensionName: string, defaultSource?: Source | null): void
    setDefaultMailAccount(defaultSource?: Source | null): void
    setDefaultMailIdentity(defaultSource?: Source | null): void
    setDefaultMemoList(defaultSource?: Source | null): void
    setDefaultTaskList(defaultSource?: Source | null): void
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
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of EDataServer-1.2.EDataServer.SourceRegistry */
    connect(sigName: "credentials-required", callback: ((source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void)): number
    on(sigName: "credentials-required", callback: (source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "credentials-required", callback: (source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "credentials-required", callback: (source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "credentials-required", source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error): void
    connect(sigName: "source-added", callback: ((source: Source) => void)): number
    on(sigName: "source-added", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "source-added", source: Source): void
    connect(sigName: "source-changed", callback: ((source: Source) => void)): number
    on(sigName: "source-changed", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-changed", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-changed", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "source-changed", source: Source): void
    connect(sigName: "source-disabled", callback: ((source: Source) => void)): number
    on(sigName: "source-disabled", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-disabled", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-disabled", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "source-disabled", source: Source): void
    connect(sigName: "source-enabled", callback: ((source: Source) => void)): number
    on(sigName: "source-enabled", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-enabled", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-enabled", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "source-enabled", source: Source): void
    connect(sigName: "source-removed", callback: ((source: Source) => void)): number
    on(sigName: "source-removed", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "source-removed", source: Source): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-address-book", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-address-book", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-address-book", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-address-book", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-address-book", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-calendar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-calendar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-mail-account", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-mail-account", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-mail-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-mail-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-mail-account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-mail-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-mail-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-mail-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-mail-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-mail-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-memo-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-memo-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-memo-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-memo-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-memo-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-task-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-task-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-task-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-task-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-task-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceRegistry_ConstructProps)
    _init (config?: SourceRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(result: Gio.AsyncResult): SourceRegistry
    static newSync(cancellable?: Gio.Cancellable | null): SourceRegistry
    static debugEnabled(): boolean
    static freeDisplayTree(displayTree: GLib.Node): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface SourceRegistryWatcher_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceRegistryWatcher */
    extensionName?: string
    registry?: SourceRegistry
}
class SourceRegistryWatcher {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceRegistryWatcher */
    getExtensionName(): string | null
    getRegistry(): SourceRegistry
    reclaim(): void
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
    /* Signals of EDataServer-1.2.EDataServer.SourceRegistryWatcher */
    connect(sigName: "appeared", callback: ((source: Source) => void)): number
    on(sigName: "appeared", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "appeared", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "appeared", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "appeared", source: Source): void
    connect(sigName: "disappeared", callback: ((source: Source) => void)): number
    on(sigName: "disappeared", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disappeared", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disappeared", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "disappeared", source: Source): void
    connect(sigName: "filter", callback: ((source: Source) => boolean)): number
    on(sigName: "filter", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filter", callback: (source: Source) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filter", callback: (source: Source) => void): NodeJS.EventEmitter
    emit(sigName: "filter", source: Source): void
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
    constructor (config?: SourceRegistryWatcher_ConstructProps)
    _init (config?: SourceRegistryWatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: SourceRegistry, extensionName?: string | null): SourceRegistryWatcher
    static $gtype: GObject.Type
}
interface SourceResource_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceResource */
    identity?: string
}
class SourceResource {
    /* Properties of EDataServer-1.2.EDataServer.SourceResource */
    identity: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceResource */
    dupIdentity(): string | null
    getIdentity(): string | null
    setIdentity(identity?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceResource_ConstructProps)
    _init (config?: SourceResource_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceRevisionGuards_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceRevisionGuards */
    enabled?: boolean
}
class SourceRevisionGuards {
    /* Properties of EDataServer-1.2.EDataServer.SourceRevisionGuards */
    enabled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceRevisionGuards */
    getEnabled(): boolean
    setEnabled(enabled: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceRevisionGuards_ConstructProps)
    _init (config?: SourceRevisionGuards_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceSMIME_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceSMIME */
    encryptByDefault?: boolean
    encryptToSelf?: boolean
    encryptionCertificate?: string
    signByDefault?: boolean
    signingAlgorithm?: string
    signingCertificate?: string
}
class SourceSMIME {
    /* Properties of EDataServer-1.2.EDataServer.SourceSMIME */
    encryptByDefault: boolean
    encryptToSelf: boolean
    encryptionCertificate: string
    signByDefault: boolean
    signingAlgorithm: string
    signingCertificate: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSMIME */
    dupEncryptionCertificate(): string | null
    dupSigningAlgorithm(): string | null
    dupSigningCertificate(): string | null
    getEncryptByDefault(): boolean
    getEncryptToSelf(): boolean
    getEncryptionCertificate(): string | null
    getSignByDefault(): boolean
    getSigningAlgorithm(): string | null
    getSigningCertificate(): string | null
    setEncryptByDefault(encryptByDefault: boolean): void
    setEncryptToSelf(encryptToSelf: boolean): void
    setEncryptionCertificate(encryptionCertificate?: string | null): void
    setSignByDefault(signByDefault: boolean): void
    setSigningAlgorithm(signingAlgorithm?: string | null): void
    setSigningCertificate(signingCertificate?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::encrypt-by-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypt-by-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encrypt-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encrypt-to-self", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypt-to-self", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encrypt-to-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encryption-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encryption-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encryption-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encryption-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encryption-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sign-by-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sign-by-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sign-by-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::signing-algorithm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signing-algorithm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signing-algorithm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::signing-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signing-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::signing-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::signing-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::signing-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceSMIME_ConstructProps)
    _init (config?: SourceSMIME_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceSecurity_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceSecurity */
    method?: string
    secure?: boolean
}
class SourceSecurity {
    /* Properties of EDataServer-1.2.EDataServer.SourceSecurity */
    method: string
    secure: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSecurity */
    dupMethod(): string
    getMethod(): string
    getSecure(): boolean
    setMethod(method?: string | null): void
    setSecure(secure: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secure", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceSecurity_ConstructProps)
    _init (config?: SourceSecurity_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceSelectable_ConstructProps extends SourceBackend_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceSelectable */
    color?: string
    order?: number
    selected?: boolean
}
class SourceSelectable {
    /* Properties of EDataServer-1.2.EDataServer.SourceSelectable */
    color: string
    order: number
    selected: boolean
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSelectable */
    dupColor(): string | null
    getColor(): string | null
    getOrder(): number
    getSelected(): boolean
    setColor(color?: string | null): void
    setOrder(order: number): void
    setSelected(selected: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceSelectable_ConstructProps)
    _init (config?: SourceSelectable_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceTaskList_ConstructProps extends SourceSelectable_ConstructProps {
}
class SourceTaskList {
    /* Properties of EDataServer-1.2.EDataServer.SourceSelectable */
    color: string
    order: number
    selected: boolean
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backendName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSelectable */
    dupColor(): string | null
    getColor(): string | null
    getOrder(): number
    getSelected(): boolean
    setColor(color?: string | null): void
    setOrder(order: number): void
    setSelected(selected: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dupBackendName(): string | null
    getBackendName(): string | null
    setBackendName(backendName?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::backend-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceTaskList_ConstructProps)
    _init (config?: SourceTaskList_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceUoa_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceUoa */
    accountId?: number
}
class SourceUoa {
    /* Properties of EDataServer-1.2.EDataServer.SourceUoa */
    accountId: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceUoa */
    getAccountId(): number
    setAccountId(accountId: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::account-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::account-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::account-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::account-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceUoa_ConstructProps)
    _init (config?: SourceUoa_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceWeather_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceWeather */
    location?: string
    units?: SourceWeatherUnits
}
class SourceWeather {
    /* Properties of EDataServer-1.2.EDataServer.SourceWeather */
    location: string
    units: SourceWeatherUnits
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceWeather */
    dupLocation(): string
    getLocation(): string
    getUnits(): SourceWeatherUnits
    setLocation(location: string): void
    setUnits(units: SourceWeatherUnits): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::units", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::units", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::units", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceWeather_ConstructProps)
    _init (config?: SourceWeather_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceWebDAVNotes_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes */
    defaultExt?: string
}
class SourceWebDAVNotes {
    /* Properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes */
    defaultExt: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceWebDAVNotes */
    dupDefaultExt(): string | null
    getDefaultExt(): string | null
    setDefaultExt(defaultExt?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::default-ext", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-ext", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-ext", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-ext", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-ext", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceWebDAVNotes_ConstructProps)
    _init (config?: SourceWebDAVNotes_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceWebdav_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceWebdav */
    avoidIfmatch?: boolean
    calendarAutoSchedule?: boolean
    color?: string
    displayName?: string
    emailAddress?: string
    order?: number
    resourcePath?: string
    resourceQuery?: string
    soupUri?: Soup.URI
    sslTrust?: string
}
class SourceWebdav {
    /* Properties of EDataServer-1.2.EDataServer.SourceWebdav */
    avoidIfmatch: boolean
    calendarAutoSchedule: boolean
    color: string
    displayName: string
    emailAddress: string
    order: number
    resourcePath: string
    resourceQuery: string
    soupUri: Soup.URI
    sslTrust: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceWebdav */
    dupColor(): string | null
    dupDisplayName(): string | null
    dupEmailAddress(): string | null
    dupResourcePath(): string | null
    dupResourceQuery(): string | null
    dupSoupUri(): Soup.URI
    dupSslTrust(): string | null
    getAvoidIfmatch(): boolean
    getCalendarAutoSchedule(): boolean
    getColor(): string | null
    getDisplayName(): string | null
    getEmailAddress(): string | null
    getOrder(): number
    getResourcePath(): string | null
    getResourceQuery(): string | null
    getSslTrust(): string | null
    getSslTrustResponse(): TrustPromptResponse
    setAvoidIfmatch(avoidIfmatch: boolean): void
    setCalendarAutoSchedule(calendarAutoSchedule: boolean): void
    setColor(color?: string | null): void
    setDisplayName(displayName?: string | null): void
    setEmailAddress(emailAddress?: string | null): void
    setOrder(order: number): void
    setResourcePath(resourcePath?: string | null): void
    setResourceQuery(resourceQuery?: string | null): void
    setSoupUri(soupUri: Soup.URI): void
    setSslTrust(sslTrust?: string | null): void
    setSslTrustResponse(response: TrustPromptResponse): void
    unsetTemporarySslTrust(): void
    updateSslTrust(host: string, cert: Gio.TlsCertificate, response: TrustPromptResponse): void
    verifySslTrust(host: string, cert: Gio.TlsCertificate, certErrors: Gio.TlsCertificateFlags): TrustPromptResponse
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    getSource(): Source
    propertyLock(): void
    propertyUnlock(): void
    refSource(): Source
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
    connect(sigName: "notify::avoid-ifmatch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avoid-ifmatch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avoid-ifmatch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avoid-ifmatch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avoid-ifmatch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::calendar-auto-schedule", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-auto-schedule", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::calendar-auto-schedule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::calendar-auto-schedule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::calendar-auto-schedule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-query", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-query", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-query", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::soup-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::soup-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::soup-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::soup-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::soup-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-trust", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-trust", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-trust", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SourceWebdav_ConstructProps)
    _init (config?: SourceWebdav_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebDAVSession_ConstructProps extends SoupSession_ConstructProps {
}
class WebDAVSession {
    /* Properties of EDataServer-1.2.EDataServer.SoupSession */
    credentials: NamedParameters
    /* Properties of Soup-2.4.Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    httpAliases: string[]
    httpsAliases: string[]
    idleTimeout: number
    maxConns: number
    maxConnsPerHost: number
    proxyResolver: Gio.ProxyResolver
    proxyUri: Soup.URI
    sslCaFile: string
    sslStrict: boolean
    sslUseSystemCaFile: boolean
    timeout: number
    tlsDatabase: Gio.TlsDatabase
    tlsInteraction: Gio.TlsInteraction
    useNtlm: boolean
    useThreadContext: boolean
    userAgent: string
    /* Fields of Soup-2.4.Soup.Session */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.WebDAVSession */
    aclSync(uri: string | null, xml: XmlDocument, cancellable?: Gio.Cancellable | null): boolean
    copySync(sourceUri: string, destinationUri: string, depth: string, canOverwrite: boolean, cancellable?: Gio.Cancellable | null): boolean
    deleteSync(uri: string, depth?: string | null, etag?: string | null, cancellable?: Gio.Cancellable | null): boolean
    ensureFullUri(requestUri: Soup.URI | null, href: string): string
    getAclRestrictionsSync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outRestrictions */ number, /* outPrincipalKind */ WebDAVACEPrincipalKind, /* outPrincipalHrefs */ string[] ]
    getAclSync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEntries */ WebDAVAccessControlEntry[] ]
    getCurrentUserPrivilegeSetSync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrivileges */ WebDAVPrivilege[] ]
    getDataSync(uri: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null, /* outBytes */ string, /* outLength */ number | null ]
    getLastDavErrorCode(): string
    getLastDavErrorIsPermission(): boolean
    getPrincipalCollectionSetSync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrincipalHrefs */ string[] ]
    getSupportedPrivilegeSetSync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrivileges */ GLib.Node ]
    getSync(uri: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null, /* outStream */ Gio.OutputStream ]
    getctagSync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCtag */ string ]
    listSync(uri: string | null, depth: string, flags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outResources */ WebDAVResource[] ]
    lockResourceSync(uri: string | null, lockScope: WebDAVLockScope, lockTimeout: number, owner?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLockToken */ string ]
    lockSync(uri: string | null, depth: string, lockTimeout: number, xml: XmlDocument, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outLockToken */ string, /* outXmlResponse */ libxml2.Doc | null ]
    mkcalendarSync(uri: string, displayName: string | null, description: string | null, color: string | null, supports: number, cancellable?: Gio.Cancellable | null): boolean
    mkcolAddressbookSync(uri: string, displayName?: string | null, description?: string | null, cancellable?: Gio.Cancellable | null): boolean
    mkcolSync(uri: string, cancellable?: Gio.Cancellable | null): boolean
    moveSync(sourceUri: string, destinationUri: string, canOverwrite: boolean, cancellable?: Gio.Cancellable | null): boolean
    newRequest(method: string, uri?: string | null): Soup.RequestHTTP
    optionsSync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCapabilities */ GLib.HashTable, /* outAllows */ GLib.HashTable ]
    postSync(uri: string | null, data: string, dataLength: number, outContentType?: string | null, outContent?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    postWithContentTypeSync(uri: string | null, data: string, dataLength: number, inContentType?: string | null, outContentType?: string | null, outContent?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    principalPropertySearchSync(uri: string | null, applyToPrincipalCollectionSet: boolean, matchNsUri: string | null, matchProperty: string, matchValue: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPrincipals */ WebDAVResource[] ]
    propfindSync(uri: string | null, depth: string, xml?: XmlDocument | null, cancellable?: Gio.Cancellable | null): boolean
    proppatchSync(uri: string | null, xml: XmlDocument, cancellable?: Gio.Cancellable | null): boolean
    putDataSync(uri: string, etag: string | null, contentType: string, bytes: string, length: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null ]
    putSync(uri: string, etag: string | null, contentType: string, stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outHref */ string | null, /* outEtag */ string | null ]
    refreshLockSync(uri: string | null, lockToken: string, lockTimeout: number, cancellable?: Gio.Cancellable | null): boolean
    replaceWithDetailedError(request: Soup.RequestHTTP, responseData: Uint8Array | null, ignoreMultistatus: boolean, prefix?: string | null): boolean
    reportSync(uri: string | null, depth: string | null, xml: XmlDocument, outContentType?: string | null, outContent?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    setAclSync(uri: string | null, entries: WebDAVAccessControlEntry[], cancellable?: Gio.Cancellable | null): boolean
    traverseMkcalendarResponse(message: Soup.Message | null, xmlData: Uint8Array): boolean
    traverseMkcolResponse(message: Soup.Message | null, xmlData: Uint8Array): boolean
    traverseMultistatusResponse(message: Soup.Message | null, xmlData: Uint8Array): boolean
    unlockSync(uri: string | null, lockToken: string, cancellable?: Gio.Cancellable | null): boolean
    updatePropertiesSync(uri: string | null, changes: WebDAVPropertyChange[], cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataServer-1.2.EDataServer.SoupSession */
    checkResult(request: Soup.RequestHTTP, readBytes: object | null, bytesLength: number): boolean
    dupCredentials(): NamedParameters | null
    getAuthenticationRequiresCredentials(): boolean
    getLogLevel(): Soup.LoggerLogLevel
    getSource(): Source
    getSslErrorDetails(): [ /* returnType */ boolean, /* outCertificatePem */ string, /* outCertificateErrors */ Gio.TlsCertificateFlags ]
    newRequest(method: string, uriString: string): Soup.RequestHTTP
    newRequestUri(method: string, uri: Soup.URI): Soup.RequestHTTP
    sendRequestSimpleSync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Uint8Array
    sendRequestSync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Gio.InputStream
    setCredentials(credentials?: NamedParameters | null): void
    setupLogging(loggingLevel?: string | null): void
    /* Methods of Soup-2.4.Soup.Session */
    abort(): void
    addFeature(feature: Soup.SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    cancelMessage(msg: Soup.Message, statusCode: number): void
    connectAsync(uri: Soup.URI, cancellable?: Gio.Cancellable | null, progressCallback?: Soup.SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    getAsyncContext(): GLib.MainContext | null
    getFeature(featureType: GObject.Type): Soup.SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Soup.Message): Soup.SessionFeature | null
    getFeatures(featureType: GObject.Type): Soup.SessionFeature[]
    hasFeature(featureType: GObject.Type): boolean
    pauseMessage(msg: Soup.Message): void
    prefetchDns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Soup.AddressCallback | null): void
    prepareForUri(uri: Soup.URI): void
    queueMessage(msg: Soup.Message, callback?: Soup.SessionCallback | null): void
    redirectMessage(msg: Soup.Message): boolean
    removeFeature(feature: Soup.SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    request(uriString: string): Soup.Request
    requestHttp(method: string, uriString: string): Soup.RequestHTTP
    requestHttpUri(method: string, uri: Soup.URI): Soup.RequestHTTP
    requestUri(uri: Soup.URI): Soup.Request
    requeueMessage(msg: Soup.Message): void
    send(msg: Soup.Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(msg: Soup.Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    sendMessage(msg: Soup.Message): number
    stealConnection(msg: Soup.Message): Gio.IOStream
    unpauseMessage(msg: Soup.Message): void
    websocketConnectAsync(msg: Soup.Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): Soup.WebsocketConnection
    wouldRedirect(msg: Soup.Message): boolean
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
    /* Signals of Soup-2.4.Soup.Session */
    connect(sigName: "authenticate", callback: ((msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void)): number
    on(sigName: "authenticate", callback: (msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", msg: Soup.Message, auth: Soup.Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: ((connection: GObject.Object) => void)): number
    on(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: (connection: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: ((msg: Soup.Message) => void)): number
    on(sigName: "request-queued", callback: (msg: Soup.Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (msg: Soup.Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (msg: Soup.Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-queued", msg: Soup.Message): void
    connect(sigName: "request-started", callback: ((msg: Soup.Message, socket: Soup.Socket) => void)): number
    on(sigName: "request-started", callback: (msg: Soup.Message, socket: Soup.Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (msg: Soup.Message, socket: Soup.Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (msg: Soup.Message, socket: Soup.Socket) => void): NodeJS.EventEmitter
    emit(sigName: "request-started", msg: Soup.Message, socket: Soup.Socket): void
    connect(sigName: "request-unqueued", callback: ((msg: Soup.Message) => void)): number
    on(sigName: "request-unqueued", callback: (msg: Soup.Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (msg: Soup.Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (msg: Soup.Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-unqueued", msg: Soup.Message): void
    connect(sigName: "tunneling", callback: ((connection: GObject.Object) => void)): number
    on(sigName: "tunneling", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tunneling", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tunneling", callback: (connection: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "tunneling", connection: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::credentials", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credentials", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::credentials", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accept-language-auto", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::https-aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-conns-per-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::ssl-use-system-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-database", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-ntlm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-thread-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebDAVSession_ConstructProps)
    _init (config?: WebDAVSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Source): WebDAVSession
    /* Function overloads */
    static new(source: Source): WebDAVSession
    static new(): WebDAVSession
    static utilFreePrivileges(privileges?: GLib.Node | null): void
    static utilItemHrefEqual(href1: string, href2: string): boolean
    static utilMaybeDequote(text?: string | null): [ /* returnType */ string, /* text */ string | null ]
    static $gtype: GObject.Type
}
interface XmlDocument_ConstructProps extends GObject.Object_ConstructProps {
}
class XmlDocument {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.XmlDocument */
    addAttribute(nsHref: string | null, name: string, value: string): void
    addAttributeDouble(nsHref: string | null, name: string, value: number): void
    addAttributeInt(nsHref: string | null, name: string, value: number): void
    addAttributeTime(nsHref: string | null, name: string, value: number): void
    addAttributeTimeIcal(nsHref: string | null, name: string, value: number): void
    addEmptyElement(nsHref: string | null, name: string): void
    endElement(): void
    getContent(): [ /* returnType */ string, /* outLength */ number | null ]
    getXmldoc(): libxml2.Doc
    startElement(nsHref: string | null, name: string): void
    startTextElement(nsHref: string | null, name: string): void
    writeBase64(value: string, len: number): void
    writeBuffer(value: string, len: number): void
    writeDouble(value: number): void
    writeInt(value: number): void
    writeString(value: string): void
    writeTime(value: number): void
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
    constructor (config?: XmlDocument_ConstructProps)
    _init (config?: XmlDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(nsHref: string | null, rootElement: string): XmlDocument
    static $gtype: GObject.Type
}
class AsyncClosure {
    static name: string
}
abstract class ClientClass {
    /* Fields of EDataServer-1.2.EDataServer.ClientClass */
    readonly unwrapDbusError: (client: Client, dbusError: GLib.Error) => void
    readonly retrieveCapabilities: (client: Client, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly retrieveCapabilitiesFinish: (client: Client, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* capabilities */ string ]
    readonly retrieveCapabilitiesSync: (client: Client, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* capabilities */ string ]
    readonly getBackendProperty: (client: Client, propName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly getBackendPropertyFinish: (client: Client, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* propValue */ string ]
    readonly getBackendPropertySync: (client: Client, propName: string, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* propValue */ string ]
    readonly setBackendProperty: (client: Client, propName: string, propValue: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly setBackendPropertyFinish: (client: Client, result: Gio.AsyncResult) => boolean
    readonly setBackendPropertySync: (client: Client, propName: string, propValue: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly open: (client: Client, onlyIfExists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly openFinish: (client: Client, result: Gio.AsyncResult) => boolean
    readonly openSync: (client: Client, onlyIfExists: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly remove: (client: Client, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly removeFinish: (client: Client, result: Gio.AsyncResult) => boolean
    readonly removeSync: (client: Client, cancellable?: Gio.Cancellable | null) => boolean
    readonly refresh: (client: Client, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly refreshFinish: (client: Client, result: Gio.AsyncResult) => boolean
    readonly refreshSync: (client: Client, cancellable?: Gio.Cancellable | null) => boolean
    readonly retrievePropertiesSync: (client: Client, cancellable?: Gio.Cancellable | null) => boolean
    readonly opened: (client: Client, error: GLib.Error) => void
    readonly backendError: (client: Client, errorMsg: string) => void
    readonly backendDied: (client: Client) => void
    readonly backendPropertyChanged: (client: Client, propName: string, propValue: string) => void
    static name: string
}
class ClientErrorsList {
    static name: string
}
class ClientPrivate {
    static name: string
}
class Collator {
    /* Methods of EDataServer-1.2.EDataServer.Collator */
    collate(strA?: string | null, strB?: string | null): [ /* returnType */ boolean, /* result */ number ]
    generateKey(str: string): string
    generateKeyForIndex(index: number): string
    getIndex(str: string): number
    getIndexLabels(): [ /* returnType */ string[], /* nLabels */ number, /* underflow */ number | null, /* inflow */ number | null, /* overflow */ number | null ]
    ref(): Collator
    unref(): void
    static name: string
    static new(locale: string): Collator
    constructor(locale: string)
    /* Static methods and pseudo-constructors */
    static new(locale: string): Collator
    static newInterpretCountry(locale: string): Collator
    static errorQuark(): GLib.Quark
}
abstract class ExtensibleInterface {
    /* Fields of EDataServer-1.2.EDataServer.ExtensibleInterface */
    readonly parentInterface: GObject.TypeInterface
    static name: string
}
abstract class ExtensionClass {
    /* Fields of EDataServer-1.2.EDataServer.ExtensionClass */
    readonly parentClass: GObject.ObjectClass
    readonly extensibleType: GObject.Type
    static name: string
}
class ExtensionPrivate {
    static name: string
}
class Flag {
    static name: string
}
class FreeFormExpSymbol {
    /* Fields of EDataServer-1.2.EDataServer.FreeFormExpSymbol */
    readonly names: string
    readonly hint: string
    readonly buildSexp: FreeFormExpBuildSexpFunc
    static name: string
}
abstract class GDataOAuth2AuthorizerClass {
    /* Fields of EDataServer-1.2.EDataServer.GDataOAuth2AuthorizerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class GDataOAuth2AuthorizerPrivate {
    static name: string
}
class MemChunk {
    static name: string
}
abstract class ModuleClass {
    /* Fields of EDataServer-1.2.EDataServer.ModuleClass */
    readonly parentClass: GObject.TypeModuleClass
    static name: string
}
class ModulePrivate {
    static name: string
}
class NamedParameters {
    /* Methods of EDataServer-1.2.EDataServer.NamedParameters */
    assign(from?: NamedParameters | null): void
    clear(): void
    count(): number
    exists(name: string): boolean
    free(): void
    get(name: string): string | null
    getName(index: number): string | null
    newClone(): NamedParameters
    set(name: string, value?: string | null): void
    test(name: string, value: string, caseSensitively: boolean): boolean
    toString(): string | null
    toStrv(): string[]
    static name: string
    static new(): NamedParameters
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NamedParameters
    static newString(str: string): NamedParameters
    static newStrv(strv: string): NamedParameters
}
abstract class NetworkMonitorClass {
    /* Fields of EDataServer-1.2.EDataServer.NetworkMonitorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class NetworkMonitorPrivate {
    static name: string
}
abstract class OAuth2ServiceBaseClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceBaseClass */
    readonly parentClass: ExtensionClass
    static name: string
}
abstract class OAuth2ServiceGoogleClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceGoogleClass */
    readonly parentClass: OAuth2ServiceBaseClass
    static name: string
}
abstract class OAuth2ServiceInterface {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceInterface */
    readonly parentInterface: GObject.TypeInterface
    readonly canProcess: (service: OAuth2Service, source: Source) => boolean
    readonly guessCanProcess: (service: OAuth2Service, protocol?: string | null, hostname?: string | null) => boolean
    readonly getFlags: (service: OAuth2Service) => number
    readonly getName: (service: OAuth2Service) => string
    readonly getDisplayName: (service: OAuth2Service) => string
    readonly getClientId: (service: OAuth2Service, source: Source) => string
    readonly getClientSecret: (service: OAuth2Service, source: Source) => string | null
    readonly getAuthenticationUri: (service: OAuth2Service, source: Source) => string
    readonly getRefreshUri: (service: OAuth2Service, source: Source) => string
    readonly getRedirectUri: (service: OAuth2Service, source: Source) => string | null
    readonly prepareAuthenticationUriQuery: (service: OAuth2Service, source: Source, uriQuery: GLib.HashTable) => void
    readonly getAuthenticationPolicy: (service: OAuth2Service, source: Source, uri: string) => OAuth2ServiceNavigationPolicy
    readonly extractAuthorizationCode: (service: OAuth2Service, source: Source, pageTitle: string, pageUri: string, pageContent?: string | null) => [ /* returnType */ boolean, /* outAuthorizationCode */ string ]
    readonly prepareGetTokenForm: (service: OAuth2Service, source: Source, authorizationCode: string, form: GLib.HashTable) => void
    readonly prepareGetTokenMessage: (service: OAuth2Service, source: Source, message: Soup.Message) => void
    readonly prepareRefreshTokenForm: (service: OAuth2Service, source: Source, refreshToken: string, form: GLib.HashTable) => void
    readonly prepareRefreshTokenMessage: (service: OAuth2Service, source: Source, message: Soup.Message) => void
    readonly reserved: object[]
    static name: string
}
abstract class OAuth2ServiceOutlookClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceOutlookClass */
    readonly parentClass: OAuth2ServiceBaseClass
    static name: string
}
abstract class OAuth2ServiceYahooClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceYahooClass */
    readonly parentClass: OAuth2ServiceBaseClass
    static name: string
}
abstract class OAuth2ServicesClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServicesClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class OAuth2ServicesPrivate {
    static name: string
}
class OperationPool {
    /* Methods of EDataServer-1.2.EDataServer.OperationPool */
    free(): void
    push(opdata?: object | null): void
    releaseOpid(opid: number): void
    reserveOpid(): number
    static name: string
}
abstract class SoupAuthBearerClass {
    /* Fields of EDataServer-1.2.EDataServer.SoupAuthBearerClass */
    readonly parentClass: Soup.AuthClass
    static name: string
}
class SoupAuthBearerPrivate {
    static name: string
}
abstract class SoupSessionClass {
    /* Fields of EDataServer-1.2.EDataServer.SoupSessionClass */
    readonly parentClass: Soup.SessionClass
    readonly reserved: object[]
    static name: string
}
class SoupSessionPrivate {
    static name: string
}
abstract class SourceAddressBookClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAddressBookClass */
    readonly parentClass: SourceBackendClass
    static name: string
}
class SourceAddressBookPrivate {
    static name: string
}
abstract class SourceAlarmsClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAlarmsClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceAlarmsPrivate {
    static name: string
}
abstract class SourceAuthenticationClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAuthenticationClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceAuthenticationPrivate {
    static name: string
}
abstract class SourceAutocompleteClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAutocompleteClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceAutocompletePrivate {
    static name: string
}
abstract class SourceAutoconfigClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAutoconfigClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceAutoconfigPrivate {
    static name: string
}
abstract class SourceBackendClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceBackendClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceBackendPrivate {
    static name: string
}
abstract class SourceCalendarClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCalendarClass */
    readonly parentClass: SourceSelectableClass
    static name: string
}
class SourceCalendarPrivate {
    static name: string
}
abstract class SourceCamelClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCamelClass */
    readonly parentClass: SourceExtensionClass
    readonly settingsType: GObject.Type
    static name: string
}
class SourceCamelPrivate {
    static name: string
}
abstract class SourceClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceClass */
    readonly parentClass: GObject.ObjectClass
    readonly changed: (source: Source) => void
    readonly credentialsRequired: (source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void
    readonly authenticate: (source: Source, credentials: NamedParameters) => void
    readonly removeSync: (source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly remove: (source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly removeFinish: (source: Source, result: Gio.AsyncResult) => boolean
    readonly writeSync: (source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly write: (source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly writeFinish: (source: Source, result: Gio.AsyncResult) => boolean
    readonly remoteCreateSync: (source: Source, scratchSource: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly remoteCreate: (source: Source, scratchSource: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly remoteCreateFinish: (source: Source, result: Gio.AsyncResult) => boolean
    readonly remoteDeleteSync: (source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly remoteDelete: (source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly remoteDeleteFinish: (source: Source, result: Gio.AsyncResult) => boolean
    readonly getOauth2AccessTokenSync: (source: Source, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    readonly getOauth2AccessToken: (source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly getOauth2AccessTokenFinish: (source: Source, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    readonly invokeCredentialsRequiredImpl: (source: Source, dbusSource: object | null, argReason: string, argCertificatePem: string, argCertificateErrors: string, argDbusErrorName: string, argDbusErrorMessage: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly invokeAuthenticateImpl: (source: Source, dbusSource: object | null, argCredentials: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly unsetLastCredentialsRequiredArgumentsImpl: (source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
abstract class SourceCollectionClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCollectionClass */
    readonly parentClass: SourceBackendClass
    static name: string
}
class SourceCollectionPrivate {
    static name: string
}
abstract class SourceContactsClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceContactsClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceContactsPrivate {
    static name: string
}
abstract class SourceCredentialsProviderClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderClass */
    readonly parentClass: GObject.ObjectClass
    readonly refSource: (provider: SourceCredentialsProvider, uid: string) => Source
    static name: string
}
abstract class SourceCredentialsProviderImplClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplClass */
    readonly parentClass: ExtensionClass
    readonly canProcess: (providerImpl: SourceCredentialsProviderImpl, source: Source) => boolean
    readonly canStore: (providerImpl: SourceCredentialsProviderImpl) => boolean
    readonly canPrompt: (providerImpl: SourceCredentialsProviderImpl) => boolean
    readonly lookupSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outCredentials */ NamedParameters ]
    readonly storeSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly deleteSync: (providerImpl: SourceCredentialsProviderImpl, source: Source, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
abstract class SourceCredentialsProviderImplOAuth2Class {
    /* Fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2Class */
    readonly parentClass: SourceCredentialsProviderImplClass
    static name: string
}
class SourceCredentialsProviderImplOAuth2Private {
    static name: string
}
abstract class SourceCredentialsProviderImplPasswordClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPasswordClass */
    readonly parentClass: SourceCredentialsProviderImplClass
    static name: string
}
class SourceCredentialsProviderImplPasswordPrivate {
    static name: string
}
class SourceCredentialsProviderImplPrivate {
    static name: string
}
class SourceCredentialsProviderPrivate {
    static name: string
}
abstract class SourceExtensionClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceExtensionClass */
    readonly parentClass: GObject.ObjectClass
    readonly name: string
    static name: string
}
class SourceExtensionPrivate {
    static name: string
}
abstract class SourceGoaClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceGoaClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceGoaPrivate {
    static name: string
}
abstract class SourceLDAPClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceLDAPClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceLDAPPrivate {
    static name: string
}
abstract class SourceLocalClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceLocalClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceLocalPrivate {
    static name: string
}
abstract class SourceMDNClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMDNClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceMDNPrivate {
    static name: string
}
abstract class SourceMailAccountClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailAccountClass */
    readonly parentClass: SourceBackendClass
    static name: string
}
class SourceMailAccountPrivate {
    static name: string
}
abstract class SourceMailCompositionClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailCompositionClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceMailCompositionPrivate {
    static name: string
}
abstract class SourceMailIdentityClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailIdentityClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceMailIdentityPrivate {
    static name: string
}
abstract class SourceMailSignatureClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailSignatureClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceMailSignaturePrivate {
    static name: string
}
abstract class SourceMailSubmissionClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailSubmissionClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceMailSubmissionPrivate {
    static name: string
}
abstract class SourceMailTransportClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailTransportClass */
    readonly parentClass: SourceBackendClass
    static name: string
}
class SourceMailTransportPrivate {
    static name: string
}
abstract class SourceMemoListClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMemoListClass */
    readonly parentClass: SourceSelectableClass
    static name: string
}
class SourceMemoListPrivate {
    static name: string
}
abstract class SourceOfflineClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceOfflineClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceOfflinePrivate {
    static name: string
}
abstract class SourceOpenPGPClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceOpenPGPClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceOpenPGPPrivate {
    static name: string
}
class SourcePrivate {
    static name: string
}
abstract class SourceProxyClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceProxyClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceProxyPrivate {
    static name: string
}
abstract class SourceRefreshClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceRefreshClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceRefreshPrivate {
    static name: string
}
abstract class SourceRegistryClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceRegistryClass */
    readonly parentClass: GObject.ObjectClass
    readonly sourceAdded: (registry: SourceRegistry, source: Source) => void
    readonly sourceChanged: (registry: SourceRegistry, source: Source) => void
    readonly sourceRemoved: (registry: SourceRegistry, source: Source) => void
    readonly sourceEnabled: (registry: SourceRegistry, source: Source) => void
    readonly sourceDisabled: (registry: SourceRegistry, source: Source) => void
    readonly credentialsRequired: (registry: SourceRegistry, source: Source, reason: SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error) => void
    static name: string
}
class SourceRegistryPrivate {
    static name: string
}
abstract class SourceRegistryWatcherClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceRegistryWatcherClass */
    readonly parentClass: GObject.ObjectClass
    readonly filter: (watcher: SourceRegistryWatcher, source: Source) => boolean
    readonly appeared: (watcher: SourceRegistryWatcher, source: Source) => void
    readonly disappeared: (watcher: SourceRegistryWatcher, source: Source) => void
    static name: string
}
class SourceRegistryWatcherPrivate {
    static name: string
}
abstract class SourceResourceClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceResourceClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceResourcePrivate {
    static name: string
}
abstract class SourceRevisionGuardsClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceRevisionGuardsClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceRevisionGuardsPrivate {
    static name: string
}
abstract class SourceSMIMEClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceSMIMEClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceSMIMEPrivate {
    static name: string
}
abstract class SourceSecurityClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceSecurityClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceSecurityPrivate {
    static name: string
}
abstract class SourceSelectableClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceSelectableClass */
    readonly parentClass: SourceBackendClass
    static name: string
}
class SourceSelectablePrivate {
    static name: string
}
abstract class SourceTaskListClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceTaskListClass */
    readonly parentClass: SourceSelectableClass
    static name: string
}
class SourceTaskListPrivate {
    static name: string
}
abstract class SourceUoaClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceUoaClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceUoaPrivate {
    static name: string
}
abstract class SourceWeatherClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceWeatherClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceWeatherPrivate {
    static name: string
}
abstract class SourceWebDAVNotesClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceWebDAVNotesClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceWebDAVNotesPrivate {
    static name: string
}
abstract class SourceWebdavClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceWebdavClass */
    readonly parentClass: SourceExtensionClass
    static name: string
}
class SourceWebdavPrivate {
    static name: string
}
class WebDAVAccessControlEntry {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry */
    readonly principalKind: WebDAVACEPrincipalKind
    readonly principalHref: string
    readonly flags: number
    readonly inheritedHref: string
    readonly privileges: object[]
    /* Methods of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry */
    appendPrivilege(privilege: WebDAVPrivilege): void
    copy(): WebDAVAccessControlEntry
    getPrivileges(): WebDAVPrivilege[]
    static name: string
    static new(principalKind: WebDAVACEPrincipalKind, principalHref: string | null, flags: number, inheritedHref?: string | null): WebDAVAccessControlEntry
    constructor(principalKind: WebDAVACEPrincipalKind, principalHref: string | null, flags: number, inheritedHref?: string | null)
    /* Static methods and pseudo-constructors */
    static new(principalKind: WebDAVACEPrincipalKind, principalHref: string | null, flags: number, inheritedHref?: string | null): WebDAVAccessControlEntry
    static free(ptr?: object | null): void
}
class WebDAVDiscoveredSource {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource */
    readonly href: string
    readonly supports: number
    readonly displayName: string
    readonly description: string
    readonly color: string
    readonly order: number
    /* Methods of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource */
    copy(): WebDAVDiscoveredSource
    free(): void
    static name: string
}
class WebDAVPrivilege {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVPrivilege */
    readonly nsUri: string
    readonly name: string
    readonly description: string
    readonly kind: WebDAVPrivilegeKind
    readonly hint: WebDAVPrivilegeHint
    /* Methods of EDataServer-1.2.EDataServer.WebDAVPrivilege */
    copy(): WebDAVPrivilege
    static name: string
    static new(nsUri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint): WebDAVPrivilege
    constructor(nsUri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint)
    /* Static methods and pseudo-constructors */
    static new(nsUri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint): WebDAVPrivilege
    static free(ptr?: object | null): void
}
class WebDAVPropertyChange {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVPropertyChange */
    readonly kind: WebDAVPropertyChangeKind
    readonly nsUri: string
    readonly name: string
    readonly value: string
    /* Methods of EDataServer-1.2.EDataServer.WebDAVPropertyChange */
    copy(): WebDAVPropertyChange
    static name: string
    /* Static methods and pseudo-constructors */
    static newRemove(nsUri: string, name: string): WebDAVPropertyChange
    static newSet(nsUri: string, name: string, value?: string | null): WebDAVPropertyChange
    static free(ptr?: object | null): void
}
class WebDAVResource {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVResource */
    readonly kind: WebDAVResourceKind
    readonly supports: number
    readonly href: string
    readonly etag: string
    readonly displayName: string
    readonly contentType: string
    readonly contentLength: number
    readonly creationDate: number
    readonly lastModified: number
    readonly description: string
    readonly color: string
    readonly order: number
    /* Methods of EDataServer-1.2.EDataServer.WebDAVResource */
    copy(): WebDAVResource
    static name: string
    static new(kind: WebDAVResourceKind, supports: number, href: string, etag: string | null, displayName: string | null, contentType: string | null, contentLength: number, creationDate: number, lastModified: number, description: string | null, color: string | null, order: number): WebDAVResource
    constructor(kind: WebDAVResourceKind, supports: number, href: string, etag: string | null, displayName: string | null, contentType: string | null, contentLength: number, creationDate: number, lastModified: number, description: string | null, color: string | null, order: number)
    /* Static methods and pseudo-constructors */
    static new(kind: WebDAVResourceKind, supports: number, href: string, etag: string | null, displayName: string | null, contentType: string | null, contentLength: number, creationDate: number, lastModified: number, description: string | null, color: string | null, order: number): WebDAVResource
    static free(ptr?: object | null): void
}
abstract class WebDAVSessionClass {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVSessionClass */
    readonly parentClass: SoupSessionClass
    readonly reserved: object[]
    static name: string
}
class WebDAVSessionPrivate {
    static name: string
}
abstract class XmlDocumentClass {
    /* Fields of EDataServer-1.2.EDataServer.XmlDocumentClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class XmlDocumentPrivate {
    static name: string
}
class XmlHash {
    static name: string
}
}
export default EDataServer;