/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GVnc-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GVnc {

enum AudioFormatType {
    U8,
    S8,
    U16,
    S16,
    U32,
    S32,
}
enum ConnectionAuth {
    INVALID,
    NONE,
    VNC,
    RA2,
    RA2NE,
    TIGHT,
    ULTRA,
    TLS,
    VENCRYPT,
    SASL,
    ARD,
    MSLOGONII,
    MSLOGON,
}
enum ConnectionAuthVencrypt {
    PLAIN,
    TLSNONE,
    TLSVNC,
    TLSPLAIN,
    X509NONE,
    X509VNC,
    X509PLAIN,
    X509SASL,
    TLSSASL,
}
enum ConnectionCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
enum ConnectionEncoding {
    RAW,
    COPY_RECT,
    RRE,
    CORRE,
    HEXTILE,
    TIGHT,
    ZRLE,
    TIGHT_JPEG0,
    TIGHT_JPEG1,
    TIGHT_JPEG2,
    TIGHT_JPEG3,
    TIGHT_JPEG4,
    TIGHT_JPEG5,
    TIGHT_JPEG6,
    TIGHT_JPEG7,
    TIGHT_JPEG8,
    TIGHT_JPEG9,
    DESKTOP_RESIZE,
    LAST_RECT,
    WMVI,
    CURSOR_POS,
    RICH_CURSOR,
    XCURSOR,
    POINTER_CHANGE,
    EXT_KEY_EVENT,
    AUDIO,
    LED_STATE,
    DESKTOP_NAME,
    EXTENDED_DESKTOP_RESIZE,
    XVP,
    ALPHA_CURSOR,
}
enum ConnectionPowerAction {
    SHUTDOWN,
    REBOOT,
    RESET,
}
enum ConnectionResizeStatus {
    UNSUPPORTED,
    OK,
    ADMIN_PROHIBITED,
    OUT_OF_RESOURCES,
    INVALID_LAOUT,
    FORWARDED,
}
const LEDSTATE_CAPS_LOCK: number
const LEDSTATE_NUM_LOCK: number
const LEDSTATE_SCROLL_LOCK: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const PADDING: number
const PADDING_LARGE: number
function utilCheckVersion(major: number, minor: number, micro: number): boolean
function utilGetDebug(): boolean
function utilGetVersion(): number
function utilGetVersionString(): string
function utilSetDebug(enabled: boolean): void
class Audio {
    /* Methods of GVnc-1.0.GVnc.Audio */
    playbackData(sample: AudioSample): void
    playbackStart(format: AudioFormat): void
    playbackStop(): void
    static name: string
}
class Framebuffer {
    /* Methods of GVnc-1.0.GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    getBuffer(): Uint8Array
    getHeight(): number
    getLocalFormat(): PixelFormat
    getRemoteFormat(): PixelFormat
    getRowstride(): number
    getWidth(): number
    perfectFormatMatch(): boolean
    rgb24Blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    setColorMap(map: ColorMap): void
    setPixelAt(src: Uint8Array, x: number, y: number): void
    static name: string
}
interface BaseAudio_ConstructProps extends GObject.Object_ConstructProps {
}
class BaseAudio {
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
    /* Methods of GVnc-1.0.GVnc.Audio */
    playbackData(sample: AudioSample): void
    playbackStart(format: AudioFormat): void
    playbackStop(): void
    /* Signals of GVnc-1.0.GVnc.BaseAudio */
    connect(sigName: "vnc-audio-playback-data", callback: ((object: AudioSample) => void)): number
    on(sigName: "vnc-audio-playback-data", callback: (object: AudioSample) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-data", callback: (object: AudioSample) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-data", callback: (object: AudioSample) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-data", object: AudioSample): void
    connect(sigName: "vnc-audio-playback-start", callback: ((object: AudioFormat) => void)): number
    on(sigName: "vnc-audio-playback-start", callback: (object: AudioFormat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-start", callback: (object: AudioFormat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-start", callback: (object: AudioFormat) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-start", object: AudioFormat): void
    connect(sigName: "vnc-audio-playback-stop", callback: (() => void)): number
    on(sigName: "vnc-audio-playback-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-audio-playback-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-audio-playback-stop", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-audio-playback-stop"): void
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
    constructor (config?: BaseAudio_ConstructProps)
    _init (config?: BaseAudio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BaseAudio
    static $gtype: GObject.Type
}
interface BaseFramebuffer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GVnc-1.0.GVnc.BaseFramebuffer */
    buffer?: object
    colorMap?: ColorMap
    height?: number
    localFormat?: PixelFormat
    remoteFormat?: PixelFormat
    rowstride?: number
    width?: number
}
class BaseFramebuffer {
    /* Properties of GVnc-1.0.GVnc.BaseFramebuffer */
    colorMap: ColorMap
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
    /* Methods of GVnc-1.0.GVnc.Framebuffer */
    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    getBuffer(): Uint8Array
    getHeight(): number
    getLocalFormat(): PixelFormat
    getRemoteFormat(): PixelFormat
    getRowstride(): number
    getWidth(): number
    perfectFormatMatch(): boolean
    rgb24Blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    setColorMap(map: ColorMap): void
    setPixelAt(src: Uint8Array, x: number, y: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::color-map", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-map", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseFramebuffer_ConstructProps)
    _init (config?: BaseFramebuffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Uint8Array, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat): BaseFramebuffer
    static $gtype: GObject.Type
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GVnc-1.0.GVnc.Connection */
    framebuffer?: Framebuffer
}
class Connection {
    /* Properties of GVnc-1.0.GVnc.Connection */
    framebuffer: Framebuffer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GVnc-1.0.GVnc.Connection */
    audioDisable(): boolean
    audioEnable(): boolean
    clientCutText(data: object | null, length: number): boolean
    framebufferUpdateRequest(incremental: boolean, x: number, y: number, width: number, height: number): boolean
    getAbsPointer(): boolean
    getAudioFormat(): AudioFormat
    getCursor(): Cursor
    getExtKeyEvent(): boolean
    getHeight(): number
    getLedstate(): number
    getName(): string
    getPixelFormat(): PixelFormat
    getPowerControl(): boolean
    getShared(): boolean
    getWidth(): number
    hasError(): boolean
    isInitialized(): boolean
    isOpen(): boolean
    keyEvent(downFlag: boolean, key: number, scancode: number): boolean
    openAddr(addr: Gio.SocketAddress, hostname?: string | null): boolean
    openFd(fd: number): boolean
    openFdWithHostname(fd: number, hostname?: string | null): boolean
    openHost(host: string, port: string): boolean
    pointerEvent(buttonMask: number, x: number, y: number): boolean
    powerControl(action: ConnectionPowerAction): boolean
    setAudio(audio: Audio): boolean
    setAudioFormat(fmt: AudioFormat): boolean
    setAuthSubtype(type: number): boolean
    setAuthType(type: number): boolean
    setCredential(type: number, data: string): boolean
    setEncodings(encoding: number[]): boolean
    setFramebuffer(fb: Framebuffer): boolean
    setPixelFormat(fmt: PixelFormat): boolean
    setShared(shared: boolean): boolean
    setSize(width: number, height: number): ConnectionResizeStatus
    shutdown(): void
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GVnc-1.0.GVnc.Connection */
    connect(sigName: "vnc-auth-choose-subtype", callback: ((object: number, p0: GObject.ValueArray) => void)): number
    on(sigName: "vnc-auth-choose-subtype", callback: (object: number, p0: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-choose-subtype", callback: (object: number, p0: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-choose-subtype", callback: (object: number, p0: GObject.ValueArray) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-choose-subtype", object: number, p0: GObject.ValueArray): void
    connect(sigName: "vnc-auth-choose-type", callback: ((object: GObject.ValueArray) => void)): number
    on(sigName: "vnc-auth-choose-type", callback: (object: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-choose-type", callback: (object: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-choose-type", callback: (object: GObject.ValueArray) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-choose-type", object: GObject.ValueArray): void
    connect(sigName: "vnc-auth-credential", callback: ((object: GObject.ValueArray) => void)): number
    on(sigName: "vnc-auth-credential", callback: (object: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-credential", callback: (object: GObject.ValueArray) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-credential", callback: (object: GObject.ValueArray) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-credential", object: GObject.ValueArray): void
    connect(sigName: "vnc-auth-failure", callback: ((object: string) => void)): number
    on(sigName: "vnc-auth-failure", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-failure", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-failure", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-failure", object: string): void
    connect(sigName: "vnc-auth-unsupported", callback: ((object: number) => void)): number
    on(sigName: "vnc-auth-unsupported", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-auth-unsupported", callback: (object: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-auth-unsupported", callback: (object: number) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-auth-unsupported", object: number): void
    connect(sigName: "vnc-bell", callback: (() => void)): number
    on(sigName: "vnc-bell", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-bell", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-bell", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-bell"): void
    connect(sigName: "vnc-connected", callback: (() => void)): number
    on(sigName: "vnc-connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-connected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-connected"): void
    connect(sigName: "vnc-cursor-changed", callback: ((cursor?: Cursor | null) => void)): number
    on(sigName: "vnc-cursor-changed", callback: (cursor?: Cursor | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-cursor-changed", callback: (cursor?: Cursor | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-cursor-changed", callback: (cursor?: Cursor | null) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-cursor-changed", cursor?: Cursor | null): void
    connect(sigName: "vnc-desktop-rename", callback: ((object: string) => void)): number
    on(sigName: "vnc-desktop-rename", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-rename", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-rename", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-desktop-rename", object: string): void
    connect(sigName: "vnc-desktop-resize", callback: ((object: number, p0: number) => void)): number
    on(sigName: "vnc-desktop-resize", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-desktop-resize", callback: (object: number, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-desktop-resize", callback: (object: number, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-desktop-resize", object: number, p0: number): void
    connect(sigName: "vnc-disconnected", callback: (() => void)): number
    on(sigName: "vnc-disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-disconnected"): void
    connect(sigName: "vnc-error", callback: ((object: string) => void)): number
    on(sigName: "vnc-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-error", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-error", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-error", object: string): void
    connect(sigName: "vnc-framebuffer-update", callback: ((object: number, p0: number, p1: number, p2: number) => void)): number
    on(sigName: "vnc-framebuffer-update", callback: (object: number, p0: number, p1: number, p2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-framebuffer-update", callback: (object: number, p0: number, p1: number, p2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-framebuffer-update", callback: (object: number, p0: number, p1: number, p2: number) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-framebuffer-update", object: number, p0: number, p1: number, p2: number): void
    connect(sigName: "vnc-initialized", callback: (() => void)): number
    on(sigName: "vnc-initialized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-initialized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-initialized", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-initialized"): void
    connect(sigName: "vnc-led-state", callback: (() => void)): number
    on(sigName: "vnc-led-state", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-led-state", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-led-state", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-led-state"): void
    connect(sigName: "vnc-pixel-format-changed", callback: ((object: PixelFormat) => void)): number
    on(sigName: "vnc-pixel-format-changed", callback: (object: PixelFormat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-pixel-format-changed", callback: (object: PixelFormat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-pixel-format-changed", callback: (object: PixelFormat) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-pixel-format-changed", object: PixelFormat): void
    connect(sigName: "vnc-pointer-mode-changed", callback: ((object: boolean) => void)): number
    on(sigName: "vnc-pointer-mode-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-pointer-mode-changed", callback: (object: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-pointer-mode-changed", callback: (object: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-pointer-mode-changed", object: boolean): void
    connect(sigName: "vnc-power-control-failed", callback: (() => void)): number
    on(sigName: "vnc-power-control-failed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-failed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-failed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-power-control-failed"): void
    connect(sigName: "vnc-power-control-initialized", callback: (() => void)): number
    on(sigName: "vnc-power-control-initialized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-power-control-initialized", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-power-control-initialized", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "vnc-power-control-initialized"): void
    connect(sigName: "vnc-server-cut-text", callback: ((object: string) => void)): number
    on(sigName: "vnc-server-cut-text", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vnc-server-cut-text", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vnc-server-cut-text", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "vnc-server-cut-text", object: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::framebuffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::framebuffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::framebuffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static $gtype: GObject.Type
}
interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GVnc-1.0.GVnc.Cursor */
    data?: object
    height?: number
    hotx?: number
    hoty?: number
    width?: number
}
class Cursor {
    /* Properties of GVnc-1.0.GVnc.Cursor */
    data: object
    height: number
    hotx: number
    hoty: number
    width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GVnc-1.0.GVnc.Cursor */
    getData(): Uint8Array
    getHeight(): number
    getHotx(): number
    getHoty(): number
    getWidth(): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
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
    connect(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hotx", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hotx", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hotx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hoty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hoty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hoty", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array, hotx: number, hoty: number, width: number, height: number): Cursor
    static $gtype: GObject.Type
}
class AudioFormat {
    /* Fields of GVnc-1.0.GVnc.AudioFormat */
    readonly format: number
    readonly nchannels: number
    readonly frequency: number
    /* Methods of GVnc-1.0.GVnc.AudioFormat */
    copy(): AudioFormat
    free(): void
    static name: string
    static new(): AudioFormat
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AudioFormat
}
abstract class AudioInterface {
    /* Fields of GVnc-1.0.GVnc.AudioInterface */
    readonly parent: GObject.TypeInterface
    readonly playbackStart: (audio: Audio, format: AudioFormat) => boolean
    readonly playbackStop: (audio: Audio) => boolean
    readonly playbackData: (audio: Audio, sample: AudioSample) => boolean
    static name: string
}
class AudioSample {
    /* Fields of GVnc-1.0.GVnc.AudioSample */
    readonly data: number
    readonly length: number
    readonly capacity: number
    /* Methods of GVnc-1.0.GVnc.AudioSample */
    copy(): AudioSample
    free(): void
    static name: string
    static new(capacity: number): AudioSample
    constructor(capacity: number)
    /* Static methods and pseudo-constructors */
    static new(capacity: number): AudioSample
}
abstract class BaseAudioClass {
    /* Fields of GVnc-1.0.GVnc.BaseAudioClass */
    readonly parentClass: GObject.ObjectClass
    readonly playbackStart: (audio: BaseAudio, format: AudioFormat) => boolean
    readonly playbackStop: (audio: BaseAudio) => boolean
    readonly playbackData: (audio: BaseAudio, sample: AudioSample) => boolean
    static name: string
}
class BaseAudioPrivate {
    static name: string
}
abstract class BaseFramebufferClass {
    /* Fields of GVnc-1.0.GVnc.BaseFramebufferClass */
    readonly parentClass: GObject.ObjectClass
    readonly vncReserved: object[]
    static name: string
}
class BaseFramebufferPrivate {
    static name: string
}
class ColorMap {
    /* Fields of GVnc-1.0.GVnc.ColorMap */
    readonly offset: number
    readonly size: number
    readonly colors: ColorMapEntry
    /* Methods of GVnc-1.0.GVnc.ColorMap */
    copy(): ColorMap
    free(): void
    lookup(idx: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    set(idx: number, red: number, green: number, blue: number): boolean
    static name: string
    static new(offset: number, size: number): ColorMap
    constructor(offset: number, size: number)
    /* Static methods and pseudo-constructors */
    static new(offset: number, size: number): ColorMap
}
class ColorMapEntry {
    /* Fields of GVnc-1.0.GVnc.ColorMapEntry */
    readonly red: number
    readonly green: number
    readonly blue: number
    static name: string
}
abstract class ConnectionClass {
    /* Fields of GVnc-1.0.GVnc.ConnectionClass */
    readonly parentClass: GObject.ObjectClass
    readonly vncCursorChanged: (conn: Connection, cursor: Cursor) => void
    readonly vncPointerModeChanged: (conn: Connection, absPointer: boolean) => void
    readonly vncBell: (conn: Connection) => void
    readonly vncServerCutText: (conn: Connection, text: GLib.String) => void
    readonly vncFramebufferUpdate: (conn: Connection, x: number, y: number, width: number, height: number) => void
    readonly vncDesktopResize: (conn: Connection, width: number, height: number) => void
    readonly vncPixelFormatChanged: (conn: Connection, format: PixelFormat) => void
    readonly vncAuthFailure: (conn: Connection, reason: string) => void
    readonly vncAuthUnsupported: (conn: Connection, authType: number) => void
    readonly vncAuthCredential: (conn: Connection, creds: GObject.ValueArray) => void
    readonly vncAuthChooseType: (conn: Connection, types: GObject.ValueArray) => void
    readonly vncAuthChooseSubtype: (conn: Connection, type: number, subtypes: GObject.ValueArray) => void
    readonly vncConnected: (conn: Connection) => void
    readonly vncInitialized: (conn: Connection) => void
    readonly vncDisconnected: (conn: Connection) => void
    readonly vncLedState: (conn: Connection) => void
    readonly vncError: (conn: Connection, message: string) => void
    readonly vncPowerControlInitialized: (conn: Connection) => void
    readonly vncPowerControlFailed: (conn: Connection) => void
    readonly vncDesktopRename: (conn: Connection, name: string) => void
    readonly vncReserved: object[]
    static name: string
}
class ConnectionPrivate {
    static name: string
}
abstract class CursorClass {
    /* Fields of GVnc-1.0.GVnc.CursorClass */
    readonly parentClass: GObject.ObjectClass
    readonly vncReserved: object[]
    static name: string
}
class CursorPrivate {
    static name: string
}
abstract class FramebufferInterface {
    /* Fields of GVnc-1.0.GVnc.FramebufferInterface */
    readonly parent: GObject.TypeInterface
    readonly getWidth: (fb: Framebuffer) => number
    readonly getHeight: (fb: Framebuffer) => number
    readonly getRowstride: (fb: Framebuffer) => number
    readonly getBuffer: (fb: Framebuffer) => number
    readonly getLocalFormat: (fb: Framebuffer) => PixelFormat
    readonly getRemoteFormat: (fb: Framebuffer) => PixelFormat
    readonly perfectFormatMatch: (fb: Framebuffer) => boolean
    readonly setPixelAt: (fb: Framebuffer, src: Uint8Array, x: number, y: number) => void
    readonly fill: (fb: Framebuffer, src: Uint8Array, x: number, y: number, width: number, height: number) => void
    readonly copyrect: (fb: Framebuffer, srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number) => void
    readonly blt: (fb: Framebuffer, src: number, rowstride: number, x: number, y: number, width: number, height: number) => void
    readonly rgb24Blt: (fb: Framebuffer, src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number) => void
    readonly setColorMap: (fb: Framebuffer, map: ColorMap) => void
    static name: string
}
class PixelFormat {
    /* Fields of GVnc-1.0.GVnc.PixelFormat */
    readonly bitsPerPixel: number
    readonly depth: number
    readonly byteOrder: number
    readonly trueColorFlag: number
    readonly redMax: number
    readonly greenMax: number
    readonly blueMax: number
    readonly redShift: number
    readonly greenShift: number
    readonly blueShift: number
    /* Methods of GVnc-1.0.GVnc.PixelFormat */
    copy(): PixelFormat
    free(): void
    match(other: PixelFormat): boolean
    static name: string
    static new(): PixelFormat
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PixelFormat
}
}
export default GVnc;