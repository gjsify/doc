/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Camel-1.2
 */

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
function bindingBindProperty(source: GObject.Object, sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
function bindingBindPropertyFull(source: GObject.Object, sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
function charsetBest(in_: number[]): string | null
function charsetIsoToWindows(isocharset: string): string
function cipherCanLoadPhotos(): boolean
function cipherCanonicalToStream(part: MimePart, flags: number, ostream: Stream, cancellable?: Gio.Cancellable | null): number
function cipherCertinfoGetProperty(certInfo: CipherCertInfo, name: string): object | null
function cipherCertinfoSetProperty(certInfo: CipherCertInfo, name: string, value?: object | null, valueClone?: CipherCloneFunc | null): void
function contentDispositionDecode(in_: string): ContentDisposition
function contentTransferEncodingDecode(in_: string): string
function contentTypeDecode(in_: string): ContentType
function debug(mode: string): boolean
function debugDemangleBacktrace(bt?: GLib.String | null): /* bt */ GLib.String | null
function debugEnd(): void
function debugGetBacktrace(): GLib.String
function debugGetRawBacktrace(): GLib.String
function debugInit(): void
function debugRefUnrefDumpBacktraces(): void
function debugRefUnrefPushBacktrace(backtrace: GLib.String, objectRefCount: number): void
function debugRefUnrefPushBacktraceForObject(object?: object | null): void
function debugStart(mode: string): boolean
function enrichedToHtml(in_: string, flags: MimeFilterEnrichedFlags): string
function errorQuark(): GLib.Quark
function fileUtilDecodeFixedInt32(in_: object | null, dest: number): number
function fileUtilDecodeFixedString(in_: object | null, str: string, len: number): number
function fileUtilDecodeGsize(in_: object | null, dest: number): number
function fileUtilDecodeOffT(in_: object | null, dest: number): number
function fileUtilDecodeString(in_: object | null, str: string): number
function fileUtilDecodeTimeT(in_: object | null, dest: number): number
function fileUtilDecodeUint32(in_: object | null, dest: number): number
function fileUtilEncodeFixedInt32(out: object | null, value: number): number
function fileUtilEncodeFixedString(out: object | null, str: string, len: number): number
function fileUtilEncodeGsize(out: object | null, value: number): number
function fileUtilEncodeOffT(out: object | null, value: number): number
function fileUtilEncodeString(out: object | null, str: string): number
function fileUtilEncodeTimeT(out: object | null, value: number): number
function fileUtilEncodeUint32(out: object | null, value: number): number
function fileUtilSafeFilename(name: string): string
function fileUtilSavename(filename: string): string
function folderErrorQuark(): GLib.Quark
function folderInfoBuild(folders: FolderInfo[], namespace: string, separator: number, shortNames: boolean): FolderInfo
function freeaddrinfo(host?: object | null): void
function getaddrinfo(name: string, service: string, hints?: object | null, cancellable?: Gio.Cancellable | null): object | null
function headerAddressDecode(in_: string, charset: string): HeaderAddress
function headerAddressFold(in_: string, headerlen: number): string
function headerAddressListAppend(addrlistp: HeaderAddress[], addr: HeaderAddress): void
function headerAddressListAppendList(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
function headerAddressListClear(addrlistp: HeaderAddress[]): void
function headerAddressListEncode(addrlist: HeaderAddress[]): string
function headerAddressListFormat(addrlist: HeaderAddress[]): string
function headerContentidDecode(in_: string): string
function headerDecodeDate(str: string, tzOffset: number): number
function headerDecodeInt(in_: string): number
function headerDecodeString(in_: string, defaultCharset: string): string
function headerEncodePhrase(in_: number): string
function headerEncodeString(in_: number): string
function headerFold(in_: string, headerlen: number): string
function headerFormatCtext(in_: string, defaultCharset: string): string
function headerFormatDate(date: number, tzOffset: number): string
function headerLocationDecode(in_: string): string
function headerMailboxDecode(in_: string, charset: string): HeaderAddress
function headerMimeDecode(in_: string, maj: number, min: number): void
function headerMsgidDecode(in_: string): string
function headerMsgidGenerate(domain: string): string
function headerNewsgroupsDecode(in_: string): string[]
function headerParam(params: object | null, name: string): string
function headerParamListDecode(in_?: string | null): object | null
function headerParamListFormat(params?: object | null): string
function headerParamListFormatAppend(out: GLib.String, params?: object | null): void
function headerParamListFree(params?: object | null): void
function headerReferencesDecode(in_: string): string[]
function headerSetParam(paramsp: object | null, name: string, value: string): object | null
function headerTokenDecode(in_: string): string
function headerUnfold(in_: string): string
function headersDupMailingList(headers: NameValueArray): string | null
function hostIdnaToAscii(host: string): string
function hostnameUtilsRequiresAscii(hostname: string): boolean
function iconvCharsetLanguage(charset: string): string
function iconvCharsetName(charset: string): string
function iconvLocaleCharset(): string
function iconvLocaleLanguage(): string
function init(certdbDir: string, nssInit: boolean): number
function localtimeWithOffset(tt: number, tm: object | null, offset: number): void
function lockDot(path: string): number
function lockFcntl(fd: number, type: LockType): number
function lockFlock(fd: number, type: LockType): number
function lockFolder(path: string, fd: number, type: LockType): number
function lockHelperLock(path: string): number
function lockHelperUnlock(lockid: number): number
function mktimeUtc(tm?: object | null): number
function movemail(source: string, dest: string): number
function pointerTrackerDump(): void
function pointerTrackerTrackWithInfo(ptr: object | null, info: string): void
function pointerTrackerUntrack(ptr?: object | null): void
function providerGet(protocol: string): Provider
function providerInit(): void
function providerList(load: boolean): Provider[]
function providerLoad(path: string): boolean
function providerModuleInit(): void
function pstringAdd(string: string, own: boolean): string
function pstringContains(string: string): boolean
function pstringDumpStat(): void
function pstringFree(string: string): void
function pstringPeek(string: string): string
function pstringStrdup(string: string): string
function quotedDecodeStep(in_: Uint8Array, out: Uint8Array, saveme: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* saveme */ number[] ]
function quotedEncodeClose(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
function quotedEncodeStep(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
function read(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number
function searchCamelHeaderSoundex(header: string, match: string): boolean
function searchGetAllHeadersDecoded(message: MimeMessage): string
function searchGetDefaultCharsetFromHeaders(headers: NameValueArray): string
function searchGetDefaultCharsetFromMessage(message: MimeMessage): string
function searchGetHeaderDecoded(headerName: string, headerValue: string, defaultCharset?: string | null): string
function searchGetHeadersDecoded(headers: NameValueArray, defaultCharset?: string | null): string
function searchHeaderIsAddress(headerName: string): boolean
function searchHeaderMatch(value: string, match: string, how: _search_match_t, type: _search_t, defaultCharset: string): boolean
function searchWordsFree(words?: object | null): void
function searchWordsSimple(words?: object | null): object | null
function searchWordsSplit(in_: number): object | null
function serviceErrorQuark(): GLib.Quark
function shutdown(): void
function storeErrorQuark(): GLib.Quark
function storeInfoName(summary: StoreSummary, info: StoreInfo): string
function storeInfoPath(summary: StoreSummary, info: StoreInfo): string
function storeInfoSetString(summary: StoreSummary, info: StoreInfo, type: number, value: string): void
function strcaseEqual(a?: object | null, b?: object | null): number
function strcaseHash(v?: object | null): number
function strdown(str: string): string
function stringIsAllAscii(str?: string | null): boolean
function strstrcase(haystack: string, needle: string): string
function systemFlag(name: string): MessageFlags
function systemFlagGet(flags: MessageFlags, name: string): boolean
function textToHtml(in_: string, flags: MimeFilterToHTMLFlags, color: number): string
function timeValueApply(srcTime: number, unit: TimeUnit, value: number): number
function transferEncodingFromString(string: string): TransferEncoding
function transferEncodingToString(encoding: TransferEncoding): string
function ucs2Utf8(ptr: string): string
function uidCacheFreeUids(uids: string[]): void
function unlockDot(path: string): void
function unlockFcntl(fd: number): void
function unlockFlock(fd: number): void
function unlockFolder(path: string, fd: number): void
function urlAddrspecEnd(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function urlAddrspecStart(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function urlDecode(part: string): void
function urlDecodePath(path: string): string
function urlEncode(part: string, escapeExtra: string): string
function urlFileEnd(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function urlFileStart(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function urlWebEnd(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function urlWebStart(in_: string, pos: string, inend: string, match: UrlMatch): boolean
function ustrstrcase(haystack: string, needle: string): string
function utf7Utf8(ptr: string): string
function utf8Getc(ptr: number): [ /* returnType */ number, /* ptr */ number ]
function utf8GetcLimit(ptr: number, end: number): [ /* returnType */ number, /* ptr */ number ]
function utf8MakeValid(text: string): string
function utf8MakeValidLen(text: string, textLen: number): string
function utf8Putc(ptr: number, c: number): /* ptr */ number
function utf8Ucs2(ptr: string): string
function utf8Utf7(ptr: string): string
function utilBdataGetNumber(bdataPtr: string, defaultValue: number): number
function utilBdataGetString(bdataPtr: string, defaultValue: string): string
function utilBdataPutNumber(bdataStr: GLib.String, value: number): void
function utilBdataPutString(bdataStr: GLib.String, value: string): void
function utilDecodeUserHeaderSetting(settingValue: string): [ /* outDisplayName */ string | null, /* outHeaderName */ string ]
function utilEncodeUserHeaderSetting(displayName: string | null, headerName: string): string
function utilFillMessageInfoUserHeaders(info: MessageInfo, headers: NameValueArray): boolean
function utilGetDirectoryVariants(mainPath: string, replacePrefix: string, withModulesDir: boolean): string[]
function utilsSanitizeAsciiDomainInAddress(emailAddress: string, doFormat: boolean): string | null
function utilsSanitizeAsciiDomainInUrl(url: URL): boolean
function utilsSanitizeAsciiDomainInUrlStr(urlStr: string): string | null
function uudecodeStep(in_: Uint8Array, out: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* save */ number[] ]
function uuencodeClose(in_: Uint8Array, out: Uint8Array, uubuf: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* uubuf */ Uint8Array, /* save */ number[] ]
function uuencodeStep(in_: Uint8Array, out: Uint8Array, uubuf: Uint8Array, save: number[]): [ /* returnType */ number, /* out */ Uint8Array, /* uubuf */ Uint8Array, /* save */ number[] ]
function write(fd: number, buf: string, n: number, cancellable?: Gio.Cancellable | null): number
function ydecodeStep(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
function yencodeClose(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
function yencodeStep(in_: Uint8Array): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* pcrc */ number, /* crc */ number ]
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
    (miData: VeeMessageInfoData, subfolder: Folder): void
}
interface ForeachPartFunc {
    (message: MimeMessage, part: MimePart, parentPart?: MimePart | null): boolean
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
    learnJunk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    learnNotJunk(message: MimeMessage, cancellable?: Gio.Cancellable | null): boolean
    synchronize(cancellable?: Gio.Cancellable | null): boolean
    static name: string
}
interface NetworkService_ConstructProps extends Service_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.NetworkService */
    connectable?: Gio.SocketConnectable
}
class NetworkService {
    /* Properties of Camel-1.2.Camel.NetworkService */
    connectable: Gio.SocketConnectable
    readonly hostReachable: boolean
    /* Properties of Camel-1.2.Camel.Service */
    readonly connectionStatus: ServiceConnectionStatus
    displayName: string
    password: string
    proxyResolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Service */
    readonly parent: Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NetworkService */
    canReach(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    canReachFinish(result: Gio.AsyncResult): boolean
    canReachSync(cancellable?: Gio.Cancellable | null): boolean
    connectSync(cancellable?: Gio.Cancellable | null): Gio.IOStream
    getDefaultPort(method: NetworkSecurityMethod): number
    getHostReachable(): boolean
    getServiceName(method: NetworkSecurityMethod): string
    refConnectable(): Gio.SocketConnectable
    setConnectable(connectable: Gio.SocketConnectable): void
    starttls(baseStream: Gio.IOStream): Gio.IOStream
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticateFinish(result: Gio.AsyncResult): AuthenticationResult
    authenticateSync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectFinish(result: Gio.AsyncResult): boolean
    disconnectSync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupPassword(): string
    getConnectionStatus(): ServiceConnectionStatus
    getDisplayName(): string
    getName(brief: boolean): string
    getPassword(): string
    getProvider(): Provider
    getUid(): string
    getUserCacheDir(): string
    getUserDataDir(): string
    migrateFiles(): void
    newCamelUrl(): URL
    queryAuthTypes(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAuthTypesFinish(result: Gio.AsyncResult): ServiceAuthType[]
    queryAuthTypesSync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queueTask(task: Gio.Task, taskFunc: Gio.TaskThreadFunc): void
    refProxyResolver(): Gio.ProxyResolver
    refSession(): Session
    refSettings(): Settings
    setDisplayName(displayName: string): void
    setPassword(password: string): void
    setProxyResolver(proxyResolver: Gio.ProxyResolver): void
    setSettings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    connect(sigName: "notify::host-reachable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host-reachable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host-reachable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host-reachable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host-reachable", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
interface NetworkSettings_ConstructProps extends Settings_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.NetworkSettings */
    authMechanism?: string
    host?: string
    port?: number
    securityMethod?: NetworkSecurityMethod
    user?: string
}
class NetworkSettings {
    /* Properties of Camel-1.2.Camel.NetworkSettings */
    authMechanism: string
    host: string
    port: number
    securityMethod: NetworkSecurityMethod
    user: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NetworkSettings */
    dupAuthMechanism(): string
    dupHost(): string
    dupHostEnsureAscii(): string
    dupUser(): string
    getAuthMechanism(): string
    getHost(): string
    getPort(): number
    getSecurityMethod(): NetworkSecurityMethod
    getUser(): string
    setAuthMechanism(authMechanism: string): void
    setHost(host: string): void
    setPort(port: number): void
    setSecurityMethod(method: NetworkSecurityMethod): void
    setUser(user: string): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settingsB: Settings): boolean
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
    connect(sigName: "notify::auth-mechanism", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-mechanism", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-mechanism", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security-method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security-method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security-method", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: NetworkSettings_ConstructProps)
    _init (config?: NetworkSettings_ConstructProps): void
    static $gtype: GObject.Type
}
interface Subscribable_ConstructProps extends Store_ConstructProps {
}
class Subscribable {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connectionStatus: ServiceConnectionStatus
    displayName: string
    password: string
    proxyResolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Store */
    readonly parent: Service
    readonly priv: StorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Subscribable */
    folderIsSubscribed(folderName: string): boolean
    folderSubscribed(folderInfo: FolderInfo): void
    folderUnsubscribed(folderInfo: FolderInfo): void
    subscribeFolder(folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    subscribeFolderFinish(result: Gio.AsyncResult): boolean
    subscribeFolderSync(folderName: string, cancellable?: Gio.Cancellable | null): boolean
    unsubscribeFolder(folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    unsubscribeFolderFinish(result: Gio.AsyncResult): boolean
    unsubscribeFolderSync(folderName: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Store */
    canRefreshFolder(info: FolderInfo): boolean
    createFolder(parentName: string | null, folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFolderFinish(result: Gio.AsyncResult): FolderInfo | null
    createFolderSync(parentName: string | null, folderName: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    deleteCachedFolder(folderName: string): void
    deleteFolder(folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFolderFinish(result: Gio.AsyncResult): boolean
    deleteFolderSync(folderName: string, cancellable?: Gio.Cancellable | null): boolean
    dupOpenedFolders(): Folder[]
    folderCreated(folderInfo: FolderInfo): void
    folderDeleted(folderInfo: FolderInfo): void
    folderInfoStale(): void
    folderOpened(folder: Folder): void
    folderRenamed(oldName: string, folderInfo: FolderInfo): void
    getCanAutoSaveChanges(): boolean
    getDb(): DB
    getFlags(): number
    getFolder(folderName: string, flags: StoreGetFolderFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFolderFinish(result: Gio.AsyncResult): Folder | null
    getFolderInfo(top: string | null, flags: StoreGetFolderInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFolderInfoFinish(result: Gio.AsyncResult): FolderInfo | null
    getFolderInfoSync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    getFolderSync(folderName: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    getFoldersBag(): ObjectBag
    getInboxFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getInboxFolderFinish(result: Gio.AsyncResult): Folder | null
    getInboxFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    getJunkFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getJunkFolderFinish(result: Gio.AsyncResult): Folder | null
    getJunkFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    getPermissions(): number
    getTrashFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTrashFolderFinish(result: Gio.AsyncResult): Folder | null
    getTrashFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    initialSetup(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initialSetupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    initialSetupSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    maybeRunDbMaintenance(): boolean
    renameFolder(oldName: string, newName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    renameFolderFinish(result: Gio.AsyncResult): boolean
    renameFolderSync(oldName: string, newName: string, cancellable?: Gio.Cancellable | null): boolean
    setFlags(flags: number): void
    setPermissions(permissions: number): void
    synchronize(expunge: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeFinish(result: Gio.AsyncResult): boolean
    synchronizeSync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticateFinish(result: Gio.AsyncResult): AuthenticationResult
    authenticateSync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectFinish(result: Gio.AsyncResult): boolean
    disconnectSync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupPassword(): string
    getConnectionStatus(): ServiceConnectionStatus
    getDisplayName(): string
    getName(brief: boolean): string
    getPassword(): string
    getProvider(): Provider
    getUid(): string
    getUserCacheDir(): string
    getUserDataDir(): string
    migrateFiles(): void
    newCamelUrl(): URL
    queryAuthTypes(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAuthTypesFinish(result: Gio.AsyncResult): ServiceAuthType[]
    queryAuthTypesSync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queueTask(task: Gio.Task, taskFunc: Gio.TaskThreadFunc): void
    refProxyResolver(): Gio.ProxyResolver
    refSession(): Session
    refSettings(): Settings
    setDisplayName(displayName: string): void
    setPassword(password: string): void
    setProxyResolver(proxyResolver: Gio.ProxyResolver): void
    setSettings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    /* Signals of Camel-1.2.Camel.Subscribable */
    connect(sigName: "folder-subscribed", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-subscribed", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-subscribed", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-subscribed", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-subscribed", object: FolderInfo): void
    connect(sigName: "folder-unsubscribed", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-unsubscribed", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-unsubscribed", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-unsubscribed", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-unsubscribed", object: FolderInfo): void
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-created", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-created", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-created", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-deleted", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-deleted", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-deleted", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (() => void)): number
    on(sigName: "folder-info-stale", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-info-stale", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-info-stale", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: ((object: Folder) => void)): number
    on(sigName: "folder-opened", callback: (object: Folder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-opened", callback: (object: Folder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-opened", callback: (object: Folder) => void): NodeJS.EventEmitter
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: ((object: string, p0: FolderInfo) => void)): number
    on(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
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
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Subscribable_ConstructProps)
    _init (config?: Subscribable_ConstructProps): void
    static $gtype: GObject.Type
}
interface Address_ConstructProps extends GObject.Object_ConstructProps {
}
class Address {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Address */
    cat(source: Address): number
    copy(source: Address): number
    decode(raw: string): number
    encode(): string
    format(): string
    length(): number
    newClone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.BlockFile */
    attachBlock(bl: Block): void
    delete(): number
    detachBlock(bl: Block): void
    freeBlock(id: _block_t): number
    getCacheLimit(): number
    getRoot(): BlockRoot
    getRootBlock(): Block
    rename(path: string): number
    setCacheLimit(blockCacheLimit: number): void
    sync(): number
    syncBlock(bl: Block): number
    touchBlock(bl: Block): void
    unrefBlock(bl: Block): void
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
    constructor (config?: BlockFile_ConstructProps)
    _init (config?: BlockFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, flags: number, version: string, blockSize: number): BlockFile
    static $gtype: GObject.Type
}
interface CertDB_ConstructProps extends GObject.Object_ConstructProps {
}
class CertDB {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.CertDB */
    clear(): void
    getHost(hostname: string, fingerprint: string): Cert | null
    listCerts(): Cert[]
    load(): number
    put(cert: Cert): void
    removeHost(hostname: string, fingerprint: string): void
    save(): number
    setDefault(): void
    setFilename(filename: string): void
    touch(): void
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
    constructor (config?: CertDB_ConstructProps)
    _init (config?: CertDB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CertDB
    static getDefault(): CertDB
    static $gtype: GObject.Type
}
interface CipherContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.CipherContext */
    session?: Session
}
class CipherContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decryptFinish(result: Gio.AsyncResult): CipherValidity
    decryptSync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encryptFinish(result: Gio.AsyncResult): boolean
    encryptSync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    getSession(): Session
    hashToId(hash: CipherHash): string
    idToHash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    signFinish(result: Gio.AsyncResult): boolean
    signSync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifyFinish(result: Gio.AsyncResult): CipherValidity
    verifySync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DB */
    abortTransaction(): number
    addToTransaction(query: string): number
    beginTransaction(): number
    clearFolderSummary(folderName: string): number
    command(stmt: string): number
    countDeletedMessageInfo(tableName: string): [ /* returnType */ number, /* count */ number ]
    countJunkMessageInfo(tableName: string): [ /* returnType */ number, /* count */ number ]
    countJunkNotDeletedMessageInfo(tableName: string, count: number): number
    countMessageInfo(query: string): [ /* returnType */ number, /* count */ number ]
    countTotalMessageInfo(tableName: string): [ /* returnType */ number, /* count */ number ]
    countUnreadMessageInfo(tableName: string): [ /* returnType */ number, /* count */ number ]
    countVisibleMessageInfo(tableName: string): [ /* returnType */ number, /* count */ number ]
    countVisibleUnreadMessageInfo(tableName: string): [ /* returnType */ number, /* count */ number ]
    createFoldersTable(): number
    deleteFolder(folderName: string): number
    deleteUid(folderName: string, uid: string): number
    deleteUids(folderName: string, uids: string[]): number
    endTransaction(): number
    flushInMemoryTransactions(folderName: string): number
    getFilename(): string
    getFolderDeletedUids(folderName: string): string[] | null
    getFolderJunkUids(folderName: string): string[] | null
    getFolderUids(folderName: string, sortBy: string | null, collate: string | null, hash: GLib.HashTable): number
    maybeRunMaintenance(): boolean
    prepareMessageInfoTable(folderName: string): number
    readFolderInfoRecord(folderName: string): [ /* returnType */ number, /* record */ FIRecord ]
    readMessageInfoRecordWithUid(folderName: string, uid: string, callback: DBSelectCB): number
    readMessageInfoRecords(folderName: string, callback: DBSelectCB): number
    renameFolder(oldFolderName: string, newFolderName: string): number
    resetFolderVersion(folderName: string, resetVersion: number): number
    select(stmt: string, callback: DBSelectCB): number
    setCollate(col: string, collate: string, func: DBCollate): number
    startInMemoryTransactions(): number
    transactionCommand(qryList: string[]): number
    writeFolderInfoRecord(record: FIRecord): number
    writeMessageInfoRecord(folderName: string, record: MIRecord): number
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
    constructor (config?: DB_ConstructProps)
    _init (config?: DB_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(filename: string): DB
    static camelMirFree(record?: MIRecord | null): void
    static freeSqlizedString(string?: string | null): void
    static getColumnIdent(hash: GLib.HashTable, index: number, colNames: string[]): [ /* returnType */ DBKnownColumnNames, /* hash */ GLib.HashTable ]
    static getColumnName(rawName: string): string | null
    static releaseCacheMemory(): void
    static sqlizeString(string: string): string
    static $gtype: GObject.Type
}
interface DataCache_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.DataCache */
    expireEnabled?: boolean
    path?: string
}
class DataCache {
    /* Properties of Camel-1.2.Camel.DataCache */
    expireEnabled: boolean
    path: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DataCache */
    add(path: string, key: string): Gio.IOStream
    clear(path: string): void
    foreachRemove(path: string, func: DataCacheRemoveFunc): void
    get(path: string, key: string): Gio.IOStream
    getExpireEnabled(): boolean
    getFilename(path: string, key: string): string
    getPath(): string
    remove(path: string, key: string): number
    setExpireAccess(when: number): void
    setExpireAge(when: number): void
    setExpireEnabled(expireEnabled: boolean): void
    setPath(path: string): void
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
    connect(sigName: "notify::expire-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expire-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expire-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expire-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expire-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculateDecodedSizeSync(cancellable?: Gio.Cancellable | null): number
    calculateSizeSync(cancellable?: Gio.Cancellable | null): number
    constructFromInputStream(inputStream: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromInputStreamFinish(result: Gio.AsyncResult): boolean
    constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    constructFromStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromStreamFinish(result: Gio.AsyncResult): boolean
    constructFromStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decodeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToOutputStreamFinish(result: Gio.AsyncResult): number
    decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decodeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToStreamFinish(result: Gio.AsyncResult): number
    decodeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    getByteArray(): Uint8Array
    getEncoding(): TransferEncoding
    getMimeType(): string
    getMimeTypeField(): ContentType | null
    isOffline(): boolean
    setEncoding(encoding: TransferEncoding): void
    setMimeType(mimeType: string): void
    setMimeTypeField(mimeType?: ContentType | null): void
    setOffline(offline: boolean): void
    takeMimeTypeField(mimeType?: ContentType | null): void
    writeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToOutputStreamFinish(result: Gio.AsyncResult): number
    writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    writeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToStreamFinish(result: Gio.AsyncResult): number
    writeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterDriver */
    addRule(name: string, match: string, action: string): void
    filterFolder(folder: Folder, cache: UIDCache, uids: string[], remove: boolean, cancellable?: Gio.Cancellable | null): number
    filterMbox(mbox: string, originalSourceUrl?: string | null, cancellable?: Gio.Cancellable | null): number
    filterMessage(message: MimeMessage, info: MessageInfo, uid: string, source: Folder, storeUid: string, originalStoreUid: string, cancellable?: Gio.Cancellable | null): number
    flush(): void
    removeRuleByName(name: string): boolean
    setDefaultFolder(def?: Folder | null): void
    setLogfile(logfile?: object | null): void
    setPlaySoundFunc(func: FilterPlaySoundFunc): void
    setShellFunc(func: FilterShellFunc): void
    setStatusFunc(func: FilterStatusFunc): void
    setSystemBeepFunc(func: FilterSystemBeepFunc): void
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
    closeBaseStream: boolean
    /* Fields of Gio-2.0.Gio.FilterInputStream */
    readonly parentInstance: Gio.InputStream
    readonly baseStream: Gio.InputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterInputStream */
    getFilter(): MimeFilter
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
    /* Static methods and pseudo-constructors */
    static new(baseStream: Gio.InputStream, filter: MimeFilter): FilterInputStream
    static $gtype: GObject.Type
}
interface FilterOutputStream_ConstructProps extends Gio.FilterOutputStream_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.FilterOutputStream */
    filter?: MimeFilter
}
class FilterOutputStream {
    /* Fields of Gio-2.0.Gio.FilterOutputStream */
    readonly parentInstance: Gio.OutputStream
    readonly baseStream: Gio.OutputStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FilterOutputStream */
    getFilter(): MimeFilter
    /* Methods of Gio-2.0.Gio.FilterOutputStream */
    getBaseStream(): Gio.OutputStream
    getCloseBaseStream(): boolean
    setCloseBaseStream(closeBase: boolean): void
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    spliceAsync(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spliceFinish(result: Gio.AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Gio.Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytesFinish(result: Gio.AsyncResult): number
    writeFinish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    /* Static methods and pseudo-constructors */
    static new(baseStream: Gio.OutputStream, filter: MimeFilter): FilterOutputStream
    static $gtype: GObject.Type
}
interface Folder_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Folder */
    description?: string
    displayName?: string
    fullName?: string
    markSeen?: ThreeState
    markSeenTimeout?: number
    parentStore?: Store
}
class Folder {
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    displayName: string
    fullName: string
    markSeen: ThreeState
    markSeenTimeout: number
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Folder */
    appendMessage(message: MimeMessage, info: MessageInfo | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    appendMessageFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    appendMessageSync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmpUids(uid1: string, uid2: string): number
    countByExpression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dupDescription(): string
    dupDisplayName(): string
    dupFullName(): string
    expunge(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expungeFinish(result: Gio.AsyncResult): boolean
    expungeSync(cancellable?: Gio.Cancellable | null): boolean
    freeDeep(array: string[]): void
    freeShallow(array: string[]): void
    freeSummary(array: MessageInfo[]): void
    freeUids(array: string[]): void
    freeze(): void
    getDeletedMessageCount(): number
    getDescription(): string
    getDisplayName(): string
    getFilename(uid: string): string
    getFlags(): number
    getFolderSummary(): FolderSummary
    getFrozenCount(): number
    getFullName(): string
    getMarkSeen(): ThreeState
    getMarkSeenTimeout(): number
    getMessage(messageUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMessageCached(messageUid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    getMessageCount(): number
    getMessageFinish(result: Gio.AsyncResult): MimeMessage
    getMessageFlags(uid: string): number
    getMessageInfo(uid: string): MessageInfo
    getMessageSync(messageUid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    getMessageUserFlag(uid: string, name: string): boolean
    getMessageUserTag(uid: string, name: string): string
    getParentStore(): object | null
    getPermanentFlags(): number
    getQuotaInfo(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getQuotaInfoFinish(result: Gio.AsyncResult): FolderQuotaInfo
    getQuotaInfoSync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    getSummary(): string[]
    getUids(): string[]
    getUncachedUids(uids: string[]): string[]
    getUnreadMessageCount(): number
    hasSummaryCapability(): boolean
    isFrozen(): boolean
    lock(): void
    prepareContentRefresh(): void
    purgeMessageCache(startUid: string, endUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purgeMessageCacheFinish(result: Gio.AsyncResult): boolean
    purgeMessageCacheSync(startUid: string, endUid: string, cancellable?: Gio.Cancellable | null): boolean
    refreshInfo(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshInfoFinish(result: Gio.AsyncResult): boolean
    refreshInfoSync(cancellable?: Gio.Cancellable | null): boolean
    rename(newName: string): void
    searchByExpression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    searchByUids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    searchFree(result: string[]): void
    setDescription(description: string): void
    setDisplayName(displayName: string): void
    setFlags(folderFlags: number): void
    setFullName(fullName: string): void
    setLockAsync(skipFolderLock: boolean): void
    setMarkSeen(markSeen: ThreeState): void
    setMarkSeenTimeout(timeout: number): void
    setMessageFlags(uid: string, mask: number, set: number): boolean
    setMessageUserFlag(uid: string, name: string, value: boolean): void
    setMessageUserTag(uid: string, name: string, value: string): void
    sortUids(uids: string[]): void
    synchronize(expunge: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeFinish(result: Gio.AsyncResult): boolean
    synchronizeMessage(messageUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeMessageFinish(result: Gio.AsyncResult): boolean
    synchronizeMessageSync(messageUid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronizeSync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    takeFolderSummary(summary: FolderSummary): void
    thaw(): void
    transferMessagesTo(messageUids: string[], destination: Folder, deleteOriginals: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transferMessagesToFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    transferMessagesToSync(messageUids: string[], destination: Folder, deleteOriginals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: ((changes: FolderChangeInfo) => void)): number
    on(sigName: "changed", callback: (changes: FolderChangeInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (changes: FolderChangeInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (changes: FolderChangeInfo) => void): NodeJS.EventEmitter
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (() => void)): number
    on(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deleted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: ((oldName: string) => void)): number
    on(sigName: "renamed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "renamed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "renamed", callback: (oldName: string) => void): NodeJS.EventEmitter
    emit(sigName: "renamed", oldName: string): void
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
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Folder_ConstructProps)
    _init (config?: Folder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static threadedMessagesDump(c: FolderThreadNode): number
    static $gtype: GObject.Type
}
interface FolderSearch_ConstructProps extends GObject.Object_ConstructProps {
}
class FolderSearch {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FolderSearch */
    count(expr: string, cancellable?: Gio.Cancellable | null): number
    freeResult(result?: string[] | null): void
    getCurrentMessageInfo(): MessageInfo | null
    getCurrentSummary(): string[]
    getFolder(): Folder
    getOnlyCachedMessages(): boolean
    getSummary(): string[]
    getSummaryEmpty(): boolean
    search(expr: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    setBodyIndex(bodyIndex?: Index | null): void
    setCurrentMessageInfo(info?: MessageInfo | null): void
    setFolder(folder: Folder): void
    setOnlyCachedMessages(onlyCachedMessages: boolean): void
    setSummary(summary: string[]): void
    takeCurrentMessageInfo(info?: MessageInfo | null): void
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
    constructor (config?: FolderSearch_ConstructProps)
    _init (config?: FolderSearch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FolderSearch
    static utilAddMonths(t: number, months: number): number
    static utilCompareDate(datetime1: number, datetime2: number): number
    static utilHashMessageId(messageId: string, needsDecode: boolean): number
    static utilMakeTime(argc: number, argv: SExpResult): number
    static $gtype: GObject.Type
}
interface FolderSummary_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.FolderSummary */
    folder?: Folder
}
class FolderSummary {
    /* Properties of Camel-1.2.Camel.FolderSummary */
    readonly deletedCount: number
    readonly junkCount: number
    readonly junkNotDeletedCount: number
    readonly savedCount: number
    readonly unreadCount: number
    readonly visibleCount: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.FolderSummary */
    add(info: MessageInfo, forceKeepUid: boolean): void
    checkUid(uid: string): boolean
    clear(): boolean
    count(): number
    get(uid: string): MessageInfo | null
    getArray(): string[]
    getChanged(): string[]
    getDeletedCount(): number
    getFlags(): number
    getFolder(): object | null
    getHash(): GLib.HashTable
    getIndex(): Index
    getInfoFlags(uid: string): number
    getJunkCount(): number
    getJunkNotDeletedCount(): number
    getNextUid(): number
    getSavedCount(): number
    getTimestamp(): number
    getUnreadCount(): number
    getVersion(): number
    getVisibleCount(): number
    headerLoad(store: object | null, folderName: string): boolean
    headerSave(): boolean
    infoNewFromHeaders(headers: NameValueArray): MessageInfo
    infoNewFromMessage(message: MimeMessage): MessageInfo
    infoNewFromParser(parser: MimeParser): MessageInfo
    load(): boolean
    lock(): void
    nextUid(): number
    nextUidString(): string
    peekLoaded(uid: string): MessageInfo | null
    prepareFetchAll(): void
    remove(info: MessageInfo): boolean
    removeUid(uid: string): boolean
    removeUids(uids: string[]): boolean
    replaceFlags(info: MessageInfo): boolean
    save(): boolean
    setFlags(flags: number): void
    setIndex(index: Index): void
    setNextUid(uid: number): void
    setTimestamp(timestamp: number): void
    setVersion(version: number): void
    touch(): void
    unlock(): void
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
    /* Signals of Camel-1.2.Camel.FolderSummary */
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
    connect(sigName: "notify::deleted-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::junk-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::junk-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::junk-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::junk-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::junk-not-deleted-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-not-deleted-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::saved-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::saved-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::saved-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::saved-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::saved-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unread-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unread-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unread-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unread-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unread-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FolderSummary_ConstructProps)
    _init (config?: FolderSummary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(folder: Folder): FolderSummary
    static freeArray(array: string[]): void
    static $gtype: GObject.Type
}
interface GpgContext_ConstructProps extends CipherContext_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.GpgContext */
    alwaysTrust?: boolean
    preferInline?: boolean
}
class GpgContext {
    /* Properties of Camel-1.2.Camel.GpgContext */
    alwaysTrust: boolean
    preferInline: boolean
    /* Fields of Camel-1.2.Camel.CipherContext */
    readonly parent: GObject.Object
    readonly priv: CipherContextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.GpgContext */
    getAlwaysTrust(): boolean
    getPreferInline(): boolean
    setAlwaysTrust(alwaysTrust: boolean): void
    setPreferInline(preferInline: boolean): void
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decryptFinish(result: Gio.AsyncResult): CipherValidity
    decryptSync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encryptFinish(result: Gio.AsyncResult): boolean
    encryptSync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    getSession(): Session
    hashToId(hash: CipherHash): string
    idToHash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    signFinish(result: Gio.AsyncResult): boolean
    signSync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifyFinish(result: Gio.AsyncResult): CipherValidity
    verifySync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    connect(sigName: "notify::prefer-inline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefer-inline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefer-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.HTMLParser */
    attr(name: string): string
    attrList(values?: string[] | null): [ /* returnType */ string[], /* values */ string[] | null ]
    left(lenp: number): string
    setData(start: string, len: number, last: number): void
    step(datap: string, lenp: number): HTMLParserState
    tag(): string
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Index */
    addName(name: string): IndexName | null
    compress(): number
    construct(path: string, flags: number): void
    delete(): number
    deleteName(name: string): void
    find(word: string): IndexCursor | null
    findName(name: string): IndexCursor | null
    hasName(name: string): number
    rename(path: string): number
    setNormalize(func: IndexNorm): void
    sync(): number
    words(): IndexCursor | null
    writeName(idn: IndexName): number
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
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    static $gtype: GObject.Type
}
interface IndexCursor_ConstructProps extends GObject.Object_ConstructProps {
}
class IndexCursor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    constructor (config?: IndexCursor_ConstructProps)
    _init (config?: IndexCursor_ConstructProps): void
    static $gtype: GObject.Type
}
interface IndexName_ConstructProps extends GObject.Object_ConstructProps {
}
class IndexName {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexName */
    addBuffer(buffer: string, len: number): number
    addWord(word: string): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.InternetAddress */
    add(name: string, address: string): number
    ensureAsciiDomains(): void
    findAddress(address: string): [ /* returnType */ number, /* namep */ string | null ]
    findName(name: string): [ /* returnType */ number, /* addressp */ string | null ]
    get(index: number): [ /* returnType */ boolean, /* namep */ string | null, /* addressp */ string | null ]
    sanitizeAsciiDomain(): boolean
    /* Methods of Camel-1.2.Camel.Address */
    cat(source: Address): number
    copy(source: Address): number
    decode(raw: string): number
    encode(): string
    format(): string
    length(): number
    newClone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    constructor (config?: InternetAddress_ConstructProps)
    _init (config?: InternetAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternetAddress
    /* Function overloads */
    static new(): InternetAddress
    static encodeAddress(len: number, name: string, addr: string): string
    static formatAddress(name: string, addr: string): string
    static $gtype: GObject.Type
}
interface KeyFile_ConstructProps extends GObject.Object_ConstructProps {
}
class KeyFile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.KeyFile */
    delete(): number
    read(start: _block_t, records?: _key_t[] | null): number
    rename(path: string): number
    write(parent: _block_t, records: _key_t[]): number
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.KeyTable */
    add(key: string, data: _block_t, flags: number): _key_t
    lookup(keyid: _key_t, key: string, flags: number): _block_t
    next(next: _key_t, keyp: string, flagsp: number, datap: _block_t): _key_t
    setData(keyid: _key_t, data: _block_t): boolean
    setFlags(keyid: _key_t, flags: number, set: number): boolean
    sync(): number
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
    constructor (config?: KeyTable_ConstructProps)
    _init (config?: KeyTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(bs: BlockFile, root: _block_t): KeyTable
    static $gtype: GObject.Type
}
interface LocalSettings_ConstructProps extends StoreSettings_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.LocalSettings */
    filterAll?: boolean
    filterJunk?: boolean
    maildirAltFlagSep?: boolean
    path?: string
}
class LocalSettings {
    /* Properties of Camel-1.2.Camel.LocalSettings */
    filterAll: boolean
    filterJunk: boolean
    maildirAltFlagSep: boolean
    path: string
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filterInbox: boolean
    storeChangesInterval: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.LocalSettings */
    dupPath(): string
    getFilterAll(): boolean
    getFilterJunk(): boolean
    getMaildirAltFlagSep(): boolean
    getPath(): string
    setFilterAll(filterAll: boolean): void
    setFilterJunk(filterJunk: boolean): void
    setMaildirAltFlagSep(maildirAltFlagSep: boolean): void
    setPath(path: string): void
    /* Methods of Camel-1.2.Camel.StoreSettings */
    getFilterInbox(): boolean
    getStoreChangesInterval(): number
    setFilterInbox(filterInbox: boolean): void
    setStoreChangesInterval(interval: number): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settingsB: Settings): boolean
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
    connect(sigName: "notify::filter-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-junk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-junk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-junk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-junk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-junk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::maildir-alt-flag-sep", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maildir-alt-flag-sep", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::maildir-alt-flag-sep", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::maildir-alt-flag-sep", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::maildir-alt-flag-sep", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-inbox", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::store-changes-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Medium */
    addHeader(name: string, value: string): void
    dupHeaders(): NameValueArray
    getContent(): DataWrapper | null
    getHeader(name: string): string | null
    getHeaders(): NameValueArray
    removeHeader(name: string): void
    setContent(content?: DataWrapper | null): void
    setHeader(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculateDecodedSizeSync(cancellable?: Gio.Cancellable | null): number
    calculateSizeSync(cancellable?: Gio.Cancellable | null): number
    constructFromInputStream(inputStream: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromInputStreamFinish(result: Gio.AsyncResult): boolean
    constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    constructFromStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromStreamFinish(result: Gio.AsyncResult): boolean
    constructFromStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decodeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToOutputStreamFinish(result: Gio.AsyncResult): number
    decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decodeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToStreamFinish(result: Gio.AsyncResult): number
    decodeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    getByteArray(): Uint8Array
    getEncoding(): TransferEncoding
    getMimeType(): string
    getMimeTypeField(): ContentType | null
    isOffline(): boolean
    setEncoding(encoding: TransferEncoding): void
    setMimeType(mimeType: string): void
    setMimeTypeField(mimeType?: ContentType | null): void
    setOffline(offline: boolean): void
    takeMimeTypeField(mimeType?: ContentType | null): void
    writeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToOutputStreamFinish(result: Gio.AsyncResult): number
    writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    writeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToStreamFinish(result: Gio.AsyncResult): number
    writeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Medium_ConstructProps)
    _init (config?: Medium_ConstructProps): void
    static $gtype: GObject.Type
}
interface MessageInfo_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.MessageInfo */
    abortNotifications?: boolean
    cc?: string
    dateReceived?: number
    dateSent?: number
    dirty?: boolean
    flags?: MessageFlags
    folderFlagged?: boolean
    from?: string
    headers?: NameValueArray
    messageId?: number
    mlist?: string
    preview?: string
    references?: object[]
    size?: number
    subject?: string
    summary?: FolderSummary
    to?: string
    uid?: string
    userFlags?: NamedFlags
    userHeaders?: NameValueArray
    userTags?: NameValueArray
}
class MessageInfo {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abortNotifications: boolean
    cc: string
    dateReceived: number
    dateSent: number
    dirty: boolean
    flags: MessageFlags
    folderFlagged: boolean
    readonly folderFlaggedStamp: number
    from: string
    headers: NameValueArray
    messageId: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    userFlags: NamedFlags
    userHeaders: NameValueArray
    userTags: NameValueArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assignSummary?: FolderSummary | null): MessageInfo
    dump(): void
    dupHeaders(): NameValueArray | null
    dupPreview(): string | null
    dupReferences(): number[] | null
    dupUserFlags(): NamedFlags
    dupUserHeader(name: string): string | null
    dupUserHeaders(): NameValueArray | null
    dupUserTag(name: string): string | null
    dupUserTags(): NameValueArray | null
    freezeNotifications(): void
    getAbortNotifications(): boolean
    getCc(): string
    getDateReceived(): number
    getDateSent(): number
    getDirty(): boolean
    getFlags(): number
    getFolderFlagged(): boolean
    getFolderFlaggedStamp(): number
    getFrom(): string
    getHeaders(): NameValueArray | null
    getMessageId(): number
    getMlist(): string
    getNotificationsFrozen(): boolean
    getPreview(): string | null
    getReferences(): number[] | null
    getSize(): number
    getSubject(): string
    getTo(): string
    getUid(): string
    getUserFlag(name: string): boolean
    getUserFlags(): NamedFlags | null
    getUserHeader(name: string): string | null
    getUserHeaders(): NameValueArray | null
    getUserTag(name: string): string | null
    getUserTags(): NameValueArray | null
    load(record: MIRecord, bdataPtr: string): boolean
    pooldupUid(): string
    propertyLock(): void
    propertyUnlock(): void
    refSummary(): object | null
    save(record: MIRecord, bdataStr: GLib.String): boolean
    setAbortNotifications(abortNotifications: boolean): void
    setCc(cc?: string | null): boolean
    setDateReceived(dateReceived: number): boolean
    setDateSent(dateSent: number): boolean
    setDirty(dirty: boolean): void
    setFlags(mask: number, set: number): boolean
    setFolderFlagged(folderFlagged: boolean): boolean
    setFrom(from?: string | null): boolean
    setMessageId(messageId: number): boolean
    setMlist(mlist?: string | null): boolean
    setPreview(preview?: string | null): boolean
    setSize(size: number): boolean
    setSubject(subject?: string | null): boolean
    setTo(to?: string | null): boolean
    setUid(uid: string): boolean
    setUserFlag(name: string, state: boolean): boolean
    setUserHeader(name: string, value?: string | null): boolean
    setUserTag(name: string, value?: string | null): boolean
    takeHeaders(headers?: NameValueArray | null): boolean
    takeReferences(references?: number[] | null): boolean
    takeUserFlags(userFlags?: NamedFlags | null): boolean
    takeUserHeaders(headers?: NameValueArray | null): boolean
    takeUserTags(userTags?: NameValueArray | null): boolean
    thawNotifications(): void
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
    connect(sigName: "notify::abort-notifications", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date-received", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date-sent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dirty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-flagged", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-flagged-stamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mlist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preview", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::references", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::to", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MessageInfo_ConstructProps)
    _init (config?: MessageInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary?: FolderSummary | null): MessageInfo
    static newFromHeaders(summary: FolderSummary, headers: NameValueArray): MessageInfo
    static $gtype: GObject.Type
}
interface MessageInfoBase_ConstructProps extends MessageInfo_ConstructProps {
}
class MessageInfoBase {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abortNotifications: boolean
    cc: string
    dateReceived: number
    dateSent: number
    dirty: boolean
    flags: MessageFlags
    folderFlagged: boolean
    readonly folderFlaggedStamp: number
    from: string
    headers: NameValueArray
    messageId: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    userFlags: NamedFlags
    userHeaders: NameValueArray
    userTags: NameValueArray
    /* Fields of Camel-1.2.Camel.MessageInfo */
    readonly parent: GObject.Object
    readonly priv: MessageInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assignSummary?: FolderSummary | null): MessageInfo
    dump(): void
    dupHeaders(): NameValueArray | null
    dupPreview(): string | null
    dupReferences(): number[] | null
    dupUserFlags(): NamedFlags
    dupUserHeader(name: string): string | null
    dupUserHeaders(): NameValueArray | null
    dupUserTag(name: string): string | null
    dupUserTags(): NameValueArray | null
    freezeNotifications(): void
    getAbortNotifications(): boolean
    getCc(): string
    getDateReceived(): number
    getDateSent(): number
    getDirty(): boolean
    getFlags(): number
    getFolderFlagged(): boolean
    getFolderFlaggedStamp(): number
    getFrom(): string
    getHeaders(): NameValueArray | null
    getMessageId(): number
    getMlist(): string
    getNotificationsFrozen(): boolean
    getPreview(): string | null
    getReferences(): number[] | null
    getSize(): number
    getSubject(): string
    getTo(): string
    getUid(): string
    getUserFlag(name: string): boolean
    getUserFlags(): NamedFlags | null
    getUserHeader(name: string): string | null
    getUserHeaders(): NameValueArray | null
    getUserTag(name: string): string | null
    getUserTags(): NameValueArray | null
    load(record: MIRecord, bdataPtr: string): boolean
    pooldupUid(): string
    propertyLock(): void
    propertyUnlock(): void
    refSummary(): object | null
    save(record: MIRecord, bdataStr: GLib.String): boolean
    setAbortNotifications(abortNotifications: boolean): void
    setCc(cc?: string | null): boolean
    setDateReceived(dateReceived: number): boolean
    setDateSent(dateSent: number): boolean
    setDirty(dirty: boolean): void
    setFlags(mask: number, set: number): boolean
    setFolderFlagged(folderFlagged: boolean): boolean
    setFrom(from?: string | null): boolean
    setMessageId(messageId: number): boolean
    setMlist(mlist?: string | null): boolean
    setPreview(preview?: string | null): boolean
    setSize(size: number): boolean
    setSubject(subject?: string | null): boolean
    setTo(to?: string | null): boolean
    setUid(uid: string): boolean
    setUserFlag(name: string, state: boolean): boolean
    setUserHeader(name: string, value?: string | null): boolean
    setUserTag(name: string, value?: string | null): boolean
    takeHeaders(headers?: NameValueArray | null): boolean
    takeReferences(references?: number[] | null): boolean
    takeUserFlags(userFlags?: NamedFlags | null): boolean
    takeUserHeaders(headers?: NameValueArray | null): boolean
    takeUserTags(userTags?: NameValueArray | null): boolean
    thawNotifications(): void
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
    connect(sigName: "notify::abort-notifications", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date-received", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date-sent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dirty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-flagged", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-flagged-stamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mlist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preview", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::references", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::to", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MessageInfoBase_ConstructProps)
    _init (config?: MessageInfoBase_ConstructProps): void
    static $gtype: GObject.Type
}
interface MimeFilter_ConstructProps extends GObject.Object_ConstructProps {
}
class MimeFilter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterBestenc */
    getBestCharset(): string
    getBestEncoding(required: BestencEncoding): TransferEncoding
    setFlags(flags: number): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterCRLF */
    getEnsureCrlfEnd(): boolean
    setEnsureCrlfEnd(ensureCrlfEnd: boolean): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    constructor (config?: MimeFilterCharset_ConstructProps)
    _init (config?: MimeFilterCharset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fromCharset: string, toCharset: string): MimeFilterCharset
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterIndex */
    setIndex(index: Index): void
    setName(name: IndexName): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    constructor (config?: MimeFilterLinewrap_ConstructProps)
    _init (config?: MimeFilterLinewrap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(preferredLen: number, maxLen: number, indentChar: number, flags: number): MimeFilterLinewrap
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterWindows */
    isWindowsCharset(): boolean
    realCharset(): string
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    constructor (config?: MimeFilterWindows_ConstructProps)
    _init (config?: MimeFilterWindows_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(claimedCharset: string): MimeFilterWindows
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeFilterYenc */
    getCrc(): number
    getPcrc(): number
    setCrc(crc: number): void
    setState(state: number): void
    /* Methods of Camel-1.2.Camel.MimeFilter */
    backup(data: Uint8Array): void
    complete(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    filter(in_: Uint8Array, prespace: number): [ /* out */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: number): void
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
    contentId: string
    contentMd5: string
    description: string
    disposition: string
    /* Properties of Camel-1.2.Camel.Medium */
    content: DataWrapper
    /* Fields of Camel-1.2.Camel.MimePart */
    readonly parent: Medium
    readonly priv: MimePartPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeMessage */
    buildMboxFrom(): string
    dump(body: number): void
    encode8bitParts(): void
    foreachPart(): void
    getDate(): [ /* returnType */ number, /* offset */ number ]
    getDateReceived(): [ /* returnType */ number, /* offset */ number ]
    getFrom(): InternetAddress | null
    getMessageId(): string | null
    getPartByContentId(contentId: string): MimePart | null
    getRecipients(type: string): InternetAddress | null
    getReplyTo(): InternetAddress | null
    getSource(): string | null
    getSubject(): string | null
    has8bitParts(): boolean
    hasAttachment(): boolean
    setBestEncoding(required: BestencRequired, enctype: BestencEncoding): void
    setDate(date: number, offset: number): void
    setFrom(from?: InternetAddress | null): void
    setMessageId(messageId?: string | null): void
    setRecipients(type: string, recipients?: InternetAddress | null): void
    setReplyTo(replyTo?: InternetAddress | null): void
    setSource(sourceUid?: string | null): void
    setSubject(subject?: string | null): void
    /* Methods of Camel-1.2.Camel.MimePart */
    constructContentFromParser(mp: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    constructFromParser(parser: MimeParser, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromParserFinish(result: Gio.AsyncResult): boolean
    constructFromParserSync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    getContentDisposition(): ContentDisposition | null
    getContentId(): string | null
    getContentLanguages(): string[] | null
    getContentLocation(): string | null
    getContentMd5(): string | null
    getContentType(): ContentType | null
    getDescription(): string | null
    getDisposition(): string | null
    getEncoding(): TransferEncoding
    getFilename(): string | null
    setContent(data: Uint8Array | null, type?: string | null): void
    setContentId(contentid?: string | null): void
    setContentLanguages(contentLanguages?: string[] | null): void
    setContentLocation(location?: string | null): void
    setContentMd5(md5sum?: string | null): void
    setContentType(contentType?: string | null): void
    setDescription(description: string): void
    setDisposition(disposition?: string | null): void
    setEncoding(encoding: TransferEncoding): void
    setFilename(filename?: string | null): void
    /* Methods of Camel-1.2.Camel.Medium */
    addHeader(name: string, value: string): void
    dupHeaders(): NameValueArray
    getContent(): DataWrapper | null
    getHeader(name: string): string | null
    getHeaders(): NameValueArray
    removeHeader(name: string): void
    setContent(content?: DataWrapper | null): void
    setHeader(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculateDecodedSizeSync(cancellable?: Gio.Cancellable | null): number
    calculateSizeSync(cancellable?: Gio.Cancellable | null): number
    constructFromInputStream(inputStream: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromInputStreamFinish(result: Gio.AsyncResult): boolean
    constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    constructFromStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromStreamFinish(result: Gio.AsyncResult): boolean
    constructFromStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decodeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToOutputStreamFinish(result: Gio.AsyncResult): number
    decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decodeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToStreamFinish(result: Gio.AsyncResult): number
    decodeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    getByteArray(): Uint8Array
    getMimeType(): string
    getMimeTypeField(): ContentType | null
    isOffline(): boolean
    setEncoding(encoding: TransferEncoding): void
    setMimeType(mimeType: string): void
    setMimeTypeField(mimeType?: ContentType | null): void
    setOffline(offline: boolean): void
    takeMimeTypeField(mimeType?: ContentType | null): void
    writeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToOutputStreamFinish(result: Gio.AsyncResult): number
    writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    writeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToStreamFinish(result: Gio.AsyncResult): number
    writeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    connect(sigName: "notify::content-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-md5", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-md5", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-md5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-md5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-md5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disposition", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disposition", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disposition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disposition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disposition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimeParser */
    contentType(): ContentType
    dropStep(): void
    dupHeaders(): NameValueArray
    errno(): number
    filterAdd(mf: MimeFilter): number
    filterRemove(id: number): void
    fromLine(): string
    header(name: string, offset: number): string
    initWithBytes(bytes: any): void
    initWithFd(fd: number): number
    initWithInputStream(inputStream: Gio.InputStream): void
    initWithStream(stream: Stream): number
    postface(): string
    preface(): string
    pushState(newstate: MimeParserState, boundary: string): void
    read(len: number): [ /* returnType */ number, /* databuffer */ Uint8Array ]
    scanFrom(scanFrom: boolean): void
    scanPreFrom(scanPreFrom: boolean): void
    seek(offset: number, whence: number): number
    setHeaderRegex(matchstr: string): number
    state(): MimeParserState
    step(databuffer?: Uint8Array | null): [ /* returnType */ MimeParserState, /* databuffer */ Uint8Array | null ]
    stream(): Stream | null
    tell(): number
    tellStartBoundary(): number
    tellStartFrom(): number
    tellStartHeaders(): number
    unstep(): void
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
    constructor (config?: MimeParser_ConstructProps)
    _init (config?: MimeParser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MimeParser
    static $gtype: GObject.Type
}
interface MimePart_ConstructProps extends Medium_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.MimePart */
    contentId?: string
    contentMd5?: string
    description?: string
    disposition?: string
}
class MimePart {
    /* Properties of Camel-1.2.Camel.MimePart */
    contentId: string
    contentMd5: string
    description: string
    disposition: string
    /* Properties of Camel-1.2.Camel.Medium */
    content: DataWrapper
    /* Fields of Camel-1.2.Camel.Medium */
    readonly parent: DataWrapper
    readonly priv: MediumPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MimePart */
    constructContentFromParser(mp: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    constructFromParser(parser: MimeParser, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromParserFinish(result: Gio.AsyncResult): boolean
    constructFromParserSync(parser: MimeParser, cancellable?: Gio.Cancellable | null): boolean
    getContentDisposition(): ContentDisposition | null
    getContentId(): string | null
    getContentLanguages(): string[] | null
    getContentLocation(): string | null
    getContentMd5(): string | null
    getContentType(): ContentType | null
    getDescription(): string | null
    getDisposition(): string | null
    getEncoding(): TransferEncoding
    getFilename(): string | null
    setContent(data: Uint8Array | null, type?: string | null): void
    setContentId(contentid?: string | null): void
    setContentLanguages(contentLanguages?: string[] | null): void
    setContentLocation(location?: string | null): void
    setContentMd5(md5sum?: string | null): void
    setContentType(contentType?: string | null): void
    setDescription(description: string): void
    setDisposition(disposition?: string | null): void
    setEncoding(encoding: TransferEncoding): void
    setFilename(filename?: string | null): void
    /* Methods of Camel-1.2.Camel.Medium */
    addHeader(name: string, value: string): void
    dupHeaders(): NameValueArray
    getContent(): DataWrapper | null
    getHeader(name: string): string | null
    getHeaders(): NameValueArray
    removeHeader(name: string): void
    setContent(content?: DataWrapper | null): void
    setHeader(name: string, value?: string | null): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculateDecodedSizeSync(cancellable?: Gio.Cancellable | null): number
    calculateSizeSync(cancellable?: Gio.Cancellable | null): number
    constructFromInputStream(inputStream: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromInputStreamFinish(result: Gio.AsyncResult): boolean
    constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    constructFromStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromStreamFinish(result: Gio.AsyncResult): boolean
    constructFromStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decodeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToOutputStreamFinish(result: Gio.AsyncResult): number
    decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decodeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToStreamFinish(result: Gio.AsyncResult): number
    decodeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    getByteArray(): Uint8Array
    getMimeType(): string
    getMimeTypeField(): ContentType | null
    isOffline(): boolean
    setEncoding(encoding: TransferEncoding): void
    setMimeType(mimeType: string): void
    setMimeTypeField(mimeType?: ContentType | null): void
    setOffline(offline: boolean): void
    takeMimeTypeField(mimeType?: ContentType | null): void
    writeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToOutputStreamFinish(result: Gio.AsyncResult): number
    writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    writeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToStreamFinish(result: Gio.AsyncResult): number
    writeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    connect(sigName: "notify::content-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-md5", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-md5", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-md5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-md5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-md5", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disposition", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disposition", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disposition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disposition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disposition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Multipart */
    addPart(part: MimePart): void
    constructFromParser(parser: MimeParser): number
    getBoundary(): string
    getNumber(): number
    getPart(index: number): MimePart
    getPostface(): string
    getPreface(): string
    setBoundary(boundary?: string | null): void
    setPostface(postface: string): void
    setPreface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculateDecodedSizeSync(cancellable?: Gio.Cancellable | null): number
    calculateSizeSync(cancellable?: Gio.Cancellable | null): number
    constructFromInputStream(inputStream: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromInputStreamFinish(result: Gio.AsyncResult): boolean
    constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    constructFromStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromStreamFinish(result: Gio.AsyncResult): boolean
    constructFromStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decodeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToOutputStreamFinish(result: Gio.AsyncResult): number
    decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decodeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToStreamFinish(result: Gio.AsyncResult): number
    decodeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    getByteArray(): Uint8Array
    getEncoding(): TransferEncoding
    getMimeType(): string
    getMimeTypeField(): ContentType | null
    isOffline(): boolean
    setEncoding(encoding: TransferEncoding): void
    setMimeType(mimeType: string): void
    setMimeTypeField(mimeType?: ContentType | null): void
    setOffline(offline: boolean): void
    takeMimeTypeField(mimeType?: ContentType | null): void
    writeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToOutputStreamFinish(result: Gio.AsyncResult): number
    writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    writeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToStreamFinish(result: Gio.AsyncResult): number
    writeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Multipart */
    addPart(part: MimePart): void
    constructFromParser(parser: MimeParser): number
    getBoundary(): string
    getNumber(): number
    getPart(index: number): MimePart
    getPostface(): string
    getPreface(): string
    setBoundary(boundary?: string | null): void
    setPostface(postface: string): void
    setPreface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculateDecodedSizeSync(cancellable?: Gio.Cancellable | null): number
    calculateSizeSync(cancellable?: Gio.Cancellable | null): number
    constructFromInputStream(inputStream: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromInputStreamFinish(result: Gio.AsyncResult): boolean
    constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    constructFromStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromStreamFinish(result: Gio.AsyncResult): boolean
    constructFromStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decodeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToOutputStreamFinish(result: Gio.AsyncResult): number
    decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decodeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToStreamFinish(result: Gio.AsyncResult): number
    decodeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    getByteArray(): Uint8Array
    getEncoding(): TransferEncoding
    getMimeType(): string
    getMimeTypeField(): ContentType | null
    isOffline(): boolean
    setEncoding(encoding: TransferEncoding): void
    setMimeType(mimeType: string): void
    setMimeTypeField(mimeType?: ContentType | null): void
    setOffline(offline: boolean): void
    takeMimeTypeField(mimeType?: ContentType | null): void
    writeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToOutputStreamFinish(result: Gio.AsyncResult): number
    writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    writeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToStreamFinish(result: Gio.AsyncResult): number
    writeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.MultipartSigned */
    getContentStream(): Stream
    setContentStream(contentStream: Stream): void
    setSignature(signature: MimePart): void
    /* Methods of Camel-1.2.Camel.Multipart */
    addPart(part: MimePart): void
    constructFromParser(parser: MimeParser): number
    getBoundary(): string
    getNumber(): number
    getPart(index: number): MimePart
    getPostface(): string
    getPreface(): string
    setBoundary(boundary?: string | null): void
    setPostface(postface: string): void
    setPreface(preface: string): void
    /* Methods of Camel-1.2.Camel.DataWrapper */
    calculateDecodedSizeSync(cancellable?: Gio.Cancellable | null): number
    calculateSizeSync(cancellable?: Gio.Cancellable | null): number
    constructFromInputStream(inputStream: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromInputStreamFinish(result: Gio.AsyncResult): boolean
    constructFromInputStreamSync(inputStream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    constructFromStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    constructFromStreamFinish(result: Gio.AsyncResult): boolean
    constructFromStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): boolean
    decodeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToOutputStreamFinish(result: Gio.AsyncResult): number
    decodeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    decodeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decodeToStreamFinish(result: Gio.AsyncResult): number
    decodeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
    getByteArray(): Uint8Array
    getEncoding(): TransferEncoding
    getMimeType(): string
    getMimeTypeField(): ContentType | null
    isOffline(): boolean
    setEncoding(encoding: TransferEncoding): void
    setMimeType(mimeType: string): void
    setMimeTypeField(mimeType?: ContentType | null): void
    setOffline(offline: boolean): void
    takeMimeTypeField(mimeType?: ContentType | null): void
    writeToOutputStream(outputStream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToOutputStreamFinish(result: Gio.AsyncResult): number
    writeToOutputStreamSync(outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): number
    writeToStream(stream: Stream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeToStreamFinish(result: Gio.AsyncResult): number
    writeToStreamSync(stream: Stream, cancellable?: Gio.Cancellable | null): number
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
    readonly gTypeInstance: GObject.TypeInstance
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
    newClone(): Address
    remove(index: number): void
    unformat(raw: string): number
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
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.NullOutputStream */
    getBytesWritten(): number
    getEndsWithCrlf(): boolean
    /* Methods of Gio-2.0.Gio.OutputStream */
    clearPending(): void
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    flush(cancellable?: Gio.Cancellable | null): boolean
    flushAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    hasPending(): boolean
    isClosed(): boolean
    isClosing(): boolean
    setPending(): boolean
    splice(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, cancellable?: Gio.Cancellable | null): number
    spliceAsync(source: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    spliceFinish(result: Gio.AsyncResult): number
    write(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): number
    writeAll(buffer: Uint8Array, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAllAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writeAsync(buffer: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytes(bytes: any, cancellable?: Gio.Cancellable | null): number
    writeBytesAsync(bytes: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeBytesFinish(result: Gio.AsyncResult): number
    writeFinish(result: Gio.AsyncResult): number
    writev(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAll(vectors: Gio.OutputVector[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAllAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevAllFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
    writevAsync(vectors: Gio.OutputVector[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writevFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* bytesWritten */ number | null ]
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
    constructor (config?: NullOutputStream_ConstructProps)
    _init (config?: NullOutputStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NullOutputStream
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Object */
    stateFilename?: string
}
class Object {
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
interface OfflineFolder_ConstructProps extends Folder_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.OfflineFolder */
    offlineSync?: ThreeState
}
class OfflineFolder {
    /* Properties of Camel-1.2.Camel.OfflineFolder */
    offlineSync: ThreeState
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    displayName: string
    fullName: string
    markSeen: ThreeState
    markSeenTimeout: number
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Folder */
    readonly parent: Object
    readonly priv: FolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineFolder */
    canDownsync(): boolean
    downsync(expression: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    downsyncFinish(result: Gio.AsyncResult): boolean
    downsyncSync(expression: string, cancellable?: Gio.Cancellable | null): boolean
    getOfflineSync(): ThreeState
    setOfflineSync(offlineSync: ThreeState): void
    /* Methods of Camel-1.2.Camel.Folder */
    appendMessage(message: MimeMessage, info: MessageInfo | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    appendMessageFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    appendMessageSync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmpUids(uid1: string, uid2: string): number
    countByExpression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dupDescription(): string
    dupDisplayName(): string
    dupFullName(): string
    expunge(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expungeFinish(result: Gio.AsyncResult): boolean
    expungeSync(cancellable?: Gio.Cancellable | null): boolean
    freeDeep(array: string[]): void
    freeShallow(array: string[]): void
    freeSummary(array: MessageInfo[]): void
    freeUids(array: string[]): void
    freeze(): void
    getDeletedMessageCount(): number
    getDescription(): string
    getDisplayName(): string
    getFilename(uid: string): string
    getFlags(): number
    getFolderSummary(): FolderSummary
    getFrozenCount(): number
    getFullName(): string
    getMarkSeen(): ThreeState
    getMarkSeenTimeout(): number
    getMessage(messageUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMessageCached(messageUid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    getMessageCount(): number
    getMessageFinish(result: Gio.AsyncResult): MimeMessage
    getMessageFlags(uid: string): number
    getMessageInfo(uid: string): MessageInfo
    getMessageSync(messageUid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    getMessageUserFlag(uid: string, name: string): boolean
    getMessageUserTag(uid: string, name: string): string
    getParentStore(): object | null
    getPermanentFlags(): number
    getQuotaInfo(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getQuotaInfoFinish(result: Gio.AsyncResult): FolderQuotaInfo
    getQuotaInfoSync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    getSummary(): string[]
    getUids(): string[]
    getUncachedUids(uids: string[]): string[]
    getUnreadMessageCount(): number
    hasSummaryCapability(): boolean
    isFrozen(): boolean
    lock(): void
    prepareContentRefresh(): void
    purgeMessageCache(startUid: string, endUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purgeMessageCacheFinish(result: Gio.AsyncResult): boolean
    purgeMessageCacheSync(startUid: string, endUid: string, cancellable?: Gio.Cancellable | null): boolean
    refreshInfo(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshInfoFinish(result: Gio.AsyncResult): boolean
    refreshInfoSync(cancellable?: Gio.Cancellable | null): boolean
    rename(newName: string): void
    searchByExpression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    searchByUids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    searchFree(result: string[]): void
    setDescription(description: string): void
    setDisplayName(displayName: string): void
    setFlags(folderFlags: number): void
    setFullName(fullName: string): void
    setLockAsync(skipFolderLock: boolean): void
    setMarkSeen(markSeen: ThreeState): void
    setMarkSeenTimeout(timeout: number): void
    setMessageFlags(uid: string, mask: number, set: number): boolean
    setMessageUserFlag(uid: string, name: string, value: boolean): void
    setMessageUserTag(uid: string, name: string, value: string): void
    sortUids(uids: string[]): void
    synchronize(expunge: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeFinish(result: Gio.AsyncResult): boolean
    synchronizeMessage(messageUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeMessageFinish(result: Gio.AsyncResult): boolean
    synchronizeMessageSync(messageUid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronizeSync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    takeFolderSummary(summary: FolderSummary): void
    thaw(): void
    transferMessagesTo(messageUids: string[], destination: Folder, deleteOriginals: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transferMessagesToFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    transferMessagesToSync(messageUids: string[], destination: Folder, deleteOriginals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: ((changes: FolderChangeInfo) => void)): number
    on(sigName: "changed", callback: (changes: FolderChangeInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (changes: FolderChangeInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (changes: FolderChangeInfo) => void): NodeJS.EventEmitter
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (() => void)): number
    on(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deleted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: ((oldName: string) => void)): number
    on(sigName: "renamed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "renamed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "renamed", callback: (oldName: string) => void): NodeJS.EventEmitter
    emit(sigName: "renamed", oldName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::offline-sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offline-sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offline-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offline-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offline-sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OfflineFolder_ConstructProps)
    _init (config?: OfflineFolder_ConstructProps): void
    static $gtype: GObject.Type
}
interface OfflineSettings_ConstructProps extends StoreSettings_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.OfflineSettings */
    limitByAge?: boolean
    limitUnit?: TimeUnit
    limitValue?: number
    staySynchronized?: boolean
}
class OfflineSettings {
    /* Properties of Camel-1.2.Camel.OfflineSettings */
    limitByAge: boolean
    limitUnit: TimeUnit
    limitValue: number
    staySynchronized: boolean
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filterInbox: boolean
    storeChangesInterval: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineSettings */
    getLimitByAge(): boolean
    getLimitUnit(): TimeUnit
    getLimitValue(): number
    getStaySynchronized(): boolean
    getStoreChangesInterval(): number
    setLimitByAge(limitByAge: boolean): void
    setLimitUnit(limitUnit: TimeUnit): void
    setLimitValue(limitValue: boolean): void
    setStaySynchronized(staySynchronized: boolean): void
    setStoreChangesInterval(interval: number): void
    /* Methods of Camel-1.2.Camel.StoreSettings */
    getFilterInbox(): boolean
    setFilterInbox(filterInbox: boolean): void
    setStoreChangesInterval(interval: number): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settingsB: Settings): boolean
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
    connect(sigName: "notify::limit-by-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-by-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::limit-by-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::limit-by-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::limit-by-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::limit-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-unit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::limit-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::limit-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::limit-unit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::limit-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::limit-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::limit-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::limit-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::limit-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stay-synchronized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stay-synchronized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stay-synchronized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-inbox", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::store-changes-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly connectionStatus: ServiceConnectionStatus
    displayName: string
    password: string
    proxyResolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Store */
    readonly parent: Service
    readonly priv: StorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.OfflineStore */
    dupDownsyncFolders(): Folder[]
    getOnline(): boolean
    prepareForOfflineSync(cancellable?: Gio.Cancellable | null): boolean
    requiresDownsync(): boolean
    setOnline(online: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setOnlineFinish(result: Gio.AsyncResult): boolean
    setOnlineSync(online: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Store */
    canRefreshFolder(info: FolderInfo): boolean
    createFolder(parentName: string | null, folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFolderFinish(result: Gio.AsyncResult): FolderInfo | null
    createFolderSync(parentName: string | null, folderName: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    deleteCachedFolder(folderName: string): void
    deleteFolder(folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFolderFinish(result: Gio.AsyncResult): boolean
    deleteFolderSync(folderName: string, cancellable?: Gio.Cancellable | null): boolean
    dupOpenedFolders(): Folder[]
    folderCreated(folderInfo: FolderInfo): void
    folderDeleted(folderInfo: FolderInfo): void
    folderInfoStale(): void
    folderOpened(folder: Folder): void
    folderRenamed(oldName: string, folderInfo: FolderInfo): void
    getCanAutoSaveChanges(): boolean
    getDb(): DB
    getFlags(): number
    getFolder(folderName: string, flags: StoreGetFolderFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFolderFinish(result: Gio.AsyncResult): Folder | null
    getFolderInfo(top: string | null, flags: StoreGetFolderInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFolderInfoFinish(result: Gio.AsyncResult): FolderInfo | null
    getFolderInfoSync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    getFolderSync(folderName: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    getFoldersBag(): ObjectBag
    getInboxFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getInboxFolderFinish(result: Gio.AsyncResult): Folder | null
    getInboxFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    getJunkFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getJunkFolderFinish(result: Gio.AsyncResult): Folder | null
    getJunkFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    getPermissions(): number
    getTrashFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTrashFolderFinish(result: Gio.AsyncResult): Folder | null
    getTrashFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    initialSetup(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initialSetupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    initialSetupSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    maybeRunDbMaintenance(): boolean
    renameFolder(oldName: string, newName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    renameFolderFinish(result: Gio.AsyncResult): boolean
    renameFolderSync(oldName: string, newName: string, cancellable?: Gio.Cancellable | null): boolean
    setFlags(flags: number): void
    setPermissions(permissions: number): void
    synchronize(expunge: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeFinish(result: Gio.AsyncResult): boolean
    synchronizeSync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticateFinish(result: Gio.AsyncResult): AuthenticationResult
    authenticateSync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectFinish(result: Gio.AsyncResult): boolean
    disconnectSync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupPassword(): string
    getConnectionStatus(): ServiceConnectionStatus
    getDisplayName(): string
    getName(brief: boolean): string
    getPassword(): string
    getProvider(): Provider
    getUid(): string
    getUserCacheDir(): string
    getUserDataDir(): string
    migrateFiles(): void
    newCamelUrl(): URL
    queryAuthTypes(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAuthTypesFinish(result: Gio.AsyncResult): ServiceAuthType[]
    queryAuthTypesSync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queueTask(task: Gio.Task, taskFunc: Gio.TaskThreadFunc): void
    refProxyResolver(): Gio.ProxyResolver
    refSession(): Session
    refSettings(): Settings
    setDisplayName(displayName: string): void
    setPassword(password: string): void
    setProxyResolver(proxyResolver: Gio.ProxyResolver): void
    setSettings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-created", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-created", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-created", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-deleted", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-deleted", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-deleted", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (() => void)): number
    on(sigName: "folder-info-stale", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-info-stale", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-info-stale", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: ((object: Folder) => void)): number
    on(sigName: "folder-opened", callback: (object: Folder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-opened", callback: (object: Folder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-opened", callback: (object: Folder) => void): NodeJS.EventEmitter
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: ((object: string, p0: FolderInfo) => void)): number
    on(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OfflineStore_ConstructProps)
    _init (config?: OfflineStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Operation_ConstructProps extends Gio.Cancellable_ConstructProps {
}
class Operation {
    /* Fields of Gio-2.0.Gio.Cancellable */
    readonly parentInstance: GObject.Object
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
    /* Signals of Camel-1.2.Camel.Operation */
    connect(sigName: "pop-message", callback: (() => void)): number
    on(sigName: "pop-message", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pop-message", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pop-message", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pop-message"): void
    connect(sigName: "progress", callback: ((object: number) => void)): number
    on(sigName: "progress", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", object: number): void
    connect(sigName: "push-message", callback: ((object: string) => void)): number
    on(sigName: "push-message", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-message", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-message", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "push-message", object: string): void
    connect(sigName: "status", callback: ((object: string, p0: number) => void)): number
    on(sigName: "status", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "status", callback: (object: string, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "status", callback: (object: string, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "status", object: string, p0: number): void
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
    constructor (config?: Operation_ConstructProps)
    _init (config?: Operation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Operation
    static newProxy(cancellable?: Gio.Cancellable | null): Operation
    static cancelAll(): void
    static popMessage(cancellable?: Gio.Cancellable | null): void
    static progress(cancellable: Gio.Cancellable | null, percent: number): void
    static $gtype: GObject.Type
}
interface PartitionTable_ConstructProps extends GObject.Object_ConstructProps {
}
class PartitionTable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.PartitionTable */
    add(key: string, keyid: _key_t): number
    lookup(key: string): _key_t
    remove(key: string): boolean
    sync(): number
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SExp */
    addVariable(scope: number, name: string, value: SExpTerm): void
    error(): string | null
    evaluateOccurTimes(start: number, end: number): boolean
    inputFile(fd: number): void
    inputText(text: string, len: number): void
    parse(): number
    removeSymbol(scope: number, name: string): void
    resultFree(result?: SExpResult | null): void
    resultvFree(argv: SExpResult[]): void
    setScope(scope: number): number
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
    constructor (config?: SExp_ConstructProps)
    _init (config?: SExp_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SExp
    static encodeBool(string: GLib.String, vBool: boolean): void
    static encodeString(string: GLib.String, vString: string): void
    static toSqlSexp(sexp: string): string
    static $gtype: GObject.Type
}
interface SMIMEContext_ConstructProps extends CipherContext_ConstructProps {
}
class SMIMEContext {
    /* Fields of Camel-1.2.Camel.CipherContext */
    readonly parent: GObject.Object
    readonly priv: CipherContextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SMIMEContext */
    describePart(part?: object | null): number
    setEncryptKey(use: boolean, key: string): void
    setSignMode(type: SMIMESign): void
    /* Methods of Camel-1.2.Camel.CipherContext */
    decrypt(ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    decryptFinish(result: Gio.AsyncResult): CipherValidity
    decryptSync(ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
    encrypt(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    encryptFinish(result: Gio.AsyncResult): boolean
    encryptSync(userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    getSession(): Session
    hashToId(hash: CipherHash): string
    idToHash(id: string): CipherHash
    sign(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    signFinish(result: Gio.AsyncResult): boolean
    signSync(userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null): boolean
    verify(ipart: MimePart, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    verifyFinish(result: Gio.AsyncResult): CipherValidity
    verifySync(ipart: MimePart, cancellable?: Gio.Cancellable | null): CipherValidity
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
    serviceName?: string
}
class Sasl {
    /* Properties of Camel-1.2.Camel.Sasl */
    authenticated: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Sasl_ConstructProps)
    _init (config?: Sasl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(serviceName: string, mechanism: string, service: Service): Sasl
    static authtype(mechanism: string): ServiceAuthType | null
    static authtypeList(includePlain: boolean): ServiceAuthType[]
    static isXoauth2Alias(mechanism?: string | null): boolean
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SaslAnonymous_ConstructProps)
    _init (config?: SaslAnonymous_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: SaslAnonTraceType, traceInfo: string): SaslAnonymous
    /* Function overloads */
    static new(serviceName: string, mechanism: string, service: Service): SaslAnonymous
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.SaslGssapi */
    overrideHostAndUser(overrideHost?: string | null, overrideUser?: string | null): void
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SaslGssapi_ConstructProps)
    _init (config?: SaslGssapi_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static isAvailable(): boolean
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Sasl */
    challenge(token: Uint8Array, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64(token: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    challengeBase64Finish(result: Gio.AsyncResult): string
    challengeBase64Sync(token: string, cancellable?: Gio.Cancellable | null): string
    challengeFinish(result: Gio.AsyncResult): Uint8Array
    challengeSync(token: Uint8Array, cancellable?: Gio.Cancellable | null): Uint8Array
    getAuthenticated(): boolean
    getMechanism(): string
    getService(): Service
    getServiceName(): string
    setAuthenticated(authenticated: boolean): void
    tryEmptyPassword(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    tryEmptyPasswordFinish(result: Gio.AsyncResult): boolean
    tryEmptyPasswordSync(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authenticated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SaslXOAuth2Yahoo_ConstructProps)
    _init (config?: SaslXOAuth2Yahoo_ConstructProps): void
    static $gtype: GObject.Type
}
interface Service_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Service */
    displayName?: string
    password?: string
    provider?: Provider
    proxyResolver?: Gio.ProxyResolver
    session?: Session
    settings?: Settings
    uid?: string
}
class Service {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connectionStatus: ServiceConnectionStatus
    displayName: string
    password: string
    proxyResolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Object */
    readonly parent: GObject.Object
    readonly priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticateFinish(result: Gio.AsyncResult): AuthenticationResult
    authenticateSync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectFinish(result: Gio.AsyncResult): boolean
    disconnectSync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupPassword(): string
    getConnectionStatus(): ServiceConnectionStatus
    getDisplayName(): string
    getName(brief: boolean): string
    getPassword(): string
    getProvider(): Provider
    getUid(): string
    getUserCacheDir(): string
    getUserDataDir(): string
    migrateFiles(): void
    newCamelUrl(): URL
    queryAuthTypes(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAuthTypesFinish(result: Gio.AsyncResult): ServiceAuthType[]
    queryAuthTypesSync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queueTask(task: Gio.Task, taskFunc: Gio.TaskThreadFunc): void
    refProxyResolver(): Gio.ProxyResolver
    refSession(): Session
    refSettings(): Settings
    setDisplayName(displayName: string): void
    setPassword(password: string): void
    setProxyResolver(proxyResolver: Gio.ProxyResolver): void
    setSettings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Session */
    junkFilter?: JunkFilter
    networkMonitor?: Gio.NetworkMonitor
    online?: boolean
    userCacheDir?: string
    userDataDir?: string
}
class Session {
    /* Properties of Camel-1.2.Camel.Session */
    junkFilter: JunkFilter
    readonly mainContext: GLib.MainContext
    networkMonitor: Gio.NetworkMonitor
    online: boolean
    userCacheDir: string
    userDataDir: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Session */
    addService(uid: string, protocol: string, type: ProviderType): Service
    addressbookContainsSync(bookUid: string, emailAddress: string, cancellable?: Gio.Cancellable | null): boolean
    authenticate(service: Service, mechanism: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticateFinish(result: Gio.AsyncResult): boolean
    authenticateSync(service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null): boolean
    forgetPassword(service: Service, item: string): boolean
    forwardTo(folder: Folder, message: MimeMessage, address: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardToFinish(result: Gio.AsyncResult): boolean
    forwardToSync(folder: Folder, message: MimeMessage, address: string, cancellable?: Gio.Cancellable | null): boolean
    getFilterDriver(type: string, forFolder?: Folder | null): FilterDriver
    getJunkFilter(): JunkFilter
    getJunkHeaders(): GLib.HashTable
    getOauth2AccessTokenSync(service: Service, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    getOnline(): boolean
    getPassword(service: Service, prompt: string, item: string, flags: number): string
    getRecipientCertificatesSync(flags: number, recipients: string[], cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outCertificates */ string[] ]
    getUserCacheDir(): string
    getUserDataDir(): string
    idleAdd(priority: number, function_: GLib.SourceFunc): number
    listServices(): Service[]
    lookupAddressbook(name: string): boolean
    refMainContext(): GLib.MainContext
    refNetworkMonitor(): Gio.NetworkMonitor
    refService(uid: string): Service
    refServiceByUrl(url: URL, type: ProviderType): Service
    removeService(service: Service): void
    removeServices(): void
    setJunkFilter(junkFilter: JunkFilter): void
    setJunkHeaders(headers: string[], values: string[]): void
    setNetworkMonitor(networkMonitor?: Gio.NetworkMonitor | null): void
    setOnline(online: boolean): void
    submitJob(description: string, callback: SessionCallback): void
    trustPrompt(service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): CertTrust
    userAlert(service: Service, type: SessionAlertType, message: string): void
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
    /* Signals of Camel-1.2.Camel.Session */
    connect(sigName: "job-finished", callback: ((object: Gio.Cancellable | null, p0: GLib.Error) => void)): number
    on(sigName: "job-finished", callback: (object: Gio.Cancellable | null, p0: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "job-finished", callback: (object: Gio.Cancellable | null, p0: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "job-finished", callback: (object: Gio.Cancellable | null, p0: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "job-finished", object: Gio.Cancellable | null, p0: GLib.Error): void
    connect(sigName: "job-started", callback: ((object?: Gio.Cancellable | null) => void)): number
    on(sigName: "job-started", callback: (object?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "job-started", callback: (object?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "job-started", callback: (object?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "job-started", object?: Gio.Cancellable | null): void
    connect(sigName: "user-alert", callback: ((service: Service, type: SessionAlertType, message: string) => void)): number
    on(sigName: "user-alert", callback: (service: Service, type: SessionAlertType, message: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-alert", callback: (service: Service, type: SessionAlertType, message: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-alert", callback: (service: Service, type: SessionAlertType, message: string) => void): NodeJS.EventEmitter
    emit(sigName: "user-alert", service: Service, type: SessionAlertType, message: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::junk-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::junk-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::junk-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::junk-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-monitor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-monitor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-cache-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-data-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-data-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-data-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
interface Settings_ConstructProps extends GObject.Object_ConstructProps {
}
class Settings {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settingsB: Settings): boolean
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
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static listSettings(settings_class: Settings | Function | GObject.Type, nSettings: number): GObject.ParamSpec
    static $gtype: GObject.Type
}
interface Store_ConstructProps extends Service_ConstructProps {
}
class Store {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connectionStatus: ServiceConnectionStatus
    displayName: string
    password: string
    proxyResolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Service */
    readonly parent: Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Store */
    canRefreshFolder(info: FolderInfo): boolean
    createFolder(parentName: string | null, folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFolderFinish(result: Gio.AsyncResult): FolderInfo | null
    createFolderSync(parentName: string | null, folderName: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    deleteCachedFolder(folderName: string): void
    deleteFolder(folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFolderFinish(result: Gio.AsyncResult): boolean
    deleteFolderSync(folderName: string, cancellable?: Gio.Cancellable | null): boolean
    dupOpenedFolders(): Folder[]
    folderCreated(folderInfo: FolderInfo): void
    folderDeleted(folderInfo: FolderInfo): void
    folderInfoStale(): void
    folderOpened(folder: Folder): void
    folderRenamed(oldName: string, folderInfo: FolderInfo): void
    getCanAutoSaveChanges(): boolean
    getDb(): DB
    getFlags(): number
    getFolder(folderName: string, flags: StoreGetFolderFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFolderFinish(result: Gio.AsyncResult): Folder | null
    getFolderInfo(top: string | null, flags: StoreGetFolderInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFolderInfoFinish(result: Gio.AsyncResult): FolderInfo | null
    getFolderInfoSync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    getFolderSync(folderName: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    getFoldersBag(): ObjectBag
    getInboxFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getInboxFolderFinish(result: Gio.AsyncResult): Folder | null
    getInboxFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    getJunkFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getJunkFolderFinish(result: Gio.AsyncResult): Folder | null
    getJunkFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    getPermissions(): number
    getTrashFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTrashFolderFinish(result: Gio.AsyncResult): Folder | null
    getTrashFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    initialSetup(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initialSetupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    initialSetupSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    maybeRunDbMaintenance(): boolean
    renameFolder(oldName: string, newName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    renameFolderFinish(result: Gio.AsyncResult): boolean
    renameFolderSync(oldName: string, newName: string, cancellable?: Gio.Cancellable | null): boolean
    setFlags(flags: number): void
    setPermissions(permissions: number): void
    synchronize(expunge: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeFinish(result: Gio.AsyncResult): boolean
    synchronizeSync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticateFinish(result: Gio.AsyncResult): AuthenticationResult
    authenticateSync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectFinish(result: Gio.AsyncResult): boolean
    disconnectSync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupPassword(): string
    getConnectionStatus(): ServiceConnectionStatus
    getDisplayName(): string
    getName(brief: boolean): string
    getPassword(): string
    getProvider(): Provider
    getUid(): string
    getUserCacheDir(): string
    getUserDataDir(): string
    migrateFiles(): void
    newCamelUrl(): URL
    queryAuthTypes(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAuthTypesFinish(result: Gio.AsyncResult): ServiceAuthType[]
    queryAuthTypesSync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queueTask(task: Gio.Task, taskFunc: Gio.TaskThreadFunc): void
    refProxyResolver(): Gio.ProxyResolver
    refSession(): Session
    refSettings(): Settings
    setDisplayName(displayName: string): void
    setPassword(password: string): void
    setProxyResolver(proxyResolver: Gio.ProxyResolver): void
    setSettings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-created", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-created", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-created", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-deleted", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-deleted", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-deleted", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (() => void)): number
    on(sigName: "folder-info-stale", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-info-stale", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-info-stale", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: ((object: Folder) => void)): number
    on(sigName: "folder-opened", callback: (object: Folder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-opened", callback: (object: Folder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-opened", callback: (object: Folder) => void): NodeJS.EventEmitter
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: ((object: string, p0: FolderInfo) => void)): number
    on(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
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
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Store_ConstructProps)
    _init (config?: Store_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface StoreSettings_ConstructProps extends Settings_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.StoreSettings */
    filterInbox?: boolean
    storeChangesInterval?: number
}
class StoreSettings {
    /* Properties of Camel-1.2.Camel.StoreSettings */
    filterInbox: boolean
    storeChangesInterval: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StoreSettings */
    getFilterInbox(): boolean
    getStoreChangesInterval(): number
    setFilterInbox(filterInbox: boolean): void
    setStoreChangesInterval(interval: number): void
    /* Methods of Camel-1.2.Camel.Settings */
    clone(): Settings
    equal(settingsB: Settings): boolean
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
    connect(sigName: "notify::filter-inbox", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-inbox", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-inbox", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::store-changes-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store-changes-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::store-changes-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StoreSettings_ConstructProps)
    _init (config?: StoreSettings_ConstructProps): void
    static $gtype: GObject.Type
}
interface StoreSummary_ConstructProps extends GObject.Object_ConstructProps {
}
class StoreSummary {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StoreSummary */
    add(info: StoreInfo): void
    array(): StoreInfo[]
    arrayFree(array: StoreInfo[]): void
    connectFolderSummary(path: string, folderSummary: FolderSummary): boolean
    count(): number
    disconnectFolderSummary(folderSummary: FolderSummary): boolean
    infoUnref(info: StoreInfo): void
    load(): number
    remove(info: StoreInfo): void
    removePath(path: string): void
    save(): number
    setFilename(filename: string): void
    sort(compareFunc: GLib.CompareDataFunc): void
    touch(): void
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
    constructor (config?: StoreSummary_ConstructProps)
    _init (config?: StoreSummary_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StoreSummary
    static $gtype: GObject.Type
}
interface Stream_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.Stream */
    baseStream?: Gio.IOStream
}
class Stream {
    /* Properties of Camel-1.2.Camel.Stream */
    baseStream: Gio.IOStream
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    refBaseStream(): Gio.IOStream | null
    setBaseStream(baseStream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    writeString(string: string, cancellable?: Gio.Cancellable | null): number
    writeToStream(outputStream: Stream, cancellable?: Gio.Cancellable | null): number
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
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseStream: Gio.IOStream): Stream
    static $gtype: GObject.Type
}
interface StreamBuffer_ConstructProps extends Stream_ConstructProps {
}
class StreamBuffer {
    /* Properties of Camel-1.2.Camel.Stream */
    baseStream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamBuffer */
    discardCache(): void
    gets(buf: number[], cancellable?: Gio.Cancellable | null): number
    readLine(cancellable?: Gio.Cancellable | null): string | null
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    refBaseStream(): Gio.IOStream | null
    setBaseStream(baseStream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    writeString(string: string, cancellable?: Gio.Cancellable | null): number
    writeToStream(outputStream: Stream, cancellable?: Gio.Cancellable | null): number
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
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamBuffer_ConstructProps)
    _init (config?: StreamBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Stream, mode: StreamBufferMode): StreamBuffer
    /* Function overloads */
    static new(baseStream: Gio.IOStream): StreamBuffer
    static $gtype: GObject.Type
}
interface StreamFilter_ConstructProps extends Stream_ConstructProps {
}
class StreamFilter {
    /* Properties of Camel-1.2.Camel.Stream */
    baseStream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamFilter */
    add(filter: MimeFilter): number
    getSource(): Stream
    remove(id: number): void
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    refBaseStream(): Gio.IOStream | null
    setBaseStream(baseStream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    writeString(string: string, cancellable?: Gio.Cancellable | null): number
    writeToStream(outputStream: Stream, cancellable?: Gio.Cancellable | null): number
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
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamFilter_ConstructProps)
    _init (config?: StreamFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Stream): StreamFilter
    /* Function overloads */
    static new(baseStream: Gio.IOStream): StreamFilter
    static $gtype: GObject.Type
}
interface StreamFs_ConstructProps extends Stream_ConstructProps {
}
class StreamFs {
    /* Properties of Camel-1.2.Camel.Stream */
    baseStream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamFs */
    getFd(): number
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    refBaseStream(): Gio.IOStream | null
    setBaseStream(baseStream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    writeString(string: string, cancellable?: Gio.Cancellable | null): number
    writeToStream(outputStream: Stream, cancellable?: Gio.Cancellable | null): number
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
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamFs_ConstructProps)
    _init (config?: StreamFs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithFd(fd: number): StreamFs
    static newWithName(name: string, flags: number, mode: number): StreamFs
    static $gtype: GObject.Type
}
interface StreamMem_ConstructProps extends Stream_ConstructProps {
}
class StreamMem {
    /* Properties of Camel-1.2.Camel.Stream */
    baseStream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamMem */
    getByteArray(): Uint8Array
    setBuffer(buffer: Uint8Array): void
    setByteArray(buffer: Uint8Array): void
    setSecure(): void
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    refBaseStream(): Gio.IOStream | null
    setBaseStream(baseStream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    writeString(string: string, cancellable?: Gio.Cancellable | null): number
    writeToStream(outputStream: Stream, cancellable?: Gio.Cancellable | null): number
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
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamMem_ConstructProps)
    _init (config?: StreamMem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamMem
    /* Function overloads */
    static new(baseStream: Gio.IOStream): StreamMem
    static newWithBuffer(buffer: Uint8Array): StreamMem
    static newWithByteArray(buffer: Uint8Array): StreamMem
    static $gtype: GObject.Type
}
interface StreamNull_ConstructProps extends Stream_ConstructProps {
}
class StreamNull {
    /* Properties of Camel-1.2.Camel.Stream */
    baseStream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamNull */
    getBytesWritten(): number
    getEndsWithCrlf(): boolean
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    refBaseStream(): Gio.IOStream | null
    setBaseStream(baseStream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    writeString(string: string, cancellable?: Gio.Cancellable | null): number
    writeToStream(outputStream: Stream, cancellable?: Gio.Cancellable | null): number
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
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamNull_ConstructProps)
    _init (config?: StreamNull_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamNull
    /* Function overloads */
    static new(baseStream: Gio.IOStream): StreamNull
    static $gtype: GObject.Type
}
interface StreamProcess_ConstructProps extends Stream_ConstructProps {
}
class StreamProcess {
    /* Properties of Camel-1.2.Camel.Stream */
    baseStream: Gio.IOStream
    /* Fields of Camel-1.2.Camel.Stream */
    readonly parent: GObject.Object
    readonly priv: StreamPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.StreamProcess */
    connect(command: string, env: string): number
    /* Methods of Camel-1.2.Camel.Stream */
    close(cancellable?: Gio.Cancellable | null): number
    eos(): boolean
    flush(cancellable?: Gio.Cancellable | null): number
    read(buffer: number[], cancellable?: Gio.Cancellable | null): number
    refBaseStream(): Gio.IOStream | null
    setBaseStream(baseStream: Gio.IOStream): void
    write(buffer: number[], cancellable?: Gio.Cancellable | null): number
    writeString(string: string, cancellable?: Gio.Cancellable | null): number
    writeToStream(outputStream: Stream, cancellable?: Gio.Cancellable | null): number
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
    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean
    tell(): number
    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamProcess_ConstructProps)
    _init (config?: StreamProcess_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamProcess
    /* Function overloads */
    static new(baseStream: Gio.IOStream): StreamProcess
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
    readonly normalizeData: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.TextIndex */
    dump(): void
    info(): void
    validate(): void
    /* Methods of Camel-1.2.Camel.Index */
    addName(name: string): IndexName | null
    compress(): number
    construct(path: string, flags: number): void
    delete(): number
    deleteName(name: string): void
    find(word: string): IndexCursor | null
    findName(name: string): IndexCursor | null
    hasName(name: string): number
    rename(path: string): number
    setNormalize(func: IndexNorm): void
    sync(): number
    words(): IndexCursor | null
    writeName(idn: IndexName): number
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexCursor */
    next(): string
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.IndexName */
    addBuffer(buffer: string, len: number): number
    addWord(word: string): void
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
    constructor (config?: TextIndexName_ConstructProps)
    _init (config?: TextIndexName_ConstructProps): void
    static $gtype: GObject.Type
}
interface Transport_ConstructProps extends Service_ConstructProps {
}
class Transport {
    /* Properties of Camel-1.2.Camel.Service */
    readonly connectionStatus: ServiceConnectionStatus
    displayName: string
    password: string
    proxyResolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Service */
    readonly parent: Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.Transport */
    sendTo(message: MimeMessage, from: Address, recipients: Address, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendToFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSentMessageSaved */ boolean ]
    sendToSync(message: MimeMessage, from: Address, recipients: Address, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSentMessageSaved */ boolean ]
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticateFinish(result: Gio.AsyncResult): AuthenticationResult
    authenticateSync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectFinish(result: Gio.AsyncResult): boolean
    disconnectSync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupPassword(): string
    getConnectionStatus(): ServiceConnectionStatus
    getDisplayName(): string
    getName(brief: boolean): string
    getPassword(): string
    getProvider(): Provider
    getUid(): string
    getUserCacheDir(): string
    getUserDataDir(): string
    migrateFiles(): void
    newCamelUrl(): URL
    queryAuthTypes(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAuthTypesFinish(result: Gio.AsyncResult): ServiceAuthType[]
    queryAuthTypesSync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queueTask(task: Gio.Task, taskFunc: Gio.TaskThreadFunc): void
    refProxyResolver(): Gio.ProxyResolver
    refSession(): Session
    refSettings(): Settings
    setDisplayName(displayName: string): void
    setPassword(password: string): void
    setProxyResolver(proxyResolver: Gio.ProxyResolver): void
    setSettings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Transport_ConstructProps)
    _init (config?: Transport_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface VTrashFolder_ConstructProps extends VeeFolder_ConstructProps {
}
class VTrashFolder {
    /* Properties of Camel-1.2.Camel.VeeFolder */
    autoUpdate: boolean
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    displayName: string
    fullName: string
    markSeen: ThreeState
    markSeenTimeout: number
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.VeeFolder */
    readonly parent: Folder
    readonly priv: VeeFolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VTrashFolder */
    getFolderType(): VTrashFolderType
    /* Methods of Camel-1.2.Camel.VeeFolder */
    addFolder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    addVuid(miData?: object | null, changes?: FolderChangeInfo | null): void
    construct(flags: number): void
    getAutoUpdate(): boolean
    getExpression(): string
    getFlags(): number
    getLocation(vinfo: VeeMessageInfo): [ /* returnType */ Folder, /* realuid */ string | null ]
    getVeeUidFolder(veeMessageUid: string): Folder | null
    ignoreNextChangedEvent(subfolder: Folder): void
    propagateSkippedChanges(): void
    rebuildFolder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    refFolders(): Folder[]
    removeFolder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    removeFromIgnoreChangedEvent(subfolder: Folder): void
    removeVuid(miData?: object | null, changes?: FolderChangeInfo | null): void
    setAutoUpdate(autoUpdate: boolean): void
    setExpression(expression: string): void
    setFolders(folders: Folder[], cancellable?: Gio.Cancellable | null): void
    /* Methods of Camel-1.2.Camel.Folder */
    appendMessage(message: MimeMessage, info: MessageInfo | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    appendMessageFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    appendMessageSync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmpUids(uid1: string, uid2: string): number
    countByExpression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dupDescription(): string
    dupDisplayName(): string
    dupFullName(): string
    expunge(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expungeFinish(result: Gio.AsyncResult): boolean
    expungeSync(cancellable?: Gio.Cancellable | null): boolean
    freeDeep(array: string[]): void
    freeShallow(array: string[]): void
    freeSummary(array: MessageInfo[]): void
    freeUids(array: string[]): void
    freeze(): void
    getDeletedMessageCount(): number
    getDescription(): string
    getDisplayName(): string
    getFilename(uid: string): string
    getFolderSummary(): FolderSummary
    getFrozenCount(): number
    getFullName(): string
    getMarkSeen(): ThreeState
    getMarkSeenTimeout(): number
    getMessage(messageUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMessageCached(messageUid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    getMessageCount(): number
    getMessageFinish(result: Gio.AsyncResult): MimeMessage
    getMessageFlags(uid: string): number
    getMessageInfo(uid: string): MessageInfo
    getMessageSync(messageUid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    getMessageUserFlag(uid: string, name: string): boolean
    getMessageUserTag(uid: string, name: string): string
    getParentStore(): object | null
    getPermanentFlags(): number
    getQuotaInfo(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getQuotaInfoFinish(result: Gio.AsyncResult): FolderQuotaInfo
    getQuotaInfoSync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    getSummary(): string[]
    getUids(): string[]
    getUncachedUids(uids: string[]): string[]
    getUnreadMessageCount(): number
    hasSummaryCapability(): boolean
    isFrozen(): boolean
    lock(): void
    prepareContentRefresh(): void
    purgeMessageCache(startUid: string, endUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purgeMessageCacheFinish(result: Gio.AsyncResult): boolean
    purgeMessageCacheSync(startUid: string, endUid: string, cancellable?: Gio.Cancellable | null): boolean
    refreshInfo(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshInfoFinish(result: Gio.AsyncResult): boolean
    refreshInfoSync(cancellable?: Gio.Cancellable | null): boolean
    rename(newName: string): void
    searchByExpression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    searchByUids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    searchFree(result: string[]): void
    setDescription(description: string): void
    setDisplayName(displayName: string): void
    setFlags(folderFlags: number): void
    setFullName(fullName: string): void
    setLockAsync(skipFolderLock: boolean): void
    setMarkSeen(markSeen: ThreeState): void
    setMarkSeenTimeout(timeout: number): void
    setMessageFlags(uid: string, mask: number, set: number): boolean
    setMessageUserFlag(uid: string, name: string, value: boolean): void
    setMessageUserTag(uid: string, name: string, value: string): void
    sortUids(uids: string[]): void
    synchronize(expunge: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeFinish(result: Gio.AsyncResult): boolean
    synchronizeMessage(messageUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeMessageFinish(result: Gio.AsyncResult): boolean
    synchronizeMessageSync(messageUid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronizeSync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    takeFolderSummary(summary: FolderSummary): void
    thaw(): void
    transferMessagesTo(messageUids: string[], destination: Folder, deleteOriginals: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transferMessagesToFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    transferMessagesToSync(messageUids: string[], destination: Folder, deleteOriginals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: ((changes: FolderChangeInfo) => void)): number
    on(sigName: "changed", callback: (changes: FolderChangeInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (changes: FolderChangeInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (changes: FolderChangeInfo) => void): NodeJS.EventEmitter
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (() => void)): number
    on(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deleted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: ((oldName: string) => void)): number
    on(sigName: "renamed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "renamed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "renamed", callback: (oldName: string) => void): NodeJS.EventEmitter
    emit(sigName: "renamed", oldName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-update", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-update", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VTrashFolder_ConstructProps)
    _init (config?: VTrashFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parentStore: Store, type: VTrashFolderType): VTrashFolder
    /* Function overloads */
    static new(parentStore: Store, full: string, flags: number): VTrashFolder
    static $gtype: GObject.Type
}
interface VeeDataCache_ConstructProps extends GObject.Object_ConstructProps {
}
class VeeDataCache {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeDataCache */
    addSubfolder(subfolder: Folder): void
    containsMessageInfoData(folder: Folder, origMessageUid: string): boolean
    foreachMessageInfoData(fromfolder: Folder, func: ForeachInfoData): void
    getMessageInfoData(folder: Folder, origMessageUid: string): VeeMessageInfoData
    getMessageInfoDataByVuid(veeMessageUid: string): VeeMessageInfoData | null
    getSubfolderData(folder: Folder): VeeSubfolderData
    removeMessageInfoData(miData: VeeMessageInfoData): void
    removeSubfolder(subfolder: Folder): void
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
    constructor (config?: VeeDataCache_ConstructProps)
    _init (config?: VeeDataCache_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VeeDataCache
    static $gtype: GObject.Type
}
interface VeeFolder_ConstructProps extends Folder_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.VeeFolder */
    autoUpdate?: boolean
}
class VeeFolder {
    /* Properties of Camel-1.2.Camel.VeeFolder */
    autoUpdate: boolean
    /* Properties of Camel-1.2.Camel.Folder */
    description: string
    displayName: string
    fullName: string
    markSeen: ThreeState
    markSeenTimeout: number
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Folder */
    readonly parent: Object
    readonly priv: FolderPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeFolder */
    addFolder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    addVuid(miData?: object | null, changes?: FolderChangeInfo | null): void
    construct(flags: number): void
    getAutoUpdate(): boolean
    getExpression(): string
    getFlags(): number
    getLocation(vinfo: VeeMessageInfo): [ /* returnType */ Folder, /* realuid */ string | null ]
    getVeeUidFolder(veeMessageUid: string): Folder | null
    ignoreNextChangedEvent(subfolder: Folder): void
    propagateSkippedChanges(): void
    rebuildFolder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    refFolders(): Folder[]
    removeFolder(subfolder: Folder, cancellable?: Gio.Cancellable | null): void
    removeFromIgnoreChangedEvent(subfolder: Folder): void
    removeVuid(miData?: object | null, changes?: FolderChangeInfo | null): void
    setAutoUpdate(autoUpdate: boolean): void
    setExpression(expression: string): void
    setFolders(folders: Folder[], cancellable?: Gio.Cancellable | null): void
    /* Methods of Camel-1.2.Camel.Folder */
    appendMessage(message: MimeMessage, info: MessageInfo | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    appendMessageFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    appendMessageSync(message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* appendedUid */ string | null ]
    changed(changes: FolderChangeInfo): void
    cmpUids(uid1: string, uid2: string): number
    countByExpression(expression: string, cancellable?: Gio.Cancellable | null): number
    delete(): void
    dupDescription(): string
    dupDisplayName(): string
    dupFullName(): string
    expunge(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    expungeFinish(result: Gio.AsyncResult): boolean
    expungeSync(cancellable?: Gio.Cancellable | null): boolean
    freeDeep(array: string[]): void
    freeShallow(array: string[]): void
    freeSummary(array: MessageInfo[]): void
    freeUids(array: string[]): void
    freeze(): void
    getDeletedMessageCount(): number
    getDescription(): string
    getDisplayName(): string
    getFilename(uid: string): string
    getFolderSummary(): FolderSummary
    getFrozenCount(): number
    getFullName(): string
    getMarkSeen(): ThreeState
    getMarkSeenTimeout(): number
    getMessage(messageUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMessageCached(messageUid: string, cancellable?: Gio.Cancellable | null): MimeMessage | null
    getMessageCount(): number
    getMessageFinish(result: Gio.AsyncResult): MimeMessage
    getMessageFlags(uid: string): number
    getMessageInfo(uid: string): MessageInfo
    getMessageSync(messageUid: string, cancellable?: Gio.Cancellable | null): MimeMessage
    getMessageUserFlag(uid: string, name: string): boolean
    getMessageUserTag(uid: string, name: string): string
    getParentStore(): object | null
    getPermanentFlags(): number
    getQuotaInfo(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getQuotaInfoFinish(result: Gio.AsyncResult): FolderQuotaInfo
    getQuotaInfoSync(cancellable?: Gio.Cancellable | null): FolderQuotaInfo
    getSummary(): string[]
    getUids(): string[]
    getUncachedUids(uids: string[]): string[]
    getUnreadMessageCount(): number
    hasSummaryCapability(): boolean
    isFrozen(): boolean
    lock(): void
    prepareContentRefresh(): void
    purgeMessageCache(startUid: string, endUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    purgeMessageCacheFinish(result: Gio.AsyncResult): boolean
    purgeMessageCacheSync(startUid: string, endUid: string, cancellable?: Gio.Cancellable | null): boolean
    refreshInfo(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshInfoFinish(result: Gio.AsyncResult): boolean
    refreshInfoSync(cancellable?: Gio.Cancellable | null): boolean
    rename(newName: string): void
    searchByExpression(expression: string, cancellable?: Gio.Cancellable | null): string[]
    searchByUids(expression: string, uids: string[], cancellable?: Gio.Cancellable | null): string[]
    searchFree(result: string[]): void
    setDescription(description: string): void
    setDisplayName(displayName: string): void
    setFlags(folderFlags: number): void
    setFullName(fullName: string): void
    setLockAsync(skipFolderLock: boolean): void
    setMarkSeen(markSeen: ThreeState): void
    setMarkSeenTimeout(timeout: number): void
    setMessageFlags(uid: string, mask: number, set: number): boolean
    setMessageUserFlag(uid: string, name: string, value: boolean): void
    setMessageUserTag(uid: string, name: string, value: string): void
    sortUids(uids: string[]): void
    synchronize(expunge: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeFinish(result: Gio.AsyncResult): boolean
    synchronizeMessage(messageUid: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeMessageFinish(result: Gio.AsyncResult): boolean
    synchronizeMessageSync(messageUid: string, cancellable?: Gio.Cancellable | null): boolean
    synchronizeSync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    takeFolderSummary(summary: FolderSummary): void
    thaw(): void
    transferMessagesTo(messageUids: string[], destination: Folder, deleteOriginals: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    transferMessagesToFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    transferMessagesToSync(messageUids: string[], destination: Folder, deleteOriginals: boolean, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    unlock(): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    /* Signals of Camel-1.2.Camel.Folder */
    connect(sigName: "changed", callback: ((changes: FolderChangeInfo) => void)): number
    on(sigName: "changed", callback: (changes: FolderChangeInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (changes: FolderChangeInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (changes: FolderChangeInfo) => void): NodeJS.EventEmitter
    emit(sigName: "changed", changes: FolderChangeInfo): void
    connect(sigName: "deleted", callback: (() => void)): number
    on(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deleted", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deleted", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deleted"): void
    connect(sigName: "renamed", callback: ((oldName: string) => void)): number
    on(sigName: "renamed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "renamed", callback: (oldName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "renamed", callback: (oldName: string) => void): NodeJS.EventEmitter
    emit(sigName: "renamed", oldName: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-update", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-update", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VeeFolder_ConstructProps)
    _init (config?: VeeFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parentStore: Store, full: string, flags: number): VeeFolder
    static $gtype: GObject.Type
}
interface VeeMessageInfo_ConstructProps extends MessageInfo_ConstructProps {
}
class VeeMessageInfo {
    /* Properties of Camel-1.2.Camel.MessageInfo */
    abortNotifications: boolean
    cc: string
    dateReceived: number
    dateSent: number
    dirty: boolean
    flags: MessageFlags
    folderFlagged: boolean
    readonly folderFlaggedStamp: number
    from: string
    headers: NameValueArray
    messageId: number
    mlist: string
    preview: string
    references: object[]
    size: number
    subject: string
    to: string
    uid: string
    userFlags: NamedFlags
    userHeaders: NameValueArray
    userTags: NameValueArray
    /* Fields of Camel-1.2.Camel.MessageInfo */
    readonly parent: GObject.Object
    readonly priv: MessageInfoPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeMessageInfo */
    getOriginalFolder(): Folder
    getOriginalSummary(): FolderSummary
    /* Methods of Camel-1.2.Camel.MessageInfo */
    clone(assignSummary?: FolderSummary | null): MessageInfo
    dump(): void
    dupHeaders(): NameValueArray | null
    dupPreview(): string | null
    dupReferences(): number[] | null
    dupUserFlags(): NamedFlags
    dupUserHeader(name: string): string | null
    dupUserHeaders(): NameValueArray | null
    dupUserTag(name: string): string | null
    dupUserTags(): NameValueArray | null
    freezeNotifications(): void
    getAbortNotifications(): boolean
    getCc(): string
    getDateReceived(): number
    getDateSent(): number
    getDirty(): boolean
    getFlags(): number
    getFolderFlagged(): boolean
    getFolderFlaggedStamp(): number
    getFrom(): string
    getHeaders(): NameValueArray | null
    getMessageId(): number
    getMlist(): string
    getNotificationsFrozen(): boolean
    getPreview(): string | null
    getReferences(): number[] | null
    getSize(): number
    getSubject(): string
    getTo(): string
    getUid(): string
    getUserFlag(name: string): boolean
    getUserFlags(): NamedFlags | null
    getUserHeader(name: string): string | null
    getUserHeaders(): NameValueArray | null
    getUserTag(name: string): string | null
    getUserTags(): NameValueArray | null
    load(record: MIRecord, bdataPtr: string): boolean
    pooldupUid(): string
    propertyLock(): void
    propertyUnlock(): void
    refSummary(): object | null
    save(record: MIRecord, bdataStr: GLib.String): boolean
    setAbortNotifications(abortNotifications: boolean): void
    setCc(cc?: string | null): boolean
    setDateReceived(dateReceived: number): boolean
    setDateSent(dateSent: number): boolean
    setDirty(dirty: boolean): void
    setFlags(mask: number, set: number): boolean
    setFolderFlagged(folderFlagged: boolean): boolean
    setFrom(from?: string | null): boolean
    setMessageId(messageId: number): boolean
    setMlist(mlist?: string | null): boolean
    setPreview(preview?: string | null): boolean
    setSize(size: number): boolean
    setSubject(subject?: string | null): boolean
    setTo(to?: string | null): boolean
    setUid(uid: string): boolean
    setUserFlag(name: string, state: boolean): boolean
    setUserHeader(name: string, value?: string | null): boolean
    setUserTag(name: string, value?: string | null): boolean
    takeHeaders(headers?: NameValueArray | null): boolean
    takeReferences(references?: number[] | null): boolean
    takeUserFlags(userFlags?: NamedFlags | null): boolean
    takeUserHeaders(headers?: NameValueArray | null): boolean
    takeUserTags(userTags?: NameValueArray | null): boolean
    thawNotifications(): void
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
    connect(sigName: "notify::abort-notifications", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-notifications", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::abort-notifications", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date-received", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-received", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date-received", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::date-sent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date-sent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date-sent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dirty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dirty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dirty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-flagged", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-flagged-stamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-flagged-stamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-flagged-stamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::from", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::from", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mlist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preview", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preview", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::references", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::references", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::references", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::to", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::to", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VeeMessageInfo_ConstructProps)
    _init (config?: VeeMessageInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(summary: FolderSummary, originalSummary: FolderSummary, vuid: string): VeeMessageInfo
    /* Function overloads */
    static new(summary?: FolderSummary | null): VeeMessageInfo
    static $gtype: GObject.Type
}
interface VeeMessageInfoData_ConstructProps extends GObject.Object_ConstructProps {
}
class VeeMessageInfoData {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeMessageInfoData */
    getOrigMessageUid(): string
    getSubfolderData(): VeeSubfolderData
    getVeeMessageUid(): string
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
    constructor (config?: VeeMessageInfoData_ConstructProps)
    _init (config?: VeeMessageInfoData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subfolderData: VeeSubfolderData, origMessageUid: string): VeeMessageInfoData
    static $gtype: GObject.Type
}
interface VeeStore_ConstructProps extends Store_ConstructProps {
    /* Constructor properties of Camel-1.2.Camel.VeeStore */
    unmatchedEnabled?: boolean
}
class VeeStore {
    /* Properties of Camel-1.2.Camel.VeeStore */
    unmatchedEnabled: boolean
    /* Properties of Camel-1.2.Camel.Service */
    readonly connectionStatus: ServiceConnectionStatus
    displayName: string
    password: string
    proxyResolver: Gio.ProxyResolver
    settings: Settings
    /* Properties of Camel-1.2.Camel.Object */
    stateFilename: string
    /* Fields of Camel-1.2.Camel.Store */
    readonly parent: Service
    readonly priv: StorePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeStore */
    getUnmatchedEnabled(): boolean
    getUnmatchedFolder(): object | null
    getVeeDataCache(): VeeFolder
    noteSubfolderUnused(subfolder: Folder, unusedBy: VeeFolder): void
    noteSubfolderUsed(subfolder: Folder, usedBy: VeeFolder): void
    noteVuidUnused(miData: VeeMessageInfoData, unusedBy: VeeFolder): void
    noteVuidUsed(miData: VeeMessageInfoData, usedBy: VeeFolder): void
    rebuildUnmatchedFolder(cancellable?: Gio.Cancellable | null): void
    setUnmatchedEnabled(isEnabled: boolean): void
    /* Methods of Camel-1.2.Camel.Store */
    canRefreshFolder(info: FolderInfo): boolean
    createFolder(parentName: string | null, folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFolderFinish(result: Gio.AsyncResult): FolderInfo | null
    createFolderSync(parentName: string | null, folderName: string, cancellable?: Gio.Cancellable | null): FolderInfo | null
    deleteCachedFolder(folderName: string): void
    deleteFolder(folderName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteFolderFinish(result: Gio.AsyncResult): boolean
    deleteFolderSync(folderName: string, cancellable?: Gio.Cancellable | null): boolean
    dupOpenedFolders(): Folder[]
    folderCreated(folderInfo: FolderInfo): void
    folderDeleted(folderInfo: FolderInfo): void
    folderInfoStale(): void
    folderOpened(folder: Folder): void
    folderRenamed(oldName: string, folderInfo: FolderInfo): void
    getCanAutoSaveChanges(): boolean
    getDb(): DB
    getFlags(): number
    getFolder(folderName: string, flags: StoreGetFolderFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFolderFinish(result: Gio.AsyncResult): Folder | null
    getFolderInfo(top: string | null, flags: StoreGetFolderInfoFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFolderInfoFinish(result: Gio.AsyncResult): FolderInfo | null
    getFolderInfoSync(top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null): FolderInfo | null
    getFolderSync(folderName: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null): Folder | null
    getFoldersBag(): ObjectBag
    getInboxFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getInboxFolderFinish(result: Gio.AsyncResult): Folder | null
    getInboxFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    getJunkFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getJunkFolderFinish(result: Gio.AsyncResult): Folder | null
    getJunkFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    getPermissions(): number
    getTrashFolder(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTrashFolderFinish(result: Gio.AsyncResult): Folder | null
    getTrashFolderSync(cancellable?: Gio.Cancellable | null): Folder | null
    initialSetup(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initialSetupFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    initialSetupSync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    maybeRunDbMaintenance(): boolean
    renameFolder(oldName: string, newName: string, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    renameFolderFinish(result: Gio.AsyncResult): boolean
    renameFolderSync(oldName: string, newName: string, cancellable?: Gio.Cancellable | null): boolean
    setFlags(flags: number): void
    setPermissions(permissions: number): void
    synchronize(expunge: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    synchronizeFinish(result: Gio.AsyncResult): boolean
    synchronizeSync(expunge: boolean, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Camel-1.2.Camel.Service */
    authenticate(mechanism: string | null, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    authenticateFinish(result: Gio.AsyncResult): AuthenticationResult
    authenticateSync(mechanism?: string | null, cancellable?: Gio.Cancellable | null): AuthenticationResult
    connect(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectFinish(result: Gio.AsyncResult): boolean
    connectSync(cancellable?: Gio.Cancellable | null): boolean
    disconnect(clean: boolean, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectFinish(result: Gio.AsyncResult): boolean
    disconnectSync(clean: boolean, cancellable?: Gio.Cancellable | null): boolean
    dupDisplayName(): string
    dupPassword(): string
    getConnectionStatus(): ServiceConnectionStatus
    getDisplayName(): string
    getName(brief: boolean): string
    getPassword(): string
    getProvider(): Provider
    getUid(): string
    getUserCacheDir(): string
    getUserDataDir(): string
    migrateFiles(): void
    newCamelUrl(): URL
    queryAuthTypes(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAuthTypesFinish(result: Gio.AsyncResult): ServiceAuthType[]
    queryAuthTypesSync(cancellable?: Gio.Cancellable | null): ServiceAuthType[]
    queueTask(task: Gio.Task, taskFunc: Gio.TaskThreadFunc): void
    refProxyResolver(): Gio.ProxyResolver
    refSession(): Session
    refSettings(): Settings
    setDisplayName(displayName: string): void
    setPassword(password: string): void
    setProxyResolver(proxyResolver: Gio.ProxyResolver): void
    setSettings(settings: Settings): void
    /* Methods of Camel-1.2.Camel.Object */
    getStateFilename(): string
    setStateFilename(stateFilename: string): void
    stateRead(): number
    stateWrite(): number
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
    /* Signals of Camel-1.2.Camel.Store */
    connect(sigName: "folder-created", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-created", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-created", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-created", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-created", object: FolderInfo): void
    connect(sigName: "folder-deleted", callback: ((object: FolderInfo) => void)): number
    on(sigName: "folder-deleted", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-deleted", callback: (object: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-deleted", callback: (object: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-deleted", object: FolderInfo): void
    connect(sigName: "folder-info-stale", callback: (() => void)): number
    on(sigName: "folder-info-stale", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-info-stale", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-info-stale", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "folder-info-stale"): void
    connect(sigName: "folder-opened", callback: ((object: Folder) => void)): number
    on(sigName: "folder-opened", callback: (object: Folder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-opened", callback: (object: Folder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-opened", callback: (object: Folder) => void): NodeJS.EventEmitter
    emit(sigName: "folder-opened", object: Folder): void
    connect(sigName: "folder-renamed", callback: ((object: string, p0: FolderInfo) => void)): number
    on(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "folder-renamed", callback: (object: string, p0: FolderInfo) => void): NodeJS.EventEmitter
    emit(sigName: "folder-renamed", object: string, p0: FolderInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unmatched-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unmatched-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unmatched-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unmatched-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unmatched-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VeeStore_ConstructProps)
    _init (config?: VeeStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VeeStore
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface VeeSubfolderData_ConstructProps extends GObject.Object_ConstructProps {
}
class VeeSubfolderData {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeSubfolderData */
    getFolder(): Folder
    getFolderId(): string
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
    readonly deletedCount: number
    readonly junkCount: number
    readonly junkNotDeletedCount: number
    readonly savedCount: number
    readonly unreadCount: number
    readonly visibleCount: number
    /* Fields of Camel-1.2.Camel.FolderSummary */
    readonly parent: GObject.Object
    readonly priv: FolderSummaryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Camel-1.2.Camel.VeeSummary */
    add(miData: VeeMessageInfoData): VeeMessageInfo
    getUidsForSubfolder(subfolder: Folder): GLib.HashTable
    remove(vuid: string, subfolder: Folder): void
    replaceFlags(uid: string): void
    /* Methods of Camel-1.2.Camel.FolderSummary */
    add(info: MessageInfo, forceKeepUid: boolean): void
    checkUid(uid: string): boolean
    clear(): boolean
    count(): number
    get(uid: string): MessageInfo | null
    getArray(): string[]
    getChanged(): string[]
    getDeletedCount(): number
    getFlags(): number
    getFolder(): object | null
    getHash(): GLib.HashTable
    getIndex(): Index
    getInfoFlags(uid: string): number
    getJunkCount(): number
    getJunkNotDeletedCount(): number
    getNextUid(): number
    getSavedCount(): number
    getTimestamp(): number
    getUnreadCount(): number
    getVersion(): number
    getVisibleCount(): number
    headerLoad(store: object | null, folderName: string): boolean
    headerSave(): boolean
    infoNewFromHeaders(headers: NameValueArray): MessageInfo
    infoNewFromMessage(message: MimeMessage): MessageInfo
    infoNewFromParser(parser: MimeParser): MessageInfo
    load(): boolean
    lock(): void
    nextUid(): number
    nextUidString(): string
    peekLoaded(uid: string): MessageInfo | null
    prepareFetchAll(): void
    remove(info: MessageInfo): boolean
    removeUid(uid: string): boolean
    removeUids(uids: string[]): boolean
    replaceFlags(info: MessageInfo): boolean
    save(): boolean
    setFlags(flags: number): void
    setIndex(index: Index): void
    setNextUid(uid: number): void
    setTimestamp(timestamp: number): void
    setVersion(version: number): void
    touch(): void
    unlock(): void
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
    /* Signals of Camel-1.2.Camel.FolderSummary */
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
    connect(sigName: "notify::deleted-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deleted-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::junk-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::junk-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::junk-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::junk-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::junk-not-deleted-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::junk-not-deleted-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::junk-not-deleted-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::saved-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::saved-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::saved-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::saved-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::saved-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unread-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unread-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unread-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unread-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unread-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly parentClass: GObject.ObjectClass
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
    readonly parentClass: GObject.ObjectClass
    readonly validateRoot: (bs: BlockFile) => number
    readonly initRoot: (bs: BlockFile) => number
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
    readonly blockSize: number
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
    readonly rawcert: any
    /* Methods of Camel-1.2.Camel.Cert */
    loadCertFile(): boolean
    ref(): Cert
    saveCertFile(derData: Uint8Array): boolean
    unref(): void
    static name: string
    static new(): Cert
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Cert
}
abstract class CertDBClass {
    /* Fields of Camel-1.2.Camel.CertDBClass */
    readonly parentClass: GObject.ObjectClass
    readonly headerLoad: (certdb: CertDB, istream?: object | null) => number
    readonly headerSave: (certdb: CertDB, ostream?: object | null) => number
    readonly certLoad: (certdb: CertDB, istream?: object | null) => Cert
    readonly certSave: (certdb: CertDB, cert: Cert, ostream?: object | null) => number
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
    bestName(): string
    init(): void
    step(in_: number[]): void
    static name: string
    /* Static methods and pseudo-constructors */
    static best(in_: number[]): string | null
    static isoToWindows(isocharset: string): string
}
class CipherCertInfo {
    /* Fields of Camel-1.2.Camel.CipherCertInfo */
    readonly name: string
    readonly email: string
    readonly certData: object
    readonly certDataFree: GLib.DestroyNotify
    readonly certDataClone: CipherCloneFunc
    readonly properties: object[]
    static name: string
}
class CipherCertInfoProperty {
    /* Fields of Camel-1.2.Camel.CipherCertInfoProperty */
    readonly name: string
    readonly value: object
    readonly valueFree: GLib.DestroyNotify
    readonly valueClone: CipherCloneFunc
    static name: string
}
abstract class CipherContextClass {
    /* Fields of Camel-1.2.Camel.CipherContextClass */
    readonly parentClass: GObject.ObjectClass
    readonly signProtocol: string
    readonly encryptProtocol: string
    readonly keyProtocol: string
    readonly idToHash: (context: CipherContext, id: string) => CipherHash
    readonly hashToId: (context: CipherContext, hash: CipherHash) => string
    readonly signSync: (context: CipherContext, userid: string, hash: CipherHash, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => boolean
    readonly verifySync: (context: CipherContext, ipart: MimePart, cancellable?: Gio.Cancellable | null) => CipherValidity
    readonly encryptSync: (context: CipherContext, userid: string, recipients: string[], ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => boolean
    readonly decryptSync: (context: CipherContext, ipart: MimePart, opart: MimePart, cancellable?: Gio.Cancellable | null) => CipherValidity
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
    addCertinfo(mode: CipherValidityMode, name: string, email: string): number
    addCertinfoEx(mode: CipherValidityMode, name: string, email: string, certData?: object | null, certDataClone?: CipherCloneFunc | null): number
    clear(): void
    clone(): CipherValidity
    envelope(valid: CipherValidity): void
    free(): void
    getCertinfoProperty(mode: CipherValidityMode, infoIndex: number, name: string): object | null
    getDescription(): string
    getValid(): boolean
    init(): void
    setCertinfoProperty(mode: CipherValidityMode, infoIndex: number, name: string, value?: object | null, valueClone?: CipherCloneFunc | null): void
    setDescription(description: string): void
    setValid(valid: boolean): void
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
    isAttachment(contentType: ContentType): boolean
    isAttachmentEx(contentType: ContentType, parentContentType: ContentType): boolean
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
    setParam(name: string, value: string): void
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
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class DataCachePrivate {
    static name: string
}
abstract class DataWrapperClass {
    /* Fields of Camel-1.2.Camel.DataWrapperClass */
    readonly parentClass: GObject.ObjectClass
    readonly setMimeType: (dataWrapper: DataWrapper, mimeType: string) => void
    readonly getMimeType: (dataWrapper: DataWrapper) => string
    readonly getMimeTypeField: (dataWrapper: DataWrapper) => ContentType | null
    readonly setMimeTypeField: (dataWrapper: DataWrapper, mimeType?: ContentType | null) => void
    readonly isOffline: (dataWrapper: DataWrapper) => boolean
    readonly writeToStreamSync: (dataWrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => number
    readonly decodeToStreamSync: (dataWrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => number
    readonly constructFromStreamSync: (dataWrapper: DataWrapper, stream: Stream, cancellable?: Gio.Cancellable | null) => boolean
    readonly writeToOutputStreamSync: (dataWrapper: DataWrapper, outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null) => number
    readonly decodeToOutputStreamSync: (dataWrapper: DataWrapper, outputStream: Gio.OutputStream, cancellable?: Gio.Cancellable | null) => number
    readonly constructFromInputStreamSync: (dataWrapper: DataWrapper, inputStream: Gio.InputStream, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
class DataWrapperPrivate {
    static name: string
}
class FIRecord {
    /* Fields of Camel-1.2.Camel.FIRecord */
    readonly folderName: string
    readonly version: number
    readonly flags: number
    readonly nextuid: number
    readonly timestamp: number
    readonly savedCount: number
    readonly unreadCount: number
    readonly deletedCount: number
    readonly junkCount: number
    readonly visibleCount: number
    readonly jndCount: number
    readonly bdata: string
    static name: string
}
abstract class FilterDriverClass {
    /* Fields of Camel-1.2.Camel.FilterDriverClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class FilterDriverPrivate {
    static name: string
}
abstract class FilterInputStreamClass {
    /* Fields of Camel-1.2.Camel.FilterInputStreamClass */
    readonly parentClass: Gio.FilterInputStreamClass
    readonly reserved: object[]
    static name: string
}
class FilterInputStreamPrivate {
    static name: string
}
abstract class FilterOutputStreamClass {
    /* Fields of Camel-1.2.Camel.FilterOutputStreamClass */
    readonly parentClass: Gio.FilterOutputStreamClass
    readonly reserved: object[]
    static name: string
}
class FilterOutputStreamPrivate {
    static name: string
}
class FolderChangeInfo {
    /* Fields of Camel-1.2.Camel.FolderChangeInfo */
    readonly uidAdded: object[]
    readonly uidRemoved: object[]
    readonly uidChanged: object[]
    readonly uidRecent: object[]
    /* Methods of Camel-1.2.Camel.FolderChangeInfo */
    addSource(uid: string): void
    addSourceList(list: string[]): void
    addUid(uid: string): void
    addUpdate(uid: string): void
    addUpdateList(list: string[]): void
    buildDiff(): void
    cat(src: FolderChangeInfo): void
    changeUid(uid: string): void
    changed(): boolean
    clear(): void
    copy(): FolderChangeInfo
    free(): void
    getAddedUids(): string[]
    getChangedUids(): string[]
    getRecentUids(): string[]
    getRemovedUids(): string[]
    recentUid(uid: string): void
    removeUid(uid: string): void
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
    readonly parentClass: ObjectClass
    readonly getMessageCount: (folder: Folder) => number
    readonly getPermanentFlags: (folder: Folder) => number
    readonly getMessageFlags: (folder: Folder, uid: string) => number
    readonly setMessageFlags: (folder: Folder, uid: string, mask: number, set: number) => boolean
    readonly getMessageUserFlag: (folder: Folder, uid: string, name: string) => boolean
    readonly setMessageUserFlag: (folder: Folder, uid: string, name: string, value: boolean) => void
    readonly getMessageUserTag: (folder: Folder, uid: string, name: string) => string
    readonly setMessageUserTag: (folder: Folder, uid: string, name: string, value: string) => void
    readonly getUids: (folder: Folder) => string[]
    readonly freeUids: (folder: Folder, array: string[]) => void
    readonly cmpUids: (folder: Folder, uid1: string, uid2: string) => number
    readonly sortUids: (folder: Folder, uids: string[]) => void
    readonly getSummary: (folder: Folder) => string[]
    readonly freeSummary: (folder: Folder, array: MessageInfo[]) => void
    readonly hasSearchCapability: (folder: Folder) => boolean
    readonly searchByExpression: (folder: Folder, expression: string, cancellable?: Gio.Cancellable | null) => string[]
    readonly searchByUids: (folder: Folder, expression: string, uids: string[], cancellable?: Gio.Cancellable | null) => string[]
    readonly searchFree: (folder: Folder, result: string[]) => void
    readonly getMessageInfo: (folder: Folder, uid: string) => MessageInfo
    readonly delete_: (folder: Folder) => void
    readonly rename: (folder: Folder, newName: string) => void
    readonly freeze: (folder: Folder) => void
    readonly thaw: (folder: Folder) => void
    readonly isFrozen: (folder: Folder) => boolean
    readonly countByExpression: (folder: Folder, expression: string, cancellable?: Gio.Cancellable | null) => number
    readonly getUncachedUids: (folder: Folder, uids: string[]) => string[]
    readonly getFilename: (folder: Folder, uid: string) => string
    readonly getMessageCached: (folder: Folder, messageUid: string, cancellable?: Gio.Cancellable | null) => MimeMessage | null
    readonly appendMessageSync: (folder: Folder, message: MimeMessage, info?: MessageInfo | null, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* appendedUid */ string | null ]
    readonly expungeSync: (folder: Folder, cancellable?: Gio.Cancellable | null) => boolean
    readonly getMessageSync: (folder: Folder, messageUid: string, cancellable?: Gio.Cancellable | null) => MimeMessage
    readonly getQuotaInfoSync: (folder: Folder, cancellable?: Gio.Cancellable | null) => FolderQuotaInfo
    readonly purgeMessageCacheSync: (folder: Folder, startUid: string, endUid: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly refreshInfoSync: (folder: Folder, cancellable?: Gio.Cancellable | null) => boolean
    readonly synchronizeSync: (folder: Folder, expunge: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly synchronizeMessageSync: (folder: Folder, messageUid: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly transferMessagesToSync: (source: Folder, messageUids: string[], destination: Folder, deleteOriginals: boolean, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* transferredUids */ string[] | null ]
    readonly prepareContentRefresh: (folder: Folder) => void
    readonly reservedMethods: object[]
    readonly changed: (folder: Folder, changes: FolderChangeInfo) => void
    readonly deleted: (folder: Folder) => void
    readonly renamed: (folder: Folder, oldName: string) => void
    readonly reservedSignals: object[]
    static name: string
}
class FolderInfo {
    /* Fields of Camel-1.2.Camel.FolderInfo */
    readonly next: object
    readonly parent: object
    readonly child: object
    readonly fullName: string
    readonly displayName: string
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
    static build(folders: FolderInfo[], namespace: string, separator: number, shortNames: boolean): FolderInfo
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
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class FolderSearchPrivate {
    static name: string
}
abstract class FolderSummaryClass {
    /* Fields of Camel-1.2.Camel.FolderSummaryClass */
    readonly parentClass: GObject.ObjectClass
    readonly messageInfoType: GObject.Type
    readonly collate: string
    readonly sortBy: string
    readonly summaryHeaderLoad: (summary: FolderSummary, fir?: object | null) => boolean
    readonly summaryHeaderSave: (summary: FolderSummary) => object | null
    readonly messageInfoNewFromHeaders: (summary: FolderSummary, headers: NameValueArray) => MessageInfo
    readonly messageInfoNewFromParser: (summary: FolderSummary, parser: MimeParser) => MessageInfo
    readonly messageInfoNewFromMessage: (summary: FolderSummary, message: MimeMessage) => MessageInfo
    readonly messageInfoFromUid: (summary: FolderSummary, uid: string) => MessageInfo | null
    readonly nextUidString: (summary: FolderSummary) => string
    readonly prepareFetchAll: (summary: FolderSummary) => void
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
    readonly nodeChunks: MemChunk
    readonly folder: Folder
    readonly summary: object[]
    /* Methods of Camel-1.2.Camel.FolderThread */
    apply(uids: string[]): void
    ref(): FolderThread
    unref(): void
    static name: string
    static new(folder: Folder, uids: string[], threadSubject: boolean): FolderThread
    constructor(folder: Folder, uids: string[], threadSubject: boolean)
    /* Static methods and pseudo-constructors */
    static new(folder: Folder, uids: string[], threadSubject: boolean): FolderThread
}
class FolderThreadNode {
    /* Fields of Camel-1.2.Camel.FolderThreadNode */
    readonly next: object
    readonly parent: object
    readonly child: object
    readonly message: MessageInfo
    readonly rootSubject: string
    readonly order: number
    readonly re: number
    static name: string
}
abstract class GpgContextClass {
    /* Fields of Camel-1.2.Camel.GpgContextClass */
    readonly parentClass: CipherContextClass
    readonly reserved: object[]
    static name: string
}
class GpgContextPrivate {
    static name: string
}
abstract class HTMLParserClass {
    /* Fields of Camel-1.2.Camel.HTMLParserClass */
    readonly parentClass: GObject.ObjectClass
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
    addMember(member: HeaderAddress): void
    ref(): HeaderAddress
    setAddr(addr: string): void
    setMembers(group: HeaderAddress[]): void
    setName(name: string): void
    unref(): void
    static name: string
    static new(): HeaderAddress
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): HeaderAddress
    static newGroup(name: string): HeaderAddress
    static newName(name: string, addr: string): HeaderAddress
    static decode(in_: string, charset: string): HeaderAddress
    static fold(in_: string, headerlen: number): string
    static listAppend(addrlistp: HeaderAddress[], addr: HeaderAddress): void
    static listAppendList(addrlistp: HeaderAddress[], addrs: HeaderAddress[]): void
    static listClear(addrlistp: HeaderAddress[]): void
    static listEncode(addrlist: HeaderAddress[]): string
    static listFormat(addrlist: HeaderAddress[]): string
}
class HeaderParam {
    /* Fields of Camel-1.2.Camel.HeaderParam */
    readonly next: object
    readonly name: string
    readonly value: string
    static name: string
    /* Static methods and pseudo-constructors */
    static listDecode(in_?: string | null): object | null
    static listFormat(params?: object | null): string
    static listFormatAppend(out: GLib.String, params?: object | null): void
    static listFree(params?: object | null): void
}
abstract class IndexClass {
    /* Fields of Camel-1.2.Camel.IndexClass */
    readonly parentClass: GObject.ObjectClass
    readonly sync: (index: Index) => number
    readonly compress: (index: Index) => number
    readonly delete_: (index: Index) => number
    readonly rename: (index: Index, path: string) => number
    readonly hasName: (index: Index, name: string) => number
    readonly addName: (index: Index, name: string) => IndexName | null
    readonly writeName: (index: Index, idn: IndexName) => number
    readonly findName: (index: Index, name: string) => IndexCursor | null
    readonly deleteName: (index: Index, name: string) => void
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
    readonly addWord: (name: IndexName, word: string) => void
    readonly addBuffer: (name: IndexName, buffer: string, len: number) => number
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
    readonly parentClass: AddressClass
    readonly reserved: object[]
    static name: string
}
class InternetAddressPrivate {
    static name: string
}
abstract class JunkFilterInterface {
    /* Fields of Camel-1.2.Camel.JunkFilterInterface */
    readonly parentInterface: GObject.TypeInterface
    readonly classify: (junkFilter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => JunkStatus
    readonly learnJunk: (junkFilter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => boolean
    readonly learnNotJunk: (junkFilter: JunkFilter, message: MimeMessage, cancellable?: Gio.Cancellable | null) => boolean
    readonly synchronize: (junkFilter: JunkFilter, cancellable?: Gio.Cancellable | null) => boolean
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
    readonly parentClass: GObject.ObjectClass
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
    readonly msgType: number
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
    readonly followupFlag: string
    readonly followupCompletedOn: string
    readonly followupDueBy: string
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
    readonly parentClass: DataWrapperClass
    readonly addHeader: (medium: Medium, name: string, value: string) => void
    readonly setHeader: (medium: Medium, name: string, value?: string | null) => void
    readonly removeHeader: (medium: Medium, name: string) => void
    readonly getHeader: (medium: Medium, name: string) => string | null
    readonly dupHeaders: (medium: Medium) => NameValueArray
    readonly getHeaders: (medium: Medium) => NameValueArray
    readonly getContent: (medium: Medium) => DataWrapper | null
    readonly setContent: (medium: Medium, content?: DataWrapper | null) => void
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
    static newFromHeaders(headers: NameValueArray): MessageContentInfo
    static newFromMessage(mimePart: MimePart): MessageContentInfo
    static newFromParser(parser: MimeParser): MessageContentInfo
}
abstract class MessageInfoBaseClass {
    /* Fields of Camel-1.2.Camel.MessageInfoBaseClass */
    readonly parentClass: MessageInfoClass
    readonly reserved: object[]
    static name: string
}
class MessageInfoBasePrivate {
    static name: string
}
abstract class MessageInfoClass {
    /* Fields of Camel-1.2.Camel.MessageInfoClass */
    readonly parentClass: GObject.ObjectClass
    readonly clone: (mi: MessageInfo, assignSummary?: FolderSummary | null) => MessageInfo
    readonly load: (mi: MessageInfo, record: MIRecord | null, bdataPtr: string) => boolean
    readonly save: (mi: MessageInfo, record: MIRecord | null, bdataStr: GLib.String) => boolean
    readonly getFlags: (mi: MessageInfo) => number
    readonly setFlags: (mi: MessageInfo, mask: number, set: number) => boolean
    readonly getUserFlag: (mi: MessageInfo, name: string) => boolean
    readonly setUserFlag: (mi: MessageInfo, name: string, state: boolean) => boolean
    readonly getUserFlags: (mi: MessageInfo) => NamedFlags | null
    readonly dupUserFlags: (mi: MessageInfo) => NamedFlags
    readonly takeUserFlags: (mi: MessageInfo, userFlags?: NamedFlags | null) => boolean
    readonly getUserTag: (mi: MessageInfo, name: string) => string | null
    readonly setUserTag: (mi: MessageInfo, name: string, value?: string | null) => boolean
    readonly getUserTags: (mi: MessageInfo) => NameValueArray | null
    readonly dupUserTags: (mi: MessageInfo) => NameValueArray | null
    readonly takeUserTags: (mi: MessageInfo, userTags?: NameValueArray | null) => boolean
    readonly getSubject: (mi: MessageInfo) => string
    readonly setSubject: (mi: MessageInfo, subject?: string | null) => boolean
    readonly getFrom: (mi: MessageInfo) => string
    readonly setFrom: (mi: MessageInfo, from?: string | null) => boolean
    readonly getTo: (mi: MessageInfo) => string
    readonly setTo: (mi: MessageInfo, to?: string | null) => boolean
    readonly getCc: (mi: MessageInfo) => string
    readonly setCc: (mi: MessageInfo, cc?: string | null) => boolean
    readonly getMlist: (mi: MessageInfo) => string
    readonly setMlist: (mi: MessageInfo, mlist?: string | null) => boolean
    readonly getSize: (mi: MessageInfo) => number
    readonly setSize: (mi: MessageInfo, size: number) => boolean
    readonly getDateSent: (mi: MessageInfo) => number
    readonly setDateSent: (mi: MessageInfo, dateSent: number) => boolean
    readonly getDateReceived: (mi: MessageInfo) => number
    readonly setDateReceived: (mi: MessageInfo, dateReceived: number) => boolean
    readonly getMessageId: (mi: MessageInfo) => number
    readonly setMessageId: (mi: MessageInfo, messageId: number) => boolean
    readonly getReferences: (mi: MessageInfo) => number[] | null
    readonly takeReferences: (mi: MessageInfo, references?: number[] | null) => boolean
    readonly getHeaders: (mi: MessageInfo) => NameValueArray | null
    readonly takeHeaders: (mi: MessageInfo, headers?: NameValueArray | null) => boolean
    readonly getUserHeader: (mi: MessageInfo, name: string) => string | null
    readonly setUserHeader: (mi: MessageInfo, name: string, value?: string | null) => boolean
    readonly getUserHeaders: (mi: MessageInfo) => NameValueArray | null
    readonly takeUserHeaders: (mi: MessageInfo, headers?: NameValueArray | null) => boolean
    readonly getPreview: (mi: MessageInfo) => string | null
    readonly setPreview: (mi: MessageInfo, preview?: string | null) => boolean
    readonly reserved: object[]
    static name: string
}
class MessageInfoPrivate {
    static name: string
}
abstract class MimeFilterBasicClass {
    /* Fields of Camel-1.2.Camel.MimeFilterBasicClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterBasicPrivate {
    static name: string
}
abstract class MimeFilterBestencClass {
    /* Fields of Camel-1.2.Camel.MimeFilterBestencClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterBestencPrivate {
    static name: string
}
abstract class MimeFilterCRLFClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCRLFClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterCRLFPrivate {
    static name: string
}
abstract class MimeFilterCanonClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCanonClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterCanonPrivate {
    static name: string
}
abstract class MimeFilterCharsetClass {
    /* Fields of Camel-1.2.Camel.MimeFilterCharsetClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterCharsetPrivate {
    static name: string
}
abstract class MimeFilterClass {
    /* Fields of Camel-1.2.Camel.MimeFilterClass */
    readonly parentClass: GObject.ObjectClass
    readonly filter: (filter: MimeFilter, in_: Uint8Array, prespace: number) => [ /* out */ Uint8Array, /* outprespace */ number ]
    readonly complete: (filter: MimeFilter, in_: Uint8Array, prespace: number) => [ /* out */ Uint8Array, /* outprespace */ number ]
    readonly reset: (filter: MimeFilter) => void
    readonly reserved: object[]
    static name: string
}
abstract class MimeFilterEnrichedClass {
    /* Fields of Camel-1.2.Camel.MimeFilterEnrichedClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterEnrichedPrivate {
    static name: string
}
abstract class MimeFilterFromClass {
    /* Fields of Camel-1.2.Camel.MimeFilterFromClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterFromPrivate {
    static name: string
}
abstract class MimeFilterGZipClass {
    /* Fields of Camel-1.2.Camel.MimeFilterGZipClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterGZipPrivate {
    static name: string
}
abstract class MimeFilterHTMLClass {
    /* Fields of Camel-1.2.Camel.MimeFilterHTMLClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterHTMLPrivate {
    static name: string
}
abstract class MimeFilterIndexClass {
    /* Fields of Camel-1.2.Camel.MimeFilterIndexClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterIndexPrivate {
    static name: string
}
abstract class MimeFilterLinewrapClass {
    /* Fields of Camel-1.2.Camel.MimeFilterLinewrapClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterLinewrapPrivate {
    static name: string
}
abstract class MimeFilterPgpClass {
    /* Fields of Camel-1.2.Camel.MimeFilterPgpClass */
    readonly parentClass: MimeFilterClass
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
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterProgressPrivate {
    static name: string
}
abstract class MimeFilterToHTMLClass {
    /* Fields of Camel-1.2.Camel.MimeFilterToHTMLClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterToHTMLPrivate {
    static name: string
}
abstract class MimeFilterWindowsClass {
    /* Fields of Camel-1.2.Camel.MimeFilterWindowsClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterWindowsPrivate {
    static name: string
}
abstract class MimeFilterYencClass {
    /* Fields of Camel-1.2.Camel.MimeFilterYencClass */
    readonly parentClass: MimeFilterClass
    readonly reserved: object[]
    static name: string
}
class MimeFilterYencPrivate {
    static name: string
}
abstract class MimeMessageClass {
    /* Fields of Camel-1.2.Camel.MimeMessageClass */
    readonly parentClass: MimePartClass
    readonly reserved: object[]
    static name: string
}
class MimeMessagePrivate {
    static name: string
}
abstract class MimeParserClass {
    /* Fields of Camel-1.2.Camel.MimeParserClass */
    readonly parentClass: GObject.ObjectClass
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
    readonly parentClass: MediumClass
    readonly constructFromParserSync: (mimePart: MimePart, parser: MimeParser, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
class MimePartPrivate {
    static name: string
}
class Msg {
    /* Fields of Camel-1.2.Camel.Msg */
    readonly replyPort: MsgPort
    static name: string
}
class MsgPort {
    static name: string
}
abstract class MultipartClass {
    /* Fields of Camel-1.2.Camel.MultipartClass */
    readonly parentClass: DataWrapperClass
    readonly addPart: (multipart: Multipart, part: MimePart) => void
    readonly getPart: (multipart: Multipart, index: number) => MimePart
    readonly getNumber: (multipart: Multipart) => number
    readonly getBoundary: (multipart: Multipart) => string
    readonly setBoundary: (multipart: Multipart, boundary?: string | null) => void
    readonly constructFromParser: (multipart: Multipart, parser: MimeParser) => number
    readonly reserved: object[]
    static name: string
}
abstract class MultipartEncryptedClass {
    /* Fields of Camel-1.2.Camel.MultipartEncryptedClass */
    readonly parentClass: MultipartClass
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
    readonly parentClass: MultipartClass
    readonly reserved: object[]
    static name: string
}
class MultipartSignedPrivate {
    static name: string
}
abstract class NNTPAddressClass {
    /* Fields of Camel-1.2.Camel.NNTPAddressClass */
    readonly parentClass: AddressClass
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
    equal(arrayB: NameValueArray | null, compareType: CompareType): boolean
    free(): void
    get(index: number): [ /* returnType */ boolean, /* outName */ string | null, /* outValue */ string | null ]
    getLength(): number
    getName(index: number): string | null
    getNamed(compareType: CompareType, name: string): string | null
    getValue(index: number): string | null
    remove(index: number): boolean
    removeNamed(compareType: CompareType, name: string, allOccurrences: boolean): number
    set(index: number, name: string, value: string): boolean
    setName(index: number, name: string): boolean
    setNamed(compareType: CompareType, name: string, value: string): boolean
    setValue(index: number, value: string): boolean
    static name: string
    static new(): NameValueArray
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NameValueArray
    static newSized(reserveSize: number): NameValueArray
}
class NamedFlags {
    /* Methods of Camel-1.2.Camel.NamedFlags */
    clear(): void
    contains(name: string): boolean
    copy(): NamedFlags
    equal(namedFlagsB?: NamedFlags | null): boolean
    free(): void
    get(index: number): string | null
    getLength(): number
    insert(name: string): boolean
    remove(name: string): boolean
    static name: string
    static new(): NamedFlags
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NamedFlags
    static newSized(reserveSize: number): NamedFlags
}
abstract class NetworkServiceInterface {
    /* Fields of Camel-1.2.Camel.NetworkServiceInterface */
    readonly parentInterface: GObject.TypeInterface
    readonly getServiceName: (service: NetworkService, method: NetworkSecurityMethod) => string
    readonly getDefaultPort: (service: NetworkService, method: NetworkSecurityMethod) => number
    readonly connectSync: (service: NetworkService, cancellable?: Gio.Cancellable | null) => Gio.IOStream
    readonly reserved: object[]
    static name: string
}
abstract class NetworkSettingsInterface {
    /* Fields of Camel-1.2.Camel.NetworkSettingsInterface */
    readonly parentInterface: GObject.TypeInterface
    readonly reserved: object[]
    static name: string
}
abstract class NullOutputStreamClass {
    /* Fields of Camel-1.2.Camel.NullOutputStreamClass */
    readonly parentClass: Gio.OutputStreamClass
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
    rekey(object?: object | null, newKey?: object | null): void
    remove(object?: object | null): void
    reserve(key?: object | null): object | null
    static name: string
}
abstract class ObjectClass {
    /* Fields of Camel-1.2.Camel.ObjectClass */
    readonly parentClass: GObject.ObjectClass
    readonly stateRead: (object: Object, fp?: object | null) => number
    readonly stateWrite: (object: Object, fp?: object | null) => number
    readonly reserved: object[]
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class OfflineFolderClass {
    /* Fields of Camel-1.2.Camel.OfflineFolderClass */
    readonly parentClass: FolderClass
    readonly downsyncSync: (folder: OfflineFolder, expression: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly reserved: object[]
    static name: string
}
class OfflineFolderPrivate {
    static name: string
}
abstract class OfflineSettingsClass {
    /* Fields of Camel-1.2.Camel.OfflineSettingsClass */
    readonly parentClass: StoreSettingsClass
    readonly reserved: object[]
    static name: string
}
class OfflineSettingsPrivate {
    static name: string
}
abstract class OfflineStoreClass {
    /* Fields of Camel-1.2.Camel.OfflineStoreClass */
    readonly parentClass: StoreClass
    readonly dupDownsyncFolders: (store: OfflineStore) => Folder[]
    readonly reserved: object[]
    static name: string
}
class OfflineStorePrivate {
    static name: string
}
abstract class OperationClass {
    /* Fields of Camel-1.2.Camel.OperationClass */
    readonly parentClass: Gio.CancellableClass
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
    readonly urlFlags: ProviderURLFlags
    readonly extraConf: ProviderConfEntry
    readonly portEntries: ProviderPortEntry
    readonly autoDetect: ProviderAutoDetectFunc
    readonly objectTypes: GObject.Type[]
    readonly authtypes: object[]
    readonly urlHash: GLib.HashFunc
    readonly urlEqual: GLib.EqualFunc
    readonly translationDomain: string
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
    readonly isSsl: boolean
    static name: string
}
abstract class SExpClass {
    /* Fields of Camel-1.2.Camel.SExpClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class SExpPrivate {
    static name: string
}
class SExpResult {
    /* Fields of Camel-1.2.Camel.SExpResult */
    readonly type: SExpResultType
    readonly timeGenerator: boolean
    readonly occuringStart: number
    readonly occuringEnd: number
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
    readonly parentClass: CipherContextClass
    readonly reserved: object[]
    static name: string
}
class SMIMEContextPrivate {
    static name: string
}
abstract class SaslAnonymousClass {
    /* Fields of Camel-1.2.Camel.SaslAnonymousClass */
    readonly parentClass: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslAnonymousPrivate {
    static name: string
}
abstract class SaslClass {
    /* Fields of Camel-1.2.Camel.SaslClass */
    readonly parentClass: GObject.ObjectClass
    readonly authType: ServiceAuthType
    readonly tryEmptyPasswordSync: (sasl: Sasl, cancellable?: Gio.Cancellable | null) => boolean
    readonly challengeSync: (sasl: Sasl, token: Uint8Array, cancellable?: Gio.Cancellable | null) => Uint8Array
    readonly reserved: object[]
    static name: string
}
abstract class SaslCramMd5Class {
    /* Fields of Camel-1.2.Camel.SaslCramMd5Class */
    readonly parentClass: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslCramMd5Private {
    static name: string
}
abstract class SaslDigestMd5Class {
    /* Fields of Camel-1.2.Camel.SaslDigestMd5Class */
    readonly parentClass: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslDigestMd5Private {
    static name: string
}
abstract class SaslGssapiClass {
    /* Fields of Camel-1.2.Camel.SaslGssapiClass */
    readonly parentClass: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslGssapiPrivate {
    static name: string
}
abstract class SaslLoginClass {
    /* Fields of Camel-1.2.Camel.SaslLoginClass */
    readonly parentClass: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslLoginPrivate {
    static name: string
}
abstract class SaslNTLMClass {
    /* Fields of Camel-1.2.Camel.SaslNTLMClass */
    readonly parentClass: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslNTLMPrivate {
    static name: string
}
abstract class SaslPOPB4SMTPClass {
    /* Fields of Camel-1.2.Camel.SaslPOPB4SMTPClass */
    readonly parentClass: SaslClass
    readonly reserved: object[]
    static name: string
}
class SaslPOPB4SMTPPrivate {
    static name: string
}
abstract class SaslPlainClass {
    /* Fields of Camel-1.2.Camel.SaslPlainClass */
    readonly parentClass: SaslClass
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
    readonly parentClass: SaslClass
    static name: string
}
abstract class SaslXOAuth2GoogleClass {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2GoogleClass */
    readonly parentClass: SaslXOAuth2Class
    static name: string
}
class SaslXOAuth2GooglePrivate {
    static name: string
}
abstract class SaslXOAuth2OutlookClass {
    /* Fields of Camel-1.2.Camel.SaslXOAuth2OutlookClass */
    readonly parentClass: SaslXOAuth2Class
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
    readonly parentClass: SaslXOAuth2Class
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
    readonly needPassword: boolean
    /* Methods of Camel-1.2.Camel.ServiceAuthType */
    copy(): ServiceAuthType
    free(): void
    static name: string
}
abstract class ServiceClass {
    /* Fields of Camel-1.2.Camel.ServiceClass */
    readonly parentClass: ObjectClass
    readonly settingsType: GObject.Type
    readonly getName: (service: Service, brief: boolean) => string
    readonly connectSync: (service: Service, cancellable?: Gio.Cancellable | null) => boolean
    readonly disconnectSync: (service: Service, clean: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly authenticateSync: (service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null) => AuthenticationResult
    readonly queryAuthTypesSync: (service: Service, cancellable?: Gio.Cancellable | null) => ServiceAuthType[]
    readonly reserved: object[]
    static name: string
}
class ServicePrivate {
    static name: string
}
abstract class SessionClass {
    /* Fields of Camel-1.2.Camel.SessionClass */
    readonly parentClass: GObject.ObjectClass
    readonly addService: (session: Session, uid: string, protocol: string, type: ProviderType) => Service
    readonly removeService: (session: Session, service: Service) => void
    readonly getPassword: (session: Session, service: Service, prompt: string, item: string, flags: number) => string
    readonly forgetPassword: (session: Session, service: Service, item: string) => boolean
    readonly trustPrompt: (session: Session, service: Service, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => CertTrust
    readonly getFilterDriver: (session: Session, type: string, forFolder?: Folder | null) => FilterDriver
    readonly lookupAddressbook: (session: Session, name: string) => boolean
    readonly authenticateSync: (session: Session, service: Service, mechanism?: string | null, cancellable?: Gio.Cancellable | null) => boolean
    readonly forwardToSync: (session: Session, folder: Folder, message: MimeMessage, address: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly getOauth2AccessTokenSync: (session: Session, service: Service, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number | null ]
    readonly getRecipientCertificatesSync: (session: Session, flags: number, recipients: string[], cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outCertificates */ string[] ]
    readonly addressbookContainsSync: (session: Session, bookUid: string, emailAddress: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly reservedMethods: object[]
    readonly jobStarted: (session: Session, cancellable?: Gio.Cancellable | null) => void
    readonly jobFinished: (session: Session, cancellable: Gio.Cancellable | null, error: GLib.Error) => void
    readonly userAlert: (session: Session, service: Service, type: SessionAlertType, message: string) => void
    readonly reservedSignals: object[]
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class SettingsClass {
    /* Fields of Camel-1.2.Camel.SettingsClass */
    readonly parentClass: GObject.ObjectClass
    readonly clone: (settings: Settings) => Settings
    readonly equal: (settingsA: Settings, settingsB: Settings) => boolean
    readonly reserved: object[]
    /* Methods of Camel-1.2.Camel.SettingsClass */
    static listSettings(settings_class: Settings | Function | GObject.Type, nSettings: number): GObject.ParamSpec
    static name: string
}
class SettingsPrivate {
    static name: string
}
abstract class StoreClass {
    /* Fields of Camel-1.2.Camel.StoreClass */
    readonly parentClass: ServiceClass
    readonly hashFolderName: GLib.HashFunc
    readonly equalFolderName: GLib.EqualFunc
    readonly canRefreshFolder: (store: Store, info: FolderInfo) => boolean
    readonly getFolderSync: (store: Store, folderName: string, flags: StoreGetFolderFlags, cancellable?: Gio.Cancellable | null) => Folder | null
    readonly getFolderInfoSync: (store: Store, top: string | null, flags: StoreGetFolderInfoFlags, cancellable?: Gio.Cancellable | null) => FolderInfo | null
    readonly getInboxFolderSync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    readonly getJunkFolderSync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    readonly getTrashFolderSync: (store: Store, cancellable?: Gio.Cancellable | null) => Folder | null
    readonly createFolderSync: (store: Store, parentName: string | null, folderName: string, cancellable?: Gio.Cancellable | null) => FolderInfo | null
    readonly deleteFolderSync: (store: Store, folderName: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly renameFolderSync: (store: Store, oldName: string, newName: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly synchronizeSync: (store: Store, expunge: boolean, cancellable?: Gio.Cancellable | null) => boolean
    readonly initialSetupSync: (store: Store, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outSaveSetup */ GLib.HashTable ]
    readonly getCanAutoSaveChanges: (store: Store) => boolean
    readonly reservedMethods: object[]
    readonly folderCreated: (store: Store, folderInfo: FolderInfo) => void
    readonly folderDeleted: (store: Store, folderInfo: FolderInfo) => void
    readonly folderOpened: (store: Store, folder: Folder) => void
    readonly folderRenamed: (store: Store, oldName: string, folderInfo: FolderInfo) => void
    readonly folderInfoStale: (store: Store) => void
    readonly reservedSignals: object[]
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
    static setString(summary: StoreSummary, info: StoreInfo, type: number, value: string): void
}
class StorePrivate {
    static name: string
}
abstract class StoreSettingsClass {
    /* Fields of Camel-1.2.Camel.StoreSettingsClass */
    readonly parentClass: SettingsClass
    readonly reserved: object[]
    static name: string
}
class StoreSettingsPrivate {
    static name: string
}
abstract class StoreSummaryClass {
    /* Fields of Camel-1.2.Camel.StoreSummaryClass */
    readonly parentClass: GObject.ObjectClass
    readonly storeInfoSize: number
    readonly summaryHeaderLoad: (summary: StoreSummary, file?: object | null) => number
    readonly summaryHeaderSave: (summary: StoreSummary, file?: object | null) => number
    readonly storeInfoSave: (summary: StoreSummary, file: object | null, info: StoreInfo) => number
    readonly storeInfoFree: (summary: StoreSummary, info: StoreInfo) => void
    readonly storeInfoSetString: (summary: StoreSummary, info: StoreInfo, type: number, value: string) => void
    readonly reserved: object[]
    static name: string
}
class StoreSummaryPrivate {
    static name: string
}
abstract class StreamBufferClass {
    /* Fields of Camel-1.2.Camel.StreamBufferClass */
    readonly parentClass: StreamClass
    readonly init: (streamBuffer: StreamBuffer, stream: Stream, mode: StreamBufferMode) => void
    readonly initVbuf: (streamBuffer: StreamBuffer, stream: Stream, mode: StreamBufferMode, buf: string, size: number) => void
    readonly reserved: object[]
    static name: string
}
class StreamBufferPrivate {
    static name: string
}
abstract class StreamClass {
    /* Fields of Camel-1.2.Camel.StreamClass */
    readonly parentClass: GObject.ObjectClass
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
    readonly parentClass: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamFilterPrivate {
    static name: string
}
abstract class StreamFsClass {
    /* Fields of Camel-1.2.Camel.StreamFsClass */
    readonly parentClass: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamFsPrivate {
    static name: string
}
abstract class StreamMemClass {
    /* Fields of Camel-1.2.Camel.StreamMemClass */
    readonly parentClass: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamMemPrivate {
    static name: string
}
abstract class StreamNullClass {
    /* Fields of Camel-1.2.Camel.StreamNullClass */
    readonly parentClass: StreamClass
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
    readonly parentClass: StreamClass
    readonly reserved: object[]
    static name: string
}
class StreamProcessPrivate {
    static name: string
}
abstract class SubscribableInterface {
    /* Fields of Camel-1.2.Camel.SubscribableInterface */
    readonly parentInterface: GObject.TypeInterface
    readonly folderIsSubscribed: (subscribable: Subscribable, folderName: string) => boolean
    readonly subscribeFolderSync: (subscribable: Subscribable, folderName: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly unsubscribeFolderSync: (subscribable: Subscribable, folderName: string, cancellable?: Gio.Cancellable | null) => boolean
    readonly reservedMethods: object[]
    readonly folderSubscribed: (subscribable: Subscribable, folderInfo: FolderInfo) => void
    readonly folderUnsubscribed: (subscribable: Subscribable, folderInfo: FolderInfo) => void
    readonly reservedSignals: object[]
    static name: string
}
class SummaryMessageID {
    static name: string
}
abstract class TextIndexClass {
    /* Fields of Camel-1.2.Camel.TextIndexClass */
    readonly parentClass: IndexClass
    readonly reserved: object[]
    static name: string
}
abstract class TextIndexCursorClass {
    /* Fields of Camel-1.2.Camel.TextIndexCursorClass */
    readonly parentClass: IndexCursorClass
    readonly reserved: object[]
    static name: string
}
class TextIndexCursorPrivate {
    static name: string
}
abstract class TextIndexKeyCursorClass {
    /* Fields of Camel-1.2.Camel.TextIndexKeyCursorClass */
    readonly parentClass: IndexCursorClass
    readonly reserved: object[]
    static name: string
}
class TextIndexKeyCursorPrivate {
    static name: string
}
abstract class TextIndexNameClass {
    /* Fields of Camel-1.2.Camel.TextIndexNameClass */
    readonly parentClass: IndexNameClass
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
    readonly parentClass: ServiceClass
    readonly sendToSync: (transport: Transport, message: MimeMessage, from: Address, recipients: Address, cancellable?: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outSentMessageSaved */ boolean ]
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
    getNewUids(uids: string[]): string[]
    save(): boolean
    saveUid(uid: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static freeUids(uids: string[]): void
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
    getParam(name: string): string
    hash(): number
    newWithBase(urlString: string): URL
    setAuthmech(authmech: string): void
    setFragment(fragment: string): void
    setHost(host: string): void
    setParam(name: string, value: string): void
    setPath(path: string): void
    setPort(port: number): void
    setProtocol(protocol: string): void
    setQuery(query: string): void
    setUser(user: string): void
    toString(flags: URLFlags): string
    static name: string
    static new(urlString: string): URL
    constructor(urlString: string)
    /* Static methods and pseudo-constructors */
    static new(urlString: string): URL
    static addrspecEnd(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static addrspecStart(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static decode(part: string): void
    static decodePath(path: string): string
    static encode(part: string, escapeExtra: string): string
    static fileEnd(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static fileStart(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static webEnd(in_: string, pos: string, inend: string, match: UrlMatch): boolean
    static webStart(in_: string, pos: string, inend: string, match: UrlMatch): boolean
}
class UrlMatch {
    /* Fields of Camel-1.2.Camel.UrlMatch */
    readonly pattern: string
    readonly prefix: string
    readonly umSo: number
    readonly umEo: number
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
    readonly parentClass: VeeFolderClass
    readonly reserved: object[]
    static name: string
}
class VTrashFolderPrivate {
    static name: string
}
abstract class VeeDataCacheClass {
    /* Fields of Camel-1.2.Camel.VeeDataCacheClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class VeeDataCachePrivate {
    static name: string
}
abstract class VeeFolderClass {
    /* Fields of Camel-1.2.Camel.VeeFolderClass */
    readonly parentClass: FolderClass
    readonly addFolder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    readonly removeFolder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    readonly rebuildFolder: (vfolder: VeeFolder, subfolder: Folder, cancellable?: Gio.Cancellable | null) => void
    readonly setExpression: (vfolder: VeeFolder, expression: string) => void
    readonly folderChanged: (vfolder: VeeFolder, subfolder: Folder, changes: FolderChangeInfo) => void
    readonly reserved: object[]
    static name: string
}
class VeeFolderPrivate {
    static name: string
}
abstract class VeeMessageInfoClass {
    /* Fields of Camel-1.2.Camel.VeeMessageInfoClass */
    readonly parentClass: MessageInfoClass
    readonly reserved: object[]
    static name: string
}
abstract class VeeMessageInfoDataClass {
    /* Fields of Camel-1.2.Camel.VeeMessageInfoDataClass */
    readonly parentClass: GObject.ObjectClass
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
    readonly parentClass: StoreClass
    readonly reserved: object[]
    static name: string
}
class VeeStorePrivate {
    static name: string
}
abstract class VeeSubfolderDataClass {
    /* Fields of Camel-1.2.Camel.VeeSubfolderDataClass */
    readonly parentClass: GObject.ObjectClass
    readonly reserved: object[]
    static name: string
}
class VeeSubfolderDataPrivate {
    static name: string
}
abstract class VeeSummaryClass {
    /* Fields of Camel-1.2.Camel.VeeSummaryClass */
    readonly parentClass: FolderSummaryClass
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