/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EDataServer-1.2
 */

import type * as Gjs from './Gjs';
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
function binding_bind_property(source: GObject.Object, source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
function binding_bind_property_full(source: GObject.Object, source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to?: Function | null, transform_from?: Function | null): GObject.Binding
function binding_transform_enum_nick_to_value(binding: GObject.Binding, source_value: any, target_value: any, not_used?: object | null): boolean
function binding_transform_enum_value_to_nick(binding: GObject.Binding, source_value: any, target_value: any, not_used?: object | null): boolean
function categories_add(category: string, unused: string, icon_file: string, searchable: boolean): void
function categories_dup_icon_file_for(category: string): string
function categories_dup_list(): string[]
function categories_exist(category: string): boolean
function categories_get_icon_file_for(category: string): string
function categories_get_list(): string[]
function categories_is_searchable(category: string): boolean
function categories_register_change_listener(listener: GObject.Callback): void
function categories_remove(category: string): void
function categories_set_icon_file_for(category: string, icon_file: string): void
function categories_unregister_change_listener(listener: GObject.Callback): void
function collator_error_quark(): GLib.Quark
function data_server_util_get_dbus_call_timeout(): number
function data_server_util_set_dbus_call_timeout(timeout_msec: number): void
function debug_log_clear(): void
function debug_log_disable_domains(domains: string[]): void
function debug_log_dump(filename: string): boolean
function debug_log_dump_to_dated_file(): boolean
function debug_log_enable_domains(domains: string[]): void
function debug_log_get_max_lines(): number
function debug_log_is_domain_enabled(domain: string): boolean
function debug_log_load_configuration(filename: string): boolean
function debug_log_set_max_lines(num_lines: number): void
function eds_check_version(required_major: number, required_minor: number, required_micro: number): string
function enum_from_string(enum_type: GObject.Type, string: string, enum_value: number): boolean
function enum_to_string(enum_type: GObject.Type, enum_value: number): string
function file_recursive_delete(file: Gio.File, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function file_recursive_delete_finish(file: Gio.File, result: Gio.AsyncResult): boolean
function file_recursive_delete_sync(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
function filename_make_safe(string: string): void
function filename_mkdir_encoded(basepath: string, fileprefix: string, filename: string, fileindex: number): string
function free_form_exp_to_sexp(free_form_exp: string, symbols: FreeFormExpSymbol): string
function get_user_cache_dir(): string
function get_user_config_dir(): string
function get_user_data_dir(): string
function localtime_with_offset(tt: number, tm: object | null, offset: number): void
function mktime_utc(tm?: object | null): number
function oauth2_service_util_set_to_form(form: GLib.HashTable, name: string, value?: string | null): void
function oauth2_service_util_take_to_form(form: GLib.HashTable, name: string, value?: string | null): void
function queue_transfer(src_queue: GLib.Queue, dst_queue: GLib.Queue): void
function secret_store_delete_sync(uid: string, cancellable?: Gio.Cancellable | null): boolean
function secret_store_lookup_sync(uid: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_secret */ string ]
function secret_store_store_sync(uid: string, secret: string, label: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
function soup_logger_attach(message: Soup.Message, input_stream: Gio.InputStream): Gio.InputStream
function soup_ssl_trust_connect(soup_message: Soup.Message, source: Source): void
function strftime(string: string, max: number, fmt: string, tm?: object | null): number
function time_format_date_and_time(date_tm: object | null, use_24_hour_format: boolean, show_midnight: boolean, show_zero_seconds: boolean, buffer: string, buffer_size: number): void
function time_format_time(date_tm: object | null, use_24_hour_format: boolean, show_zero_seconds: boolean, buffer: string, buffer_size: number): void
function time_get_d_fmt_with_4digit_year(): string
function time_parse_date(value: string, result?: object | null): TimeParseStatus
function time_parse_date_and_time(value: string, result?: object | null): TimeParseStatus
function time_parse_date_and_time_ex(value: string, result: object | null, two_digit_year: boolean): TimeParseStatus
function time_parse_date_ex(value: string, result: object | null, two_digit_year: boolean): TimeParseStatus
function time_parse_time(value: string, result?: object | null): TimeParseStatus
function timeout_add_seconds_with_name(priority: number, interval: number, name: string | null, function_: GLib.SourceFunc): number
function timeout_add_with_name(priority: number, interval: number, name: string | null, function_: GLib.SourceFunc): number
function type_traverse(parent_type: GObject.Type, func: TypeFunc): void
function uid_new(): string
function utf8_strftime(string: string, max: number, fmt: string, tm?: object | null): number
function util_can_use_collection_as_credential_source(collection_source?: object | null, child_source?: object | null): boolean
function util_copy_object_slist(copy_to: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[]
function util_copy_string_slist(copy_to: string[] | null, strings: string[]): string[]
function util_ensure_gdbus_string(str: string, gdbus_str: string): string
function util_free_nullable_object_slist(objects: GObject.Object[]): void
function util_free_object_slist(objects: GObject.Object[]): void
function util_free_string_slist(strings: string[]): void
function util_generate_uid(): string
function util_get_directory_variants(main_path: string, replace_prefix: string, with_modules_dir: boolean): string[]
function util_get_source_full_name(registry?: object | null, source?: object | null): string
function util_gthread_id(thread: GLib.Thread): number
function util_identity_can_send(registry?: object | null, identity_source?: object | null): boolean
function util_safe_free_string(str: string): void
function util_slist_to_strv(strings: string[]): string[]
function util_source_compare_for_sort(source_a?: object | null, source_b?: object | null): number
function util_strcmp0(str1?: string | null, str2?: string | null): number
function util_strdup_strip(string?: string | null): string | null
function util_strstrcase(haystack: string, needle: string): string | null
function util_strv_equal(v1: string[], v2: string[]): boolean
function util_strv_to_slist(strv: string): string[]
function util_unicode_get_utf8(text: string, out: number): string | null
function util_unref_in_thread(object?: object | null): void
function util_utf8_data_make_valid(data: string, data_bytes: number): string
function util_utf8_decompose(text: string): string
function util_utf8_make_valid(str: string): string
function util_utf8_normalize(str?: string | null): string | null
function util_utf8_remove_accents(str: string): string
function util_utf8_strcasecmp(s1: string, s2: string): number
function util_utf8_strstrcase(haystack?: string | null, needle?: string | null): string | null
function util_utf8_strstrcasedecomp(haystack: string, needle: string): string
function webdav_access_control_entry_free(ptr?: object | null): void
function webdav_discover_free_discovered_sources(discovered_sources: WebDAVDiscoveredSource[]): void
function webdav_discover_sources(source: Source, url_use_path: string | null, only_supports: number, credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function webdav_discover_sources_finish(source: Source, result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags | null, /* out_discovered_sources */ WebDAVDiscoveredSource[] | null, /* out_calendar_user_addresses */ string[] | null ]
function webdav_discover_sources_full(source: Source, url_use_path: string | null, only_supports: number, credentials?: NamedParameters | null, ref_source_func?: WebDAVDiscoverRefSourceFunc | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function webdav_discover_sources_full_sync(source: Source, url_use_path: string | null, only_supports: number, credentials?: NamedParameters | null, ref_source_func?: WebDAVDiscoverRefSourceFunc | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags | null, /* out_discovered_sources */ WebDAVDiscoveredSource[] | null, /* out_calendar_user_addresses */ string[] | null ]
function webdav_discover_sources_sync(source: Source, url_use_path: string | null, only_supports: number, credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificate_pem */ string | null, /* out_certificate_errors */ Gio.TlsCertificateFlags | null, /* out_discovered_sources */ WebDAVDiscoveredSource[] | null, /* out_calendar_user_addresses */ string[] | null ]
function webdav_privilege_free(ptr?: object | null): void
function webdav_property_change_free(ptr?: object | null): void
function webdav_resource_free(ptr?: object | null): void
function xml_destroy_hash(hash: GLib.HashTable): void
function xml_save_file(filename: string, doc: libxml2.Doc): number
function xml_to_hash(doc: libxml2.Doc, type: XmlHashType): GLib.HashTable
function xmlhash_add(hash: XmlHash, key: string, data: string): void
function xmlhash_compare(hash: XmlHash, key: string, compare_data: string): XmlHashStatus
function xmlhash_destroy(hash: XmlHash): void
function xmlhash_foreach_key(hash: XmlHash, func: XmlHashFunc): void
function xmlhash_foreach_key_remove(hash: XmlHash, func: XmlHashRemoveFunc): void
function xmlhash_remove(hash: XmlHash, key: string): void
function xmlhash_write(hash: XmlHash): void
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
    (webdav: WebDAVSession, prop_node: libxml2.Node, request_uri: Soup.URI, href: string | null, status_code: number): boolean
}
interface XmlHashFunc {
    (key: string, value: string): void
}
interface XmlHashRemoveFunc {
    (key: string, value: string): boolean
}
class Extensible {
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): Extension[]
    load_extensions(): void
    static name: string
}
class OAuth2Service {
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Service */
    can_process(source: Source): boolean
    delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    extract_authorization_code(source: Source, page_title: string, page_uri: string, page_content?: string | null): [ /* returnType */ boolean, /* out_authorization_code */ string ]
    get_access_token_sync(source: Source, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string, /* out_expires_in */ number ]
    get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    get_authentication_uri(source: Source): string
    get_client_id(source: Source): string
    get_client_secret(source: Source): string | null
    get_display_name(): string
    get_flags(): number
    get_name(): string
    get_redirect_uri(source: Source): string | null
    get_refresh_uri(source: Source): string
    guess_can_process(protocol?: string | null, hostname?: string | null): boolean
    prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable): void
    prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable): void
    prepare_get_token_message(source: Source, message: Soup.Message): void
    prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable): void
    prepare_refresh_token_message(source: Source, message: Soup.Message): void
    receive_and_store_token_sync(source: Source, authorization_code: string, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    refresh_and_store_token_sync(source: Source, refresh_token: string, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.OAuth2Service */
    vfunc_can_process(source: Source): boolean
    vfunc_extract_authorization_code(source: Source, page_title: string, page_uri: string, page_content?: string | null): [ /* returnType */ boolean, /* out_authorization_code */ string ]
    vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    vfunc_get_authentication_uri(source: Source): string
    vfunc_get_client_id(source: Source): string
    vfunc_get_client_secret(source: Source): string | null
    vfunc_get_display_name(): string
    vfunc_get_flags(): number
    vfunc_get_name(): string
    vfunc_get_redirect_uri(source: Source): string | null
    vfunc_get_refresh_uri(source: Source): string
    vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean
    vfunc_prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable): void
    vfunc_prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable): void
    vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void
    vfunc_prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable): void
    vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void
    static name: string
    /* Static methods and pseudo-constructors */
    static util_set_to_form(form: GLib.HashTable, name: string, value?: string | null): void
    static util_take_to_form(form: GLib.HashTable, name: string, value?: string | null): void
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.Client */
    online?: boolean
    source?: Source
}
class Client {
    /* Properties of EDataServer-1.2.EDataServer.Client */
    readonly capabilities: object
    readonly main_context: GLib.MainContext
    online: boolean
    readonly opened: boolean
    readonly readonly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Client */
    cancel_all(): void
    check_capability(capability: string): boolean
    check_refresh_supported(): boolean
    dup_bus_name(): string
    get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    get_capabilities(): string[]
    get_source(): Source
    is_online(): boolean
    is_opened(): boolean
    is_readonly(): boolean
    open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    ref_main_context(): GLib.MainContext
    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
    retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    retrieve_properties(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    retrieve_properties_finish(result: Gio.AsyncResult): boolean
    retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_backend_property_finish(result: Gio.AsyncResult): boolean
    set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    set_bus_name(bus_name: string): void
    unwrap_dbus_error(dbus_error: GLib.Error): void
    wait_for_connected(timeout_seconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    wait_for_connected_finish(result: Gio.AsyncResult): boolean
    wait_for_connected_sync(timeout_seconds: number, cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of EDataServer-1.2.EDataServer.Client */
    vfunc_backend_died(): void
    vfunc_backend_error(error_msg: string): void
    vfunc_backend_property_changed(prop_name: string, prop_value: string): void
    vfunc_get_backend_property(prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_backend_property_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* prop_value */ string ]
    vfunc_get_backend_property_sync(prop_name: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* prop_value */ string ]
    vfunc_open(only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_open_finish(result: Gio.AsyncResult): boolean
    vfunc_open_sync(only_if_exists: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_opened(error: GLib.Error): void
    vfunc_refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_finish(result: Gio.AsyncResult): boolean
    vfunc_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_retrieve_capabilities(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_retrieve_capabilities_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* capabilities */ string ]
    vfunc_retrieve_capabilities_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* capabilities */ string ]
    vfunc_retrieve_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_set_backend_property(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_set_backend_property_finish(result: Gio.AsyncResult): boolean
    vfunc_set_backend_property_sync(prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_unwrap_dbus_error(dbus_error: GLib.Error): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of EDataServer-1.2.EDataServer.Client */
    connect(sigName: "backend-died", callback: (($obj: Client) => void)): number
    connect_after(sigName: "backend-died", callback: (($obj: Client) => void)): number
    emit(sigName: "backend-died"): void
    connect(sigName: "backend-error", callback: (($obj: Client, object: string) => void)): number
    connect_after(sigName: "backend-error", callback: (($obj: Client, object: string) => void)): number
    emit(sigName: "backend-error", object: string): void
    connect(sigName: "backend-property-changed", callback: (($obj: Client, object: string, p0: string) => void)): number
    connect_after(sigName: "backend-property-changed", callback: (($obj: Client, object: string, p0: string) => void)): number
    emit(sigName: "backend-property-changed", object: string, p0: string): void
    connect(sigName: "opened", callback: (($obj: Client, object: GLib.Error) => void)): number
    connect_after(sigName: "opened", callback: (($obj: Client, object: GLib.Error) => void)): number
    emit(sigName: "opened", object: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opened", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_create(code: ClientError, custom_msg?: string | null): GLib.Error
    static error_quark(): GLib.Quark
    static error_to_string(code: ClientError): string
    static util_copy_object_slist(copy_to: GObject.Object[] | null, objects: GObject.Object[]): GObject.Object[]
    static util_copy_string_slist(copy_to: string[] | null, strings: string[]): string[]
    static util_free_object_slist(objects: GObject.Object[]): void
    static util_free_string_slist(strings: string[]): void
    static util_parse_comma_strings(strings: string): string[]
    static util_slist_to_strv(strings: string[]): string[]
    static util_strv_to_slist(strv: string): string[]
    static util_unwrap_dbus_error(dbus_error: GLib.Error, known_errors: ClientErrorsList, known_errors_count: number, known_errors_domain: GLib.Quark, fail_when_none_matched: boolean): [ /* returnType */ boolean, /* client_error */ GLib.Error ]
    static $gtype: GObject.Type
}
interface Extension_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.Extension */
    extensible?: Extensible
}
class Extension {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): Extensible
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
    connect(sigName: "notify", callback: (($obj: Extension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Extension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Extension_ConstructProps)
    _init (config?: Extension_ConstructProps): void
    static $gtype: GObject.Type
}
interface GDataOAuth2Authorizer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer */
    service_type?: GObject.Type
    source?: Source
}
class GDataOAuth2Authorizer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer */
    clone_credentials(): NamedParameters | null
    get_service_type(): GObject.Type
    is_expired(): boolean
    ref_source(): Source
    set_credentials(credentials?: NamedParameters | null): void
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
    /* Methods of GData-0.0.GData.Authorizer */
    is_authorized_for_domain(domain: GData.AuthorizationDomain): boolean
    process_request(domain: GData.AuthorizationDomain | null, message: Soup.Message): void
    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.GDataOAuth2Authorizer */
    vfunc_is_authorized_for_domain(domain: GData.AuthorizationDomain): boolean
    vfunc_process_request(domain: GData.AuthorizationDomain | null, message: Soup.Message): void
    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_authorization_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GDataOAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GDataOAuth2Authorizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GDataOAuth2Authorizer_ConstructProps)
    _init (config?: GDataOAuth2Authorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Source, service_type: GObject.Type): GDataOAuth2Authorizer
    static supported(): boolean
    static $gtype: GObject.Type
}
interface Module_ConstructProps extends GObject.TypeModule_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.Module */
    filename?: string
}
class Module {
    /* Fields of GObject-2.0.GObject.TypeModule */
    readonly parent_instance: GObject.Object
    readonly use_count: number
    readonly type_infos: object[]
    readonly interface_infos: object[]
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Module */
    get_filename(): string
    /* Methods of GObject-2.0.GObject.TypeModule */
    add_interface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    register_type(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    set_name(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject-2.0.GObject.TypePlugin */
    complete_interface_info(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    complete_type_info(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    use(): void
    /* Virtual methods of GObject-2.0.GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Module, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Module_ConstructProps)
    _init (config?: Module_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): Module
    static load_all_in_directory(dirname: string): Module[]
    static load_all_in_directory_and_prefixes(dirname: string, dirprefix?: string | null): Module[]
    static load_file(filename: string): Module
    static $gtype: GObject.Type
}
interface NetworkMonitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.NetworkMonitor */
    gio_name?: string
}
class NetworkMonitor {
    /* Properties of EDataServer-1.2.EDataServer.NetworkMonitor */
    gio_name: string
    /* Properties of Gio-2.0.Gio.NetworkMonitor */
    readonly connectivity: Gio.NetworkConnectivity
    readonly network_available: boolean
    readonly network_metered: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.NetworkMonitor */
    dup_gio_name(): string
    list_gio_names(): string[]
    set_gio_name(gio_name?: string | null): void
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.NetworkMonitor */
    can_reach(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null): boolean
    can_reach_async(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    can_reach_finish(result: Gio.AsyncResult): boolean
    get_connectivity(): Gio.NetworkConnectivity
    get_network_available(): boolean
    get_network_metered(): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.NetworkMonitor */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_can_reach(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null): boolean
    vfunc_can_reach_async(connectable: Gio.SocketConnectable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_can_reach_finish(result: Gio.AsyncResult): boolean
    vfunc_network_changed(network_available: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.NetworkMonitor */
    connect(sigName: "network-changed", callback: (($obj: NetworkMonitor, network_available: boolean) => void)): number
    connect_after(sigName: "network-changed", callback: (($obj: NetworkMonitor, network_available: boolean) => void)): number
    emit(sigName: "network-changed", network_available: boolean): void
    connect(sigName: "notify::gio-name", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gio-name", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connectivity", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectivity", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-available", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-available", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-metered", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-metered", callback: (($obj: NetworkMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkMonitor_ConstructProps)
    _init (config?: NetworkMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Gio.NetworkMonitor
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface OAuth2ServiceBase_ConstructProps extends Extension_ConstructProps {
}
class OAuth2ServiceBase {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): Extensible
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
    connect(sigName: "notify", callback: (($obj: OAuth2ServiceBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2ServiceBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): Extensible
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
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Service */
    can_process(source: Source): boolean
    delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    extract_authorization_code(source: Source, page_title: string, page_uri: string, page_content?: string | null): [ /* returnType */ boolean, /* out_authorization_code */ string ]
    get_access_token_sync(source: Source, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string, /* out_expires_in */ number ]
    get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    get_authentication_uri(source: Source): string
    get_client_id(source: Source): string
    get_client_secret(source: Source): string | null
    get_display_name(): string
    get_flags(): number
    get_name(): string
    get_redirect_uri(source: Source): string | null
    get_refresh_uri(source: Source): string
    guess_can_process(protocol?: string | null, hostname?: string | null): boolean
    prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable): void
    prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable): void
    prepare_get_token_message(source: Source, message: Soup.Message): void
    prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable): void
    prepare_refresh_token_message(source: Source, message: Soup.Message): void
    receive_and_store_token_sync(source: Source, authorization_code: string, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    refresh_and_store_token_sync(source: Source, refresh_token: string, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.OAuth2ServiceGoogle */
    vfunc_can_process(source: Source): boolean
    vfunc_extract_authorization_code(source: Source, page_title: string, page_uri: string, page_content?: string | null): [ /* returnType */ boolean, /* out_authorization_code */ string ]
    vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    vfunc_get_authentication_uri(source: Source): string
    vfunc_get_client_id(source: Source): string
    vfunc_get_client_secret(source: Source): string | null
    vfunc_get_display_name(): string
    vfunc_get_flags(): number
    vfunc_get_name(): string
    vfunc_get_redirect_uri(source: Source): string | null
    vfunc_get_refresh_uri(source: Source): string
    vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean
    vfunc_prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable): void
    vfunc_prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable): void
    vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void
    vfunc_prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable): void
    vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2ServiceGoogle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2ServiceGoogle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2ServiceGoogle_ConstructProps)
    _init (config?: OAuth2ServiceGoogle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static util_set_to_form(form: GLib.HashTable, name: string, value?: string | null): void
    static util_take_to_form(form: GLib.HashTable, name: string, value?: string | null): void
    static $gtype: GObject.Type
}
interface OAuth2ServiceOutlook_ConstructProps extends OAuth2ServiceBase_ConstructProps {
}
class OAuth2ServiceOutlook {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceBase */
    readonly parent: Extension
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): Extensible
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
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Service */
    can_process(source: Source): boolean
    delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    extract_authorization_code(source: Source, page_title: string, page_uri: string, page_content?: string | null): [ /* returnType */ boolean, /* out_authorization_code */ string ]
    get_access_token_sync(source: Source, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string, /* out_expires_in */ number ]
    get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    get_authentication_uri(source: Source): string
    get_client_id(source: Source): string
    get_client_secret(source: Source): string | null
    get_display_name(): string
    get_flags(): number
    get_name(): string
    get_redirect_uri(source: Source): string | null
    get_refresh_uri(source: Source): string
    guess_can_process(protocol?: string | null, hostname?: string | null): boolean
    prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable): void
    prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable): void
    prepare_get_token_message(source: Source, message: Soup.Message): void
    prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable): void
    prepare_refresh_token_message(source: Source, message: Soup.Message): void
    receive_and_store_token_sync(source: Source, authorization_code: string, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    refresh_and_store_token_sync(source: Source, refresh_token: string, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.OAuth2ServiceOutlook */
    vfunc_can_process(source: Source): boolean
    vfunc_extract_authorization_code(source: Source, page_title: string, page_uri: string, page_content?: string | null): [ /* returnType */ boolean, /* out_authorization_code */ string ]
    vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    vfunc_get_authentication_uri(source: Source): string
    vfunc_get_client_id(source: Source): string
    vfunc_get_client_secret(source: Source): string | null
    vfunc_get_display_name(): string
    vfunc_get_flags(): number
    vfunc_get_name(): string
    vfunc_get_redirect_uri(source: Source): string | null
    vfunc_get_refresh_uri(source: Source): string
    vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean
    vfunc_prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable): void
    vfunc_prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable): void
    vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void
    vfunc_prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable): void
    vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2ServiceOutlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2ServiceOutlook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2ServiceOutlook_ConstructProps)
    _init (config?: OAuth2ServiceOutlook_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static util_set_to_form(form: GLib.HashTable, name: string, value?: string | null): void
    static util_take_to_form(form: GLib.HashTable, name: string, value?: string | null): void
    static $gtype: GObject.Type
}
interface OAuth2ServiceYahoo_ConstructProps extends OAuth2ServiceBase_ConstructProps {
}
class OAuth2ServiceYahoo {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceBase */
    readonly parent: Extension
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): Extensible
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
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Service */
    can_process(source: Source): boolean
    delete_token_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    extract_authorization_code(source: Source, page_title: string, page_uri: string, page_content?: string | null): [ /* returnType */ boolean, /* out_authorization_code */ string ]
    get_access_token_sync(source: Source, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string, /* out_expires_in */ number ]
    get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    get_authentication_uri(source: Source): string
    get_client_id(source: Source): string
    get_client_secret(source: Source): string | null
    get_display_name(): string
    get_flags(): number
    get_name(): string
    get_redirect_uri(source: Source): string | null
    get_refresh_uri(source: Source): string
    guess_can_process(protocol?: string | null, hostname?: string | null): boolean
    prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable): void
    prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable): void
    prepare_get_token_message(source: Source, message: Soup.Message): void
    prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable): void
    prepare_refresh_token_message(source: Source, message: Soup.Message): void
    receive_and_store_token_sync(source: Source, authorization_code: string, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    refresh_and_store_token_sync(source: Source, refresh_token: string, ref_source: OAuth2ServiceRefSourceFunc, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.OAuth2ServiceYahoo */
    vfunc_can_process(source: Source): boolean
    vfunc_extract_authorization_code(source: Source, page_title: string, page_uri: string, page_content?: string | null): [ /* returnType */ boolean, /* out_authorization_code */ string ]
    vfunc_get_authentication_policy(source: Source, uri: string): OAuth2ServiceNavigationPolicy
    vfunc_get_authentication_uri(source: Source): string
    vfunc_get_client_id(source: Source): string
    vfunc_get_client_secret(source: Source): string | null
    vfunc_get_display_name(): string
    vfunc_get_flags(): number
    vfunc_get_name(): string
    vfunc_get_redirect_uri(source: Source): string | null
    vfunc_get_refresh_uri(source: Source): string
    vfunc_guess_can_process(protocol?: string | null, hostname?: string | null): boolean
    vfunc_prepare_authentication_uri_query(source: Source, uri_query: GLib.HashTable): void
    vfunc_prepare_get_token_form(source: Source, authorization_code: string, form: GLib.HashTable): void
    vfunc_prepare_get_token_message(source: Source, message: Soup.Message): void
    vfunc_prepare_refresh_token_form(source: Source, refresh_token: string, form: GLib.HashTable): void
    vfunc_prepare_refresh_token_message(source: Source, message: Soup.Message): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2ServiceYahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2ServiceYahoo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2ServiceYahoo_ConstructProps)
    _init (config?: OAuth2ServiceYahoo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static util_set_to_form(form: GLib.HashTable, name: string, value?: string | null): void
    static util_take_to_form(form: GLib.HashTable, name: string, value?: string | null): void
    static $gtype: GObject.Type
}
interface OAuth2Services_ConstructProps extends GObject.Object_ConstructProps {
}
class OAuth2Services {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.OAuth2Services */
    add(service: OAuth2Service): void
    find(source: Source): OAuth2Service | null
    guess(protocol?: string | null, hostname?: string | null): OAuth2Service | null
    is_oauth2_alias(auth_method?: string | null): boolean
    list(): OAuth2Service[]
    remove(service: OAuth2Service): void
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
    /* Methods of EDataServer-1.2.EDataServer.Extensible */
    list_extensions(extension_type: GObject.Type): Extension[]
    load_extensions(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OAuth2Services, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OAuth2Services, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OAuth2Services_ConstructProps)
    _init (config?: OAuth2Services_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OAuth2Services
    static is_oauth2_alias_static(auth_method?: string | null): boolean
    static is_supported(): boolean
    static $gtype: GObject.Type
}
interface SoupAuthBearer_ConstructProps extends Soup.Auth_ConstructProps {
}
class SoupAuthBearer {
    /* Properties of Soup-2.4.Soup.Auth */
    host: string
    readonly is_authenticated: boolean
    is_for_proxy: boolean
    readonly scheme_name: string
    /* Fields of Soup-2.4.Soup.Auth */
    readonly parent: GObject.Object
    readonly realm: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SoupAuthBearer */
    is_expired(): boolean
    set_access_token(access_token: string, expires_in_seconds: number): void
    /* Methods of Soup-2.4.Soup.Auth */
    authenticate(username: string, password: string): void
    can_authenticate(): boolean
    get_authorization(msg: Soup.Message): string
    get_host(): string
    get_info(): string
    get_protection_space(source_uri: Soup.URI): string[]
    get_realm(): string
    get_saved_password(user: string): string
    get_saved_users(): string[]
    get_scheme_name(): string
    has_saved_password(username: string, password: string): void
    is_ready(msg: Soup.Message): boolean
    save_password(username: string, password: string): void
    update(msg: Soup.Message, auth_header: string): boolean
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
    /* Virtual methods of Soup-2.4.Soup.Auth */
    vfunc_authenticate(username: string, password: string): void
    vfunc_can_authenticate(): boolean
    vfunc_get_authorization(msg: Soup.Message): string
    vfunc_get_protection_space(source_uri: Soup.URI): string[]
    vfunc_is_authenticated(): boolean
    vfunc_is_ready(msg: Soup.Message): boolean
    vfunc_update(msg: Soup.Message, auth_header: GLib.HashTable): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::host", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-authenticated", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-authenticated", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-proxy", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-proxy", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme-name", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-name", callback: (($obj: SoupAuthBearer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    accept_language: string
    accept_language_auto: boolean
    http_aliases: string[]
    https_aliases: string[]
    idle_timeout: number
    max_conns: number
    max_conns_per_host: number
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    ssl_ca_file: string
    ssl_strict: boolean
    ssl_use_system_ca_file: boolean
    timeout: number
    tls_database: Gio.TlsDatabase
    tls_interaction: Gio.TlsInteraction
    use_ntlm: boolean
    use_thread_context: boolean
    user_agent: string
    /* Fields of Soup-2.4.Soup.Session */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SoupSession */
    check_result(request: Soup.RequestHTTP, read_bytes: object | null, bytes_length: number): boolean
    dup_credentials(): NamedParameters | null
    get_authentication_requires_credentials(): boolean
    get_log_level(): Soup.LoggerLogLevel
    get_source(): Source
    get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    new_request(method: string, uri_string: string): Soup.RequestHTTP
    new_request_uri(method: string, uri: Soup.URI): Soup.RequestHTTP
    send_request_simple_sync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Uint8Array
    send_request_sync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Gio.InputStream
    set_credentials(credentials?: NamedParameters | null): void
    setup_logging(logging_level?: string | null): void
    /* Methods of Soup-2.4.Soup.Session */
    abort(): void
    add_feature(feature: Soup.SessionFeature): void
    add_feature_by_type(feature_type: GObject.Type): void
    cancel_message(msg: Soup.Message, status_code: number): void
    connect_async(uri: Soup.URI, cancellable?: Gio.Cancellable | null, progress_callback?: Soup.SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): Gio.IOStream
    get_async_context(): GLib.MainContext | null
    get_feature(feature_type: GObject.Type): Soup.SessionFeature | null
    get_feature_for_message(feature_type: GObject.Type, msg: Soup.Message): Soup.SessionFeature | null
    get_features(feature_type: GObject.Type): Soup.SessionFeature[]
    has_feature(feature_type: GObject.Type): boolean
    pause_message(msg: Soup.Message): void
    prefetch_dns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Soup.AddressCallback | null): void
    prepare_for_uri(uri: Soup.URI): void
    queue_message(msg: Soup.Message, callback?: Soup.SessionCallback | null): void
    redirect_message(msg: Soup.Message): boolean
    remove_feature(feature: Soup.SessionFeature): void
    remove_feature_by_type(feature_type: GObject.Type): void
    request(uri_string: string): Soup.Request
    request_http(method: string, uri_string: string): Soup.RequestHTTP
    request_http_uri(method: string, uri: Soup.URI): Soup.RequestHTTP
    request_uri(uri: Soup.URI): Soup.Request
    requeue_message(msg: Soup.Message): void
    send(msg: Soup.Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(msg: Soup.Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    send_message(msg: Soup.Message): number
    steal_connection(msg: Soup.Message): Gio.IOStream
    unpause_message(msg: Soup.Message): void
    websocket_connect_async(msg: Soup.Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocket_connect_finish(result: Gio.AsyncResult): Soup.WebsocketConnection
    would_redirect(msg: Soup.Message): boolean
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
    /* Virtual methods of Soup-2.4.Soup.Session */
    vfunc_auth_required(msg: Soup.Message, auth: Soup.Auth, retrying: boolean): void
    vfunc_authenticate(msg: Soup.Message, auth: Soup.Auth, retrying: boolean): void
    vfunc_cancel_message(msg: Soup.Message, status_code: number): void
    vfunc_flush_queue(): void
    vfunc_kick(): void
    vfunc_queue_message(msg: Soup.Message, callback?: Soup.SessionCallback | null): void
    vfunc_request_started(msg: Soup.Message, socket: Soup.Socket): void
    vfunc_requeue_message(msg: Soup.Message): void
    vfunc_send_message(msg: Soup.Message): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-2.4.Soup.Session */
    connect(sigName: "authenticate", callback: (($obj: SoupSession, msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: SoupSession, msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Soup.Message, auth: Soup.Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: (($obj: SoupSession, connection: GObject.Object) => void)): number
    connect_after(sigName: "connection-created", callback: (($obj: SoupSession, connection: GObject.Object) => void)): number
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: (($obj: SoupSession, msg: Soup.Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: SoupSession, msg: Soup.Message) => void)): number
    emit(sigName: "request-queued", msg: Soup.Message): void
    connect(sigName: "request-started", callback: (($obj: SoupSession, msg: Soup.Message, socket: Soup.Socket) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: SoupSession, msg: Soup.Message, socket: Soup.Socket) => void)): number
    emit(sigName: "request-started", msg: Soup.Message, socket: Soup.Socket): void
    connect(sigName: "request-unqueued", callback: (($obj: SoupSession, msg: Soup.Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: SoupSession, msg: Soup.Message) => void)): number
    emit(sigName: "request-unqueued", msg: Soup.Message): void
    connect(sigName: "tunneling", callback: (($obj: SoupSession, connection: GObject.Object) => void)): number
    connect_after(sigName: "tunneling", callback: (($obj: SoupSession, connection: GObject.Object) => void)): number
    emit(sigName: "tunneling", connection: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::credentials", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credentials", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language-auto", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-aliases", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::https-aliases", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-timeout", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns-per-host", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-interaction", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-ntlm", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-thread-context", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: SoupSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SoupSession_ConstructProps)
    _init (config?: SoupSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Source): SoupSession
    /* Function overloads */
    static new(): SoupSession
    static util_normalize_uri_path(suri: Soup.URI): boolean
    static util_status_to_string(status_code: number, reason_phrase?: string | null): string
    static $gtype: GObject.Type
}
interface Source_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.Source */
    display_name?: string
    enabled?: boolean
    main_context?: GLib.MainContext
    parent?: string
    uid?: string
}
class Source {
    /* Properties of EDataServer-1.2.EDataServer.Source */
    readonly connection_status: SourceConnectionStatus
    display_name: string
    enabled: boolean
    parent: string
    readonly remote_creatable: boolean
    readonly remote_deletable: boolean
    readonly removable: boolean
    readonly writable: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.Source */
    camel_configure_service(service: Camel.Service): void
    changed(): void
    compare_by_display_name(source2: Source): number
    delete_password(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_password_finish(result: Gio.AsyncResult): boolean
    delete_password_sync(cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_parent(): string | null
    dup_secret_label(): string
    dup_uid(): string
    emit_credentials_required(reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null): void
    equal(source2: Source): boolean
    get_connection_status(): SourceConnectionStatus
    get_display_name(): string
    get_enabled(): boolean
    get_extension(extension_name: string): SourceExtension
    get_last_credentials_required_arguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_last_credentials_required_arguments_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_reason */ SourceCredentialsReason, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags, /* out_op_error */ GLib.Error ]
    get_last_credentials_required_arguments_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_reason */ SourceCredentialsReason, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags, /* out_op_error */ GLib.Error ]
    get_oauth2_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_oauth2_access_token_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_oauth2_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_parent(): string | null
    get_remote_creatable(): boolean
    get_remote_deletable(): boolean
    get_removable(): boolean
    get_uid(): string
    get_writable(): boolean
    has_extension(extension_name: string): boolean
    hash(): number
    invoke_authenticate(credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_authenticate_finish(result: Gio.AsyncResult): boolean
    invoke_authenticate_sync(credentials?: NamedParameters | null, cancellable?: Gio.Cancellable | null): boolean
    invoke_credentials_required(reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    invoke_credentials_required_finish(result: Gio.AsyncResult): boolean
    invoke_credentials_required_sync(reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error?: GLib.Error | null, cancellable?: Gio.Cancellable | null): boolean
    lookup_password(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_password_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_password */ string | null ]
    lookup_password_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_password */ string | null ]
    mail_signature_load(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mail_signature_load_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mail_signature_load_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* contents */ string, /* length */ number | null ]
    mail_signature_replace(contents: string, length: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mail_signature_replace_finish(result: Gio.AsyncResult): boolean
    mail_signature_replace_sync(contents: string, length: number, cancellable?: Gio.Cancellable | null): boolean
    mail_signature_symlink(symlink_target: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    mail_signature_symlink_finish(result: Gio.AsyncResult): boolean
    mail_signature_symlink_sync(symlink_target: string, cancellable?: Gio.Cancellable | null): boolean
    proxy_lookup(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    proxy_lookup_finish(result: Gio.AsyncResult): string[]
    proxy_lookup_sync(uri: string, cancellable?: Gio.Cancellable | null): string[]
    ref_dbus_object(): Gio.DBusObject | null
    ref_main_context(): GLib.MainContext
    refresh_add_timeout(context: GLib.MainContext | null, callback: SourceRefreshFunc): number
    refresh_force_timeout(): void
    refresh_remove_timeout(refresh_timeout_id: number): boolean
    refresh_remove_timeouts_by_data(user_data?: object | null): number
    remote_create(scratch_source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remote_create_finish(result: Gio.AsyncResult): boolean
    remote_create_sync(scratch_source: Source, cancellable?: Gio.Cancellable | null): boolean
    remote_delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remote_delete_finish(result: Gio.AsyncResult): boolean
    remote_delete_sync(cancellable?: Gio.Cancellable | null): boolean
    remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    remove_sync(cancellable?: Gio.Cancellable | null): boolean
    set_connection_status(connection_status: SourceConnectionStatus): void
    set_display_name(display_name: string): void
    set_enabled(enabled: boolean): void
    set_parent(parent?: string | null): void
    store_password(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    store_password_finish(result: Gio.AsyncResult): boolean
    store_password_sync(password: string, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    to_string(): [ /* returnType */ string, /* length */ number | null ]
    unset_last_credentials_required_arguments(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unset_last_credentials_required_arguments_finish(result: Gio.AsyncResult): boolean
    unset_last_credentials_required_arguments_sync(cancellable?: Gio.Cancellable | null): boolean
    write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_finish(result: Gio.AsyncResult): boolean
    write_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.ProxyResolver */
    is_supported(): boolean
    lookup(uri: string, cancellable?: Gio.Cancellable | null): string[]
    lookup_async(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_finish(result: Gio.AsyncResult): string[]
    /* Virtual methods of EDataServer-1.2.EDataServer.Source */
    vfunc_authenticate(credentials: NamedParameters): void
    vfunc_changed(): void
    vfunc_credentials_required(reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error: GLib.Error): void
    vfunc_get_oauth2_access_token(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_oauth2_access_token_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    vfunc_get_oauth2_access_token_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    vfunc_invoke_authenticate_impl(dbus_source: object | null, arg_credentials: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_invoke_credentials_required_impl(dbus_source: object | null, arg_reason: string, arg_certificate_pem: string, arg_certificate_errors: string, arg_dbus_error_name: string, arg_dbus_error_message: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remote_create(scratch_source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remote_create_finish(result: Gio.AsyncResult): boolean
    vfunc_remote_create_sync(scratch_source: Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remote_delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remote_delete_finish(result: Gio.AsyncResult): boolean
    vfunc_remote_delete_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_remove_finish(result: Gio.AsyncResult): boolean
    vfunc_remove_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_unset_last_credentials_required_arguments_impl(cancellable?: Gio.Cancellable | null): boolean
    vfunc_write(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_write_finish(result: Gio.AsyncResult): boolean
    vfunc_write_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_is_supported(): boolean
    vfunc_lookup(uri: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_lookup_async(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: Gio.AsyncResult): string[]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of EDataServer-1.2.EDataServer.Source */
    connect(sigName: "authenticate", callback: (($obj: Source, credentials: NamedParameters) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: Source, credentials: NamedParameters) => void)): number
    emit(sigName: "authenticate", credentials: NamedParameters): void
    connect(sigName: "changed", callback: (($obj: Source) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Source) => void)): number
    emit(sigName: "changed"): void
    connect(sigName: "credentials-required", callback: (($obj: Source, reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error: GLib.Error) => void)): number
    connect_after(sigName: "credentials-required", callback: (($obj: Source, reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error: GLib.Error) => void)): number
    emit(sigName: "credentials-required", reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, error: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enabled", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-creatable", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-creatable", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remote-deletable", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-deletable", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::removable", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::removable", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: Source, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Source_ConstructProps)
    _init (config?: Source_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbus_object?: Gio.DBusObject | null, main_context?: GLib.MainContext | null): Source
    static new_with_uid(uid: string, main_context?: GLib.MainContext | null): Source
    static parameter_to_key(param_name: string): string
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static get_default(): Gio.ProxyResolver
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
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAddressBook */
    get_order(): number
    set_order(order: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceAddressBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceAddressBook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::order", callback: (($obj: SourceAddressBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SourceAddressBook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: SourceAddressBook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceAddressBook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceAddressBook_ConstructProps)
    _init (config?: SourceAddressBook_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceAlarms_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceAlarms */
    include_me?: boolean
    last_notified?: string
}
class SourceAlarms {
    /* Properties of EDataServer-1.2.EDataServer.SourceAlarms */
    include_me: boolean
    last_notified: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAlarms */
    dup_last_notified(): string | null
    get_include_me(): boolean
    get_last_notified(): string | null
    set_include_me(include_me: boolean): void
    set_last_notified(last_notified?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceAlarms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceAlarms, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::include-me", callback: (($obj: SourceAlarms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-me", callback: (($obj: SourceAlarms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-notified", callback: (($obj: SourceAlarms, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-notified", callback: (($obj: SourceAlarms, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceAlarms_ConstructProps)
    _init (config?: SourceAlarms_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceAuthentication_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceAuthentication */
    credential_name?: string
    host?: string
    is_external?: boolean
    method?: string
    port?: number
    proxy_uid?: string
    remember_password?: boolean
    user?: string
}
class SourceAuthentication {
    /* Properties of EDataServer-1.2.EDataServer.SourceAuthentication */
    readonly connectable: Gio.SocketConnectable
    credential_name: string
    host: string
    is_external: boolean
    method: string
    port: number
    proxy_uid: string
    remember_password: boolean
    user: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAuthentication */
    dup_credential_name(): string | null
    dup_host(): string | null
    dup_method(): string | null
    dup_proxy_uid(): string
    dup_user(): string | null
    get_credential_name(): string | null
    get_host(): string | null
    get_is_external(): boolean
    get_method(): string | null
    get_port(): number
    get_proxy_uid(): string
    get_remember_password(): boolean
    get_user(): string | null
    ref_connectable(): Gio.SocketConnectable | null
    required(): boolean
    set_credential_name(credential_name?: string | null): void
    set_host(host?: string | null): void
    set_is_external(is_external: boolean): void
    set_method(method?: string | null): void
    set_port(port: number): void
    set_proxy_uid(proxy_uid: string): void
    set_remember_password(remember_password: boolean): void
    set_user(user?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connectable", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::credential-name", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credential-name", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-external", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-external", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uid", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uid", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remember-password", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remember-password", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: SourceAuthentication, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceAuthentication_ConstructProps)
    _init (config?: SourceAuthentication_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceAutocomplete_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceAutocomplete */
    include_me?: boolean
}
class SourceAutocomplete {
    /* Properties of EDataServer-1.2.EDataServer.SourceAutocomplete */
    include_me: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAutocomplete */
    get_include_me(): boolean
    set_include_me(include_me: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceAutocomplete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceAutocomplete, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::include-me", callback: (($obj: SourceAutocomplete, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-me", callback: (($obj: SourceAutocomplete, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceAutoconfig */
    dup_revision(): string
    get_revision(): string
    set_revision(revision: string): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceAutoconfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceAutoconfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::revision", callback: (($obj: SourceAutoconfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: SourceAutoconfig, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceAutoconfig_ConstructProps)
    _init (config?: SourceAutoconfig_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceBackend_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceBackend */
    backend_name?: string
}
class SourceBackend {
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceBackend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend-name", callback: (($obj: SourceBackend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceBackend, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSelectable */
    dup_color(): string | null
    get_color(): string | null
    get_order(): number
    get_selected(): boolean
    set_color(color?: string | null): void
    set_order(order: number): void
    set_selected(selected: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::color", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceCalendar, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCamel */
    get_settings(): Camel.Settings
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceCamel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceCamel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::settings", callback: (($obj: SourceCamel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: SourceCamel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceCamel_ConstructProps)
    _init (config?: SourceCamel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static generate_subtype(protocol: string, settings_type: GObject.Type): GObject.Type
    static get_extension_name(protocol: string): string
    static get_type_name(protocol: string): string
    static register_types(): void
    static $gtype: GObject.Type
}
interface SourceCollection_ConstructProps extends SourceBackend_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceCollection */
    allow_sources_rename?: boolean
    calendar_enabled?: boolean
    calendar_url?: string
    contacts_enabled?: boolean
    contacts_url?: string
    identity?: string
    mail_enabled?: boolean
}
class SourceCollection {
    /* Properties of EDataServer-1.2.EDataServer.SourceCollection */
    allow_sources_rename: boolean
    calendar_enabled: boolean
    calendar_url: string
    contacts_enabled: boolean
    contacts_url: string
    identity: string
    mail_enabled: boolean
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCollection */
    dup_calendar_url(): string | null
    dup_contacts_url(): string | null
    dup_identity(): string | null
    get_allow_sources_rename(): boolean
    get_calendar_enabled(): boolean
    get_calendar_url(): string | null
    get_contacts_enabled(): boolean
    get_contacts_url(): string | null
    get_identity(): string | null
    get_mail_enabled(): boolean
    set_allow_sources_rename(allow_sources_rename: boolean): void
    set_calendar_enabled(calendar_enabled: boolean): void
    set_calendar_url(calendar_url?: string | null): void
    set_contacts_enabled(contacts_enabled: boolean): void
    set_contacts_url(contacts_url?: string | null): void
    set_identity(identity?: string | null): void
    set_mail_enabled(mail_enabled: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-sources-rename", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-sources-rename", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-enabled", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-enabled", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-url", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-url", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contacts-enabled", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-enabled", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contacts-url", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-url", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::identity", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mail-enabled", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-enabled", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceCollection_ConstructProps)
    _init (config?: SourceCollection_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceContacts_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceContacts */
    include_me?: boolean
}
class SourceContacts {
    /* Properties of EDataServer-1.2.EDataServer.SourceContacts */
    include_me: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceContacts */
    get_include_me(): boolean
    set_include_me(include_me: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceContacts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceContacts, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::include-me", callback: (($obj: SourceContacts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::include-me", callback: (($obj: SourceContacts, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider */
    can_prompt(source: Source): boolean
    can_store(source: Source): boolean
    delete(source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_finish(result: Gio.AsyncResult): boolean
    delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    lookup(source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lookup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    lookup_sync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    ref_credentials_source(source: Source): Source
    ref_registry(): GObject.Object
    ref_source(uid: string): Source
    register_impl(provider_impl: SourceCredentialsProviderImpl): boolean
    store(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    store_finish(result: Gio.AsyncResult): boolean
    store_sync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    unregister_impl(provider_impl: SourceCredentialsProviderImpl): void
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
    /* Virtual methods of EDataServer-1.2.EDataServer.SourceCredentialsProvider */
    vfunc_ref_source(uid: string): Source
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceCredentialsProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceCredentialsProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    can_process(source: Source): boolean
    can_prompt(): boolean
    can_store(): boolean
    delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    get_provider(): object | null
    lookup_sync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    store_sync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): Extensible
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
    /* Virtual methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    vfunc_can_process(source: Source): boolean
    vfunc_can_prompt(): boolean
    vfunc_can_store(): boolean
    vfunc_delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_lookup_sync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    vfunc_store_sync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceCredentialsProviderImpl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceCredentialsProviderImpl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceCredentialsProviderImpl_ConstructProps)
    _init (config?: SourceCredentialsProviderImpl_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceCredentialsProviderImplOAuth2_ConstructProps extends SourceCredentialsProviderImpl_ConstructProps {
}
class SourceCredentialsProviderImplOAuth2 {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    can_process(source: Source): boolean
    can_prompt(): boolean
    can_store(): boolean
    delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    get_provider(): object | null
    lookup_sync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    store_sync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): Extensible
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
    /* Virtual methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    vfunc_can_process(source: Source): boolean
    vfunc_can_prompt(): boolean
    vfunc_can_store(): boolean
    vfunc_delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_lookup_sync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    vfunc_store_sync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceCredentialsProviderImplOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceCredentialsProviderImplOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceCredentialsProviderImplOAuth2_ConstructProps)
    _init (config?: SourceCredentialsProviderImplOAuth2_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceCredentialsProviderImplPassword_ConstructProps extends SourceCredentialsProviderImpl_ConstructProps {
}
class SourceCredentialsProviderImplPassword {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    can_process(source: Source): boolean
    can_prompt(): boolean
    can_store(): boolean
    delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    get_provider(): object | null
    lookup_sync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    store_sync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataServer-1.2.EDataServer.Extension */
    get_extensible(): Extensible
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
    /* Virtual methods of EDataServer-1.2.EDataServer.SourceCredentialsProviderImpl */
    vfunc_can_process(source: Source): boolean
    vfunc_can_prompt(): boolean
    vfunc_can_store(): boolean
    vfunc_delete_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    vfunc_lookup_sync(source: Source, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    vfunc_store_sync(source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceCredentialsProviderImplPassword, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceCredentialsProviderImplPassword, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceExtension_ConstructProps)
    _init (config?: SourceExtension_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceGoa_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceGoa */
    account_id?: string
    address?: string
    calendar_url?: string
    contacts_url?: string
    name?: string
}
class SourceGoa {
    /* Properties of EDataServer-1.2.EDataServer.SourceGoa */
    account_id: string
    address: string
    calendar_url: string
    contacts_url: string
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceGoa */
    dup_account_id(): string | null
    dup_address(): string | null
    dup_calendar_url(): string | null
    dup_contacts_url(): string | null
    dup_name(): string | null
    get_account_id(): string | null
    get_address(): string | null
    get_calendar_url(): string | null
    get_contacts_url(): string | null
    get_name(): string | null
    set_account_id(account_id?: string | null): void
    set_address(address?: string | null): void
    set_calendar_url(calendar_url?: string | null): void
    set_contacts_url(contacts_url?: string | null): void
    set_name(name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account-id", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-id", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-url", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-url", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::contacts-url", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-url", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SourceGoa, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceGoa_ConstructProps)
    _init (config?: SourceGoa_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceLDAP_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceLDAP */
    authentication?: SourceLDAPAuthentication
    can_browse?: boolean
    filter?: string
    limit?: number
    root_dn?: string
    scope?: SourceLDAPScope
    security?: SourceLDAPSecurity
}
class SourceLDAP {
    /* Properties of EDataServer-1.2.EDataServer.SourceLDAP */
    authentication: SourceLDAPAuthentication
    can_browse: boolean
    filter: string
    limit: number
    root_dn: string
    scope: SourceLDAPScope
    security: SourceLDAPSecurity
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceLDAP */
    dup_filter(): string
    dup_root_dn(): string
    get_authentication(): SourceLDAPAuthentication
    get_can_browse(): boolean
    get_filter(): string
    get_limit(): number
    get_root_dn(): string
    get_scope(): SourceLDAPScope
    get_security(): SourceLDAPSecurity
    set_authentication(authentication: SourceLDAPAuthentication): void
    set_can_browse(can_browse: boolean): void
    set_filter(filter: string): void
    set_limit(limit: number): void
    set_root_dn(root_dn: string): void
    set_scope(scope: SourceLDAPScope): void
    set_security(security: SourceLDAPSecurity): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authentication", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authentication", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-browse", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-browse", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::limit", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root-dn", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-dn", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scope", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security", callback: (($obj: SourceLDAP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceLDAP_ConstructProps)
    _init (config?: SourceLDAP_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceLocal_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceLocal */
    custom_file?: Gio.File
    email_address?: string
    writable?: boolean
}
class SourceLocal {
    /* Properties of EDataServer-1.2.EDataServer.SourceLocal */
    custom_file: Gio.File
    email_address: string
    writable: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceLocal */
    dup_custom_file(): Gio.File | null
    dup_email_address(): string
    get_custom_file(): Gio.File | null
    get_email_address(): string | null
    get_writable(): boolean
    set_custom_file(custom_file?: Gio.File | null): void
    set_email_address(email_address?: string | null): void
    set_writable(writable: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::custom-file", callback: (($obj: SourceLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::custom-file", callback: (($obj: SourceLocal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-address", callback: (($obj: SourceLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: SourceLocal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::writable", callback: (($obj: SourceLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writable", callback: (($obj: SourceLocal, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceLocal_ConstructProps)
    _init (config?: SourceLocal_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMDN_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMDN */
    response_policy?: MdnResponsePolicy
}
class SourceMDN {
    /* Properties of EDataServer-1.2.EDataServer.SourceMDN */
    response_policy: MdnResponsePolicy
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMDN */
    get_response_policy(): MdnResponsePolicy
    set_response_policy(response_policy: MdnResponsePolicy): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceMDN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceMDN, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::response-policy", callback: (($obj: SourceMDN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response-policy", callback: (($obj: SourceMDN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceMDN_ConstructProps)
    _init (config?: SourceMDN_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailAccount_ConstructProps extends SourceBackend_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailAccount */
    archive_folder?: string
    identity_uid?: string
    mark_seen?: ThreeState
    mark_seen_timeout?: number
    needs_initial_setup?: boolean
}
class SourceMailAccount {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailAccount */
    archive_folder: string
    identity_uid: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    needs_initial_setup: boolean
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailAccount */
    dup_archive_folder(): string | null
    dup_identity_uid(): string | null
    get_archive_folder(): string | null
    get_identity_uid(): string | null
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_needs_initial_setup(): boolean
    set_archive_folder(archive_folder?: string | null): void
    set_identity_uid(identity_uid?: string | null): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_needs_initial_setup(needs_initial_setup: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::archive-folder", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive-folder", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::identity-uid", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity-uid", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::needs-initial-setup", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::needs-initial-setup", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceMailAccount, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceMailAccount_ConstructProps)
    _init (config?: SourceMailAccount_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailComposition_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailComposition */
    bcc?: string[]
    cc?: string[]
    drafts_folder?: string
    language?: string
    reply_style?: SourceMailCompositionReplyStyle
    sign_imip?: boolean
    start_bottom?: ThreeState
    templates_folder?: string
    top_signature?: ThreeState
}
class SourceMailComposition {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailComposition */
    bcc: string[]
    cc: string[]
    drafts_folder: string
    language: string
    reply_style: SourceMailCompositionReplyStyle
    sign_imip: boolean
    start_bottom: ThreeState
    templates_folder: string
    top_signature: ThreeState
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailComposition */
    dup_bcc(): string[]
    dup_cc(): string[]
    dup_drafts_folder(): string | null
    dup_language(): string | null
    dup_templates_folder(): string | null
    get_bcc(): string[]
    get_cc(): string[]
    get_drafts_folder(): string | null
    get_language(): string | null
    get_reply_style(): SourceMailCompositionReplyStyle
    get_sign_imip(): boolean
    get_start_bottom(): ThreeState
    get_templates_folder(): string | null
    get_top_signature(): ThreeState
    set_bcc(bcc: string[]): void
    set_cc(cc: string[]): void
    set_drafts_folder(drafts_folder?: string | null): void
    set_language(language?: string | null): void
    set_reply_style(reply_style: SourceMailCompositionReplyStyle): void
    set_sign_imip(sign_imip: boolean): void
    set_start_bottom(start_bottom: ThreeState): void
    set_templates_folder(templates_folder?: string | null): void
    set_top_signature(top_signature: ThreeState): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bcc", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bcc", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cc", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::drafts-folder", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::drafts-folder", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::language", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reply-style", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reply-style", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sign-imip", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sign-imip", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-bottom", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-bottom", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::templates-folder", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::templates-folder", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::top-signature", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-signature", callback: (($obj: SourceMailComposition, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    reply_to?: string
    signature_uid?: string
}
class SourceMailIdentity {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailIdentity */
    address: string
    aliases: string
    name: string
    organization: string
    reply_to: string
    signature_uid: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailIdentity */
    dup_address(): string | null
    dup_aliases(): string | null
    dup_name(): string | null
    dup_organization(): string | null
    dup_reply_to(): string | null
    dup_signature_uid(): string | null
    get_address(): string | null
    get_aliases(): string | null
    get_aliases_as_hash_table(): GLib.HashTable | null
    get_name(): string | null
    get_organization(): string | null
    get_reply_to(): string | null
    get_signature_uid(): string | null
    set_address(address?: string | null): void
    set_aliases(aliases?: string | null): void
    set_name(name?: string | null): void
    set_organization(organization?: string | null): void
    set_reply_to(reply_to?: string | null): void
    set_signature_uid(signature_uid?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::aliases", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aliases", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::organization", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::organization", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::reply-to", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reply-to", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signature-uid", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signature-uid", callback: (($obj: SourceMailIdentity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceMailIdentity_ConstructProps)
    _init (config?: SourceMailIdentity_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailSignature_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailSignature */
    mime_type?: string
}
class SourceMailSignature {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailSignature */
    readonly file: Gio.File
    mime_type: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailSignature */
    dup_mime_type(): string | null
    get_file(): Gio.File
    get_mime_type(): string | null
    set_mime_type(mime_type?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceMailSignature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceMailSignature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::file", callback: (($obj: SourceMailSignature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: SourceMailSignature, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: SourceMailSignature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: SourceMailSignature, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceMailSignature_ConstructProps)
    _init (config?: SourceMailSignature_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailSubmission_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceMailSubmission */
    replies_to_origin_folder?: boolean
    sent_folder?: string
    transport_uid?: string
    use_sent_folder?: boolean
}
class SourceMailSubmission {
    /* Properties of EDataServer-1.2.EDataServer.SourceMailSubmission */
    replies_to_origin_folder: boolean
    sent_folder: string
    transport_uid: string
    use_sent_folder: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceMailSubmission */
    dup_sent_folder(): string | null
    dup_transport_uid(): string | null
    get_replies_to_origin_folder(): boolean
    get_sent_folder(): string | null
    get_transport_uid(): string | null
    get_use_sent_folder(): boolean
    set_replies_to_origin_folder(replies_to_origin_folder: boolean): void
    set_sent_folder(sent_folder?: string | null): void
    set_transport_uid(transport_uid?: string | null): void
    set_use_sent_folder(use_sent_folder: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::replies-to-origin-folder", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::replies-to-origin-folder", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sent-folder", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sent-folder", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-uid", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-uid", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-sent-folder", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-sent-folder", callback: (($obj: SourceMailSubmission, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceMailSubmission_ConstructProps)
    _init (config?: SourceMailSubmission_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceMailTransport_ConstructProps extends SourceBackend_ConstructProps {
}
class SourceMailTransport {
    /* Properties of EDataServer-1.2.EDataServer.SourceBackend */
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceMailTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceMailTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::backend-name", callback: (($obj: SourceMailTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceMailTransport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSelectable */
    dup_color(): string | null
    get_color(): string | null
    get_order(): number
    get_selected(): boolean
    set_color(color?: string | null): void
    set_order(order: number): void
    set_selected(selected: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::color", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceMemoList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceMemoList_ConstructProps)
    _init (config?: SourceMemoList_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceOffline_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceOffline */
    stay_synchronized?: boolean
}
class SourceOffline {
    /* Properties of EDataServer-1.2.EDataServer.SourceOffline */
    stay_synchronized: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceOffline */
    get_stay_synchronized(): boolean
    set_stay_synchronized(stay_synchronized: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceOffline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceOffline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::stay-synchronized", callback: (($obj: SourceOffline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stay-synchronized", callback: (($obj: SourceOffline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceOffline_ConstructProps)
    _init (config?: SourceOffline_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceOpenPGP_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceOpenPGP */
    always_trust?: boolean
    encrypt_by_default?: boolean
    encrypt_to_self?: boolean
    key_id?: string
    prefer_inline?: boolean
    sign_by_default?: boolean
    signing_algorithm?: string
}
class SourceOpenPGP {
    /* Properties of EDataServer-1.2.EDataServer.SourceOpenPGP */
    always_trust: boolean
    encrypt_by_default: boolean
    encrypt_to_self: boolean
    key_id: string
    prefer_inline: boolean
    sign_by_default: boolean
    signing_algorithm: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceOpenPGP */
    dup_key_id(): string
    dup_signing_algorithm(): string
    get_always_trust(): boolean
    get_encrypt_by_default(): boolean
    get_encrypt_to_self(): boolean
    get_key_id(): string
    get_prefer_inline(): boolean
    get_sign_by_default(): boolean
    get_signing_algorithm(): string
    set_always_trust(always_trust: boolean): void
    set_encrypt_by_default(encrypt_by_default: boolean): void
    set_encrypt_to_self(encrypt_to_self: boolean): void
    set_key_id(key_id: string): void
    set_prefer_inline(prefer_inline: boolean): void
    set_sign_by_default(sign_by_default: boolean): void
    set_signing_algorithm(signing_algorithm: string): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-trust", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-trust", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encrypt-by-default", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypt-by-default", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encrypt-to-self", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypt-to-self", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-id", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-id", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefer-inline", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefer-inline", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sign-by-default", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sign-by-default", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signing-algorithm", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signing-algorithm", callback: (($obj: SourceOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceOpenPGP_ConstructProps)
    _init (config?: SourceOpenPGP_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceProxy_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceProxy */
    autoconfig_url?: string
    ftp_host?: string
    ftp_port?: number
    http_auth_password?: string
    http_auth_user?: string
    http_host?: string
    http_port?: number
    http_use_auth?: boolean
    https_host?: string
    https_port?: number
    ignore_hosts?: string[]
    method?: ProxyMethod
    socks_host?: string
    socks_port?: number
}
class SourceProxy {
    /* Properties of EDataServer-1.2.EDataServer.SourceProxy */
    autoconfig_url: string
    ftp_host: string
    ftp_port: number
    http_auth_password: string
    http_auth_user: string
    http_host: string
    http_port: number
    http_use_auth: boolean
    https_host: string
    https_port: number
    ignore_hosts: string[]
    method: ProxyMethod
    socks_host: string
    socks_port: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceProxy */
    dup_autoconfig_url(): string
    dup_ftp_host(): string
    dup_http_auth_password(): string
    dup_http_auth_user(): string
    dup_http_host(): string
    dup_https_host(): string
    dup_ignore_hosts(): string[]
    dup_socks_host(): string
    get_autoconfig_url(): string
    get_ftp_host(): string
    get_ftp_port(): number
    get_http_auth_password(): string
    get_http_auth_user(): string
    get_http_host(): string
    get_http_port(): number
    get_http_use_auth(): boolean
    get_https_host(): string
    get_https_port(): number
    get_ignore_hosts(): string[]
    get_method(): ProxyMethod
    get_socks_host(): string
    get_socks_port(): number
    set_autoconfig_url(autoconfig_url: string): void
    set_ftp_host(ftp_host: string): void
    set_ftp_port(ftp_port: number): void
    set_http_auth_password(http_auth_password: string): void
    set_http_auth_user(http_auth_user: string): void
    set_http_host(http_host: string): void
    set_http_port(http_port: number): void
    set_http_use_auth(http_use_auth: boolean): void
    set_https_host(https_host: string): void
    set_https_port(https_port: number): void
    set_ignore_hosts(ignore_hosts: string): void
    set_method(method: ProxyMethod): void
    set_socks_host(socks_host: string): void
    set_socks_port(socks_port: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::autoconfig-url", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconfig-url", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ftp-host", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ftp-host", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ftp-port", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ftp-port", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-auth-password", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-auth-password", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-auth-user", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-auth-user", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-host", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-host", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-port", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-port", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-use-auth", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-use-auth", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::https-host", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-host", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::https-port", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-port", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-hosts", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-hosts", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socks-host", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socks-host", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socks-port", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socks-port", callback: (($obj: SourceProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceProxy_ConstructProps)
    _init (config?: SourceProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceRefresh_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceRefresh */
    enabled?: boolean
    interval_minutes?: number
}
class SourceRefresh {
    /* Properties of EDataServer-1.2.EDataServer.SourceRefresh */
    enabled: boolean
    interval_minutes: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceRefresh */
    get_enabled(): boolean
    get_interval_minutes(): number
    set_enabled(enabled: boolean): void
    set_interval_minutes(interval_minutes: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceRefresh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceRefresh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: SourceRefresh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SourceRefresh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interval-minutes", callback: (($obj: SourceRefresh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interval-minutes", callback: (($obj: SourceRefresh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceRefresh_ConstructProps)
    _init (config?: SourceRefresh_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceRegistry_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceRegistry */
    default_address_book?: Source
    default_calendar?: Source
    default_mail_account?: Source
    default_mail_identity?: Source
    default_memo_list?: Source
    default_task_list?: Source
}
class SourceRegistry {
    /* Properties of EDataServer-1.2.EDataServer.SourceRegistry */
    default_address_book: Source
    default_calendar: Source
    default_mail_account: Source
    default_mail_identity: Source
    default_memo_list: Source
    default_task_list: Source
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceRegistry */
    check_enabled(source: Source): boolean
    commit_source(source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    commit_source_finish(result: Gio.AsyncResult): boolean
    commit_source_sync(source: Source, cancellable?: Gio.Cancellable | null): boolean
    create_sources(list_of_sources: Source[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_sources_finish(result: Gio.AsyncResult): boolean
    create_sources_sync(list_of_sources: Source[], cancellable?: Gio.Cancellable | null): boolean
    debug_dump(extension_name?: string | null): void
    dup_unique_display_name(source: Source, extension_name?: string | null): string
    find_extension(source: Source, extension_name: string): Source | null
    get_oauth2_services(): OAuth2Services
    list_enabled(extension_name?: string | null): Source[]
    list_sources(extension_name?: string | null): Source[]
    ref_builtin_address_book(): Source
    ref_builtin_calendar(): Source
    ref_builtin_mail_account(): Source
    ref_builtin_memo_list(): Source
    ref_builtin_proxy(): Source
    ref_builtin_task_list(): Source
    ref_default_address_book(): Source
    ref_default_calendar(): Source
    ref_default_for_extension_name(extension_name: string): Source | null
    ref_default_mail_account(): Source
    ref_default_mail_identity(): Source
    ref_default_memo_list(): Source
    ref_default_task_list(): Source
    ref_source(uid: string): Source | null
    refresh_backend(source_uid: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_backend_finish(result: Gio.AsyncResult): boolean
    refresh_backend_sync(source_uid: string, cancellable?: Gio.Cancellable | null): boolean
    set_default_address_book(default_source?: Source | null): void
    set_default_calendar(default_source?: Source | null): void
    set_default_for_extension_name(extension_name: string, default_source?: Source | null): void
    set_default_mail_account(default_source?: Source | null): void
    set_default_mail_identity(default_source?: Source | null): void
    set_default_memo_list(default_source?: Source | null): void
    set_default_task_list(default_source?: Source | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of EDataServer-1.2.EDataServer.SourceRegistry */
    vfunc_credentials_required(source: Source, reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error: GLib.Error): void
    vfunc_source_added(source: Source): void
    vfunc_source_changed(source: Source): void
    vfunc_source_disabled(source: Source): void
    vfunc_source_enabled(source: Source): void
    vfunc_source_removed(source: Source): void
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of EDataServer-1.2.EDataServer.SourceRegistry */
    connect(sigName: "credentials-required", callback: (($obj: SourceRegistry, source: Source, reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error: GLib.Error) => void)): number
    connect_after(sigName: "credentials-required", callback: (($obj: SourceRegistry, source: Source, reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error: GLib.Error) => void)): number
    emit(sigName: "credentials-required", source: Source, reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error: GLib.Error): void
    connect(sigName: "source-added", callback: (($obj: SourceRegistry, source: Source) => void)): number
    connect_after(sigName: "source-added", callback: (($obj: SourceRegistry, source: Source) => void)): number
    emit(sigName: "source-added", source: Source): void
    connect(sigName: "source-changed", callback: (($obj: SourceRegistry, source: Source) => void)): number
    connect_after(sigName: "source-changed", callback: (($obj: SourceRegistry, source: Source) => void)): number
    emit(sigName: "source-changed", source: Source): void
    connect(sigName: "source-disabled", callback: (($obj: SourceRegistry, source: Source) => void)): number
    connect_after(sigName: "source-disabled", callback: (($obj: SourceRegistry, source: Source) => void)): number
    emit(sigName: "source-disabled", source: Source): void
    connect(sigName: "source-enabled", callback: (($obj: SourceRegistry, source: Source) => void)): number
    connect_after(sigName: "source-enabled", callback: (($obj: SourceRegistry, source: Source) => void)): number
    emit(sigName: "source-enabled", source: Source): void
    connect(sigName: "source-removed", callback: (($obj: SourceRegistry, source: Source) => void)): number
    connect_after(sigName: "source-removed", callback: (($obj: SourceRegistry, source: Source) => void)): number
    emit(sigName: "source-removed", source: Source): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-address-book", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-address-book", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-calendar", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-calendar", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-mail-account", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-mail-account", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-mail-identity", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-mail-identity", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-memo-list", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-memo-list", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-task-list", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-task-list", callback: (($obj: SourceRegistry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceRegistry_ConstructProps)
    _init (config?: SourceRegistry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(result: Gio.AsyncResult): SourceRegistry
    static new_sync(cancellable?: Gio.Cancellable | null): SourceRegistry
    static debug_enabled(): boolean
    static free_display_tree(display_tree: GLib.Node): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface SourceRegistryWatcher_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceRegistryWatcher */
    extension_name?: string
    registry?: SourceRegistry
}
class SourceRegistryWatcher {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceRegistryWatcher */
    get_extension_name(): string | null
    get_registry(): SourceRegistry
    reclaim(): void
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
    /* Virtual methods of EDataServer-1.2.EDataServer.SourceRegistryWatcher */
    vfunc_appeared(source: Source): void
    vfunc_disappeared(source: Source): void
    vfunc_filter(source: Source): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of EDataServer-1.2.EDataServer.SourceRegistryWatcher */
    connect(sigName: "appeared", callback: (($obj: SourceRegistryWatcher, source: Source) => void)): number
    connect_after(sigName: "appeared", callback: (($obj: SourceRegistryWatcher, source: Source) => void)): number
    emit(sigName: "appeared", source: Source): void
    connect(sigName: "disappeared", callback: (($obj: SourceRegistryWatcher, source: Source) => void)): number
    connect_after(sigName: "disappeared", callback: (($obj: SourceRegistryWatcher, source: Source) => void)): number
    emit(sigName: "disappeared", source: Source): void
    connect(sigName: "filter", callback: (($obj: SourceRegistryWatcher, source: Source) => boolean)): number
    connect_after(sigName: "filter", callback: (($obj: SourceRegistryWatcher, source: Source) => boolean)): number
    emit(sigName: "filter", source: Source): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SourceRegistryWatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceRegistryWatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceRegistryWatcher_ConstructProps)
    _init (config?: SourceRegistryWatcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(registry: SourceRegistry, extension_name?: string | null): SourceRegistryWatcher
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceResource */
    dup_identity(): string | null
    get_identity(): string | null
    set_identity(identity?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::identity", callback: (($obj: SourceResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: SourceResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceRevisionGuards */
    get_enabled(): boolean
    set_enabled(enabled: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceRevisionGuards, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceRevisionGuards, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enabled", callback: (($obj: SourceRevisionGuards, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: SourceRevisionGuards, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceRevisionGuards_ConstructProps)
    _init (config?: SourceRevisionGuards_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceSMIME_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceSMIME */
    encrypt_by_default?: boolean
    encrypt_to_self?: boolean
    encryption_certificate?: string
    sign_by_default?: boolean
    signing_algorithm?: string
    signing_certificate?: string
}
class SourceSMIME {
    /* Properties of EDataServer-1.2.EDataServer.SourceSMIME */
    encrypt_by_default: boolean
    encrypt_to_self: boolean
    encryption_certificate: string
    sign_by_default: boolean
    signing_algorithm: string
    signing_certificate: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSMIME */
    dup_encryption_certificate(): string | null
    dup_signing_algorithm(): string | null
    dup_signing_certificate(): string | null
    get_encrypt_by_default(): boolean
    get_encrypt_to_self(): boolean
    get_encryption_certificate(): string | null
    get_sign_by_default(): boolean
    get_signing_algorithm(): string | null
    get_signing_certificate(): string | null
    set_encrypt_by_default(encrypt_by_default: boolean): void
    set_encrypt_to_self(encrypt_to_self: boolean): void
    set_encryption_certificate(encryption_certificate?: string | null): void
    set_sign_by_default(sign_by_default: boolean): void
    set_signing_algorithm(signing_algorithm?: string | null): void
    set_signing_certificate(signing_certificate?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::encrypt-by-default", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypt-by-default", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encrypt-to-self", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encrypt-to-self", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::encryption-certificate", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encryption-certificate", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sign-by-default", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sign-by-default", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signing-algorithm", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signing-algorithm", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::signing-certificate", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signing-certificate", callback: (($obj: SourceSMIME, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSecurity */
    dup_method(): string
    get_method(): string
    get_secure(): boolean
    set_method(method?: string | null): void
    set_secure(secure: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceSecurity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::method", callback: (($obj: SourceSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SourceSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secure", callback: (($obj: SourceSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure", callback: (($obj: SourceSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSelectable */
    dup_color(): string | null
    get_color(): string | null
    get_order(): number
    get_selected(): boolean
    set_color(color?: string | null): void
    set_order(order: number): void
    set_selected(selected: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::color", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceSelectable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    backend_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceSelectable */
    dup_color(): string | null
    get_color(): string | null
    get_order(): number
    get_selected(): boolean
    set_color(color?: string | null): void
    set_order(order: number): void
    set_selected(selected: boolean): void
    /* Methods of EDataServer-1.2.EDataServer.SourceBackend */
    dup_backend_name(): string | null
    get_backend_name(): string | null
    set_backend_name(backend_name?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::color", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::backend-name", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend-name", callback: (($obj: SourceTaskList, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceTaskList_ConstructProps)
    _init (config?: SourceTaskList_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceUoa_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceUoa */
    account_id?: number
}
class SourceUoa {
    /* Properties of EDataServer-1.2.EDataServer.SourceUoa */
    account_id: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceUoa */
    get_account_id(): number
    set_account_id(account_id: number): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceUoa, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceUoa, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::account-id", callback: (($obj: SourceUoa, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account-id", callback: (($obj: SourceUoa, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceWeather */
    dup_location(): string
    get_location(): string
    get_units(): SourceWeatherUnits
    set_location(location: string): void
    set_units(units: SourceWeatherUnits): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceWeather, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceWeather, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::location", callback: (($obj: SourceWeather, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: SourceWeather, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::units", callback: (($obj: SourceWeather, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::units", callback: (($obj: SourceWeather, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceWeather_ConstructProps)
    _init (config?: SourceWeather_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceWebDAVNotes_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes */
    default_ext?: string
}
class SourceWebDAVNotes {
    /* Properties of EDataServer-1.2.EDataServer.SourceWebDAVNotes */
    default_ext: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceWebDAVNotes */
    dup_default_ext(): string | null
    get_default_ext(): string | null
    set_default_ext(default_ext?: string | null): void
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceWebDAVNotes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceWebDAVNotes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-ext", callback: (($obj: SourceWebDAVNotes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-ext", callback: (($obj: SourceWebDAVNotes, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SourceWebDAVNotes_ConstructProps)
    _init (config?: SourceWebDAVNotes_ConstructProps): void
    static $gtype: GObject.Type
}
interface SourceWebdav_ConstructProps extends SourceExtension_ConstructProps {
    /* Constructor properties of EDataServer-1.2.EDataServer.SourceWebdav */
    avoid_ifmatch?: boolean
    calendar_auto_schedule?: boolean
    color?: string
    display_name?: string
    email_address?: string
    order?: number
    resource_path?: string
    resource_query?: string
    soup_uri?: Soup.URI
    ssl_trust?: string
}
class SourceWebdav {
    /* Properties of EDataServer-1.2.EDataServer.SourceWebdav */
    avoid_ifmatch: boolean
    calendar_auto_schedule: boolean
    color: string
    display_name: string
    email_address: string
    order: number
    resource_path: string
    resource_query: string
    soup_uri: Soup.URI
    ssl_trust: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.SourceWebdav */
    dup_color(): string | null
    dup_display_name(): string | null
    dup_email_address(): string | null
    dup_resource_path(): string | null
    dup_resource_query(): string | null
    dup_soup_uri(): Soup.URI
    dup_ssl_trust(): string | null
    get_avoid_ifmatch(): boolean
    get_calendar_auto_schedule(): boolean
    get_color(): string | null
    get_display_name(): string | null
    get_email_address(): string | null
    get_order(): number
    get_resource_path(): string | null
    get_resource_query(): string | null
    get_ssl_trust(): string | null
    get_ssl_trust_response(): TrustPromptResponse
    set_avoid_ifmatch(avoid_ifmatch: boolean): void
    set_calendar_auto_schedule(calendar_auto_schedule: boolean): void
    set_color(color?: string | null): void
    set_display_name(display_name?: string | null): void
    set_email_address(email_address?: string | null): void
    set_order(order: number): void
    set_resource_path(resource_path?: string | null): void
    set_resource_query(resource_query?: string | null): void
    set_soup_uri(soup_uri: Soup.URI): void
    set_ssl_trust(ssl_trust?: string | null): void
    set_ssl_trust_response(response: TrustPromptResponse): void
    unset_temporary_ssl_trust(): void
    update_ssl_trust(host: string, cert: Gio.TlsCertificate, response: TrustPromptResponse): void
    verify_ssl_trust(host: string, cert: Gio.TlsCertificate, cert_errors: Gio.TlsCertificateFlags): TrustPromptResponse
    /* Methods of EDataServer-1.2.EDataServer.SourceExtension */
    get_source(): Source
    property_lock(): void
    property_unlock(): void
    ref_source(): Source
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
    connect(sigName: "notify", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::avoid-ifmatch", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avoid-ifmatch", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::calendar-auto-schedule", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-auto-schedule", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::email-address", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::order", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-path", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-path", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-query", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-query", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::soup-uri", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::soup-uri", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-trust", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-trust", callback: (($obj: SourceWebdav, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    accept_language: string
    accept_language_auto: boolean
    http_aliases: string[]
    https_aliases: string[]
    idle_timeout: number
    max_conns: number
    max_conns_per_host: number
    proxy_resolver: Gio.ProxyResolver
    proxy_uri: Soup.URI
    ssl_ca_file: string
    ssl_strict: boolean
    ssl_use_system_ca_file: boolean
    timeout: number
    tls_database: Gio.TlsDatabase
    tls_interaction: Gio.TlsInteraction
    use_ntlm: boolean
    use_thread_context: boolean
    user_agent: string
    /* Fields of Soup-2.4.Soup.Session */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.WebDAVSession */
    acl_sync(uri: string | null, xml: XmlDocument, cancellable?: Gio.Cancellable | null): boolean
    copy_sync(source_uri: string, destination_uri: string, depth: string, can_overwrite: boolean, cancellable?: Gio.Cancellable | null): boolean
    delete_sync(uri: string, depth?: string | null, etag?: string | null, cancellable?: Gio.Cancellable | null): boolean
    ensure_full_uri(request_uri: Soup.URI | null, href: string): string
    get_acl_restrictions_sync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_restrictions */ number, /* out_principal_kind */ WebDAVACEPrincipalKind, /* out_principal_hrefs */ string[] ]
    get_acl_sync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_entries */ WebDAVAccessControlEntry[] ]
    get_current_user_privilege_set_sync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_privileges */ WebDAVPrivilege[] ]
    get_data_sync(uri: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_href */ string | null, /* out_etag */ string | null, /* out_bytes */ string, /* out_length */ number | null ]
    get_last_dav_error_code(): string
    get_last_dav_error_is_permission(): boolean
    get_principal_collection_set_sync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_principal_hrefs */ string[] ]
    get_supported_privilege_set_sync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_privileges */ GLib.Node ]
    get_sync(uri: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_href */ string | null, /* out_etag */ string | null, /* out_stream */ Gio.OutputStream ]
    getctag_sync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_ctag */ string ]
    list_sync(uri: string | null, depth: string, flags: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_resources */ WebDAVResource[] ]
    lock_resource_sync(uri: string | null, lock_scope: WebDAVLockScope, lock_timeout: number, owner?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_lock_token */ string ]
    lock_sync(uri: string | null, depth: string, lock_timeout: number, xml: XmlDocument, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_lock_token */ string, /* out_xml_response */ libxml2.Doc | null ]
    mkcalendar_sync(uri: string, display_name: string | null, description: string | null, color: string | null, supports: number, cancellable?: Gio.Cancellable | null): boolean
    mkcol_addressbook_sync(uri: string, display_name?: string | null, description?: string | null, cancellable?: Gio.Cancellable | null): boolean
    mkcol_sync(uri: string, cancellable?: Gio.Cancellable | null): boolean
    move_sync(source_uri: string, destination_uri: string, can_overwrite: boolean, cancellable?: Gio.Cancellable | null): boolean
    new_request(method: string, uri?: string | null): Soup.RequestHTTP
    options_sync(uri?: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_capabilities */ GLib.HashTable, /* out_allows */ GLib.HashTable ]
    post_sync(uri: string | null, data: string, data_length: number, out_content_type?: string | null, out_content?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    post_with_content_type_sync(uri: string | null, data: string, data_length: number, in_content_type?: string | null, out_content_type?: string | null, out_content?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    principal_property_search_sync(uri: string | null, apply_to_principal_collection_set: boolean, match_ns_uri: string | null, match_property: string, match_value: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_principals */ WebDAVResource[] ]
    propfind_sync(uri: string | null, depth: string, xml?: XmlDocument | null, cancellable?: Gio.Cancellable | null): boolean
    proppatch_sync(uri: string | null, xml: XmlDocument, cancellable?: Gio.Cancellable | null): boolean
    put_data_sync(uri: string, etag: string | null, content_type: string, bytes: string, length: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_href */ string | null, /* out_etag */ string | null ]
    put_sync(uri: string, etag: string | null, content_type: string, stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_href */ string | null, /* out_etag */ string | null ]
    refresh_lock_sync(uri: string | null, lock_token: string, lock_timeout: number, cancellable?: Gio.Cancellable | null): boolean
    replace_with_detailed_error(request: Soup.RequestHTTP, response_data: Uint8Array | null, ignore_multistatus: boolean, prefix?: string | null): boolean
    report_sync(uri: string | null, depth: string | null, xml: XmlDocument, out_content_type?: string | null, out_content?: Uint8Array | null, cancellable?: Gio.Cancellable | null): boolean
    set_acl_sync(uri: string | null, entries: WebDAVAccessControlEntry[], cancellable?: Gio.Cancellable | null): boolean
    traverse_mkcalendar_response(message: Soup.Message | null, xml_data: Uint8Array): boolean
    traverse_mkcol_response(message: Soup.Message | null, xml_data: Uint8Array): boolean
    traverse_multistatus_response(message: Soup.Message | null, xml_data: Uint8Array): boolean
    unlock_sync(uri: string | null, lock_token: string, cancellable?: Gio.Cancellable | null): boolean
    update_properties_sync(uri: string | null, changes: WebDAVPropertyChange[], cancellable?: Gio.Cancellable | null): boolean
    /* Methods of EDataServer-1.2.EDataServer.SoupSession */
    check_result(request: Soup.RequestHTTP, read_bytes: object | null, bytes_length: number): boolean
    dup_credentials(): NamedParameters | null
    get_authentication_requires_credentials(): boolean
    get_log_level(): Soup.LoggerLogLevel
    get_source(): Source
    get_ssl_error_details(): [ /* returnType */ boolean, /* out_certificate_pem */ string, /* out_certificate_errors */ Gio.TlsCertificateFlags ]
    new_request(method: string, uri_string: string): Soup.RequestHTTP
    new_request_uri(method: string, uri: Soup.URI): Soup.RequestHTTP
    send_request_simple_sync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Uint8Array
    send_request_sync(request: Soup.RequestHTTP, cancellable?: Gio.Cancellable | null): Gio.InputStream
    set_credentials(credentials?: NamedParameters | null): void
    setup_logging(logging_level?: string | null): void
    /* Methods of Soup-2.4.Soup.Session */
    abort(): void
    add_feature(feature: Soup.SessionFeature): void
    add_feature_by_type(feature_type: GObject.Type): void
    cancel_message(msg: Soup.Message, status_code: number): void
    connect_async(uri: Soup.URI, cancellable?: Gio.Cancellable | null, progress_callback?: Soup.SessionConnectProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): Gio.IOStream
    get_async_context(): GLib.MainContext | null
    get_feature(feature_type: GObject.Type): Soup.SessionFeature | null
    get_feature_for_message(feature_type: GObject.Type, msg: Soup.Message): Soup.SessionFeature | null
    get_features(feature_type: GObject.Type): Soup.SessionFeature[]
    has_feature(feature_type: GObject.Type): boolean
    pause_message(msg: Soup.Message): void
    prefetch_dns(hostname: string, cancellable?: Gio.Cancellable | null, callback?: Soup.AddressCallback | null): void
    prepare_for_uri(uri: Soup.URI): void
    queue_message(msg: Soup.Message, callback?: Soup.SessionCallback | null): void
    redirect_message(msg: Soup.Message): boolean
    remove_feature(feature: Soup.SessionFeature): void
    remove_feature_by_type(feature_type: GObject.Type): void
    request(uri_string: string): Soup.Request
    request_http(method: string, uri_string: string): Soup.RequestHTTP
    request_http_uri(method: string, uri: Soup.URI): Soup.RequestHTTP
    request_uri(uri: Soup.URI): Soup.Request
    requeue_message(msg: Soup.Message): void
    send(msg: Soup.Message, cancellable?: Gio.Cancellable | null): Gio.InputStream
    send_async(msg: Soup.Message, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_finish(result: Gio.AsyncResult): Gio.InputStream
    send_message(msg: Soup.Message): number
    steal_connection(msg: Soup.Message): Gio.IOStream
    unpause_message(msg: Soup.Message): void
    websocket_connect_async(msg: Soup.Message, origin?: string | null, protocols?: string[] | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    websocket_connect_finish(result: Gio.AsyncResult): Soup.WebsocketConnection
    would_redirect(msg: Soup.Message): boolean
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
    /* Virtual methods of Soup-2.4.Soup.Session */
    vfunc_auth_required(msg: Soup.Message, auth: Soup.Auth, retrying: boolean): void
    vfunc_authenticate(msg: Soup.Message, auth: Soup.Auth, retrying: boolean): void
    vfunc_cancel_message(msg: Soup.Message, status_code: number): void
    vfunc_flush_queue(): void
    vfunc_kick(): void
    vfunc_queue_message(msg: Soup.Message, callback?: Soup.SessionCallback | null): void
    vfunc_request_started(msg: Soup.Message, socket: Soup.Socket): void
    vfunc_requeue_message(msg: Soup.Message): void
    vfunc_send_message(msg: Soup.Message): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Soup-2.4.Soup.Session */
    connect(sigName: "authenticate", callback: (($obj: WebDAVSession, msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void)): number
    connect_after(sigName: "authenticate", callback: (($obj: WebDAVSession, msg: Soup.Message, auth: Soup.Auth, retrying: boolean) => void)): number
    emit(sigName: "authenticate", msg: Soup.Message, auth: Soup.Auth, retrying: boolean): void
    connect(sigName: "connection-created", callback: (($obj: WebDAVSession, connection: GObject.Object) => void)): number
    connect_after(sigName: "connection-created", callback: (($obj: WebDAVSession, connection: GObject.Object) => void)): number
    emit(sigName: "connection-created", connection: GObject.Object): void
    connect(sigName: "request-queued", callback: (($obj: WebDAVSession, msg: Soup.Message) => void)): number
    connect_after(sigName: "request-queued", callback: (($obj: WebDAVSession, msg: Soup.Message) => void)): number
    emit(sigName: "request-queued", msg: Soup.Message): void
    connect(sigName: "request-started", callback: (($obj: WebDAVSession, msg: Soup.Message, socket: Soup.Socket) => void)): number
    connect_after(sigName: "request-started", callback: (($obj: WebDAVSession, msg: Soup.Message, socket: Soup.Socket) => void)): number
    emit(sigName: "request-started", msg: Soup.Message, socket: Soup.Socket): void
    connect(sigName: "request-unqueued", callback: (($obj: WebDAVSession, msg: Soup.Message) => void)): number
    connect_after(sigName: "request-unqueued", callback: (($obj: WebDAVSession, msg: Soup.Message) => void)): number
    emit(sigName: "request-unqueued", msg: Soup.Message): void
    connect(sigName: "tunneling", callback: (($obj: WebDAVSession, connection: GObject.Object) => void)): number
    connect_after(sigName: "tunneling", callback: (($obj: WebDAVSession, connection: GObject.Object) => void)): number
    emit(sigName: "tunneling", connection: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::credentials", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credentials", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accept-language-auto", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-language-auto", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-aliases", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-aliases", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::https-aliases", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::https-aliases", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::idle-timeout", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-conns-per-host", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-conns-per-host", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-uri", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-uri", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-ca-file", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-ca-file", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-strict", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-strict", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssl-use-system-ca-file", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-database", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-database", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-interaction", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-interaction", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-ntlm", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-ntlm", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-thread-context", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-thread-context", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: WebDAVSession, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebDAVSession_ConstructProps)
    _init (config?: WebDAVSession_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Source): WebDAVSession
    /* Function overloads */
    static new(source: Source): WebDAVSession
    static new(): WebDAVSession
    static util_free_privileges(privileges?: GLib.Node | null): void
    static util_item_href_equal(href1: string, href2: string): boolean
    static util_maybe_dequote(text?: string | null): [ /* returnType */ string, /* text */ string | null ]
    static $gtype: GObject.Type
}
interface XmlDocument_ConstructProps extends GObject.Object_ConstructProps {
}
class XmlDocument {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of EDataServer-1.2.EDataServer.XmlDocument */
    add_attribute(ns_href: string | null, name: string, value: string): void
    add_attribute_double(ns_href: string | null, name: string, value: number): void
    add_attribute_int(ns_href: string | null, name: string, value: number): void
    add_attribute_time(ns_href: string | null, name: string, value: number): void
    add_attribute_time_ical(ns_href: string | null, name: string, value: number): void
    add_empty_element(ns_href: string | null, name: string): void
    end_element(): void
    get_content(): [ /* returnType */ string, /* out_length */ number | null ]
    get_xmldoc(): libxml2.Doc
    start_element(ns_href: string | null, name: string): void
    start_text_element(ns_href: string | null, name: string): void
    write_base64(value: string, len: number): void
    write_buffer(value: string, len: number): void
    write_double(value: number): void
    write_int(value: number): void
    write_string(value: string): void
    write_time(value: number): void
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
    connect(sigName: "notify", callback: (($obj: XmlDocument, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XmlDocument, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XmlDocument_ConstructProps)
    _init (config?: XmlDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ns_href: string | null, root_element: string): XmlDocument
    static $gtype: GObject.Type
}
class AsyncClosure {
    static name: string
}
abstract class ClientClass {
    /* Fields of EDataServer-1.2.EDataServer.ClientClass */
    readonly unwrap_dbus_error: (client: Client, dbus_error: GLib.Error) => void
    readonly retrieve_capabilities: (client: Client, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly retrieve_capabilities_finish: (client: Client, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* capabilities */ string ]
    readonly retrieve_capabilities_sync: (client: Client, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* capabilities */ string ]
    readonly get_backend_property: (client: Client, prop_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly get_backend_property_finish: (client: Client, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* prop_value */ string ]
    readonly get_backend_property_sync: (client: Client, prop_name: string, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* prop_value */ string ]
    readonly set_backend_property: (client: Client, prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly set_backend_property_finish: (client: Client, result: Gio.AsyncResult) => boolean
    readonly set_backend_property_sync: (client: Client, prop_name: string, prop_value: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly open: (client: Client, only_if_exists: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly open_finish: (client: Client, result: Gio.AsyncResult) => boolean
    readonly open_sync: (client: Client, only_if_exists: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly remove: (client: Client, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly remove_finish: (client: Client, result: Gio.AsyncResult) => boolean
    readonly remove_sync: (client: Client, cancellable?: Gio.Cancellable | null) => boolean
    readonly refresh: (client: Client, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly refresh_finish: (client: Client, result: Gio.AsyncResult) => boolean
    readonly refresh_sync: (client: Client, cancellable?: Gio.Cancellable | null) => boolean
    readonly retrieve_properties_sync: (client: Client, cancellable?: Gio.Cancellable | null) => boolean
    readonly opened: (client: Client, error: GLib.Error) => void
    readonly backend_error: (client: Client, error_msg: string) => void
    readonly backend_died: (client: Client) => void
    readonly backend_property_changed: (client: Client, prop_name: string, prop_value: string) => void
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
    collate(str_a?: string | null, str_b?: string | null): [ /* returnType */ boolean, /* result */ number ]
    generate_key(str: string): string
    generate_key_for_index(index: number): string
    get_index(str: string): number
    get_index_labels(): [ /* returnType */ string[], /* n_labels */ number, /* underflow */ number | null, /* inflow */ number | null, /* overflow */ number | null ]
    ref(): Collator
    unref(): void
    static name: string
    static new(locale: string): Collator
    constructor(locale: string)
    /* Static methods and pseudo-constructors */
    static new(locale: string): Collator
    static new_interpret_country(locale: string): Collator
    static error_quark(): GLib.Quark
}
abstract class ExtensibleInterface {
    /* Fields of EDataServer-1.2.EDataServer.ExtensibleInterface */
    readonly parent_interface: GObject.TypeInterface
    static name: string
}
abstract class ExtensionClass {
    /* Fields of EDataServer-1.2.EDataServer.ExtensionClass */
    readonly parent_class: GObject.ObjectClass
    readonly extensible_type: GObject.Type
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
    readonly build_sexp: FreeFormExpBuildSexpFunc
    static name: string
}
abstract class GDataOAuth2AuthorizerClass {
    /* Fields of EDataServer-1.2.EDataServer.GDataOAuth2AuthorizerClass */
    readonly parent_class: GObject.ObjectClass
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
    readonly parent_class: GObject.TypeModuleClass
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
    get_name(index: number): string | null
    new_clone(): NamedParameters
    set(name: string, value?: string | null): void
    test(name: string, value: string, case_sensitively: boolean): boolean
    to_string(): string | null
    to_strv(): string[]
    static name: string
    static new(): NamedParameters
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NamedParameters
    static new_string(str: string): NamedParameters
    static new_strv(strv: string): NamedParameters
}
abstract class NetworkMonitorClass {
    /* Fields of EDataServer-1.2.EDataServer.NetworkMonitorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class NetworkMonitorPrivate {
    static name: string
}
abstract class OAuth2ServiceBaseClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceBaseClass */
    readonly parent_class: ExtensionClass
    static name: string
}
abstract class OAuth2ServiceGoogleClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceGoogleClass */
    readonly parent_class: OAuth2ServiceBaseClass
    static name: string
}
abstract class OAuth2ServiceInterface {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceInterface */
    readonly parent_interface: GObject.TypeInterface
    readonly can_process: (service: OAuth2Service, source: Source) => boolean
    readonly guess_can_process: (service: OAuth2Service, protocol?: string | null, hostname?: string | null) => boolean
    readonly get_flags: (service: OAuth2Service) => number
    readonly get_name: (service: OAuth2Service) => string
    readonly get_display_name: (service: OAuth2Service) => string
    readonly get_client_id: (service: OAuth2Service, source: Source) => string
    readonly get_client_secret: (service: OAuth2Service, source: Source) => string | null
    readonly get_authentication_uri: (service: OAuth2Service, source: Source) => string
    readonly get_refresh_uri: (service: OAuth2Service, source: Source) => string
    readonly get_redirect_uri: (service: OAuth2Service, source: Source) => string | null
    readonly prepare_authentication_uri_query: (service: OAuth2Service, source: Source, uri_query: GLib.HashTable) => void
    readonly get_authentication_policy: (service: OAuth2Service, source: Source, uri: string) => OAuth2ServiceNavigationPolicy
    readonly extract_authorization_code: (service: OAuth2Service, source: Source, page_title: string, page_uri: string, page_content?: string | null) => [ /* returnType */ boolean, /* out_authorization_code */ string ]
    readonly prepare_get_token_form: (service: OAuth2Service, source: Source, authorization_code: string, form: GLib.HashTable) => void
    readonly prepare_get_token_message: (service: OAuth2Service, source: Source, message: Soup.Message) => void
    readonly prepare_refresh_token_form: (service: OAuth2Service, source: Source, refresh_token: string, form: GLib.HashTable) => void
    readonly prepare_refresh_token_message: (service: OAuth2Service, source: Source, message: Soup.Message) => void
    readonly reserved: object[]
    static name: string
}
abstract class OAuth2ServiceOutlookClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceOutlookClass */
    readonly parent_class: OAuth2ServiceBaseClass
    static name: string
}
abstract class OAuth2ServiceYahooClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServiceYahooClass */
    readonly parent_class: OAuth2ServiceBaseClass
    static name: string
}
abstract class OAuth2ServicesClass {
    /* Fields of EDataServer-1.2.EDataServer.OAuth2ServicesClass */
    readonly parent_class: GObject.ObjectClass
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
    release_opid(opid: number): void
    reserve_opid(): number
    static name: string
}
abstract class SoupAuthBearerClass {
    /* Fields of EDataServer-1.2.EDataServer.SoupAuthBearerClass */
    readonly parent_class: Soup.AuthClass
    static name: string
}
class SoupAuthBearerPrivate {
    static name: string
}
abstract class SoupSessionClass {
    /* Fields of EDataServer-1.2.EDataServer.SoupSessionClass */
    readonly parent_class: Soup.SessionClass
    readonly reserved: object[]
    static name: string
}
class SoupSessionPrivate {
    static name: string
}
abstract class SourceAddressBookClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAddressBookClass */
    readonly parent_class: SourceBackendClass
    static name: string
}
class SourceAddressBookPrivate {
    static name: string
}
abstract class SourceAlarmsClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAlarmsClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceAlarmsPrivate {
    static name: string
}
abstract class SourceAuthenticationClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAuthenticationClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceAuthenticationPrivate {
    static name: string
}
abstract class SourceAutocompleteClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAutocompleteClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceAutocompletePrivate {
    static name: string
}
abstract class SourceAutoconfigClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceAutoconfigClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceAutoconfigPrivate {
    static name: string
}
abstract class SourceBackendClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceBackendClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceBackendPrivate {
    static name: string
}
abstract class SourceCalendarClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCalendarClass */
    readonly parent_class: SourceSelectableClass
    static name: string
}
class SourceCalendarPrivate {
    static name: string
}
abstract class SourceCamelClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCamelClass */
    readonly parent_class: SourceExtensionClass
    readonly settings_type: GObject.Type
    static name: string
}
class SourceCamelPrivate {
    static name: string
}
abstract class SourceClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceClass */
    readonly parent_class: GObject.ObjectClass
    readonly changed: (source: Source) => void
    readonly credentials_required: (source: Source, reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error: GLib.Error) => void
    readonly authenticate: (source: Source, credentials: NamedParameters) => void
    readonly remove_sync: (source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly remove: (source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly remove_finish: (source: Source, result: Gio.AsyncResult) => boolean
    readonly write_sync: (source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly write: (source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly write_finish: (source: Source, result: Gio.AsyncResult) => boolean
    readonly remote_create_sync: (source: Source, scratch_source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly remote_create: (source: Source, scratch_source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly remote_create_finish: (source: Source, result: Gio.AsyncResult) => boolean
    readonly remote_delete_sync: (source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly remote_delete: (source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly remote_delete_finish: (source: Source, result: Gio.AsyncResult) => boolean
    readonly get_oauth2_access_token_sync: (source: Source, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    readonly get_oauth2_access_token: (source: Source, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly get_oauth2_access_token_finish: (source: Source, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    readonly invoke_credentials_required_impl: (source: Source, dbus_source: object | null, arg_reason: string, arg_certificate_pem: string, arg_certificate_errors: string, arg_dbus_error_name: string, arg_dbus_error_message: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly invoke_authenticate_impl: (source: Source, dbus_source: object | null, arg_credentials: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly unset_last_credentials_required_arguments_impl: (source: Source, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
abstract class SourceCollectionClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCollectionClass */
    readonly parent_class: SourceBackendClass
    static name: string
}
class SourceCollectionPrivate {
    static name: string
}
abstract class SourceContactsClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceContactsClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceContactsPrivate {
    static name: string
}
abstract class SourceCredentialsProviderClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderClass */
    readonly parent_class: GObject.ObjectClass
    readonly ref_source: (provider: SourceCredentialsProvider, uid: string) => Source
    static name: string
}
abstract class SourceCredentialsProviderImplClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplClass */
    readonly parent_class: ExtensionClass
    readonly can_process: (provider_impl: SourceCredentialsProviderImpl, source: Source) => boolean
    readonly can_store: (provider_impl: SourceCredentialsProviderImpl) => boolean
    readonly can_prompt: (provider_impl: SourceCredentialsProviderImpl) => boolean
    readonly lookup_sync: (provider_impl: SourceCredentialsProviderImpl, source: Source, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_credentials */ NamedParameters ]
    readonly store_sync: (provider_impl: SourceCredentialsProviderImpl, source: Source, credentials: NamedParameters, permanently: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly delete_sync: (provider_impl: SourceCredentialsProviderImpl, source: Source, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
abstract class SourceCredentialsProviderImplOAuth2Class {
    /* Fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplOAuth2Class */
    readonly parent_class: SourceCredentialsProviderImplClass
    static name: string
}
class SourceCredentialsProviderImplOAuth2Private {
    static name: string
}
abstract class SourceCredentialsProviderImplPasswordClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceCredentialsProviderImplPasswordClass */
    readonly parent_class: SourceCredentialsProviderImplClass
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
    readonly parent_class: GObject.ObjectClass
    readonly name: string
    static name: string
}
class SourceExtensionPrivate {
    static name: string
}
abstract class SourceGoaClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceGoaClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceGoaPrivate {
    static name: string
}
abstract class SourceLDAPClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceLDAPClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceLDAPPrivate {
    static name: string
}
abstract class SourceLocalClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceLocalClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceLocalPrivate {
    static name: string
}
abstract class SourceMDNClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMDNClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceMDNPrivate {
    static name: string
}
abstract class SourceMailAccountClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailAccountClass */
    readonly parent_class: SourceBackendClass
    static name: string
}
class SourceMailAccountPrivate {
    static name: string
}
abstract class SourceMailCompositionClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailCompositionClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceMailCompositionPrivate {
    static name: string
}
abstract class SourceMailIdentityClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailIdentityClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceMailIdentityPrivate {
    static name: string
}
abstract class SourceMailSignatureClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailSignatureClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceMailSignaturePrivate {
    static name: string
}
abstract class SourceMailSubmissionClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailSubmissionClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceMailSubmissionPrivate {
    static name: string
}
abstract class SourceMailTransportClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMailTransportClass */
    readonly parent_class: SourceBackendClass
    static name: string
}
class SourceMailTransportPrivate {
    static name: string
}
abstract class SourceMemoListClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceMemoListClass */
    readonly parent_class: SourceSelectableClass
    static name: string
}
class SourceMemoListPrivate {
    static name: string
}
abstract class SourceOfflineClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceOfflineClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceOfflinePrivate {
    static name: string
}
abstract class SourceOpenPGPClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceOpenPGPClass */
    readonly parent_class: SourceExtensionClass
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
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceProxyPrivate {
    static name: string
}
abstract class SourceRefreshClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceRefreshClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceRefreshPrivate {
    static name: string
}
abstract class SourceRegistryClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceRegistryClass */
    readonly parent_class: GObject.ObjectClass
    readonly source_added: (registry: SourceRegistry, source: Source) => void
    readonly source_changed: (registry: SourceRegistry, source: Source) => void
    readonly source_removed: (registry: SourceRegistry, source: Source) => void
    readonly source_enabled: (registry: SourceRegistry, source: Source) => void
    readonly source_disabled: (registry: SourceRegistry, source: Source) => void
    readonly credentials_required: (registry: SourceRegistry, source: Source, reason: SourceCredentialsReason, certificate_pem: string, certificate_errors: Gio.TlsCertificateFlags, op_error: GLib.Error) => void
    static name: string
}
class SourceRegistryPrivate {
    static name: string
}
abstract class SourceRegistryWatcherClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceRegistryWatcherClass */
    readonly parent_class: GObject.ObjectClass
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
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceResourcePrivate {
    static name: string
}
abstract class SourceRevisionGuardsClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceRevisionGuardsClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceRevisionGuardsPrivate {
    static name: string
}
abstract class SourceSMIMEClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceSMIMEClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceSMIMEPrivate {
    static name: string
}
abstract class SourceSecurityClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceSecurityClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceSecurityPrivate {
    static name: string
}
abstract class SourceSelectableClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceSelectableClass */
    readonly parent_class: SourceBackendClass
    static name: string
}
class SourceSelectablePrivate {
    static name: string
}
abstract class SourceTaskListClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceTaskListClass */
    readonly parent_class: SourceSelectableClass
    static name: string
}
class SourceTaskListPrivate {
    static name: string
}
abstract class SourceUoaClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceUoaClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceUoaPrivate {
    static name: string
}
abstract class SourceWeatherClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceWeatherClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceWeatherPrivate {
    static name: string
}
abstract class SourceWebDAVNotesClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceWebDAVNotesClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceWebDAVNotesPrivate {
    static name: string
}
abstract class SourceWebdavClass {
    /* Fields of EDataServer-1.2.EDataServer.SourceWebdavClass */
    readonly parent_class: SourceExtensionClass
    static name: string
}
class SourceWebdavPrivate {
    static name: string
}
class WebDAVAccessControlEntry {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry */
    readonly principal_kind: WebDAVACEPrincipalKind
    readonly principal_href: string
    readonly flags: number
    readonly inherited_href: string
    readonly privileges: object[]
    /* Methods of EDataServer-1.2.EDataServer.WebDAVAccessControlEntry */
    append_privilege(privilege: WebDAVPrivilege): void
    copy(): WebDAVAccessControlEntry
    get_privileges(): WebDAVPrivilege[]
    static name: string
    static new(principal_kind: WebDAVACEPrincipalKind, principal_href: string | null, flags: number, inherited_href?: string | null): WebDAVAccessControlEntry
    constructor(principal_kind: WebDAVACEPrincipalKind, principal_href: string | null, flags: number, inherited_href?: string | null)
    /* Static methods and pseudo-constructors */
    static new(principal_kind: WebDAVACEPrincipalKind, principal_href: string | null, flags: number, inherited_href?: string | null): WebDAVAccessControlEntry
    static free(ptr?: object | null): void
}
class WebDAVDiscoveredSource {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVDiscoveredSource */
    readonly href: string
    readonly supports: number
    readonly display_name: string
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
    readonly ns_uri: string
    readonly name: string
    readonly description: string
    readonly kind: WebDAVPrivilegeKind
    readonly hint: WebDAVPrivilegeHint
    /* Methods of EDataServer-1.2.EDataServer.WebDAVPrivilege */
    copy(): WebDAVPrivilege
    static name: string
    static new(ns_uri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint): WebDAVPrivilege
    constructor(ns_uri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint)
    /* Static methods and pseudo-constructors */
    static new(ns_uri: string | null, name: string | null, description: string | null, kind: WebDAVPrivilegeKind, hint: WebDAVPrivilegeHint): WebDAVPrivilege
    static free(ptr?: object | null): void
}
class WebDAVPropertyChange {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVPropertyChange */
    readonly kind: WebDAVPropertyChangeKind
    readonly ns_uri: string
    readonly name: string
    readonly value: string
    /* Methods of EDataServer-1.2.EDataServer.WebDAVPropertyChange */
    copy(): WebDAVPropertyChange
    static name: string
    /* Static methods and pseudo-constructors */
    static new_remove(ns_uri: string, name: string): WebDAVPropertyChange
    static new_set(ns_uri: string, name: string, value?: string | null): WebDAVPropertyChange
    static free(ptr?: object | null): void
}
class WebDAVResource {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVResource */
    readonly kind: WebDAVResourceKind
    readonly supports: number
    readonly href: string
    readonly etag: string
    readonly display_name: string
    readonly content_type: string
    readonly content_length: number
    readonly creation_date: number
    readonly last_modified: number
    readonly description: string
    readonly color: string
    readonly order: number
    /* Methods of EDataServer-1.2.EDataServer.WebDAVResource */
    copy(): WebDAVResource
    static name: string
    static new(kind: WebDAVResourceKind, supports: number, href: string, etag: string | null, display_name: string | null, content_type: string | null, content_length: number, creation_date: number, last_modified: number, description: string | null, color: string | null, order: number): WebDAVResource
    constructor(kind: WebDAVResourceKind, supports: number, href: string, etag: string | null, display_name: string | null, content_type: string | null, content_length: number, creation_date: number, last_modified: number, description: string | null, color: string | null, order: number)
    /* Static methods and pseudo-constructors */
    static new(kind: WebDAVResourceKind, supports: number, href: string, etag: string | null, display_name: string | null, content_type: string | null, content_length: number, creation_date: number, last_modified: number, description: string | null, color: string | null, order: number): WebDAVResource
    static free(ptr?: object | null): void
}
abstract class WebDAVSessionClass {
    /* Fields of EDataServer-1.2.EDataServer.WebDAVSessionClass */
    readonly parent_class: SoupSessionClass
    readonly reserved: object[]
    static name: string
}
class WebDAVSessionPrivate {
    static name: string
}
abstract class XmlDocumentClass {
    /* Fields of EDataServer-1.2.EDataServer.XmlDocumentClass */
    readonly parent_class: GObject.ObjectClass
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