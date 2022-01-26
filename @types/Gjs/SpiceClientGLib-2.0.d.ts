/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SpiceClientGLib-2.0
 */

import type * as Gjs from './Gjs';
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
function client_error_quark(): GLib.Quark
function display_change_preferred_compression(channel: Channel, compression: number): void
function display_change_preferred_video_codec_type(channel: Channel, codec_type: number): void
function display_get_gl_scanout(channel: DisplayChannel): GlScanout
function display_get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean
function display_gl_draw_done(channel: DisplayChannel): void
function get_option_group(): GLib.OptionGroup
function inputs_button_press(channel: InputsChannel, button: number, button_state: number): void
function inputs_button_release(channel: InputsChannel, button: number, button_state: number): void
function inputs_key_press(channel: InputsChannel, scancode: number): void
function inputs_key_press_and_release(channel: InputsChannel, scancode: number): void
function inputs_key_release(channel: InputsChannel, scancode: number): void
function inputs_motion(channel: InputsChannel, dx: number, dy: number, button_state: number): void
function inputs_position(channel: InputsChannel, x: number, y: number, display: number, button_state: number): void
function inputs_set_key_locks(channel: InputsChannel, locks: number): void
function main_agent_test_capability(channel: MainChannel, cap: number): boolean
function main_clipboard_grab(channel: MainChannel, types: number, ntypes: number): void
function main_clipboard_notify(channel: MainChannel, type: number, data: number, size: number): void
function main_clipboard_release(channel: MainChannel): void
function main_clipboard_request(channel: MainChannel, type: number): void
function main_clipboard_selection_grab(channel: MainChannel, selection: number, types: number, ntypes: number): void
function main_clipboard_selection_notify(channel: MainChannel, selection: number, type: number, data: number, size: number): void
function main_clipboard_selection_release(channel: MainChannel, selection: number): void
function main_clipboard_selection_request(channel: MainChannel, selection: number, type: number): void
function main_file_copy_async(channel: MainChannel, sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
function main_file_copy_finish(channel: MainChannel, result: Gio.AsyncResult): boolean
function main_request_mouse_mode(channel: MainChannel, mode: number): void
function main_send_monitor_config(channel: MainChannel): boolean
function main_set_display(channel: MainChannel, id: number, x: number, y: number, width: number, height: number): void
function main_set_display_enabled(channel: MainChannel, id: number, enabled: boolean): void
function main_update_display(channel: MainChannel, id: number, x: number, y: number, width: number, height: number, update: boolean): void
function main_update_display_enabled(channel: MainChannel, id: number, enabled: boolean, update: boolean): void
function port_event(port: PortChannel, event: number): void
function port_write_async(port: PortChannel, buffer: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function port_write_finish(port: PortChannel, result: Gio.AsyncResult): number
function record_send_data(channel: RecordChannel, data: object | null, bytes: number, time: number): void
function set_session_option(session: Session): void
function util_get_debug(): boolean
function util_get_version_string(): string
function util_set_debug(enabled: boolean): void
function uuid_to_string(uuid: number): string
interface msg_handler {
    (channel: Channel, in_: MsgIn): void
}
interface Audio_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Audio */
    main_context?: GLib.MainContext
    session?: Session
}
class Audio {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Audio */
    vfunc_connect_channel(channel: Channel): boolean
    vfunc_get_playback_volume_info_async(cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_playback_volume_info_finish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean
    vfunc_get_record_volume_info_async(cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_get_record_volume_info_finish(res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Audio, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Audio, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    channel_id?: number
    channel_type?: number
    spice_session?: Session
}
class Channel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: Channel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: Channel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: Channel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: Channel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::socket", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(s: Session, type: number, id: number): Channel
    static string_to_type(str: string): number
    static type_to_string(type: number): string
    static $gtype: GObject.Type
}
interface CursorChannel_ConstructProps extends Channel_ConstructProps {
}
class CursorChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel */
    readonly cursor: CursorShape
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel */
    vfunc_cursor_hide(): void
    vfunc_cursor_move(x: number, y: number): void
    vfunc_cursor_reset(): void
    vfunc_cursor_set(width: number, height: number, hot_x: number, hot_y: number, rgba?: object | null): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.CursorChannel */
    connect(sigName: "cursor-hide", callback: (($obj: CursorChannel) => void)): number
    connect_after(sigName: "cursor-hide", callback: (($obj: CursorChannel) => void)): number
    emit(sigName: "cursor-hide"): void
    connect(sigName: "cursor-move", callback: (($obj: CursorChannel, x: number, y: number) => void)): number
    connect_after(sigName: "cursor-move", callback: (($obj: CursorChannel, x: number, y: number) => void)): number
    emit(sigName: "cursor-move", x: number, y: number): void
    connect(sigName: "cursor-reset", callback: (($obj: CursorChannel) => void)): number
    connect_after(sigName: "cursor-reset", callback: (($obj: CursorChannel) => void)): number
    emit(sigName: "cursor-reset"): void
    connect(sigName: "cursor-set", callback: (($obj: CursorChannel, width: number, height: number, hot_x: number, hot_y: number, rgba?: object | null) => void)): number
    connect_after(sigName: "cursor-set", callback: (($obj: CursorChannel, width: number, height: number, hot_x: number, hot_y: number, rgba?: object | null) => void)): number
    emit(sigName: "cursor-set", width: number, height: number, hot_x: number, hot_y: number, rgba?: object | null): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: CursorChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: CursorChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: CursorChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: CursorChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socket", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: CursorChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CursorChannel_ConstructProps)
    _init (config?: CursorChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface DisplayChannel_ConstructProps extends Channel_ConstructProps {
}
class DisplayChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel */
    readonly gl_scanout: GlScanout
    readonly height: number
    readonly monitors: object[]
    readonly monitors_max: number
    readonly width: number
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel */
    get_gl_scanout(): GlScanout
    gl_draw_done(): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannel */
    connect(sigName: "display-invalidate", callback: (($obj: DisplayChannel, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "display-invalidate", callback: (($obj: DisplayChannel, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "display-invalidate", x: number, y: number, width: number, height: number): void
    connect(sigName: "display-mark", callback: (($obj: DisplayChannel, mark: number) => void)): number
    connect_after(sigName: "display-mark", callback: (($obj: DisplayChannel, mark: number) => void)): number
    emit(sigName: "display-mark", mark: number): void
    connect(sigName: "display-primary-create", callback: (($obj: DisplayChannel, format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null) => void)): number
    connect_after(sigName: "display-primary-create", callback: (($obj: DisplayChannel, format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null) => void)): number
    emit(sigName: "display-primary-create", format: number, width: number, height: number, stride: number, shmid: number, imgdata?: object | null): void
    connect(sigName: "display-primary-destroy", callback: (($obj: DisplayChannel) => void)): number
    connect_after(sigName: "display-primary-destroy", callback: (($obj: DisplayChannel) => void)): number
    emit(sigName: "display-primary-destroy"): void
    connect(sigName: "gl-draw", callback: (($obj: DisplayChannel, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "gl-draw", callback: (($obj: DisplayChannel, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "gl-draw", x: number, y: number, width: number, height: number): void
    connect(sigName: "gst-video-overlay", callback: (($obj: DisplayChannel, pipeline: Gst.Pipeline) => boolean)): number
    connect_after(sigName: "gst-video-overlay", callback: (($obj: DisplayChannel, pipeline: Gst.Pipeline) => boolean)): number
    emit(sigName: "gst-video-overlay", pipeline: Gst.Pipeline): void
    connect(sigName: "streaming-mode", callback: (($obj: DisplayChannel, streaming_mode: boolean) => object | null)): number
    connect_after(sigName: "streaming-mode", callback: (($obj: DisplayChannel, streaming_mode: boolean) => object | null)): number
    emit(sigName: "streaming-mode", streaming_mode: boolean): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: DisplayChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: DisplayChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: DisplayChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: DisplayChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gl-scanout", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gl-scanout", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monitors", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitors", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monitors-max", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitors-max", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socket", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: DisplayChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DisplayChannel_ConstructProps)
    _init (config?: DisplayChannel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static change_preferred_compression(channel: Channel, compression: number): void
    static change_preferred_video_codec_type(channel: Channel, codec_type: number): void
    static get_primary(channel: Channel, surface_id: number, primary: DisplayPrimary): boolean
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
    readonly total_bytes: number
    readonly transferred_bytes: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask */
    cancel(): void
    get_filename(): string
    get_progress(): number
    get_total_bytes(): number
    get_transferred_bytes(): number
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.FileTransferTask */
    connect(sigName: "finished", callback: (($obj: FileTransferTask, object: GLib.Error) => void)): number
    connect_after(sigName: "finished", callback: (($obj: FileTransferTask, object: GLib.Error) => void)): number
    emit(sigName: "finished", object: GLib.Error): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::progress", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transferred-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transferred-bytes", callback: (($obj: FileTransferTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileTransferTask_ConstructProps)
    _init (config?: FileTransferTask_ConstructProps): void
    static $gtype: GObject.Type
}
interface InputsChannel_ConstructProps extends Channel_ConstructProps {
}
class InputsChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel */
    readonly key_modifiers: number
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel */
    button_press(button: number, button_state: number): void
    button_release(button: number, button_state: number): void
    key_press(scancode: number): void
    key_press_and_release(scancode: number): void
    key_release(scancode: number): void
    motion(dx: number, dy: number, button_state: number): void
    position(x: number, y: number, display: number, button_state: number): void
    set_key_locks(locks: number): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.InputsChannel */
    connect(sigName: "inputs-modifiers", callback: (($obj: InputsChannel) => void)): number
    connect_after(sigName: "inputs-modifiers", callback: (($obj: InputsChannel) => void)): number
    emit(sigName: "inputs-modifiers"): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: InputsChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: InputsChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: InputsChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: InputsChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::key-modifiers", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-modifiers", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socket", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: InputsChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputsChannel_ConstructProps)
    _init (config?: InputsChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface MainChannel_ConstructProps extends Channel_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel */
    color_depth?: number
    disable_animation?: boolean
    disable_display_align?: boolean
    disable_display_position?: boolean
    disable_font_smooth?: boolean
    disable_wallpaper?: boolean
    max_clipboard?: number
}
class MainChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel */
    readonly agent_caps_0: number
    readonly agent_connected: boolean
    color_depth: number
    disable_animation: boolean
    disable_display_align: boolean
    disable_display_position: boolean
    disable_font_smooth: boolean
    disable_wallpaper: boolean
    max_clipboard: number
    readonly mouse_mode: number
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel */
    agent_test_capability(cap: number): boolean
    clipboard_selection_grab(selection: number, types: number, ntypes: number): void
    clipboard_selection_notify(selection: number, type: number, data: number, size: number): void
    clipboard_selection_release(selection: number): void
    clipboard_selection_request(selection: number, type: number): void
    file_copy_async(sources: Gio.File[], flags: Gio.FileCopyFlags, cancellable?: Gio.Cancellable | null, progress_callback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    file_copy_finish(result: Gio.AsyncResult): boolean
    request_mouse_mode(mode: number): void
    send_monitor_config(): boolean
    update_display(id: number, x: number, y: number, width: number, height: number, update: boolean): void
    update_display_enabled(id: number, enabled: boolean, update: boolean): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.MainChannel */
    connect(sigName: "main-agent-update", callback: (($obj: MainChannel) => void)): number
    connect_after(sigName: "main-agent-update", callback: (($obj: MainChannel) => void)): number
    emit(sigName: "main-agent-update"): void
    connect(sigName: "main-clipboard", callback: (($obj: MainChannel, type: number, data: object | null, size: number) => void)): number
    connect_after(sigName: "main-clipboard", callback: (($obj: MainChannel, type: number, data: object | null, size: number) => void)): number
    emit(sigName: "main-clipboard", type: number, data: object | null, size: number): void
    connect(sigName: "main-clipboard-grab", callback: (($obj: MainChannel, types: object | null, ntypes: number) => boolean)): number
    connect_after(sigName: "main-clipboard-grab", callback: (($obj: MainChannel, types: object | null, ntypes: number) => boolean)): number
    emit(sigName: "main-clipboard-grab", types: object | null, ntypes: number): void
    connect(sigName: "main-clipboard-release", callback: (($obj: MainChannel) => void)): number
    connect_after(sigName: "main-clipboard-release", callback: (($obj: MainChannel) => void)): number
    emit(sigName: "main-clipboard-release"): void
    connect(sigName: "main-clipboard-request", callback: (($obj: MainChannel, types: number) => boolean)): number
    connect_after(sigName: "main-clipboard-request", callback: (($obj: MainChannel, types: number) => boolean)): number
    emit(sigName: "main-clipboard-request", types: number): void
    connect(sigName: "main-clipboard-selection", callback: (($obj: MainChannel, selection: number, type: number, data: object | null, size: number) => void)): number
    connect_after(sigName: "main-clipboard-selection", callback: (($obj: MainChannel, selection: number, type: number, data: object | null, size: number) => void)): number
    emit(sigName: "main-clipboard-selection", selection: number, type: number, data: object | null, size: number): void
    connect(sigName: "main-clipboard-selection-grab", callback: (($obj: MainChannel, selection: number, types: object | null, ntypes: number) => boolean)): number
    connect_after(sigName: "main-clipboard-selection-grab", callback: (($obj: MainChannel, selection: number, types: object | null, ntypes: number) => boolean)): number
    emit(sigName: "main-clipboard-selection-grab", selection: number, types: object | null, ntypes: number): void
    connect(sigName: "main-clipboard-selection-release", callback: (($obj: MainChannel, selection: number) => void)): number
    connect_after(sigName: "main-clipboard-selection-release", callback: (($obj: MainChannel, selection: number) => void)): number
    emit(sigName: "main-clipboard-selection-release", selection: number): void
    connect(sigName: "main-clipboard-selection-request", callback: (($obj: MainChannel, selection: number, types: number) => boolean)): number
    connect_after(sigName: "main-clipboard-selection-request", callback: (($obj: MainChannel, selection: number, types: number) => boolean)): number
    emit(sigName: "main-clipboard-selection-request", selection: number, types: number): void
    connect(sigName: "main-mouse-update", callback: (($obj: MainChannel) => void)): number
    connect_after(sigName: "main-mouse-update", callback: (($obj: MainChannel) => void)): number
    emit(sigName: "main-mouse-update"): void
    connect(sigName: "migration-started", callback: (($obj: MainChannel, session: GObject.Object) => void)): number
    connect_after(sigName: "migration-started", callback: (($obj: MainChannel, session: GObject.Object) => void)): number
    emit(sigName: "migration-started", session: GObject.Object): void
    connect(sigName: "new-file-transfer", callback: (($obj: MainChannel, task: GObject.Object) => void)): number
    connect_after(sigName: "new-file-transfer", callback: (($obj: MainChannel, task: GObject.Object) => void)): number
    emit(sigName: "new-file-transfer", task: GObject.Object): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: MainChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: MainChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: MainChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: MainChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::agent-caps-0", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent-caps-0", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::agent-connected", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agent-connected", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color-depth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disable-animation", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-animation", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disable-display-align", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-display-align", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disable-display-position", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-display-position", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disable-font-smooth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-font-smooth", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disable-wallpaper", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-wallpaper", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-clipboard", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-clipboard", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mouse-mode", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-mode", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socket", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: MainChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MainChannel_ConstructProps)
    _init (config?: MainChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface PlaybackChannel_ConstructProps extends Channel_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    min_latency?: number
    mute?: boolean
    nchannels?: number
    volume?: object
}
class PlaybackChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    min_latency: number
    mute: boolean
    nchannels: number
    volume: object
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    set_delay(delay_ms: number): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    vfunc_playback_data(data: object | null, size: number): void
    vfunc_playback_start(format: number, channels: number, freq: number): void
    vfunc_playback_stop(): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.PlaybackChannel */
    connect(sigName: "playback-data", callback: (($obj: PlaybackChannel, data: object | null, data_size: number) => void)): number
    connect_after(sigName: "playback-data", callback: (($obj: PlaybackChannel, data: object | null, data_size: number) => void)): number
    emit(sigName: "playback-data", data: object | null, data_size: number): void
    connect(sigName: "playback-get-delay", callback: (($obj: PlaybackChannel) => void)): number
    connect_after(sigName: "playback-get-delay", callback: (($obj: PlaybackChannel) => void)): number
    emit(sigName: "playback-get-delay"): void
    connect(sigName: "playback-start", callback: (($obj: PlaybackChannel, format: number, channels: number, rate: number) => void)): number
    connect_after(sigName: "playback-start", callback: (($obj: PlaybackChannel, format: number, channels: number, rate: number) => void)): number
    emit(sigName: "playback-start", format: number, channels: number, rate: number): void
    connect(sigName: "playback-stop", callback: (($obj: PlaybackChannel) => void)): number
    connect_after(sigName: "playback-stop", callback: (($obj: PlaybackChannel) => void)): number
    emit(sigName: "playback-stop"): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: PlaybackChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: PlaybackChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: PlaybackChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: PlaybackChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::min-latency", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-latency", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mute", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nchannels", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nchannels", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socket", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: PlaybackChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlaybackChannel_ConstructProps)
    _init (config?: PlaybackChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface PortChannel_ConstructProps extends Channel_ConstructProps {
}
class PortChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    readonly port_name: string
    readonly port_opened: boolean
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    event(event: number): void
    write_async(buffer: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_finish(result: Gio.AsyncResult): number
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    connect(sigName: "port-data", callback: (($obj: PortChannel, data: object | null, size: number) => void)): number
    connect_after(sigName: "port-data", callback: (($obj: PortChannel, data: object | null, size: number) => void)): number
    emit(sigName: "port-data", data: object | null, size: number): void
    connect(sigName: "port-event", callback: (($obj: PortChannel, event: number) => void)): number
    connect_after(sigName: "port-event", callback: (($obj: PortChannel, event: number) => void)): number
    emit(sigName: "port-event", event: number): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: PortChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: PortChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: PortChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: PortChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::port-name", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-name", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port-opened", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-opened", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socket", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: PortChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort */
    query_status_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    query_status_finish(result: Gio.AsyncResult): QmpStatus
    vm_action_async(action: QmpPortVmAction, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vm_action_finish(result: Gio.AsyncResult): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.QmpPort */
    connect(sigName: "event", callback: (($obj: QmpPort, name: string, node?: object | null) => void)): number
    connect_after(sigName: "event", callback: (($obj: QmpPort, name: string, node?: object | null) => void)): number
    emit(sigName: "event", name: string, node?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ready", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: QmpPort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel */
    send_data(data: object | null, bytes: number, time: number): void
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel */
    vfunc_record_data(data: object | null, size: number): void
    vfunc_record_start(format: number, channels: number, freq: number): void
    vfunc_record_stop(): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.RecordChannel */
    connect(sigName: "record-start", callback: (($obj: RecordChannel, format: number, channels: number, rate: number) => void)): number
    connect_after(sigName: "record-start", callback: (($obj: RecordChannel, format: number, channels: number, rate: number) => void)): number
    emit(sigName: "record-start", format: number, channels: number, rate: number): void
    connect(sigName: "record-stop", callback: (($obj: RecordChannel) => void)): number
    connect_after(sigName: "record-stop", callback: (($obj: RecordChannel) => void)): number
    emit(sigName: "record-stop"): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: RecordChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: RecordChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: RecordChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: RecordChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mute", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nchannels", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nchannels", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socket", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: RecordChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecordChannel_ConstructProps)
    _init (config?: RecordChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface Session_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    ca?: Uint8Array
    ca_file?: string
    cache_size?: number
    cert_subject?: string
    ciphers?: string
    client_sockets?: boolean
    color_depth?: number
    disable_effects?: string[]
    enable_audio?: boolean
    enable_smartcard?: boolean
    enable_usbredir?: boolean
    gl_scanout?: boolean
    glz_window_size?: number
    host?: string
    inhibit_keyboard_grab?: boolean
    password?: string
    port?: string
    protocol?: number
    proxy?: string
    pubkey?: Uint8Array
    read_only?: boolean
    secure_channels?: string[]
    share_dir_ro?: boolean
    shared_dir?: string
    smartcard_certificates?: string[]
    smartcard_db?: string
    tls_port?: string
    unix_path?: string
    uri?: string
    username?: string
    verify?: SessionVerify
}
class Session {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    ca: Uint8Array
    ca_file: string
    cache_size: number
    cert_subject: string
    ciphers: string
    client_sockets: boolean
    color_depth: number
    disable_effects: string[]
    enable_audio: boolean
    enable_smartcard: boolean
    enable_usbredir: boolean
    gl_scanout: boolean
    glz_window_size: number
    host: string
    inhibit_keyboard_grab: boolean
    readonly migration_state: SessionMigration
    readonly name: string
    password: string
    port: string
    protocol: number
    proxy: string
    pubkey: Uint8Array
    read_only: boolean
    secure_channels: string[]
    share_dir_ro: boolean
    shared_dir: string
    smartcard_certificates: string[]
    smartcard_db: string
    tls_port: string
    unix_path: string
    uri: string
    username: string
    readonly uuid: object
    verify: SessionVerify
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    connect(): boolean
    disconnect(): void
    get_channels(): Channel[]
    get_proxy_uri(): URI
    get_read_only(): boolean
    has_channel_type(type: number): boolean
    is_for_migration(): boolean
    open_fd(fd: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    vfunc_channel_destroy(channel: Channel): void
    vfunc_channel_new(channel: Channel): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Session */
    connect(sigName: "channel-destroy", callback: (($obj: Session, channel: Channel) => void)): number
    connect_after(sigName: "channel-destroy", callback: (($obj: Session, channel: Channel) => void)): number
    emit(sigName: "channel-destroy", channel: Channel): void
    connect(sigName: "channel-new", callback: (($obj: Session, channel: Channel) => void)): number
    connect_after(sigName: "channel-new", callback: (($obj: Session, channel: Channel) => void)): number
    emit(sigName: "channel-new", channel: Channel): void
    connect(sigName: "disconnected", callback: (($obj: Session) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Session) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "mm-time-reset", callback: (($obj: Session) => void)): number
    connect_after(sigName: "mm-time-reset", callback: (($obj: Session) => void)): number
    emit(sigName: "mm-time-reset"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ca", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-file", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cache-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cert-subject", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cert-subject", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ciphers", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ciphers", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::client-sockets", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-sockets", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::color-depth", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-depth", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::disable-effects", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-effects", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-audio", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-audio", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-smartcard", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-smartcard", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-usbredir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-usbredir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gl-scanout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gl-scanout", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::glz-window-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::glz-window-size", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inhibit-keyboard-grab", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inhibit-keyboard-grab", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::migration-state", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::migration-state", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::proxy", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pubkey", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pubkey", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::secure-channels", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secure-channels", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::share-dir-ro", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::share-dir-ro", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-dir", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smartcard-certificates", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smartcard-certificates", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::smartcard-db", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smartcard-db", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tls-port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tls-port", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unix-path", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unix-path", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::verify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::verify", callback: (($obj: Session, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: SmartcardChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: SmartcardChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: SmartcardChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: SmartcardChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::socket", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: SmartcardChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SmartcardChannel_ConstructProps)
    _init (config?: SmartcardChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface SmartcardManager_ConstructProps extends GObject.Object_ConstructProps {
}
class SmartcardManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager */
    get_readers(): SmartcardReader[]
    insert_card(): boolean
    remove_card(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager */
    vfunc_card_inserted(reader: SmartcardReader): void
    vfunc_card_removed(reader: SmartcardReader): void
    vfunc_reader_added(reader: SmartcardReader): void
    vfunc_reader_removed(reader: SmartcardReader): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManager */
    connect(sigName: "card-inserted", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    connect_after(sigName: "card-inserted", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    emit(sigName: "card-inserted", vreader: any): void
    connect(sigName: "card-removed", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    connect_after(sigName: "card-removed", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    emit(sigName: "card-removed", vreader: any): void
    connect(sigName: "reader-added", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    connect_after(sigName: "reader-added", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    emit(sigName: "reader-added", vreader: any): void
    connect(sigName: "reader-removed", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    connect_after(sigName: "reader-removed", callback: (($obj: SmartcardManager, vreader: any) => void)): number
    emit(sigName: "reader-removed", vreader: any): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SmartcardManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SmartcardManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.URI */
    get_hostname(): string
    get_password(): string
    get_port(): number
    get_scheme(): string
    get_user(): string
    set_hostname(hostname: string): void
    set_password(password: string): void
    set_port(port: number): void
    set_scheme(scheme: string): void
    set_user(user: string): void
    to_string(): string
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hostname", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hostname", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scheme", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: URI, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URI_ConstructProps)
    _init (config?: URI_ConstructProps): void
    static $gtype: GObject.Type
}
interface UsbDeviceManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    auto_connect?: boolean
    auto_connect_filter?: string
    redirect_on_connect?: string
    session?: Session
}
class UsbDeviceManager {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    auto_connect: boolean
    auto_connect_filter: string
    readonly free_channels: number
    redirect_on_connect: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    can_redirect_device(device: UsbDevice): boolean
    connect_device_async(device: UsbDevice, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    connect_device_finish(res: Gio.AsyncResult): boolean
    disconnect_device(device: UsbDevice): void
    disconnect_device_async(device: UsbDevice, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    disconnect_device_finish(res: Gio.AsyncResult): boolean
    get_devices(): UsbDevice[]
    get_devices_with_filter(filter?: string | null): UsbDevice[]
    is_device_connected(device: UsbDevice): boolean
    is_redirecting(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    vfunc_auto_connect_failed(device: UsbDevice, error: GLib.Error): void
    vfunc_device_added(device: UsbDevice): void
    vfunc_device_error(device: UsbDevice, error: GLib.Error): void
    vfunc_device_removed(device: UsbDevice): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManager */
    connect(sigName: "auto-connect-failed", callback: (($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void)): number
    connect_after(sigName: "auto-connect-failed", callback: (($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void)): number
    emit(sigName: "auto-connect-failed", device: UsbDevice, error: GLib.Error): void
    connect(sigName: "device-added", callback: (($obj: UsbDeviceManager, device: UsbDevice) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: UsbDeviceManager, device: UsbDevice) => void)): number
    emit(sigName: "device-added", device: UsbDevice): void
    connect(sigName: "device-error", callback: (($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void)): number
    connect_after(sigName: "device-error", callback: (($obj: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void)): number
    emit(sigName: "device-error", device: UsbDevice, error: GLib.Error): void
    connect(sigName: "device-removed", callback: (($obj: UsbDeviceManager, device: UsbDevice) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: UsbDeviceManager, device: UsbDevice) => void)): number
    emit(sigName: "device-removed", device: UsbDevice): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-connect-filter", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-connect-filter", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::free-channels", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::free-channels", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::redirect-on-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::redirect-on-connect", callback: (($obj: UsbDeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UsbDeviceManager_ConstructProps)
    _init (config?: UsbDeviceManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(session: Session): UsbDeviceManager
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface UsbredirChannel_ConstructProps extends Channel_ConstructProps {
}
class UsbredirChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly parent: GObject.Object
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: UsbredirChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: UsbredirChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: UsbredirChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: UsbredirChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::socket", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: UsbredirChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UsbredirChannel_ConstructProps)
    _init (config?: UsbredirChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface WebdavChannel_ConstructProps extends PortChannel_ConstructProps {
}
class WebdavChannel {
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    readonly port_name: string
    readonly port_opened: boolean
    /* Properties of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly socket: Gio.Socket
    readonly total_read_bytes: number
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    readonly parent: Channel
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    readonly priv: ChannelPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    event(event: number): void
    write_async(buffer: Uint8Array, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    write_finish(result: Gio.AsyncResult): number
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(): boolean
    destroy(): void
    disconnect(reason: ChannelEvent): void
    flush_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    flush_finish(result: Gio.AsyncResult): boolean
    get_error(): GLib.Error
    open_fd(fd: number): boolean
    set_capability(cap: number): void
    test_capability(cap: number): boolean
    test_common_capability(cap: number): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    vfunc_channel_event(event: ChannelEvent): void
    vfunc_channel_reset(migrating: boolean): void
    vfunc_channel_send_migration_handshake(): void
    vfunc_channel_up(): void
    vfunc_handle_msg(msg: MsgIn): void
    vfunc_iterate_read(): void
    vfunc_iterate_write(): void
    vfunc_open_fd(with_tls: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.PortChannel */
    connect(sigName: "port-data", callback: (($obj: WebdavChannel, data: object | null, size: number) => void)): number
    connect_after(sigName: "port-data", callback: (($obj: WebdavChannel, data: object | null, size: number) => void)): number
    emit(sigName: "port-data", data: object | null, size: number): void
    connect(sigName: "port-event", callback: (($obj: WebdavChannel, event: number) => void)): number
    connect_after(sigName: "port-event", callback: (($obj: WebdavChannel, event: number) => void)): number
    emit(sigName: "port-event", event: number): void
    /* Signals of SpiceClientGLib-2.0.SpiceClientGLib.Channel */
    connect(sigName: "channel-event", callback: (($obj: WebdavChannel, event: ChannelEvent) => void)): number
    connect_after(sigName: "channel-event", callback: (($obj: WebdavChannel, event: ChannelEvent) => void)): number
    emit(sigName: "channel-event", event: ChannelEvent): void
    connect(sigName: "open-fd", callback: (($obj: WebdavChannel, with_tls: number) => void)): number
    connect_after(sigName: "open-fd", callback: (($obj: WebdavChannel, with_tls: number) => void)): number
    emit(sigName: "open-fd", with_tls: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::port-name", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-name", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port-opened", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port-opened", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::socket", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::socket", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::total-read-bytes", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-read-bytes", callback: (($obj: WebdavChannel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebdavChannel_ConstructProps)
    _init (config?: WebdavChannel_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AudioClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.AudioClass */
    readonly parent_class: GObject.ObjectClass
    readonly connect_channel: (audio: Audio, channel: Channel) => boolean
    readonly get_playback_volume_info_async: (audio: Audio, cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback?: Gio.AsyncReadyCallback | null) => void
    readonly get_playback_volume_info_finish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
    readonly get_record_volume_info_async: (audio: Audio, cancellable: Gio.Cancellable | null, main_channel: MainChannel, callback?: Gio.AsyncReadyCallback | null) => void
    readonly get_record_volume_info_finish: (audio: Audio, res: Gio.AsyncResult, mute: boolean, nchannels: number, volume: number) => boolean
    static name: string
}
class AudioPrivate {
    static name: string
}
abstract class ChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.ChannelClass */
    readonly parent_class: GObject.ObjectClass
    readonly channel_event: (channel: Channel, event: ChannelEvent) => void
    readonly open_fd: (channel: Channel, with_tls: number) => void
    readonly handle_msg: (channel: Channel, msg: MsgIn) => void
    readonly channel_up: (channel: Channel) => void
    readonly iterate_write: (channel: Channel) => void
    readonly iterate_read: (channel: Channel) => void
    readonly channel_reset: (channel: Channel, migrating: boolean) => void
    readonly channel_send_migration_handshake: (channel: Channel) => void
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
    readonly parent_class: ChannelClass
    readonly cursor_set: (channel: CursorChannel, width: number, height: number, hot_x: number, hot_y: number, rgba?: object | null) => void
    readonly cursor_move: (channel: CursorChannel, x: number, y: number) => void
    readonly cursor_hide: (channel: CursorChannel) => void
    readonly cursor_reset: (channel: CursorChannel) => void
    static name: string
}
class CursorChannelPrivate {
    static name: string
}
class CursorShape {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.CursorShape */
    readonly width: number
    readonly height: number
    readonly hot_spot_x: number
    readonly hot_spot_y: number
    readonly data: object
    static name: string
}
abstract class DisplayChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayChannelClass */
    readonly parent_class: ChannelClass
    readonly display_primary_create: (channel: Channel, format: number, width: number, height: number, stride: number, shmid: number, data: object) => void
    readonly display_primary_destroy: (channel: Channel) => void
    readonly display_invalidate: (channel: Channel, x: number, y: number, w: number, h: number) => void
    readonly display_mark: (channel: Channel, mark: boolean) => void
    static name: string
}
class DisplayChannelPrivate {
    static name: string
}
class DisplayMonitorConfig {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.DisplayMonitorConfig */
    readonly id: number
    readonly surface_id: number
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
    readonly parent_class: ChannelClass
    readonly inputs_modifiers: (channel: Channel) => void
    static name: string
}
class InputsChannelPrivate {
    static name: string
}
abstract class MainChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.MainChannelClass */
    readonly parent_class: ChannelClass
    readonly mouse_update: (channel: Channel) => void
    readonly agent_update: (channel: Channel) => void
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
    readonly parent_class: ChannelClass
    readonly playback_start: (channel: PlaybackChannel, format: number, channels: number, freq: number) => void
    readonly playback_data: (channel: PlaybackChannel, data: object | null, size: number) => void
    readonly playback_stop: (channel: PlaybackChannel) => void
    static name: string
}
class PlaybackChannelPrivate {
    static name: string
}
abstract class PortChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.PortChannelClass */
    readonly parent_class: ChannelClass
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
    readonly parent_class: ChannelClass
    readonly record_start: (channel: RecordChannel, format: number, channels: number, freq: number) => void
    readonly record_data: (channel: RecordChannel, data: object | null, size: number) => void
    readonly record_stop: (channel: RecordChannel) => void
    static name: string
}
class RecordChannelPrivate {
    static name: string
}
abstract class SessionClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.SessionClass */
    readonly parent_class: GObject.ObjectClass
    readonly channel_new: (session: Session, channel: Channel) => void
    readonly channel_destroy: (session: Session, channel: Channel) => void
    static name: string
}
class SessionPrivate {
    static name: string
}
abstract class SmartcardChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardChannelClass */
    readonly parent_class: ChannelClass
    static name: string
}
class SmartcardChannelPrivate {
    static name: string
}
abstract class SmartcardManagerClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly reader_added: (manager: SmartcardManager, reader: SmartcardReader) => void
    readonly reader_removed: (manager: SmartcardManager, reader: SmartcardReader) => void
    readonly card_inserted: (manager: SmartcardManager, reader: SmartcardReader) => void
    readonly card_removed: (manager: SmartcardManager, reader: SmartcardReader) => void
    static name: string
}
class SmartcardManagerPrivate {
    static name: string
}
class SmartcardReader {
    /* Methods of SpiceClientGLib-2.0.SpiceClientGLib.SmartcardReader */
    insert_card(): boolean
    is_software(): boolean
    remove_card(): boolean
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
    get_description(format?: string | null): string
    get_libusb_device(): object | null
    static name: string
}
abstract class UsbDeviceManagerClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbDeviceManagerClass */
    readonly parent_class: GObject.ObjectClass
    readonly device_added: (manager: UsbDeviceManager, device: UsbDevice) => void
    readonly device_removed: (manager: UsbDeviceManager, device: UsbDevice) => void
    readonly auto_connect_failed: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
    readonly device_error: (manager: UsbDeviceManager, device: UsbDevice, error: GLib.Error) => void
    static name: string
}
class UsbDeviceManagerPrivate {
    static name: string
}
abstract class UsbredirChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.UsbredirChannelClass */
    readonly parent_class: ChannelClass
    static name: string
}
class UsbredirChannelPrivate {
    static name: string
}
abstract class WebdavChannelClass {
    /* Fields of SpiceClientGLib-2.0.SpiceClientGLib.WebdavChannelClass */
    readonly parent_class: PortChannelClass
    static name: string
}
class WebdavChannelPrivate {
    static name: string
}
}
export default SpiceClientGLib;