/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Soup-2.4
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Soup {

enum AddressFamily {
    INVALID,
    IPV4,
    IPV6,
}
enum CacheResponse {
    FRESH,
    NEEDS_VALIDATION,
    STALE,
}
enum CacheType {
    SINGLE_USER,
    SHARED,
}
enum ConnectionState {
    NEW,
    CONNECTING,
    IDLE,
    IN_USE,
    REMOTE_DISCONNECTED,
    DISCONNECTED,
}
enum CookieJarAcceptPolicy {
    ALWAYS,
    NEVER,
    NO_THIRD_PARTY,
    GRANDFATHERED_THIRD_PARTY,
}
enum DateFormat {
    HTTP,
    COOKIE,
    RFC2822,
    ISO8601_COMPACT,
    ISO8601_FULL,
    ISO8601,
    ISO8601_XMLRPC,
}
enum Encoding {
    UNRECOGNIZED,
    NONE,
    CONTENT_LENGTH,
    EOF,
    CHUNKED,
    BYTERANGES,
}
enum HTTPVersion {
    HTTP_1_0,
    HTTP_1_1,
}
enum KnownStatusCode {
    NONE,
    CANCELLED,
    CANT_RESOLVE,
    CANT_RESOLVE_PROXY,
    CANT_CONNECT,
    CANT_CONNECT_PROXY,
    SSL_FAILED,
    IO_ERROR,
    MALFORMED,
    TRY_AGAIN,
    TOO_MANY_REDIRECTS,
    TLS_FAILED,
    CONTINUE,
    SWITCHING_PROTOCOLS,
    PROCESSING,
    OK,
    CREATED,
    ACCEPTED,
    NON_AUTHORITATIVE,
    NO_CONTENT,
    RESET_CONTENT,
    PARTIAL_CONTENT,
    MULTI_STATUS,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    FOUND,
    MOVED_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    NOT_APPEARING_IN_THIS_PROTOCOL,
    TEMPORARY_REDIRECT,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTHENTICATION_REQUIRED,
    PROXY_UNAUTHORIZED,
    REQUEST_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LONG,
    UNSUPPORTED_MEDIA_TYPE,
    REQUESTED_RANGE_NOT_SATISFIABLE,
    INVALID_RANGE,
    EXPECTATION_FAILED,
    UNPROCESSABLE_ENTITY,
    LOCKED,
    FAILED_DEPENDENCY,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    HTTP_VERSION_NOT_SUPPORTED,
    INSUFFICIENT_STORAGE,
    NOT_EXTENDED,
}
enum LoggerLogLevel {
    NONE,
    MINIMAL,
    HEADERS,
    BODY,
}
enum MemoryUse {
    STATIC,
    TAKE,
    COPY,
    TEMPORARY,
}
enum MessageHeadersType {
    REQUEST,
    RESPONSE,
    MULTIPART,
}
enum MessagePriority {
    VERY_LOW,
    LOW,
    NORMAL,
    HIGH,
    VERY_HIGH,
}
enum RequestError {
    BAD_URI,
    UNSUPPORTED_URI_SCHEME,
    PARSING,
    ENCODING,
}
enum RequesterError {
    BAD_URI,
    UNSUPPORTED_URI_SCHEME,
}
enum SameSitePolicy {
    NONE,
    LAX,
    STRICT,
}
enum SocketIOStatus {
    OK,
    WOULD_BLOCK,
    EOF,
    ERROR,
}
enum Status {
    NONE,
    CANCELLED,
    CANT_RESOLVE,
    CANT_RESOLVE_PROXY,
    CANT_CONNECT,
    CANT_CONNECT_PROXY,
    SSL_FAILED,
    IO_ERROR,
    MALFORMED,
    TRY_AGAIN,
    TOO_MANY_REDIRECTS,
    TLS_FAILED,
    CONTINUE,
    SWITCHING_PROTOCOLS,
    PROCESSING,
    OK,
    CREATED,
    ACCEPTED,
    NON_AUTHORITATIVE,
    NO_CONTENT,
    RESET_CONTENT,
    PARTIAL_CONTENT,
    MULTI_STATUS,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    FOUND,
    MOVED_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    NOT_APPEARING_IN_THIS_PROTOCOL,
    TEMPORARY_REDIRECT,
    PERMANENT_REDIRECT,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTHENTICATION_REQUIRED,
    PROXY_UNAUTHORIZED,
    REQUEST_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LONG,
    UNSUPPORTED_MEDIA_TYPE,
    REQUESTED_RANGE_NOT_SATISFIABLE,
    INVALID_RANGE,
    EXPECTATION_FAILED,
    UNPROCESSABLE_ENTITY,
    LOCKED,
    FAILED_DEPENDENCY,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    HTTP_VERSION_NOT_SUPPORTED,
    INSUFFICIENT_STORAGE,
    NOT_EXTENDED,
}
enum TLDError {
    INVALID_HOSTNAME,
    IS_IP_ADDRESS,
    NOT_ENOUGH_DOMAINS,
    NO_BASE_DOMAIN,
    NO_PSL_DATA,
}
enum WebsocketCloseCode {
    NORMAL,
    GOING_AWAY,
    PROTOCOL_ERROR,
    UNSUPPORTED_DATA,
    NO_STATUS,
    ABNORMAL,
    BAD_DATA,
    POLICY_VIOLATION,
    TOO_BIG,
    NO_EXTENSION,
    SERVER_ERROR,
    TLS_HANDSHAKE,
}
enum WebsocketConnectionType {
    UNKNOWN,
    CLIENT,
    SERVER,
}
enum WebsocketDataType {
    TEXT,
    BINARY,
}
enum WebsocketError {
    FAILED,
    NOT_WEBSOCKET,
    BAD_HANDSHAKE,
    BAD_ORIGIN,
}
enum WebsocketState {
    OPEN,
    CLOSING,
    CLOSED,
}
enum XMLRPCError {
    ARGUMENTS,
    RETVAL,
}
enum XMLRPCFault {
    PARSE_ERROR_NOT_WELL_FORMED,
    PARSE_ERROR_UNSUPPORTED_ENCODING,
    PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING,
    SERVER_ERROR_INVALID_XML_RPC,
    SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND,
    SERVER_ERROR_INVALID_METHOD_PARAMETERS,
    SERVER_ERROR_INTERNAL_XML_RPC_ERROR,
    APPLICATION_ERROR,
    SYSTEM_ERROR,
    TRANSPORT_ERROR,
}
enum Cacheability {
    CACHEABLE,
    UNCACHEABLE,
    INVALIDATES,
    VALIDATES,
}
enum Expectation {
    UNRECOGNIZED,
    CONTINUE,
}
enum MessageFlags {
    NO_REDIRECT,
    CAN_REBUILD,
    OVERWRITE_CHUNKS,
    CONTENT_DECODED,
    CERTIFICATE_TRUSTED,
    NEW_CONNECTION,
    IDEMPOTENT,
    IGNORE_CONNECTION_LIMITS,
    DO_NOT_USE_AUTH_CACHE,
}
enum ServerListenOptions {
    HTTPS,
    IPV4_ONLY,
    IPV6_ONLY,
}
const ADDRESS_ANY_PORT: number
const ADDRESS_FAMILY: string
const ADDRESS_NAME: string
const ADDRESS_PHYSICAL: string
const ADDRESS_PORT: string
const ADDRESS_PROTOCOL: string
const ADDRESS_SOCKADDR: string
const AUTH_DOMAIN_ADD_PATH: string
const AUTH_DOMAIN_BASIC_AUTH_CALLBACK: string
const AUTH_DOMAIN_BASIC_AUTH_DATA: string
const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK: string
const AUTH_DOMAIN_DIGEST_AUTH_DATA: string
const AUTH_DOMAIN_FILTER: string
const AUTH_DOMAIN_FILTER_DATA: string
const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK: string
const AUTH_DOMAIN_GENERIC_AUTH_DATA: string
const AUTH_DOMAIN_PROXY: string
const AUTH_DOMAIN_REALM: string
const AUTH_DOMAIN_REMOVE_PATH: string
const AUTH_HOST: string
const AUTH_IS_AUTHENTICATED: string
const AUTH_IS_FOR_PROXY: string
const AUTH_REALM: string
const AUTH_SCHEME_NAME: string
const CHAR_HTTP_CTL: number
const CHAR_HTTP_SEPARATOR: number
const CHAR_URI_GEN_DELIMS: number
const CHAR_URI_PERCENT_ENCODED: number
const CHAR_URI_SUB_DELIMS: number
const COOKIE_JAR_ACCEPT_POLICY: string
const COOKIE_JAR_DB_FILENAME: string
const COOKIE_JAR_READ_ONLY: string
const COOKIE_JAR_TEXT_FILENAME: string
const COOKIE_MAX_AGE_ONE_DAY: number
const COOKIE_MAX_AGE_ONE_HOUR: number
const COOKIE_MAX_AGE_ONE_WEEK: number
const COOKIE_MAX_AGE_ONE_YEAR: number
const FORM_MIME_TYPE_MULTIPART: string
const FORM_MIME_TYPE_URLENCODED: string
const HSTS_ENFORCER_DB_FILENAME: string
const HSTS_POLICY_MAX_AGE_PAST: number
const LOGGER_LEVEL: string
const LOGGER_MAX_BODY_SIZE: string
const MAJOR_VERSION: number
const MESSAGE_FIRST_PARTY: string
const MESSAGE_FLAGS: string
const MESSAGE_HTTP_VERSION: string
const MESSAGE_IS_TOP_LEVEL_NAVIGATION: string
const MESSAGE_METHOD: string
const MESSAGE_PRIORITY: string
const MESSAGE_REASON_PHRASE: string
const MESSAGE_REQUEST_BODY: string
const MESSAGE_REQUEST_BODY_DATA: string
const MESSAGE_REQUEST_HEADERS: string
const MESSAGE_RESPONSE_BODY: string
const MESSAGE_RESPONSE_BODY_DATA: string
const MESSAGE_RESPONSE_HEADERS: string
const MESSAGE_SERVER_SIDE: string
const MESSAGE_SITE_FOR_COOKIES: string
const MESSAGE_STATUS_CODE: string
const MESSAGE_TLS_CERTIFICATE: string
const MESSAGE_TLS_ERRORS: string
const MESSAGE_URI: string
const MICRO_VERSION: number
const MINOR_VERSION: number
const REQUEST_SESSION: string
const REQUEST_URI: string

const SERVER_ASYNC_CONTEXT: string
const SERVER_HTTPS_ALIASES: string
const SERVER_HTTP_ALIASES: string
const SERVER_INTERFACE: string
const SERVER_PORT: string
const SERVER_RAW_PATHS: string

const SERVER_SERVER_HEADER: string
const SERVER_SSL_CERT_FILE: string
const SERVER_SSL_KEY_FILE: string
const SERVER_TLS_CERTIFICATE: string
const SESSION_ACCEPT_LANGUAGE: string
const SESSION_ACCEPT_LANGUAGE_AUTO: string


const SESSION_ASYNC_CONTEXT: string
const SESSION_HTTPS_ALIASES: string
const SESSION_HTTP_ALIASES: string
const SESSION_IDLE_TIMEOUT: string
const SESSION_LOCAL_ADDRESS: string
const SESSION_MAX_CONNS: string
const SESSION_MAX_CONNS_PER_HOST: string
const SESSION_PROXY_RESOLVER: string
const SESSION_PROXY_URI: string

const SESSION_SSL_CA_FILE: string
const SESSION_SSL_STRICT: string
const SESSION_SSL_USE_SYSTEM_CA_FILE: string
const SESSION_TIMEOUT: string
const SESSION_TLS_DATABASE: string
const SESSION_TLS_INTERACTION: string
const SESSION_USER_AGENT: string
const SESSION_USE_NTLM: string
const SESSION_USE_THREAD_CONTEXT: string
const SOCKET_ASYNC_CONTEXT: string
const SOCKET_FLAG_NONBLOCKING: string
const SOCKET_IS_SERVER: string
const SOCKET_LOCAL_ADDRESS: string
const SOCKET_REMOTE_ADDRESS: string
const SOCKET_SSL_CREDENTIALS: string
const SOCKET_SSL_FALLBACK: string
const SOCKET_SSL_STRICT: string
const SOCKET_TIMEOUT: string
const SOCKET_TLS_CERTIFICATE: string
const SOCKET_TLS_ERRORS: string
const SOCKET_TRUSTED_CERTIFICATE: string
const SOCKET_USE_THREAD_CONTEXT: string
const VERSION_MIN_REQUIRED: number
function checkVersion(major: number, minor: number, micro: number): boolean
function cookieParse(header: string, origin: URI): Cookie | null
function cookiesFromRequest(msg: Message): Cookie[]
function cookiesFromResponse(msg: Message): Cookie[]
function cookiesToCookieHeader(cookies: Cookie[]): string
function cookiesToRequest(cookies: Cookie[], msg: Message): void
function cookiesToResponse(cookies: Cookie[], msg: Message): void
function formDecode(encodedForm: string): GLib.HashTable
function formDecodeMultipart(msg: Message, fileControlName?: string | null): [ /* returnType */ GLib.HashTable | null, /* filename */ string | null, /* contentType */ string | null, /* file */ Buffer | null ]
function formEncodeDatalist(formDataSet: GLib.Data): string
function formEncodeHash(formDataSet: GLib.HashTable): string
function formRequestNewFromDatalist(method: string, uri: string, formDataSet: GLib.Data): Message
function formRequestNewFromHash(method: string, uri: string, formDataSet: GLib.HashTable): Message
function formRequestNewFromMultipart(uri: string, multipart: Multipart): Message
function getMajorVersion(): number
function getMicroVersion(): number
function getMinorVersion(): number
function getResource(): Gio.Resource
function headerContains(header: string, token: string): boolean
function headerFreeParamList(paramList: GLib.HashTable): void
function headerGStringAppendParam(string: GLib.String, name: string, value: string): void
function headerGStringAppendParamQuoted(string: GLib.String, name: string, value: string): void
function headerParseList(header: string): string[]
function headerParseParamList(header: string): GLib.HashTable
function headerParseParamListStrict(header: string): GLib.HashTable | null
function headerParseQualityList(header: string): [ /* returnType */ string[], /* unacceptable */ string[] | null ]
function headerParseSemiParamList(header: string): GLib.HashTable
function headerParseSemiParamListStrict(header: string): GLib.HashTable | null
function headersParse(str: string, len: number, dest: MessageHeaders): boolean
function headersParseRequest(str: string, len: number, reqHeaders: MessageHeaders): [ /* returnType */ number, /* reqMethod */ string | null, /* reqPath */ string | null, /* ver */ HTTPVersion | null ]
function headersParseResponse(str: string, len: number, headers: MessageHeaders): [ /* returnType */ boolean, /* ver */ HTTPVersion | null, /* statusCode */ number | null, /* reasonPhrase */ string | null ]
function headersParseStatusLine(statusLine: string): [ /* returnType */ boolean, /* ver */ HTTPVersion | null, /* statusCode */ number | null, /* reasonPhrase */ string | null ]
function httpErrorQuark(): GLib.Quark
function messageHeadersIterInit(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
function requestErrorQuark(): GLib.Quark
function requesterErrorQuark(): GLib.Quark
function statusGetPhrase(statusCode: number): string
function statusProxify(statusCode: number): number
function strCaseEqual(v1?: object | null, v2?: object | null): boolean
function strCaseHash(key?: object | null): number
function tldDomainIsPublicSuffix(domain: string): boolean
function tldErrorQuark(): GLib.Quark
function tldGetBaseDomain(hostname: string): string
function uriDecode(part: string): string
function uriEncode(part: string, escapeExtra?: string | null): string
function uriNormalize(part: string, unescapeExtra?: string | null): string
function valueArrayNew(): GObject.ValueArray
function valueHashInsertValue(hash: GLib.HashTable, key: string, value: any): void
function valueHashNew(): GLib.HashTable
function websocketClientPrepareHandshake(msg: Message, origin?: string | null, protocols?: string[] | null): void
function websocketClientPrepareHandshakeWithExtensions(msg: Message, origin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): void
function websocketClientVerifyHandshake(msg: Message): boolean
function websocketClientVerifyHandshakeWithExtensions(msg: Message, supportedExtensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* acceptedExtensions */ WebsocketExtension[] | null ]
function websocketErrorGetQuark(): GLib.Quark
function websocketServerCheckHandshake(msg: Message, origin?: string | null, protocols?: string[] | null): boolean
function websocketServerCheckHandshakeWithExtensions(msg: Message, origin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): boolean
function websocketServerProcessHandshake(msg: Message, expectedOrigin?: string | null, protocols?: string[] | null): boolean
function websocketServerProcessHandshakeWithExtensions(msg: Message, expectedOrigin?: string | null, protocols?: string[] | null, supportedExtensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* acceptedExtensions */ WebsocketExtension[] | null ]
function xmlrpcBuildMethodCall(methodName: string, params: any[]): string | null
function xmlrpcBuildMethodResponse(value: any): string | null
function xmlrpcBuildRequest(methodName: string, params: GLib.Variant): string
function xmlrpcBuildResponse(value: GLib.Variant): string
function xmlrpcErrorQuark(): GLib.Quark
function xmlrpcFaultQuark(): GLib.Quark
function xmlrpcMessageNew(uri: string, methodName: string, params: GLib.Variant): Message
function xmlrpcMessageSetResponse(msg: Message, value: GLib.Variant): boolean
function xmlrpcParseMethodCall(methodCall: string, length: number): [ /* returnType */ boolean, /* methodName */ string, /* params */ GObject.ValueArray ]
function xmlrpcParseMethodResponse(methodResponse: string, length: number): [ /* returnType */ boolean, /* value */ any ]
function xmlrpcParseRequest(methodCall: string, length: number): [ /* returnType */ string, /* params */ XMLRPCParams ]
function xmlrpcParseResponse(methodResponse: string, length: number, signature?: string | null): GLib.Variant
function xmlrpcVariantGetDatetime(variant: GLib.Variant): Date
function xmlrpcVariantNewDatetime(date: Date): GLib.Variant
interface AddressCallback {
    (addr: Address, status: number): void
}
interface AuthDomainBasicAuthCallback {
    (domain: AuthDomainBasic, msg: Message, username: string, password: string): boolean
}
interface AuthDomainDigestAuthCallback {
    (domain: AuthDomainDigest, msg: Message, username: string): string | null
}
interface AuthDomainFilter {
    (domain: AuthDomain, msg: Message): boolean
}
interface AuthDomainGenericAuthCallback {
    (domain: AuthDomain, msg: Message, username: string): boolean
}
interface ChunkAllocator {
    (msg: Message, maxLen: number): Buffer | null
}
interface LoggerFilter {
    (logger: Logger, msg: Message): LoggerLogLevel
}
interface LoggerPrinter {
    (logger: Logger, level: LoggerLogLevel, direction: number, data: string): void
}
interface MessageHeadersForeachFunc {
    (name: string, value: string): void
}
interface PasswordManagerCallback {
    (passwordManager: PasswordManager, msg: Message, auth: Auth, retrying: boolean): void
}
interface ProxyResolverCallback {
    (proxyResolver: ProxyResolver, msg: Message, arg: number, addr: Address): void
}
interface ProxyURIResolverCallback {
    (resolver: ProxyURIResolver, status: number, proxyUri: URI): void
}
interface ServerCallback {
    (server: Server, msg: Message, path: string, query: GLib.HashTable | null, client: ClientContext): void
}
interface ServerWebsocketCallback {
    (server: Server, connection: WebsocketConnection, path: string, client: ClientContext): void
}
interface SessionCallback {
    (session: Session, msg: Message): void
}
interface SessionConnectProgressCallback {
    (session: Session, event: Gio.SocketClientEvent, connection: Gio.IOStream): void
}
interface SocketCallback {
    (sock: Socket, status: number): void
}
class PasswordManager {
    /* Methods of Soup-2.4.Soup.PasswordManager */
    getPasswordsAsync(msg: Message, auth: Auth, retrying: boolean, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void
    getPasswordsSync(msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null): void
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    static name: string
}
class ProxyResolver {
    /* Methods of Soup-2.4.Soup.ProxyResolver */
    getProxyAsync(msg: Message, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void
    getProxySync(msg: Message, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* addr */ Address ]
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    static name: string
}
class ProxyURIResolver {
    /* Methods of Soup-2.4.Soup.ProxyURIResolver */
    getProxyUriAsync(uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    getProxyUriSync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ URI ]
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    static name: string
}
class SessionFeature {
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    static name: string
}
interface Address_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Address */
    family?: AddressFamily
    name?: string
    port?: number
    protocol?: string
    sockaddr?: object
}
class Address {
    /* Properties of Soup-2.4.Soup.Address */
    readonly physical: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Address */
    equalByIp(addr2: Address): boolean
    equalByName(addr2: Address): boolean
    getGsockaddr(): Gio.SocketAddress
    getName(): string | null
    getPhysical(): string | null
    getPort(): number
    getSockaddr(len: number): object | null
    hashByIp(): number
    hashByName(): number
    isResolved(): boolean
    resolveAsync(asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: AddressCallback): void
    resolveSync(cancellable?: Gio.Cancellable | null): number
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
    enumerate(): Gio.SocketAddressEnumerator
    proxyEnumerate(): Gio.SocketAddressEnumerator
    toString(): string
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::physical", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::physical", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::physical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::physical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::physical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Address_ConstructProps)
    _init (config?: Address_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, port: number): Address
    static newAny(family: AddressFamily, port: number): Address
    static newFromSockaddr(sa: object | null, len: number): Address
    static $gtype: GObject.Type
}
interface Auth_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Auth */
    host?: string
    isForProxy?: boolean
    realm?: string
}
class Auth {
    /* Properties of Soup-2.4.Soup.Auth */
    host: string
    readonly isAuthenticated: boolean
    isForProxy: boolean
    realm: string
    readonly schemeName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    connect(sigName: "notify::realm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Auth_ConstructProps)
    _init (config?: Auth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type, msg: Message, authHeader: string): Auth
    static $gtype: GObject.Type
}
interface AuthBasic_ConstructProps extends Auth_ConstructProps {
}
class AuthBasic {
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
    /* Methods of Soup-2.4.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    constructor (config?: AuthBasic_ConstructProps)
    _init (config?: AuthBasic_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthDigest_ConstructProps extends Auth_ConstructProps {
}
class AuthDigest {
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
    /* Methods of Soup-2.4.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    constructor (config?: AuthDigest_ConstructProps)
    _init (config?: AuthDigest_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthDomain_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.AuthDomain */
    addPath?: string
    filter?: AuthDomainFilter
    filterData?: object
    genericAuthCallback?: AuthDomainGenericAuthCallback
    genericAuthData?: object
    proxy?: boolean
    realm?: string
    removePath?: string
}
class AuthDomain {
    /* Properties of Soup-2.4.Soup.AuthDomain */
    addPath: string
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    removePath: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    checkPassword(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    getRealm(): string
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: Message, username: string): boolean
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
    connect(sigName: "notify::add-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remove-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthDomain_ConstructProps)
    _init (config?: AuthDomain_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthDomainBasic_ConstructProps extends AuthDomain_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.AuthDomainBasic */
    authCallback?: AuthDomainBasicAuthCallback
    authData?: object
}
class AuthDomainBasic {
    /* Properties of Soup-2.4.Soup.AuthDomainBasic */
    authCallback: AuthDomainBasicAuthCallback
    authData: object
    /* Properties of Soup-2.4.Soup.AuthDomain */
    addPath: string
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    removePath: string
    /* Fields of Soup-2.4.Soup.AuthDomain */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.AuthDomainBasic */
    setAuthCallback(callback: AuthDomainBasicAuthCallback): void
    /* Methods of Soup-2.4.Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    checkPassword(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    getRealm(): string
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: Message, username: string): boolean
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
    connect(sigName: "notify::auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::add-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remove-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthDomainBasic_ConstructProps)
    _init (config?: AuthDomainBasic_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthDomainDigest_ConstructProps extends AuthDomain_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.AuthDomainDigest */
    authCallback?: AuthDomainDigestAuthCallback
    authData?: object
}
class AuthDomainDigest {
    /* Properties of Soup-2.4.Soup.AuthDomainDigest */
    authCallback: AuthDomainDigestAuthCallback
    authData: object
    /* Properties of Soup-2.4.Soup.AuthDomain */
    addPath: string
    filter: AuthDomainFilter
    filterData: object
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: object
    removePath: string
    /* Fields of Soup-2.4.Soup.AuthDomain */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.AuthDomainDigest */
    setAuthCallback(callback: AuthDomainDigestAuthCallback): void
    /* Methods of Soup-2.4.Soup.AuthDomain */
    accepts(msg: Message): string | null
    challenge(msg: Message): void
    checkPassword(msg: Message, username: string, password: string): boolean
    covers(msg: Message): boolean
    getRealm(): string
    setFilter(filter: AuthDomainFilter): void
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: Message, username: string): boolean
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
    connect(sigName: "notify::auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::add-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generic-auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remove-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AuthDomainDigest_ConstructProps)
    _init (config?: AuthDomainDigest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static encodePassword(username: string, realm: string, password: string): string
    static $gtype: GObject.Type
}
interface AuthManager_ConstructProps extends GObject.Object_ConstructProps {
}
class AuthManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.AuthManager */
    clearCachedCredentials(): void
    useAuth(uri: URI, auth: Auth): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of Soup-2.4.Soup.AuthManager */
    connect(sigName: "authenticate", callback: ((msg: Message, auth: Auth, retrying: boolean) => void)): number
    on(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
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
    constructor (config?: AuthManager_ConstructProps)
    _init (config?: AuthManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthNTLM_ConstructProps extends Auth_ConstructProps {
}
class AuthNTLM {
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
    /* Methods of Soup-2.4.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    constructor (config?: AuthNTLM_ConstructProps)
    _init (config?: AuthNTLM_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthNegotiate_ConstructProps extends Auth_ConstructProps {
}
class AuthNegotiate {
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
    /* Methods of Soup-2.4.Soup.Auth */
    authenticate(username: string, password: string): void
    canAuthenticate(): boolean
    getAuthorization(msg: Message): string
    getHost(): string
    getInfo(): string
    getProtectionSpace(sourceUri: URI): string[]
    getRealm(): string
    getSavedPassword(user: string): string
    getSavedUsers(): string[]
    getSchemeName(): string
    hasSavedPassword(username: string, password: string): void
    isReady(msg: Message): boolean
    savePassword(username: string, password: string): void
    update(msg: Message, authHeader: string): boolean
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
    constructor (config?: AuthNegotiate_ConstructProps)
    _init (config?: AuthNegotiate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static supported(): boolean
    static $gtype: GObject.Type
}
interface Cache_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Cache */
    cacheDir?: string
    cacheType?: CacheType
}
class Cache {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Cache */
    clear(): void
    dump(): void
    flush(): void
    getMaxSize(): number
    load(): void
    setMaxSize(maxSize: number): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
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
    constructor (config?: Cache_ConstructProps)
    _init (config?: Cache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cacheDir: string | null, cacheType: CacheType): Cache
    static $gtype: GObject.Type
}
interface ContentDecoder_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentDecoder {
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
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
    constructor (config?: ContentDecoder_ConstructProps)
    _init (config?: ContentDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContentSniffer_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentSniffer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.ContentSniffer */
    getBufferSize(): number
    sniff(msg: Message, buffer: Buffer): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
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
    constructor (config?: ContentSniffer_ConstructProps)
    _init (config?: ContentSniffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentSniffer
    static $gtype: GObject.Type
}
interface CookieJar_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.CookieJar */
    acceptPolicy?: CookieJarAcceptPolicy
    readOnly?: boolean
}
class CookieJar {
    /* Properties of Soup-2.4.Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: URI | null, firstParty?: URI | null): void
    addCookieWithFirstParty(firstParty: URI, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: URI, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: URI, topLevel: URI | null, siteForCookies: URI | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: URI, forHttp: boolean): string | null
    isPersistent(): boolean
    save(): void
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: URI, cookie: string): void
    setCookieWithFirstParty(uri: URI, firstParty: URI, cookie: string): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of Soup-2.4.Soup.CookieJar */
    connect(sigName: "changed", callback: ((oldCookie: Cookie, newCookie: Cookie) => void)): number
    on(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CookieJar_ConstructProps)
    _init (config?: CookieJar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CookieJar
    static $gtype: GObject.Type
}
interface CookieJarDB_ConstructProps extends CookieJar_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.CookieJarDB */
    filename?: string
}
class CookieJarDB {
    /* Properties of Soup-2.4.Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of Soup-2.4.Soup.CookieJar */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: URI | null, firstParty?: URI | null): void
    addCookieWithFirstParty(firstParty: URI, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: URI, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: URI, topLevel: URI | null, siteForCookies: URI | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: URI, forHttp: boolean): string | null
    isPersistent(): boolean
    save(): void
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: URI, cookie: string): void
    setCookieWithFirstParty(uri: URI, firstParty: URI, cookie: string): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of Soup-2.4.Soup.CookieJar */
    connect(sigName: "changed", callback: ((oldCookie: Cookie, newCookie: Cookie) => void)): number
    on(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CookieJarDB_ConstructProps)
    _init (config?: CookieJarDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, readOnly: boolean): CookieJarDB
    /* Function overloads */
    static new(): CookieJarDB
    static $gtype: GObject.Type
}
interface CookieJarText_ConstructProps extends CookieJar_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.CookieJarText */
    filename?: string
}
class CookieJarText {
    /* Properties of Soup-2.4.Soup.CookieJar */
    acceptPolicy: CookieJarAcceptPolicy
    /* Fields of Soup-2.4.Soup.CookieJar */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.CookieJar */
    addCookie(cookie: Cookie): void
    addCookieFull(cookie: Cookie, uri?: URI | null, firstParty?: URI | null): void
    addCookieWithFirstParty(firstParty: URI, cookie: Cookie): void
    allCookies(): Cookie[]
    deleteCookie(cookie: Cookie): void
    getAcceptPolicy(): CookieJarAcceptPolicy
    getCookieList(uri: URI, forHttp: boolean): Cookie[]
    getCookieListWithSameSiteInfo(uri: URI, topLevel: URI | null, siteForCookies: URI | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    getCookies(uri: URI, forHttp: boolean): string | null
    isPersistent(): boolean
    save(): void
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    setCookie(uri: URI, cookie: string): void
    setCookieWithFirstParty(uri: URI, firstParty: URI, cookie: string): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of Soup-2.4.Soup.CookieJar */
    connect(sigName: "changed", callback: ((oldCookie: Cookie, newCookie: Cookie) => void)): number
    on(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldCookie: Cookie, newCookie: Cookie) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldCookie: Cookie, newCookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CookieJarText_ConstructProps)
    _init (config?: CookieJarText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, readOnly: boolean): CookieJarText
    /* Function overloads */
    static new(): CookieJarText
    static $gtype: GObject.Type
}
interface HSTSEnforcer_ConstructProps extends GObject.Object_ConstructProps {
}
class HSTSEnforcer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.HSTSEnforcer */
    getDomains(sessionPolicies: boolean): string[]
    getPolicies(sessionPolicies: boolean): HSTSPolicy[]
    hasValidPolicy(domain: string): boolean
    isPersistent(): boolean
    setPolicy(policy: HSTSPolicy): void
    setSessionPolicy(domain: string, includeSubdomains: boolean): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of Soup-2.4.Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: ((oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void)): number
    on(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    connect(sigName: "hsts-enforced", callback: ((message: Message) => void)): number
    on(sigName: "hsts-enforced", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hsts-enforced", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hsts-enforced", callback: (message: Message) => void): NodeJS.EventEmitter
    emit(sigName: "hsts-enforced", message: Message): void
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
    constructor (config?: HSTSEnforcer_ConstructProps)
    _init (config?: HSTSEnforcer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HSTSEnforcer
    static $gtype: GObject.Type
}
interface HSTSEnforcerDB_ConstructProps extends HSTSEnforcer_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.HSTSEnforcerDB */
    filename?: string
}
class HSTSEnforcerDB {
    /* Fields of Soup-2.4.Soup.HSTSEnforcer */
    readonly parent: GObject.Object
    readonly priv: HSTSEnforcerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.HSTSEnforcer */
    getDomains(sessionPolicies: boolean): string[]
    getPolicies(sessionPolicies: boolean): HSTSPolicy[]
    hasValidPolicy(domain: string): boolean
    isPersistent(): boolean
    setPolicy(policy: HSTSPolicy): void
    setSessionPolicy(domain: string, includeSubdomains: boolean): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of Soup-2.4.Soup.HSTSEnforcer */
    connect(sigName: "changed", callback: ((oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void)): number
    on(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void): NodeJS.EventEmitter
    emit(sigName: "changed", oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    connect(sigName: "hsts-enforced", callback: ((message: Message) => void)): number
    on(sigName: "hsts-enforced", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hsts-enforced", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hsts-enforced", callback: (message: Message) => void): NodeJS.EventEmitter
    emit(sigName: "hsts-enforced", message: Message): void
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
    constructor (config?: HSTSEnforcerDB_ConstructProps)
    _init (config?: HSTSEnforcerDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): HSTSEnforcerDB
    /* Function overloads */
    static new(): HSTSEnforcerDB
    static $gtype: GObject.Type
}
interface Logger_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Logger */
    level?: LoggerLogLevel
    maxBodySize?: number
}
class Logger {
    /* Properties of Soup-2.4.Soup.Logger */
    level: LoggerLogLevel
    maxBodySize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Logger */
    attach(session: Session): void
    detach(session: Session): void
    setPrinter(printer: LoggerPrinter): void
    setRequestFilter(requestFilter: LoggerFilter): void
    setResponseFilter(responseFilter: LoggerFilter): void
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-body-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-body-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-body-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-body-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-body-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Logger_ConstructProps)
    _init (config?: Logger_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(level: LoggerLogLevel, maxBodySize: number): Logger
    static $gtype: GObject.Type
}
interface Message_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Message */
    firstParty?: URI
    flags?: MessageFlags
    httpVersion?: HTTPVersion
    isTopLevelNavigation?: boolean
    method?: string
    priority?: MessagePriority
    reasonPhrase?: string
    serverSide?: boolean
    siteForCookies?: URI
    statusCode?: number
    tlsCertificate?: Gio.TlsCertificate
    tlsErrors?: Gio.TlsCertificateFlags
    uri?: URI
}
class Message {
    /* Properties of Soup-2.4.Soup.Message */
    firstParty: URI
    flags: MessageFlags
    httpVersion: HTTPVersion
    isTopLevelNavigation: boolean
    method: string
    priority: MessagePriority
    reasonPhrase: string
    readonly requestBody: MessageBody
    readonly requestBodyData: any
    readonly requestHeaders: MessageHeaders
    readonly responseBody: MessageBody
    readonly responseBodyData: any
    readonly responseHeaders: MessageHeaders
    siteForCookies: URI
    statusCode: number
    tlsCertificate: Gio.TlsCertificate
    tlsErrors: Gio.TlsCertificateFlags
    uri: URI
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Message */
    contentSniffed(contentType: string, params: GLib.HashTable): void
    disableFeature(featureType: GObject.Type): void
    finished(): void
    getAddress(): Address
    getFirstParty(): URI
    getFlags(): MessageFlags
    getHttpVersion(): HTTPVersion
    getHttpsStatus(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    getIsTopLevelNavigation(): boolean
    getPriority(): MessagePriority
    getSiteForCookies(): URI
    getSoupRequest(): Request
    getUri(): URI
    gotBody(): void
    gotChunk(chunk: Buffer): void
    gotHeaders(): void
    gotInformational(): void
    isFeatureDisabled(featureType: GObject.Type): boolean
    isKeepalive(): boolean
    restarted(): void
    setChunkAllocator(allocator: ChunkAllocator): void
    setFirstParty(firstParty: URI): void
    setFlags(flags: MessageFlags): void
    setHttpVersion(version: HTTPVersion): void
    setIsTopLevelNavigation(isTopLevelNavigation: boolean): void
    setPriority(priority: MessagePriority): void
    setRedirect(statusCode: number, redirectUri: string): void
    setRequest(contentType: string | null, reqUse: MemoryUse, reqBody: Uint8Array | null): void
    setResponse(contentType: string | null, respUse: MemoryUse, respBody: Uint8Array | null): void
    setSiteForCookies(siteForCookies?: URI | null): void
    setStatus(statusCode: number): void
    setStatusFull(statusCode: number, reasonPhrase: string): void
    setUri(uri: URI): void
    starting(): void
    wroteBody(): void
    wroteBodyData(chunk: Buffer): void
    wroteChunk(): void
    wroteHeaders(): void
    wroteInformational(): void
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
    /* Signals of Soup-2.4.Soup.Message */
    connect(sigName: "content-sniffed", callback: ((type: string, params: GLib.HashTable) => void)): number
    on(sigName: "content-sniffed", callback: (type: string, params: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-sniffed", callback: (type: string, params: GLib.HashTable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-sniffed", callback: (type: string, params: GLib.HashTable) => void): NodeJS.EventEmitter
    emit(sigName: "content-sniffed", type: string, params: GLib.HashTable): void
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "got-body", callback: (() => void)): number
    on(sigName: "got-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-body", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-body"): void
    connect(sigName: "got-chunk", callback: ((chunk: Buffer) => void)): number
    on(sigName: "got-chunk", callback: (chunk: Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-chunk", callback: (chunk: Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-chunk", callback: (chunk: Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "got-chunk", chunk: Buffer): void
    connect(sigName: "got-headers", callback: (() => void)): number
    on(sigName: "got-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-headers", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-headers"): void
    connect(sigName: "got-informational", callback: (() => void)): number
    on(sigName: "got-informational", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-informational", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-informational", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "got-informational"): void
    connect(sigName: "network-event", callback: ((event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    on(sigName: "network-event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "network-event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "network-event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void): NodeJS.EventEmitter
    emit(sigName: "network-event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    connect(sigName: "restarted", callback: (() => void)): number
    on(sigName: "restarted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restarted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restarted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restarted"): void
    connect(sigName: "starting", callback: (() => void)): number
    on(sigName: "starting", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "starting"): void
    connect(sigName: "wrote-body", callback: (() => void)): number
    on(sigName: "wrote-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-body", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-body", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-body"): void
    connect(sigName: "wrote-body-data", callback: ((chunk: Buffer) => void)): number
    on(sigName: "wrote-body-data", callback: (chunk: Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-body-data", callback: (chunk: Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-body-data", callback: (chunk: Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "wrote-body-data", chunk: Buffer): void
    connect(sigName: "wrote-chunk", callback: (() => void)): number
    on(sigName: "wrote-chunk", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-chunk", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-chunk", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-chunk"): void
    connect(sigName: "wrote-headers", callback: (() => void)): number
    on(sigName: "wrote-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-headers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-headers", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-headers"): void
    connect(sigName: "wrote-informational", callback: (() => void)): number
    on(sigName: "wrote-informational", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-informational", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-informational", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "wrote-informational"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::first-party", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-party", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-party", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-party", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-party", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-top-level-navigation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-top-level-navigation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reason-phrase", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reason-phrase", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reason-phrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reason-phrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reason-phrase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-body", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-body", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-body-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-body-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response-body", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-body", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response-body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response-body-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-body-data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::site-for-cookies", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::site-for-cookies", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(method: string, uriString: string): Message
    static newFromUri(method: string, uri: URI): Message
    static $gtype: GObject.Type
}
interface MultipartInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.MultipartInputStream */
    message?: Message
}
class MultipartInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly parentInstance: Gio.InputStream
    readonly baseStream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.MultipartInputStream */
    getHeaders(): MessageHeaders | null
    nextPart(cancellable?: Gio.Cancellable | null): Gio.InputStream | null
    nextPartAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    nextPartFinish(result: Gio.AsyncResult): Gio.InputStream | null
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    getBaseStream(): Gio.InputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    readAll(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytesRead */ number ]
    readAllAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesRead */ number ]
    readAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    readBytes(count: number, cancellable?: Gio.Cancellable | null): any
    readBytesAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    readBytesFinish(result: Gio.AsyncResult): any
    readFinish(result: Gio.AsyncResult): number
    setPending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skipAsync(count: number, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skipFinish(result: Gio.AsyncResult): number
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
    createSource(cancellable?: Gio.Cancellable | null): GLib.Source
    isReadable(): boolean
    readNonblocking(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
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
    constructor (config?: MultipartInputStream_ConstructProps)
    _init (config?: MultipartInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: Message, baseStream: Gio.InputStream): MultipartInputStream
    static $gtype: GObject.Type
}
interface ProxyResolverDefault_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.ProxyResolverDefault */
    gproxyResolver?: Gio.ProxyResolver
}
class ProxyResolverDefault {
    /* Properties of Soup-2.4.Soup.ProxyResolverDefault */
    gproxyResolver: Gio.ProxyResolver
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
    /* Methods of Soup-2.4.Soup.ProxyURIResolver */
    getProxyUriAsync(uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    getProxyUriSync(uri: URI, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ URI ]
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gproxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gproxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyResolverDefault_ConstructProps)
    _init (config?: ProxyResolverDefault_ConstructProps): void
    static $gtype: GObject.Type
}
interface Request_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Request */
    session?: Session
    uri?: URI
}
class Request {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Request */
    getContentLength(): number
    getContentType(): string | null
    getSession(): Session
    getUri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
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
    constructor (config?: Request_ConstructProps)
    _init (config?: Request_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface RequestData_ConstructProps extends Request_ConstructProps {
}
class RequestData {
    /* Fields of Soup-2.4.Soup.Request */
    readonly parent: GObject.Object
    readonly priv: RequestPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Request */
    getContentLength(): number
    getContentType(): string | null
    getSession(): Session
    getUri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
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
    constructor (config?: RequestData_ConstructProps)
    _init (config?: RequestData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface RequestFile_ConstructProps extends Request_ConstructProps {
}
class RequestFile {
    /* Fields of Soup-2.4.Soup.Request */
    readonly parent: GObject.Object
    readonly priv: RequestPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.RequestFile */
    getFile(): Gio.File
    /* Methods of Soup-2.4.Soup.Request */
    getContentLength(): number
    getContentType(): string | null
    getSession(): Session
    getUri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
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
    constructor (config?: RequestFile_ConstructProps)
    _init (config?: RequestFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface RequestHTTP_ConstructProps extends Request_ConstructProps {
}
class RequestHTTP {
    /* Fields of Soup-2.4.Soup.Request */
    readonly parent: GObject.Object
    readonly priv: RequestPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.RequestHTTP */
    getMessage(): Message
    /* Methods of Soup-2.4.Soup.Request */
    getContentLength(): number
    getContentType(): string | null
    getSession(): Session
    getUri(): URI
    send(cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
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
    constructor (config?: RequestHTTP_ConstructProps)
    _init (config?: RequestHTTP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Requester_ConstructProps extends GObject.Object_ConstructProps {
}
class Requester {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Requester */
    request(uriString: string): Request
    requestUri(uri: URI): Request
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
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
    constructor (config?: Requester_ConstructProps)
    _init (config?: Requester_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Requester
    static $gtype: GObject.Type
}
interface Server_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Server */
    asyncContext?: object
    httpAliases?: string[]
    httpsAliases?: string[]
    interface?: Address
    port?: number
    rawPaths?: boolean
    serverHeader?: string
    sslCertFile?: string
    sslKeyFile?: string
    tlsCertificate?: Gio.TlsCertificate
}
class Server {
    /* Properties of Soup-2.4.Soup.Server */
    httpAliases: string[]
    httpsAliases: string[]
    serverHeader: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Server */
    acceptIostream(stream: Gio.IOStream, localAddr?: Gio.SocketAddress | null, remoteAddr?: Gio.SocketAddress | null): boolean
    addAuthDomain(authDomain: AuthDomain): void
    addEarlyHandler(path: string | null, callback: ServerCallback): void
    addHandler(path: string | null, callback: ServerCallback): void
    addWebsocketExtension(extensionType: GObject.Type): void
    addWebsocketHandler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void
    disconnect(): void
    getAsyncContext(): GLib.MainContext | null
    getListener(): Socket
    getListeners(): Gio.Socket[]
    getPort(): number
    getUris(): URI[]
    isHttps(): boolean
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean
    listenAll(port: number, options: ServerListenOptions): boolean
    listenFd(fd: number, options: ServerListenOptions): boolean
    listenLocal(port: number, options: ServerListenOptions): boolean
    listenSocket(socket: Gio.Socket, options: ServerListenOptions): boolean
    pauseMessage(msg: Message): void
    quit(): void
    removeAuthDomain(authDomain: AuthDomain): void
    removeHandler(path: string): void
    removeWebsocketExtension(extensionType: GObject.Type): void
    run(): void
    runAsync(): void
    setSslCertFile(sslCertFile: string, sslKeyFile: string): boolean
    unpauseMessage(msg: Message): void
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
    /* Signals of Soup-2.4.Soup.Server */
    connect(sigName: "request-aborted", callback: ((message: Message, client: ClientContext) => void)): number
    on(sigName: "request-aborted", callback: (message: Message, client: ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-aborted", callback: (message: Message, client: ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-aborted", callback: (message: Message, client: ClientContext) => void): NodeJS.EventEmitter
    emit(sigName: "request-aborted", message: Message, client: ClientContext): void
    connect(sigName: "request-finished", callback: ((message: Message, client: ClientContext) => void)): number
    on(sigName: "request-finished", callback: (message: Message, client: ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-finished", callback: (message: Message, client: ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-finished", callback: (message: Message, client: ClientContext) => void): NodeJS.EventEmitter
    emit(sigName: "request-finished", message: Message, client: ClientContext): void
    connect(sigName: "request-read", callback: ((message: Message, client: ClientContext) => void)): number
    on(sigName: "request-read", callback: (message: Message, client: ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-read", callback: (message: Message, client: ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-read", callback: (message: Message, client: ClientContext) => void): NodeJS.EventEmitter
    emit(sigName: "request-read", message: Message, client: ClientContext): void
    connect(sigName: "request-started", callback: ((message: Message, client: ClientContext) => void)): number
    on(sigName: "request-started", callback: (message: Message, client: ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (message: Message, client: ClientContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (message: Message, client: ClientContext) => void): NodeJS.EventEmitter
    emit(sigName: "request-started", message: Message, client: ClientContext): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    connect(sigName: "notify::server-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Session */
    acceptLanguage?: string
    acceptLanguageAuto?: boolean
    asyncContext?: object
    httpAliases?: string[]
    httpsAliases?: string[]
    idleTimeout?: number
    localAddress?: Address
    maxConns?: number
    maxConnsPerHost?: number
    proxyResolver?: Gio.ProxyResolver
    proxyUri?: URI
    sslCaFile?: string
    sslStrict?: boolean
    sslUseSystemCaFile?: boolean
    timeout?: number
    tlsDatabase?: Gio.TlsDatabase
    tlsInteraction?: Gio.TlsInteraction
    useNtlm?: boolean
    useThreadContext?: boolean
    userAgent?: string
}
class Session {
    /* Properties of Soup-2.4.Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    httpAliases: string[]
    httpsAliases: string[]
    idleTimeout: number
    maxConns: number
    maxConnsPerHost: number
    proxyResolver: Gio.ProxyResolver
    proxyUri: URI
    sslCaFile: string
    sslStrict: boolean
    sslUseSystemCaFile: boolean
    timeout: number
    tlsDatabase: Gio.TlsDatabase
    tlsInteraction: Gio.TlsInteraction
    useNtlm: boolean
    useThreadContext: boolean
    userAgent: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Session */
    abort(): void
    addFeature(feature: SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    cancelMessage(msg: Message, statusCode: number): void
    connectAsync(uri: URI, cancellable?: Gio.Cancellable | null, progressCallback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    getAsyncContext(): GLib.MainContext | null
    getFeature(featureType: GObject.Type): SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Message): SessionFeature | null
    getFeatures(featureType: GObject.Type): SessionFeature[]
    hasFeature(featureType: GObject.Type): boolean
    pauseMessage(msg: Message): void
    prefetchDns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepareForUri(uri: URI): void
    queueMessage(msg: Message, callback?: SessionCallback | null): void
    redirectMessage(msg: Message): boolean
    removeFeature(feature: SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    request(uriString: string): Request
    requestHttp(method: string, uriString: string): RequestHTTP
    requestHttpUri(method: string, uri: URI): RequestHTTP
    requestUri(uri: URI): Request
    requeueMessage(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    sendMessage(msg: Message): number
    stealConnection(msg: Message): Gio.IOStream
    unpauseMessage(msg: Message): void
    websocketConnectAsync(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection
    wouldRedirect(msg: Message): boolean
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
    connect(sigName: "authenticate", callback: ((msg: Message, auth: Auth, retrying: boolean) => void)): number
    on(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: ((connection: GObject.Object) => void)): number
    on(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: (connection: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: ((msg: Message) => void)): number
    on(sigName: "request-queued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (msg: Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-queued", msg: Message): void
    connect(sigName: "request-started", callback: ((msg: Message, socket: Socket) => void)): number
    on(sigName: "request-started", callback: (msg: Message, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (msg: Message, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (msg: Message, socket: Socket) => void): NodeJS.EventEmitter
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    connect(sigName: "request-unqueued", callback: ((msg: Message) => void)): number
    on(sigName: "request-unqueued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (msg: Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-unqueued", msg: Message): void
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
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Session
    static $gtype: GObject.Type
}
interface SessionAsync_ConstructProps extends Session_ConstructProps {
}
class SessionAsync {
    /* Properties of Soup-2.4.Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    httpAliases: string[]
    httpsAliases: string[]
    idleTimeout: number
    maxConns: number
    maxConnsPerHost: number
    proxyResolver: Gio.ProxyResolver
    proxyUri: URI
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
    /* Methods of Soup-2.4.Soup.Session */
    abort(): void
    addFeature(feature: SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    cancelMessage(msg: Message, statusCode: number): void
    connectAsync(uri: URI, cancellable?: Gio.Cancellable | null, progressCallback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    getAsyncContext(): GLib.MainContext | null
    getFeature(featureType: GObject.Type): SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Message): SessionFeature | null
    getFeatures(featureType: GObject.Type): SessionFeature[]
    hasFeature(featureType: GObject.Type): boolean
    pauseMessage(msg: Message): void
    prefetchDns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepareForUri(uri: URI): void
    queueMessage(msg: Message, callback?: SessionCallback | null): void
    redirectMessage(msg: Message): boolean
    removeFeature(feature: SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    request(uriString: string): Request
    requestHttp(method: string, uriString: string): RequestHTTP
    requestHttpUri(method: string, uri: URI): RequestHTTP
    requestUri(uri: URI): Request
    requeueMessage(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    sendMessage(msg: Message): number
    stealConnection(msg: Message): Gio.IOStream
    unpauseMessage(msg: Message): void
    websocketConnectAsync(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection
    wouldRedirect(msg: Message): boolean
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
    connect(sigName: "authenticate", callback: ((msg: Message, auth: Auth, retrying: boolean) => void)): number
    on(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: ((connection: GObject.Object) => void)): number
    on(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: (connection: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: ((msg: Message) => void)): number
    on(sigName: "request-queued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (msg: Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-queued", msg: Message): void
    connect(sigName: "request-started", callback: ((msg: Message, socket: Socket) => void)): number
    on(sigName: "request-started", callback: (msg: Message, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (msg: Message, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (msg: Message, socket: Socket) => void): NodeJS.EventEmitter
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    connect(sigName: "request-unqueued", callback: ((msg: Message) => void)): number
    on(sigName: "request-unqueued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (msg: Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-unqueued", msg: Message): void
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
    constructor (config?: SessionAsync_ConstructProps)
    _init (config?: SessionAsync_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionAsync
    static $gtype: GObject.Type
}
interface SessionSync_ConstructProps extends Session_ConstructProps {
}
class SessionSync {
    /* Properties of Soup-2.4.Soup.Session */
    acceptLanguage: string
    acceptLanguageAuto: boolean
    httpAliases: string[]
    httpsAliases: string[]
    idleTimeout: number
    maxConns: number
    maxConnsPerHost: number
    proxyResolver: Gio.ProxyResolver
    proxyUri: URI
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
    /* Methods of Soup-2.4.Soup.Session */
    abort(): void
    addFeature(feature: SessionFeature): void
    addFeatureByType(featureType: GObject.Type): void
    cancelMessage(msg: Message, statusCode: number): void
    connectAsync(uri: URI, cancellable?: Gio.Cancellable | null, progressCallback?: SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    getAsyncContext(): GLib.MainContext | null
    getFeature(featureType: GObject.Type): SessionFeature | null
    getFeatureForMessage(featureType: GObject.Type, msg: Message): SessionFeature | null
    getFeatures(featureType: GObject.Type): SessionFeature[]
    hasFeature(featureType: GObject.Type): boolean
    pauseMessage(msg: Message): void
    prefetchDns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: AddressCallback | null): void
    prepareForUri(uri: URI): void
    queueMessage(msg: Message, callback?: SessionCallback | null): void
    redirectMessage(msg: Message): boolean
    removeFeature(feature: SessionFeature): void
    removeFeatureByType(featureType: GObject.Type): void
    request(uriString: string): Request
    requestHttp(method: string, uriString: string): RequestHTTP
    requestHttpUri(method: string, uri: URI): RequestHTTP
    requestUri(uri: URI): Request
    requeueMessage(msg: Message): void
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    sendAsync(msg: Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    sendMessage(msg: Message): number
    stealConnection(msg: Message): Gio.IOStream
    unpauseMessage(msg: Message): void
    websocketConnectAsync(msg: Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection
    wouldRedirect(msg: Message): boolean
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
    connect(sigName: "authenticate", callback: ((msg: Message, auth: Auth, retrying: boolean) => void)): number
    on(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (msg: Message, auth: Auth, retrying: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: ((connection: GObject.Object) => void)): number
    on(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: (connection: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: (connection: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: ((msg: Message) => void)): number
    on(sigName: "request-queued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: (msg: Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-queued", msg: Message): void
    connect(sigName: "request-started", callback: ((msg: Message, socket: Socket) => void)): number
    on(sigName: "request-started", callback: (msg: Message, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: (msg: Message, socket: Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: (msg: Message, socket: Socket) => void): NodeJS.EventEmitter
    emit(sigName: "request-started", msg: Message, socket: Socket): void
    connect(sigName: "request-unqueued", callback: ((msg: Message) => void)): number
    on(sigName: "request-unqueued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: (msg: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: (msg: Message) => void): NodeJS.EventEmitter
    emit(sigName: "request-unqueued", msg: Message): void
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
    constructor (config?: SessionSync_ConstructProps)
    _init (config?: SessionSync_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SessionSync
    static $gtype: GObject.Type
}
interface Socket_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.Socket */
    asyncContext?: object
    fd?: number
    gsocket?: Gio.Socket
    iostream?: Gio.IOStream
    ipv6Only?: boolean
    localAddress?: Address
    nonBlocking?: boolean
    remoteAddress?: Address
    sslCreds?: object
    sslFallback?: boolean
    sslStrict?: boolean
    timeout?: number
    useThreadContext?: boolean
}
class Socket {
    /* Properties of Soup-2.4.Soup.Socket */
    ipv6Only: boolean
    readonly isServer: boolean
    nonBlocking: boolean
    sslCreds: object
    timeout: number
    readonly tlsCertificate: Gio.TlsCertificate
    readonly tlsErrors: Gio.TlsCertificateFlags
    readonly trustedCertificate: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.Socket */
    connectAsync(cancellable: Gio.Cancellable | null, callback: SocketCallback): void
    connectSync(cancellable?: Gio.Cancellable | null): number
    disconnect(): void
    getFd(): number
    getLocalAddress(): Address
    getRemoteAddress(): Address
    isConnected(): boolean
    isSsl(): boolean
    listen(): boolean
    read(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    readUntil(buffer: Uint8Array, boundary: object | null, boundaryLen: number, gotBoundary: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    startProxySsl(sslHost: string, cancellable?: Gio.Cancellable | null): boolean
    startSsl(cancellable?: Gio.Cancellable | null): boolean
    write(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nwrote */ number ]
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
    /* Signals of Soup-2.4.Soup.Socket */
    connect(sigName: "disconnected", callback: (() => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    connect(sigName: "event", callback: ((event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    on(sigName: "event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gio.SocketClientEvent, connection: Gio.IOStream) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    connect(sigName: "new-connection", callback: ((new_: Socket) => void)): number
    on(sigName: "new-connection", callback: (new_: Socket) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-connection", callback: (new_: Socket) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-connection", callback: (new_: Socket) => void): NodeJS.EventEmitter
    emit(sigName: "new-connection", new_: Socket): void
    connect(sigName: "readable", callback: (() => void)): number
    on(sigName: "readable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "readable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "readable", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "readable"): void
    connect(sigName: "writable", callback: (() => void)): number
    on(sigName: "writable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "writable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "writable", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "writable"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ipv6-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ipv6-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ipv6-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ipv6-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ipv6-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-server", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-server", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::non-blocking", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::non-blocking", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::non-blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::non-blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::non-blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssl-creds", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-creds", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssl-creds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssl-creds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssl-creds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trusted-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trusted-certificate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface WebsocketConnection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-2.4.Soup.WebsocketConnection */
    connectionType?: WebsocketConnectionType
    extensions?: object
    ioStream?: Gio.IOStream
    keepaliveInterval?: number
    maxIncomingPayloadSize?: number
    origin?: string
    protocol?: string
    uri?: URI
}
class WebsocketConnection {
    /* Properties of Soup-2.4.Soup.WebsocketConnection */
    keepaliveInterval: number
    maxIncomingPayloadSize: number
    readonly state: WebsocketState
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.WebsocketConnection */
    close(code: number, data?: string | null): void
    getCloseCode(): number
    getCloseData(): string
    getConnectionType(): WebsocketConnectionType
    getExtensions(): WebsocketExtension[]
    getIoStream(): Gio.IOStream
    getKeepaliveInterval(): number
    getMaxIncomingPayloadSize(): number
    getOrigin(): string | null
    getProtocol(): string | null
    getState(): WebsocketState
    getUri(): URI
    sendBinary(data: Uint8Array | null): void
    sendMessage(type: WebsocketDataType, message: any): void
    sendText(text: string): void
    setKeepaliveInterval(interval: number): void
    setMaxIncomingPayloadSize(maxIncomingPayloadSize: number): void
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
    /* Signals of Soup-2.4.Soup.WebsocketConnection */
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "closing", callback: (() => void)): number
    on(sigName: "closing", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closing", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closing", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closing"): void
    connect(sigName: "error", callback: ((error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    connect(sigName: "message", callback: ((type: number, message: any) => void)): number
    on(sigName: "message", callback: (type: number, message: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message", callback: (type: number, message: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message", callback: (type: number, message: any) => void): NodeJS.EventEmitter
    emit(sigName: "message", type: number, message: any): void
    connect(sigName: "pong", callback: ((message: any) => void)): number
    on(sigName: "pong", callback: (message: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pong", callback: (message: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pong", callback: (message: any) => void): NodeJS.EventEmitter
    emit(sigName: "pong", message: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::keepalive-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-incoming-payload-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-incoming-payload-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebsocketConnection_ConstructProps)
    _init (config?: WebsocketConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin?: string | null, protocol?: string | null): WebsocketConnection
    static newWithExtensions(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection
    static $gtype: GObject.Type
}
interface WebsocketExtension_ConstructProps extends GObject.Object_ConstructProps {
}
class WebsocketExtension {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.WebsocketExtension */
    configure(connectionType: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    getRequestParams(): string | null
    getResponseParams(): string | null
    processIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    processOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
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
    constructor (config?: WebsocketExtension_ConstructProps)
    _init (config?: WebsocketExtension_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebsocketExtensionDeflate_ConstructProps extends WebsocketExtension_ConstructProps {
}
class WebsocketExtensionDeflate {
    /* Fields of Soup-2.4.Soup.WebsocketExtension */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Soup-2.4.Soup.WebsocketExtension */
    configure(connectionType: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    getRequestParams(): string | null
    getResponseParams(): string | null
    processIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    processOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
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
    constructor (config?: WebsocketExtensionDeflate_ConstructProps)
    _init (config?: WebsocketExtensionDeflate_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebsocketExtensionManager_ConstructProps extends GObject.Object_ConstructProps {
}
class WebsocketExtensionManager {
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
    /* Methods of Soup-2.4.Soup.SessionFeature */
    addFeature(type: GObject.Type): boolean
    attach(session: Session): void
    detach(session: Session): void
    hasFeature(type: GObject.Type): boolean
    removeFeature(type: GObject.Type): boolean
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
    constructor (config?: WebsocketExtensionManager_ConstructProps)
    _init (config?: WebsocketExtensionManager_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AddressClass {
    /* Fields of Soup-2.4.Soup.AddressClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class AuthClass {
    /* Fields of Soup-2.4.Soup.AuthClass */
    readonly parentClass: GObject.ObjectClass
    readonly schemeName: string
    readonly strength: number
    readonly update: (auth: Auth, msg: Message, authHeader: GLib.HashTable) => boolean
    readonly getProtectionSpace: (auth: Auth, sourceUri: URI) => string[]
    readonly authenticate: (auth: Auth, username: string, password: string) => void
    readonly isAuthenticated: (auth: Auth) => boolean
    readonly getAuthorization: (auth: Auth, msg: Message) => string
    readonly isReady: (auth: Auth, msg: Message) => boolean
    readonly canAuthenticate: (auth: Auth) => boolean
    static name: string
}
abstract class AuthDomainBasicClass {
    /* Fields of Soup-2.4.Soup.AuthDomainBasicClass */
    readonly parentClass: AuthDomainClass
    static name: string
}
abstract class AuthDomainClass {
    /* Fields of Soup-2.4.Soup.AuthDomainClass */
    readonly parentClass: GObject.ObjectClass
    readonly accepts: (domain: AuthDomain, msg: Message, header: string) => string
    readonly challenge: (domain: AuthDomain, msg: Message) => string
    readonly checkPassword: (domain: AuthDomain, msg: Message, username: string, password: string) => boolean
    static name: string
}
abstract class AuthDomainDigestClass {
    /* Fields of Soup-2.4.Soup.AuthDomainDigestClass */
    readonly parentClass: AuthDomainClass
    static name: string
}
abstract class AuthManagerClass {
    /* Fields of Soup-2.4.Soup.AuthManagerClass */
    readonly parentClass: GObject.ObjectClass
    readonly authenticate: (manager: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void
    static name: string
}
class AuthManagerPrivate {
    static name: string
}
class Buffer {
    /* Fields of Soup-2.4.Soup.Buffer */
    readonly data: object
    readonly length: number
    /* Methods of Soup-2.4.Soup.Buffer */
    copy(): Buffer
    free(): void
    getAsBytes(): any
    getData(): /* data */ Uint8Array
    getOwner(): object | null
    newSubbuffer(offset: number, length: number): Buffer
    static name: string
    static new(data: Uint8Array): Buffer
    constructor(data: Uint8Array)
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array): Buffer
    static newWithOwner(data: Uint8Array, owner?: object | null, ownerDnotify?: GLib.DestroyNotify | null): Buffer
}
abstract class CacheClass {
    /* Fields of Soup-2.4.Soup.CacheClass */
    readonly parentClass: GObject.ObjectClass
    readonly getCacheability: (cache: Cache, msg: Message) => Cacheability
    static name: string
}
class CachePrivate {
    static name: string
}
class ClientContext {
    /* Methods of Soup-2.4.Soup.ClientContext */
    getAddress(): Address | null
    getAuthDomain(): AuthDomain | null
    getAuthUser(): string | null
    getGsocket(): Gio.Socket | null
    getHost(): string | null
    getLocalAddress(): Gio.SocketAddress | null
    getRemoteAddress(): Gio.SocketAddress | null
    getSocket(): Socket
    stealConnection(): Gio.IOStream
    static name: string
}
class Connection {
    static name: string
}
abstract class ContentDecoderClass {
    /* Fields of Soup-2.4.Soup.ContentDecoderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ContentDecoderPrivate {
    static name: string
}
abstract class ContentSnifferClass {
    /* Fields of Soup-2.4.Soup.ContentSnifferClass */
    readonly parentClass: GObject.ObjectClass
    readonly sniff: (sniffer: ContentSniffer, msg: Message, buffer: Buffer) => [ /* returnType */ string, /* params */ GLib.HashTable | null ]
    readonly getBufferSize: (sniffer: ContentSniffer) => number
    static name: string
}
class ContentSnifferPrivate {
    static name: string
}
class Cookie {
    /* Fields of Soup-2.4.Soup.Cookie */
    readonly name: string
    readonly value: string
    readonly domain: string
    readonly path: string
    readonly expires: Date
    readonly secure: boolean
    readonly httpOnly: boolean
    /* Methods of Soup-2.4.Soup.Cookie */
    appliesToUri(uri: URI): boolean
    copy(): Cookie
    domainMatches(host: string): boolean
    equal(cookie2: Cookie): boolean
    free(): void
    getDomain(): string
    getExpires(): Date | null
    getHttpOnly(): boolean
    getName(): string
    getPath(): string
    getSameSitePolicy(): SameSitePolicy
    getSecure(): boolean
    getValue(): string
    setDomain(domain: string): void
    setExpires(expires: Date): void
    setHttpOnly(httpOnly: boolean): void
    setMaxAge(maxAge: number): void
    setName(name: string): void
    setPath(path: string): void
    setSameSitePolicy(policy: SameSitePolicy): void
    setSecure(secure: boolean): void
    setValue(value: string): void
    toCookieHeader(): string
    toSetCookieHeader(): string
    static name: string
    static new(name: string, value: string, domain: string, path: string, maxAge: number): Cookie
    constructor(name: string, value: string, domain: string, path: string, maxAge: number)
    /* Static methods and pseudo-constructors */
    static new(name: string, value: string, domain: string, path: string, maxAge: number): Cookie
    static parse(header: string, origin: URI): Cookie | null
}
abstract class CookieJarClass {
    /* Fields of Soup-2.4.Soup.CookieJarClass */
    readonly parentClass: GObject.ObjectClass
    readonly save: (jar: CookieJar) => void
    readonly isPersistent: (jar: CookieJar) => boolean
    readonly changed: (jar: CookieJar, oldCookie: Cookie, newCookie: Cookie) => void
    static name: string
}
abstract class CookieJarDBClass {
    /* Fields of Soup-2.4.Soup.CookieJarDBClass */
    readonly parentClass: CookieJarClass
    static name: string
}
abstract class CookieJarTextClass {
    /* Fields of Soup-2.4.Soup.CookieJarTextClass */
    readonly parentClass: CookieJarClass
    static name: string
}
class Date {
    /* Fields of Soup-2.4.Soup.Date */
    readonly year: number
    readonly month: number
    readonly day: number
    readonly hour: number
    readonly minute: number
    readonly second: number
    readonly utc: boolean
    readonly offset: number
    /* Methods of Soup-2.4.Soup.Date */
    copy(): Date
    free(): void
    getDay(): number
    getHour(): number
    getMinute(): number
    getMonth(): number
    getOffset(): number
    getSecond(): number
    getUtc(): number
    getYear(): number
    isPast(): boolean
    toString(format: DateFormat): string
    toTimeT(): number
    toTimeval(): /* time */ GLib.TimeVal
    static name: string
    static new(year: number, month: number, day: number, hour: number, minute: number, second: number): Date
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number)
    /* Static methods and pseudo-constructors */
    static new(year: number, month: number, day: number, hour: number, minute: number, second: number): Date
    static newFromNow(offsetSeconds: number): Date
    static newFromString(dateString: string): Date
    static newFromTimeT(when: number): Date
}
abstract class HSTSEnforcerClass {
    /* Fields of Soup-2.4.Soup.HSTSEnforcerClass */
    readonly parentClass: GObject.ObjectClass
    readonly isPersistent: (hstsEnforcer: HSTSEnforcer) => boolean
    readonly hasValidPolicy: (hstsEnforcer: HSTSEnforcer, domain: string) => boolean
    readonly changed: (enforcer: HSTSEnforcer, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void
    readonly hstsEnforced: (enforcer: HSTSEnforcer, message: Message) => void
    static name: string
}
abstract class HSTSEnforcerDBClass {
    /* Fields of Soup-2.4.Soup.HSTSEnforcerDBClass */
    readonly parentClass: HSTSEnforcerClass
    static name: string
}
class HSTSEnforcerDBPrivate {
    static name: string
}
class HSTSEnforcerPrivate {
    static name: string
}
class HSTSPolicy {
    /* Fields of Soup-2.4.Soup.HSTSPolicy */
    readonly domain: string
    readonly maxAge: number
    readonly expires: Date
    readonly includeSubdomains: boolean
    /* Methods of Soup-2.4.Soup.HSTSPolicy */
    copy(): HSTSPolicy
    equal(policy2: HSTSPolicy): boolean
    free(): void
    getDomain(): string
    includesSubdomains(): boolean
    isExpired(): boolean
    isSessionPolicy(): boolean
    static name: string
    static new(domain: string, maxAge: number, includeSubdomains: boolean): HSTSPolicy
    constructor(domain: string, maxAge: number, includeSubdomains: boolean)
    /* Static methods and pseudo-constructors */
    static new(domain: string, maxAge: number, includeSubdomains: boolean): HSTSPolicy
    static newFromResponse(msg: Message): HSTSPolicy
    static newFull(domain: string, maxAge: number, expires: Date, includeSubdomains: boolean): HSTSPolicy
    static newSessionPolicy(domain: string, includeSubdomains: boolean): HSTSPolicy
}
abstract class LoggerClass {
    /* Fields of Soup-2.4.Soup.LoggerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MessageBody {
    /* Fields of Soup-2.4.Soup.MessageBody */
    readonly data: string
    readonly length: number
    /* Methods of Soup-2.4.Soup.MessageBody */
    appendBuffer(buffer: Buffer): void
    append(data: Uint8Array): void
    complete(): void
    flatten(): Buffer
    free(): void
    getAccumulate(): boolean
    getChunk(offset: number): Buffer | null
    gotChunk(chunk: Buffer): void
    setAccumulate(accumulate: boolean): void
    truncate(): void
    wroteChunk(chunk: Buffer): void
    static name: string
    static new(): MessageBody
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageBody
}
abstract class MessageClass {
    /* Fields of Soup-2.4.Soup.MessageClass */
    readonly parentClass: GObject.ObjectClass
    readonly wroteInformational: (msg: Message) => void
    readonly wroteHeaders: (msg: Message) => void
    readonly wroteChunk: (msg: Message) => void
    readonly wroteBody: (msg: Message) => void
    readonly gotInformational: (msg: Message) => void
    readonly gotHeaders: (msg: Message) => void
    readonly gotChunk: (msg: Message, chunk: Buffer) => void
    readonly gotBody: (msg: Message) => void
    readonly restarted: (msg: Message) => void
    readonly finished: (msg: Message) => void
    readonly starting: (msg: Message) => void
    static name: string
}
class MessageHeaders {
    /* Methods of Soup-2.4.Soup.MessageHeaders */
    append(name: string, value: string): void
    cleanConnectionHeaders(): void
    clear(): void
    foreach(func: MessageHeadersForeachFunc): void
    free(): void
    freeRanges(ranges: Range): void
    get(name: string): string | null
    getContentDisposition(): [ /* returnType */ boolean, /* disposition */ string, /* params */ GLib.HashTable ]
    getContentLength(): number
    getContentRange(): [ /* returnType */ boolean, /* start */ number, /* end */ number, /* totalLength */ number | null ]
    getContentType(): [ /* returnType */ string | null, /* params */ GLib.HashTable | null ]
    getEncoding(): Encoding
    getExpectations(): Expectation
    getHeadersType(): MessageHeadersType
    getList(name: string): string | null
    getOne(name: string): string | null
    getRanges(totalLength: number): [ /* returnType */ boolean, /* ranges */ Range[] ]
    headerContains(name: string, token: string): boolean
    headerEquals(name: string, value: string): boolean
    remove(name: string): void
    replace(name: string, value: string): void
    setContentDisposition(disposition: string, params?: GLib.HashTable | null): void
    setContentLength(contentLength: number): void
    setContentRange(start: number, end: number, totalLength: number): void
    setContentType(contentType: string, params?: GLib.HashTable | null): void
    setEncoding(encoding: Encoding): void
    setExpectations(expectations: Expectation): void
    setRange(start: number, end: number): void
    setRanges(ranges: Range, length: number): void
    static name: string
    static new(type: MessageHeadersType): MessageHeaders
    constructor(type: MessageHeadersType)
    /* Static methods and pseudo-constructors */
    static new(type: MessageHeadersType): MessageHeaders
}
class MessageHeadersIter {
    /* Methods of Soup-2.4.Soup.MessageHeadersIter */
    next(): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    static name: string
    /* Static methods and pseudo-constructors */
    static init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
}
class MessageQueue {
    static name: string
}
class MessageQueueItem {
    static name: string
}
class Multipart {
    /* Methods of Soup-2.4.Soup.Multipart */
    appendFormFile(controlName: string, filename: string, contentType: string, body: Buffer): void
    appendFormString(controlName: string, data: string): void
    appendPart(headers: MessageHeaders, body: Buffer): void
    free(): void
    getLength(): number
    getPart(part: number): [ /* returnType */ boolean, /* headers */ MessageHeaders, /* body */ Buffer ]
    toMessage(destHeaders: MessageHeaders, destBody: MessageBody): void
    static name: string
    static new(mimeType: string): Multipart
    constructor(mimeType: string)
    /* Static methods and pseudo-constructors */
    static new(mimeType: string): Multipart
    static newFromMessage(headers: MessageHeaders, body: MessageBody): Multipart
}
abstract class MultipartInputStreamClass {
    /* Fields of Soup-2.4.Soup.MultipartInputStreamClass */
    readonly parentClass: Gio.FilterInputStreamClass
    static name: string
}
class MultipartInputStreamPrivate {
    static name: string
}
abstract class PasswordManagerInterface {
    /* Fields of Soup-2.4.Soup.PasswordManagerInterface */
    readonly base: GObject.TypeInterface
    readonly getPasswordsAsync: (passwordManager: PasswordManager, msg: Message, auth: Auth, retrying: boolean, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback) => void
    readonly getPasswordsSync: (passwordManager: PasswordManager, msg: Message, auth: Auth, cancellable?: Gio.Cancellable | null) => void
    static name: string
}
abstract class ProxyResolverDefaultClass {
    /* Fields of Soup-2.4.Soup.ProxyResolverDefaultClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ProxyResolverInterface {
    /* Fields of Soup-2.4.Soup.ProxyResolverInterface */
    readonly base: GObject.TypeInterface
    readonly getProxyAsync: (proxyResolver: ProxyResolver, msg: Message, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback) => void
    readonly getProxySync: (proxyResolver: ProxyResolver, msg: Message, cancellable?: Gio.Cancellable | null) => [ /* returnType */ number, /* addr */ Address ]
    static name: string
}
abstract class ProxyURIResolverInterface {
    /* Fields of Soup-2.4.Soup.ProxyURIResolverInterface */
    readonly base: GObject.TypeInterface
    readonly getProxyUriAsync: (proxyUriResolver: ProxyURIResolver, uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback) => void
    readonly getProxyUriSync: (proxyUriResolver: ProxyURIResolver, uri: URI, cancellable?: Gio.Cancellable | null) => [ /* returnType */ number, /* proxyUri */ URI ]
    static name: string
}
class Range {
    /* Fields of Soup-2.4.Soup.Range */
    readonly start: number
    readonly end: number
    static name: string
}
abstract class RequestClass {
    /* Fields of Soup-2.4.Soup.RequestClass */
    readonly parent: GObject.ObjectClass
    readonly schemes: string
    readonly checkUri: (reqBase: Request, uri: URI) => boolean
    readonly send: (request: Request, cancellable?: Gio.Cancellable | null) => Gio.InputStream
    readonly sendAsync: (request: Request, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly sendFinish: (request: Request, result: Gio.AsyncResult) => Gio.InputStream
    readonly getContentLength: (request: Request) => number
    readonly getContentType: (request: Request) => string | null
    static name: string
}
abstract class RequestDataClass {
    /* Fields of Soup-2.4.Soup.RequestDataClass */
    readonly parent: RequestClass
    static name: string
}
class RequestDataPrivate {
    static name: string
}
abstract class RequestFileClass {
    /* Fields of Soup-2.4.Soup.RequestFileClass */
    readonly parent: RequestClass
    static name: string
}
class RequestFilePrivate {
    static name: string
}
abstract class RequestHTTPClass {
    /* Fields of Soup-2.4.Soup.RequestHTTPClass */
    readonly parent: RequestClass
    static name: string
}
class RequestHTTPPrivate {
    static name: string
}
class RequestPrivate {
    static name: string
}
abstract class RequesterClass {
    /* Fields of Soup-2.4.Soup.RequesterClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class RequesterPrivate {
    static name: string
}
abstract class ServerClass {
    /* Fields of Soup-2.4.Soup.ServerClass */
    readonly parentClass: GObject.ObjectClass
    readonly requestStarted: (server: Server, msg: Message, client: ClientContext) => void
    readonly requestRead: (server: Server, msg: Message, client: ClientContext) => void
    readonly requestFinished: (server: Server, msg: Message, client: ClientContext) => void
    readonly requestAborted: (server: Server, msg: Message, client: ClientContext) => void
    static name: string
}
abstract class SessionAsyncClass {
    /* Fields of Soup-2.4.Soup.SessionAsyncClass */
    readonly parentClass: SessionClass
    static name: string
}
abstract class SessionClass {
    /* Fields of Soup-2.4.Soup.SessionClass */
    readonly parentClass: GObject.ObjectClass
    readonly requestStarted: (session: Session, msg: Message, socket: Socket) => void
    readonly authenticate: (session: Session, msg: Message, auth: Auth, retrying: boolean) => void
    readonly queueMessage: (session: Session, msg: Message, callback?: SessionCallback | null) => void
    readonly requeueMessage: (session: Session, msg: Message) => void
    readonly sendMessage: (session: Session, msg: Message) => number
    readonly cancelMessage: (session: Session, msg: Message, statusCode: number) => void
    readonly authRequired: (session: Session, msg: Message, auth: Auth, retrying: boolean) => void
    readonly flushQueue: (session: Session) => void
    readonly kick: (session: Session) => void
    static name: string
}
abstract class SessionFeatureInterface {
    /* Fields of Soup-2.4.Soup.SessionFeatureInterface */
    readonly parent: GObject.TypeInterface
    readonly attach: (feature: SessionFeature, session: Session) => void
    readonly detach: (feature: SessionFeature, session: Session) => void
    readonly requestQueued: (feature: SessionFeature, session: Session, msg: Message) => void
    readonly requestStarted: (feature: SessionFeature, session: Session, msg: Message, socket: Socket) => void
    readonly requestUnqueued: (feature: SessionFeature, session: Session, msg: Message) => void
    readonly addFeature: (feature: SessionFeature, type: GObject.Type) => boolean
    readonly removeFeature: (feature: SessionFeature, type: GObject.Type) => boolean
    readonly hasFeature: (feature: SessionFeature, type: GObject.Type) => boolean
    static name: string
}
abstract class SessionSyncClass {
    /* Fields of Soup-2.4.Soup.SessionSyncClass */
    readonly parentClass: SessionClass
    static name: string
}
abstract class SocketClass {
    /* Fields of Soup-2.4.Soup.SocketClass */
    readonly parentClass: GObject.ObjectClass
    readonly readable: (sock: Socket) => void
    readonly writable: (sock: Socket) => void
    readonly disconnected: (sock: Socket) => void
    readonly newConnection: (listener: Socket, newSock: Socket) => void
    static name: string
}
class URI {
    /* Fields of Soup-2.4.Soup.URI */
    readonly scheme: string
    readonly user: string
    readonly password: string
    readonly host: string
    readonly port: number
    readonly path: string
    readonly query: string
    readonly fragment: string
    /* Methods of Soup-2.4.Soup.URI */
    copy(): URI
    copyHost(): URI
    equal(uri2: URI): boolean
    free(): void
    getFragment(): string
    getHost(): string
    getPassword(): string
    getPath(): string
    getPort(): number
    getQuery(): string
    getScheme(): string
    getUser(): string
    hostEqual(v2: URI): boolean
    hostHash(): number
    setFragment(fragment?: string | null): void
    setHost(host?: string | null): void
    setPassword(password?: string | null): void
    setPath(path: string): void
    setPort(port: number): void
    setQuery(query?: string | null): void
    setQueryFromForm(form: GLib.HashTable): void
    setScheme(scheme: string): void
    setUser(user?: string | null): void
    toString(justPathAndQuery: boolean): string
    usesDefaultPort(): boolean
    static name: string
    static new(uriString?: string | null): URI
    constructor(uriString?: string | null)
    /* Static methods and pseudo-constructors */
    static new(uriString?: string | null): URI
    static newWithBase(base: URI, uriString: string): URI
    static decode(part: string): string
    static encode(part: string, escapeExtra?: string | null): string
    static normalize(part: string, unescapeExtra?: string | null): string
}
abstract class WebsocketConnectionClass {
    /* Fields of Soup-2.4.Soup.WebsocketConnectionClass */
    readonly parent: GObject.ObjectClass
    readonly message: (self: WebsocketConnection, type: WebsocketDataType, message: any) => void
    readonly error: (self: WebsocketConnection, error: GLib.Error) => void
    readonly closing: (self: WebsocketConnection) => void
    readonly closed: (self: WebsocketConnection) => void
    readonly pong: (self: WebsocketConnection, message: any) => void
    static name: string
}
class WebsocketConnectionPrivate {
    static name: string
}
abstract class WebsocketExtensionClass {
    /* Fields of Soup-2.4.Soup.WebsocketExtensionClass */
    readonly parentClass: GObject.ObjectClass
    readonly name: string
    readonly configure: (extension: WebsocketExtension, connectionType: WebsocketConnectionType, params?: GLib.HashTable | null) => boolean
    readonly getRequestParams: (extension: WebsocketExtension) => string | null
    readonly getResponseParams: (extension: WebsocketExtension) => string | null
    readonly processOutgoingMessage: (extension: WebsocketExtension, header: number, payload: any) => [ /* returnType */ any, /* header */ number ]
    readonly processIncomingMessage: (extension: WebsocketExtension, header: number, payload: any) => [ /* returnType */ any, /* header */ number ]
    static name: string
}
abstract class WebsocketExtensionDeflateClass {
    /* Fields of Soup-2.4.Soup.WebsocketExtensionDeflateClass */
    readonly parentClass: WebsocketExtensionClass
    static name: string
}
abstract class WebsocketExtensionManagerClass {
    /* Fields of Soup-2.4.Soup.WebsocketExtensionManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class XMLRPCParams {
    /* Methods of Soup-2.4.Soup.XMLRPCParams */
    free(): void
    parse(signature?: string | null): GLib.Variant
    static name: string
}
}
export default Soup;