/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Soup-3.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Soup {

enum CacheResponse {
    FRESH,
    NEEDS_VALIDATION,
    STALE,
}
/**
 * The type of cache; this affects what kinds of responses will be
 * saved.
 */
enum CacheType {
    /**
     * a single-user cache
     */
    SINGLE_USER,
    /**
     * a shared cache
     */
    SHARED,
}
/**
 * The policy for accepting or rejecting cookies returned in
 * responses.
 */
enum CookieJarAcceptPolicy {
    /**
     * accept all cookies unconditionally.
     */
    ALWAYS,
    /**
     * reject all cookies unconditionally.
     */
    NEVER,
    /**
     * accept all cookies set by
     * the main document loaded in the application using libsoup. An
     * example of the most common case, web browsers, would be: If
     * http://www.example.com is the page loaded, accept all cookies set
     * by example.com, but if a resource from http://www.third-party.com
     * is loaded from that page reject any cookie that it could try to
     * set. For libsoup to be able to tell apart first party cookies from
     * the rest, the application must call soup_message_set_first_party()
     * on each outgoing #SoupMessage, setting the #GUri of the main
     * document. If no first party is set in a message when this policy is
     * in effect, cookies will be assumed to be third party by default.
     */
    NO_THIRD_PARTY,
    /**
     * accept all cookies
     * set by the main document loaded in the application using libsoup, and
     * from domains that have previously set at least one cookie when loaded
     * as the main document. An example of the most common case, web browsers,
     * would be: if http://www.example.com is the page loaded, accept all
     * cookies set by example.com, but if a resource from http://www.third-party.com
     * is loaded from that page, reject any cookie that it could try to
     * set unless it already has a cookie in the cookie jar. For libsoup to
     * be able to tell apart first party cookies from the rest, the
     * application must call soup_message_set_first_party() on each outgoing
     * #SoupMessage, setting the #GUri of the main document. If no first
     * party is set in a message when this policy is in effect, cookies will
     * be assumed to be third party by default.
     */
    GRANDFATHERED_THIRD_PARTY,
}
/**
 * Date formats that soup_date_time_to_string() can use.
 * 
 * `SOUP_DATE_HTTP` and `SOUP_DATE_COOKIE` always coerce the time to
 * UTC.
 * 
 * This enum may be extended with more values in future releases.
 */
enum DateFormat {
    /**
     * RFC 1123 format, used by the HTTP "Date" header. Eg
     * "Sun, 06 Nov 1994 08:49:37 GMT"
     */
    HTTP,
    /**
     * The format for the "Expires" timestamp in the
     * Netscape cookie specification. Eg, "Sun, 06-Nov-1994 08:49:37 GMT".
     */
    COOKIE,
}
/**
 * How a message body is encoded for transport
 */
enum Encoding {
    /**
     * unknown / error
     */
    UNRECOGNIZED,
    /**
     * no body is present (which is not the same as a
     * 0-length body, and only occurs in certain places)
     */
    NONE,
    /**
     * Content-Length encoding
     */
    CONTENT_LENGTH,
    /**
     * Response body ends when the connection is closed
     */
    EOF,
    /**
     * chunked encoding (currently only supported
     * for response)
     */
    CHUNKED,
    /**
     * multipart/byteranges (Reserved for future
     * use: NOT CURRENTLY IMPLEMENTED)
     */
    BYTERANGES,
}
/**
 * Indicates the HTTP protocol version being used.
 */
enum HTTPVersion {
    /**
     * HTTP 1.0 (RFC 1945)
     */
    HTTP_1_0,
    /**
     * HTTP 1.1 (RFC 2616)
     */
    HTTP_1_1,
    /**
     * HTTP 2.0 (RFC 7540)
     */
    HTTP_2_0,
}
/**
 * Describes the level of logging output to provide.
 */
enum LoggerLogLevel {
    /**
     * No logging
     */
    NONE,
    /**
     * Log the Request-Line or Status-Line and
     * the Soup-Debug pseudo-headers
     */
    MINIMAL,
    /**
     * Log the full request/response headers
     */
    HEADERS,
    /**
     * Log the full headers and request/response bodies
     */
    BODY,
}
/**
 * The lifetime of the memory being passed.
 */
enum MemoryUse {
    /**
     * The memory is statically allocated and
     * constant; libsoup can use the passed-in buffer directly and not
     * need to worry about it being modified or freed.
     */
    STATIC,
    /**
     * The caller has allocated the memory and libsoup
     * will assume ownership of it and free it with g_free().
     */
    TAKE,
    /**
     * The passed-in data belongs to the caller and
     * libsoup will copy it into new memory leaving the caller free
     * to reuse the original memory.
     */
    COPY,
}
/**
 * Value passed to soup_message_headers_new() to set certain default
 * behaviors.
 */
enum MessageHeadersType {
    /**
     * request headers
     */
    REQUEST,
    /**
     * response headers
     */
    RESPONSE,
    /**
     * multipart body part headers
     */
    MULTIPART,
}
/**
 * Priorities that can be set on a #SoupMessage to instruct the
 * message queue to process it before any other message with lower
 * priority.
 */
enum MessagePriority {
    /**
     * The lowest priority, the messages
     *   with this priority will be the last ones to be attended.
     */
    VERY_LOW,
    /**
     * Use this for low priority messages, a
     *   #SoupMessage with the default priority will be processed first.
     */
    LOW,
    /**
     * The default priotity, this is the
     *   priority assigned to the #SoupMessage by default.
     */
    NORMAL,
    /**
     * High priority, a #SoupMessage with
     *   this priority will be processed before the ones with the default
     *   priority.
     */
    HIGH,
    /**
     * The highest priority, use this
     *   for very urgent #SoupMessage as they will be the first ones to be
     *   attended.
     */
    VERY_HIGH,
}
/**
 * Represents the same-site policies of a cookie.
 */
enum SameSitePolicy {
    /**
     * The cookie is exposed with both cross-site and same-site requests
     */
    NONE,
    /**
     * The cookie is withheld on cross-site requests but exposed on cross-site navigations
     */
    LAX,
    /**
     * The cookie is only exposed for same-site requests
     */
    STRICT,
}
/**
 * A #SoupSession error.
 */
enum SessionError {
    /**
     * the server's response could not
     *   be parsed
     */
    PARSING,
    /**
     * the server's response was in an
     *   unsupported format
     */
    ENCODING,
    /**
     * the message has been redirected
     *   too many times
     */
    TOO_MANY_REDIRECTS,
    /**
     * the message has been restarted
     *   too many times
     */
    TOO_MANY_RESTARTS,
    /**
     * failed to redirect message because
     *   Location header was missing or empty in response
     */
    REDIRECT_NO_LOCATION,
    /**
     * failed to redirect message because
     *   Location header contains an invalid URI
     */
    REDIRECT_BAD_URI,
    /**
     * the message is already in the
     *   session queue. Messages can only be reused after unqueued.
     */
    MESSAGE_ALREADY_IN_QUEUE,
}
/**
 * These represent the known HTTP status code values, plus various
 * network and internal errors.
 * 
 * Note that no libsoup functions take or return this type directly;
 * any function that works with status codes will accept unrecognized
 * status codes as well.
 */
enum Status {
    /**
     * No status available. (Eg, the message has not
     * been sent yet)
     */
    NONE,
    /**
     * 100 Continue (HTTP)
     */
    CONTINUE,
    /**
     * 101 Switching Protocols (HTTP)
     */
    SWITCHING_PROTOCOLS,
    /**
     * 102 Processing (WebDAV)
     */
    PROCESSING,
    /**
     * 200 Success (HTTP). Also used by many lower-level
     * soup routines to indicate success.
     */
    OK,
    /**
     * 201 Created (HTTP)
     */
    CREATED,
    /**
     * 202 Accepted (HTTP)
     */
    ACCEPTED,
    /**
     * 203 Non-Authoritative Information
     * (HTTP)
     */
    NON_AUTHORITATIVE,
    /**
     * 204 No Content (HTTP)
     */
    NO_CONTENT,
    /**
     * 205 Reset Content (HTTP)
     */
    RESET_CONTENT,
    /**
     * 206 Partial Content (HTTP)
     */
    PARTIAL_CONTENT,
    /**
     * 207 Multi-Status (WebDAV)
     */
    MULTI_STATUS,
    /**
     * 300 Multiple Choices (HTTP)
     */
    MULTIPLE_CHOICES,
    /**
     * 301 Moved Permanently (HTTP)
     */
    MOVED_PERMANENTLY,
    /**
     * 302 Found (HTTP)
     */
    FOUND,
    /**
     * 302 Moved Temporarily (old name,
     * RFC 2068)
     */
    MOVED_TEMPORARILY,
    /**
     * 303 See Other (HTTP)
     */
    SEE_OTHER,
    /**
     * 304 Not Modified (HTTP)
     */
    NOT_MODIFIED,
    /**
     * 305 Use Proxy (HTTP)
     */
    USE_PROXY,
    /**
     * 306 [Unused] (HTTP)
     */
    NOT_APPEARING_IN_THIS_PROTOCOL,
    /**
     * 307 Temporary Redirect (HTTP)
     */
    TEMPORARY_REDIRECT,
    /**
     * 308 Permanent Redirect (HTTP)
     */
    PERMANENT_REDIRECT,
    /**
     * 400 Bad Request (HTTP)
     */
    BAD_REQUEST,
    /**
     * 401 Unauthorized (HTTP)
     */
    UNAUTHORIZED,
    /**
     * 402 Payment Required (HTTP)
     */
    PAYMENT_REQUIRED,
    /**
     * 403 Forbidden (HTTP)
     */
    FORBIDDEN,
    /**
     * 404 Not Found (HTTP)
     */
    NOT_FOUND,
    /**
     * 405 Method Not Allowed (HTTP)
     */
    METHOD_NOT_ALLOWED,
    /**
     * 406 Not Acceptable (HTTP)
     */
    NOT_ACCEPTABLE,
    /**
     * 407 Proxy Authentication
     * Required (HTTP)
     */
    PROXY_AUTHENTICATION_REQUIRED,
    /**
     * shorter alias for
     * %SOUP_STATUS_PROXY_AUTHENTICATION_REQUIRED
     */
    PROXY_UNAUTHORIZED,
    /**
     * 408 Request Timeout (HTTP)
     */
    REQUEST_TIMEOUT,
    /**
     * 409 Conflict (HTTP)
     */
    CONFLICT,
    /**
     * 410 Gone (HTTP)
     */
    GONE,
    /**
     * 411 Length Required (HTTP)
     */
    LENGTH_REQUIRED,
    /**
     * 412 Precondition Failed (HTTP)
     */
    PRECONDITION_FAILED,
    /**
     * 413 Request Entity Too Large
     * (HTTP)
     */
    REQUEST_ENTITY_TOO_LARGE,
    /**
     * 414 Request-URI Too Long (HTTP)
     */
    REQUEST_URI_TOO_LONG,
    /**
     * 415 Unsupported Media Type
     * (HTTP)
     */
    UNSUPPORTED_MEDIA_TYPE,
    /**
     * 416 Requested Range
     * Not Satisfiable (HTTP)
     */
    REQUESTED_RANGE_NOT_SATISFIABLE,
    /**
     * shorter alias for
     * %SOUP_STATUS_REQUESTED_RANGE_NOT_SATISFIABLE
     */
    INVALID_RANGE,
    /**
     * 417 Expectation Failed (HTTP)
     */
    EXPECTATION_FAILED,
    /**
     * 421 Misdirected Request
     */
    MISDIRECTED_REQUEST,
    /**
     * 422 Unprocessable Entity
     * (WebDAV)
     */
    UNPROCESSABLE_ENTITY,
    /**
     * 423 Locked (WebDAV)
     */
    LOCKED,
    /**
     * 424 Failed Dependency (WebDAV)
     */
    FAILED_DEPENDENCY,
    /**
     * 500 Internal Server Error
     * (HTTP)
     */
    INTERNAL_SERVER_ERROR,
    /**
     * 501 Not Implemented (HTTP)
     */
    NOT_IMPLEMENTED,
    /**
     * 502 Bad Gateway (HTTP)
     */
    BAD_GATEWAY,
    /**
     * 503 Service Unavailable (HTTP)
     */
    SERVICE_UNAVAILABLE,
    /**
     * 504 Gateway Timeout (HTTP)
     */
    GATEWAY_TIMEOUT,
    /**
     * 505 HTTP Version Not
     * Supported (HTTP)
     */
    HTTP_VERSION_NOT_SUPPORTED,
    /**
     * 507 Insufficient Storage
     * (WebDAV)
     */
    INSUFFICIENT_STORAGE,
    /**
     * 510 Not Extended (RFC 2774)
     */
    NOT_EXTENDED,
}
/**
 * Error codes for %SOUP_TLD_ERROR.
 */
enum TLDError {
    /**
     * A hostname was syntactically
     *   invalid.
     */
    INVALID_HOSTNAME,
    /**
     * The passed-in "hostname" was
     *   actually an IP address (and thus has no base domain or
     *   public suffix).
     */
    IS_IP_ADDRESS,
    /**
     * The passed-in hostname
     *   did not have enough components. Eg, calling
     *   soup_tld_get_base_domain() on <literal>"co.uk"</literal>.
     */
    NOT_ENOUGH_DOMAINS,
    /**
     * The passed-in hostname has
     *   no recognized public suffix.
     */
    NO_BASE_DOMAIN,
    /**
     * The Public Suffix List was not
     *   available.
     */
    NO_PSL_DATA,
}
/**
 * Enum values passed to soup_uri_copy() to indicate the components of
 * the URI that should be updated with the given values.
 */
enum URIComponent {
    /**
     * no component
     */
    NONE,
    /**
     * the URI scheme component
     */
    SCHEME,
    /**
     * the URI user component
     */
    USER,
    /**
     * the URI password component
     */
    PASSWORD,
    /**
     * the URI authentication parameters component
     */
    AUTH_PARAMS,
    /**
     * the URI host component
     */
    HOST,
    /**
     * the URI port component
     */
    PORT,
    /**
     * the URI path component
     */
    PATH,
    /**
     * the URI query component
     */
    QUERY,
    /**
     * the URI fragment component
     */
    FRAGMENT,
}
/**
 * Pre-defined close codes that can be passed to
 * soup_websocket_connection_close() or received from
 * soup_websocket_connection_get_close_code(). (However, other codes
 * are also allowed.)
 */
enum WebsocketCloseCode {
    /**
     * a normal, non-error close
     */
    NORMAL,
    /**
     * the client/server is going away
     */
    GOING_AWAY,
    /**
     * a protocol error occurred
     */
    PROTOCOL_ERROR,
    /**
     * the endpoint received data
     *   of a type that it does not support.
     */
    UNSUPPORTED_DATA,
    /**
     * reserved value indicating that
     *   no close code was present; must not be sent.
     */
    NO_STATUS,
    /**
     * reserved value indicating that
     *   the connection was closed abnormally; must not be sent.
     */
    ABNORMAL,
    /**
     * the endpoint received data that
     *   was invalid (eg, non-UTF-8 data in a text message).
     */
    BAD_DATA,
    /**
     * generic error code
     *   indicating some sort of policy violation.
     */
    POLICY_VIOLATION,
    /**
     * the endpoint received a message
     *   that is too big to process.
     */
    TOO_BIG,
    /**
     * the client is closing the
     *   connection because the server failed to negotiate a required
     *   extension.
     */
    NO_EXTENSION,
    /**
     * the server is closing the
     *   connection because it was unable to fulfill the request.
     */
    SERVER_ERROR,
    /**
     * reserved value indicating that
     *   the TLS handshake failed; must not be sent.
     */
    TLS_HANDSHAKE,
}
/**
 * The type of a #SoupWebsocketConnection.
 */
enum WebsocketConnectionType {
    /**
     * unknown/invalid connection
     */
    UNKNOWN,
    /**
     * a client-side connection
     */
    CLIENT,
    /**
     * a server-side connection
     */
    SERVER,
}
/**
 * The type of data contained in a #SoupWebsocketConnection::message
 * signal.
 */
enum WebsocketDataType {
    /**
     * UTF-8 text
     */
    TEXT,
    /**
     * binary data
     */
    BINARY,
}
/**
 * WebSocket-related errors.
 */
enum WebsocketError {
    /**
     * a generic error
     */
    FAILED,
    /**
     * attempted to handshake with a
     *   server that does not appear to understand WebSockets.
     */
    NOT_WEBSOCKET,
    /**
     * the WebSocket handshake failed
     *   because some detail was invalid (eg, incorrect accept key).
     */
    BAD_HANDSHAKE,
    /**
     * the WebSocket handshake failed
     *   because the "Origin" header was not an allowed value.
     */
    BAD_ORIGIN,
}
/**
 * The state of the WebSocket connection.
 */
enum WebsocketState {
    /**
     * the connection is ready to send messages
     */
    OPEN,
    /**
     * the connection is in the process of
     *   closing down; messages may be received, but not sent
     */
    CLOSING,
    /**
     * the connection is completely closed down
     */
    CLOSED,
}
enum Cacheability {
    CACHEABLE,
    UNCACHEABLE,
    INVALIDATES,
    VALIDATES,
}
/**
 * Represents the parsed value of the "Expect" header.
 */
enum Expectation {
    /**
     * any unrecognized expectation
     */
    UNRECOGNIZED,
    /**
     * "100-continue"
     */
    CONTINUE,
}
/**
 * Various flags that can be set on a #SoupMessage to alter its
 * behavior.
 */
enum MessageFlags {
    /**
     * The session should not follow redirect
     *   (3xx) responses received by this message.
     */
    NO_REDIRECT,
    /**
     * Requests that the message should be
     *   sent on a newly-created connection, not reusing an existing
     *   persistent connection. Note that messages with non-idempotent
     *   #SoupMessage:method<!-- -->s behave this way by default, unless
     *   #SOUP_MESSAGE_IDEMPOTENT is set.
     */
    NEW_CONNECTION,
    /**
     * The message is considered idempotent,
     *   regardless its #SoupMessage:method, and allows reuse of existing
     *   idle connections, instead of always requiring a new one, unless
     *   #SOUP_MESSAGE_NEW_CONNECTION is set.
     */
    IDEMPOTENT,
    /**
     * The #SoupAuthManager should not use
     *   the credentials cache for this message, neither to use cached credentials
     *   to automatically authenticate this message nor to cache the credentials
     *   after the message is successfully authenticated. This applies to both server
     *   and proxy authentication. Note that #SoupMessage::authenticate signal will
     *   be emitted, if you want to disable authentication for a message use
     *   soup_message_disable_feature() passing #SOUP_TYPE_AUTH_MANAGER instead.
     */
    DO_NOT_USE_AUTH_CACHE,
    /**
     * Metrics will be collected for this message.
     */
    COLLECT_METRICS,
}
/**
 * Options to pass to soup_server_listen(), etc.
 * 
 * %SOUP_SERVER_LISTEN_IPV4_ONLY and %SOUP_SERVER_LISTEN_IPV6_ONLY
 * only make sense with soup_server_listen_all() and
 * soup_server_listen_local(), not plain soup_server_listen() (which
 * simply listens on whatever kind of socket you give it). And you
 * cannot specify both of them in a single call.
 */
enum ServerListenOptions {
    /**
     * Listen for https connections rather
     *   than plain http.
     */
    HTTPS,
    /**
     * Only listen on IPv4 interfaces.
     */
    IPV4_ONLY,
    /**
     * Only listen on IPv6 interfaces.
     */
    IPV6_ONLY,
}
/**
 * A constant corresponding to 1 day, for use with soup_cookie_new()
 * and soup_cookie_set_max_age().
 */
const COOKIE_MAX_AGE_ONE_DAY: number
/**
 * A constant corresponding to 1 hour, for use with soup_cookie_new()
 * and soup_cookie_set_max_age().
 */
const COOKIE_MAX_AGE_ONE_HOUR: number
/**
 * A constant corresponding to 1 week, for use with soup_cookie_new()
 * and soup_cookie_set_max_age().
 */
const COOKIE_MAX_AGE_ONE_WEEK: number
/**
 * A constant corresponding to 1 year, for use with soup_cookie_new()
 * and soup_cookie_set_max_age().
 */
const COOKIE_MAX_AGE_ONE_YEAR: number
/**
 * A macro containing the value
 * <literal>"multipart/form-data"</literal>; the MIME type used for
 * posting form data that contains files to be uploaded.
 */
const FORM_MIME_TYPE_MULTIPART: string
/**
 * A macro containing the value
 * <literal>"application/x-www-form-urlencoded"</literal>; the default
 * MIME type for POSTing HTML form data.
 */
const FORM_MIME_TYPE_URLENCODED: string
/**
 * An expiration date that is always in the past.
 */
const HSTS_POLICY_MAX_AGE_PAST: number
/**
 * The set of #GUriFlags libsoup expects all #GUri to use.
 */
const HTTP_URI_FLAGS: number
/**
 * Like soup_get_major_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MAJOR_VERSION: number
/**
 * Like soup_get_micro_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MICRO_VERSION: number
/**
 * Like soup_get_minor_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MINOR_VERSION: number
/**
 * A macro that should be defined by the user prior to including
 * libsoup.h. The definition should be one of the predefined libsoup
 * version macros: %SOUP_VERSION_2_24, %SOUP_VERSION_2_26, ...
 * 
 * This macro defines the earliest version of libsoup that the package
 * is required to be able to compile against.
 * 
 * If the compiler is configured to warn about the use of deprecated
 * functions, then using functions that were deprecated in version
 * %SOUP_VERSION_MIN_REQUIRED or earlier will cause warnings (but
 * using functions deprecated in later releases will not).
 */
const VERSION_MIN_REQUIRED: number
function check_version(major: number, minor: number, micro: number): boolean
function cookie_parse(header: string, origin?: GLib.Uri | null): Cookie | null
function cookies_from_request(msg: Message): Cookie[]
function cookies_from_response(msg: Message): Cookie[]
function cookies_to_cookie_header(cookies: Cookie[]): string
function cookies_to_request(cookies: Cookie[], msg: Message): void
function cookies_to_response(cookies: Cookie[], msg: Message): void
function date_time_new_from_http_string(date_string: string): GLib.DateTime | null
function date_time_to_string(date: GLib.DateTime, format: DateFormat): string
function form_decode(encoded_form: string): GLib.HashTable
function form_decode_multipart(multipart: Multipart, file_control_name?: string | null): [ /* returnType */ GLib.HashTable | null, /* filename */ string | null, /* content_type */ string | null, /* file */ GLib.Bytes | null ]
function form_encode_datalist(form_data_set: GLib.Data): string
function form_encode_hash(form_data_set: GLib.HashTable): string
function get_major_version(): number
function get_micro_version(): number
function get_minor_version(): number
function header_contains(header: string, token: string): boolean
function header_free_param_list(param_list: GLib.HashTable): void
function header_g_string_append_param(string: GLib.String, name: string, value: string): void
function header_g_string_append_param_quoted(string: GLib.String, name: string, value: string): void
function header_parse_list(header: string): string[]
function header_parse_param_list(header: string): GLib.HashTable
function header_parse_param_list_strict(header: string): GLib.HashTable | null
function header_parse_quality_list(header: string): [ /* returnType */ string[], /* unacceptable */ string[] | null ]
function header_parse_semi_param_list(header: string): GLib.HashTable
function header_parse_semi_param_list_strict(header: string): GLib.HashTable | null
function headers_parse(str: string, len: number, dest: MessageHeaders): boolean
function headers_parse_request(str: string, len: number, req_headers: MessageHeaders): [ /* returnType */ number, /* req_method */ string | null, /* req_path */ string | null, /* ver */ HTTPVersion | null ]
function headers_parse_response(str: string, len: number, headers: MessageHeaders): [ /* returnType */ boolean, /* ver */ HTTPVersion | null, /* status_code */ number | null, /* reason_phrase */ string | null ]
function headers_parse_status_line(status_line: string): [ /* returnType */ boolean, /* ver */ HTTPVersion | null, /* status_code */ number | null, /* reason_phrase */ string | null ]
function message_headers_iter_init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
function session_error_quark(): GLib.Quark
function status_get_phrase(status_code: number): string
function tld_domain_is_public_suffix(domain: string): boolean
function tld_error_quark(): GLib.Quark
function tld_get_base_domain(hostname: string): string
function uri_decode_data_uri(uri: string): [ /* returnType */ GLib.Bytes, /* content_type */ string | null ]
function uri_equal(uri1: GLib.Uri, uri2: GLib.Uri): boolean
function websocket_client_prepare_handshake(msg: Message, origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): void
function websocket_client_verify_handshake(msg: Message, supported_extensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* accepted_extensions */ WebsocketExtension[] | null ]
function websocket_error_quark(): GLib.Quark
function websocket_server_check_handshake(msg: ServerMessage, origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): boolean
function websocket_server_process_handshake(msg: ServerMessage, expected_origin?: string | null, protocols?: string[] | null, supported_extensions?: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* accepted_extensions */ WebsocketExtension[] | null ]
/**
 * Callback used by #SoupAuthDomainBasic for authentication purposes.
 * The application should verify that `username` and `password` and valid
 * and return %TRUE or %FALSE.
 * 
 * If you are maintaining your own password database (rather than
 * using the password to authenticate against some other system like
 * PAM or a remote server), you should make sure you know what you are
 * doing. In particular, don't store cleartext passwords, or
 * easily-computed hashes of cleartext passwords, even if you don't
 * care that much about the security of your server, because users
 * will frequently use the same password for multiple sites, and so
 * compromising any site with a cleartext (or easily-cracked) password
 * database may give attackers access to other more-interesting sites
 * as well.
 */
interface AuthDomainBasicAuthCallback {
    (domain: AuthDomainBasic, msg: ServerMessage, username: string, password: string): boolean
}
/**
 * Callback used by #SoupAuthDomainDigest for authentication purposes.
 * The application should look up `username` in its password database,
 * and return the corresponding encoded password (see
 * soup_auth_domain_digest_encode_password()).
 */
interface AuthDomainDigestAuthCallback {
    (domain: AuthDomainDigest, msg: ServerMessage, username: string): string | null
}
/**
 * The prototype for a #SoupAuthDomain filter; see
 * soup_auth_domain_set_filter() for details.
 */
interface AuthDomainFilter {
    (domain: AuthDomain, msg: ServerMessage): boolean
}
/**
 * The prototype for a #SoupAuthDomain generic authentication callback.
 * 
 * The callback should look up the user's password, call
 * soup_auth_domain_check_password(), and use the return value from
 * that method as its own return value.
 * 
 * In general, for security reasons, it is preferable to use the
 * auth-domain-specific auth callbacks (eg,
 * #SoupAuthDomainBasicAuthCallback and
 * #SoupAuthDomainDigestAuthCallback), because they don't require
 * keeping a cleartext password database. Most users will use the same
 * password for many different sites, meaning if any site with a
 * cleartext password database is compromised, accounts on other
 * servers might be compromised as well. For many of the cases where
 * #SoupServer is used, this is not really relevant, but it may still
 * be worth considering.
 */
interface AuthDomainGenericAuthCallback {
    (domain: AuthDomain, msg: ServerMessage, username: string): boolean
}
/**
 * The prototype for a logging filter. The filter callback will be
 * invoked for each request or response, and should analyze it and
 * return a #SoupLoggerLogLevel value indicating how much of the
 * message to log.
 */
interface LoggerFilter {
    (logger: Logger, msg: Message): LoggerLogLevel
}
/**
 * The prototype for a custom printing callback.
 * 
 * `level` indicates what kind of information is being printed. Eg, it
 * will be %SOUP_LOGGER_LOG_HEADERS if `data` is header data.
 * 
 * `direction` is either '<', '>', or ' ', and `data` is the single line
 * to print; the printer is expected to add a terminating newline.
 * 
 * To get the effect of the default printer, you would do:
 * 
 * <informalexample><programlisting>
 * printf ("%c %s\n", direction, data);
 * </programlisting></informalexample>
 */
interface LoggerPrinter {
    (logger: Logger, level: LoggerLogLevel, direction: number, data: string): void
}
/**
 * The callback passed to soup_message_headers_foreach().
 */
interface MessageHeadersForeachFunc {
    (name: string, value: string): void
}
/**
 * A callback used to handle requests to a #SoupServer.
 * 
 * `path` and `query` contain the likewise-named components of the
 * Request-URI, subject to certain assumptions. By default,
 * #SoupServer decodes all percent-encoding in the URI path, such that
 * "/foo%<!-- -->2Fbar" is treated the same as "/foo/bar". If your
 * server is serving resources in some non-POSIX-filesystem namespace,
 * you may want to distinguish those as two distinct paths. In that
 * case, you can set the SoupServer:raw-paths property when creating
 * the #SoupServer, and it will leave those characters undecoded.
 * 
 * `query` contains the query component of the Request-URI parsed
 * according to the rules for HTML form handling. Although this is the
 * only commonly-used query string format in HTTP, there is nothing
 * that actually requires that HTTP URIs use that format; if your
 * server needs to use some other format, you can just ignore `query,`
 * and call soup_message_get_uri() and parse the URI's query field
 * yourself.
 * 
 * See soup_server_add_handler() and soup_server_add_early_handler()
 * for details of what handlers can/should do.
 */
interface ServerCallback {
    (server: Server, msg: ServerMessage, path: string, query?: GLib.HashTable | null): void
}
/**
 * A callback used to handle WebSocket requests to a #SoupServer. The
 * callback will be invoked after sending the handshake response back
 * to the client (and is only invoked if the handshake was
 * successful).
 * 
 * `path` contains the path of the Request-URI, subject to the same
 * rules as #SoupServerCallback (qv).
 */
interface ServerWebsocketCallback {
    (server: Server, msg: ServerMessage, path: string, connection: WebsocketConnection): void
}
class SessionFeature {
    static name: string
}
interface Auth_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.Auth */
    /**
     * The authority (host:port) being authenticated to.
     */
    authority?: string
    /**
     * Whether or not the auth is for a proxy server.
     */
    is_for_proxy?: boolean
    /**
     * The authentication realm.
     */
    realm?: string
}
class Auth {
    /* Properties of Soup-3.0.Soup.Auth */
    /**
     * The authority (host:port) being authenticated to.
     */
    authority: string
    /**
     * Whether or not the auth has been authenticated.
     */
    readonly is_authenticated: boolean
    /**
     * An alias for the #SoupAuth:is-cancelled property.
     * (Whether or not the auth has been cancelled.)
     */
    readonly is_cancelled: boolean
    /**
     * Whether or not the auth is for a proxy server.
     */
    is_for_proxy: boolean
    /**
     * The authentication realm.
     */
    realm: string
    /**
     * The authentication scheme name.
     */
    readonly scheme_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    can_authenticate(): boolean
    /**
     * Call this on an auth to cancel it. You need to cancel an auth to complete
     * an asynchronous authenticate operation when no credentials are provided
     * (soup_auth_authenticate() is not called).
     * The #SoupAuth will be cancelled on dispose if it hans't been authenticated.
     */
    cancel(): void
    /**
     * Returns the authority (host:port) that `auth` is associated with.
     */
    get_authority(): string
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    get_authorization(msg: Message): string
    /**
     * Gets an opaque identifier for `auth,` for use as a hash key or the
     * like. #SoupAuth objects from the same server with the same
     * identifier refer to the same authentication domain (eg, the URLs
     * associated with them take the same usernames and passwords).
     */
    get_info(): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Returns `auth'`s realm. This is an identifier that distinguishes
     * separate authentication spaces on a given server, and may be some
     * string that is meaningful to the user. (Although it is probably not
     * localized.)
     */
    get_realm(): string
    /**
     * Returns `auth'`s scheme name. (Eg, "Basic", "Digest", or "NTLM")
     */
    get_scheme_name(): string
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    update(msg: Message, auth_header: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    vfunc_authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    vfunc_can_authenticate(): boolean
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    vfunc_get_authorization(msg: Message): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Tests if `auth` has been given a username and password
     */
    vfunc_is_authenticated(): boolean
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    vfunc_is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: Auth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Auth_ConstructProps)
    _init (config?: Auth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type, msg: Message, auth_header: string): Auth
    static $gtype: GObject.Type
}
interface AuthBasic_ConstructProps extends Auth_ConstructProps {
}
class AuthBasic {
    /* Properties of Soup-3.0.Soup.Auth */
    /**
     * The authority (host:port) being authenticated to.
     */
    authority: string
    /**
     * Whether or not the auth has been authenticated.
     */
    readonly is_authenticated: boolean
    /**
     * An alias for the #SoupAuth:is-cancelled property.
     * (Whether or not the auth has been cancelled.)
     */
    readonly is_cancelled: boolean
    /**
     * Whether or not the auth is for a proxy server.
     */
    is_for_proxy: boolean
    /**
     * The authentication realm.
     */
    realm: string
    /**
     * The authentication scheme name.
     */
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    can_authenticate(): boolean
    /**
     * Call this on an auth to cancel it. You need to cancel an auth to complete
     * an asynchronous authenticate operation when no credentials are provided
     * (soup_auth_authenticate() is not called).
     * The #SoupAuth will be cancelled on dispose if it hans't been authenticated.
     */
    cancel(): void
    /**
     * Returns the authority (host:port) that `auth` is associated with.
     */
    get_authority(): string
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    get_authorization(msg: Message): string
    /**
     * Gets an opaque identifier for `auth,` for use as a hash key or the
     * like. #SoupAuth objects from the same server with the same
     * identifier refer to the same authentication domain (eg, the URLs
     * associated with them take the same usernames and passwords).
     */
    get_info(): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Returns `auth'`s realm. This is an identifier that distinguishes
     * separate authentication spaces on a given server, and may be some
     * string that is meaningful to the user. (Although it is probably not
     * localized.)
     */
    get_realm(): string
    /**
     * Returns `auth'`s scheme name. (Eg, "Basic", "Digest", or "NTLM")
     */
    get_scheme_name(): string
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    update(msg: Message, auth_header: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    vfunc_authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    vfunc_can_authenticate(): boolean
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    vfunc_get_authorization(msg: Message): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Tests if `auth` has been given a username and password
     */
    vfunc_is_authenticated(): boolean
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    vfunc_is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthBasic_ConstructProps)
    _init (config?: AuthBasic_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthDigest_ConstructProps extends Auth_ConstructProps {
}
class AuthDigest {
    /* Properties of Soup-3.0.Soup.Auth */
    /**
     * The authority (host:port) being authenticated to.
     */
    authority: string
    /**
     * Whether or not the auth has been authenticated.
     */
    readonly is_authenticated: boolean
    /**
     * An alias for the #SoupAuth:is-cancelled property.
     * (Whether or not the auth has been cancelled.)
     */
    readonly is_cancelled: boolean
    /**
     * Whether or not the auth is for a proxy server.
     */
    is_for_proxy: boolean
    /**
     * The authentication realm.
     */
    realm: string
    /**
     * The authentication scheme name.
     */
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    can_authenticate(): boolean
    /**
     * Call this on an auth to cancel it. You need to cancel an auth to complete
     * an asynchronous authenticate operation when no credentials are provided
     * (soup_auth_authenticate() is not called).
     * The #SoupAuth will be cancelled on dispose if it hans't been authenticated.
     */
    cancel(): void
    /**
     * Returns the authority (host:port) that `auth` is associated with.
     */
    get_authority(): string
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    get_authorization(msg: Message): string
    /**
     * Gets an opaque identifier for `auth,` for use as a hash key or the
     * like. #SoupAuth objects from the same server with the same
     * identifier refer to the same authentication domain (eg, the URLs
     * associated with them take the same usernames and passwords).
     */
    get_info(): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Returns `auth'`s realm. This is an identifier that distinguishes
     * separate authentication spaces on a given server, and may be some
     * string that is meaningful to the user. (Although it is probably not
     * localized.)
     */
    get_realm(): string
    /**
     * Returns `auth'`s scheme name. (Eg, "Basic", "Digest", or "NTLM")
     */
    get_scheme_name(): string
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    update(msg: Message, auth_header: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    vfunc_authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    vfunc_can_authenticate(): boolean
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    vfunc_get_authorization(msg: Message): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Tests if `auth` has been given a username and password
     */
    vfunc_is_authenticated(): boolean
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    vfunc_is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthDigest_ConstructProps)
    _init (config?: AuthDigest_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthDomain_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.AuthDomain */
    /**
     * The #SoupAuthDomainFilter for the domain.
     */
    filter?: AuthDomainFilter
    /**
     * Data to pass to the #SoupAuthDomainFilter.
     */
    filter_data?: object
    /**
     * The #SoupAuthDomainGenericAuthCallback.
     */
    generic_auth_callback?: AuthDomainGenericAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainGenericAuthCallback.
     */
    generic_auth_data?: object
    proxy?: boolean
    realm?: string
}
class AuthDomain {
    /* Properties of Soup-3.0.Soup.AuthDomain */
    /**
     * The #SoupAuthDomainFilter for the domain.
     */
    filter: AuthDomainFilter
    /**
     * Data to pass to the #SoupAuthDomainFilter.
     */
    filter_data: object
    /**
     * The #SoupAuthDomainGenericAuthCallback.
     */
    generic_auth_callback: AuthDomainGenericAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainGenericAuthCallback.
     */
    generic_auth_data: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomain */
    /**
     * Checks if `msg` contains appropriate authorization for `domain` to
     * accept it. Mirroring soup_auth_domain_covers(), this does not check
     * whether or not `domain` <emphasis>cares</emphasis> if `msg` is
     * authorized.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    accepts(msg: ServerMessage): string | null
    /**
     * Adds `path` to `domain,` such that requests under `path` on `domain'`s
     * server will require authentication (unless overridden by
     * soup_auth_domain_remove_path() or soup_auth_domain_set_filter()).
     * 
     * You can also add paths by setting the SoupAuthDomain:add-path
     * property, which can also be used to add one or more paths at
     * construct time.
     */
    add_path(path: string): void
    /**
     * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
     * requesting that the client authenticate, and sets `msg'`s status
     * accordingly.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    challenge(msg: ServerMessage): void
    /**
     * Checks if `msg` authenticates to `domain` via `username` and
     * `password`. This would normally be called from a
     * #SoupAuthDomainGenericAuthCallback.
     */
    check_password(msg: ServerMessage, username: string, password: string): boolean
    /**
     * Checks if `domain` requires `msg` to be authenticated (according to
     * its paths and filter function). This does not actually look at
     * whether `msg` <emphasis>is</emphasis> authenticated, merely whether
     * or not it needs to be.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    covers(msg: ServerMessage): boolean
    /**
     * Gets the realm name associated with `domain`
     */
    get_realm(): string
    /**
     * Removes `path` from `domain,` such that requests under `path` on
     * `domain'`s server will NOT require authentication.
     * 
     * This is not simply an undo-er for soup_auth_domain_add_path(); it
     * can be used to "carve out" a subtree that does not require
     * authentication inside a hierarchy that does. Note also that unlike
     * with soup_auth_domain_add_path(), this cannot be overridden by
     * adding a filter, as filters can only bypass authentication that
     * would otherwise be required, not require it where it would
     * otherwise be unnecessary.
     * 
     * You can also remove paths by setting the
     * SoupAuthDomain:remove-path property, which can also be used to
     * remove one or more paths at construct time.
     */
    remove_path(path: string): void
    /**
     * Adds `filter` as an authentication filter to `domain`. The filter
     * gets a chance to bypass authentication for certain requests that
     * would otherwise require it. Eg, it might check the message's path
     * in some way that is too complicated to do via the other methods, or
     * it might check the message's method, and allow GETs but not PUTs.
     * 
     * The filter function returns %TRUE if the request should still
     * require authentication, or %FALSE if authentication is unnecessary
     * for this request.
     * 
     * To help prevent security holes, your filter should return %TRUE by
     * default, and only return %FALSE under specifically-tested
     * circumstances, rather than the other way around. Eg, in the example
     * above, where you want to authenticate PUTs but not GETs, you should
     * check if the method is GET and return %FALSE in that case, and then
     * return %TRUE for all other methods (rather than returning %TRUE for
     * PUT and %FALSE for all other methods). This way if it turned out
     * (now or later) that some paths supported additional methods besides
     * GET and PUT, those methods would default to being NOT allowed for
     * unauthenticated users.
     * 
     * You can also set the filter by setting the SoupAuthDomain:filter
     * and SoupAuthDomain:filter-data properties, which can also be
     * used to set the filter at construct time.
     */
    set_filter(filter: AuthDomainFilter): void
    /**
     * Sets `auth_callback` as an authentication-handling callback for
     * `domain`. Whenever a request comes in to `domain` which cannot be
     * authenticated via a domain-specific auth callback (eg,
     * #SoupAuthDomainDigestAuthCallback), the generic auth callback
     * will be invoked. See #SoupAuthDomainGenericAuthCallback for information
     * on what the callback should do.
     */
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: ServerMessage, username: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.AuthDomain */
    vfunc_accepts(msg: ServerMessage, header: string): string
    /**
     * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
     * requesting that the client authenticate, and sets `msg'`s status
     * accordingly.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    vfunc_challenge(msg: ServerMessage): string
    /**
     * Checks if `msg` authenticates to `domain` via `username` and
     * `password`. This would normally be called from a
     * #SoupAuthDomainGenericAuthCallback.
     */
    vfunc_check_password(msg: ServerMessage, username: string, password: string): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthDomain_ConstructProps)
    _init (config?: AuthDomain_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthDomainBasic_ConstructProps extends AuthDomain_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.AuthDomainBasic */
    /**
     * The #SoupAuthDomainBasicAuthCallback
     */
    auth_callback?: AuthDomainBasicAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainBasicAuthCallback
     */
    auth_data?: object
}
class AuthDomainBasic {
    /* Properties of Soup-3.0.Soup.AuthDomainBasic */
    /**
     * The #SoupAuthDomainBasicAuthCallback
     */
    auth_callback: AuthDomainBasicAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainBasicAuthCallback
     */
    auth_data: object
    /* Properties of Soup-3.0.Soup.AuthDomain */
    /**
     * The #SoupAuthDomainFilter for the domain.
     */
    filter: AuthDomainFilter
    /**
     * Data to pass to the #SoupAuthDomainFilter.
     */
    filter_data: object
    /**
     * The #SoupAuthDomainGenericAuthCallback.
     */
    generic_auth_callback: AuthDomainGenericAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainGenericAuthCallback.
     */
    generic_auth_data: object
    /* Fields of Soup-3.0.Soup.AuthDomain */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomainBasic */
    /**
     * Sets the callback that `domain` will use to authenticate incoming
     * requests. For each request containing authorization, `domain` will
     * invoke the callback, and then either accept or reject the request
     * based on `callback'`s return value.
     * 
     * You can also set the auth callback by setting the
     * SoupAuthDomainBasic:auth-callback and
     * SoupAuthDomainBasic:auth-data properties, which can also be
     * used to set the callback at construct time.
     */
    set_auth_callback(callback: AuthDomainBasicAuthCallback): void
    /* Methods of Soup-3.0.Soup.AuthDomain */
    /**
     * Checks if `msg` contains appropriate authorization for `domain` to
     * accept it. Mirroring soup_auth_domain_covers(), this does not check
     * whether or not `domain` <emphasis>cares</emphasis> if `msg` is
     * authorized.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    accepts(msg: ServerMessage): string | null
    /**
     * Adds `path` to `domain,` such that requests under `path` on `domain'`s
     * server will require authentication (unless overridden by
     * soup_auth_domain_remove_path() or soup_auth_domain_set_filter()).
     * 
     * You can also add paths by setting the SoupAuthDomain:add-path
     * property, which can also be used to add one or more paths at
     * construct time.
     */
    add_path(path: string): void
    /**
     * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
     * requesting that the client authenticate, and sets `msg'`s status
     * accordingly.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    challenge(msg: ServerMessage): void
    /**
     * Checks if `msg` authenticates to `domain` via `username` and
     * `password`. This would normally be called from a
     * #SoupAuthDomainGenericAuthCallback.
     */
    check_password(msg: ServerMessage, username: string, password: string): boolean
    /**
     * Checks if `domain` requires `msg` to be authenticated (according to
     * its paths and filter function). This does not actually look at
     * whether `msg` <emphasis>is</emphasis> authenticated, merely whether
     * or not it needs to be.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    covers(msg: ServerMessage): boolean
    /**
     * Gets the realm name associated with `domain`
     */
    get_realm(): string
    /**
     * Removes `path` from `domain,` such that requests under `path` on
     * `domain'`s server will NOT require authentication.
     * 
     * This is not simply an undo-er for soup_auth_domain_add_path(); it
     * can be used to "carve out" a subtree that does not require
     * authentication inside a hierarchy that does. Note also that unlike
     * with soup_auth_domain_add_path(), this cannot be overridden by
     * adding a filter, as filters can only bypass authentication that
     * would otherwise be required, not require it where it would
     * otherwise be unnecessary.
     * 
     * You can also remove paths by setting the
     * SoupAuthDomain:remove-path property, which can also be used to
     * remove one or more paths at construct time.
     */
    remove_path(path: string): void
    /**
     * Adds `filter` as an authentication filter to `domain`. The filter
     * gets a chance to bypass authentication for certain requests that
     * would otherwise require it. Eg, it might check the message's path
     * in some way that is too complicated to do via the other methods, or
     * it might check the message's method, and allow GETs but not PUTs.
     * 
     * The filter function returns %TRUE if the request should still
     * require authentication, or %FALSE if authentication is unnecessary
     * for this request.
     * 
     * To help prevent security holes, your filter should return %TRUE by
     * default, and only return %FALSE under specifically-tested
     * circumstances, rather than the other way around. Eg, in the example
     * above, where you want to authenticate PUTs but not GETs, you should
     * check if the method is GET and return %FALSE in that case, and then
     * return %TRUE for all other methods (rather than returning %TRUE for
     * PUT and %FALSE for all other methods). This way if it turned out
     * (now or later) that some paths supported additional methods besides
     * GET and PUT, those methods would default to being NOT allowed for
     * unauthenticated users.
     * 
     * You can also set the filter by setting the SoupAuthDomain:filter
     * and SoupAuthDomain:filter-data properties, which can also be
     * used to set the filter at construct time.
     */
    set_filter(filter: AuthDomainFilter): void
    /**
     * Sets `auth_callback` as an authentication-handling callback for
     * `domain`. Whenever a request comes in to `domain` which cannot be
     * authenticated via a domain-specific auth callback (eg,
     * #SoupAuthDomainDigestAuthCallback), the generic auth callback
     * will be invoked. See #SoupAuthDomainGenericAuthCallback for information
     * on what the callback should do.
     */
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: ServerMessage, username: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.AuthDomain */
    vfunc_accepts(msg: ServerMessage, header: string): string
    /**
     * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
     * requesting that the client authenticate, and sets `msg'`s status
     * accordingly.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    vfunc_challenge(msg: ServerMessage): string
    /**
     * Checks if `msg` authenticates to `domain` via `username` and
     * `password`. This would normally be called from a
     * #SoupAuthDomainGenericAuthCallback.
     */
    vfunc_check_password(msg: ServerMessage, username: string, password: string): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainBasic, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthDomainBasic_ConstructProps)
    _init (config?: AuthDomainBasic_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthDomainDigest_ConstructProps extends AuthDomain_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.AuthDomainDigest */
    /**
     * The #SoupAuthDomainDigestAuthCallback
     */
    auth_callback?: AuthDomainDigestAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainDigestAuthCallback
     */
    auth_data?: object
}
class AuthDomainDigest {
    /* Properties of Soup-3.0.Soup.AuthDomainDigest */
    /**
     * The #SoupAuthDomainDigestAuthCallback
     */
    auth_callback: AuthDomainDigestAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainDigestAuthCallback
     */
    auth_data: object
    /* Properties of Soup-3.0.Soup.AuthDomain */
    /**
     * The #SoupAuthDomainFilter for the domain.
     */
    filter: AuthDomainFilter
    /**
     * Data to pass to the #SoupAuthDomainFilter.
     */
    filter_data: object
    /**
     * The #SoupAuthDomainGenericAuthCallback.
     */
    generic_auth_callback: AuthDomainGenericAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainGenericAuthCallback.
     */
    generic_auth_data: object
    /* Fields of Soup-3.0.Soup.AuthDomain */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthDomainDigest */
    /**
     * Sets the callback that `domain` will use to authenticate incoming
     * requests. For each request containing authorization, `domain` will
     * invoke the callback, and then either accept or reject the request
     * based on `callback'`s return value.
     * 
     * You can also set the auth callback by setting the
     * SoupAuthDomainDigest:auth-callback and
     * SoupAuthDomainDigest:auth-data properties, which can also be
     * used to set the callback at construct time.
     */
    set_auth_callback(callback: AuthDomainDigestAuthCallback): void
    /* Methods of Soup-3.0.Soup.AuthDomain */
    /**
     * Checks if `msg` contains appropriate authorization for `domain` to
     * accept it. Mirroring soup_auth_domain_covers(), this does not check
     * whether or not `domain` <emphasis>cares</emphasis> if `msg` is
     * authorized.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    accepts(msg: ServerMessage): string | null
    /**
     * Adds `path` to `domain,` such that requests under `path` on `domain'`s
     * server will require authentication (unless overridden by
     * soup_auth_domain_remove_path() or soup_auth_domain_set_filter()).
     * 
     * You can also add paths by setting the SoupAuthDomain:add-path
     * property, which can also be used to add one or more paths at
     * construct time.
     */
    add_path(path: string): void
    /**
     * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
     * requesting that the client authenticate, and sets `msg'`s status
     * accordingly.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    challenge(msg: ServerMessage): void
    /**
     * Checks if `msg` authenticates to `domain` via `username` and
     * `password`. This would normally be called from a
     * #SoupAuthDomainGenericAuthCallback.
     */
    check_password(msg: ServerMessage, username: string, password: string): boolean
    /**
     * Checks if `domain` requires `msg` to be authenticated (according to
     * its paths and filter function). This does not actually look at
     * whether `msg` <emphasis>is</emphasis> authenticated, merely whether
     * or not it needs to be.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    covers(msg: ServerMessage): boolean
    /**
     * Gets the realm name associated with `domain`
     */
    get_realm(): string
    /**
     * Removes `path` from `domain,` such that requests under `path` on
     * `domain'`s server will NOT require authentication.
     * 
     * This is not simply an undo-er for soup_auth_domain_add_path(); it
     * can be used to "carve out" a subtree that does not require
     * authentication inside a hierarchy that does. Note also that unlike
     * with soup_auth_domain_add_path(), this cannot be overridden by
     * adding a filter, as filters can only bypass authentication that
     * would otherwise be required, not require it where it would
     * otherwise be unnecessary.
     * 
     * You can also remove paths by setting the
     * SoupAuthDomain:remove-path property, which can also be used to
     * remove one or more paths at construct time.
     */
    remove_path(path: string): void
    /**
     * Adds `filter` as an authentication filter to `domain`. The filter
     * gets a chance to bypass authentication for certain requests that
     * would otherwise require it. Eg, it might check the message's path
     * in some way that is too complicated to do via the other methods, or
     * it might check the message's method, and allow GETs but not PUTs.
     * 
     * The filter function returns %TRUE if the request should still
     * require authentication, or %FALSE if authentication is unnecessary
     * for this request.
     * 
     * To help prevent security holes, your filter should return %TRUE by
     * default, and only return %FALSE under specifically-tested
     * circumstances, rather than the other way around. Eg, in the example
     * above, where you want to authenticate PUTs but not GETs, you should
     * check if the method is GET and return %FALSE in that case, and then
     * return %TRUE for all other methods (rather than returning %TRUE for
     * PUT and %FALSE for all other methods). This way if it turned out
     * (now or later) that some paths supported additional methods besides
     * GET and PUT, those methods would default to being NOT allowed for
     * unauthenticated users.
     * 
     * You can also set the filter by setting the SoupAuthDomain:filter
     * and SoupAuthDomain:filter-data properties, which can also be
     * used to set the filter at construct time.
     */
    set_filter(filter: AuthDomainFilter): void
    /**
     * Sets `auth_callback` as an authentication-handling callback for
     * `domain`. Whenever a request comes in to `domain` which cannot be
     * authenticated via a domain-specific auth callback (eg,
     * #SoupAuthDomainDigestAuthCallback), the generic auth callback
     * will be invoked. See #SoupAuthDomainGenericAuthCallback for information
     * on what the callback should do.
     */
    set_generic_auth_callback(auth_callback: AuthDomainGenericAuthCallback): void
    try_generic_auth_callback(msg: ServerMessage, username: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.AuthDomain */
    vfunc_accepts(msg: ServerMessage, header: string): string
    /**
     * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
     * requesting that the client authenticate, and sets `msg'`s status
     * accordingly.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     */
    vfunc_challenge(msg: ServerMessage): string
    /**
     * Checks if `msg` authenticates to `domain` via `username` and
     * `password`. This would normally be called from a
     * #SoupAuthDomainGenericAuthCallback.
     */
    vfunc_check_password(msg: ServerMessage, username: string, password: string): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-callback", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generic-auth-data", callback: (($obj: AuthDomainDigest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthDomainDigest_ConstructProps)
    _init (config?: AuthDomainDigest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Encodes the username/realm/password triplet for Digest
     * authentication. (That is, it returns a stringified MD5 hash of
     * `username,` `realm,` and `password` concatenated together). This is
     * the form that is needed as the return value of
     * #SoupAuthDomainDigest's auth handler.
     * 
     * For security reasons, you should store the encoded hash, rather
     * than storing the cleartext password itself and calling this method
     * only when you need to verify it. This way, if your server is
     * compromised, the attackers will not gain access to cleartext
     * passwords which might also be usable at other sites. (Note also
     * that the encoded password returned by this method is identical to
     * the encoded password stored in an Apache .htdigest file.)
     */
    static encode_password(username: string, realm: string, password: string): string
    static $gtype: GObject.Type
}
interface AuthManager_ConstructProps extends GObject.Object_ConstructProps {
}
class AuthManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.AuthManager */
    /**
     * Clear all credentials cached by `manager`
     */
    clear_cached_credentials(): void
    /**
     * Records that `auth` is to be used under `uri,` as though a
     * WWW-Authenticate header had been received at that URI. This can be
     * used to "preload" `manager'`s auth cache, to avoid an extra HTTP
     * round trip in the case where you know ahead of time that a 401
     * response will be returned.
     * 
     * This is only useful for authentication types where the initial
     * Authorization header does not depend on any additional information
     * from the server. (Eg, Basic or NTLM, but not Digest.)
     */
    use_auth(uri: GLib.Uri, auth: Auth): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.AuthManager */
    /**
     * Emitted when the manager requires the application to
     * provide authentication credentials.
     * 
     * #SoupMessage connects to this signal and emits its own
     * #SoupMessage::authenticate signal when it is emitted, so
     * you shouldn't need to use this signal directly.
     */
    connect(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Message, auth: Auth, retrying: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AuthManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthManager_ConstructProps)
    _init (config?: AuthManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthNTLM_ConstructProps extends Auth_ConstructProps {
}
class AuthNTLM {
    /* Properties of Soup-3.0.Soup.Auth */
    /**
     * The authority (host:port) being authenticated to.
     */
    authority: string
    /**
     * Whether or not the auth has been authenticated.
     */
    readonly is_authenticated: boolean
    /**
     * An alias for the #SoupAuth:is-cancelled property.
     * (Whether or not the auth has been cancelled.)
     */
    readonly is_cancelled: boolean
    /**
     * Whether or not the auth is for a proxy server.
     */
    is_for_proxy: boolean
    /**
     * The authentication realm.
     */
    realm: string
    /**
     * The authentication scheme name.
     */
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    can_authenticate(): boolean
    /**
     * Call this on an auth to cancel it. You need to cancel an auth to complete
     * an asynchronous authenticate operation when no credentials are provided
     * (soup_auth_authenticate() is not called).
     * The #SoupAuth will be cancelled on dispose if it hans't been authenticated.
     */
    cancel(): void
    /**
     * Returns the authority (host:port) that `auth` is associated with.
     */
    get_authority(): string
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    get_authorization(msg: Message): string
    /**
     * Gets an opaque identifier for `auth,` for use as a hash key or the
     * like. #SoupAuth objects from the same server with the same
     * identifier refer to the same authentication domain (eg, the URLs
     * associated with them take the same usernames and passwords).
     */
    get_info(): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Returns `auth'`s realm. This is an identifier that distinguishes
     * separate authentication spaces on a given server, and may be some
     * string that is meaningful to the user. (Although it is probably not
     * localized.)
     */
    get_realm(): string
    /**
     * Returns `auth'`s scheme name. (Eg, "Basic", "Digest", or "NTLM")
     */
    get_scheme_name(): string
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    update(msg: Message, auth_header: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    vfunc_authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    vfunc_can_authenticate(): boolean
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    vfunc_get_authorization(msg: Message): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Tests if `auth` has been given a username and password
     */
    vfunc_is_authenticated(): boolean
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    vfunc_is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthNTLM_ConstructProps)
    _init (config?: AuthNTLM_ConstructProps): void
    static $gtype: GObject.Type
}
interface AuthNegotiate_ConstructProps extends Auth_ConstructProps {
}
class AuthNegotiate {
    /* Properties of Soup-3.0.Soup.Auth */
    /**
     * The authority (host:port) being authenticated to.
     */
    authority: string
    /**
     * Whether or not the auth has been authenticated.
     */
    readonly is_authenticated: boolean
    /**
     * An alias for the #SoupAuth:is-cancelled property.
     * (Whether or not the auth has been cancelled.)
     */
    readonly is_cancelled: boolean
    /**
     * Whether or not the auth is for a proxy server.
     */
    is_for_proxy: boolean
    /**
     * The authentication realm.
     */
    realm: string
    /**
     * The authentication scheme name.
     */
    readonly scheme_name: string
    /* Fields of Soup-3.0.Soup.Auth */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    can_authenticate(): boolean
    /**
     * Call this on an auth to cancel it. You need to cancel an auth to complete
     * an asynchronous authenticate operation when no credentials are provided
     * (soup_auth_authenticate() is not called).
     * The #SoupAuth will be cancelled on dispose if it hans't been authenticated.
     */
    cancel(): void
    /**
     * Returns the authority (host:port) that `auth` is associated with.
     */
    get_authority(): string
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    get_authorization(msg: Message): string
    /**
     * Gets an opaque identifier for `auth,` for use as a hash key or the
     * like. #SoupAuth objects from the same server with the same
     * identifier refer to the same authentication domain (eg, the URLs
     * associated with them take the same usernames and passwords).
     */
    get_info(): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Returns `auth'`s realm. This is an identifier that distinguishes
     * separate authentication spaces on a given server, and may be some
     * string that is meaningful to the user. (Although it is probably not
     * localized.)
     */
    get_realm(): string
    /**
     * Returns `auth'`s scheme name. (Eg, "Basic", "Digest", or "NTLM")
     */
    get_scheme_name(): string
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    update(msg: Message, auth_header: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.Auth */
    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     */
    vfunc_authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     */
    vfunc_can_authenticate(): boolean
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     */
    vfunc_get_authorization(msg: Message): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     */
    vfunc_get_protection_space(source_uri: GLib.Uri): string[]
    /**
     * Tests if `auth` has been given a username and password
     */
    vfunc_is_authenticated(): boolean
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     */
    vfunc_is_ready(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     */
    vfunc_update(msg: Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authority", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authority", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::realm", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realm", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: AuthNegotiate, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthNegotiate_ConstructProps)
    _init (config?: AuthNegotiate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Indicates whether libsoup was built with GSSAPI support. If this is
     * %FALSE, %SOUP_TYPE_AUTH_NEGOTIATE will still be defined and can
     * still be added to a #SoupSession, but libsoup will never attempt to
     * actually use this auth type.
     */
    static supported(): boolean
    static $gtype: GObject.Type
}
interface Cache_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.Cache */
    cache_dir?: string
    cache_type?: CacheType
}
class Cache {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Cache */
    /**
     * Will remove all entries in the `cache` plus all the cache files.
     */
    clear(): void
    /**
     * Synchronously writes the cache index out to disk. Contrast with
     * soup_cache_flush(), which writes pending cache
     * <emphasis>entries</emphasis> to disk.
     * 
     * You must call this before exiting if you want your cache data to
     * persist between sessions.
     */
    dump(): void
    /**
     * This function will force all pending writes in the `cache` to be
     * committed to disk. For doing so it will iterate the #GMainContext
     * associated with `cache'`s session as long as needed.
     * 
     * Contrast with soup_cache_dump(), which writes out the cache index
     * file.
     */
    flush(): void
    /**
     * Gets the maximum size of the cache.
     */
    get_max_size(): number
    /**
     * Loads the contents of `cache'`s index into memory.
     */
    load(): void
    /**
     * Sets the maximum size of the cache.
     */
    set_max_size(max_size: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.Cache */
    vfunc_get_cacheability(msg: Message): Cacheability
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cache_ConstructProps)
    _init (config?: Cache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cache_dir: string | null, cache_type: CacheType): Cache
    static $gtype: GObject.Type
}
interface ContentDecoder_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentDecoder {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: ContentDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentDecoder_ConstructProps)
    _init (config?: ContentDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContentSniffer_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentSniffer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.ContentSniffer */
    /**
     * Sniffs `buffer` to determine its Content-Type. The result may also
     * be influenced by the Content-Type declared in `msg'`s response
     * headers.
     */
    sniff(msg: Message, buffer: GLib.Bytes): [ /* returnType */ string, /* params */ GLib.HashTable | null ]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: ContentSniffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentSniffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentSniffer_ConstructProps)
    _init (config?: ContentSniffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentSniffer
    static $gtype: GObject.Type
}
interface CookieJar_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.CookieJar */
    /**
     * The policy the jar should follow to accept or reject cookies
     */
    accept_policy?: CookieJarAcceptPolicy
    read_only?: boolean
}
class CookieJar {
    /* Properties of Soup-3.0.Soup.CookieJar */
    /**
     * The policy the jar should follow to accept or reject cookies
     */
    accept_policy: CookieJarAcceptPolicy
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     */
    add_cookie(cookie: Cookie): void
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `uri` will be used to reject setting or overwriting secure cookies
     * from insecure origins. %NULL is treated as secure.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     */
    add_cookie_full(cookie: Cookie, uri?: GLib.Uri | null, first_party?: GLib.Uri | null): void
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * 
     * For secure cookies to work properly you may want to use
     * soup_cookie_jar_add_cookie_full().
     */
    add_cookie_with_first_party(first_party: GLib.Uri, cookie: Cookie): void
    /**
     * Constructs a #GSList with every cookie inside the `jar`.
     * The cookies in the list are a copy of the original, so
     * you have to free them when you are done with them.
     */
    all_cookies(): Cookie[]
    /**
     * Deletes `cookie` from `jar,` emitting the 'changed' signal.
     */
    delete_cookie(cookie: Cookie): void
    /**
     * Gets `jar'`s #SoupCookieJarAcceptPolicy
     */
    get_accept_policy(): CookieJarAcceptPolicy
    /**
     * Retrieves the list of cookies that would be sent with a request to `uri`
     * as a #GSList of #SoupCookie objects.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     */
    get_cookie_list(uri: GLib.Uri, for_http: boolean): Cookie[]
    /**
     * This is an extended version of soup_cookie_jar_get_cookie_list() that
     * provides more information required to use SameSite cookies. See the
     * [SameSite cookies spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more detailed information.
     */
    get_cookie_list_with_same_site_info(uri: GLib.Uri, top_level: GLib.Uri | null, site_for_cookies: GLib.Uri | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    /**
     * Retrieves (in Cookie-header form) the list of cookies that would
     * be sent with a request to `uri`.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     */
    get_cookies(uri: GLib.Uri, for_http: boolean): string | null
    /**
     * Gets whether `jar` stores cookies persistenly.
     */
    is_persistent(): boolean
    /**
     * Sets `policy` as the cookie acceptance policy for `jar`.
     */
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`.
     * 
     * Keep in mind that if the #SoupCookieJarAcceptPolicy set is either
     * %SOUP_COOKIE_JAR_ACCEPT_NO_THIRD_PARTY or
     * %SOUP_COOKIE_JAR_ACCEPT_GRANDFATHERED_THIRD_PARTY you'll need to use
     * soup_cookie_jar_set_cookie_with_first_party(), otherwise the jar
     * will have no way of knowing if the cookie is being set by a third
     * party or not.
     */
    set_cookie(uri: GLib.Uri, cookie: string): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`. `first_party`
     * will be used to reject cookies coming from third party resources in
     * case such a security policy is set in the `jar`.
     */
    set_cookie_with_first_party(uri: GLib.Uri, first_party: GLib.Uri, cookie: string): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    /**
     * Gets whether `jar` stores cookies persistenly.
     */
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.CookieJar */
    /**
     * Emitted when `jar` changes. If a cookie has been added,
     * `new_cookie` will contain the newly-added cookie and
     * `old_cookie` will be %NULL. If a cookie has been deleted,
     * `old_cookie` will contain the to-be-deleted cookie and
     * `new_cookie` will be %NULL. If a cookie has been changed,
     * `old_cookie` will contain its old value, and `new_cookie` its
     * new value.
     */
    connect(sigName: "changed", callback: (($obj: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CookieJar_ConstructProps)
    _init (config?: CookieJar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CookieJar
    static $gtype: GObject.Type
}
interface CookieJarDB_ConstructProps extends CookieJar_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.CookieJarDB */
    filename?: string
}
class CookieJarDB {
    /* Properties of Soup-3.0.Soup.CookieJar */
    /**
     * The policy the jar should follow to accept or reject cookies
     */
    accept_policy: CookieJarAcceptPolicy
    /* Fields of Soup-3.0.Soup.CookieJar */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     */
    add_cookie(cookie: Cookie): void
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `uri` will be used to reject setting or overwriting secure cookies
     * from insecure origins. %NULL is treated as secure.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     */
    add_cookie_full(cookie: Cookie, uri?: GLib.Uri | null, first_party?: GLib.Uri | null): void
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * 
     * For secure cookies to work properly you may want to use
     * soup_cookie_jar_add_cookie_full().
     */
    add_cookie_with_first_party(first_party: GLib.Uri, cookie: Cookie): void
    /**
     * Constructs a #GSList with every cookie inside the `jar`.
     * The cookies in the list are a copy of the original, so
     * you have to free them when you are done with them.
     */
    all_cookies(): Cookie[]
    /**
     * Deletes `cookie` from `jar,` emitting the 'changed' signal.
     */
    delete_cookie(cookie: Cookie): void
    /**
     * Gets `jar'`s #SoupCookieJarAcceptPolicy
     */
    get_accept_policy(): CookieJarAcceptPolicy
    /**
     * Retrieves the list of cookies that would be sent with a request to `uri`
     * as a #GSList of #SoupCookie objects.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     */
    get_cookie_list(uri: GLib.Uri, for_http: boolean): Cookie[]
    /**
     * This is an extended version of soup_cookie_jar_get_cookie_list() that
     * provides more information required to use SameSite cookies. See the
     * [SameSite cookies spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more detailed information.
     */
    get_cookie_list_with_same_site_info(uri: GLib.Uri, top_level: GLib.Uri | null, site_for_cookies: GLib.Uri | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    /**
     * Retrieves (in Cookie-header form) the list of cookies that would
     * be sent with a request to `uri`.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     */
    get_cookies(uri: GLib.Uri, for_http: boolean): string | null
    /**
     * Gets whether `jar` stores cookies persistenly.
     */
    is_persistent(): boolean
    /**
     * Sets `policy` as the cookie acceptance policy for `jar`.
     */
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`.
     * 
     * Keep in mind that if the #SoupCookieJarAcceptPolicy set is either
     * %SOUP_COOKIE_JAR_ACCEPT_NO_THIRD_PARTY or
     * %SOUP_COOKIE_JAR_ACCEPT_GRANDFATHERED_THIRD_PARTY you'll need to use
     * soup_cookie_jar_set_cookie_with_first_party(), otherwise the jar
     * will have no way of knowing if the cookie is being set by a third
     * party or not.
     */
    set_cookie(uri: GLib.Uri, cookie: string): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`. `first_party`
     * will be used to reject cookies coming from third party resources in
     * case such a security policy is set in the `jar`.
     */
    set_cookie_with_first_party(uri: GLib.Uri, first_party: GLib.Uri, cookie: string): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    /**
     * Gets whether `jar` stores cookies persistenly.
     */
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.CookieJar */
    /**
     * Emitted when `jar` changes. If a cookie has been added,
     * `new_cookie` will contain the newly-added cookie and
     * `old_cookie` will be %NULL. If a cookie has been deleted,
     * `old_cookie` will contain the to-be-deleted cookie and
     * `new_cookie` will be %NULL. If a cookie has been changed,
     * `old_cookie` will contain its old value, and `new_cookie` its
     * new value.
     */
    connect(sigName: "changed", callback: (($obj: CookieJarDB, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarDB, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarDB, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CookieJarDB_ConstructProps)
    _init (config?: CookieJarDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, read_only: boolean): CookieJarDB
    /* Function overloads */
    static new(): CookieJarDB
    static $gtype: GObject.Type
}
interface CookieJarText_ConstructProps extends CookieJar_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.CookieJarText */
    filename?: string
}
class CookieJarText {
    /* Properties of Soup-3.0.Soup.CookieJar */
    /**
     * The policy the jar should follow to accept or reject cookies
     */
    accept_policy: CookieJarAcceptPolicy
    /* Fields of Soup-3.0.Soup.CookieJar */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.CookieJar */
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     */
    add_cookie(cookie: Cookie): void
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `uri` will be used to reject setting or overwriting secure cookies
     * from insecure origins. %NULL is treated as secure.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     */
    add_cookie_full(cookie: Cookie, uri?: GLib.Uri | null, first_party?: GLib.Uri | null): void
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * 
     * For secure cookies to work properly you may want to use
     * soup_cookie_jar_add_cookie_full().
     */
    add_cookie_with_first_party(first_party: GLib.Uri, cookie: Cookie): void
    /**
     * Constructs a #GSList with every cookie inside the `jar`.
     * The cookies in the list are a copy of the original, so
     * you have to free them when you are done with them.
     */
    all_cookies(): Cookie[]
    /**
     * Deletes `cookie` from `jar,` emitting the 'changed' signal.
     */
    delete_cookie(cookie: Cookie): void
    /**
     * Gets `jar'`s #SoupCookieJarAcceptPolicy
     */
    get_accept_policy(): CookieJarAcceptPolicy
    /**
     * Retrieves the list of cookies that would be sent with a request to `uri`
     * as a #GSList of #SoupCookie objects.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     */
    get_cookie_list(uri: GLib.Uri, for_http: boolean): Cookie[]
    /**
     * This is an extended version of soup_cookie_jar_get_cookie_list() that
     * provides more information required to use SameSite cookies. See the
     * [SameSite cookies spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more detailed information.
     */
    get_cookie_list_with_same_site_info(uri: GLib.Uri, top_level: GLib.Uri | null, site_for_cookies: GLib.Uri | null, for_http: boolean, is_safe_method: boolean, is_top_level_navigation: boolean): Cookie[]
    /**
     * Retrieves (in Cookie-header form) the list of cookies that would
     * be sent with a request to `uri`.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     */
    get_cookies(uri: GLib.Uri, for_http: boolean): string | null
    /**
     * Gets whether `jar` stores cookies persistenly.
     */
    is_persistent(): boolean
    /**
     * Sets `policy` as the cookie acceptance policy for `jar`.
     */
    set_accept_policy(policy: CookieJarAcceptPolicy): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`.
     * 
     * Keep in mind that if the #SoupCookieJarAcceptPolicy set is either
     * %SOUP_COOKIE_JAR_ACCEPT_NO_THIRD_PARTY or
     * %SOUP_COOKIE_JAR_ACCEPT_GRANDFATHERED_THIRD_PARTY you'll need to use
     * soup_cookie_jar_set_cookie_with_first_party(), otherwise the jar
     * will have no way of knowing if the cookie is being set by a third
     * party or not.
     */
    set_cookie(uri: GLib.Uri, cookie: string): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`. `first_party`
     * will be used to reject cookies coming from third party resources in
     * case such a security policy is set in the `jar`.
     */
    set_cookie_with_first_party(uri: GLib.Uri, first_party: GLib.Uri, cookie: string): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.CookieJar */
    vfunc_changed(old_cookie: Cookie, new_cookie: Cookie): void
    /**
     * Gets whether `jar` stores cookies persistenly.
     */
    vfunc_is_persistent(): boolean
    vfunc_save(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.CookieJar */
    /**
     * Emitted when `jar` changes. If a cookie has been added,
     * `new_cookie` will contain the newly-added cookie and
     * `old_cookie` will be %NULL. If a cookie has been deleted,
     * `old_cookie` will contain the to-be-deleted cookie and
     * `new_cookie` will be %NULL. If a cookie has been changed,
     * `old_cookie` will contain its old value, and `new_cookie` its
     * new value.
     */
    connect(sigName: "changed", callback: (($obj: CookieJarText, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieJarText, old_cookie: Cookie, new_cookie: Cookie) => void)): number
    emit(sigName: "changed", old_cookie: Cookie, new_cookie: Cookie): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-policy", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-policy", callback: (($obj: CookieJarText, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CookieJarText_ConstructProps)
    _init (config?: CookieJarText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string, read_only: boolean): CookieJarText
    /* Function overloads */
    static new(): CookieJarText
    static $gtype: GObject.Type
}
interface HSTSEnforcer_ConstructProps extends GObject.Object_ConstructProps {
}
class HSTSEnforcer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.HSTSEnforcer */
    /**
     * Gets a list of domains for which there are policies in `enforcer`.
     */
    get_domains(session_policies: boolean): string[]
    /**
     * Gets a list with the policies in `enforcer`.
     */
    get_policies(session_policies: boolean): HSTSPolicy[]
    /**
     * Gets whether `hsts_enforcer` has a currently valid policy for `domain`.
     */
    has_valid_policy(domain: string): boolean
    /**
     * Gets whether `hsts_enforcer` stores policies persistenly.
     */
    is_persistent(): boolean
    /**
     * Sets `policy` to `hsts_enforcer`. If `policy` is expired, any
     * existing HSTS policy for its host will be removed instead. If a
     * policy existed for this host, it will be replaced. Otherwise, the
     * new policy will be inserted. If the policy is a session policy, that
     * is, one created with soup_hsts_policy_new_session_policy(), the policy
     * will not expire and will be enforced during the lifetime of
     * `hsts_enforcer'`s #SoupSession.
     */
    set_policy(policy: HSTSPolicy): void
    /**
     * Sets a session policy for `domain`. A session policy is a policy
     * that is permanent to the lifetime of `hsts_enforcer'`s #SoupSession
     * and doesn't expire.
     */
    set_session_policy(domain: string, include_subdomains: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.HSTSEnforcer */
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    /**
     * Gets whether `hsts_enforcer` has a currently valid policy for `domain`.
     */
    vfunc_has_valid_policy(domain: string): boolean
    /**
     * Gets whether `hsts_enforcer` stores policies persistenly.
     */
    vfunc_is_persistent(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.HSTSEnforcer */
    /**
     * Emitted when `hsts_enforcer` changes. If a policy has been added,
     * `new_policy` will contain the newly-added policy and
     * `old_policy` will be %NULL. If a policy has been deleted,
     * `old_policy` will contain the to-be-deleted policy and
     * `new_policy` will be %NULL. If a policy has been changed,
     * `old_policy` will contain its old value, and `new_policy` its
     * new value.
     * 
     * Note that you shouldn't modify the policies from a callback to
     * this signal.
     */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    emit(sigName: "changed", old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: HSTSEnforcer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HSTSEnforcer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HSTSEnforcer_ConstructProps)
    _init (config?: HSTSEnforcer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HSTSEnforcer
    static $gtype: GObject.Type
}
interface HSTSEnforcerDB_ConstructProps extends HSTSEnforcer_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.HSTSEnforcerDB */
    /**
     * The filename of the SQLite database where HSTS policies are stored.
     */
    filename?: string
}
class HSTSEnforcerDB {
    /* Fields of Soup-3.0.Soup.HSTSEnforcer */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.HSTSEnforcer */
    /**
     * Gets a list of domains for which there are policies in `enforcer`.
     */
    get_domains(session_policies: boolean): string[]
    /**
     * Gets a list with the policies in `enforcer`.
     */
    get_policies(session_policies: boolean): HSTSPolicy[]
    /**
     * Gets whether `hsts_enforcer` has a currently valid policy for `domain`.
     */
    has_valid_policy(domain: string): boolean
    /**
     * Gets whether `hsts_enforcer` stores policies persistenly.
     */
    is_persistent(): boolean
    /**
     * Sets `policy` to `hsts_enforcer`. If `policy` is expired, any
     * existing HSTS policy for its host will be removed instead. If a
     * policy existed for this host, it will be replaced. Otherwise, the
     * new policy will be inserted. If the policy is a session policy, that
     * is, one created with soup_hsts_policy_new_session_policy(), the policy
     * will not expire and will be enforced during the lifetime of
     * `hsts_enforcer'`s #SoupSession.
     */
    set_policy(policy: HSTSPolicy): void
    /**
     * Sets a session policy for `domain`. A session policy is a policy
     * that is permanent to the lifetime of `hsts_enforcer'`s #SoupSession
     * and doesn't expire.
     */
    set_session_policy(domain: string, include_subdomains: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.HSTSEnforcer */
    vfunc_changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    /**
     * Gets whether `hsts_enforcer` has a currently valid policy for `domain`.
     */
    vfunc_has_valid_policy(domain: string): boolean
    /**
     * Gets whether `hsts_enforcer` stores policies persistenly.
     */
    vfunc_is_persistent(): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.HSTSEnforcer */
    /**
     * Emitted when `hsts_enforcer` changes. If a policy has been added,
     * `new_policy` will contain the newly-added policy and
     * `old_policy` will be %NULL. If a policy has been deleted,
     * `old_policy` will contain the to-be-deleted policy and
     * `new_policy` will be %NULL. If a policy has been changed,
     * `old_policy` will contain its old value, and `new_policy` its
     * new value.
     * 
     * Note that you shouldn't modify the policies from a callback to
     * this signal.
     */
    connect(sigName: "changed", callback: (($obj: HSTSEnforcerDB, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    connect_after(sigName: "changed", callback: (($obj: HSTSEnforcerDB, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void)): number
    emit(sigName: "changed", old_policy: HSTSPolicy, new_policy: HSTSPolicy): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: HSTSEnforcerDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HSTSEnforcerDB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    /* Constructor properties of Soup-3.0.Soup.Logger */
    /**
     * The level of logging output
     */
    level?: LoggerLogLevel
    /**
     * If #SoupLogger:level is %SOUP_LOGGER_LOG_BODY, this gives
     * the maximum number of bytes of the body that will be logged.
     * (-1 means "no limit".)
     */
    max_body_size?: number
}
class Logger {
    /* Properties of Soup-3.0.Soup.Logger */
    /**
     * The level of logging output
     */
    level: LoggerLogLevel
    /**
     * If #SoupLogger:level is %SOUP_LOGGER_LOG_BODY, this gives
     * the maximum number of bytes of the body that will be logged.
     * (-1 means "no limit".)
     */
    max_body_size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Logger */
    /**
     * Get the maximum body size for `logger`.
     */
    get_max_body_size(): number
    /**
     * Sets the maximum body size for `logger` (-1 means no limit).
     */
    set_max_body_size(max_body_size: number): void
    /**
     * Sets up an alternate log printing routine, if you don't want
     * the log to go to <literal>stdout</literal>.
     */
    set_printer(printer: LoggerPrinter): void
    /**
     * Sets up a filter to determine the log level for a given request.
     * For each HTTP request `logger` will invoke `request_filter` to
     * determine how much (if any) of that request to log. (If you do not
     * set a request filter, `logger` will just always log requests at the
     * level passed to soup_logger_new().)
     */
    set_request_filter(request_filter: LoggerFilter): void
    /**
     * Sets up a filter to determine the log level for a given response.
     * For each HTTP response `logger` will invoke `response_filter` to
     * determine how much (if any) of that response to log. (If you do not
     * set a response filter, `logger` will just always log responses at
     * the level passed to soup_logger_new().)
     */
    set_response_filter(response_filter: LoggerFilter): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::level", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-body-size", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-body-size", callback: (($obj: Logger, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Logger_ConstructProps)
    _init (config?: Logger_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(level: LoggerLogLevel): Logger
    static $gtype: GObject.Type
}
interface Message_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.Message */
    /**
     * The #GUri loaded in the application when the message was
     * queued.
     */
    first_party?: GLib.Uri
    flags?: MessageFlags
    /**
     * The #SoupMessage is intended to be used to send
     * `OPTIONS *` to a server. When set to %TRUE, the
     * path of #SoupMessage:uri will be ignored and
     * #SoupMessage:method set to %SOUP_METHOD_OPTIONS.
     */
    is_options_ping?: boolean
    /**
     * Set when the message is navigating between top level domains.
     */
    is_top_level_navigation?: boolean
    method?: string
    /**
     * Sets the priority of the #SoupMessage. See
     * soup_message_set_priority() for further details.
     */
    priority?: MessagePriority
    site_for_cookies?: GLib.Uri
    uri?: GLib.Uri
}
class Message {
    /* Properties of Soup-3.0.Soup.Message */
    /**
     * The #GUri loaded in the application when the message was
     * queued.
     */
    first_party: GLib.Uri
    flags: MessageFlags
    readonly http_version: HTTPVersion
    /**
     * The #SoupMessage is intended to be used to send
     * `OPTIONS *` to a server. When set to %TRUE, the
     * path of #SoupMessage:uri will be ignored and
     * #SoupMessage:method set to %SOUP_METHOD_OPTIONS.
     */
    is_options_ping: boolean
    /**
     * Set when the message is navigating between top level domains.
     */
    is_top_level_navigation: boolean
    method: string
    /**
     * Sets the priority of the #SoupMessage. See
     * soup_message_set_priority() for further details.
     */
    priority: MessagePriority
    readonly reason_phrase: string
    /**
     * The remote #GSocketAddress of the connection associated with the message
     */
    readonly remote_address: Gio.SocketAddress
    readonly request_headers: MessageHeaders
    readonly response_headers: MessageHeaders
    site_for_cookies: GLib.Uri
    readonly status_code: number
    /**
     * The Name of TLS ciphersuite negotiated for this message connection.
     */
    readonly tls_ciphersuite_name: string
    /**
     * The peer's #GTlsCertificate associated with the message
     */
    readonly tls_peer_certificate: Gio.TlsCertificate
    /**
     * The verification errors on #SoupMessage:tls-peer-certificate
     */
    readonly tls_peer_certificate_errors: Gio.TlsCertificateFlags
    /**
     * The TLS protocol version negotiated for the message connection.
     */
    readonly tls_protocol_version: Gio.TlsProtocolVersion
    uri: GLib.Uri
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Message */
    /**
     * Adds `flags` to the set of `msg'`s flags
     */
    add_flags(flags: MessageFlags): void
    /**
     * This disables the actions of #SoupSessionFeature<!-- -->s with the
     * given `feature_type` (or a subclass of that type) on `msg,` so that
     * `msg` is processed as though the feature(s) hadn't been added to the
     * session. Eg, passing #SOUP_TYPE_CONTENT_SNIFFER for `feature_type`
     * will disable Content-Type sniffing on the message.
     * 
     * You must call this before queueing `msg` on a session; calling it on
     * a message that has already been queued is undefined. In particular,
     * you cannot call this on a message that is being requeued after a
     * redirect or authentication.
     */
    disable_feature(feature_type: GObject.Type): void
    /**
     * Returns the unique idenfier for the last connection used.
     * This may be 0 if it was a cached resource or it has not gotten
     * a connection yet.
     */
    get_connection_id(): number
    /**
     * Gets `msg'`s first-party #GUri
     */
    get_first_party(): GLib.Uri
    /**
     * Gets the flags on `msg`
     */
    get_flags(): MessageFlags
    /**
     * Gets the HTTP version of `msg`. This is the minimum of the
     * version from the request and the version from the response.
     */
    get_http_version(): HTTPVersion
    /**
     * Gets whether `msg` is intended to be used to send `OPTIONS *` to a server.
     */
    get_is_options_ping(): boolean
    /**
     * Returns if this message is set as a top level navigation.
     * Used for same-site policy checks.
     */
    get_is_top_level_navigation(): boolean
    /**
     * Returns the method of this message.
     */
    get_method(): string
    /**
     * Get the #SoupMessageMetrics of `msg`. If the flag %SOUP_MESSAGE_COLLECT_METRICS is not
     * enabled for `msg` this will return %NULL.
     */
    get_metrics(): MessageMetrics | null
    /**
     * Retrieves the #SoupMessagePriority. If not set this value defaults
     * to #SOUP_MESSAGE_PRIORITY_NORMAL.
     */
    get_priority(): MessagePriority
    /**
     * Returns the reason phrase for the status of this message.
     */
    get_reason_phrase(): string
    /**
     * Get the remote #GSocketAddress of the connection associated with the message.
     * The returned address can be %NULL if the connection hasn't been established yet,
     * or the resource was loaded from the disk cache.
     * In case of proxy connections, the remote address returned is a #GProxyAddress.
     * If #SoupSession::remote-connetable is set the returned address id for the connection
     * ot the session's remote connectable.
     */
    get_remote_address(): Gio.SocketAddress | null
    /**
     * Returns the headers sent with the request.
     */
    get_request_headers(): MessageHeaders
    /**
     * Returns the headers recieved with the response.
     */
    get_response_headers(): MessageHeaders
    /**
     * Gets `msg'`s site for cookies #GUri
     */
    get_site_for_cookies(): GLib.Uri
    /**
     * Returns the set status of this message.
     */
    get_status(): Status
    /**
     * Gets the name of the TLS ciphersuite negotiated for `msg'`s connection.
     */
    get_tls_ciphersuite_name(): string
    /**
     * Gets the peer's #GTlsCertificate associated with `msg'`s connection.
     * Note that this is not set yet during the emission of
     * SoupMessage::accept-certificate signal.
     */
    get_tls_peer_certificate(): Gio.TlsCertificate | null
    /**
     * Gets the errors associated with validating `msg'`s TLS peer certificate.
     * Note that this is not set yet during the emission of
     * SoupMessage::accept-certificate signal.
     */
    get_tls_peer_certificate_errors(): Gio.TlsCertificateFlags
    /**
     * Gets the TLS protocol version negotiated for `msg'`s connection.
     * If the message connection is not SSL, %G_TLS_PROTOCOL_VERSION_UNKNOWN is returned.
     */
    get_tls_protocol_version(): Gio.TlsProtocolVersion
    /**
     * Gets `msg'`s URI
     */
    get_uri(): GLib.Uri
    /**
     * Get whether #SoupSessionFeature<!-- -->s of the given `feature_type`
     * (or a subclass of that type) are disabled on `msg`.
     * See soup_message_disable_feature().
     */
    is_feature_disabled(feature_type: GObject.Type): boolean
    /**
     * Determines whether or not `msg'`s connection can be kept alive for
     * further requests after processing `msg,` based on the HTTP version,
     * Connection header, etc.
     */
    is_keepalive(): boolean
    /**
     * Queries if `flags` are present in the set of `msg'`s flags
     */
    query_flags(flags: MessageFlags): boolean
    /**
     * Removes `flags` from the set of `msg'`s flags
     */
    remove_flags(flags: MessageFlags): void
    /**
     * Sets `first_party` as the main document #GUri for `msg`. For
     * details of when and how this is used refer to the documentation for
     * #SoupCookieJarAcceptPolicy.
     */
    set_first_party(first_party: GLib.Uri): void
    /**
     * Sets the specified flags on `msg`.
     */
    set_flags(flags: MessageFlags): void
    /**
     * Set whether `msg` is intended to be used to send `OPTIONS *` to a server.
     * When set to %TRUE, the path of #SoupMessage:uri will be ignored and
     * #SoupMessage:method set to %SOUP_METHOD_OPTIONS.
     */
    set_is_options_ping(is_options_ping: boolean): void
    /**
     * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more information.
     */
    set_is_top_level_navigation(is_top_level_navigation: boolean): void
    /**
     * Set `msg'`s HTTP method to `method`.
     */
    set_method(method: string): void
    /**
     * Sets the priority of a message. Note that this won't have any
     * effect unless used before the message is added to the session's
     * message processing queue.
     * 
     * The message will be placed just before any other previously added
     * message with lower priority (messages with the same priority are
     * processed on a FIFO basis).
     * 
     * Setting priorities does not currently work with synchronous messages
     * because in the synchronous/blocking case, priority ends up being determined
     * semi-randomly by thread scheduling.
     */
    set_priority(priority: MessagePriority): void
    /**
     * Set the request body of a #SoupMessage.
     * If `content_type` is %NULL and `stream` is not %NULL the Content-Type header will
     * not be changed if present.
     * The request body needs to be set again in case `msg` is restarted
     * (in case of redirection or authentication).
     */
    set_request_body(content_type: string | null, stream: Gio.InputStream | null, content_length: number): void
    /**
     * Set the request body of a #SoupMessage from #GBytes.
     * If `content_type` is %NULL and `bytes` is not %NULL the Content-Type header will
     * not be changed if present.
     * The request body needs to be set again in case `msg` is restarted
     * (in case of redirection or authentication).
     */
    set_request_body_from_bytes(content_type?: string | null, bytes?: GLib.Bytes | null): void
    /**
     * Sets `site_for_cookies` as the policy URL for same-site cookies for `msg`.
     * 
     * It is either the URL of the top-level document or %NULL depending on whether the registrable
     * domain of this document's URL matches the registrable domain of its parent's/opener's
     * URL. For the top-level document it is set to the document's URL.
     * 
     * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more information.
     */
    set_site_for_cookies(site_for_cookies?: GLib.Uri | null): void
    /**
     * Sets the `certificate` to be used by `msg'`s connection when a
     * client certificate is requested during the TLS handshake.
     * You can call this as a response to #SoupMessage::request-certificate
     * signal, or before the connection is started. If `certificate` is %NULL
     * the handshake will continue without providing a GTlsCertificate.
     * Note that the #GTlsCertificate set by this function will be ignored if
     * #SoupSession::tls-interaction is not %NULL.
     */
    set_tls_client_certificate(certificate?: Gio.TlsCertificate | null): void
    /**
     * Sets `msg'`s URI to `uri`. If `msg` has already been sent and you want
     * to re-send it with the new URI, you need to send it again.
     */
    set_uri(uri: GLib.Uri): void
    /**
     * Completes a certificate password request.
     * 
     * You must call this as a response to #SoupMessage::request-certificate-password
     * signal, to notify `msg` that the #GTlsPassword has already been updated.
     */
    tls_client_certificate_password_request_complete(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.Message */
    /**
     * Emitted during the `msg'`s connection TLS handshake
     * after an unacceptable TLS certificate has been received.
     * You can return %TRUE to accept `tls_certificate` despite
     * `tls_errors`.
     */
    connect(sigName: "accept-certificate", callback: (($obj: Message, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: Message, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags): void
    /**
     * Emitted when the message requires authentication. If
     * credentials are available call soup_auth_authenticate() on
     * `auth`. If these credentials fail, the signal will be
     * emitted again, with `retrying` set to %TRUE, which will
     * continue until you return without calling
     * soup_auth_authenticate() on `auth`.
     * 
     * Note that this may be emitted before `msg'`s body has been
     * fully read.
     * 
     * You can authenticate `auth` asynchronously by calling g_object_ref()
     * on `auth` and returning %TRUE. The operation will complete once
     * either soup_auth_authenticate() or soup_auth_cancel() are called.
     */
    connect(sigName: "authenticate", callback: (($obj: Message, auth: Auth, retrying: boolean) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: Message, auth: Auth, retrying: boolean) => boolean)): number
    emit(sigName: "authenticate", auth: Auth, retrying: boolean): void
    /**
     * This signal is emitted after #SoupMessage::got-headers.
     * If content sniffing is disabled, or no content sniffing will be
     * performed, due to the sniffer deciding to trust the
     * Content-Type sent by the server, this signal is emitted
     * immediately after #SoupMessage::got-headers, and `type` is
     * %NULL.
     */
    connect(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    connect_after(sigName: "content-sniffed", callback: (($obj: Message, type: string, params: GLib.HashTable) => void)): number
    emit(sigName: "content-sniffed", type: string, params: GLib.HashTable): void
    /**
     * Emitted when all HTTP processing is finished for a message.
     * (After #SoupMessage::got_body).
     */
    connect(sigName: "finished", callback: (($obj: Message) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Message) => void)): number
    emit(sigName: "finished"): void
    /**
     * Emitted after receiving the complete message request body.
     * 
     * See also soup_message_add_header_handler() and
     * soup_message_add_status_code_handler(), which can be used
     * to connect to a subset of emissions of this signal.
     */
    connect(sigName: "got-body", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-body", callback: (($obj: Message) => void)): number
    emit(sigName: "got-body"): void
    /**
     * Emitted after receiving the Status-Line and response headers.
     * 
     * See also soup_message_add_header_handler() and
     * soup_message_add_status_code_handler(), which can be used
     * to connect to a subset of emissions of this signal.
     * 
     * If you cancel or requeue `msg` while processing this signal,
     * then the current HTTP I/O will be stopped after this signal
     * emission finished, and `msg'`s connection will be closed.
     * (If you need to requeue a message--eg, after handling
     * authentication or redirection--it is usually better to
     * requeue it from a #SoupMessage::got_body handler rather
     * than a #SoupMessage::got_headers handler, so that the
     * existing HTTP connection can be reused.)
     */
    connect(sigName: "got-headers", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-headers", callback: (($obj: Message) => void)): number
    emit(sigName: "got-headers"): void
    /**
     * Emitted after receiving a 1xx (Informational) response for
     * a (client-side) message. The response_headers will be
     * filled in with the headers associated with the
     * informational response; however, those header values will
     * be erased after this signal is done.
     * 
     * If you cancel or requeue `msg` while processing this signal,
     * then the current HTTP I/O will be stopped after this signal
     * emission finished, and `msg'`s connection will be closed.
     */
    connect(sigName: "got-informational", callback: (($obj: Message) => void)): number
    connect_after(sigName: "got-informational", callback: (($obj: Message) => void)): number
    emit(sigName: "got-informational"): void
    /**
     * Emitted when #SoupHSTSEnforcer has upgraded the protocol
     * for `msg` to HTTPS as a result of matching its domain with
     * a HSTS policy.
     */
    connect(sigName: "hsts-enforced", callback: (($obj: Message) => void)): number
    connect_after(sigName: "hsts-enforced", callback: (($obj: Message) => void)): number
    emit(sigName: "hsts-enforced"): void
    /**
     * Emitted to indicate that some network-related event
     * related to `msg` has occurred. This essentially proxies the
     * #GSocketClient::event signal, but only for events that
     * occur while `msg` "owns" the connection; if `msg` is sent on
     * an existing persistent connection, then this signal will
     * not be emitted. (If you want to force the message to be
     * sent on a new connection, set the
     * %SOUP_MESSAGE_NEW_CONNECTION flag on it.)
     * 
     * See #GSocketClient::event for more information on what
     * the different values of `event` correspond to, and what
     * `connection` will be in each case.
     */
    connect(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    connect_after(sigName: "network-event", callback: (($obj: Message, event: Gio.SocketClientEvent, connection: Gio.IOStream) => void)): number
    emit(sigName: "network-event", event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    /**
     * Emitted during the `msg'`s connection TLS handshake when
     * `tls_connection` requests a certificate from the client.
     * You can set the client certificate by calling
     * soup_message_set_tls_client_certificate() and returning %TRUE.
     * It's possible to handle the request asynchornously by returning
     * %TRUE and call soup_message_set_tls_client_certificate() later
     * once the certificate is available.
     * Note that this signal is not emitted if #SoupSession::tls-interaction
     * was set, or if soup_message_set_tls_client_certificate() was called
     * before the connection TLS handshake started.
     */
    connect(sigName: "request-certificate", callback: (($obj: Message, tls_connection: Gio.TlsClientConnection) => boolean)): number
    connect_after(sigName: "request-certificate", callback: (($obj: Message, tls_connection: Gio.TlsClientConnection) => boolean)): number
    emit(sigName: "request-certificate", tls_connection: Gio.TlsClientConnection): void
    /**
     * Emitted during the `msg'`s connection TLS handshake when
     * `tls_connection` requests a certificate password from the client.
     * You can set the certificate password on `password,` then call
     * soup_message_tls_client_certificate_password_request_complete() and return %TRUE
     * to handle the signal synchronously.
     * It's possible to handle the request asynchornously by calling g_object_ref()
     * on `password,` then returning %TRUE and call
     * soup_message_tls_client_certificate_password_request_complete() later after
     * setting the password on `password`.
     * Note that this signal is not emitted if #SoupSession::tls-interaction
     * was set.
     */
    connect(sigName: "request-certificate-password", callback: (($obj: Message, tls_password: Gio.TlsPassword) => boolean)): number
    connect_after(sigName: "request-certificate-password", callback: (($obj: Message, tls_password: Gio.TlsPassword) => boolean)): number
    emit(sigName: "request-certificate-password", tls_password: Gio.TlsPassword): void
    /**
     * Emitted when a request that was already sent once is now
     * being sent again (eg, because the first attempt received a
     * redirection response, or because we needed to use
     * authentication).
     */
    connect(sigName: "restarted", callback: (($obj: Message) => void)): number
    connect_after(sigName: "restarted", callback: (($obj: Message) => void)): number
    emit(sigName: "restarted"): void
    /**
     * Emitted just before a message is sent.
     */
    connect(sigName: "starting", callback: (($obj: Message) => void)): number
    connect_after(sigName: "starting", callback: (($obj: Message) => void)): number
    emit(sigName: "starting"): void
    /**
     * Emitted immediately after writing the complete body for a
     * message.
     */
    connect(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-body", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-body"): void
    /**
     * Emitted immediately after writing a portion of the message
     * body to the network.
     */
    connect(sigName: "wrote-body-data", callback: (($obj: Message, chunk_size: number) => void)): number
    connect_after(sigName: "wrote-body-data", callback: (($obj: Message, chunk_size: number) => void)): number
    emit(sigName: "wrote-body-data", chunk_size: number): void
    /**
     * Emitted immediately after writing the request headers for a
     * message.
     */
    connect(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    connect_after(sigName: "wrote-headers", callback: (($obj: Message) => void)): number
    emit(sigName: "wrote-headers"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::first-party", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-party", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-options-ping", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-options-ping", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-top-level-navigation", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-top-level-navigation", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reason-phrase", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reason-phrase", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-address", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-address", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-headers", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::site-for-cookies", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::site-for-cookies", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-code", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-ciphersuite-name", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-ciphersuite-name", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-peer-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-peer-certificate", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-peer-certificate-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-peer-certificate-errors", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-protocol-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-protocol-version", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(method: string, uri_string: string): Message
    static new_from_encoded_form(method: string, uri_string: string, encoded_form: string): Message
    static new_from_multipart(uri_string: string, multipart: Multipart): Message
    static new_from_uri(method: string, uri: GLib.Uri): Message
    static new_options_ping(base_uri: GLib.Uri): Message
    static $gtype: GObject.Type
}
interface MultipartInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.MultipartInputStream */
    message?: Message
}
class MultipartInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly parent_instance: Gio.InputStream
    readonly base_stream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.MultipartInputStream */
    /**
     * Obtains the headers for the part currently being processed. Note
     * that the #SoupMessageHeaders that are returned are owned by the
     * #SoupMultipartInputStream and will be replaced when a call is made
     * to soup_multipart_input_stream_next_part() or its async
     * counterpart, so if keeping the headers is required, a copy must be
     * made.
     * 
     * Note that if a part had no headers at all an empty #SoupMessageHeaders
     * will be returned.
     */
    get_headers(): MessageHeaders | null
    /**
     * Obtains an input stream for the next part. When dealing with a
     * multipart response the input stream needs to be wrapped in a
     * #SoupMultipartInputStream and this function or its async
     * counterpart need to be called to obtain the first part for
     * reading.
     * 
     * After calling this function,
     * soup_multipart_input_stream_get_headers() can be used to obtain the
     * headers for the first part. A read of 0 bytes indicates the end of
     * the part; a new call to this function should be done at that point,
     * to obtain the next part.
     */
    next_part(cancellable?: Gio.Cancellable | null): Gio.InputStream | null
    /**
     * Obtains a #GInputStream for the next request. See
     * soup_multipart_input_stream_next_part() for details on the
     * workflow.
     */
    next_part_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous request for the next part.
     */
    next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    /**
     * Gets the base stream for the filter stream.
     */
    get_base_stream(): Gio.InputStream
    /**
     * Returns whether the base stream will be closed when `stream` is
     * closed.
     */
    get_close_base_stream(): boolean
    /**
     * Sets whether the base stream will be closed when `stream` is closed.
     */
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    /**
     * Clears the pending flag on `stream`.
     */
    clear_pending(): void
    /**
     * Closes the stream, releasing resources related to it.
     * 
     * Once the stream is closed, all other operations will return %G_IO_ERROR_CLOSED.
     * Closing a stream multiple times will not return an error.
     * 
     * Streams will be automatically closed when the last reference
     * is dropped, but you might want to call this function to make sure
     * resources are released as early as possible.
     * 
     * Some streams might keep the backing store of the stream (e.g. a file descriptor)
     * open after the stream is closed. See the documentation for the individual
     * stream for details.
     * 
     * On failure the first error that happened will be reported, but the close
     * operation will finish as much as possible. A stream that failed to
     * close will still return %G_IO_ERROR_CLOSED for all operations. Still, it
     * is important to check and report the error to the user.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * Cancelling a close will still leave the stream closed, but some streams
     * can use a faster close that doesn't block to e.g. check errors.
     */
    close(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Requests an asynchronous closes of the stream, releasing resources related to it.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_close_finish() to get the result of the
     * operation.
     * 
     * For behaviour details see g_input_stream_close().
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     */
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
     */
    close_finish(result: Gio.AsyncResult): boolean
    /**
     * Checks if an input stream has pending actions.
     */
    has_pending(): boolean
    /**
     * Checks if an input stream is closed.
     */
    is_closed(): boolean
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * If count is zero returns zero and does nothing. A value of `count`
     * larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer is returned.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * The returned `buffer` is not a nul-terminated string, it can contain nul bytes
     * at any position, and this function doesn't nul-terminate the `buffer`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error -1 is returned and `error` is set accordingly.
     */
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    /**
     * Tries to read `count` bytes from the stream into the buffer starting at
     * `buffer`. Will block during this read.
     * 
     * This function is similar to g_input_stream_read(), except it tries to
     * read as many bytes as requested, only stopping on an error or end of stream.
     * 
     * On a successful read of `count` bytes, or if we reached the end of the
     * stream,  %TRUE is returned, and `bytes_read` is set to the number of bytes
     * read into `buffer`.
     * 
     * If there is an error during the operation %FALSE is returned and `error`
     * is set to indicate the error status.
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_read` will be set to the number of bytes that were successfully
     * read before the error was encountered.  This functionality is only
     * available from C.  If you need it from another language then you must
     * write your own loop around g_input_stream_read().
     */
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytes_read */ number ]
    /**
     * Request an asynchronous read of `count` bytes from the stream into the
     * buffer starting at `buffer`.
     * 
     * This is the asynchronous equivalent of g_input_stream_read_all().
     * 
     * Call g_input_stream_read_all_finish() to collect the result.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     */
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    /**
     * Finishes an asynchronous stream read operation started with
     * g_input_stream_read_all_async().
     * 
     * As a special exception to the normal conventions for functions that
     * use #GError, if this function returns %FALSE (and sets `error)` then
     * `bytes_read` will be set to the number of bytes that were successfully
     * read before the error was encountered.  This functionality is only
     * available from C.  If you need it from another language then you must
     * write your own loop around g_input_stream_read_async().
     */
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    /**
     * Request an asynchronous read of `count` bytes from the stream into the buffer
     * starting at `buffer`. When the operation is finished `callback` will be called.
     * You can then call g_input_stream_read_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed on `stream,` and will
     * result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer will be passed to the
     * callback. It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to read
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value) will
     * be executed before an outstanding request with lower priority. Default
     * priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     */
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    /**
     * Like g_input_stream_read(), this tries to read `count` bytes from
     * the stream in a blocking fashion. However, rather than reading into
     * a user-supplied buffer, this will create a new #GBytes containing
     * the data that was read. This may be easier to use from language
     * bindings.
     * 
     * If count is zero, returns a zero-length #GBytes and does nothing. A
     * value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, a new #GBytes is returned. It is not an error if the
     * size of this object is not the same as the requested size, as it
     * can happen e.g. near the end of a file. A zero-length #GBytes is
     * returned on end of file (or if `count` is zero), but never
     * otherwise.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     * 
     * On error %NULL is returned and `error` is set accordingly.
     */
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    /**
     * Request an asynchronous read of `count` bytes from the stream into a
     * new #GBytes. When the operation is finished `callback` will be
     * called. You can then call g_input_stream_read_bytes_finish() to get the
     * result of the operation.
     * 
     * During an async request no other sync and async calls are allowed
     * on `stream,` and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a
     * %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the new #GBytes will be passed to the callback. It is
     * not an error if this is smaller than the requested size, as it can
     * happen e.g. near the end of a file, but generally we try to read as
     * many bytes as requested. Zero is returned on end of file (or if
     * `count` is zero), but never otherwise.
     * 
     * Any outstanding I/O request with higher priority (lower numerical
     * value) will be executed before an outstanding request with lower
     * priority. Default priority is %G_PRIORITY_DEFAULT.
     */
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream read-into-#GBytes operation.
     */
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    /**
     * Finishes an asynchronous stream read operation.
     */
    read_finish(result: Gio.AsyncResult): number
    /**
     * Sets `stream` to have actions pending. If the pending flag is
     * already set or `stream` is closed, it will return %FALSE and set
     * `error`.
     */
    set_pending(): boolean
    /**
     * Tries to skip `count` bytes from the stream. Will block during the operation.
     * 
     * This is identical to g_input_stream_read(), from a behaviour standpoint,
     * but the bytes that are skipped are not returned to the user. Some
     * streams have an implementation that is more efficient than reading the data.
     * 
     * This function is optional for inherited classes, as the default implementation
     * emulates it using read.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     */
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Request an asynchronous skip of `count` bytes from the stream.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_skip_finish() to get the result
     * of the operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes skipped will be passed to the callback.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to skip
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero), but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value)
     * will be executed before an outstanding request with lower priority.
     * Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to
     * implement asynchronicity, so they are optional for inheriting classes.
     * However, if you override one, you must override all.
     */
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream skip operation.
     */
    skip_finish(result: Gio.AsyncResult): number
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.PollableInputStream */
    /**
     * Checks if `stream` is actually pollable. Some classes may implement
     * #GPollableInputStream but have only certain instances of that class
     * be pollable. If this method returns %FALSE, then the behavior of
     * other #GPollableInputStream methods is undefined.
     * 
     * For any given stream, the value returned by this method is constant;
     * a stream cannot switch from pollable to non-pollable or vice versa.
     */
    can_poll(): boolean
    /**
     * Creates a #GSource that triggers when `stream` can be read, or
     * `cancellable` is triggered or an error occurs. The callback on the
     * source is of the #GPollableSourceFunc type.
     * 
     * As with g_pollable_input_stream_is_readable(), it is possible that
     * the stream may not actually be readable even after the source
     * triggers, so you should use g_pollable_input_stream_read_nonblocking()
     * rather than g_input_stream_read() from the callback.
     */
    create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    /**
     * Checks if `stream` can be read.
     * 
     * Note that some stream types may not be able to implement this 100%
     * reliably, and it is possible that a call to g_input_stream_read()
     * after this returns %TRUE would still block. To guarantee
     * non-blocking behavior, you should always use
     * g_pollable_input_stream_read_nonblocking(), which will return a
     * %G_IO_ERROR_WOULD_BLOCK error rather than blocking.
     */
    is_readable(): boolean
    /**
     * Attempts to read up to `count` bytes from `stream` into `buffer,` as
     * with g_input_stream_read(). If `stream` is not currently readable,
     * this will immediately return %G_IO_ERROR_WOULD_BLOCK, and you can
     * use g_pollable_input_stream_create_source() to create a #GSource
     * that will be triggered when `stream` is readable.
     * 
     * Note that since this method never blocks, you cannot actually
     * use `cancellable` to cancel it. However, it will return an error
     * if `cancellable` has already been cancelled when you call, which
     * may happen if you call this method after a source triggers due
     * to having been cancelled.
     */
    read_nonblocking(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    /* Virtual methods of Soup-3.0.Soup.MultipartInputStream */
    /**
     * Checks if `stream` is actually pollable. Some classes may implement
     * #GPollableInputStream but have only certain instances of that class
     * be pollable. If this method returns %FALSE, then the behavior of
     * other #GPollableInputStream methods is undefined.
     * 
     * For any given stream, the value returned by this method is constant;
     * a stream cannot switch from pollable to non-pollable or vice versa.
     */
    vfunc_can_poll(): boolean
    /**
     * Creates a #GSource that triggers when `stream` can be read, or
     * `cancellable` is triggered or an error occurs. The callback on the
     * source is of the #GPollableSourceFunc type.
     * 
     * As with g_pollable_input_stream_is_readable(), it is possible that
     * the stream may not actually be readable even after the source
     * triggers, so you should use g_pollable_input_stream_read_nonblocking()
     * rather than g_input_stream_read() from the callback.
     */
    vfunc_create_source(cancellable?: Gio.Cancellable | null): GLib.Source
    /**
     * Checks if `stream` can be read.
     * 
     * Note that some stream types may not be able to implement this 100%
     * reliably, and it is possible that a call to g_input_stream_read()
     * after this returns %TRUE would still block. To guarantee
     * non-blocking behavior, you should always use
     * g_pollable_input_stream_read_nonblocking(), which will return a
     * %G_IO_ERROR_WOULD_BLOCK error rather than blocking.
     */
    vfunc_is_readable(): boolean
    /**
     * Attempts to read up to `count` bytes from `stream` into `buffer,` as
     * with g_input_stream_read(). If `stream` is not currently readable,
     * this will immediately return %G_IO_ERROR_WOULD_BLOCK, and you can
     * use g_pollable_input_stream_create_source() to create a #GSource
     * that will be triggered when `stream` is readable.
     * 
     * Note that since this method never blocks, you cannot actually
     * use `cancellable` to cancel it. However, it will return an error
     * if `cancellable` has already been cancelled when you call, which
     * may happen if you call this method after a source triggers due
     * to having been cancelled.
     */
    vfunc_read_nonblocking(): [ /* returnType */ number, /* buffer */ Uint8Array | null ]
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    /**
     * Requests an asynchronous closes of the stream, releasing resources related to it.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_close_finish() to get the result of the
     * operation.
     * 
     * For behaviour details see g_input_stream_close().
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes closing a stream asynchronously, started from g_input_stream_close_async().
     */
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Request an asynchronous read of `count` bytes from the stream into the buffer
     * starting at `buffer`. When the operation is finished `callback` will be called.
     * You can then call g_input_stream_read_finish() to get the result of the
     * operation.
     * 
     * During an async request no other sync and async calls are allowed on `stream,` and will
     * result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes read into the buffer will be passed to the
     * callback. It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to read
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero),  but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value) will
     * be executed before an outstanding request with lower priority. Default
     * priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to implement
     * asynchronicity, so they are optional for inheriting classes. However, if you
     * override one you must override all.
     */
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array | null
    /**
     * Finishes an asynchronous stream read operation.
     */
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Tries to skip `count` bytes from the stream. Will block during the operation.
     * 
     * This is identical to g_input_stream_read(), from a behaviour standpoint,
     * but the bytes that are skipped are not returned to the user. Some
     * streams have an implementation that is more efficient than reading the data.
     * 
     * This function is optional for inherited classes, as the default implementation
     * emulates it using read.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the operation
     * was cancelled, the error %G_IO_ERROR_CANCELLED will be returned. If an
     * operation was partially finished when the operation was cancelled the
     * partial result will be returned, without an error.
     */
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    /**
     * Request an asynchronous skip of `count` bytes from the stream.
     * When the operation is finished `callback` will be called.
     * You can then call g_input_stream_skip_finish() to get the result
     * of the operation.
     * 
     * During an async request no other sync and async calls are allowed,
     * and will result in %G_IO_ERROR_PENDING errors.
     * 
     * A value of `count` larger than %G_MAXSSIZE will cause a %G_IO_ERROR_INVALID_ARGUMENT error.
     * 
     * On success, the number of bytes skipped will be passed to the callback.
     * It is not an error if this is not the same as the requested size, as it
     * can happen e.g. near the end of a file, but generally we try to skip
     * as many bytes as requested. Zero is returned on end of file
     * (or if `count` is zero), but never otherwise.
     * 
     * Any outstanding i/o request with higher priority (lower numerical value)
     * will be executed before an outstanding request with lower priority.
     * Default priority is %G_PRIORITY_DEFAULT.
     * 
     * The asynchronous methods have a default fallback that uses threads to
     * implement asynchronicity, so they are optional for inheriting classes.
     * However, if you override one, you must override all.
     */
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a stream skip operation.
     */
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: MultipartInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultipartInputStream_ConstructProps)
    _init (config?: MultipartInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(msg: Message, base_stream: Gio.InputStream): MultipartInputStream
    static $gtype: GObject.Type
}
interface Server_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.Server */
    raw_paths?: boolean
    /**
     * If non-%NULL, the value to use for the "Server" header on
     * #SoupServerMessage<!-- -->s processed by this server.
     * 
     * The Server header is the server equivalent of the
     * User-Agent header, and provides information about the
     * server and its components. It contains a list of one or
     * more product tokens, separated by whitespace, with the most
     * significant product token coming first. The tokens must be
     * brief, ASCII, and mostly alphanumeric (although "-", "_",
     * and "." are also allowed), and may optionally include a "/"
     * followed by a version string. You may also put comments,
     * enclosed in parentheses, between or after the tokens.
     * 
     * Some HTTP server implementations intentionally do not use
     * version numbers in their Server header, so that
     * installations running older versions of the server don't
     * end up advertising their vulnerability to specific security
     * holes.
     * 
     * As with #SoupSession:user_agent, if you set a
     * #SoupServer:server_header property that has trailing whitespace,
     * #SoupServer will append its own product token (eg,
     * "<literal>libsoup/2.3.2</literal>") to the end of the
     * header for you.
     */
    server_header?: string
    /**
     * A #GTlsAuthenticationMode for SSL/TLS client authentication
     */
    tls_auth_mode?: Gio.TlsAuthenticationMode
    /**
     * A #GTlsCertificate that has a #GTlsCertificate:private-key
     * set. If this is set, then the server will be able to speak
     * https in addition to (or instead of) plain http.
     */
    tls_certificate?: Gio.TlsCertificate
    /**
     * A #GTlsDatabase to use for validating SSL/TLS client certificates.
     */
    tls_database?: Gio.TlsDatabase
}
class Server {
    /* Properties of Soup-3.0.Soup.Server */
    /**
     * If non-%NULL, the value to use for the "Server" header on
     * #SoupServerMessage<!-- -->s processed by this server.
     * 
     * The Server header is the server equivalent of the
     * User-Agent header, and provides information about the
     * server and its components. It contains a list of one or
     * more product tokens, separated by whitespace, with the most
     * significant product token coming first. The tokens must be
     * brief, ASCII, and mostly alphanumeric (although "-", "_",
     * and "." are also allowed), and may optionally include a "/"
     * followed by a version string. You may also put comments,
     * enclosed in parentheses, between or after the tokens.
     * 
     * Some HTTP server implementations intentionally do not use
     * version numbers in their Server header, so that
     * installations running older versions of the server don't
     * end up advertising their vulnerability to specific security
     * holes.
     * 
     * As with #SoupSession:user_agent, if you set a
     * #SoupServer:server_header property that has trailing whitespace,
     * #SoupServer will append its own product token (eg,
     * "<literal>libsoup/2.3.2</literal>") to the end of the
     * header for you.
     */
    server_header: string
    /**
     * A #GTlsAuthenticationMode for SSL/TLS client authentication
     */
    tls_auth_mode: Gio.TlsAuthenticationMode
    /**
     * A #GTlsCertificate that has a #GTlsCertificate:private-key
     * set. If this is set, then the server will be able to speak
     * https in addition to (or instead of) plain http.
     */
    tls_certificate: Gio.TlsCertificate
    /**
     * A #GTlsDatabase to use for validating SSL/TLS client certificates.
     */
    tls_database: Gio.TlsDatabase
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Server */
    /**
     * Add a new client stream to the `server`.
     */
    accept_iostream(stream: Gio.IOStream, local_addr?: Gio.SocketAddress | null, remote_addr?: Gio.SocketAddress | null): boolean
    /**
     * Adds an authentication domain to `server`. Each auth domain will
     * have the chance to require authentication for each request that
     * comes in; normally auth domains will require authentication for
     * requests on certain paths that they have been set up to watch, or
     * that meet other criteria set by the caller. If an auth domain
     * determines that a request requires authentication (and the request
     * doesn't contain authentication), `server` will automatically reject
     * the request with an appropriate status (401 Unauthorized or 407
     * Proxy Authentication Required). If the request used the
     * SoupServer:100-continue Expectation, `server` will reject it before the
     * request body is sent.
     */
    add_auth_domain(auth_domain: AuthDomain): void
    /**
     * Adds an "early" handler to `server` for requests prefixed by `path`. Note
     * that "normal" and "early" handlers are matched up together, so if
     * you add a normal handler for "/foo" and an early handler for
     * "/foo/bar", then a request to "/foo/bar" (or any path below it)
     * will run only the early handler. (But if you add both handlers at
     * the same path, then both will get run.)
     * 
     * For requests under `path` (that have not already been assigned a
     * status code by a #SoupAuthDomain or a signal handler), `callback`
     * will be invoked after receiving the request headers, but before
     * receiving the request body; the message's method and
     * request-headers properties will be set.
     * 
     * Early handlers are generally used for processing requests with
     * request bodies in a streaming fashion. If you determine that the
     * request will contain a message body, normally you would call
     * soup_message_body_set_accumulate() on the message's
     * request-body to turn off request-body accumulation,
     * and connect to the message's #SoupServerMessage::got-chunk signal to
     * process each chunk as it comes in.
     * 
     * To complete the message processing after the full message body has
     * been read, you can either also connect to #SoupServerMessage::got-body,
     * or else you can register a non-early handler for `path` as well. As
     * long as you have not set the status-code by the time
     * #SoupServerMessage::got-body is emitted, the non-early handler will be
     * run as well.
     */
    add_early_handler(path: string | null, callback: ServerCallback): void
    /**
     * Adds a handler to `server` for requests prefixed by `path`. If `path` is
     * %NULL or "/", then this will be the default handler for all
     * requests that don't have a more specific handler. (Note though that
     * if you want to handle requests to the special "*" URI, you must
     * explicitly register a handler for "*"; the default handler will not
     * be used for that case.)
     * 
     * For requests under `path` (that have not already been assigned a
     * status code by a #SoupAuthDomain, an early server handler, or a
     * signal handler), `callback` will be invoked after receiving the
     * request body; the #SoupServerMessage<!-- -->'s method, request-headers,
     * and request-body properties will be set.
     * 
     * After determining what to do with the request, the callback must at
     * a minimum call soup_server_message_set_status() on the message to set the response
     * status code. Additionally, it may set response headers and/or fill
     * in the response body.
     * 
     * If the callback cannot fully fill in the response before returning
     * (eg, if it needs to wait for information from a database, or
     * another network server), it should call soup_server_pause_message()
     * to tell `server` to not send the response right away. When the
     * response is ready, call soup_server_unpause_message() to cause it
     * to be sent.
     * 
     * To send the response body a bit at a time using "chunked" encoding,
     * first call soup_message_headers_set_encoding() to set
     * %SOUP_ENCODING_CHUNKED on the response-headers. Then call
     * soup_message_body_append() (or soup_message_body_append_bytes))
     * to append each chunk as it becomes ready, and
     * soup_server_unpause_message() to make sure it's running. (The
     * server will automatically pause the message if it is using chunked
     * encoding but no more chunks are available.) When you are done, call
     * soup_message_body_complete() to indicate that no more chunks are
     * coming.
     */
    add_handler(path: string | null, callback: ServerCallback): void
    /**
     * Add support for a WebSocket extension of the given `extension_type`.
     * When a WebSocket client requests an extension of `extension_type,`
     * a new #SoupWebsocketExtension of type `extension_type` will be created
     * to handle the request.
     * 
     * Note that #SoupWebsocketExtensionDeflate is supported by default, use
     * soup_server_remove_websocket_extension() if you want to disable it.
     */
    add_websocket_extension(extension_type: GObject.Type): void
    /**
     * Adds a WebSocket handler to `server` for requests prefixed by `path`. (If
     * `path` is %NULL or "/", then this will be the default handler for
     * all requests that don't have a more specific handler.)
     * 
     * When a path has a WebSocket handler registered, `server` will check
     * incoming requests for WebSocket handshakes after all other handlers
     * have run (unless some earlier handler has already set a status code
     * on the message), and update the request's status, response headers,
     * and response body accordingly.
     * 
     * If `origin` is non-%NULL, then only requests containing a matching
     * "Origin" header will be accepted. If `protocols` is non-%NULL, then
     * only requests containing a compatible "Sec-WebSocket-Protocols"
     * header will be accepted. More complicated requirements can be
     * handled by adding a normal handler to `path,` and having it perform
     * whatever checks are needed and
     * setting a failure status code if the handshake should be rejected.
     */
    add_websocket_handler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void
    /**
     * Closes and frees `server'`s listening sockets.
     * 
     * Note that if there are currently requests in progress on `server,`
     * that they will continue to be processed if `server'`s #GMainContext
     * is still running.
     * 
     * You can call soup_server_listen(), etc, after calling this function
     * if you want to start listening again.
     */
    disconnect(): void
    /**
     * Gets `server'`s list of listening sockets.
     * 
     * You should treat these sockets as read-only; writing to or
     * modifiying any of these sockets may cause `server` to malfunction.
     */
    get_listeners(): Gio.Socket[]
    /**
     * Gets the `server` SSL/TLS client authentication mode
     */
    get_tls_auth_mode(): Gio.TlsAuthenticationMode
    /**
     * Gets the `server` SSL/TLS certificate
     */
    get_tls_certificate(): Gio.TlsCertificate | null
    /**
     * Gets the `server` SSL/TLS database
     */
    get_tls_database(): Gio.TlsDatabase | null
    /**
     * Gets a list of URIs corresponding to the interfaces `server` is
     * listening on. These will contain IP addresses, not hostnames, and
     * will also indicate whether the given listener is http or https.
     * 
     * Note that if you used soup_server_listen_all(), the returned URIs
     * will use the addresses <literal>0.0.0.0</literal> and
     * <literal>::</literal>, rather than actually returning separate URIs
     * for each interface on the system.
     */
    get_uris(): GLib.Uri[]
    /**
     * Checks whether `server` is capable of https.
     * 
     * In order for a server to run https, you must call
     * soup_server_set_ssl_cert_file(), or set the
     * #SoupServer:tls-certificate property, to provide it with a
     * certificate to use.
     * 
     * If you are using the deprecated single-listener APIs, then a return
     * value of %TRUE indicates that the #SoupServer serves https
     * exclusively. If you are using soup_server_listen(), etc, then a
     * %TRUE return value merely indicates that the server is
     * <emphasis>able</emphasis> to do https, regardless of whether it
     * actually currently is or not. Use soup_server_get_uris() to see if
     * it currently has any https listeners.
     */
    is_https(): boolean
    /**
     * This attempts to set up `server` to listen for connections on
     * `address`.
     * 
     * If `options` includes %SOUP_SERVER_LISTEN_HTTPS, and `server` has
     * been configured for TLS, then `server` will listen for https
     * connections on this port. Otherwise it will listen for plain http.
     * 
     * You may call this method (along with the other "listen" methods)
     * any number of times on a server, if you want to listen on multiple
     * ports, or set up both http and https service.
     * 
     * After calling this method, `server` will begin accepting and
     * processing connections as soon as the appropriate #GMainContext is
     * run.
     * 
     * Note that #SoupServer never makes use of dual IPv4/IPv6 sockets; if
     * `address` is an IPv6 address, it will only accept IPv6 connections.
     * You must configure IPv4 listening separately.
     */
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean
    /**
     * This attempts to set up `server` to listen for connections on all
     * interfaces on the system. (That is, it listens on the addresses
     * <literal>0.0.0.0</literal> and/or <literal>::</literal>, depending
     * on whether `options` includes %SOUP_SERVER_LISTEN_IPV4_ONLY,
     * %SOUP_SERVER_LISTEN_IPV6_ONLY, or neither.) If `port` is specified,
     * `server` will listen on that port. If it is 0, `server` will find an
     * unused port to listen on. (In that case, you can use
     * soup_server_get_uris() to find out what port it ended up choosing.)
     * 
     * See soup_server_listen() for more details.
     */
    listen_all(port: number, options: ServerListenOptions): boolean
    /**
     * This attempts to set up `server` to listen for connections on
     * "localhost" (that is, <literal>127.0.0.1</literal> and/or
     * <literal>::1</literal>, depending on whether `options` includes
     * %SOUP_SERVER_LISTEN_IPV4_ONLY, %SOUP_SERVER_LISTEN_IPV6_ONLY, or
     * neither). If `port` is specified, `server` will listen on that port.
     * If it is 0, `server` will find an unused port to listen on. (In that
     * case, you can use soup_server_get_uris() to find out what port it
     * ended up choosing.)
     * 
     * See soup_server_listen() for more details.
     */
    listen_local(port: number, options: ServerListenOptions): boolean
    /**
     * This attempts to set up `server` to listen for connections on
     * `socket`.
     * 
     * See soup_server_listen() for more details.
     */
    listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean
    /**
     * Pauses I/O on `msg`. This can be used when you need to return from
     * the server handler without having the full response ready yet. Use
     * soup_server_unpause_message() to resume I/O.
     * 
     * This must only be called on a #SoupServerMessage which was created by the
     * #SoupServer and are currently doing I/O, such as those passed into a
     * #SoupServerCallback or emitted in a #SoupServer::request-read signal.
     */
    pause_message(msg: ServerMessage): void
    /**
     * Removes `auth_domain` from `server`.
     */
    remove_auth_domain(auth_domain: AuthDomain): void
    /**
     * Removes all handlers (early and normal) registered at `path`.
     */
    remove_handler(path: string): void
    /**
     * Removes support for WebSocket extension of type `extension_type` (or any subclass of
     * `extension_type)` from `server`.
     */
    remove_websocket_extension(extension_type: GObject.Type): void
    /**
     * Sets `server'`s #GTlsAuthenticationMode to use for SSL/TLS client authentication
     */
    set_tls_auth_mode(mode: Gio.TlsAuthenticationMode): void
    /**
     * Sets `server` up to do https, using the given SSL/TLS `certificate`.
     */
    set_tls_certificate(certificate: Gio.TlsCertificate): void
    /**
     * Sets `server'`s #GTlsDatabase to use for validating SSL/TLS client certificates
     */
    set_tls_database(tls_database: Gio.TlsDatabase): void
    /**
     * Resumes I/O on `msg`. Use this to resume after calling
     * soup_server_pause_message(), or after adding a new chunk to a
     * chunked response.
     * 
     * I/O won't actually resume until you return to the main loop.
     * 
     * This must only be called on a #SoupServerMessage which was created by the
     * #SoupServer and are currently doing I/O, such as those passed into a
     * #SoupServerCallback or emitted in a #SoupServer::request-read signal.
     */
    unpause_message(msg: ServerMessage): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.Server */
    vfunc_request_aborted(msg: ServerMessage): void
    vfunc_request_finished(msg: ServerMessage): void
    vfunc_request_read(msg: ServerMessage): void
    vfunc_request_started(msg: ServerMessage): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.Server */
    /**
     * Emitted when processing has failed for a message; this
     * could mean either that it could not be read (if
     * #SoupServer::request_read has not been emitted for it yet),
     * or that the response could not be written back (if
     * #SoupServer::request_read has been emitted but
     * #SoupServer::request_finished has not been).
     * 
     * `message` is in an undefined state when this signal is
     * emitted; the signal exists primarily to allow the server to
     * free any state that it may have allocated in
     * #SoupServer::request_started.
     */
    connect(sigName: "request-aborted", callback: (($obj: Server, message: ServerMessage) => void)): number
    connect_after(sigName: "request-aborted", callback: (($obj: Server, message: ServerMessage) => void)): number
    emit(sigName: "request-aborted", message: ServerMessage): void
    /**
     * Emitted when the server has finished writing a response to
     * a request.
     */
    connect(sigName: "request-finished", callback: (($obj: Server, message: ServerMessage) => void)): number
    connect_after(sigName: "request-finished", callback: (($obj: Server, message: ServerMessage) => void)): number
    emit(sigName: "request-finished", message: ServerMessage): void
    /**
     * Emitted when the server has successfully read a request.
     * `message` will have all of its request-side information
     * filled in, and if the message was authenticated, `client`
     * will have information about that. This signal is emitted
     * before any (non-early) handlers are called for the message,
     * and if it sets the message's #status_code, then normal
     * handler processing will be skipped.
     */
    connect(sigName: "request-read", callback: (($obj: Server, message: ServerMessage) => void)): number
    connect_after(sigName: "request-read", callback: (($obj: Server, message: ServerMessage) => void)): number
    emit(sigName: "request-read", message: ServerMessage): void
    /**
     * Emitted when the server has started reading a new request.
     * `message` will be completely blank; not even the
     * Request-Line will have been read yet. About the only thing
     * you can usefully do with it is connect to its signals.
     * 
     * If the request is read successfully, this will eventually
     * be followed by a #SoupServer::request_read signal. If a
     * response is then sent, the request processing will end with
     * a #SoupServer::request_finished signal. If a network error
     * occurs, the processing will instead end with
     * #SoupServer::request_aborted.
     */
    connect(sigName: "request-started", callback: (($obj: Server, message: ServerMessage) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: Server, message: ServerMessage) => void)): number
    emit(sigName: "request-started", message: ServerMessage): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::server-header", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-auth-mode", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-auth-mode", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-certificate", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    static $gtype: GObject.Type
}
interface ServerMessage_ConstructProps extends GObject.Object_ConstructProps {
}
class ServerMessage {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.ServerMessage */
    /**
     * Get the HTTP version of `msg`.
     */
    get_http_version(): HTTPVersion
    /**
     * Retrieves the #GSocketAddress associated with the local end
     * of a connection.
     */
    get_local_address(): Gio.SocketAddress | null
    /**
     * Get the HTTP method of `msg`.
     */
    get_method(): string
    /**
     * Get the HTTP reason phrase of `msg` or %NULL.
     */
    get_reason_phrase(): string
    /**
     * Retrieves the #GSocketAddress associated with the remote end
     * of a connection.
     */
    get_remote_address(): Gio.SocketAddress | null
    /**
     * Retrieves the IP address associated with the remote end of a
     * connection.
     */
    get_remote_host(): string | null
    /**
     * Get the request body of `msg`.
     */
    get_request_body(): MessageBody
    /**
     * Get the request headers of `msg`.
     */
    get_request_headers(): MessageHeaders
    /**
     * Get the response body of `msg`.
     */
    get_response_body(): MessageBody
    /**
     * Get the response headers of `msg`.
     */
    get_response_headers(): MessageHeaders
    /**
     * Retrieves the #GSocket that `msg` is associated with.
     * 
     * If you are using this method to observe when multiple requests are
     * made on the same persistent HTTP connection (eg, as the ntlm-test
     * test program does), you will need to pay attention to socket
     * destruction as well (eg, by using weak references), so that you do
     * not get fooled when the allocator reuses the memory address of a
     * previously-destroyed socket to represent a new socket.
     */
    get_socket(): Gio.Socket | null
    /**
     * Get the HTTP status code of `msg`.
     */
    get_status(): number
    /**
     * Get `msg'`s URI.
     */
    get_uri(): GLib.Uri
    /**
     * Gets if `msg` represents an OPTIONS message with the path `*`.
     */
    is_options_ping(): boolean
    /**
     * Set the HTTP version of `msg`.
     */
    set_http_version(version: HTTPVersion): void
    /**
     * Sets `msg'`s status_code to `status_code` and adds a Location header
     * pointing to `redirect_uri`. Use this from a #SoupServer when you
     * want to redirect the client to another URI.
     * 
     * `redirect_uri` can be a relative URI, in which case it is
     * interpreted relative to `msg'`s current URI. In particular, if
     * `redirect_uri` is just a path, it will replace the path
     * <emphasis>and query</emphasis> of `msg'`s URI.
     */
    set_redirect(status_code: number, redirect_uri: string): void
    /**
     * Convenience function to set the response body of a #SoupServerMessage. If
     * `content_type` is %NULL, the response body must be empty as well.
     */
    set_response(content_type: string | null, resp_use: MemoryUse, resp_body: Uint8Array | null): void
    /**
     * Sets `msg'`s status code to `status_code`. If `status_code` is a
     * known value and `reason_phrase` is %NULL, the reason_phrase will
     * be set automatically.
     */
    set_status(status_code: number, reason_phrase?: string | null): void
    /**
     * "Steals" the HTTP connection associated with `msg` from its
     * #SoupServer. This happens immediately, regardless of the current
     * state of the connection; if the response to `msg` has not yet finished
     * being sent, then it will be discarded; you can steal the connection from a
     * #SoupServerMessage::wrote-informational or #SoupServerMessage::wrote-body signal
     * handler if you need to wait for part or all of the response to be sent.
     * 
     * Note that when calling this function from C, `msg` will most
     * likely be freed as a side effect.
     */
    steal_connection(): Gio.IOStream
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.ServerMessage */
    /**
     * Emitted during the `msg'`s connection TLS handshake
     * after client TLS certificate has been received.
     * You can return %TRUE to accept `tls_certificate` despite
     * `tls_errors`.
     */
    connect(sigName: "accept-certificate", callback: (($obj: ServerMessage, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "accept-certificate", callback: (($obj: ServerMessage, tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "accept-certificate", tls_peer_certificate: Gio.TlsCertificate, tls_peer_errors: Gio.TlsCertificateFlags): void
    /**
     * Emitted when the `msg'`s socket is disconnected.
     */
    connect(sigName: "disconnected", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "disconnected"): void
    /**
     * Emitted when all HTTP processing is finished for a message.
     * (After #SoupServerMessage::wrote-body).
     */
    connect(sigName: "finished", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "finished", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "finished"): void
    /**
     * Emitted after receiving the complete request body.
     */
    connect(sigName: "got-body", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "got-body", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "got-body"): void
    /**
     * Emitted after receiving a chunk of a message body. Note
     * that "chunk" in this context means any subpiece of the
     * body, not necessarily the specific HTTP 1.1 chunks sent by
     * the other side.
     */
    connect(sigName: "got-chunk", callback: (($obj: ServerMessage, chunk: GLib.Bytes) => void)): number
    connect_after(sigName: "got-chunk", callback: (($obj: ServerMessage, chunk: GLib.Bytes) => void)): number
    emit(sigName: "got-chunk", chunk: GLib.Bytes): void
    /**
     * Emitted after receiving the Request-Line and request headers.
     */
    connect(sigName: "got-headers", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "got-headers", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "got-headers"): void
    /**
     * Emitted immediately after writing the complete response body for a
     * message.
     */
    connect(sigName: "wrote-body", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "wrote-body", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "wrote-body"): void
    /**
     * Emitted immediately after writing a portion of the message
     * body to the network.
     */
    connect(sigName: "wrote-body-data", callback: (($obj: ServerMessage, chunk_size: number) => void)): number
    connect_after(sigName: "wrote-body-data", callback: (($obj: ServerMessage, chunk_size: number) => void)): number
    emit(sigName: "wrote-body-data", chunk_size: number): void
    /**
     * Emitted immediately after writing a body chunk for a message.
     * 
     * Note that this signal is not parallel to
     * #SoupServerMessage::got-chunk; it is emitted only when a complete
     * chunk (added with soup_message_body_append() or
     * soup_message_body_append_bytes()) has been written. To get
     * more useful continuous progress information, use
     * #SoupServerMessage::wrote-body-data.
     */
    connect(sigName: "wrote-chunk", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "wrote-chunk", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "wrote-chunk"): void
    /**
     * Emitted immediately after writing the response headers for a
     * message.
     */
    connect(sigName: "wrote-headers", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "wrote-headers", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "wrote-headers"): void
    /**
     * Emitted immediately after writing a 1xx (Informational) response.
     */
    connect(sigName: "wrote-informational", callback: (($obj: ServerMessage) => void)): number
    connect_after(sigName: "wrote-informational", callback: (($obj: ServerMessage) => void)): number
    emit(sigName: "wrote-informational"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: ServerMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ServerMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ServerMessage_ConstructProps)
    _init (config?: ServerMessage_ConstructProps): void
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.Session */
    /**
     * If non-%NULL, the value to use for the "Accept-Language" header
     * on #SoupMessage<!-- -->s sent from this session.
     * 
     * Setting this will disable #SoupSession:accept-language-auto.
     */
    accept_language?: string
    /**
     * If %TRUE, #SoupSession will automatically set the string
     * for the "Accept-Language" header on every #SoupMessage
     * sent, based on the return value of g_get_language_names().
     * 
     * Setting this will override any previous value of
     * #SoupSession:accept-language.
     */
    accept_language_auto?: boolean
    /**
     * Connection lifetime (in seconds) when idle. Any connection
     * left idle longer than this will be closed.
     * 
     * Although you can change this property at any time, it will
     * only affect newly-created connections, not currently-open
     * ones. You can call soup_session_abort() after setting this
     * if you want to ensure that all future connections will have
     * this timeout value.
     */
    idle_timeout?: number
    /**
     * Sets the #GInetSocketAddress to use for the client side of
     * the connection.
     * 
     * Use this property if you want for instance to bind the
     * local socket to a specific IP address.
     */
    local_address?: Gio.InetSocketAddress
    /**
     * The maximum number of connections that the session can open at once.
     */
    max_conns?: number
    /**
     * The maximum number of connections that the session can open at once to a given host.
     */
    max_conns_per_host?: number
    /**
     * A #GProxyResolver to use with this session.
     * 
     * If no proxy resolver is set, then the default proxy resolver
     * will be used. See g_proxy_resolver_get_default().
     * You can set it to %NULL if you don't want to use proxies, or
     * set it to your own #GProxyResolver if you want to control
     * what proxies get used.
     */
    proxy_resolver?: Gio.ProxyResolver
    /**
     * Sets a socket to make outgoing connections on. This will override the default
     * behaviour of opening TCP/IP sockets to the hosts specified in the URIs.
     * 
     * This function is not required for common HTTP usage, but only when connecting
     * to a HTTP service that is not using standard TCP/IP sockets. An example of
     * this is a local service that uses HTTP over UNIX-domain sockets, in that case
     * a #GUnixSocketAddress can be passed to this function.
     */
    remote_connectable?: Gio.SocketConnectable
    /**
     * The timeout (in seconds) for socket I/O operations
     * (including connecting to a server, and waiting for a reply
     * to an HTTP request).
     * 
     * Although you can change this property at any time, it will
     * only affect newly-created connections, not currently-open
     * ones. You can call soup_session_abort() after setting this
     * if you want to ensure that all future connections will have
     * this timeout value.
     * 
     * Not to be confused with #SoupSession:idle-timeout (which is
     * the length of time that idle persistent connections will be
     * kept open).
     */
    timeout?: number
    /**
     * Sets the #GTlsDatabase to use for validating SSL/TLS
     * certificates.
     * 
     * If no certificate database is set, then the default database will be
     * used. See g_tls_backend_get_default_database().
     */
    tls_database?: Gio.TlsDatabase
    /**
     * A #GTlsInteraction object that will be passed on to any
     * #GTlsConnections created by the session. (This can be used to
     * provide client-side certificates, for example.)
     */
    tls_interaction?: Gio.TlsInteraction
    /**
     * If non-%NULL, the value to use for the "User-Agent" header
     * on #SoupMessage<!-- -->s sent from this session.
     * 
     * RFC 2616 says: "The User-Agent request-header field
     * contains information about the user agent originating the
     * request. This is for statistical purposes, the tracing of
     * protocol violations, and automated recognition of user
     * agents for the sake of tailoring responses to avoid
     * particular user agent limitations. User agents SHOULD
     * include this field with requests."
     * 
     * The User-Agent header contains a list of one or more
     * product tokens, separated by whitespace, with the most
     * significant product token coming first. The tokens must be
     * brief, ASCII, and mostly alphanumeric (although "-", "_",
     * and "." are also allowed), and may optionally include a "/"
     * followed by a version string. You may also put comments,
     * enclosed in parentheses, between or after the tokens.
     * 
     * If you set a #SoupSession:user_agent property that has trailing
     * whitespace, #SoupSession will append its own product token
     * (eg, "<literal>libsoup/2.3.2</literal>") to the end of the
     * header for you.
     */
    user_agent?: string
}
class Session {
    /* Properties of Soup-3.0.Soup.Session */
    /**
     * If non-%NULL, the value to use for the "Accept-Language" header
     * on #SoupMessage<!-- -->s sent from this session.
     * 
     * Setting this will disable #SoupSession:accept-language-auto.
     */
    accept_language: string
    /**
     * If %TRUE, #SoupSession will automatically set the string
     * for the "Accept-Language" header on every #SoupMessage
     * sent, based on the return value of g_get_language_names().
     * 
     * Setting this will override any previous value of
     * #SoupSession:accept-language.
     */
    accept_language_auto: boolean
    /**
     * Connection lifetime (in seconds) when idle. Any connection
     * left idle longer than this will be closed.
     * 
     * Although you can change this property at any time, it will
     * only affect newly-created connections, not currently-open
     * ones. You can call soup_session_abort() after setting this
     * if you want to ensure that all future connections will have
     * this timeout value.
     */
    idle_timeout: number
    /**
     * A #GProxyResolver to use with this session.
     * 
     * If no proxy resolver is set, then the default proxy resolver
     * will be used. See g_proxy_resolver_get_default().
     * You can set it to %NULL if you don't want to use proxies, or
     * set it to your own #GProxyResolver if you want to control
     * what proxies get used.
     */
    proxy_resolver: Gio.ProxyResolver
    /**
     * The timeout (in seconds) for socket I/O operations
     * (including connecting to a server, and waiting for a reply
     * to an HTTP request).
     * 
     * Although you can change this property at any time, it will
     * only affect newly-created connections, not currently-open
     * ones. You can call soup_session_abort() after setting this
     * if you want to ensure that all future connections will have
     * this timeout value.
     * 
     * Not to be confused with #SoupSession:idle-timeout (which is
     * the length of time that idle persistent connections will be
     * kept open).
     */
    timeout: number
    /**
     * Sets the #GTlsDatabase to use for validating SSL/TLS
     * certificates.
     * 
     * If no certificate database is set, then the default database will be
     * used. See g_tls_backend_get_default_database().
     */
    tls_database: Gio.TlsDatabase
    /**
     * A #GTlsInteraction object that will be passed on to any
     * #GTlsConnections created by the session. (This can be used to
     * provide client-side certificates, for example.)
     */
    tls_interaction: Gio.TlsInteraction
    /**
     * If non-%NULL, the value to use for the "User-Agent" header
     * on #SoupMessage<!-- -->s sent from this session.
     * 
     * RFC 2616 says: "The User-Agent request-header field
     * contains information about the user agent originating the
     * request. This is for statistical purposes, the tracing of
     * protocol violations, and automated recognition of user
     * agents for the sake of tailoring responses to avoid
     * particular user agent limitations. User agents SHOULD
     * include this field with requests."
     * 
     * The User-Agent header contains a list of one or more
     * product tokens, separated by whitespace, with the most
     * significant product token coming first. The tokens must be
     * brief, ASCII, and mostly alphanumeric (although "-", "_",
     * and "." are also allowed), and may optionally include a "/"
     * followed by a version string. You may also put comments,
     * enclosed in parentheses, between or after the tokens.
     * 
     * If you set a #SoupSession:user_agent property that has trailing
     * whitespace, #SoupSession will append its own product token
     * (eg, "<literal>libsoup/2.3.2</literal>") to the end of the
     * header for you.
     */
    user_agent: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.Session */
    /**
     * Cancels all pending requests in `session` and closes all idle
     * persistent connections.
     */
    abort(): void
    /**
     * Adds `feature'`s functionality to `session`. You cannot add multiple
     * features of the same #GType to a session.
     * 
     * See the main #SoupSession documentation for information on what
     * features are present in sessions by default.
     */
    add_feature(feature: SessionFeature): void
    /**
     * If `feature_type` is the type of a class that implements
     * #SoupSessionFeature, this creates a new feature of that type and
     * adds it to `session` as with soup_session_add_feature(). You can use
     * this when you don't need to customize the new feature in any way.
     * Adding multiple features of the same `feature_type` is not allowed.
     * 
     * If `feature_type` is not a #SoupSessionFeature type, this gives each
     * existing feature on `session` the chance to accept `feature_type` as
     * a "subfeature". This can be used to add new #SoupAuth types, for instance.
     * 
     * See the main #SoupSession documentation for information on what
     * features are present in sessions by default.
     */
    add_feature_by_type(feature_type: GObject.Type): void
    /**
     * Get the value used by `session` for the "Accept-Language" header on new requests.
     */
    get_accept_language(): string | null
    /**
     * Get whether `session` automatically sets the "Accept-Language" header on new requests.
     */
    get_accept_language_auto(): boolean
    /**
     * Gets the #SoupMessage of the `result` asynchronous operation
     * This is useful to get the #SoupMessage of an asynchronous
     * operation started by `session` from its #GAsyncReadyCallback.
     */
    get_async_result_message(result: Gio.AsyncResult): Message | null
    /**
     * Gets the feature in `session` of type `feature_type`.
     */
    get_feature(feature_type: GObject.Type): SessionFeature | null
    /**
     * Gets the feature in `session` of type `feature_type,` provided
     * that it is not disabled for `msg`.
     */
    get_feature_for_message(feature_type: GObject.Type, msg: Message): SessionFeature | null
    /**
     * Get the timeout in seconds for idle connection lifetime currently used by `session`.
     */
    get_idle_timeout(): number
    /**
     * Get the #GInetSocketAddress to use for the client side of connections in `session`.
     */
    get_local_address(): Gio.InetSocketAddress | null
    /**
     * Get the maximum number of connections that `session` can open at once.
     */
    get_max_conns(): number
    /**
     * Get the maximum number of connections that `session` can open at once to a given host.
     */
    get_max_conns_per_host(): number
    /**
     * Get the #GProxyResolver currently used by `session`.
     */
    get_proxy_resolver(): Gio.ProxyResolver | null
    /**
     * Get the remote connectable if one set.
     */
    get_remote_connectable(): Gio.SocketConnectable | null
    /**
     * Get the timeout in seconds for socket I/O operations currently used by `session`.
     */
    get_timeout(): number
    /**
     * Get the #GTlsDatabase currently used by `session`.
     */
    get_tls_database(): Gio.TlsDatabase | null
    /**
     * Get the #GTlsInteraction currently used by `session`.
     */
    get_tls_interaction(): Gio.TlsInteraction | null
    /**
     * Get the value used by `session` for the "User-Agent" header on new requests.
     */
    get_user_agent(): string | null
    /**
     * Tests if `session` has at a feature of type `feature_type` (which can
     * be the type of either a #SoupSessionFeature, or else a subtype of
     * some class managed by another feature, such as #SoupAuth).
     */
    has_feature(feature_type: GObject.Type): boolean
    /**
     * Start a preconnection to `msg`. Once the connection is done, it will remain in idle state so that
     * it can be reused by future requests. If there's already an idle connection for the given `msg`
     * host, the operation finishes successfully without creating a new connection. If a new request
     * for the given `msg` host is made while the preconnect is still ongoing, the request will take
     * the ownership of the connection and the preconnect operation will finish successfully (if
     * there's a connection error it will be handled by the request).
     * 
     * The operation finishes when the connection is done or an error occurred.
     */
    preconnect_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete a preconnect async operation started with soup_session_preconnect_async().
     */
    preconnect_finish(result: Gio.AsyncResult): boolean
    /**
     * Removes `feature'`s functionality from `session`.
     */
    remove_feature(feature: SessionFeature): void
    /**
     * Removes all features of type `feature_type` (or any subclass of
     * `feature_type)` from `session`. You can also remove standard features
     * from the session at construct time by using the
     * SoupSession:remove-feature-by-type property.
     */
    remove_feature_by_type(feature_type: GObject.Type): void
    /**
     * Synchronously sends `msg` and waits for the beginning of a response.
     * On success, a #GInputStream will be returned which you can use to
     * read the response body. ("Success" here means only that an HTTP
     * response was received and understood; it does not necessarily mean
     * that a 2xx class status code was received.)
     * 
     * If non-%NULL, `cancellable` can be used to cancel the request;
     * soup_session_send() will return a %G_IO_ERROR_CANCELLED error. Note
     * that with requests that have side effects (eg,
     * <literal>POST</literal>, <literal>PUT</literal>,
     * <literal>DELETE</literal>) it is possible that you might cancel the
     * request after the server acts on it, but before it returns a
     * response, leaving the remote resource in an unknown state.
     * 
     * If `msg` is requeued due to a redirect or authentication, the
     * initial (3xx/401/407) response body will be suppressed, and
     * soup_session_send() will only return once a final response has been
     * received.
     */
    send(msg: Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    /**
     * Synchronously sends `msg` and reads the response body.
     * On success, a #GBytes will be returned with the response body.
     * This function should only be used when the resource to be retrieved
     * is not too long and can be stored in memory.
     * 
     * See soup_session_send() for more details on the general semantics.
     */
    send_and_read(msg: Message, cancellable?: Gio.Cancellable | null): GLib.Bytes
    /**
     * Asynchronously sends `msg` and reads the response body.
     * When `callback` is called, then either `msg` has been sent, and its response
     * body read, or else an error has occurred.
     * This function should only be used when the resource to be retrieved
     * is not too long and can be stored in memory.
     * Call soup_session_send_and_read_finish() to get a #GBytes with the
     * response body.
     * 
     * See soup_session_send() for more details on the general semantics.
     */
    send_and_read_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the response to a soup_session_send_and_read_async() call and (if
     * successful), returns a #GBytes with the response body.
     */
    send_and_read_finish(result: Gio.AsyncResult): GLib.Bytes
    /**
     * Asynchronously sends `msg` and waits for the beginning of a
     * response. When `callback` is called, then either `msg` has been sent,
     * and its response headers received, or else an error has occurred.
     * Call soup_session_send_finish() to get a #GInputStream for reading
     * the response body.
     * 
     * See soup_session_send() for more details on the general semantics.
     */
    send_async(msg: Message, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the response to a soup_session_send_async() call and (if
     * successful), returns a #GInputStream that can be used to read the
     * response body.
     */
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    /**
     * Set the value to use for the "Accept-Language" header on #SoupMessage<!-- -->s sent from `session`.
     * If `accept_language` is %NULL then no "Accept-Language" will be included in requests. See #SoupSession:accept-language
     * for more information.
     */
    set_accept_language(accept_language: string): void
    /**
     * Set whether `session` will automatically set the "Accept-Language" header on requests using
     * a value generated from system languages based on g_get_language_names(). See #SoupSession:accept-language-auto
     * for more information.
     */
    set_accept_language_auto(accept_language_auto: boolean): void
    /**
     * Set a timeout in seconds for idle connection lifetime to be used by `session`
     * on new connections. See #SoupSession:idle-timeout for more information.
     */
    set_idle_timeout(timeout: number): void
    /**
     * Set a #GProxyResolver to be used by `session` on new connections. If `proxy_resolver`
     * is %NULL then no proxies will be used. See #SoupSession:proxy-resolver for more information.
     */
    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void
    /**
     * Set a timeout in seconds for socket I/O operations to be used by `session`
     * on new connections. See #SoupSession:timeout for more information.
     */
    set_timeout(timeout: number): void
    /**
     * Set a #GTlsDatabase to be used by `session` on new connections. If `tls_database`
     * is %NULL then certificate validation will always fail. See #SoupSession:tls-database
     * for more information.
     */
    set_tls_database(tls_database?: Gio.TlsDatabase | null): void
    /**
     * Set a #GTlsInteraction to be used by `session` on new connections. If `tls_interaction`
     * is %NULL then client certificate validation will always fail. See #SoupSession:tls-interaction
     * for more information.
     */
    set_tls_interaction(tls_interaction?: Gio.TlsInteraction | null): void
    /**
     * Set the value to use for the "User-Agent" header on #SoupMessage<!-- -->s sent from `session`.
     * If `user_agent` has trailing whitespace, `session` will append its own product token
     * (eg, "<literal>libsoup/3.0.0</literal>") to the end of the header for you.
     * If `user_agent` is %NULL then no "User-Agent" will be included in requests. See #SoupSession:user-agent
     * for more information.
     */
    set_user_agent(user_agent: string): void
    /**
     * Asynchronously creates a #SoupWebsocketConnection to communicate
     * with a remote server.
     * 
     * All necessary WebSocket-related headers will be added to `msg,` and
     * it will then be sent and asynchronously processed normally
     * (including handling of redirection and HTTP authentication).
     * 
     * If the server returns "101 Switching Protocols", then `msg'`s status
     * code and response headers will be updated, and then the WebSocket
     * handshake will be completed. On success,
     * soup_session_websocket_connect_finish() will return a new
     * #SoupWebsocketConnection. On failure it will return a #GError.
     * 
     * If the server returns a status other than "101 Switching
     * Protocols", then `msg` will contain the complete response headers
     * and body from the server's response, and
     * soup_session_websocket_connect_finish() will return
     * %SOUP_WEBSOCKET_ERROR_NOT_WEBSOCKET.
     */
    websocket_connect_async(msg: Message, origin: string | null, protocols: string[] | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the #SoupWebsocketConnection response to a
     * soup_session_websocket_connect_async() call and (if successful),
     * returns a #SoupWebsocketConnection that can be used to communicate
     * with the server.
     */
    websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.Session */
    vfunc_request_queued(msg: Message): void
    vfunc_request_unqueued(msg: Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.Session */
    /**
     * Emitted when a request is queued on `session`.
     * 
     * When sending a request, first #SoupSession::request_queued
     * is emitted, indicating that the session has become aware of
     * the request.
     * 
     * After a connection is available to send the request various
     * #SoupMessage signals are emitted as the message is
     * processed. If the message is requeued, it will emit
     * #SoupMessage::restarted, which will then be followed by other
     * #SoupMessage signals when the message is re-sent.
     * 
     * Eventually, the message will emit #SoupMessage::finished.
     * Normally, this signals the completion of message
     * processing. However, it is possible that the application
     * will requeue the message from the "finished" handler.
     * In that case the process will loop back.
     * 
     * Eventually, a message will reach "finished" and not be
     * requeued. At that point, the session will emit
     * #SoupSession::request_unqueued to indicate that it is done
     * with the message.
     * 
     * To sum up: #SoupSession::request_queued and
     * #SoupSession::request_unqueued are guaranteed to be emitted
     * exactly once, but #SoupMessage::finished (and all of the
     * other #SoupMessage signals) may be invoked multiple times
     * for a given message.
     */
    connect(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: Session, msg: Message) => void)): number
    emit(sigName: "request-queued", msg: Message): void
    /**
     * Emitted when a request is removed from `session'`s queue,
     * indicating that `session` is done with it. See
     * #SoupSession::request_queued for a detailed description of the
     * message lifecycle within a session.
     */
    connect(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: Session, msg: Message) => void)): number
    emit(sigName: "request-unqueued", msg: Message): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-language", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language-auto", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Session
    static $gtype: GObject.Type
}
interface WebsocketConnection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Soup-3.0.Soup.WebsocketConnection */
    /**
     * The type of connection (client/server).
     */
    connection_type?: WebsocketConnectionType
    /**
     * List of #SoupWebsocketExtension objects that are active in the connection.
     */
    extensions?: object
    /**
     * The underlying IO stream the WebSocket is communicating
     * over.
     * 
     * The input and output streams must be pollable streams.
     */
    io_stream?: Gio.IOStream
    /**
     * Interval in seconds on when to send a ping message which will
     * serve as a keepalive message. If set to 0 the keepalive message is
     * disabled.
     */
    keepalive_interval?: number
    /**
     * The maximum payload size for incoming packets the protocol expects
     * or 0 to not limit it.
     */
    max_incoming_payload_size?: number
    /**
     * The client's Origin.
     */
    origin?: string
    /**
     * The chosen protocol, or %NULL if a protocol was not agreed
     * upon.
     */
    protocol?: string
    /**
     * The URI of the WebSocket.
     * 
     * For servers this represents the address of the WebSocket,
     * and for clients it is the address connected to.
     */
    uri?: GLib.Uri
}
class WebsocketConnection {
    /* Properties of Soup-3.0.Soup.WebsocketConnection */
    /**
     * Interval in seconds on when to send a ping message which will
     * serve as a keepalive message. If set to 0 the keepalive message is
     * disabled.
     */
    keepalive_interval: number
    /**
     * The maximum payload size for incoming packets the protocol expects
     * or 0 to not limit it.
     */
    max_incoming_payload_size: number
    /**
     * The current state of the WebSocket.
     */
    readonly state: WebsocketState
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketConnection */
    /**
     * Close the connection in an orderly fashion.
     * 
     * Note that until the #SoupWebsocketConnection::closed signal fires, the connection
     * is not yet completely closed. The close message is not even sent until the
     * main loop runs.
     * 
     * The `code` and `data` are sent to the peer along with the close request.
     * If `code` is %SOUP_WEBSOCKET_CLOSE_NO_STATUS a close message with no body
     * (without code and data) is sent.
     * Note that the `data` must be UTF-8 valid.
     */
    close(code: number, data?: string | null): void
    /**
     * Get the close code received from the WebSocket peer.
     * 
     * This only becomes valid once the WebSocket is in the
     * %SOUP_WEBSOCKET_STATE_CLOSED state. The value will often be in the
     * #SoupWebsocketCloseCode enumeration, but may also be an application
     * defined close code.
     */
    get_close_code(): number
    /**
     * Get the close data received from the WebSocket peer.
     * 
     * This only becomes valid once the WebSocket is in the
     * %SOUP_WEBSOCKET_STATE_CLOSED state. The data may be freed once
     * the main loop is run, so copy it if you need to keep it around.
     */
    get_close_data(): string
    /**
     * Get the connection type (client/server) of the connection.
     */
    get_connection_type(): WebsocketConnectionType
    /**
     * Get the extensions chosen via negotiation with the peer.
     */
    get_extensions(): WebsocketExtension[]
    /**
     * Get the I/O stream the WebSocket is communicating over.
     */
    get_io_stream(): Gio.IOStream
    /**
     * Gets the keepalive interval in seconds or 0 if disabled.
     */
    get_keepalive_interval(): number
    /**
     * Gets the maximum payload size allowed for incoming packets.
     */
    get_max_incoming_payload_size(): number
    /**
     * Get the origin of the WebSocket.
     */
    get_origin(): string | null
    /**
     * Get the protocol chosen via negotiation with the peer.
     */
    get_protocol(): string | null
    /**
     * Get the current state of the WebSocket.
     */
    get_state(): WebsocketState
    /**
     * Get the URI of the WebSocket.
     * 
     * For servers this represents the address of the WebSocket, and
     * for clients it is the address connected to.
     */
    get_uri(): GLib.Uri
    /**
     * Send a binary message to the peer. If `length` is 0, `data` may be %NULL.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     */
    send_binary(data: Uint8Array | null): void
    /**
     * Send a message of the given `type` to the peer. Note that this method,
     * allows to send text messages containing %NULL characters.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     */
    send_message(type: WebsocketDataType, message: GLib.Bytes): void
    /**
     * Send a %NULL-terminated text (UTF-8) message to the peer. If you need
     * to send text messages containing %NULL characters use
     * soup_websocket_connection_send_message() instead.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     */
    send_text(text: string): void
    /**
     * Sets the interval in seconds on when to send a ping message which will serve
     * as a keepalive message. If set to 0 the keepalive message is disabled.
     */
    set_keepalive_interval(interval: number): void
    /**
     * Sets the maximum payload size allowed for incoming packets. It
     * does not limit the outgoing packet size.
     */
    set_max_incoming_payload_size(max_incoming_payload_size: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-3.0.Soup.WebsocketConnection */
    /**
     * Emitted when the connection has completely closed, either
     * due to an orderly close from the peer, one initiated via
     * soup_websocket_connection_close() or a fatal error
     * condition that caused a close.
     * 
     * This signal will be emitted once.
     */
    connect(sigName: "closed", callback: (($obj: WebsocketConnection) => void)): number
    connect_after(sigName: "closed", callback: (($obj: WebsocketConnection) => void)): number
    emit(sigName: "closed"): void
    /**
     * This signal will be emitted during an orderly close.
     */
    connect(sigName: "closing", callback: (($obj: WebsocketConnection) => void)): number
    connect_after(sigName: "closing", callback: (($obj: WebsocketConnection) => void)): number
    emit(sigName: "closing"): void
    /**
     * Emitted when an error occurred on the WebSocket. This may
     * be fired multiple times. Fatal errors will be followed by
     * the #SoupWebsocketConnection::closed signal being emitted.
     */
    connect(sigName: "error", callback: (($obj: WebsocketConnection, error: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: WebsocketConnection, error: GLib.Error) => void)): number
    emit(sigName: "error", error: GLib.Error): void
    /**
     * Emitted when we receive a message from the peer.
     * 
     * As a convenience, the `message` data will always be
     * NUL-terminated, but the NUL byte will not be included in
     * the length count.
     */
    connect(sigName: "message", callback: (($obj: WebsocketConnection, type: number, message: GLib.Bytes) => void)): number
    connect_after(sigName: "message", callback: (($obj: WebsocketConnection, type: number, message: GLib.Bytes) => void)): number
    emit(sigName: "message", type: number, message: GLib.Bytes): void
    /**
     * Emitted when we receive a Pong frame (solicited or
     * unsolicited) from the peer.
     * 
     * As a convenience, the `message` data will always be
     * NUL-terminated, but the NUL byte will not be included in
     * the length count.
     */
    connect(sigName: "pong", callback: (($obj: WebsocketConnection, message: GLib.Bytes) => void)): number
    connect_after(sigName: "pong", callback: (($obj: WebsocketConnection, message: GLib.Bytes) => void)): number
    emit(sigName: "pong", message: GLib.Bytes): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::keepalive-interval", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive-interval", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-incoming-payload-size", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-incoming-payload-size", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebsocketConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsocketConnection_ConstructProps)
    _init (config?: WebsocketConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Gio.IOStream, uri: GLib.Uri, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection
    static $gtype: GObject.Type
}
interface WebsocketExtension_ConstructProps extends GObject.Object_ConstructProps {
}
class WebsocketExtension {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketExtension */
    /**
     * Configures `extension` with the given `params`
     */
    configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    /**
     * Get the parameters strings to be included in the request header. If the extension
     * doesn't include any parameter in the request, this function returns %NULL.
     */
    get_request_params(): string | null
    /**
     * Get the parameters strings to be included in the response header. If the extension
     * doesn't include any parameter in the response, this function returns %NULL.
     */
    get_response_params(): string | null
    /**
     * Process a message after it's received. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will reset them in `header`.
     */
    process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /**
     * Process a message before it's sent. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will change them in `header`.
     */
    process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.WebsocketExtension */
    /**
     * Configures `extension` with the given `params`
     */
    vfunc_configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    /**
     * Get the parameters strings to be included in the request header. If the extension
     * doesn't include any parameter in the request, this function returns %NULL.
     */
    vfunc_get_request_params(): string | null
    /**
     * Get the parameters strings to be included in the response header. If the extension
     * doesn't include any parameter in the response, this function returns %NULL.
     */
    vfunc_get_response_params(): string | null
    /**
     * Process a message after it's received. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will reset them in `header`.
     */
    vfunc_process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /**
     * Process a message before it's sent. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will change them in `header`.
     */
    vfunc_process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: WebsocketExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsocketExtension_ConstructProps)
    _init (config?: WebsocketExtension_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebsocketExtensionDeflate_ConstructProps extends WebsocketExtension_ConstructProps {
}
class WebsocketExtensionDeflate {
    /* Fields of Soup-3.0.Soup.WebsocketExtension */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Soup-3.0.Soup.WebsocketExtension */
    /**
     * Configures `extension` with the given `params`
     */
    configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    /**
     * Get the parameters strings to be included in the request header. If the extension
     * doesn't include any parameter in the request, this function returns %NULL.
     */
    get_request_params(): string | null
    /**
     * Get the parameters strings to be included in the response header. If the extension
     * doesn't include any parameter in the response, this function returns %NULL.
     */
    get_response_params(): string | null
    /**
     * Process a message after it's received. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will reset them in `header`.
     */
    process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /**
     * Process a message before it's sent. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will change them in `header`.
     */
    process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Soup-3.0.Soup.WebsocketExtension */
    /**
     * Configures `extension` with the given `params`
     */
    vfunc_configure(connection_type: WebsocketConnectionType, params?: GLib.HashTable | null): boolean
    /**
     * Get the parameters strings to be included in the request header. If the extension
     * doesn't include any parameter in the request, this function returns %NULL.
     */
    vfunc_get_request_params(): string | null
    /**
     * Get the parameters strings to be included in the response header. If the extension
     * doesn't include any parameter in the response, this function returns %NULL.
     */
    vfunc_get_response_params(): string | null
    /**
     * Process a message after it's received. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will reset them in `header`.
     */
    vfunc_process_incoming_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /**
     * Process a message before it's sent. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will change them in `header`.
     */
    vfunc_process_outgoing_message(header: number, payload: GLib.Bytes): [ /* returnType */ GLib.Bytes, /* header */ number ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: WebsocketExtensionDeflate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtensionDeflate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsocketExtensionDeflate_ConstructProps)
    _init (config?: WebsocketExtensionDeflate_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebsocketExtensionManager_ConstructProps extends GObject.Object_ConstructProps {
}
class WebsocketExtensionManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: WebsocketExtensionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsocketExtensionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsocketExtensionManager_ConstructProps)
    _init (config?: WebsocketExtensionManager_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AuthClass {
    /* Fields of Soup-3.0.Soup.AuthClass */
    readonly parent_class: GObject.ObjectClass
    readonly scheme_name: string
    readonly strength: number
    readonly update: (auth: Auth, msg: Message, auth_header: GLib.HashTable) => boolean
    readonly get_protection_space: (auth: Auth, source_uri: GLib.Uri) => string[]
    readonly authenticate: (auth: Auth, username: string, password: string) => void
    readonly is_authenticated: (auth: Auth) => boolean
    readonly get_authorization: (auth: Auth, msg: Message) => string
    readonly is_ready: (auth: Auth, msg: Message) => boolean
    readonly can_authenticate: (auth: Auth) => boolean
    readonly padding: object[]
    static name: string
}
abstract class AuthDomainBasicClass {
    /* Fields of Soup-3.0.Soup.AuthDomainBasicClass */
    readonly parent_class: AuthDomainClass
    static name: string
}
abstract class AuthDomainClass {
    /* Fields of Soup-3.0.Soup.AuthDomainClass */
    readonly parent_class: GObject.ObjectClass
    readonly accepts: (domain: AuthDomain, msg: ServerMessage, header: string) => string
    readonly challenge: (domain: AuthDomain, msg: ServerMessage) => string
    readonly check_password: (domain: AuthDomain, msg: ServerMessage, username: string, password: string) => boolean
    readonly padding: object[]
    static name: string
}
abstract class AuthDomainDigestClass {
    /* Fields of Soup-3.0.Soup.AuthDomainDigestClass */
    readonly parent_class: AuthDomainClass
    static name: string
}
abstract class AuthManagerClass {
    /* Fields of Soup-3.0.Soup.AuthManagerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class CacheClass {
    /* Fields of Soup-3.0.Soup.CacheClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_cacheability: (cache: Cache, msg: Message) => Cacheability
    readonly padding: object[]
    static name: string
}
abstract class ContentDecoderClass {
    /* Fields of Soup-3.0.Soup.ContentDecoderClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ContentSnifferClass {
    /* Fields of Soup-3.0.Soup.ContentSnifferClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class Cookie {
    /* Methods of Soup-3.0.Soup.Cookie */
    /**
     * Tests if `cookie` should be sent to `uri`.
     * 
     * (At the moment, this does not check that `cookie'`s domain matches
     * `uri,` because it assumes that the caller has already done that.
     * But don't rely on that; it may change in the future.)
     */
    applies_to_uri(uri: GLib.Uri): boolean
    /**
     * Copies `cookie`.
     */
    copy(): Cookie
    /**
     * Checks if the `cookie'`s domain and `host` match in the sense that
     * `cookie` should be sent when making a request to `host,` or that
     * `cookie` should be accepted when receiving a response from `host`.
     */
    domain_matches(host: string): boolean
    /**
     * Tests if `cookie1` and `cookie2` are equal.
     * 
     * Note that currently, this does not check that the cookie domains
     * match. This may change in the future.
     */
    equal(cookie2: Cookie): boolean
    /**
     * Frees `cookie`
     */
    free(): void
    /**
     * Gets `cookie'`s domain
     */
    get_domain(): string
    /**
     * Gets `cookie'`s expiration time.
     */
    get_expires(): GLib.DateTime | null
    /**
     * Gets `cookie'`s HttpOnly attribute
     */
    get_http_only(): boolean
    /**
     * Gets `cookie'`s name
     */
    get_name(): string
    /**
     * Gets `cookie'`s path
     */
    get_path(): string
    /**
     * Returns the same-site policy for this cookie.
     */
    get_same_site_policy(): SameSitePolicy
    /**
     * Gets `cookie'`s secure attribute
     */
    get_secure(): boolean
    /**
     * Gets `cookie'`s value
     */
    get_value(): string
    /**
     * Sets `cookie'`s domain to `domain`
     */
    set_domain(domain: string): void
    /**
     * Sets `cookie'`s expiration time to `expires`. If `expires` is %NULL,
     * `cookie` will be a session cookie and will expire at the end of the
     * client's session.
     * 
     * (This sets the same property as soup_cookie_set_max_age().)
     */
    set_expires(expires: GLib.DateTime): void
    /**
     * Sets `cookie'`s HttpOnly attribute to `http_only`. If %TRUE, `cookie`
     * will be marked as "http only", meaning it should not be exposed to
     * web page scripts or other untrusted code.
     */
    set_http_only(http_only: boolean): void
    /**
     * Sets `cookie'`s max age to `max_age`. If `max_age` is -1, the cookie
     * is a session cookie, and will expire at the end of the client's
     * session. Otherwise, it is the number of seconds until the cookie
     * expires. You can use the constants %SOUP_COOKIE_MAX_AGE_ONE_HOUR,
     * %SOUP_COOKIE_MAX_AGE_ONE_DAY, %SOUP_COOKIE_MAX_AGE_ONE_WEEK and
     * %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or multiples thereof) to calculate
     * this value. (A value of 0 indicates that the cookie should be
     * considered already-expired.)
     * 
     * (This sets the same property as soup_cookie_set_expires().)
     */
    set_max_age(max_age: number): void
    /**
     * Sets `cookie'`s name to `name`
     */
    set_name(name: string): void
    /**
     * Sets `cookie'`s path to `path`
     */
    set_path(path: string): void
    /**
     * When used in conjunction with soup_cookie_jar_get_cookie_list_with_same_site_info() this
     * sets the policy of when this cookie should be exposed.
     */
    set_same_site_policy(policy: SameSitePolicy): void
    /**
     * Sets `cookie'`s secure attribute to `secure`. If %TRUE, `cookie` will
     * only be transmitted from the client to the server over secure
     * (https) connections.
     */
    set_secure(secure: boolean): void
    /**
     * Sets `cookie'`s value to `value`
     */
    set_value(value: string): void
    /**
     * Serializes `cookie` in the format used by the Cookie header (ie, for
     * returning a cookie from a #SoupSession to a server).
     */
    to_cookie_header(): string
    /**
     * Serializes `cookie` in the format used by the Set-Cookie header
     * (ie, for sending a cookie from a #SoupServer to a client).
     */
    to_set_cookie_header(): string
    static name: string
    static new(name: string, value: string, domain: string, path: string, max_age: number): Cookie
    constructor(name: string, value: string, domain: string, path: string, max_age: number)
    /* Static methods and pseudo-constructors */
    static new(name: string, value: string, domain: string, path: string, max_age: number): Cookie
    /**
     * Parses `header` and returns a #SoupCookie. (If `header` contains
     * multiple cookies, only the first one will be parsed.)
     * 
     * If `header` does not have "path" or "domain" attributes, they will
     * be defaulted from `origin`. If `origin` is %NULL, path will default
     * to "/", but domain will be left as %NULL. Note that this is not a
     * valid state for a #SoupCookie, and you will need to fill in some
     * appropriate string for the domain if you want to actually make use
     * of the cookie.
     */
    static parse(header: string, origin?: GLib.Uri | null): Cookie | null
}
abstract class CookieJarClass {
    /* Fields of Soup-3.0.Soup.CookieJarClass */
    readonly parent_class: GObject.ObjectClass
    readonly save: (jar: CookieJar) => void
    readonly is_persistent: (jar: CookieJar) => boolean
    readonly changed: (jar: CookieJar, old_cookie: Cookie, new_cookie: Cookie) => void
    readonly padding: object[]
    static name: string
}
abstract class CookieJarDBClass {
    /* Fields of Soup-3.0.Soup.CookieJarDBClass */
    readonly parent_class: CookieJarClass
    static name: string
}
abstract class CookieJarTextClass {
    /* Fields of Soup-3.0.Soup.CookieJarTextClass */
    readonly parent_class: CookieJarClass
    static name: string
}
abstract class HSTSEnforcerClass {
    /* Fields of Soup-3.0.Soup.HSTSEnforcerClass */
    /**
     * The parent class.
     */
    readonly parent_class: GObject.ObjectClass
    readonly is_persistent: (hsts_enforcer: HSTSEnforcer) => boolean
    readonly has_valid_policy: (hsts_enforcer: HSTSEnforcer, domain: string) => boolean
    readonly changed: (enforcer: HSTSEnforcer, old_policy: HSTSPolicy, new_policy: HSTSPolicy) => void
    static name: string
}
abstract class HSTSEnforcerDBClass {
    /* Fields of Soup-3.0.Soup.HSTSEnforcerDBClass */
    readonly parent_class: HSTSEnforcerClass
    static name: string
}
class HSTSPolicy {
    /* Methods of Soup-3.0.Soup.HSTSPolicy */
    /**
     * Copies `policy`.
     */
    copy(): HSTSPolicy
    /**
     * Tests if `policy1` and `policy2` are equal.
     */
    equal(policy2: HSTSPolicy): boolean
    /**
     * Frees `policy`.
     */
    free(): void
    /**
     * Gets `policy'`s domain.
     */
    get_domain(): string
    /**
     * Returns the expiration date for `policy`.
     */
    get_expires(): GLib.DateTime
    /**
     * Returns the max age for `policy`.
     */
    get_max_age(): number
    /**
     * Gets whether `policy` include its subdomains.
     */
    includes_subdomains(): boolean
    /**
     * Gets whether `policy` is expired. Permanent policies never
     * expire.
     */
    is_expired(): boolean
    /**
     * Gets whether `policy` is a non-permanent, non-expirable session policy.
     * see soup_hsts_policy_new_session_policy() for details.
     */
    is_session_policy(): boolean
    static name: string
    static new(domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy
    constructor(domain: string, max_age: number, include_subdomains: boolean)
    /* Static methods and pseudo-constructors */
    static new(domain: string, max_age: number, include_subdomains: boolean): HSTSPolicy
    static new_from_response(msg: Message): HSTSPolicy
    static new_full(domain: string, max_age: number, expires: GLib.DateTime, include_subdomains: boolean): HSTSPolicy
    static new_session_policy(domain: string, include_subdomains: boolean): HSTSPolicy
}
abstract class LoggerClass {
    /* Fields of Soup-3.0.Soup.LoggerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MessageBody {
    /* Fields of Soup-3.0.Soup.MessageBody */
    /**
     * the data
     */
    readonly data: Uint8Array
    /**
     * length of `data`
     */
    readonly length: number
    /* Methods of Soup-3.0.Soup.MessageBody */
    /**
     * Appends the data from `buffer` to `body`.
     */
    append_bytes(buffer: GLib.Bytes): void
    /**
     * Appends `length` bytes from `data` to `body`.
     * 
     * This function is exactly equivalent to soup_message_body_append()
     * with %SOUP_MEMORY_TAKE as second argument; it exists mainly for
     * convenience and simplifying language bindings.
     */
    append(data: Uint8Array): void
    /**
     * Tags `body` as being complete; Call this when using chunked encoding
     * after you have appended the last chunk.
     */
    complete(): void
    /**
     * Fills in `body'`s data field with a buffer containing all of the
     * data in `body` (plus an additional '\0' byte not counted by `body'`s
     * length field).
     */
    flatten(): GLib.Bytes
    /**
     * Gets the accumulate flag on `body;` see
     * soup_message_body_set_accumulate() for details.
     */
    get_accumulate(): boolean
    /**
     * Gets a #GBytes containing data from `body` starting at `offset`.
     * The size of the returned chunk is unspecified. You can iterate
     * through the entire body by first calling
     * soup_message_body_get_chunk() with an offset of 0, and then on each
     * successive call, increment the offset by the length of the
     * previously-returned chunk.
     * 
     * If `offset` is greater than or equal to the total length of `body,`
     * then the return value depends on whether or not
     * soup_message_body_complete() has been called or not; if it has,
     * then soup_message_body_get_chunk() will return a 0-length chunk
     * (indicating the end of `body)`. If it has not, then
     * soup_message_body_get_chunk() will return %NULL (indicating that
     * `body` may still potentially have more data, but that data is not
     * currently available).
     */
    get_chunk(offset: number): GLib.Bytes | null
    /**
     * Handles the #SoupMessageBody part of receiving a chunk of data from
     * the network. Normally this means appending `chunk` to `body,` exactly
     * as with soup_message_body_append_bytes(), but if you have set
     * `body'`s accumulate flag to %FALSE, then that will not happen.
     * 
     * This is a low-level method which you should not normally need to
     * use.
     */
    got_chunk(chunk: GLib.Bytes): void
    /**
     * Atomically increments the reference count of `body` by one.
     */
    ref(): MessageBody
    /**
     * Sets or clears the accumulate flag on `body`. (The default value is
     * %TRUE.) If set to %FALSE, `body'`s data field will not be filled in
     * after the body is fully sent/received, and the chunks that make up
     * `body` may be discarded when they are no longer needed.
     * 
     * If you set the flag to %FALSE on the #SoupMessage request_body of a
     * client-side message, it will block the accumulation of chunks into
     * `body'`s data field, but it will not normally cause the chunks to
     * be discarded after being written like in the server-side
     * #SoupMessage response_body case, because the request body needs to
     * be kept around in case the request needs to be sent a second time
     * due to redirection or authentication.
     */
    set_accumulate(accumulate: boolean): void
    /**
     * Deletes all of the data in `body`.
     */
    truncate(): void
    /**
     * Atomically decrements the reference count of `body` by one.
     * When the reference count reaches zero, the resources allocated by
     * `body` are freed
     */
    unref(): void
    /**
     * Handles the #SoupMessageBody part of writing a chunk of data to the
     * network. Normally this is a no-op, but if you have set `body'`s
     * accumulate flag to %FALSE, then this will cause `chunk` to be
     * discarded to free up memory.
     * 
     * This is a low-level method which you should not need to use, and
     * there are further restrictions on its proper use which are not
     * documented here.
     */
    wrote_chunk(chunk: GLib.Bytes): void
    static name: string
    static new(): MessageBody
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageBody
}
abstract class MessageClass {
    /* Fields of Soup-3.0.Soup.MessageClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MessageHeaders {
    /* Methods of Soup-3.0.Soup.MessageHeaders */
    /**
     * Appends a new header with name `name` and value `value` to `hdrs`. (If
     * there is an existing header with name `name,` then this creates a
     * second one, which is only allowed for list-valued headers; see also
     * soup_message_headers_replace().)
     * 
     * The caller is expected to make sure that `name` and `value` are
     * syntactically correct.
     */
    append(name: string, value: string): void
    /**
     * Removes all the headers listed in the Connection header.
     */
    clean_connection_headers(): void
    /**
     * Clears `hdrs`.
     */
    clear(): void
    /**
     * Calls `func` once for each header value in `hdrs`.
     * 
     * Beware that unlike soup_message_headers_get_list(), this processes the
     * headers in exactly the way they were added, rather than
     * concatenating multiple same-named headers into a single value.
     * (This is intentional; it ensures that if you call
     * soup_message_headers_append() multiple times with the same name,
     * then the I/O code will output multiple copies of the header when
     * sending the message to the remote implementation, which may be
     * required for interoperability in some cases.)
     * 
     * You may not modify the headers from `func`.
     */
    foreach(func: MessageHeadersForeachFunc): void
    /**
     * Frees the array of ranges returned from soup_message_headers_get_ranges().
     */
    free_ranges(ranges: Range): void
    /**
     * Looks up the "Content-Disposition" header in `hdrs,` parses it, and
     * returns its value in *`disposition` and *`params`. `params` can be
     * %NULL if you are only interested in the disposition-type.
     * 
     * In HTTP, the most common use of this header is to set a
     * disposition-type of "attachment", to suggest to the browser that a
     * response should be saved to disk rather than displayed in the
     * browser. If `params` contains a "filename" parameter, this is a
     * suggestion of a filename to use. (If the parameter value in the
     * header contains an absolute or relative path, libsoup will truncate
     * it down to just the final path component, so you do not need to
     * test this yourself.)
     * 
     * Content-Disposition is also used in "multipart/form-data", however
     * this is handled automatically by #SoupMultipart and the associated
     * form methods.
     */
    get_content_disposition(): [ /* returnType */ boolean, /* disposition */ string, /* params */ GLib.HashTable ]
    /**
     * Gets the message body length that `hdrs` declare. This will only
     * be non-0 if soup_message_headers_get_encoding() returns
     * %SOUP_ENCODING_CONTENT_LENGTH.
     */
    get_content_length(): number
    /**
     * Parses `hdrs'`s Content-Range header and returns it in `start,`
     * `end,` and `total_length`. If the total length field in the header
     * was specified as "*", then `total_length` will be set to -1.
     */
    get_content_range(): [ /* returnType */ boolean, /* start */ number, /* end */ number, /* total_length */ number | null ]
    /**
     * Looks up the "Content-Type" header in `hdrs,` parses it, and returns
     * its value in *`content_type` and *`params`. `params` can be %NULL if you
     * are only interested in the content type itself.
     */
    get_content_type(): [ /* returnType */ string | null, /* params */ GLib.HashTable | null ]
    /**
     * Gets the message body encoding that `hdrs` declare. This may not
     * always correspond to the encoding used on the wire; eg, a HEAD
     * response may declare a Content-Length or Transfer-Encoding, but
     * it will never actually include a body.
     */
    get_encoding(): Encoding
    /**
     * Gets the expectations declared by `hdrs'`s "Expect" header.
     * Currently this will either be %SOUP_EXPECTATION_CONTINUE or
     * %SOUP_EXPECTATION_UNRECOGNIZED.
     */
    get_expectations(): Expectation
    /**
     * Gets the type of headers.
     */
    get_headers_type(): MessageHeadersType
    /**
     * Gets the value of header `name` in `hdrs`. Use this for headers whose
     * values are comma-delimited lists, and which are therefore allowed
     * to appear multiple times in the headers. For non-list-valued
     * headers, use soup_message_headers_get_one().
     * 
     * If `name` appears multiple times in `hdrs,`
     * soup_message_headers_get_list() will concatenate all of the values
     * together, separated by commas. This is sometimes awkward to parse
     * (eg, WWW-Authenticate, Set-Cookie), but you have to be able to deal
     * with it anyway, because the HTTP spec explicitly states that this
     * transformation is allowed, and so an upstream proxy could do the
     * same thing.
     */
    get_list(name: string): string | null
    /**
     * Gets the value of header `name` in `hdrs`. Use this for headers whose
     * values are <emphasis>not</emphasis> comma-delimited lists, and
     * which therefore can only appear at most once in the headers. For
     * list-valued headers, use soup_message_headers_get_list().
     * 
     * If `hdrs` does erroneously contain multiple copies of the header, it
     * is not defined which one will be returned. (Ideally, it will return
     * whichever one makes libsoup most compatible with other HTTP
     * implementations.)
     */
    get_one(name: string): string | null
    /**
     * Parses `hdrs'`s Range header and returns an array of the requested
     * byte ranges. The returned array must be freed with
     * soup_message_headers_free_ranges().
     * 
     * If `total_length` is non-0, its value will be used to adjust the
     * returned ranges to have explicit start and end values, and the
     * returned ranges will be sorted and non-overlapping. If
     * `total_length` is 0, then some ranges may have an end value of -1,
     * as described under #SoupRange, and some of the ranges may be
     * redundant.
     * 
     * Beware that even if given a `total_length,` this function does not
     * check that the ranges are satisfiable.
     * 
     * <note><para>
     * #SoupServer has built-in handling for range requests. If your
     * server handler returns a %SOUP_STATUS_OK response containing the
     * complete response body (rather than pausing the message and
     * returning some of the response body later), and there is a Range
     * header in the request, then libsoup will automatically convert the
     * response to a %SOUP_STATUS_PARTIAL_CONTENT response containing only
     * the range(s) requested by the client.
     * 
     * The only time you need to process the Range header yourself is if
     * either you need to stream the response body rather than returning
     * it all at once, or you do not already have the complete response
     * body available, and only want to generate the parts that were
     * actually requested by the client.
     * </para></note>
     */
    get_ranges(total_length: number): [ /* returnType */ boolean, /* ranges */ Range[] ]
    /**
     * Checks whether the list-valued header `name` is present in `hdrs,`
     * and contains a case-insensitive match for `token`.
     * 
     * (If `name` is present in `hdrs,` then this is equivalent to calling
     * soup_header_contains() on its value.)
     */
    header_contains(name: string, token: string): boolean
    /**
     * Checks whether the header `name` is present in `hdrs` and is
     * (case-insensitively) equal to `value`.
     */
    header_equals(name: string, value: string): boolean
    /**
     * Atomically increments the reference count of `hdrs` by one.
     */
    ref(): MessageHeaders
    /**
     * Removes `name` from `hdrs`. If there are multiple values for `name,`
     * they are all removed.
     */
    remove(name: string): void
    /**
     * Replaces the value of the header `name` in `hdrs` with `value`. (See
     * also soup_message_headers_append().)
     * 
     * The caller is expected to make sure that `name` and `value` are
     * syntactically correct.
     */
    replace(name: string, value: string): void
    /**
     * Sets the "Content-Disposition" header in `hdrs` to `disposition,`
     * optionally with additional parameters specified in `params`.
     * 
     * See soup_message_headers_get_content_disposition() for a discussion
     * of how Content-Disposition is used in HTTP.
     */
    set_content_disposition(disposition: string, params?: GLib.HashTable | null): void
    /**
     * Sets the message body length that `hdrs` will declare, and sets
     * `hdrs'`s encoding to %SOUP_ENCODING_CONTENT_LENGTH.
     * 
     * You do not normally need to call this; if `hdrs` is set to use
     * Content-Length encoding, libsoup will automatically set its
     * Content-Length header for you immediately before sending the
     * headers. One situation in which this method is useful is when
     * generating the response to a HEAD request; Calling
     * soup_message_headers_set_content_length() allows you to put the
     * correct content length into the response without needing to waste
     * memory by filling in a response body which won't actually be sent.
     */
    set_content_length(content_length: number): void
    /**
     * Sets `hdrs'`s Content-Range header according to the given values.
     * (Note that `total_length` is the total length of the entire resource
     * that this is a range of, not simply `end` - `start` + 1.)
     * 
     * <note><para>
     * #SoupServer has built-in handling for range requests, and you do
     * not normally need to call this function youself. See
     * soup_message_headers_get_ranges() for more details.
     * </para></note>
     */
    set_content_range(start: number, end: number, total_length: number): void
    /**
     * Sets the "Content-Type" header in `hdrs` to `content_type,`
     * optionally with additional parameters specified in `params`.
     */
    set_content_type(content_type: string, params?: GLib.HashTable | null): void
    /**
     * Sets the message body encoding that `hdrs` will declare. In particular,
     * you should use this if you are going to send a request or response in
     * chunked encoding.
     */
    set_encoding(encoding: Encoding): void
    /**
     * Sets `hdrs'`s "Expect" header according to `expectations`.
     * 
     * Currently %SOUP_EXPECTATION_CONTINUE is the only known expectation
     * value. You should set this value on a request if you are sending a
     * large message body (eg, via POST or PUT), and want to give the
     * server a chance to reject the request after seeing just the headers
     * (eg, because it will require authentication before allowing you to
     * post, or because you're POSTing to a URL that doesn't exist). This
     * saves you from having to transmit the large request body when the
     * server is just going to ignore it anyway.
     */
    set_expectations(expectations: Expectation): void
    /**
     * Sets `hdrs'`s Range header to request the indicated range.
     * `start` and `end` are interpreted as in a #SoupRange.
     * 
     * If you need to request multiple ranges, use
     * soup_message_headers_set_ranges().
     */
    set_range(start: number, end: number): void
    /**
     * Sets `hdrs'`s Range header to request the indicated ranges. (If you
     * only want to request a single range, you can use
     * soup_message_headers_set_range().)
     */
    set_ranges(ranges: Range, length: number): void
    /**
     * Atomically decrements the reference count of `hdrs` by one.
     * When the reference count reaches zero, the resources allocated by
     * `hdrs` are freed
     */
    unref(): void
    static name: string
    static new(type: MessageHeadersType): MessageHeaders
    constructor(type: MessageHeadersType)
    /* Static methods and pseudo-constructors */
    static new(type: MessageHeadersType): MessageHeaders
}
class MessageHeadersIter {
    /* Methods of Soup-3.0.Soup.MessageHeadersIter */
    /**
     * Yields the next name/value pair in the %SoupMessageHeaders being
     * iterated by `iter`. If `iter` has already yielded the last header,
     * then soup_message_headers_iter_next() will return %FALSE and `name`
     * and `value` will be unchanged.
     */
    next(): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Initializes `iter` for iterating `hdrs`.
     */
    static init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
}
class MessageMetrics {
    /* Methods of Soup-3.0.Soup.MessageMetrics */
    /**
     * Copies `metrics`.
     */
    copy(): MessageMetrics
    /**
     * Frees `metrics`
     */
    free(): void
    /**
     * Get the time immediately after the #SoupMessage completed the
     * connection to the server. This includes the time for the proxy
     * negotiation and TLS handshake. It will be 0 if no network connection
     * was required to fetch the resource (a persistent connection was used
     * or resource was loaded from the local disk cache).
     */
    get_connect_end(): number
    /**
     * Get the time immediately before the #SoupMessage started to
     * establish the connection to the server. It will be 0 if no
     * network connection was required to fetch the resource (a persistent
     * connection was used or resource was loaded from the local disk cache).
     */
    get_connect_start(): number
    /**
     * Get the time immediately after the #SoupMessage completed the
     * domain lookup name for the resource. It will be 0 if no domain
     * lookup was required to fetch the resource (a persistent connection
     * was used or resource was loaded from the local disk cache).
     */
    get_dns_end(): number
    /**
     * Get the time immediately before the #SoupMessage started the
     * domain lookup name for the resource. It will be 0 if no domain
     * lookup was required to fetch the resource (a persistent connection
     * was used or resource was loaded from the local disk cache).
     */
    get_dns_start(): number
    /**
     * Get the time immediately before the #SoupMessage started to
     * fetch a resource either from a remote server or local disk cache.
     */
    get_fetch_start(): number
    /**
     * Get the number of bytes sent to the network for the request body. This is
     * the size of the body sent, after encodings are applied, so it might be
     * greater than the value returned by soup_message_metrics_get_request_body_size().
     * This value is available right before #SoupMessage::wrote-body signal is
     * emitted, but you might get an intermediate value if called before.
     */
    get_request_body_bytes_sent(): number
    /**
     * Get the request body size in bytes. This is the size of the original body
     * given to the request before any encoding is applied. This value is available
     * right before #SoupMessage::wrote-body signal is emitted, but you might get
     * an intermediate value if called before.
     */
    get_request_body_size(): number
    /**
     * Get the number of bytes sent to the network for the request headers.
     * This value is available right before #SoupMessage::wrote-headers signal
     * is emitted, but you might get an intermediate value if called before.
     */
    get_request_header_bytes_sent(): number
    /**
     * Get the time immediately before the #SoupMessage started the
     * request of the resource from the server or the local disk cache.
     */
    get_request_start(): number
    /**
     * Get the number of bytes received from the network for the response body. This value is
     * available right before #SoupMessage::got-body signal is emitted, but you might get
     * an intermediate value if called before.
     * For resources loaded from the disk cache this value is always 0.
     */
    get_response_body_bytes_received(): number
    /**
     * Get the response body size in bytes. This is the size of the body as given to the
     * user after all encodings are applied, so it might be greater than the value
     * returned by soup_message_metrics_get_response_body_bytes_received(). This value is
     * available right before #SoupMessage::got-body signal is emitted, but you might get
     * an intermediate value if called before.
     */
    get_response_body_size(): number
    /**
     * Get the time immediately after the #SoupMessage received the last
     * bytes of the response from the server or the local disk cache.
     * In case of load failure, this returns the time immediately before the
     * fetch is aborted.
     */
    get_response_end(): number
    /**
     * Get the number of bytes received from the network for the response headers.
     * This value is available right before #SoupMessage::got-headers signal
     * is emitted, but you might get an intermediate value if called before.
     * For resources loaded from the disk cache this value is always 0.
     */
    get_response_header_bytes_received(): number
    /**
     * Get the time immediately after the #SoupMessage received the first
     * bytes of the response from the server or the local disk cache.
     */
    get_response_start(): number
    /**
     * Get the time immediately before the #SoupMessage started the
     * TLS handshake. It will be 0 if no TLS handshake was required
     * to fetch the resource (connection was not secure, a persistent
     * connection was used or resource was loaded from the local disk cache).
     */
    get_tls_start(): number
    static name: string
}
class Multipart {
    /* Methods of Soup-3.0.Soup.Multipart */
    /**
     * Adds a new MIME part containing `body` to `multipart,` using
     * "Content-Disposition: form-data", as per the HTML forms
     * specification.
     */
    append_form_file(control_name: string, filename: string, content_type: string, body: GLib.Bytes): void
    /**
     * Adds a new MIME part containing `data` to `multipart,` using
     * "Content-Disposition: form-data", as per the HTML forms
     * specification.
     */
    append_form_string(control_name: string, data: string): void
    /**
     * Adds a new MIME part to `multipart` with the given headers and body.
     * (The multipart will make its own copies of `headers` and `body,` so
     * you should free your copies if you are not using them for anything
     * else.)
     */
    append_part(headers: MessageHeaders, body: GLib.Bytes): void
    /**
     * Frees `multipart`
     */
    free(): void
    /**
     * Gets the number of body parts in `multipart`
     */
    get_length(): number
    /**
     * Gets the indicated body part from `multipart`.
     */
    get_part(part: number): [ /* returnType */ boolean, /* headers */ MessageHeaders, /* body */ GLib.Bytes ]
    /**
     * Serializes `multipart` to `dest_headers` and `dest_body`.
     */
    to_message(dest_headers: MessageHeaders): /* dest_body */ GLib.Bytes
    static name: string
    static new(mime_type: string): Multipart
    constructor(mime_type: string)
    /* Static methods and pseudo-constructors */
    static new(mime_type: string): Multipart
    static new_from_message(headers: MessageHeaders, body: GLib.Bytes): Multipart
}
abstract class MultipartInputStreamClass {
    /* Fields of Soup-3.0.Soup.MultipartInputStreamClass */
    readonly parent_class: Gio.FilterInputStreamClass
    static name: string
}
class Range {
    /* Fields of Soup-3.0.Soup.Range */
    /**
     * the start of the range
     */
    readonly start: number
    /**
     * the end of the range
     */
    readonly end: number
    static name: string
}
abstract class ServerClass {
    /* Fields of Soup-3.0.Soup.ServerClass */
    readonly parent_class: GObject.ObjectClass
    readonly request_started: (server: Server, msg: ServerMessage) => void
    readonly request_read: (server: Server, msg: ServerMessage) => void
    readonly request_finished: (server: Server, msg: ServerMessage) => void
    readonly request_aborted: (server: Server, msg: ServerMessage) => void
    readonly padding: object[]
    static name: string
}
abstract class ServerMessageClass {
    /* Fields of Soup-3.0.Soup.ServerMessageClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class SessionClass {
    /* Fields of Soup-3.0.Soup.SessionClass */
    readonly parent_class: GObject.ObjectClass
    readonly request_queued: (session: Session, msg: Message) => void
    readonly request_unqueued: (session: Session, msg: Message) => void
    static name: string
}
abstract class SessionFeatureInterface {
    static name: string
}
abstract class WebsocketConnectionClass {
    /* Fields of Soup-3.0.Soup.WebsocketConnectionClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class WebsocketExtensionClass {
    /* Fields of Soup-3.0.Soup.WebsocketExtensionClass */
    /**
     * the parent class
     */
    readonly parent_class: GObject.ObjectClass
    /**
     * the name of the extension
     */
    readonly name: string
    readonly configure: (extension: WebsocketExtension, connection_type: WebsocketConnectionType, params?: GLib.HashTable | null) => boolean
    readonly get_request_params: (extension: WebsocketExtension) => string | null
    readonly get_response_params: (extension: WebsocketExtension) => string | null
    readonly process_outgoing_message: (extension: WebsocketExtension, header: number, payload: GLib.Bytes) => [ /* returnType */ GLib.Bytes, /* header */ number ]
    readonly process_incoming_message: (extension: WebsocketExtension, header: number, payload: GLib.Bytes) => [ /* returnType */ GLib.Bytes, /* header */ number ]
    static name: string
}
abstract class WebsocketExtensionDeflateClass {
    /* Fields of Soup-3.0.Soup.WebsocketExtensionDeflateClass */
    readonly parent_class: WebsocketExtensionClass
    static name: string
}
abstract class WebsocketExtensionManagerClass {
    /* Fields of Soup-3.0.Soup.WebsocketExtensionManagerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
}
export default Soup;