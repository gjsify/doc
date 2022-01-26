/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * WebKit2-5.0
 */

import type Soup from './Soup-3.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type JavaScriptCore from './JavaScriptCore-5.0';
import type Gtk from './Gtk-4.0';
import type Gsk from './Gsk-4.0';
import type Graphene from './Graphene-1.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace WebKit2 {

enum AuthenticationScheme {
    DEFAULT,
    HTTP_BASIC,
    HTTP_DIGEST,
    HTML_FORM,
    NTLM,
    NEGOTIATE,
    CLIENT_CERTIFICATE_REQUESTED,
    SERVER_TRUST_EVALUATION_REQUESTED,
    CLIENT_CERTIFICATE_PIN_REQUESTED,
    UNKNOWN,
}
enum AutomationBrowsingContextPresentation {
    WINDOW,
    TAB,
}
enum AutoplayPolicy {
    ALLOW,
    ALLOW_WITHOUT_SOUND,
    DENY,
}
enum CacheModel {
    DOCUMENT_VIEWER,
    WEB_BROWSER,
    DOCUMENT_BROWSER,
}
enum ContextMenuAction {
    NO_ACTION,
    OPEN_LINK,
    OPEN_LINK_IN_NEW_WINDOW,
    DOWNLOAD_LINK_TO_DISK,
    COPY_LINK_TO_CLIPBOARD,
    OPEN_IMAGE_IN_NEW_WINDOW,
    DOWNLOAD_IMAGE_TO_DISK,
    COPY_IMAGE_TO_CLIPBOARD,
    COPY_IMAGE_URL_TO_CLIPBOARD,
    OPEN_FRAME_IN_NEW_WINDOW,
    GO_BACK,
    GO_FORWARD,
    STOP,
    RELOAD,
    COPY,
    CUT,
    PASTE,
    DELETE,
    SELECT_ALL,
    INPUT_METHODS,
    UNICODE,
    SPELLING_GUESS,
    NO_GUESSES_FOUND,
    IGNORE_SPELLING,
    LEARN_SPELLING,
    IGNORE_GRAMMAR,
    FONT_MENU,
    BOLD,
    ITALIC,
    UNDERLINE,
    OUTLINE,
    INSPECT_ELEMENT,
    OPEN_VIDEO_IN_NEW_WINDOW,
    OPEN_AUDIO_IN_NEW_WINDOW,
    COPY_VIDEO_LINK_TO_CLIPBOARD,
    COPY_AUDIO_LINK_TO_CLIPBOARD,
    TOGGLE_MEDIA_CONTROLS,
    TOGGLE_MEDIA_LOOP,
    ENTER_VIDEO_FULLSCREEN,
    MEDIA_PLAY,
    MEDIA_PAUSE,
    MEDIA_MUTE,
    DOWNLOAD_VIDEO_TO_DISK,
    DOWNLOAD_AUDIO_TO_DISK,
    INSERT_EMOJI,
    PASTE_AS_PLAIN_TEXT,
    CUSTOM,
}
enum CookieAcceptPolicy {
    ALWAYS,
    NEVER,
    NO_THIRD_PARTY,
}
enum CookiePersistentStorage {
    TEXT,
    SQLITE,
}
enum CredentialPersistence {
    NONE,
    FOR_SESSION,
    PERMANENT,
}
enum DownloadError {
    NETWORK,
    CANCELLED_BY_USER,
    DESTINATION,
}
enum FaviconDatabaseError {
    NOT_INITIALIZED,
    FAVICON_NOT_FOUND,
    FAVICON_UNKNOWN,
}
enum HardwareAccelerationPolicy {
    ON_DEMAND,
    ALWAYS,
    NEVER,
}
enum InputPurpose {
    FREE_FORM,
    DIGITS,
    NUMBER,
    PHONE,
    URL,
    EMAIL,
    PASSWORD,
}
enum InsecureContentEvent {
    RUN,
    DISPLAYED,
}
enum JavascriptError {
    FAILED,
}
enum LoadEvent {
    STARTED,
    REDIRECTED,
    COMMITTED,
    FINISHED,
}
enum MediaCaptureState {
    NONE,
    ACTIVE,
    MUTED,
}
enum NavigationType {
    LINK_CLICKED,
    FORM_SUBMITTED,
    BACK_FORWARD,
    RELOAD,
    FORM_RESUBMITTED,
    OTHER,
}
enum NetworkError {
    FAILED,
    TRANSPORT,
    UNKNOWN_PROTOCOL,
    CANCELLED,
    FILE_DOES_NOT_EXIST,
}
enum NetworkProxyMode {
    DEFAULT,
    NO_PROXY,
    CUSTOM,
}
enum PluginError {
    FAILED,
    CANNOT_FIND_PLUGIN,
    CANNOT_LOAD_PLUGIN,
    JAVA_UNAVAILABLE,
    CONNECTION_CANCELLED,
    WILL_HANDLE_LOAD,
}
enum PolicyDecisionType {
    NAVIGATION_ACTION,
    NEW_WINDOW_ACTION,
    RESPONSE,
}
enum PolicyError {
    FAILED,
    CANNOT_SHOW_MIME_TYPE,
    CANNOT_SHOW_URI,
    FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE,
    CANNOT_USE_RESTRICTED_PORT,
}
enum PrintError {
    GENERAL,
    PRINTER_NOT_FOUND,
    INVALID_PAGE_RANGE,
}
enum PrintOperationResponse {
    PRINT,
    CANCEL,
}
enum ProcessModel {
    SHARED_SECONDARY_PROCESS,
    MULTIPLE_SECONDARY_PROCESSES,
}
enum SaveMode {
    MHTML,
}
enum ScriptDialogType {
    ALERT,
    CONFIRM,
    PROMPT,
    BEFORE_UNLOAD_CONFIRM,
}
enum SnapshotError {
    CREATE,
}
enum SnapshotRegion {
    VISIBLE,
    FULL_DOCUMENT,
}
enum TLSErrorsPolicy {
    IGNORE,
    FAIL,
}
enum UserContentFilterError {
    INVALID_SOURCE,
    NOT_FOUND,
}
enum UserContentInjectedFrames {
    ALL_FRAMES,
    TOP_FRAME,
}
enum UserMessageError {
    MESSAGE,
}
enum UserScriptInjectionTime {
    START,
    END,
}
enum UserStyleLevel {
    USER,
    AUTHOR,
}
enum WebProcessTerminationReason {
    CRASHED,
    EXCEEDED_MEMORY_LIMIT,
    TERMINATED_BY_API,
}
enum EditorTypingAttributes {
    NONE,
    BOLD,
    ITALIC,
    UNDERLINE,
    STRIKETHROUGH,
}
enum FindOptions {
    NONE,
    CASE_INSENSITIVE,
    AT_WORD_STARTS,
    TREAT_MEDIAL_CAPITAL_AS_WORD_START,
    BACKWARDS,
    WRAP_AROUND,
}
enum HitTestResultContext {
    DOCUMENT,
    LINK,
    IMAGE,
    MEDIA,
    EDITABLE,
    SCROLLBAR,
    SELECTION,
}
enum InputHints {
    NONE,
    SPELLCHECK,
    LOWERCASE,
    UPPERCASE_CHARS,
    UPPERCASE_WORDS,
    UPPERCASE_SENTENCES,
    INHIBIT_OSK,
}
enum SnapshotOptions {
    NONE,
    INCLUDE_SELECTION_HIGHLIGHTING,
    TRANSPARENT_BACKGROUND,
}
enum WebsiteDataTypes {
    MEMORY_CACHE,
    DISK_CACHE,
    OFFLINE_APPLICATION_CACHE,
    SESSION_STORAGE,
    LOCAL_STORAGE,
    WEBSQL_DATABASES,
    INDEXEDDB_DATABASES,
    PLUGIN_DATA,
    COOKIES,
    DEVICE_ID_HASH_SALT,
    HSTS_CACHE,
    ITP,
    SERVICE_WORKER_REGISTRATIONS,
    DOM_CACHE,
    ALL,
}
const EDITING_COMMAND_COPY: string
const EDITING_COMMAND_CREATE_LINK: string
const EDITING_COMMAND_CUT: string
const EDITING_COMMAND_INSERT_IMAGE: string
const EDITING_COMMAND_PASTE: string
const EDITING_COMMAND_PASTE_AS_PLAIN_TEXT: string
const EDITING_COMMAND_REDO: string
const EDITING_COMMAND_SELECT_ALL: string
const EDITING_COMMAND_UNDO: string
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function downloadErrorQuark(): GLib.Quark
function faviconDatabaseErrorQuark(): GLib.Quark
function getMajorVersion(): number
function getMicroVersion(): number
function getMinorVersion(): number
function javascriptErrorQuark(): GLib.Quark
function mediaKeySystemPermissionGetName(request: MediaKeySystemPermissionRequest): string
function networkErrorQuark(): GLib.Quark
function pluginErrorQuark(): GLib.Quark
function policyErrorQuark(): GLib.Quark
function printErrorQuark(): GLib.Quark
function snapshotErrorQuark(): GLib.Quark
function uriForDisplay(uri: string): string | null
function userContentFilterErrorQuark(): GLib.Quark
function userMediaPermissionIsForAudioDevice(request: UserMediaPermissionRequest): boolean
function userMediaPermissionIsForDisplayDevice(request: UserMediaPermissionRequest): boolean
function userMediaPermissionIsForVideoDevice(request: UserMediaPermissionRequest): boolean
function userMessageErrorQuark(): GLib.Quark
interface URISchemeRequestCallback {
    (request: URISchemeRequest): void
}
class PermissionRequest {
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    static name: string
}
interface AuthenticationRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class AuthenticationRequest {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.AuthenticationRequest */
    authenticate(credential?: Credential | null): void
    canSaveCredentials(): boolean
    cancel(): void
    getCertificatePinFlags(): Gio.TlsPasswordFlags
    getHost(): string
    getPort(): number
    getProposedCredential(): Credential
    getRealm(): string
    getScheme(): AuthenticationScheme
    getSecurityOrigin(): SecurityOrigin
    isForProxy(): boolean
    isRetry(): boolean
    setCanSaveCredentials(enabled: boolean): void
    setProposedCredential(credential: Credential): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.AuthenticationRequest */
    connect(sigName: "authenticated", callback: ((credential: Credential) => void)): number
    on(sigName: "authenticated", callback: (credential: Credential) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticated", callback: (credential: Credential) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticated", callback: (credential: Credential) => void): NodeJS.EventEmitter
    emit(sigName: "authenticated", credential: Credential): void
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
    constructor (config?: AuthenticationRequest_ConstructProps)
    _init (config?: AuthenticationRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface AutomationSession_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.AutomationSession */
    id?: string
}
class AutomationSession {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.AutomationSession */
    getApplicationInfo(): ApplicationInfo
    getId(): string
    setApplicationInfo(info: ApplicationInfo): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.AutomationSession */
    connect(sigName: "create-web-view", callback: (() => WebView)): number
    on(sigName: "create-web-view", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-web-view", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-web-view", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "create-web-view"): void
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
    constructor (config?: AutomationSession_ConstructProps)
    _init (config?: AutomationSession_ConstructProps): void
    static $gtype: GObject.Type
}
interface BackForwardList_ConstructProps extends GObject.Object_ConstructProps {
}
class BackForwardList {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.BackForwardList */
    getBackItem(): BackForwardListItem | null
    getBackList(): BackForwardListItem[]
    getBackListWithLimit(limit: number): BackForwardListItem[]
    getCurrentItem(): BackForwardListItem | null
    getForwardItem(): BackForwardListItem | null
    getForwardList(): BackForwardListItem[]
    getForwardListWithLimit(limit: number): BackForwardListItem[]
    getLength(): number
    getNthItem(index: number): BackForwardListItem | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.BackForwardList */
    connect(sigName: "changed", callback: ((itemAdded?: BackForwardListItem | null, itemsRemoved?: object | null) => void)): number
    on(sigName: "changed", callback: (itemAdded?: BackForwardListItem | null, itemsRemoved?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (itemAdded?: BackForwardListItem | null, itemsRemoved?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (itemAdded?: BackForwardListItem | null, itemsRemoved?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "changed", itemAdded?: BackForwardListItem | null, itemsRemoved?: object | null): void
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
    constructor (config?: BackForwardList_ConstructProps)
    _init (config?: BackForwardList_ConstructProps): void
    static $gtype: GObject.Type
}
interface BackForwardListItem_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class BackForwardListItem {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.BackForwardListItem */
    getOriginalUri(): string
    getTitle(): string
    getUri(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: BackForwardListItem_ConstructProps)
    _init (config?: BackForwardListItem_ConstructProps): void
    static $gtype: GObject.Type
}
interface ColorChooserRequest_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.ColorChooserRequest */
    rgba?: Gdk.RGBA
}
class ColorChooserRequest {
    /* Properties of WebKit2-5.0.WebKit2.ColorChooserRequest */
    rgba: Gdk.RGBA
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.ColorChooserRequest */
    cancel(): void
    finish(): void
    getElementRectangle(): /* rect */ Gdk.Rectangle
    getRgba(): /* rgba */ Gdk.RGBA
    setRgba(rgba: Gdk.RGBA): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.ColorChooserRequest */
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ColorChooserRequest_ConstructProps)
    _init (config?: ColorChooserRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContextMenu_ConstructProps extends GObject.Object_ConstructProps {
}
class ContextMenu {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.ContextMenu */
    append(item: ContextMenuItem): void
    first(): ContextMenuItem
    getItemAtPosition(position: number): ContextMenuItem
    getItems(): ContextMenuItem[]
    getNItems(): number
    getUserData(): GLib.Variant
    insert(item: ContextMenuItem, position: number): void
    last(): ContextMenuItem
    moveItem(item: ContextMenuItem, position: number): void
    prepend(item: ContextMenuItem): void
    remove(item: ContextMenuItem): void
    removeAll(): void
    setUserData(userData: GLib.Variant): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: ContextMenu_ConstructProps)
    _init (config?: ContextMenu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContextMenu
    static newWithItems(items: ContextMenuItem[]): ContextMenu
    static $gtype: GObject.Type
}
interface ContextMenuItem_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class ContextMenuItem {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.ContextMenuItem */
    getGaction(): Gio.Action
    getStockAction(): ContextMenuAction
    getSubmenu(): ContextMenu
    isSeparator(): boolean
    setSubmenu(submenu?: ContextMenu | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: ContextMenuItem_ConstructProps)
    _init (config?: ContextMenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromGaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem
    static newFromStockAction(action: ContextMenuAction): ContextMenuItem
    static newFromStockActionWithLabel(action: ContextMenuAction, label: string): ContextMenuItem
    static newSeparator(): ContextMenuItem
    static newWithSubmenu(label: string, submenu: ContextMenu): ContextMenuItem
    static $gtype: GObject.Type
}
interface CookieManager_ConstructProps extends GObject.Object_ConstructProps {
}
class CookieManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.CookieManager */
    addCookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    addCookieFinish(result: Gio.AsyncResult): boolean
    deleteAllCookies(): void
    deleteCookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    deleteCookieFinish(result: Gio.AsyncResult): boolean
    deleteCookiesForDomain(domain: string): void
    getAcceptPolicy(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getAcceptPolicyFinish(result: Gio.AsyncResult): CookieAcceptPolicy
    getCookies(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getCookiesFinish(result: Gio.AsyncResult): Soup.Cookie[]
    getDomainsWithCookies(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDomainsWithCookiesFinish(result: Gio.AsyncResult): string[]
    setAcceptPolicy(policy: CookieAcceptPolicy): void
    setPersistentStorage(filename: string, storage: CookiePersistentStorage): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.CookieManager */
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CookieManager_ConstructProps)
    _init (config?: CookieManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceInfoPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class DeviceInfoPermissionRequest {
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
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
    constructor (config?: DeviceInfoPermissionRequest_ConstructProps)
    _init (config?: DeviceInfoPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface Download_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.Download */
    allowOverwrite?: boolean
}
class Download {
    /* Properties of WebKit2-5.0.WebKit2.Download */
    allowOverwrite: boolean
    readonly destination: string
    readonly estimatedProgress: number
    readonly response: URIResponse
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.Download */
    cancel(): void
    getAllowOverwrite(): boolean
    getDestination(): string
    getElapsedTime(): number
    getEstimatedProgress(): number
    getReceivedDataLength(): number
    getRequest(): URIRequest
    getResponse(): URIResponse
    getWebView(): WebView
    setAllowOverwrite(allowed: boolean): void
    setDestination(uri: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.Download */
    connect(sigName: "created-destination", callback: ((destination: string) => void)): number
    on(sigName: "created-destination", callback: (destination: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "created-destination", callback: (destination: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "created-destination", callback: (destination: string) => void): NodeJS.EventEmitter
    emit(sigName: "created-destination", destination: string): void
    connect(sigName: "decide-destination", callback: ((suggestedFilename: string) => boolean)): number
    on(sigName: "decide-destination", callback: (suggestedFilename: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-destination", callback: (suggestedFilename: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-destination", callback: (suggestedFilename: string) => void): NodeJS.EventEmitter
    emit(sigName: "decide-destination", suggestedFilename: string): void
    connect(sigName: "failed", callback: ((error: GLib.Error) => void)): number
    on(sigName: "failed", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "received-data", callback: ((dataLength: number) => void)): number
    on(sigName: "received-data", callback: (dataLength: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "received-data", callback: (dataLength: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "received-data", callback: (dataLength: number) => void): NodeJS.EventEmitter
    emit(sigName: "received-data", dataLength: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-overwrite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-overwrite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destination", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destination", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::estimated-progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Download_ConstructProps)
    _init (config?: Download_ConstructProps): void
    static $gtype: GObject.Type
}
interface EditorState_ConstructProps extends GObject.Object_ConstructProps {
}
class EditorState {
    /* Properties of WebKit2-5.0.WebKit2.EditorState */
    readonly typingAttributes: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.EditorState */
    getTypingAttributes(): number
    isCopyAvailable(): boolean
    isCutAvailable(): boolean
    isPasteAvailable(): boolean
    isRedoAvailable(): boolean
    isUndoAvailable(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::typing-attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typing-attributes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typing-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typing-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typing-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EditorState_ConstructProps)
    _init (config?: EditorState_ConstructProps): void
    static $gtype: GObject.Type
}
interface FaviconDatabase_ConstructProps extends GObject.Object_ConstructProps {
}
class FaviconDatabase {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.FaviconDatabase */
    clear(): void
    getFavicon(pageUri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getFaviconFinish(result: Gio.AsyncResult): cairo.Surface
    getFaviconUri(pageUri: string): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.FaviconDatabase */
    connect(sigName: "favicon-changed", callback: ((pageUri: string, faviconUri: string) => void)): number
    on(sigName: "favicon-changed", callback: (pageUri: string, faviconUri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "favicon-changed", callback: (pageUri: string, faviconUri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "favicon-changed", callback: (pageUri: string, faviconUri: string) => void): NodeJS.EventEmitter
    emit(sigName: "favicon-changed", pageUri: string, faviconUri: string): void
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
    constructor (config?: FaviconDatabase_ConstructProps)
    _init (config?: FaviconDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
interface FileChooserRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class FileChooserRequest {
    /* Properties of WebKit2-5.0.WebKit2.FileChooserRequest */
    readonly filter: Gtk.FileFilter
    readonly mimeTypes: string[]
    readonly selectMultiple: boolean
    readonly selectedFiles: string[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.FileChooserRequest */
    cancel(): void
    getMimeTypes(): string[]
    getMimeTypesFilter(): Gtk.FileFilter
    getSelectMultiple(): boolean
    getSelectedFiles(): string[]
    selectFiles(files: string[]): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::select-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::select-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::select-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::select-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected-files", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-files", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileChooserRequest_ConstructProps)
    _init (config?: FileChooserRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface FindController_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.FindController */
    webView?: WebView
}
class FindController {
    /* Properties of WebKit2-5.0.WebKit2.FindController */
    readonly maxMatchCount: number
    readonly options: FindOptions
    readonly text: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.FindController */
    countMatches(searchText: string, findOptions: number, maxMatchCount: number): void
    getMaxMatchCount(): number
    getOptions(): number
    getSearchText(): string
    getWebView(): WebView
    search(searchText: string, findOptions: number, maxMatchCount: number): void
    searchFinish(): void
    searchNext(): void
    searchPrevious(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.FindController */
    connect(sigName: "counted-matches", callback: ((matchCount: number) => void)): number
    on(sigName: "counted-matches", callback: (matchCount: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "counted-matches", callback: (matchCount: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "counted-matches", callback: (matchCount: number) => void): NodeJS.EventEmitter
    emit(sigName: "counted-matches", matchCount: number): void
    connect(sigName: "failed-to-find-text", callback: (() => void)): number
    on(sigName: "failed-to-find-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed-to-find-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed-to-find-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "failed-to-find-text"): void
    connect(sigName: "found-text", callback: ((matchCount: number) => void)): number
    on(sigName: "found-text", callback: (matchCount: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "found-text", callback: (matchCount: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "found-text", callback: (matchCount: number) => void): NodeJS.EventEmitter
    emit(sigName: "found-text", matchCount: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-match-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-match-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-match-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-match-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-match-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FindController_ConstructProps)
    _init (config?: FindController_ConstructProps): void
    static $gtype: GObject.Type
}
interface FormSubmissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class FormSubmissionRequest {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.FormSubmissionRequest */
    getTextFields(): GLib.HashTable | null
    listTextFields(): [ /* returnType */ boolean, /* fieldNames */ string[] | null, /* fieldValues */ string[] | null ]
    submit(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: FormSubmissionRequest_ConstructProps)
    _init (config?: FormSubmissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface GeolocationManager_ConstructProps extends GObject.Object_ConstructProps {
}
class GeolocationManager {
    /* Properties of WebKit2-5.0.WebKit2.GeolocationManager */
    readonly enableHighAccuracy: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.GeolocationManager */
    failed(errorMessage: string): void
    getEnableHighAccuracy(): boolean
    updatePosition(position: GeolocationPosition): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.GeolocationManager */
    connect(sigName: "start", callback: (() => boolean)): number
    on(sigName: "start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "start"): void
    connect(sigName: "stop", callback: (() => void)): number
    on(sigName: "stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stop", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stop"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-high-accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-high-accuracy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GeolocationManager_ConstructProps)
    _init (config?: GeolocationManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface GeolocationPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class GeolocationPermissionRequest {
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
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
    constructor (config?: GeolocationPermissionRequest_ConstructProps)
    _init (config?: GeolocationPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface HitTestResult_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.HitTestResult */
    context?: number
    imageUri?: string
    linkLabel?: string
    linkTitle?: string
    linkUri?: string
    mediaUri?: string
}
class HitTestResult {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.HitTestResult */
    contextIsEditable(): boolean
    contextIsImage(): boolean
    contextIsLink(): boolean
    contextIsMedia(): boolean
    contextIsScrollbar(): boolean
    contextIsSelection(): boolean
    getContext(): number
    getImageUri(): string
    getLinkLabel(): string
    getLinkTitle(): string
    getLinkUri(): string
    getMediaUri(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: HitTestResult_ConstructProps)
    _init (config?: HitTestResult_ConstructProps): void
    static $gtype: GObject.Type
}
interface InputMethodContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.InputMethodContext */
    inputHints?: InputHints
    inputPurpose?: InputPurpose
}
class InputMethodContext {
    /* Properties of WebKit2-5.0.WebKit2.InputMethodContext */
    inputHints: InputHints
    inputPurpose: InputPurpose
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.InputMethodContext */
    filterKeyEvent(keyEvent: Gdk.Event): boolean
    getInputHints(): InputHints
    getInputPurpose(): InputPurpose
    getPreedit(): [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursorOffset */ number | null ]
    notifyCursorArea(x: number, y: number, width: number, height: number): void
    notifyFocusIn(): void
    notifyFocusOut(): void
    notifySurrounding(text: string, length: number, cursorIndex: number, selectionIndex: number): void
    reset(): void
    setEnablePreedit(enabled: boolean): void
    setInputHints(hints: InputHints): void
    setInputPurpose(purpose: InputPurpose): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.InputMethodContext */
    connect(sigName: "committed", callback: ((text: string) => void)): number
    on(sigName: "committed", callback: (text: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "committed", callback: (text: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "committed", callback: (text: string) => void): NodeJS.EventEmitter
    emit(sigName: "committed", text: string): void
    connect(sigName: "delete-surrounding", callback: ((offset: number, nChars: number) => void)): number
    on(sigName: "delete-surrounding", callback: (offset: number, nChars: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-surrounding", callback: (offset: number, nChars: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-surrounding", callback: (offset: number, nChars: number) => void): NodeJS.EventEmitter
    emit(sigName: "delete-surrounding", offset: number, nChars: number): void
    connect(sigName: "preedit-changed", callback: (() => void)): number
    on(sigName: "preedit-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "preedit-changed"): void
    connect(sigName: "preedit-finished", callback: (() => void)): number
    on(sigName: "preedit-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "preedit-finished"): void
    connect(sigName: "preedit-started", callback: (() => void)): number
    on(sigName: "preedit-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "preedit-started"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::input-hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-purpose", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputMethodContext_ConstructProps)
    _init (config?: InputMethodContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface InstallMissingMediaPluginsPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class InstallMissingMediaPluginsPermissionRequest {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest */
    getDescription(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
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
    constructor (config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps)
    _init (config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface MediaKeySystemPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class MediaKeySystemPermissionRequest {
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
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
    constructor (config?: MediaKeySystemPermissionRequest_ConstructProps)
    _init (config?: MediaKeySystemPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface NavigationPolicyDecision_ConstructProps extends PolicyDecision_ConstructProps {
}
class NavigationPolicyDecision {
    /* Properties of WebKit2-5.0.WebKit2.NavigationPolicyDecision */
    readonly frameName: string
    readonly modifiers: number
    readonly mouseButton: number
    readonly navigationAction: NavigationAction
    readonly navigationType: NavigationType
    readonly request: URIRequest
    /* Fields of WebKit2-5.0.WebKit2.PolicyDecision */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.NavigationPolicyDecision */
    getFrameName(): string
    getModifiers(): number
    getMouseButton(): number
    getNavigationAction(): NavigationAction
    getNavigationType(): NavigationType
    getRequest(): URIRequest
    /* Methods of WebKit2-5.0.WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    useWithPolicies(policies: WebsitePolicies): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::frame-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::frame-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::frame-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::frame-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modifiers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifiers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mouse-button", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-button", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::navigation-action", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::navigation-action", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::navigation-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::navigation-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::navigation-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::navigation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::navigation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::navigation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::navigation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::navigation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NavigationPolicyDecision_ConstructProps)
    _init (config?: NavigationPolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
}
interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
class Notification {
    /* Properties of WebKit2-5.0.WebKit2.Notification */
    readonly body: string
    readonly id: number
    readonly tag: string
    readonly title: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.Notification */
    clicked(): void
    close(): void
    getBody(): string
    getId(): number
    getTag(): string | null
    getTitle(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.Notification */
    connect(sigName: "clicked", callback: (() => void)): number
    on(sigName: "clicked", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clicked", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clicked", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "clicked"): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::body", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tag", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    static $gtype: GObject.Type
}
interface NotificationPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class NotificationPermissionRequest {
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
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
    constructor (config?: NotificationPermissionRequest_ConstructProps)
    _init (config?: NotificationPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface OptionMenu_ConstructProps extends GObject.Object_ConstructProps {
}
class OptionMenu {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.OptionMenu */
    activateItem(index: number): void
    close(): void
    getItem(index: number): OptionMenuItem
    getNItems(): number
    selectItem(index: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.OptionMenu */
    connect(sigName: "close", callback: (() => void)): number
    on(sigName: "close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "close"): void
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
    constructor (config?: OptionMenu_ConstructProps)
    _init (config?: OptionMenu_ConstructProps): void
    static $gtype: GObject.Type
}
interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}
class Plugin {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.Plugin */
    getDescription(): string
    getMimeInfoList(): MimeInfo[]
    getName(): string
    getPath(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    static $gtype: GObject.Type
}
interface PointerLockPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class PointerLockPermissionRequest {
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
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
    constructor (config?: PointerLockPermissionRequest_ConstructProps)
    _init (config?: PointerLockPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface PolicyDecision_ConstructProps extends GObject.Object_ConstructProps {
}
class PolicyDecision {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    useWithPolicies(policies: WebsitePolicies): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: PolicyDecision_ConstructProps)
    _init (config?: PolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
}
interface PrintCustomWidget_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.PrintCustomWidget */
    title?: string
    widget?: Gtk.Widget
}
class PrintCustomWidget {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.PrintCustomWidget */
    getTitle(): string
    getWidget(): Gtk.Widget
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.PrintCustomWidget */
    connect(sigName: "apply", callback: (() => void)): number
    on(sigName: "apply", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "apply", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "apply", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "apply"): void
    connect(sigName: "update", callback: ((pageSetup: Gtk.PageSetup, printSettings: Gtk.PrintSettings) => void)): number
    on(sigName: "update", callback: (pageSetup: Gtk.PageSetup, printSettings: Gtk.PrintSettings) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update", callback: (pageSetup: Gtk.PageSetup, printSettings: Gtk.PrintSettings) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update", callback: (pageSetup: Gtk.PageSetup, printSettings: Gtk.PrintSettings) => void): NodeJS.EventEmitter
    emit(sigName: "update", pageSetup: Gtk.PageSetup, printSettings: Gtk.PrintSettings): void
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
    constructor (config?: PrintCustomWidget_ConstructProps)
    _init (config?: PrintCustomWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(widget: Gtk.Widget, title: string): PrintCustomWidget
    static $gtype: GObject.Type
}
interface PrintOperation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.PrintOperation */
    pageSetup?: Gtk.PageSetup
    printSettings?: Gtk.PrintSettings
    webView?: WebView
}
class PrintOperation {
    /* Properties of WebKit2-5.0.WebKit2.PrintOperation */
    pageSetup: Gtk.PageSetup
    printSettings: Gtk.PrintSettings
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.PrintOperation */
    getPageSetup(): Gtk.PageSetup
    getPrintSettings(): Gtk.PrintSettings
    print(): void
    runDialog(parent?: Gtk.Window | null): PrintOperationResponse
    setPageSetup(pageSetup: Gtk.PageSetup): void
    setPrintSettings(printSettings: Gtk.PrintSettings): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.PrintOperation */
    connect(sigName: "create-custom-widget", callback: (() => PrintCustomWidget)): number
    on(sigName: "create-custom-widget", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-custom-widget", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-custom-widget", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "create-custom-widget"): void
    connect(sigName: "failed", callback: ((error: GLib.Error) => void)): number
    on(sigName: "failed", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::page-setup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-setup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PrintOperation_ConstructProps)
    _init (config?: PrintOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(webView: WebView): PrintOperation
    static $gtype: GObject.Type
}
interface ResponsePolicyDecision_ConstructProps extends PolicyDecision_ConstructProps {
}
class ResponsePolicyDecision {
    /* Properties of WebKit2-5.0.WebKit2.ResponsePolicyDecision */
    readonly request: URIRequest
    readonly response: URIResponse
    /* Fields of WebKit2-5.0.WebKit2.PolicyDecision */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.ResponsePolicyDecision */
    getRequest(): URIRequest
    getResponse(): URIResponse
    isMimeTypeSupported(): boolean
    /* Methods of WebKit2-5.0.WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    useWithPolicies(policies: WebsitePolicies): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::response", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ResponsePolicyDecision_ConstructProps)
    _init (config?: ResponsePolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
}
interface SecurityManager_ConstructProps extends GObject.Object_ConstructProps {
}
class SecurityManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.SecurityManager */
    registerUriSchemeAsCorsEnabled(scheme: string): void
    registerUriSchemeAsDisplayIsolated(scheme: string): void
    registerUriSchemeAsEmptyDocument(scheme: string): void
    registerUriSchemeAsLocal(scheme: string): void
    registerUriSchemeAsNoAccess(scheme: string): void
    registerUriSchemeAsSecure(scheme: string): void
    uriSchemeIsCorsEnabled(scheme: string): boolean
    uriSchemeIsDisplayIsolated(scheme: string): boolean
    uriSchemeIsEmptyDocument(scheme: string): boolean
    uriSchemeIsLocal(scheme: string): boolean
    uriSchemeIsNoAccess(scheme: string): boolean
    uriSchemeIsSecure(scheme: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: SecurityManager_ConstructProps)
    _init (config?: SecurityManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.Settings */
    allowFileAccessFromFileUrls?: boolean
    allowModalDialogs?: boolean
    allowTopNavigationToDataUrls?: boolean
    allowUniversalAccessFromFileUrls?: boolean
    autoLoadImages?: boolean
    cursiveFontFamily?: string
    defaultCharset?: string
    defaultFontFamily?: string
    defaultFontSize?: number
    defaultMonospaceFontSize?: number
    drawCompositingIndicators?: boolean
    enableAccelerated2dCanvas?: boolean
    enableBackForwardNavigationGestures?: boolean
    enableCaretBrowsing?: boolean
    enableDeveloperExtras?: boolean
    enableDnsPrefetching?: boolean
    enableEncryptedMedia?: boolean
    enableFrameFlattening?: boolean
    enableFullscreen?: boolean
    enableHtml5Database?: boolean
    enableHtml5LocalStorage?: boolean
    enableHyperlinkAuditing?: boolean
    enableJava?: boolean
    enableJavascript?: boolean
    enableJavascriptMarkup?: boolean
    enableMedia?: boolean
    enableMediaCapabilities?: boolean
    enableMediaStream?: boolean
    enableMediasource?: boolean
    enableMockCaptureDevices?: boolean
    enableOfflineWebApplicationCache?: boolean
    enablePageCache?: boolean
    enablePlugins?: boolean
    enablePrivateBrowsing?: boolean
    enableResizableTextAreas?: boolean
    enableSiteSpecificQuirks?: boolean
    enableSmoothScrolling?: boolean
    enableSpatialNavigation?: boolean
    enableTabsToLinks?: boolean
    enableWebaudio?: boolean
    enableWebgl?: boolean
    enableWriteConsoleMessagesToStdout?: boolean
    enableXssAuditor?: boolean
    fantasyFontFamily?: string
    hardwareAccelerationPolicy?: HardwareAccelerationPolicy
    javascriptCanAccessClipboard?: boolean
    javascriptCanOpenWindowsAutomatically?: boolean
    loadIconsIgnoringImageLoadSetting?: boolean
    mediaContentTypesRequiringHardwareSupport?: string
    mediaPlaybackAllowsInline?: boolean
    mediaPlaybackRequiresUserGesture?: boolean
    minimumFontSize?: number
    monospaceFontFamily?: string
    pictographFontFamily?: string
    printBackgrounds?: boolean
    sansSerifFontFamily?: string
    serifFontFamily?: string
    userAgent?: string
    zoomTextOnly?: boolean
}
class Settings {
    /* Properties of WebKit2-5.0.WebKit2.Settings */
    allowFileAccessFromFileUrls: boolean
    allowModalDialogs: boolean
    allowTopNavigationToDataUrls: boolean
    allowUniversalAccessFromFileUrls: boolean
    autoLoadImages: boolean
    cursiveFontFamily: string
    defaultCharset: string
    defaultFontFamily: string
    defaultFontSize: number
    defaultMonospaceFontSize: number
    drawCompositingIndicators: boolean
    enableAccelerated2dCanvas: boolean
    enableBackForwardNavigationGestures: boolean
    enableCaretBrowsing: boolean
    enableDeveloperExtras: boolean
    enableDnsPrefetching: boolean
    enableEncryptedMedia: boolean
    enableFrameFlattening: boolean
    enableFullscreen: boolean
    enableHtml5Database: boolean
    enableHtml5LocalStorage: boolean
    enableHyperlinkAuditing: boolean
    enableJava: boolean
    enableJavascript: boolean
    enableJavascriptMarkup: boolean
    enableMedia: boolean
    enableMediaCapabilities: boolean
    enableMediaStream: boolean
    enableMediasource: boolean
    enableMockCaptureDevices: boolean
    enableOfflineWebApplicationCache: boolean
    enablePageCache: boolean
    enablePlugins: boolean
    enablePrivateBrowsing: boolean
    enableResizableTextAreas: boolean
    enableSiteSpecificQuirks: boolean
    enableSmoothScrolling: boolean
    enableSpatialNavigation: boolean
    enableTabsToLinks: boolean
    enableWebaudio: boolean
    enableWebgl: boolean
    enableWriteConsoleMessagesToStdout: boolean
    enableXssAuditor: boolean
    fantasyFontFamily: string
    hardwareAccelerationPolicy: HardwareAccelerationPolicy
    javascriptCanAccessClipboard: boolean
    javascriptCanOpenWindowsAutomatically: boolean
    loadIconsIgnoringImageLoadSetting: boolean
    mediaContentTypesRequiringHardwareSupport: string
    mediaPlaybackAllowsInline: boolean
    mediaPlaybackRequiresUserGesture: boolean
    minimumFontSize: number
    monospaceFontFamily: string
    pictographFontFamily: string
    printBackgrounds: boolean
    sansSerifFontFamily: string
    serifFontFamily: string
    userAgent: string
    zoomTextOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.Settings */
    getAllowFileAccessFromFileUrls(): boolean
    getAllowModalDialogs(): boolean
    getAllowTopNavigationToDataUrls(): boolean
    getAllowUniversalAccessFromFileUrls(): boolean
    getAutoLoadImages(): boolean
    getCursiveFontFamily(): string
    getDefaultCharset(): string
    getDefaultFontFamily(): string
    getDefaultFontSize(): number
    getDefaultMonospaceFontSize(): number
    getDrawCompositingIndicators(): boolean
    getEnableAccelerated2dCanvas(): boolean
    getEnableBackForwardNavigationGestures(): boolean
    getEnableCaretBrowsing(): boolean
    getEnableDeveloperExtras(): boolean
    getEnableDnsPrefetching(): boolean
    getEnableEncryptedMedia(): boolean
    getEnableFrameFlattening(): boolean
    getEnableFullscreen(): boolean
    getEnableHtml5Database(): boolean
    getEnableHtml5LocalStorage(): boolean
    getEnableHyperlinkAuditing(): boolean
    getEnableJava(): boolean
    getEnableJavascript(): boolean
    getEnableJavascriptMarkup(): boolean
    getEnableMedia(): boolean
    getEnableMediaCapabilities(): boolean
    getEnableMediaStream(): boolean
    getEnableMediasource(): boolean
    getEnableMockCaptureDevices(): boolean
    getEnableOfflineWebApplicationCache(): boolean
    getEnablePageCache(): boolean
    getEnablePlugins(): boolean
    getEnablePrivateBrowsing(): boolean
    getEnableResizableTextAreas(): boolean
    getEnableSiteSpecificQuirks(): boolean
    getEnableSmoothScrolling(): boolean
    getEnableSpatialNavigation(): boolean
    getEnableTabsToLinks(): boolean
    getEnableWebaudio(): boolean
    getEnableWebgl(): boolean
    getEnableWriteConsoleMessagesToStdout(): boolean
    getEnableXssAuditor(): boolean
    getFantasyFontFamily(): string
    getHardwareAccelerationPolicy(): HardwareAccelerationPolicy
    getJavascriptCanAccessClipboard(): boolean
    getJavascriptCanOpenWindowsAutomatically(): boolean
    getLoadIconsIgnoringImageLoadSetting(): boolean
    getMediaContentTypesRequiringHardwareSupport(): string
    getMediaPlaybackAllowsInline(): boolean
    getMediaPlaybackRequiresUserGesture(): boolean
    getMinimumFontSize(): number
    getMonospaceFontFamily(): string
    getPictographFontFamily(): string
    getPrintBackgrounds(): boolean
    getSansSerifFontFamily(): string
    getSerifFontFamily(): string
    getUserAgent(): string
    getZoomTextOnly(): boolean
    setAllowFileAccessFromFileUrls(allowed: boolean): void
    setAllowModalDialogs(allowed: boolean): void
    setAllowTopNavigationToDataUrls(allowed: boolean): void
    setAllowUniversalAccessFromFileUrls(allowed: boolean): void
    setAutoLoadImages(enabled: boolean): void
    setCursiveFontFamily(cursiveFontFamily: string): void
    setDefaultCharset(defaultCharset: string): void
    setDefaultFontFamily(defaultFontFamily: string): void
    setDefaultFontSize(fontSize: number): void
    setDefaultMonospaceFontSize(fontSize: number): void
    setDrawCompositingIndicators(enabled: boolean): void
    setEnableAccelerated2dCanvas(enabled: boolean): void
    setEnableBackForwardNavigationGestures(enabled: boolean): void
    setEnableCaretBrowsing(enabled: boolean): void
    setEnableDeveloperExtras(enabled: boolean): void
    setEnableDnsPrefetching(enabled: boolean): void
    setEnableEncryptedMedia(enabled: boolean): void
    setEnableFrameFlattening(enabled: boolean): void
    setEnableFullscreen(enabled: boolean): void
    setEnableHtml5Database(enabled: boolean): void
    setEnableHtml5LocalStorage(enabled: boolean): void
    setEnableHyperlinkAuditing(enabled: boolean): void
    setEnableJava(enabled: boolean): void
    setEnableJavascript(enabled: boolean): void
    setEnableJavascriptMarkup(enabled: boolean): void
    setEnableMedia(enabled: boolean): void
    setEnableMediaCapabilities(enabled: boolean): void
    setEnableMediaStream(enabled: boolean): void
    setEnableMediasource(enabled: boolean): void
    setEnableMockCaptureDevices(enabled: boolean): void
    setEnableOfflineWebApplicationCache(enabled: boolean): void
    setEnablePageCache(enabled: boolean): void
    setEnablePlugins(enabled: boolean): void
    setEnablePrivateBrowsing(enabled: boolean): void
    setEnableResizableTextAreas(enabled: boolean): void
    setEnableSiteSpecificQuirks(enabled: boolean): void
    setEnableSmoothScrolling(enabled: boolean): void
    setEnableSpatialNavigation(enabled: boolean): void
    setEnableTabsToLinks(enabled: boolean): void
    setEnableWebaudio(enabled: boolean): void
    setEnableWebgl(enabled: boolean): void
    setEnableWriteConsoleMessagesToStdout(enabled: boolean): void
    setEnableXssAuditor(enabled: boolean): void
    setFantasyFontFamily(fantasyFontFamily: string): void
    setHardwareAccelerationPolicy(policy: HardwareAccelerationPolicy): void
    setJavascriptCanAccessClipboard(enabled: boolean): void
    setJavascriptCanOpenWindowsAutomatically(enabled: boolean): void
    setLoadIconsIgnoringImageLoadSetting(enabled: boolean): void
    setMediaContentTypesRequiringHardwareSupport(contentTypes?: string | null): void
    setMediaPlaybackAllowsInline(enabled: boolean): void
    setMediaPlaybackRequiresUserGesture(enabled: boolean): void
    setMinimumFontSize(fontSize: number): void
    setMonospaceFontFamily(monospaceFontFamily: string): void
    setPictographFontFamily(pictographFontFamily: string): void
    setPrintBackgrounds(printBackgrounds: boolean): void
    setSansSerifFontFamily(sansSerifFontFamily: string): void
    setSerifFontFamily(serifFontFamily: string): void
    setUserAgent(userAgent?: string | null): void
    setUserAgentWithApplicationDetails(applicationName?: string | null, applicationVersion?: string | null): void
    setZoomTextOnly(zoomTextOnly: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::allow-file-access-from-file-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-file-access-from-file-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-file-access-from-file-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-file-access-from-file-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-file-access-from-file-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-modal-dialogs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-modal-dialogs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-modal-dialogs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-modal-dialogs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-modal-dialogs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-top-navigation-to-data-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-top-navigation-to-data-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-top-navigation-to-data-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-top-navigation-to-data-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-top-navigation-to-data-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-universal-access-from-file-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-universal-access-from-file-urls", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-universal-access-from-file-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-universal-access-from-file-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-universal-access-from-file-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-load-images", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-load-images", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-load-images", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-load-images", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-load-images", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursive-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursive-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursive-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursive-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursive-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-charset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-charset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-charset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-charset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-charset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-font-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-font-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-monospace-font-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-monospace-font-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-monospace-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-monospace-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-monospace-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::draw-compositing-indicators", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-compositing-indicators", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-accelerated-2d-canvas", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-accelerated-2d-canvas", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-accelerated-2d-canvas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-accelerated-2d-canvas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-accelerated-2d-canvas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-back-forward-navigation-gestures", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-back-forward-navigation-gestures", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-back-forward-navigation-gestures", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-back-forward-navigation-gestures", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-back-forward-navigation-gestures", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-caret-browsing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-caret-browsing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-caret-browsing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-caret-browsing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-caret-browsing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-developer-extras", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-developer-extras", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-developer-extras", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-developer-extras", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-developer-extras", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-dns-prefetching", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-dns-prefetching", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-dns-prefetching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-dns-prefetching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-dns-prefetching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-encrypted-media", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-encrypted-media", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-encrypted-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-encrypted-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-encrypted-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-frame-flattening", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-frame-flattening", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-frame-flattening", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-frame-flattening", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-frame-flattening", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-fullscreen", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-fullscreen", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-html5-database", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-html5-database", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-html5-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-html5-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-html5-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-html5-local-storage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-html5-local-storage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-html5-local-storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-html5-local-storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-html5-local-storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-hyperlink-auditing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-hyperlink-auditing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-hyperlink-auditing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-hyperlink-auditing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-hyperlink-auditing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-java", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-java", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-java", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-java", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-java", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-javascript", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-javascript", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-javascript", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-javascript", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-javascript", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-javascript-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-javascript-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-javascript-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-javascript-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-javascript-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-media", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-media-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media-capabilities", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-media-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-media-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-media-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-media-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-media-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-media-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-media-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-mediasource", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-mediasource", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-mediasource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-mediasource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-mediasource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-mock-capture-devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-mock-capture-devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-mock-capture-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-mock-capture-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-mock-capture-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-offline-web-application-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-offline-web-application-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-offline-web-application-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-offline-web-application-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-offline-web-application-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-page-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-page-cache", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-page-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-page-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-page-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-plugins", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-plugins", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-private-browsing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-private-browsing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-private-browsing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-private-browsing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-private-browsing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-resizable-text-areas", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-resizable-text-areas", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-resizable-text-areas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-resizable-text-areas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-resizable-text-areas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-site-specific-quirks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-site-specific-quirks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-site-specific-quirks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-site-specific-quirks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-site-specific-quirks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-smooth-scrolling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-smooth-scrolling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-smooth-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-smooth-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-smooth-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-spatial-navigation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-spatial-navigation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-spatial-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-spatial-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-spatial-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-tabs-to-links", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tabs-to-links", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-tabs-to-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-tabs-to-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-tabs-to-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-webaudio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webaudio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-webaudio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-webaudio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-webaudio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-webgl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webgl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-webgl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-webgl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-webgl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-write-console-messages-to-stdout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-write-console-messages-to-stdout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-xss-auditor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-xss-auditor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-xss-auditor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-xss-auditor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-xss-auditor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fantasy-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fantasy-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fantasy-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fantasy-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fantasy-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hardware-acceleration-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hardware-acceleration-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hardware-acceleration-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hardware-acceleration-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hardware-acceleration-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::javascript-can-access-clipboard", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::javascript-can-access-clipboard", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::javascript-can-access-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::javascript-can-access-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::javascript-can-access-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::javascript-can-open-windows-automatically", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::javascript-can-open-windows-automatically", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::javascript-can-open-windows-automatically", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::javascript-can-open-windows-automatically", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::javascript-can-open-windows-automatically", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-icons-ignoring-image-load-setting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-icons-ignoring-image-load-setting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-content-types-requiring-hardware-support", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-content-types-requiring-hardware-support", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-content-types-requiring-hardware-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-content-types-requiring-hardware-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-content-types-requiring-hardware-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-playback-allows-inline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-playback-allows-inline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-playback-allows-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-playback-allows-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-playback-allows-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::media-playback-requires-user-gesture", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-playback-requires-user-gesture", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::media-playback-requires-user-gesture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::media-playback-requires-user-gesture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::media-playback-requires-user-gesture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minimum-font-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-font-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimum-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimum-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimum-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monospace-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monospace-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monospace-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monospace-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pictograph-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pictograph-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pictograph-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pictograph-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pictograph-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-backgrounds", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-backgrounds", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-backgrounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-backgrounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-backgrounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sans-serif-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sans-serif-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sans-serif-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sans-serif-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sans-serif-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::serif-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serif-font-family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::serif-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::serif-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::serif-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zoom-text-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-text-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zoom-text-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zoom-text-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zoom-text-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(): Settings
    static fontSizeToPixels(points: number): number
    static fontSizeToPoints(pixels: number): number
    static $gtype: GObject.Type
}
interface URIRequest_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.URIRequest */
    uri?: string
}
class URIRequest {
    /* Properties of WebKit2-5.0.WebKit2.URIRequest */
    uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.URIRequest */
    getHttpHeaders(): Soup.MessageHeaders
    getHttpMethod(): string
    getUri(): string
    setUri(uri: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: URIRequest_ConstructProps)
    _init (config?: URIRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): URIRequest
    static $gtype: GObject.Type
}
interface URIResponse_ConstructProps extends GObject.Object_ConstructProps {
}
class URIResponse {
    /* Properties of WebKit2-5.0.WebKit2.URIResponse */
    readonly contentLength: number
    readonly httpHeaders: Soup.MessageHeaders
    readonly mimeType: string
    readonly statusCode: number
    readonly suggestedFilename: string
    readonly uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.URIResponse */
    getContentLength(): number
    getHttpHeaders(): Soup.MessageHeaders
    getMimeType(): string
    getStatusCode(): number
    getSuggestedFilename(): string
    getUri(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::content-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::http-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::http-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::http-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::http-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mime-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::suggested-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suggested-filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::suggested-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::suggested-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::suggested-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: URIResponse_ConstructProps)
    _init (config?: URIResponse_ConstructProps): void
    static $gtype: GObject.Type
}
interface URISchemeRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class URISchemeRequest {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.URISchemeRequest */
    finish(stream: Gio.InputStream, streamLength: number, contentType?: string | null): void
    finishError(error: GLib.Error): void
    finishWithResponse(response: URISchemeResponse): void
    getHttpHeaders(): Soup.MessageHeaders
    getHttpMethod(): string
    getPath(): string
    getScheme(): string
    getUri(): string
    getWebView(): WebView
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: URISchemeRequest_ConstructProps)
    _init (config?: URISchemeRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface URISchemeResponse_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.URISchemeResponse */
    stream?: Gio.InputStream
    streamLength?: number
}
class URISchemeResponse {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.URISchemeResponse */
    setContentType(contentType: string): void
    setHttpHeaders(headers: Soup.MessageHeaders): void
    setStatus(statusCode: number, reasonPhrase?: string | null): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: URISchemeResponse_ConstructProps)
    _init (config?: URISchemeResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(inputStream: Gio.InputStream, streamLength: number): URISchemeResponse
    static $gtype: GObject.Type
}
interface UserContentFilterStore_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.UserContentFilterStore */
    path?: string
}
class UserContentFilterStore {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.UserContentFilterStore */
    fetchIdentifiers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchIdentifiersFinish(result: Gio.AsyncResult): string[]
    getPath(): string
    load(identifier: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): UserContentFilter
    remove(identifier: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    save(identifier: string, source: any, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): UserContentFilter
    saveFromFile(identifier: string, file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFromFileFinish(result: Gio.AsyncResult): UserContentFilter
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: UserContentFilterStore_ConstructProps)
    _init (config?: UserContentFilterStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(storagePath: string): UserContentFilterStore
    static $gtype: GObject.Type
}
interface UserContentManager_ConstructProps extends GObject.Object_ConstructProps {
}
class UserContentManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.UserContentManager */
    addFilter(filter: UserContentFilter): void
    addScript(script: UserScript): void
    addStyleSheet(stylesheet: UserStyleSheet): void
    registerScriptMessageHandler(name: string): boolean
    registerScriptMessageHandlerInWorld(name: string, worldName: string): boolean
    removeAllFilters(): void
    removeAllScripts(): void
    removeAllStyleSheets(): void
    removeFilter(filter: UserContentFilter): void
    removeFilterById(filterId: string): void
    removeScript(script: UserScript): void
    removeStyleSheet(stylesheet: UserStyleSheet): void
    unregisterScriptMessageHandler(name: string): void
    unregisterScriptMessageHandlerInWorld(name: string, worldName: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.UserContentManager */
    connect(sigName: "script-message-received", callback: ((jsResult: JavascriptResult) => void)): number
    on(sigName: "script-message-received", callback: (jsResult: JavascriptResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "script-message-received", callback: (jsResult: JavascriptResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "script-message-received", callback: (jsResult: JavascriptResult) => void): NodeJS.EventEmitter
    emit(sigName: "script-message-received", jsResult: JavascriptResult): void
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
    constructor (config?: UserContentManager_ConstructProps)
    _init (config?: UserContentManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserContentManager
    static $gtype: GObject.Type
}
interface UserMediaPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class UserMediaPermissionRequest {
    /* Properties of WebKit2-5.0.WebKit2.UserMediaPermissionRequest */
    readonly isForAudioDevice: boolean
    readonly isForVideoDevice: boolean
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-for-audio-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-audio-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-for-audio-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-for-audio-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-for-audio-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-for-video-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-video-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-for-video-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-for-video-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-for-video-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UserMediaPermissionRequest_ConstructProps)
    _init (config?: UserMediaPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface UserMessage_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.UserMessage */
    fdList?: Gio.UnixFDList
    name?: string
    parameters?: GLib.Variant
}
class UserMessage {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.UserMessage */
    getFdList(): Gio.UnixFDList | null
    getName(): string
    getParameters(): GLib.Variant | null
    sendReply(reply: UserMessage): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: UserMessage_ConstructProps)
    _init (config?: UserMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, parameters?: GLib.Variant | null): UserMessage
    static newWithFdList(name: string, parameters?: GLib.Variant | null, fdList?: Gio.UnixFDList | null): UserMessage
    static $gtype: GObject.Type
}
interface WebContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.WebContext */
    localStorageDirectory?: string
    memoryPressureSettings?: MemoryPressureSettings
    processSwapOnCrossSiteNavigationEnabled?: boolean
    websiteDataManager?: WebsiteDataManager
}
class WebContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebContext */
    addPathToSandbox(path: string, readOnly: boolean): void
    allowTlsCertificateForHost(certificate: Gio.TlsCertificate, host: string): void
    clearCache(): void
    downloadUri(uri: string): Download
    getCacheModel(): CacheModel
    getCookieManager(): CookieManager
    getFaviconDatabase(): FaviconDatabase
    getFaviconDatabaseDirectory(): string
    getGeolocationManager(): GeolocationManager
    getPlugins(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getPluginsFinish(result: Gio.AsyncResult): Plugin[]
    getProcessModel(): ProcessModel
    getSandboxEnabled(): boolean
    getSecurityManager(): SecurityManager
    getSpellCheckingEnabled(): boolean
    getSpellCheckingLanguages(): string[]
    getTlsErrorsPolicy(): TLSErrorsPolicy
    getUseSystemAppearanceForScrollbars(): boolean
    getWebProcessCountLimit(): number
    getWebsiteDataManager(): WebsiteDataManager
    initializeNotificationPermissions(allowedOrigins: SecurityOrigin[], disallowedOrigins: SecurityOrigin[]): void
    isAutomationAllowed(): boolean
    isEphemeral(): boolean
    prefetchDns(hostname: string): void
    registerUriScheme(scheme: string, callback: URISchemeRequestCallback): void
    sendMessageToAllExtensions(message: UserMessage): void
    setAdditionalPluginsDirectory(directory: string): void
    setAutomationAllowed(allowed: boolean): void
    setCacheModel(cacheModel: CacheModel): void
    setDiskCacheDirectory(directory: string): void
    setFaviconDatabaseDirectory(path?: string | null): void
    setNetworkProxySettings(proxyMode: NetworkProxyMode, proxySettings?: NetworkProxySettings | null): void
    setPreferredLanguages(languages?: string[] | null): void
    setProcessModel(processModel: ProcessModel): void
    setSandboxEnabled(enabled: boolean): void
    setSpellCheckingEnabled(enabled: boolean): void
    setSpellCheckingLanguages(languages: string[]): void
    setTlsErrorsPolicy(policy: TLSErrorsPolicy): void
    setUseSystemAppearanceForScrollbars(enabled: boolean): void
    setWebExtensionsDirectory(directory: string): void
    setWebExtensionsInitializationUserData(userData: GLib.Variant): void
    setWebProcessCountLimit(limit: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.WebContext */
    connect(sigName: "automation-started", callback: ((session: AutomationSession) => void)): number
    on(sigName: "automation-started", callback: (session: AutomationSession) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "automation-started", callback: (session: AutomationSession) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "automation-started", callback: (session: AutomationSession) => void): NodeJS.EventEmitter
    emit(sigName: "automation-started", session: AutomationSession): void
    connect(sigName: "download-started", callback: ((download: Download) => void)): number
    on(sigName: "download-started", callback: (download: Download) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "download-started", callback: (download: Download) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "download-started", callback: (download: Download) => void): NodeJS.EventEmitter
    emit(sigName: "download-started", download: Download): void
    connect(sigName: "initialize-notification-permissions", callback: (() => void)): number
    on(sigName: "initialize-notification-permissions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "initialize-notification-permissions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "initialize-notification-permissions", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "initialize-notification-permissions"): void
    connect(sigName: "initialize-web-extensions", callback: (() => void)): number
    on(sigName: "initialize-web-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "initialize-web-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "initialize-web-extensions", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "initialize-web-extensions"): void
    connect(sigName: "user-message-received", callback: ((message: UserMessage) => boolean)): number
    on(sigName: "user-message-received", callback: (message: UserMessage) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-message-received", callback: (message: UserMessage) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-message-received", callback: (message: UserMessage) => void): NodeJS.EventEmitter
    emit(sigName: "user-message-received", message: UserMessage): void
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
    constructor (config?: WebContext_ConstructProps)
    _init (config?: WebContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WebContext
    static newEphemeral(): WebContext
    static newWithWebsiteDataManager(manager: WebsiteDataManager): WebContext
    static getDefault(): WebContext
    static $gtype: GObject.Type
}
interface WebInspector_ConstructProps extends GObject.Object_ConstructProps {
}
class WebInspector {
    /* Properties of WebKit2-5.0.WebKit2.WebInspector */
    readonly attachedHeight: number
    readonly canAttach: boolean
    readonly inspectedUri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebInspector */
    attach(): void
    close(): void
    detach(): void
    getAttachedHeight(): number
    getCanAttach(): boolean
    getInspectedUri(): string
    getWebView(): WebViewBase
    isAttached(): boolean
    show(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.WebInspector */
    connect(sigName: "attach", callback: (() => boolean)): number
    on(sigName: "attach", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "attach", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "attach", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "attach"): void
    connect(sigName: "bring-to-front", callback: (() => boolean)): number
    on(sigName: "bring-to-front", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bring-to-front", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bring-to-front", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "bring-to-front"): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "detach", callback: (() => boolean)): number
    on(sigName: "detach", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "detach", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "detach", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "detach"): void
    connect(sigName: "open-window", callback: (() => boolean)): number
    on(sigName: "open-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-window", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-window", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "open-window"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attached-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attached-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attached-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attached-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-attach", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-attach", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-attach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-attach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-attach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inspected-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inspected-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inspected-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inspected-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inspected-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebInspector_ConstructProps)
    _init (config?: WebInspector_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebResource_ConstructProps extends GObject.Object_ConstructProps {
}
class WebResource {
    /* Properties of WebKit2-5.0.WebKit2.WebResource */
    readonly response: URIResponse
    readonly uri: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebResource */
    getData(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getDataFinish(result: Gio.AsyncResult): Uint8Array
    getResponse(): URIResponse
    getUri(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of WebKit2-5.0.WebKit2.WebResource */
    connect(sigName: "failed", callback: ((error: GLib.Error) => void)): number
    on(sigName: "failed", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "failed-with-tls-errors", callback: ((certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void)): number
    on(sigName: "failed-with-tls-errors", callback: (certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed-with-tls-errors", callback: (certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed-with-tls-errors", callback: (certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "failed-with-tls-errors", certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    connect(sigName: "received-data", callback: ((dataLength: number) => void)): number
    on(sigName: "received-data", callback: (dataLength: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "received-data", callback: (dataLength: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "received-data", callback: (dataLength: number) => void): NodeJS.EventEmitter
    emit(sigName: "received-data", dataLength: number): void
    connect(sigName: "sent-request", callback: ((request: URIRequest, redirectedResponse: URIResponse) => void)): number
    on(sigName: "sent-request", callback: (request: URIRequest, redirectedResponse: URIResponse) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sent-request", callback: (request: URIRequest, redirectedResponse: URIResponse) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sent-request", callback: (request: URIRequest, redirectedResponse: URIResponse) => void): NodeJS.EventEmitter
    emit(sigName: "sent-request", request: URIRequest, redirectedResponse: URIResponse): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::response", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: WebResource_ConstructProps)
    _init (config?: WebResource_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebView_ConstructProps extends WebViewBase_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.WebView */
    automationPresentationType?: AutomationBrowsingContextPresentation
    cameraCaptureState?: MediaCaptureState
    displayCaptureState?: MediaCaptureState
    editable?: boolean
    isControlledByAutomation?: boolean
    isEphemeral?: boolean
    isMuted?: boolean
    microphoneCaptureState?: MediaCaptureState
    relatedView?: WebView
    settings?: Settings
    userContentManager?: UserContentManager
    webContext?: WebContext
    websitePolicies?: WebsitePolicies
    zoomLevel?: number
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
}
class WebView {
    /* Properties of WebKit2-5.0.WebKit2.WebView */
    cameraCaptureState: MediaCaptureState
    displayCaptureState: MediaCaptureState
    editable: boolean
    readonly estimatedLoadProgress: number
    readonly favicon: object
    readonly isLoading: boolean
    isMuted: boolean
    readonly isPlayingAudio: boolean
    readonly isWebProcessResponsive: boolean
    microphoneCaptureState: MediaCaptureState
    readonly pageId: number
    settings: Settings
    readonly title: string
    readonly uri: string
    zoomLevel: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Fields of WebKit2-5.0.WebKit2.WebViewBase */
    readonly parentInstance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebView */
    canExecuteEditingCommand(command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    canExecuteEditingCommandFinish(result: Gio.AsyncResult): boolean
    canGoBack(): boolean
    canGoForward(): boolean
    canShowMimeType(mimeType: string): boolean
    downloadUri(uri: string): Download
    executeEditingCommand(command: string): void
    executeEditingCommandWithArgument(command: string, argument: string): void
    getAutomationPresentationType(): AutomationBrowsingContextPresentation
    getBackForwardList(): BackForwardList
    getBackgroundColor(): /* rgba */ Gdk.RGBA
    getCameraCaptureState(): MediaCaptureState
    getContext(): WebContext
    getCustomCharset(): string
    getDisplayCaptureState(): MediaCaptureState
    getEditorState(): EditorState
    getEstimatedLoadProgress(): number
    getFavicon(): cairo.Surface
    getFindController(): FindController
    getInputMethodContext(): InputMethodContext | null
    getInspector(): WebInspector
    getIsMuted(): boolean
    getIsWebProcessResponsive(): boolean
    getMainResource(): WebResource
    getMicrophoneCaptureState(): MediaCaptureState
    getPageId(): number
    getSessionState(): WebViewSessionState
    getSettings(): Settings
    getSnapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getSnapshotFinish(result: Gio.AsyncResult): cairo.Surface
    getTitle(): string
    getTlsInfo(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    getUri(): string
    getUserContentManager(): UserContentManager
    getWebsiteDataManager(): WebsiteDataManager
    getWebsitePolicies(): WebsitePolicies
    getWindowProperties(): WindowProperties
    getZoomLevel(): number
    goBack(): void
    goForward(): void
    goToBackForwardListItem(listItem: BackForwardListItem): void
    isControlledByAutomation(): boolean
    isEditable(): boolean
    isEphemeral(): boolean
    loadAlternateHtml(content: string, contentUri: string, baseUri?: string | null): void
    loadBytes(bytes: any, mimeType?: string | null, encoding?: string | null, baseUri?: string | null): void
    loadHtml(content: string, baseUri?: string | null): void
    loadPlainText(plainText: string): void
    loadRequest(request: URIRequest): void
    loadUri(uri: string): void
    reload(): void
    reloadBypassCache(): void
    restoreSessionState(state: WebViewSessionState): void
    runJavascript(script: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptFinish(result: Gio.AsyncResult): JavascriptResult
    runJavascriptFromGresource(resource: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptFromGresourceFinish(result: Gio.AsyncResult): JavascriptResult
    runJavascriptInWorld(script: string, worldName: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    runJavascriptInWorldFinish(result: Gio.AsyncResult): JavascriptResult
    save(saveMode: SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): Gio.InputStream
    saveToFile(file: Gio.File, saveMode: SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    saveToFileFinish(result: Gio.AsyncResult): boolean
    sendMessageToPage(message: UserMessage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    sendMessageToPageFinish(result: Gio.AsyncResult): UserMessage
    setBackgroundColor(rgba: Gdk.RGBA): void
    setCameraCaptureState(state: MediaCaptureState): void
    setCorsAllowlist(allowlist?: string[] | null): void
    setCustomCharset(charset?: string | null): void
    setDisplayCaptureState(state: MediaCaptureState): void
    setEditable(editable: boolean): void
    setInputMethodContext(context?: InputMethodContext | null): void
    setIsMuted(muted: boolean): void
    setMicrophoneCaptureState(state: MediaCaptureState): void
    setSettings(settings: Settings): void
    setZoomLevel(zoomLevel: number): void
    stopLoading(): void
    terminateWebProcess(): void
    tryClose(): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of WebKit2-5.0.WebKit2.WebView */
    connect(sigName: "authenticate", callback: ((request: AuthenticationRequest) => boolean)): number
    on(sigName: "authenticate", callback: (request: AuthenticationRequest) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: (request: AuthenticationRequest) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: (request: AuthenticationRequest) => void): NodeJS.EventEmitter
    emit(sigName: "authenticate", request: AuthenticationRequest): void
    connect(sigName: "close", callback: (() => void)): number
    on(sigName: "close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "close"): void
    connect(sigName: "context-menu", callback: ((contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult) => boolean)): number
    on(sigName: "context-menu", callback: (contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-menu", callback: (contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-menu", callback: (contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult) => void): NodeJS.EventEmitter
    emit(sigName: "context-menu", contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult): void
    connect(sigName: "context-menu-dismissed", callback: (() => void)): number
    on(sigName: "context-menu-dismissed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-menu-dismissed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-menu-dismissed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "context-menu-dismissed"): void
    connect(sigName: "create", callback: ((navigationAction: NavigationAction) => Gtk.Widget)): number
    on(sigName: "create", callback: (navigationAction: NavigationAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: (navigationAction: NavigationAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: (navigationAction: NavigationAction) => void): NodeJS.EventEmitter
    emit(sigName: "create", navigationAction: NavigationAction): void
    connect(sigName: "decide-policy", callback: ((decision: PolicyDecision, decisionType: PolicyDecisionType) => boolean)): number
    on(sigName: "decide-policy", callback: (decision: PolicyDecision, decisionType: PolicyDecisionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-policy", callback: (decision: PolicyDecision, decisionType: PolicyDecisionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-policy", callback: (decision: PolicyDecision, decisionType: PolicyDecisionType) => void): NodeJS.EventEmitter
    emit(sigName: "decide-policy", decision: PolicyDecision, decisionType: PolicyDecisionType): void
    connect(sigName: "enter-fullscreen", callback: (() => boolean)): number
    on(sigName: "enter-fullscreen", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-fullscreen", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-fullscreen", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "enter-fullscreen"): void
    connect(sigName: "insecure-content-detected", callback: ((event: InsecureContentEvent) => void)): number
    on(sigName: "insecure-content-detected", callback: (event: InsecureContentEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insecure-content-detected", callback: (event: InsecureContentEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insecure-content-detected", callback: (event: InsecureContentEvent) => void): NodeJS.EventEmitter
    emit(sigName: "insecure-content-detected", event: InsecureContentEvent): void
    connect(sigName: "leave-fullscreen", callback: (() => boolean)): number
    on(sigName: "leave-fullscreen", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-fullscreen", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-fullscreen", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "leave-fullscreen"): void
    connect(sigName: "load-changed", callback: ((loadEvent: LoadEvent) => void)): number
    on(sigName: "load-changed", callback: (loadEvent: LoadEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-changed", callback: (loadEvent: LoadEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-changed", callback: (loadEvent: LoadEvent) => void): NodeJS.EventEmitter
    emit(sigName: "load-changed", loadEvent: LoadEvent): void
    connect(sigName: "load-failed", callback: ((loadEvent: LoadEvent, failingUri: string, error: GLib.Error) => boolean)): number
    on(sigName: "load-failed", callback: (loadEvent: LoadEvent, failingUri: string, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-failed", callback: (loadEvent: LoadEvent, failingUri: string, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-failed", callback: (loadEvent: LoadEvent, failingUri: string, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "load-failed", loadEvent: LoadEvent, failingUri: string, error: GLib.Error): void
    connect(sigName: "load-failed-with-tls-errors", callback: ((failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    on(sigName: "load-failed-with-tls-errors", callback: (failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-failed-with-tls-errors", callback: (failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-failed-with-tls-errors", callback: (failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "load-failed-with-tls-errors", failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    connect(sigName: "mouse-target-changed", callback: ((hitTestResult: HitTestResult, modifiers: number) => void)): number
    on(sigName: "mouse-target-changed", callback: (hitTestResult: HitTestResult, modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mouse-target-changed", callback: (hitTestResult: HitTestResult, modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mouse-target-changed", callback: (hitTestResult: HitTestResult, modifiers: number) => void): NodeJS.EventEmitter
    emit(sigName: "mouse-target-changed", hitTestResult: HitTestResult, modifiers: number): void
    connect(sigName: "permission-request", callback: ((request: PermissionRequest) => boolean)): number
    on(sigName: "permission-request", callback: (request: PermissionRequest) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "permission-request", callback: (request: PermissionRequest) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "permission-request", callback: (request: PermissionRequest) => void): NodeJS.EventEmitter
    emit(sigName: "permission-request", request: PermissionRequest): void
    connect(sigName: "print", callback: ((printOperation: PrintOperation) => boolean)): number
    on(sigName: "print", callback: (printOperation: PrintOperation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "print", callback: (printOperation: PrintOperation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "print", callback: (printOperation: PrintOperation) => void): NodeJS.EventEmitter
    emit(sigName: "print", printOperation: PrintOperation): void
    connect(sigName: "ready-to-show", callback: (() => void)): number
    on(sigName: "ready-to-show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready-to-show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready-to-show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "ready-to-show"): void
    connect(sigName: "resource-load-started", callback: ((resource: WebResource, request: URIRequest) => void)): number
    on(sigName: "resource-load-started", callback: (resource: WebResource, request: URIRequest) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-load-started", callback: (resource: WebResource, request: URIRequest) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-load-started", callback: (resource: WebResource, request: URIRequest) => void): NodeJS.EventEmitter
    emit(sigName: "resource-load-started", resource: WebResource, request: URIRequest): void
    connect(sigName: "run-as-modal", callback: (() => void)): number
    on(sigName: "run-as-modal", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-as-modal", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-as-modal", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "run-as-modal"): void
    connect(sigName: "run-color-chooser", callback: ((request: ColorChooserRequest) => boolean)): number
    on(sigName: "run-color-chooser", callback: (request: ColorChooserRequest) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-color-chooser", callback: (request: ColorChooserRequest) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-color-chooser", callback: (request: ColorChooserRequest) => void): NodeJS.EventEmitter
    emit(sigName: "run-color-chooser", request: ColorChooserRequest): void
    connect(sigName: "run-file-chooser", callback: ((request: FileChooserRequest) => boolean)): number
    on(sigName: "run-file-chooser", callback: (request: FileChooserRequest) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-file-chooser", callback: (request: FileChooserRequest) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-file-chooser", callback: (request: FileChooserRequest) => void): NodeJS.EventEmitter
    emit(sigName: "run-file-chooser", request: FileChooserRequest): void
    connect(sigName: "script-dialog", callback: ((dialog: ScriptDialog) => boolean)): number
    on(sigName: "script-dialog", callback: (dialog: ScriptDialog) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "script-dialog", callback: (dialog: ScriptDialog) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "script-dialog", callback: (dialog: ScriptDialog) => void): NodeJS.EventEmitter
    emit(sigName: "script-dialog", dialog: ScriptDialog): void
    connect(sigName: "show-notification", callback: ((notification: Notification) => boolean)): number
    on(sigName: "show-notification", callback: (notification: Notification) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-notification", callback: (notification: Notification) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-notification", callback: (notification: Notification) => void): NodeJS.EventEmitter
    emit(sigName: "show-notification", notification: Notification): void
    connect(sigName: "show-option-menu", callback: ((menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => boolean)): number
    on(sigName: "show-option-menu", callback: (menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-option-menu", callback: (menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-option-menu", callback: (menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "show-option-menu", menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle): void
    connect(sigName: "submit-form", callback: ((request: FormSubmissionRequest) => void)): number
    on(sigName: "submit-form", callback: (request: FormSubmissionRequest) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "submit-form", callback: (request: FormSubmissionRequest) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "submit-form", callback: (request: FormSubmissionRequest) => void): NodeJS.EventEmitter
    emit(sigName: "submit-form", request: FormSubmissionRequest): void
    connect(sigName: "user-message-received", callback: ((message: UserMessage) => boolean)): number
    on(sigName: "user-message-received", callback: (message: UserMessage) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-message-received", callback: (message: UserMessage) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-message-received", callback: (message: UserMessage) => void): NodeJS.EventEmitter
    emit(sigName: "user-message-received", message: UserMessage): void
    connect(sigName: "web-process-crashed", callback: (() => boolean)): number
    on(sigName: "web-process-crashed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "web-process-crashed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "web-process-crashed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "web-process-crashed"): void
    connect(sigName: "web-process-terminated", callback: ((reason: WebProcessTerminationReason) => void)): number
    on(sigName: "web-process-terminated", callback: (reason: WebProcessTerminationReason) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "web-process-terminated", callback: (reason: WebProcessTerminationReason) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "web-process-terminated", callback: (reason: WebProcessTerminationReason) => void): NodeJS.EventEmitter
    emit(sigName: "web-process-terminated", reason: WebProcessTerminationReason): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::camera-capture-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::camera-capture-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::camera-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::camera-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::camera-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-capture-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-capture-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::estimated-load-progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::favicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-loading", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-muted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-playing-audio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-web-process-responsive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-web-process-responsive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-web-process-responsive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-web-process-responsive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-web-process-responsive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::microphone-capture-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::microphone-capture-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::microphone-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::microphone-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::microphone-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::zoom-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebView_ConstructProps)
    _init (config?: WebView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WebView
    static newWithContext(context: WebContext): WebView
    static newWithRelatedView(webView: WebView): WebView
    static newWithSettings(settings: Settings): WebView
    static newWithUserContentManager(userContentManager: UserContentManager): WebView
    static $gtype: GObject.Type
}
interface WebViewBase_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
}
class WebViewBase {
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebViewBase_ConstructProps)
    _init (config?: WebViewBase_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebsiteDataAccessPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
class WebsiteDataAccessPermissionRequest {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest */
    getCurrentDomain(): string
    getRequestingDomain(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
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
    constructor (config?: WebsiteDataAccessPermissionRequest_ConstructProps)
    _init (config?: WebsiteDataAccessPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebsiteDataManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.WebsiteDataManager */
    baseCacheDirectory?: string
    baseDataDirectory?: string
    diskCacheDirectory?: string
    domCacheDirectory?: string
    hstsCacheDirectory?: string
    indexeddbDirectory?: string
    isEphemeral?: boolean
    itpDirectory?: string
    localStorageDirectory?: string
    offlineApplicationCacheDirectory?: string
    serviceWorkerRegistrationsDirectory?: string
    websqlDirectory?: string
}
class WebsiteDataManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebsiteDataManager */
    clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    clearFinish(result: Gio.AsyncResult): boolean
    fetch(types: WebsiteDataTypes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetchFinish(result: Gio.AsyncResult): WebsiteData[]
    getBaseCacheDirectory(): string | null
    getBaseDataDirectory(): string | null
    getCookieManager(): CookieManager
    getDiskCacheDirectory(): string | null
    getDomCacheDirectory(): string | null
    getHstsCacheDirectory(): string | null
    getIndexeddbDirectory(): string | null
    getItpDirectory(): string | null
    getItpEnabled(): boolean
    getItpSummary(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    getItpSummaryFinish(result: Gio.AsyncResult): ITPThirdParty[]
    getLocalStorageDirectory(): string | null
    getOfflineApplicationCacheDirectory(): string | null
    getPersistentCredentialStorageEnabled(): boolean
    getServiceWorkerRegistrationsDirectory(): string | null
    getTlsErrorsPolicy(): TLSErrorsPolicy
    getWebsqlDirectory(): string | null
    isEphemeral(): boolean
    remove(types: WebsiteDataTypes, websiteData: WebsiteData[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    removeFinish(result: Gio.AsyncResult): boolean
    setItpEnabled(enabled: boolean): void
    setNetworkProxySettings(proxyMode: NetworkProxyMode, proxySettings?: NetworkProxySettings | null): void
    setPersistentCredentialStorageEnabled(enabled: boolean): void
    setTlsErrorsPolicy(policy: TLSErrorsPolicy): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: WebsiteDataManager_ConstructProps)
    _init (config?: WebsiteDataManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newEphemeral(): WebsiteDataManager
    static setMemoryPressureSettings(settings: MemoryPressureSettings): void
    static $gtype: GObject.Type
}
interface WebsitePolicies_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.WebsitePolicies */
    autoplay?: AutoplayPolicy
}
class WebsitePolicies {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebsitePolicies */
    getAutoplayPolicy(): AutoplayPolicy
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: WebsitePolicies_ConstructProps)
    _init (config?: WebsitePolicies_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WebsitePolicies
    static $gtype: GObject.Type
}
interface WindowProperties_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of WebKit2-5.0.WebKit2.WindowProperties */
    fullscreen?: boolean
    geometry?: Gdk.Rectangle
    locationbarVisible?: boolean
    menubarVisible?: boolean
    resizable?: boolean
    scrollbarsVisible?: boolean
    statusbarVisible?: boolean
    toolbarVisible?: boolean
}
class WindowProperties {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WindowProperties */
    getFullscreen(): boolean
    getGeometry(): /* geometry */ Gdk.Rectangle
    getLocationbarVisible(): boolean
    getMenubarVisible(): boolean
    getResizable(): boolean
    getScrollbarsVisible(): boolean
    getStatusbarVisible(): boolean
    getToolbarVisible(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: WindowProperties_ConstructProps)
    _init (config?: WindowProperties_ConstructProps): void
    static $gtype: GObject.Type
}
class ApplicationInfo {
    /* Methods of WebKit2-5.0.WebKit2.ApplicationInfo */
    getName(): string
    getVersion(): [ /* major */ number, /* minor */ number | null, /* micro */ number | null ]
    ref(): ApplicationInfo
    setName(name: string): void
    setVersion(major: number, minor: number, micro: number): void
    unref(): void
    static name: string
    static new(): ApplicationInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ApplicationInfo
}
abstract class AuthenticationRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.AuthenticationRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AuthenticationRequestPrivate {
    static name: string
}
abstract class AutomationSessionClass {
    /* Fields of WebKit2-5.0.WebKit2.AutomationSessionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AutomationSessionPrivate {
    static name: string
}
abstract class BackForwardListClass {
    /* Fields of WebKit2-5.0.WebKit2.BackForwardListClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class BackForwardListItemClass {
    /* Fields of WebKit2-5.0.WebKit2.BackForwardListItemClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    static name: string
}
class BackForwardListItemPrivate {
    static name: string
}
class BackForwardListPrivate {
    static name: string
}
abstract class ColorChooserRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.ColorChooserRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ColorChooserRequestPrivate {
    static name: string
}
abstract class ContextMenuClass {
    /* Fields of WebKit2-5.0.WebKit2.ContextMenuClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class ContextMenuItemClass {
    /* Fields of WebKit2-5.0.WebKit2.ContextMenuItemClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    static name: string
}
class ContextMenuItemPrivate {
    static name: string
}
class ContextMenuPrivate {
    static name: string
}
abstract class CookieManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.CookieManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CookieManagerPrivate {
    static name: string
}
class Credential {
    /* Methods of WebKit2-5.0.WebKit2.Credential */
    copy(): Credential
    free(): void
    getCertificate(): Gio.TlsCertificate
    getPassword(): string
    getPersistence(): CredentialPersistence
    getUsername(): string
    hasPassword(): boolean
    static name: string
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
    constructor(username: string, password: string, persistence: CredentialPersistence)
    /* Static methods and pseudo-constructors */
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
    static newForCertificate(certificate: Gio.TlsCertificate | null, persistence: CredentialPersistence): Credential
    static newForCertificatePin(pin: string, persistence: CredentialPersistence): Credential
}
abstract class DeviceInfoPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class DeviceInfoPermissionRequestPrivate {
    static name: string
}
abstract class DownloadClass {
    /* Fields of WebKit2-5.0.WebKit2.DownloadClass */
    readonly parentClass: GObject.ObjectClass
    readonly decideDestination: (download: Download, suggestedFilename: string) => boolean
    static name: string
}
class DownloadPrivate {
    static name: string
}
abstract class EditorStateClass {
    /* Fields of WebKit2-5.0.WebKit2.EditorStateClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class EditorStatePrivate {
    static name: string
}
abstract class FaviconDatabaseClass {
    /* Fields of WebKit2-5.0.WebKit2.FaviconDatabaseClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class FaviconDatabasePrivate {
    static name: string
}
abstract class FileChooserRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.FileChooserRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class FileChooserRequestPrivate {
    static name: string
}
abstract class FindControllerClass {
    /* Fields of WebKit2-5.0.WebKit2.FindControllerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class FindControllerPrivate {
    static name: string
}
abstract class FormSubmissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.FormSubmissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class FormSubmissionRequestPrivate {
    static name: string
}
abstract class GeolocationManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.GeolocationManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class GeolocationManagerPrivate {
    static name: string
}
abstract class GeolocationPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.GeolocationPermissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class GeolocationPermissionRequestPrivate {
    static name: string
}
class GeolocationPosition {
    /* Methods of WebKit2-5.0.WebKit2.GeolocationPosition */
    copy(): GeolocationPosition
    free(): void
    setAltitude(altitude: number): void
    setAltitudeAccuracy(altitudeAccuracy: number): void
    setHeading(heading: number): void
    setSpeed(speed: number): void
    setTimestamp(timestamp: number): void
    static name: string
    static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition
    constructor(latitude: number, longitude: number, accuracy: number)
    /* Static methods and pseudo-constructors */
    static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition
}
abstract class HitTestResultClass {
    /* Fields of WebKit2-5.0.WebKit2.HitTestResultClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class HitTestResultPrivate {
    static name: string
}
class ITPFirstParty {
    /* Methods of WebKit2-5.0.WebKit2.ITPFirstParty */
    getDomain(): string
    getLastUpdateTime(): GLib.DateTime
    getWebsiteDataAccessAllowed(): boolean
    ref(): ITPFirstParty
    unref(): void
    static name: string
}
class ITPThirdParty {
    /* Methods of WebKit2-5.0.WebKit2.ITPThirdParty */
    getDomain(): string
    getFirstParties(): ITPFirstParty[]
    ref(): ITPThirdParty
    unref(): void
    static name: string
}
abstract class InputMethodContextClass {
    /* Fields of WebKit2-5.0.WebKit2.InputMethodContextClass */
    readonly parentClass: GObject.ObjectClass
    readonly preeditStarted: (context: InputMethodContext) => void
    readonly preeditChanged: (context: InputMethodContext) => void
    readonly preeditFinished: (context: InputMethodContext) => void
    readonly committed: (context: InputMethodContext, text: string) => void
    readonly deleteSurrounding: (context: InputMethodContext, offset: number, nChars: number) => void
    readonly setEnablePreedit: (context: InputMethodContext, enabled: boolean) => void
    readonly getPreedit: (context: InputMethodContext) => [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursorOffset */ number | null ]
    readonly filterKeyEvent: (context: InputMethodContext, keyEvent: Gdk.Event) => boolean
    readonly notifyFocusIn: (context: InputMethodContext) => void
    readonly notifyFocusOut: (context: InputMethodContext) => void
    readonly notifyCursorArea: (context: InputMethodContext, x: number, y: number, width: number, height: number) => void
    readonly notifySurrounding: (context: InputMethodContext, text: string, length: number, cursorIndex: number, selectionIndex: number) => void
    readonly reset: (context: InputMethodContext) => void
    static name: string
}
class InputMethodContextPrivate {
    static name: string
}
class InputMethodUnderline {
    /* Methods of WebKit2-5.0.WebKit2.InputMethodUnderline */
    copy(): InputMethodUnderline
    free(): void
    setColor(rgba?: Gdk.RGBA | null): void
    static name: string
    static new(startOffset: number, endOffset: number): InputMethodUnderline
    constructor(startOffset: number, endOffset: number)
    /* Static methods and pseudo-constructors */
    static new(startOffset: number, endOffset: number): InputMethodUnderline
}
abstract class InstallMissingMediaPluginsPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class InstallMissingMediaPluginsPermissionRequestPrivate {
    static name: string
}
class JavascriptResult {
    /* Methods of WebKit2-5.0.WebKit2.JavascriptResult */
    getJsValue(): JavaScriptCore.Value
    ref(): JavascriptResult
    unref(): void
    static name: string
}
abstract class MediaKeySystemPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MediaKeySystemPermissionRequestPrivate {
    static name: string
}
class MemoryPressureSettings {
    /* Methods of WebKit2-5.0.WebKit2.MemoryPressureSettings */
    copy(): MemoryPressureSettings
    free(): void
    getConservativeThreshold(): number
    getKillThreshold(): number
    getMemoryLimit(): number
    getPollInterval(): number
    getStrictThreshold(): number
    setConservativeThreshold(value: number): void
    setKillThreshold(value: number): void
    setMemoryLimit(memoryLimit: number): void
    setPollInterval(value: number): void
    setStrictThreshold(value: number): void
    static name: string
    static new(): MemoryPressureSettings
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MemoryPressureSettings
}
class MimeInfo {
    /* Methods of WebKit2-5.0.WebKit2.MimeInfo */
    getDescription(): string
    getExtensions(): string[]
    getMimeType(): string
    ref(): MimeInfo
    unref(): void
    static name: string
}
class NavigationAction {
    /* Methods of WebKit2-5.0.WebKit2.NavigationAction */
    copy(): NavigationAction
    free(): void
    getModifiers(): number
    getMouseButton(): number
    getNavigationType(): NavigationType
    getRequest(): URIRequest
    isRedirect(): boolean
    isUserGesture(): boolean
    static name: string
}
abstract class NavigationPolicyDecisionClass {
    /* Fields of WebKit2-5.0.WebKit2.NavigationPolicyDecisionClass */
    readonly parentClass: PolicyDecisionClass
    static name: string
}
class NavigationPolicyDecisionPrivate {
    static name: string
}
class NetworkProxySettings {
    /* Methods of WebKit2-5.0.WebKit2.NetworkProxySettings */
    addProxyForScheme(scheme: string, proxyUri: string): void
    copy(): NetworkProxySettings
    free(): void
    static name: string
    static new(defaultProxyUri?: string | null, ignoreHosts?: string[] | null): NetworkProxySettings
    constructor(defaultProxyUri?: string | null, ignoreHosts?: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(defaultProxyUri?: string | null, ignoreHosts?: string[] | null): NetworkProxySettings
}
abstract class NotificationClass {
    /* Fields of WebKit2-5.0.WebKit2.NotificationClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class NotificationPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.NotificationPermissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class NotificationPermissionRequestPrivate {
    static name: string
}
class NotificationPrivate {
    static name: string
}
abstract class OptionMenuClass {
    /* Fields of WebKit2-5.0.WebKit2.OptionMenuClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class OptionMenuItem {
    /* Methods of WebKit2-5.0.WebKit2.OptionMenuItem */
    copy(): OptionMenuItem
    free(): void
    getLabel(): string
    getTooltip(): string
    isEnabled(): boolean
    isGroupChild(): boolean
    isGroupLabel(): boolean
    isSelected(): boolean
    static name: string
}
class OptionMenuPrivate {
    static name: string
}
abstract class PermissionRequestIface {
    /* Fields of WebKit2-5.0.WebKit2.PermissionRequestIface */
    readonly parentInterface: GObject.TypeInterface
    readonly allow: (request: PermissionRequest) => void
    readonly deny: (request: PermissionRequest) => void
    static name: string
}
abstract class PluginClass {
    /* Fields of WebKit2-5.0.WebKit2.PluginClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PluginPrivate {
    static name: string
}
abstract class PointerLockPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.PointerLockPermissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PointerLockPermissionRequestPrivate {
    static name: string
}
abstract class PolicyDecisionClass {
    /* Fields of WebKit2-5.0.WebKit2.PolicyDecisionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PolicyDecisionPrivate {
    static name: string
}
abstract class PrintCustomWidgetClass {
    /* Fields of WebKit2-5.0.WebKit2.PrintCustomWidgetClass */
    readonly parentClass: GObject.ObjectClass
    readonly apply: (printCustomWidget: PrintCustomWidget, widget: Gtk.Widget) => void
    readonly update: (printCustomWidget: PrintCustomWidget, widget: Gtk.Widget, pageSetup: Gtk.PageSetup, printSettings: Gtk.PrintSettings) => void
    static name: string
}
class PrintCustomWidgetPrivate {
    static name: string
}
abstract class PrintOperationClass {
    /* Fields of WebKit2-5.0.WebKit2.PrintOperationClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PrintOperationPrivate {
    static name: string
}
abstract class ResponsePolicyDecisionClass {
    /* Fields of WebKit2-5.0.WebKit2.ResponsePolicyDecisionClass */
    readonly parentClass: PolicyDecisionClass
    static name: string
}
class ResponsePolicyDecisionPrivate {
    static name: string
}
class ScriptDialog {
    /* Methods of WebKit2-5.0.WebKit2.ScriptDialog */
    close(): void
    confirmSetConfirmed(confirmed: boolean): void
    getDialogType(): ScriptDialogType
    getMessage(): string
    promptGetDefaultText(): string
    promptSetText(text: string): void
    ref(): ScriptDialog
    unref(): void
    static name: string
}
abstract class SecurityManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.SecurityManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SecurityManagerPrivate {
    static name: string
}
class SecurityOrigin {
    /* Methods of WebKit2-5.0.WebKit2.SecurityOrigin */
    getHost(): string | null
    getPort(): number
    getProtocol(): string | null
    isOpaque(): boolean
    ref(): SecurityOrigin
    toString(): string | null
    unref(): void
    static name: string
    static new(protocol: string, host: string, port: number): SecurityOrigin
    constructor(protocol: string, host: string, port: number)
    /* Static methods and pseudo-constructors */
    static new(protocol: string, host: string, port: number): SecurityOrigin
    static newForUri(uri: string): SecurityOrigin
}
abstract class SettingsClass {
    /* Fields of WebKit2-5.0.WebKit2.SettingsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class SettingsPrivate {
    static name: string
}
abstract class URIRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.URIRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class URIRequestPrivate {
    static name: string
}
abstract class URIResponseClass {
    /* Fields of WebKit2-5.0.WebKit2.URIResponseClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class URIResponsePrivate {
    static name: string
}
abstract class URISchemeRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.URISchemeRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class URISchemeRequestPrivate {
    static name: string
}
abstract class URISchemeResponseClass {
    /* Fields of WebKit2-5.0.WebKit2.URISchemeResponseClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class URISchemeResponsePrivate {
    static name: string
}
class UserContentFilter {
    /* Methods of WebKit2-5.0.WebKit2.UserContentFilter */
    getIdentifier(): string
    ref(): UserContentFilter
    unref(): void
    static name: string
}
abstract class UserContentFilterStoreClass {
    /* Fields of WebKit2-5.0.WebKit2.UserContentFilterStoreClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class UserContentFilterStorePrivate {
    static name: string
}
abstract class UserContentManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.UserContentManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class UserContentManagerPrivate {
    static name: string
}
abstract class UserMediaPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.UserMediaPermissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class UserMediaPermissionRequestPrivate {
    static name: string
}
abstract class UserMessageClass {
    /* Fields of WebKit2-5.0.WebKit2.UserMessageClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    static name: string
}
class UserMessagePrivate {
    static name: string
}
class UserScript {
    /* Methods of WebKit2-5.0.WebKit2.UserScript */
    ref(): UserScript
    unref(): void
    static name: string
    static new(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, allowList?: string[] | null, blockList?: string[] | null): UserScript
    constructor(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, allowList?: string[] | null, blockList?: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, allowList?: string[] | null, blockList?: string[] | null): UserScript
    static newForWorld(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, worldName: string, allowList?: string[] | null, blockList?: string[] | null): UserScript
}
class UserStyleSheet {
    /* Methods of WebKit2-5.0.WebKit2.UserStyleSheet */
    ref(): UserStyleSheet
    unref(): void
    static name: string
    static new(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, allowList?: string[] | null, blockList?: string[] | null): UserStyleSheet
    constructor(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, allowList?: string[] | null, blockList?: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, allowList?: string[] | null, blockList?: string[] | null): UserStyleSheet
    static newForWorld(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, worldName: string, allowList?: string[] | null, blockList?: string[] | null): UserStyleSheet
}
abstract class WebContextClass {
    /* Fields of WebKit2-5.0.WebKit2.WebContextClass */
    readonly parent: GObject.ObjectClass
    readonly downloadStarted: (context: WebContext, download: Download) => void
    readonly initializeWebExtensions: (context: WebContext) => void
    readonly initializeNotificationPermissions: (context: WebContext) => void
    readonly automationStarted: (context: WebContext, session: AutomationSession) => void
    readonly userMessageReceived: (context: WebContext, message: UserMessage) => boolean
    static name: string
}
class WebContextPrivate {
    static name: string
}
abstract class WebInspectorClass {
    /* Fields of WebKit2-5.0.WebKit2.WebInspectorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class WebInspectorPrivate {
    static name: string
}
abstract class WebResourceClass {
    /* Fields of WebKit2-5.0.WebKit2.WebResourceClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class WebResourcePrivate {
    static name: string
}
abstract class WebViewBaseClass {
    /* Fields of WebKit2-5.0.WebKit2.WebViewBaseClass */
    readonly parentClass: Gtk.WidgetClass
    static name: string
}
class WebViewBasePrivate {
    static name: string
}
abstract class WebViewClass {
    /* Fields of WebKit2-5.0.WebKit2.WebViewClass */
    readonly parent: WebViewBaseClass
    readonly loadChanged: (webView: WebView, loadEvent: LoadEvent) => void
    readonly loadFailed: (webView: WebView, loadEvent: LoadEvent, failingUri: string, error: GLib.Error) => boolean
    readonly readyToShow: (webView: WebView) => void
    readonly runAsModal: (webView: WebView) => void
    readonly close: (webView: WebView) => void
    readonly scriptDialog: (webView: WebView, dialog: ScriptDialog) => boolean
    readonly decidePolicy: (webView: WebView, decision: PolicyDecision, type: PolicyDecisionType) => boolean
    readonly permissionRequest: (webView: WebView, permissionRequest: PermissionRequest) => boolean
    readonly mouseTargetChanged: (webView: WebView, hitTestResult: HitTestResult, modifiers: number) => void
    readonly print: (webView: WebView, printOperation: PrintOperation) => boolean
    readonly resourceLoadStarted: (webView: WebView, resource: WebResource, request: URIRequest) => void
    readonly enterFullscreen: (webView: WebView) => boolean
    readonly leaveFullscreen: (webView: WebView) => boolean
    readonly runFileChooser: (webView: WebView, request: FileChooserRequest) => boolean
    readonly contextMenu: (webView: WebView, contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult) => boolean
    readonly contextMenuDismissed: (webView: WebView) => void
    readonly submitForm: (webView: WebView, request: FormSubmissionRequest) => void
    readonly insecureContentDetected: (webView: WebView, event: InsecureContentEvent) => void
    readonly webProcessCrashed: (webView: WebView) => boolean
    readonly authenticate: (webView: WebView, request: AuthenticationRequest) => boolean
    readonly loadFailedWithTlsErrors: (webView: WebView, failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
    readonly showNotification: (webView: WebView, notification: Notification) => boolean
    readonly runColorChooser: (webView: WebView, request: ColorChooserRequest) => boolean
    readonly showOptionMenu: (webView: WebView, rectangle: Gdk.Rectangle, menu: OptionMenu) => boolean
    readonly webProcessTerminated: (webView: WebView, reason: WebProcessTerminationReason) => void
    readonly userMessageReceived: (webView: WebView, message: UserMessage) => boolean
    static name: string
}
class WebViewPrivate {
    static name: string
}
class WebViewSessionState {
    /* Methods of WebKit2-5.0.WebKit2.WebViewSessionState */
    ref(): WebViewSessionState
    serialize(): any
    unref(): void
    static name: string
    static new(data: any): WebViewSessionState
    constructor(data: any)
    /* Static methods and pseudo-constructors */
    static new(data: any): WebViewSessionState
}
class WebsiteData {
    /* Methods of WebKit2-5.0.WebKit2.WebsiteData */
    getName(): string
    getSize(types: WebsiteDataTypes): number
    getTypes(): WebsiteDataTypes
    ref(): WebsiteData
    unref(): void
    static name: string
}
abstract class WebsiteDataAccessPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequestClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class WebsiteDataAccessPermissionRequestPrivate {
    static name: string
}
abstract class WebsiteDataManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.WebsiteDataManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class WebsiteDataManagerPrivate {
    static name: string
}
abstract class WebsitePoliciesClass {
    /* Fields of WebKit2-5.0.WebKit2.WebsitePoliciesClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class WebsitePoliciesPrivate {
    static name: string
}
abstract class WindowPropertiesClass {
    /* Fields of WebKit2-5.0.WebKit2.WindowPropertiesClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class WindowPropertiesPrivate {
    static name: string
}
}
export default WebKit2;