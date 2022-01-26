/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Bamf-3
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Bamf {

enum ClickBehavior {
    NONE,
    OPEN,
    FOCUS,
    FOCUS_ALL,
    MINIMIZE,
    RESTORE,
    RESTORE_ALL,
    PICKER,
}
enum WindowMaximizationType {
    FLOATING,
    HORIZONTAL_MAXIMIZED,
    VERTICAL_MAXIMIZED,
    MAXIMIZED,
}
enum WindowType {
    NORMAL,
    DESKTOP,
    DOCK,
    DIALOG,
    TOOLBAR,
    MENU,
    UTILITY,
    SPLASHSCREEN,
    UNKNOWN,
}
const APPLICATION_SIGNAL_DESKTOP_FILE_UPDATED: string
const APPLICATION_SIGNAL_WINDOW_ADDED: string
const APPLICATION_SIGNAL_WINDOW_REMOVED: string
const MATCHER_SIGNAL_ACTIVE_APPLICATION_CHANGED: string
const MATCHER_SIGNAL_ACTIVE_WINDOW_CHANGED: string
const MATCHER_SIGNAL_STACKING_ORDER_CHANGED: string
const MATCHER_SIGNAL_VIEW_CLOSED: string
const MATCHER_SIGNAL_VIEW_OPENED: string
const VIEW_SIGNAL_ACTIVE_CHANGED: string
const VIEW_SIGNAL_CHILD_ADDED: string
const VIEW_SIGNAL_CHILD_MOVED: string
const VIEW_SIGNAL_CHILD_REMOVED: string
const VIEW_SIGNAL_CLOSED: string
const VIEW_SIGNAL_ICON_CHANGED: string
const VIEW_SIGNAL_NAME_CHANGED: string
const VIEW_SIGNAL_RUNNING_CHANGED: string
const VIEW_SIGNAL_STARTING_CHANGED: string
const VIEW_SIGNAL_URGENT_CHANGED: string
const VIEW_SIGNAL_USER_VISIBLE_CHANGED: string
const WINDOW_SIGNAL_MAXIMIZED_CHANGED: string
const WINDOW_SIGNAL_MONITOR_CHANGED: string
interface TabPreviewReadyCallback {
    (self: Tab, previewData: string): void
}
interface Application_ConstructProps extends View_ConstructProps {
}
class Application {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.View */
    readonly parent: GObject.InitiallyUnowned
    readonly priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Application */
    getApplicationMenu(): [ /* returnType */ boolean, /* name */ string, /* objectPath */ string ]
    getApplicationType(): string
    getDesktopFile(): string
    getFocusableChild(): View
    getShowMenuStubs(): boolean
    getSupportedMimeTypes(): string[]
    getWindowForXid(xid: number): Window
    getWindows(): Window[]
    getXids(): number[]
    /* Methods of Bamf-3.Bamf.View */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    getIcon(): string
    getName(): string
    getViewType(): string
    hasChild(child: View): boolean
    isActive(): boolean
    isClosed(): boolean
    isRunning(): boolean
    isStarting(): boolean
    isSticky(): boolean
    isUrgent(): boolean
    isUserVisible(): boolean
    peekChildren(): View[]
    setSticky(value: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.Application */
    connect(sigName: "desktop-file-updated", callback: ((object: string) => void)): number
    on(sigName: "desktop-file-updated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "desktop-file-updated", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "desktop-file-updated", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "desktop-file-updated", object: string): void
    connect(sigName: "window-added", callback: ((object: Window) => void)): number
    on(sigName: "window-added", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-added", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-added", callback: (object: Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-added", object: Window): void
    connect(sigName: "window-removed", callback: ((object: Window) => void)): number
    on(sigName: "window-removed", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: (object: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: (object: Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-removed", object: Window): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: ((object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: ((object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: ((object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: ((object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: ((object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: ((object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: ((object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: ((object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: ((object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", object: boolean): void
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
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
interface Control_ConstructProps extends GObject.Object_ConstructProps {
}
class Control {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Control */
    createLocalDesktopFile(application: Application): void
    insertDesktopFile(desktopFile: string): void
    registerApplicationForPid(desktopFile: string, pid: number): void
    setApproverBehavior(behavior: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    constructor (config?: Control_ConstructProps)
    _init (config?: Control_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Control
    static $gtype: GObject.Type
}
interface Matcher_ConstructProps extends GObject.Object_ConstructProps {
}
class Matcher {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Matcher */
    applicationIsRunning(desktopFile: string): boolean
    getActiveApplication(): Application
    getActiveWindow(): Window
    getApplicationForDesktopFile(desktopFilePath: string, createIfNotFound: boolean): Application
    getApplicationForWindow(window: Window): Application
    getApplicationForXid(xid: number): Application
    getApplications(): Application[]
    getRunningApplications(): Application[]
    getTabs(): Tab[]
    getWindowForXid(xid: number): Window
    getWindowStackForMonitor(monitor: number): Window[]
    getWindows(): Window[]
    getXidsForApplication(desktopFile: string): number[]
    registerFavorites(favorites: string[]): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.Matcher */
    connect(sigName: "active-application-changed", callback: ((object: Application, p0: Application) => void)): number
    on(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-application-changed", callback: (object: Application, p0: Application) => void): NodeJS.EventEmitter
    emit(sigName: "active-application-changed", object: Application, p0: Application): void
    connect(sigName: "active-window-changed", callback: ((object: Window, p0: Window) => void)): number
    on(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-window-changed", callback: (object: Window, p0: Window) => void): NodeJS.EventEmitter
    emit(sigName: "active-window-changed", object: Window, p0: Window): void
    connect(sigName: "stacking-order-changed", callback: (() => void)): number
    on(sigName: "stacking-order-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stacking-order-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stacking-order-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "stacking-order-changed"): void
    connect(sigName: "view-closed", callback: ((object: View) => void)): number
    on(sigName: "view-closed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-closed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-closed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "view-closed", object: View): void
    connect(sigName: "view-opened", callback: ((object: View) => void)): number
    on(sigName: "view-opened", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "view-opened", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "view-opened", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "view-opened", object: View): void
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
    constructor (config?: Matcher_ConstructProps)
    _init (config?: Matcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): Matcher
    static $gtype: GObject.Type
}
interface Tab_ConstructProps extends View_ConstructProps {
}
class Tab {
    /* Properties of Bamf-3.Bamf.Tab */
    readonly desktopId: string
    readonly isForegroundTab: boolean
    readonly location: string
    readonly xid: number
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.View */
    readonly parent: GObject.InitiallyUnowned
    readonly priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Tab */
    close(): boolean
    getDesktopName(): string
    getIsForegroundTab(): boolean
    getLocation(): string
    getXid(): number
    raise(): boolean
    requestPreview(callback: TabPreviewReadyCallback): void
    /* Methods of Bamf-3.Bamf.View */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    getIcon(): string
    getName(): string
    getViewType(): string
    hasChild(child: View): boolean
    isActive(): boolean
    isClosed(): boolean
    isRunning(): boolean
    isStarting(): boolean
    isSticky(): boolean
    isUrgent(): boolean
    isUserVisible(): boolean
    peekChildren(): View[]
    setSticky(value: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: ((object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: ((object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: ((object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: ((object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: ((object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: ((object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: ((object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: ((object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: ((object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::desktop-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::desktop-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-foreground-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-foreground-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-foreground-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tab_ConstructProps)
    _init (config?: Tab_ConstructProps): void
    static $gtype: GObject.Type
}
interface View_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class View {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.View */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    getIcon(): string
    getName(): string
    getViewType(): string
    hasChild(child: View): boolean
    isActive(): boolean
    isClosed(): boolean
    isRunning(): boolean
    isStarting(): boolean
    isSticky(): boolean
    isUrgent(): boolean
    isUserVisible(): boolean
    peekChildren(): View[]
    setSticky(value: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: ((object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: ((object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: ((object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: ((object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: ((object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: ((object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: ((object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: ((object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: ((object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", object: boolean): void
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
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    static $gtype: GObject.Type
}
interface Window_ConstructProps extends View_ConstructProps {
}
class Window {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly userVisible: boolean
    /* Fields of Bamf-3.Bamf.View */
    readonly parent: GObject.InitiallyUnowned
    readonly priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Window */
    getMonitor(): number
    getPid(): number
    getTransient(): Window
    getUtf8Prop(prop: string): string
    getWindowType(): WindowType
    getXid(): number
    lastActive(): number
    maximized(): WindowMaximizationType
    /* Methods of Bamf-3.Bamf.View */
    getChildren(): View[]
    getClickSuggestion(): ClickBehavior
    getIcon(): string
    getName(): string
    getViewType(): string
    hasChild(child: View): boolean
    isActive(): boolean
    isClosed(): boolean
    isRunning(): boolean
    isStarting(): boolean
    isSticky(): boolean
    isUrgent(): boolean
    isUserVisible(): boolean
    peekChildren(): View[]
    setSticky(value: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Bamf-3.Bamf.Window */
    connect(sigName: "maximized-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "maximized-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximized-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximized-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "maximized-changed", object: number, p0: number): void
    connect(sigName: "monitor-changed", callback: ((object: number, p0: number) => void)): number
    on(sigName: "monitor-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-changed", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-changed", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "monitor-changed", object: number, p0: number): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: ((object: boolean) => void)): number
    on(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: ((object: View) => void)): number
    on(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: ((object: View) => void)): number
    on(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-moved", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-moved", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: ((object: View) => void)): number
    on(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: View) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: View) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (() => void)): number
    on(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: ((object: string) => void)): number
    on(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: ((object: string, p0: string) => void)): number
    on(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: (object: string, p0: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: (object: string, p0: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: ((object: boolean) => void)): number
    on(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "running-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "running-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: ((object: boolean) => void)): number
    on(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: ((object: boolean) => void)): number
    on(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "urgent-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "urgent-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: ((object: boolean) => void)): number
    on(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-visible-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-visible-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "user-visible-changed", object: boolean): void
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
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::starting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ApplicationClass {
    /* Fields of Bamf-3.Bamf.ApplicationClass */
    readonly parentClass: ViewClass
    static name: string
}
class ApplicationPrivate {
    static name: string
}
abstract class ControlClass {
    /* Fields of Bamf-3.Bamf.ControlClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class ControlPrivate {
    static name: string
}
abstract class MatcherClass {
    /* Fields of Bamf-3.Bamf.MatcherClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class MatcherPrivate {
    static name: string
}
abstract class TabClass {
    /* Fields of Bamf-3.Bamf.TabClass */
    readonly parentClass: ViewClass
    readonly getDesktopName: (self: Tab) => string
    readonly getLocation: (self: Tab) => string
    readonly getXid: (self: Tab) => number
    readonly getIsForegroundTab: (self: Tab) => boolean
    static name: string
}
class TabPrivate {
    static name: string
}
abstract class ViewClass {
    /* Fields of Bamf-3.Bamf.ViewClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    readonly getChildren: (view: View) => View[]
    readonly isActive: (view: View) => boolean
    readonly isRunning: (view: View) => boolean
    readonly isUrgent: (view: View) => boolean
    readonly isUserVisible: (view: View) => boolean
    readonly getName: (view: View) => string
    readonly getIcon: (view: View) => string
    readonly viewType: (view: View) => string
    readonly setPath: (view: View, path: string) => void
    readonly setSticky: (view: View, value: boolean) => void
    readonly clickBehavior: (view: View) => ClickBehavior
    readonly activeChanged: (view: View, active: boolean) => void
    readonly closed: (view: View) => void
    readonly childAdded: (view: View, child: View) => void
    readonly childRemoved: (view: View, child: View) => void
    readonly runningChanged: (view: View, running: boolean) => void
    readonly urgentChanged: (view: View, urgent: boolean) => void
    readonly userVisibleChanged: (view: View, userVisible: boolean) => void
    readonly nameChanged: (view: View, oldName: string, newName: string) => void
    readonly iconChanged: (view: View, icon: string) => void
    readonly childMoved: (view: View, child: View) => void
    readonly isStarting: (view: View) => boolean
    readonly startingChanged: (view: View, starting: boolean) => void
    static name: string
}
class ViewPrivate {
    static name: string
}
abstract class WindowClass {
    /* Fields of Bamf-3.Bamf.WindowClass */
    readonly parentClass: ViewClass
    readonly getTransient: (self: Window) => Window
    readonly getWindowType: (self: Window) => WindowType
    readonly getXid: (self: Window) => number
    readonly getPid: (self: Window) => number
    readonly getMonitor: (self: Window) => number
    readonly getUtf8Prop: (self: Window, prop: string) => string
    readonly maximized: (self: Window) => WindowMaximizationType
    readonly lastActive: (self: Window) => number
    readonly monitorChanged: (window: Window, oldValue: number, newValue: number) => void
    readonly maximizedChanged: (window: Window, oldValue: number, newValue: number) => void
    static name: string
}
class WindowPrivate {
    static name: string
}
}
export default Bamf;