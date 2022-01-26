/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstRtp-1.0
 */

import type * as Gjs from './Gjs';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstRtp {

enum RTCPFBType {
    FB_TYPE_INVALID,
    RTPFB_TYPE_NACK,
    RTPFB_TYPE_TMMBR,
    RTPFB_TYPE_TMMBN,
    RTPFB_TYPE_RTCP_SR_REQ,
    RTPFB_TYPE_TWCC,
    PSFB_TYPE_PLI,
    PSFB_TYPE_SLI,
    PSFB_TYPE_RPSI,
    PSFB_TYPE_AFB,
    PSFB_TYPE_FIR,
    PSFB_TYPE_TSTR,
    PSFB_TYPE_TSTN,
    PSFB_TYPE_VBCN,
}
enum RTCPSDESType {
    INVALID,
    END,
    CNAME,
    NAME,
    EMAIL,
    PHONE,
    LOC,
    TOOL,
    NOTE,
    PRIV,
    H323_CADDR,
    APSI,
    RGRP,
    RTP_STREAM_ID,
    REPAIRED_RTP_STREAM_ID,
    CCID,
    MID,
}
enum RTCPType {
    INVALID,
    SR,
    RR,
    SDES,
    BYE,
    APP,
    RTPFB,
    PSFB,
    XR,
}
enum RTCPXRType {
    INVALID,
    LRLE,
    DRLE,
    PRT,
    RRT,
    DLRR,
    SSUMM,
    VOIP_METRICS,
}
enum RTPPayload {
    PCMU,
    TODO_1016,
    G721,
    GSM,
    G723,
    DVI4_8000,
    DVI4_16000,
    LPC,
    PCMA,
    G722,
    L16_STEREO,
    L16_MONO,
    QCELP,
    CN,
    MPA,
    G728,
    DVI4_11025,
    DVI4_22050,
    G729,
    CELLB,
    JPEG,
    NV,
    H261,
    MPV,
    MP2T,
    H263,
}
enum RTPProfile {
    UNKNOWN,
    AVP,
    SAVP,
    AVPF,
    SAVPF,
}
enum RTPBufferFlags {
    RETRANSMISSION,
    REDUNDANT,
    LAST,
}
enum RTPBufferMapFlags {
    SKIP_PADDING,
    LAST,
}
enum RTPHeaderExtensionDirection {
    INACTIVE,
    SENDONLY,
    RECVONLY,
    SENDRECV,
    INHERITED,
}
enum RTPHeaderExtensionFlags {
    ONE_BYTE,
    TWO_BYTE,
}
const RTCP_MAX_BYE_SSRC_COUNT: number
const RTCP_MAX_RB_COUNT: number
const RTCP_MAX_SDES: number
const RTCP_MAX_SDES_ITEM_COUNT: number
const RTCP_REDUCED_SIZE_VALID_MASK: number
const RTCP_VALID_MASK: number
const RTCP_VALID_VALUE: number
const RTCP_VERSION: number
const RTP_HDREXT_BASE: string
const RTP_HDREXT_ELEMENT_CLASS: string
const RTP_HDREXT_NTP_56: string
const RTP_HDREXT_NTP_56_SIZE: number
const RTP_HDREXT_NTP_64: string
const RTP_HDREXT_NTP_64_SIZE: number
const RTP_HEADER_EXTENSION_URI_METADATA_KEY: string
const RTP_PAYLOAD_1016_STRING: string
const RTP_PAYLOAD_CELLB_STRING: string
const RTP_PAYLOAD_CN_STRING: string
const RTP_PAYLOAD_DVI4_11025_STRING: string
const RTP_PAYLOAD_DVI4_16000_STRING: string
const RTP_PAYLOAD_DVI4_22050_STRING: string
const RTP_PAYLOAD_DVI4_8000_STRING: string
const RTP_PAYLOAD_DYNAMIC_STRING: string
const RTP_PAYLOAD_G721_STRING: string
const RTP_PAYLOAD_G722_STRING: string
const RTP_PAYLOAD_G723_53: number
const RTP_PAYLOAD_G723_53_STRING: string
const RTP_PAYLOAD_G723_63: number
const RTP_PAYLOAD_G723_63_STRING: string
const RTP_PAYLOAD_G723_STRING: string
const RTP_PAYLOAD_G728_STRING: string
const RTP_PAYLOAD_G729_STRING: string
const RTP_PAYLOAD_GSM_STRING: string
const RTP_PAYLOAD_H261_STRING: string
const RTP_PAYLOAD_H263_STRING: string
const RTP_PAYLOAD_JPEG_STRING: string
const RTP_PAYLOAD_L16_MONO_STRING: string
const RTP_PAYLOAD_L16_STEREO_STRING: string
const RTP_PAYLOAD_LPC_STRING: string
const RTP_PAYLOAD_MP2T_STRING: string
const RTP_PAYLOAD_MPA_STRING: string
const RTP_PAYLOAD_MPV_STRING: string
const RTP_PAYLOAD_NV_STRING: string
const RTP_PAYLOAD_PCMA_STRING: string
const RTP_PAYLOAD_PCMU_STRING: string
const RTP_PAYLOAD_QCELP_STRING: string
const RTP_PAYLOAD_TS41: number
const RTP_PAYLOAD_TS41_STRING: string
const RTP_PAYLOAD_TS48: number
const RTP_PAYLOAD_TS48_STRING: string
const RTP_SOURCE_META_MAX_CSRC_COUNT: number
const RTP_VERSION: number
function buffer_add_rtp_source_meta(buffer: Gst.Buffer, ssrc: number | null, csrc: number | null, csrc_count: number): RTPSourceMeta
function buffer_get_rtp_source_meta(buffer: Gst.Buffer): RTPSourceMeta
function rtcp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
function rtcp_buffer_new(mtu: number): Gst.Buffer
function rtcp_buffer_new_copy_data(data: Uint8Array): Gst.Buffer
function rtcp_buffer_new_take_data(data: Uint8Array): Gst.Buffer
function rtcp_buffer_validate(buffer: Gst.Buffer): boolean
function rtcp_buffer_validate_data(data: Uint8Array): boolean
function rtcp_buffer_validate_data_reduced(data: Uint8Array): boolean
function rtcp_buffer_validate_reduced(buffer: Gst.Buffer): boolean
function rtcp_ntp_to_unix(ntptime: number): number
function rtcp_sdes_name_to_type(name: string): RTCPSDESType
function rtcp_sdes_type_to_name(type: RTCPSDESType): string
function rtcp_unix_to_ntp(unixtime: number): number
function rtp_buffer_allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void
function rtp_buffer_calc_header_len(csrc_count: number): number
function rtp_buffer_calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number
function rtp_buffer_calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number
function rtp_buffer_compare_seqnum(seqnum1: number, seqnum2: number): number
function rtp_buffer_default_clock_rate(payload_type: number): number
function rtp_buffer_ext_timestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
function rtp_buffer_get_extension_onebyte_header_from_bytes(bytes: GLib.Bytes, bit_pattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
function rtp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
function rtp_buffer_new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
function rtp_buffer_new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer
function rtp_buffer_new_copy_data(data: Uint8Array): Gst.Buffer
function rtp_buffer_new_take_data(data: Uint8Array): Gst.Buffer
function rtp_get_header_extension_list(): Gst.ElementFactory[]
function rtp_hdrext_get_ntp_56(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
function rtp_hdrext_get_ntp_64(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
function rtp_hdrext_set_ntp_56(data: object | null, size: number, ntptime: number): boolean
function rtp_hdrext_set_ntp_64(data: object | null, size: number, ntptime: number): boolean
function rtp_payload_info_for_name(media: string, encoding_name: string): RTPPayloadInfo
function rtp_payload_info_for_pt(payload_type: number): RTPPayloadInfo
function rtp_source_meta_api_get_type(): GObject.Type
function rtp_source_meta_get_info(): Gst.MetaInfo
interface RTPBaseAudioPayload_ConstructProps extends RTPBasePayload_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    buffer_list?: boolean
}
class RTPBaseAudioPayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    buffer_list: boolean
    /* Properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    auto_header_extension: boolean
    max_ptime: number
    min_ptime: number
    mtu: number
    onvif_no_rate_control: boolean
    perfect_rtptime: boolean
    pt: number
    ptime_multiple: number
    scale_rtptime: boolean
    readonly seqnum: number
    seqnum_offset: number
    source_info: boolean
    ssrc: number
    readonly stats: Gst.Structure
    readonly timestamp: number
    timestamp_offset: number
    /* Fields of GstRtp-1.0.GstRtp.RTPBasePayload */
    readonly element: Gst.Element
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
    /* Methods of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    flush(payload_len: number, timestamp: Gst.ClockTime): Gst.FlowReturn
    get_adapter(): GstBase.Adapter
    push(data: Uint8Array, timestamp: Gst.ClockTime): Gst.FlowReturn
    set_frame_based(): void
    set_frame_options(frame_duration: number, frame_size: number): void
    set_sample_based(): void
    set_sample_options(sample_size: number): void
    set_samplebits_options(sample_size: number): void
    /* Methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    get_source_count(buffer: Gst.Buffer): number
    is_filled(size: number, duration: Gst.ClockTime): boolean
    is_source_info_enabled(): boolean
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_list(list: Gst.BufferList): Gst.FlowReturn
    set_options(media: string, dynamic: boolean, encoding_name: string, clock_rate: number): void
    set_outcaps_structure(s?: Gst.Structure | null): boolean
    set_source_info_enabled(enable: boolean): void
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
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    vfunc_get_caps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps
    vfunc_handle_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
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
    /* Signals of GstRtp-1.0.GstRtp.RTPBasePayload */
    connect(sigName: "add-extension", callback: (($obj: RTPBaseAudioPayload, ext: RTPHeaderExtension) => void)): number
    connect_after(sigName: "add-extension", callback: (($obj: RTPBaseAudioPayload, ext: RTPHeaderExtension) => void)): number
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    connect(sigName: "clear-extensions", callback: (($obj: RTPBaseAudioPayload) => void)): number
    connect_after(sigName: "clear-extensions", callback: (($obj: RTPBaseAudioPayload) => void)): number
    emit(sigName: "clear-extensions"): void
    connect(sigName: "request-extension", callback: (($obj: RTPBaseAudioPayload, ext_id: number, ext_uri: string) => RTPHeaderExtension)): number
    connect_after(sigName: "request-extension", callback: (($obj: RTPBaseAudioPayload, ext_id: number, ext_uri: string) => RTPHeaderExtension)): number
    emit(sigName: "request-extension", ext_id: number, ext_uri: string): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: RTPBaseAudioPayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBaseAudioPayload) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: RTPBaseAudioPayload, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBaseAudioPayload, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: RTPBaseAudioPayload, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBaseAudioPayload, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: RTPBaseAudioPayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBaseAudioPayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer-list", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pt", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ptime-multiple", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seqnum", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seqnum-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-info", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssrc", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTPBaseAudioPayload_ConstructProps)
    _init (config?: RTPBaseAudioPayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPBaseDepayload_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    auto_header_extension?: boolean
    max_reorder?: number
    source_info?: boolean
}
class RTPBaseDepayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    auto_header_extension: boolean
    max_reorder: number
    source_info: boolean
    readonly stats: Gst.Structure
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
    /* Methods of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    is_source_info_enabled(): boolean
    push(out_buf: Gst.Buffer): Gst.FlowReturn
    push_list(out_list: Gst.BufferList): Gst.FlowReturn
    set_source_info_enabled(enable: boolean): void
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
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    vfunc_handle_event(event: Gst.Event): boolean
    vfunc_packet_lost(event: Gst.Event): boolean
    vfunc_process(in_: Gst.Buffer): Gst.Buffer
    vfunc_process_rtp_packet(rtp_buffer: RTPBuffer): Gst.Buffer
    vfunc_set_caps(caps: Gst.Caps): boolean
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
    /* Signals of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    connect(sigName: "add-extension", callback: (($obj: RTPBaseDepayload, ext: RTPHeaderExtension) => void)): number
    connect_after(sigName: "add-extension", callback: (($obj: RTPBaseDepayload, ext: RTPHeaderExtension) => void)): number
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    connect(sigName: "clear-extensions", callback: (($obj: RTPBaseDepayload) => void)): number
    connect_after(sigName: "clear-extensions", callback: (($obj: RTPBaseDepayload) => void)): number
    emit(sigName: "clear-extensions"): void
    connect(sigName: "request-extension", callback: (($obj: RTPBaseDepayload, ext_id: number, ext_uri?: string | null) => RTPHeaderExtension)): number
    connect_after(sigName: "request-extension", callback: (($obj: RTPBaseDepayload, ext_id: number, ext_uri?: string | null) => RTPHeaderExtension)): number
    emit(sigName: "request-extension", ext_id: number, ext_uri?: string | null): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: RTPBaseDepayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBaseDepayload) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: RTPBaseDepayload, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBaseDepayload, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: RTPBaseDepayload, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBaseDepayload, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: RTPBaseDepayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBaseDepayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-reorder", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-reorder", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-info", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTPBaseDepayload_ConstructProps)
    _init (config?: RTPBaseDepayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPBasePayload_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    auto_header_extension?: boolean
    max_ptime?: number
    min_ptime?: number
    mtu?: number
    onvif_no_rate_control?: boolean
    perfect_rtptime?: boolean
    pt?: number
    ptime_multiple?: number
    scale_rtptime?: boolean
    seqnum_offset?: number
    source_info?: boolean
    ssrc?: number
    timestamp_offset?: number
}
class RTPBasePayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    auto_header_extension: boolean
    max_ptime: number
    min_ptime: number
    mtu: number
    onvif_no_rate_control: boolean
    perfect_rtptime: boolean
    pt: number
    ptime_multiple: number
    scale_rtptime: boolean
    readonly seqnum: number
    seqnum_offset: number
    source_info: boolean
    ssrc: number
    readonly stats: Gst.Structure
    readonly timestamp: number
    timestamp_offset: number
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
    /* Methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    get_source_count(buffer: Gst.Buffer): number
    is_filled(size: number, duration: Gst.ClockTime): boolean
    is_source_info_enabled(): boolean
    push(buffer: Gst.Buffer): Gst.FlowReturn
    push_list(list: Gst.BufferList): Gst.FlowReturn
    set_options(media: string, dynamic: boolean, encoding_name: string, clock_rate: number): void
    set_outcaps_structure(s?: Gst.Structure | null): boolean
    set_source_info_enabled(enable: boolean): void
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
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    vfunc_get_caps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps
    vfunc_handle_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean
    /* Function overloads */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
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
    /* Signals of GstRtp-1.0.GstRtp.RTPBasePayload */
    connect(sigName: "add-extension", callback: (($obj: RTPBasePayload, ext: RTPHeaderExtension) => void)): number
    connect_after(sigName: "add-extension", callback: (($obj: RTPBasePayload, ext: RTPHeaderExtension) => void)): number
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    connect(sigName: "clear-extensions", callback: (($obj: RTPBasePayload) => void)): number
    connect_after(sigName: "clear-extensions", callback: (($obj: RTPBasePayload) => void)): number
    emit(sigName: "clear-extensions"): void
    connect(sigName: "request-extension", callback: (($obj: RTPBasePayload, ext_id: number, ext_uri: string) => RTPHeaderExtension)): number
    connect_after(sigName: "request-extension", callback: (($obj: RTPBasePayload, ext_id: number, ext_uri: string) => RTPHeaderExtension)): number
    emit(sigName: "request-extension", ext_id: number, ext_uri: string): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: RTPBasePayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBasePayload) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: RTPBasePayload, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBasePayload, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: RTPBasePayload, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBasePayload, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: RTPBasePayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBasePayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pt", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ptime-multiple", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seqnum", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seqnum-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-info", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssrc", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTPBasePayload_ConstructProps)
    _init (config?: RTPBasePayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPHeaderExtension_ConstructProps extends Gst.Element_ConstructProps {
}
class RTPHeaderExtension {
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
    /* Methods of GstRtp-1.0.GstRtp.RTPHeaderExtension */
    get_direction(): RTPHeaderExtensionDirection
    get_id(): number
    get_max_size(input_meta: Gst.Buffer): number
    get_sdp_caps_field_name(): string
    get_supported_flags(): RTPHeaderExtensionFlags
    get_uri(): string
    read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    set_attributes_from_caps(caps: Gst.Caps): boolean
    set_caps_from_attributes(caps: Gst.Caps): boolean
    set_caps_from_attributes_helper(caps: Gst.Caps, attributes: string): boolean
    set_direction(direction: RTPHeaderExtensionDirection): void
    set_id(ext_id: number): void
    set_non_rtp_sink_caps(caps: Gst.Caps): boolean
    set_wants_update_non_rtp_src_caps(state: boolean): void
    update_non_rtp_src_caps(caps: Gst.Caps): boolean
    wants_update_non_rtp_src_caps(): boolean
    write(input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number
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
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPHeaderExtension */
    vfunc_get_max_size(input_meta: Gst.Buffer): number
    vfunc_get_supported_flags(): RTPHeaderExtensionFlags
    vfunc_read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    vfunc_set_attributes(direction: RTPHeaderExtensionDirection, attributes: string): boolean
    vfunc_set_caps_from_attributes(caps: Gst.Caps): boolean
    vfunc_set_non_rtp_sink_caps(caps: Gst.Caps): boolean
    vfunc_update_non_rtp_src_caps(caps: Gst.Caps): boolean
    vfunc_write(input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number
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
    connect(sigName: "no-more-pads", callback: (($obj: RTPHeaderExtension) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPHeaderExtension) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: RTPHeaderExtension, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPHeaderExtension, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: RTPHeaderExtension, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPHeaderExtension, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: RTPHeaderExtension, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPHeaderExtension, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RTPHeaderExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPHeaderExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTPHeaderExtension_ConstructProps)
    _init (config?: RTPHeaderExtension_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create_from_uri(uri: string): RTPHeaderExtension | null
    static set_uri(klass: RTPHeaderExtension | Function | GObject.Type, uri: string): void
    static $gtype: GObject.Type
}
class RTCPBuffer {
    /* Fields of GstRtp-1.0.GstRtp.RTCPBuffer */
    readonly buffer: Gst.Buffer
    readonly map: Gst.MapInfo
    /* Methods of GstRtp-1.0.GstRtp.RTCPBuffer */
    add_packet(type: RTCPType, packet: RTCPPacket): boolean
    get_first_packet(packet: RTCPPacket): boolean
    get_packet_count(): number
    unmap(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
    static new_copy_data(data: Uint8Array): Gst.Buffer
    static new_take_data(data: Uint8Array): Gst.Buffer
    static validate(buffer: Gst.Buffer): boolean
    static validate_data(data: Uint8Array): boolean
    static validate_data_reduced(data: Uint8Array): boolean
    static validate_reduced(buffer: Gst.Buffer): boolean
}
class RTCPPacket {
    /* Fields of GstRtp-1.0.GstRtp.RTCPPacket */
    readonly rtcp: RTCPBuffer
    readonly offset: number
    /* Methods of GstRtp-1.0.GstRtp.RTCPPacket */
    add_profile_specific_ext(data: Uint8Array): boolean
    add_rb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean
    app_get_data(): number
    app_get_data_length(): number
    app_get_name(): string
    app_get_ssrc(): number
    app_get_subtype(): number
    app_set_data_length(wordlen: number): boolean
    app_set_name(name: string): void
    app_set_ssrc(ssrc: number): void
    app_set_subtype(subtype: number): void
    bye_add_ssrc(ssrc: number): boolean
    bye_add_ssrcs(ssrc: number[]): boolean
    bye_get_nth_ssrc(nth: number): number
    bye_get_reason(): string
    bye_get_reason_len(): number
    bye_get_ssrc_count(): number
    bye_set_reason(reason: string): boolean
    copy_profile_specific_ext(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    fb_get_fci(): number
    fb_get_fci_length(): number
    fb_get_media_ssrc(): number
    fb_get_sender_ssrc(): number
    fb_get_type(): RTCPFBType
    fb_set_fci_length(wordlen: number): boolean
    fb_set_media_ssrc(ssrc: number): void
    fb_set_sender_ssrc(ssrc: number): void
    fb_set_type(type: RTCPFBType): void
    get_count(): number
    get_length(): number
    get_padding(): boolean
    get_profile_specific_ext(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    get_profile_specific_ext_length(): number
    get_rb(nth: number): [ /* ssrc */ number, /* fractionlost */ number, /* packetslost */ number, /* exthighestseq */ number, /* jitter */ number, /* lsr */ number, /* dlsr */ number ]
    get_rb_count(): number
    get_type(): RTCPType
    move_to_next(): boolean
    remove(): boolean
    rr_get_ssrc(): number
    rr_set_ssrc(ssrc: number): void
    sdes_add_entry(type: RTCPSDESType, data: Uint8Array): boolean
    sdes_add_item(ssrc: number): boolean
    sdes_copy_entry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    sdes_first_entry(): boolean
    sdes_first_item(): boolean
    sdes_get_entry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    sdes_get_item_count(): number
    sdes_get_ssrc(): number
    sdes_next_entry(): boolean
    sdes_next_item(): boolean
    set_rb(nth: number, ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): void
    sr_get_sender_info(): [ /* ssrc */ number, /* ntptime */ number, /* rtptime */ number, /* packet_count */ number, /* octet_count */ number ]
    sr_set_sender_info(ssrc: number, ntptime: number, rtptime: number, packet_count: number, octet_count: number): void
    xr_first_rb(): boolean
    xr_get_block_length(): number
    xr_get_block_type(): RTCPXRType
    xr_get_dlrr_block(nth: number, ssrc: number, last_rr: number, delay: number): boolean
    xr_get_prt_by_seq(seq: number, receipt_time: number): boolean
    xr_get_prt_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number): boolean
    xr_get_rle_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number, chunk_count: number): boolean
    xr_get_rle_nth_chunk(nth: number, chunk: number): boolean
    xr_get_rrt(timestamp: number): boolean
    xr_get_ssrc(): number
    xr_get_summary_info(ssrc: number, begin_seq: number, end_seq: number): boolean
    xr_get_summary_jitter(min_jitter: number, max_jitter: number, mean_jitter: number, dev_jitter: number): boolean
    xr_get_summary_pkt(lost_packets: number, dup_packets: number): boolean
    xr_get_summary_ttl(is_ipv4: boolean, min_ttl: number, max_ttl: number, mean_ttl: number, dev_ttl: number): boolean
    xr_get_voip_burst_metrics(burst_density: number, gap_density: number, burst_duration: number, gap_duration: number): boolean
    xr_get_voip_configuration_params(gmin: number, rx_config: number): boolean
    xr_get_voip_delay_metrics(roundtrip_delay: number, end_system_delay: number): boolean
    xr_get_voip_jitter_buffer_params(jb_nominal: number, jb_maximum: number, jb_abs_max: number): boolean
    xr_get_voip_metrics_ssrc(ssrc: number): boolean
    xr_get_voip_packet_metrics(loss_rate: number, discard_rate: number): boolean
    xr_get_voip_quality_metrics(r_factor: number, ext_r_factor: number, mos_lq: number, mos_cq: number): boolean
    xr_get_voip_signal_metrics(signal_level: number, noise_level: number, rerl: number, gmin: number): boolean
    xr_next_rb(): boolean
    static name: string
}
abstract class RTPBaseAudioPayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadClass */
    readonly parent_class: RTPBasePayloadClass
    static name: string
}
class RTPBaseAudioPayloadPrivate {
    static name: string
}
abstract class RTPBaseDepayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBaseDepayloadClass */
    readonly parent_class: Gst.ElementClass
    readonly set_caps: (filter: RTPBaseDepayload, caps: Gst.Caps) => boolean
    readonly process: (base: RTPBaseDepayload, in_: Gst.Buffer) => Gst.Buffer
    readonly packet_lost: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    readonly handle_event: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    readonly process_rtp_packet: (base: RTPBaseDepayload, rtp_buffer: RTPBuffer) => Gst.Buffer
    static name: string
}
class RTPBaseDepayloadPrivate {
    static name: string
}
abstract class RTPBasePayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBasePayloadClass */
    readonly parent_class: Gst.ElementClass
    readonly get_caps: (payload: RTPBasePayload, pad: Gst.Pad, filter: Gst.Caps) => Gst.Caps
    readonly set_caps: (payload: RTPBasePayload, caps: Gst.Caps) => boolean
    readonly handle_buffer: (payload: RTPBasePayload, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly sink_event: (payload: RTPBasePayload, event: Gst.Event) => boolean
    readonly src_event: (payload: RTPBasePayload, event: Gst.Event) => boolean
    readonly query: (payload: RTPBasePayload, pad: Gst.Pad, query: Gst.Query) => boolean
    static name: string
}
class RTPBasePayloadPrivate {
    static name: string
}
class RTPBuffer {
    /* Fields of GstRtp-1.0.GstRtp.RTPBuffer */
    readonly buffer: Gst.Buffer
    readonly state: number
    readonly data: object[]
    readonly size: number[]
    readonly map: Gst.MapInfo[]
    /* Methods of GstRtp-1.0.GstRtp.RTPBuffer */
    add_extension_onebyte_header(id: number, data: Uint8Array): boolean
    add_extension_twobytes_header(appbits: number, id: number, data: Uint8Array): boolean
    get_csrc(idx: number): number
    get_csrc_count(): number
    get_extension(): boolean
    get_extension_data(): [ /* returnType */ GLib.Bytes, /* bits */ number ]
    get_extension_onebyte_header(id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    get_extension_twobytes_header(id: number, nth: number): [ /* returnType */ boolean, /* appbits */ number, /* data */ Uint8Array ]
    get_header_len(): number
    get_marker(): boolean
    get_packet_len(): number
    get_padding(): boolean
    get_payload_buffer(): Gst.Buffer
    get_payload(): GLib.Bytes
    get_payload_len(): number
    get_payload_subbuffer(offset: number, len: number): Gst.Buffer
    get_payload_type(): number
    get_seq(): number
    get_ssrc(): number
    get_timestamp(): number
    get_version(): number
    pad_to(len: number): void
    remove_extension_data(): void
    set_csrc(idx: number, csrc: number): void
    set_extension(extension: boolean): void
    set_extension_data(bits: number, length: number): boolean
    set_marker(marker: boolean): void
    set_packet_len(len: number): void
    set_padding(padding: boolean): void
    set_payload_type(payload_type: number): void
    set_seq(seq: number): void
    set_ssrc(ssrc: number): void
    set_timestamp(timestamp: number): void
    set_version(version: number): void
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void
    static calc_header_len(csrc_count: number): number
    static calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number
    static calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number
    static compare_seqnum(seqnum1: number, seqnum2: number): number
    static default_clock_rate(payload_type: number): number
    static ext_timestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
    static get_extension_onebyte_header_from_bytes(bytes: GLib.Bytes, bit_pattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
    static new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    static new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    static new_copy_data(data: Uint8Array): Gst.Buffer
    static new_take_data(data: Uint8Array): Gst.Buffer
}
abstract class RTPHeaderExtensionClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass */
    readonly parent_class: Gst.ElementClass
    readonly get_supported_flags: (ext: RTPHeaderExtension) => RTPHeaderExtensionFlags
    readonly get_max_size: (ext: RTPHeaderExtension, input_meta: Gst.Buffer) => number
    readonly write: (ext: RTPHeaderExtension, input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array) => number
    readonly read: (ext: RTPHeaderExtension, read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer) => boolean
    readonly set_non_rtp_sink_caps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    readonly update_non_rtp_src_caps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    readonly set_attributes: (ext: RTPHeaderExtension, direction: RTPHeaderExtensionDirection, attributes: string) => boolean
    readonly set_caps_from_attributes: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    /* Methods of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass */
    static set_uri(klass: RTPHeaderExtension | Function | GObject.Type, uri: string): void
    static name: string
}
class RTPPayloadInfo {
    /* Fields of GstRtp-1.0.GstRtp.RTPPayloadInfo */
    readonly payload_type: number
    readonly media: string
    readonly encoding_name: string
    readonly clock_rate: number
    readonly encoding_parameters: string
    readonly bitrate: number
    static name: string
    /* Static methods and pseudo-constructors */
    static for_name(media: string, encoding_name: string): RTPPayloadInfo
    static for_pt(payload_type: number): RTPPayloadInfo
}
class RTPSourceMeta {
    /* Fields of GstRtp-1.0.GstRtp.RTPSourceMeta */
    readonly meta: Gst.Meta
    readonly ssrc: number
    readonly ssrc_valid: boolean
    readonly csrc: number[]
    readonly csrc_count: number
    /* Methods of GstRtp-1.0.GstRtp.RTPSourceMeta */
    append_csrc(csrc: number, csrc_count: number): boolean
    get_source_count(): number
    set_ssrc(ssrc?: number | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
}
export default GstRtp;