/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Camel-1.2
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Camel {

enum AuthenticationResult {
    ERROR,
    ACCEPTED,
    REJECTED,
}
enum CertTrust {
    UNKNOWN,
    NEVER,
    MARGINAL,
    FULLY,
    ULTIMATE,
    TEMPORARY,
}
enum CipherHash {
    DEFAULT,
    MD2,
    MD5,
    SHA1,
    SHA256,
    SHA384,
    SHA512,
    RIPEMD160,
    TIGER192,
    HAVAL5160,
}
enum CipherValidityEncrypt {
    NONE,
    WEAK,
    ENCRYPTED,
    STRONG,
}
enum CipherValidityMode {
    SIGN,
    ENCRYPT,
}
enum CipherValiditySign {
    NONE,
    GOOD,
    BAD,
    UNKNOWN,
    NEED_PUBLIC_KEY,
}
enum CompareType {
    INSENSITIVE,
    SENSITIVE,
}
enum DBKnownColumnNames {
    UNKNOWN,
    ATTACHMENT,
    BDATA,
    CINFO,
    DELETED,
    DELETED_COUNT,
    DRECEIVED,
    DSENT,
    FLAGS,
    FOLDER_NAME,
    FOLLOWUP_COMPLETED_ON,
    FOLLOWUP_DUE_BY,
    FOLLOWUP_FLAG,
    IMPORTANT,
    JND_COUNT,
    JUNK,
    JUNK_COUNT,
    LABELS,
    MAIL_CC,
    MAIL_FROM,
    MAIL_TO,
    MLIST,
    NEXTUID,
    PART,
    PREVIEW,
    READ,
    REPLIED,
    SAVED_COUNT,
    SIZE,
    SUBJECT,
    TIME,
    UID,
    UNREAD_COUNT,
    USERHEADERS,
    USERTAGS,
    VERSION,
    VISIBLE_COUNT,
    VUID,
}
enum Error {
    ERROR_GENERIC,
}
enum FetchHeadersType {
    BASIC,
    BASIC_AND_MAILING_LIST,
    ALL,
}
enum FetchType {
    OLD_MESSAGES,
    NEW_MESSAGES,
}
enum FolderError {
    INVALID,
    INVALID_STATE,
    NON_EMPTY,
    NON_UID,
    INSUFFICIENT_PERMISSION,
    INVALID_PATH,
    INVALID_UID,
    SUMMARY_INVALID,
}
enum HTMLParserState {
    DATA,
    ENT,
    ELEMENT,
    TAG,
    DTDENT,
    COMMENT0,
    COMMENT,
    ATTR0,
    ATTR,
    VAL0,
    VAL,
    VAL_ENT,
    EOD,
    EOF,
}
enum HeaderAddressType {
    NONE,
    NAME,
    GROUP,
}
enum JunkStatus {
    ERROR,
    INCONCLUSIVE,
    MESSAGE_IS_JUNK,
    MESSAGE_IS_NOT_JUNK,
}
enum LockType {
    READ,
    WRITE,
}
enum MemPoolFlags {
    STRUCT,
    WORD,
    BYTE,
    MASK,
}
enum MimeFilterBasicType {
    INVALID,
    BASE64_ENC,
    BASE64_DEC,
    QP_ENC,
    QP_DEC,
    UU_ENC,
    UU_DEC,
}
enum MimeFilterCRLFDirection {
    ENCODE,
    DECODE,
}
enum MimeFilterCRLFMode {
    DOTS,
    ONLY,
}
enum MimeFilterGZipMode {
    ZIP,
    UNZIP,
}
enum MimeFilterYencDirection {
    ENCODE,
    DECODE,
}
enum MimeParserState {
    INITIAL,
    PRE_FROM,
    FROM,
    HEADER,
    BODY,
    MULTIPART,
    MESSAGE,
    PART,
    END,
    EOF,
    PRE_FROM_END,
    FROM_END,
    HEADER_END,
    BODY_END,
    MULTIPART_END,
    MESSAGE_END,
}
enum NetworkSecurityMethod {
    NONE,
    SSL_ON_ALTERNATE_PORT,
    STARTTLS_ON_STANDARD_PORT,
}
enum ProviderConfType {
    END,
    SECTION_START,
    SECTION_END,
    CHECKBOX,
    CHECKSPIN,
    ENTRY,
    LABEL,
    HIDDEN,
    OPTIONS,
    PLACEHOLDER,
}
enum ProviderType {
    STORE,
    TRANSPORT,
}
enum SExpResultType {
    ARRAY_PTR,
    INT,
    STRING,
    BOOL,
    TIME,
    UNDEFINED,
}
enum SExpTermType {
    INT,
    BOOL,
    STRING,
    TIME,
    FUNC,
    IFUNC,
    VAR,
}
enum SMIMESign {
    CLEARSIGN,
    ENVELOPED,
}
enum SaslAnonTraceType {
    EMAIL,
    OPAQUE,
    EMPTY,
}
enum ServiceConnectionStatus {
    DISCONNECTED,
    CONNECTING,
    CONNECTED,
    DISCONNECTING,
}
enum ServiceError {
    INVALID,
    URL_INVALID,
    UNAVAILABLE,
    CANT_AUTHENTICATE,
    NOT_CONNECTED,
}
enum SessionAlertType {
    INFO,
    WARNING,
    ERROR,
}
enum SortType {
    ASCENDING,
    DESCENDING,
}
enum StoreError {
    INVALID,
    NO_FOLDER,
}
enum StreamBufferMode {
    BUFFER,
    NONE,
    READ,
    WRITE,
    MODE,
}
enum ThreeState {
    OFF,
    ON,
    INCONSISTENT,
}
enum TimeUnit {
    DAYS,
    WEEKS,
    MONTHS,
    YEARS,
}
enum TransferEncoding {
    ENCODING_DEFAULT,
    ENCODING_7BIT,
    ENCODING_8BIT,
    ENCODING_BASE64,
    ENCODING_QUOTEDPRINTABLE,
    ENCODING_BINARY,
    ENCODING_UUENCODE,
    NUM_ENCODINGS,
}
enum VTrashFolderType {
    TRASH,
    JUNK,
    LAST,
}
enum _search_match_t {
    EXACT,
    CONTAINS,
    WORD,
    STARTS,
    ENDS,
    SOUNDEX,
}
enum _search_t {
    ASIS,
    ENCODED,
    ADDRESS,
    ADDRESS_ENCODED,
    MLIST,
}
enum _search_word_t {
    SIMPLE,
    COMPLEX,
    TODO_8BIT,
}
enum BestencEncoding {
    TODO_7BIT,
    TODO_8BIT,
    BINARY,
    TEXT,
}
enum BestencRequired {
    GET_ENCODING,
    GET_CHARSET,
    LF_IS_CRLF,
    NO_FROM,
}
enum BlockFileFlags {
    BLOCK_FILE_SYNC,
}
enum BlockFlags {
    DIRTY,
    DETACHED,
}
enum FolderFlags {
    HAS_SUMMARY_CAPABILITY,
    FILTER_RECENT,
    HAS_BEEN_DELETED,
    IS_TRASH,
    IS_JUNK,
    FILTER_JUNK,
}
enum FolderInfoFlags {
    NOSELECT,
    NOINFERIORS,
    CHILDREN,
    NOCHILDREN,
    SUBSCRIBED,
    VIRTUAL,
    SYSTEM,
    VTRASH,
    SHARED_TO_ME,
    SHARED_BY_ME,
    TYPE_NORMAL,
    TYPE_INBOX,
    TYPE_OUTBOX,
    TYPE_TRASH,
    TYPE_JUNK,
    TYPE_SENT,
    TYPE_CONTACTS,
    TYPE_EVENTS,
    TYPE_MEMOS,
    TYPE_TASKS,
    TYPE_ALL,
    TYPE_ARCHIVE,
    TYPE_DRAFTS,
    READONLY,
    WRITEONLY,
    FLAGGED,
    FLAGS_LAST,
}
enum FolderSummaryFlags {
    DIRTY,
    IN_MEMORY_ONLY,
}
enum MessageFlags {
    ANSWERED,
    DELETED,
    DRAFT,
    FLAGGED,
    SEEN,
    ATTACHMENTS,
    ANSWERED_ALL,
    JUNK,
    SECURE,
    NOTJUNK,
    FORWARDED,
    FOLDER_FLAGGED,
    JUNK_LEARN,
    USER,
}
enum MimeFilterCanonFlags {
    CRLF,
    FROM,
    STRIP,
}
enum MimeFilterEnrichedFlags {
    NONE,
    IS_RICHTEXT,
}
enum MimeFilterToHTMLFlags {
    PRE,
    CONVERT_NL,
    CONVERT_SPACES,
    CONVERT_URLS,
    MARK_CITATION,
    CONVERT_ADDRESSES,
    ESCAPE_8BIT,
    CITE,
    PRESERVE_8BIT,
    FORMAT_FLOWED,
    QUOTE_CITATION,
    DIV,
    PRESERVE_TABS,
}
enum ParamFlags {
    PARAM_PERSISTENT,
}
enum ProviderFlags {
    IS_REMOTE,
    IS_LOCAL,
    IS_EXTERNAL,
    IS_SOURCE,
    IS_STORAGE,
    SUPPORTS_SSL,
    HAS_LICENSE,
    DISABLE_SENT_FOLDER,
    ALLOW_REAL_TRASH_FOLDER,
    ALLOW_REAL_JUNK_FOLDER,
    SUPPORTS_MOBILE_DEVICES,
    SUPPORTS_BATCH_FETCH,
    SUPPORTS_PURGE_MESSAGE_CACHE,
}
enum ProviderURLFlags {
    ALLOW_USER,
    ALLOW_AUTH,
    ALLOW_PASSWORD,
    ALLOW_HOST,
    ALLOW_PORT,
    ALLOW_PATH,
    NEED_USER,
    NEED_AUTH,
    NEED_PASSWORD,
    NEED_HOST,
    NEED_PORT,
    NEED_PATH,
    NEED_PATH_DIR,
    HIDDEN_USER,
    HIDDEN_AUTH,
    HIDDEN_PASSWORD,
    HIDDEN_HOST,
    HIDDEN_PORT,
    HIDDEN_PATH,
    FRAGMENT_IS_PATH,
    PATH_IS_ABSOLUTE,
}
enum RecipientCertificateFlags {
    SMIME,
    PGP,
}
enum SMIMEDescribe {
    SIGNED,
    ENCRYPTED,
    CERTS,
    CRLS,
}
enum StoreFlags {
    VTRASH,
    VJUNK,
    PROXY,
    IS_MIGRATING,
    REAL_JUNK_FOLDER,
    CAN_EDIT_FOLDERS,
    USE_CACHE_DIR,
    CAN_DELETE_FOLDERS_AT_ONCE,
    SUPPORTS_INITIAL_SETUP,
}
enum StoreGetFolderFlags {
    NONE,
    CREATE,
    EXCL,
    BODY_INDEX,
    PRIVATE,
}
enum StoreGetFolderInfoFlags {
    FAST,
    RECURSIVE,
    SUBSCRIBED,
    NO_VIRTUAL,
    SUBSCRIPTION_LIST,
    REFRESH,
}
enum StoreInfoFlags {
    NOSELECT,
    NOINFERIORS,
    CHILDREN,
    NOCHILDREN,
    SUBSCRIBED,
    VIRTUAL,
    SYSTEM,
    VTRASH,
    SHARED_TO_ME,
    SHARED_BY_ME,
    TYPE_NORMAL,
    TYPE_INBOX,
    TYPE_OUTBOX,
    TYPE_TRASH,
    TYPE_JUNK,
    TYPE_SENT,
    TYPE_CONTACTS,
    TYPE_EVENTS,
    TYPE_MEMOS,
    TYPE_TASKS,
    TYPE_ALL,
    TYPE_ARCHIVE,
    TYPE_DRAFTS,
    READONLY,
    WRITEONLY,
    FLAGGED,
}
enum StorePermissionFlags {
    READ,
    WRITE,
}
enum URLFlags {
    PARAMS,
    AUTH,
}
enum UUDecodeState {
    INIT,
    BEGIN,
    END,
}
enum _search_flags_t {
    START,
    END,
    REGEX,
    ICASE,
    NEWLINE,
}
const AI_CANONNAME: number
const AI_NUMERICHOST: number
const BLOCK_SIZE: number
const BLOCK_SIZE_BITS: number
const CIPHER_CERT_INFO_PROPERTY_PHOTO_FILENAME: string
const CIPHER_CERT_INFO_PROPERTY_SIGNERS_ALT_EMAILS: string
const DB_FILE: string
const DB_FREE_CACHE_SIZE: number
const DB_IN_MEMORY_DB: string
const DB_IN_MEMORY_TABLE: string
const DB_IN_MEMORY_TABLE_LIMIT: number
const DB_SLEEP_INTERVAL: number
const DEBUG_IMAP: string
const DEBUG_IMAP_FOLDER: string
const DOT_LOCK_REFRESH: number
const EAI_ADDRFAMILY: number
const EAI_AGAIN: number
const EAI_BADFLAGS: number
const EAI_FAIL: number
const EAI_FAMILY: number
const EAI_MEMORY: number
const EAI_NODATA: number
const EAI_NONAME: number
const EAI_OVERFLOW: number
const EAI_SERVICE: number
const EAI_SOCKTYPE: number
const EAI_SYSTEM: number
const EDS_CAMEL_PROVIDER_DIR: string
const FOLDER_TYPE_BIT: number
const FOLDER_TYPE_MASK: number
const FOLD_MAX_SIZE: number
const FOLD_SIZE: number
const INDEX_DELETED: number
const KEY_TABLE_MAX_KEY: number
const LOCK_DELAY: number
const LOCK_DOT_DELAY: number
const LOCK_DOT_RETRY: number
const LOCK_DOT_STALE: number
const LOCK_RETRY: number
const MESSAGE_DATE_CURRENT: number
const MESSAGE_SYSTEM_MASK: number
const MIME_YDECODE_STATE_BEGIN: number
const MIME_YDECODE_STATE_DECODE: number
const MIME_YDECODE_STATE_END: number
const MIME_YDECODE_STATE_EOLN: number
const MIME_YDECODE_STATE_ESCAPE: number
const MIME_YDECODE_STATE_INIT: number
const MIME_YDECODE_STATE_PART: number
const MIME_YENCODE_CRC_INIT: number
const MIME_YENCODE_STATE_INIT: number
const NI_DGRAM: number
const NI_NAMEREQD: number
const NI_NOFQDN: number
const NI_NUMERICHOST: number
const NI_NUMERICSERV: number
const O_BINARY: number
const RECIPIENT_TYPE_BCC: string
const RECIPIENT_TYPE_CC: string
const RECIPIENT_TYPE_RESENT_BCC: string
const RECIPIENT_TYPE_RESENT_CC: string
const RECIPIENT_TYPE_RESENT_TO: string
const RECIPIENT_TYPE_TO: string
const SESSION_BOOK_UID_ANY: string
const SESSION_BOOK_UID_COMPLETION: string
const STORE_INFO_FOLDER_TYPE_BIT: number
const STORE_INFO_FOLDER_TYPE_MASK: number
const STORE_INFO_FOLDER_UNKNOWN: number
const STORE_SETUP_ARCHIVE_FOLDER: string
const STORE_SETUP_DRAFTS_FOLDER: string
const STORE_SETUP_SENT_FOLDER: string
const STORE_SETUP_TEMPLATES_FOLDER: string
const UNMATCHED_NAME: string
const URL_HIDE_ALL: number
const URL_PART_AUTH: number
const URL_PART_HIDDEN: number
const URL_PART_HOST: number
const URL_PART_NEED: number
const URL_PART_PASSWORD: number
const URL_PART_PATH: number
const URL_PART_PATH_DIR: number
const URL_PART_PORT: number
const URL_PART_USER: number
const UTILS_MAX_USER_HEADERS: number
const UUDECODE_STATE_MASK: number
const VJUNK_NAME: string
const VTRASH_NAME: string
function binding_bind_property(source: GObject.Object, source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
function binding_bind_property_full(source: GObject.Object, source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
function charset_best(in_: number[]): string | null
function charset_iso_to_windows(isocharset: string): string
function cipher_can_load_photos(): boolean
function cipher_canonical_to_stream(part: MimePart, flags: number, ostream: Stream, cancellable?: Gio.Cancellable | null): number
function cipher_certinfo_get_property(cert_info: CipherCertInfo, name: string): object | null
function cipher_certinfo_set_property(cert_info: CipherCertInfo, name: string, value?: object | null, value_clone?: CipherCloneFunc | null): void
function content_disposition_decode(in_: string): ContentDisposition
function content_transfer_encoding_decode(in_: string): string
function content_type_decode(in_: string): ContentType
function debug(mode: string): boolean
function debug_demangle_backtrace(bt?: GLib.String | null): /* bt */ GLib.String | null
function debug_end(): void
function debug_get_backtrace(): GLib.String
function debug_get_raw_backtrace(): GLib.String
function debug_init(): void
function debug_ref_unref_dump_backtraces(): void
function debug_ref_unref_push_backtrace(backtrace: GLib.String, object_ref_count: number): void
function debug_ref_unref_push_backtrace_for_object(_object?: object | null): void
function debug_start(mode: string): boolean
function enriched_to_html(in_: string, flags: MimeFilterEnrichedFlags): string
function error_quark(): GLib.Quark
function file_util_decode_fixed_int32(in_: object | null, dest: number): number
function file_util_decode_fixed_string(in_: object | null, str: string, len: number): number
function file_util_decode_gsize(in_: object | null, dest: number): number
function file_util_decode_off_t(in_: object | null, dest: number): number
function file_util_decode_string(in_: object | null, str: string): number
function file_util_decode_time_t(in_: object | null, dest: number): number
function file_util_decode_uint32(in_: object | null, dest: number): number
function file_util_encode_fixed_int32(out: object | null, value: number): number
function file_util_encode_fixed_string(out: object | null, str: string, len: number): number
function file_util_encode_gsize(out: object | null, value: number): number
function file_util_encode_off_t(out: object | null, value: number): number
function file_util_encode_string(out: object | null, str: string): number
function file_util_encode_time_t(out: object | null, value: number): number
function file_util_encode_uint32(out: object | null, value: number): number
function file_util_safe_filename(name: string): string
function file_util_savename(filename: string): string
function folder_error_quark(): GLib.Quark
function folder_info_build(folders: FolderInfo[], namespace_: string, separator: number, short_names: boolean): FolderInfo
function freeaddrinfo(host?: object | null): void
function getaddrinfo(name: string, service: string, hints?: object | null, cancellable?: Gio.Cancellable | null): object | null
function header_address_decode(in_: string, charset: string): HeaderAddress
function header_address_fold(in_: string, headerlen: number): string
function header_address_list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void
function header_address_list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
function header_address_list_clear(addrlistp: HeaderAddress[]): void
function header_address_list_encode(addrlist: HeaderAddress[]): string
function header_address_list_format(addrlist: HeaderAddress[]): string
function header_contentid_decode(in_: string): string
function header_decode_date(str: string, tz_offset: number): number
function header_decode_int(in_: string): number
function header_decode_string(in_: string, default_charset: string): string
function header_encode_phrase(in_: number): string
function header_encode_string(in_: number): string
function header_fold(in_: string, headerlen: number): string
function header_format_ctext(in_: string, default_charset: string): string
function header_format_date(date: number, tz_offset: number): string
function header_location_decode(in_: string): string
function header_mailbox_decode(in_: string, charset: string): HeaderAddress
function header_mime_decode(in_: string, maj: number, min: number): void
function header_msgid_decode(in_: string): string
function header_msgid_generate(domain: string): string
function header_newsgroups_decode(in_: string): string[]
function header_param(params: object | null, name: string): string
function header_param_list_decode(in_?: string | null): object | null
function header_param_list_format(params?: object | null): string
function header_param_list_format_append(out: GLib.String, params?: object | null): void
function header_param_list_free(params?: object | null): void
function header_references_decode(in_: string): string[]
function header_set_param(paramsp: object | null, name: string, value: string): object | null
function header_token_decode(in_: string): string
function header_unfold(in_: string): string
function headers_dup_mailing_list(headers: NameValueArray): string | null
function host_idna_to_ascii(host: string): string
function hostname_utils_requires_ascii(hostname: string): boolean
function iconv_charset_language(charset: string): string
function iconv_charset_name(charset: string): string
function iconv_locale_charset(): string
function iconv_locale_language(): string
function init(certdb_dir: string, nss_init: boolean): number
function localtime_with_offset(tt: number, tm: object | null, offset: number): void
function lock_dot(path: string): number
function lock_fcntl(fd: number, type: LockType): number
function lock_flock(fd: number, type: LockType): number
function lock_folder(path: string, fd: number, type: LockType): number
function lock_helper_lock(path: string): number
function lock_helper_unlock(lockid: number): number
function mktime_utc(tm?: object | null): number
function movemail(source: string, dest: string): number
function pointer_tracker_dump(): void
function pointer_tracker_track_with_info(ptr: object | null, info: string): void
function pointer_tracker_untrack(ptr?: object | null): void
function provider_get(protocol: string): Provider
function provider_init(): void
function provider_list(load: boolean): Provider[]
function provider_load(path: string): boolean
function provider_module_init(): void
function pstring_add(string: string, own: boolean): string
function pstring_contains(string: string): boolean
function pstring_dump_stat(): void
function pstring_free(string: string): void
function pstring_peek(string: string): string
function pstring_strdup(string: string): string
function quoted_decode_step(in_: Uint8Array, out: Uint8Array, saveme: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* saveme */ number[] ]
function quoted_encode_close(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
function quoted_encode_step(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
function read(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number
function search_camel_header_soundex(header: string, match: string): boolean
function search_get_all_headers_decoded(message: MimeMessage): string
function search_get_default_charset_from_headers(headers: NameValueArray): string
function search_get_default_charset_from_message(message: MimeMessage): string
function search_get_header_decoded(header_name: string, header_value: string, default_charset?: string | null): string
function search_get_headers_decoded(headers: NameValueArray, default_charset?: string | null): string
function search_header_is_address(header_name: string): boolean
function search_header_match(value: string, match: string, how: _search_match_t, type: _search_t, default_charset: string): boolean
function search_words_free(words?: object | null): void
function search_words_simple(words?: object | null): object | null
function search_words_split(in_: number): object | null
function service_error_quark(): GLib.Quark
function shutdown(): void
function store_error_quark(): GLib.Quark
function store_info_name(summary: StoreSummary, info: StoreInfo): string
function store_info_path(summary: StoreSummary, info: StoreInfo): string
function store_info_set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void
function strcase_equal(a?: object | null, b?: object | null): number
function strcase_hash(v?: object | null): number
function strdown(str: string): string
function string_is_all_ascii(str?: string | null): boolean
function strstrcase(haystack: string, needle: string): string
function system_flag(name: string): MessageFlags
function system_flag_get(flags: MessageFlags, name: string): boolean
function text_to_html(in_: string, flags: MimeFilterToHTMLFlags, color: number): string
function time_value_apply(src_time: number, unit: TimeUnit, value: number): number
function transfer_encoding_from_string(string: string): TransferEncoding
function transfer_encoding_to_string(encoding: TransferEncoding): string
function ucs2_utf8(ptr: string): string
function uid_cache_free_uids(uids: string[]): void
function unlock_dot(path: string): void
function unlock_fcntl(fd: number): void
function unlock_flock(fd: number): void
function unlock_folder(path: string, fd: number): void
function url_addrspec_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_addrspec_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_decode(part: string): void
function url_decode_path(path: string): string
function url_encode(part: string, escape_extra: string): string
function url_file_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_file_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_web_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function url_web_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function ustrstrcase(haystack: string, needle: string): string
function utf7_utf8(ptr: string): string
function utf8_getc(ptr: number): [ /* returnType */ number, /* ptr */ number ]
function utf8_getc_limit(ptr: number, end: number): [ /* returnType */ number, /* ptr */ number ]
function utf8_make_valid(text: string): string
function utf8_make_valid_len(text: string, text_len: number): string
function utf8_putc(ptr: number, c: number): /* ptr */ number
function utf8_ucs2(ptr: string): string
function utf8_utf7(ptr: string): string
function util_bdata_get_number(bdata_ptr: string, default_value: number): number
function util_bdata_get_string(bdata_ptr: string, default_value: string): string
function util_bdata_put_number(bdata_str: GLib.String, value: number): void
function util_bdata_put_string(bdata_str: GLib.String, value: string): void
function util_decode_user_header_setting(setting_value: string): [ /* out_display_name */ string | null, /* out_header_name */ string ]
function util_encode_user_header_setting(display_name: string | null, header_name: string): string
function util_fill_message_info_user_headers(info: MessageInfo, headers: NameValueArray): boolean
function util_get_directory_variants(main_path: string, replace_prefix: string, with_modules_dir: boolean): string[]
function utils_sanitize_ascii_domain_in_address(email_address: string, do_format: boolean): string | null
function utils_sanitize_ascii_domain_in_url(url: URL): boolean
function utils_sanitize_ascii_domain_in_url_str(url_str: string): string | null
function uudecode_step(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
function uuencode_close(in_: Uint8Array, out: Uint8Array, uubuf: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* uubuf */ Uint8Array, /* save */ number[] ]
function uuencode_step(in_: Uint8Array, out: Uint8Array, uubuf: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* uubuf */ Uint8Array, /* save */ number[] ]
function write(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number
function ydecode_step(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
function yencode_close(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
function yencode_step(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
interface CipherCloneFunc {
    (value?: object | null): object | null
}
interface CopyFunc {
    (object?: object | null): object | null
}
interface DBCollate {
    (enc: object | null, length1: number, data1: object | null, length2: number, data2?: object | null): number
}
interface DBSelectCB {
    (colvalues: string[], colnames: string[]): number
}
interface DataCacheRemoveFunc {
    (cdc: DataCache, filename: string): boolean
}
interface FilterPlaySoundFunc {
    (driver: FilterDriver, filename: string): void
}
interface FilterShellFunc {
    (driver: FilterDriver, argc: number, argv: string): void
}
interface FilterStatusFunc {
    (driver: FilterDriver, status: object | null, pc: number, desc: string): void
}
interface FilterSystemBeepFunc {
    (driver: FilterDriver): void
}
interface ForeachInfoData {
    (mi_data: VeeMessageInfoData, subfolder: Folder): void
}
interface ForeachPartFunc {
    (message: MimeMessage, part: MimePart, parent_part?: MimePart | null): boolean
}
interface IndexNorm {
    (index: Index, word: string): string
}
interface MessageContentInfoTraverseCallback {
    (ci: MessageContentInfo, depth: number): boolean
}
interface ProviderAutoDetectFunc {
    (url: URL): number
}
interface SessionCallback {
    (session: Session, cancellable?: Gio.Cancellable | null): void
}
interface TextIndexFunc {
    (idx: TextIndex, word: string, buffer: string): void
}
interface UrlScanFunc {
    (in_: string, pos: string, inend: string, match: UrlMatch): boolean
}
class JunkFilter {
    /* Methods of Camel-1.2.Camel.JunkFilter */
    classify(message: MimeMessage, cancellable?: Gio.Cancellable | null): JunkStatus
    learn_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    learn_not_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    synchronize(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.JunkFilter */
    vfunc_classify(message: MimeMessage, cancellable?: Gio.Cancellable | null): JunkStatus
    vfunc_learn_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    vfunc_learn_not_junk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize(cancellable?: Gio.Cancellable | null): boolean
    static name: string
}
interface NetworkService_ConstructProps extends Service_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.NetworkService */
    connectable?: Gio.SocketConnectable
}
class NetworkService {
    /* Properties of Camel-1.2.Camel.NetworkService */
    connectable: Gio.SocketConnectable
    readonly host_reachable: boolean
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Service */
    readonly parent: Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NetworkService */
    can_reach(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    can_reach_finish(result: Gio.AsyncResult): boolean
    can_reach_sync(cancellable?: Gio.Cancellable | null): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): Gio.IOStream
    get_default_port(method: NetworkSecurityMethod): number
    get_host_reachable(): boolean
    get_service_name(method: NetworkSecurityMethod): string
    ref_connectable(): Gio.SocketConnectable
    set_connectable(connectable: Gio.SocketConnectable): void
    starttls(base_stream: Gio.IOStream): Gio.IOStream
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.NetworkService */
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): Gio.IOStream
    /* Function overloads */
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_default_port(method: NetworkSecurityMethod): number
    vfunc_get_service_name(method: NetworkSecurityMethod): string
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connectable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connectable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host-reachable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-reachable", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-status", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: NetworkService, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkService_ConstructProps)
    _init (config?: NetworkService_ConstructProps): void
    static $gtype: GObject.Type
}
interface NetworkSettings_ConstructProps extends Settings_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.NetworkSettings */
    auth_mechanism?: string
    host?: string
    port?: number
    security_method?: NetworkSecurityMethod
    user?: string
}
class NetworkSettings {
    /* Properties of Camel-1.2.Camel.NetworkSettings */
    auth_mechanism: string
    host: string
    port: number
    security_method: NetworkSecurityMethod
    user: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NetworkSettings */
    dup_auth_mechanism(): string
    dup_host(): string
    dup_host_ensure_ascii(): string
    dup_user(): string
    get_auth_mechanism(): string
    get_host(): string
    get_port(): number
    get_security_method(): NetworkSecurityMethod
    get_user(): string
    set_auth_mechanism(auth_mechanism: string): void
    set_host(host: string): void
    set_port(port: number): void
    set_security_method(method: NetworkSecurityMethod): void
    set_user(user: string): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-mechanism", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-mechanism", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security-method", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-method", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: NetworkSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetworkSettings_ConstructProps)
    _init (config?: NetworkSettings_ConstructProps): void
    static $gtype: GObject.Type
}
interface Subscribable_ConstructProps extends Store_ConstructProps {
}
class Subscribable {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Store */
    readonly parent: Service
    readonly priv: StorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Subscribable */
    folder_is_subscribed(folder_name: string): boolean
    folder_subscribed(folder_info: FolderInfo): void
    folder_unsubscribed(folder_info: FolderInfo): void
    subscribe_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    subscribe_folder_finish(result: Gio.AsyncResult): boolean
    subscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    unsubscribe_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unsubscribe_folder_finish(result: Gio.AsyncResult): boolean
    unsubscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Store */
    can_refresh_folder(info: FolderInfo): boolean
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    delete_cached_folder(folder_name: string): void
    delete_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_folder_finish(result: Gio.AsyncResult): boolean
    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    dup_opened_folders(): Folder[]
    folder_created(folder_info: FolderInfo): void
    folder_deleted(folder_info: FolderInfo): void
    folder_info_stale(): void
    folder_opened(folder: Folder): void
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_finish(result: Gio.AsyncResult): Folder | null
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
    get_inbox_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_junk_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_permissions(): number
    get_trash_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    initial_setup(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    maybe_run_db_maintenance(): boolean
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rename_folder_finish(result: Gio.AsyncResult): boolean
    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    set_flags(flags: number): void
    set_permissions(permissions: number): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Subscribable */
    vfunc_folder_is_subscribed(folder_name: string): boolean
    vfunc_folder_subscribed(folder_info: FolderInfo): void
    vfunc_folder_unsubscribed(folder_info: FolderInfo): void
    vfunc_subscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_unsubscribe_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Store */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_folder_created(folder_info: FolderInfo): void
    vfunc_folder_deleted(folder_info: FolderInfo): void
    vfunc_folder_info_stale(): void
    vfunc_folder_opened(folder: Folder): void
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    vfunc_get_can_auto_save_changes(): boolean
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Subscribable */
    connect(sigName: "folder-subscribed", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-subscribed", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    emit(sigName: "folder-subscribed", object: FolderInfo): void
    connect(sigName: "folder-unsubscribed", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-unsubscribed", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    emit(sigName: "folder-unsubscribed", object: FolderInfo): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-created", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-deleted", callback: (($obj: Subscribable, object: FolderInfo) => void)): number
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (($obj: Subscribable) => void)): number
    connect_after(sigName: "folder-info-stale", callback: (($obj: Subscribable) => void)): number
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: (($obj: Subscribable, object: Folder) => void)): number
    connect_after(sigName: "folder-opened", callback: (($obj: Subscribable, object: Folder) => void)): number
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: (($obj: Subscribable, object: string, p0: FolderInfo) => void)): number
    connect_after(sigName: "folder-renamed", callback: (($obj: Subscribable, object: string, p0: FolderInfo) => void)): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Subscribable, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Subscribable_ConstructProps)
    _init (config?: Subscribable_ConstructProps): void
    static $gtype: GObject.Type
}
interface Address_ConstructProps extends GObject.Object_ConstructProps {
}
class Address {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Address */
    cat(source: Address): number
    copy(source: Address): number
    decode(raw: string): number
    encode(): string
    format(): string
    length(): number
    new_clone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    /* Virtual methods of Camel-1.2.Camel.Address */
    vfunc_cat(source: Address): number
    vfunc_decode(raw: string): number
    vfunc_encode(): string
    vfunc_format(): string
    vfunc_length(): number
    vfunc_remove(index: number): void
    vfunc_unformat(raw: string): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Address, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Address_ConstructProps)
    _init (config?: Address_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Address
    static $gtype: GObject.Type
}
interface BlockFile_ConstructProps extends GObject.Object_ConstructProps {
}
class BlockFile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.BlockFile */
    attach_block(bl: Block): void
    delete(): number
    detach_block(bl: Block): void
    free_block(id: _block_t): number
    get_cache_limit(): number
    get_root(): BlockRoot
    get_root_block(): Block
    rename(path: string): number
    set_cache_limit(block_cache_limit: number): void
    sync(): number
    sync_block(bl: Block): number
    touch_block(bl: Block): void
    unref_block(bl: Block): void
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
    /* Virtual methods of Camel-1.2.Camel.BlockFile */
    vfunc_init_root(): number
    vfunc_validate_root(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BlockFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BlockFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BlockFile_ConstructProps)
    _init (config?: BlockFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: number, version: string, block_size: number): BlockFile
    static $gtype: GObject.Type
}
interface CertDB_ConstructProps extends GObject.Object_ConstructProps {
}
class CertDB {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.CertDB */
    clear(): void
    get_host(hostname: string, fingerprint: string): Cert | null
    list_certs(): Cert[]
    load(): number
    put(cert: Cert): void
    remove_host(hostname: string, fingerprint: string): void
    save(): number
    set_default(): void
    set_filename(filename: string): void
    touch(): void
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
    /* Virtual methods of Camel-1.2.Camel.CertDB */
    vfunc_cert_load(istream?: object | null): Cert
    vfunc_cert_save(cert: Cert, ostream?: object | null): number
    vfunc_header_load(istream?: object | null): number
    vfunc_header_save(ostream?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CertDB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertDB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CertDB_ConstructProps)
    _init (config?: CertDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CertDB
    static get_default(): CertDB
    static $gtype: GObject.Type
}
interface CipherContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.CipherContext */
    session?: Session
}
class CipherContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decrypt_finish(result: Gio.AsyncResult): CipherValidity
    decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encrypt_finish(result: Gio.AsyncResult): boolean
    encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    get_session(): Session
    hash_to_id(hash: CipherHash): string
    id_to_hash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sign_finish(result: Gio.AsyncResult): boolean
    sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_finish(result: Gio.AsyncResult): CipherValidity
    verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    /* Virtual methods of Camel-1.2.Camel.CipherContext */
    vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    vfunc_encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash_to_id(hash: CipherHash): string
    vfunc_id_to_hash(id: string): CipherHash
    vfunc_sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CipherContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CipherContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CipherContext_ConstructProps)
    _init (config?: CipherContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session): CipherContext
    static $gtype: GObject.Type
}
interface DB_ConstructProps extends GObject.Object_ConstructProps {
}
class DB {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DB */
    abort_transaction(): number
    add_to_transaction(query: string): number
    begin_transaction(): number
    clear_folder_summary(folder_name: string): number
    command(stmt: string): number
    count_deleted_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_junk_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_junk_not_deleted_message_info(table_name: string, count: number): number
    count_message_info(query: string): [ /* returnType */ number, /* count */ number ]
    count_total_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_unread_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_visible_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    count_visible_unread_message_info(table_name: string): [ /* returnType */ number, /* count */ number ]
    create_folders_table(): number
    delete_folder(folder_name: string): number
    delete_uid(folder_name: string, uid: string): number
    delete_uids(folder_name: string, uids: string[]): number
    end_transaction(): number
    flush_in_memory_transactions(folder_name: string): number
    get_filename(): string
    get_folder_deleted_uids(folder_name: string): string[] | null
    get_folder_junk_uids(folder_name: string): string[] | null
    get_folder_uids(folder_name: string, sort_by: string | null, collate: string | null, hash: GLib.HashTable): number
    maybe_run_maintenance(): boolean
    prepare_message_info_table(folder_name: string): number
    read_folder_info_record(folder_name: string): [ /* returnType */ number, /* record */ FIRecord ]
    read_message_info_record_with_uid(folder_name: string, uid: string, callback: DBSelectCB): number
    read_message_info_records(folder_name: string, callback: DBSelectCB): number
    rename_folder(old_folder_name: string, new_folder_name: string): number
    reset_folder_version(folder_name: string, reset_version: number): number
    select(stmt: string, callback: DBSelectCB): number
    set_collate(col: string, collate: string, func: DBCollate): number
    start_in_memory_transactions(): number
    transaction_command(qry_list: string[]): number
    write_folder_info_record(record: FIRecord): number
    write_message_info_record(folder_name: string, record: MIRecord): number
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
    connect(sigName: "notify", callback: (($obj: DB, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DB, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DB_ConstructProps)
    _init (config?: DB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): DB
    static camel_mir_free(record?: MIRecord | null): void
    static free_sqlized_string(string?: string | null): void
    static get_column_ident(hash: GLib.HashTable, index: number, col_names: string[]): [ /* returnType */ DBKnownColumnNames, /* hash */ GLib.HashTable ]
    static get_column_name(raw_name: string): string | null
    static release_cache_memory(): void
    static sqlize_string(string: string): string
    static $gtype: GObject.Type
}
interface DataCache_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.DataCache */
    expire_enabled?: boolean
    path?: string
}
class DataCache {
    /* Properties of Camel-1.2.Camel.DataCache */
    expire_enabled: boolean
    path: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DataCache */
    add(path: string, key: string): Gio.IOStream
    clear(path: string): void
    foreach_remove(path: string, func: DataCacheRemoveFunc): void
    get(path: string, key: string): Gio.IOStream
    get_expire_enabled(): boolean
    get_filename(path: string, key: string): string
    get_path(): string
    remove(path: string, key: string): number
    set_expire_access(when: number): void
    set_expire_age(when: number): void
    set_expire_enabled(expire_enabled: boolean): void
    set_path(path: string): void
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
    connect(sigName: "notify", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::expire-enabled", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expire-enabled", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DataCache, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataCache_ConstructProps)
    _init (config?: DataCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string): DataCache
    static $gtype: GObject.Type
}
interface DataWrapper_ConstructProps extends GObject.Object_ConstructProps {
}
class DataWrapper {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataWrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataWrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataWrapper_ConstructProps)
    _init (config?: DataWrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DataWrapper
    static $gtype: GObject.Type
}
interface FilterDriver_ConstructProps extends GObject.Object_ConstructProps {
}
class FilterDriver {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterDriver */
    add_rule(name: string, match: string, action: string): void
    filter_folder(folder: Folder, cache: UIDCache, uids: string[], remove: boolean, cancellable?: Gio.Cancellable | null): number
    filter_mbox(mbox: string, original_source_url?: string | null, cancellable?: Gio.Cancellable | null): number
    filter_message(message: MimeMessage, info: MessageInfo, uid: string, source: Folder, store_uid: string, original_store_uid: string, cancellable?: Gio.Cancellable | null): number
    flush(): void
    remove_rule_by_name(name: string): boolean
    set_default_folder(def?: Folder | null): void
    set_logfile(logfile?: object | null): void
    set_play_sound_func(func: FilterPlaySoundFunc): void
    set_shell_func(func: FilterShellFunc): void
    set_status_func(func: FilterStatusFunc): void
    set_system_beep_func(func: FilterSystemBeepFunc): void
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
    connect(sigName: "notify", callback: (($obj: FilterDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterDriver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterDriver_ConstructProps)
    _init (config?: FilterDriver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session): FilterDriver
    static $gtype: GObject.Type
}
interface FilterInputStream_ConstructProps extends Gio.FilterInputStream_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.FilterInputStream */
    filter?: MimeFilter
}
class FilterInputStream {
    /* Properties of Gio-2.0.Gio.FilterInputStream */
    close_base_stream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly parent_instance: Gio.InputStream
    readonly base_stream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterInputStream */
    get_filter(): MimeFilter
    /* Methods of Gio-2.0.Gio.FilterInputStream */
    get_base_stream(): Gio.InputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio-2.0.Gio.InputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    read(cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* buffer */ Uint8Array ]
    read_all(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* buffer */ Uint8Array, /* bytes_read */ number ]
    read_all_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    read_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_read */ number ]
    read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array
    read_bytes(count: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
    read_bytes_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    read_bytes_finish(result: Gio.AsyncResult): GLib.Bytes
    read_finish(result: Gio.AsyncResult): number
    set_pending(): boolean
    skip(count: number, cancellable?: Gio.Cancellable | null): number
    skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    skip_finish(result: Gio.AsyncResult): number
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
    /* Virtual methods of Gio-2.0.Gio.InputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_read_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): /* buffer */ Uint8Array | null
    vfunc_read_finish(result: Gio.AsyncResult): number
    vfunc_read_fn(buffer: object | null, count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip(count: number, cancellable?: Gio.Cancellable | null): number
    vfunc_skip_async(count: number, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_skip_finish(result: Gio.AsyncResult): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::close-base-stream", callback: (($obj: FilterInputStream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterInputStream_ConstructProps)
    _init (config?: FilterInputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.InputStream, filter: MimeFilter): FilterInputStream
    static $gtype: GObject.Type
}
interface FilterOutputStream_ConstructProps extends Gio.FilterOutputStream_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.FilterOutputStream */
    filter?: MimeFilter
}
class FilterOutputStream {
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    readonly parent_instance: Gio.OutputStream
    readonly base_stream: Gio.OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterOutputStream */
    get_filter(): MimeFilter
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    get_base_stream(): Gio.OutputStream
    get_close_base_stream(): boolean
    set_close_base_stream(close_base: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    splice_finish(result: Gio.AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): number
    write_all(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes_finish(result: Gio.AsyncResult): number
    write_finish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Virtual methods of Gio-2.0.Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_flush_finish(result: Gio.AsyncResult): boolean
    vfunc_splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    vfunc_splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_splice_finish(result: Gio.AsyncResult): number
    vfunc_write_async(buffer: Uint8Array | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_write_finish(result: Gio.AsyncResult): number
    vfunc_write_fn(buffer: Uint8Array | null, cancellable?: Gio.Cancellable | null): number
    vfunc_writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOutputStream_ConstructProps)
    _init (config?: FilterOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.OutputStream, filter: MimeFilter): FilterOutputStream
    static $gtype: GObject.Type
}
interface Folder_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Folder */
    description?: string
    display_name?: string
    full_name?: string
    mark_seen?: ThreeState
    mark_seen_timeout?: number
    parent_store?: Store
}
class Folder {
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    display_name: string
    full_name: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Folder */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmp_uids(uid1: string, uid2: string): number
    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dup_description(): string
    dup_display_name(): string
    dup_full_name(): string
    expunge(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expunge_finish(result: Gio.AsyncResult): boolean
    expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    free_deep(array: string[]): void
    free_shallow(array: string[]): void
    free_summary(array: MessageInfo[]): void
    free_uids(array: string[]): void
    freeze(): void
    get_deleted_message_count(): number
    get_description(): string
    get_display_name(): string
    get_filename(uid: string): string
    get_flags(): number
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    get_message_info(uid: string): MessageInfo
    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
    get_quota_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    get_summary(): string[]
    get_uids(): string[]
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    has_summary_capability(): boolean
    is_frozen(): boolean
    lock(): void
    prepare_content_refresh(): void
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    refresh_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_info_finish(result: Gio.AsyncResult): boolean
    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    rename(new_name: string): void
    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    search_free(result: string[]): void
    set_description(description: string): void
    set_display_name(display_name: string): void
    set_flags(folder_flags: number): void
    set_full_name(full_name: string): void
    set_lock_async(skip_folder_lock: boolean): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    sort_uids(uids: string[]): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    take_folder_summary(summary: FolderSummary): void
    thaw(): void
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Folder */
    vfunc_append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    vfunc_changed(changes: FolderChangeInfo): void
    vfunc_cmp_uids(uid1: string, uid2: string): number
    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_free_summary(array: MessageInfo[]): void
    vfunc_free_uids(array: string[]): void
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    vfunc_get_message_info(uid: string): MessageInfo
    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    vfunc_get_summary(): string[]
    vfunc_get_uids(): string[]
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    vfunc_prepare_content_refresh(): void
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_free(result: string[]): void
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    vfunc_sort_uids(uids: string[]): void
    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_thaw(): void
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: (($obj: Folder, changes: FolderChangeInfo) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Folder, changes: FolderChangeInfo) => void)): number
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (($obj: Folder) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: Folder) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: (($obj: Folder, old_name: string) => void)): number
    connect_after(sigName: "renamed", callback: (($obj: Folder, old_name: string) => void)): number
    emit(sigName: "renamed", old_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::description", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Folder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Folder_ConstructProps)
    _init (config?: Folder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static threaded_messages_dump(c: FolderThreadNode): number
    static $gtype: GObject.Type
}
interface FolderSearch_ConstructProps extends GObject.Object_ConstructProps {
}
class FolderSearch {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FolderSearch */
    count(expr: string, cancellable?: Gio.Cancellable | null): number
    free_result(result?: string[] | null): void
    get_current_message_info(): MessageInfo | null
    get_current_summary(): string[]
    get_folder(): Folder
    get_only_cached_messages(): boolean
    get_summary(): string[]
    get_summary_empty(): boolean
    search(expr: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    set_body_index(body_index?: Index | null): void
    set_current_message_info(info?: MessageInfo | null): void
    set_folder(folder: Folder): void
    set_only_cached_messages(only_cached_messages: boolean): void
    set_summary(summary: string[]): void
    take_current_message_info(info?: MessageInfo | null): void
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
    connect(sigName: "notify", callback: (($obj: FolderSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FolderSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FolderSearch_ConstructProps)
    _init (config?: FolderSearch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FolderSearch
    static util_add_months(t: number, months: number): number
    static util_compare_date(datetime1: number, datetime2: number): number
    static util_hash_message_id(message_id: string, needs_decode: boolean): number
    static util_make_time(argc: number, argv: SExpResult): number
    static $gtype: GObject.Type
}
interface FolderSummary_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.FolderSummary */
    folder?: Folder
}
class FolderSummary {
    /* Properties of Camel-1.2.Camel.FolderSummary */
    readonly deleted_count: number
    readonly junk_count: number
    readonly junk_not_deleted_count: number
    readonly saved_count: number
    readonly unread_count: number
    readonly visible_count: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FolderSummary */
    add(info: MessageInfo, force_keep_uid: boolean): void
    check_uid(uid: string): boolean
    clear(): boolean
    count(): number
    get(uid: string): MessageInfo | null
    get_array(): string[]
    get_changed(): string[]
    get_deleted_count(): number
    get_flags(): number
    get_folder(): object | null
    get_hash(): GLib.HashTable
    get_index(): Index
    get_info_flags(uid: string): number
    get_junk_count(): number
    get_junk_not_deleted_count(): number
    get_next_uid(): number
    get_saved_count(): number
    get_timestamp(): number
    get_unread_count(): number
    get_version(): number
    get_visible_count(): number
    header_load(store: object | null, folder_name: string): boolean
    header_save(): boolean
    info_new_from_headers(headers: NameValueArray): MessageInfo
    info_new_from_message(message: MimeMessage): MessageInfo
    info_new_from_parser(parser: MimeParser): MessageInfo
    load(): boolean
    lock(): void
    next_uid(): number
    next_uid_string(): string
    peek_loaded(uid: string): MessageInfo | null
    prepare_fetch_all(): void
    remove(info: MessageInfo): boolean
    remove_uid(uid: string): boolean
    remove_uids(uids: string[]): boolean
    replace_flags(info: MessageInfo): boolean
    save(): boolean
    set_flags(flags: number): void
    set_index(index: Index): void
    set_next_uid(uid: number): void
    set_timestamp(timestamp: number): void
    set_version(version: number): void
    touch(): void
    unlock(): void
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
    /* Virtual methods of Camel-1.2.Camel.FolderSummary */
    vfunc_message_info_from_uid(uid: string): MessageInfo | null
    vfunc_message_info_new_from_headers(headers: NameValueArray): MessageInfo
    vfunc_message_info_new_from_message(message: MimeMessage): MessageInfo
    vfunc_message_info_new_from_parser(parser: MimeParser): MessageInfo
    vfunc_next_uid_string(): string
    vfunc_prepare_fetch_all(): void
    vfunc_summary_header_load(fir?: object | null): boolean
    vfunc_summary_header_save(): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.FolderSummary */
    connect(sigName: "changed", callback: (($obj: FolderSummary) => void)): number
    connect_after(sigName: "changed", callback: (($obj: FolderSummary) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::junk-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::junk-not-deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-not-deleted-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::saved-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::saved-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unread-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unread-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-count", callback: (($obj: FolderSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FolderSummary_ConstructProps)
    _init (config?: FolderSummary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(folder: Folder): FolderSummary
    static free_array(array: string[]): void
    static $gtype: GObject.Type
}
interface GpgContext_ConstructProps extends CipherContext_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.GpgContext */
    always_trust?: boolean
    prefer_inline?: boolean
}
class GpgContext {
    /* Properties of Camel-1.2.Camel.GpgContext */
    always_trust: boolean
    prefer_inline: boolean
    /* Fields of Camel-1.2.Camel.CipherContext */
    readonly parent: GObject.Object
    readonly priv: CipherContextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.GpgContext */
    get_always_trust(): boolean
    get_prefer_inline(): boolean
    set_always_trust(always_trust: boolean): void
    set_prefer_inline(prefer_inline: boolean): void
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decrypt_finish(result: Gio.AsyncResult): CipherValidity
    decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encrypt_finish(result: Gio.AsyncResult): boolean
    encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    get_session(): Session
    hash_to_id(hash: CipherHash): string
    id_to_hash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sign_finish(result: Gio.AsyncResult): boolean
    sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_finish(result: Gio.AsyncResult): CipherValidity
    verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    /* Virtual methods of Camel-1.2.Camel.CipherContext */
    vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    vfunc_encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash_to_id(hash: CipherHash): string
    vfunc_id_to_hash(id: string): CipherHash
    vfunc_sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-trust", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-trust", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::prefer-inline", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefer-inline", callback: (($obj: GpgContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GpgContext_ConstructProps)
    _init (config?: GpgContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session): GpgContext
    /* Function overloads */
    static new(session: Session): GpgContext
    static $gtype: GObject.Type
}
interface HTMLParser_ConstructProps extends GObject.Object_ConstructProps {
}
class HTMLParser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.HTMLParser */
    attr(name: string): string
    attr_list(values?: string[] | null): [ /* returnType */ string[], /* values */ string[] | null ]
    left(lenp: number): string
    set_data(start: string, len: number, last: number): void
    step(datap: string, lenp: number): HTMLParserState
    tag(): string
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
    connect(sigName: "notify", callback: (($obj: HTMLParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HTMLParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HTMLParser_ConstructProps)
    _init (config?: HTMLParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HTMLParser
    static $gtype: GObject.Type
}
interface Index_ConstructProps extends GObject.Object_ConstructProps {
}
class Index {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Index */
    add_name(name: string): IndexName | null
    compress(): number
    construct(path: string, flags: number): void
    delete(): number
    delete_name(name: string): void
    find(word: string): IndexCursor | null
    find_name(name: string): IndexCursor | null
    has_name(name: string): number
    rename(path: string): number
    set_normalize(func: IndexNorm): void
    sync(): number
    words(): IndexCursor | null
    write_name(idn: IndexName): number
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
    /* Virtual methods of Camel-1.2.Camel.Index */
    vfunc_add_name(name: string): IndexName | null
    vfunc_compress(): number
    vfunc_delete_(): number
    vfunc_delete_name(name: string): void
    vfunc_find(word: string): IndexCursor | null
    vfunc_find_name(name: string): IndexCursor | null
    vfunc_has_name(name: string): number
    vfunc_rename(path: string): number
    vfunc_sync(): number
    vfunc_words(): IndexCursor | null
    vfunc_write_name(idn: IndexName): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    static $gtype: GObject.Type
}
interface IndexCursor_ConstructProps extends GObject.Object_ConstructProps {
}
class IndexCursor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    /* Virtual methods of Camel-1.2.Camel.IndexCursor */
    vfunc_next(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndexCursor_ConstructProps)
    _init (config?: IndexCursor_ConstructProps): void
    static $gtype: GObject.Type
}
interface IndexName_ConstructProps extends GObject.Object_ConstructProps {
}
class IndexName {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexName */
    add_buffer(buffer: string, len: number): number
    add_word(word: string): void
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
    /* Virtual methods of Camel-1.2.Camel.IndexName */
    vfunc_add_buffer(buffer: string, len: number): number
    vfunc_add_word(word: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndexName_ConstructProps)
    _init (config?: IndexName_ConstructProps): void
    static $gtype: GObject.Type
}
interface InternetAddress_ConstructProps extends Address_ConstructProps {
}
class InternetAddress {
    /* Fields of Camel-1.2.Camel.Address */
    readonly parent: GObject.Object
    readonly priv: AddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.InternetAddress */
    add(name: string, address: string): number
    ensure_ascii_domains(): void
    find_address(address: string): [ /* returnType */ number, /* namep */ string | null ]
    find_name(name: string): [ /* returnType */ number, /* addressp */ string | null ]
    get(index: number): [ /* returnType */ boolean, /* namep */ string | null, /* addressp */ string | null ]
    sanitize_ascii_domain(): boolean
    /* Methods of Camel-1.2.Camel.Address */
    cat(source: Address): number
    copy(source: Address): number
    decode(raw: string): number
    encode(): string
    format(): string
    length(): number
    new_clone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    /* Virtual methods of Camel-1.2.Camel.Address */
    vfunc_cat(source: Address): number
    vfunc_decode(raw: string): number
    vfunc_encode(): string
    vfunc_format(): string
    vfunc_length(): number
    vfunc_remove(index: number): void
    vfunc_unformat(raw: string): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternetAddress_ConstructProps)
    _init (config?: InternetAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternetAddress
    /* Function overloads */
    static new(): InternetAddress
    static encode_address(len: number, name: string, addr: string): string
    static format_address(name: string, addr: string): string
    static $gtype: GObject.Type
}
interface KeyFile_ConstructProps extends GObject.Object_ConstructProps {
}
class KeyFile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.KeyFile */
    delete(): number
    read(start: _block_t, records?: _key_t[] | null): number
    rename(path: string): number
    write(parent: _block_t, records: _key_t[]): number
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
    connect(sigName: "notify", callback: (($obj: KeyFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyFile_ConstructProps)
    _init (config?: KeyFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: number, version: string): KeyFile
    static $gtype: GObject.Type
}
interface KeyTable_ConstructProps extends GObject.Object_ConstructProps {
}
class KeyTable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.KeyTable */
    add(key: string, data: _block_t, flags: number): _key_t
    lookup(keyid: _key_t, key: string, flags: number): _block_t
    next(next: _key_t, keyp: string, flagsp: number, datap: _block_t): _key_t
    set_data(keyid: _key_t, data: _block_t): boolean
    set_flags(keyid: _key_t, flags: number, set: number): boolean
    sync(): number
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
    connect(sigName: "notify", callback: (($obj: KeyTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: KeyTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: KeyTable_ConstructProps)
    _init (config?: KeyTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bs: BlockFile, root: _block_t): KeyTable
    static $gtype: GObject.Type
}
interface LocalSettings_ConstructProps extends StoreSettings_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.LocalSettings */
    filter_all?: boolean
    filter_junk?: boolean
    maildir_alt_flag_sep?: boolean
    path?: string
}
class LocalSettings {
    /* Properties of Camel-1.2.Camel.LocalSettings */
    filter_all: boolean
    filter_junk: boolean
    maildir_alt_flag_sep: boolean
    path: string
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filter_inbox: boolean
    store_changes_interval: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.LocalSettings */
    dup_path(): string
    get_filter_all(): boolean
    get_filter_junk(): boolean
    get_maildir_alt_flag_sep(): boolean
    get_path(): string
    set_filter_all(filter_all: boolean): void
    set_filter_junk(filter_junk: boolean): void
    set_maildir_alt_flag_sep(maildir_alt_flag_sep: boolean): void
    set_path(path: string): void
    /* Methods of Camel-1.2.Camel.StoreSettings */
    get_filter_inbox(): boolean
    get_store_changes_interval(): number
    set_filter_inbox(filter_inbox: boolean): void
    set_store_changes_interval(interval: number): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-all", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-all", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-junk", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-junk", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::maildir-alt-flag-sep", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maildir-alt-flag-sep", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-inbox", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store-changes-interval", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: LocalSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LocalSettings_ConstructProps)
    _init (config?: LocalSettings_ConstructProps): void
    static $gtype: GObject.Type
}
interface Medium_ConstructProps extends DataWrapper_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Medium */
    content?: DataWrapper
}
class Medium {
    /* Properties of Camel-1.2.Camel.Medium */
    content: DataWrapper
    /* Fields of Camel-1.2.Camel.DataWrapper */
    readonly parent: GObject.Object
    readonly priv: DataWrapperPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Medium */
    add_header(name: string, value: string): void
    dup_headers(): NameValueArray
    get_content(): DataWrapper | null
    get_header(name: string): string | null
    get_headers(): NameValueArray
    remove_header(name: string): void
    set_content(content?: DataWrapper | null): void
    set_header(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Medium */
    vfunc_add_header(name: string, value: string): void
    vfunc_dup_headers(): NameValueArray
    vfunc_get_content(): DataWrapper | null
    vfunc_get_header(name: string): string | null
    vfunc_get_headers(): NameValueArray
    vfunc_remove_header(name: string): void
    vfunc_set_content(content?: DataWrapper | null): void
    vfunc_set_header(name: string, value?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Medium, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Medium_ConstructProps)
    _init (config?: Medium_ConstructProps): void
    static $gtype: GObject.Type
}
interface MessageInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.MessageInfo */
    abort_notifications?: boolean
    cc?: string
    date_received?: number
    date_sent?: number
    dirty?: boolean
    flags?: MessageFlags
    folder_flagged?: boolean
    from?: string
    headers?: NameValueArray
    message_id?: number
    mlist?: string
    preview?: string
    references?: object[]
    size?: number
    subject?: string
    summary?: FolderSummary
    to?: string
    uid?: string
    user_flags?: NamedFlags
    user_headers?: NameValueArray
    user_tags?: NameValueArray
}
class MessageInfo {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abort_notifications: boolean
    cc: string
    date_received: number
    date_sent: number
    dirty: boolean
    flags: MessageFlags
    folder_flagged: boolean
    readonly folder_flagged_stamp: number
    from: string
    headers: NameValueArray
    message_id: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    user_flags: NamedFlags
    user_headers: NameValueArray
    user_tags: NameValueArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assign_summary?: FolderSummary | null): MessageInfo
    dump(): void
    dup_headers(): NameValueArray | null
    dup_preview(): string | null
    dup_references(): number[] | null
    dup_user_flags(): NamedFlags
    dup_user_header(name: string): string | null
    dup_user_headers(): NameValueArray | null
    dup_user_tag(name: string): string | null
    dup_user_tags(): NameValueArray | null
    freeze_notifications(): void
    get_abort_notifications(): boolean
    get_cc(): string
    get_date_received(): number
    get_date_sent(): number
    get_dirty(): boolean
    get_flags(): number
    get_folder_flagged(): boolean
    get_folder_flagged_stamp(): number
    get_from(): string
    get_headers(): NameValueArray | null
    get_message_id(): number
    get_mlist(): string
    get_notifications_frozen(): boolean
    get_preview(): string | null
    get_references(): number[] | null
    get_size(): number
    get_subject(): string
    get_to(): string
    get_uid(): string
    get_user_flag(name: string): boolean
    get_user_flags(): NamedFlags | null
    get_user_header(name: string): string | null
    get_user_headers(): NameValueArray | null
    get_user_tag(name: string): string | null
    get_user_tags(): NameValueArray | null
    load(record: MIRecord, bdata_ptr: string): boolean
    pooldup_uid(): string
    property_lock(): void
    property_unlock(): void
    ref_summary(): object | null
    save(record: MIRecord, bdata_str: GLib.String): boolean
    set_abort_notifications(abort_notifications: boolean): void
    set_cc(cc?: string | null): boolean
    set_date_received(date_received: number): boolean
    set_date_sent(date_sent: number): boolean
    set_dirty(dirty: boolean): void
    set_flags(mask: number, set: number): boolean
    set_folder_flagged(folder_flagged: boolean): boolean
    set_from(from?: string | null): boolean
    set_message_id(message_id: number): boolean
    set_mlist(mlist?: string | null): boolean
    set_preview(preview?: string | null): boolean
    set_size(size: number): boolean
    set_subject(subject?: string | null): boolean
    set_to(to?: string | null): boolean
    set_uid(uid: string): boolean
    set_user_flag(name: string, state: boolean): boolean
    set_user_header(name: string, value?: string | null): boolean
    set_user_tag(name: string, value?: string | null): boolean
    take_headers(headers?: NameValueArray | null): boolean
    take_references(references?: number[] | null): boolean
    take_user_flags(user_flags?: NamedFlags | null): boolean
    take_user_headers(headers?: NameValueArray | null): boolean
    take_user_tags(user_tags?: NameValueArray | null): boolean
    thaw_notifications(): void
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
    /* Virtual methods of Camel-1.2.Camel.MessageInfo */
    vfunc_clone(assign_summary?: FolderSummary | null): MessageInfo
    vfunc_dup_user_flags(): NamedFlags
    vfunc_dup_user_tags(): NameValueArray | null
    vfunc_get_cc(): string
    vfunc_get_date_received(): number
    vfunc_get_date_sent(): number
    vfunc_get_flags(): number
    vfunc_get_from(): string
    vfunc_get_headers(): NameValueArray | null
    vfunc_get_message_id(): number
    vfunc_get_mlist(): string
    vfunc_get_preview(): string | null
    vfunc_get_references(): number[] | null
    vfunc_get_size(): number
    vfunc_get_subject(): string
    vfunc_get_to(): string
    vfunc_get_user_flag(name: string): boolean
    vfunc_get_user_flags(): NamedFlags | null
    vfunc_get_user_header(name: string): string | null
    vfunc_get_user_headers(): NameValueArray | null
    vfunc_get_user_tag(name: string): string | null
    vfunc_get_user_tags(): NameValueArray | null
    vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean
    vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean
    vfunc_set_cc(cc?: string | null): boolean
    vfunc_set_date_received(date_received: number): boolean
    vfunc_set_date_sent(date_sent: number): boolean
    vfunc_set_flags(mask: number, set: number): boolean
    vfunc_set_from(from?: string | null): boolean
    vfunc_set_message_id(message_id: number): boolean
    vfunc_set_mlist(mlist?: string | null): boolean
    vfunc_set_preview(preview?: string | null): boolean
    vfunc_set_size(size: number): boolean
    vfunc_set_subject(subject?: string | null): boolean
    vfunc_set_to(to?: string | null): boolean
    vfunc_set_user_flag(name: string, state: boolean): boolean
    vfunc_set_user_header(name: string, value?: string | null): boolean
    vfunc_set_user_tag(name: string, value?: string | null): boolean
    vfunc_take_headers(headers?: NameValueArray | null): boolean
    vfunc_take_references(references?: number[] | null): boolean
    vfunc_take_user_flags(user_flags?: NamedFlags | null): boolean
    vfunc_take_user_headers(headers?: NameValueArray | null): boolean
    vfunc_take_user_tags(user_tags?: NameValueArray | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-notifications", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cc", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-received", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-sent", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dirty", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-id", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mlist", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preview", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::references", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::to", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-tags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: MessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessageInfo_ConstructProps)
    _init (config?: MessageInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary?: FolderSummary | null): MessageInfo
    static new_from_headers(summary: FolderSummary, headers: NameValueArray): MessageInfo
    static $gtype: GObject.Type
}
interface MessageInfoBase_ConstructProps extends MessageInfo_ConstructProps {
}
class MessageInfoBase {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abort_notifications: boolean
    cc: string
    date_received: number
    date_sent: number
    dirty: boolean
    flags: MessageFlags
    folder_flagged: boolean
    readonly folder_flagged_stamp: number
    from: string
    headers: NameValueArray
    message_id: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    user_flags: NamedFlags
    user_headers: NameValueArray
    user_tags: NameValueArray
    /* Fields of Camel-1.2.Camel.MessageInfo */
    readonly parent: GObject.Object
    readonly priv: MessageInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assign_summary?: FolderSummary | null): MessageInfo
    dump(): void
    dup_headers(): NameValueArray | null
    dup_preview(): string | null
    dup_references(): number[] | null
    dup_user_flags(): NamedFlags
    dup_user_header(name: string): string | null
    dup_user_headers(): NameValueArray | null
    dup_user_tag(name: string): string | null
    dup_user_tags(): NameValueArray | null
    freeze_notifications(): void
    get_abort_notifications(): boolean
    get_cc(): string
    get_date_received(): number
    get_date_sent(): number
    get_dirty(): boolean
    get_flags(): number
    get_folder_flagged(): boolean
    get_folder_flagged_stamp(): number
    get_from(): string
    get_headers(): NameValueArray | null
    get_message_id(): number
    get_mlist(): string
    get_notifications_frozen(): boolean
    get_preview(): string | null
    get_references(): number[] | null
    get_size(): number
    get_subject(): string
    get_to(): string
    get_uid(): string
    get_user_flag(name: string): boolean
    get_user_flags(): NamedFlags | null
    get_user_header(name: string): string | null
    get_user_headers(): NameValueArray | null
    get_user_tag(name: string): string | null
    get_user_tags(): NameValueArray | null
    load(record: MIRecord, bdata_ptr: string): boolean
    pooldup_uid(): string
    property_lock(): void
    property_unlock(): void
    ref_summary(): object | null
    save(record: MIRecord, bdata_str: GLib.String): boolean
    set_abort_notifications(abort_notifications: boolean): void
    set_cc(cc?: string | null): boolean
    set_date_received(date_received: number): boolean
    set_date_sent(date_sent: number): boolean
    set_dirty(dirty: boolean): void
    set_flags(mask: number, set: number): boolean
    set_folder_flagged(folder_flagged: boolean): boolean
    set_from(from?: string | null): boolean
    set_message_id(message_id: number): boolean
    set_mlist(mlist?: string | null): boolean
    set_preview(preview?: string | null): boolean
    set_size(size: number): boolean
    set_subject(subject?: string | null): boolean
    set_to(to?: string | null): boolean
    set_uid(uid: string): boolean
    set_user_flag(name: string, state: boolean): boolean
    set_user_header(name: string, value?: string | null): boolean
    set_user_tag(name: string, value?: string | null): boolean
    take_headers(headers?: NameValueArray | null): boolean
    take_references(references?: number[] | null): boolean
    take_user_flags(user_flags?: NamedFlags | null): boolean
    take_user_headers(headers?: NameValueArray | null): boolean
    take_user_tags(user_tags?: NameValueArray | null): boolean
    thaw_notifications(): void
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
    /* Virtual methods of Camel-1.2.Camel.MessageInfo */
    vfunc_clone(assign_summary?: FolderSummary | null): MessageInfo
    vfunc_dup_user_flags(): NamedFlags
    vfunc_dup_user_tags(): NameValueArray | null
    vfunc_get_cc(): string
    vfunc_get_date_received(): number
    vfunc_get_date_sent(): number
    vfunc_get_flags(): number
    vfunc_get_from(): string
    vfunc_get_headers(): NameValueArray | null
    vfunc_get_message_id(): number
    vfunc_get_mlist(): string
    vfunc_get_preview(): string | null
    vfunc_get_references(): number[] | null
    vfunc_get_size(): number
    vfunc_get_subject(): string
    vfunc_get_to(): string
    vfunc_get_user_flag(name: string): boolean
    vfunc_get_user_flags(): NamedFlags | null
    vfunc_get_user_header(name: string): string | null
    vfunc_get_user_headers(): NameValueArray | null
    vfunc_get_user_tag(name: string): string | null
    vfunc_get_user_tags(): NameValueArray | null
    vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean
    vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean
    vfunc_set_cc(cc?: string | null): boolean
    vfunc_set_date_received(date_received: number): boolean
    vfunc_set_date_sent(date_sent: number): boolean
    vfunc_set_flags(mask: number, set: number): boolean
    vfunc_set_from(from?: string | null): boolean
    vfunc_set_message_id(message_id: number): boolean
    vfunc_set_mlist(mlist?: string | null): boolean
    vfunc_set_preview(preview?: string | null): boolean
    vfunc_set_size(size: number): boolean
    vfunc_set_subject(subject?: string | null): boolean
    vfunc_set_to(to?: string | null): boolean
    vfunc_set_user_flag(name: string, state: boolean): boolean
    vfunc_set_user_header(name: string, value?: string | null): boolean
    vfunc_set_user_tag(name: string, value?: string | null): boolean
    vfunc_take_headers(headers?: NameValueArray | null): boolean
    vfunc_take_references(references?: number[] | null): boolean
    vfunc_take_user_flags(user_flags?: NamedFlags | null): boolean
    vfunc_take_user_headers(headers?: NameValueArray | null): boolean
    vfunc_take_user_tags(user_tags?: NameValueArray | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-notifications", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cc", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-received", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-sent", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dirty", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-id", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mlist", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preview", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::references", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::to", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-tags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: MessageInfoBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessageInfoBase_ConstructProps)
    _init (config?: MessageInfoBase_ConstructProps): void
    static $gtype: GObject.Type
}
interface MimeFilter_ConstructProps extends GObject.Object_ConstructProps {
}
class MimeFilter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilter_ConstructProps)
    _init (config?: MimeFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeFilter
    static $gtype: GObject.Type
}
interface MimeFilterBasic_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterBasic {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterBasic_ConstructProps)
    _init (config?: MimeFilterBasic_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: MimeFilterBasicType): MimeFilterBasic
    /* Function overloads */
    static new(): MimeFilterBasic
    static $gtype: GObject.Type
}
interface MimeFilterBestenc_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterBestenc {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterBestenc */
    get_best_charset(): string
    get_best_encoding(required: BestencEncoding): TransferEncoding
    set_flags(flags: number): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterBestenc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterBestenc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterBestenc_ConstructProps)
    _init (config?: MimeFilterBestenc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: number): MimeFilterBestenc
    /* Function overloads */
    static new(): MimeFilterBestenc
    static $gtype: GObject.Type
}
interface MimeFilterCRLF_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterCRLF {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterCRLF */
    get_ensure_crlf_end(): boolean
    set_ensure_crlf_end(ensure_crlf_end: boolean): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterCRLF, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterCRLF, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterCRLF_ConstructProps)
    _init (config?: MimeFilterCRLF_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(direction: MimeFilterCRLFDirection, mode: MimeFilterCRLFMode): MimeFilterCRLF
    /* Function overloads */
    static new(): MimeFilterCRLF
    static $gtype: GObject.Type
}
interface MimeFilterCanon_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterCanon {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterCanon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterCanon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterCanon_ConstructProps)
    _init (config?: MimeFilterCanon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: MimeFilterCanonFlags): MimeFilterCanon
    /* Function overloads */
    static new(): MimeFilterCanon
    static $gtype: GObject.Type
}
interface MimeFilterCharset_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterCharset {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterCharset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterCharset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterCharset_ConstructProps)
    _init (config?: MimeFilterCharset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(from_charset: string, to_charset: string): MimeFilterCharset
    /* Function overloads */
    static new(): MimeFilterCharset
    static $gtype: GObject.Type
}
interface MimeFilterEnriched_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterEnriched {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterEnriched, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterEnriched, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterEnriched_ConstructProps)
    _init (config?: MimeFilterEnriched_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: MimeFilterEnrichedFlags): MimeFilterEnriched
    /* Function overloads */
    static new(): MimeFilterEnriched
    static $gtype: GObject.Type
}
interface MimeFilterFrom_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterFrom {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterFrom_ConstructProps)
    _init (config?: MimeFilterFrom_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeFilterFrom
    static $gtype: GObject.Type
}
interface MimeFilterGZip_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterGZip {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterGZip_ConstructProps)
    _init (config?: MimeFilterGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: MimeFilterGZipMode, level: number): MimeFilterGZip
    /* Function overloads */
    static new(): MimeFilterGZip
    static $gtype: GObject.Type
}
interface MimeFilterHTML_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterHTML {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterHTML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterHTML, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterHTML_ConstructProps)
    _init (config?: MimeFilterHTML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeFilterHTML
    static $gtype: GObject.Type
}
interface MimeFilterIndex_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterIndex {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterIndex */
    set_index(index: Index): void
    set_name(name: IndexName): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterIndex_ConstructProps)
    _init (config?: MimeFilterIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index: Index): MimeFilterIndex
    /* Function overloads */
    static new(): MimeFilterIndex
    static $gtype: GObject.Type
}
interface MimeFilterLinewrap_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterLinewrap {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterLinewrap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterLinewrap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterLinewrap_ConstructProps)
    _init (config?: MimeFilterLinewrap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(preferred_len: number, max_len: number, indent_char: number, flags: number): MimeFilterLinewrap
    /* Function overloads */
    static new(): MimeFilterLinewrap
    static $gtype: GObject.Type
}
interface MimeFilterPgp_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterPgp {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterPgp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterPgp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterPgp_ConstructProps)
    _init (config?: MimeFilterPgp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeFilterPgp
    static $gtype: GObject.Type
}
interface MimeFilterProgress_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterProgress {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterProgress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterProgress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterProgress_ConstructProps)
    _init (config?: MimeFilterProgress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cancellable: Gio.Cancellable | null, total: number): MimeFilterProgress
    /* Function overloads */
    static new(): MimeFilterProgress
    static $gtype: GObject.Type
}
interface MimeFilterToHTML_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterToHTML {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterToHTML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterToHTML, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterToHTML_ConstructProps)
    _init (config?: MimeFilterToHTML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: MimeFilterToHTMLFlags, color: number): MimeFilterToHTML
    /* Function overloads */
    static new(): MimeFilterToHTML
    static $gtype: GObject.Type
}
interface MimeFilterWindows_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterWindows {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterWindows */
    is_windows_charset(): boolean
    real_charset(): string
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterWindows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterWindows, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterWindows_ConstructProps)
    _init (config?: MimeFilterWindows_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(claimed_charset: string): MimeFilterWindows
    /* Function overloads */
    static new(): MimeFilterWindows
    static $gtype: GObject.Type
}
interface MimeFilterYenc_ConstructProps extends MimeFilter_ConstructProps {
}
class MimeFilterYenc {
    /* Fields of Camel-1.2.Camel.MimeFilter */
    readonly parent: GObject.Object
    readonly priv: MimeFilterPrivate
    readonly outreal: string
    readonly outbuf: string
    readonly outptr: string
    readonly outsize: number
    readonly outpre: number
    readonly backbuf: string
    readonly backsize: number
    readonly backlen: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterYenc */
    get_crc(): number
    get_pcrc(): number
    set_crc(crc: number): void
    set_state(state: number): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: number): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeFilter */
    vfunc_complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    vfunc_reset(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeFilterYenc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeFilterYenc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeFilterYenc_ConstructProps)
    _init (config?: MimeFilterYenc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(direction: MimeFilterYencDirection): MimeFilterYenc
    /* Function overloads */
    static new(): MimeFilterYenc
    static $gtype: GObject.Type
}
interface MimeMessage_ConstructProps extends MimePart_ConstructProps {
}
class MimeMessage {
    /* Properties of Camel-1.2.Camel.MimePart */
    content_id: string
    content_md5: string
    description: string
    disposition: string
    /* Properties of Camel-1.2.Camel.Medium */
    content: DataWrapper
    /* Fields of Camel-1.2.Camel.MimePart */
    readonly parent: Medium
    readonly priv: MimePartPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeMessage */
    build_mbox_from(): string
    dump(body: number): void
    encode_8bit_parts(): void
    foreach_part(): void
    get_date(): [ /* returnType */ number, /* offset */ number ]
    get_date_received(): [ /* returnType */ number, /* offset */ number ]
    get_from(): InternetAddress | null
    get_message_id(): string | null
    get_part_by_content_id(content_id: string): MimePart | null
    get_recipients(type: string): InternetAddress | null
    get_reply_to(): InternetAddress | null
    get_source(): string | null
    get_subject(): string | null
    has_8bit_parts(): boolean
    has_attachment(): boolean
    set_best_encoding(required: BestencRequired, enctype: BestencEncoding): void
    set_date(date: number, offset: number): void
    set_from(from?: InternetAddress | null): void
    set_message_id(message_id?: string | null): void
    set_recipients(type: string, recipients?: InternetAddress | null): void
    set_reply_to(reply_to?: InternetAddress | null): void
    set_source(source_uid?: string | null): void
    set_subject(subject?: string | null): void
    /* Methods of Camel-1.2.Camel.MimePart */
    construct_content_from_parser(mp: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    construct_from_parser(parser: MimeParser, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_parser_finish(result: Gio.AsyncResult): boolean
    construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    get_content_disposition(): ContentDisposition | null
    get_content_id(): string | null
    get_content_languages(): string[] | null
    get_content_location(): string | null
    get_content_md5(): string | null
    get_content_type(): ContentType | null
    get_description(): string | null
    get_disposition(): string | null
    get_encoding(): TransferEncoding
    get_filename(): string | null
    set_content(data: Uint8Array | null, type?: string | null): void
    set_content_id(contentid?: string | null): void
    set_content_languages(content_languages?: string[] | null): void
    set_content_location(location?: string | null): void
    set_content_md5(md5sum?: string | null): void
    set_content_type(content_type?: string | null): void
    set_description(description: string): void
    set_disposition(disposition?: string | null): void
    set_encoding(encoding: TransferEncoding): void
    set_filename(filename?: string | null): void
    /* Methods of Camel-1.2.Camel.Medium */
    add_header(name: string, value: string): void
    dup_headers(): NameValueArray
    get_content(): DataWrapper | null
    get_header(name: string): string | null
    get_headers(): NameValueArray
    remove_header(name: string): void
    set_content(content?: DataWrapper | null): void
    set_header(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.MimePart */
    vfunc_construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Medium */
    vfunc_add_header(name: string, value: string): void
    vfunc_dup_headers(): NameValueArray
    vfunc_get_content(): DataWrapper | null
    vfunc_get_header(name: string): string | null
    vfunc_get_headers(): NameValueArray
    vfunc_remove_header(name: string): void
    vfunc_set_content(content?: DataWrapper | null): void
    vfunc_set_header(name: string, value?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-id", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-id", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-md5", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-md5", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disposition", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disposition", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: MimeMessage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeMessage_ConstructProps)
    _init (config?: MimeMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeMessage
    /* Function overloads */
    static new(): MimeMessage
    static new(): MimeMessage
    static $gtype: GObject.Type
}
interface MimeParser_ConstructProps extends GObject.Object_ConstructProps {
}
class MimeParser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeParser */
    content_type(): ContentType
    drop_step(): void
    dup_headers(): NameValueArray
    errno(): number
    filter_add(mf: MimeFilter): number
    filter_remove(id: number): void
    from_line(): string
    header(name: string, offset: number): string
    init_with_bytes(bytes: GLib.Bytes): void
    init_with_fd(fd: number): number
    init_with_input_stream(input_stream: Gio.InputStream): void
    init_with_stream(stream: Stream): number
    postface(): string
    preface(): string
    push_state(newstate: MimeParserState, boundary: string): void
    read(len: number): [ /* returnType */ number, /* databuffer */ Uint8Array ]
    scan_from(scan_from: boolean): void
    scan_pre_from(scan_pre_from: boolean): void
    seek(offset: number, whence: number): number
    set_header_regex(matchstr: string): number
    state(): MimeParserState
    step(databuffer?: Uint8Array | null): [ /* returnType */ MimeParserState, /* databuffer */ Uint8Array | null ]
    stream(): Stream | null
    tell(): number
    tell_start_boundary(): number
    tell_start_from(): number
    tell_start_headers(): number
    unstep(): void
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
    /* Virtual methods of Camel-1.2.Camel.MimeParser */
    vfunc_content(): void
    vfunc_message(headers?: object | null): void
    vfunc_part(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimeParser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimeParser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimeParser_ConstructProps)
    _init (config?: MimeParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeParser
    static $gtype: GObject.Type
}
interface MimePart_ConstructProps extends Medium_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.MimePart */
    content_id?: string
    content_md5?: string
    description?: string
    disposition?: string
}
class MimePart {
    /* Properties of Camel-1.2.Camel.MimePart */
    content_id: string
    content_md5: string
    description: string
    disposition: string
    /* Properties of Camel-1.2.Camel.Medium */
    content: DataWrapper
    /* Fields of Camel-1.2.Camel.Medium */
    readonly parent: DataWrapper
    readonly priv: MediumPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimePart */
    construct_content_from_parser(mp: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    construct_from_parser(parser: MimeParser, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_parser_finish(result: Gio.AsyncResult): boolean
    construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    get_content_disposition(): ContentDisposition | null
    get_content_id(): string | null
    get_content_languages(): string[] | null
    get_content_location(): string | null
    get_content_md5(): string | null
    get_content_type(): ContentType | null
    get_description(): string | null
    get_disposition(): string | null
    get_encoding(): TransferEncoding
    get_filename(): string | null
    set_content(data: Uint8Array | null, type?: string | null): void
    set_content_id(contentid?: string | null): void
    set_content_languages(content_languages?: string[] | null): void
    set_content_location(location?: string | null): void
    set_content_md5(md5sum?: string | null): void
    set_content_type(content_type?: string | null): void
    set_description(description: string): void
    set_disposition(disposition?: string | null): void
    set_encoding(encoding: TransferEncoding): void
    set_filename(filename?: string | null): void
    /* Methods of Camel-1.2.Camel.Medium */
    add_header(name: string, value: string): void
    dup_headers(): NameValueArray
    get_content(): DataWrapper | null
    get_header(name: string): string | null
    get_headers(): NameValueArray
    remove_header(name: string): void
    set_content(content?: DataWrapper | null): void
    set_header(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.MimePart */
    vfunc_construct_from_parser_sync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Medium */
    vfunc_add_header(name: string, value: string): void
    vfunc_dup_headers(): NameValueArray
    vfunc_get_content(): DataWrapper | null
    vfunc_get_header(name: string): string | null
    vfunc_get_headers(): NameValueArray
    vfunc_remove_header(name: string): void
    vfunc_set_content(content?: DataWrapper | null): void
    vfunc_set_header(name: string, value?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-id", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-id", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-md5", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-md5", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disposition", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disposition", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: MimePart, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MimePart_ConstructProps)
    _init (config?: MimePart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimePart
    /* Function overloads */
    static new(): MimePart
    static $gtype: GObject.Type
}
interface Multipart_ConstructProps extends DataWrapper_ConstructProps {
}
class Multipart {
    /* Fields of Camel-1.2.Camel.DataWrapper */
    readonly parent: GObject.Object
    readonly priv: DataWrapperPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Multipart */
    add_part(part: MimePart): void
    construct_from_parser(parser: MimeParser): number
    get_boundary(): string
    get_number(): number
    get_part(index: number): MimePart
    get_postface(): string
    get_preface(): string
    set_boundary(boundary?: string | null): void
    set_postface(postface: string): void
    set_preface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Multipart */
    vfunc_add_part(part: MimePart): void
    vfunc_construct_from_parser(parser: MimeParser): number
    vfunc_get_boundary(): string
    vfunc_get_number(): number
    vfunc_get_part(index: number): MimePart
    vfunc_set_boundary(boundary?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Multipart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Multipart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Multipart_ConstructProps)
    _init (config?: Multipart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Multipart
    /* Function overloads */
    static new(): Multipart
    static $gtype: GObject.Type
}
interface MultipartEncrypted_ConstructProps extends Multipart_ConstructProps {
}
class MultipartEncrypted {
    /* Fields of Camel-1.2.Camel.Multipart */
    readonly parent: DataWrapper
    readonly priv: MultipartPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Multipart */
    add_part(part: MimePart): void
    construct_from_parser(parser: MimeParser): number
    get_boundary(): string
    get_number(): number
    get_part(index: number): MimePart
    get_postface(): string
    get_preface(): string
    set_boundary(boundary?: string | null): void
    set_postface(postface: string): void
    set_preface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Multipart */
    vfunc_add_part(part: MimePart): void
    vfunc_construct_from_parser(parser: MimeParser): number
    vfunc_get_boundary(): string
    vfunc_get_number(): number
    vfunc_get_part(index: number): MimePart
    vfunc_set_boundary(boundary?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartEncrypted, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartEncrypted, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultipartEncrypted_ConstructProps)
    _init (config?: MultipartEncrypted_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MultipartEncrypted
    /* Function overloads */
    static new(): MultipartEncrypted
    static new(): MultipartEncrypted
    static $gtype: GObject.Type
}
interface MultipartSigned_ConstructProps extends Multipart_ConstructProps {
}
class MultipartSigned {
    /* Fields of Camel-1.2.Camel.Multipart */
    readonly parent: DataWrapper
    readonly priv: MultipartPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MultipartSigned */
    get_content_stream(): Stream
    set_content_stream(content_stream: Stream): void
    set_signature(signature: MimePart): void
    /* Methods of Camel-1.2.Camel.Multipart */
    add_part(part: MimePart): void
    construct_from_parser(parser: MimeParser): number
    get_boundary(): string
    get_number(): number
    get_part(index: number): MimePart
    get_postface(): string
    get_preface(): string
    set_boundary(boundary?: string | null): void
    set_postface(postface: string): void
    set_preface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculate_decoded_size_sync(cancellable?: Gio.Cancellable | null): number
    calculate_size_sync(cancellable?: Gio.Cancellable | null): number
    construct_from_input_stream(input_stream: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_input_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    construct_from_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    construct_from_stream_finish(result: Gio.AsyncResult): boolean
    construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decode_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_output_stream_finish(result: Gio.AsyncResult): number
    decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decode_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decode_to_stream_finish(result: Gio.AsyncResult): number
    decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    get_byte_array(): Uint8Array
    get_encoding(): TransferEncoding
    get_mime_type(): string
    get_mime_type_field(): ContentType | null
    is_offline(): boolean
    set_encoding(encoding: TransferEncoding): void
    set_mime_type(mime_type: string): void
    set_mime_type_field(mime_type?: ContentType | null): void
    set_offline(offline: boolean): void
    take_mime_type_field(mime_type?: ContentType | null): void
    write_to_output_stream(output_stream: Gio.OutputStream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_output_stream_finish(result: Gio.AsyncResult): number
    write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    write_to_stream(stream: Stream, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_to_stream_finish(result: Gio.AsyncResult): number
    write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Virtual methods of Camel-1.2.Camel.Multipart */
    vfunc_add_part(part: MimePart): void
    vfunc_construct_from_parser(parser: MimeParser): number
    vfunc_get_boundary(): string
    vfunc_get_number(): number
    vfunc_get_part(index: number): MimePart
    vfunc_set_boundary(boundary?: string | null): void
    /* Virtual methods of Camel-1.2.Camel.DataWrapper */
    vfunc_construct_from_input_stream_sync(input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_construct_from_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    vfunc_decode_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_decode_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    vfunc_get_mime_type(): string
    vfunc_get_mime_type_field(): ContentType | null
    vfunc_is_offline(): boolean
    vfunc_set_mime_type(mime_type: string): void
    vfunc_set_mime_type_field(mime_type?: ContentType | null): void
    vfunc_write_to_output_stream_sync(output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    vfunc_write_to_stream_sync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultipartSigned, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultipartSigned, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultipartSigned_ConstructProps)
    _init (config?: MultipartSigned_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MultipartSigned
    /* Function overloads */
    static new(): MultipartSigned
    static new(): MultipartSigned
    static $gtype: GObject.Type
}
interface NNTPAddress_ConstructProps extends Address_ConstructProps {
}
class NNTPAddress {
    /* Fields of Camel-1.2.Camel.Address */
    readonly parent: GObject.Object
    readonly priv: AddressPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NNTPAddress */
    add(name: string): number
    get(index: number, namep: string): boolean
    /* Methods of Camel-1.2.Camel.Address */
    cat(source: Address): number
    copy(source: Address): number
    decode(raw: string): number
    encode(): string
    format(): string
    length(): number
    new_clone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    /* Virtual methods of Camel-1.2.Camel.Address */
    vfunc_cat(source: Address): number
    vfunc_decode(raw: string): number
    vfunc_encode(): string
    vfunc_format(): string
    vfunc_length(): number
    vfunc_remove(index: number): void
    vfunc_unformat(raw: string): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NNTPAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NNTPAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NNTPAddress_ConstructProps)
    _init (config?: NNTPAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NNTPAddress
    /* Function overloads */
    static new(): NNTPAddress
    static $gtype: GObject.Type
}
interface NullOutputStream_ConstructProps extends Gio.OutputStream_ConstructProps {
}
class NullOutputStream {
    /* Fields of Gio-2.0.Gio.OutputStream */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NullOutputStream */
    get_bytes_written(): number
    get_ends_with_crlf(): boolean
    /* Methods of Gio-2.0.Gio.OutputStream */
    clear_pending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    close_finish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    has_pending(): boolean
    is_closed(): boolean
    is_closing(): boolean
    set_pending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    splice_finish(result: Gio.AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): number
    write_all(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_all_async(buffer: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    write_async(buffer: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes(bytes: GLib.Bytes, cancellable?: Gio.Cancellable | null): number
    write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_bytes_finish(result: Gio.AsyncResult): number
    write_finish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_all_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_all_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
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
    /* Virtual methods of Gio-2.0.Gio.OutputStream */
    vfunc_close_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(result: Gio.AsyncResult): boolean
    vfunc_close_fn(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): boolean
    vfunc_flush_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_flush_finish(result: Gio.AsyncResult): boolean
    vfunc_splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    vfunc_splice_async(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_splice_finish(result: Gio.AsyncResult): number
    vfunc_write_async(buffer: Uint8Array | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_write_finish(result: Gio.AsyncResult): number
    vfunc_write_fn(buffer: Uint8Array | null, cancellable?: Gio.Cancellable | null): number
    vfunc_writev_async(vectors: Gio.OutputVector[], io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_writev_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    vfunc_writev_fn(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytes_written */ number | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NullOutputStream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NullOutputStream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NullOutputStream_ConstructProps)
    _init (config?: NullOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullOutputStream
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Object */
    state_filename?: string
}
class Object {
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::state-filename", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
interface OfflineFolder_ConstructProps extends Folder_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.OfflineFolder */
    offline_sync?: ThreeState
}
class OfflineFolder {
    /* Properties of Camel-1.2.Camel.OfflineFolder */
    offline_sync: ThreeState
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    display_name: string
    full_name: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Folder */
    readonly parent: Object
    readonly priv: FolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineFolder */
    can_downsync(): boolean
    downsync(expression: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downsync_finish(result: Gio.AsyncResult): boolean
    downsync_sync(expression: string, cancellable?: Gio.Cancellable | null): boolean
    get_offline_sync(): ThreeState
    set_offline_sync(offline_sync: ThreeState): void
    /* Methods of Camel-1.2.Camel.Folder */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmp_uids(uid1: string, uid2: string): number
    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dup_description(): string
    dup_display_name(): string
    dup_full_name(): string
    expunge(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expunge_finish(result: Gio.AsyncResult): boolean
    expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    free_deep(array: string[]): void
    free_shallow(array: string[]): void
    free_summary(array: MessageInfo[]): void
    free_uids(array: string[]): void
    freeze(): void
    get_deleted_message_count(): number
    get_description(): string
    get_display_name(): string
    get_filename(uid: string): string
    get_flags(): number
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    get_message_info(uid: string): MessageInfo
    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
    get_quota_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    get_summary(): string[]
    get_uids(): string[]
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    has_summary_capability(): boolean
    is_frozen(): boolean
    lock(): void
    prepare_content_refresh(): void
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    refresh_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_info_finish(result: Gio.AsyncResult): boolean
    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    rename(new_name: string): void
    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    search_free(result: string[]): void
    set_description(description: string): void
    set_display_name(display_name: string): void
    set_flags(folder_flags: number): void
    set_full_name(full_name: string): void
    set_lock_async(skip_folder_lock: boolean): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    sort_uids(uids: string[]): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    take_folder_summary(summary: FolderSummary): void
    thaw(): void
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.OfflineFolder */
    vfunc_downsync_sync(expression: string, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Folder */
    vfunc_append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    vfunc_changed(changes: FolderChangeInfo): void
    vfunc_cmp_uids(uid1: string, uid2: string): number
    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_free_summary(array: MessageInfo[]): void
    vfunc_free_uids(array: string[]): void
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    vfunc_get_message_info(uid: string): MessageInfo
    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    vfunc_get_summary(): string[]
    vfunc_get_uids(): string[]
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    vfunc_prepare_content_refresh(): void
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_free(result: string[]): void
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    vfunc_sort_uids(uids: string[]): void
    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_thaw(): void
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: (($obj: OfflineFolder, changes: FolderChangeInfo) => void)): number
    connect_after(sigName: "changed", callback: (($obj: OfflineFolder, changes: FolderChangeInfo) => void)): number
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (($obj: OfflineFolder) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: OfflineFolder) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: (($obj: OfflineFolder, old_name: string) => void)): number
    connect_after(sigName: "renamed", callback: (($obj: OfflineFolder, old_name: string) => void)): number
    emit(sigName: "renamed", old_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::offline-sync", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offline-sync", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: OfflineFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OfflineFolder_ConstructProps)
    _init (config?: OfflineFolder_ConstructProps): void
    static $gtype: GObject.Type
}
interface OfflineSettings_ConstructProps extends StoreSettings_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.OfflineSettings */
    limit_by_age?: boolean
    limit_unit?: TimeUnit
    limit_value?: number
    stay_synchronized?: boolean
}
class OfflineSettings {
    /* Properties of Camel-1.2.Camel.OfflineSettings */
    limit_by_age: boolean
    limit_unit: TimeUnit
    limit_value: number
    stay_synchronized: boolean
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filter_inbox: boolean
    store_changes_interval: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineSettings */
    get_limit_by_age(): boolean
    get_limit_unit(): TimeUnit
    get_limit_value(): number
    get_stay_synchronized(): boolean
    get_store_changes_interval(): number
    set_limit_by_age(limit_by_age: boolean): void
    set_limit_unit(limit_unit: TimeUnit): void
    set_limit_value(limit_value: boolean): void
    set_stay_synchronized(stay_synchronized: boolean): void
    set_store_changes_interval(interval: number): void
    /* Methods of Camel-1.2.Camel.StoreSettings */
    get_filter_inbox(): boolean
    set_filter_inbox(filter_inbox: boolean): void
    set_store_changes_interval(interval: number): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::limit-by-age", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-by-age", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::limit-unit", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-unit", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::limit-value", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-value", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stay-synchronized", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stay-synchronized", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filter-inbox", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store-changes-interval", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: OfflineSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OfflineSettings_ConstructProps)
    _init (config?: OfflineSettings_ConstructProps): void
    static $gtype: GObject.Type
}
interface OfflineStore_ConstructProps extends Store_ConstructProps {
}
class OfflineStore {
    /* Properties of Camel-1.2.Camel.OfflineStore */
    readonly online: boolean
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Store */
    readonly parent: Service
    readonly priv: StorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineStore */
    dup_downsync_folders(): Folder[]
    get_online(): boolean
    prepare_for_offline_sync(cancellable?: Gio.Cancellable | null): boolean
    requires_downsync(): boolean
    set_online(online: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    set_online_finish(result: Gio.AsyncResult): boolean
    set_online_sync(online: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Store */
    can_refresh_folder(info: FolderInfo): boolean
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    delete_cached_folder(folder_name: string): void
    delete_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_folder_finish(result: Gio.AsyncResult): boolean
    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    dup_opened_folders(): Folder[]
    folder_created(folder_info: FolderInfo): void
    folder_deleted(folder_info: FolderInfo): void
    folder_info_stale(): void
    folder_opened(folder: Folder): void
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_finish(result: Gio.AsyncResult): Folder | null
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
    get_inbox_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_junk_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_permissions(): number
    get_trash_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    initial_setup(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    maybe_run_db_maintenance(): boolean
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rename_folder_finish(result: Gio.AsyncResult): boolean
    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    set_flags(flags: number): void
    set_permissions(permissions: number): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.OfflineStore */
    vfunc_dup_downsync_folders(): Folder[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Store */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_folder_created(folder_info: FolderInfo): void
    vfunc_folder_deleted(folder_info: FolderInfo): void
    vfunc_folder_info_stale(): void
    vfunc_folder_opened(folder: Folder): void
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    vfunc_get_can_auto_save_changes(): boolean
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: (($obj: OfflineStore, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-created", callback: (($obj: OfflineStore, object: FolderInfo) => void)): number
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: (($obj: OfflineStore, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-deleted", callback: (($obj: OfflineStore, object: FolderInfo) => void)): number
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (($obj: OfflineStore) => void)): number
    connect_after(sigName: "folder-info-stale", callback: (($obj: OfflineStore) => void)): number
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: (($obj: OfflineStore, object: Folder) => void)): number
    connect_after(sigName: "folder-opened", callback: (($obj: OfflineStore, object: Folder) => void)): number
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: (($obj: OfflineStore, object: string, p0: FolderInfo) => void)): number
    connect_after(sigName: "folder-renamed", callback: (($obj: OfflineStore, object: string, p0: FolderInfo) => void)): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::online", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-status", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: OfflineStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OfflineStore_ConstructProps)
    _init (config?: OfflineStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Operation_ConstructProps extends Gio.Cancellable_ConstructProps {
}
class Operation {
    /* Fields of Gio-2.0.Gio.Cancellable */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gio-2.0.Gio.Cancellable */
    cancel(): void
    connect(callback: GObject.Callback): number
    disconnect(handler_id: number): void
    get_fd(): number
    is_cancelled(): boolean
    make_pollfd(pollfd: GLib.PollFD): boolean
    pop_current(): void
    push_current(): void
    release_fd(): void
    reset(): void
    set_error_if_cancelled(): boolean
    source_new(): GLib.Source
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
    /* Virtual methods of Camel-1.2.Camel.Operation */
    vfunc_status(what: string, pc: number): void
    /* Virtual methods of Gio-2.0.Gio.Cancellable */
    vfunc_cancelled(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Operation */
    connect(sigName: "pop-message", callback: (($obj: Operation) => void)): number
    connect_after(sigName: "pop-message", callback: (($obj: Operation) => void)): number
    emit(sigName: "pop-message"): void
    connect(sigName: "progress", callback: (($obj: Operation, object: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Operation, object: number) => void)): number
    emit(sigName: "progress", object: number): void
    connect(sigName: "push-message", callback: (($obj: Operation, object: string) => void)): number
    connect_after(sigName: "push-message", callback: (($obj: Operation, object: string) => void)): number
    emit(sigName: "push-message", object: string): void
    connect(sigName: "status", callback: (($obj: Operation, object: string, p0: number) => void)): number
    connect_after(sigName: "status", callback: (($obj: Operation, object: string, p0: number) => void)): number
    emit(sigName: "status", object: string, p0: number): void
    /* Signals of Gio-2.0.Gio.Cancellable */
    connect(sigName: "cancelled", callback: (($obj: Operation) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: Operation) => void)): number
    emit(sigName: "cancelled"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Operation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Operation
    static new_proxy(cancellable?: Gio.Cancellable | null): Operation
    static cancel_all(): void
    static pop_message(cancellable?: Gio.Cancellable | null): void
    static progress(cancellable: Gio.Cancellable | null, percent: number): void
    static $gtype: GObject.Type
}
interface PartitionTable_ConstructProps extends GObject.Object_ConstructProps {
}
class PartitionTable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.PartitionTable */
    add(key: string, keyid: _key_t): number
    lookup(key: string): _key_t
    remove(key: string): boolean
    sync(): number
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
    connect(sigName: "notify", callback: (($obj: PartitionTable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PartitionTable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PartitionTable_ConstructProps)
    _init (config?: PartitionTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bs: BlockFile, root: _block_t): PartitionTable
    static $gtype: GObject.Type
}
interface SExp_ConstructProps extends GObject.Object_ConstructProps {
}
class SExp {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SExp */
    add_variable(scope: number, name: string, value: SExpTerm): void
    error(): string | null
    evaluate_occur_times(start: number, end: number): boolean
    input_file(fd: number): void
    input_text(text: string, len: number): void
    parse(): number
    remove_symbol(scope: number, name: string): void
    result_free(result?: SExpResult | null): void
    resultv_free(argv: SExpResult[]): void
    set_scope(scope: number): number
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
    connect(sigName: "notify", callback: (($obj: SExp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SExp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SExp_ConstructProps)
    _init (config?: SExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SExp
    static encode_bool(string: GLib.String, v_bool: boolean): void
    static encode_string(string: GLib.String, v_string: string): void
    static to_sql_sexp(sexp: string): string
    static $gtype: GObject.Type
}
interface SMIMEContext_ConstructProps extends CipherContext_ConstructProps {
}
class SMIMEContext {
    /* Fields of Camel-1.2.Camel.CipherContext */
    readonly parent: GObject.Object
    readonly priv: CipherContextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SMIMEContext */
    describe_part(part?: object | null): number
    set_encrypt_key(use: boolean, key: string): void
    set_sign_mode(type: SMIMESign): void
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decrypt_finish(result: Gio.AsyncResult): CipherValidity
    decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encrypt_finish(result: Gio.AsyncResult): boolean
    encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    get_session(): Session
    hash_to_id(hash: CipherHash): string
    id_to_hash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sign_finish(result: Gio.AsyncResult): boolean
    sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verify_finish(result: Gio.AsyncResult): CipherValidity
    verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    /* Virtual methods of Camel-1.2.Camel.CipherContext */
    vfunc_decrypt_sync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    vfunc_encrypt_sync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_hash_to_id(hash: CipherHash): string
    vfunc_id_to_hash(id: string): CipherHash
    vfunc_sign_sync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    vfunc_verify_sync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SMIMEContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SMIMEContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SMIMEContext_ConstructProps)
    _init (config?: SMIMEContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session): SMIMEContext
    /* Function overloads */
    static new(session: Session): SMIMEContext
    static $gtype: GObject.Type
}
interface Sasl_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Sasl */
    authenticated?: boolean
    mechanism?: string
    service?: Service
    service_name?: string
}
class Sasl {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: Sasl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sasl_ConstructProps)
    _init (config?: Sasl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service_name: string, mechanism: string, service: Service): Sasl
    static authtype(mechanism: string): ServiceAuthType | null
    static authtype_list(include_plain: boolean): ServiceAuthType[]
    static is_xoauth2_alias(mechanism?: string | null): boolean
    static $gtype: GObject.Type
}
interface SaslAnonymous_ConstructProps extends Sasl_ConstructProps {
}
class SaslAnonymous {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslAnonymous, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslAnonymous_ConstructProps)
    _init (config?: SaslAnonymous_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: SaslAnonTraceType, trace_info: string): SaslAnonymous
    /* Function overloads */
    static new(service_name: string, mechanism: string, service: Service): SaslAnonymous
    static $gtype: GObject.Type
}
interface SaslCramMd5_ConstructProps extends Sasl_ConstructProps {
}
class SaslCramMd5 {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslCramMd5, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslCramMd5_ConstructProps)
    _init (config?: SaslCramMd5_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslDigestMd5_ConstructProps extends Sasl_ConstructProps {
}
class SaslDigestMd5 {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslDigestMd5, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslDigestMd5_ConstructProps)
    _init (config?: SaslDigestMd5_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslGssapi_ConstructProps extends Sasl_ConstructProps {
}
class SaslGssapi {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SaslGssapi */
    override_host_and_user(override_host?: string | null, override_user?: string | null): void
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslGssapi, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslGssapi_ConstructProps)
    _init (config?: SaslGssapi_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static is_available(): boolean
    static $gtype: GObject.Type
}
interface SaslLogin_ConstructProps extends Sasl_ConstructProps {
}
class SaslLogin {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslLogin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslLogin_ConstructProps)
    _init (config?: SaslLogin_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslNTLM_ConstructProps extends Sasl_ConstructProps {
}
class SaslNTLM {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslNTLM, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslNTLM_ConstructProps)
    _init (config?: SaslNTLM_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslPOPB4SMTP_ConstructProps extends Sasl_ConstructProps {
}
class SaslPOPB4SMTP {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslPOPB4SMTP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslPOPB4SMTP_ConstructProps)
    _init (config?: SaslPOPB4SMTP_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslPlain_ConstructProps extends Sasl_ConstructProps {
}
class SaslPlain {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslPlain, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslPlain_ConstructProps)
    _init (config?: SaslPlain_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslXOAuth2_ConstructProps extends Sasl_ConstructProps {
}
class SaslXOAuth2 {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.Sasl */
    readonly parent: GObject.Object
    readonly priv: SaslPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslXOAuth2_ConstructProps)
    _init (config?: SaslXOAuth2_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslXOAuth2Google_ConstructProps extends SaslXOAuth2_ConstructProps {
}
class SaslXOAuth2Google {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslXOAuth2 */
    readonly parent: Sasl
    readonly priv: SaslXOAuth2Private
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Google, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslXOAuth2Google_ConstructProps)
    _init (config?: SaslXOAuth2Google_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslXOAuth2Outlook_ConstructProps extends SaslXOAuth2_ConstructProps {
}
class SaslXOAuth2Outlook {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslXOAuth2 */
    readonly parent: Sasl
    readonly priv: SaslXOAuth2Private
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Outlook, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslXOAuth2Outlook_ConstructProps)
    _init (config?: SaslXOAuth2Outlook_ConstructProps): void
    static $gtype: GObject.Type
}
interface SaslXOAuth2Yahoo_ConstructProps extends SaslXOAuth2_ConstructProps {
}
class SaslXOAuth2Yahoo {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of Camel-1.2.Camel.SaslXOAuth2 */
    readonly parent: Sasl
    readonly priv: SaslXOAuth2Private
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64(token: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challenge_base64_finish(result: Gio.AsyncResult): string
    challenge_base64_sync(token: string, cancellable?: Gio.Cancellable | null): string
    challenge_finish(result: Gio.AsyncResult): Uint8Array
    challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    get_authenticated(): boolean
    get_mechanism(): string
    get_service(): Service
    get_service_name(): string
    set_authenticated(authenticated: boolean): void
    try_empty_password(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    try_empty_password_finish(result: Gio.AsyncResult): boolean
    try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Sasl */
    vfunc_challenge_sync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    vfunc_try_empty_password_sync(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: (($obj: SaslXOAuth2Yahoo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SaslXOAuth2Yahoo_ConstructProps)
    _init (config?: SaslXOAuth2Yahoo_ConstructProps): void
    static $gtype: GObject.Type
}
interface Service_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Service */
    display_name?: string
    password?: string
    provider?: Provider
    proxy_resolver?: Gio.ProxyResolver
    session?: Session
    settings?: Settings
    uid?: string
}
class Service {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Session */
    junk_filter?: JunkFilter
    network_monitor?: Gio.NetworkMonitor
    online?: boolean
    user_cache_dir?: string
    user_data_dir?: string
}
class Session {
    /* Properties of Camel-1.2.Camel.Session */
    junk_filter: JunkFilter
    readonly main_context: GLib.MainContext
    network_monitor: Gio.NetworkMonitor
    online: boolean
    user_cache_dir: string
    user_data_dir: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Session */
    add_service(uid: string, protocol: string, type: ProviderType): Service
    addressbook_contains_sync(book_uid: string, email_address: string, cancellable?: Gio.Cancellable | null): boolean
    authenticate(service: Service, mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): boolean
    authenticate_sync(service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null): boolean
    forget_password(service: Service, item: string): boolean
    forward_to(folder: Folder, message: MimeMessage, address: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forward_to_finish(result: Gio.AsyncResult): boolean
    forward_to_sync(folder: Folder, message: MimeMessage, address: string, cancellable?: Gio.Cancellable | null): boolean
    get_filter_driver(type: string, for_folder?: Folder | null): FilterDriver
    get_junk_filter(): JunkFilter
    get_junk_headers(): GLib.HashTable
    get_oauth2_access_token_sync(service: Service, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    get_online(): boolean
    get_password(service: Service, prompt: string, item: string, flags: number): string
    get_recipient_certificates_sync(flags: number, recipients: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
    get_user_cache_dir(): string
    get_user_data_dir(): string
    idle_add(priority: number, function_: GLib.SourceFunc): number
    list_services(): Service[]
    lookup_addressbook(name: string): boolean
    ref_main_context(): GLib.MainContext
    ref_network_monitor(): Gio.NetworkMonitor
    ref_service(uid: string): Service
    ref_service_by_url(url: URL, type: ProviderType): Service
    remove_service(service: Service): void
    remove_services(): void
    set_junk_filter(junk_filter: JunkFilter): void
    set_junk_headers(headers: string[], values: string[]): void
    set_network_monitor(network_monitor?: Gio.NetworkMonitor | null): void
    set_online(online: boolean): void
    submit_job(description: string, callback: SessionCallback): void
    trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
    user_alert(service: Service, type: SessionAlertType, message: string): void
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
    /* Virtual methods of Camel-1.2.Camel.Session */
    vfunc_add_service(uid: string, protocol: string, type: ProviderType): Service
    vfunc_addressbook_contains_sync(book_uid: string, email_address: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_authenticate_sync(service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null): boolean
    vfunc_forget_password(service: Service, item: string): boolean
    vfunc_forward_to_sync(folder: Folder, message: MimeMessage, address: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_filter_driver(type: string, for_folder?: Folder | null): FilterDriver
    vfunc_get_oauth2_access_token_sync(service: Service, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    vfunc_get_password(service: Service, prompt: string, item: string, flags: number): string
    vfunc_get_recipient_certificates_sync(flags: number, recipients: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_certificates */ string[] ]
    vfunc_job_finished(cancellable: Gio.Cancellable | null, error: GLib.Error): void
    vfunc_job_started(cancellable?: Gio.Cancellable | null): void
    vfunc_lookup_addressbook(name: string): boolean
    vfunc_remove_service(service: Service): void
    vfunc_trust_prompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
    vfunc_user_alert(service: Service, type: SessionAlertType, message: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Session */
    connect(sigName: "job-finished", callback: (($obj: Session, object: Gio.Cancellable | null, p0: GLib.Error) => void)): number
    connect_after(sigName: "job-finished", callback: (($obj: Session, object: Gio.Cancellable | null, p0: GLib.Error) => void)): number
    emit(sigName: "job-finished", object: Gio.Cancellable | null, p0: GLib.Error): void
    connect(sigName: "job-started", callback: (($obj: Session, object?: Gio.Cancellable | null) => void)): number
    connect_after(sigName: "job-started", callback: (($obj: Session, object?: Gio.Cancellable | null) => void)): number
    emit(sigName: "job-started", object?: Gio.Cancellable | null): void
    connect(sigName: "user-alert", callback: (($obj: Session, service: Service, type: SessionAlertType, message: string) => void)): number
    connect_after(sigName: "user-alert", callback: (($obj: Session, service: Service, type: SessionAlertType, message: string) => void)): number
    emit(sigName: "user-alert", service: Service, type: SessionAlertType, message: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::junk-filter", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-filter", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::main-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-monitor", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-monitor", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-cache-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-cache-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-data-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    static $gtype: GObject.Type
}
interface Settings_ConstructProps extends GObject.Object_ConstructProps {
}
class Settings {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static list_settings(settings_class: Settings | Function | GObject.Type, n_settings: number): GObject.ParamSpec
    static $gtype: GObject.Type
}
interface Store_ConstructProps extends Service_ConstructProps {
}
class Store {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Service */
    readonly parent: Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Store */
    can_refresh_folder(info: FolderInfo): boolean
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    delete_cached_folder(folder_name: string): void
    delete_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_folder_finish(result: Gio.AsyncResult): boolean
    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    dup_opened_folders(): Folder[]
    folder_created(folder_info: FolderInfo): void
    folder_deleted(folder_info: FolderInfo): void
    folder_info_stale(): void
    folder_opened(folder: Folder): void
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_finish(result: Gio.AsyncResult): Folder | null
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
    get_inbox_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_junk_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_permissions(): number
    get_trash_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    initial_setup(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    maybe_run_db_maintenance(): boolean
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rename_folder_finish(result: Gio.AsyncResult): boolean
    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    set_flags(flags: number): void
    set_permissions(permissions: number): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Store */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_folder_created(folder_info: FolderInfo): void
    vfunc_folder_deleted(folder_info: FolderInfo): void
    vfunc_folder_info_stale(): void
    vfunc_folder_opened(folder: Folder): void
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    vfunc_get_can_auto_save_changes(): boolean
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: (($obj: Store, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-created", callback: (($obj: Store, object: FolderInfo) => void)): number
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: (($obj: Store, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-deleted", callback: (($obj: Store, object: FolderInfo) => void)): number
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (($obj: Store) => void)): number
    connect_after(sigName: "folder-info-stale", callback: (($obj: Store) => void)): number
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: (($obj: Store, object: Folder) => void)): number
    connect_after(sigName: "folder-opened", callback: (($obj: Store, object: Folder) => void)): number
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: (($obj: Store, object: string, p0: FolderInfo) => void)): number
    connect_after(sigName: "folder-renamed", callback: (($obj: Store, object: string, p0: FolderInfo) => void)): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Store, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Store_ConstructProps)
    _init (config?: Store_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface StoreSettings_ConstructProps extends Settings_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.StoreSettings */
    filter_inbox?: boolean
    store_changes_interval?: number
}
class StoreSettings {
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filter_inbox: boolean
    store_changes_interval: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StoreSettings */
    get_filter_inbox(): boolean
    get_store_changes_interval(): number
    set_filter_inbox(filter_inbox: boolean): void
    set_store_changes_interval(interval: number): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settings_b: Settings): boolean
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
    /* Virtual methods of Camel-1.2.Camel.Settings */
    vfunc_clone(): Settings
    vfunc_equal(settings_b: Settings): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-inbox", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::store-changes-interval", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: (($obj: StoreSettings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoreSettings_ConstructProps)
    _init (config?: StoreSettings_ConstructProps): void
    static $gtype: GObject.Type
}
interface StoreSummary_ConstructProps extends GObject.Object_ConstructProps {
}
class StoreSummary {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StoreSummary */
    add(info: StoreInfo): void
    array(): StoreInfo[]
    array_free(array: StoreInfo[]): void
    connect_folder_summary(path: string, folder_summary: FolderSummary): boolean
    count(): number
    disconnect_folder_summary(folder_summary: FolderSummary): boolean
    info_unref(info: StoreInfo): void
    load(): number
    remove(info: StoreInfo): void
    remove_path(path: string): void
    save(): number
    set_filename(filename: string): void
    sort(compare_func: GLib.CompareDataFunc): void
    touch(): void
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
    /* Virtual methods of Camel-1.2.Camel.StoreSummary */
    vfunc_store_info_free(info: StoreInfo): void
    vfunc_store_info_save(file: object | null, info: StoreInfo): number
    vfunc_store_info_set_string(info: StoreInfo, type: number, value: string): void
    vfunc_summary_header_load(file?: object | null): number
    vfunc_summary_header_save(file?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StoreSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StoreSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StoreSummary_ConstructProps)
    _init (config?: StoreSummary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoreSummary
    static $gtype: GObject.Type
}
interface Stream_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Stream */
    base_stream?: Gio.IOStream
}
class Stream {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_stream: Gio.IOStream): Stream
    static $gtype: GObject.Type
}
interface StreamBuffer_ConstructProps extends Stream_ConstructProps {
}
class StreamBuffer {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamBuffer */
    discard_cache(): void
    gets(buf: number[], cancellable?: Gio.Cancellable | null): number
    read_line(cancellable?: Gio.Cancellable | null): string | null
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.StreamBuffer */
    vfunc_init(stream: Stream, mode: StreamBufferMode): void
    vfunc_init_vbuf(stream: Stream, mode: StreamBufferMode, buf: string, size: number): void
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamBuffer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamBuffer_ConstructProps)
    _init (config?: StreamBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Stream, mode: StreamBufferMode): StreamBuffer
    /* Function overloads */
    static new(base_stream: Gio.IOStream): StreamBuffer
    static $gtype: GObject.Type
}
interface StreamFilter_ConstructProps extends Stream_ConstructProps {
}
class StreamFilter {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamFilter */
    add(filter: MimeFilter): number
    get_source(): Stream
    remove(id: number): void
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.StreamFilter */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFilter_ConstructProps)
    _init (config?: StreamFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Stream): StreamFilter
    /* Function overloads */
    static new(base_stream: Gio.IOStream): StreamFilter
    static $gtype: GObject.Type
}
interface StreamFs_ConstructProps extends Stream_ConstructProps {
}
class StreamFs {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamFs */
    get_fd(): number
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.StreamFs */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamFs, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFs_ConstructProps)
    _init (config?: StreamFs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_fd(fd: number): StreamFs
    static new_with_name(name: string, flags: number, mode: number): StreamFs
    static $gtype: GObject.Type
}
interface StreamMem_ConstructProps extends Stream_ConstructProps {
}
class StreamMem {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamMem */
    get_byte_array(): Uint8Array
    set_buffer(buffer: Uint8Array): void
    set_byte_array(buffer: Uint8Array): void
    set_secure(): void
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.StreamMem */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamMem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamMem_ConstructProps)
    _init (config?: StreamMem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamMem
    /* Function overloads */
    static new(base_stream: Gio.IOStream): StreamMem
    static new_with_buffer(buffer: Uint8Array): StreamMem
    static new_with_byte_array(buffer: Uint8Array): StreamMem
    static $gtype: GObject.Type
}
interface StreamNull_ConstructProps extends Stream_ConstructProps {
}
class StreamNull {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamNull */
    get_bytes_written(): number
    get_ends_with_crlf(): boolean
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.StreamNull */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamNull, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamNull_ConstructProps)
    _init (config?: StreamNull_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamNull
    /* Function overloads */
    static new(base_stream: Gio.IOStream): StreamNull
    static $gtype: GObject.Type
}
interface StreamProcess_ConstructProps extends Stream_ConstructProps {
}
class StreamProcess {
    /* Properties of Camel-1.2.Camel.Stream */
    base_stream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamProcess */
    connect(command: string, env: string): number
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    ref_base_stream(): Gio.IOStream | null
    set_base_stream(base_stream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    write_string(string: string, cancellable?: Gio.Cancellable | null): number
    write_to_stream(output_stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    /* Methods of Gio-2.0.Gio.Seekable */
    can_seek(): boolean
    can_truncate(): boolean
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.StreamProcess */
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Stream */
    vfunc_close(cancellable?: Gio.Cancellable | null): number
    vfunc_eos(): boolean
    vfunc_flush(cancellable?: Gio.Cancellable | null): number
    vfunc_read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    vfunc_can_seek(): boolean
    vfunc_can_truncate(): boolean
    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    vfunc_tell(): number
    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: (($obj: StreamProcess, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamProcess_ConstructProps)
    _init (config?: StreamProcess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamProcess
    /* Function overloads */
    static new(base_stream: Gio.IOStream): StreamProcess
    static $gtype: GObject.Type
}
interface TextIndex_ConstructProps extends Index_ConstructProps {
}
class TextIndex {
    /* Fields of Camel-1.2.Camel.Index */
    readonly parent: GObject.Object
    readonly priv: IndexPrivate
    readonly path: string
    readonly version: number
    readonly flags: number
    readonly state: number
    readonly normalize: IndexNorm
    readonly normalize_data: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.TextIndex */
    dump(): void
    info(): void
    validate(): void
    /* Methods of Camel-1.2.Camel.Index */
    add_name(name: string): IndexName | null
    compress(): number
    construct(path: string, flags: number): void
    delete(): number
    delete_name(name: string): void
    find(word: string): IndexCursor | null
    find_name(name: string): IndexCursor | null
    has_name(name: string): number
    rename(path: string): number
    set_normalize(func: IndexNorm): void
    sync(): number
    words(): IndexCursor | null
    write_name(idn: IndexName): number
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
    /* Virtual methods of Camel-1.2.Camel.Index */
    vfunc_add_name(name: string): IndexName | null
    vfunc_compress(): number
    vfunc_delete_(): number
    vfunc_delete_name(name: string): void
    vfunc_find(word: string): IndexCursor | null
    vfunc_find_name(name: string): IndexCursor | null
    vfunc_has_name(name: string): number
    vfunc_rename(path: string): number
    vfunc_sync(): number
    vfunc_words(): IndexCursor | null
    vfunc_write_name(idn: IndexName): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextIndex, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextIndex, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextIndex_ConstructProps)
    _init (config?: TextIndex_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: number): TextIndex
    static check(path: string): number
    static remove(old: string): number
    static rename(old: string, new_: string): number
    static $gtype: GObject.Type
}
interface TextIndexCursor_ConstructProps extends IndexCursor_ConstructProps {
}
class TextIndexCursor {
    /* Fields of Camel-1.2.Camel.IndexCursor */
    readonly parent: GObject.Object
    readonly priv: IndexCursorPrivate
    readonly index: Index
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    /* Virtual methods of Camel-1.2.Camel.IndexCursor */
    vfunc_next(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextIndexCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextIndexCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextIndexCursor_ConstructProps)
    _init (config?: TextIndexCursor_ConstructProps): void
    static $gtype: GObject.Type
}
interface TextIndexKeyCursor_ConstructProps extends IndexCursor_ConstructProps {
}
class TextIndexKeyCursor {
    /* Fields of Camel-1.2.Camel.IndexCursor */
    readonly parent: GObject.Object
    readonly priv: IndexCursorPrivate
    readonly index: Index
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    /* Virtual methods of Camel-1.2.Camel.IndexCursor */
    vfunc_next(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextIndexKeyCursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextIndexKeyCursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextIndexKeyCursor_ConstructProps)
    _init (config?: TextIndexKeyCursor_ConstructProps): void
    static $gtype: GObject.Type
}
interface TextIndexName_ConstructProps extends IndexName_ConstructProps {
}
class TextIndexName {
    /* Fields of Camel-1.2.Camel.IndexName */
    readonly parent: GObject.Object
    readonly priv: IndexNamePrivate
    readonly index: Index
    readonly name: string
    readonly buffer: Uint8Array
    readonly words: GLib.HashTable
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexName */
    add_buffer(buffer: string, len: number): number
    add_word(word: string): void
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
    /* Virtual methods of Camel-1.2.Camel.IndexName */
    vfunc_add_buffer(buffer: string, len: number): number
    vfunc_add_word(word: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextIndexName, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextIndexName, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextIndexName_ConstructProps)
    _init (config?: TextIndexName_ConstructProps): void
    static $gtype: GObject.Type
}
interface Transport_ConstructProps extends Service_ConstructProps {
}
class Transport {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Service */
    readonly parent: Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Transport */
    send_to(message: MimeMessage, from: Address, recipients: Address, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    send_to_sync(message: MimeMessage, from: Address, recipients: Address, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.Transport */
    vfunc_send_to_sync(message: MimeMessage, from: Address, recipients: Address, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection-status", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: Transport, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Transport_ConstructProps)
    _init (config?: Transport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface VTrashFolder_ConstructProps extends VeeFolder_ConstructProps {
}
class VTrashFolder {
    /* Properties of Camel-1.2.Camel.VeeFolder */
    auto_update: boolean
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    display_name: string
    full_name: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.VeeFolder */
    readonly parent: Folder
    readonly priv: VeeFolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VTrashFolder */
    get_folder_type(): VTrashFolderType
    /* Methods of Camel-1.2.Camel.VeeFolder */
    add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    add_vuid(mi_data?: object | null, changes?: FolderChangeInfo | null): void
    construct(flags: number): void
    get_auto_update(): boolean
    get_expression(): string
    get_flags(): number
    get_location(vinfo: VeeMessageInfo): [ /* returnType */ Folder, /* realuid */ string | null ]
    get_vee_uid_folder(vee_message_uid: string): Folder | null
    ignore_next_changed_event(subfolder: Folder): void
    propagate_skipped_changes(): void
    rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    ref_folders(): Folder[]
    remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    remove_from_ignore_changed_event(subfolder: Folder): void
    remove_vuid(mi_data?: object | null, changes?: FolderChangeInfo | null): void
    set_auto_update(auto_update: boolean): void
    set_expression(expression: string): void
    set_folders(folders: Folder[], cancellable?: Gio.Cancellable | null): void
    /* Methods of Camel-1.2.Camel.Folder */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmp_uids(uid1: string, uid2: string): number
    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dup_description(): string
    dup_display_name(): string
    dup_full_name(): string
    expunge(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expunge_finish(result: Gio.AsyncResult): boolean
    expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    free_deep(array: string[]): void
    free_shallow(array: string[]): void
    free_summary(array: MessageInfo[]): void
    free_uids(array: string[]): void
    freeze(): void
    get_deleted_message_count(): number
    get_description(): string
    get_display_name(): string
    get_filename(uid: string): string
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    get_message_info(uid: string): MessageInfo
    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
    get_quota_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    get_summary(): string[]
    get_uids(): string[]
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    has_summary_capability(): boolean
    is_frozen(): boolean
    lock(): void
    prepare_content_refresh(): void
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    refresh_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_info_finish(result: Gio.AsyncResult): boolean
    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    rename(new_name: string): void
    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    search_free(result: string[]): void
    set_description(description: string): void
    set_display_name(display_name: string): void
    set_flags(folder_flags: number): void
    set_full_name(full_name: string): void
    set_lock_async(skip_folder_lock: boolean): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    sort_uids(uids: string[]): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    take_folder_summary(summary: FolderSummary): void
    thaw(): void
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.VeeFolder */
    vfunc_add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_folder_changed(subfolder: Folder, changes: FolderChangeInfo): void
    vfunc_rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_set_expression(expression: string): void
    /* Virtual methods of Camel-1.2.Camel.Folder */
    vfunc_append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    vfunc_changed(changes: FolderChangeInfo): void
    vfunc_cmp_uids(uid1: string, uid2: string): number
    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_free_summary(array: MessageInfo[]): void
    vfunc_free_uids(array: string[]): void
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    vfunc_get_message_info(uid: string): MessageInfo
    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    vfunc_get_summary(): string[]
    vfunc_get_uids(): string[]
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    vfunc_prepare_content_refresh(): void
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_free(result: string[]): void
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    vfunc_sort_uids(uids: string[]): void
    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_thaw(): void
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: (($obj: VTrashFolder, changes: FolderChangeInfo) => void)): number
    connect_after(sigName: "changed", callback: (($obj: VTrashFolder, changes: FolderChangeInfo) => void)): number
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (($obj: VTrashFolder) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: VTrashFolder) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: (($obj: VTrashFolder, old_name: string) => void)): number
    connect_after(sigName: "renamed", callback: (($obj: VTrashFolder, old_name: string) => void)): number
    emit(sigName: "renamed", old_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-update", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-update", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VTrashFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VTrashFolder_ConstructProps)
    _init (config?: VTrashFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent_store: Store, type: VTrashFolderType): VTrashFolder
    /* Function overloads */
    static new(parent_store: Store, full: string, flags: number): VTrashFolder
    static $gtype: GObject.Type
}
interface VeeDataCache_ConstructProps extends GObject.Object_ConstructProps {
}
class VeeDataCache {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeDataCache */
    add_subfolder(subfolder: Folder): void
    contains_message_info_data(folder: Folder, orig_message_uid: string): boolean
    foreach_message_info_data(fromfolder: Folder, func: ForeachInfoData): void
    get_message_info_data(folder: Folder, orig_message_uid: string): VeeMessageInfoData
    get_message_info_data_by_vuid(vee_message_uid: string): VeeMessageInfoData | null
    get_subfolder_data(folder: Folder): VeeSubfolderData
    remove_message_info_data(mi_data: VeeMessageInfoData): void
    remove_subfolder(subfolder: Folder): void
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
    connect(sigName: "notify", callback: (($obj: VeeDataCache, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeDataCache, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeDataCache_ConstructProps)
    _init (config?: VeeDataCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VeeDataCache
    static $gtype: GObject.Type
}
interface VeeFolder_ConstructProps extends Folder_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.VeeFolder */
    auto_update?: boolean
}
class VeeFolder {
    /* Properties of Camel-1.2.Camel.VeeFolder */
    auto_update: boolean
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    display_name: string
    full_name: string
    mark_seen: ThreeState
    mark_seen_timeout: number
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Folder */
    readonly parent: Object
    readonly priv: FolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeFolder */
    add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    add_vuid(mi_data?: object | null, changes?: FolderChangeInfo | null): void
    construct(flags: number): void
    get_auto_update(): boolean
    get_expression(): string
    get_flags(): number
    get_location(vinfo: VeeMessageInfo): [ /* returnType */ Folder, /* realuid */ string | null ]
    get_vee_uid_folder(vee_message_uid: string): Folder | null
    ignore_next_changed_event(subfolder: Folder): void
    propagate_skipped_changes(): void
    rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    ref_folders(): Folder[]
    remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    remove_from_ignore_changed_event(subfolder: Folder): void
    remove_vuid(mi_data?: object | null, changes?: FolderChangeInfo | null): void
    set_auto_update(auto_update: boolean): void
    set_expression(expression: string): void
    set_folders(folders: Folder[], cancellable?: Gio.Cancellable | null): void
    /* Methods of Camel-1.2.Camel.Folder */
    append_message(message: MimeMessage, info: MessageInfo | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    append_message_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmp_uids(uid1: string, uid2: string): number
    count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dup_description(): string
    dup_display_name(): string
    dup_full_name(): string
    expunge(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expunge_finish(result: Gio.AsyncResult): boolean
    expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    free_deep(array: string[]): void
    free_shallow(array: string[]): void
    free_summary(array: MessageInfo[]): void
    free_uids(array: string[]): void
    freeze(): void
    get_deleted_message_count(): number
    get_description(): string
    get_display_name(): string
    get_filename(uid: string): string
    get_folder_summary(): FolderSummary
    get_frozen_count(): number
    get_full_name(): string
    get_mark_seen(): ThreeState
    get_mark_seen_timeout(): number
    get_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    get_message_count(): number
    get_message_finish(result: Gio.AsyncResult): MimeMessage
    get_message_flags(uid: string): number
    get_message_info(uid: string): MessageInfo
    get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    get_message_user_flag(uid: string, name: string): boolean
    get_message_user_tag(uid: string, name: string): string
    get_parent_store(): object | null
    get_permanent_flags(): number
    get_quota_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_quota_info_finish(result: Gio.AsyncResult): FolderQuotaInfo
    get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    get_summary(): string[]
    get_uids(): string[]
    get_uncached_uids(uids: string[]): string[]
    get_unread_message_count(): number
    has_summary_capability(): boolean
    is_frozen(): boolean
    lock(): void
    prepare_content_refresh(): void
    purge_message_cache(start_uid: string, end_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purge_message_cache_finish(result: Gio.AsyncResult): boolean
    purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    refresh_info(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refresh_info_finish(result: Gio.AsyncResult): boolean
    refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    rename(new_name: string): void
    search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    search_free(result: string[]): void
    set_description(description: string): void
    set_display_name(display_name: string): void
    set_flags(folder_flags: number): void
    set_full_name(full_name: string): void
    set_lock_async(skip_folder_lock: boolean): void
    set_mark_seen(mark_seen: ThreeState): void
    set_mark_seen_timeout(timeout: number): void
    set_message_flags(uid: string, mask: number, set: number): boolean
    set_message_user_flag(uid: string, name: string, value: boolean): void
    set_message_user_tag(uid: string, name: string, value: string): void
    sort_uids(uids: string[]): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_message(message_uid: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_message_finish(result: Gio.AsyncResult): boolean
    synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    take_folder_summary(summary: FolderSummary): void
    thaw(): void
    transfer_messages_to(message_uids: string[], destination: Folder, delete_originals: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transfer_messages_to_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.VeeFolder */
    vfunc_add_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_folder_changed(subfolder: Folder, changes: FolderChangeInfo): void
    vfunc_rebuild_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_remove_folder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    vfunc_set_expression(expression: string): void
    /* Virtual methods of Camel-1.2.Camel.Folder */
    vfunc_append_message_sync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appended_uid */ string | null ]
    vfunc_changed(changes: FolderChangeInfo): void
    vfunc_cmp_uids(uid1: string, uid2: string): number
    vfunc_count_by_expression(expression: string, cancellable?: Gio.Cancellable | null): number
    vfunc_delete_(): void
    vfunc_deleted(): void
    vfunc_expunge_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_free_summary(array: MessageInfo[]): void
    vfunc_free_uids(array: string[]): void
    vfunc_freeze(): void
    vfunc_get_filename(uid: string): string
    vfunc_get_message_cached(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    vfunc_get_message_count(): number
    vfunc_get_message_flags(uid: string): number
    vfunc_get_message_info(uid: string): MessageInfo
    vfunc_get_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    vfunc_get_message_user_flag(uid: string, name: string): boolean
    vfunc_get_message_user_tag(uid: string, name: string): string
    vfunc_get_permanent_flags(): number
    vfunc_get_quota_info_sync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    vfunc_get_summary(): string[]
    vfunc_get_uids(): string[]
    vfunc_get_uncached_uids(uids: string[]): string[]
    vfunc_has_search_capability(): boolean
    vfunc_is_frozen(): boolean
    vfunc_prepare_content_refresh(): void
    vfunc_purge_message_cache_sync(start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_refresh_info_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_rename(new_name: string): void
    vfunc_renamed(old_name: string): void
    vfunc_search_by_expression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_by_uids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    vfunc_search_free(result: string[]): void
    vfunc_set_message_flags(uid: string, mask: number, set: number): boolean
    vfunc_set_message_user_flag(uid: string, name: string, value: boolean): void
    vfunc_set_message_user_tag(uid: string, name: string, value: string): void
    vfunc_sort_uids(uids: string[]): void
    vfunc_synchronize_message_sync(message_uid: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_thaw(): void
    vfunc_transfer_messages_to_sync(message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: (($obj: VeeFolder, changes: FolderChangeInfo) => void)): number
    connect_after(sigName: "changed", callback: (($obj: VeeFolder, changes: FolderChangeInfo) => void)): number
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (($obj: VeeFolder) => void)): number
    connect_after(sigName: "deleted", callback: (($obj: VeeFolder) => void)): number
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: (($obj: VeeFolder, old_name: string) => void)): number
    connect_after(sigName: "renamed", callback: (($obj: VeeFolder, old_name: string) => void)): number
    emit(sigName: "renamed", old_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-update", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-update", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::full-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mark-seen-timeout", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mark-seen-timeout", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VeeFolder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeFolder_ConstructProps)
    _init (config?: VeeFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent_store: Store, full: string, flags: number): VeeFolder
    static $gtype: GObject.Type
}
interface VeeMessageInfo_ConstructProps extends MessageInfo_ConstructProps {
}
class VeeMessageInfo {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abort_notifications: boolean
    cc: string
    date_received: number
    date_sent: number
    dirty: boolean
    flags: MessageFlags
    folder_flagged: boolean
    readonly folder_flagged_stamp: number
    from: string
    headers: NameValueArray
    message_id: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    user_flags: NamedFlags
    user_headers: NameValueArray
    user_tags: NameValueArray
    /* Fields of Camel-1.2.Camel.MessageInfo */
    readonly parent: GObject.Object
    readonly priv: MessageInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeMessageInfo */
    get_original_folder(): Folder
    get_original_summary(): FolderSummary
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assign_summary?: FolderSummary | null): MessageInfo
    dump(): void
    dup_headers(): NameValueArray | null
    dup_preview(): string | null
    dup_references(): number[] | null
    dup_user_flags(): NamedFlags
    dup_user_header(name: string): string | null
    dup_user_headers(): NameValueArray | null
    dup_user_tag(name: string): string | null
    dup_user_tags(): NameValueArray | null
    freeze_notifications(): void
    get_abort_notifications(): boolean
    get_cc(): string
    get_date_received(): number
    get_date_sent(): number
    get_dirty(): boolean
    get_flags(): number
    get_folder_flagged(): boolean
    get_folder_flagged_stamp(): number
    get_from(): string
    get_headers(): NameValueArray | null
    get_message_id(): number
    get_mlist(): string
    get_notifications_frozen(): boolean
    get_preview(): string | null
    get_references(): number[] | null
    get_size(): number
    get_subject(): string
    get_to(): string
    get_uid(): string
    get_user_flag(name: string): boolean
    get_user_flags(): NamedFlags | null
    get_user_header(name: string): string | null
    get_user_headers(): NameValueArray | null
    get_user_tag(name: string): string | null
    get_user_tags(): NameValueArray | null
    load(record: MIRecord, bdata_ptr: string): boolean
    pooldup_uid(): string
    property_lock(): void
    property_unlock(): void
    ref_summary(): object | null
    save(record: MIRecord, bdata_str: GLib.String): boolean
    set_abort_notifications(abort_notifications: boolean): void
    set_cc(cc?: string | null): boolean
    set_date_received(date_received: number): boolean
    set_date_sent(date_sent: number): boolean
    set_dirty(dirty: boolean): void
    set_flags(mask: number, set: number): boolean
    set_folder_flagged(folder_flagged: boolean): boolean
    set_from(from?: string | null): boolean
    set_message_id(message_id: number): boolean
    set_mlist(mlist?: string | null): boolean
    set_preview(preview?: string | null): boolean
    set_size(size: number): boolean
    set_subject(subject?: string | null): boolean
    set_to(to?: string | null): boolean
    set_uid(uid: string): boolean
    set_user_flag(name: string, state: boolean): boolean
    set_user_header(name: string, value?: string | null): boolean
    set_user_tag(name: string, value?: string | null): boolean
    take_headers(headers?: NameValueArray | null): boolean
    take_references(references?: number[] | null): boolean
    take_user_flags(user_flags?: NamedFlags | null): boolean
    take_user_headers(headers?: NameValueArray | null): boolean
    take_user_tags(user_tags?: NameValueArray | null): boolean
    thaw_notifications(): void
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
    /* Virtual methods of Camel-1.2.Camel.MessageInfo */
    vfunc_clone(assign_summary?: FolderSummary | null): MessageInfo
    vfunc_dup_user_flags(): NamedFlags
    vfunc_dup_user_tags(): NameValueArray | null
    vfunc_get_cc(): string
    vfunc_get_date_received(): number
    vfunc_get_date_sent(): number
    vfunc_get_flags(): number
    vfunc_get_from(): string
    vfunc_get_headers(): NameValueArray | null
    vfunc_get_message_id(): number
    vfunc_get_mlist(): string
    vfunc_get_preview(): string | null
    vfunc_get_references(): number[] | null
    vfunc_get_size(): number
    vfunc_get_subject(): string
    vfunc_get_to(): string
    vfunc_get_user_flag(name: string): boolean
    vfunc_get_user_flags(): NamedFlags | null
    vfunc_get_user_header(name: string): string | null
    vfunc_get_user_headers(): NameValueArray | null
    vfunc_get_user_tag(name: string): string | null
    vfunc_get_user_tags(): NameValueArray | null
    vfunc_load(record: MIRecord | null, bdata_ptr: string): boolean
    vfunc_save(record: MIRecord | null, bdata_str: GLib.String): boolean
    vfunc_set_cc(cc?: string | null): boolean
    vfunc_set_date_received(date_received: number): boolean
    vfunc_set_date_sent(date_sent: number): boolean
    vfunc_set_flags(mask: number, set: number): boolean
    vfunc_set_from(from?: string | null): boolean
    vfunc_set_message_id(message_id: number): boolean
    vfunc_set_mlist(mlist?: string | null): boolean
    vfunc_set_preview(preview?: string | null): boolean
    vfunc_set_size(size: number): boolean
    vfunc_set_subject(subject?: string | null): boolean
    vfunc_set_to(to?: string | null): boolean
    vfunc_set_user_flag(name: string, state: boolean): boolean
    vfunc_set_user_header(name: string, value?: string | null): boolean
    vfunc_set_user_tag(name: string, value?: string | null): boolean
    vfunc_take_headers(headers?: NameValueArray | null): boolean
    vfunc_take_references(references?: number[] | null): boolean
    vfunc_take_user_flags(user_flags?: NamedFlags | null): boolean
    vfunc_take_user_headers(headers?: NameValueArray | null): boolean
    vfunc_take_user_tags(user_tags?: NameValueArray | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::abort-notifications", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cc", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-received", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::date-sent", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dirty", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::folder-flagged-stamp", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::from", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-id", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mlist", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preview", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::references", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::to", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uid", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-tags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: (($obj: VeeMessageInfo, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeMessageInfo_ConstructProps)
    _init (config?: VeeMessageInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary: FolderSummary, original_summary: FolderSummary, vuid: string): VeeMessageInfo
    /* Function overloads */
    static new(summary?: FolderSummary | null): VeeMessageInfo
    static $gtype: GObject.Type
}
interface VeeMessageInfoData_ConstructProps extends GObject.Object_ConstructProps {
}
class VeeMessageInfoData {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeMessageInfoData */
    get_orig_message_uid(): string
    get_subfolder_data(): VeeSubfolderData
    get_vee_message_uid(): string
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
    connect(sigName: "notify", callback: (($obj: VeeMessageInfoData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeMessageInfoData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeMessageInfoData_ConstructProps)
    _init (config?: VeeMessageInfoData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subfolder_data: VeeSubfolderData, orig_message_uid: string): VeeMessageInfoData
    static $gtype: GObject.Type
}
interface VeeStore_ConstructProps extends Store_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.VeeStore */
    unmatched_enabled?: boolean
}
class VeeStore {
    /* Properties of Camel-1.2.Camel.VeeStore */
    unmatched_enabled: boolean
    /* Properties of Camel-1.2.Camel.Service */
    readonly connection_status: ServiceConnectionStatus
    display_name: string
    password: string
    proxy_resolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    state_filename: string
    /* Fields of Camel-1.2.Camel.Store */
    readonly parent: Service
    readonly priv: StorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeStore */
    get_unmatched_enabled(): boolean
    get_unmatched_folder(): object | null
    get_vee_data_cache(): VeeFolder
    note_subfolder_unused(subfolder: Folder, unused_by: VeeFolder): void
    note_subfolder_used(subfolder: Folder, used_by: VeeFolder): void
    note_vuid_unused(mi_data: VeeMessageInfoData, unused_by: VeeFolder): void
    note_vuid_used(mi_data: VeeMessageInfoData, used_by: VeeFolder): void
    rebuild_unmatched_folder(cancellable?: Gio.Cancellable | null): void
    set_unmatched_enabled(is_enabled: boolean): void
    /* Methods of Camel-1.2.Camel.Store */
    can_refresh_folder(info: FolderInfo): boolean
    create_folder(parent_name: string | null, folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    create_folder_finish(result: Gio.AsyncResult): FolderInfo | null
    create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    delete_cached_folder(folder_name: string): void
    delete_folder(folder_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_folder_finish(result: Gio.AsyncResult): boolean
    delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    dup_opened_folders(): Folder[]
    folder_created(folder_info: FolderInfo): void
    folder_deleted(folder_info: FolderInfo): void
    folder_info_stale(): void
    folder_opened(folder: Folder): void
    folder_renamed(old_name: string, folder_info: FolderInfo): void
    get_can_auto_save_changes(): boolean
    get_db(): DB
    get_flags(): number
    get_folder(folder_name: string, flags: StoreGetFolderFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_finish(result: Gio.AsyncResult): Folder | null
    get_folder_info(top: string | null, flags: StoreGetFolderInfoFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_folder_info_finish(result: Gio.AsyncResult): FolderInfo | null
    get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    get_folders_bag(): ObjectBag
    get_inbox_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_inbox_folder_finish(result: Gio.AsyncResult): Folder | null
    get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_junk_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_junk_folder_finish(result: Gio.AsyncResult): Folder | null
    get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    get_permissions(): number
    get_trash_folder(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_trash_folder_finish(result: Gio.AsyncResult): Folder | null
    get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    initial_setup(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initial_setup_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    maybe_run_db_maintenance(): boolean
    rename_folder(old_name: string, new_name: string, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    rename_folder_finish(result: Gio.AsyncResult): boolean
    rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    set_flags(flags: number): void
    set_permissions(permissions: number): void
    synchronize(expunge: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronize_finish(result: Gio.AsyncResult): boolean
    synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticate_finish(result: Gio.AsyncResult): AuthenticationResult
    authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_finish(result: Gio.AsyncResult): boolean
    connect_sync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_finish(result: Gio.AsyncResult): boolean
    disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dup_display_name(): string
    dup_password(): string
    get_connection_status(): ServiceConnectionStatus
    get_display_name(): string
    get_name(brief: boolean): string
    get_password(): string
    get_provider(): Provider
    get_uid(): string
    get_user_cache_dir(): string
    get_user_data_dir(): string
    migrate_files(): void
    new_camel_url(): URL
    query_auth_types(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_auth_types_finish(result: Gio.AsyncResult): ServiceAuthType[]
    query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queue_task(task: Gio.Task, task_func: Gio.TaskThreadFunc): void
    ref_proxy_resolver(): Gio.ProxyResolver
    ref_session(): Session
    ref_settings(): Settings
    set_display_name(display_name: string): void
    set_password(password: string): void
    set_proxy_resolver(proxy_resolver: Gio.ProxyResolver): void
    set_settings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    get_state_filename(): string
    set_state_filename(state_filename: string): void
    state_read(): number
    state_write(): number
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
    /* Virtual methods of Camel-1.2.Camel.VeeStore */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Store */
    vfunc_can_refresh_folder(info: FolderInfo): boolean
    vfunc_create_folder_sync(parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_delete_folder_sync(folder_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_folder_created(folder_info: FolderInfo): void
    vfunc_folder_deleted(folder_info: FolderInfo): void
    vfunc_folder_info_stale(): void
    vfunc_folder_opened(folder: Folder): void
    vfunc_folder_renamed(old_name: string, folder_info: FolderInfo): void
    vfunc_get_can_auto_save_changes(): boolean
    vfunc_get_folder_info_sync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    vfunc_get_folder_sync(folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_inbox_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_junk_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_get_trash_folder_sync(cancellable?: Gio.Cancellable | null): Folder | null
    vfunc_initial_setup_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    vfunc_rename_folder_sync(old_name: string, new_name: string, cancellable?: Gio.Cancellable | null): boolean
    vfunc_synchronize_sync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Service */
    vfunc_authenticate_sync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    vfunc_connect_sync(cancellable?: Gio.Cancellable | null): boolean
    vfunc_disconnect_sync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    vfunc_get_name(brief: boolean): string
    vfunc_query_auth_types_sync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of Camel-1.2.Camel.Object */
    vfunc_state_read(fp?: object | null): number
    vfunc_state_write(fp?: object | null): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: (($obj: VeeStore, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-created", callback: (($obj: VeeStore, object: FolderInfo) => void)): number
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: (($obj: VeeStore, object: FolderInfo) => void)): number
    connect_after(sigName: "folder-deleted", callback: (($obj: VeeStore, object: FolderInfo) => void)): number
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (($obj: VeeStore) => void)): number
    connect_after(sigName: "folder-info-stale", callback: (($obj: VeeStore) => void)): number
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: (($obj: VeeStore, object: Folder) => void)): number
    connect_after(sigName: "folder-opened", callback: (($obj: VeeStore, object: Folder) => void)): number
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: (($obj: VeeStore, object: string, p0: FolderInfo) => void)): number
    connect_after(sigName: "folder-renamed", callback: (($obj: VeeStore, object: string, p0: FolderInfo) => void)): number
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unmatched-enabled", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unmatched-enabled", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-status", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-status", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy-resolver", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state-filename", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: (($obj: VeeStore, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeStore_ConstructProps)
    _init (config?: VeeStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VeeStore
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface VeeSubfolderData_ConstructProps extends GObject.Object_ConstructProps {
}
class VeeSubfolderData {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeSubfolderData */
    get_folder(): Folder
    get_folder_id(): string
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
    connect(sigName: "notify", callback: (($obj: VeeSubfolderData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeSubfolderData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeSubfolderData_ConstructProps)
    _init (config?: VeeSubfolderData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(folder: Folder): VeeSubfolderData
    static $gtype: GObject.Type
}
interface VeeSummary_ConstructProps extends FolderSummary_ConstructProps {
}
class VeeSummary {
    /* Properties of Camel-1.2.Camel.FolderSummary */
    readonly deleted_count: number
    readonly junk_count: number
    readonly junk_not_deleted_count: number
    readonly saved_count: number
    readonly unread_count: number
    readonly visible_count: number
    /* Fields of Camel-1.2.Camel.FolderSummary */
    readonly parent: GObject.Object
    readonly priv: FolderSummaryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeSummary */
    add(mi_data: VeeMessageInfoData): VeeMessageInfo
    get_uids_for_subfolder(subfolder: Folder): GLib.HashTable
    remove(vuid: string, subfolder: Folder): void
    replace_flags(uid: string): void
    /* Methods of Camel-1.2.Camel.FolderSummary */
    add(info: MessageInfo, force_keep_uid: boolean): void
    check_uid(uid: string): boolean
    clear(): boolean
    count(): number
    get(uid: string): MessageInfo | null
    get_array(): string[]
    get_changed(): string[]
    get_deleted_count(): number
    get_flags(): number
    get_folder(): object | null
    get_hash(): GLib.HashTable
    get_index(): Index
    get_info_flags(uid: string): number
    get_junk_count(): number
    get_junk_not_deleted_count(): number
    get_next_uid(): number
    get_saved_count(): number
    get_timestamp(): number
    get_unread_count(): number
    get_version(): number
    get_visible_count(): number
    header_load(store: object | null, folder_name: string): boolean
    header_save(): boolean
    info_new_from_headers(headers: NameValueArray): MessageInfo
    info_new_from_message(message: MimeMessage): MessageInfo
    info_new_from_parser(parser: MimeParser): MessageInfo
    load(): boolean
    lock(): void
    next_uid(): number
    next_uid_string(): string
    peek_loaded(uid: string): MessageInfo | null
    prepare_fetch_all(): void
    remove(info: MessageInfo): boolean
    remove_uid(uid: string): boolean
    remove_uids(uids: string[]): boolean
    replace_flags(info: MessageInfo): boolean
    save(): boolean
    set_flags(flags: number): void
    set_index(index: Index): void
    set_next_uid(uid: number): void
    set_timestamp(timestamp: number): void
    set_version(version: number): void
    touch(): void
    unlock(): void
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
    /* Virtual methods of Camel-1.2.Camel.FolderSummary */
    vfunc_message_info_from_uid(uid: string): MessageInfo | null
    vfunc_message_info_new_from_headers(headers: NameValueArray): MessageInfo
    vfunc_message_info_new_from_message(message: MimeMessage): MessageInfo
    vfunc_message_info_new_from_parser(parser: MimeParser): MessageInfo
    vfunc_next_uid_string(): string
    vfunc_prepare_fetch_all(): void
    vfunc_summary_header_load(fir?: object | null): boolean
    vfunc_summary_header_save(): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Camel-1.2.Camel.FolderSummary */
    connect(sigName: "changed", callback: (($obj: VeeSummary) => void)): number
    connect_after(sigName: "changed", callback: (($obj: VeeSummary) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::junk-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::junk-not-deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-not-deleted-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::saved-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::saved-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unread-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unread-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-count", callback: (($obj: VeeSummary, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VeeSummary_ConstructProps)
    _init (config?: VeeSummary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: Folder): VeeSummary
    /* Function overloads */
    static new(folder: Folder): VeeSummary
    static $gtype: GObject.Type
}
abstract class AddressClass {
    /* Fields of Camel-1.2.Camel.AddressClass */
    readonly parent_class: GObject.ObjectClass
    readonly length: (addr: Address) => number
    readonly decode: (addr: Address, raw: string) => number
    readonly encode: (addr: Address) => string
    readonly unformat: (addr: Address, raw: string) => number
    readonly format: (addr: Address) => string
    readonly cat: (dest: Address, source: Address) => number
    readonly remove: (addr: Address, index: number) => void
    readonly reserved: object[]
    static name: string
}
class AddressPrivate {
    static name: string
}
class AsyncClosure {
    static name: string
}
class Block {
    /* Fields of Camel-1.2.Camel.Block */
    readonly id: _block_t
    readonly flags: BlockFlags
    readonly refcount: number
    readonly align00: number
    readonly data: Uint8Array
    static name: string
}
abstract class BlockFileClass {
    /* Fields of Camel-1.2.Camel.BlockFileClass */
    readonly parent_class: GObject.ObjectClass
    readonly validate_root: (bs: BlockFile) => number
    readonly init_root: (bs: BlockFile) => number
    readonly reserved: object[]
    static name: string
}
class BlockFilePrivate {
    static name: string
}
class BlockRoot {
    /* Fields of Camel-1.2.Camel.BlockRoot */
    readonly version: number[]
    readonly flags: number
    readonly block_size: number
    readonly free: _block_t
    readonly last: _block_t
    static name: string
}
class Cert {
    /* Fields of Camel-1.2.Camel.Cert */
    readonly refcount: number
    readonly issuer: string
    readonly subject: string
    readonly hostname: string
    readonly fingerprint: string
    readonly trust: CertTrust
    readonly rawcert: GLib.Bytes
    /* Methods of Camel-1.2.Camel.Cert */
    load_cert_file(): boolean
    ref(): Cert
    save_cert_file(der_data: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): Cert
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Cert
}
abstract class CertDBClass {
    /* Fields of Camel-1.2.Camel.CertDBClass */
    readonly parent_class: GObject.ObjectClass
    readonly header_load: (certdb: CertDB, istream?: object | null) => number
    readonly header_save: (certdb: CertDB, ostream?: object | null) => number
    readonly cert_load: (certdb: CertDB, istream?: object | null) => Cert
    readonly cert_save: (certdb: CertDB, cert: Cert, ostream?: object | null) => number
    readonly reserved: object[]
    static name: string
}
class CertDBPrivate {
    static name: string
}
class Charset {
    /* Fields of Camel-1.2.Camel.Charset */
    readonly mask: number
    readonly level: number
    /* Methods of Camel-1.2.Camel.Charset */
    best_name(): string
    init(): void
    step(in_: number[]): void
    static name: string
    /* Static methods and pseudo-constructors */
    static best(in_: number[]): string | null
    static iso_to_windows(isocharset: string): string
}
class CipherCertInfo {
    /* Fields of Camel-1.2.Camel.CipherCertInfo */
    readonly name: string
    readonly email: string
    readonly cert_data: object
    readonly cert_data_free: GLib.DestroyNotify
    readonly cert_data_clone: CipherCloneFunc
    readonly properties: object[]
    static name: string
}
class CipherCertInfoProperty {
    /* Fields of Camel-1.2.Camel.CipherCertInfoProperty */
    readonly name: string
    readonly value: object
    readonly value_free: GLib.DestroyNotify
    readonly value_clone: CipherCloneFunc
    static name: string
}
abstract class CipherContextClass {
    /* Fields of Camel-1.2.Camel.CipherContextClass */
    readonly parent_class: GObject.ObjectClass
    readonly sign_protocol: string
    readonly encrypt_protocol: string
    readonly key_protocol: string
    readonly id_to_hash: (context: CipherContext, id: string) => CipherHash
    readonly hash_to_id: (context: CipherContext, hash: CipherHash) => string
    readonly sign_sync: (context: CipherContext, userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => boolean
    readonly verify_sync: (context: CipherContext, ipart: MimePart, cancellable?: Gio.Cancellable | null) => CipherValidity
    readonly encrypt_sync: (context: CipherContext, userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => boolean
    readonly decrypt_sync: (context: CipherContext, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => CipherValidity
    readonly reserved: object[]
    static name: string
}
class CipherContextPrivate {
    static name: string
}
class CipherValidity {
    /* Fields of Camel-1.2.Camel.CipherValidity */
    readonly children: GLib.Queue
    readonly sign: object
    readonly encrypt: object
    /* Methods of Camel-1.2.Camel.CipherValidity */
    add_certinfo(mode: CipherValidityMode, name: string, email: string): number
    add_certinfo_ex(mode: CipherValidityMode, name: string, email: string, cert_data?: object | null, cert_data_clone?: CipherCloneFunc | null): number
    clear(): void
    clone(): CipherValidity
    envelope(valid: CipherValidity): void
    free(): void
    get_certinfo_property(mode: CipherValidityMode, info_index: number, name: string): object | null
    get_description(): string
    get_valid(): boolean
    init(): void
    set_certinfo_property(mode: CipherValidityMode, info_index: number, name: string, value?: object | null, value_clone?: CipherCloneFunc | null): void
    set_description(description: string): void
    set_valid(valid: boolean): void
    static name: string
    static new(): CipherValidity
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): CipherValidity
}
class ContentDisposition {
    /* Fields of Camel-1.2.Camel.ContentDisposition */
    readonly disposition: string
    readonly params: object
    readonly refcount: number
    /* Methods of Camel-1.2.Camel.ContentDisposition */
    format(): string
    is_attachment(content_type: ContentType): boolean
    is_attachment_ex(content_type: ContentType, parent_content_type: ContentType): boolean
    ref(): ContentDisposition
    unref(): void
    static name: string
    static new(): ContentDisposition
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContentDisposition
    static decode(in_: string): ContentDisposition
}
class ContentType {
    /* Fields of Camel-1.2.Camel.ContentType */
    readonly type: string
    readonly subtype: string
    readonly params: object
    readonly refcount: number
    /* Methods of Camel-1.2.Camel.ContentType */
    dump(): void
    format(): string
    is(type: string, subtype: string): boolean
    param(name: string): string
    ref(): ContentType
    set_param(name: string, value: string): void
    simple(): string
    unref(): void
    static name: string
    static new(type: string, subtype: string): ContentType
    constructor(type: string, subtype: string)
    /* Static methods and pseudo-constructors */
    static new(type: string, subtype: string): ContentType
    static decode(in_: string): ContentType
}
abstract class DBClass {
    static name: string
}
class DBPrivate {
    static name: string
}
abstract class DataCacheClass {
    /* Fields of Camel-1.2.Camel.DataCacheClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class DataCachePrivate {
    static name: string
}
abstract class DataWrapperClass {
    /* Fields of Camel-1.2.Camel.DataWrapperClass */
    readonly parent_class: GObject.ObjectClass
    readonly set_mime_type: (data_wrapper: DataWrapper, mime_type: string) => void
    readonly get_mime_type: (data_wrapper: DataWrapper) => string
    readonly get_mime_type_field: (data_wrapper: DataWrapper) => ContentType | null
    readonly set_mime_type_field: (data_wrapper: DataWrapper, mime_type?: ContentType | null) => void
    readonly is_offline: (data_wrapper: DataWrapper) => boolean
    readonly write_to_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => number
    readonly decode_to_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => number
    readonly construct_from_stream_sync: (data_wrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => boolean
    readonly write_to_output_stream_sync: (data_wrapper: DataWrapper, output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null) => number
    readonly decode_to_output_stream_sync: (data_wrapper: DataWrapper, output_stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null) => number
    readonly construct_from_input_stream_sync: (data_wrapper: DataWrapper, input_stream: Gio.InputStream, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
class DataWrapperPrivate {
    static name: string
}
class FIRecord {
    /* Fields of Camel-1.2.Camel.FIRecord */
    readonly folder_name: string
    readonly version: number
    readonly flags: number
    readonly nextuid: number
    readonly timestamp: number
    readonly saved_count: number
    readonly unread_count: number
    readonly deleted_count: number
    readonly junk_count: number
    readonly visible_count: number
    readonly jnd_count: number
    readonly bdata: string
    static name: string
}
abstract class FilterDriverClass {
    /* Fields of Camel-1.2.Camel.FilterDriverClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class FilterDriverPrivate {
    static name: string
}
abstract class FilterInputStreamClass {
    /* Fields of Camel-1.2.Camel.FilterInputStreamClass */
    readonly parent_class: Gio.FilterInputStreamClass
    readonly reserved: object[]
    static name: string
}
class FilterInputStreamPrivate {
    static name: string
}
abstract class FilterOutputStreamClass {
    /* Fields of Camel-1.2.Camel.FilterOutputStreamClass */
    readonly parent_class: Gio.FilterOutputStreamClass
    readonly reserved: object[]
    static name: string
}
class FilterOutputStreamPrivate {
    static name: string
}
class FolderChangeInfo {
    /* Fields of Camel-1.2.Camel.FolderChangeInfo */
    readonly uid_added: object[]
    readonly uid_removed: object[]
    readonly uid_changed: object[]
    readonly uid_recent: object[]
    /* Methods of Camel-1.2.Camel.FolderChangeInfo */
    add_source(uid: string): void
    add_source_list(list: string[]): void
    add_uid(uid: string): void
    add_update(uid: string): void
    add_update_list(list: string[]): void
    build_diff(): void
    cat(src: FolderChangeInfo): void
    change_uid(uid: string): void
    changed(): boolean
    clear(): void
    copy(): FolderChangeInfo
    free(): void
    get_added_uids(): string[]
    get_changed_uids(): string[]
    get_recent_uids(): string[]
    get_removed_uids(): string[]
    recent_uid(uid: string): void
    remove_uid(uid: string): void
    static name: string
    static new(): FolderChangeInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FolderChangeInfo
}
class FolderChangeInfoPrivate {
    static name: string
}
abstract class FolderClass {
    /* Fields of Camel-1.2.Camel.FolderClass */
    readonly parent_class: ObjectClass
    readonly get_message_count: (folder: Folder) => number
    readonly get_permanent_flags: (folder: Folder) => number
    readonly get_message_flags: (folder: Folder, uid: string) => number
    readonly set_message_flags: (folder: Folder, uid: string, mask: number, set: number) => boolean
    readonly get_message_user_flag: (folder: Folder, uid: string, name: string) => boolean
    readonly set_message_user_flag: (folder: Folder, uid: string, name: string, value: boolean) => void
    readonly get_message_user_tag: (folder: Folder, uid: string, name: string) => string
    readonly set_message_user_tag: (folder: Folder, uid: string, name: string, value: string) => void
    readonly get_uids: (folder: Folder) => string[]
    readonly free_uids: (folder: Folder, array: string[]) => void
    readonly cmp_uids: (folder: Folder, uid1: string, uid2: string) => number
    readonly sort_uids: (folder: Folder, uids: string[]) => void
    readonly get_summary: (folder: Folder) => string[]
    readonly free_summary: (folder: Folder, array: MessageInfo[]) => void
    readonly has_search_capability: (folder: Folder) => boolean
    readonly search_by_expression: (folder: Folder, expression: string, cancellable?: Gio.Cancellable | null) => string[]
    readonly search_by_uids: (folder: Folder, expression: string, uids: string[], cancellable?: Gio.Cancellable | null) => string[]
    readonly search_free: (folder: Folder, result: string[]) => void
    readonly get_message_info: (folder: Folder, uid: string) => MessageInfo
    readonly delete_: (folder: Folder) => void
    readonly rename: (folder: Folder, new_name: string) => void
    readonly freeze: (folder: Folder) => void
    readonly thaw: (folder: Folder) => void
    readonly is_frozen: (folder: Folder) => boolean
    readonly count_by_expression: (folder: Folder, expression: string, cancellable?: Gio.Cancellable | null) => number
    readonly get_uncached_uids: (folder: Folder, uids: string[]) => string[]
    readonly get_filename: (folder: Folder, uid: string) => string
    readonly get_message_cached: (folder: Folder, message_uid: string, cancellable?: Gio.Cancellable | null) => MimeMessage | null
    readonly append_message_sync: (folder: Folder, message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* appended_uid */ string | null ]
    readonly expunge_sync: (folder: Folder, cancellable?: Gio.Cancellable | null) => boolean
    readonly get_message_sync: (folder: Folder, message_uid: string, cancellable?: Gio.Cancellable | null) => MimeMessage
    readonly get_quota_info_sync: (folder: Folder, cancellable?: Gio.Cancellable | null) => FolderQuotaInfo
    readonly purge_message_cache_sync: (folder: Folder, start_uid: string, end_uid: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly refresh_info_sync: (folder: Folder, cancellable?: Gio.Cancellable | null) => boolean
    readonly synchronize_sync: (folder: Folder, expunge: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly synchronize_message_sync: (folder: Folder, message_uid: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly transfer_messages_to_sync: (source: Folder, message_uids: string[], destination: Folder, delete_originals: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* transferred_uids */ string[] | null ]
    readonly prepare_content_refresh: (folder: Folder) => void
    readonly reserved_methods: object[]
    readonly changed: (folder: Folder, changes: FolderChangeInfo) => void
    readonly deleted: (folder: Folder) => void
    readonly renamed: (folder: Folder, old_name: string) => void
    readonly reserved_signals: object[]
    static name: string
}
class FolderInfo {
    /* Fields of Camel-1.2.Camel.FolderInfo */
    readonly next: object
    readonly parent: object
    readonly child: object
    readonly full_name: string
    readonly display_name: string
    readonly flags: FolderInfoFlags
    readonly unread: number
    readonly total: number
    /* Methods of Camel-1.2.Camel.FolderInfo */
    clone(): FolderInfo
    free(): void
    static name: string
    static new(): FolderInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FolderInfo
    static build(folders: FolderInfo[], namespace_: string, separator: number, short_names: boolean): FolderInfo
}
class FolderPrivate {
    static name: string
}
class FolderQuotaInfo {
    /* Fields of Camel-1.2.Camel.FolderQuotaInfo */
    readonly name: string
    readonly used: number
    readonly total: number
    readonly next: object
    /* Methods of Camel-1.2.Camel.FolderQuotaInfo */
    clone(): FolderQuotaInfo
    free(): void
    static name: string
    static new(name: string, used: number, total: number): FolderQuotaInfo
    constructor(name: string, used: number, total: number)
    /* Static methods and pseudo-constructors */
    static new(name: string, used: number, total: number): FolderQuotaInfo
}
abstract class FolderSearchClass {
    /* Fields of Camel-1.2.Camel.FolderSearchClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class FolderSearchPrivate {
    static name: string
}
abstract class FolderSummaryClass {
    /* Fields of Camel-1.2.Camel.FolderSummaryClass */
    readonly parent_class: GObject.ObjectClass
    readonly message_info_type: GObject.Type
    readonly collate: string
    readonly sort_by: string
    readonly summary_header_load: (summary: FolderSummary, fir?: object | null) => boolean
    readonly summary_header_save: (summary: FolderSummary) => object | null
    readonly message_info_new_from_headers: (summary: FolderSummary, headers: NameValueArray) => MessageInfo
    readonly message_info_new_from_parser: (summary: FolderSummary, parser: MimeParser) => MessageInfo
    readonly message_info_new_from_message: (summary: FolderSummary, message: MimeMessage) => MessageInfo
    readonly message_info_from_uid: (summary: FolderSummary, uid: string) => MessageInfo | null
    readonly next_uid_string: (summary: FolderSummary) => string
    readonly prepare_fetch_all: (summary: FolderSummary) => void
    readonly reserved: object[]
    static name: string
}
class FolderSummaryPrivate {
    static name: string
}
class FolderThread {
    /* Fields of Camel-1.2.Camel.FolderThread */
    readonly refcount: number
    readonly subject: number
    readonly tree: object
    readonly node_chunks: MemChunk
    readonly folder: Folder
    readonly summary: object[]
    /* Methods of Camel-1.2.Camel.FolderThread */
    apply(uids: string[]): void
    ref(): FolderThread
    unref(): void
    static name: string
    static new(folder: Folder, uids: string[], thread_subject: boolean): FolderThread
    constructor(folder: Folder, uids: string[], thread_subject: boolean)
    /* Static methods and pseudo-constructors */
    static new(folder: Folder, uids: string[], thread_subject: boolean): FolderThread
}
class FolderThreadNode {
    /* Fields of Camel-1.2.Camel.FolderThreadNode */
    readonly next: object
    readonly parent: object
    readonly child: object
    readonly message: MessageInfo
    readonly root_subject: string
    readonly order: number
    readonly re: number
    static name: string
}
abstract class GpgContextClass {
    /* Fields of Camel-1.2.Camel.GpgContextClass */
    readonly parent_class: CipherContextClass
    readonly reserved: object[]
    static name: string
}
class GpgContextPrivate {
    static name: string
}
abstract class HTMLParserClass {
    /* Fields of Camel-1.2.Camel.HTMLParserClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class HTMLParserPrivate {
    static name: string
}
class HeaderAddress {
    /* Fields of Camel-1.2.Camel.HeaderAddress */
    readonly next: object
    readonly type: HeaderAddressType
    readonly name: string
    readonly refcount: number
    /* Methods of Camel-1.2.Camel.HeaderAddress */
    add_member(member: HeaderAddress): void
    ref(): HeaderAddress
    set_addr(addr: string): void
    set_members(group: HeaderAddress[]): void
    set_name(name: string): void
    unref(): void
    static name: string
    static new(): HeaderAddress
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): HeaderAddress
    static new_group(name: string): HeaderAddress
    static new_name(name: string, addr: string): HeaderAddress
    static decode(in_: string, charset: string): HeaderAddress
    static fold(in_: string, headerlen: number): string
    static list_append(addrlistp: HeaderAddress[], addr: HeaderAddress): void
    static list_append_list(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
    static list_clear(addrlistp: HeaderAddress[]): void
    static list_encode(addrlist: HeaderAddress[]): string
    static list_format(addrlist: HeaderAddress[]): string
}
class HeaderParam {
    /* Fields of Camel-1.2.Camel.HeaderParam */
    readonly next: object
    readonly name: string
    readonly value: string
    static name: string
    /* Static methods and pseudo-constructors */
    static list_decode(in_?: string | null): object | null
    static list_format(params?: object | null): string
    static list_format_append(out: GLib.String, params?: object | null): void
    static list_free(params?: object | null): void
}
abstract class IndexClass {
    /* Fields of Camel-1.2.Camel.IndexClass */
    readonly parent_class: GObject.ObjectClass
    readonly sync: (index: Index) => number
    readonly compress: (index: Index) => number
    readonly delete_: (index: Index) => number
    readonly rename: (index: Index, path: string) => number
    readonly has_name: (index: Index, name: string) => number
    readonly add_name: (index: Index, name: string) => IndexName | null
    readonly write_name: (index: Index, idn: IndexName) => number
    readonly find_name: (index: Index, name: string) => IndexCursor | null
    readonly delete_name: (index: Index, name: string) => void
    readonly find: (index: Index, word: string) => IndexCursor | null
    readonly words: (index: Index) => IndexCursor | null
    static name: string
}
abstract class IndexCursorClass {
    /* Fields of Camel-1.2.Camel.IndexCursorClass */
    readonly parent: GObject.ObjectClass
    readonly next: (idc: IndexCursor) => string
    readonly reserved: object[]
    static name: string
}
class IndexCursorPrivate {
    static name: string
}
abstract class IndexNameClass {
    /* Fields of Camel-1.2.Camel.IndexNameClass */
    readonly parent: GObject.ObjectClass
    readonly add_word: (name: IndexName, word: string) => void
    readonly add_buffer: (name: IndexName, buffer: string, len: number) => number
    static name: string
}
class IndexNamePrivate {
    static name: string
}
class IndexPrivate {
    static name: string
}
abstract class InternetAddressClass {
    /* Fields of Camel-1.2.Camel.InternetAddressClass */
    readonly parent_class: AddressClass
    readonly reserved: object[]
    static name: string
}
class InternetAddressPrivate {
    static name: string
}
abstract class JunkFilterInterface {
    /* Fields of Camel-1.2.Camel.JunkFilterInterface */
    readonly parent_interface: GObject.TypeInterface
    readonly classify: (junk_filter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => JunkStatus
    readonly learn_junk: (junk_filter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => boolean
    readonly learn_not_junk: (junk_filter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => boolean
    readonly synchronize: (junk_filter: JunkFilter, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
class KeyBlock {
    /* Fields of Camel-1.2.Camel.KeyBlock */
    readonly next: _block_t
    readonly used: number
    static name: string
}
abstract class KeyFileClass {
    /* Fields of Camel-1.2.Camel.KeyFileClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class KeyFilePrivate {
    static name: string
}
class KeyRootBlock {
    /* Fields of Camel-1.2.Camel.KeyRootBlock */
    readonly first: _block_t
    readonly last: _block_t
    readonly free: _key_t
    static name: string
}
abstract class KeyTableClass {
    /* Fields of Camel-1.2.Camel.KeyTableClass */
    readonly parent: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class KeyTablePrivate {
    static name: string
}
abstract class LocalSettingsClass {
    static name: string
}
class LocalSettingsPrivate {
    static name: string
}
class MIRecord {
    /* Fields of Camel-1.2.Camel.MIRecord */
    readonly uid: string
    readonly flags: number
    readonly msg_type: number
    readonly dirty: number
    readonly read: boolean
    readonly deleted: boolean
    readonly replied: boolean
    readonly important: boolean
    readonly junk: boolean
    readonly attachment: boolean
    readonly size: number
    readonly dsent: number
    readonly dreceived: number
    readonly subject: string
    readonly from: string
    readonly to: string
    readonly cc: string
    readonly mlist: string
    readonly followup_flag: string
    readonly followup_completed_on: string
    readonly followup_due_by: string
    readonly part: string
    readonly labels: string
    readonly usertags: string
    readonly cinfo: string
    readonly bdata: string
    readonly userheaders: string
    readonly preview: string
    static name: string
}
abstract class MediumClass {
    /* Fields of Camel-1.2.Camel.MediumClass */
    readonly parent_class: DataWrapperClass
    readonly add_header: (medium: Medium, name: string, value: string) => void
    readonly set_header: (medium: Medium, name: string, value?: string | null) => void
    readonly remove_header: (medium: Medium, name: string) => void
    readonly get_header: (medium: Medium, name: string) => string | null
    readonly dup_headers: (medium: Medium) => NameValueArray
    readonly get_headers: (medium: Medium) => NameValueArray
    readonly get_content: (medium: Medium) => DataWrapper | null
    readonly set_content: (medium: Medium, content?: DataWrapper | null) => void
    readonly reserved: object[]
    static name: string
}
class MediumPrivate {
    static name: string
}
class MemChunk {
    static name: string
}
class MemPool {
    static name: string
}
class MessageContentInfo {
    /* Fields of Camel-1.2.Camel.MessageContentInfo */
    readonly next: MessageContentInfo
    readonly childs: MessageContentInfo
    readonly parent: MessageContentInfo
    readonly type: ContentType
    readonly disposition: ContentDisposition
    readonly id: string
    readonly description: string
    readonly encoding: string
    readonly size: number
    /* Methods of Camel-1.2.Camel.MessageContentInfo */
    copy(): MessageContentInfo
    dump(depth: number): void
    free(): void
    traverse(func: MessageContentInfoTraverseCallback): boolean
    static name: string
    static new(): MessageContentInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MessageContentInfo
    static new_from_headers(headers: NameValueArray): MessageContentInfo
    static new_from_message(mime_part: MimePart): MessageContentInfo
    static new_from_parser(parser: MimeParser): MessageContentInfo
}
abstract class MessageInfoBaseClass {
    /* Fields of Camel-1.2.Camel.MessageInfoBaseClass */
    readonly parent_class: MessageInfoClass
    readonly reserved: object[]
    static name: string
}
class MessageInfoBasePrivate {
    static name: string
}
abstract class MessageInfoClass {
    /* Fields of Camel-1.2.Camel.MessageInfoClass */
    readonly parent_class: GObject.ObjectClass
    readonly clone: (mi: MessageInfo, assign_summary?: FolderSummary | null) => MessageInfo
    readonly load: (mi: MessageInfo, record: MIRecord | null, bdata_ptr: string) => boolean
    readonly save: (mi: MessageInfo, record: MIRecord | null, bdata_str: GLib.String) => boolean
    readonly get_flags: (mi: MessageInfo) => number
    readonly set_flags: (mi: MessageInfo, mask: number, set: number) => boolean
    readonly get_user_flag: (mi: MessageInfo, name: string) => boolean
    readonly set_user_flag: (mi: MessageInfo, name: string, state: boolean) => boolean
    readonly get_user_flags: (mi: MessageInfo) => NamedFlags | null
    readonly dup_user_flags: (mi: MessageInfo) => NamedFlags
    readonly take_user_flags: (mi: MessageInfo, user_flags?: NamedFlags | null) => boolean
    readonly get_user_tag: (mi: MessageInfo, name: string) => string | null
    readonly set_user_tag: (mi: MessageInfo, name: string, value?: string | null) => boolean
    readonly get_user_tags: (mi: MessageInfo) => NameValueArray | null
    readonly dup_user_tags: (mi: MessageInfo) => NameValueArray | null
    readonly take_user_tags: (mi: MessageInfo, user_tags?: NameValueArray | null) => boolean
    readonly get_subject: (mi: MessageInfo) => string
    readonly set_subject: (mi: MessageInfo, subject?: string | null) => boolean
    readonly get_from: (mi: MessageInfo) => string
    readonly set_from: (mi: MessageInfo, from?: string | null) => boolean
    readonly get_to: (mi: MessageInfo) => string
    readonly set_to: (mi: MessageInfo, to?: string | null) => boolean
    readonly get_cc: (mi: MessageInfo) => string
    readonly set_cc: (mi: MessageInfo, cc?: string | null) => boolean
    readonly get_mlist: (mi: MessageInfo) => string
    readonly set_mlist: (mi: MessageInfo, mlist?: string | null) => boolean
    readonly get_size: (mi: MessageInfo) => number
    readonly set_size: (mi: MessageInfo, size: number) => boolean
    readonly get_date_sent: (mi: MessageInfo) => number
    readonly set_date_sent: (mi: MessageInfo, date_sent: number) => boolean
    readonly get_date_received: (mi: MessageInfo) => number
    readonly set_date_received: (mi: MessageInfo, date_received: number) => boolean
    readonly get_message_id: (mi: MessageInfo) => number
    readonly set_message_id: (mi: MessageInfo, message_id: number) => boolean
    readonly get_references: (mi: MessageInfo) => number[] | null
    readonly take_references: (mi: MessageInfo, references?: number[] | null) => boolean
    readonly get_headers: (mi: MessageInfo) => NameValueArray | null
    readonly take_headers: (mi: MessageInfo, headers?: NameValueArray | null) => boolean
    readonly get_user_header: (mi: MessageInfo, name: string) => string | null
    readonly set_user_header: (mi: MessageInfo, name: string, value?: string | null) => boolean
    readonly get_user_headers: (mi: MessageInfo) => NameValueArray | null
    readonly take_user_headers: (mi: MessageInfo, headers?: NameValueArray | null) => boolean
    readonly get_preview: (mi: MessageInfo) => string | null
    readonly set_preview: (mi: MessageInfo, preview?: string | null) => boolean
    readonly reserved: object[]
    static name: string
}
class MessageInfoPrivate {
    static name: string
}
abstract class MimeFilterBasicClass {
    /* Fields of Camel-1.2.Camel.MimeFilterBasicClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterBasicPrivate {
    static name: string
}
abstract class MimeFilterBestencClass {
    /* Fields of Camel-1.2.Camel.MimeFilterBestencClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterBestencPrivate {
    static name: string
}
abstract class MimeFilterCRLFClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCRLFClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterCRLFPrivate {
    static name: string
}
abstract class MimeFilterCanonClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCanonClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterCanonPrivate {
    static name: string
}
abstract class MimeFilterCharsetClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCharsetClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterCharsetPrivate {
    static name: string
}
abstract class MimeFilterClass {
    /* Fields of Camel-1.2.Camel.MimeFilterClass */
    readonly parent_class: GObject.ObjectClass
    readonly filter: (filter: MimeFilter, in_: Uint8Array, prespace: number) => [ /* out */ Uint8Array, /* outprespace */ number ]
    readonly complete: (filter: MimeFilter, in_: Uint8Array, prespace: number) => [ /* out */ Uint8Array, /* outprespace */ number ]
    readonly reset: (filter: MimeFilter) => void
    readonly reserved: object[]
    static name: string
}
abstract class MimeFilterEnrichedClass {
    /* Fields of Camel-1.2.Camel.MimeFilterEnrichedClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterEnrichedPrivate {
    static name: string
}
abstract class MimeFilterFromClass {
    /* Fields of Camel-1.2.Camel.MimeFilterFromClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterFromPrivate {
    static name: string
}
abstract class MimeFilterGZipClass {
    /* Fields of Camel-1.2.Camel.MimeFilterGZipClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterGZipPrivate {
    static name: string
}
abstract class MimeFilterHTMLClass {
    /* Fields of Camel-1.2.Camel.MimeFilterHTMLClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterHTMLPrivate {
    static name: string
}
abstract class MimeFilterIndexClass {
    /* Fields of Camel-1.2.Camel.MimeFilterIndexClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterIndexPrivate {
    static name: string
}
abstract class MimeFilterLinewrapClass {
    /* Fields of Camel-1.2.Camel.MimeFilterLinewrapClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterLinewrapPrivate {
    static name: string
}
abstract class MimeFilterPgpClass {
    /* Fields of Camel-1.2.Camel.MimeFilterPgpClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterPgpPrivate {
    static name: string
}
class MimeFilterPrivate {
    static name: string
}
abstract class MimeFilterProgressClass {
    /* Fields of Camel-1.2.Camel.MimeFilterProgressClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterProgressPrivate {
    static name: string
}
abstract class MimeFilterToHTMLClass {
    /* Fields of Camel-1.2.Camel.MimeFilterToHTMLClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterToHTMLPrivate {
    static name: string
}
abstract class MimeFilterWindowsClass {
    /* Fields of Camel-1.2.Camel.MimeFilterWindowsClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterWindowsPrivate {
    static name: string
}
abstract class MimeFilterYencClass {
    /* Fields of Camel-1.2.Camel.MimeFilterYencClass */
    readonly parent_class: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterYencPrivate {
    static name: string
}
abstract class MimeMessageClass {
    /* Fields of Camel-1.2.Camel.MimeMessageClass */
    readonly parent_class: MimePartClass
    readonly reserved: object[]
    static name: string
}
class MimeMessagePrivate {
    static name: string
}
abstract class MimeParserClass {
    /* Fields of Camel-1.2.Camel.MimeParserClass */
    readonly parent_class: GObject.ObjectClass
    readonly message: (parser: MimeParser, headers?: object | null) => void
    readonly part: (parser: MimeParser) => void
    readonly content: (parser: MimeParser) => void
    readonly reserved: object[]
    static name: string
}
class MimeParserPrivate {
    static name: string
}
abstract class MimePartClass {
    /* Fields of Camel-1.2.Camel.MimePartClass */
    readonly parent_class: MediumClass
    readonly construct_from_parser_sync: (mime_part: MimePart, parser: MimeParser, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
class MimePartPrivate {
    static name: string
}
class Msg {
    /* Fields of Camel-1.2.Camel.Msg */
    readonly reply_port: MsgPort
    static name: string
}
class MsgPort {
    static name: string
}
abstract class MultipartClass {
    /* Fields of Camel-1.2.Camel.MultipartClass */
    readonly parent_class: DataWrapperClass
    readonly add_part: (multipart: Multipart, part: MimePart) => void
    readonly get_part: (multipart: Multipart, index: number) => MimePart
    readonly get_number: (multipart: Multipart) => number
    readonly get_boundary: (multipart: Multipart) => string
    readonly set_boundary: (multipart: Multipart, boundary?: string | null) => void
    readonly construct_from_parser: (multipart: Multipart, parser: MimeParser) => number
    readonly reserved: object[]
    static name: string
}
abstract class MultipartEncryptedClass {
    /* Fields of Camel-1.2.Camel.MultipartEncryptedClass */
    readonly parent_class: MultipartClass
    readonly reserved: object[]
    static name: string
}
class MultipartEncryptedPrivate {
    static name: string
}
class MultipartPrivate {
    static name: string
}
abstract class MultipartSignedClass {
    /* Fields of Camel-1.2.Camel.MultipartSignedClass */
    readonly parent_class: MultipartClass
    readonly reserved: object[]
    static name: string
}
class MultipartSignedPrivate {
    static name: string
}
abstract class NNTPAddressClass {
    /* Fields of Camel-1.2.Camel.NNTPAddressClass */
    readonly parent_class: AddressClass
    readonly reserved: object[]
    static name: string
}
class NNTPAddressPrivate {
    static name: string
}
class NameValueArray {
    /* Methods of Camel-1.2.Camel.NameValueArray */
    append(name: string, value: string): void
    clear(): void
    copy(): NameValueArray
    equal(array_b: NameValueArray | null, compare_type: CompareType): boolean
    free(): void
    get(index: number): [ /* returnType */ boolean, /* out_name */ string | null, /* out_value */ string | null ]
    get_length(): number
    get_name(index: number): string | null
    get_named(compare_type: CompareType, name: string): string | null
    get_value(index: number): string | null
    remove(index: number): boolean
    remove_named(compare_type: CompareType, name: string, all_occurrences: boolean): number
    set(index: number, name: string, value: string): boolean
    set_name(index: number, name: string): boolean
    set_named(compare_type: CompareType, name: string, value: string): boolean
    set_value(index: number, value: string): boolean
    static name: string
    static new(): NameValueArray
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NameValueArray
    static new_sized(reserve_size: number): NameValueArray
}
class NamedFlags {
    /* Methods of Camel-1.2.Camel.NamedFlags */
    clear(): void
    contains(name: string): boolean
    copy(): NamedFlags
    equal(named_flags_b?: NamedFlags | null): boolean
    free(): void
    get(index: number): string | null
    get_length(): number
    insert(name: string): boolean
    remove(name: string): boolean
    static name: string
    static new(): NamedFlags
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NamedFlags
    static new_sized(reserve_size: number): NamedFlags
}
abstract class NetworkServiceInterface {
    /* Fields of Camel-1.2.Camel.NetworkServiceInterface */
    readonly parent_interface: GObject.TypeInterface
    readonly get_service_name: (service: NetworkService, method: NetworkSecurityMethod) => string
    readonly get_default_port: (service: NetworkService, method: NetworkSecurityMethod) => number
    readonly connect_sync: (service: NetworkService, cancellable?: Gio.Cancellable | null) => Gio.IOStream
    readonly reserved: object[]
    static name: string
}
abstract class NetworkSettingsInterface {
    /* Fields of Camel-1.2.Camel.NetworkSettingsInterface */
    readonly parent_interface: GObject.TypeInterface
    readonly reserved: object[]
    static name: string
}
abstract class NullOutputStreamClass {
    /* Fields of Camel-1.2.Camel.NullOutputStreamClass */
    readonly parent_class: Gio.OutputStreamClass
    readonly reserved: object[]
    static name: string
}
class NullOutputStreamPrivate {
    static name: string
}
class ObjectBag {
    /* Methods of Camel-1.2.Camel.ObjectBag */
    abort(key?: object | null): void
    add(key?: object | null, object?: object | null): void
    destroy(): void
    get(key?: object | null): object | null
    list(): GObject.Object[]
    peek(key?: object | null): object | null
    rekey(object?: object | null, new_key?: object | null): void
    remove(object?: object | null): void
    reserve(key?: object | null): object | null
    static name: string
}
abstract class ObjectClass {
    /* Fields of Camel-1.2.Camel.ObjectClass */
    readonly parent_class: GObject.ObjectClass
    readonly state_read: (object: Object, fp?: object | null) => number
    readonly state_write: (object: Object, fp?: object | null) => number
    readonly reserved: object[]
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class OfflineFolderClass {
    /* Fields of Camel-1.2.Camel.OfflineFolderClass */
    readonly parent_class: FolderClass
    readonly downsync_sync: (folder: OfflineFolder, expression: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
class OfflineFolderPrivate {
    static name: string
}
abstract class OfflineSettingsClass {
    /* Fields of Camel-1.2.Camel.OfflineSettingsClass */
    readonly parent_class: StoreSettingsClass
    readonly reserved: object[]
    static name: string
}
class OfflineSettingsPrivate {
    static name: string
}
abstract class OfflineStoreClass {
    /* Fields of Camel-1.2.Camel.OfflineStoreClass */
    readonly parent_class: StoreClass
    readonly dup_downsync_folders: (store: OfflineStore) => Folder[]
    readonly reserved: object[]
    static name: string
}
class OfflineStorePrivate {
    static name: string
}
abstract class OperationClass {
    /* Fields of Camel-1.2.Camel.OperationClass */
    readonly parent_class: Gio.CancellableClass
    readonly status: (operation: Operation, what: string, pc: number) => void
    readonly reserved: object[]
    static name: string
}
class OperationPrivate {
    static name: string
}
class PartitionKey {
    /* Fields of Camel-1.2.Camel.PartitionKey */
    readonly hashid: _hash_t
    readonly keyid: _key_t
    static name: string
}
class PartitionKeyBlock {
    /* Fields of Camel-1.2.Camel.PartitionKeyBlock */
    readonly used: number
    readonly keys: object[]
    static name: string
}
class PartitionMap {
    /* Fields of Camel-1.2.Camel.PartitionMap */
    readonly hashid: _hash_t
    readonly blockid: _block_t
    static name: string
}
class PartitionMapBlock {
    /* Fields of Camel-1.2.Camel.PartitionMapBlock */
    readonly next: _block_t
    readonly used: number
    readonly partition: object[]
    static name: string
}
abstract class PartitionTableClass {
    /* Fields of Camel-1.2.Camel.PartitionTableClass */
    readonly parent: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class PartitionTablePrivate {
    static name: string
}
class Provider {
    /* Fields of Camel-1.2.Camel.Provider */
    readonly protocol: string
    readonly name: string
    readonly description: string
    readonly domain: string
    readonly flags: ProviderFlags
    readonly url_flags: ProviderURLFlags
    readonly extra_conf: ProviderConfEntry
    readonly port_entries: ProviderPortEntry
    readonly auto_detect: ProviderAutoDetectFunc
    readonly object_types: GObject.Type[]
    readonly authtypes: object[]
    readonly url_hash: GLib.HashFunc
    readonly url_equal: GLib.EqualFunc
    readonly translation_domain: string
    readonly priv: object
    /* Methods of Camel-1.2.Camel.Provider */
    register(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static get(protocol: string): Provider
    static init(): void
    static list(load: boolean): Provider[]
    static load(path: string): boolean
}
class ProviderConfEntry {
    /* Fields of Camel-1.2.Camel.ProviderConfEntry */
    readonly type: ProviderConfType
    readonly name: string
    readonly depname: string
    readonly text: string
    readonly value: string
    static name: string
}
class ProviderModule {
    /* Fields of Camel-1.2.Camel.ProviderModule */
    readonly path: string
    readonly types: object[]
    readonly loaded: number
    static name: string
    /* Static methods and pseudo-constructors */
    static init(): void
}
class ProviderPortEntry {
    /* Fields of Camel-1.2.Camel.ProviderPortEntry */
    readonly port: number
    readonly desc: string
    readonly is_ssl: boolean
    static name: string
}
abstract class SExpClass {
    /* Fields of Camel-1.2.Camel.SExpClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class SExpPrivate {
    static name: string
}
class SExpResult {
    /* Fields of Camel-1.2.Camel.SExpResult */
    readonly type: SExpResultType
    readonly time_generator: boolean
    readonly occuring_start: number
    readonly occuring_end: number
    static name: string
}
class SExpSymbol {
    /* Fields of Camel-1.2.Camel.SExpSymbol */
    readonly type: number
    readonly name: string
    readonly data: object
    static name: string
}
class SExpTerm {
    /* Fields of Camel-1.2.Camel.SExpTerm */
    readonly type: SExpTermType
    static name: string
}
abstract class SMIMEContextClass {
    /* Fields of Camel-1.2.Camel.SMIMEContextClass */
    readonly parent_class: CipherContextClass
    readonly reserved: object[]
    static name: string
}
class SMIMEContextPrivate {
    static name: string
}
abstract class SaslAnonymousClass {
    /* Fields of Camel-1.2.Camel.SaslAnonymousClass */
    readonly parent_class: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslAnonymousPrivate {
    static name: string
}
abstract class SaslClass {
    /* Fields of Camel-1.2.Camel.SaslClass */
    readonly parent_class: GObject.ObjectClass
    readonly auth_type: ServiceAuthType
    readonly try_empty_password_sync: (sasl: Sasl, cancellable?: Gio.Cancellable | null) => boolean
    readonly challenge_sync: (sasl: Sasl, token: Uint8Array, cancellable?: Gio.Cancellable | null) => Uint8Array
    readonly reserved: object[]
    static name: string
}
abstract class SaslCramMd5Class {
    /* Fields of Camel-1.2.Camel.SaslCramMd5Class */
    readonly parent_class: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslCramMd5Private {
    static name: string
}
abstract class SaslDigestMd5Class {
    /* Fields of Camel-1.2.Camel.SaslDigestMd5Class */
    readonly parent_class: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslDigestMd5Private {
    static name: string
}
abstract class SaslGssapiClass {
    /* Fields of Camel-1.2.Camel.SaslGssapiClass */
    readonly parent_class: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslGssapiPrivate {
    static name: string
}
abstract class SaslLoginClass {
    /* Fields of Camel-1.2.Camel.SaslLoginClass */
    readonly parent_class: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslLoginPrivate {
    static name: string
}
abstract class SaslNTLMClass {
    /* Fields of Camel-1.2.Camel.SaslNTLMClass */
    readonly parent_class: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslNTLMPrivate {
    static name: string
}
abstract class SaslPOPB4SMTPClass {
    /* Fields of Camel-1.2.Camel.SaslPOPB4SMTPClass */
    readonly parent_class: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslPOPB4SMTPPrivate {
    static name: string
}
abstract class SaslPlainClass {
    /* Fields of Camel-1.2.Camel.SaslPlainClass */
    readonly parent_class: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslPlainPrivate {
    static name: string
}
class SaslPrivate {
    static name: string
}
abstract class SaslXOAuth2Class {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2Class */
    readonly parent_class: SaslClass
    static name: string
}
abstract class SaslXOAuth2GoogleClass {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2GoogleClass */
    readonly parent_class: SaslXOAuth2Class
    static name: string
}
class SaslXOAuth2GooglePrivate {
    static name: string
}
abstract class SaslXOAuth2OutlookClass {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2OutlookClass */
    readonly parent_class: SaslXOAuth2Class
    static name: string
}
class SaslXOAuth2OutlookPrivate {
    static name: string
}
class SaslXOAuth2Private {
    static name: string
}
abstract class SaslXOAuth2YahooClass {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2YahooClass */
    readonly parent_class: SaslXOAuth2Class
    static name: string
}
class SaslXOAuth2YahooPrivate {
    static name: string
}
class ServiceAuthType {
    /* Fields of Camel-1.2.Camel.ServiceAuthType */
    readonly name: string
    readonly description: string
    readonly authproto: string
    readonly need_password: boolean
    /* Methods of Camel-1.2.Camel.ServiceAuthType */
    copy(): ServiceAuthType
    free(): void
    static name: string
}
abstract class ServiceClass {
    /* Fields of Camel-1.2.Camel.ServiceClass */
    readonly parent_class: ObjectClass
    readonly settings_type: GObject.Type
    readonly get_name: (service: Service, brief: boolean) => string
    readonly connect_sync: (service: Service, cancellable?: Gio.Cancellable | null) => boolean
    readonly disconnect_sync: (service: Service, clean: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly authenticate_sync: (service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null) => AuthenticationResult
    readonly query_auth_types_sync: (service: Service, cancellable?: Gio.Cancellable | null) => ServiceAuthType[]
    readonly reserved: object[]
    static name: string
}
class ServicePrivate {
    static name: string
}
abstract class SessionClass {
    /* Fields of Camel-1.2.Camel.SessionClass */
    readonly parent_class: GObject.ObjectClass
    readonly add_service: (session: Session, uid: string, protocol: string, type: ProviderType) => Service
    readonly remove_service: (session: Session, service: Service) => void
    readonly get_password: (session: Session, service: Service, prompt: string, item: string, flags: number) => string
    readonly forget_password: (session: Session, service: Service, item: string) => boolean
    readonly trust_prompt: (session: Session, service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => CertTrust
    readonly get_filter_driver: (session: Session, type: string, for_folder?: Folder | null) => FilterDriver
    readonly lookup_addressbook: (session: Session, name: string) => boolean
    readonly authenticate_sync: (session: Session, service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null) => boolean
    readonly forward_to_sync: (session: Session, folder: Folder, message: MimeMessage, address: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly get_oauth2_access_token_sync: (session: Session, service: Service, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number | null ]
    readonly get_recipient_certificates_sync: (session: Session, flags: number, recipients: string[], cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_certificates */ string[] ]
    readonly addressbook_contains_sync: (session: Session, book_uid: string, email_address: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved_methods: object[]
    readonly job_started: (session: Session, cancellable?: Gio.Cancellable | null) => void
    readonly job_finished: (session: Session, cancellable: Gio.Cancellable | null, error: GLib.Error) => void
    readonly user_alert: (session: Session, service: Service, type: SessionAlertType, message: string) => void
    readonly reserved_signals: object[]
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class SettingsClass {
    /* Fields of Camel-1.2.Camel.SettingsClass */
    readonly parent_class: GObject.ObjectClass
    readonly clone: (settings: Settings) => Settings
    readonly equal: (settings_a: Settings, settings_b: Settings) => boolean
    readonly reserved: object[]
    /* Methods of Camel-1.2.Camel.SettingsClass */
    static list_settings(settings_class: Settings | Function | GObject.Type, n_settings: number): GObject.ParamSpec
    static name: string
}
class SettingsPrivate {
    static name: string
}
abstract class StoreClass {
    /* Fields of Camel-1.2.Camel.StoreClass */
    readonly parent_class: ServiceClass
    readonly hash_folder_name: GLib.HashFunc
    readonly equal_folder_name: GLib.EqualFunc
    readonly can_refresh_folder: (store: Store, info: FolderInfo) => boolean
    readonly get_folder_sync: (store: Store, folder_name: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null) => Folder | null
    readonly get_folder_info_sync: (store: Store, top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null) => FolderInfo | null
    readonly get_inbox_folder_sync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    readonly get_junk_folder_sync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    readonly get_trash_folder_sync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    readonly create_folder_sync: (store: Store, parent_name: string | null, folder_name: string, cancellable?: Gio.Cancellable | null) => FolderInfo | null
    readonly delete_folder_sync: (store: Store, folder_name: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly rename_folder_sync: (store: Store, old_name: string, new_name: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly synchronize_sync: (store: Store, expunge: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly initial_setup_sync: (store: Store, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_save_setup */ GLib.HashTable ]
    readonly get_can_auto_save_changes: (store: Store) => boolean
    readonly reserved_methods: object[]
    readonly folder_created: (store: Store, folder_info: FolderInfo) => void
    readonly folder_deleted: (store: Store, folder_info: FolderInfo) => void
    readonly folder_opened: (store: Store, folder: Folder) => void
    readonly folder_renamed: (store: Store, old_name: string, folder_info: FolderInfo) => void
    readonly folder_info_stale: (store: Store) => void
    readonly reserved_signals: object[]
    static name: string
}
class StoreInfo {
    /* Fields of Camel-1.2.Camel.StoreInfo */
    readonly refcount: number
    readonly path: string
    readonly flags: number
    readonly unread: number
    readonly total: number
    /* Static methods and pseudo-constructors */
    static name(summary: StoreSummary, info: StoreInfo): string
    static path(summary: StoreSummary, info: StoreInfo): string
    static set_string(summary: StoreSummary, info: StoreInfo, type: number, value: string): void
}
class StorePrivate {
    static name: string
}
abstract class StoreSettingsClass {
    /* Fields of Camel-1.2.Camel.StoreSettingsClass */
    readonly parent_class: SettingsClass
    readonly reserved: object[]
    static name: string
}
class StoreSettingsPrivate {
    static name: string
}
abstract class StoreSummaryClass {
    /* Fields of Camel-1.2.Camel.StoreSummaryClass */
    readonly parent_class: GObject.ObjectClass
    readonly store_info_size: number
    readonly summary_header_load: (summary: StoreSummary, file?: object | null) => number
    readonly summary_header_save: (summary: StoreSummary, file?: object | null) => number
    readonly store_info_save: (summary: StoreSummary, file: object | null, info: StoreInfo) => number
    readonly store_info_free: (summary: StoreSummary, info: StoreInfo) => void
    readonly store_info_set_string: (summary: StoreSummary, info: StoreInfo, type: number, value: string) => void
    readonly reserved: object[]
    static name: string
}
class StoreSummaryPrivate {
    static name: string
}
abstract class StreamBufferClass {
    /* Fields of Camel-1.2.Camel.StreamBufferClass */
    readonly parent_class: StreamClass
    readonly init: (stream_buffer: StreamBuffer, stream: Stream, mode: StreamBufferMode) => void
    readonly init_vbuf: (stream_buffer: StreamBuffer, stream: Stream, mode: StreamBufferMode, buf: string, size: number) => void
    readonly reserved: object[]
    static name: string
}
class StreamBufferPrivate {
    static name: string
}
abstract class StreamClass {
    /* Fields of Camel-1.2.Camel.StreamClass */
    readonly parent_class: GObject.ObjectClass
    readonly read: (stream: Stream, buffer: number[], cancellable?: Gio.Cancellable | null) => number
    readonly write: (stream: Stream, buffer: number[], cancellable?: Gio.Cancellable | null) => number
    readonly close: (stream: Stream, cancellable?: Gio.Cancellable | null) => number
    readonly flush: (stream: Stream, cancellable?: Gio.Cancellable | null) => number
    readonly eos: (stream: Stream) => boolean
    readonly reserved: object[]
    static name: string
}
abstract class StreamFilterClass {
    /* Fields of Camel-1.2.Camel.StreamFilterClass */
    readonly parent_class: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamFilterPrivate {
    static name: string
}
abstract class StreamFsClass {
    /* Fields of Camel-1.2.Camel.StreamFsClass */
    readonly parent_class: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamFsPrivate {
    static name: string
}
abstract class StreamMemClass {
    /* Fields of Camel-1.2.Camel.StreamMemClass */
    readonly parent_class: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamMemPrivate {
    static name: string
}
abstract class StreamNullClass {
    /* Fields of Camel-1.2.Camel.StreamNullClass */
    readonly parent_class: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamNullPrivate {
    static name: string
}
class StreamPrivate {
    static name: string
}
abstract class StreamProcessClass {
    /* Fields of Camel-1.2.Camel.StreamProcessClass */
    readonly parent_class: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamProcessPrivate {
    static name: string
}
abstract class SubscribableInterface {
    /* Fields of Camel-1.2.Camel.SubscribableInterface */
    readonly parent_interface: GObject.TypeInterface
    readonly folder_is_subscribed: (subscribable: Subscribable, folder_name: string) => boolean
    readonly subscribe_folder_sync: (subscribable: Subscribable, folder_name: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly unsubscribe_folder_sync: (subscribable: Subscribable, folder_name: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved_methods: object[]
    readonly folder_subscribed: (subscribable: Subscribable, folder_info: FolderInfo) => void
    readonly folder_unsubscribed: (subscribable: Subscribable, folder_info: FolderInfo) => void
    readonly reserved_signals: object[]
    static name: string
}
class SummaryMessageID {
    static name: string
}
abstract class TextIndexClass {
    /* Fields of Camel-1.2.Camel.TextIndexClass */
    readonly parent_class: IndexClass
    readonly reserved: object[]
    static name: string
}
abstract class TextIndexCursorClass {
    /* Fields of Camel-1.2.Camel.TextIndexCursorClass */
    readonly parent_class: IndexCursorClass
    readonly reserved: object[]
    static name: string
}
class TextIndexCursorPrivate {
    static name: string
}
abstract class TextIndexKeyCursorClass {
    /* Fields of Camel-1.2.Camel.TextIndexKeyCursorClass */
    readonly parent_class: IndexCursorClass
    readonly reserved: object[]
    static name: string
}
class TextIndexKeyCursorPrivate {
    static name: string
}
abstract class TextIndexNameClass {
    /* Fields of Camel-1.2.Camel.TextIndexNameClass */
    readonly parent_class: IndexNameClass
    readonly reserved: object[]
    static name: string
}
class TextIndexNamePrivate {
    static name: string
}
class TextIndexPrivate {
    static name: string
}
abstract class TransportClass {
    /* Fields of Camel-1.2.Camel.TransportClass */
    readonly parent_class: ServiceClass
    readonly send_to_sync: (transport: Transport, message: MimeMessage, from: Address, recipients: Address, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* out_sent_message_saved */ boolean ]
    readonly reserved: object[]
    static name: string
}
class TransportPrivate {
    static name: string
}
class Trie {
    static name: string
}
class UIDCache {
    /* Fields of Camel-1.2.Camel.UIDCache */
    readonly filename: string
    readonly uids: GLib.HashTable
    readonly level: number
    readonly expired: number
    readonly size: number
    readonly fd: number
    /* Methods of Camel-1.2.Camel.UIDCache */
    destroy(): void
    get_new_uids(uids: string[]): string[]
    save(): boolean
    save_uid(uid: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static free_uids(uids: string[]): void
}
class URL {
    /* Fields of Camel-1.2.Camel.URL */
    readonly protocol: string
    readonly user: string
    readonly authmech: string
    readonly host: string
    readonly port: number
    readonly path: string
    readonly params: GLib.Data
    readonly query: string
    readonly fragment: string
    /* Methods of Camel-1.2.Camel.URL */
    copy(): URL
    equal(u2: URL): boolean
    free(): void
    get_param(name: string): string
    hash(): number
    new_with_base(url_string: string): URL
    set_authmech(authmech: string): void
    set_fragment(fragment: string): void
    set_host(host: string): void
    set_param(name: string, value: string): void
    set_path(path: string): void
    set_port(port: number): void
    set_protocol(protocol: string): void
    set_query(query: string): void
    set_user(user: string): void
    to_string(flags: URLFlags): string
    static name: string
    static new(url_string: string): URL
    constructor(url_string: string)
    /* Static methods and pseudo-constructors */
    static new(url_string: string): URL
    static addrspec_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static addrspec_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static decode(part: string): void
    static decode_path(path: string): string
    static encode(part: string, escape_extra: string): string
    static file_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static file_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static web_end(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static web_start(in_: string, pos: string, inend: string, match: UrlMatch): boolean
}
class UrlMatch {
    /* Fields of Camel-1.2.Camel.UrlMatch */
    readonly pattern: string
    readonly prefix: string
    readonly um_so: number
    readonly um_eo: number
    static name: string
}
class UrlPattern {
    /* Fields of Camel-1.2.Camel.UrlPattern */
    readonly pattern: string
    readonly prefix: string
    readonly start: UrlScanFunc
    readonly end: UrlScanFunc
    static name: string
}
class UrlScanner {
    static name: string
}
abstract class VTrashFolderClass {
    /* Fields of Camel-1.2.Camel.VTrashFolderClass */
    readonly parent_class: VeeFolderClass
    readonly reserved: object[]
    static name: string
}
class VTrashFolderPrivate {
    static name: string
}
abstract class VeeDataCacheClass {
    /* Fields of Camel-1.2.Camel.VeeDataCacheClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class VeeDataCachePrivate {
    static name: string
}
abstract class VeeFolderClass {
    /* Fields of Camel-1.2.Camel.VeeFolderClass */
    readonly parent_class: FolderClass
    readonly add_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    readonly remove_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    readonly rebuild_folder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    readonly set_expression: (vfolder: VeeFolder, expression: string) => void
    readonly folder_changed: (vfolder: VeeFolder, subfolder: Folder, changes: FolderChangeInfo) => void
    readonly reserved: object[]
    static name: string
}
class VeeFolderPrivate {
    static name: string
}
abstract class VeeMessageInfoClass {
    /* Fields of Camel-1.2.Camel.VeeMessageInfoClass */
    readonly parent_class: MessageInfoClass
    readonly reserved: object[]
    static name: string
}
abstract class VeeMessageInfoDataClass {
    /* Fields of Camel-1.2.Camel.VeeMessageInfoDataClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class VeeMessageInfoDataPrivate {
    static name: string
}
class VeeMessageInfoPrivate {
    static name: string
}
abstract class VeeStoreClass {
    /* Fields of Camel-1.2.Camel.VeeStoreClass */
    readonly parent_class: StoreClass
    readonly reserved: object[]
    static name: string
}
class VeeStorePrivate {
    static name: string
}
abstract class VeeSubfolderDataClass {
    /* Fields of Camel-1.2.Camel.VeeSubfolderDataClass */
    readonly parent_class: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class VeeSubfolderDataPrivate {
    static name: string
}
abstract class VeeSummaryClass {
    /* Fields of Camel-1.2.Camel.VeeSummaryClass */
    readonly parent_class: FolderSummaryClass
    readonly reserved: object[]
    static name: string
}
class VeeSummaryPrivate {
    static name: string
}
class WeakRefGroup {
    /* Methods of Camel-1.2.Camel.WeakRefGroup */
    get(): object | null
    ref(): WeakRefGroup
    set(object?: object | null): void
    unref(): void
    static name: string
    static new(): WeakRefGroup
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): WeakRefGroup
}
class _KeyKey {
    /* Fields of Camel-1.2.Camel._KeyKey */
    readonly data: _block_t
    readonly offset: number
    readonly flags: number
    static name: string
}
class _LockHelperMsg {
    /* Fields of Camel-1.2.Camel._LockHelperMsg */
    readonly magic: number
    readonly seq: number
    readonly id: number
    readonly data: number
    static name: string
}
class __search_word {
    /* Fields of Camel-1.2.Camel.__search_word */
    readonly type: _search_word_t
    readonly word: string
    static name: string
}
class __search_words {
    /* Fields of Camel-1.2.Camel.__search_words */
    readonly len: number
    readonly type: _search_word_t
    readonly words: object
    static name: string
}
class _encrypt {
    /* Fields of Camel-1.2.Camel._encrypt */
    readonly status: CipherValidityEncrypt
    readonly description: string
    readonly encrypters: GLib.Queue
    static name: string
}
class _sign {
    /* Fields of Camel-1.2.Camel._sign */
    readonly status: CipherValiditySign
    readonly description: string
    readonly signers: GLib.Queue
    static name: string
}
    type _block_t = number
    type _hash_t = number
    type _key_t = number
}
export default Camel;