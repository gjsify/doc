/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkX11-4.0
 */

import type xlib from './xlib-2.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace GdkX11 {

enum X11DeviceType {
    LOGICAL,
    PHYSICAL,
    FLOATING,
}
function x11DeviceGetId(device: X11DeviceXI2): number
function x11DeviceManagerLookup(deviceManager: X11DeviceManagerXI2, deviceId: number): X11DeviceXI2 | null
function x11FreeCompoundText(ctext: number): void
function x11FreeTextList(list: string): void
function x11GetServerTime(surface: X11Surface): number
function x11GetXatomByNameForDisplay(display: X11Display, atomName: string): xlib.Atom
function x11GetXatomNameForDisplay(display: X11Display, xatom: xlib.Atom): string
function x11LookupXdisplay(xdisplay: xlib.Display): X11Display
function x11SetSmClientId(smClientId?: string | null): void
interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}
class X11AppLaunchContext {
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.AppLaunchContext */
    getDisplay(): Gdk.Display
    setDesktop(desktop: number): void
    setIcon(icon?: Gio.Icon | null): void
    setIconName(iconName?: string | null): void
    setTimestamp(timestamp: number): void
    /* Methods of Gio-2.0.Gio.AppLaunchContext */
    getDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    getEnvironment(): string[]
    getStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
    launchFailed(startupNotifyId: string): void
    setenv(variable: string, value: string): void
    unsetenv(variable: string): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gio-2.0.Gio.AppLaunchContext */
    connect(sigName: "launch-failed", callback: ((startupNotifyId: string) => void)): number
    on(sigName: "launch-failed", callback: (startupNotifyId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-failed", callback: (startupNotifyId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-failed", callback: (startupNotifyId: string) => void): NodeJS.EventEmitter
    emit(sigName: "launch-failed", startupNotifyId: string): void
    connect(sigName: "launch-started", callback: ((info: Gio.AppInfo, platformData?: GLib.Variant | null) => void)): number
    on(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "launch-started", info: Gio.AppInfo, platformData?: GLib.Variant | null): void
    connect(sigName: "launched", callback: ((info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    on(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "launched", info: Gio.AppInfo, platformData: GLib.Variant): void
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
    constructor (config?: X11AppLaunchContext_ConstructProps)
    _init (config?: X11AppLaunchContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11DeviceManagerXI2_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2 */
    display?: Gdk.Display
    major?: number
    minor?: number
    opcode?: number
}
class X11DeviceManagerXI2 {
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
    constructor (config?: X11DeviceManagerXI2_ConstructProps)
    _init (config?: X11DeviceManagerXI2_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11DeviceXI2_ConstructProps extends Gdk.Device_ConstructProps {
    /* Constructor properties of GdkX11-4.0.GdkX11.X11DeviceXI2 */
    deviceId?: number
}
class X11DeviceXI2 {
    /* Properties of Gdk-4.0.Gdk.Device */
    readonly capsLockState: boolean
    readonly direction: Pango.Direction
    readonly hasBidiLayouts: boolean
    readonly modifierState: Gdk.ModifierType
    readonly nAxes: number
    readonly numLockState: boolean
    readonly scrollLockState: boolean
    seat: Gdk.Seat
    readonly tool: Gdk.DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Device */
    getCapsLockState(): boolean
    getDeviceTool(): Gdk.DeviceTool
    getDirection(): Pango.Direction
    getDisplay(): Gdk.Display
    getHasCursor(): boolean
    getModifierState(): Gdk.ModifierType
    getName(): string
    getNumLockState(): boolean
    getNumTouches(): number
    getProductId(): string | null
    getScrollLockState(): boolean
    getSeat(): Gdk.Seat
    getSource(): Gdk.InputSource
    getSurfaceAtPosition(): [ /* returnType */ Gdk.Surface | null, /* winX */ number | null, /* winY */ number | null ]
    getTimestamp(): number
    getVendorId(): string | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-4.0.Gdk.Device */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "tool-changed", callback: ((tool: Gdk.DeviceTool) => void)): number
    on(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (tool: Gdk.DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-changed", tool: Gdk.DeviceTool): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-bidi-layouts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modifier-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11DeviceXI2_ConstructProps)
    _init (config?: X11DeviceXI2_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Display_ConstructProps extends Gdk.Display_ConstructProps {
}
class X11Display {
    /* Properties of Gdk-4.0.Gdk.Display */
    readonly composited: boolean
    readonly inputShapes: boolean
    readonly rgba: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11-4.0.GdkX11.X11Display */
    errorTrapPop(): number
    errorTrapPopIgnored(): void
    errorTrapPush(): void
    getDefaultGroup(): Gdk.Surface
    getEglDisplay(): object | null
    getEglVersion(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    getGlxVersion(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    getPrimaryMonitor(): Gdk.Monitor
    getScreen(): X11Screen
    getStartupNotificationId(): string
    getUserTime(): number
    getXcursor(cursor: Gdk.Cursor): xlib.Cursor
    getXdisplay(): xlib.Display
    getXrootwindow(): xlib.Window
    getXscreen(): xlib.Screen
    grab(): void
    setCursorTheme(theme: string | null, size: number): void
    setStartupNotificationId(startupId: string): void
    setSurfaceScale(scale: number): void
    stringToCompoundText(str: string): [ /* returnType */ number, /* encoding */ string, /* format */ number, /* ctext */ Uint8Array ]
    textPropertyToTextList(encoding: string, format: number, text: number, length: number, list: string): number
    ungrab(): void
    utf8ToCompoundText(str: string): [ /* returnType */ boolean, /* encoding */ string, /* format */ number, /* ctext */ Uint8Array ]
    /* Methods of Gdk-4.0.Gdk.Display */
    beep(): void
    close(): void
    createGlContext(): Gdk.GLContext
    deviceIsGrabbed(device: Gdk.Device): boolean
    flush(): void
    getAppLaunchContext(): Gdk.AppLaunchContext
    getClipboard(): Gdk.Clipboard
    getDefaultSeat(): Gdk.Seat | null
    getMonitorAtSurface(surface: Gdk.Surface): Gdk.Monitor
    getMonitors(): Gio.ListModel
    getName(): string
    getPrimaryClipboard(): Gdk.Clipboard
    getSetting(name: string, value: any): boolean
    getStartupNotificationId(): string | null
    isClosed(): boolean
    isComposited(): boolean
    isRgba(): boolean
    listSeats(): Gdk.Seat[]
    mapKeycode(keycode: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] | null, /* keyvals */ number[] | null ]
    mapKeyval(keyval: number): [ /* returnType */ boolean, /* keys */ Gdk.KeymapKey[] ]
    notifyStartupComplete(startupId: string): void
    prepareGl(): boolean
    putEvent(event: Gdk.Event): void
    supportsInputShapes(): boolean
    sync(): void
    translateKey(keycode: number, state: Gdk.ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effectiveGroup */ number | null, /* level */ number | null, /* consumed */ Gdk.ModifierType | null ]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GdkX11-4.0.GdkX11.X11Display */
    connect(sigName: "xevent", callback: ((xevent?: object | null) => boolean)): number
    on(sigName: "xevent", callback: (xevent?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "xevent", callback: (xevent?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "xevent", callback: (xevent?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "xevent", xevent?: object | null): void
    /* Signals of Gdk-4.0.Gdk.Display */
    connect(sigName: "closed", callback: ((isError: boolean) => void)): number
    on(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (isError: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "closed", isError: boolean): void
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    connect(sigName: "seat-added", callback: ((seat: Gdk.Seat) => void)): number
    on(sigName: "seat-added", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-added", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-added", callback: (seat: Gdk.Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-added", seat: Gdk.Seat): void
    connect(sigName: "seat-removed", callback: ((seat: Gdk.Seat) => void)): number
    on(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-removed", callback: (seat: Gdk.Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-removed", seat: Gdk.Seat): void
    connect(sigName: "setting-changed", callback: ((setting: string) => void)): number
    on(sigName: "setting-changed", callback: (setting: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (setting: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (setting: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", setting: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::composited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-shapes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: X11Display_ConstructProps)
    _init (config?: X11Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static open(displayName?: string | null): Gdk.Display | null
    /* Function overloads */
    static open(displayName: string): Gdk.Display | null
    static setProgramClass(display: Gdk.Display, programClass: string): void
    static $gtype: GObject.Type
}
interface X11Drag_ConstructProps extends Gdk.Drag_ConstructProps {
}
class X11Drag {
    /* Properties of Gdk-4.0.Gdk.Drag */
    actions: Gdk.DragAction
    readonly display: Gdk.Display
    selectedAction: Gdk.DragAction
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Drag */
    dropDone(success: boolean): void
    getActions(): Gdk.DragAction
    getContent(): Gdk.ContentProvider
    getDevice(): Gdk.Device
    getDisplay(): Gdk.Display
    getDragSurface(): Gdk.Surface | null
    getFormats(): Gdk.ContentFormats
    getSelectedAction(): Gdk.DragAction
    getSurface(): Gdk.Surface
    setHotspot(hotX: number, hotY: number): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-4.0.Gdk.Drag */
    connect(sigName: "cancel", callback: ((reason: Gdk.DragCancelReason) => void)): number
    on(sigName: "cancel", callback: (reason: Gdk.DragCancelReason) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel", callback: (reason: Gdk.DragCancelReason) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel", callback: (reason: Gdk.DragCancelReason) => void): NodeJS.EventEmitter
    emit(sigName: "cancel", reason: Gdk.DragCancelReason): void
    connect(sigName: "dnd-finished", callback: (() => void)): number
    on(sigName: "dnd-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dnd-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dnd-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "dnd-finished"): void
    connect(sigName: "drop-performed", callback: (() => void)): number
    on(sigName: "drop-performed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop-performed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop-performed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "drop-performed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected-action", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-action", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Drag_ConstructProps)
    _init (config?: X11Drag_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}
class X11GLContext {
    /* Properties of Gdk-4.0.Gdk.GLContext */
    allowedApis: Gdk.GLAPI
    readonly api: Gdk.GLAPI
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLContext */
    getAllowedApis(): Gdk.GLAPI
    getApi(): Gdk.GLAPI
    getDebugEnabled(): boolean
    getDisplay(): Gdk.Display | null
    getForwardCompatible(): boolean
    getRequiredVersion(): [ /* major */ number | null, /* minor */ number | null ]
    getSharedContext(): Gdk.GLContext | null
    getSurface(): Gdk.Surface | null
    getUseEs(): boolean
    getVersion(): [ /* major */ number, /* minor */ number ]
    isLegacy(): boolean
    isShared(other: Gdk.GLContext): boolean
    makeCurrent(): void
    realize(): boolean
    setAllowedApis(apis: Gdk.GLAPI): void
    setDebugEnabled(enabled: boolean): void
    setForwardCompatible(compatible: boolean): void
    setRequiredVersion(major: number, minor: number): void
    setUseEs(useEs: number): void
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    beginFrame(region: cairo.Region): void
    endFrame(): void
    getFrameRegion(): cairo.Region | null
    isInFrame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::allowed-apis", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::api", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11GLContext_ConstructProps)
    _init (config?: X11GLContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}
class X11Monitor {
    /* Properties of Gdk-4.0.Gdk.Monitor */
    readonly connector: string
    readonly geometry: Gdk.Rectangle
    readonly heightMm: number
    readonly manufacturer: string
    readonly model: string
    readonly refreshRate: number
    readonly scaleFactor: number
    readonly subpixelLayout: Gdk.SubpixelLayout
    readonly valid: boolean
    readonly widthMm: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11-4.0.GdkX11.X11Monitor */
    getOutput(): xlib.XID
    getWorkarea(): /* workarea */ Gdk.Rectangle
    /* Methods of Gdk-4.0.Gdk.Monitor */
    getConnector(): string | null
    getDisplay(): Gdk.Display
    getGeometry(): /* geometry */ Gdk.Rectangle
    getHeightMm(): number
    getManufacturer(): string | null
    getModel(): string | null
    getRefreshRate(): number
    getScaleFactor(): number
    getSubpixelLayout(): Gdk.SubpixelLayout
    getWidthMm(): number
    isValid(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-4.0.Gdk.Monitor */
    connect(sigName: "invalidate", callback: (() => void)): number
    on(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connector", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::geometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manufacturer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpixel-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: X11Monitor_ConstructProps)
    _init (config?: X11Monitor_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Screen_ConstructProps extends GObject.Object_ConstructProps {
}
class X11Screen {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11-4.0.GdkX11.X11Screen */
    getCurrentDesktop(): number
    getMonitorOutput(monitorNum: number): xlib.XID
    getNumberOfDesktops(): number
    getScreenNumber(): number
    getWindowManagerName(): string
    getXscreen(): xlib.Screen
    supportsNetWmHint(propertyName: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GdkX11-4.0.GdkX11.X11Screen */
    connect(sigName: "window-manager-changed", callback: (() => void)): number
    on(sigName: "window-manager-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-manager-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-manager-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "window-manager-changed"): void
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
    constructor (config?: X11Screen_ConstructProps)
    _init (config?: X11Screen_ConstructProps): void
    static $gtype: GObject.Type
}
interface X11Surface_ConstructProps extends Gdk.Surface_ConstructProps {
}
class X11Surface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    cursor: Gdk.Cursor
    readonly height: number
    readonly mapped: boolean
    readonly scaleFactor: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GdkX11-4.0.GdkX11.X11Surface */
    getDesktop(): number
    getGroup(): Gdk.Surface | null
    getXid(): xlib.Window
    moveToCurrentDesktop(): void
    moveToDesktop(desktop: number): void
    setFrameSyncEnabled(frameSyncEnabled: boolean): void
    setGroup(leader: Gdk.Surface): void
    setSkipPagerHint(skipsPager: boolean): void
    setSkipTaskbarHint(skipsTaskbar: boolean): void
    setThemeVariant(variant: string): void
    setUrgencyHint(urgent: boolean): void
    setUserTime(timestamp: number): void
    setUtf8Property(name: string, value?: string | null): void
    /* Methods of Gdk-4.0.Gdk.Surface */
    beep(): void
    createCairoContext(): Gdk.CairoContext
    createGlContext(): Gdk.GLContext
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    createVulkanContext(): Gdk.VulkanContext
    destroy(): void
    getCursor(): Gdk.Cursor | null
    getDeviceCursor(device: Gdk.Device): Gdk.Cursor | null
    getDevicePosition(device: Gdk.Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ Gdk.ModifierType | null ]
    getDisplay(): Gdk.Display
    getFrameClock(): Gdk.FrameClock
    getHeight(): number
    getMapped(): boolean
    getScaleFactor(): number
    getWidth(): number
    hide(): void
    isDestroyed(): boolean
    queueRender(): void
    requestLayout(): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setDeviceCursor(device: Gdk.Device, cursor: Gdk.Cursor): void
    setInputRegion(region: cairo.Region): void
    setOpaqueRegion(region?: cairo.Region | null): void
    translateCoordinates(to: Gdk.Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    connect(sigName: "enter-monitor", callback: ((monitor: Gdk.Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "layout", callback: ((width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    connect(sigName: "leave-monitor", callback: ((monitor: Gdk.Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Gdk.Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Gdk.Monitor): void
    connect(sigName: "render", callback: ((region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
    emit(sigName: "render", region: cairo.Region): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: X11Surface_ConstructProps)
    _init (config?: X11Surface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static lookupForDisplay(display: X11Display, window: xlib.Window): X11Surface
    static $gtype: GObject.Type
}
abstract class X11AppLaunchContextClass {
    static name: string
}
abstract class X11DeviceManagerXI2Class {
    static name: string
}
abstract class X11DeviceXI2Class {
    static name: string
}
abstract class X11DisplayClass {
    static name: string
}
abstract class X11DragClass {
    static name: string
}
abstract class X11GLContextClass {
    static name: string
}
abstract class X11MonitorClass {
    static name: string
}
abstract class X11ScreenClass {
    static name: string
}
abstract class X11SurfaceClass {
    static name: string
}
}
export default GdkX11;