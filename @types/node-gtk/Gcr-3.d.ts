/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gcr-3
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gck from './Gck-1';

export namespace Gcr {

enum CertificateChainStatus {
    UNKNOWN,
    INCOMPLETE,
    DISTRUSTED,
    SELFSIGNED,
    PINNED,
    ANCHORED,
}
enum CertificateRequestFormat {
    CERTIFICATE_REQUEST_PKCS10,
}
enum DataError {
    FAILURE,
    UNRECOGNIZED,
    CANCELLED,
    LOCKED,
}
enum DataFormat {
    ALL,
    INVALID,
    DER_PRIVATE_KEY,
    DER_PRIVATE_KEY_RSA,
    DER_PRIVATE_KEY_DSA,
    DER_PRIVATE_KEY_EC,
    DER_SUBJECT_PUBLIC_KEY,
    DER_CERTIFICATE_X509,
    DER_PKCS7,
    DER_PKCS8,
    DER_PKCS8_PLAIN,
    DER_PKCS8_ENCRYPTED,
    DER_PKCS10,
    DER_SPKAC,
    BASE64_SPKAC,
    DER_PKCS12,
    OPENSSH_PUBLIC,
    OPENPGP_PACKET,
    OPENPGP_ARMOR,
    PEM,
    PEM_PRIVATE_KEY_RSA,
    PEM_PRIVATE_KEY_DSA,
    PEM_CERTIFICATE_X509,
    PEM_PKCS7,
    PEM_PKCS8_PLAIN,
    PEM_PKCS8_ENCRYPTED,
    PEM_PKCS12,
    PEM_PRIVATE_KEY,
    PEM_PKCS10,
    PEM_PRIVATE_KEY_EC,
    PEM_PUBLIC_KEY,
}
enum PromptReply {
    CANCEL,
    CONTINUE,
}
enum SystemPromptError {
    SYSTEM_PROMPT_IN_PROGRESS,
}
enum SystemPrompterMode {
    SINGLE,
    MULTIPLE,
}
enum CertificateChainFlags {
    NONE,
    NO_LOOKUPS,
}
enum ColumnFlags {
    NONE,
    HIDDEN,
    SORTABLE,
}
const ICON_CERTIFICATE: string
const ICON_GNUPG: string
const ICON_HOME_DIRECTORY: string
const ICON_KEY: string
const ICON_KEY_PAIR: string
const ICON_PASSWORD: string
const ICON_SMART_CARD: string
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PURPOSE_CLIENT_AUTH: string
const PURPOSE_CODE_SIGNING: string
const PURPOSE_EMAIL: string
const PURPOSE_SERVER_AUTH: string
const SECRET_EXCHANGE_PROTOCOL_1: string
const UNLOCK_OPTION_ALWAYS: string
const UNLOCK_OPTION_IDLE: string
const UNLOCK_OPTION_SESSION: string
const UNLOCK_OPTION_TIMEOUT: string
function certificateCompare(first?: Comparable | null, other?: Comparable | null): number
function dataErrorGetDomain(): GLib.Quark
function fingerprintFromAttributes(attrs: Gck.Attributes, checksumType: GLib.ChecksumType): Uint8Array | null
function fingerprintFromSubjectPublicKeyInfo(keyInfo: Uint8Array, checksumType: GLib.ChecksumType): Uint8Array | null
function iconForToken(tokenInfo: Gck.TokenInfo): Gio.Icon
function importerCreateForParsed(parsed: Parsed): Importer[]
function importerQueueAndFilterForParsed(importers: Importer[], parsed: Parsed): Importer[]
function importerRegister(importerType: GObject.Type, attrs: Gck.Attributes): void
function importerRegisterWellKnown(): void
function mockPrompterDisconnect(): void
function mockPrompterExpectClose(): void
function mockPrompterExpectConfirmCancel(): void
function mockPrompterExpectPasswordCancel(): void
function mockPrompterGetDelayMsec(): number
function mockPrompterIsExpecting(): boolean
function mockPrompterIsPrompting(): boolean
function mockPrompterSetDelayMsec(delayMsec: number): void
function mockPrompterStart(): string
function mockPrompterStop(): void
function parsedUnref(parsed?: object | null): void
function pkcs11AddModule(module: Gck.Module): void
function pkcs11AddModuleFromFile(modulePath: string, unused?: object | null): boolean
function pkcs11GetModules(): Gck.Module[]
function pkcs11GetTrustLookupSlots(): Gck.Slot[]
function pkcs11GetTrustLookupUris(): string[] | null
function pkcs11GetTrustStoreSlot(): Gck.Slot | null
function pkcs11GetTrustStoreUri(): string | null
function pkcs11Initialize(cancellable?: Gio.Cancellable | null): boolean
function pkcs11InitializeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function pkcs11InitializeFinish(result: Gio.AsyncResult): boolean
function pkcs11SetModules(modules: Gck.Module[]): void
function pkcs11SetTrustLookupUris(pkcs11Uris?: string | null): void
function pkcs11SetTrustStoreUri(pkcs11Uri?: string | null): void
function trustAddPinnedCertificate(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
function trustAddPinnedCertificateAsync(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function trustAddPinnedCertificateFinish(result: Gio.AsyncResult): boolean
function trustIsCertificateAnchored(certificate: Certificate, purpose: string, cancellable?: Gio.Cancellable | null): boolean
function trustIsCertificateAnchoredAsync(certificate: Certificate, purpose: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function trustIsCertificateAnchoredFinish(result: Gio.AsyncResult): boolean
function trustIsCertificatePinned(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
function trustIsCertificatePinnedAsync(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function trustIsCertificatePinnedFinish(result: Gio.AsyncResult): boolean
function trustRemovePinnedCertificate(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null): boolean
function trustRemovePinnedCertificateAsync(certificate: Certificate, purpose: string, peer: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function trustRemovePinnedCertificateFinish(result: Gio.AsyncResult): boolean
interface FilterCollectionFunc {
    (object: GObject.Object): boolean
}
class Certificate {
    /* Properties of Gcr-3.Gcr.Certificate */
    readonly description: string
    readonly expiry: GLib.Date
    readonly icon: Gio.Icon
    readonly issuer: string
    readonly label: string
    readonly markup: string
    readonly subject: string
    /* Methods of Gcr-3.Gcr.Certificate */
    getBasicConstraints(): [ /* returnType */ boolean, /* isCa */ boolean | null, /* pathLen */ number | null ]
    getDerData(): Uint8Array
    getExpiryDate(): GLib.Date
    getFingerprint(type: GLib.ChecksumType): Uint8Array
    getFingerprintHex(type: GLib.ChecksumType): string
    getIssuedDate(): GLib.Date
    getIssuerCn(): string
    getIssuerDn(): string
    getIssuerName(): string
    getIssuerPart(part: string): string | null
    getIssuerRaw(): Uint8Array
    getKeySize(): number
    getMarkupText(): string
    getSerialNumber(): Uint8Array
    getSerialNumberHex(): string
    getSubjectCn(): string
    getSubjectDn(): string
    getSubjectName(): string
    getSubjectPart(part: string): string | null
    getSubjectRaw(): Uint8Array
    isIssuer(issuer: Certificate): boolean
    mixinEmitNotify(): void
    /* Methods of Gcr-3.Gcr.Comparable */
    compare(other?: Comparable | null): number
    static name: string
    /* Static methods and pseudo-constructors */
    static compare(first?: Comparable | null, other?: Comparable | null): number
}
class Collection {
    /* Methods of Gcr-3.Gcr.Collection */
    contains(object: GObject.Object): boolean
    emitAdded(object: GObject.Object): void
    emitRemoved(object: GObject.Object): void
    getLength(): number
    getObjects(): GObject.Object[]
    /* Signals of Gcr-3.Gcr.Collection */
    connect(sigName: "added", callback: ((object: GObject.Object) => void)): number
    on(sigName: "added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "added", object: GObject.Object): void
    connect(sigName: "removed", callback: ((object: GObject.Object) => void)): number
    on(sigName: "removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "removed", object: GObject.Object): void
    static name: string
}
class Comparable {
    /* Methods of Gcr-3.Gcr.Comparable */
    compare(other?: Comparable | null): number
    static name: string
}
interface ImportInteraction_ConstructProps extends Gio.TlsInteraction_ConstructProps {
}
class ImportInteraction {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.ImportInteraction */
    supplement(builder: Gck.Builder, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    supplementAsync(builder: Gck.Builder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    supplementFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    supplementPrep(builder: Gck.Builder): void
    /* Methods of Gio-2.0.Gio.TlsInteraction */
    askPassword(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    askPasswordAsync(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    askPasswordFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    invokeAskPassword(password: Gio.TlsPassword, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    invokeRequestCertificate(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    requestCertificate(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null): Gio.TlsInteractionResult
    requestCertificateAsync(connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    requestCertificateFinish(result: Gio.AsyncResult): Gio.TlsInteractionResult
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: ImportInteraction_ConstructProps)
    _init (config?: ImportInteraction_ConstructProps): void
    static $gtype: GObject.Type
}
class Importer {
    /* Properties of Gcr-3.Gcr.Importer */
    readonly icon: Gio.Icon
    interaction: Gio.TlsInteraction
    readonly label: string
    readonly uri: string
    /* Methods of Gcr-3.Gcr.Importer */
    getInteraction(): Gio.TlsInteraction | null
    import(cancellable?: Gio.Cancellable | null): boolean
    importAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    importFinish(result: Gio.AsyncResult): boolean
    queueForParsed(parsed: Parsed): boolean
    setInteraction(interaction: Gio.TlsInteraction): void
    static name: string
    /* Static methods and pseudo-constructors */
    static createForParsed(parsed: Parsed): Importer[]
    static queueAndFilterForParsed(importers: Importer[], parsed: Parsed): Importer[]
    static register(importerType: GObject.Type, attrs: Gck.Attributes): void
    static registerWellKnown(): void
}
class Prompt {
    /* Properties of Gcr-3.Gcr.Prompt */
    callerWindow: string
    cancelLabel: string
    choiceChosen: boolean
    choiceLabel: string
    continueLabel: string
    description: string
    message: string
    passwordNew: boolean
    readonly passwordStrength: number
    title: string
    warning: string
    /* Methods of Gcr-3.Gcr.Prompt */
    close(): void
    confirm(cancellable?: Gio.Cancellable | null): PromptReply
    confirmAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    confirmFinish(result: Gio.AsyncResult): PromptReply
    confirmRun(cancellable?: Gio.Cancellable | null): PromptReply
    getCallerWindow(): string
    getCancelLabel(): string
    getChoiceChosen(): boolean
    getChoiceLabel(): string
    getContinueLabel(): string
    getDescription(): string
    getMessage(): string
    getPasswordNew(): boolean
    getPasswordStrength(): number
    getTitle(): string
    getWarning(): string
    password(cancellable?: Gio.Cancellable | null): string
    passwordAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    passwordFinish(result: Gio.AsyncResult): string
    passwordRun(cancellable?: Gio.Cancellable | null): string
    reset(): void
    setCallerWindow(windowId: string): void
    setCancelLabel(cancelLabel: string): void
    setChoiceChosen(chosen: boolean): void
    setChoiceLabel(choiceLabel?: string | null): void
    setContinueLabel(continueLabel: string): void
    setDescription(description: string): void
    setMessage(message: string): void
    setPasswordNew(newPassword: boolean): void
    setTitle(title: string): void
    setWarning(warning?: string | null): void
    /* Signals of Gcr-3.Gcr.Prompt */
    connect(sigName: "prompt-close", callback: (() => void)): number
    on(sigName: "prompt-close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prompt-close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prompt-close", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "prompt-close"): void
    static name: string
}
interface CertificateChain_ConstructProps extends GObject.Object_ConstructProps {
}
class CertificateChain {
    /* Properties of Gcr-3.Gcr.CertificateChain */
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.CertificateChain */
    add(certificate: Certificate): void
    build(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable?: Gio.Cancellable | null): boolean
    buildAsync(purpose: string, peer: string | null, flags: CertificateChainFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    buildFinish(result: Gio.AsyncResult): boolean
    getAnchor(): Certificate
    getCertificate(index: number): Certificate
    getEndpoint(): Certificate
    getLength(): number
    getStatus(): CertificateChainStatus
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: CertificateChain_ConstructProps)
    _init (config?: CertificateChain_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CertificateChain
    static $gtype: GObject.Type
}
interface CertificateRequest_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gcr-3.Gcr.CertificateRequest */
    privateKey?: Gck.Object
}
class CertificateRequest {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.CertificateRequest */
    complete(cancellable?: Gio.Cancellable | null): boolean
    completeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    completeFinish(result: Gio.AsyncResult): boolean
    encode(textual: boolean): Uint8Array
    getFormat(): CertificateRequestFormat
    getPrivateKey(): Gck.Object
    setCn(cn: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: CertificateRequest_ConstructProps)
    _init (config?: CertificateRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static capable(privateKey: Gck.Object, cancellable?: Gio.Cancellable | null): boolean
    static capableAsync(privateKey: Gck.Object, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static capableFinish(result: Gio.AsyncResult): boolean
    static prepare(format: CertificateRequestFormat, privateKey: Gck.Object): CertificateRequest
    static $gtype: GObject.Type
}
interface FilterCollection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gcr-3.Gcr.FilterCollection */
    underlying?: Collection
}
class FilterCollection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.FilterCollection */
    getUnderlying(): Collection
    refilter(): void
    setCallback(callback: FilterCollectionFunc | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gcr-3.Gcr.Collection */
    contains(object: GObject.Object): boolean
    emitAdded(object: GObject.Object): void
    emitRemoved(object: GObject.Object): void
    getLength(): number
    getObjects(): GObject.Object[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr-3.Gcr.Collection */
    connect(sigName: "added", callback: ((object: GObject.Object) => void)): number
    on(sigName: "added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "added", object: GObject.Object): void
    connect(sigName: "removed", callback: ((object: GObject.Object) => void)): number
    on(sigName: "removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "removed", object: GObject.Object): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterCollection_ConstructProps)
    _init (config?: FilterCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newWithCallback(underlying: Collection, callback: FilterCollectionFunc | null): FilterCollection
    static $gtype: GObject.Type
}
interface Parser_ConstructProps extends GObject.Object_ConstructProps {
}
class Parser {
    /* Properties of Gcr-3.Gcr.Parser */
    readonly parsedAttributes: Gck.Attributes
    readonly parsedDescription: string
    readonly parsedLabel: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.Parser */
    addPassword(password?: string | null): void
    formatDisable(format: DataFormat): void
    formatEnable(format: DataFormat): void
    formatSupported(format: DataFormat): boolean
    getFilename(): string
    getParsed(): Parsed
    getParsedAttributes(): Gck.Attributes | null
    getParsedBlock(): Uint8Array | null
    getParsedBytes(): any
    getParsedDescription(): string | null
    getParsedFormat(): DataFormat
    getParsedLabel(): string | null
    parseBytes(data: any): boolean
    parseData(data: Uint8Array): boolean
    parseStream(input: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean
    parseStreamAsync(input: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    parseStreamFinish(result: Gio.AsyncResult): boolean
    setFilename(filename?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gcr-3.Gcr.Parser */
    connect(sigName: "authenticate", callback: ((count: number) => boolean)): number
    on(sigName: "authenticate", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (count: number) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", count: number): void
    connect(sigName: "parsed", callback: (() => void)): number
    on(sigName: "parsed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parsed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parsed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "parsed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parsed-attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parsed-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parsed-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parsed-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parsed-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parsed-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parsed-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parsed-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parsed-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parsed-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parsed-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parsed-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parsed-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
interface Pkcs11Certificate_ConstructProps extends Gck.Object_ConstructProps {
    /* Constructor properties of Gcr-3.Gcr.Pkcs11Certificate */
    attributes?: Gck.Attributes
}
class Pkcs11Certificate {
    /* Properties of Gcr-3.Gcr.Certificate */
    readonly description: string
    readonly expiry: GLib.Date
    readonly icon: Gio.Icon
    readonly issuer: string
    readonly label: string
    readonly markup: string
    readonly subject: string
    /* Fields of Gck-1.Gck.Object */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.Pkcs11Certificate */
    getAttributes(): Gck.Attributes
    /* Methods of Gck-1.Gck.Object */
    cacheLookup(attrTypes: number[], cancellable?: Gio.Cancellable | null): Gck.Attributes
    cacheLookupAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    cacheLookupFinish(result: Gio.AsyncResult): Gck.Attributes
    destroy(cancellable?: Gio.Cancellable | null): boolean
    destroyAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    destroyFinish(result: Gio.AsyncResult): boolean
    equal(object2: Gck.Object): boolean
    getAsync(attrTypes: number[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getData(attrType: number, cancellable?: Gio.Cancellable | null): Uint8Array
    getDataAsync(attrType: number, allocator: Gck.Allocator, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFinish(result: Gio.AsyncResult): Uint8Array
    getFinish(result: Gio.AsyncResult): Gck.Attributes
    getFull(attrTypes: number[], cancellable?: Gio.Cancellable | null): Gck.Attributes
    getHandle(): number
    getModule(): Gck.Module
    getSession(): Gck.Session
    getTemplate(attrType: number, cancellable?: Gio.Cancellable | null): Gck.Attributes
    getTemplateAsync(attrType: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getTemplateFinish(result: Gio.AsyncResult): Gck.Attributes
    hash(): number
    set(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): boolean
    setAsync(attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setFinish(result: Gio.AsyncResult): boolean
    setTemplate(attrType: number, attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null): boolean
    setTemplateAsync(attrType: number, attrs: Gck.Attributes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    setTemplateFinish(result: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gcr-3.Gcr.Certificate */
    getBasicConstraints(): [ /* returnType */ boolean, /* isCa */ boolean | null, /* pathLen */ number | null ]
    getDerData(): Uint8Array
    getExpiryDate(): GLib.Date
    getFingerprint(type: GLib.ChecksumType): Uint8Array
    getFingerprintHex(type: GLib.ChecksumType): string
    getIssuedDate(): GLib.Date
    getIssuerCn(): string
    getIssuerDn(): string
    getIssuerName(): string
    getIssuerPart(part: string): string | null
    getIssuerRaw(): Uint8Array
    getKeySize(): number
    getMarkupText(): string
    getSerialNumber(): Uint8Array
    getSerialNumberHex(): string
    getSubjectCn(): string
    getSubjectDn(): string
    getSubjectName(): string
    getSubjectPart(part: string): string | null
    getSubjectRaw(): Uint8Array
    isIssuer(issuer: Certificate): boolean
    mixinEmitNotify(): void
    /* Methods of Gcr-3.Gcr.Comparable */
    compare(other?: Comparable | null): number
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
    connect(sigName: "notify::expiry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::issuer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issuer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pkcs11Certificate_ConstructProps)
    _init (config?: Pkcs11Certificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static lookupIssuer(certificate: Certificate, cancellable?: Gio.Cancellable | null): Certificate
    static lookupIssuerAsync(certificate: Certificate, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static lookupIssuerFinish(result: Gio.AsyncResult): Certificate
    static compare(first?: Comparable | null, other?: Comparable | null): number
    static $gtype: GObject.Type
}
interface SecretExchange_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gcr-3.Gcr.SecretExchange */
    protocol?: string
}
class SecretExchange {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.SecretExchange */
    begin(): string
    getProtocol(): string
    getSecret(): string[]
    receive(exchange: string): boolean
    send(secret: string | null, secretLen: number): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: SecretExchange_ConstructProps)
    _init (config?: SecretExchange_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(protocol?: string | null): SecretExchange
    static $gtype: GObject.Type
}
interface SimpleCertificate_ConstructProps extends GObject.Object_ConstructProps {
}
class SimpleCertificate {
    /* Properties of Gcr-3.Gcr.Certificate */
    readonly description: string
    readonly expiry: GLib.Date
    readonly icon: Gio.Icon
    readonly issuer: string
    readonly label: string
    readonly markup: string
    readonly subject: string
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
    /* Methods of Gcr-3.Gcr.Certificate */
    getBasicConstraints(): [ /* returnType */ boolean, /* isCa */ boolean | null, /* pathLen */ number | null ]
    getDerData(): Uint8Array
    getExpiryDate(): GLib.Date
    getFingerprint(type: GLib.ChecksumType): Uint8Array
    getFingerprintHex(type: GLib.ChecksumType): string
    getIssuedDate(): GLib.Date
    getIssuerCn(): string
    getIssuerDn(): string
    getIssuerName(): string
    getIssuerPart(part: string): string | null
    getIssuerRaw(): Uint8Array
    getKeySize(): number
    getMarkupText(): string
    getSerialNumber(): Uint8Array
    getSerialNumberHex(): string
    getSubjectCn(): string
    getSubjectDn(): string
    getSubjectName(): string
    getSubjectPart(part: string): string | null
    getSubjectRaw(): Uint8Array
    isIssuer(issuer: Certificate): boolean
    mixinEmitNotify(): void
    /* Methods of Gcr-3.Gcr.Comparable */
    compare(other?: Comparable | null): number
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
    connect(sigName: "notify::expiry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expiry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expiry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::issuer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::issuer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::issuer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleCertificate_ConstructProps)
    _init (config?: SimpleCertificate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array): SimpleCertificate
    static compare(first?: Comparable | null, other?: Comparable | null): number
    static $gtype: GObject.Type
}
interface SimpleCollection_ConstructProps extends GObject.Object_ConstructProps {
}
class SimpleCollection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.SimpleCollection */
    add(object: GObject.Object): void
    remove(object: GObject.Object): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gcr-3.Gcr.Collection */
    contains(object: GObject.Object): boolean
    emitAdded(object: GObject.Object): void
    emitRemoved(object: GObject.Object): void
    getLength(): number
    getObjects(): GObject.Object[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr-3.Gcr.Collection */
    connect(sigName: "added", callback: ((object: GObject.Object) => void)): number
    on(sigName: "added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "added", object: GObject.Object): void
    connect(sigName: "removed", callback: ((object: GObject.Object) => void)): number
    on(sigName: "removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "removed", object: GObject.Object): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SimpleCollection_ConstructProps)
    _init (config?: SimpleCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SimpleCollection
    static $gtype: GObject.Type
}
interface SshAskpass_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gcr-3.Gcr.SshAskpass */
    interaction?: Gio.TlsInteraction
}
class SshAskpass {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.SshAskpass */
    getInteraction(): Gio.TlsInteraction
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: SshAskpass_ConstructProps)
    _init (config?: SshAskpass_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(interaction: Gio.TlsInteraction): SshAskpass
    static childSetup(askpass?: object | null): void
    static $gtype: GObject.Type
}
interface SystemPrompt_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gcr-3.Gcr.SystemPrompt */
    busName?: string
    secretExchange?: SecretExchange
    timeoutSeconds?: number
    /* Constructor properties of Gcr-3.Gcr.Prompt */
    callerWindow?: string
    cancelLabel?: string
    choiceChosen?: boolean
    choiceLabel?: string
    continueLabel?: string
    description?: string
    message?: string
    passwordNew?: boolean
    title?: string
    warning?: string
}
class SystemPrompt {
    /* Properties of Gcr-3.Gcr.SystemPrompt */
    secretExchange: SecretExchange
    /* Properties of Gcr-3.Gcr.Prompt */
    callerWindow: string
    cancelLabel: string
    choiceChosen: boolean
    choiceLabel: string
    continueLabel: string
    description: string
    message: string
    passwordNew: boolean
    readonly passwordStrength: number
    title: string
    warning: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.SystemPrompt */
    close(cancellable?: Gio.Cancellable | null): boolean
    closeAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(result: Gio.AsyncResult): boolean
    getSecretExchange(): SecretExchange
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gcr-3.Gcr.Prompt */
    close(): void
    confirm(cancellable?: Gio.Cancellable | null): PromptReply
    confirmAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    confirmFinish(result: Gio.AsyncResult): PromptReply
    confirmRun(cancellable?: Gio.Cancellable | null): PromptReply
    getCallerWindow(): string
    getCancelLabel(): string
    getChoiceChosen(): boolean
    getChoiceLabel(): string
    getContinueLabel(): string
    getDescription(): string
    getMessage(): string
    getPasswordNew(): boolean
    getPasswordStrength(): number
    getTitle(): string
    getWarning(): string
    password(cancellable?: Gio.Cancellable | null): string
    passwordAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    passwordFinish(result: Gio.AsyncResult): string
    passwordRun(cancellable?: Gio.Cancellable | null): string
    reset(): void
    setCallerWindow(windowId: string): void
    setCancelLabel(cancelLabel: string): void
    setChoiceChosen(chosen: boolean): void
    setChoiceLabel(choiceLabel?: string | null): void
    setContinueLabel(continueLabel: string): void
    setDescription(description: string): void
    setMessage(message: string): void
    setPasswordNew(newPassword: boolean): void
    setTitle(title: string): void
    setWarning(warning?: string | null): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initFinish(res: Gio.AsyncResult): boolean
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr-3.Gcr.Prompt */
    connect(sigName: "prompt-close", callback: (() => void)): number
    on(sigName: "prompt-close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prompt-close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prompt-close", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "prompt-close"): void
    connect(sigName: "notify::secret-exchange", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secret-exchange", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secret-exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secret-exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secret-exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caller-window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caller-window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caller-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caller-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caller-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cancel-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancel-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancel-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancel-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancel-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::choice-chosen", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-chosen", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::choice-chosen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::choice-chosen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::choice-chosen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::choice-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::choice-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::choice-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::choice-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::choice-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::continue-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::continue-label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::continue-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::continue-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::continue-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-new", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-new", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-new", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-strength", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-strength", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: SystemPrompt_ConstructProps)
    _init (config?: SystemPrompt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static errorGetDomain(): GLib.Quark
    static open(timeoutSeconds: number, cancellable?: Gio.Cancellable | null): SystemPrompt
    static openAsync(timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static openFinish(result: Gio.AsyncResult): SystemPrompt
    static openForPrompter(prompterName: string | null, timeoutSeconds: number, cancellable?: Gio.Cancellable | null): SystemPrompt
    static openForPrompterAsync(prompterName: string | null, timeoutSeconds: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface SystemPrompter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gcr-3.Gcr.SystemPrompter */
    promptType?: GObject.Type
}
class SystemPrompter {
    /* Properties of Gcr-3.Gcr.SystemPrompter */
    readonly prompting: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.SystemPrompter */
    getMode(): SystemPrompterMode
    getPromptType(): GObject.Type
    getPrompting(): boolean
    register(connection: Gio.DBusConnection): void
    unregister(wait: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gcr-3.Gcr.SystemPrompter */
    connect(sigName: "new-prompt", callback: (() => Prompt)): number
    on(sigName: "new-prompt", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-prompt", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-prompt", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "new-prompt"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::prompting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prompting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prompting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prompting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prompting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SystemPrompter_ConstructProps)
    _init (config?: SystemPrompter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mode: SystemPrompterMode, promptType: GObject.Type): SystemPrompter
    static $gtype: GObject.Type
}
interface UnionCollection_ConstructProps extends GObject.Object_ConstructProps {
}
class UnionCollection {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gcr-3.Gcr.UnionCollection */
    add(collection: Collection): void
    elements(): Collection[]
    have(collection: Collection): boolean
    remove(collection: Collection): void
    size(): number
    take(collection: Collection): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gcr-3.Gcr.Collection */
    contains(object: GObject.Object): boolean
    emitAdded(object: GObject.Object): void
    emitRemoved(object: GObject.Object): void
    getLength(): number
    getObjects(): GObject.Object[]
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gcr-3.Gcr.Collection */
    connect(sigName: "added", callback: ((object: GObject.Object) => void)): number
    on(sigName: "added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "added", object: GObject.Object): void
    connect(sigName: "removed", callback: ((object: GObject.Object) => void)): number
    on(sigName: "removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "removed", object: GObject.Object): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UnionCollection_ConstructProps)
    _init (config?: UnionCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UnionCollection
    static $gtype: GObject.Type
}
abstract class CertificateChainClass {
    /* Fields of Gcr-3.Gcr.CertificateChainClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CertificateChainPrivate {
    static name: string
}
abstract class CertificateIface {
    /* Fields of Gcr-3.Gcr.CertificateIface */
    readonly parent: GObject.TypeInterface
    readonly getDerData: (self: Certificate) => Uint8Array
    static name: string
}
abstract class CertificateRequestClass {
    /* Fields of Gcr-3.Gcr.CertificateRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CollectionIface {
    /* Fields of Gcr-3.Gcr.CollectionIface */
    readonly parent: GObject.TypeInterface
    readonly added: (self: Collection, object: GObject.Object) => void
    readonly removed: (self: Collection, object: GObject.Object) => void
    readonly getLength: (self: Collection) => number
    readonly getObjects: (self: Collection) => GObject.Object[]
    readonly contains: (self: Collection, object: GObject.Object) => boolean
    static name: string
}
class Column {
    /* Fields of Gcr-3.Gcr.Column */
    readonly propertyName: string
    readonly propertyType: GObject.Type
    readonly columnType: GObject.Type
    readonly label: string
    readonly flags: ColumnFlags
    readonly transformer: GObject.ValueTransform
    readonly userData: object
    static name: string
}
abstract class ComparableIface {
    /* Fields of Gcr-3.Gcr.ComparableIface */
    readonly parent: GObject.TypeInterface
    readonly compare: (self: Comparable, other?: Comparable | null) => number
    static name: string
}
abstract class FilterCollectionClass {
    /* Fields of Gcr-3.Gcr.FilterCollectionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class FilterCollectionPrivate {
    static name: string
}
abstract class ImportInteractionIface {
    /* Fields of Gcr-3.Gcr.ImportInteractionIface */
    readonly parent: GObject.TypeInterface
    readonly supplementPrep: (interaction: ImportInteraction, builder: Gck.Builder) => void
    readonly supplement: (interaction: ImportInteraction, builder: Gck.Builder, cancellable?: Gio.Cancellable | null) => Gio.TlsInteractionResult
    readonly supplementAsync: (interaction: ImportInteraction, builder: Gck.Builder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly supplementFinish: (interaction: ImportInteraction, result: Gio.AsyncResult) => Gio.TlsInteractionResult
    static name: string
}
abstract class ImporterIface {
    /* Fields of Gcr-3.Gcr.ImporterIface */
    readonly parent: GObject.TypeInterface
    readonly queueForParsed: (importer: Importer, parsed: Parsed) => boolean
    readonly importSync: (importer: Importer, cancellable?: Gio.Cancellable | null) => boolean
    readonly importAsync: (importer: Importer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly importFinish: (importer: Importer, result: Gio.AsyncResult) => boolean
    static name: string
}
class Parsed {
    /* Methods of Gcr-3.Gcr.Parsed */
    getAttributes(): Gck.Attributes | null
    getBytes(): any
    getData(): Uint8Array | null
    getDescription(): string | null
    getFilename(): string
    getFormat(): DataFormat
    getLabel(): string | null
    ref(): Parsed
    static name: string
    /* Static methods and pseudo-constructors */
    static unref(parsed?: object | null): void
}
abstract class ParserClass {
    /* Fields of Gcr-3.Gcr.ParserClass */
    readonly parentClass: GObject.ObjectClass
    readonly authenticate: (self: Parser, count: number) => boolean
    readonly parsed: (self: Parser) => void
    static name: string
}
class ParserPrivate {
    static name: string
}
abstract class Pkcs11CertificateClass {
    static name: string
}
class Pkcs11CertificatePrivate {
    static name: string
}
abstract class PromptIface {
    /* Fields of Gcr-3.Gcr.PromptIface */
    readonly parentIface: GObject.TypeInterface
    readonly promptPasswordAsync: (prompt: Prompt, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly promptPasswordFinish: (prompt: Prompt, result: Gio.AsyncResult) => string
    readonly promptConfirmAsync: (prompt: Prompt, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly promptConfirmFinish: (prompt: Prompt, result: Gio.AsyncResult) => PromptReply
    readonly promptClose: (prompt: Prompt) => void
    static name: string
}
abstract class SecretExchangeClass {
    /* Fields of Gcr-3.Gcr.SecretExchangeClass */
    readonly generateExchangeKey: (exchange: SecretExchange, scheme: string, publicKey: number, nPublicKey: number) => boolean
    readonly deriveTransportKey: (exchange: SecretExchange, peer: number, nPeer: number) => boolean
    static name: string
}
class SecretExchangePrivate {
    static name: string
}
abstract class SimpleCertificateClass {
    /* Fields of Gcr-3.Gcr.SimpleCertificateClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SimpleCertificatePrivate {
    static name: string
}
abstract class SimpleCollectionClass {
    /* Fields of Gcr-3.Gcr.SimpleCollectionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SimpleCollectionPrivate {
    static name: string
}
abstract class SshAskpassClass {
    /* Fields of Gcr-3.Gcr.SshAskpassClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SystemPromptClass {
    /* Fields of Gcr-3.Gcr.SystemPromptClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SystemPromptPrivate {
    static name: string
}
abstract class SystemPrompterClass {
    /* Fields of Gcr-3.Gcr.SystemPrompterClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SystemPrompterPrivate {
    static name: string
}
abstract class UnionCollectionClass {
    /* Fields of Gcr-3.Gcr.UnionCollectionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class UnionCollectionPrivate {
    static name: string
}
}
export default Gcr;