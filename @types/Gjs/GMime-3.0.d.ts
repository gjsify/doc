/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GMime-3.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GMime {

enum AddressType {
    SENDER,
    FROM,
    REPLY_TO,
    TO,
    CC,
    BCC,
}
enum AutocryptPreferEncrypt {
    NONE,
    MUTUAL,
}
enum CipherAlgo {
    DEFAULT,
    IDEA,
    TODO_3DES,
    CAST5,
    BLOWFISH,
    AES,
    AES192,
    AES256,
    TWOFISH,
    CAMELLIA128,
    CAMELLIA192,
    CAMELLIA256,
}
enum ContentEncoding {
    DEFAULT,
    TODO_7BIT,
    TODO_8BIT,
    BINARY,
    BASE64,
    QUOTEDPRINTABLE,
    UUENCODE,
}
enum DigestAlgo {
    DEFAULT,
    MD5,
    SHA1,
    RIPEMD160,
    MD2,
    TIGER192,
    HAVAL5160,
    SHA256,
    SHA384,
    SHA512,
    SHA224,
    MD4,
    CRC32,
    CRC32_RFC1510,
    CRC32_RFC2440,
}
enum EncodingConstraint {
    TODO_7BIT,
    TODO_8BIT,
    BINARY,
}
enum EncryptFlags {
    NONE,
    ALWAYS_TRUST,
    NO_COMPRESS,
    SYMMETRIC,
    THROW_KEYIDS,
}
enum FilterFromMode {
    DEFAULT,
    ESCAPE,
    ARMOR,
}
enum FilterGZipMode {
    ZIP,
    UNZIP,
}
enum Format {
    MESSAGE,
    MBOX,
    MMDF,
}
enum NewLineFormat {
    UNIX,
    DOS,
}
enum OpenPGPData {
    NONE,
    ENCRYPTED,
    SIGNED,
    PUBLIC_KEY,
    PRIVATE_KEY,
}
enum ParamEncodingMethod {
    DEFAULT,
    RFC2231,
    RFC2047,
}
enum ParserWarning {
    WARN_DUPLICATED_HEADER,
    WARN_DUPLICATED_PARAMETER,
    WARN_UNENCODED_8BIT_HEADER,
    WARN_INVALID_CONTENT_TYPE,
    WARN_INVALID_RFC2047_HEADER_VALUE,
    WARN_MALFORMED_MULTIPART,
    WARN_TRUNCATED_MESSAGE,
    WARN_MALFORMED_MESSAGE,
    CRIT_INVALID_HEADER_NAME,
    CRIT_CONFLICTING_HEADER,
    CRIT_CONFLICTING_PARAMETER,
    CRIT_MULTIPART_WITHOUT_BOUNDARY,
    WARN_INVALID_PARAMETER,
    WARN_INVALID_ADDRESS_LIST,
    CRIT_NESTING_OVERFLOW,
    WARN_PART_WITHOUT_CONTENT,
    CRIT_PART_WITHOUT_HEADERS_OR_CONTENT,
}
enum PubKeyAlgo {
    DEFAULT,
    RSA,
    RSA_E,
    RSA_S,
    ELG_E,
    DSA,
    ECC,
    ELG,
    ECDSA,
    ECDH,
    EDDSA,
}
enum RfcComplianceMode {
    LOOSE,
    STRICT,
}
enum SecureMimeType {
    COMPRESSED_DATA,
    ENVELOPED_DATA,
    SIGNED_DATA,
    CERTS_ONLY,
    UNKNOWN,
}
enum SeekWhence {
    SET,
    CUR,
    END,
}
enum SignatureStatus {
    VALID,
    GREEN,
    RED,
    KEY_REVOKED,
    KEY_EXPIRED,
    SIG_EXPIRED,
    KEY_MISSING,
    CRL_MISSING,
    CRL_TOO_OLD,
    BAD_POLICY,
    SYS_ERROR,
    TOFU_CONFLICT,
}
enum StreamBufferMode {
    READ,
    WRITE,
}
enum Trust {
    UNKNOWN,
    UNDEFINED,
    NEVER,
    MARGINAL,
    FULL,
    ULTIMATE,
}
enum Validity {
    UNKNOWN,
    UNDEFINED,
    NEVER,
    MARGINAL,
    FULL,
    ULTIMATE,
}
enum DecryptFlags {
    NONE,
    EXPORT_SESSION_KEY,
    NO_VERIFY,
    ENABLE_KEYSERVER_LOOKUPS,
    ENABLE_ONLINE_CERTIFICATE_CHECKS,
}
enum FilterBestFlags {
    CHARSET,
    ENCODING,
}
enum OpenPGPState {
    NONE,
    BEGIN_PGP_MESSAGE,
    END_PGP_MESSAGE,
    BEGIN_PGP_SIGNED_MESSAGE,
    BEGIN_PGP_SIGNATURE,
    END_PGP_SIGNATURE,
    BEGIN_PGP_PUBLIC_KEY_BLOCK,
    END_PGP_PUBLIC_KEY_BLOCK,
    BEGIN_PGP_PRIVATE_KEY_BLOCK,
    END_PGP_PRIVATE_KEY_BLOCK,
}
enum VerifyFlags {
    NONE,
    ENABLE_KEYSERVER_LOOKUPS,
    ENABLE_ONLINE_CERTIFICATE_CHECKS,
}
const BINARY_AGE: number
const DISPOSITION_ATTACHMENT: string
const DISPOSITION_INLINE: string
const FILTER_ENRICHED_IS_RICHTEXT: number
const FILTER_HTML_BLOCKQUOTE_CITATION: number
const FILTER_HTML_CITE: number
const FILTER_HTML_CONVERT_ADDRESSES: number
const FILTER_HTML_CONVERT_NL: number
const FILTER_HTML_CONVERT_SPACES: number
const FILTER_HTML_CONVERT_URLS: number
const FILTER_HTML_ESCAPE_8BIT: number
const FILTER_HTML_MARK_CITATION: number
const FILTER_HTML_PRE: number
const INTERFACE_AGE: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const SIGNATURE_STATUS_ERROR_MASK: number
const UUDECODE_STATE_BEGIN: number
const UUDECODE_STATE_END: number
const UUDECODE_STATE_INIT: number
const UUDECODE_STATE_MASK: number
const YDECODE_STATE_BEGIN: number
const YDECODE_STATE_DECODE: number
const YDECODE_STATE_END: number
const YDECODE_STATE_EOLN: number
const YDECODE_STATE_ESCAPE: number
const YDECODE_STATE_INIT: number
const YDECODE_STATE_PART: number
const YENCODE_CRC_INIT: number
const YENCODE_STATE_INIT: number
function charset_best(inbuf: string, inlen: number): string | null
function charset_canon_name(charset: string): string
function charset_iconv_name(charset: string): string
function charset_iso_to_windows(isocharset: string): string
function charset_language(charset: string): string | null
function charset_locale_name(): string
function charset_map_init(): void
function charset_map_shutdown(): void
function charset_name(charset: string): string
function check_version(major: number, minor: number, micro: number): boolean
function content_encoding_from_string(str: string): ContentEncoding
function content_encoding_to_string(encoding: ContentEncoding): string
function encoding_base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encoding_base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encoding_base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encoding_quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encoding_quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encoding_quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encoding_uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encoding_uuencode_close(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
function encoding_uuencode_step(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
function format_options_get_default(): FormatOptions
function iconv_locale_to_utf8(str: string): string
function iconv_locale_to_utf8_length(str: string, n: number): string
function iconv_utf8_to_locale(str: string): string
function iconv_utf8_to_locale_length(str: string, n: number): string
function init(): void
function locale_charset(): string
function locale_language(): string | null
function parser_options_get_default(): ParserOptions
function references_parse(options: ParserOptions | null, text: string): References
function shutdown(): void
function utils_best_encoding(text: Uint8Array): ContentEncoding
function utils_decode_8bit(options: ParserOptions | null, text: Uint8Array): string
function utils_decode_message_id(message_id: string): string
function utils_generate_message_id(fqdn: string): string
function utils_header_decode_date(str: string): GLib.DateTime | null
function utils_header_decode_phrase(options: ParserOptions | null, phrase: string): string
function utils_header_decode_text(options: ParserOptions | null, text: string): string
function utils_header_encode_phrase(options: FormatOptions | null, phrase: string, charset?: string | null): string
function utils_header_encode_text(options: FormatOptions | null, text: string, charset?: string | null): string
function utils_header_format_date(date: GLib.DateTime): string
function utils_header_unfold(value: string): string
function utils_quote_string(str: string): string
function utils_structured_header_fold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
function utils_text_is_8bit(text: Uint8Array): boolean
function utils_unquote_string(str: string): void
function utils_unstructured_header_fold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
function ydecode_step(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
function yencode_close(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
function yencode_step(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
interface HeaderRawValueFormatter {
    (header: Header, options: FormatOptions, value: string, charset: string): string
}
interface ObjectForeachFunc {
    (parent: Object, part: Object): void
}
interface ParserHeaderRegexFunc {
    (parser: Parser, header: string, value: string, offset: number): void
}
interface ParserWarningFunc {
    (offset: number, errcode: ParserWarning, item: string): void
}
interface PasswordRequestFunc {
    (ctx: CryptoContext, user_id: string, prompt: string, reprompt: boolean, response: Stream): boolean
}
interface ApplicationPkcs7Mime_ConstructProps extends Part_ConstructProps {
}
class ApplicationPkcs7Mime {
    /* Fields of GMime-3.0.GMime.Part */
    readonly parent_object: Object
    readonly encoding: ContentEncoding
    readonly openpgp: OpenPGPData
    readonly content_description: string
    readonly content_location: string
    readonly content_md5: string
    readonly content: DataWrapper
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.ApplicationPkcs7Mime */
    decrypt(flags: DecryptFlags, session_key: string, result: DecryptResult): Object | null
    get_smime_type(): SecureMimeType
    verify(flags: VerifyFlags): [ /* returnType */ SignatureList | null, /* entity */ Object ]
    /* Methods of GMime-3.0.GMime.Part */
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding
    get_content(): DataWrapper
    get_content_description(): string
    get_content_encoding(): ContentEncoding
    get_content_id(): string
    get_content_location(): string
    get_content_md5(): string
    get_filename(): string
    get_openpgp_data(): OpenPGPData
    is_attachment(): boolean
    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null
    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgp_sign(userid: string): boolean
    openpgp_verify(flags: VerifyFlags): SignatureList | null
    set_content(content: DataWrapper): void
    set_content_description(description: string): void
    set_content_encoding(encoding: ContentEncoding): void
    set_content_id(content_id: string): void
    set_content_location(content_location: string): void
    set_content_md5(content_md5: string): void
    set_filename(filename: string): void
    set_openpgp_data(data: OpenPGPData): void
    verify_content_md5(): boolean
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Part */
    vfunc_set_content(content: DataWrapper): void
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationPkcs7Mime, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationPkcs7Mime, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ApplicationPkcs7Mime_ConstructProps)
    _init (config?: ApplicationPkcs7Mime_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: SecureMimeType): ApplicationPkcs7Mime
    /* Function overloads */
    static new(): ApplicationPkcs7Mime
    static new(options: ParserOptions | null, content_type: ContentType): ApplicationPkcs7Mime
    static encrypt(entity: Object, flags: EncryptFlags, recipients: string[]): ApplicationPkcs7Mime | null
    static sign(entity: Object, userid: string): ApplicationPkcs7Mime | null
    static $gtype: GObject.Type
}
interface AutocryptHeader_ConstructProps extends GObject.Object_ConstructProps {
}
class AutocryptHeader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.AutocryptHeader */
    clone(src: AutocryptHeader): void
    compare(ah2: AutocryptHeader): number
    get_address(): InternetAddressMailbox
    get_address_as_string(): string
    get_effective_date(): GLib.DateTime
    get_keydata(): GLib.Bytes
    get_prefer_encrypt(): AutocryptPreferEncrypt
    is_complete(): boolean
    set_address(address: InternetAddressMailbox): void
    set_address_from_string(address: string): void
    set_effective_date(effective_date: GLib.DateTime): void
    set_keydata(data: GLib.Bytes): void
    set_prefer_encrypt(pref: AutocryptPreferEncrypt): void
    to_string(gossip: boolean): string
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
    connect(sigName: "notify", callback: (($obj: AutocryptHeader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AutocryptHeader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AutocryptHeader_ConstructProps)
    _init (config?: AutocryptHeader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AutocryptHeader
    static new_from_string(string: string): AutocryptHeader
    static $gtype: GObject.Type
}
interface AutocryptHeaderList_ConstructProps extends GObject.Object_ConstructProps {
}
class AutocryptHeaderList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.AutocryptHeaderList */
    add(header: AutocryptHeader): void
    add_missing_addresses(addresses: InternetAddressList): number
    get_count(): number
    get_header_at(index: number): AutocryptHeader
    get_header_for_address(mailbox: InternetAddressMailbox): AutocryptHeader
    remove_incomplete(): void
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
    connect(sigName: "notify", callback: (($obj: AutocryptHeaderList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AutocryptHeaderList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AutocryptHeaderList_ConstructProps)
    _init (config?: AutocryptHeaderList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AutocryptHeaderList
    static $gtype: GObject.Type
}
interface Certificate_ConstructProps extends GObject.Object_ConstructProps {
}
class Certificate {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Certificate */
    get_created(): number
    get_created64(): number
    get_digest_algo(): DigestAlgo
    get_email(): string
    get_expires(): number
    get_expires64(): number
    get_fingerprint(): string
    get_id_validity(): Validity
    get_issuer_name(): string
    get_issuer_serial(): string
    get_key_id(): string
    get_name(): string
    get_pubkey_algo(): PubKeyAlgo
    get_trust(): Trust
    get_user_id(): string
    set_created(created: number): void
    set_digest_algo(algo: DigestAlgo): void
    set_email(email: string): void
    set_expires(expires: number): void
    set_fingerprint(fingerprint: string): void
    set_id_validity(validity: Validity): void
    set_issuer_name(issuer_name: string): void
    set_issuer_serial(issuer_serial: string): void
    set_key_id(key_id: string): void
    set_name(name: string): void
    set_pubkey_algo(algo: PubKeyAlgo): void
    set_trust(trust: Trust): void
    set_user_id(user_id: string): void
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
    connect(sigName: "notify", callback: (($obj: Certificate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Certificate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Certificate_ConstructProps)
    _init (config?: Certificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Certificate
    static $gtype: GObject.Type
}
interface CertificateList_ConstructProps extends GObject.Object_ConstructProps {
}
class CertificateList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.CertificateList */
    add(cert: Certificate): number
    clear(): void
    contains(cert: Certificate): boolean
    get_certificate(index: number): Certificate
    index_of(cert: Certificate): number
    insert(index: number, cert: Certificate): void
    length(): number
    remove(cert: Certificate): boolean
    remove_at(index: number): boolean
    set_certificate(index: number, cert: Certificate): void
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
    connect(sigName: "notify", callback: (($obj: CertificateList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CertificateList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CertificateList_ConstructProps)
    _init (config?: CertificateList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CertificateList
    static $gtype: GObject.Type
}
interface ContentDisposition_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentDisposition {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.ContentDisposition */
    encode(options?: FormatOptions | null): string
    get_disposition(): string
    get_parameter(name: string): string
    get_parameters(): ParamList
    is_attachment(): boolean
    set_disposition(value: string): void
    set_parameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ContentDisposition, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentDisposition, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentDisposition_ConstructProps)
    _init (config?: ContentDisposition_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContentDisposition
    static parse(options: ParserOptions | null, str: string): ContentDisposition
    static $gtype: GObject.Type
}
interface ContentType_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentType {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.ContentType */
    encode(options?: FormatOptions | null): string
    get_media_subtype(): string
    get_media_type(): string
    get_mime_type(): string
    get_parameter(name: string): string
    get_parameters(): ParamList
    is_type(type: string, subtype: string): boolean
    set_media_subtype(subtype: string): void
    set_media_type(type: string): void
    set_parameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ContentType, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContentType, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContentType_ConstructProps)
    _init (config?: ContentType_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: string, subtype: string): ContentType
    static parse(options: ParserOptions | null, str: string): ContentType
    static $gtype: GObject.Type
}
interface CryptoContext_ConstructProps extends GObject.Object_ConstructProps {
}
class CryptoContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.CryptoContext */
    decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    digest_id(name: string): DigestAlgo
    digest_name(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    export_keys(keys: string, ostream: Stream): number
    get_encryption_protocol(): string | null
    get_key_exchange_protocol(): string | null
    get_signature_protocol(): string | null
    import_keys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime-3.0.GMime.CryptoContext */
    vfunc_decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfunc_digest_id(name: string): DigestAlgo
    vfunc_digest_name(digest: DigestAlgo): string | null
    vfunc_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfunc_export_keys(keys: string, ostream: Stream): number
    vfunc_get_encryption_protocol(): string | null
    vfunc_get_key_exchange_protocol(): string | null
    vfunc_get_signature_protocol(): string | null
    vfunc_import_keys(istream: Stream): number
    vfunc_sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfunc_verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CryptoContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CryptoContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CryptoContext_ConstructProps)
    _init (config?: CryptoContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(protocol: string): CryptoContext
    static $gtype: GObject.Type
}
interface DataWrapper_ConstructProps extends GObject.Object_ConstructProps {
}
class DataWrapper {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.DataWrapper */
    get_encoding(): ContentEncoding
    get_stream(): Stream
    set_encoding(encoding: ContentEncoding): void
    set_stream(stream: Stream): void
    write_to_stream(stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.DataWrapper */
    vfunc_write_to_stream(stream: Stream): number
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
    static new_with_stream(stream: Stream, encoding: ContentEncoding): DataWrapper
    static $gtype: GObject.Type
}
interface DecryptResult_ConstructProps extends GObject.Object_ConstructProps {
}
class DecryptResult {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.DecryptResult */
    get_cipher(): CipherAlgo
    get_mdc(): DigestAlgo
    get_recipients(): CertificateList
    get_session_key(): string | null
    get_signatures(): SignatureList | null
    set_cipher(cipher: CipherAlgo): void
    set_mdc(mdc: DigestAlgo): void
    set_recipients(recipients: CertificateList): void
    set_session_key(session_key?: string | null): void
    set_signatures(signatures: SignatureList): void
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
    connect(sigName: "notify", callback: (($obj: DecryptResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DecryptResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DecryptResult_ConstructProps)
    _init (config?: DecryptResult_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DecryptResult
    static $gtype: GObject.Type
}
interface Filter_ConstructProps extends GObject.Object_ConstructProps {
}
class Filter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static $gtype: GObject.Type
}
interface FilterBasic_ConstructProps extends Filter_ConstructProps {
}
class FilterBasic {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterBasic, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterBasic, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterBasic_ConstructProps)
    _init (config?: FilterBasic_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(encoding: ContentEncoding, encode: boolean): FilterBasic
    static $gtype: GObject.Type
}
interface FilterBest_ConstructProps extends Filter_ConstructProps {
}
class FilterBest {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.FilterBest */
    charset(): string
    encoding(constraint: EncodingConstraint): ContentEncoding
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterBest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterBest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterBest_ConstructProps)
    _init (config?: FilterBest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: FilterBestFlags): FilterBest
    static $gtype: GObject.Type
}
interface FilterCharset_ConstructProps extends Filter_ConstructProps {
}
class FilterCharset {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterCharset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterCharset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterCharset_ConstructProps)
    _init (config?: FilterCharset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(from_charset: string, to_charset: string): FilterCharset
    static $gtype: GObject.Type
}
interface FilterChecksum_ConstructProps extends Filter_ConstructProps {
}
class FilterChecksum {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.FilterChecksum */
    get_digest(digest: number, len: number): number
    get_string(): string
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterChecksum, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterChecksum, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterChecksum_ConstructProps)
    _init (config?: FilterChecksum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: GLib.ChecksumType): FilterChecksum
    static $gtype: GObject.Type
}
interface FilterDos2Unix_ConstructProps extends Filter_ConstructProps {
}
class FilterDos2Unix {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterDos2Unix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterDos2Unix, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterDos2Unix_ConstructProps)
    _init (config?: FilterDos2Unix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ensure_newline: boolean): FilterDos2Unix
    static $gtype: GObject.Type
}
interface FilterEnriched_ConstructProps extends Filter_ConstructProps {
}
class FilterEnriched {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterEnriched, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterEnriched, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterEnriched_ConstructProps)
    _init (config?: FilterEnriched_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: number): FilterEnriched
    static $gtype: GObject.Type
}
interface FilterFrom_ConstructProps extends Filter_ConstructProps {
}
class FilterFrom {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterFrom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterFrom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterFrom_ConstructProps)
    _init (config?: FilterFrom_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: FilterFromMode): FilterFrom
    static $gtype: GObject.Type
}
interface FilterGZip_ConstructProps extends Filter_ConstructProps {
}
class FilterGZip {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.FilterGZip */
    get_comment(): string
    get_filename(): string
    set_comment(comment: string): void
    set_filename(filename: string): void
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterGZip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterGZip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterGZip_ConstructProps)
    _init (config?: FilterGZip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: FilterGZipMode, level: number): FilterGZip
    static $gtype: GObject.Type
}
interface FilterHTML_ConstructProps extends Filter_ConstructProps {
}
class FilterHTML {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterHTML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterHTML, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterHTML_ConstructProps)
    _init (config?: FilterHTML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(flags: number, colour: number): FilterHTML
    static $gtype: GObject.Type
}
interface FilterOpenPGP_ConstructProps extends Filter_ConstructProps {
}
class FilterOpenPGP {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.FilterOpenPGP */
    get_begin_offset(): number
    get_data_type(): OpenPGPData
    get_end_offset(): number
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterOpenPGP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOpenPGP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOpenPGP_ConstructProps)
    _init (config?: FilterOpenPGP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterOpenPGP
    static $gtype: GObject.Type
}
interface FilterSmtpData_ConstructProps extends Filter_ConstructProps {
}
class FilterSmtpData {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterSmtpData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterSmtpData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterSmtpData_ConstructProps)
    _init (config?: FilterSmtpData_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterSmtpData
    static $gtype: GObject.Type
}
interface FilterStrip_ConstructProps extends Filter_ConstructProps {
}
class FilterStrip {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterStrip, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterStrip, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterStrip_ConstructProps)
    _init (config?: FilterStrip_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): FilterStrip
    static $gtype: GObject.Type
}
interface FilterUnix2Dos_ConstructProps extends Filter_ConstructProps {
}
class FilterUnix2Dos {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterUnix2Dos, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterUnix2Dos, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterUnix2Dos_ConstructProps)
    _init (config?: FilterUnix2Dos_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ensure_newline: boolean): FilterUnix2Dos
    static $gtype: GObject.Type
}
interface FilterWindows_ConstructProps extends Filter_ConstructProps {
}
class FilterWindows {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.FilterWindows */
    is_windows_charset(): boolean
    real_charset(): string
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterWindows, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterWindows, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterWindows_ConstructProps)
    _init (config?: FilterWindows_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(claimed_charset: string): FilterWindows
    static $gtype: GObject.Type
}
interface FilterYenc_ConstructProps extends Filter_ConstructProps {
}
class FilterYenc {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parent_object: GObject.Object
    readonly priv: object
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
    /* Methods of GMime-3.0.GMime.FilterYenc */
    get_crc(): number
    get_pcrc(): number
    set_crc(crc: number): void
    set_state(state: number): void
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    set_size(size: number, keep: boolean): void
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
    /* Virtual methods of GMime-3.0.GMime.Filter */
    vfunc_complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    vfunc_copy(): Filter
    vfunc_filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
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
    connect(sigName: "notify", callback: (($obj: FilterYenc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterYenc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterYenc_ConstructProps)
    _init (config?: FilterYenc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(encode: boolean): FilterYenc
    static $gtype: GObject.Type
}
interface GpgContext_ConstructProps extends CryptoContext_ConstructProps {
}
class GpgContext {
    /* Fields of GMime-3.0.GMime.CryptoContext */
    readonly parent_object: GObject.Object
    readonly request_passwd: PasswordRequestFunc
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.CryptoContext */
    decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    digest_id(name: string): DigestAlgo
    digest_name(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    export_keys(keys: string, ostream: Stream): number
    get_encryption_protocol(): string | null
    get_key_exchange_protocol(): string | null
    get_signature_protocol(): string | null
    import_keys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime-3.0.GMime.CryptoContext */
    vfunc_decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfunc_digest_id(name: string): DigestAlgo
    vfunc_digest_name(digest: DigestAlgo): string | null
    vfunc_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfunc_export_keys(keys: string, ostream: Stream): number
    vfunc_get_encryption_protocol(): string | null
    vfunc_get_key_exchange_protocol(): string | null
    vfunc_get_signature_protocol(): string | null
    vfunc_import_keys(istream: Stream): number
    vfunc_sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfunc_verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GpgContext_ConstructProps)
    _init (config?: GpgContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GpgContext
    /* Function overloads */
    static new(protocol: string): GpgContext
    static $gtype: GObject.Type
}
interface Header_ConstructProps extends GObject.Object_ConstructProps {
}
class Header {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Header */
    format_addrlist(options: FormatOptions | null, value: string, charset: string): string
    format_content_disposition(options: FormatOptions | null, value: string, charset: string): string
    format_content_type(options: FormatOptions | null, value: string, charset: string): string
    format_default(options: FormatOptions | null, value: string, charset: string): string
    format_message_id(options: FormatOptions | null, value: string, charset: string): string
    format_received(options: FormatOptions | null, value: string, charset: string): string
    format_references(options: FormatOptions | null, value: string, charset: string): string
    get_name(): string
    get_offset(): number
    get_raw_name(): string
    get_raw_value(): string
    get_value(): string
    set_raw_value(raw_value: string): void
    set_value(options: FormatOptions | null, value: string, charset: string): void
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    connect(sigName: "notify", callback: (($obj: Header, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Header, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Header_ConstructProps)
    _init (config?: Header_ConstructProps): void
    static $gtype: GObject.Type
}
interface HeaderList_ConstructProps extends GObject.Object_ConstructProps {
}
class HeaderList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.HeaderList */
    append(name: string, value: string, charset: string): void
    clear(): void
    contains(name: string): boolean
    get_count(): number
    get_header(name: string): Header
    get_header_at(index: number): Header
    prepend(name: string, value: string, charset: string): void
    remove(name: string): boolean
    remove_at(index: number): void
    set(name: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    connect(sigName: "notify", callback: (($obj: HeaderList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HeaderList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HeaderList_ConstructProps)
    _init (config?: HeaderList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(options?: ParserOptions | null): HeaderList
    static $gtype: GObject.Type
}
interface InternetAddress_ConstructProps extends GObject.Object_ConstructProps {
}
class InternetAddress {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.InternetAddress */
    get_charset(): string | null
    get_name(): string | null
    set_charset(charset?: string | null): void
    set_name(name: string): void
    to_string(options: FormatOptions | null, encode: boolean): string
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
    /* Virtual methods of GMime-3.0.GMime.InternetAddress */
    vfunc_to_string(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
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
    static $gtype: GObject.Type
}
interface InternetAddressGroup_ConstructProps extends InternetAddress_ConstructProps {
}
class InternetAddressGroup {
    /* Fields of GMime-3.0.GMime.InternetAddress */
    readonly parent_object: GObject.Object
    readonly charset: string
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.InternetAddressGroup */
    add_member(member: InternetAddress): number
    get_members(): InternetAddressList
    set_members(members: InternetAddressList): void
    /* Methods of GMime-3.0.GMime.InternetAddress */
    get_charset(): string | null
    get_name(): string | null
    set_charset(charset?: string | null): void
    set_name(name: string): void
    to_string(options: FormatOptions | null, encode: boolean): string
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
    /* Virtual methods of GMime-3.0.GMime.InternetAddress */
    vfunc_to_string(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddressGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternetAddressGroup_ConstructProps)
    _init (config?: InternetAddressGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): InternetAddressGroup
    static $gtype: GObject.Type
}
interface InternetAddressList_ConstructProps extends GObject.Object_ConstructProps {
}
class InternetAddressList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.InternetAddressList */
    add(ia: InternetAddress): number
    append(append: InternetAddressList): void
    clear(): void
    contains(ia: InternetAddress): boolean
    encode(options: FormatOptions | null, str: GLib.String): void
    get_address(index: number): InternetAddress
    index_of(ia: InternetAddress): number
    insert(index: number, ia: InternetAddress): void
    length(): number
    prepend(prepend: InternetAddressList): void
    remove(ia: InternetAddress): boolean
    remove_at(index: number): boolean
    set_address(index: number, ia: InternetAddress): void
    to_string(options: FormatOptions | null, encode: boolean): string | null
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
    connect(sigName: "notify", callback: (($obj: InternetAddressList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternetAddressList_ConstructProps)
    _init (config?: InternetAddressList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): InternetAddressList
    static parse(options: ParserOptions | null, str: string): InternetAddressList | null
    static $gtype: GObject.Type
}
interface InternetAddressMailbox_ConstructProps extends InternetAddress_ConstructProps {
}
class InternetAddressMailbox {
    /* Fields of GMime-3.0.GMime.InternetAddress */
    readonly parent_object: GObject.Object
    readonly charset: string
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.InternetAddressMailbox */
    get_addr(): string
    get_idn_addr(): string
    set_addr(addr: string): void
    /* Methods of GMime-3.0.GMime.InternetAddress */
    get_charset(): string | null
    get_name(): string | null
    set_charset(charset?: string | null): void
    set_name(name: string): void
    to_string(options: FormatOptions | null, encode: boolean): string
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
    /* Virtual methods of GMime-3.0.GMime.InternetAddress */
    vfunc_to_string(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InternetAddressMailbox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InternetAddressMailbox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InternetAddressMailbox_ConstructProps)
    _init (config?: InternetAddressMailbox_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, addr: string): InternetAddressMailbox
    static $gtype: GObject.Type
}
interface Message_ConstructProps extends Object_ConstructProps {
}
class Message {
    /* Fields of GMime-3.0.GMime.Object */
    readonly parent_object: GObject.Object
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Message */
    add_mailbox(type: AddressType, name: string, addr: string): void
    foreach(callback: ObjectForeachFunc): void
    get_addresses(type: AddressType): InternetAddressList
    get_all_recipients(): InternetAddressList
    get_autocrypt_gossip_headers(now: GLib.DateTime, flags: DecryptFlags, session_key: string): AutocryptHeaderList | null
    get_autocrypt_gossip_headers_from_inner_part(now: GLib.DateTime, inner_part: Object): AutocryptHeaderList | null
    get_autocrypt_header(now: GLib.DateTime): AutocryptHeader | null
    get_bcc(): InternetAddressList
    get_body(): Object | null
    get_cc(): InternetAddressList
    get_date(): GLib.DateTime | null
    get_from(): InternetAddressList
    get_message_id(): string | null
    get_mime_part(): Object | null
    get_reply_to(): InternetAddressList
    get_sender(): InternetAddressList
    get_subject(): string | null
    get_to(): InternetAddressList
    partial_split_message(max_size: number): [ /* returnType */ Message | null, /* nparts */ number ]
    set_date(date: GLib.DateTime): void
    set_message_id(message_id: string): void
    set_mime_part(mime_part: Object): void
    set_subject(subject: string, charset: string): void
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pretty_headers: boolean): Message
    /* Function overloads */
    static new(options: ParserOptions | null, content_type: ContentType): Message
    static $gtype: GObject.Type
}
interface MessagePart_ConstructProps extends Object_ConstructProps {
}
class MessagePart {
    /* Fields of GMime-3.0.GMime.Object */
    readonly parent_object: GObject.Object
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.MessagePart */
    get_message(): Message
    set_message(message: Message): void
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessagePart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessagePart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessagePart_ConstructProps)
    _init (config?: MessagePart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subtype: string): MessagePart
    /* Function overloads */
    static new(options: ParserOptions | null, content_type: ContentType): MessagePart
    static new_with_message(subtype: string, message: Message): MessagePart
    static $gtype: GObject.Type
}
interface MessagePartial_ConstructProps extends Part_ConstructProps {
}
class MessagePartial {
    /* Fields of GMime-3.0.GMime.Part */
    readonly parent_object: Object
    readonly encoding: ContentEncoding
    readonly openpgp: OpenPGPData
    readonly content_description: string
    readonly content_location: string
    readonly content_md5: string
    readonly content: DataWrapper
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.MessagePartial */
    get_id(): string
    get_number(): number
    get_total(): number
    /* Methods of GMime-3.0.GMime.Part */
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding
    get_content(): DataWrapper
    get_content_description(): string
    get_content_encoding(): ContentEncoding
    get_content_id(): string
    get_content_location(): string
    get_content_md5(): string
    get_filename(): string
    get_openpgp_data(): OpenPGPData
    is_attachment(): boolean
    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null
    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgp_sign(userid: string): boolean
    openpgp_verify(flags: VerifyFlags): SignatureList | null
    set_content(content: DataWrapper): void
    set_content_description(description: string): void
    set_content_encoding(encoding: ContentEncoding): void
    set_content_id(content_id: string): void
    set_content_location(content_location: string): void
    set_content_md5(content_md5: string): void
    set_filename(filename: string): void
    set_openpgp_data(data: OpenPGPData): void
    verify_content_md5(): boolean
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Part */
    vfunc_set_content(content: DataWrapper): void
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MessagePartial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MessagePartial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MessagePartial_ConstructProps)
    _init (config?: MessagePartial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, number: number, total: number): MessagePartial
    /* Function overloads */
    static new(): MessagePartial
    static new(options: ParserOptions | null, content_type: ContentType): MessagePartial
    static reconstruct_message(partials: MessagePartial, num: number): Message
    static $gtype: GObject.Type
}
interface Multipart_ConstructProps extends Object_ConstructProps {
}
class Multipart {
    /* Fields of GMime-3.0.GMime.Object */
    readonly parent_object: GObject.Object
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    get_boundary(): string
    get_count(): number
    get_epilogue(): string
    get_part(index: number): Object
    get_prologue(): string
    get_subpart_from_content_id(content_id: string): Object
    index_of(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    remove_at(index: number): Object
    replace(index: number, replacement: Object): Object
    set_boundary(boundary: string): void
    set_epilogue(epilogue: string): void
    set_prologue(prologue: string): void
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Multipart */
    vfunc_add(part: Object): void
    vfunc_clear(): void
    vfunc_contains(part: Object): boolean
    vfunc_get_boundary(): string
    vfunc_get_count(): number
    vfunc_get_part(index: number): Object
    vfunc_index_of(part: Object): number
    vfunc_insert(index: number, part: Object): void
    vfunc_remove(part: Object): boolean
    vfunc_remove_at(index: number): Object
    vfunc_set_boundary(boundary: string): void
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
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
    static new(options: ParserOptions | null, content_type: ContentType): Multipart
    static new_with_subtype(subtype: string): Multipart
    static $gtype: GObject.Type
}
interface MultipartEncrypted_ConstructProps extends Multipart_ConstructProps {
}
class MultipartEncrypted {
    /* Fields of GMime-3.0.GMime.Multipart */
    readonly parent_object: Object
    readonly children: object[]
    readonly boundary: string
    readonly prologue: string
    readonly epilogue: string
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.MultipartEncrypted */
    decrypt(flags: DecryptFlags, session_key: string): [ /* returnType */ Object | null, /* result */ DecryptResult ]
    /* Methods of GMime-3.0.GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    get_boundary(): string
    get_count(): number
    get_epilogue(): string
    get_part(index: number): Object
    get_prologue(): string
    get_subpart_from_content_id(content_id: string): Object
    index_of(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    remove_at(index: number): Object
    replace(index: number, replacement: Object): Object
    set_boundary(boundary: string): void
    set_epilogue(epilogue: string): void
    set_prologue(prologue: string): void
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Multipart */
    vfunc_add(part: Object): void
    vfunc_clear(): void
    vfunc_contains(part: Object): boolean
    vfunc_get_boundary(): string
    vfunc_get_count(): number
    vfunc_get_part(index: number): Object
    vfunc_index_of(part: Object): number
    vfunc_insert(index: number, part: Object): void
    vfunc_remove(part: Object): boolean
    vfunc_remove_at(index: number): Object
    vfunc_set_boundary(boundary: string): void
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
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
    static new(options: ParserOptions | null, content_type: ContentType): MultipartEncrypted
    static encrypt(ctx: CryptoContext, entity: Object, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): MultipartEncrypted | null
    static $gtype: GObject.Type
}
interface MultipartSigned_ConstructProps extends Multipart_ConstructProps {
}
class MultipartSigned {
    /* Fields of GMime-3.0.GMime.Multipart */
    readonly parent_object: Object
    readonly children: object[]
    readonly boundary: string
    readonly prologue: string
    readonly epilogue: string
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.MultipartSigned */
    verify(flags: VerifyFlags): SignatureList | null
    /* Methods of GMime-3.0.GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    get_boundary(): string
    get_count(): number
    get_epilogue(): string
    get_part(index: number): Object
    get_prologue(): string
    get_subpart_from_content_id(content_id: string): Object
    index_of(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    remove_at(index: number): Object
    replace(index: number, replacement: Object): Object
    set_boundary(boundary: string): void
    set_epilogue(epilogue: string): void
    set_prologue(prologue: string): void
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Multipart */
    vfunc_add(part: Object): void
    vfunc_clear(): void
    vfunc_contains(part: Object): boolean
    vfunc_get_boundary(): string
    vfunc_get_count(): number
    vfunc_get_part(index: number): Object
    vfunc_index_of(part: Object): number
    vfunc_insert(index: number, part: Object): void
    vfunc_remove(part: Object): boolean
    vfunc_remove_at(index: number): Object
    vfunc_set_boundary(boundary: string): void
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
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
    static new(options: ParserOptions | null, content_type: ContentType): MultipartSigned
    static sign(ctx: CryptoContext, entity: Object, userid: string): MultipartSigned | null
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
}
class Object {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_id(): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(options: ParserOptions | null, content_type: ContentType): Object
    static new_type(options: ParserOptions | null, type: string, subtype: string): Object
    static register_type(type: string, subtype: string, object_type: GObject.Type): void
    static type_registry_init(): void
    static type_registry_shutdown(): void
    static $gtype: GObject.Type
}
interface Param_ConstructProps extends GObject.Object_ConstructProps {
}
class Param {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Param */
    get_charset(): string
    get_encoding_method(): ParamEncodingMethod
    get_lang(): string
    get_name(): string
    get_value(): string
    set_charset(charset: string): void
    set_encoding_method(method: ParamEncodingMethod): void
    set_lang(lang: string): void
    set_value(value: string): void
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
    connect(sigName: "notify", callback: (($obj: Param, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Param, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Param_ConstructProps)
    _init (config?: Param_ConstructProps): void
    static $gtype: GObject.Type
}
interface ParamList_ConstructProps extends GObject.Object_ConstructProps {
}
class ParamList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.ParamList */
    clear(): void
    encode(options: FormatOptions, fold: boolean, str: GLib.String): void
    get_parameter(name: string): Param
    get_parameter_at(index: number): Param
    length(): number
    remove(name: string): boolean
    remove_at(index: number): boolean
    set_parameter(name: string, value: string): void
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
    connect(sigName: "notify", callback: (($obj: ParamList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ParamList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ParamList_ConstructProps)
    _init (config?: ParamList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ParamList
    static parse(options: ParserOptions, str: string): ParamList
    static $gtype: GObject.Type
}
interface Parser_ConstructProps extends GObject.Object_ConstructProps {
}
class Parser {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Parser */
    construct_message(options?: ParserOptions | null): Message | null
    construct_part(options?: ParserOptions | null): Object | null
    eos(): boolean
    get_format(): Format
    get_headers_begin(): number
    get_headers_end(): number
    get_mbox_marker(): string | null
    get_mbox_marker_offset(): number
    get_persist_stream(): boolean
    get_respect_content_length(): boolean
    init_with_stream(stream: Stream): void
    set_format(format: Format): void
    set_persist_stream(persist: boolean): void
    set_respect_content_length(respect_content_length: boolean): void
    tell(): number
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
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static new_with_stream(stream: Stream): Parser
    static $gtype: GObject.Type
}
interface Part_ConstructProps extends Object_ConstructProps {
}
class Part {
    /* Fields of GMime-3.0.GMime.Object */
    readonly parent_object: GObject.Object
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Part */
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding
    get_content(): DataWrapper
    get_content_description(): string
    get_content_encoding(): ContentEncoding
    get_content_id(): string
    get_content_location(): string
    get_content_md5(): string
    get_filename(): string
    get_openpgp_data(): OpenPGPData
    is_attachment(): boolean
    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null
    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgp_sign(userid: string): boolean
    openpgp_verify(flags: VerifyFlags): SignatureList | null
    set_content(content: DataWrapper): void
    set_content_description(description: string): void
    set_content_encoding(encoding: ContentEncoding): void
    set_content_id(content_id: string): void
    set_content_location(content_location: string): void
    set_content_md5(content_md5: string): void
    set_filename(filename: string): void
    set_openpgp_data(data: OpenPGPData): void
    verify_content_md5(): boolean
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Part */
    vfunc_set_content(content: DataWrapper): void
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Part, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Part, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Part_ConstructProps)
    _init (config?: Part_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Part
    /* Function overloads */
    static new(options: ParserOptions | null, content_type: ContentType): Part
    static new_with_type(type: string, subtype: string): Part
    static $gtype: GObject.Type
}
interface Pkcs7Context_ConstructProps extends CryptoContext_ConstructProps {
}
class Pkcs7Context {
    /* Fields of GMime-3.0.GMime.CryptoContext */
    readonly parent_object: GObject.Object
    readonly request_passwd: PasswordRequestFunc
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.CryptoContext */
    decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    digest_id(name: string): DigestAlgo
    digest_name(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    export_keys(keys: string, ostream: Stream): number
    get_encryption_protocol(): string | null
    get_key_exchange_protocol(): string | null
    get_signature_protocol(): string | null
    import_keys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
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
    /* Virtual methods of GMime-3.0.GMime.CryptoContext */
    vfunc_decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult
    vfunc_digest_id(name: string): DigestAlgo
    vfunc_digest_name(digest: DigestAlgo): string | null
    vfunc_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    vfunc_export_keys(keys: string, ostream: Stream): number
    vfunc_get_encryption_protocol(): string | null
    vfunc_get_key_exchange_protocol(): string | null
    vfunc_get_signature_protocol(): string | null
    vfunc_import_keys(istream: Stream): number
    vfunc_sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    vfunc_verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pkcs7Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pkcs7Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pkcs7Context_ConstructProps)
    _init (config?: Pkcs7Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Pkcs7Context
    /* Function overloads */
    static new(protocol: string): Pkcs7Context
    static $gtype: GObject.Type
}
interface Signature_ConstructProps extends GObject.Object_ConstructProps {
}
class Signature {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Signature */
    get_certificate(): Certificate
    get_created(): number
    get_created64(): number
    get_expires(): number
    get_expires64(): number
    get_status(): SignatureStatus
    set_certificate(cert: Certificate): void
    set_created(created: number): void
    set_expires(expires: number): void
    set_status(status: SignatureStatus): void
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
    connect(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Signature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Signature_ConstructProps)
    _init (config?: Signature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Signature
    static $gtype: GObject.Type
}
interface SignatureList_ConstructProps extends GObject.Object_ConstructProps {
}
class SignatureList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.SignatureList */
    add(sig: Signature): number
    clear(): void
    contains(sig: Signature): boolean
    get_signature(index: number): Signature
    index_of(sig: Signature): number
    insert(index: number, sig: Signature): void
    length(): number
    remove(sig: Signature): boolean
    remove_at(index: number): boolean
    set_signature(index: number, sig: Signature): void
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
    connect(sigName: "notify", callback: (($obj: SignatureList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SignatureList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SignatureList_ConstructProps)
    _init (config?: SignatureList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SignatureList
    static $gtype: GObject.Type
}
interface Stream_ConstructProps extends GObject.Object_ConstructProps {
}
class Stream {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
interface StreamBuffer_ConstructProps extends Stream_ConstructProps {
}
class StreamBuffer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamBuffer_ConstructProps)
    _init (config?: StreamBuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(source: Stream, mode: StreamBufferMode): StreamBuffer
    static $gtype: GObject.Type
}
interface StreamCat_ConstructProps extends Stream_ConstructProps {
}
class StreamCat {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamCat */
    add_source(source: Stream): number
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamCat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamCat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamCat_ConstructProps)
    _init (config?: StreamCat_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamCat
    static $gtype: GObject.Type
}
interface StreamFile_ConstructProps extends Stream_ConstructProps {
}
class StreamFile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamFile */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFile_ConstructProps)
    _init (config?: StreamFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fp?: object | null): StreamFile
    static new_with_bounds(fp: object | null, start: number, end: number): StreamFile
    static open(path: string, mode: string): Stream
    static $gtype: GObject.Type
}
interface StreamFilter_ConstructProps extends Stream_ConstructProps {
}
class StreamFilter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamFilter */
    add(filter: Filter): number
    get_owner(): boolean
    remove(id: number): void
    set_owner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFilter_ConstructProps)
    _init (config?: StreamFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream: Stream): StreamFilter
    static $gtype: GObject.Type
}
interface StreamFs_ConstructProps extends Stream_ConstructProps {
}
class StreamFs {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamFs */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamFs_ConstructProps)
    _init (config?: StreamFs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number): StreamFs
    static new_with_bounds(fd: number, start: number, end: number): StreamFs
    static open(path: string, flags: number, mode: number): Stream
    static $gtype: GObject.Type
}
interface StreamGIO_ConstructProps extends Stream_ConstructProps {
}
class StreamGIO {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamGIO */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamGIO, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamGIO, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamGIO_ConstructProps)
    _init (config?: StreamGIO_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): StreamGIO
    static new_with_bounds(file: Gio.File, start: number, end: number): StreamGIO
    static $gtype: GObject.Type
}
interface StreamMem_ConstructProps extends Stream_ConstructProps {
}
class StreamMem {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamMem */
    get_byte_array(): Uint8Array
    get_owner(): boolean
    set_byte_array(array: Uint8Array): void
    set_owner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamMem_ConstructProps)
    _init (config?: StreamMem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamMem
    static new_with_buffer(buffer: Uint8Array): StreamMem
    static new_with_byte_array(array: Uint8Array): StreamMem
    static $gtype: GObject.Type
}
interface StreamMmap_ConstructProps extends Stream_ConstructProps {
}
class StreamMmap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamMmap */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamMmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamMmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamMmap_ConstructProps)
    _init (config?: StreamMmap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, prot: number, flags: number): StreamMmap
    static new_with_bounds(fd: number, prot: number, flags: number, start: number, end: number): StreamMmap
    static $gtype: GObject.Type
}
interface StreamNull_ConstructProps extends Stream_ConstructProps {
}
class StreamNull {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamNull */
    get_count_newlines(): boolean
    set_count_newlines(count: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamNull_ConstructProps)
    _init (config?: StreamNull_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamNull
    static $gtype: GObject.Type
}
interface StreamPipe_ConstructProps extends Stream_ConstructProps {
}
class StreamPipe {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamPipe */
    get_owner(): boolean
    set_owner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    buffer_gets(buf: Uint8Array): number
    buffer_readln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    set_bounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    write_string(str: string): number
    write_to_stream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
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
    /* Virtual methods of GMime-3.0.GMime.Stream */
    vfunc_close(): number
    vfunc_eos(): boolean
    vfunc_flush(): number
    vfunc_length(): number
    vfunc_read(buf: Uint8Array): number
    vfunc_reset(): number
    vfunc_seek(offset: number, whence: SeekWhence): number
    vfunc_substream(start: number, end: number): Stream
    vfunc_tell(): number
    vfunc_write(buf: Uint8Array): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamPipe, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamPipe, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamPipe_ConstructProps)
    _init (config?: StreamPipe_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number): StreamPipe
    static $gtype: GObject.Type
}
interface TextPart_ConstructProps extends Part_ConstructProps {
}
class TextPart {
    /* Fields of GMime-3.0.GMime.Part */
    readonly parent_object: Object
    readonly encoding: ContentEncoding
    readonly openpgp: OpenPGPData
    readonly content_description: string
    readonly content_location: string
    readonly content_md5: string
    readonly content: DataWrapper
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly content_type: ContentType
    readonly headers: HeaderList
    readonly content_id: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.TextPart */
    get_charset(): string
    get_text(): string
    set_charset(charset: string): void
    set_text(text: string): void
    /* Methods of GMime-3.0.GMime.Part */
    get_best_content_encoding(constraint: EncodingConstraint): ContentEncoding
    get_content(): DataWrapper
    get_content_description(): string
    get_content_encoding(): ContentEncoding
    get_content_id(): string
    get_content_location(): string
    get_content_md5(): string
    get_filename(): string
    get_openpgp_data(): OpenPGPData
    is_attachment(): boolean
    openpgp_decrypt(flags: DecryptFlags, session_key?: string | null): DecryptResult | null
    openpgp_encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgp_sign(userid: string): boolean
    openpgp_verify(flags: VerifyFlags): SignatureList | null
    set_content(content: DataWrapper): void
    set_content_description(description: string): void
    set_content_encoding(encoding: ContentEncoding): void
    set_content_id(content_id: string): void
    set_content_location(content_location: string): void
    set_content_md5(content_md5: string): void
    set_filename(filename: string): void
    set_openpgp_data(data: OpenPGPData): void
    verify_content_md5(): boolean
    /* Methods of GMime-3.0.GMime.Object */
    append_header(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    get_content_disposition(): ContentDisposition
    get_content_disposition_parameter(name: string): string
    get_content_type(): ContentType
    get_content_type_parameter(name: string): string
    get_disposition(): string
    get_header(header: string): string
    get_header_list(): HeaderList
    get_headers(options?: FormatOptions | null): string
    prepend_header(header: string, value: string, charset: string): void
    remove_header(header: string): boolean
    set_content_disposition(disposition: ContentDisposition): void
    set_content_disposition_parameter(name: string, value: string): void
    set_content_id(content_id: string): void
    set_content_type(content_type: ContentType): void
    set_content_type_parameter(name: string, value: string): void
    set_disposition(disposition: string): void
    set_header(header: string, value: string, charset: string): void
    to_string(options?: FormatOptions | null): string
    write_content_to_stream(options: FormatOptions | null, stream: Stream): number
    write_to_stream(options: FormatOptions | null, stream: Stream): number
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
    /* Virtual methods of GMime-3.0.GMime.Part */
    vfunc_set_content(content: DataWrapper): void
    /* Virtual methods of GMime-3.0.GMime.Object */
    vfunc_encode(constraint: EncodingConstraint): void
    vfunc_get_headers(options?: FormatOptions | null): string
    vfunc_header_added(header: Header): void
    vfunc_header_changed(header: Header): void
    vfunc_header_removed(header: Header): void
    vfunc_headers_cleared(): void
    vfunc_set_content_type(content_type: ContentType): void
    vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TextPart, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TextPart, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TextPart_ConstructProps)
    _init (config?: TextPart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextPart
    /* Function overloads */
    static new(): TextPart
    static new(options: ParserOptions | null, content_type: ContentType): TextPart
    static new_with_subtype(subtype: string): TextPart
    static $gtype: GObject.Type
}
abstract class ApplicationPkcs7MimeClass {
    /* Fields of GMime-3.0.GMime.ApplicationPkcs7MimeClass */
    readonly parent_class: PartClass
    static name: string
}
abstract class AutocryptHeaderClass {
    /* Fields of GMime-3.0.GMime.AutocryptHeaderClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class AutocryptHeaderListClass {
    /* Fields of GMime-3.0.GMime.AutocryptHeaderListClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class CertificateClass {
    /* Fields of GMime-3.0.GMime.CertificateClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class CertificateListClass {
    /* Fields of GMime-3.0.GMime.CertificateListClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class Charset {
    /* Fields of GMime-3.0.GMime.Charset */
    readonly mask: number
    readonly level: number
    /* Methods of GMime-3.0.GMime.Charset */
    best_name(): string | null
    can_encode(charset: string, text: string, len: number): boolean
    init(): void
    step(inbuf: string, inlen: number): void
    /* Static methods and pseudo-constructors */
    static best(inbuf: string, inlen: number): string | null
    static canon_name(charset: string): string
    static iconv_name(charset: string): string
    static iso_to_windows(isocharset: string): string
    static language(charset: string): string | null
    static locale_name(): string
    static map_init(): void
    static map_shutdown(): void
    static name(charset: string): string
}
abstract class ContentDispositionClass {
    /* Fields of GMime-3.0.GMime.ContentDispositionClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ContentTypeClass {
    /* Fields of GMime-3.0.GMime.ContentTypeClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class CryptoContextClass {
    /* Fields of GMime-3.0.GMime.CryptoContextClass */
    readonly parent_class: GObject.ObjectClass
    readonly digest_id: (ctx: CryptoContext, name: string) => DigestAlgo
    readonly digest_name: (ctx: CryptoContext, digest: DigestAlgo) => string | null
    readonly get_signature_protocol: (ctx: CryptoContext) => string | null
    readonly get_encryption_protocol: (ctx: CryptoContext) => string | null
    readonly get_key_exchange_protocol: (ctx: CryptoContext) => string | null
    readonly sign: (ctx: CryptoContext, detach: boolean, userid: string, istream: Stream, ostream: Stream) => number
    readonly verify: (ctx: CryptoContext, flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null) => SignatureList | null
    readonly encrypt: (ctx: CryptoContext, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream) => number
    readonly decrypt: (ctx: CryptoContext, flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream) => DecryptResult
    readonly import_keys: (ctx: CryptoContext, istream: Stream) => number
    readonly export_keys: (ctx: CryptoContext, keys: string, ostream: Stream) => number
    static name: string
}
abstract class DataWrapperClass {
    /* Fields of GMime-3.0.GMime.DataWrapperClass */
    readonly parent_class: GObject.ObjectClass
    readonly write_to_stream: (wrapper: DataWrapper, stream: Stream) => number
    static name: string
}
abstract class DecryptResultClass {
    /* Fields of GMime-3.0.GMime.DecryptResultClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class Encoding {
    /* Fields of GMime-3.0.GMime.Encoding */
    readonly encoding: ContentEncoding
    readonly uubuf: Uint8Array
    readonly encode: boolean
    readonly save: number
    readonly state: number
    /* Methods of GMime-3.0.GMime.Encoding */
    flush(inbuf: string, inlen: number, outbuf: string): number
    init_decode(encoding: ContentEncoding): void
    init_encode(encoding: ContentEncoding): void
    outlen(inlen: number): number
    reset(): void
    step(inbuf: string, inlen: number, outbuf: string): number
    static name: string
    /* Static methods and pseudo-constructors */
    static base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static uuencode_close(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
    static uuencode_step(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
}
abstract class FilterBasicClass {
    /* Fields of GMime-3.0.GMime.FilterBasicClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterBestClass {
    /* Fields of GMime-3.0.GMime.FilterBestClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterCharsetClass {
    /* Fields of GMime-3.0.GMime.FilterCharsetClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterChecksumClass {
    /* Fields of GMime-3.0.GMime.FilterChecksumClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterClass {
    /* Fields of GMime-3.0.GMime.FilterClass */
    readonly parent_class: GObject.ObjectClass
    readonly copy: (filter: Filter) => Filter
    readonly filter: (filter: Filter, inbuf: Uint8Array, prespace: number) => [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    readonly complete: (filter: Filter, inbuf: Uint8Array, prespace: number) => [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    readonly reset: (filter: Filter) => void
    static name: string
}
abstract class FilterDos2UnixClass {
    /* Fields of GMime-3.0.GMime.FilterDos2UnixClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterEnrichedClass {
    /* Fields of GMime-3.0.GMime.FilterEnrichedClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterFromClass {
    /* Fields of GMime-3.0.GMime.FilterFromClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterGZipClass {
    /* Fields of GMime-3.0.GMime.FilterGZipClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterHTMLClass {
    /* Fields of GMime-3.0.GMime.FilterHTMLClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterOpenPGPClass {
    /* Fields of GMime-3.0.GMime.FilterOpenPGPClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterSmtpDataClass {
    /* Fields of GMime-3.0.GMime.FilterSmtpDataClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterStripClass {
    /* Fields of GMime-3.0.GMime.FilterStripClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterUnix2DosClass {
    /* Fields of GMime-3.0.GMime.FilterUnix2DosClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterWindowsClass {
    /* Fields of GMime-3.0.GMime.FilterWindowsClass */
    readonly parent_class: FilterClass
    static name: string
}
abstract class FilterYencClass {
    /* Fields of GMime-3.0.GMime.FilterYencClass */
    readonly parent_class: FilterClass
    static name: string
}
class FormatOptions {
    /* Methods of GMime-3.0.GMime.FormatOptions */
    add_hidden_header(header: string): void
    clear_hidden_headers(): void
    clone(): FormatOptions
    create_newline_filter(ensure_newline: boolean): Filter
    free(): void
    get_newline(): string
    get_newline_format(): NewLineFormat
    get_param_encoding_method(): ParamEncodingMethod
    is_hidden_header(header: string): boolean
    remove_hidden_header(header: string): void
    set_newline_format(newline: NewLineFormat): void
    set_param_encoding_method(method: ParamEncodingMethod): void
    static name: string
    static new(): FormatOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FormatOptions
    static get_default(): FormatOptions
}
abstract class GpgContextClass {
    static name: string
}
abstract class HeaderClass {
    /* Fields of GMime-3.0.GMime.HeaderClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class HeaderListClass {
    /* Fields of GMime-3.0.GMime.HeaderListClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class InternetAddressClass {
    /* Fields of GMime-3.0.GMime.InternetAddressClass */
    readonly parent_class: GObject.ObjectClass
    readonly to_string: (ia: InternetAddress, options: FormatOptions, flags: number, linelen: number, str: GLib.String) => void
    static name: string
}
abstract class InternetAddressGroupClass {
    /* Fields of GMime-3.0.GMime.InternetAddressGroupClass */
    readonly parent_class: InternetAddressClass
    static name: string
}
abstract class InternetAddressListClass {
    /* Fields of GMime-3.0.GMime.InternetAddressListClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class InternetAddressMailboxClass {
    /* Fields of GMime-3.0.GMime.InternetAddressMailboxClass */
    readonly parent_class: InternetAddressClass
    static name: string
}
abstract class MessageClass {
    /* Fields of GMime-3.0.GMime.MessageClass */
    readonly parent_class: ObjectClass
    static name: string
}
abstract class MessagePartClass {
    /* Fields of GMime-3.0.GMime.MessagePartClass */
    readonly parent_class: ObjectClass
    static name: string
}
abstract class MessagePartialClass {
    /* Fields of GMime-3.0.GMime.MessagePartialClass */
    readonly parent_class: PartClass
    static name: string
}
abstract class MultipartClass {
    /* Fields of GMime-3.0.GMime.MultipartClass */
    readonly parent_class: ObjectClass
    readonly clear: (multipart: Multipart) => void
    readonly add: (multipart: Multipart, part: Object) => void
    readonly insert: (multipart: Multipart, index: number, part: Object) => void
    readonly remove: (multipart: Multipart, part: Object) => boolean
    readonly remove_at: (multipart: Multipart, index: number) => Object
    readonly get_part: (multipart: Multipart, index: number) => Object
    readonly contains: (multipart: Multipart, part: Object) => boolean
    readonly index_of: (multipart: Multipart, part: Object) => number
    readonly get_count: (multipart: Multipart) => number
    readonly set_boundary: (multipart: Multipart, boundary: string) => void
    readonly get_boundary: (multipart: Multipart) => string
    static name: string
}
abstract class MultipartEncryptedClass {
    /* Fields of GMime-3.0.GMime.MultipartEncryptedClass */
    readonly parent_class: MultipartClass
    static name: string
}
abstract class MultipartSignedClass {
    /* Fields of GMime-3.0.GMime.MultipartSignedClass */
    readonly parent_class: MultipartClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of GMime-3.0.GMime.ObjectClass */
    readonly parent_class: GObject.ObjectClass
    readonly header_added: (object: Object, header: Header) => void
    readonly header_changed: (object: Object, header: Header) => void
    readonly header_removed: (object: Object, header: Header) => void
    readonly headers_cleared: (object: Object) => void
    readonly set_content_type: (object: Object, content_type: ContentType) => void
    readonly get_headers: (object: Object, options?: FormatOptions | null) => string
    readonly write_to_stream: (object: Object, options: FormatOptions, content_only: boolean, stream: Stream) => number
    readonly encode: (object: Object, constraint: EncodingConstraint) => void
    static name: string
}
class OpenPGPMarker {
    /* Fields of GMime-3.0.GMime.OpenPGPMarker */
    readonly marker: string
    readonly len: number
    readonly before: OpenPGPState
    readonly after: OpenPGPState
    readonly is_end_marker: boolean
    static name: string
}
abstract class ParamClass {
    /* Fields of GMime-3.0.GMime.ParamClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ParamListClass {
    /* Fields of GMime-3.0.GMime.ParamListClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ParserClass {
    /* Fields of GMime-3.0.GMime.ParserClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ParserOptions {
    /* Methods of GMime-3.0.GMime.ParserOptions */
    clone(): ParserOptions
    free(): void
    get_address_compliance_mode(): RfcComplianceMode
    get_allow_addresses_without_domain(): boolean
    get_fallback_charsets(): string[]
    get_parameter_compliance_mode(): RfcComplianceMode
    get_rfc2047_compliance_mode(): RfcComplianceMode
    set_address_compliance_mode(mode: RfcComplianceMode): void
    set_allow_addresses_without_domain(allow: boolean): void
    set_fallback_charsets(charsets: string): void
    set_parameter_compliance_mode(mode: RfcComplianceMode): void
    set_rfc2047_compliance_mode(mode: RfcComplianceMode): void
    static name: string
    static new(): ParserOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParserOptions
    static get_default(): ParserOptions
}
abstract class PartClass {
    /* Fields of GMime-3.0.GMime.PartClass */
    readonly parent_class: ObjectClass
    readonly set_content: (mime_part: Part, content: DataWrapper) => void
    static name: string
}
class PartIter {
    /* Methods of GMime-3.0.GMime.PartIter */
    clone(): PartIter
    free(): void
    get_current(): Object
    get_parent(): Object
    get_path(): string
    get_toplevel(): Object
    is_valid(): boolean
    jump_to(path: string): boolean
    next(): boolean
    prev(): boolean
    remove(): boolean
    replace(replacement: Object): boolean
    reset(): void
    static name: string
    static new(toplevel: Object): PartIter
    constructor(toplevel: Object)
    /* Static methods and pseudo-constructors */
    static new(toplevel: Object): PartIter
}
abstract class Pkcs7ContextClass {
    static name: string
}
class References {
    /* Fields of GMime-3.0.GMime.References */
    readonly array: object[]
    /* Methods of GMime-3.0.GMime.References */
    append(msgid: string): void
    clear(): void
    copy(): References
    free(): void
    get_message_id(index: number): string
    length(): number
    set_message_id(index: number, msgid: string): void
    static name: string
    static new(): References
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): References
    static parse(options: ParserOptions | null, text: string): References
}
abstract class SignatureClass {
    /* Fields of GMime-3.0.GMime.SignatureClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class SignatureListClass {
    /* Fields of GMime-3.0.GMime.SignatureListClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class StreamBufferClass {
    /* Fields of GMime-3.0.GMime.StreamBufferClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class StreamCatClass {
    /* Fields of GMime-3.0.GMime.StreamCatClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class StreamClass {
    /* Fields of GMime-3.0.GMime.StreamClass */
    readonly parent_class: GObject.ObjectClass
    readonly read: (stream: Stream, buf: Uint8Array) => number
    readonly write: (stream: Stream, buf: Uint8Array) => number
    readonly flush: (stream: Stream) => number
    readonly close: (stream: Stream) => number
    readonly eos: (stream: Stream) => boolean
    readonly reset: (stream: Stream) => number
    readonly seek: (stream: Stream, offset: number, whence: SeekWhence) => number
    readonly tell: (stream: Stream) => number
    readonly length: (stream: Stream) => number
    readonly substream: (stream: Stream, start: number, end: number) => Stream
    static name: string
}
abstract class StreamFileClass {
    /* Fields of GMime-3.0.GMime.StreamFileClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class StreamFilterClass {
    /* Fields of GMime-3.0.GMime.StreamFilterClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class StreamFsClass {
    /* Fields of GMime-3.0.GMime.StreamFsClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class StreamGIOClass {
    /* Fields of GMime-3.0.GMime.StreamGIOClass */
    readonly parent_class: StreamClass
    static name: string
}
class StreamIOVector {
    /* Fields of GMime-3.0.GMime.StreamIOVector */
    readonly data: object
    readonly len: number
    static name: string
}
abstract class StreamMemClass {
    /* Fields of GMime-3.0.GMime.StreamMemClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class StreamMmapClass {
    /* Fields of GMime-3.0.GMime.StreamMmapClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class StreamNullClass {
    /* Fields of GMime-3.0.GMime.StreamNullClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class StreamPipeClass {
    /* Fields of GMime-3.0.GMime.StreamPipeClass */
    readonly parent_class: StreamClass
    static name: string
}
abstract class TextPartClass {
    /* Fields of GMime-3.0.GMime.TextPartClass */
    readonly parent_class: PartClass
    static name: string
}
}
export default GMime;