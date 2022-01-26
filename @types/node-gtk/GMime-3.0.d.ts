/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GMime-3.0
 */

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
function charsetBest(inbuf: string, inlen: number): string | null
function charsetCanonName(charset: string): string
function charsetIconvName(charset: string): string
function charsetIsoToWindows(isocharset: string): string
function charsetLanguage(charset: string): string | null
function charsetLocaleName(): string
function charsetMapInit(): void
function charsetMapShutdown(): void
function charsetName(charset: string): string
function checkVersion(major: number, minor: number, micro: number): boolean
function contentEncodingFromString(str: string): ContentEncoding
function contentEncodingToString(encoding: ContentEncoding): string
function encodingBase64DecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encodingBase64EncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encodingBase64EncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encodingQuotedDecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encodingQuotedEncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encodingQuotedEncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encodingUudecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
function encodingUuencodeClose(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
function encodingUuencodeStep(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
function formatOptionsGetDefault(): FormatOptions
function iconvLocaleToUtf8(str: string): string
function iconvLocaleToUtf8Length(str: string, n: number): string
function iconvUtf8ToLocale(str: string): string
function iconvUtf8ToLocaleLength(str: string, n: number): string
function init(): void
function localeCharset(): string
function localeLanguage(): string | null
function parserOptionsGetDefault(): ParserOptions
function referencesParse(options: ParserOptions | null, text: string): References
function shutdown(): void
function utilsBestEncoding(text: Uint8Array): ContentEncoding
function utilsDecode8bit(options: ParserOptions | null, text: Uint8Array): string
function utilsDecodeMessageId(messageId: string): string
function utilsGenerateMessageId(fqdn: string): string
function utilsHeaderDecodeDate(str: string): GLib.DateTime | null
function utilsHeaderDecodePhrase(options: ParserOptions | null, phrase: string): string
function utilsHeaderDecodeText(options: ParserOptions | null, text: string): string
function utilsHeaderEncodePhrase(options: FormatOptions | null, phrase: string, charset?: string | null): string
function utilsHeaderEncodeText(options: FormatOptions | null, text: string, charset?: string | null): string
function utilsHeaderFormatDate(date: GLib.DateTime): string
function utilsHeaderUnfold(value: string): string
function utilsQuoteString(str: string): string
function utilsStructuredHeaderFold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
function utilsTextIs8bit(text: Uint8Array): boolean
function utilsUnquoteString(str: string): void
function utilsUnstructuredHeaderFold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
function ydecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
function yencodeClose(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
function yencodeStep(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
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
    (ctx: CryptoContext, userId: string, prompt: string, reprompt: boolean, response: Stream): boolean
}
interface ApplicationPkcs7Mime_ConstructProps extends Part_ConstructProps {
}
class ApplicationPkcs7Mime {
    /* Fields of GMime-3.0.GMime.Part */
    readonly parentObject: Object
    readonly encoding: ContentEncoding
    readonly openpgp: OpenPGPData
    readonly contentDescription: string
    readonly contentLocation: string
    readonly contentMd5: string
    readonly content: DataWrapper
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.ApplicationPkcs7Mime */
    decrypt(flags: DecryptFlags, sessionKey: string, result: DecryptResult): Object | null
    getSmimeType(): SecureMimeType
    verify(flags: VerifyFlags): [ /* returnType */ SignatureList | null, /* entity */ Object ]
    /* Methods of GMime-3.0.GMime.Part */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    getContent(): DataWrapper
    getContentDescription(): string
    getContentEncoding(): ContentEncoding
    getContentId(): string
    getContentLocation(): string
    getContentMd5(): string
    getFilename(): string
    getOpenpgpData(): OpenPGPData
    isAttachment(): boolean
    openpgpDecrypt(flags: DecryptFlags, sessionKey?: string | null): DecryptResult | null
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgpSign(userid: string): boolean
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    setContent(content: DataWrapper): void
    setContentDescription(description: string): void
    setContentEncoding(encoding: ContentEncoding): void
    setContentId(contentId: string): void
    setContentLocation(contentLocation: string): void
    setContentMd5(contentMd5: string): void
    setFilename(filename: string): void
    setOpenpgpData(data: OpenPGPData): void
    verifyContentMd5(): boolean
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: ApplicationPkcs7Mime_ConstructProps)
    _init (config?: ApplicationPkcs7Mime_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: SecureMimeType): ApplicationPkcs7Mime
    /* Function overloads */
    static new(): ApplicationPkcs7Mime
    static new(options: ParserOptions | null, contentType: ContentType): ApplicationPkcs7Mime
    static encrypt(entity: Object, flags: EncryptFlags, recipients: string[]): ApplicationPkcs7Mime | null
    static sign(entity: Object, userid: string): ApplicationPkcs7Mime | null
    static $gtype: GObject.Type
}
interface AutocryptHeader_ConstructProps extends GObject.Object_ConstructProps {
}
class AutocryptHeader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.AutocryptHeader */
    clone(src: AutocryptHeader): void
    compare(ah2: AutocryptHeader): number
    getAddress(): InternetAddressMailbox
    getAddressAsString(): string
    getEffectiveDate(): GLib.DateTime
    getKeydata(): any
    getPreferEncrypt(): AutocryptPreferEncrypt
    isComplete(): boolean
    setAddress(address: InternetAddressMailbox): void
    setAddressFromString(address: string): void
    setEffectiveDate(effectiveDate: GLib.DateTime): void
    setKeydata(data: any): void
    setPreferEncrypt(pref: AutocryptPreferEncrypt): void
    toString(gossip: boolean): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: AutocryptHeader_ConstructProps)
    _init (config?: AutocryptHeader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AutocryptHeader
    static newFromString(string: string): AutocryptHeader
    static $gtype: GObject.Type
}
interface AutocryptHeaderList_ConstructProps extends GObject.Object_ConstructProps {
}
class AutocryptHeaderList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.AutocryptHeaderList */
    add(header: AutocryptHeader): void
    addMissingAddresses(addresses: InternetAddressList): number
    getCount(): number
    getHeaderAt(index: number): AutocryptHeader
    getHeaderForAddress(mailbox: InternetAddressMailbox): AutocryptHeader
    removeIncomplete(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Certificate */
    getCreated(): number
    getCreated64(): number
    getDigestAlgo(): DigestAlgo
    getEmail(): string
    getExpires(): number
    getExpires64(): number
    getFingerprint(): string
    getIdValidity(): Validity
    getIssuerName(): string
    getIssuerSerial(): string
    getKeyId(): string
    getName(): string
    getPubkeyAlgo(): PubKeyAlgo
    getTrust(): Trust
    getUserId(): string
    setCreated(created: number): void
    setDigestAlgo(algo: DigestAlgo): void
    setEmail(email: string): void
    setExpires(expires: number): void
    setFingerprint(fingerprint: string): void
    setIdValidity(validity: Validity): void
    setIssuerName(issuerName: string): void
    setIssuerSerial(issuerSerial: string): void
    setKeyId(keyId: string): void
    setName(name: string): void
    setPubkeyAlgo(algo: PubKeyAlgo): void
    setTrust(trust: Trust): void
    setUserId(userId: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.CertificateList */
    add(cert: Certificate): number
    clear(): void
    contains(cert: Certificate): boolean
    getCertificate(index: number): Certificate
    indexOf(cert: Certificate): number
    insert(index: number, cert: Certificate): void
    length(): number
    remove(cert: Certificate): boolean
    removeAt(index: number): boolean
    setCertificate(index: number, cert: Certificate): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.ContentDisposition */
    encode(options?: FormatOptions | null): string
    getDisposition(): string
    getParameter(name: string): string
    getParameters(): ParamList
    isAttachment(): boolean
    setDisposition(value: string): void
    setParameter(name: string, value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.ContentType */
    encode(options?: FormatOptions | null): string
    getMediaSubtype(): string
    getMediaType(): string
    getMimeType(): string
    getParameter(name: string): string
    getParameters(): ParamList
    isType(type: string, subtype: string): boolean
    setMediaSubtype(subtype: string): void
    setMediaType(type: string): void
    setParameter(name: string, value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.CryptoContext */
    decrypt(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    digestId(name: string): DigestAlgo
    digestName(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    exportKeys(keys: string, ostream: Stream): number
    getEncryptionProtocol(): string | null
    getKeyExchangeProtocol(): string | null
    getSignatureProtocol(): string | null
    importKeys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.DataWrapper */
    getEncoding(): ContentEncoding
    getStream(): Stream
    setEncoding(encoding: ContentEncoding): void
    setStream(stream: Stream): void
    writeToStream(stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    static newWithStream(stream: Stream, encoding: ContentEncoding): DataWrapper
    static $gtype: GObject.Type
}
interface DecryptResult_ConstructProps extends GObject.Object_ConstructProps {
}
class DecryptResult {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.DecryptResult */
    getCipher(): CipherAlgo
    getMdc(): DigestAlgo
    getRecipients(): CertificateList
    getSessionKey(): string | null
    getSignatures(): SignatureList | null
    setCipher(cipher: CipherAlgo): void
    setMdc(mdc: DigestAlgo): void
    setRecipients(recipients: CertificateList): void
    setSessionKey(sessionKey?: string | null): void
    setSignatures(signatures: SignatureList): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static $gtype: GObject.Type
}
interface FilterBasic_ConstructProps extends Filter_ConstructProps {
}
class FilterBasic {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.FilterBest */
    charset(): string
    encoding(constraint: EncodingConstraint): ContentEncoding
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: FilterCharset_ConstructProps)
    _init (config?: FilterCharset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fromCharset: string, toCharset: string): FilterCharset
    static $gtype: GObject.Type
}
interface FilterChecksum_ConstructProps extends Filter_ConstructProps {
}
class FilterChecksum {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.FilterChecksum */
    getDigest(digest: number, len: number): number
    getString(): string
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: FilterDos2Unix_ConstructProps)
    _init (config?: FilterDos2Unix_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ensureNewline: boolean): FilterDos2Unix
    static $gtype: GObject.Type
}
interface FilterEnriched_ConstructProps extends Filter_ConstructProps {
}
class FilterEnriched {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.FilterGZip */
    getComment(): string
    getFilename(): string
    setComment(comment: string): void
    setFilename(filename: string): void
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.FilterOpenPGP */
    getBeginOffset(): number
    getDataType(): OpenPGPData
    getEndOffset(): number
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: FilterUnix2Dos_ConstructProps)
    _init (config?: FilterUnix2Dos_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ensureNewline: boolean): FilterUnix2Dos
    static $gtype: GObject.Type
}
interface FilterWindows_ConstructProps extends Filter_ConstructProps {
}
class FilterWindows {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.FilterWindows */
    isWindowsCharset(): boolean
    realCharset(): string
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: FilterWindows_ConstructProps)
    _init (config?: FilterWindows_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(claimedCharset: string): FilterWindows
    static $gtype: GObject.Type
}
interface FilterYenc_ConstructProps extends Filter_ConstructProps {
}
class FilterYenc {
    /* Fields of GMime-3.0.GMime.Filter */
    readonly parentObject: GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.FilterYenc */
    getCrc(): number
    getPcrc(): number
    setCrc(crc: number): void
    setState(state: number): void
    /* Methods of GMime-3.0.GMime.Filter */
    backup(data: Uint8Array): void
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    copy(): Filter
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset(): void
    setSize(size: number, keep: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
    readonly requestPasswd: PasswordRequestFunc
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.CryptoContext */
    decrypt(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    digestId(name: string): DigestAlgo
    digestName(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    exportKeys(keys: string, ostream: Stream): number
    getEncryptionProtocol(): string | null
    getKeyExchangeProtocol(): string | null
    getSignatureProtocol(): string | null
    importKeys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Header */
    formatAddrlist(options: FormatOptions | null, value: string, charset: string): string
    formatContentDisposition(options: FormatOptions | null, value: string, charset: string): string
    formatContentType(options: FormatOptions | null, value: string, charset: string): string
    formatDefault(options: FormatOptions | null, value: string, charset: string): string
    formatMessageId(options: FormatOptions | null, value: string, charset: string): string
    formatReceived(options: FormatOptions | null, value: string, charset: string): string
    formatReferences(options: FormatOptions | null, value: string, charset: string): string
    getName(): string
    getOffset(): number
    getRawName(): string
    getRawValue(): string
    getValue(): string
    setRawValue(rawValue: string): void
    setValue(options: FormatOptions | null, value: string, charset: string): void
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Header_ConstructProps)
    _init (config?: Header_ConstructProps): void
    static $gtype: GObject.Type
}
interface HeaderList_ConstructProps extends GObject.Object_ConstructProps {
}
class HeaderList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.HeaderList */
    append(name: string, value: string, charset: string): void
    clear(): void
    contains(name: string): boolean
    getCount(): number
    getHeader(name: string): Header
    getHeaderAt(index: number): Header
    prepend(name: string, value: string, charset: string): void
    remove(name: string): boolean
    removeAt(index: number): void
    set(name: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.InternetAddress */
    getCharset(): string | null
    getName(): string | null
    setCharset(charset?: string | null): void
    setName(name: string): void
    toString(options: FormatOptions | null, encode: boolean): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    static $gtype: GObject.Type
}
interface InternetAddressGroup_ConstructProps extends InternetAddress_ConstructProps {
}
class InternetAddressGroup {
    /* Fields of GMime-3.0.GMime.InternetAddress */
    readonly parentObject: GObject.Object
    readonly charset: string
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.InternetAddressGroup */
    addMember(member: InternetAddress): number
    getMembers(): InternetAddressList
    setMembers(members: InternetAddressList): void
    /* Methods of GMime-3.0.GMime.InternetAddress */
    getCharset(): string | null
    getName(): string | null
    setCharset(charset?: string | null): void
    setName(name: string): void
    toString(options: FormatOptions | null, encode: boolean): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.InternetAddressList */
    add(ia: InternetAddress): number
    append(append: InternetAddressList): void
    clear(): void
    contains(ia: InternetAddress): boolean
    encode(options: FormatOptions | null, str: GLib.String): void
    getAddress(index: number): InternetAddress
    indexOf(ia: InternetAddress): number
    insert(index: number, ia: InternetAddress): void
    length(): number
    prepend(prepend: InternetAddressList): void
    remove(ia: InternetAddress): boolean
    removeAt(index: number): boolean
    setAddress(index: number, ia: InternetAddress): void
    toString(options: FormatOptions | null, encode: boolean): string | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
    readonly charset: string
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.InternetAddressMailbox */
    getAddr(): string
    getIdnAddr(): string
    setAddr(addr: string): void
    /* Methods of GMime-3.0.GMime.InternetAddress */
    getCharset(): string | null
    getName(): string | null
    setCharset(charset?: string | null): void
    setName(name: string): void
    toString(options: FormatOptions | null, encode: boolean): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: GObject.Object
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Message */
    addMailbox(type: AddressType, name: string, addr: string): void
    foreach(callback: ObjectForeachFunc): void
    getAddresses(type: AddressType): InternetAddressList
    getAllRecipients(): InternetAddressList
    getAutocryptGossipHeaders(now: GLib.DateTime, flags: DecryptFlags, sessionKey: string): AutocryptHeaderList | null
    getAutocryptGossipHeadersFromInnerPart(now: GLib.DateTime, innerPart: Object): AutocryptHeaderList | null
    getAutocryptHeader(now: GLib.DateTime): AutocryptHeader | null
    getBcc(): InternetAddressList
    getBody(): Object | null
    getCc(): InternetAddressList
    getDate(): GLib.DateTime | null
    getFrom(): InternetAddressList
    getMessageId(): string | null
    getMimePart(): Object | null
    getReplyTo(): InternetAddressList
    getSender(): InternetAddressList
    getSubject(): string | null
    getTo(): InternetAddressList
    partialSplitMessage(maxSize: number): [ /* returnType */ Message | null, /* nparts */ number ]
    setDate(date: GLib.DateTime): void
    setMessageId(messageId: string): void
    setMimePart(mimePart: Object): void
    setSubject(subject: string, charset: string): void
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Message_ConstructProps)
    _init (config?: Message_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(prettyHeaders: boolean): Message
    /* Function overloads */
    static new(options: ParserOptions | null, contentType: ContentType): Message
    static $gtype: GObject.Type
}
interface MessagePart_ConstructProps extends Object_ConstructProps {
}
class MessagePart {
    /* Fields of GMime-3.0.GMime.Object */
    readonly parentObject: GObject.Object
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.MessagePart */
    getMessage(): Message
    setMessage(message: Message): void
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: MessagePart_ConstructProps)
    _init (config?: MessagePart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(subtype: string): MessagePart
    /* Function overloads */
    static new(options: ParserOptions | null, contentType: ContentType): MessagePart
    static newWithMessage(subtype: string, message: Message): MessagePart
    static $gtype: GObject.Type
}
interface MessagePartial_ConstructProps extends Part_ConstructProps {
}
class MessagePartial {
    /* Fields of GMime-3.0.GMime.Part */
    readonly parentObject: Object
    readonly encoding: ContentEncoding
    readonly openpgp: OpenPGPData
    readonly contentDescription: string
    readonly contentLocation: string
    readonly contentMd5: string
    readonly content: DataWrapper
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.MessagePartial */
    getId(): string
    getNumber(): number
    getTotal(): number
    /* Methods of GMime-3.0.GMime.Part */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    getContent(): DataWrapper
    getContentDescription(): string
    getContentEncoding(): ContentEncoding
    getContentId(): string
    getContentLocation(): string
    getContentMd5(): string
    getFilename(): string
    getOpenpgpData(): OpenPGPData
    isAttachment(): boolean
    openpgpDecrypt(flags: DecryptFlags, sessionKey?: string | null): DecryptResult | null
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgpSign(userid: string): boolean
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    setContent(content: DataWrapper): void
    setContentDescription(description: string): void
    setContentEncoding(encoding: ContentEncoding): void
    setContentId(contentId: string): void
    setContentLocation(contentLocation: string): void
    setContentMd5(contentMd5: string): void
    setFilename(filename: string): void
    setOpenpgpData(data: OpenPGPData): void
    verifyContentMd5(): boolean
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: MessagePartial_ConstructProps)
    _init (config?: MessagePartial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, number: number, total: number): MessagePartial
    /* Function overloads */
    static new(): MessagePartial
    static new(options: ParserOptions | null, contentType: ContentType): MessagePartial
    static reconstructMessage(partials: MessagePartial, num: number): Message
    static $gtype: GObject.Type
}
interface Multipart_ConstructProps extends Object_ConstructProps {
}
class Multipart {
    /* Fields of GMime-3.0.GMime.Object */
    readonly parentObject: GObject.Object
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    getBoundary(): string
    getCount(): number
    getEpilogue(): string
    getPart(index: number): Object
    getPrologue(): string
    getSubpartFromContentId(contentId: string): Object
    indexOf(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    removeAt(index: number): Object
    replace(index: number, replacement: Object): Object
    setBoundary(boundary: string): void
    setEpilogue(epilogue: string): void
    setPrologue(prologue: string): void
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    static new(options: ParserOptions | null, contentType: ContentType): Multipart
    static newWithSubtype(subtype: string): Multipart
    static $gtype: GObject.Type
}
interface MultipartEncrypted_ConstructProps extends Multipart_ConstructProps {
}
class MultipartEncrypted {
    /* Fields of GMime-3.0.GMime.Multipart */
    readonly parentObject: Object
    readonly children: object[]
    readonly boundary: string
    readonly prologue: string
    readonly epilogue: string
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.MultipartEncrypted */
    decrypt(flags: DecryptFlags, sessionKey: string): [ /* returnType */ Object | null, /* result */ DecryptResult ]
    /* Methods of GMime-3.0.GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    getBoundary(): string
    getCount(): number
    getEpilogue(): string
    getPart(index: number): Object
    getPrologue(): string
    getSubpartFromContentId(contentId: string): Object
    indexOf(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    removeAt(index: number): Object
    replace(index: number, replacement: Object): Object
    setBoundary(boundary: string): void
    setEpilogue(epilogue: string): void
    setPrologue(prologue: string): void
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    static new(options: ParserOptions | null, contentType: ContentType): MultipartEncrypted
    static encrypt(ctx: CryptoContext, entity: Object, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): MultipartEncrypted | null
    static $gtype: GObject.Type
}
interface MultipartSigned_ConstructProps extends Multipart_ConstructProps {
}
class MultipartSigned {
    /* Fields of GMime-3.0.GMime.Multipart */
    readonly parentObject: Object
    readonly children: object[]
    readonly boundary: string
    readonly prologue: string
    readonly epilogue: string
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.MultipartSigned */
    verify(flags: VerifyFlags): SignatureList | null
    /* Methods of GMime-3.0.GMime.Multipart */
    add(part: Object): void
    clear(): void
    contains(part: Object): boolean
    foreach(callback: ObjectForeachFunc): void
    getBoundary(): string
    getCount(): number
    getEpilogue(): string
    getPart(index: number): Object
    getPrologue(): string
    getSubpartFromContentId(contentId: string): Object
    indexOf(part: Object): number
    insert(index: number, part: Object): void
    remove(part: Object): boolean
    removeAt(index: number): Object
    replace(index: number, replacement: Object): Object
    setBoundary(boundary: string): void
    setEpilogue(epilogue: string): void
    setPrologue(prologue: string): void
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    static new(options: ParserOptions | null, contentType: ContentType): MultipartSigned
    static sign(ctx: CryptoContext, entity: Object, userid: string): MultipartSigned | null
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
}
class Object {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentId(): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    static newType(options: ParserOptions | null, type: string, subtype: string): Object
    static registerType(type: string, subtype: string, objectType: GObject.Type): void
    static typeRegistryInit(): void
    static typeRegistryShutdown(): void
    static $gtype: GObject.Type
}
interface Param_ConstructProps extends GObject.Object_ConstructProps {
}
class Param {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Param */
    getCharset(): string
    getEncodingMethod(): ParamEncodingMethod
    getLang(): string
    getName(): string
    getValue(): string
    setCharset(charset: string): void
    setEncodingMethod(method: ParamEncodingMethod): void
    setLang(lang: string): void
    setValue(value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Param_ConstructProps)
    _init (config?: Param_ConstructProps): void
    static $gtype: GObject.Type
}
interface ParamList_ConstructProps extends GObject.Object_ConstructProps {
}
class ParamList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.ParamList */
    clear(): void
    encode(options: FormatOptions, fold: boolean, str: GLib.String): void
    getParameter(name: string): Param
    getParameterAt(index: number): Param
    length(): number
    remove(name: string): boolean
    removeAt(index: number): boolean
    setParameter(name: string, value: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Parser */
    constructMessage(options?: ParserOptions | null): Message | null
    constructPart(options?: ParserOptions | null): Object | null
    eos(): boolean
    getFormat(): Format
    getHeadersBegin(): number
    getHeadersEnd(): number
    getMboxMarker(): string | null
    getMboxMarkerOffset(): number
    getPersistStream(): boolean
    getRespectContentLength(): boolean
    initWithStream(stream: Stream): void
    setFormat(format: Format): void
    setPersistStream(persist: boolean): void
    setRespectContentLength(respectContentLength: boolean): void
    tell(): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static newWithStream(stream: Stream): Parser
    static $gtype: GObject.Type
}
interface Part_ConstructProps extends Object_ConstructProps {
}
class Part {
    /* Fields of GMime-3.0.GMime.Object */
    readonly parentObject: GObject.Object
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Part */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    getContent(): DataWrapper
    getContentDescription(): string
    getContentEncoding(): ContentEncoding
    getContentId(): string
    getContentLocation(): string
    getContentMd5(): string
    getFilename(): string
    getOpenpgpData(): OpenPGPData
    isAttachment(): boolean
    openpgpDecrypt(flags: DecryptFlags, sessionKey?: string | null): DecryptResult | null
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgpSign(userid: string): boolean
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    setContent(content: DataWrapper): void
    setContentDescription(description: string): void
    setContentEncoding(encoding: ContentEncoding): void
    setContentId(contentId: string): void
    setContentLocation(contentLocation: string): void
    setContentMd5(contentMd5: string): void
    setFilename(filename: string): void
    setOpenpgpData(data: OpenPGPData): void
    verifyContentMd5(): boolean
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Part_ConstructProps)
    _init (config?: Part_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Part
    /* Function overloads */
    static new(options: ParserOptions | null, contentType: ContentType): Part
    static newWithType(type: string, subtype: string): Part
    static $gtype: GObject.Type
}
interface Pkcs7Context_ConstructProps extends CryptoContext_ConstructProps {
}
class Pkcs7Context {
    /* Fields of GMime-3.0.GMime.CryptoContext */
    readonly parentObject: GObject.Object
    readonly requestPasswd: PasswordRequestFunc
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.CryptoContext */
    decrypt(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    digestId(name: string): DigestAlgo
    digestName(digest: DigestAlgo): string | null
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    exportKeys(keys: string, ostream: Stream): number
    getEncryptionProtocol(): string | null
    getKeyExchangeProtocol(): string | null
    getSignatureProtocol(): string | null
    importKeys(istream: Stream): number
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    verify(flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null): SignatureList | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Signature */
    getCertificate(): Certificate
    getCreated(): number
    getCreated64(): number
    getExpires(): number
    getExpires64(): number
    getStatus(): SignatureStatus
    setCertificate(cert: Certificate): void
    setCreated(created: number): void
    setExpires(expires: number): void
    setStatus(status: SignatureStatus): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.SignatureList */
    add(sig: Signature): number
    clear(): void
    contains(sig: Signature): boolean
    getSignature(index: number): Signature
    indexOf(sig: Signature): number
    insert(index: number, sig: Signature): void
    length(): number
    remove(sig: Signature): boolean
    removeAt(index: number): boolean
    setSignature(index: number, sig: Signature): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    static $gtype: GObject.Type
}
interface StreamBuffer_ConstructProps extends Stream_ConstructProps {
}
class StreamBuffer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamCat */
    addSource(source: Stream): number
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamFile */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: StreamFile_ConstructProps)
    _init (config?: StreamFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fp?: object | null): StreamFile
    static newWithBounds(fp: object | null, start: number, end: number): StreamFile
    static open(path: string, mode: string): Stream
    static $gtype: GObject.Type
}
interface StreamFilter_ConstructProps extends Stream_ConstructProps {
}
class StreamFilter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamFilter */
    add(filter: Filter): number
    getOwner(): boolean
    remove(id: number): void
    setOwner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamFs */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: StreamFs_ConstructProps)
    _init (config?: StreamFs_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number): StreamFs
    static newWithBounds(fd: number, start: number, end: number): StreamFs
    static open(path: string, flags: number, mode: number): Stream
    static $gtype: GObject.Type
}
interface StreamGIO_ConstructProps extends Stream_ConstructProps {
}
class StreamGIO {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamGIO */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: StreamGIO_ConstructProps)
    _init (config?: StreamGIO_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(file: Gio.File): StreamGIO
    static newWithBounds(file: Gio.File, start: number, end: number): StreamGIO
    static $gtype: GObject.Type
}
interface StreamMem_ConstructProps extends Stream_ConstructProps {
}
class StreamMem {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamMem */
    getByteArray(): Uint8Array
    getOwner(): boolean
    setByteArray(array: Uint8Array): void
    setOwner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: StreamMem_ConstructProps)
    _init (config?: StreamMem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StreamMem
    static newWithBuffer(buffer: Uint8Array): StreamMem
    static newWithByteArray(array: Uint8Array): StreamMem
    static $gtype: GObject.Type
}
interface StreamMmap_ConstructProps extends Stream_ConstructProps {
}
class StreamMmap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamMmap */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: StreamMmap_ConstructProps)
    _init (config?: StreamMmap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(fd: number, prot: number, flags: number): StreamMmap
    static newWithBounds(fd: number, prot: number, flags: number, start: number, end: number): StreamMmap
    static $gtype: GObject.Type
}
interface StreamNull_ConstructProps extends Stream_ConstructProps {
}
class StreamNull {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamNull */
    getCountNewlines(): boolean
    setCountNewlines(count: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.StreamPipe */
    getOwner(): boolean
    setOwner(owner: boolean): void
    /* Methods of GMime-3.0.GMime.Stream */
    bufferGets(buf: Uint8Array): number
    bufferReadln(buffer: Uint8Array): void
    close(): number
    construct(start: number, end: number): void
    eos(): boolean
    flush(): number
    length(): number
    read(buf: Uint8Array): number
    reset(): number
    seek(offset: number, whence: SeekWhence): number
    setBounds(start: number, end: number): void
    substream(start: number, end: number): Stream
    tell(): number
    write(buf: Uint8Array): number
    writeString(str: string): number
    writeToStream(dest: Stream): number
    writev(vector: StreamIOVector[]): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    readonly parentObject: Object
    readonly encoding: ContentEncoding
    readonly openpgp: OpenPGPData
    readonly contentDescription: string
    readonly contentLocation: string
    readonly contentMd5: string
    readonly content: DataWrapper
    /* Fields of GMime-3.0.GMime.Object */
    readonly disposition: ContentDisposition
    readonly contentType: ContentType
    readonly headers: HeaderList
    readonly contentId: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GMime-3.0.GMime.TextPart */
    getCharset(): string
    getText(): string
    setCharset(charset: string): void
    setText(text: string): void
    /* Methods of GMime-3.0.GMime.Part */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    getContent(): DataWrapper
    getContentDescription(): string
    getContentEncoding(): ContentEncoding
    getContentId(): string
    getContentLocation(): string
    getContentMd5(): string
    getFilename(): string
    getOpenpgpData(): OpenPGPData
    isAttachment(): boolean
    openpgpDecrypt(flags: DecryptFlags, sessionKey?: string | null): DecryptResult | null
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    openpgpSign(userid: string): boolean
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    setContent(content: DataWrapper): void
    setContentDescription(description: string): void
    setContentEncoding(encoding: ContentEncoding): void
    setContentId(contentId: string): void
    setContentLocation(contentLocation: string): void
    setContentMd5(contentMd5: string): void
    setFilename(filename: string): void
    setOpenpgpData(data: OpenPGPData): void
    verifyContentMd5(): boolean
    /* Methods of GMime-3.0.GMime.Object */
    appendHeader(header: string, value: string, charset: string): void
    encode(constraint: EncodingConstraint): void
    getContentDisposition(): ContentDisposition
    getContentDispositionParameter(name: string): string
    getContentType(): ContentType
    getContentTypeParameter(name: string): string
    getDisposition(): string
    getHeader(header: string): string
    getHeaderList(): HeaderList
    getHeaders(options?: FormatOptions | null): string
    prependHeader(header: string, value: string, charset: string): void
    removeHeader(header: string): boolean
    setContentDisposition(disposition: ContentDisposition): void
    setContentDispositionParameter(name: string, value: string): void
    setContentId(contentId: string): void
    setContentType(contentType: ContentType): void
    setContentTypeParameter(name: string, value: string): void
    setDisposition(disposition: string): void
    setHeader(header: string, value: string, charset: string): void
    toString(options?: FormatOptions | null): string
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    writeToStream(options: FormatOptions | null, stream: Stream): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: TextPart_ConstructProps)
    _init (config?: TextPart_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TextPart
    /* Function overloads */
    static new(): TextPart
    static new(options: ParserOptions | null, contentType: ContentType): TextPart
    static newWithSubtype(subtype: string): TextPart
    static $gtype: GObject.Type
}
abstract class ApplicationPkcs7MimeClass {
    /* Fields of GMime-3.0.GMime.ApplicationPkcs7MimeClass */
    readonly parentClass: PartClass
    static name: string
}
abstract class AutocryptHeaderClass {
    /* Fields of GMime-3.0.GMime.AutocryptHeaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class AutocryptHeaderListClass {
    /* Fields of GMime-3.0.GMime.AutocryptHeaderListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CertificateClass {
    /* Fields of GMime-3.0.GMime.CertificateClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CertificateListClass {
    /* Fields of GMime-3.0.GMime.CertificateListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Charset {
    /* Fields of GMime-3.0.GMime.Charset */
    readonly mask: number
    readonly level: number
    /* Methods of GMime-3.0.GMime.Charset */
    bestName(): string | null
    canEncode(charset: string, text: string, len: number): boolean
    init(): void
    step(inbuf: string, inlen: number): void
    /* Static methods and pseudo-constructors */
    static best(inbuf: string, inlen: number): string | null
    static canonName(charset: string): string
    static iconvName(charset: string): string
    static isoToWindows(isocharset: string): string
    static language(charset: string): string | null
    static localeName(): string
    static mapInit(): void
    static mapShutdown(): void
    static name(charset: string): string
}
abstract class ContentDispositionClass {
    /* Fields of GMime-3.0.GMime.ContentDispositionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ContentTypeClass {
    /* Fields of GMime-3.0.GMime.ContentTypeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CryptoContextClass {
    /* Fields of GMime-3.0.GMime.CryptoContextClass */
    readonly parentClass: GObject.ObjectClass
    readonly digestId: (ctx: CryptoContext, name: string) => DigestAlgo
    readonly digestName: (ctx: CryptoContext, digest: DigestAlgo) => string | null
    readonly getSignatureProtocol: (ctx: CryptoContext) => string | null
    readonly getEncryptionProtocol: (ctx: CryptoContext) => string | null
    readonly getKeyExchangeProtocol: (ctx: CryptoContext) => string | null
    readonly sign: (ctx: CryptoContext, detach: boolean, userid: string, istream: Stream, ostream: Stream) => number
    readonly verify: (ctx: CryptoContext, flags: VerifyFlags, istream: Stream, sigstream?: Stream | null, ostream?: Stream | null) => SignatureList | null
    readonly encrypt: (ctx: CryptoContext, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream) => number
    readonly decrypt: (ctx: CryptoContext, flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream) => DecryptResult
    readonly importKeys: (ctx: CryptoContext, istream: Stream) => number
    readonly exportKeys: (ctx: CryptoContext, keys: string, ostream: Stream) => number
    static name: string
}
abstract class DataWrapperClass {
    /* Fields of GMime-3.0.GMime.DataWrapperClass */
    readonly parentClass: GObject.ObjectClass
    readonly writeToStream: (wrapper: DataWrapper, stream: Stream) => number
    static name: string
}
abstract class DecryptResultClass {
    /* Fields of GMime-3.0.GMime.DecryptResultClass */
    readonly parentClass: GObject.ObjectClass
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
    initDecode(encoding: ContentEncoding): void
    initEncode(encoding: ContentEncoding): void
    outlen(inlen: number): number
    reset(): void
    step(inbuf: string, inlen: number, outbuf: string): number
    static name: string
    /* Static methods and pseudo-constructors */
    static base64DecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static base64EncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static base64EncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quotedDecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quotedEncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static quotedEncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static uudecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    static uuencodeClose(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
    static uuencodeStep(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
}
abstract class FilterBasicClass {
    /* Fields of GMime-3.0.GMime.FilterBasicClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterBestClass {
    /* Fields of GMime-3.0.GMime.FilterBestClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterCharsetClass {
    /* Fields of GMime-3.0.GMime.FilterCharsetClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterChecksumClass {
    /* Fields of GMime-3.0.GMime.FilterChecksumClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterClass {
    /* Fields of GMime-3.0.GMime.FilterClass */
    readonly parentClass: GObject.ObjectClass
    readonly copy: (filter: Filter) => Filter
    readonly filter: (filter: Filter, inbuf: Uint8Array, prespace: number) => [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    readonly complete: (filter: Filter, inbuf: Uint8Array, prespace: number) => [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    readonly reset: (filter: Filter) => void
    static name: string
}
abstract class FilterDos2UnixClass {
    /* Fields of GMime-3.0.GMime.FilterDos2UnixClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterEnrichedClass {
    /* Fields of GMime-3.0.GMime.FilterEnrichedClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterFromClass {
    /* Fields of GMime-3.0.GMime.FilterFromClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterGZipClass {
    /* Fields of GMime-3.0.GMime.FilterGZipClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterHTMLClass {
    /* Fields of GMime-3.0.GMime.FilterHTMLClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterOpenPGPClass {
    /* Fields of GMime-3.0.GMime.FilterOpenPGPClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterSmtpDataClass {
    /* Fields of GMime-3.0.GMime.FilterSmtpDataClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterStripClass {
    /* Fields of GMime-3.0.GMime.FilterStripClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterUnix2DosClass {
    /* Fields of GMime-3.0.GMime.FilterUnix2DosClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterWindowsClass {
    /* Fields of GMime-3.0.GMime.FilterWindowsClass */
    readonly parentClass: FilterClass
    static name: string
}
abstract class FilterYencClass {
    /* Fields of GMime-3.0.GMime.FilterYencClass */
    readonly parentClass: FilterClass
    static name: string
}
class FormatOptions {
    /* Methods of GMime-3.0.GMime.FormatOptions */
    addHiddenHeader(header: string): void
    clearHiddenHeaders(): void
    clone(): FormatOptions
    createNewlineFilter(ensureNewline: boolean): Filter
    free(): void
    getNewline(): string
    getNewlineFormat(): NewLineFormat
    getParamEncodingMethod(): ParamEncodingMethod
    isHiddenHeader(header: string): boolean
    removeHiddenHeader(header: string): void
    setNewlineFormat(newline: NewLineFormat): void
    setParamEncodingMethod(method: ParamEncodingMethod): void
    static name: string
    static new(): FormatOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FormatOptions
    static getDefault(): FormatOptions
}
abstract class GpgContextClass {
    static name: string
}
abstract class HeaderClass {
    /* Fields of GMime-3.0.GMime.HeaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class HeaderListClass {
    /* Fields of GMime-3.0.GMime.HeaderListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class InternetAddressClass {
    /* Fields of GMime-3.0.GMime.InternetAddressClass */
    readonly parentClass: GObject.ObjectClass
    readonly toString: (ia: InternetAddress, options: FormatOptions, flags: number, linelen: number, str: GLib.String) => void
    static name: string
}
abstract class InternetAddressGroupClass {
    /* Fields of GMime-3.0.GMime.InternetAddressGroupClass */
    readonly parentClass: InternetAddressClass
    static name: string
}
abstract class InternetAddressListClass {
    /* Fields of GMime-3.0.GMime.InternetAddressListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class InternetAddressMailboxClass {
    /* Fields of GMime-3.0.GMime.InternetAddressMailboxClass */
    readonly parentClass: InternetAddressClass
    static name: string
}
abstract class MessageClass {
    /* Fields of GMime-3.0.GMime.MessageClass */
    readonly parentClass: ObjectClass
    static name: string
}
abstract class MessagePartClass {
    /* Fields of GMime-3.0.GMime.MessagePartClass */
    readonly parentClass: ObjectClass
    static name: string
}
abstract class MessagePartialClass {
    /* Fields of GMime-3.0.GMime.MessagePartialClass */
    readonly parentClass: PartClass
    static name: string
}
abstract class MultipartClass {
    /* Fields of GMime-3.0.GMime.MultipartClass */
    readonly parentClass: ObjectClass
    readonly clear: (multipart: Multipart) => void
    readonly add: (multipart: Multipart, part: Object) => void
    readonly insert: (multipart: Multipart, index: number, part: Object) => void
    readonly remove: (multipart: Multipart, part: Object) => boolean
    readonly removeAt: (multipart: Multipart, index: number) => Object
    readonly getPart: (multipart: Multipart, index: number) => Object
    readonly contains: (multipart: Multipart, part: Object) => boolean
    readonly indexOf: (multipart: Multipart, part: Object) => number
    readonly getCount: (multipart: Multipart) => number
    readonly setBoundary: (multipart: Multipart, boundary: string) => void
    readonly getBoundary: (multipart: Multipart) => string
    static name: string
}
abstract class MultipartEncryptedClass {
    /* Fields of GMime-3.0.GMime.MultipartEncryptedClass */
    readonly parentClass: MultipartClass
    static name: string
}
abstract class MultipartSignedClass {
    /* Fields of GMime-3.0.GMime.MultipartSignedClass */
    readonly parentClass: MultipartClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of GMime-3.0.GMime.ObjectClass */
    readonly parentClass: GObject.ObjectClass
    readonly headerAdded: (object: Object, header: Header) => void
    readonly headerChanged: (object: Object, header: Header) => void
    readonly headerRemoved: (object: Object, header: Header) => void
    readonly headersCleared: (object: Object) => void
    readonly setContentType: (object: Object, contentType: ContentType) => void
    readonly getHeaders: (object: Object, options?: FormatOptions | null) => string
    readonly writeToStream: (object: Object, options: FormatOptions, contentOnly: boolean, stream: Stream) => number
    readonly encode: (object: Object, constraint: EncodingConstraint) => void
    static name: string
}
class OpenPGPMarker {
    /* Fields of GMime-3.0.GMime.OpenPGPMarker */
    readonly marker: string
    readonly len: number
    readonly before: OpenPGPState
    readonly after: OpenPGPState
    readonly isEndMarker: boolean
    static name: string
}
abstract class ParamClass {
    /* Fields of GMime-3.0.GMime.ParamClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ParamListClass {
    /* Fields of GMime-3.0.GMime.ParamListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ParserClass {
    /* Fields of GMime-3.0.GMime.ParserClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ParserOptions {
    /* Methods of GMime-3.0.GMime.ParserOptions */
    clone(): ParserOptions
    free(): void
    getAddressComplianceMode(): RfcComplianceMode
    getAllowAddressesWithoutDomain(): boolean
    getFallbackCharsets(): string[]
    getParameterComplianceMode(): RfcComplianceMode
    getRfc2047ComplianceMode(): RfcComplianceMode
    setAddressComplianceMode(mode: RfcComplianceMode): void
    setAllowAddressesWithoutDomain(allow: boolean): void
    setFallbackCharsets(charsets: string): void
    setParameterComplianceMode(mode: RfcComplianceMode): void
    setRfc2047ComplianceMode(mode: RfcComplianceMode): void
    static name: string
    static new(): ParserOptions
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParserOptions
    static getDefault(): ParserOptions
}
abstract class PartClass {
    /* Fields of GMime-3.0.GMime.PartClass */
    readonly parentClass: ObjectClass
    readonly setContent: (mimePart: Part, content: DataWrapper) => void
    static name: string
}
class PartIter {
    /* Methods of GMime-3.0.GMime.PartIter */
    clone(): PartIter
    free(): void
    getCurrent(): Object
    getParent(): Object
    getPath(): string
    getToplevel(): Object
    isValid(): boolean
    jumpTo(path: string): boolean
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
    getMessageId(index: number): string
    length(): number
    setMessageId(index: number, msgid: string): void
    static name: string
    static new(): References
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): References
    static parse(options: ParserOptions | null, text: string): References
}
abstract class SignatureClass {
    /* Fields of GMime-3.0.GMime.SignatureClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SignatureListClass {
    /* Fields of GMime-3.0.GMime.SignatureListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class StreamBufferClass {
    /* Fields of GMime-3.0.GMime.StreamBufferClass */
    readonly parentClass: StreamClass
    static name: string
}
abstract class StreamCatClass {
    /* Fields of GMime-3.0.GMime.StreamCatClass */
    readonly parentClass: StreamClass
    static name: string
}
abstract class StreamClass {
    /* Fields of GMime-3.0.GMime.StreamClass */
    readonly parentClass: GObject.ObjectClass
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
    readonly parentClass: StreamClass
    static name: string
}
abstract class StreamFilterClass {
    /* Fields of GMime-3.0.GMime.StreamFilterClass */
    readonly parentClass: StreamClass
    static name: string
}
abstract class StreamFsClass {
    /* Fields of GMime-3.0.GMime.StreamFsClass */
    readonly parentClass: StreamClass
    static name: string
}
abstract class StreamGIOClass {
    /* Fields of GMime-3.0.GMime.StreamGIOClass */
    readonly parentClass: StreamClass
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
    readonly parentClass: StreamClass
    static name: string
}
abstract class StreamMmapClass {
    /* Fields of GMime-3.0.GMime.StreamMmapClass */
    readonly parentClass: StreamClass
    static name: string
}
abstract class StreamNullClass {
    /* Fields of GMime-3.0.GMime.StreamNullClass */
    readonly parentClass: StreamClass
    static name: string
}
abstract class StreamPipeClass {
    /* Fields of GMime-3.0.GMime.StreamPipeClass */
    readonly parentClass: StreamClass
    static name: string
}
abstract class TextPartClass {
    /* Fields of GMime-3.0.GMime.TextPartClass */
    readonly parentClass: PartClass
    static name: string
}
}
export default GMime;