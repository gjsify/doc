/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Unity-6.0
 */

import type GLib from './GLib-2.0';
import type Dbusmenu from './Dbusmenu-0.4';
import type GObject from './GObject-2.0';
import type Dee from './Dee-1.0';
import type Gio from './Gio-2.0';

export namespace Unity {

enum CategoryType {
    NONE,
    APPLICATION,
    BOOK,
    MUSIC,
    MOVIE,
    GAMES,
    ELECTRONICS,
    COMPUTERS,
    OFFICE,
    HOME,
    GARDEN,
    PETS,
    TOYS,
    CHILDREN,
    BABY,
    CLOTHES,
    SHOES,
    WATCHES,
    SPORTS,
    OUTDOORS,
    GROCERY,
    HEALTH,
    BEAUTY,
    DIY,
    TOOLS,
    CAR,
    N_CATEGORIES,
}
enum IconSizeHint {
    DEFAULT,
    SMALL,
    LARGE,
}
enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
}
enum CategoryRenderer {
    VERTICAL_TILE,
    HORIZONTAL_TILE,
    LIST_TILE,
    FLOW,
}
enum FilterRenderer {
    CHECK_OPTIONS,
    RADIO_OPTIONS,
    MULTIRANGE,
    RATINGS,
    CHECK_OPTIONS_COMPACT,
}
enum LayoutHint {
    NONE,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
enum PlaybackState {
    PLAYING,
    PAUSED,
}
enum OptionsFilterSortType {
    MANUAL,
    DISPLAY_NAME,
    ID,
}
enum PreferencesManagerRemoteContent {
    ALL,
    NONE,
}
enum MusicPreviewTrackState {
    STOPPED,
    PLAYING,
    PAUSED,
}
function ioReadStreamAsync(input: Gio.InputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function ioReadStreamFinish(res: Gio.AsyncResult): [ /* data */ Uint8Array, /* size */ number ]
function ioOpenFromDirs(filename: string, dirs: string[], callback?: Gio.AsyncReadyCallback | null): void
function ioOpenFromDirsFinish(res: Gio.AsyncResult): Gio.FileInputStream | null
function ioOpenFromDataDirs(filename: string, callback?: Gio.AsyncReadyCallback | null): void
function ioOpenFromDataDirsFinish(res: Gio.AsyncResult): Gio.FileInputStream | null
function ioGetSystemDataDirs(): string[]
interface MergeStrategy_ConstructProps extends GObject.Object_ConstructProps {
}
class MergeStrategy {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MergeStrategy */
    mergeResult(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: MergeStrategy_ConstructProps)
    _init (config?: MergeStrategy_ConstructProps): void
    static $gtype: GObject.Type
}
interface AppInfoManager_ConstructProps extends GObject.Object_ConstructProps {
}
class AppInfoManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AppInfoManager */
    lookup(id: string): Gio.AppInfo | null
    getCategories(id: string): string[] | null
    getKeywords(id: string): string[] | null
    getPath(id: string): string | null
    lookupAsync(id: string, callback?: Gio.AsyncReadyCallback | null): void
    lookupFinish(res: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.AppInfoManager */
    connect(sigName: "changed", callback: ((id: string, newAppinfo?: Gio.AppInfo | null) => void)): number
    on(sigName: "changed", callback: (id: string, newAppinfo?: Gio.AppInfo | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: (id: string, newAppinfo?: Gio.AppInfo | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: (id: string, newAppinfo?: Gio.AppInfo | null) => void): NodeJS.EventEmitter
    emit(sigName: "changed", id: string, newAppinfo?: Gio.AppInfo | null): void
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
    constructor (config?: AppInfoManager_ConstructProps)
    _init (config?: AppInfoManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getInstance(): AppInfoManager
    static getDefault(): AppInfoManager
    static $gtype: GObject.Type
}
interface AnnotatedIcon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.AnnotatedIcon */
    icon?: Gio.Icon
    ribbon?: string
    category?: CategoryType
    sizeHint?: IconSizeHint
}
class AnnotatedIcon {
    /* Properties of Unity-6.0.Unity.AnnotatedIcon */
    icon: Gio.Icon
    ribbon: string
    category: CategoryType
    sizeHint: IconSizeHint
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AnnotatedIcon */
    toString(): string
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ribbon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ribbon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ribbon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ribbon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ribbon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::category", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::category", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotatedIcon_ConstructProps)
    _init (config?: AnnotatedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(baseIcon: Gio.Icon): AnnotatedIcon
    static $gtype: GObject.Type
}
interface Inspector_ConstructProps extends GObject.Object_ConstructProps {
}
class Inspector {
    /* Properties of Unity-6.0.Unity.Inspector */
    readonly unityRunning: boolean
    readonly unityBusName: string
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unity-running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unity-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unity-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unity-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unity-bus-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-bus-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unity-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Inspector_ConstructProps)
    _init (config?: Inspector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Inspector
    static $gtype: GObject.Type
}
interface LauncherEntry_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.LauncherEntry */
    appUri?: string
    count?: number
    countVisible?: boolean
    progress?: number
    progressVisible?: boolean
    urgent?: boolean
    quicklist?: Dbusmenu.Menuitem
}
class LauncherEntry {
    /* Properties of Unity-6.0.Unity.LauncherEntry */
    appUri: string
    count: number
    countVisible: boolean
    progress: number
    progressVisible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem
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
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::count-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::count-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::count-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::count-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::quicklist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quicklist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::quicklist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::quicklist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::quicklist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LauncherEntry_ConstructProps)
    _init (config?: LauncherEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getForAppUri(appUri: string): LauncherEntry
    static getForDesktopId(desktopId: string): LauncherEntry
    static getForDesktopFile(desktopFile: string): LauncherEntry
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface LauncherFavorites_ConstructProps extends GObject.Object_ConstructProps {
}
class LauncherFavorites {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.LauncherFavorites */
    hasAppInfo(appinfo: Gio.AppInfo): boolean
    hasAppId(appId: string): boolean
    lookup(appId: string): Gio.AppInfo | null
    enumerateIds(): string[]
    enumerateAppInfos(): Gio.AppInfo[]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.LauncherFavorites */
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
    constructor (config?: LauncherFavorites_ConstructProps)
    _init (config?: LauncherFavorites_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): LauncherFavorites
    static $gtype: GObject.Type
}
interface ActivationResponse_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.ActivationResponse */
    handled?: HandledType
    gotoUri?: string
}
class ActivationResponse {
    /* Properties of Unity-6.0.Unity.ActivationResponse */
    gotoUri: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::goto-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::goto-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::goto-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::goto-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ActivationResponse_ConstructProps)
    _init (config?: ActivationResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(handled: HandledType, gotoUri: string): ActivationResponse
    static withPreview(preview: Preview): ActivationResponse
    static $gtype: GObject.Type
}
interface Category_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Category */
    name?: string
    iconHint?: Gio.Icon
    defaultRenderer?: CategoryRenderer
}
class Category {
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
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, iconHint: Gio.Icon, renderer: CategoryRenderer): Category
    static $gtype: GObject.Type
}
interface Filter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Filter */
    id?: string
    displayName?: string
    iconHint?: Gio.Icon
    renderer?: FilterRenderer
    visible?: boolean
    collapsed?: boolean
    filtering?: boolean
}
class Filter {
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
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
    /* Signals of Unity-6.0.Unity.Filter */
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
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
interface FilterOption_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.FilterOption */
    id?: string
    displayName?: string
    iconHint?: Gio.Icon
    active?: boolean
}
class FilterOption {
    /* Properties of Unity-6.0.Unity.FilterOption */
    active: boolean
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FilterOption_ConstructProps)
    _init (config?: FilterOption_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, active: boolean): FilterOption
    static $gtype: GObject.Type
}
interface OptionsFilter_ConstructProps extends Filter_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.OptionsFilter */
    sortType?: OptionsFilterSortType
}
class OptionsFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.Filter */
    readonly parentInstance: GObject.Object
    readonly priv: FilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Filter */
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
    connect(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: OptionsFilter_ConstructProps)
    _init (config?: OptionsFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OptionsFilter
    static $gtype: GObject.Type
}
interface RadioOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
class RadioOptionFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    readonly parentInstance: Filter
    readonly priv: OptionsFilterPrivate
    readonly options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.RadioOptionFilter */
    getActiveOption(): FilterOption | null
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Filter */
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
    connect(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RadioOptionFilter_ConstructProps)
    _init (config?: RadioOptionFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter
    /* Function overloads */
    static new(): RadioOptionFilter
    static $gtype: GObject.Type
}
interface CheckOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
class CheckOptionFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    readonly parentInstance: Filter
    readonly priv: OptionsFilterPrivate
    readonly options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Filter */
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
    connect(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CheckOptionFilter_ConstructProps)
    _init (config?: CheckOptionFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter
    /* Function overloads */
    static new(): CheckOptionFilter
    static $gtype: GObject.Type
}
interface CheckOptionFilterCompact_ConstructProps extends OptionsFilter_ConstructProps {
}
class CheckOptionFilterCompact {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    readonly parentInstance: Filter
    readonly priv: OptionsFilterPrivate
    readonly options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Filter */
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
    connect(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CheckOptionFilterCompact_ConstructProps)
    _init (config?: CheckOptionFilterCompact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact
    /* Function overloads */
    static new(): CheckOptionFilterCompact
    static $gtype: GObject.Type
}
interface RatingsFilter_ConstructProps extends Filter_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.RatingsFilter */
    rating?: number
}
class RatingsFilter {
    /* Properties of Unity-6.0.Unity.RatingsFilter */
    rating: number
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.Filter */
    readonly parentInstance: GObject.Object
    readonly priv: FilterPrivate
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
    /* Signals of Unity-6.0.Unity.Filter */
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
    connect(sigName: "notify::rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RatingsFilter_ConstructProps)
    _init (config?: RatingsFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    static $gtype: GObject.Type
}
interface MultiRangeFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
class MultiRangeFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sortType: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    displayName: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    readonly parentInstance: Filter
    readonly priv: OptionsFilterPrivate
    readonly options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MultiRangeFilter */
    getFirstActive(): FilterOption | null
    getLastActive(): FilterOption | null
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    addOption(id: string, displayName: string, iconHint?: Gio.Icon | null): FilterOption
    getOption(id: string): FilterOption | null
    removeOption(id: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Filter */
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
    connect(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sort-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filtering", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MultiRangeFilter_ConstructProps)
    _init (config?: MultiRangeFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter
    /* Function overloads */
    static new(): MultiRangeFilter
    static $gtype: GObject.Type
}
interface PreferencesManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.PreferencesManager */
    remoteContentSearch?: PreferencesManagerRemoteContent
}
class PreferencesManager {
    /* Properties of Unity-6.0.Unity.PreferencesManager */
    remoteContentSearch: PreferencesManagerRemoteContent
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
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::remote-content-search", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-content-search", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remote-content-search", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PreferencesManager_ConstructProps)
    _init (config?: PreferencesManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): PreferencesManager
    static $gtype: GObject.Type
}
interface LensSearch_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.LensSearch */
    searchString?: string
    hints?: GLib.HashTable
    resultsModel?: Dee.SerializableModel
}
class LensSearch {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.LensSearch */
    emitFinished(): void
    equals(other?: LensSearch | null): boolean
    setReplyHint(key: string, variant: GLib.Variant): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.LensSearch */
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LensSearch_ConstructProps)
    _init (config?: LensSearch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(searchString: string, hints: GLib.HashTable, resultsModel: Dee.SerializableModel): LensSearch
    static $gtype: GObject.Type
}
interface Lens_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Lens */
    active?: boolean
    visible?: boolean
    searching?: boolean
    exported?: boolean
    searchInGlobal?: boolean
    homeLensDefaultName?: string
    id?: string
    dbusPath?: string
    searchHint?: string
    filters?: Filter[]
    categories?: Category[]
    mergeStrategy?: MergeStrategy
    globalMergeStrategy?: MergeStrategy
    sourcesDisplayName?: string
}
class Lens {
    /* Properties of Unity-6.0.Unity.Lens */
    active: boolean
    visible: boolean
    searching: boolean
    exported: boolean
    searchInGlobal: boolean
    homeLensDefaultName: string
    searchHint: string
    filters: Filter[]
    categories: Category[]
    mergeStrategy: MergeStrategy
    globalMergeStrategy: MergeStrategy
    sourcesDisplayName: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Lens */
    export(): void
    addLocalScope(scope: Scope): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::searching", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searching", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::searching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::searching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::searching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-in-global", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-lens-default-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-default-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-lens-default-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::categories", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::merge-strategy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-strategy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::global-merge-strategy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-merge-strategy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::global-merge-strategy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sources-display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources-display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sources-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sources-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sources-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Lens_ConstructProps)
    _init (config?: Lens_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbusPath: string, id: string): Lens
    static $gtype: GObject.Type
}
interface Preview_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Preview */
    title?: string
    subtitle?: string
    descriptionMarkup?: string
    imageSourceUri?: string
    image?: Gio.Icon
}
class Preview {
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of Unity-6.0.Unity.Preview */
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
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Preview_ConstructProps)
    _init (config?: Preview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface PreviewAction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.PreviewAction */
    id?: string
    displayName?: string
    extraText?: string
    iconHint?: Gio.Icon
    layoutHint?: LayoutHint
}
class PreviewAction {
    /* Properties of Unity-6.0.Unity.PreviewAction */
    extraText: string
    readonly hints: GLib.HashTable
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
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Signals of Unity-6.0.Unity.PreviewAction */
    connect(sigName: "activated", callback: ((uri: string) => ActivationResponse)): number
    on(sigName: "activated", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activated", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activated", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "activated", uri: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extra-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extra-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extra-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extra-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PreviewAction_ConstructProps)
    _init (config?: PreviewAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint?: Gio.Icon | null): PreviewAction
    static withLayoutHint(id: string, displayName: string, iconHint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parseExternal(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface InfoHint_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.InfoHint */
    id?: string
    displayName?: string
    iconHint?: Gio.Icon
    data?: GLib.Variant
}
class InfoHint {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
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
    constructor (config?: InfoHint_ConstructProps)
    _init (config?: InfoHint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, displayName: string, iconHint: Gio.Icon | null, data: string): InfoHint
    static withVariant(id: string, displayName: string, iconHint: Gio.Icon | null, data: GLib.Variant): InfoHint
    static $gtype: GObject.Type
}
interface GenericPreview_ConstructProps extends Preview_ConstructProps {
}
class GenericPreview {
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parentInstance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Preview */
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
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GenericPreview_ConstructProps)
    _init (config?: GenericPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, description: string, image?: Gio.Icon | null): GenericPreview
    static $gtype: GObject.Type
}
interface ApplicationPreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.ApplicationPreview */
    appIcon?: Gio.Icon
    license?: string
    copyright?: string
    lastUpdate?: string
}
class ApplicationPreview {
    /* Properties of Unity-6.0.Unity.ApplicationPreview */
    appIcon: Gio.Icon
    license: string
    copyright: string
    lastUpdate: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parentInstance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.ApplicationPreview */
    setRating(rating: number, numRatings: number): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Preview */
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
    connect(sigName: "notify::app-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copyright", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-update", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-update", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-update", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ApplicationPreview_ConstructProps)
    _init (config?: ApplicationPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    static $gtype: GObject.Type
}
interface MusicPreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.MusicPreview */
    currentTrackUri?: string
    currentProgress?: number
    currentTrackState?: MusicPreviewTrackState
}
class MusicPreview {
    /* Properties of Unity-6.0.Unity.MusicPreview */
    currentTrackUri: string
    currentProgress: number
    currentTrackState: MusicPreviewTrackState
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parentInstance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MusicPreview */
    addTrack(track: TrackMetadata): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.MusicPreview */
    connect(sigName: "play", callback: ((uri: string) => void)): number
    on(sigName: "play", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "play", uri: string): void
    connect(sigName: "pause", callback: ((uri: string) => void)): number
    on(sigName: "pause", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pause", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pause", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "pause", uri: string): void
    /* Signals of Unity-6.0.Unity.Preview */
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
    connect(sigName: "notify::current-track-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-track-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-track-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-track-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-track-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-track-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicPreview_ConstructProps)
    _init (config?: MusicPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, image?: Gio.Icon | null): MusicPreview
    static $gtype: GObject.Type
}
interface MoviePreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.MoviePreview */
    year?: string
}
class MoviePreview {
    /* Properties of Unity-6.0.Unity.MoviePreview */
    year: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parentInstance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MoviePreview */
    setRating(rating: number, numRatings: number): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Preview */
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
    connect(sigName: "notify::year", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::year", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::year", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::year", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::year", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MoviePreview_ConstructProps)
    _init (config?: MoviePreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, description: string, image?: Gio.Icon | null): MoviePreview
    static $gtype: GObject.Type
}
interface SocialPreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.SocialPreview */
    avatar?: Gio.Icon
    content?: string
    sender?: string
}
class SocialPreview {
    /* Properties of Unity-6.0.Unity.SocialPreview */
    avatar: Gio.Icon
    content: string
    sender: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parentInstance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.SocialPreview */
    addComment(comment: SocialPreviewComment): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Preview */
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
    connect(sigName: "notify::avatar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::avatar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sender", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sender", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SocialPreview_ConstructProps)
    _init (config?: SocialPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null): SocialPreview
    static $gtype: GObject.Type
}
interface SocialPreviewComment_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.SocialPreviewComment */
    id?: string
    name?: string
    text?: string
    time?: string
}
class SocialPreviewComment {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
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
    constructor (config?: SocialPreviewComment_ConstructProps)
    _init (config?: SocialPreviewComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, name: string, text: string, time: string): SocialPreviewComment
    static $gtype: GObject.Type
}
interface AsyncPreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.AsyncPreview */
    cancellable?: Gio.Cancellable
}
class AsyncPreview {
    /* Properties of Unity-6.0.Unity.AsyncPreview */
    cancellable: Gio.Cancellable
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    descriptionMarkup: string
    imageSourceUri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parentInstance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AsyncPreview */
    emitPreviewReady(preview?: Preview | null): void
    /* Methods of Unity-6.0.Unity.Preview */
    addAction(action: PreviewAction): void
    addInfo(infoHint: InfoHint): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.AsyncPreview */
    connect(sigName: "preview_ready", callback: ((preview: Preview) => void)): number
    on(sigName: "preview_ready", callback: (preview: Preview) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preview_ready", callback: (preview: Preview) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preview_ready", callback: (preview: Preview) => void): NodeJS.EventEmitter
    emit(sigName: "preview_ready", preview: Preview): void
    /* Signals of Unity-6.0.Unity.Preview */
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
    connect(sigName: "notify::cancellable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cancellable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-source-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AsyncPreview_ConstructProps)
    _init (config?: AsyncPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AsyncPreview
    static withCancellable(cancellable: Gio.Cancellable): AsyncPreview
    static $gtype: GObject.Type
}
interface Scope_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Scope */
    active?: boolean
    exported?: boolean
    searchInGlobal?: boolean
    providesPersonalContent?: boolean
    dbusPath?: string
    sources?: OptionsFilter
}
class Scope {
    /* Properties of Unity-6.0.Unity.Scope */
    active: boolean
    exported: boolean
    searchInGlobal: boolean
    providesPersonalContent: boolean
    sources: OptionsFilter
    readonly filters: Filter[]
    readonly resultsModel: Dee.SerializableModel
    readonly globalResultsModel: Dee.SerializableModel
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Scope */
    export(): void
    getFilter(id: string): Filter | null
    queueSearchChanged(searchType: SearchType): void
    invalidateSearch(searchType: SearchType): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.Scope */
    connect(sigName: "activate_uri", callback: ((uri: string) => ActivationResponse | null)): number
    on(sigName: "activate_uri", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate_uri", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate_uri", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "activate_uri", uri: string): void
    connect(sigName: "preview_uri", callback: ((uri: string) => Preview | null)): number
    on(sigName: "preview_uri", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preview_uri", callback: (uri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preview_uri", callback: (uri: string) => void): NodeJS.EventEmitter
    emit(sigName: "preview_uri", uri: string): void
    connect(sigName: "filters_changed", callback: (() => void)): number
    on(sigName: "filters_changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "filters_changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "filters_changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "filters_changed"): void
    connect(sigName: "active_sources_changed", callback: ((activeIds: string[]) => void)): number
    on(sigName: "active_sources_changed", callback: (activeIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active_sources_changed", callback: (activeIds: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active_sources_changed", callback: (activeIds: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "active_sources_changed", activeIds: string[]): void
    connect(sigName: "search_changed", callback: ((search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void)): number
    on(sigName: "search_changed", callback: (search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "search_changed", callback: (search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "search_changed", callback: (search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable) => void): NodeJS.EventEmitter
    emit(sigName: "search_changed", search: LensSearch, searchType: SearchType, cancellable: Gio.Cancellable): void
    connect(sigName: "generate_search_key", callback: ((search: LensSearch) => string)): number
    on(sigName: "generate_search_key", callback: (search: LensSearch) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "generate_search_key", callback: (search: LensSearch) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "generate_search_key", callback: (search: LensSearch) => void): NodeJS.EventEmitter
    emit(sigName: "generate_search_key", search: LensSearch): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::exported", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-in-global", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-in-global", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provides-personal-content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provides-personal-content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provides-personal-content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filters", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::results-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::results-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::global-results-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-results-model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::global-results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::global-results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::global-results-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Scope_ConstructProps)
    _init (config?: Scope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbusPath: string): Scope
    static $gtype: GObject.Type
}
interface TrackMetadata_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.TrackMetadata */
    uri?: string
    trackNo?: number
    artist?: string
    title?: string
    album?: string
    length?: number
    artLocation?: Gio.File
    artIcon?: Gio.Icon
}
class TrackMetadata {
    /* Properties of Unity-6.0.Unity.TrackMetadata */
    uri: string
    trackNo: number
    artist: string
    title: string
    album: string
    length: number
    artLocation: Gio.File
    artIcon: Gio.Icon
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
    connect(sigName: "notify::track-no", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-no", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-no", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-no", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-no", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::artist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::album", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::album", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::art-location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::art-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::art-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::art-location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::art-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::art-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::art-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::art-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TrackMetadata_ConstructProps)
    _init (config?: TrackMetadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TrackMetadata
    static full(uri: string, trackNo: number, title: string, artist: string, album: string, length: number): TrackMetadata
    static $gtype: GObject.Type
}
interface Playlist_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Playlist */
    id?: string
    name?: string
    icon?: Gio.Icon
    creationDate?: GLib.DateTime
    modificationDate?: GLib.DateTime
    lastPlayDate?: GLib.DateTime
}
class Playlist {
    /* Properties of Unity-6.0.Unity.Playlist */
    name: string
    icon: Gio.Icon
    creationDate: GLib.DateTime
    modificationDate: GLib.DateTime
    lastPlayDate: GLib.DateTime
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
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creation-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modification-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modification-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modification-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modification-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modification-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-play-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-play-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-play-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-play-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-play-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Playlist_ConstructProps)
    _init (config?: Playlist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Playlist
    static $gtype: GObject.Type
}
interface MusicPlayer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.MusicPlayer */
    appInfo?: Gio.AppInfo
    desktopFileName?: string
    isBlacklisted?: boolean
    title?: string
    canGoNext?: boolean
    canGoPrevious?: boolean
    canPlay?: boolean
    canPause?: boolean
    currentTrack?: TrackMetadata
    playbackState?: PlaybackState
    currentPlaylist?: Playlist
    trackMenu?: Dbusmenu.Menuitem
    playerMenu?: Dbusmenu.Menuitem
}
class MusicPlayer {
    /* Properties of Unity-6.0.Unity.MusicPlayer */
    isBlacklisted: boolean
    title: string
    canGoNext: boolean
    canGoPrevious: boolean
    canPlay: boolean
    canPause: boolean
    currentTrack: TrackMetadata
    playbackState: PlaybackState
    currentPlaylist: Playlist
    trackMenu: Dbusmenu.Menuitem
    playerMenu: Dbusmenu.Menuitem
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MusicPlayer */
    export(): void
    unexport(): void
    addPlaylist(p: Playlist): boolean
    removePlaylist(p: Playlist): boolean
    getPlaylists(): Playlist[]
    editPlaylistName(id: string, name: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Unity-6.0.Unity.MusicPlayer */
    connect(sigName: "raise", callback: (() => void)): number
    on(sigName: "raise", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "raise", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "raise", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "raise"): void
    connect(sigName: "play_pause", callback: (() => void)): number
    on(sigName: "play_pause", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play_pause", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play_pause", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "play_pause"): void
    connect(sigName: "previous", callback: (() => void)): number
    on(sigName: "previous", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "previous", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "previous", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "previous"): void
    connect(sigName: "next", callback: (() => void)): number
    on(sigName: "next", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "next", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "next", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "next"): void
    connect(sigName: "activate_playlist", callback: ((playlistId: string) => void)): number
    on(sigName: "activate_playlist", callback: (playlistId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate_playlist", callback: (playlistId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate_playlist", callback: (playlistId: string) => void): NodeJS.EventEmitter
    emit(sigName: "activate_playlist", playlistId: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-blacklisted", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-blacklisted", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-blacklisted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-go-next", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-next", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-go-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-go-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-go-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-go-previous", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-previous", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-go-previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-go-previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-go-previous", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-play", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-play", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-pause", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-pause", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playback-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playback-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-playlist", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-playlist", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-playlist", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::track-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::track-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::track-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::track-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::player-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::player-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::player-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::player-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MusicPlayer_ConstructProps)
    _init (config?: MusicPlayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desktop: string): MusicPlayer
    static $gtype: GObject.Type
}
abstract class AppInfoManagerClass {
    /* Fields of Unity-6.0.Unity.AppInfoManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AppInfoManagerPrivate {
    static name: string
}
abstract class AnnotatedIconClass {
    /* Fields of Unity-6.0.Unity.AnnotatedIconClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class AnnotatedIconPrivate {
    static name: string
}
abstract class InspectorClass {
    /* Fields of Unity-6.0.Unity.InspectorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class InspectorPrivate {
    static name: string
}
abstract class LauncherEntryClass {
    /* Fields of Unity-6.0.Unity.LauncherEntryClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class LauncherEntryPrivate {
    static name: string
}
abstract class LauncherFavoritesClass {
    /* Fields of Unity-6.0.Unity.LauncherFavoritesClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class LauncherFavoritesPrivate {
    static name: string
}
abstract class ActivationResponseClass {
    /* Fields of Unity-6.0.Unity.ActivationResponseClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    static name: string
}
class ActivationResponsePrivate {
    static name: string
}
abstract class CategoryClass {
    /* Fields of Unity-6.0.Unity.CategoryClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CategoryPrivate {
    static name: string
}
abstract class FilterClass {
    /* Fields of Unity-6.0.Unity.FilterClass */
    readonly parentClass: GObject.ObjectClass
    readonly getHints: (self: Filter) => GLib.HashTable
    readonly update: (self: Filter, properties: GLib.Variant) => void
    static name: string
}
class FilterPrivate {
    static name: string
}
abstract class FilterOptionClass {
    /* Fields of Unity-6.0.Unity.FilterOptionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class FilterOptionPrivate {
    static name: string
}
abstract class OptionsFilterClass {
    /* Fields of Unity-6.0.Unity.OptionsFilterClass */
    readonly parentClass: FilterClass
    static name: string
}
class OptionsFilterPrivate {
    static name: string
}
abstract class RadioOptionFilterClass {
    /* Fields of Unity-6.0.Unity.RadioOptionFilterClass */
    readonly parentClass: OptionsFilterClass
    static name: string
}
class RadioOptionFilterPrivate {
    static name: string
}
abstract class CheckOptionFilterClass {
    /* Fields of Unity-6.0.Unity.CheckOptionFilterClass */
    readonly parentClass: OptionsFilterClass
    static name: string
}
class CheckOptionFilterPrivate {
    static name: string
}
abstract class CheckOptionFilterCompactClass {
    /* Fields of Unity-6.0.Unity.CheckOptionFilterCompactClass */
    readonly parentClass: OptionsFilterClass
    static name: string
}
class CheckOptionFilterCompactPrivate {
    static name: string
}
abstract class RatingsFilterClass {
    /* Fields of Unity-6.0.Unity.RatingsFilterClass */
    readonly parentClass: FilterClass
    static name: string
}
class RatingsFilterPrivate {
    static name: string
}
abstract class MultiRangeFilterClass {
    /* Fields of Unity-6.0.Unity.MultiRangeFilterClass */
    readonly parentClass: OptionsFilterClass
    static name: string
}
class MultiRangeFilterPrivate {
    static name: string
}
abstract class PreferencesManagerClass {
    /* Fields of Unity-6.0.Unity.PreferencesManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PreferencesManagerPrivate {
    static name: string
}
abstract class LensSearchClass {
    /* Fields of Unity-6.0.Unity.LensSearchClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    static name: string
}
class LensSearchPrivate {
    static name: string
}
abstract class LensClass {
    /* Fields of Unity-6.0.Unity.LensClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class LensPrivate {
    static name: string
}
abstract class PreviewClass {
    /* Fields of Unity-6.0.Unity.PreviewClass */
    readonly parentClass: GObject.ObjectClass
    readonly createRaw: (self: Preview) => GObject.Object
    readonly updateProperty: (self: Preview, values: GLib.HashTable, callback?: Gio.AsyncReadyCallback | null) => void
    readonly updatePropertyFinish: (self: Preview, res: Gio.AsyncResult) => GLib.HashTable
    readonly dummy1: (self: Preview) => void
    readonly dummy2: (self: Preview) => void
    readonly dummy3: (self: Preview) => void
    readonly dummy4: (self: Preview) => void
    static name: string
}
class PreviewPrivate {
    static name: string
}
abstract class PreviewActionClass {
    /* Fields of Unity-6.0.Unity.PreviewActionClass */
    readonly parentClass: GObject.ObjectClass
    readonly dummy1: (self: PreviewAction) => void
    readonly dummy2: (self: PreviewAction) => void
    readonly dummy3: (self: PreviewAction) => void
    readonly dummy4: (self: PreviewAction) => void
    static name: string
}
class PreviewActionPrivate {
    static name: string
}
abstract class InfoHintClass {
    /* Fields of Unity-6.0.Unity.InfoHintClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    static name: string
}
class InfoHintPrivate {
    static name: string
}
abstract class GenericPreviewClass {
    /* Fields of Unity-6.0.Unity.GenericPreviewClass */
    readonly parentClass: PreviewClass
    static name: string
}
class GenericPreviewPrivate {
    static name: string
}
abstract class ApplicationPreviewClass {
    /* Fields of Unity-6.0.Unity.ApplicationPreviewClass */
    readonly parentClass: PreviewClass
    static name: string
}
class ApplicationPreviewPrivate {
    static name: string
}
abstract class MusicPreviewClass {
    /* Fields of Unity-6.0.Unity.MusicPreviewClass */
    readonly parentClass: PreviewClass
    static name: string
}
class MusicPreviewPrivate {
    static name: string
}
abstract class MoviePreviewClass {
    /* Fields of Unity-6.0.Unity.MoviePreviewClass */
    readonly parentClass: PreviewClass
    static name: string
}
class MoviePreviewPrivate {
    static name: string
}
abstract class SocialPreviewClass {
    /* Fields of Unity-6.0.Unity.SocialPreviewClass */
    readonly parentClass: PreviewClass
    static name: string
}
class SocialPreviewPrivate {
    static name: string
}
abstract class CommentClass {
    /* Fields of Unity-6.0.Unity.CommentClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    static name: string
}
class CommentPrivate {
    static name: string
}
abstract class AsyncPreviewClass {
    /* Fields of Unity-6.0.Unity.AsyncPreviewClass */
    readonly parentClass: PreviewClass
    static name: string
}
class AsyncPreviewPrivate {
    static name: string
}
abstract class ScopeClass {
    /* Fields of Unity-6.0.Unity.ScopeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ScopePrivate {
    static name: string
}
abstract class TrackMetadataClass {
    /* Fields of Unity-6.0.Unity.TrackMetadataClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class TrackMetadataPrivate {
    static name: string
}
abstract class PlaylistClass {
    /* Fields of Unity-6.0.Unity.PlaylistClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class PlaylistPrivate {
    static name: string
}
abstract class MusicPlayerClass {
    /* Fields of Unity-6.0.Unity.MusicPlayerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MusicPlayerPrivate {
    static name: string
}
abstract class MergeStrategyIface {
    /* Fields of Unity-6.0.Unity.MergeStrategyIface */
    readonly parentIface: GObject.TypeInterface
    readonly mergeResult: (self: MergeStrategy, target: Dee.Model, row: GLib.Variant[]) => Dee.ModelIter | null
    static name: string
}
class PlaylistDetails {
    /* Fields of Unity-6.0.Unity.PlaylistDetails */
    readonly id: string
    readonly name: string
    readonly iconName: string
    static name: string
}
class ActivePlaylistContainer {
    /* Fields of Unity-6.0.Unity.ActivePlaylistContainer */
    readonly valid: boolean
    readonly details: PlaylistDetails
    static name: string
}
}
export default Unity;