/**
 * GstPlayer-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstTag from './GstTag-1.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstAudio from './GstAudio-1.0';

export namespace GstPlayer {

enum PlayerColorBalanceType {
    HUE,
    BRIGHTNESS,
    SATURATION,
    CONTRAST,
}
enum PlayerError {
    FAILED,
}
enum PlayerSnapshotFormat {
    RAW_NATIVE,
    RAW_XRGB,
    RAW_BGRX,
    JPG,
    PNG,
}
enum PlayerState {
    STOPPED,
    BUFFERING,
    PAUSED,
    PLAYING,
}
function player_color_balance_type_get_name(type: PlayerColorBalanceType): string
function player_error_get_name(error: PlayerError): string
function player_error_quark(): GLib.Quark
function player_state_get_name(state: PlayerState): string
interface PlayerSignalDispatcherFunc {
    (data?: object | null): void
}
class PlayerSignalDispatcher {
    /* Virtual methods of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher */
    vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void
    static name: string
}
class PlayerVideoRenderer {
    static name: string
}
export interface Player_ConstructProps extends Gst.Object_ConstructProps {
    audio_video_offset?: number
    mute?: boolean
    rate?: number
    signal_dispatcher?: PlayerSignalDispatcher
    subtitle_video_offset?: number
    suburi?: string
    uri?: string
    video_multiview_flags?: GstVideo.VideoMultiviewFlags
    video_multiview_mode?: GstVideo.VideoMultiviewFramePacking
    volume?: number
}
class Player {
    /* Properties of GstPlayer-1.0.GstPlayer.Player */
    audio_video_offset: number
    readonly current_audio_track: PlayerAudioInfo
    readonly current_subtitle_track: PlayerSubtitleInfo
    readonly current_video_track: PlayerVideoInfo
    readonly duration: number
    readonly media_info: PlayerMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    subtitle_video_offset: number
    suburi: string
    uri: string
    video_multiview_flags: GstVideo.VideoMultiviewFlags
    video_multiview_mode: GstVideo.VideoMultiviewFramePacking
    readonly video_renderer: PlayerVideoRenderer
    volume: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.Player */
    get_audio_video_offset(): number
    get_color_balance(type: PlayerColorBalanceType): number
    get_config(): Gst.Structure
    get_current_audio_track(): PlayerAudioInfo | null
    get_current_subtitle_track(): PlayerSubtitleInfo | null
    get_current_video_track(): PlayerVideoInfo | null
    get_current_visualization(): string | null
    get_duration(): Gst.ClockTime
    get_media_info(): PlayerMediaInfo | null
    get_multiview_flags(): GstVideo.VideoMultiviewFlags
    get_multiview_mode(): GstVideo.VideoMultiviewFramePacking
    get_mute(): boolean
    get_pipeline(): Gst.Element
    get_position(): Gst.ClockTime
    get_rate(): number
    get_subtitle_uri(): string | null
    get_subtitle_video_offset(): number
    get_uri(): string | null
    get_video_snapshot(format: PlayerSnapshotFormat, config?: Gst.Structure | null): Gst.Sample | null
    get_volume(): number
    has_color_balance(): boolean
    pause(): void
    play(): void
    seek(position: Gst.ClockTime): void
    set_audio_track(stream_index: number): boolean
    set_audio_track_enabled(enabled: boolean): void
    set_audio_video_offset(offset: number): void
    set_color_balance(type: PlayerColorBalanceType, value: number): void
    set_config(config: Gst.Structure): boolean
    set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void
    set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void
    set_mute(val: boolean): void
    set_rate(rate: number): void
    set_subtitle_track(stream_index: number): boolean
    set_subtitle_track_enabled(enabled: boolean): void
    set_subtitle_uri(uri?: string | null): void
    set_subtitle_video_offset(offset: number): void
    set_uri(uri?: string | null): void
    set_video_track(stream_index: number): boolean
    set_video_track_enabled(enabled: boolean): void
    set_visualization(name?: string | null): boolean
    set_visualization_enabled(enabled: boolean): void
    set_volume(val: number): void
    stop(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: Gst.ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): Gst.ControlBinding | null
    get_control_rate(): Gst.ClockTime
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Gst.Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Gst.Object): boolean
    has_as_ancestor(ancestor: Gst.Object): boolean
    has_as_parent(parent: Gst.Object): boolean
    ref(): Gst.Object
    remove_control_binding(binding: Gst.ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: Gst.ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Gst.Object): boolean
    suggest_next_sync(): Gst.ClockTime
    sync_values(timestamp: Gst.ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstPlayer-1.0.GstPlayer.Player */
    connect(sigName: "buffering", callback: (($obj: Player, object: number) => void)): number
    connect_after(sigName: "buffering", callback: (($obj: Player, object: number) => void)): number
    emit(sigName: "buffering", object: number): void
    connect(sigName: "duration-changed", callback: (($obj: Player, object: number) => void)): number
    connect_after(sigName: "duration-changed", callback: (($obj: Player, object: number) => void)): number
    emit(sigName: "duration-changed", object: number): void
    connect(sigName: "end-of-stream", callback: (($obj: Player) => void)): number
    connect_after(sigName: "end-of-stream", callback: (($obj: Player) => void)): number
    emit(sigName: "end-of-stream"): void
    connect(sigName: "error", callback: (($obj: Player, object: GLib.Error) => void)): number
    connect_after(sigName: "error", callback: (($obj: Player, object: GLib.Error) => void)): number
    emit(sigName: "error", object: GLib.Error): void
    connect(sigName: "media-info-updated", callback: (($obj: Player, object: PlayerMediaInfo) => void)): number
    connect_after(sigName: "media-info-updated", callback: (($obj: Player, object: PlayerMediaInfo) => void)): number
    emit(sigName: "media-info-updated", object: PlayerMediaInfo): void
    connect(sigName: "mute-changed", callback: (($obj: Player) => void)): number
    connect_after(sigName: "mute-changed", callback: (($obj: Player) => void)): number
    emit(sigName: "mute-changed"): void
    connect(sigName: "position-updated", callback: (($obj: Player, object: number) => void)): number
    connect_after(sigName: "position-updated", callback: (($obj: Player, object: number) => void)): number
    emit(sigName: "position-updated", object: number): void
    connect(sigName: "seek-done", callback: (($obj: Player, object: number) => void)): number
    connect_after(sigName: "seek-done", callback: (($obj: Player, object: number) => void)): number
    emit(sigName: "seek-done", object: number): void
    connect(sigName: "state-changed", callback: (($obj: Player, object: PlayerState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Player, object: PlayerState) => void)): number
    emit(sigName: "state-changed", object: PlayerState): void
    connect(sigName: "uri-loaded", callback: (($obj: Player, object: string) => void)): number
    connect_after(sigName: "uri-loaded", callback: (($obj: Player, object: string) => void)): number
    emit(sigName: "uri-loaded", object: string): void
    connect(sigName: "video-dimensions-changed", callback: (($obj: Player, object: number, p0: number) => void)): number
    connect_after(sigName: "video-dimensions-changed", callback: (($obj: Player, object: number, p0: number) => void)): number
    emit(sigName: "video-dimensions-changed", object: number, p0: number): void
    connect(sigName: "volume-changed", callback: (($obj: Player) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: Player) => void)): number
    emit(sigName: "volume-changed"): void
    connect(sigName: "warning", callback: (($obj: Player, object: GLib.Error) => void)): number
    connect_after(sigName: "warning", callback: (($obj: Player, object: GLib.Error) => void)): number
    emit(sigName: "warning", object: GLib.Error): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Player, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Player, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::audio-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-audio-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-audio-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-subtitle-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-subtitle-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-video-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-video-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-info", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-info", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mute", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pipeline", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suburi", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suburi", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-multiview-flags", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-flags", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-multiview-mode", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-mode", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::video-renderer", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-renderer", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Player_ConstructProps)
    _init (config?: Player_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(video_renderer?: PlayerVideoRenderer | null, signal_dispatcher?: PlayerSignalDispatcher | null): Player
    static config_get_position_update_interval(config: Gst.Structure): number
    static config_get_seek_accurate(config: Gst.Structure): boolean
    static config_get_user_agent(config: Gst.Structure): string | null
    static config_set_position_update_interval(config: Gst.Structure, interval: number): void
    static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void
    static config_set_user_agent(config: Gst.Structure, agent?: string | null): void
    static get_audio_streams(info: PlayerMediaInfo): PlayerAudioInfo[]
    static get_subtitle_streams(info: PlayerMediaInfo): PlayerSubtitleInfo[]
    static get_video_streams(info: PlayerMediaInfo): PlayerVideoInfo[]
    static visualizations_free(viss: PlayerVisualization): void
    static visualizations_get(): PlayerVisualization[]
    static $gtype: GObject.Type
}
export interface PlayerAudioInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}
class PlayerAudioInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerAudioInfo */
    get_bitrate(): number
    get_channels(): number
    get_language(): string | null
    get_max_bitrate(): number
    get_sample_rate(): number
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo */
    get_caps(): Gst.Caps | null
    get_codec(): string | null
    get_index(): number
    get_stream_type(): string
    get_tags(): Gst.TagList | null
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
    connect(sigName: "notify", callback: (($obj: PlayerAudioInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerAudioInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayerAudioInfo_ConstructProps)
    _init (config?: PlayerAudioInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerGMainContextSignalDispatcher_ConstructProps extends GObject.Object_ConstructProps {
    application_context?: GLib.MainContext
}
class PlayerGMainContextSignalDispatcher {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Virtual methods of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher */
    vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlayerGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayerGMainContextSignalDispatcher_ConstructProps)
    _init (config?: PlayerGMainContextSignalDispatcher_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerMediaInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class PlayerMediaInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerMediaInfo */
    get_audio_streams(): PlayerAudioInfo[]
    get_container_format(): string | null
    get_duration(): Gst.ClockTime
    get_image_sample(): Gst.Sample | null
    get_number_of_audio_streams(): number
    get_number_of_streams(): number
    get_number_of_subtitle_streams(): number
    get_number_of_video_streams(): number
    get_stream_list(): PlayerStreamInfo[]
    get_subtitle_streams(): PlayerSubtitleInfo[]
    get_tags(): Gst.TagList | null
    get_title(): string | null
    get_uri(): string
    get_video_streams(): PlayerVideoInfo[]
    is_live(): boolean
    is_seekable(): boolean
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
    connect(sigName: "notify", callback: (($obj: PlayerMediaInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerMediaInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayerMediaInfo_ConstructProps)
    _init (config?: PlayerMediaInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class PlayerStreamInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo */
    get_caps(): Gst.Caps | null
    get_codec(): string | null
    get_index(): number
    get_stream_type(): string
    get_tags(): Gst.TagList | null
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
    connect(sigName: "notify", callback: (($obj: PlayerStreamInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerStreamInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayerStreamInfo_ConstructProps)
    _init (config?: PlayerStreamInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerSubtitleInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}
class PlayerSubtitleInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo */
    get_language(): string | null
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo */
    get_caps(): Gst.Caps | null
    get_codec(): string | null
    get_index(): number
    get_stream_type(): string
    get_tags(): Gst.TagList | null
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
    connect(sigName: "notify", callback: (($obj: PlayerSubtitleInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerSubtitleInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayerSubtitleInfo_ConstructProps)
    _init (config?: PlayerSubtitleInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerVideoInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}
class PlayerVideoInfo {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerVideoInfo */
    get_bitrate(): number
    get_framerate(): [ /* fps_n */ number, /* fps_d */ number ]
    get_height(): number
    get_max_bitrate(): number
    get_pixel_aspect_ratio(): [ /* par_n */ number, /* par_d */ number ]
    get_width(): number
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo */
    get_caps(): Gst.Caps | null
    get_codec(): string | null
    get_index(): number
    get_stream_type(): string
    get_tags(): Gst.TagList | null
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
    connect(sigName: "notify", callback: (($obj: PlayerVideoInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerVideoInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayerVideoInfo_ConstructProps)
    _init (config?: PlayerVideoInfo_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PlayerVideoOverlayVideoRenderer_ConstructProps extends GObject.Object_ConstructProps {
    video_sink?: Gst.Element
    window_handle?: object
}
class PlayerVideoOverlayVideoRenderer {
    /* Properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer */
    video_sink: Gst.Element
    window_handle: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer */
    expose(): void
    get_render_rectangle(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_window_handle(): object | null
    set_render_rectangle(x: number, y: number, width: number, height: number): void
    set_window_handle(window_handle?: object | null): void
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
    connect(sigName: "notify", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::video-sink", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-handle", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-handle", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlayerVideoOverlayVideoRenderer_ConstructProps)
    _init (config?: PlayerVideoOverlayVideoRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_with_sink(window_handle: object | null, video_sink: Gst.Element): PlayerVideoRenderer
    static $gtype: GObject.Type
}
abstract class PlayerAudioInfoClass {
    static name: string
}
abstract class PlayerClass {
    static name: string
}
abstract class PlayerGMainContextSignalDispatcherClass {
    static name: string
}
abstract class PlayerMediaInfoClass {
    static name: string
}
abstract class PlayerSignalDispatcherInterface {
    /* Fields of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcherInterface */
    parent_iface: GObject.TypeInterface
    dispatch: (self: PlayerSignalDispatcher, player: Player, emitter: PlayerSignalDispatcherFunc) => void
    static name: string
}
abstract class PlayerStreamInfoClass {
    static name: string
}
abstract class PlayerSubtitleInfoClass {
    static name: string
}
abstract class PlayerVideoInfoClass {
    static name: string
}
abstract class PlayerVideoOverlayVideoRendererClass {
    static name: string
}
abstract class PlayerVideoRendererInterface {
    /* Fields of GstPlayer-1.0.GstPlayer.PlayerVideoRendererInterface */
    parent_iface: GObject.TypeInterface
    static name: string
}
class PlayerVisualization {
    /* Fields of GstPlayer-1.0.GstPlayer.PlayerVisualization */
    name: string
    description: string
    /* Methods of GstPlayer-1.0.GstPlayer.PlayerVisualization */
    copy(): PlayerVisualization
    free(): void
    static name: string
}
}
export default GstPlayer;