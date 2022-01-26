/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GData-0.0
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';

export namespace GData {

enum BatchOperationType {
    QUERY,
    INSERTION,
    UPDATE,
    DELETION,
}
enum DocumentsServiceError {
    TYPE,
}
enum MediaExpression {
    SAMPLE,
    FULL,
    NONSTOP,
}
enum MediaMedium {
    UNKNOWN,
    IMAGE,
    AUDIO,
    VIDEO,
    DOCUMENT,
    EXECUTABLE,
}
enum OperationType {
    QUERY,
    INSERTION,
    UPDATE,
    DELETION,
    DOWNLOAD,
    UPLOAD,
    AUTHENTICATION,
    BATCH,
}
enum ParserError {
    PARSING_STRING,
    EMPTY_DOCUMENT,
}
enum PicasaWebVisibility {
    PUBLIC,
    PRIVATE,
}
enum ServiceError {
    UNAVAILABLE,
    PROTOCOL_ERROR,
    ENTRY_ALREADYSERTED,
    AUTHENTICATION_REQUIRED,
    NOT_FOUND,
    CONFLICT,
    FORBIDDEN,
    BAD_QUERY_PARAMETER,
    NETWORK_ERROR,
    PROXY_ERROR,
    WITH_BATCH_OPERATION,
    API_QUOTA_EXCEEDED,
}
enum YouTubeAge {
    ALL_TIME,
    TODAY,
    THIS_WEEK,
    THIS_MONTH,
}
enum YouTubePermission {
    ALLOWED,
    DENIED,
    MODERATED,
}
enum YouTubeSafeSearch {
    NONE,
    MODERATE,
    STRICT,
}
enum YouTubeServiceError {
    API_QUOTA_EXCEEDED,
    ENTRY_QUOTA_EXCEEDED,
    CHANNEL_REQUIRED,
}
enum YouTubeStandardFeedType {
    FEED,
}
const ACCESS_ROLE_NONE: string
const ACCESS_SCOPE_DEFAULT: string
const ACCESS_SCOPE_DOMAIN: string
const ACCESS_SCOPE_USER: string
const CALENDAR_ACCESS_ROLE_EDITOR: string
const CALENDAR_ACCESS_ROLE_FREE_BUSY: string
const CALENDAR_ACCESS_ROLE_OWNER: string
const CALENDAR_ACCESS_ROLE_READ: string
const CALENDAR_ACCESS_ROLE_ROOT: string
const CATEGORY_SCHEMA_LABELS: string
const DOCUMENTS_ACCESS_ROLE_OWNER: string
const DOCUMENTS_ACCESS_ROLE_READER: string
const DOCUMENTS_ACCESS_ROLE_WRITER: string
const DOCUMENTS_DRAWING_JPEG: string
const DOCUMENTS_DRAWING_PDF: string
const DOCUMENTS_DRAWING_PNG: string
const DOCUMENTS_DRAWING_SVG: string
const DOCUMENTS_PRESENTATION_PDF: string
const DOCUMENTS_PRESENTATION_PNG: string
const DOCUMENTS_PRESENTATION_PPT: string
const DOCUMENTS_PRESENTATION_TXT: string
const DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE: string
const DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC: string
const DOCUMENTS_SPREADSHEET_CSV: string
const DOCUMENTS_SPREADSHEET_HTML: string
const DOCUMENTS_SPREADSHEET_ODS: string
const DOCUMENTS_SPREADSHEET_PDF: string
const DOCUMENTS_SPREADSHEET_TSV: string
const DOCUMENTS_SPREADSHEET_XLS: string
const DOCUMENTS_TEXT_DOC: string
const DOCUMENTS_TEXT_HTML: string
const DOCUMENTS_TEXT_JPEG: string
const DOCUMENTS_TEXT_ODT: string
const DOCUMENTS_TEXT_PDF: string
const DOCUMENTS_TEXT_PNG: string
const DOCUMENTS_TEXT_RTF: string
const DOCUMENTS_TEXT_TXT: string
const DOCUMENTS_TEXT_ZIP: string
const GCONTACT_CALENDAR_FREE_BUSY: string
const GCONTACT_CALENDAR_HOME: string
const GCONTACT_CALENDAR_WORK: string
const GCONTACT_EVENT_ANNIVERSARY: string
const GCONTACT_EVENT_OTHER: string
const GCONTACT_EXTERNAL_ID_ACCOUNT: string
const GCONTACT_EXTERNAL_ID_CUSTOMER: string
const GCONTACT_EXTERNAL_ID_NETWORK: string
const GCONTACT_EXTERNAL_ID_ORGANIZATION: string
const GCONTACT_JOT_HOME: string
const GCONTACT_JOT_KEYWORDS: string
const GCONTACT_JOT_OTHER: string
const GCONTACT_JOT_USER: string
const GCONTACT_JOT_WORK: string
const GCONTACT_RELATION_ASSISTANT: string
const GCONTACT_RELATION_BROTHER: string
const GCONTACT_RELATION_CHILD: string
const GCONTACT_RELATION_DOMESTIC_PARTNER: string
const GCONTACT_RELATION_FATHER: string
const GCONTACT_RELATION_FRIEND: string
const GCONTACT_RELATION_MANAGER: string
const GCONTACT_RELATION_MOTHER: string
const GCONTACT_RELATION_PARENT: string
const GCONTACT_RELATION_PARTNER: string
const GCONTACT_RELATION_REFERRER: string
const GCONTACT_RELATION_RELATIVE: string
const GCONTACT_RELATION_SISTER: string
const GCONTACT_RELATION_SPOUSE: string
const GCONTACT_WEBSITE_BLOG: string
const GCONTACT_WEBSITE_FTP: string
const GCONTACT_WEBSITE_HOME: string
const GCONTACT_WEBSITE_HOME_PAGE: string
const GCONTACT_WEBSITE_OTHER: string
const GCONTACT_WEBSITE_PROFILE: string
const GCONTACT_WEBSITE_WORK: string
const GD_ADDRESS_USAGE_GENERAL: string
const GD_ADDRESS_USAGE_LOCAL: string
const GD_EMAIL_ADDRESS_HOME: string
const GD_EMAIL_ADDRESS_OTHER: string
const GD_EMAIL_ADDRESS_WORK: string
const GD_EVENT_STATUS_CANCELED: string
const GD_EVENT_STATUS_CONFIRMED: string
const GD_EVENT_STATUS_TENTATIVE: string
const GD_EVENT_TRANSPARENCY_OPAQUE: string
const GD_EVENT_TRANSPARENCY_TRANSPARENT: string
const GD_EVENT_VISIBILITY_CONFIDENTIAL: string
const GD_EVENT_VISIBILITY_DEFAULT: string
const GD_EVENT_VISIBILITY_PRIVATE: string
const GD_EVENT_VISIBILITY_PUBLIC: string
const GD_IM_ADDRESS_HOME: string
const GD_IM_ADDRESS_NETMEETING: string
const GD_IM_ADDRESS_OTHER: string
const GD_IM_ADDRESS_WORK: string
const GD_IM_PROTOCOL_AIM: string
const GD_IM_PROTOCOL_GOOGLE_TALK: string
const GD_IM_PROTOCOL_ICQ: string
const GD_IM_PROTOCOL_JABBER: string
const GD_IM_PROTOCOL_LIVE_MESSENGER: string
const GD_IM_PROTOCOL_QQ: string
const GD_IM_PROTOCOL_SKYPE: string
const GD_IM_PROTOCOL_YAHOO_MESSENGER: string
const GD_MAIL_CLASS_BOTH: string
const GD_MAIL_CLASS_LETTERS: string
const GD_MAIL_CLASS_NEITHER: string
const GD_MAIL_CLASS_PARCELS: string
const GD_ORGANIZATION_OTHER: string
const GD_ORGANIZATION_WORK: string
const GD_PHONE_NUMBER_ASSISTANT: string
const GD_PHONE_NUMBER_CALLBACK: string
const GD_PHONE_NUMBER_CAR: string
const GD_PHONE_NUMBER_COMPANY_MAIN: string
const GD_PHONE_NUMBER_FAX: string
const GD_PHONE_NUMBER_HOME: string
const GD_PHONE_NUMBER_HOME_FAX: string
const GD_PHONE_NUMBER_ISDN: string
const GD_PHONE_NUMBER_MAIN: string
const GD_PHONE_NUMBER_MOBILE: string
const GD_PHONE_NUMBER_OTHER: string
const GD_PHONE_NUMBER_OTHER_FAX: string
const GD_PHONE_NUMBER_PAGER: string
const GD_PHONE_NUMBER_RADIO: string
const GD_PHONE_NUMBER_TELEX: string
const GD_PHONE_NUMBER_TTY_TDD: string
const GD_PHONE_NUMBER_WORK: string
const GD_PHONE_NUMBER_WORK_FAX: string
const GD_PHONE_NUMBER_WORK_MOBILE: string
const GD_PHONE_NUMBER_WORK_PAGER: string
const GD_POSTAL_ADDRESS_HOME: string
const GD_POSTAL_ADDRESS_OTHER: string
const GD_POSTAL_ADDRESS_WORK: string
const GD_REMINDER_ALERT: string
const GD_REMINDER_EMAIL: string
const GD_REMINDER_SMS: string
const GD_WHERE_EVENT: string
const GD_WHERE_EVENT_ALTERNATE: string
const GD_WHERE_EVENT_PARKING: string
const GD_WHO_EVENT_ATTENDEE: string
const GD_WHO_EVENT_ORGANIZER: string
const GD_WHO_EVENT_PERFORMER: string
const GD_WHO_EVENT_SPEAKER: string
const LINK_ACCESS_CONTROL_LIST: string
const LINK_ALTERNATE: string
const LINK_BATCH: string
const LINK_EDIT: string
const LINK_EDIT_MEDIA: string
const LINK_ENCLOSURE: string
const LINK_PARENT: string
const LINK_RELATED: string
const LINK_RESUMABLE_CREATE_MEDIA: string
const LINK_RESUMABLE_EDIT_MEDIA: string
const LINK_SELF: string
const LINK_VIA: string
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const OAUTH2_REDIRECT_URI_OOB: string
const OAUTH2_REDIRECT_URI_OOB_AUTO: string
const PICASAWEB_VIDEO_STATUS_FAILED: string
const PICASAWEB_VIDEO_STATUS_FINAL: string
const PICASAWEB_VIDEO_STATUS_PENDING: string
const PICASAWEB_VIDEO_STATUS_READY: string
const TASKS_STATUS_COMPLETED: string
const TASKS_STATUS_NEEDS_ACTION: string
const YOUTUBE_ACTION_COMMENT: string
const YOUTUBE_ACTION_COMMENT_VOTE: string
const YOUTUBE_ACTION_EMBED: string
const YOUTUBE_ACTION_RATE: string
const YOUTUBE_ACTION_SYNDICATE: string
const YOUTUBE_ACTION_VIDEO_RESPOND: string
const YOUTUBE_ASPECT_RATIO_WIDESCREEN: string
const YOUTUBE_LICENSE_CC: string
const YOUTUBE_LICENSE_STANDARD: string
const YOUTUBE_RATING_TYPE_MPAA: string
const YOUTUBE_RATING_TYPE_V_CHIP: string
function colorFromHexadecimal(hexadecimal: string): [ /* returnType */ boolean, /* color */ Color ]
function documentsServiceErrorQuark(): GLib.Quark
function parserErrorQuark(): GLib.Quark
function serviceErrorQuark(): GLib.Quark
function youtubeServiceErrorQuark(): GLib.Quark
interface BatchOperationCallback {
    (operationId: number, operationType: BatchOperationType, entry: Entry, error: GLib.Error): void
}
interface QueryProgressCallback {
    (entry: Entry, entryKey: number, entryCount: number): void
}
interface AccessHandler_ConstructProps extends Entry_ConstructProps {
}
class AccessHandler {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccessHandler_ConstructProps)
    _init (config?: AccessHandler_ConstructProps): void
    static $gtype: GObject.Type
}
class Authorizer {
    /* Methods of GData-0.0.GData.Authorizer */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processRequest(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
    static name: string
}
interface Batchable_ConstructProps extends Service_ConstructProps {
}
class Batchable {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    readonly parent: GObject.Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Batchable */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Batchable_ConstructProps)
    _init (config?: Batchable_ConstructProps): void
    static $gtype: GObject.Type
}
interface Commentable_ConstructProps extends Entry_ConstructProps {
}
class Commentable {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Commentable */
    deleteComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): boolean
    deleteCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteCommentFinish(result: Gio.AsyncResult): boolean
    insertComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insertCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertCommentFinish(result: Gio.AsyncResult): Comment | null
    queryComments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed | null
    queryCommentsAsync(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryCommentsFinish(result: Gio.AsyncResult): Feed | null
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Commentable_ConstructProps)
    _init (config?: Commentable_ConstructProps): void
    static $gtype: GObject.Type
}
class Comparable {
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    static name: string
}
interface APPCategories_ConstructProps extends Parsable_ConstructProps {
}
class APPCategories {
    /* Properties of GData-0.0.GData.APPCategories */
    readonly isFixed: boolean
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.APPCategories */
    getCategories(): Category[]
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::is-fixed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-fixed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-fixed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: APPCategories_ConstructProps)
    _init (config?: APPCategories_ConstructProps): void
    static $gtype: GObject.Type
}
interface AccessRule_ConstructProps extends Entry_ConstructProps {
    /* Constructor properties of GData-0.0.GData.AccessRule */
    role?: string
    scopeType?: string
    scopeValue?: string
}
class AccessRule {
    /* Properties of GData-0.0.GData.AccessRule */
    readonly edited: number
    readonly key: string
    role: string
    scopeType: string
    scopeValue: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    getEdited(): number
    getKey(): string
    getRole(): string
    getScope(): [ /* type */ string | null, /* value */ string | null ]
    setRole(role: string): void
    setScope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AccessRule_ConstructProps)
    _init (config?: AccessRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): AccessRule
    /* Function overloads */
    static new(id?: string | null): AccessRule
    static $gtype: GObject.Type
}
interface Author_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.Author */
    emailAddress?: string
    name?: string
    uri?: string
}
class Author {
    /* Properties of GData-0.0.GData.Author */
    emailAddress: string
    name: string
    uri: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Author */
    getEmailAddress(): string
    getName(): string
    getUri(): string
    setEmailAddress(emailAddress?: string | null): void
    setName(name: string): void
    setUri(uri?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Author_ConstructProps)
    _init (config?: Author_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, uri?: string | null, emailAddress?: string | null): Author
    static $gtype: GObject.Type
}
interface AuthorizationDomain_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GData-0.0.GData.AuthorizationDomain */
    scope?: string
    serviceName?: string
}
class AuthorizationDomain {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AuthorizationDomain */
    getScope(): string
    getServiceName(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: AuthorizationDomain_ConstructProps)
    _init (config?: AuthorizationDomain_ConstructProps): void
    static $gtype: GObject.Type
}
interface BatchOperation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GData-0.0.GData.BatchOperation */
    authorizationDomain?: AuthorizationDomain
    feedUri?: string
    service?: Service
}
class BatchOperation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.BatchOperation */
    addDeletion(entry: Entry, callback: BatchOperationCallback): number
    addInsertion(entry: Entry, callback: BatchOperationCallback): number
    addQuery(id: string, entryType: GObject.Type, callback: BatchOperationCallback): number
    addUpdate(entry: Entry, callback: BatchOperationCallback): number
    getAuthorizationDomain(): AuthorizationDomain | null
    getFeedUri(): string
    getService(): Service
    run(cancellable?: Gio.Cancellable | null): boolean
    runAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runFinish(asyncResult: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: BatchOperation_ConstructProps)
    _init (config?: BatchOperation_ConstructProps): void
    static $gtype: GObject.Type
}
interface CalendarAccessRule_ConstructProps extends AccessRule_ConstructProps {
}
class CalendarAccessRule {
    /* Properties of GData-0.0.GData.AccessRule */
    readonly edited: number
    readonly key: string
    role: string
    scopeType: string
    scopeValue: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.AccessRule */
    readonly parent: Entry
    readonly priv: AccessRulePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    getEdited(): number
    getKey(): string
    getRole(): string
    getScope(): [ /* type */ string | null, /* value */ string | null ]
    setRole(role: string): void
    setScope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarAccessRule_ConstructProps)
    _init (config?: CalendarAccessRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): CalendarAccessRule
    /* Function overloads */
    static new(id: string): CalendarAccessRule
    static new(id?: string | null): CalendarAccessRule
    static $gtype: GObject.Type
}
interface CalendarCalendar_ConstructProps extends Entry_ConstructProps {
    /* Constructor properties of GData-0.0.GData.CalendarCalendar */
    color?: Color
    isHidden?: boolean
    isSelected?: boolean
    timezone?: string
}
class CalendarCalendar {
    /* Properties of GData-0.0.GData.CalendarCalendar */
    readonly accessLevel: string
    color: Color
    isHidden: boolean
    isSelected: boolean
    timezone: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarCalendar */
    getAccessLevel(): string
    getColor(): /* color */ Color
    getTimezone(): string
    setColor(color: Color): void
    setIsHidden(isHidden: boolean): void
    setIsSelected(isSelected: boolean): void
    setTimezone(timezone?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::access-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::access-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::access-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::access-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::access-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timezone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarCalendar_ConstructProps)
    _init (config?: CalendarCalendar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): CalendarCalendar
    /* Function overloads */
    static new(id?: string | null): CalendarCalendar
    static $gtype: GObject.Type
}
interface CalendarEvent_ConstructProps extends Entry_ConstructProps {
    /* Constructor properties of GData-0.0.GData.CalendarEvent */
    anyoneCanAddSelf?: boolean
    guestsCanInviteOthers?: boolean
    guestsCanModify?: boolean
    guestsCanSeeGuests?: boolean
    recurrence?: string
    sequence?: number
    status?: string
    transparency?: string
    uid?: string
    visibility?: string
}
class CalendarEvent {
    /* Properties of GData-0.0.GData.CalendarEvent */
    anyoneCanAddSelf: boolean
    readonly edited: number
    guestsCanInviteOthers: boolean
    guestsCanModify: boolean
    guestsCanSeeGuests: boolean
    readonly originalEventId: string
    readonly originalEventUri: string
    recurrence: string
    sequence: number
    status: string
    transparency: string
    uid: string
    visibility: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarEvent */
    addPerson(who: GDWho): void
    addPlace(where: GDWhere): void
    addTime(when: GDWhen): void
    getAnyoneCanAddSelf(): boolean
    getEdited(): number
    getGuestsCanInviteOthers(): boolean
    getGuestsCanModify(): boolean
    getGuestsCanSeeGuests(): boolean
    getOriginalEventDetails(): [ /* eventId */ string, /* eventUri */ string ]
    getPeople(): GDWho[]
    getPlaces(): GDWhere[]
    getPrimaryTime(): [ /* returnType */ boolean, /* startTime */ number, /* endTime */ number, /* when */ GDWhen ]
    getRecurrence(): string
    getSequence(): number
    getStatus(): string
    getTimes(): GDWhen[]
    getTransparency(): string
    getUid(): string
    getVisibility(): string
    isException(): boolean
    setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): void
    setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): void
    setGuestsCanModify(guestsCanModify: boolean): void
    setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): void
    setRecurrence(recurrence?: string | null): void
    setSequence(sequence: number): void
    setStatus(status?: string | null): void
    setTransparency(transparency?: string | null): void
    setUid(uid?: string | null): void
    setVisibility(visibility?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::anyone-can-add-self", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anyone-can-add-self", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anyone-can-add-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anyone-can-add-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anyone-can-add-self", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::guests-can-invite-others", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-invite-others", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::guests-can-invite-others", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::guests-can-invite-others", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::guests-can-invite-others", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::guests-can-modify", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-modify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::guests-can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::guests-can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::guests-can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::guests-can-see-guests", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::guests-can-see-guests", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::guests-can-see-guests", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::guests-can-see-guests", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::guests-can-see-guests", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::original-event-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::original-event-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::original-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::original-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::original-event-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::original-event-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::original-event-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::original-event-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::original-event-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::original-event-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recurrence", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recurrence", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recurrence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recurrence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recurrence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sequence", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sequence", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sequence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sequence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sequence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transparency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transparency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transparency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transparency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transparency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarEvent_ConstructProps)
    _init (config?: CalendarEvent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): CalendarEvent
    /* Function overloads */
    static new(id?: string | null): CalendarEvent
    static $gtype: GObject.Type
}
interface CalendarFeed_ConstructProps extends Feed_ConstructProps {
}
class CalendarFeed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarFeed_ConstructProps)
    _init (config?: CalendarFeed_ConstructProps): void
    static $gtype: GObject.Type
}
interface CalendarQuery_ConstructProps extends Query_ConstructProps {
    /* Constructor properties of GData-0.0.GData.CalendarQuery */
    futureEvents?: boolean
    maxAttendees?: number
    orderBy?: string
    showDeleted?: boolean
    singleEvents?: boolean
    startMax?: number
    startMin?: number
    timezone?: string
}
class CalendarQuery {
    /* Properties of GData-0.0.GData.CalendarQuery */
    futureEvents: boolean
    maxAttendees: number
    orderBy: string
    showDeleted: boolean
    singleEvents: boolean
    startMax: number
    startMin: number
    timezone: string
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.Query */
    readonly parent: GObject.Object
    readonly priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarQuery */
    getFutureEvents(): boolean
    getMaxAttendees(): number
    getOrderBy(): string
    getSingleEvents(): boolean
    getStartMax(): number
    getStartMin(): number
    getTimezone(): string
    setFutureEvents(futureEvents: boolean): void
    setMaxAttendees(maxAttendees: number): void
    setOrderBy(orderBy?: string | null): void
    setShowDeleted(showDeleted: boolean): void
    setSingleEvents(singleEvents: boolean): void
    setStartMax(startMax: number): void
    setStartMin(startMin: number): void
    setTimezone(timezone?: string | null): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::future-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::future-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::future-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::future-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-attendees", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-attendees", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-attendees", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-attendees", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-attendees", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::single-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::single-events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::single-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::single-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::single-events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timezone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarQuery_ConstructProps)
    _init (config?: CalendarQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): CalendarQuery
    /* Function overloads */
    static new(q?: string | null): CalendarQuery
    static newWithLimits(q: string | null, startMin: number, startMax: number): CalendarQuery
    /* Function overloads */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): CalendarQuery
    static $gtype: GObject.Type
}
interface CalendarService_ConstructProps extends Service_ConstructProps {
}
class CalendarService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    readonly parent: GObject.Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.CalendarService */
    insertCalendarEvent(calendar: CalendarCalendar, event: CalendarEvent, cancellable?: Gio.Cancellable | null): CalendarEvent
    insertCalendarEventAsync(calendar: CalendarCalendar, event: CalendarEvent, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAllCalendars(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAllCalendarsAsync(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryEvents(calendar: CalendarCalendar, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryEventsAsync(calendar: CalendarCalendar, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryOwnCalendars(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryOwnCalendarsAsync(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CalendarService_ConstructProps)
    _init (config?: CalendarService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): CalendarService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static $gtype: GObject.Type
}
interface Category_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.Category */
    label?: string
    scheme?: string
    term?: string
}
class Category {
    /* Properties of GData-0.0.GData.Category */
    label: string
    scheme: string
    term: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Category */
    getLabel(): string
    getScheme(): string
    getTerm(): string
    setLabel(label?: string | null): void
    setScheme(scheme?: string | null): void
    setTerm(term: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::term", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::term", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(term: string, scheme?: string | null, label?: string | null): Category
    static $gtype: GObject.Type
}
interface Comment_ConstructProps extends Entry_ConstructProps {
}
class Comment {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Comment_ConstructProps)
    _init (config?: Comment_ConstructProps): void
    static $gtype: GObject.Type
}
interface DocumentsAccessRule_ConstructProps extends AccessRule_ConstructProps {
}
class DocumentsAccessRule {
    /* Properties of GData-0.0.GData.AccessRule */
    readonly edited: number
    readonly key: string
    role: string
    scopeType: string
    scopeValue: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.AccessRule */
    readonly parent: Entry
    readonly priv: AccessRulePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.AccessRule */
    getEdited(): number
    getKey(): string
    getRole(): string
    getScope(): [ /* type */ string | null, /* value */ string | null ]
    setRole(role: string): void
    setScope(type: string, value?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scope-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scope-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scope-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsAccessRule_ConstructProps)
    _init (config?: DocumentsAccessRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): DocumentsAccessRule
    /* Function overloads */
    static new(id: string): DocumentsAccessRule
    static new(id?: string | null): DocumentsAccessRule
    static $gtype: GObject.Type
}
interface DocumentsDocument_ConstructProps extends DocumentsEntry_ConstructProps {
}
class DocumentsDocument {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsEntry */
    readonly parent: Entry
    readonly priv: DocumentsEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsDocument_ConstructProps)
    _init (config?: DocumentsDocument_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsDocument
    /* Function overloads */
    static new(id?: string | null): DocumentsDocument
    static $gtype: GObject.Type
}
interface DocumentsDrawing_ConstructProps extends DocumentsDocument_ConstructProps {
}
class DocumentsDrawing {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDocument */
    readonly parent: DocumentsEntry
    readonly priv: DocumentsDocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsDrawing_ConstructProps)
    _init (config?: DocumentsDrawing_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsDrawing
    /* Function overloads */
    static new(id?: string | null): DocumentsDrawing
    static new(id?: string | null): DocumentsDrawing
    static $gtype: GObject.Type
}
interface DocumentsDrive_ConstructProps extends Entry_ConstructProps {
}
class DocumentsDrive {
    /* Properties of GData-0.0.GData.DocumentsDrive */
    readonly name: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDrive */
    getName(): string | null
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsDrive_ConstructProps)
    _init (config?: DocumentsDrive_ConstructProps): void
    static $gtype: GObject.Type
}
interface DocumentsDriveQuery_ConstructProps extends Query_ConstructProps {
}
class DocumentsDriveQuery {
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.Query */
    readonly parent: GObject.Object
    readonly priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsDriveQuery_ConstructProps)
    _init (config?: DocumentsDriveQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): DocumentsDriveQuery
    /* Function overloads */
    static new(q?: string | null): DocumentsDriveQuery
    static $gtype: GObject.Type
}
interface DocumentsEntry_ConstructProps extends Entry_ConstructProps {
    /* Constructor properties of GData-0.0.GData.DocumentsEntry */
    isDeleted?: boolean
    writersCanInvite?: boolean
}
class DocumentsEntry {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsEntry_ConstructProps)
    _init (config?: DocumentsEntry_ConstructProps): void
    static $gtype: GObject.Type
}
interface DocumentsFeed_ConstructProps extends Feed_ConstructProps {
}
class DocumentsFeed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsFeed_ConstructProps)
    _init (config?: DocumentsFeed_ConstructProps): void
    static $gtype: GObject.Type
}
interface DocumentsFolder_ConstructProps extends DocumentsEntry_ConstructProps {
}
class DocumentsFolder {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsEntry */
    readonly parent: Entry
    readonly priv: DocumentsEntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsFolder_ConstructProps)
    _init (config?: DocumentsFolder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsFolder
    /* Function overloads */
    static new(id?: string | null): DocumentsFolder
    static $gtype: GObject.Type
}
interface DocumentsMetadata_ConstructProps extends Parsable_ConstructProps {
}
class DocumentsMetadata {
    /* Properties of GData-0.0.GData.DocumentsMetadata */
    readonly quotaTotal: number
    readonly quotaUsed: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsMetadata */
    getQuotaTotal(): number
    getQuotaUsed(): number
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::quota-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-total", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsMetadata_ConstructProps)
    _init (config?: DocumentsMetadata_ConstructProps): void
    static $gtype: GObject.Type
}
interface DocumentsPdf_ConstructProps extends DocumentsDocument_ConstructProps {
}
class DocumentsPdf {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDocument */
    readonly parent: DocumentsEntry
    readonly priv: DocumentsDocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsPdf_ConstructProps)
    _init (config?: DocumentsPdf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsPdf
    /* Function overloads */
    static new(id?: string | null): DocumentsPdf
    static new(id?: string | null): DocumentsPdf
    static $gtype: GObject.Type
}
interface DocumentsPresentation_ConstructProps extends DocumentsDocument_ConstructProps {
}
class DocumentsPresentation {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDocument */
    readonly parent: DocumentsEntry
    readonly priv: DocumentsDocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsPresentation_ConstructProps)
    _init (config?: DocumentsPresentation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsPresentation
    /* Function overloads */
    static new(id?: string | null): DocumentsPresentation
    static new(id?: string | null): DocumentsPresentation
    static $gtype: GObject.Type
}
interface DocumentsProperty_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.DocumentsProperty */
    etag?: string
    key?: string
    value?: string
    visibility?: string
}
class DocumentsProperty {
    /* Properties of GData-0.0.GData.DocumentsProperty */
    key: string
    value: string
    visibility: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsProperty */
    getEtag(): string
    getKey(): string
    getValue(): string | null
    getVisibility(): string
    setValue(value?: string | null): void
    setVisibility(visibility: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsProperty_ConstructProps)
    _init (config?: DocumentsProperty_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(key: string): DocumentsProperty
    static $gtype: GObject.Type
}
interface DocumentsQuery_ConstructProps extends Query_ConstructProps {
    /* Constructor properties of GData-0.0.GData.DocumentsQuery */
    exactTitle?: boolean
    folderId?: string
    showDeleted?: boolean
    showFolders?: boolean
    title?: string
}
class DocumentsQuery {
    /* Properties of GData-0.0.GData.DocumentsQuery */
    exactTitle: boolean
    folderId: string
    showDeleted: boolean
    showFolders: boolean
    title: string
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.Query */
    readonly parent: GObject.Object
    readonly priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsQuery */
    addCollaborator(emailAddress: string): void
    addReader(emailAddress: string): void
    getCollaboratorAddresses(): GDEmailAddress[]
    getExactTitle(): boolean
    getFolderId(): string
    getReaderAddresses(): GDEmailAddress[]
    getTitle(): string
    setFolderId(folderId?: string | null): void
    setShowDeleted(showDeleted: boolean): void
    setShowFolders(showFolders: boolean): void
    setTitle(title: string | null, exactTitle: boolean): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::exact-title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exact-title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exact-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exact-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exact-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-folders", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-folders", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-folders", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsQuery_ConstructProps)
    _init (config?: DocumentsQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): DocumentsQuery
    /* Function overloads */
    static new(q?: string | null): DocumentsQuery
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): DocumentsQuery
    /* Function overloads */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): DocumentsQuery
    static $gtype: GObject.Type
}
interface DocumentsService_ConstructProps extends Service_ConstructProps {
}
class DocumentsService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    readonly parent: GObject.Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsService */
    addEntryToFolder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null): DocumentsEntry
    addEntryToFolderAsync(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addEntryToFolderFinish(asyncResult: Gio.AsyncResult): DocumentsEntry
    copyDocument(document: DocumentsDocument, cancellable?: Gio.Cancellable | null): DocumentsDocument
    copyDocumentAsync(document: DocumentsDocument, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    copyDocumentFinish(asyncResult: Gio.AsyncResult): DocumentsDocument
    finishUpload(uploadStream: UploadStream): DocumentsDocument
    getMetadata(cancellable?: Gio.Cancellable | null): DocumentsMetadata
    getMetadataAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getMetadataFinish(asyncResult: Gio.AsyncResult): DocumentsMetadata
    queryDocuments(query?: DocumentsQuery | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): DocumentsFeed
    queryDocumentsAsync(query?: DocumentsQuery | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryDrives(query?: DocumentsDriveQuery | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): DocumentsFeed
    queryDrivesAsync(query?: DocumentsDriveQuery | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    removeEntryFromFolder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null): DocumentsEntry
    removeEntryFromFolderAsync(entry: DocumentsEntry, folder: DocumentsFolder, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeEntryFromFolderFinish(asyncResult: Gio.AsyncResult): DocumentsEntry
    updateDocument(document: DocumentsDocument, slug: string, contentType: string, cancellable?: Gio.Cancellable | null): UploadStream
    updateDocumentResumable(document: DocumentsDocument, slug: string, contentType: string, contentLength: number, cancellable?: Gio.Cancellable | null): UploadStream
    uploadDocument(document: DocumentsDocument | null, slug: string, contentType: string, folder?: DocumentsFolder | null, cancellable?: Gio.Cancellable | null): UploadStream
    uploadDocumentResumable(document: DocumentsDocument | null, slug: string, contentType: string, contentLength: number, query?: DocumentsUploadQuery | null, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsService_ConstructProps)
    _init (config?: DocumentsService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): DocumentsService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static getSpreadsheetAuthorizationDomain(): AuthorizationDomain
    static getUploadUri(folder?: DocumentsFolder | null): string
    static $gtype: GObject.Type
}
interface DocumentsSpreadsheet_ConstructProps extends DocumentsDocument_ConstructProps {
}
class DocumentsSpreadsheet {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDocument */
    readonly parent: DocumentsEntry
    readonly priv: DocumentsDocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsSpreadsheet */
    getDownloadUri(exportFormat: string, gid: number): string
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsSpreadsheet_ConstructProps)
    _init (config?: DocumentsSpreadsheet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsSpreadsheet
    /* Function overloads */
    static new(id?: string | null): DocumentsSpreadsheet
    static new(id?: string | null): DocumentsSpreadsheet
    static $gtype: GObject.Type
}
interface DocumentsText_ConstructProps extends DocumentsDocument_ConstructProps {
}
class DocumentsText {
    /* Properties of GData-0.0.GData.DocumentsEntry */
    readonly canEdit: boolean
    readonly fileSize: number
    isDeleted: boolean
    readonly lastModifiedBy: Author
    readonly lastViewed: number
    readonly quotaUsed: number
    readonly resourceId: string
    readonly sharedWithMeDate: number
    writersCanInvite: boolean
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.DocumentsDocument */
    readonly parent: DocumentsEntry
    readonly priv: DocumentsDocumentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsDocument */
    download(service: DocumentsService, exportFormat: string, cancellable?: Gio.Cancellable | null): DownloadStream
    getDownloadUri(exportFormat: string): string | null
    getThumbnailUri(): string | null
    /* Methods of GData-0.0.GData.DocumentsEntry */
    addDocumentsProperty(property: DocumentsProperty): boolean
    getDocumentProperties(): DocumentsProperty[]
    getFileSize(): number
    getLastModifiedBy(): Author
    getLastViewed(): number
    getPath(): string
    getQuotaUsed(): number
    getResourceId(): string
    getSharedWithMeDate(): number
    removeDocumentsProperty(property: DocumentsProperty): boolean
    setWritersCanInvite(writersCanInvite: boolean): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.AccessHandler */
    getRules(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    getRulesAsync(service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-edit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-edit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::file-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-modified-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-modified-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-viewed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-viewed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-with-me-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-with-me-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writers-can-invite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::writers-can-invite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsText_ConstructProps)
    _init (config?: DocumentsText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): DocumentsText
    /* Function overloads */
    static new(id?: string | null): DocumentsText
    static new(id?: string | null): DocumentsText
    static $gtype: GObject.Type
}
interface DocumentsUploadQuery_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GData-0.0.GData.DocumentsUploadQuery */
    convert?: boolean
    folder?: DocumentsFolder
}
class DocumentsUploadQuery {
    /* Properties of GData-0.0.GData.DocumentsUploadQuery */
    convert: boolean
    folder: DocumentsFolder
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DocumentsUploadQuery */
    buildUri(): string
    getConvert(): boolean
    getFolder(): DocumentsFolder | null
    setConvert(convert: boolean): void
    setFolder(folder?: DocumentsFolder | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::convert", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::convert", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::convert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::convert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::convert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::folder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DocumentsUploadQuery_ConstructProps)
    _init (config?: DocumentsUploadQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DocumentsUploadQuery
    static $gtype: GObject.Type
}
interface DownloadStream_ConstructProps extends Gio.InputStream_ConstructProps {
    /* Constructor properties of GData-0.0.GData.DownloadStream */
    authorizationDomain?: AuthorizationDomain
    cancellable?: Gio.Cancellable
    downloadUri?: string
    service?: Service
}
class DownloadStream {
    /* Properties of GData-0.0.GData.DownloadStream */
    readonly contentLength: number
    readonly contentType: string
    /* Fields of Gio-2.0.Gio.InputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.DownloadStream */
    getAuthorizationDomain(): AuthorizationDomain | null
    getCancellable(): Gio.Cancellable
    getContentLength(): number
    getContentType(): string
    getDownloadUri(): string
    getService(): Service
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
    connect(sigName: "notify::content-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DownloadStream_ConstructProps)
    _init (config?: DownloadStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: Service, domain: AuthorizationDomain | null, downloadUri: string, cancellable?: Gio.Cancellable | null): DownloadStream
    static $gtype: GObject.Type
}
interface Entry_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.Entry */
    content?: string
    contentUri?: string
    etag?: string
    id?: string
    rights?: string
    summary?: string
    title?: string
}
class Entry {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Entry_ConstructProps)
    _init (config?: Entry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): Entry
    static $gtype: GObject.Type
}
interface Feed_ConstructProps extends Parsable_ConstructProps {
}
class Feed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Feed_ConstructProps)
    _init (config?: Feed_ConstructProps): void
    static $gtype: GObject.Type
}
interface GContactCalendar_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GContactCalendar */
    isPrimary?: boolean
    label?: string
    relationType?: string
    uri?: string
}
class GContactCalendar {
    /* Properties of GData-0.0.GData.GContactCalendar */
    isPrimary: boolean
    label: string
    relationType: string
    uri: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactCalendar */
    getLabel(): string
    getRelationType(): string
    getUri(): string
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    setUri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: GContactCalendar_ConstructProps)
    _init (config?: GContactCalendar_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relationType: string | null, label: string | null, isPrimary: boolean): GContactCalendar
    static $gtype: GObject.Type
}
interface GContactEvent_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GContactEvent */
    date?: GLib.Date
    label?: string
    relationType?: string
}
class GContactEvent {
    /* Properties of GData-0.0.GData.GContactEvent */
    date: GLib.Date
    label: string
    relationType: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactEvent */
    getDate(): /* date */ GLib.Date
    getLabel(): string
    getRelationType(): string
    setDate(date: GLib.Date): void
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactEvent_ConstructProps)
    _init (config?: GContactEvent_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(date: GLib.Date, relationType?: string | null, label?: string | null): GContactEvent
    static $gtype: GObject.Type
}
interface GContactExternalID_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GContactExternalID */
    label?: string
    relationType?: string
    value?: string
}
class GContactExternalID {
    /* Properties of GData-0.0.GData.GContactExternalID */
    label: string
    relationType: string
    value: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactExternalID */
    getLabel(): string
    getRelationType(): string
    getValue(): string
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    setValue(value: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactExternalID_ConstructProps)
    _init (config?: GContactExternalID_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(value: string, relationType?: string | null, label?: string | null): GContactExternalID
    static $gtype: GObject.Type
}
interface GContactJot_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GContactJot */
    content?: string
    relationType?: string
}
class GContactJot {
    /* Properties of GData-0.0.GData.GContactJot */
    content: string
    relationType: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactJot */
    getContent(): string
    getRelationType(): string
    setContent(content: string): void
    setRelationType(relationType: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactJot_ConstructProps)
    _init (config?: GContactJot_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(content: string, relationType: string): GContactJot
    static $gtype: GObject.Type
}
interface GContactLanguage_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GContactLanguage */
    code?: string
    label?: string
}
class GContactLanguage {
    /* Properties of GData-0.0.GData.GContactLanguage */
    code: string
    label: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactLanguage */
    getCode(): string
    getLabel(): string
    setCode(code?: string | null): void
    setLabel(label?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::code", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::code", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactLanguage_ConstructProps)
    _init (config?: GContactLanguage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(code?: string | null, label?: string | null): GContactLanguage
    static $gtype: GObject.Type
}
interface GContactRelation_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GContactRelation */
    label?: string
    name?: string
    relationType?: string
}
class GContactRelation {
    /* Properties of GData-0.0.GData.GContactRelation */
    label: string
    name: string
    relationType: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactRelation */
    getLabel(): string
    getName(): string
    getRelationType(): string
    setLabel(label?: string | null): void
    setName(name?: string | null): void
    setRelationType(relationType?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GContactRelation_ConstructProps)
    _init (config?: GContactRelation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, relationType?: string | null, label?: string | null): GContactRelation
    static $gtype: GObject.Type
}
interface GContactWebsite_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GContactWebsite */
    isPrimary?: boolean
    label?: string
    relationType?: string
    uri?: string
}
class GContactWebsite {
    /* Properties of GData-0.0.GData.GContactWebsite */
    isPrimary: boolean
    label: string
    relationType: string
    uri: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GContactWebsite */
    getLabel(): string
    getRelationType(): string
    getUri(): string
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setRelationType(relationType: string): void
    setUri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: GContactWebsite_ConstructProps)
    _init (config?: GContactWebsite_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relationType: string, label: string | null, isPrimary: boolean): GContactWebsite
    static $gtype: GObject.Type
}
interface GDEmailAddress_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDEmailAddress */
    address?: string
    displayName?: string
    isPrimary?: boolean
    label?: string
    relationType?: string
}
class GDEmailAddress {
    /* Properties of GData-0.0.GData.GDEmailAddress */
    address: string
    displayName: string
    isPrimary: boolean
    label: string
    relationType: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDEmailAddress */
    getAddress(): string
    getDisplayName(): string
    getLabel(): string
    getRelationType(): string
    setAddress(address: string): void
    setDisplayName(displayName?: string | null): void
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
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
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDEmailAddress_ConstructProps)
    _init (config?: GDEmailAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: string, relationType: string | null, label: string | null, isPrimary: boolean): GDEmailAddress
    static $gtype: GObject.Type
}
interface GDIMAddress_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDIMAddress */
    address?: string
    isPrimary?: boolean
    label?: string
    protocol?: string
    relationType?: string
}
class GDIMAddress {
    /* Properties of GData-0.0.GData.GDIMAddress */
    address: string
    isPrimary: boolean
    label: string
    protocol: string
    relationType: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDIMAddress */
    getAddress(): string
    getLabel(): string
    getProtocol(): string
    getRelationType(): string
    setAddress(address: string): void
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setProtocol(protocol?: string | null): void
    setRelationType(relationType?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
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
    connect(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDIMAddress_ConstructProps)
    _init (config?: GDIMAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(address: string, protocol: string | null, relationType: string | null, label: string | null, isPrimary: boolean): GDIMAddress
    static $gtype: GObject.Type
}
interface GDName_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDName */
    additionalName?: string
    familyName?: string
    fullName?: string
    givenName?: string
    prefix?: string
    suffix?: string
}
class GDName {
    /* Properties of GData-0.0.GData.GDName */
    additionalName: string
    familyName: string
    fullName: string
    givenName: string
    prefix: string
    suffix: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDName */
    getAdditionalName(): string
    getFamilyName(): string
    getFullName(): string
    getGivenName(): string
    getPrefix(): string
    getSuffix(): string
    setAdditionalName(additionalName?: string | null): void
    setFamilyName(familyName?: string | null): void
    setFullName(fullName?: string | null): void
    setGivenName(givenName?: string | null): void
    setPrefix(prefix?: string | null): void
    setSuffix(suffix?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::additional-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::additional-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::additional-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::additional-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::additional-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::full-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::given-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::given-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::given-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prefix", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prefix", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prefix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suffix", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suffix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDName_ConstructProps)
    _init (config?: GDName_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(givenName?: string | null, familyName?: string | null): GDName
    static $gtype: GObject.Type
}
interface GDOrganization_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDOrganization */
    department?: string
    isPrimary?: boolean
    jobDescription?: string
    label?: string
    location?: GDWhere
    name?: string
    relationType?: string
    symbol?: string
    title?: string
}
class GDOrganization {
    /* Properties of GData-0.0.GData.GDOrganization */
    department: string
    isPrimary: boolean
    jobDescription: string
    label: string
    location: GDWhere
    name: string
    relationType: string
    symbol: string
    title: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDOrganization */
    getDepartment(): string
    getJobDescription(): string
    getLabel(): string
    getLocation(): GDWhere
    getName(): string
    getRelationType(): string
    getSymbol(): string
    getTitle(): string
    setDepartment(department?: string | null): void
    setIsPrimary(isPrimary: boolean): void
    setJobDescription(jobDescription?: string | null): void
    setLabel(label?: string | null): void
    setLocation(location?: GDWhere | null): void
    setName(name?: string | null): void
    setRelationType(relationType?: string | null): void
    setSymbol(symbol?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::department", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::department", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::department", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::department", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::department", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::job-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::job-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::job-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::job-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::job-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::symbol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDOrganization_ConstructProps)
    _init (config?: GDOrganization_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, title: string | null, relationType: string | null, label: string | null, isPrimary: boolean): GDOrganization
    static $gtype: GObject.Type
}
interface GDPhoneNumber_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDPhoneNumber */
    isPrimary?: boolean
    label?: string
    number?: string
    relationType?: string
    uri?: string
}
class GDPhoneNumber {
    /* Properties of GData-0.0.GData.GDPhoneNumber */
    isPrimary: boolean
    label: string
    number: string
    relationType: string
    uri: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDPhoneNumber */
    getLabel(): string
    getNumber(): string
    getRelationType(): string
    getUri(): string
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setNumber(number: string): void
    setRelationType(relationType?: string | null): void
    setUri(uri?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: GDPhoneNumber_ConstructProps)
    _init (config?: GDPhoneNumber_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(number: string, relationType: string | null, label: string | null, uri: string | null, isPrimary: boolean): GDPhoneNumber
    static $gtype: GObject.Type
}
interface GDPostalAddress_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDPostalAddress */
    address?: string
    agent?: string
    city?: string
    houseName?: string
    isPrimary?: boolean
    label?: string
    mailClass?: string
    neighborhood?: string
    poBox?: string
    postcode?: string
    region?: string
    relationType?: string
    street?: string
    subregion?: string
    usage?: string
}
class GDPostalAddress {
    /* Properties of GData-0.0.GData.GDPostalAddress */
    address: string
    agent: string
    city: string
    readonly country: string
    readonly countryCode: string
    houseName: string
    isPrimary: boolean
    label: string
    mailClass: string
    neighborhood: string
    poBox: string
    postcode: string
    region: string
    relationType: string
    street: string
    subregion: string
    usage: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDPostalAddress */
    getAddress(): string
    getAgent(): string
    getCity(): string
    getCountry(): string
    getCountryCode(): string
    getHouseName(): string
    getLabel(): string
    getMailClass(): string
    getNeighborhood(): string
    getPoBox(): string
    getPostcode(): string
    getRegion(): string
    getRelationType(): string
    getStreet(): string
    getSubregion(): string
    getUsage(): string
    setAddress(address?: string | null): void
    setAgent(agent?: string | null): void
    setCity(city?: string | null): void
    setCountry(country?: string | null, countryCode?: string | null): void
    setHouseName(houseName?: string | null): void
    setIsPrimary(isPrimary: boolean): void
    setLabel(label?: string | null): void
    setMailClass(mailClass?: string | null): void
    setNeighborhood(neighborhood?: string | null): void
    setPoBox(poBox?: string | null): void
    setPostcode(postcode?: string | null): void
    setRegion(region?: string | null): void
    setRelationType(relationType?: string | null): void
    setStreet(street?: string | null): void
    setSubregion(subregion?: string | null): void
    setUsage(usage?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
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
    connect(sigName: "notify::agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::city", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::city", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::city", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::city", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::city", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::country-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::country-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::country-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::house-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::house-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::house-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::house-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::house-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-primary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-primary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mail-class", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-class", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mail-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mail-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mail-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::neighborhood", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::neighborhood", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::neighborhood", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::neighborhood", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::neighborhood", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::po-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::po-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::po-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::postcode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::postcode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::postcode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::postcode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::postcode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::region", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::region", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::region", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::street", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::street", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::street", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subregion", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subregion", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subregion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subregion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subregion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::usage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::usage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::usage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDPostalAddress_ConstructProps)
    _init (config?: GDPostalAddress_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relationType: string | null, label: string | null, isPrimary: boolean): GDPostalAddress
    static $gtype: GObject.Type
}
interface GDReminder_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDReminder */
    absoluteTime?: number
    method?: string
    relativeTime?: number
}
class GDReminder {
    /* Properties of GData-0.0.GData.GDReminder */
    absoluteTime: number
    readonly isAbsoluteTime: boolean
    method: string
    relativeTime: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDReminder */
    getAbsoluteTime(): number
    getMethod(): string
    getRelativeTime(): number
    setAbsoluteTime(absoluteTime: number): void
    setMethod(method?: string | null): void
    setRelativeTime(relativeTime: number): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::absolute-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::absolute-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-absolute-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-absolute-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-absolute-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relative-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relative-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relative-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relative-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relative-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDReminder_ConstructProps)
    _init (config?: GDReminder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(method: string | null, absoluteTime: number, relativeTime: number): GDReminder
    static $gtype: GObject.Type
}
interface GDWhen_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDWhen */
    endTime?: number
    isDate?: boolean
    startTime?: number
    valueString?: string
}
class GDWhen {
    /* Properties of GData-0.0.GData.GDWhen */
    endTime: number
    isDate: boolean
    startTime: number
    valueString: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWhen */
    addReminder(reminder: GDReminder): void
    getEndTime(): number
    getReminders(): GDReminder[]
    getStartTime(): number
    getValueString(): string
    setEndTime(endTime: number): void
    setIsDate(isDate: boolean): void
    setStartTime(startTime: number): void
    setValueString(valueString?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::end-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDWhen_ConstructProps)
    _init (config?: GDWhen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(startTime: number, endTime: number, isDate: boolean): GDWhen
    static $gtype: GObject.Type
}
interface GDWhere_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDWhere */
    label?: string
    relationType?: string
    valueString?: string
}
class GDWhere {
    /* Properties of GData-0.0.GData.GDWhere */
    label: string
    relationType: string
    valueString: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWhere */
    getLabel(): string
    getRelationType(): string
    getValueString(): string
    setLabel(label?: string | null): void
    setRelationType(relationType?: string | null): void
    setValueString(valueString?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDWhere_ConstructProps)
    _init (config?: GDWhere_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relationType?: string | null, valueString?: string | null, label?: string | null): GDWhere
    static $gtype: GObject.Type
}
interface GDWho_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GDWho */
    emailAddress?: string
    relationType?: string
    valueString?: string
}
class GDWho {
    /* Properties of GData-0.0.GData.GDWho */
    emailAddress: string
    relationType: string
    valueString: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GDWho */
    getEmailAddress(): string
    getRelationType(): string
    getValueString(): string
    setEmailAddress(emailAddress?: string | null): void
    setRelationType(relationType?: string | null): void
    setValueString(valueString?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::value-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::value-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GDWho_ConstructProps)
    _init (config?: GDWho_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(relationType?: string | null, valueString?: string | null, emailAddress?: string | null): GDWho
    static $gtype: GObject.Type
}
interface Generator_ConstructProps extends Parsable_ConstructProps {
}
class Generator {
    /* Properties of GData-0.0.GData.Generator */
    readonly name: string
    readonly uri: string
    readonly version: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Generator */
    getName(): string | null
    getUri(): string | null
    getVersion(): string
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Generator_ConstructProps)
    _init (config?: Generator_ConstructProps): void
    static $gtype: GObject.Type
}
interface GoaAuthorizer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GData-0.0.GData.GoaAuthorizer */
    goaObject?: Goa.Object
}
class GoaAuthorizer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.GoaAuthorizer */
    getGoaObject(): Goa.Object
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processRequest(domain: AuthorizationDomain | null, message: Soup.Message): void
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
    constructor (config?: GoaAuthorizer_ConstructProps)
    _init (config?: GoaAuthorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(goaObject: Goa.Object): GoaAuthorizer
    static $gtype: GObject.Type
}
interface Link_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.Link */
    contentType?: string
    language?: string
    length?: number
    relationType?: string
    title?: string
    uri?: string
}
class Link {
    /* Properties of GData-0.0.GData.Link */
    contentType: string
    language: string
    length: number
    relationType: string
    title: string
    uri: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Link */
    getContentType(): string | null
    getLanguage(): string | null
    getLength(): number
    getRelationType(): string | null
    getTitle(): string
    getUri(): string
    setContentType(contentType?: string | null): void
    setLanguage(language?: string | null): void
    setLength(length: number): void
    setRelationType(relationType?: string | null): void
    setTitle(title?: string | null): void
    setUri(uri: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Link_ConstructProps)
    _init (config?: Link_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string, relationType?: string | null): Link
    static $gtype: GObject.Type
}
interface MediaCategory_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.MediaCategory */
    category?: string
    label?: string
    scheme?: string
}
class MediaCategory {
    /* Properties of GData-0.0.GData.MediaCategory */
    category: string
    label: string
    scheme: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaCategory */
    getCategory(): string
    getLabel(): string
    getScheme(): string
    setCategory(category: string): void
    setLabel(label?: string | null): void
    setScheme(scheme?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::category", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: MediaCategory_ConstructProps)
    _init (config?: MediaCategory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(category: string, scheme?: string | null, label?: string | null): MediaCategory
    static $gtype: GObject.Type
}
interface MediaContent_ConstructProps extends Parsable_ConstructProps {
}
class MediaContent {
    /* Properties of GData-0.0.GData.MediaContent */
    readonly contentType: string
    readonly duration: number
    readonly expression: MediaExpression
    readonly filesize: number
    readonly height: number
    readonly isDefault: boolean
    readonly medium: MediaMedium
    readonly uri: string
    readonly width: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaContent */
    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream
    getContentType(): string
    getDuration(): number
    getExpression(): MediaExpression
    getFilesize(): number
    getHeight(): number
    getMedium(): MediaMedium
    getUri(): string
    getWidth(): number
    /* Methods of GData-0.0.GData.Parsable */
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expression", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expression", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filesize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filesize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filesize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::medium", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::medium", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::medium", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::medium", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::medium", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaContent_ConstructProps)
    _init (config?: MediaContent_ConstructProps): void
    static $gtype: GObject.Type
}
interface MediaCredit_ConstructProps extends Parsable_ConstructProps {
}
class MediaCredit {
    /* Properties of GData-0.0.GData.MediaCredit */
    readonly credit: string
    readonly role: string
    readonly scheme: string
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaCredit */
    getCredit(): string
    getRole(): string
    getScheme(): string
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::credit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: MediaCredit_ConstructProps)
    _init (config?: MediaCredit_ConstructProps): void
    static $gtype: GObject.Type
}
interface MediaThumbnail_ConstructProps extends Parsable_ConstructProps {
}
class MediaThumbnail {
    /* Properties of GData-0.0.GData.MediaThumbnail */
    readonly height: number
    readonly time: number
    readonly uri: string
    readonly width: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.MediaThumbnail */
    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream
    getHeight(): number
    getTime(): number
    getUri(): string
    getWidth(): number
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MediaThumbnail_ConstructProps)
    _init (config?: MediaThumbnail_ConstructProps): void
    static $gtype: GObject.Type
}
interface OAuth2Authorizer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GData-0.0.GData.OAuth2Authorizer */
    clientId?: string
    clientSecret?: string
    locale?: string
    proxyResolver?: Gio.ProxyResolver
    redirectUri?: string
    refreshToken?: string
    timeout?: number
}
class OAuth2Authorizer {
    /* Properties of GData-0.0.GData.OAuth2Authorizer */
    locale: string
    proxyResolver: Gio.ProxyResolver
    refreshToken: string
    timeout: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.OAuth2Authorizer */
    buildAuthenticationUri(loginHint: string | null, includeGrantedScopes: boolean): string
    dupRefreshToken(): string
    getClientId(): string
    getClientSecret(): string
    getLocale(): string | null
    getProxyResolver(): Gio.ProxyResolver | null
    getRedirectUri(): string
    getTimeout(): number
    requestAuthorization(authorizationCode: string, cancellable?: Gio.Cancellable | null): boolean
    requestAuthorizationAsync(authorizationCode: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    requestAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setRefreshToken(refreshToken?: string | null): void
    setTimeout(timeout: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    processRequest(domain: AuthorizationDomain | null, message: Soup.Message): void
    refreshAuthorization(cancellable?: Gio.Cancellable | null): boolean
    refreshAuthorizationAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    refreshAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OAuth2Authorizer_ConstructProps)
    _init (config?: OAuth2Authorizer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(clientId: string, clientSecret: string, redirectUri: string, serviceType: GObject.Type): OAuth2Authorizer
    static newForAuthorizationDomains(clientId: string, clientSecret: string, redirectUri: string, authorizationDomains: AuthorizationDomain[]): OAuth2Authorizer
    static $gtype: GObject.Type
}
interface Parsable_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GData-0.0.GData.Parsable */
    constructedFromXml?: boolean
}
class Parsable {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Parsable_ConstructProps)
    _init (config?: Parsable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromJson(parsableType: GObject.Type, json: string, length: number): Parsable
    static newFromXml(parsableType: GObject.Type, xml: string, length: number): Parsable
    static $gtype: GObject.Type
}
interface PicasaWebAlbum_ConstructProps extends Entry_ConstructProps {
    /* Constructor properties of GData-0.0.GData.PicasaWebAlbum */
    albumId?: string
    isCommentingEnabled?: boolean
    latitude?: number
    location?: string
    longitude?: number
    tags?: string[]
    timestamp?: number
    visibility?: PicasaWebVisibility
}
class PicasaWebAlbum {
    /* Properties of GData-0.0.GData.PicasaWebAlbum */
    readonly bytesUsed: number
    readonly commentCount: number
    readonly edited: number
    isCommentingEnabled: boolean
    latitude: number
    location: string
    longitude: number
    readonly nickname: string
    readonly numPhotos: number
    readonly numPhotosRemaining: number
    tags: string[]
    timestamp: number
    readonly user: string
    visibility: PicasaWebVisibility
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebAlbum */
    getBytesUsed(): number
    getCommentCount(): number
    getContents(): MediaContent[]
    getCoordinates(): [ /* latitude */ number | null, /* longitude */ number | null ]
    getEdited(): number
    getId(): string
    getLocation(): string
    getNickname(): string
    getNumPhotos(): number
    getNumPhotosRemaining(): number
    getTags(): string[]
    getThumbnails(): MediaThumbnail[]
    getTimestamp(): number
    getUser(): string
    getVisibility(): PicasaWebVisibility
    setCoordinates(latitude: number, longitude: number): void
    setIsCommentingEnabled(isCommentingEnabled: boolean): void
    setLocation(location?: string | null): void
    setTags(tags?: string[] | null): void
    setTimestamp(timestamp: number): void
    setVisibility(visibility: PicasaWebVisibility): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::bytes-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytes-used", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bytes-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bytes-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bytes-used", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-commenting-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-commenting-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-photos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-photos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-photos-remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-photos-remaining", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-photos-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-photos-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-photos-remaining", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebAlbum_ConstructProps)
    _init (config?: PicasaWebAlbum_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): PicasaWebAlbum
    /* Function overloads */
    static new(id?: string | null): PicasaWebAlbum
    static $gtype: GObject.Type
}
interface PicasaWebComment_ConstructProps extends Comment_ConstructProps {
}
class PicasaWebComment {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Comment */
    readonly parent: Entry
    readonly priv: CommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebComment_ConstructProps)
    _init (config?: PicasaWebComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): PicasaWebComment
    /* Function overloads */
    static new(id?: string | null): PicasaWebComment
    static $gtype: GObject.Type
}
interface PicasaWebFeed_ConstructProps extends Feed_ConstructProps {
}
class PicasaWebFeed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebFeed_ConstructProps)
    _init (config?: PicasaWebFeed_ConstructProps): void
    static $gtype: GObject.Type
}
interface PicasaWebFile_ConstructProps extends Entry_ConstructProps {
    /* Constructor properties of GData-0.0.GData.PicasaWebFile */
    albumId?: string
    caption?: string
    checksum?: string
    fileId?: string
    isCommentingEnabled?: boolean
    latitude?: number
    longitude?: number
    rotation?: number
    tags?: string[]
    timestamp?: number
    version?: string
}
class PicasaWebFile {
    /* Properties of GData-0.0.GData.PicasaWebFile */
    albumId: string
    caption: string
    checksum: string
    readonly commentCount: number
    readonly credit: string
    readonly distance: number
    readonly edited: number
    readonly exposure: number
    readonly flash: boolean
    readonly focalLength: number
    readonly fstop: number
    readonly height: number
    readonly imageUniqueId: string
    isCommentingEnabled: boolean
    readonly iso: number
    latitude: number
    longitude: number
    readonly make: string
    readonly model: string
    rotation: number
    readonly size: number
    tags: string[]
    timestamp: number
    readonly videoStatus: string
    readonly width: number
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebFile */
    getAlbumId(): string
    getCaption(): string
    getChecksum(): string
    getCommentCount(): number
    getContents(): MediaContent[]
    getCoordinates(): [ /* latitude */ number | null, /* longitude */ number | null ]
    getCredit(): string
    getDistance(): number
    getEdited(): number
    getExposure(): number
    getFlash(): boolean
    getFocalLength(): number
    getFstop(): number
    getHeight(): number
    getId(): string
    getImageUniqueId(): string
    getIso(): number
    getMake(): string
    getModel(): string
    getRotation(): number
    getSize(): number
    getTags(): string[]
    getThumbnails(): MediaThumbnail[]
    getTimestamp(): number
    getVersion(): string
    getVideoStatus(): string
    getWidth(): number
    setAlbumId(albumId: string): void
    setCaption(caption?: string | null): void
    setChecksum(checksum?: string | null): void
    setCoordinates(latitude: number, longitude: number): void
    setIsCommentingEnabled(isCommentingEnabled: boolean): void
    setRotation(rotation: number): void
    setTags(tags?: string[] | null): void
    setTimestamp(timestamp: number): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Commentable */
    deleteComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): boolean
    deleteCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteCommentFinish(result: Gio.AsyncResult): boolean
    insertComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insertCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertCommentFinish(result: Gio.AsyncResult): Comment | null
    queryComments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed | null
    queryCommentsAsync(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryCommentsFinish(result: Gio.AsyncResult): Feed | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::album-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::checksum", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::checksum", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::checksum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::comment-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::comment-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::comment-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::credit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::credit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::credit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::distance", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::distance", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::edited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::edited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exposure", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exposure", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exposure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exposure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exposure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flash", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flash", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flash", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focal-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focal-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focal-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focal-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focal-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fstop", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fstop", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fstop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fstop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fstop", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-unique-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-unique-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-unique-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-commenting-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-commenting-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-commenting-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iso", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iso", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iso", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iso", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iso", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::make", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::make", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::make", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::make", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::make", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::video-status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::video-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::video-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::video-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebFile_ConstructProps)
    _init (config?: PicasaWebFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): PicasaWebFile
    /* Function overloads */
    static new(id?: string | null): PicasaWebFile
    static $gtype: GObject.Type
}
interface PicasaWebQuery_ConstructProps extends Query_ConstructProps {
    /* Constructor properties of GData-0.0.GData.PicasaWebQuery */
    imageSize?: string
    location?: string
    tag?: string
    thumbnailSize?: string
    visibility?: number
}
class PicasaWebQuery {
    /* Properties of GData-0.0.GData.PicasaWebQuery */
    imageSize: string
    location: string
    tag: string
    thumbnailSize: string
    visibility: number
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.Query */
    readonly parent: GObject.Object
    readonly priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebQuery */
    getBoundingBox(): [ /* north */ number | null, /* east */ number | null, /* south */ number | null, /* west */ number | null ]
    getImageSize(): string
    getLocation(): string
    getTag(): string
    getThumbnailSize(): string
    getVisibility(): PicasaWebVisibility
    setBoundingBox(north: number, east: number, south: number, west: number): void
    setImageSize(imageSize?: string | null): void
    setLocation(location?: string | null): void
    setTag(tag?: string | null): void
    setThumbnailSize(thumbnailSize?: string | null): void
    setVisibility(visibility: PicasaWebVisibility): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::image-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thumbnail-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thumbnail-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thumbnail-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thumbnail-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebQuery_ConstructProps)
    _init (config?: PicasaWebQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): PicasaWebQuery
    /* Function overloads */
    static new(q?: string | null): PicasaWebQuery
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): PicasaWebQuery
    /* Function overloads */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): PicasaWebQuery
    static $gtype: GObject.Type
}
interface PicasaWebService_ConstructProps extends Service_ConstructProps {
}
class PicasaWebService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    readonly parent: GObject.Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebService */
    finishFileUpload(uploadStream: UploadStream): PicasaWebFile
    getUser(username?: string | null, cancellable?: Gio.Cancellable | null): PicasaWebUser
    getUserAsync(username?: string | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getUserFinish(result: Gio.AsyncResult): PicasaWebUser
    insertAlbum(album: PicasaWebAlbum, cancellable?: Gio.Cancellable | null): PicasaWebAlbum
    insertAlbumAsync(album: PicasaWebAlbum, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAllAlbums(query?: Query | null, username?: string | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAllAlbumsAsync(query?: Query | null, username?: string | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFiles(album?: PicasaWebAlbum | null, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryFilesAsync(album?: PicasaWebAlbum | null, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    uploadFile(album: PicasaWebAlbum | null, fileEntry: PicasaWebFile, slug: string, contentType: string, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebService_ConstructProps)
    _init (config?: PicasaWebService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): PicasaWebService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static $gtype: GObject.Type
}
interface PicasaWebUser_ConstructProps extends Entry_ConstructProps {
}
class PicasaWebUser {
    /* Properties of GData-0.0.GData.PicasaWebUser */
    readonly maxPhotosPerAlbum: number
    readonly nickname: string
    readonly quotaCurrent: number
    readonly quotaLimit: number
    readonly thumbnailUri: string
    readonly user: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.PicasaWebUser */
    getMaxPhotosPerAlbum(): number
    getNickname(): string
    getQuotaCurrent(): number
    getQuotaLimit(): number
    getThumbnailUri(): string
    getUser(): string
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::max-photos-per-album", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-photos-per-album", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-photos-per-album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-photos-per-album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-photos-per-album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nickname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nickname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nickname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-current", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-current", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quota-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quota-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quota-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quota-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::thumbnail-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbnail-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::thumbnail-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::thumbnail-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::thumbnail-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PicasaWebUser_ConstructProps)
    _init (config?: PicasaWebUser_ConstructProps): void
    static $gtype: GObject.Type
}
interface Query_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GData-0.0.GData.Query */
    author?: string
    categories?: string
    etag?: string
    isStrict?: boolean
    maxResults?: number
    publishedMax?: number
    publishedMin?: number
    q?: string
    startIndex?: number
    updatedMax?: number
    updatedMin?: number
}
class Query {
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Query_ConstructProps)
    _init (config?: Query_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): Query
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): Query
    static $gtype: GObject.Type
}
interface Service_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GData-0.0.GData.Service */
    authorizer?: Authorizer
    locale?: string
    proxyResolver?: Gio.ProxyResolver
    timeout?: number
}
class Service {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static getAuthorizationDomains(serviceType: GObject.Type): AuthorizationDomain[]
    static $gtype: GObject.Type
}
interface TasksQuery_ConstructProps extends Query_ConstructProps {
    /* Constructor properties of GData-0.0.GData.TasksQuery */
    completedMax?: number
    completedMin?: number
    dueMax?: number
    dueMin?: number
    showCompleted?: boolean
    showDeleted?: boolean
    showHidden?: boolean
}
class TasksQuery {
    /* Properties of GData-0.0.GData.TasksQuery */
    completedMax: number
    completedMin: number
    dueMax: number
    dueMin: number
    showCompleted: boolean
    showDeleted: boolean
    showHidden: boolean
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.Query */
    readonly parent: GObject.Object
    readonly priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksQuery */
    getCompletedMax(): number
    getCompletedMin(): number
    getDueMax(): number
    getDueMin(): number
    getShowCompleted(): boolean
    getShowDeleted(): boolean
    getShowHidden(): boolean
    setCompletedMax(completedMax: number): void
    setCompletedMin(completedMin: number): void
    setDueMax(dueMax: number): void
    setDueMin(dueMin: number): void
    setShowCompleted(showCompleted: boolean): void
    setShowDeleted(showDeleted: boolean): void
    setShowHidden(showHidden: boolean): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::completed-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completed-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::due-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::due-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::due-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::due-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::due-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::due-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::due-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::due-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-completed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-completed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TasksQuery_ConstructProps)
    _init (config?: TasksQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): TasksQuery
    /* Function overloads */
    static new(q?: string | null): TasksQuery
    static $gtype: GObject.Type
}
interface TasksService_ConstructProps extends Service_ConstructProps {
}
class TasksService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    readonly parent: GObject.Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksService */
    deleteTask(task: TasksTask, cancellable?: Gio.Cancellable | null): boolean
    deleteTaskAsync(task: TasksTask, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteTasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): boolean
    deleteTasklistAsync(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertTask(task: TasksTask, tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTask
    insertTaskAsync(task: TasksTask, tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertTasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist
    insertTasklistAsync(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryAllTasklists(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAllTasklistsAsync(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryTasks(tasklist: TasksTasklist, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryTasksAsync(tasklist: TasksTasklist, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    updateTask(task: TasksTask, cancellable?: Gio.Cancellable | null): TasksTask
    updateTaskAsync(task: TasksTask, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateTasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist
    updateTasklistAsync(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TasksService_ConstructProps)
    _init (config?: TasksService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(authorizer?: Authorizer | null): TasksService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static $gtype: GObject.Type
}
interface TasksTask_ConstructProps extends Entry_ConstructProps {
    /* Constructor properties of GData-0.0.GData.TasksTask */
    completed?: number
    due?: number
    isDeleted?: boolean
    notes?: string
    parent?: string
    position?: string
    status?: string
}
class TasksTask {
    /* Properties of GData-0.0.GData.TasksTask */
    completed: number
    due: number
    isDeleted: boolean
    readonly isHidden: boolean
    notes: string
    parent: string
    position: string
    status: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.TasksTask */
    getCompleted(): number
    getDue(): number
    getNotes(): string | null
    getParent(): string | null
    getPosition(): string | null
    getStatus(): string | null
    setCompleted(completed: number): void
    setDue(due: number): void
    setIsDeleted(deleted: boolean): void
    setNotes(notes?: string | null): void
    setParent(parent?: string | null): void
    setPosition(position: string): void
    setStatus(status?: string | null): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::completed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::due", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::due", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::due", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::due", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::due", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deleted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deleted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::notes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::notes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::notes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TasksTask_ConstructProps)
    _init (config?: TasksTask_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): TasksTask
    /* Function overloads */
    static new(id?: string | null): TasksTask
    static $gtype: GObject.Type
}
interface TasksTasklist_ConstructProps extends Entry_ConstructProps {
}
class TasksTasklist {
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TasksTasklist_ConstructProps)
    _init (config?: TasksTasklist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): TasksTasklist
    /* Function overloads */
    static new(id?: string | null): TasksTasklist
    static $gtype: GObject.Type
}
interface UploadStream_ConstructProps extends Gio.OutputStream_ConstructProps {
    /* Constructor properties of GData-0.0.GData.UploadStream */
    authorizationDomain?: AuthorizationDomain
    cancellable?: Gio.Cancellable
    contentLength?: number
    contentType?: string
    entry?: Entry
    method?: string
    service?: Service
    slug?: string
    uploadUri?: string
}
class UploadStream {
    /* Fields of Gio-2.0.Gio.OutputStream */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.UploadStream */
    getAuthorizationDomain(): AuthorizationDomain | null
    getCancellable(): Gio.Cancellable
    getContentLength(): number
    getContentType(): string
    getEntry(): Entry
    getMethod(): string
    getResponse(): [ /* returnType */ string, /* length */ number | null ]
    getService(): Service
    getSlug(): string
    getUploadUri(): string
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
    constructor (config?: UploadStream_ConstructProps)
    _init (config?: UploadStream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(service: Service, domain: AuthorizationDomain | null, method: string, uploadUri: string, entry: Entry | null, slug: string, contentType: string, cancellable?: Gio.Cancellable | null): UploadStream
    static newResumable(service: Service, domain: AuthorizationDomain | null, method: string, uploadUri: string, entry: Entry | null, slug: string, contentType: string, contentLength: number, cancellable?: Gio.Cancellable | null): UploadStream
    static $gtype: GObject.Type
}
interface YouTubeCategory_ConstructProps extends Category_ConstructProps {
}
class YouTubeCategory {
    /* Properties of GData-0.0.GData.YouTubeCategory */
    readonly isAssignable: boolean
    readonly isDeprecated: boolean
    /* Properties of GData-0.0.GData.Category */
    label: string
    scheme: string
    term: string
    /* Fields of GData-0.0.GData.Category */
    readonly parent: Parsable
    readonly priv: CategoryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeCategory */
    isBrowsable(region: string): boolean
    /* Methods of GData-0.0.GData.Category */
    getLabel(): string
    getScheme(): string
    getTerm(): string
    setLabel(label?: string | null): void
    setScheme(scheme?: string | null): void
    setTerm(term: string): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Comparable */
    compare(other?: Comparable | null): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-assignable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-assignable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-assignable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-assignable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-assignable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-deprecated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-deprecated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-deprecated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-deprecated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-deprecated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::term", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::term", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::term", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeCategory_ConstructProps)
    _init (config?: YouTubeCategory_ConstructProps): void
    static $gtype: GObject.Type
}
interface YouTubeComment_ConstructProps extends Comment_ConstructProps {
    /* Constructor properties of GData-0.0.GData.YouTubeComment */
    parentCommentUri?: string
}
class YouTubeComment {
    /* Properties of GData-0.0.GData.YouTubeComment */
    parentCommentUri: string
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Comment */
    readonly parent: Entry
    readonly priv: CommentPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeComment */
    getParentCommentUri(): string
    setParentCommentUri(parentCommentUri: string): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::parent-comment-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent-comment-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent-comment-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent-comment-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent-comment-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeComment_ConstructProps)
    _init (config?: YouTubeComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): YouTubeComment
    /* Function overloads */
    static new(id?: string | null): YouTubeComment
    static $gtype: GObject.Type
}
interface YouTubeFeed_ConstructProps extends Feed_ConstructProps {
}
class YouTubeFeed {
    /* Properties of GData-0.0.GData.Feed */
    readonly etag: string
    readonly generator: Generator
    readonly icon: string
    readonly id: string
    readonly itemsPerPage: number
    readonly logo: string
    readonly nextPageToken: string
    readonly rights: string
    readonly startIndex: number
    readonly subtitle: string
    readonly title: string
    readonly totalResults: number
    readonly updated: number
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.Feed */
    getAuthors(): Author[]
    getCategories(): Category[]
    getEntries(): Entry[]
    getEtag(): string
    getGenerator(): Generator
    getIcon(): string
    getId(): string
    getItemsPerPage(): number
    getLinks(): Link[]
    getLogo(): string
    getNextPageToken(): string | null
    getRights(): string
    getStartIndex(): number
    getSubtitle(): string
    getTitle(): string
    getTotalResults(): number
    getUpdated(): number
    lookUpEntry(id: string): Entry
    lookUpLink(rel: string): Link
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::generator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::generator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::items-per-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::items-per-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::logo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-page-token", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::next-page-token", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeFeed_ConstructProps)
    _init (config?: YouTubeFeed_ConstructProps): void
    static $gtype: GObject.Type
}
interface YouTubeQuery_ConstructProps extends Query_ConstructProps {
    /* Constructor properties of GData-0.0.GData.YouTubeQuery */
    age?: YouTubeAge
    latitude?: number
    license?: string
    locationRadius?: number
    longitude?: number
    orderBy?: string
    restriction?: string
    safeSearch?: YouTubeSafeSearch
}
class YouTubeQuery {
    /* Properties of GData-0.0.GData.YouTubeQuery */
    age: YouTubeAge
    latitude: number
    license: string
    locationRadius: number
    longitude: number
    orderBy: string
    restriction: string
    safeSearch: YouTubeSafeSearch
    /* Properties of GData-0.0.GData.Query */
    author: string
    categories: string
    etag: string
    isStrict: boolean
    maxResults: number
    publishedMax: number
    publishedMin: number
    q: string
    startIndex: number
    updatedMax: number
    updatedMin: number
    /* Fields of GData-0.0.GData.Query */
    readonly parent: GObject.Object
    readonly priv: QueryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeQuery */
    getAge(): YouTubeAge
    getLicense(): string
    getLocation(): [ /* latitude */ number | null, /* longitude */ number | null, /* radius */ number | null ]
    getOrderBy(): string
    getRestriction(): string
    getSafeSearch(): YouTubeSafeSearch
    setAge(age: YouTubeAge): void
    setLicense(license?: string | null): void
    setLocation(latitude: number, longitude: number, radius: number): void
    setOrderBy(orderBy?: string | null): void
    setRestriction(restriction?: string | null): void
    setSafeSearch(safeSearch: YouTubeSafeSearch): void
    /* Methods of GData-0.0.GData.Query */
    getAuthor(): string
    getCategories(): string
    getEtag(): string
    getMaxResults(): number
    getPublishedMax(): number
    getPublishedMin(): number
    getQ(): string
    getQueryUri(feedUri: string): string
    getStartIndex(): number
    getUpdatedMax(): number
    getUpdatedMin(): number
    nextPage(): void
    previousPage(): boolean
    setAuthor(author?: string | null): void
    setCategories(categories?: string | null): void
    setEtag(etag?: string | null): void
    setIsStrict(isStrict: boolean): void
    setMaxResults(maxResults: number): void
    setPublishedMax(publishedMax: number): void
    setPublishedMin(publishedMin: number): void
    setQ(q?: string | null): void
    setStartIndex(startIndex: number): void
    setUpdatedMax(updatedMax: number): void
    setUpdatedMin(updatedMin: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::age", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::age", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location-radius", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location-radius", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::order-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::order-by", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::order-by", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::restriction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::restriction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::restriction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::restriction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::safe-search", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::safe-search", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::safe-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::safe-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::safe-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::etag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::etag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-strict", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-results", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-results", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::q", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::q", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated-min", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated-min", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeQuery_ConstructProps)
    _init (config?: YouTubeQuery_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(q?: string | null): YouTubeQuery
    /* Function overloads */
    static new(q?: string | null): YouTubeQuery
    static $gtype: GObject.Type
}
interface YouTubeService_ConstructProps extends Service_ConstructProps {
    /* Constructor properties of GData-0.0.GData.YouTubeService */
    developerKey?: string
}
class YouTubeService {
    /* Properties of GData-0.0.GData.Service */
    authorizer: Authorizer
    locale: string
    proxyResolver: Gio.ProxyResolver
    timeout: number
    /* Fields of GData-0.0.GData.Service */
    readonly parent: GObject.Object
    readonly priv: ServicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeService */
    finishVideoUpload(uploadStream: UploadStream): YouTubeVideo
    getCategories(cancellable?: Gio.Cancellable | null): APPCategories
    getCategoriesAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCategoriesFinish(asyncResult: Gio.AsyncResult): APPCategories
    getDeveloperKey(): string
    queryRelated(video: YouTubeVideo, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryRelatedAsync(video: YouTubeVideo, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryStandardFeed(feedType: YouTubeStandardFeedType, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryStandardFeedAsync(feedType: YouTubeStandardFeedType, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryVideos(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryVideosAsync(query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    uploadVideo(video: YouTubeVideo, slug: string, contentType: string, cancellable?: Gio.Cancellable | null): UploadStream
    /* Methods of GData-0.0.GData.Service */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    getAuthorizer(): Authorizer
    getLocale(): string
    getProxyResolver(): Gio.ProxyResolver | null
    getTimeout(): number
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    isAuthorized(): boolean
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null): Entry
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.Type, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    setAuthorizer(authorizer: Authorizer): void
    setLocale(locale?: string | null): void
    setProxyResolver(proxyResolver?: Gio.ProxyResolver | null): void
    setTimeout(timeout: number): void
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Batchable */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::authorizer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::authorizer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::locale", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeService_ConstructProps)
    _init (config?: YouTubeService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(developerKey: string, authorizer?: Authorizer | null): YouTubeService
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    static $gtype: GObject.Type
}
interface YouTubeState_ConstructProps extends Parsable_ConstructProps {
    /* Constructor properties of GData-0.0.GData.YouTubeState */
    helpUri?: string
    message?: string
    name?: string
    reasonCode?: string
}
class YouTubeState {
    /* Fields of GData-0.0.GData.Parsable */
    readonly parent: GObject.Object
    readonly priv: ParsablePrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeState */
    getHelpUri(): string
    getMessage(): string
    getName(): string
    getReasonCode(): string
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: YouTubeState_ConstructProps)
    _init (config?: YouTubeState_ConstructProps): void
    static $gtype: GObject.Type
}
interface YouTubeVideo_ConstructProps extends Entry_ConstructProps {
    /* Constructor properties of GData-0.0.GData.YouTubeVideo */
    aspectRatio?: string
    category?: MediaCategory
    description?: string
    isPrivate?: boolean
    keywords?: string[]
    latitude?: number
    location?: string
    longitude?: number
    recorded?: number
}
class YouTubeVideo {
    /* Properties of GData-0.0.GData.YouTubeVideo */
    aspectRatio: string
    readonly averageRating: number
    category: MediaCategory
    description: string
    readonly duration: number
    readonly favoriteCount: number
    isPrivate: boolean
    keywords: string[]
    latitude: number
    location: string
    longitude: number
    readonly maxRating: number
    readonly minRating: number
    readonly playerUri: string
    readonly ratingCount: number
    recorded: number
    readonly state: YouTubeState
    readonly uploaded: number
    readonly viewCount: number
    /* Properties of GData-0.0.GData.Entry */
    content: string
    contentUri: string
    readonly isInserted: boolean
    readonly published: number
    rights: string
    summary: string
    title: string
    readonly updated: number
    /* Fields of GData-0.0.GData.Entry */
    readonly parent: Parsable
    readonly priv: EntryPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GData-0.0.GData.YouTubeVideo */
    getAccessControl(action: string): YouTubePermission
    getAspectRatio(): string
    getCategory(): MediaCategory
    getCoordinates(): [ /* latitude */ number | null, /* longitude */ number | null ]
    getDescription(): string
    getDuration(): number
    getFavoriteCount(): number
    getKeywords(): string[]
    getLocation(): string
    getMediaRating(ratingType: string): string
    getPlayerUri(): string
    getRating(): [ /* min */ number | null, /* max */ number | null, /* count */ number | null, /* average */ number | null ]
    getRecorded(): number
    getState(): YouTubeState
    getThumbnails(): MediaThumbnail[]
    getUploaded(): number
    getViewCount(): number
    isRestrictedInCountry(country: string): boolean
    setAccessControl(action: string, permission: YouTubePermission): void
    setAspectRatio(aspectRatio?: string | null): void
    setCategory(category: MediaCategory): void
    setCoordinates(latitude: number, longitude: number): void
    setDescription(description?: string | null): void
    setIsPrivate(isPrivate: boolean): void
    setKeywords(keywords: string[]): void
    setLocation(location?: string | null): void
    setRecorded(recorded: number): void
    /* Methods of GData-0.0.GData.Entry */
    addAuthor(author: Author): void
    addCategory(category: Category): void
    addLink(link: Link): void
    getAuthors(): Author[]
    getCategories(): Category[]
    getContent(): string
    getContentUri(): string
    getEtag(): string | null
    getId(): string | null
    getPublished(): number
    getRights(): string
    getSummary(): string
    getTitle(): string
    getUpdated(): number
    lookUpLink(rel: string): Link
    lookUpLinks(rel: string): Link[]
    removeLink(link: Link): boolean
    setContent(content?: string | null): void
    setContentUri(contentUri?: string | null): void
    setRights(rights?: string | null): void
    setSummary(summary?: string | null): void
    setTitle(title?: string | null): void
    /* Methods of GData-0.0.GData.Parsable */
    getContentType(): string
    getJson(): string
    getXml(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of GData-0.0.GData.Commentable */
    deleteComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): boolean
    deleteCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteCommentFinish(result: Gio.AsyncResult): boolean
    insertComment(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null): Comment | null
    insertCommentAsync(service: Service, comment: Comment, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    insertCommentFinish(result: Gio.AsyncResult): Comment | null
    queryComments(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null): Feed | null
    queryCommentsAsync(service: Service, query?: Query | null, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    queryCommentsFinish(result: Gio.AsyncResult): Feed | null
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::average-rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::average-rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::average-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::average-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::average-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::category", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::favorite-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favorite-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::favorite-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::favorite-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::favorite-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-private", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-private", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keywords", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longitude", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longitude", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::player-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::player-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::player-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::player-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rating-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rating-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rating-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rating-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::recorded", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::recorded", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::recorded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::recorded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::recorded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uploaded", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uploaded", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uploaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uploaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uploaded", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-inserted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-inserted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::published", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::published", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rights", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rights", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::updated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::updated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: YouTubeVideo_ConstructProps)
    _init (config?: YouTubeVideo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id?: string | null): YouTubeVideo
    /* Function overloads */
    static new(id?: string | null): YouTubeVideo
    static getVideoIdFromUri(videoUri: string): string
    static $gtype: GObject.Type
}
abstract class APPCategoriesClass {
    static name: string
}
class APPCategoriesPrivate {
    static name: string
}
abstract class AccessHandlerIface {
    /* Fields of GData-0.0.GData.AccessHandlerIface */
    readonly parent: GObject.TypeInterface
    readonly isOwnerRule: (rule: AccessRule) => boolean
    readonly getRules: (self: AccessHandler, service: Service, cancellable?: Gio.Cancellable | null, progressCallback?: QueryProgressCallback | null) => Feed
    static name: string
}
abstract class AccessRuleClass {
    static name: string
}
class AccessRulePrivate {
    static name: string
}
abstract class AuthorClass {
    static name: string
}
class AuthorPrivate {
    static name: string
}
abstract class AuthorizationDomainClass {
    static name: string
}
class AuthorizationDomainPrivate {
    static name: string
}
abstract class AuthorizerInterface {
    /* Fields of GData-0.0.GData.AuthorizerInterface */
    readonly parent: GObject.TypeInterface
    readonly processRequest: (self: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    readonly isAuthorizedForDomain: (self: Authorizer | null, domain: AuthorizationDomain) => boolean
    readonly refreshAuthorization: (self: Authorizer, cancellable?: Gio.Cancellable | null) => boolean
    readonly refreshAuthorizationAsync: (self: Authorizer, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly refreshAuthorizationFinish: (self: Authorizer, asyncResult: Gio.AsyncResult) => boolean
    static name: string
}
abstract class BatchOperationClass {
    static name: string
}
class BatchOperationPrivate {
    static name: string
}
abstract class BatchableIface {
    /* Fields of GData-0.0.GData.BatchableIface */
    readonly isSupported: (operationType: BatchOperationType) => boolean
    static name: string
}
abstract class CalendarAccessRuleClass {
    static name: string
}
abstract class CalendarCalendarClass {
    static name: string
}
class CalendarCalendarPrivate {
    static name: string
}
abstract class CalendarEventClass {
    static name: string
}
class CalendarEventPrivate {
    static name: string
}
abstract class CalendarFeedClass {
    static name: string
}
class CalendarFeedPrivate {
    static name: string
}
abstract class CalendarQueryClass {
    static name: string
}
class CalendarQueryPrivate {
    static name: string
}
abstract class CalendarServiceClass {
    static name: string
}
class CalendarServicePrivate {
    static name: string
}
abstract class CategoryClass {
    static name: string
}
class CategoryPrivate {
    static name: string
}
class Color {
    /* Fields of GData-0.0.GData.Color */
    readonly red: number
    readonly green: number
    readonly blue: number
    /* Methods of GData-0.0.GData.Color */
    toHexadecimal(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static fromHexadecimal(hexadecimal: string): [ /* returnType */ boolean, /* color */ Color ]
}
abstract class CommentClass {
    static name: string
}
class CommentPrivate {
    static name: string
}
abstract class CommentableInterface {
    /* Fields of GData-0.0.GData.CommentableInterface */
    readonly parent: GObject.TypeInterface
    readonly commentType: GObject.Type
    readonly getQueryCommentsUri: (self: Commentable) => string
    readonly getInsertCommentUri: (self: Commentable, comment: Comment) => string
    readonly isCommentDeletable: (self: Commentable, comment: Comment) => boolean
    static name: string
}
abstract class ComparableIface {
    /* Fields of GData-0.0.GData.ComparableIface */
    readonly parent: GObject.TypeInterface
    readonly compareWith: (self: Comparable, other: Comparable) => number
    static name: string
}
abstract class DocumentsAccessRuleClass {
    static name: string
}
abstract class DocumentsDocumentClass {
    static name: string
}
class DocumentsDocumentPrivate {
    static name: string
}
abstract class DocumentsDrawingClass {
    static name: string
}
class DocumentsDrawingPrivate {
    static name: string
}
abstract class DocumentsDriveClass {
    static name: string
}
abstract class DocumentsDriveQueryClass {
    static name: string
}
abstract class DocumentsEntryClass {
    static name: string
}
class DocumentsEntryPrivate {
    static name: string
}
abstract class DocumentsFeedClass {
    static name: string
}
class DocumentsFeedPrivate {
    static name: string
}
abstract class DocumentsFolderClass {
    static name: string
}
class DocumentsFolderPrivate {
    static name: string
}
abstract class DocumentsMetadataClass {
    static name: string
}
class DocumentsMetadataPrivate {
    static name: string
}
abstract class DocumentsPdfClass {
    static name: string
}
class DocumentsPdfPrivate {
    static name: string
}
abstract class DocumentsPresentationClass {
    static name: string
}
class DocumentsPresentationPrivate {
    static name: string
}
abstract class DocumentsPropertyClass {
    static name: string
}
class DocumentsPropertyPrivate {
    static name: string
}
abstract class DocumentsQueryClass {
    static name: string
}
class DocumentsQueryPrivate {
    static name: string
}
abstract class DocumentsServiceClass {
    static name: string
}
class DocumentsServicePrivate {
    static name: string
}
abstract class DocumentsSpreadsheetClass {
    static name: string
}
class DocumentsSpreadsheetPrivate {
    static name: string
}
abstract class DocumentsTextClass {
    static name: string
}
class DocumentsTextPrivate {
    static name: string
}
abstract class DocumentsUploadQueryClass {
    static name: string
}
class DocumentsUploadQueryPrivate {
    static name: string
}
abstract class DownloadStreamClass {
    static name: string
}
class DownloadStreamPrivate {
    static name: string
}
abstract class EntryClass {
    /* Fields of GData-0.0.GData.EntryClass */
    readonly parent: ParsableClass
    readonly getEntryUri: (id: string) => string
    readonly kindTerm: string
    static name: string
}
class EntryPrivate {
    static name: string
}
abstract class FeedClass {
    static name: string
}
class FeedPrivate {
    static name: string
}
abstract class GContactCalendarClass {
    static name: string
}
class GContactCalendarPrivate {
    static name: string
}
abstract class GContactEventClass {
    static name: string
}
class GContactEventPrivate {
    static name: string
}
abstract class GContactExternalIDClass {
    static name: string
}
class GContactExternalIDPrivate {
    static name: string
}
abstract class GContactJotClass {
    static name: string
}
class GContactJotPrivate {
    static name: string
}
abstract class GContactLanguageClass {
    static name: string
}
class GContactLanguagePrivate {
    static name: string
}
abstract class GContactRelationClass {
    static name: string
}
class GContactRelationPrivate {
    static name: string
}
abstract class GContactWebsiteClass {
    static name: string
}
class GContactWebsitePrivate {
    static name: string
}
abstract class GDEmailAddressClass {
    static name: string
}
class GDEmailAddressPrivate {
    static name: string
}
abstract class GDIMAddressClass {
    static name: string
}
class GDIMAddressPrivate {
    static name: string
}
abstract class GDNameClass {
    static name: string
}
class GDNamePrivate {
    static name: string
}
abstract class GDOrganizationClass {
    static name: string
}
class GDOrganizationPrivate {
    static name: string
}
abstract class GDPhoneNumberClass {
    static name: string
}
class GDPhoneNumberPrivate {
    static name: string
}
abstract class GDPostalAddressClass {
    static name: string
}
class GDPostalAddressPrivate {
    static name: string
}
abstract class GDReminderClass {
    static name: string
}
class GDReminderPrivate {
    static name: string
}
abstract class GDWhenClass {
    static name: string
}
class GDWhenPrivate {
    static name: string
}
abstract class GDWhereClass {
    static name: string
}
class GDWherePrivate {
    static name: string
}
abstract class GDWhoClass {
    static name: string
}
class GDWhoPrivate {
    static name: string
}
abstract class GeneratorClass {
    static name: string
}
class GeneratorPrivate {
    static name: string
}
abstract class GoaAuthorizerClass {
    static name: string
}
class GoaAuthorizerPrivate {
    static name: string
}
abstract class LinkClass {
    static name: string
}
class LinkPrivate {
    static name: string
}
abstract class MediaCategoryClass {
    static name: string
}
class MediaCategoryPrivate {
    static name: string
}
abstract class MediaContentClass {
    static name: string
}
class MediaContentPrivate {
    static name: string
}
abstract class MediaCreditClass {
    static name: string
}
class MediaCreditPrivate {
    static name: string
}
abstract class MediaThumbnailClass {
    static name: string
}
class MediaThumbnailPrivate {
    static name: string
}
abstract class OAuth2AuthorizerClass {
    static name: string
}
class OAuth2AuthorizerPrivate {
    static name: string
}
abstract class ParsableClass {
    /* Fields of GData-0.0.GData.ParsableClass */
    readonly parent: GObject.ObjectClass
    readonly preParseXml: (parsable: Parsable, doc: libxml2.Doc, rootNode: libxml2.Node) => boolean
    readonly parseXml: (parsable: Parsable, doc: libxml2.Doc, node: libxml2.Node) => boolean
    readonly postParseXml: (parsable: Parsable) => boolean
    readonly preGetXml: (parsable: Parsable, xmlString: GLib.String) => void
    readonly getXml: (parsable: Parsable, xmlString: GLib.String) => void
    readonly getNamespaces: (parsable: Parsable, namespaces: GLib.HashTable) => void
    readonly parseJson: (parsable: Parsable, reader: Json.Reader) => boolean
    readonly postParseJson: (parsable: Parsable) => boolean
    readonly getJson: (parsable: Parsable, builder: Json.Builder) => void
    readonly getContentType: () => string
    readonly elementName: string
    readonly elementNamespace: string
    static name: string
}
class ParsablePrivate {
    static name: string
}
abstract class PicasaWebAlbumClass {
    static name: string
}
class PicasaWebAlbumPrivate {
    static name: string
}
abstract class PicasaWebCommentClass {
    static name: string
}
class PicasaWebCommentPrivate {
    static name: string
}
abstract class PicasaWebFeedClass {
    static name: string
}
abstract class PicasaWebFileClass {
    static name: string
}
class PicasaWebFilePrivate {
    static name: string
}
abstract class PicasaWebQueryClass {
    static name: string
}
class PicasaWebQueryPrivate {
    static name: string
}
abstract class PicasaWebServiceClass {
    static name: string
}
abstract class PicasaWebUserClass {
    static name: string
}
class PicasaWebUserPrivate {
    static name: string
}
abstract class QueryClass {
    /* Fields of GData-0.0.GData.QueryClass */
    readonly getQueryUri: (self: Query, feedUri: string, queryUri: GLib.String, paramsStarted: boolean) => void
    static name: string
}
class QueryPrivate {
    static name: string
}
abstract class ServiceClass {
    /* Fields of GData-0.0.GData.ServiceClass */
    readonly parent: GObject.ObjectClass
    readonly apiVersion: string
    readonly feedType: GObject.Type
    readonly appendQueryHeaders: (self: Service, domain: AuthorizationDomain, message: Soup.Message) => void
    readonly parseErrorResponse: (self: Service, operationType: OperationType, status: number, reasonPhrase: string, responseBody: string, length: number) => void
    static name: string
}
class ServicePrivate {
    static name: string
}
abstract class TasksQueryClass {
    static name: string
}
class TasksQueryPrivate {
    static name: string
}
abstract class TasksServiceClass {
    static name: string
}
abstract class TasksTaskClass {
    static name: string
}
class TasksTaskPrivate {
    static name: string
}
abstract class TasksTasklistClass {
    static name: string
}
abstract class UploadStreamClass {
    static name: string
}
class UploadStreamPrivate {
    static name: string
}
abstract class YouTubeCategoryClass {
    static name: string
}
class YouTubeCategoryPrivate {
    static name: string
}
abstract class YouTubeCommentClass {
    static name: string
}
class YouTubeCommentPrivate {
    static name: string
}
abstract class YouTubeFeedClass {
    static name: string
}
class YouTubeFeedPrivate {
    static name: string
}
abstract class YouTubeQueryClass {
    static name: string
}
class YouTubeQueryPrivate {
    static name: string
}
abstract class YouTubeServiceClass {
    static name: string
}
class YouTubeServicePrivate {
    static name: string
}
abstract class YouTubeStateClass {
    static name: string
}
class YouTubeStatePrivate {
    static name: string
}
abstract class YouTubeVideoClass {
    static name: string
}
class YouTubeVideoPrivate {
    static name: string
}
}
export default GData;