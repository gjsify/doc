/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstBase-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstBase {

enum AggregatorStartTimeSelection {
    ZERO,
    FIRST,
    SET,
}
enum BaseParseFrameFlags {
    NONE,
    NEW_FRAME,
    NO_FRAME,
    CLIP,
    DROP,
    QUEUE,
}
enum BaseSrcFlags {
    STARTING,
    STARTED,
    LAST,
}
enum CollectPadsStateFlags {
    EOS,
    FLUSHING,
    NEW_SEGMENT,
    WAITING,
    LOCKED,
}
const BASE_PARSE_FLAG_DRAINING: number
const BASE_PARSE_FLAG_LOST_SYNC: number
const BASE_TRANSFORM_SINK_NAME: string
const BASE_TRANSFORM_SRC_NAME: string
function type_find_helper(src: Gst.Pad, size: number): Gst.Caps | null
function type_find_helper_for_buffer(obj: Gst.Object | null, buf: Gst.Buffer): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function type_find_helper_for_buffer_with_extension(obj: Gst.Object | null, buf: Gst.Buffer, extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function type_find_helper_for_data(obj: Gst.Object | null, data: Uint8Array): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function type_find_helper_for_data_with_extension(obj: Gst.Object | null, data: Uint8Array, extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function type_find_helper_for_extension(obj: Gst.Object | null, extension: string): Gst.Caps | null
function type_find_helper_get_range(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension?: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability | null ]
function type_find_helper_get_range_full(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension?: string | null): [ /* returnType */ Gst.FlowReturn, /* caps */ Gst.Caps, /* prob */ Gst.TypeFindProbability | null ]
interface CollectDataDestroyNotify {
    (data: CollectData): void
}
interface CollectPadsBufferFunction {
    (pads: CollectPads, data: CollectData, buffer: Gst.Buffer): Gst.FlowReturn
}
interface CollectPadsClipFunction {
    (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer): Gst.FlowReturn
}
interface CollectPadsCompareFunction {
    (pads: CollectPads, data1: CollectData, timestamp1: Gst.ClockTime, data2: CollectData, timestamp2: Gst.ClockTime): number
}
interface CollectPadsEventFunction {
    (pads: CollectPads, pad: CollectData, event: Gst.Event): boolean
}
interface CollectPadsFlushFunction {
    (pads: CollectPads): void
}
interface CollectPadsFunction {
    (pads: CollectPads): Gst.FlowReturn
}
interface CollectPadsQueryFunction {
    (pads: CollectPads, pad: CollectData, query: Gst.Query): boolean
}
interface DataQueueEmptyCallback {
    (queue: DataQueue, checkdata?: object | null): void
}
interface DataQueueFullCallback {
    (queue: DataQueue, checkdata?: object | null): void
}
interface TypeFindHelperGetRangeFunction {
    (obj: Gst.Object, parent: Gst.Object | null, offset: number, length: number): Gst.FlowReturn
}
interface Adapter_ConstructProps extends GObject.Object_ConstructProps {
}
class Adapter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.Adapter */
    available(): number
    available_fast(): number
    clear(): void
    copy(offset: number, size: number): GLib.Bytes
    distance_from_discont(): number
    dts_at_discont(): Gst.ClockTime
    flush(flush: number): void
    get_buffer(nbytes: number): Gst.Buffer | null
    get_buffer_fast(nbytes: number): Gst.Buffer | null
    get_buffer_list(nbytes: number): Gst.BufferList | null
    get_list(nbytes: number): Gst.Buffer[] | null
    map(): Uint8Array | null
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number | null ]
    offset_at_discont(): number
    prev_dts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prev_dts_at_offset(offset: number): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prev_offset(): [ /* returnType */ number, /* distance */ number | null ]
    prev_pts(): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    prev_pts_at_offset(offset: number): [ /* returnType */ Gst.ClockTime, /* distance */ number | null ]
    pts_at_discont(): Gst.ClockTime
    push(buf: Gst.Buffer): void
    take(): Uint8Array | null
    take_buffer(nbytes: number): Gst.Buffer | null
    take_buffer_fast(nbytes: number): Gst.Buffer | null
    take_buffer_list(nbytes: number): Gst.BufferList | null
    take_list(nbytes: number): Gst.Buffer[] | null
    unmap(): void
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
    connect(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Adapter_ConstructProps)
    _init (config?: Adapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Adapter
    static $gtype: GObject.Type
}
interface Aggregator_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.Aggregator */
    emit_signals?: boolean
    latency?: number
    min_upstream_latency?: number
    start_time?: number
    start_time_selection?: AggregatorStartTimeSelection
}
class Aggregator {
    /* Properties of GstBase-1.0.GstBase.Aggregator */
    emit_signals: boolean
    latency: number
    min_upstream_latency: number
    start_time: number
    start_time_selection: AggregatorStartTimeSelection
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
    /* Methods of GstBase-1.0.GstBase.Aggregator */
    finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    get_ignore_inactive_pads(): boolean
    get_latency(): Gst.ClockTime
    negotiate(): boolean
    peek_next_sample(pad: AggregatorPad): Gst.Sample | null
    selected_samples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    set_ignore_inactive_pads(ignore: boolean): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_src_caps(caps: Gst.Caps): void
    simple_get_next_time(): Gst.ClockTime
    update_segment(segment: Gst.Segment): void
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
    /* Virtual methods of GstBase-1.0.GstBase.Aggregator */
    vfunc_aggregate(timeout: boolean): Gst.FlowReturn
    vfunc_clip(aggregator_pad: AggregatorPad, buf: Gst.Buffer): Gst.Buffer
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn
    vfunc_fixate_src_caps(caps: Gst.Caps): Gst.Caps
    vfunc_flush(): Gst.FlowReturn
    vfunc_get_next_time(): Gst.ClockTime
    vfunc_negotiate(): boolean
    vfunc_negotiated_src_caps(caps: Gst.Caps): boolean
    vfunc_peek_next_sample(aggregator_pad: AggregatorPad): Gst.Sample | null
    vfunc_propose_allocation(pad: AggregatorPad, decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_sink_event(aggregator_pad: AggregatorPad, event: Gst.Event): boolean
    vfunc_sink_event_pre_queue(aggregator_pad: AggregatorPad, event: Gst.Event): Gst.FlowReturn
    vfunc_sink_query(aggregator_pad: AggregatorPad, query: Gst.Query): boolean
    vfunc_sink_query_pre_queue(aggregator_pad: AggregatorPad, query: Gst.Query): boolean
    vfunc_src_activate(mode: Gst.PadMode, active: boolean): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_update_src_caps(caps: Gst.Caps): [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps | null ]
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
    /* Signals of GstBase-1.0.GstBase.Aggregator */
    connect(sigName: "samples-selected", callback: (($obj: Aggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    connect_after(sigName: "samples-selected", callback: (($obj: Aggregator, segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Aggregator) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Aggregator) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Aggregator, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Aggregator, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Aggregator, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Aggregator, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Aggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Aggregator, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::emit-signals", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-upstream-latency", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time-selection", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: (($obj: Aggregator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Aggregator_ConstructProps)
    _init (config?: Aggregator_ConstructProps): void
    static $gtype: GObject.Type
}
interface AggregatorPad_ConstructProps extends Gst.Pad_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.AggregatorPad */
    emit_signals?: boolean
}
class AggregatorPad {
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    emit_signals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    offset: number
    template: Gst.PadTemplate
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    readonly element_private: object
    readonly padtemplate: Gst.PadTemplate
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    drop_buffer(): boolean
    has_buffer(): boolean
    is_eos(): boolean
    is_inactive(): boolean
    peek_buffer(): Gst.Buffer | null
    pop_buffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: Gst.PadMode, active: boolean): boolean
    add_probe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    can_link(sinkpad: Gst.Pad): boolean
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    chain_list(list: Gst.BufferList): Gst.FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Gst.Element, stream_id?: string | null): string
    event_default(parent: Gst.Object | null, event: Gst.Event): boolean
    forward(forward: Gst.PadForwardFunction): boolean
    get_allowed_caps(): Gst.Caps | null
    get_current_caps(): Gst.Caps | null
    get_direction(): Gst.PadDirection
    get_element_private(): object | null
    get_last_flow_return(): Gst.FlowReturn
    get_offset(): number
    get_pad_template(): Gst.PadTemplate | null
    get_pad_template_caps(): Gst.Caps
    get_parent_element(): Gst.Element | null
    get_peer(): Gst.Pad | null
    get_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    get_single_internal_link(): Gst.Pad | null
    get_sticky_event(event_type: Gst.EventType, idx: number): Gst.Event | null
    get_stream(): Gst.Stream | null
    get_stream_id(): string | null
    get_task_state(): Gst.TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Gst.Iterator | null
    iterate_internal_links_default(parent?: Gst.Object | null): Gst.Iterator | null
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    link_full(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    link_maybe_ghosting(sink: Gst.Pad): boolean
    link_maybe_ghosting_full(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Gst.Query): boolean
    peer_query_accept_caps(caps: Gst.Caps): boolean
    peer_query_caps(filter?: Gst.Caps | null): Gst.Caps
    peer_query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Gst.Query): boolean
    proxy_query_caps(query: Gst.Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_event(event: Gst.Event): boolean
    push_list(list: Gst.BufferList): Gst.FlowReturn
    query(query: Gst.Query): boolean
    query_accept_caps(caps: Gst.Caps): boolean
    query_caps(filter?: Gst.Caps | null): Gst.Caps
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Gst.Object | null, query: Gst.Query): boolean
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Gst.Event): boolean
    set_activate_function_full(activate: Gst.PadActivateFunction): void
    set_activatemode_function_full(activatemode: Gst.PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: Gst.PadChainFunction): void
    set_chain_list_function_full(chainlist: Gst.PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: Gst.PadEventFullFunction): void
    set_event_function_full(event: Gst.PadEventFunction): void
    set_getrange_function_full(get: Gst.PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: Gst.PadIterIntLinkFunction): void
    set_link_function_full(link: Gst.PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: Gst.PadQueryFunction): void
    set_unlink_function_full(unlink: Gst.PadUnlinkFunction): void
    start_task(func: Gst.TaskFunction): boolean
    sticky_events_foreach(foreach_func: Gst.PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Gst.Event): Gst.FlowReturn
    unlink(sinkpad: Gst.Pad): boolean
    use_fixed_caps(): void
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
    /* Virtual methods of GstBase-1.0.GstBase.AggregatorPad */
    vfunc_flush(aggregator: Aggregator): Gst.FlowReturn
    vfunc_skip_buffer(aggregator: Aggregator, buffer: Gst.Buffer): boolean
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Gst.Pad): void
    vfunc_unlinked(peer: Gst.Pad): void
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
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: (($obj: AggregatorPad, object: Gst.Buffer) => void)): number
    connect_after(sigName: "buffer-consumed", callback: (($obj: AggregatorPad, object: Gst.Buffer) => void)): number
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: AggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: AggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "linked", peer: Gst.Pad): void
    connect(sigName: "unlinked", callback: (($obj: AggregatorPad, peer: Gst.Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: AggregatorPad, peer: Gst.Pad) => void)): number
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: AggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: AggregatorPad, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::emit-signals", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::caps", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: AggregatorPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AggregatorPad_ConstructProps)
    _init (config?: AggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseParse_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.BaseParse */
    disable_passthrough?: boolean
}
class BaseParse {
    /* Properties of GstBase-1.0.GstBase.BaseParse */
    disable_passthrough: boolean
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
    /* Methods of GstBase-1.0.GstBase.BaseParse */
    add_index_entry(offset: number, ts: Gst.ClockTime, key: boolean, force: boolean): boolean
    convert_default(src_format: Gst.Format, src_value: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_value */ number ]
    drain(): void
    finish_frame(frame: BaseParseFrame, size: number): Gst.FlowReturn
    merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    push_frame(frame: BaseParseFrame): Gst.FlowReturn
    set_average_bitrate(bitrate: number): void
    set_duration(fmt: Gst.Format, duration: number, interval: number): void
    set_frame_rate(fps_num: number, fps_den: number, lead_in: number, lead_out: number): void
    set_has_timing_info(has_timing: boolean): void
    set_infer_ts(infer_ts: boolean): void
    set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void
    set_min_frame_size(min_size: number): void
    set_passthrough(passthrough: boolean): void
    set_pts_interpolation(pts_interpolate: boolean): void
    set_syncable(syncable: boolean): void
    set_ts_at_offset(offset: number): void
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
    /* Virtual methods of GstBase-1.0.GstBase.BaseParse */
    vfunc_convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format, dest_value: number): boolean
    vfunc_detect(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_get_sink_caps(filter: Gst.Caps): Gst.Caps
    vfunc_handle_frame(frame: BaseParseFrame): [ /* returnType */ Gst.FlowReturn, /* skipsize */ number ]
    vfunc_pre_push_frame(frame: BaseParseFrame): Gst.FlowReturn
    vfunc_set_sink_caps(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_sink_query(query: Gst.Query): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_src_query(query: Gst.Query): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: BaseParse) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseParse) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseParse, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseParse, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseParse, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseParse, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseParse, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseParse, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::disable-passthrough", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-passthrough", callback: (($obj: BaseParse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseParse_ConstructProps)
    _init (config?: BaseParse_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseSink_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.BaseSink */
    async?: boolean
    blocksize?: number
    enable_last_sample?: boolean
    max_bitrate?: number
    max_lateness?: number
    processing_deadline?: number
    qos?: boolean
    render_delay?: number
    sync?: boolean
    throttle_time?: number
    ts_offset?: number
}
class BaseSink {
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    async: boolean
    blocksize: number
    enable_last_sample: boolean
    readonly last_sample: Gst.Sample
    max_bitrate: number
    max_lateness: number
    processing_deadline: number
    qos: boolean
    render_delay: number
    readonly stats: Gst.Structure
    sync: boolean
    throttle_time: number
    ts_offset: number
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
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    get_blocksize(): number
    get_drop_out_of_segment(): boolean
    get_last_sample(): Gst.Sample | null
    get_latency(): Gst.ClockTime
    get_max_bitrate(): number
    get_max_lateness(): number
    get_processing_deadline(): Gst.ClockTime
    get_render_delay(): Gst.ClockTime
    get_stats(): Gst.Structure
    get_sync(): boolean
    get_throttle_time(): number
    get_ts_offset(): Gst.ClockTimeDiff
    is_async_enabled(): boolean
    is_last_sample_enabled(): boolean
    is_qos_enabled(): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstream_live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async_enabled(enabled: boolean): void
    set_blocksize(blocksize: number): void
    set_drop_out_of_segment(drop_out_of_segment: boolean): void
    set_last_sample_enabled(enabled: boolean): void
    set_max_bitrate(max_bitrate: number): void
    set_max_lateness(max_lateness: number): void
    set_processing_deadline(processing_deadline: Gst.ClockTime): void
    set_qos_enabled(enabled: boolean): void
    set_render_delay(delay: Gst.ClockTime): void
    set_sync(sync: boolean): void
    set_throttle_time(throttle: number): void
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_clock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    wait_preroll(): Gst.FlowReturn
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
    /* Virtual methods of GstBase-1.0.GstBase.BaseSink */
    vfunc_activate_pull(active: boolean): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter: Gst.Caps): Gst.Caps
    vfunc_get_times(buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime): void
    vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_propose_allocation(query: Gst.Query): boolean
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
    vfunc_wait_event(event: Gst.Event): Gst.FlowReturn
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
    connect(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSink, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseSink, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSink, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseSink, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseSink, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-sample", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-sample", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-bitrate", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-deadline", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle-time", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseSink_ConstructProps)
    _init (config?: BaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseSrc_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize?: number
    do_timestamp?: boolean
    num_buffers?: number
    typefind?: boolean
}
class BaseSrc {
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    blocksize: number
    do_timestamp: boolean
    num_buffers: number
    typefind: boolean
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
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_blocksize(): number
    get_buffer_pool(): Gst.BufferPool | null
    get_do_timestamp(): boolean
    is_async(): boolean
    is_live(): boolean
    negotiate(): boolean
    new_seamless_segment(start: number, stop: number, time: number): boolean
    new_segment(segment: Gst.Segment): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async(async: boolean): void
    set_automatic_eos(automatic_eos: boolean): void
    set_blocksize(blocksize: number): void
    set_caps(caps: Gst.Caps): boolean
    set_do_timestamp(timestamp: boolean): void
    set_dynamic_size(dynamic: boolean): void
    set_format(format: Gst.Format): void
    set_live(live: boolean): void
    start_complete(ret: Gst.FlowReturn): void
    start_wait(): Gst.FlowReturn
    submit_buffer_list(buffer_list: Gst.BufferList): void
    wait_playing(): Gst.FlowReturn
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
    /* Virtual methods of GstBase-1.0.GstBase.BaseSrc */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_create(offset: number, size: number, buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_do_seek(segment: Gst.Segment): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    vfunc_get_size(): [ /* returnType */ boolean, /* size */ number ]
    vfunc_get_times(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfunc_is_seekable(): boolean
    vfunc_negotiate(): boolean
    vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseSrc_ConstructProps)
    _init (config?: BaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseTransform_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstBase-1.0.GstBase.BaseTransform */
    qos?: boolean
}
class BaseTransform {
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
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
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_buffer_pool(): Gst.BufferPool | null
    is_in_place(): boolean
    is_passthrough(): boolean
    is_qos_enabled(): boolean
    reconfigure(): boolean
    reconfigure_sink(): void
    reconfigure_src(): void
    set_gap_aware(gap_aware: boolean): void
    set_in_place(in_place: boolean): void
    set_passthrough(passthrough: boolean): void
    set_prefer_passthrough(prefer_passthrough: boolean): void
    set_qos_enabled(enabled: boolean): void
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    update_src_caps(updated_caps: Gst.Caps): boolean
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
    /* Virtual methods of GstBase-1.0.GstBase.BaseTransform */
    vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    vfunc_before_transform(buffer: Gst.Buffer): void
    vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_filter_meta(query: Gst.Query, api: GObject.Type, params: Gst.Structure): boolean
    vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    vfunc_generate_output(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_get_unit_size(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    vfunc_prepare_output_buffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean
    vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn
    vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn
    vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    vfunc_transform_size(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]
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
    connect(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseTransform, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseTransform, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseTransform, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseTransform, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseTransform, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseTransform, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseTransform_ConstructProps)
    _init (config?: BaseTransform_ConstructProps): void
    static $gtype: GObject.Type
}
interface CollectPads_ConstructProps extends Gst.Object_ConstructProps {
}
class CollectPads {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Gst.Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.CollectPads */
    add_pad(pad: Gst.Pad, size: number, destroy_notify: CollectDataDestroyNotify, lock: boolean): CollectData | null
    available(): number
    clip_running_time(cdata: CollectData, buf: Gst.Buffer, user_data?: object | null): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer | null ]
    event_default(data: CollectData, event: Gst.Event, discard: boolean): boolean
    flush(data: CollectData, size: number): number
    peek(data: CollectData): Gst.Buffer | null
    pop(data: CollectData): Gst.Buffer | null
    query_default(data: CollectData, query: Gst.Query, discard: boolean): boolean
    read_buffer(data: CollectData, size: number): Gst.Buffer | null
    remove_pad(pad: Gst.Pad): boolean
    set_buffer_function(func: CollectPadsBufferFunction): void
    set_clip_function(clipfunc: CollectPadsClipFunction): void
    set_compare_function(func: CollectPadsCompareFunction): void
    set_event_function(func: CollectPadsEventFunction): void
    set_flush_function(func: CollectPadsFlushFunction): void
    set_flushing(flushing: boolean): void
    set_function(func: CollectPadsFunction): void
    set_query_function(func: CollectPadsQueryFunction): void
    set_waiting(data: CollectData, waiting: boolean): void
    src_event_default(pad: Gst.Pad, event: Gst.Event): boolean
    start(): void
    stop(): void
    take_buffer(data: CollectData, size: number): Gst.Buffer | null
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: CollectPads, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: CollectPads, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CollectPads_ConstructProps)
    _init (config?: CollectPads_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CollectPads
    static $gtype: GObject.Type
}
interface DataQueue_ConstructProps extends GObject.Object_ConstructProps {
}
class DataQueue {
    /* Properties of GstBase-1.0.GstBase.DataQueue */
    readonly current_level_bytes: number
    readonly current_level_time: number
    readonly current_level_visible: number
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
    /* Virtual methods of GstBase-1.0.GstBase.DataQueue */
    vfunc_empty(): void
    vfunc_full(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstBase-1.0.GstBase.DataQueue */
    connect(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    connect_after(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (($obj: DataQueue) => void)): number
    connect_after(sigName: "full", callback: (($obj: DataQueue) => void)): number
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataQueue_ConstructProps)
    _init (config?: DataQueue_ConstructProps): void
    static $gtype: GObject.Type
}
interface PushSrc_ConstructProps extends BaseSrc_ConstructProps {
}
class PushSrc {
    /* Properties of GstBase-1.0.GstBase.BaseSrc */
    do_timestamp: boolean
    /* Fields of GstBase-1.0.GstBase.BaseSrc */
    readonly element: Gst.Element
    readonly srcpad: Gst.Pad
    readonly live_lock: GLib.Mutex
    readonly live_cond: GLib.Cond
    readonly is_live: boolean
    readonly live_running: boolean
    readonly blocksize: number
    readonly can_activate_push: boolean
    readonly random_access: boolean
    readonly clock_id: Gst.ClockID
    readonly segment: Gst.Segment
    readonly need_newsegment: boolean
    readonly num_buffers: number
    readonly num_buffers_left: number
    readonly typefind: boolean
    readonly running: boolean
    readonly pending_seek: Gst.Event
    readonly priv: BaseSrcPrivate
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
    /* Methods of GstBase-1.0.GstBase.BaseSrc */
    get_allocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    get_blocksize(): number
    get_buffer_pool(): Gst.BufferPool | null
    get_do_timestamp(): boolean
    is_async(): boolean
    negotiate(): boolean
    new_seamless_segment(start: number, stop: number, time: number): boolean
    new_segment(segment: Gst.Segment): boolean
    query_latency(): [ /* returnType */ boolean, /* live */ boolean | null, /* min_latency */ Gst.ClockTime | null, /* max_latency */ Gst.ClockTime | null ]
    set_async(async: boolean): void
    set_automatic_eos(automatic_eos: boolean): void
    set_blocksize(blocksize: number): void
    set_caps(caps: Gst.Caps): boolean
    set_do_timestamp(timestamp: boolean): void
    set_dynamic_size(dynamic: boolean): void
    set_format(format: Gst.Format): void
    set_live(live: boolean): void
    start_complete(ret: Gst.FlowReturn): void
    start_wait(): Gst.FlowReturn
    submit_buffer_list(buffer_list: Gst.BufferList): void
    wait_playing(): Gst.FlowReturn
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
    /* Virtual methods of GstBase-1.0.GstBase.PushSrc */
    vfunc_alloc(): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    /* Function overloads */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_create(buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    /* Function overloads */
    vfunc_create(offset: number, size: number, buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn
    /* Function overloads */
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstBase-1.0.GstBase.BaseSrc */
    vfunc_alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_create(offset: number, size: number, buf: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    vfunc_decide_allocation(query: Gst.Query): boolean
    vfunc_do_seek(segment: Gst.Segment): boolean
    vfunc_event(event: Gst.Event): boolean
    vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    vfunc_fixate(caps: Gst.Caps): Gst.Caps
    vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps
    vfunc_get_size(): [ /* returnType */ boolean, /* size */ number ]
    vfunc_get_times(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    vfunc_is_seekable(): boolean
    vfunc_negotiate(): boolean
    vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean
    vfunc_query(query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_unlock_stop(): boolean
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
    connect(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: PushSrc, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: PushSrc, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: PushSrc, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: PushSrc, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PushSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PushSrc, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PushSrc_ConstructProps)
    _init (config?: PushSrc_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AdapterClass {
    static name: string
}
abstract class AggregatorClass {
    /* Fields of GstBase-1.0.GstBase.AggregatorClass */
    readonly parent_class: Gst.ElementClass
    readonly flush: (aggregator: Aggregator) => Gst.FlowReturn
    readonly clip: (aggregator: Aggregator, aggregator_pad: AggregatorPad, buf: Gst.Buffer) => Gst.Buffer
    readonly finish_buffer: (aggregator: Aggregator, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly sink_event: (aggregator: Aggregator, aggregator_pad: AggregatorPad, event: Gst.Event) => boolean
    readonly sink_query: (aggregator: Aggregator, aggregator_pad: AggregatorPad, query: Gst.Query) => boolean
    readonly src_event: (aggregator: Aggregator, event: Gst.Event) => boolean
    readonly src_query: (aggregator: Aggregator, query: Gst.Query) => boolean
    readonly src_activate: (aggregator: Aggregator, mode: Gst.PadMode, active: boolean) => boolean
    readonly aggregate: (aggregator: Aggregator, timeout: boolean) => Gst.FlowReturn
    readonly stop: (aggregator: Aggregator) => boolean
    readonly start: (aggregator: Aggregator) => boolean
    readonly get_next_time: (aggregator: Aggregator) => Gst.ClockTime
    readonly update_src_caps: (self: Aggregator, caps: Gst.Caps) => [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps | null ]
    readonly fixate_src_caps: (self: Aggregator, caps: Gst.Caps) => Gst.Caps
    readonly negotiated_src_caps: (self: Aggregator, caps: Gst.Caps) => boolean
    readonly decide_allocation: (self: Aggregator, query: Gst.Query) => boolean
    readonly propose_allocation: (self: Aggregator, pad: AggregatorPad, decide_query: Gst.Query, query: Gst.Query) => boolean
    readonly negotiate: (self: Aggregator) => boolean
    readonly sink_event_pre_queue: (aggregator: Aggregator, aggregator_pad: AggregatorPad, event: Gst.Event) => Gst.FlowReturn
    readonly sink_query_pre_queue: (aggregator: Aggregator, aggregator_pad: AggregatorPad, query: Gst.Query) => boolean
    readonly finish_buffer_list: (aggregator: Aggregator, bufferlist: Gst.BufferList) => Gst.FlowReturn
    readonly peek_next_sample: (aggregator: Aggregator, aggregator_pad: AggregatorPad) => Gst.Sample | null
    static name: string
}
abstract class AggregatorPadClass {
    /* Fields of GstBase-1.0.GstBase.AggregatorPadClass */
    readonly parent_class: Gst.PadClass
    readonly flush: (aggpad: AggregatorPad, aggregator: Aggregator) => Gst.FlowReturn
    readonly skip_buffer: (aggpad: AggregatorPad, aggregator: Aggregator, buffer: Gst.Buffer) => boolean
    static name: string
}
class AggregatorPadPrivate {
    static name: string
}
class AggregatorPrivate {
    static name: string
}
abstract class BaseParseClass {
    /* Fields of GstBase-1.0.GstBase.BaseParseClass */
    readonly parent_class: Gst.ElementClass
    readonly start: (parse: BaseParse) => boolean
    readonly stop: (parse: BaseParse) => boolean
    readonly set_sink_caps: (parse: BaseParse, caps: Gst.Caps) => boolean
    readonly handle_frame: (parse: BaseParse, frame: BaseParseFrame) => [ /* returnType */ Gst.FlowReturn, /* skipsize */ number ]
    readonly pre_push_frame: (parse: BaseParse, frame: BaseParseFrame) => Gst.FlowReturn
    readonly convert: (parse: BaseParse, src_format: Gst.Format, src_value: number, dest_format: Gst.Format, dest_value: number) => boolean
    readonly sink_event: (parse: BaseParse, event: Gst.Event) => boolean
    readonly src_event: (parse: BaseParse, event: Gst.Event) => boolean
    readonly get_sink_caps: (parse: BaseParse, filter: Gst.Caps) => Gst.Caps
    readonly detect: (parse: BaseParse, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly sink_query: (parse: BaseParse, query: Gst.Query) => boolean
    readonly src_query: (parse: BaseParse, query: Gst.Query) => boolean
    static name: string
}
class BaseParseFrame {
    /* Fields of GstBase-1.0.GstBase.BaseParseFrame */
    readonly buffer: Gst.Buffer
    readonly out_buffer: Gst.Buffer
    readonly flags: number
    readonly offset: number
    readonly overhead: number
    /* Methods of GstBase-1.0.GstBase.BaseParseFrame */
    copy(): BaseParseFrame
    free(): void
    init(): void
    static name: string
    static new(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame
    constructor(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number)
    /* Static methods and pseudo-constructors */
    static new(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame
}
class BaseParsePrivate {
    static name: string
}
abstract class BaseSinkClass {
    /* Fields of GstBase-1.0.GstBase.BaseSinkClass */
    readonly parent_class: Gst.ElementClass
    readonly get_caps: (sink: BaseSink, filter: Gst.Caps) => Gst.Caps
    readonly set_caps: (sink: BaseSink, caps: Gst.Caps) => boolean
    readonly fixate: (sink: BaseSink, caps: Gst.Caps) => Gst.Caps
    readonly activate_pull: (sink: BaseSink, active: boolean) => boolean
    readonly get_times: (sink: BaseSink, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    readonly propose_allocation: (sink: BaseSink, query: Gst.Query) => boolean
    readonly start: (sink: BaseSink) => boolean
    readonly stop: (sink: BaseSink) => boolean
    readonly unlock: (sink: BaseSink) => boolean
    readonly unlock_stop: (sink: BaseSink) => boolean
    readonly query: (sink: BaseSink, query: Gst.Query) => boolean
    readonly event: (sink: BaseSink, event: Gst.Event) => boolean
    readonly wait_event: (sink: BaseSink, event: Gst.Event) => Gst.FlowReturn
    readonly prepare: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly prepare_list: (sink: BaseSink, buffer_list: Gst.BufferList) => Gst.FlowReturn
    readonly preroll: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly render: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly render_list: (sink: BaseSink, buffer_list: Gst.BufferList) => Gst.FlowReturn
    static name: string
}
class BaseSinkPrivate {
    static name: string
}
abstract class BaseSrcClass {
    /* Fields of GstBase-1.0.GstBase.BaseSrcClass */
    readonly parent_class: Gst.ElementClass
    readonly get_caps: (src: BaseSrc, filter?: Gst.Caps | null) => Gst.Caps
    readonly negotiate: (src: BaseSrc) => boolean
    readonly fixate: (src: BaseSrc, caps: Gst.Caps) => Gst.Caps
    readonly set_caps: (src: BaseSrc, caps: Gst.Caps) => boolean
    readonly decide_allocation: (src: BaseSrc, query: Gst.Query) => boolean
    readonly start: (src: BaseSrc) => boolean
    readonly stop: (src: BaseSrc) => boolean
    readonly get_times: (src: BaseSrc, buffer: Gst.Buffer) => [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    readonly get_size: (src: BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    readonly is_seekable: (src: BaseSrc) => boolean
    readonly prepare_seek_segment: (src: BaseSrc, seek: Gst.Event, segment: Gst.Segment) => boolean
    readonly do_seek: (src: BaseSrc, segment: Gst.Segment) => boolean
    readonly unlock: (src: BaseSrc) => boolean
    readonly unlock_stop: (src: BaseSrc) => boolean
    readonly query: (src: BaseSrc, query: Gst.Query) => boolean
    readonly event: (src: BaseSrc, event: Gst.Event) => boolean
    readonly create: (src: BaseSrc, offset: number, size: number, buf: Gst.Buffer) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    readonly alloc: (src: BaseSrc, offset: number, size: number) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    readonly fill: (src: BaseSrc, offset: number, size: number, buf: Gst.Buffer) => Gst.FlowReturn
    static name: string
}
class BaseSrcPrivate {
    static name: string
}
abstract class BaseTransformClass {
    /* Fields of GstBase-1.0.GstBase.BaseTransformClass */
    readonly parent_class: Gst.ElementClass
    readonly passthrough_on_same_caps: boolean
    readonly transform_ip_on_passthrough: boolean
    readonly transform_caps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps) => Gst.Caps
    readonly fixate_caps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps) => Gst.Caps
    readonly accept_caps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => boolean
    readonly set_caps: (trans: BaseTransform, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    readonly query: (trans: BaseTransform, direction: Gst.PadDirection, query: Gst.Query) => boolean
    readonly decide_allocation: (trans: BaseTransform, query: Gst.Query) => boolean
    readonly filter_meta: (trans: BaseTransform, query: Gst.Query, api: GObject.Type, params: Gst.Structure) => boolean
    readonly propose_allocation: (trans: BaseTransform, decide_query: Gst.Query, query: Gst.Query) => boolean
    readonly transform_size: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    readonly get_unit_size: (trans: BaseTransform, caps: Gst.Caps) => [ /* returnType */ boolean, /* size */ number ]
    readonly start: (trans: BaseTransform) => boolean
    readonly stop: (trans: BaseTransform) => boolean
    readonly sink_event: (trans: BaseTransform, event: Gst.Event) => boolean
    readonly src_event: (trans: BaseTransform, event: Gst.Event) => boolean
    readonly prepare_output_buffer: (trans: BaseTransform, input: Gst.Buffer) => [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    readonly copy_metadata: (trans: BaseTransform, input: Gst.Buffer, outbuf: Gst.Buffer) => boolean
    readonly transform_meta: (trans: BaseTransform, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
    readonly before_transform: (trans: BaseTransform, buffer: Gst.Buffer) => void
    readonly transform: (trans: BaseTransform, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => Gst.FlowReturn
    readonly transform_ip: (trans: BaseTransform, buf: Gst.Buffer) => Gst.FlowReturn
    readonly submit_input_buffer: (trans: BaseTransform, is_discont: boolean, input: Gst.Buffer) => Gst.FlowReturn
    readonly generate_output: (trans: BaseTransform) => [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    static name: string
}
class BaseTransformPrivate {
    static name: string
}
class BitReader {
    /* Fields of GstBase-1.0.GstBase.BitReader */
    readonly data: Uint8Array
    readonly size: number
    readonly byte: number
    readonly bit: number
    /* Methods of GstBase-1.0.GstBase.BitReader */
    free(): void
    get_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint8(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_pos(): number
    get_remaining(): number
    get_size(): number
    init(data: Uint8Array): void
    peek_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint8(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    set_pos(pos: number): boolean
    skip(nbits: number): boolean
    skip_to_byte(): boolean
    static name: string
}
class BitWriter {
    /* Fields of GstBase-1.0.GstBase.BitWriter */
    readonly data: number
    readonly bit_size: number
    /* Methods of GstBase-1.0.GstBase.BitWriter */
    align_bytes(trailing_bit: number): boolean
    free(): void
    free_and_get_buffer(): Gst.Buffer
    free_and_get_data(): Uint8Array
    get_data(): Uint8Array
    get_remaining(): number
    get_size(): number
    put_bits_uint16(value: number, nbits: number): boolean
    put_bits_uint32(value: number, nbits: number): boolean
    put_bits_uint64(value: number, nbits: number): boolean
    put_bits_uint8(value: number, nbits: number): boolean
    put_bytes(data: Uint8Array, nbytes: number): boolean
    reset(): void
    reset_and_get_buffer(): Gst.Buffer
    reset_and_get_data(): Uint8Array
    set_pos(pos: number): boolean
    static name: string
}
class ByteReader {
    /* Fields of GstBase-1.0.GstBase.ByteReader */
    readonly data: Uint8Array
    readonly size: number
    readonly byte: number
    /* Methods of GstBase-1.0.GstBase.ByteReader */
    dup_data(): [ /* returnType */ boolean, /* val */ Uint8Array ]
    dup_string_utf16(): [ /* returnType */ boolean, /* str */ number[] ]
    dup_string_utf32(): [ /* returnType */ boolean, /* str */ number[] ]
    dup_string_utf8(): [ /* returnType */ boolean, /* str */ string[] ]
    free(): void
    get_data(): [ /* returnType */ boolean, /* val */ Uint8Array ]
    get_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int8(): [ /* returnType */ boolean, /* val */ number ]
    get_pos(): number
    get_remaining(): number
    get_size(): number
    get_string_utf8(): [ /* returnType */ boolean, /* str */ string[] ]
    get_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint8(): [ /* returnType */ boolean, /* val */ number ]
    init(data: Uint8Array): void
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]
    peek_data(): [ /* returnType */ boolean, /* val */ Uint8Array ]
    peek_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int8(): [ /* returnType */ boolean, /* val */ number ]
    peek_string_utf8(): [ /* returnType */ boolean, /* str */ string[] ]
    peek_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint8(): [ /* returnType */ boolean, /* val */ number ]
    set_pos(pos: number): boolean
    skip(nbytes: number): boolean
    skip_string_utf16(): boolean
    skip_string_utf32(): boolean
    skip_string_utf8(): boolean
    static name: string
}
class ByteWriter {
    /* Fields of GstBase-1.0.GstBase.ByteWriter */
    readonly parent: ByteReader
    readonly alloc_size: number
    readonly fixed: boolean
    readonly owned: boolean
    /* Methods of GstBase-1.0.GstBase.ByteWriter */
    ensure_free_space(size: number): boolean
    fill(value: number, size: number): boolean
    free(): void
    free_and_get_buffer(): Gst.Buffer
    free_and_get_data(): number
    get_remaining(): number
    init(): void
    init_with_data(data: Uint8Array, initialized: boolean): void
    init_with_size(size: number, fixed: boolean): void
    put_buffer(buffer: Gst.Buffer, offset: number, size: number): boolean
    put_data(data: Uint8Array): boolean
    put_float32_be(val: number): boolean
    put_float32_le(val: number): boolean
    put_float64_be(val: number): boolean
    put_float64_le(val: number): boolean
    put_int16_be(val: number): boolean
    put_int16_le(val: number): boolean
    put_int24_be(val: number): boolean
    put_int24_le(val: number): boolean
    put_int32_be(val: number): boolean
    put_int32_le(val: number): boolean
    put_int64_be(val: number): boolean
    put_int64_le(val: number): boolean
    put_int8(val: number): boolean
    put_string_utf16(data: number[]): boolean
    put_string_utf32(data: number[]): boolean
    put_string_utf8(data: string): boolean
    put_uint16_be(val: number): boolean
    put_uint16_le(val: number): boolean
    put_uint24_be(val: number): boolean
    put_uint24_le(val: number): boolean
    put_uint32_be(val: number): boolean
    put_uint32_le(val: number): boolean
    put_uint64_be(val: number): boolean
    put_uint64_le(val: number): boolean
    put_uint8(val: number): boolean
    reset(): void
    reset_and_get_buffer(): Gst.Buffer
    reset_and_get_data(): Uint8Array
    static name: string
}
class CollectData {
    /* Fields of GstBase-1.0.GstBase.CollectData */
    readonly collect: CollectPads
    readonly pad: Gst.Pad
    readonly buffer: Gst.Buffer
    readonly pos: number
    readonly segment: Gst.Segment
    static name: string
}
class CollectDataPrivate {
    static name: string
}
abstract class CollectPadsClass {
    /* Fields of GstBase-1.0.GstBase.CollectPadsClass */
    readonly parent_class: Gst.ObjectClass
    static name: string
}
class CollectPadsPrivate {
    static name: string
}
abstract class DataQueueClass {
    /* Fields of GstBase-1.0.GstBase.DataQueueClass */
    readonly parent_class: GObject.ObjectClass
    readonly empty: (queue: DataQueue) => void
    readonly full: (queue: DataQueue) => void
    readonly _gst_reserved: object[]
    static name: string
}
class DataQueueItem {
    /* Fields of GstBase-1.0.GstBase.DataQueueItem */
    readonly object: Gst.MiniObject
    readonly size: number
    readonly duration: number
    readonly visible: boolean
    readonly destroy: GLib.DestroyNotify
    static name: string
}
class DataQueuePrivate {
    static name: string
}
class DataQueueSize {
    /* Fields of GstBase-1.0.GstBase.DataQueueSize */
    readonly visible: number
    readonly bytes: number
    readonly time: number
    static name: string
}
class FlowCombiner {
    /* Methods of GstBase-1.0.GstBase.FlowCombiner */
    add_pad(pad: Gst.Pad): void
    clear(): void
    free(): void
    ref(): FlowCombiner
    remove_pad(pad: Gst.Pad): void
    reset(): void
    unref(): void
    update_flow(fret: Gst.FlowReturn): Gst.FlowReturn
    update_pad_flow(pad: Gst.Pad, fret: Gst.FlowReturn): Gst.FlowReturn
    static name: string
    static new(): FlowCombiner
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FlowCombiner
}
abstract class PushSrcClass {
    /* Fields of GstBase-1.0.GstBase.PushSrcClass */
    readonly parent_class: BaseSrcClass
    readonly create: (src: PushSrc, buf: Gst.Buffer) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    readonly alloc: (src: PushSrc) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer ]
    readonly fill: (src: PushSrc, buf: Gst.Buffer) => Gst.FlowReturn
    static name: string
}
class QueueArray {
    /* Methods of GstBase-1.0.GstBase.QueueArray */
    push_tail_struct(p_struct?: object | null): void
    static name: string
}
}
export default GstBase;