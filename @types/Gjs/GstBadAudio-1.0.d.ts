/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstBadAudio-1.0
 */

import type * as Gjs from './Gjs';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstAudio from './GstAudio-1.0';

export namespace GstBadAudio {

enum NonstreamAudioOutputMode {
    LOOPING,
    STEADY,
}
enum NonstreamAudioSubsongMode {
    SINGLE,
    ALL,
    DECODER_DEFAULT,
}
const NONSTREAM_AUDIO_DECODER_SINK_NAME: string
const NONSTREAM_AUDIO_DECODER_SRC_NAME: string
interface NonstreamAudioDecoder_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder */
    current_subsong?: number
    num_loops?: number
}
class NonstreamAudioDecoder {
    /* Properties of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder */
    current_subsong: number
    num_loops: number
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
    /* Methods of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder */
    allocate_output_buffer(size: number): Gst.Buffer
    get_downstream_info(format: GstAudio.AudioFormat, sample_rate: number, num_channels: number): void
    handle_loop(new_position: Gst.ClockTime): void
    set_output_format(audio_info: GstAudio.AudioInfo): boolean
    set_output_format_simple(sample_rate: number, sample_format: GstAudio.AudioFormat, num_channels: number): boolean
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
    /* Virtual methods of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder */
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_decode(buffer: Gst.Buffer, num_samples: number): boolean
    vfunc_get_current_subsong(): number
    vfunc_get_main_tags(): Gst.TagList
    vfunc_get_num_loops(): number
    vfunc_get_num_subsongs(): number
    vfunc_get_subsong_duration(subsong: number): Gst.ClockTime
    vfunc_get_subsong_tags(subsong: number): Gst.TagList
    vfunc_get_supported_output_modes(): number
    vfunc_load_from_buffer(source_data: Gst.Buffer, initial_subsong: number, initial_subsong_mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime, initial_output_mode: NonstreamAudioOutputMode, initial_num_loops: number): boolean
    vfunc_load_from_custom(initial_subsong: number, initial_subsong_mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime, initial_output_mode: NonstreamAudioOutputMode, initial_num_loops: number): boolean
    vfunc_negotiate(): boolean
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_seek(new_position: Gst.ClockTime): boolean
    vfunc_set_current_subsong(subsong: number, initial_position: Gst.ClockTime): boolean
    vfunc_set_num_loops(num_loops: number): boolean
    vfunc_set_output_mode(mode: NonstreamAudioOutputMode, current_position: Gst.ClockTime): boolean
    vfunc_set_subsong_mode(mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime): boolean
    vfunc_tell(): Gst.ClockTime
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
    connect(sigName: "no-more-pads", callback: (($obj: NonstreamAudioDecoder) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: NonstreamAudioDecoder) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: NonstreamAudioDecoder, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: NonstreamAudioDecoder, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: NonstreamAudioDecoder, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: NonstreamAudioDecoder, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: NonstreamAudioDecoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: NonstreamAudioDecoder, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-subsong", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-subsong", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-loops", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-loops", callback: (($obj: NonstreamAudioDecoder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NonstreamAudioDecoder_ConstructProps)
    _init (config?: NonstreamAudioDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface PlanarAudioAdapter_ConstructProps extends GObject.Object_ConstructProps {
}
class PlanarAudioAdapter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstBadAudio-1.0.GstBadAudio.PlanarAudioAdapter */
    available(): number
    clear(): void
    configure(info: GstAudio.AudioInfo): void
    distance_from_discont(): number
    dts_at_discont(): Gst.ClockTime
    flush(to_flush: number): void
    get_buffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null
    offset_at_discont(): number
    prev_dts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prev_offset(): [ /* returnType */ number, /* distance */ number | null ]
    prev_pts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    pts_at_discont(): Gst.ClockTime
    push(buf: Gst.Buffer): void
    take_buffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null
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
    connect(sigName: "notify", callback: (($obj: PlanarAudioAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlanarAudioAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlanarAudioAdapter_ConstructProps)
    _init (config?: PlanarAudioAdapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PlanarAudioAdapter
    static $gtype: GObject.Type
}
abstract class NonstreamAudioDecoderClass {
    /* Fields of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoderClass */
    readonly element_class: Gst.ElementClass
    readonly loads_from_sinkpad: boolean
    readonly seek: (dec: NonstreamAudioDecoder, new_position: Gst.ClockTime) => boolean
    readonly tell: (dec: NonstreamAudioDecoder) => Gst.ClockTime
    readonly load_from_buffer: (dec: NonstreamAudioDecoder, source_data: Gst.Buffer, initial_subsong: number, initial_subsong_mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime, initial_output_mode: NonstreamAudioOutputMode, initial_num_loops: number) => boolean
    readonly load_from_custom: (dec: NonstreamAudioDecoder, initial_subsong: number, initial_subsong_mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime, initial_output_mode: NonstreamAudioOutputMode, initial_num_loops: number) => boolean
    readonly get_main_tags: (dec: NonstreamAudioDecoder) => Gst.TagList
    readonly set_current_subsong: (dec: NonstreamAudioDecoder, subsong: number, initial_position: Gst.ClockTime) => boolean
    readonly get_current_subsong: (dec: NonstreamAudioDecoder) => number
    readonly get_num_subsongs: (dec: NonstreamAudioDecoder) => number
    readonly get_subsong_duration: (dec: NonstreamAudioDecoder, subsong: number) => Gst.ClockTime
    readonly get_subsong_tags: (dec: NonstreamAudioDecoder, subsong: number) => Gst.TagList
    readonly set_subsong_mode: (dec: NonstreamAudioDecoder, mode: NonstreamAudioSubsongMode, initial_position: Gst.ClockTime) => boolean
    readonly set_num_loops: (dec: NonstreamAudioDecoder, num_loops: number) => boolean
    readonly get_num_loops: (dec: NonstreamAudioDecoder) => number
    readonly get_supported_output_modes: (dec: NonstreamAudioDecoder) => number
    readonly set_output_mode: (dec: NonstreamAudioDecoder, mode: NonstreamAudioOutputMode, current_position: Gst.ClockTime) => boolean
    readonly decode: (dec: NonstreamAudioDecoder, buffer: Gst.Buffer, num_samples: number) => boolean
    readonly negotiate: (dec: NonstreamAudioDecoder) => boolean
    readonly decide_allocation: (dec: NonstreamAudioDecoder, query: Gst.Query) => boolean
    readonly propose_allocation: (dec: NonstreamAudioDecoder, query: Gst.Query) => boolean
    static name: string
}
abstract class PlanarAudioAdapterClass {
    static name: string
}
}
export default GstBadAudio;