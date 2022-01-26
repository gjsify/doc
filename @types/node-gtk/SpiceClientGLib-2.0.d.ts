/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SpiceClientGLib-2.0
 */

import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type Gio from './Gio-2.0';

export namespace SpiceClientGLib {

enum ChannelEvent {
    NONE,
    OPENED,
    SWITCHING,
    CLOSED,
    ERROR_CONNECT,
    ERROR_TLS,
    ERROR_LINK,
    ERROR_AUTH,
    ERROR_IO,
}
enum ClientError {
    FAILED,
    USB_DEVICE_REJECTED,
    USB_DEVICE_LOST,
    AUTH_NEEDS_PASSWORD,
    AUTH_NEEDS_USERNAME,
    AUTH_NEEDS_PASSWORD_AND_USERNAME,
    USB_SERVICE,
}
enum QmpPortVmAction {
    QUIT,
    RESET,
    POWER_DOWN,
    PAUSE,
    CONTINUE,
    LAST,
}
enum SessionMigration {
    NONE,
    SWITCHING,
    MIGRATING,
    CONNECTING,
}
enum InputsLock {
    SCROLL_LOCK,
    NUM_LOCK,
    CAPS_LOCK,
}
enum SessionVerify {
    PUBKEY,
    HOSTNAME,
    SUBJECT,
}
const GTK_MAJOR_VERSION: number
const GTK_MICRO_VERSION: number
const GTK_MINOR_VERSION: number
function clientErrorQuark(): GLib.Quark
function displayChangePreferredCompression(channel: Channel, compression: number): void
function displayChangePreferredVideoCodecType(channel: Channel, codecType: number): void
function displayGetGlScanout(channel: DisplayChannel): GlScanout
function displayGetPrimary(channel: Channel, surfaceId: number, primary: DisplayPrimary): boolean
function displayGlDrawDone(channel: DisplayChannel): void
function getOptionGroup(): GLib.OptionGroup
function inputsButtonPress(channel: InputsChannel, button: number, buttonState: number): void
function inputsButtonRelease(channel: InputsChannel, button: number, buttonState: number): void
function inputsKeyPress(channel: InputsChannel, scancode: number): void
function inputsKeyPressAndRelease(channel: InputsChannel, scancode: number): void
function inputsKeyRelease(channel: InputsChannel, scancode: number): void
function inputsMotion(channel: InputsChannel, dx: number, dy: number, buttonState: number): void
function inputsPosition(channel: InputsChannel, x: number, y: number, display: number, buttonState: number): void
function inputsSetKeyLocks(channel: InputsChannel, locks: number): void
function mainAgentTestCapability(channel: MainChannel, cap: number): boolean
function mainClipboardGrab(channel: MainChannel, types: number, ntypes: number): void
function mainClipboardNotify(channel: MainChannel, type: number, data: number, size: number): void
function mainClipboardRelease(channel: MainChannel): void
function mainClipboardRequest(channel: MainChannel, type: number): void
function mainClipboardSelectionGrab(channel: MainChannel, selection: number, types: number, ntypes: number): void
function mainClipboardSelectionNotify(channel: MainChannel, selection: number, type: number, data: number, size: number): void
function mainClipboardSelectionRelease(channel: MainChannel, selection: number): void
function mainClipboardSelectionRequest(channel: MainChannel, selection: number, type: number): void
function mainFileCopyAsync(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
function mainFileCopyFinish(channel: MainChannel, result: Gio.AsyncResult): boolean
function mainRequestMouseMode(channel: MainChannel, mode: number): void
function mainSendMonitorConfig(channel: MainChannel): boolean
function mainSetDisplay(channel: MainChannel, id: number, x: number, y: number, width: number, height: number): void
function mainSetDisplayEnabled(channel: MainChannel, id: number, enabled: boolean): void
function mainUpdateDisplay(channel: MainChannel, id: number, x: number, y: number, width: number, height: number, update: boolean): void
function mainUpdateDisplayEnabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void
function portEvent(port: PortChannel, event: number): void
function portWriteAsync(port: PortChannel, buffer: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function portWriteFinish(port: PortChannel, result: Gio.AsyncResult): number
function recordSendData(channel: RecordChannel, data: object | null, bytes: number, time: number): void
function setSessionOption(session: Session): void
function utilGetDebug(): boolean
function utilGetVersionString(): string
function utilSetDebug(enabled: boolean): void
function uuidToString(uuid: number): string
interface msg_handler {
    (channel: Channel, in_: MsgIn): void
}
interface Audio_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio */
    mainContext?: GLib.MainContext
    session?: Session
}
class Audio {
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
    constructor (config?: Audio_ConstructProps)
    _init (config?: Audio_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(session: Session, context?: GLib.MainContext | null, name?: string | null): Audio
    static get(session: Session, context?: GLib.MainContext | null): Audio
    static $gtype: GObject.Type
}
interface Channel_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    channelId?: number
    channelType?: number
    spiceSession?: Session
}
class Channel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(s: Session, type: number, id: number): Channel
    static stringToType(str: string): number
    static typeToString(type: number): string
    static $gtype: GObject.Type
}
interface CursorChannel_ConstructProps extends Channel_ConstructProps {
}
class CursorChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel */
    readonly cursor: CursorShape
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel */
    connect(sigName: "cursor-hide", callback: (() => void)): number
    on(sigName: "cursor-hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-hide"): void
    connect(sigName: "cursor-move", callback: ((x: number, y: number) => void)): number
    on(sigName: "cursor-move", callback: (x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-move", callback: (x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-move", callback: (x: number, y: number) => void): NodeJS.EventEmitter
    emit(sigName: "cursor-move", x: number, y: number): void
    connect(sigName: "cursor-reset", callback: (() => void)): number
    on(sigName: "cursor-reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-reset"): void
    connect(sigName: "cursor-set", callback: ((width: number, height: number, hotX: number, hotY: number, rgba?: object | null) => void)): number
    on(sigName: "cursor-set", callback: (width: number, height: number, hotX: number, hotY: number, rgba?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-set", callback: (width: number, height: number, hotX: number, hotY: number, rgba?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-set", callback: (width: number, height: number, hotX: number, hotY: number, rgba?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "cursor-set", width: number, height: number, hotX: number, hotY: number, rgba?: object | null): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
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
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CursorChannel_ConstructProps)
    _init (config?: CursorChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface DisplayChannel_ConstructProps extends Channel_ConstructProps {
}
class DisplayChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel */
    readonly glScanout: GlScanout
    readonly height: number
    readonly monitors: object[]
    readonly monitorsMax: number
    readonly width: number
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel */
    getGlScanout(): GlScanout
    glDrawDone(): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel */
    connect(sigName: "display-invalidate", callback: ((x: number, y: number, width: number, height: number) => void)): number
    on(sigName: "display-invalidate", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-invalidate", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-invalidate", callback: (x: number, y: number, width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "display-invalidate", x: number, y: number, width: number, height: number): void
    connect(sigName: "display-mark", callback: ((mark: number) => void)): number
    on(sigName: "display-mark", callback: (mark: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-mark", callback: (mark: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-mark", callback: (mark: number) => void): NodeJS.EventEmitter
    emit(sigName: "display-mark", mark: number): void
    connect(sigName: "display-primary-create", callback: ((format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null) => void)): number
    on(sigName: "display-primary-create", callback: (format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-primary-create", callback: (format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-primary-create", callback: (format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "display-primary-create", format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null): void
    connect(sigName: "display-primary-destroy", callback: (() => void)): number
    on(sigName: "display-primary-destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-primary-destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-primary-destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "display-primary-destroy"): void
    connect(sigName: "gl-draw", callback: ((x: number, y: number, width: number, height: number) => void)): number
    on(sigName: "gl-draw", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gl-draw", callback: (x: number, y: number, width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gl-draw", callback: (x: number, y: number, width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "gl-draw", x: number, y: number, width: number, height: number): void
    connect(sigName: "gst-video-overlay", callback: ((pipeline: Gst.Pipeline) => boolean)): number
    on(sigName: "gst-video-overlay", callback: (pipeline: Gst.Pipeline) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gst-video-overlay", callback: (pipeline: Gst.Pipeline) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gst-video-overlay", callback: (pipeline: Gst.Pipeline) => void): NodeJS.EventEmitter
    emit(sigName: "gst-video-overlay", pipeline: Gst.Pipeline): void
    connect(sigName: "streaming-mode", callback: ((streamingMode: boolean) => object | null)): number
    on(sigName: "streaming-mode", callback: (streamingMode: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "streaming-mode", callback: (streamingMode: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "streaming-mode", callback: (streamingMode: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "streaming-mode", streamingMode: boolean): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gl-scanout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gl-scanout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monitors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monitors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monitors-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitors-max", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monitors-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monitors-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monitors-max", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DisplayChannel_ConstructProps)
    _init (config?: DisplayChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static changePreferredCompression(channel: Channel, compression: number): void
    static changePreferredVideoCodecType(channel: Channel, codecType: number): void
    static getPrimary(channel: Channel, surfaceId: number, primary: DisplayPrimary): boolean
    static $gtype: GObject.Type
}
interface FileTransferTask_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask */
    cancellable?: Gio.Cancellable
    channel?: MainChannel
    file?: Gio.File
    id?: number
}
class FileTransferTask {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask */
    readonly progress: number
    readonly totalBytes: number
    readonly transferredBytes: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask */
    cancel(): void
    getFilename(): string
    getProgress(): number
    getTotalBytes(): number
    getTransferredBytes(): number
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask */
    connect(sigName: "finished", callback: ((object: GLib.Error) => void)): number
    on(sigName: "finished", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "finished", object: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transferred-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transferred-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transferred-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileTransferTask_ConstructProps)
    _init (config?: FileTransferTask_ConstructProps): void
    static $gtype: GObject.Type
}
interface InputsChannel_ConstructProps extends Channel_ConstructProps {
}
class InputsChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel */
    readonly keyModifiers: number
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel */
    buttonPress(button: number, buttonState: number): void
    buttonRelease(button: number, buttonState: number): void
    keyPress(scancode: number): void
    keyPressAndRelease(scancode: number): void
    keyRelease(scancode: number): void
    motion(dx: number, dy: number, buttonState: number): void
    position(x: number, y: number, display: number, buttonState: number): void
    setKeyLocks(locks: number): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel */
    connect(sigName: "inputs-modifiers", callback: (() => void)): number
    on(sigName: "inputs-modifiers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "inputs-modifiers", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "inputs-modifiers", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "inputs-modifiers"): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key-modifiers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-modifiers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputsChannel_ConstructProps)
    _init (config?: InputsChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface MainChannel_ConstructProps extends Channel_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel */
    colorDepth?: number
    disableAnimation?: boolean
    disableDisplayAlign?: boolean
    disableDisplayPosition?: boolean
    disableFontSmooth?: boolean
    disableWallpaper?: boolean
    maxClipboard?: number
}
class MainChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel */
    readonly agentCaps0: number
    readonly agentConnected: boolean
    colorDepth: number
    disableAnimation: boolean
    disableDisplayAlign: boolean
    disableDisplayPosition: boolean
    disableFontSmooth: boolean
    disableWallpaper: boolean
    maxClipboard: number
    readonly mouseMode: number
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel */
    agentTestCapability(cap: number): boolean
    clipboardSelectionGrab(selection: number, types: number, ntypes: number): void
    clipboardSelectionNotify(selection: number, type: number, data: number, size: number): void
    clipboardSelectionRelease(selection: number): void
    clipboardSelectionRequest(selection: number, type: number): void
    fileCopyAsync(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    fileCopyFinish(result: Gio.AsyncResult): boolean
    requestMouseMode(mode: number): void
    sendMonitorConfig(): boolean
    updateDisplay(id: number, x: number, y: number, width: number, height: number, update: boolean): void
    updateDisplayEnabled(id: number, enabled: boolean, update: boolean): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel */
    connect(sigName: "main-agent-update", callback: (() => void)): number
    on(sigName: "main-agent-update", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-agent-update", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-agent-update", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "main-agent-update"): void
    connect(sigName: "main-clipboard", callback: ((type: number, data: object | null, size: number) => void)): number
    on(sigName: "main-clipboard", callback: (type: number, data: object | null, size: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard", callback: (type: number, data: object | null, size: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard", callback: (type: number, data: object | null, size: number) => void): NodeJS.EventEmitter
    emit(sigName: "main-clipboard", type: number, data: object | null, size: number): void
    connect(sigName: "main-clipboard-grab", callback: ((types: object | null, ntypes: number) => boolean)): number
    on(sigName: "main-clipboard-grab", callback: (types: object | null, ntypes: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-grab", callback: (types: object | null, ntypes: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-grab", callback: (types: object | null, ntypes: number) => void): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-grab", types: object | null, ntypes: number): void
    connect(sigName: "main-clipboard-release", callback: (() => void)): number
    on(sigName: "main-clipboard-release", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-release", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-release", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-release"): void
    connect(sigName: "main-clipboard-request", callback: ((types: number) => boolean)): number
    on(sigName: "main-clipboard-request", callback: (types: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-request", callback: (types: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-request", callback: (types: number) => void): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-request", types: number): void
    connect(sigName: "main-clipboard-selection", callback: ((selection: number, type: number, data: object | null, size: number) => void)): number
    on(sigName: "main-clipboard-selection", callback: (selection: number, type: number, data: object | null, size: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection", callback: (selection: number, type: number, data: object | null, size: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection", callback: (selection: number, type: number, data: object | null, size: number) => void): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection", selection: number, type: number, data: object | null, size: number): void
    connect(sigName: "main-clipboard-selection-grab", callback: ((selection: number, types: object | null, ntypes: number) => boolean)): number
    on(sigName: "main-clipboard-selection-grab", callback: (selection: number, types: object | null, ntypes: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-grab", callback: (selection: number, types: object | null, ntypes: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-grab", callback: (selection: number, types: object | null, ntypes: number) => void): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-grab", selection: number, types: object | null, ntypes: number): void
    connect(sigName: "main-clipboard-selection-release", callback: ((selection: number) => void)): number
    on(sigName: "main-clipboard-selection-release", callback: (selection: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-release", callback: (selection: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-release", callback: (selection: number) => void): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-release", selection: number): void
    connect(sigName: "main-clipboard-selection-request", callback: ((selection: number, types: number) => boolean)): number
    on(sigName: "main-clipboard-selection-request", callback: (selection: number, types: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-clipboard-selection-request", callback: (selection: number, types: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-clipboard-selection-request", callback: (selection: number, types: number) => void): NodeJS.EventEmitter
    emit(sigName: "main-clipboard-selection-request", selection: number, types: number): void
    connect(sigName: "main-mouse-update", callback: (() => void)): number
    on(sigName: "main-mouse-update", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "main-mouse-update", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "main-mouse-update", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "main-mouse-update"): void
    connect(sigName: "migration-started", callback: ((session: GObject.Object) => void)): number
    on(sigName: "migration-started", callback: (session: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "migration-started", callback: (session: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "migration-started", callback: (session: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "migration-started", session: GObject.Object): void
    connect(sigName: "new-file-transfer", callback: ((task: GObject.Object) => void)): number
    on(sigName: "new-file-transfer", callback: (task: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-file-transfer", callback: (task: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-file-transfer", callback: (task: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "new-file-transfer", task: GObject.Object): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::agent-caps-0", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent-caps-0", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::agent-caps-0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::agent-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent-connected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::agent-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::agent-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::agent-connected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-animation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-animation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-animation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-display-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-display-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-display-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-display-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-display-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-display-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-font-smooth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-font-smooth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-font-smooth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-wallpaper", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-wallpaper", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-wallpaper", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-clipboard", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-clipboard", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mouse-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mouse-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MainChannel_ConstructProps)
    _init (config?: MainChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface PlaybackChannel_ConstructProps extends Channel_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    minLatency?: number
    mute?: boolean
    nchannels?: number
    volume?: object
}
class PlaybackChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    minLatency: number
    mute: boolean
    nchannels: number
    volume: object
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    setDelay(delayMs: number): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    connect(sigName: "playback-data", callback: ((data: object | null, dataSize: number) => void)): number
    on(sigName: "playback-data", callback: (data: object | null, dataSize: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-data", callback: (data: object | null, dataSize: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-data", callback: (data: object | null, dataSize: number) => void): NodeJS.EventEmitter
    emit(sigName: "playback-data", data: object | null, dataSize: number): void
    connect(sigName: "playback-get-delay", callback: (() => void)): number
    on(sigName: "playback-get-delay", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-get-delay", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-get-delay", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "playback-get-delay"): void
    connect(sigName: "playback-start", callback: ((format: number, channels: number, rate: number) => void)): number
    on(sigName: "playback-start", callback: (format: number, channels: number, rate: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-start", callback: (format: number, channels: number, rate: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-start", callback: (format: number, channels: number, rate: number) => void): NodeJS.EventEmitter
    emit(sigName: "playback-start", format: number, channels: number, rate: number): void
    connect(sigName: "playback-stop", callback: (() => void)): number
    on(sigName: "playback-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "playback-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "playback-stop", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "playback-stop"): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::min-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mute", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nchannels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nchannels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PlaybackChannel_ConstructProps)
    _init (config?: PlaybackChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface PortChannel_ConstructProps extends Channel_ConstructProps {
}
class PortChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    readonly portName: string
    readonly portOpened: boolean
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    event(event: number): void
    writeAsync(buffer: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeFinish(result: Gio.AsyncResult): number
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    connect(sigName: "port-data", callback: ((data: object | null, size: number) => void)): number
    on(sigName: "port-data", callback: (data: object | null, size: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "port-data", callback: (data: object | null, size: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "port-data", callback: (data: object | null, size: number) => void): NodeJS.EventEmitter
    emit(sigName: "port-data", data: object | null, size: number): void
    connect(sigName: "port-event", callback: ((event: number) => void)): number
    on(sigName: "port-event", callback: (event: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "port-event", callback: (event: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "port-event", callback: (event: number) => void): NodeJS.EventEmitter
    emit(sigName: "port-event", event: number): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::port-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port-opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PortChannel_ConstructProps)
    _init (config?: PortChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface QmpPort_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort */
    channel?: PortChannel
}
class QmpPort {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort */
    readonly ready: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort */
    queryStatusAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    queryStatusFinish(result: Gio.AsyncResult): QmpStatus
    vmActionAsync(action: QmpPortVmAction, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vmActionFinish(result: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort */
    connect(sigName: "event", callback: ((name: string, node?: object | null) => void)): number
    on(sigName: "event", callback: (name: string, node?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (name: string, node?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (name: string, node?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "event", name: string, node?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ready", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: QmpPort_ConstructProps)
    _init (config?: QmpPort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(channel: PortChannel): QmpPort
    static $gtype: GObject.Type
}
interface RecordChannel_ConstructProps extends Channel_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel */
    mute?: boolean
    nchannels?: number
    volume?: object
}
class RecordChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel */
    mute: boolean
    nchannels: number
    volume: object
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel */
    sendData(data: object | null, bytes: number, time: number): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel */
    connect(sigName: "record-start", callback: ((format: number, channels: number, rate: number) => void)): number
    on(sigName: "record-start", callback: (format: number, channels: number, rate: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-start", callback: (format: number, channels: number, rate: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-start", callback: (format: number, channels: number, rate: number) => void): NodeJS.EventEmitter
    emit(sigName: "record-start", format: number, channels: number, rate: number): void
    connect(sigName: "record-stop", callback: (() => void)): number
    on(sigName: "record-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-stop", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-stop", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "record-stop"): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mute", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nchannels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nchannels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nchannels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RecordChannel_ConstructProps)
    _init (config?: RecordChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    ca?: Uint8Array
    caFile?: string
    cacheSize?: number
    certSubject?: string
    ciphers?: string
    clientSockets?: boolean
    colorDepth?: number
    disableEffects?: string[]
    enableAudio?: boolean
    enableSmartcard?: boolean
    enableUsbredir?: boolean
    glScanout?: boolean
    glzWindowSize?: number
    host?: string
    inhibitKeyboardGrab?: boolean
    password?: string
    port?: string
    protocol?: number
    proxy?: string
    pubkey?: Uint8Array
    readOnly?: boolean
    secureChannels?: string[]
    shareDirRo?: boolean
    sharedDir?: string
    smartcardCertificates?: string[]
    smartcardDb?: string
    tlsPort?: string
    unixPath?: string
    uri?: string
    username?: string
    verify?: SessionVerify
}
class Session {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    ca: Uint8Array
    caFile: string
    cacheSize: number
    certSubject: string
    ciphers: string
    clientSockets: boolean
    colorDepth: number
    disableEffects: string[]
    enableAudio: boolean
    enableSmartcard: boolean
    enableUsbredir: boolean
    glScanout: boolean
    glzWindowSize: number
    host: string
    inhibitKeyboardGrab: boolean
    readonly migrationState: SessionMigration
    readonly name: string
    password: string
    port: string
    protocol: number
    proxy: string
    pubkey: Uint8Array
    readOnly: boolean
    secureChannels: string[]
    shareDirRo: boolean
    sharedDir: string
    smartcardCertificates: string[]
    smartcardDb: string
    tlsPort: string
    unixPath: string
    uri: string
    username: string
    readonly uuid: object
    verify: SessionVerify
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    connect(): boolean
    disconnect(): void
    getChannels(): Channel[]
    getProxyUri(): URI
    getReadOnly(): boolean
    hasChannelType(type: number): boolean
    isForMigration(): boolean
    openFd(fd: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    connect(sigName: "channel-destroy", callback: ((channel: Channel) => void)): number
    on(sigName: "channel-destroy", callback: (channel: Channel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-destroy", callback: (channel: Channel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-destroy", callback: (channel: Channel) => void): NodeJS.EventEmitter
    emit(sigName: "channel-destroy", channel: Channel): void
    connect(sigName: "channel-new", callback: ((channel: Channel) => void)): number
    on(sigName: "channel-new", callback: (channel: Channel) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-new", callback: (channel: Channel) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-new", callback: (channel: Channel) => void): NodeJS.EventEmitter
    emit(sigName: "channel-new", channel: Channel): void
    connect(sigName: "disconnected", callback: (() => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    connect(sigName: "mm-time-reset", callback: (() => void)): number
    on(sigName: "mm-time-reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mm-time-reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mm-time-reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "mm-time-reset"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ca", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ca", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ca", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ca", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cache-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cache-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cert-subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cert-subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cert-subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cert-subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cert-subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ciphers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ciphers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ciphers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ciphers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ciphers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::client-sockets", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-sockets", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::client-sockets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::client-sockets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::client-sockets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color-depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color-depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-effects", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-effects", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-effects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-effects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-effects", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-audio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-audio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-smartcard", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-smartcard", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-smartcard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-usbredir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-usbredir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-usbredir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gl-scanout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gl-scanout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gl-scanout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::glz-window-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::glz-window-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::glz-window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::glz-window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::glz-window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::inhibit-keyboard-grab", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inhibit-keyboard-grab", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::inhibit-keyboard-grab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::migration-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::migration-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::migration-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::migration-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::migration-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pubkey", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pubkey", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pubkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pubkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pubkey", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::secure-channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure-channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::secure-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::secure-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::secure-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::share-dir-ro", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::share-dir-ro", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::share-dir-ro", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shared-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-dir", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shared-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shared-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shared-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smartcard-certificates", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smartcard-certificates", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smartcard-certificates", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smartcard-db", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smartcard-db", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smartcard-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smartcard-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smartcard-db", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tls-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tls-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tls-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tls-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::unix-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unix-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::unix-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::unix-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::unix-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::verify", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::verify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::verify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::verify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::verify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Session_ConstructProps)
    _init (config?: Session_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Session
    static $gtype: GObject.Type
}
interface SmartcardChannel_ConstructProps extends Channel_ConstructProps {
}
class SmartcardChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SmartcardChannel_ConstructProps)
    _init (config?: SmartcardChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface SmartcardManager_ConstructProps extends GObject.Object_ConstructProps {
}
class SmartcardManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager */
    getReaders(): SmartcardReader[]
    insertCard(): boolean
    removeCard(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager */
    connect(sigName: "card-inserted", callback: ((vreader: any) => void)): number
    on(sigName: "card-inserted", callback: (vreader: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-inserted", callback: (vreader: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-inserted", callback: (vreader: any) => void): NodeJS.EventEmitter
    emit(sigName: "card-inserted", vreader: any): void
    connect(sigName: "card-removed", callback: ((vreader: any) => void)): number
    on(sigName: "card-removed", callback: (vreader: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "card-removed", callback: (vreader: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "card-removed", callback: (vreader: any) => void): NodeJS.EventEmitter
    emit(sigName: "card-removed", vreader: any): void
    connect(sigName: "reader-added", callback: ((vreader: any) => void)): number
    on(sigName: "reader-added", callback: (vreader: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reader-added", callback: (vreader: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reader-added", callback: (vreader: any) => void): NodeJS.EventEmitter
    emit(sigName: "reader-added", vreader: any): void
    connect(sigName: "reader-removed", callback: ((vreader: any) => void)): number
    on(sigName: "reader-removed", callback: (vreader: any) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reader-removed", callback: (vreader: any) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reader-removed", callback: (vreader: any) => void): NodeJS.EventEmitter
    emit(sigName: "reader-removed", vreader: any): void
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
    constructor (config?: SmartcardManager_ConstructProps)
    _init (config?: SmartcardManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(): SmartcardManager
    static $gtype: GObject.Type
}
interface URI_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.URI */
    hostname?: string
    password?: string
    port?: number
    scheme?: string
    user?: string
}
class URI {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.URI */
    hostname: string
    password: string
    port: number
    scheme: string
    user: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.URI */
    getHostname(): string
    getPassword(): string
    getPort(): number
    getScheme(): string
    getUser(): string
    setHostname(hostname: string): void
    setPassword(password: string): void
    setPort(port: number): void
    setScheme(scheme: string): void
    setUser(user: string): void
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
    connect(sigName: "notify::hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: URI_ConstructProps)
    _init (config?: URI_ConstructProps): void
    static $gtype: GObject.Type
}
interface UsbDeviceManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    autoConnect?: boolean
    autoConnectFilter?: string
    redirectOnConnect?: string
    session?: Session
}
class UsbDeviceManager {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    autoConnect: boolean
    autoConnectFilter: string
    readonly freeChannels: number
    redirectOnConnect: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    canRedirectDevice(device: UsbDevice): boolean
    connectDeviceAsync(device: UsbDevice, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connectDeviceFinish(res: Gio.AsyncResult): boolean
    disconnectDevice(device: UsbDevice): void
    disconnectDeviceAsync(device: UsbDevice, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnectDeviceFinish(res: Gio.AsyncResult): boolean
    getDevices(): UsbDevice[]
    getDevicesWithFilter(filter?: string | null): UsbDevice[]
    isDeviceConnected(device: UsbDevice): boolean
    isRedirecting(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    connect(sigName: "auto-connect-failed", callback: ((device: UsbDevice, error: GLib.Error) => void)): number
    on(sigName: "auto-connect-failed", callback: (device: UsbDevice, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "auto-connect-failed", callback: (device: UsbDevice, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "auto-connect-failed", callback: (device: UsbDevice, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "auto-connect-failed", device: UsbDevice, error: GLib.Error): void
    connect(sigName: "device-added", callback: ((device: UsbDevice) => void)): number
    on(sigName: "device-added", callback: (device: UsbDevice) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: UsbDevice) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: UsbDevice) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: UsbDevice): void
    connect(sigName: "device-error", callback: ((device: UsbDevice, error: GLib.Error) => void)): number
    on(sigName: "device-error", callback: (device: UsbDevice, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-error", callback: (device: UsbDevice, error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-error", callback: (device: UsbDevice, error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "device-error", device: UsbDevice, error: GLib.Error): void
    connect(sigName: "device-removed", callback: ((device: UsbDevice) => void)): number
    on(sigName: "device-removed", callback: (device: UsbDevice) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: UsbDevice) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: UsbDevice) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: UsbDevice): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-connect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-connect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-connect-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-connect-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-connect-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::free-channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::free-channels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::free-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::free-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::free-channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::redirect-on-connect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redirect-on-connect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::redirect-on-connect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UsbDeviceManager_ConstructProps)
    _init (config?: UsbDeviceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(session: Session): UsbDeviceManager
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface UsbredirChannel_ConstructProps extends Channel_ConstructProps {
}
class UsbredirChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: UsbredirChannel_ConstructProps)
    _init (config?: UsbredirChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebdavChannel_ConstructProps extends PortChannel_ConstructProps {
}
class WebdavChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    readonly portName: string
    readonly portOpened: boolean
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly totalReadBytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    readonly parent: Channel
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    event(event: number): void
    writeAsync(buffer: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    writeFinish(result: Gio.AsyncResult): number
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flushAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flushFinish(result: Gio.AsyncResult): boolean
    getError(): GLib.Error
    openFd(fd: number): boolean
    setCapability(cap: number): void
    testCapability(cap: number): boolean
    testCommonCapability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    connect(sigName: "port-data", callback: ((data: object | null, size: number) => void)): number
    on(sigName: "port-data", callback: (data: object | null, size: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "port-data", callback: (data: object | null, size: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "port-data", callback: (data: object | null, size: number) => void): NodeJS.EventEmitter
    emit(sigName: "port-data", data: object | null, size: number): void
    connect(sigName: "port-event", callback: ((event: number) => void)): number
    on(sigName: "port-event", callback: (event: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "port-event", callback: (event: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "port-event", callback: (event: number) => void): NodeJS.EventEmitter
    emit(sigName: "port-event", event: number): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: ((event: ChannelEvent) => void)): number
    on(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "channel-event", callback: (event: ChannelEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "channel-event", callback: (event: ChannelEvent) => void): NodeJS.EventEmitter
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: ((withTls: number) => void)): number
    on(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-fd", callback: (withTls: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-fd", callback: (withTls: number) => void): NodeJS.EventEmitter
    emit(sigName: "open-fd", withTls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::port-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port-opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-opened", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port-opened", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::socket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::total-read-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: WebdavChannel_ConstructProps)
    _init (config?: WebdavChannel_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AudioClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.AudioClass */
    readonly parentClass: GObject.ObjectClass
    readonly connectChannel: (audio: Audio, channel: Channel) => boolean
    readonly getPlaybackVolumeInfoAsync: (audio: Audio, cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback?: Gio.AsyncReadyCallback | null) => void
    readonly getPlaybackVolumeInfoFinish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
    readonly getRecordVolumeInfoAsync: (audio: Audio, cancellable: Gio.Cancellable | null, mainChannel: MainChannel, callback?: Gio.AsyncReadyCallback | null) => void
    readonly getRecordVolumeInfoFinish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
    static name: string
}
class AudioPrivate {
    static name: string
}
abstract class ChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.ChannelClass */
    readonly parentClass: GObject.ObjectClass
    readonly channelEvent: (channel: Channel, event: ChannelEvent) => void
    readonly openFd: (channel: Channel, withTls: number) => void
    readonly handleMsg: (channel: Channel, msg: MsgIn) => void
    readonly channelUp: (channel: Channel) => void
    readonly iterateWrite: (channel: Channel) => void
    readonly iterateRead: (channel: Channel) => void
    readonly channelReset: (channel: Channel, migrating: boolean) => void
    readonly channelSendMigrationHandshake: (channel: Channel) => void
    static name: string
}
class ChannelClassPrivate {
    static name: string
}
class ChannelPrivate {
    static name: string
}
abstract class CursorChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannelClass */
    readonly parentClass: ChannelClass
    readonly cursorSet: (channel: CursorChannel, width: number, height: number, hotX: number, hotY: number, rgba?: object | null) => void
    readonly cursorMove: (channel: CursorChannel, x: number, y: number) => void
    readonly cursorHide: (channel: CursorChannel) => void
    readonly cursorReset: (channel: CursorChannel) => void
    static name: string
}
class CursorChannelPrivate {
    static name: string
}
class CursorShape {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorShape */
    readonly width: number
    readonly height: number
    readonly hotSpotX: number
    readonly hotSpotY: number
    readonly data: object
    static name: string
}
abstract class DisplayChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannelClass */
    readonly parentClass: ChannelClass
    readonly displayPrimaryCreate: (channel: Channel, format: number, width: number, height: number, stride: number, shmid: number, data: object) => void
    readonly displayPrimaryDestroy: (channel: Channel) => void
    readonly displayInvalidate: (channel: Channel, x: number, y: number, w: number, h: number) => void
    readonly displayMark: (channel: Channel, mark: boolean) => void
    static name: string
}
class DisplayChannelPrivate {
    static name: string
}
class DisplayMonitorConfig {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayMonitorConfig */
    readonly id: number
    readonly surfaceId: number
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
class DisplayPrimary {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayPrimary */
    readonly format: object
    readonly width: number
    readonly height: number
    readonly stride: number
    readonly shmid: number
    readonly data: number
    readonly marked: boolean
    static name: string
}
abstract class FileTransferTaskClass {
    static name: string
}
class GlScanout {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.GlScanout */
    readonly fd: number
    readonly width: number
    readonly height: number
    readonly stride: number
    readonly format: number
    readonly y0top: boolean
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.GlScanout */
    free(): void
    static name: string
}
abstract class InputsChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannelClass */
    readonly parentClass: ChannelClass
    readonly inputsModifiers: (channel: Channel) => void
    static name: string
}
class InputsChannelPrivate {
    static name: string
}
abstract class MainChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.MainChannelClass */
    readonly parentClass: ChannelClass
    readonly mouseUpdate: (channel: Channel) => void
    readonly agentUpdate: (channel: Channel) => void
    static name: string
}
class MainChannelPrivate {
    static name: string
}
class MsgIn {
    static name: string
}
class MsgOut {
    static name: string
}
abstract class PlaybackChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannelClass */
    readonly parentClass: ChannelClass
    readonly playbackStart: (channel: PlaybackChannel, format: number, channels: number, freq: number) => void
    readonly playbackData: (channel: PlaybackChannel, data: object | null, size: number) => void
    readonly playbackStop: (channel: PlaybackChannel) => void
    static name: string
}
class PlaybackChannelPrivate {
    static name: string
}
abstract class PortChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.PortChannelClass */
    readonly parentClass: ChannelClass
    static name: string
}
class PortChannelPrivate {
    static name: string
}
abstract class QmpPortClass {
    static name: string
}
class QmpStatus {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.QmpStatus */
    readonly version: number
    readonly running: boolean
    readonly singlestep: boolean
    readonly status: string
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.QmpStatus */
    ref(): QmpStatus
    unref(): void
    static name: string
}
abstract class RecordChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannelClass */
    readonly parentClass: ChannelClass
    readonly recordStart: (channel: RecordChannel, format: number, channels: number, freq: number) => void
    readonly recordData: (channel: RecordChannel, data: object | null, size: number) => void
    readonly recordStop: (channel: RecordChannel) => void
    static name: string
}
class RecordChannelPrivate {
    static name: string
}
abstract class SessionClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.SessionClass */
    readonly parentClass: GObject.ObjectClass
    readonly channelNew: (session: Session, channel: Channel) => void
    readonly channelDestroy: (session: Session, channel: Channel) => void
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class SmartcardChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannelClass */
    readonly parentClass: ChannelClass
    static name: string
}
class SmartcardChannelPrivate {
    static name: string
}
abstract class SmartcardManagerClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManagerClass */
    readonly parentClass: GObject.ObjectClass
    readonly readerAdded: (manager: SmartcardManager, reader: SmartcardReader) => void
    readonly readerRemoved: (manager: SmartcardManager, reader: SmartcardReader) => void
    readonly cardInserted: (manager: SmartcardManager, reader: SmartcardReader) => void
    readonly cardRemoved: (manager: SmartcardManager, reader: SmartcardReader) => void
    static name: string
}
class SmartcardManagerPrivate {
    static name: string
}
class SmartcardReader {
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardReader */
    insertCard(): boolean
    isSoftware(): boolean
    removeCard(): boolean
    static name: string
}
abstract class URIClass {
    static name: string
}
class URIPrivate {
    static name: string
}
class UsbDevice {
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDevice */
    getDescription(format?: string | null): string
    getLibusbDevice(): object | null
    static name: string
}
abstract class UsbDeviceManagerClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManagerClass */
    readonly parentClass: GObject.ObjectClass
    readonly deviceAdded: (manager: UsbDeviceManager, device: UsbDevice) => void
    readonly deviceRemoved: (manager: UsbDeviceManager, device: UsbDevice) => void
    readonly autoConnectFailed: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
    readonly deviceError: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
    static name: string
}
class UsbDeviceManagerPrivate {
    static name: string
}
abstract class UsbredirChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannelClass */
    readonly parentClass: ChannelClass
    static name: string
}
class UsbredirChannelPrivate {
    static name: string
}
abstract class WebdavChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannelClass */
    readonly parentClass: PortChannelClass
    static name: string
}
class WebdavChannelPrivate {
    static name: string
}
}
export default SpiceClientGLib;