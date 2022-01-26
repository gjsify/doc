/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstPbutils-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstAudio from './GstAudio-1.0';

export namespace GstPbutils {

enum AudioVisualizerShader {
    NONE,
    FADE,
    FADE_AND_MOVE_UP,
    FADE_AND_MOVE_DOWN,
    FADE_AND_MOVE_LEFT,
    FADE_AND_MOVE_RIGHT,
    FADE_AND_MOVE_HORIZ_OUT,
    FADE_AND_MOVE_HORIZ_IN,
    FADE_AND_MOVE_VERT_OUT,
    FADE_AND_MOVE_VERT_IN,
}
enum DiscovererResult {
    OK,
    URI_INVALID,
    ERROR,
    TIMEOUT,
    BUSY,
    MISSING_PLUGINS,
}
enum InstallPluginsReturn {
    SUCCESS,
    NOT_FOUND,
    ERROR,
    PARTIAL_SUCCESS,
    USER_ABORT,
    CRASHED,
    INVALID,
    STARTED_OK,
    INTERNAL_FAILURE,
    HELPER_MISSING,
    INSTALL_IN_PROGRESS,
}
enum DiscovererSerializeFlags {
    BASIC,
    CAPS,
    TAGS,
    MISC,
    ALL,
}
enum PbUtilsCapsDescriptionFlags {
    CONTAINER,
    AUDIO,
    VIDEO,
    IMAGE,
    SUBTITLE,
    TAG,
    GENERIC,
}
const ENCODING_CATEGORY_CAPTURE: string
const ENCODING_CATEGORY_DEVICE: string
const ENCODING_CATEGORY_FILE_EXTENSION: string
const ENCODING_CATEGORY_ONLINE_SERVICE: string
const ENCODING_CATEGORY_STORAGE_EDITING: string
const PLUGINS_BASE_VERSION_MAJOR: number
const PLUGINS_BASE_VERSION_MICRO: number
const PLUGINS_BASE_VERSION_MINOR: number
const PLUGINS_BASE_VERSION_NANO: number
function codec_utils_aac_caps_set_level_and_profile(caps: Gst.Caps, audio_config: Uint8Array): boolean
function codec_utils_aac_get_channels(audio_config: Uint8Array): number
function codec_utils_aac_get_index_from_sample_rate(rate: number): number
function codec_utils_aac_get_level(audio_config: Uint8Array): string
function codec_utils_aac_get_profile(audio_config: Uint8Array): string
function codec_utils_aac_get_sample_rate(audio_config: Uint8Array): number
function codec_utils_aac_get_sample_rate_from_index(sr_idx: number): number
function codec_utils_caps_get_mime_codec(caps: Gst.Caps): string
function codec_utils_h264_caps_set_level_and_profile(caps: Gst.Caps, sps: Uint8Array): boolean
function codec_utils_h264_get_level(sps: Uint8Array): string
function codec_utils_h264_get_level_idc(level: string): number
function codec_utils_h264_get_profile(sps: Uint8Array): string
function codec_utils_h264_get_profile_flags_level(codec_data: Uint8Array): [ /* returnType */ boolean, /* profile */ number | null, /* flags */ number | null, /* level */ number | null ]
function codec_utils_h265_caps_set_level_tier_and_profile(caps: Gst.Caps, profile_tier_level: Uint8Array): boolean
function codec_utils_h265_get_level(profile_tier_level: Uint8Array): string
function codec_utils_h265_get_level_idc(level: string): number
function codec_utils_h265_get_profile(profile_tier_level: Uint8Array): string
function codec_utils_h265_get_tier(profile_tier_level: Uint8Array): string
function codec_utils_mpeg4video_caps_set_level_and_profile(caps: Gst.Caps, vis_obj_seq: Uint8Array): boolean
function codec_utils_mpeg4video_get_level(vis_obj_seq: Uint8Array): string
function codec_utils_mpeg4video_get_profile(vis_obj_seq: Uint8Array): string
function codec_utils_opus_create_caps(rate: number, channels: number, channel_mapping_family: number, stream_count: number, coupled_count: number, channel_mapping?: Uint8Array | null): Gst.Caps
function codec_utils_opus_create_caps_from_header(header: Gst.Buffer, comments?: Gst.Buffer | null): Gst.Caps
function codec_utils_opus_create_header(rate: number, channels: number, channel_mapping_family: number, stream_count: number, coupled_count: number, channel_mapping: Uint8Array | null, pre_skip: number, output_gain: number): Gst.Buffer
function codec_utils_opus_parse_caps(caps: Gst.Caps): [ /* returnType */ boolean, /* rate */ number | null, /* channels */ number | null, /* channel_mapping_family */ number | null, /* stream_count */ number | null, /* coupled_count */ number | null, /* channel_mapping */ Uint8Array | null ]
function codec_utils_opus_parse_header(header: Gst.Buffer): [ /* returnType */ boolean, /* rate */ number | null, /* channels */ number | null, /* channel_mapping_family */ number | null, /* stream_count */ number | null, /* coupled_count */ number | null, /* channel_mapping */ Uint8Array | null, /* pre_skip */ number | null, /* output_gain */ number | null ]
function encoding_list_all_targets(categoryname?: string | null): EncodingTarget[]
function encoding_list_available_categories(): string[]
function install_plugins_async(details: string[], ctx: InstallPluginsContext | null, func: InstallPluginsResultFunc): InstallPluginsReturn
function install_plugins_installation_in_progress(): boolean
function install_plugins_return_get_name(ret: InstallPluginsReturn): string
function install_plugins_supported(): boolean
function install_plugins_sync(details: string[], ctx?: InstallPluginsContext | null): InstallPluginsReturn
function is_missing_plugin_message(msg: Gst.Message): boolean
function missing_decoder_installer_detail_new(decode_caps: Gst.Caps): string
function missing_decoder_message_new(element: Gst.Element, decode_caps: Gst.Caps): Gst.Message
function missing_element_installer_detail_new(factory_name: string): string
function missing_element_message_new(element: Gst.Element, factory_name: string): Gst.Message
function missing_encoder_installer_detail_new(encode_caps: Gst.Caps): string
function missing_encoder_message_new(element: Gst.Element, encode_caps: Gst.Caps): Gst.Message
function missing_plugin_message_get_description(msg: Gst.Message): string
function missing_plugin_message_get_installer_detail(msg: Gst.Message): string
function missing_uri_sink_installer_detail_new(protocol: string): string
function missing_uri_sink_message_new(element: Gst.Element, protocol: string): Gst.Message
function missing_uri_source_installer_detail_new(protocol: string): string
function missing_uri_source_message_new(element: Gst.Element, protocol: string): Gst.Message
function pb_utils_add_codec_description_to_tag_list(taglist: Gst.TagList, codec_tag: string | null, caps: Gst.Caps): boolean
function pb_utils_get_caps_description_flags(caps: Gst.Caps): PbUtilsCapsDescriptionFlags
function pb_utils_get_codec_description(caps: Gst.Caps): string
function pb_utils_get_decoder_description(caps: Gst.Caps): string
function pb_utils_get_element_description(factory_name: string): string
function pb_utils_get_encoder_description(caps: Gst.Caps): string
function pb_utils_get_file_extension_from_caps(caps: Gst.Caps): string | null
function pb_utils_get_sink_description(protocol: string): string
function pb_utils_get_source_description(protocol: string): string
function pb_utils_init(): void
function plugins_base_version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
function plugins_base_version_string(): string
interface AudioVisualizerShaderFunc {
    (scope: AudioVisualizer, s: GstVideo.VideoFrame, d: GstVideo.VideoFrame): void
}
interface InstallPluginsResultFunc {
    (result: InstallPluginsReturn): void
}
interface AudioVisualizer_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstPbutils-1.0.GstPbutils.AudioVisualizer */
    shade_amount?: number
    shader?: AudioVisualizerShader
}
class AudioVisualizer {
    /* Properties of GstPbutils-1.0.GstPbutils.AudioVisualizer */
    shade_amount: number
    shader: AudioVisualizerShader
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: Gst.State
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly start_time: Gst.ClockTime
    readonly numpads: number
    readonly pads: Gst.Pad[]
    readonly numsrcpads: number
    readonly srcpads: Gst.Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Gst.Pad[]
    readonly pads_cookie: number
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: Gst.ElementCallAsyncFunc): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    get_base_time(): Gst.ClockTime
    get_bus(): Gst.Bus | null
    get_clock(): Gst.Clock | null
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    get_context(context_type: string): Gst.Context | null
    get_context_unlocked(context_type: string): Gst.Context | null
    get_contexts(): Gst.Context[]
    get_current_clock_time(): Gst.ClockTime
    get_current_running_time(): Gst.ClockTime
    get_factory(): Gst.ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): Gst.PadTemplate | null
    get_pad_template_list(): Gst.PadTemplate[]
    get_request_pad(name: string): Gst.Pad | null
    get_start_time(): Gst.ClockTime
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    get_static_pad(name: string): Gst.Pad | null
    is_locked_state(): boolean
    iterate_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    lost_state(): void
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    no_more_pads(): void
    post_message(message: Gst.Message): boolean
    provide_clock(): Gst.Clock | null
    query(query: Gst.Query): boolean
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Gst.Pad): void
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    request_pad_simple(name: string): Gst.Pad | null
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    send_event(event: Gst.Event): boolean
    set_base_time(time: Gst.ClockTime): void
    set_bus(bus?: Gst.Bus | null): void
    set_clock(clock?: Gst.Clock | null): boolean
    set_context(context: Gst.Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: Gst.ClockTime): void
    set_state(state: Gst.State): Gst.StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Gst.Element): void
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
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
    /* Virtual methods of GstPbutils-1.0.GstPbutils.AudioVisualizer */
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_render(audio: Gst.Buffer, video: GstVideo.VideoFrame): boolean
    vfunc_setup(): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    vfunc_post_message(message: Gst.Message): boolean
    vfunc_provide_clock(): Gst.Clock | null
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_set_bus(bus?: Gst.Bus | null): void
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    vfunc_set_context(context: Gst.Context): void
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
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
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: AudioVisualizer) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: AudioVisualizer) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: AudioVisualizer, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: AudioVisualizer, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: AudioVisualizer, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: AudioVisualizer, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AudioVisualizer, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AudioVisualizer, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::shade-amount", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shade-amount", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shader", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shader", callback: (($obj: AudioVisualizer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AudioVisualizer_ConstructProps)
    _init (config?: AudioVisualizer_ConstructProps): void
    static $gtype: GObject.Type
}
interface Discoverer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstPbutils-1.0.GstPbutils.Discoverer */
    timeout?: number
    use_cache?: boolean
}
class Discoverer {
    /* Properties of GstPbutils-1.0.GstPbutils.Discoverer */
    timeout: number
    use_cache: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.Discoverer */
    discover_uri(uri: string): DiscovererInfo
    discover_uri_async(uri: string): boolean
    start(): void
    stop(): void
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
    /* Virtual methods of GstPbutils-1.0.GstPbutils.Discoverer */
    vfunc_discovered(info: DiscovererInfo, err: GLib.Error): void
    vfunc_finished(): void
    vfunc_source_setup(source: Gst.Element): void
    vfunc_starting(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstPbutils-1.0.GstPbutils.Discoverer */
    connect(sigName: "discovered", callback: (($obj: Discoverer, info: DiscovererInfo, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "discovered", callback: (($obj: Discoverer, info: DiscovererInfo, error?: GLib.Error | null) => void)): number
    emit(sigName: "discovered", info: DiscovererInfo, error?: GLib.Error | null): void
    connect(sigName: "finished", callback: (($obj: Discoverer) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Discoverer) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "source-setup", callback: (($obj: Discoverer, source: Gst.Element) => void)): number
    connect_after(sigName: "source-setup", callback: (($obj: Discoverer, source: Gst.Element) => void)): number
    emit(sigName: "source-setup", source: Gst.Element): void
    connect(sigName: "starting", callback: (($obj: Discoverer) => void)): number
    connect_after(sigName: "starting", callback: (($obj: Discoverer) => void)): number
    emit(sigName: "starting"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::timeout", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::use-cache", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-cache", callback: (($obj: Discoverer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Discoverer_ConstructProps)
    _init (config?: Discoverer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(timeout: Gst.ClockTime): Discoverer
    static $gtype: GObject.Type
}
interface DiscovererAudioInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
class DiscovererAudioInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererAudioInfo */
    get_bitrate(): number
    get_channel_mask(): number
    get_channels(): number
    get_depth(): number
    get_language(): string
    get_max_bitrate(): number
    get_sample_rate(): number
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    get_caps(): Gst.Caps
    get_misc(): Gst.Structure
    get_next(): DiscovererStreamInfo
    get_previous(): DiscovererStreamInfo
    get_stream_id(): string
    get_stream_number(): number
    get_stream_type_nick(): string
    get_tags(): Gst.TagList
    get_toc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererAudioInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererAudioInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiscovererAudioInfo_ConstructProps)
    _init (config?: DiscovererAudioInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DiscovererContainerInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
class DiscovererContainerInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererContainerInfo */
    get_streams(): DiscovererStreamInfo[]
    get_tags(): Gst.TagList
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    get_caps(): Gst.Caps
    get_misc(): Gst.Structure
    get_next(): DiscovererStreamInfo
    get_previous(): DiscovererStreamInfo
    get_stream_id(): string
    get_stream_number(): number
    get_stream_type_nick(): string
    get_toc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererContainerInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererContainerInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiscovererContainerInfo_ConstructProps)
    _init (config?: DiscovererContainerInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DiscovererInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class DiscovererInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererInfo */
    copy(): DiscovererInfo
    get_audio_streams(): DiscovererStreamInfo[]
    get_container_streams(): DiscovererStreamInfo[]
    get_duration(): Gst.ClockTime
    get_live(): boolean
    get_misc(): Gst.Structure
    get_missing_elements_installer_details(): string[]
    get_result(): DiscovererResult
    get_seekable(): boolean
    get_stream_info(): DiscovererStreamInfo
    get_stream_list(): DiscovererStreamInfo[]
    get_streams(streamtype: GObject.Type): DiscovererStreamInfo[]
    get_subtitle_streams(): DiscovererStreamInfo[]
    get_tags(): Gst.TagList
    get_toc(): Gst.Toc
    get_uri(): string
    get_video_streams(): DiscovererStreamInfo[]
    to_variant(flags: DiscovererSerializeFlags): GLib.Variant
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
    connect(sigName: "notify", callback: (($obj: DiscovererInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiscovererInfo_ConstructProps)
    _init (config?: DiscovererInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_variant(variant: GLib.Variant): DiscovererInfo
    static $gtype: GObject.Type
}
interface DiscovererStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class DiscovererStreamInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    get_caps(): Gst.Caps
    get_misc(): Gst.Structure
    get_next(): DiscovererStreamInfo
    get_previous(): DiscovererStreamInfo
    get_stream_id(): string
    get_stream_number(): number
    get_stream_type_nick(): string
    get_tags(): Gst.TagList
    get_toc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererStreamInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererStreamInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiscovererStreamInfo_ConstructProps)
    _init (config?: DiscovererStreamInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static list_free(infos: DiscovererStreamInfo[]): void
    static $gtype: GObject.Type
}
interface DiscovererSubtitleInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
class DiscovererSubtitleInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererSubtitleInfo */
    get_language(): string
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    get_caps(): Gst.Caps
    get_misc(): Gst.Structure
    get_next(): DiscovererStreamInfo
    get_previous(): DiscovererStreamInfo
    get_stream_id(): string
    get_stream_number(): number
    get_stream_type_nick(): string
    get_tags(): Gst.TagList
    get_toc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererSubtitleInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererSubtitleInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiscovererSubtitleInfo_ConstructProps)
    _init (config?: DiscovererSubtitleInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface DiscovererVideoInfo_ConstructProps extends DiscovererStreamInfo_ConstructProps {
}
class DiscovererVideoInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererVideoInfo */
    get_bitrate(): number
    get_depth(): number
    get_framerate_denom(): number
    get_framerate_num(): number
    get_height(): number
    get_max_bitrate(): number
    get_par_denom(): number
    get_par_num(): number
    get_width(): number
    is_image(): boolean
    is_interlaced(): boolean
    /* Methods of GstPbutils-1.0.GstPbutils.DiscovererStreamInfo */
    get_caps(): Gst.Caps
    get_misc(): Gst.Structure
    get_next(): DiscovererStreamInfo
    get_previous(): DiscovererStreamInfo
    get_stream_id(): string
    get_stream_number(): number
    get_stream_type_nick(): string
    get_tags(): Gst.TagList
    get_toc(): Gst.Toc
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
    connect(sigName: "notify", callback: (($obj: DiscovererVideoInfo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DiscovererVideoInfo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DiscovererVideoInfo_ConstructProps)
    _init (config?: DiscovererVideoInfo_ConstructProps): void
    static $gtype: GObject.Type
}
interface EncodingAudioProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
class EncodingAudioProfile {
    /* Properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    element_properties: Gst.Structure
    restriction_caps: Gst.Caps
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    get_allow_dynamic_output(): boolean
    get_description(): string
    get_element_properties(): Gst.Structure | null
    get_file_extension(): string
    get_format(): Gst.Caps
    get_input_caps(): Gst.Caps
    get_name(): string
    get_presence(): number
    get_preset(): string
    get_preset_name(): string
    get_restriction(): Gst.Caps
    get_single_segment(): boolean
    get_type_nick(): string
    is_enabled(): boolean
    is_equal(b: EncodingProfile): boolean
    set_allow_dynamic_output(allow_dynamic_output: boolean): void
    set_description(description?: string | null): void
    set_element_properties(element_properties: Gst.Structure): void
    set_enabled(enabled: boolean): void
    set_format(format: Gst.Caps): void
    set_name(name?: string | null): void
    set_presence(presence: number): void
    set_preset(preset?: string | null): void
    set_preset_name(preset_name?: string | null): void
    set_restriction(restriction?: Gst.Caps | null): void
    set_single_segment(single_segment: boolean): void
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
    connect(sigName: "notify", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element-properties", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restriction-caps", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: EncodingAudioProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EncodingAudioProfile_ConstructProps)
    _init (config?: EncodingAudioProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingAudioProfile
    static $gtype: GObject.Type
}
interface EncodingContainerProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
class EncodingContainerProfile {
    /* Properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    element_properties: Gst.Structure
    restriction_caps: Gst.Caps
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingContainerProfile */
    add_profile(profile: EncodingProfile): boolean
    contains_profile(profile: EncodingProfile): boolean
    get_profiles(): EncodingProfile[]
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    get_allow_dynamic_output(): boolean
    get_description(): string
    get_element_properties(): Gst.Structure | null
    get_file_extension(): string
    get_format(): Gst.Caps
    get_input_caps(): Gst.Caps
    get_name(): string
    get_presence(): number
    get_preset(): string
    get_preset_name(): string
    get_restriction(): Gst.Caps
    get_single_segment(): boolean
    get_type_nick(): string
    is_enabled(): boolean
    is_equal(b: EncodingProfile): boolean
    set_allow_dynamic_output(allow_dynamic_output: boolean): void
    set_description(description?: string | null): void
    set_element_properties(element_properties: Gst.Structure): void
    set_enabled(enabled: boolean): void
    set_format(format: Gst.Caps): void
    set_name(name?: string | null): void
    set_presence(presence: number): void
    set_preset(preset?: string | null): void
    set_preset_name(preset_name?: string | null): void
    set_restriction(restriction?: Gst.Caps | null): void
    set_single_segment(single_segment: boolean): void
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
    connect(sigName: "notify", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element-properties", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restriction-caps", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: EncodingContainerProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EncodingContainerProfile_ConstructProps)
    _init (config?: EncodingContainerProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, description: string | null, format: Gst.Caps, preset?: string | null): EncodingContainerProfile
    static $gtype: GObject.Type
}
interface EncodingProfile_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    element_properties?: Gst.Structure
    restriction_caps?: Gst.Caps
}
class EncodingProfile {
    /* Properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    element_properties: Gst.Structure
    restriction_caps: Gst.Caps
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    get_allow_dynamic_output(): boolean
    get_description(): string
    get_element_properties(): Gst.Structure | null
    get_file_extension(): string
    get_format(): Gst.Caps
    get_input_caps(): Gst.Caps
    get_name(): string
    get_presence(): number
    get_preset(): string
    get_preset_name(): string
    get_restriction(): Gst.Caps
    get_single_segment(): boolean
    get_type_nick(): string
    is_enabled(): boolean
    is_equal(b: EncodingProfile): boolean
    set_allow_dynamic_output(allow_dynamic_output: boolean): void
    set_description(description?: string | null): void
    set_element_properties(element_properties: Gst.Structure): void
    set_enabled(enabled: boolean): void
    set_format(format: Gst.Caps): void
    set_name(name?: string | null): void
    set_presence(presence: number): void
    set_preset(preset?: string | null): void
    set_preset_name(preset_name?: string | null): void
    set_restriction(restriction?: Gst.Caps | null): void
    set_single_segment(single_segment: boolean): void
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
    connect(sigName: "notify", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element-properties", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restriction-caps", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: EncodingProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EncodingProfile_ConstructProps)
    _init (config?: EncodingProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(targetname: string, profilename?: string | null, category?: string | null): EncodingProfile
    static from_discoverer(info: DiscovererInfo): EncodingProfile
    static $gtype: GObject.Type
}
interface EncodingTarget_ConstructProps extends GObject.Object_ConstructProps {
}
class EncodingTarget {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingTarget */
    add_profile(profile: EncodingProfile): boolean
    get_category(): string
    get_description(): string
    get_name(): string
    get_path(): string
    get_profile(name: string): EncodingProfile
    get_profiles(): EncodingProfile[]
    save(): boolean
    save_to_file(filepath: string): boolean
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
    connect(sigName: "notify", callback: (($obj: EncodingTarget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingTarget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EncodingTarget_ConstructProps)
    _init (config?: EncodingTarget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, category: string, description: string, profiles: EncodingProfile[]): EncodingTarget
    static load(name: string, category?: string | null): EncodingTarget
    static load_from_file(filepath: string): EncodingTarget
    static $gtype: GObject.Type
}
interface EncodingVideoProfile_ConstructProps extends EncodingProfile_ConstructProps {
}
class EncodingVideoProfile {
    /* Properties of GstPbutils-1.0.GstPbutils.EncodingProfile */
    element_properties: Gst.Structure
    restriction_caps: Gst.Caps
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingVideoProfile */
    get_pass(): number
    get_variableframerate(): boolean
    set_pass(pass: number): void
    set_variableframerate(variableframerate: boolean): void
    /* Methods of GstPbutils-1.0.GstPbutils.EncodingProfile */
    copy(): EncodingProfile
    get_allow_dynamic_output(): boolean
    get_description(): string
    get_element_properties(): Gst.Structure | null
    get_file_extension(): string
    get_format(): Gst.Caps
    get_input_caps(): Gst.Caps
    get_name(): string
    get_presence(): number
    get_preset(): string
    get_preset_name(): string
    get_restriction(): Gst.Caps
    get_single_segment(): boolean
    get_type_nick(): string
    is_enabled(): boolean
    is_equal(b: EncodingProfile): boolean
    set_allow_dynamic_output(allow_dynamic_output: boolean): void
    set_description(description?: string | null): void
    set_element_properties(element_properties: Gst.Structure): void
    set_enabled(enabled: boolean): void
    set_format(format: Gst.Caps): void
    set_name(name?: string | null): void
    set_presence(presence: number): void
    set_preset(preset?: string | null): void
    set_preset_name(preset_name?: string | null): void
    set_restriction(restriction?: Gst.Caps | null): void
    set_single_segment(single_segment: boolean): void
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
    connect(sigName: "notify", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element-properties", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-properties", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::restriction-caps", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::restriction-caps", callback: (($obj: EncodingVideoProfile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EncodingVideoProfile_ConstructProps)
    _init (config?: EncodingVideoProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(format: Gst.Caps, preset: string | null, restriction: Gst.Caps | null, presence: number): EncodingVideoProfile
    static $gtype: GObject.Type
}
abstract class AudioVisualizerClass {
    /* Fields of GstPbutils-1.0.GstPbutils.AudioVisualizerClass */
    readonly setup: (scope: AudioVisualizer) => boolean
    readonly render: (scope: AudioVisualizer, audio: Gst.Buffer, video: GstVideo.VideoFrame) => boolean
    readonly decide_allocation: (scope: AudioVisualizer, query: Gst.Query) => boolean
    static name: string
}
class AudioVisualizerPrivate {
    static name: string
}
abstract class DiscovererClass {
    /* Fields of GstPbutils-1.0.GstPbutils.DiscovererClass */
    readonly parentclass: GObject.ObjectClass
    readonly finished: (discoverer: Discoverer) => void
    readonly starting: (discoverer: Discoverer) => void
    readonly discovered: (discoverer: Discoverer, info: DiscovererInfo, err: GLib.Error) => void
    readonly source_setup: (discoverer: Discoverer, source: Gst.Element) => void
    readonly _reserved: object[]
    static name: string
}
class DiscovererPrivate {
    static name: string
}
abstract class EncodingAudioProfileClass {
    static name: string
}
abstract class EncodingContainerProfileClass {
    static name: string
}
abstract class EncodingProfileClass {
    static name: string
}
abstract class EncodingVideoProfileClass {
    static name: string
}
class InstallPluginsContext {
    /* Methods of GstPbutils-1.0.GstPbutils.InstallPluginsContext */
    copy(): InstallPluginsContext
    free(): void
    set_confirm_search(confirm_search: boolean): void
    set_desktop_id(desktop_id: string): void
    set_startup_notification_id(startup_id: string): void
    set_xid(xid: number): void
    static name: string
    static new(): InstallPluginsContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): InstallPluginsContext
}
    type DiscovererAudioInfoClass = GObject.ObjectClass
    type DiscovererContainerInfoClass = GObject.ObjectClass
    type DiscovererInfoClass = GObject.ObjectClass
    type DiscovererStreamInfoClass = GObject.ObjectClass
    type DiscovererSubtitleInfoClass = GObject.ObjectClass
    type DiscovererVideoInfoClass = GObject.ObjectClass
    type EncodingTargetClass = GObject.ObjectClass
}
export default GstPbutils;