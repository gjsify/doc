/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Totem-1.0
 */

import type TotemPlParser from './TotemPlParser-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Totem {

enum RemoteCommand {
    UNKNOWN,
    PLAY,
    PAUSE,
    STOP,
    PLAY_PAUSE,
    NEXT,
    PREVIOUS,
    SEEK_FORWARD,
    SEEK_BACKWARD,
    VOLUME_UP,
    VOLUME_DOWN,
    FULLSCREEN,
    QUIT,
    ENQUEUE,
    REPLACE,
    SHOW,
    UP,
    DOWN,
    LEFT,
    RIGHT,
    SELECT,
    DVD_MENU,
    ZOOM_UP,
    ZOOM_DOWN,
    EJECT,
    PLAY_DVD,
    MUTE,
    TOGGLE_ASPECT_RATIO,
}
enum RemoteSetting {
    REPEAT,
}
const GSETTINGS_SCHEMA: string
function getPluginPaths(): string[]
function interfaceCreateHeaderButton(header: Gtk.Widget, button: Gtk.Widget, iconName: string, packType: Gtk.PackType): Gtk.Widget
function interfaceError(title: string, reason: string, parent: Gtk.Window): void
function interfaceErrorBlocking(title: string, reason: string, parent: Gtk.Window): void
function interfaceErrorWithLink(title: string, reason: string, uri: string, label: string, parent: Gtk.Window): void
function interfaceGetFullPath(name: string): string
function interfaceLoad(name: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
function interfaceLoadPixbuf(name: string): GdkPixbuf.Pixbuf
function interfaceLoadWithFullPath(filename: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
function pluginFindFile(pluginName: string, file: string): string
function pluginLoadInterface(pluginName: string, name: string, fatal: boolean, parent?: Gtk.Window | null, userData?: object | null): Gtk.Builder
function remoteCommandQuark(): GLib.Quark
function remoteSettingQuark(): GLib.Quark
interface Object_ConstructProps extends Gtk.Application_ConstructProps {
}
class Object {
    /* Properties of Totem-1.0.Totem.Object */
    readonly currentContentType: string
    readonly currentDisplayName: string
    readonly currentMrl: string
    readonly currentTime: number
    readonly fullscreen: boolean
    readonly mainPage: string
    readonly playing: boolean
    readonly seekable: boolean
    readonly streamLength: number
    /* Properties of Gtk-3.0.Gtk.Application */
    readonly activeWindow: Gtk.Window
    appMenu: Gio.MenuModel
    menubar: Gio.MenuModel
    registerSession: boolean
    readonly screensaverActive: boolean
    /* Properties of Gio-2.0.Gio.Application */
    actionGroup: Gio.ActionGroup
    applicationId: string
    flags: Gio.ApplicationFlags
    inactivityTimeout: number
    readonly isBusy: boolean
    readonly isRegistered: boolean
    readonly isRemote: boolean
    resourceBasePath: string
    /* Fields of Gtk-3.0.Gtk.Application */
    readonly parent: Gio.Application
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Totem-1.0.Totem.Object */
    addToPlaylist(uri: string, displayName: string, play: boolean): void
    addToView(file: Gio.File, title: string): void
    canSeekNext(): boolean
    canSeekPrevious(): boolean
    clearPlaylist(): void
    emptyMenuSection(id: string): void
    exit(): void
    getCurrentMrl(): string
    getCurrentTime(): number
    getMainWindow(): Gtk.Window
    getMenuSection(id: string): Gio.Menu | null
    getPlaylistLength(): number
    getPlaylistPos(): number
    getRate(): number
    getShortTitle(): string
    getTitleAtPlaylistPos(playlistIndex: number): string
    getVideoWidget(): Gtk.Widget
    getVolume(): number
    isFullscreen(): boolean
    isPaused(): boolean
    isPlaying(): boolean
    isSeekable(): boolean
    nextAngle(): void
    pause(): void
    play(): void
    playPause(): void
    remoteCommand(cmd: RemoteCommand, url: string): void
    remoteGetSetting(setting: RemoteSetting): boolean
    remoteSetSetting(setting: RemoteSetting, value: boolean): void
    seekNext(): void
    seekPrevious(): void
    seekRelative(offset: number, accurate: boolean): void
    seekTime(msec: number, accurate: boolean): void
    setCurrentSubtitle(subtitleUri: string): void
    setRate(rate: number): boolean
    setVolume(volume: number): void
    showError(title: string, reason: string): void
    stop(): void
    /* Methods of Gtk-3.0.Gtk.Application */
    addAccelerator(accelerator: string, actionName: string, parameter?: GLib.Variant | null): void
    addWindow(window: Gtk.Window): void
    getAccelsForAction(detailedActionName: string): string[]
    getActionsForAccel(accel: string): string[]
    getActiveWindow(): Gtk.Window | null
    getAppMenu(): Gio.MenuModel | null
    getMenuById(id: string): Gio.Menu
    getMenubar(): Gio.MenuModel
    getWindowById(id: number): Gtk.Window | null
    getWindows(): Gtk.Window[]
    inhibit(window: Gtk.Window | null, flags: Gtk.ApplicationInhibitFlags, reason?: string | null): number
    isInhibited(flags: Gtk.ApplicationInhibitFlags): boolean
    listActionDescriptions(): string[]
    prefersAppMenu(): boolean
    removeAccelerator(actionName: string, parameter?: GLib.Variant | null): void
    removeWindow(window: Gtk.Window): void
    setAccelsForAction(detailedActionName: string, accels: string[]): void
    setAppMenu(appMenu?: Gio.MenuModel | null): void
    setMenubar(menubar?: Gio.MenuModel | null): void
    uninhibit(cookie: number): void
    /* Methods of Gio-2.0.Gio.Application */
    activate(): void
    addMainOption(longName: string, shortName: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, argDescription?: string | null): void
    addMainOptionEntries(entries: GLib.OptionEntry[]): void
    addOptionGroup(group: GLib.OptionGroup): void
    bindBusyProperty(object: GObject.Object, property: string): void
    getApplicationId(): string | null
    getDbusConnection(): Gio.DBusConnection | null
    getDbusObjectPath(): string | null
    getFlags(): Gio.ApplicationFlags
    getInactivityTimeout(): number
    getIsBusy(): boolean
    getIsRegistered(): boolean
    getIsRemote(): boolean
    getResourceBasePath(): string | null
    hold(): void
    markBusy(): void
    open(files: Gio.File[], hint: string): void
    quit(): void
    register(cancellable?: Gio.Cancellable | null): boolean
    release(): void
    run(argv?: string[] | null): number
    sendNotification(id: string | null, notification: Gio.Notification): void
    setActionGroup(actionGroup?: Gio.ActionGroup | null): void
    setApplicationId(applicationId?: string | null): void
    setDefault(): void
    setFlags(flags: Gio.ApplicationFlags): void
    setInactivityTimeout(inactivityTimeout: number): void
    setOptionContextDescription(description?: string | null): void
    setOptionContextParameterString(parameterString?: string | null): void
    setOptionContextSummary(summary?: string | null): void
    setResourceBasePath(resourcePath?: string | null): void
    unbindBusyProperty(object: GObject.Object, property: string): void
    unmarkBusy(): void
    withdrawNotification(id: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.ActionGroup */
    actionAdded(actionName: string): void
    actionEnabledChanged(actionName: string, enabled: boolean): void
    actionRemoved(actionName: string): void
    actionStateChanged(actionName: string, state: GLib.Variant): void
    activateAction(actionName: string, parameter?: GLib.Variant | null): void
    changeActionState(actionName: string, value: GLib.Variant): void
    getActionEnabled(actionName: string): boolean
    getActionParameterType(actionName: string): GLib.VariantType | null
    getActionState(actionName: string): GLib.Variant | null
    getActionStateHint(actionName: string): GLib.Variant | null
    getActionStateType(actionName: string): GLib.VariantType | null
    hasAction(actionName: string): boolean
    listActions(): string[]
    queryAction(actionName: string): [ /* returnType */ boolean, /* enabled */ boolean, /* parameterType */ GLib.VariantType | null, /* stateType */ GLib.VariantType | null, /* stateHint */ GLib.Variant | null, /* state */ GLib.Variant | null ]
    /* Methods of Gio-2.0.Gio.ActionMap */
    addAction(action: Gio.Action): void
    addActionEntries(entries: Gio.ActionEntry[], userData?: object | null): void
    lookupAction(actionName: string): Gio.Action | null
    removeAction(actionName: string): void
    /* Signals of Totem-1.0.Totem.Object */
    connect(sigName: "file-closed", callback: (() => void)): number
    on(sigName: "file-closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-closed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-closed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "file-closed"): void
    connect(sigName: "file-has-played", callback: ((mrl: string) => void)): number
    on(sigName: "file-has-played", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-has-played", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-has-played", callback: (mrl: string) => void): NodeJS.EventEmitter
    emit(sigName: "file-has-played", mrl: string): void
    connect(sigName: "file-opened", callback: ((mrl: string) => void)): number
    on(sigName: "file-opened", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "file-opened", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "file-opened", callback: (mrl: string) => void): NodeJS.EventEmitter
    emit(sigName: "file-opened", mrl: string): void
    connect(sigName: "get-text-subtitle", callback: ((mrl: string) => string)): number
    on(sigName: "get-text-subtitle", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-text-subtitle", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-text-subtitle", callback: (mrl: string) => void): NodeJS.EventEmitter
    emit(sigName: "get-text-subtitle", mrl: string): void
    connect(sigName: "get-user-agent", callback: ((mrl: string) => string)): number
    on(sigName: "get-user-agent", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-user-agent", callback: (mrl: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-user-agent", callback: (mrl: string) => void): NodeJS.EventEmitter
    emit(sigName: "get-user-agent", mrl: string): void
    connect(sigName: "metadata-updated", callback: ((artist: string, title: string, album: string, trackNumber: number) => void)): number
    on(sigName: "metadata-updated", callback: (artist: string, title: string, album: string, trackNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "metadata-updated", callback: (artist: string, title: string, album: string, trackNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "metadata-updated", callback: (artist: string, title: string, album: string, trackNumber: number) => void): NodeJS.EventEmitter
    emit(sigName: "metadata-updated", artist: string, title: string, album: string, trackNumber: number): void
    /* Signals of Gtk-3.0.Gtk.Application */
    connect(sigName: "query-end", callback: (() => void)): number
    on(sigName: "query-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-end", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "query-end"): void
    connect(sigName: "window-added", callback: ((window: Gtk.Window) => void)): number
    on(sigName: "window-added", callback: (window: Gtk.Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-added", callback: (window: Gtk.Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-added", callback: (window: Gtk.Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-added", window: Gtk.Window): void
    connect(sigName: "window-removed", callback: ((window: Gtk.Window) => void)): number
    on(sigName: "window-removed", callback: (window: Gtk.Window) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: (window: Gtk.Window) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: (window: Gtk.Window) => void): NodeJS.EventEmitter
    emit(sigName: "window-removed", window: Gtk.Window): void
    /* Signals of Gio-2.0.Gio.Application */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "command-line", callback: ((commandLine: Gio.ApplicationCommandLine) => number)): number
    on(sigName: "command-line", callback: (commandLine: Gio.ApplicationCommandLine) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "command-line", callback: (commandLine: Gio.ApplicationCommandLine) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "command-line", callback: (commandLine: Gio.ApplicationCommandLine) => void): NodeJS.EventEmitter
    emit(sigName: "command-line", commandLine: Gio.ApplicationCommandLine): void
    connect(sigName: "handle-local-options", callback: ((options: GLib.VariantDict) => number)): number
    on(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-local-options", callback: (options: GLib.VariantDict) => void): NodeJS.EventEmitter
    emit(sigName: "handle-local-options", options: GLib.VariantDict): void
    connect(sigName: "name-lost", callback: (() => boolean)): number
    on(sigName: "name-lost", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-lost", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-lost", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "name-lost"): void
    connect(sigName: "open", callback: ((files: Gio.File[], hint: string) => void)): number
    on(sigName: "open", callback: (files: Gio.File[], hint: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open", callback: (files: Gio.File[], hint: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open", callback: (files: Gio.File[], hint: string) => void): NodeJS.EventEmitter
    emit(sigName: "open", files: Gio.File[], hint: string): void
    connect(sigName: "shutdown", callback: (() => void)): number
    on(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shutdown", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shutdown", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "shutdown"): void
    connect(sigName: "startup", callback: (() => void)): number
    on(sigName: "startup", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "startup", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "startup", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "startup"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.ActionGroup */
    connect(sigName: "action-added", callback: ((actionName: string) => void)): number
    on(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-added", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-added", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-added", actionName: string): void
    connect(sigName: "action-enabled-changed", callback: ((actionName: string, enabled: boolean) => void)): number
    on(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-enabled-changed", callback: (actionName: string, enabled: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "action-enabled-changed", actionName: string, enabled: boolean): void
    connect(sigName: "action-removed", callback: ((actionName: string) => void)): number
    on(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-removed", callback: (actionName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-removed", callback: (actionName: string) => void): NodeJS.EventEmitter
    emit(sigName: "action-removed", actionName: string): void
    connect(sigName: "action-state-changed", callback: ((actionName: string, value: GLib.Variant) => void)): number
    on(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-state-changed", callback: (actionName: string, value: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "action-state-changed", actionName: string, value: GLib.Variant): void
    connect(sigName: "notify::current-content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-content-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-content-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-display-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-mrl", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-mrl", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-mrl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreen", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::main-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-page", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::main-page", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seekable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seekable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seekable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-length", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::active-window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::active-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::menubar", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::menubar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::register-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::register-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::screensaver-active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::screensaver-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-group", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inactivity-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inactivity-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-registered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-remote", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-remote", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resource-base-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resource-base-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(applicationId: string | null, flags: Gio.ApplicationFlags): Object
    /* Function overloads */
    static new(applicationId: string | null, flags: Gio.ApplicationFlags): Object
    static getSupportedContentTypes(): string[]
    static getSupportedUriSchemes(): string[]
    static $gtype: GObject.Type
}
abstract class ObjectClass {
    /* Fields of Totem-1.0.Totem.ObjectClass */
    readonly parentClass: Gtk.ApplicationClass
    readonly fileOpened: (totem: Object, mrl: string) => void
    readonly fileClosed: (totem: Object) => void
    readonly fileHasPlayed: (totem: Object, mrl: string) => void
    readonly metadataUpdated: (totem: Object, artist: string, title: string, album: string, trackNum: number) => void
    readonly getUserAgent: (totem: Object, mrl: string) => string
    readonly getTextSubtitle: (totem: Object, mrl: string) => string
    static name: string
}
}
export default Totem;