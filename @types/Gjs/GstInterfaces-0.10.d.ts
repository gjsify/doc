/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstInterfaces-0.10
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstInterfaces {

enum ColorBalanceType {
    HARDWARE,
    SOFTWARE,
}
enum MixerMessageType {
    INVALID,
    MUTE_TOGGLED,
    RECORD_TOGGLED,
    VOLUME_CHANGED,
    OPTION_CHANGED,
    OPTIONS_LIST_CHANGED,
    MIXER_CHANGED,
}
enum MixerType {
    HARDWARE,
    SOFTWARE,
}
enum NavigationCommand {
    INVALID,
    MENU1,
    MENU2,
    MENU3,
    MENU4,
    MENU5,
    MENU6,
    MENU7,
    LEFT,
    RIGHT,
    UP,
    DOWN,
    ACTIVATE,
    PREV_ANGLE,
    NEXT_ANGLE,
}
enum NavigationEventType {
    INVALID,
    KEY_PRESS,
    KEY_RELEASE,
    MOUSE_BUTTON_PRESS,
    MOUSE_BUTTON_RELEASE,
    MOUSE_MOVE,
    COMMAND,
}
enum NavigationMessageType {
    INVALID,
    MOUSE_OVER,
    COMMANDS_CHANGED,
    ANGLES_CHANGED,
}
enum NavigationQueryType {
    INVALID,
    COMMANDS,
    ANGLES,
}
enum StreamVolumeFormat {
    LINEAR,
    CUBIC,
    DB,
}
enum MixerFlags {
    NONE,
    AUTO_NOTIFICATIONS,
    HAS_WHITELIST,
    GROUPING,
}
enum MixerTrackFlags {
    INPUT,
    OUTPUT,
    MUTE,
    RECORD,
    MASTER,
    SOFTWARE,
    NO_RECORD,
    NO_MUTE,
    WHITELIST,
    READONLY,
    WRITEONLY,
}
enum TunerChannelFlags {
    INPUT,
    OUTPUT,
    FREQUENCY,
    AUDIO,
}
function interfaces_marshal_VOID__OBJECT_BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function interfaces_marshal_VOID__OBJECT_INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function interfaces_marshal_VOID__OBJECT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function interfaces_marshal_VOID__OBJECT_STRING(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function interfaces_marshal_VOID__OBJECT_ULONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object): void
function mixer_message_get_type(message: Gst.Message): MixerMessageType
function mixer_message_parse_mute_toggled(message: Gst.Message, track: MixerTrack, mute: boolean): void
function mixer_message_parse_option_changed(message: Gst.Message, options: MixerOptions, value: string): void
function mixer_message_parse_options_list_changed(message: Gst.Message, options: MixerOptions): void
function mixer_message_parse_record_toggled(message: Gst.Message, track: MixerTrack, record: boolean): void
function mixer_message_parse_volume_changed(message: Gst.Message, track: MixerTrack, volumes: number, num_channels: number): void
function navigation_event_get_type(event: Gst.Event): NavigationEventType
function navigation_event_parse_command(event: Gst.Event, command: NavigationCommand): boolean
function navigation_event_parse_key_event(event: Gst.Event, key: string): boolean
function navigation_event_parse_mouse_button_event(event: Gst.Event, button: number, x: number, y: number): boolean
function navigation_event_parse_mouse_move_event(event: Gst.Event, x: number, y: number): boolean
function navigation_message_get_type(message: Gst.Message): NavigationMessageType
function navigation_message_parse_angles_changed(message: Gst.Message, cur_angle: number, n_angles: number): boolean
function navigation_message_parse_mouse_over(message: Gst.Message, active: boolean): boolean
function navigation_query_get_type(query: Gst.Query): NavigationQueryType
function navigation_query_parse_angles(query: Gst.Query, cur_angle: number, n_angles: number): boolean
function navigation_query_parse_commands_length(query: Gst.Query, n_cmds: number): boolean
function navigation_query_parse_commands_nth(query: Gst.Query, nth: number, cmd: NavigationCommand): boolean
function navigation_query_set_angles(query: Gst.Query, cur_angle: number, n_angles: number): void
function navigation_query_set_commandsv(query: Gst.Query, n_cmds: number, cmds: NavigationCommand): void
function stream_volume_convert_volume(from: StreamVolumeFormat, to: StreamVolumeFormat, val: number): number
interface ColorBalance_ConstructProps extends Gst.Element_ConstructProps {
}
class ColorBalance {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.ColorBalance */
    get_balance_type(): ColorBalanceType
    get_value(channel: ColorBalanceChannel): number
    list_channels(): object[]
    set_value(channel: ColorBalanceChannel, value: number): void
    value_changed(channel: ColorBalanceChannel, value: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): boolean
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): boolean
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): boolean
    remove_pad(pad: Gst.Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: number, stop_type: Gst.SeekType, stop: number): boolean
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): boolean
    post_message(message: Gst.Message): boolean
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of GstInterfaces-0.10.GstInterfaces.ColorBalance */
    vfunc_supported(iface_type: GObject.Type): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): boolean
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstInterfaces-0.10.GstInterfaces.ColorBalance */
    connect(sigName: "value-changed", callback: (($obj: ColorBalance, object: ColorBalanceChannel, p0: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ColorBalance, object: ColorBalanceChannel, p0: number) => void)): number
    emit(sigName: "value-changed", object: ColorBalanceChannel, p0: number): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: ColorBalance) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: ColorBalance) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: ColorBalance, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: ColorBalance, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: ColorBalance, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: ColorBalance, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ColorBalance, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ColorBalance, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ColorBalance, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ColorBalance, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: ColorBalance, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ColorBalance, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: ColorBalance, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ColorBalance, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorBalance, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColorBalance, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ColorBalance_ConstructProps)
    _init (config?: ColorBalance_ConstructProps): void
    static $gtype: GObject.Type
}
interface Mixer_ConstructProps extends Gst.Element_ConstructProps {
}
class Mixer {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.Mixer */
    get_mixer_flags(): MixerFlags
    get_mixer_type(): MixerType
    get_option(opts: MixerOptions): string
    get_volume(track: MixerTrack, volumes: number): void
    list_tracks(): object[]
    mixer_changed(): void
    mute_toggled(track: MixerTrack, mute: boolean): void
    option_changed(opts: MixerOptions, value: string): void
    options_list_changed(opts: MixerOptions): void
    record_toggled(track: MixerTrack, record: boolean): void
    set_mute(track: MixerTrack, mute: boolean): void
    set_option(opts: MixerOptions, value: string): void
    set_record(track: MixerTrack, record: boolean): void
    set_volume(track: MixerTrack, volumes: number): void
    volume_changed(track: MixerTrack, volumes: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): boolean
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): boolean
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): boolean
    remove_pad(pad: Gst.Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: number, stop_type: Gst.SeekType, stop: number): boolean
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): boolean
    post_message(message: Gst.Message): boolean
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of GstInterfaces-0.10.GstInterfaces.Mixer */
    vfunc_supported(iface_type: GObject.Type): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): boolean
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstInterfaces-0.10.GstInterfaces.Mixer */
    connect(sigName: "mute-toggled", callback: (($obj: Mixer, object: MixerTrack, p0: boolean) => void)): number
    connect_after(sigName: "mute-toggled", callback: (($obj: Mixer, object: MixerTrack, p0: boolean) => void)): number
    emit(sigName: "mute-toggled", object: MixerTrack, p0: boolean): void
    connect(sigName: "option-changed", callback: (($obj: Mixer, object: MixerOptions, p0: string) => void)): number
    connect_after(sigName: "option-changed", callback: (($obj: Mixer, object: MixerOptions, p0: string) => void)): number
    emit(sigName: "option-changed", object: MixerOptions, p0: string): void
    connect(sigName: "record-toggled", callback: (($obj: Mixer, object: MixerTrack, p0: boolean) => void)): number
    connect_after(sigName: "record-toggled", callback: (($obj: Mixer, object: MixerTrack, p0: boolean) => void)): number
    emit(sigName: "record-toggled", object: MixerTrack, p0: boolean): void
    connect(sigName: "volume-changed", callback: (($obj: Mixer, object: MixerTrack, p0: object) => void)): number
    connect_after(sigName: "volume-changed", callback: (($obj: Mixer, object: MixerTrack, p0: object) => void)): number
    emit(sigName: "volume-changed", object: MixerTrack, p0: object): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Mixer) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Mixer) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Mixer, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Mixer, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Mixer, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Mixer, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Mixer, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Mixer, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Mixer, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Mixer, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Mixer, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Mixer, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Mixer, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Mixer, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Mixer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Mixer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Mixer_ConstructProps)
    _init (config?: Mixer_ConstructProps): void
    static $gtype: GObject.Type
}
class Navigation {
    /* Methods of GstInterfaces-0.10.GstInterfaces.Navigation */
    send_command(command: NavigationCommand): void
    send_event(structure: Gst.Structure): void
    send_key_event(event: string, key: string): void
    send_mouse_event(event: string, button: number, x: number, y: number): void
    /* Virtual methods of GstInterfaces-0.10.GstInterfaces.Navigation */
    vfunc_send_event(structure: Gst.Structure): void
    static name: string
}
class PropertyProbe {
    /* Methods of GstInterfaces-0.10.GstInterfaces.PropertyProbe */
    get_properties(): object[]
    get_property(name: string): GObject.ParamSpec
    get_values(pspec: GObject.ParamSpec): GObject.ValueArray
    get_values_name(name: string): GObject.ValueArray
    needs_probe(pspec: GObject.ParamSpec): boolean
    needs_probe_name(name: string): boolean
    probe_and_get_values(pspec: GObject.ParamSpec): GObject.ValueArray
    probe_and_get_values_name(name: string): GObject.ValueArray
    probe_property(pspec: GObject.ParamSpec): void
    probe_property_name(name: string): void
    /* Virtual methods of GstInterfaces-0.10.GstInterfaces.PropertyProbe */
    vfunc_get_properties(): object[]
    vfunc_get_values(prop_id: number, pspec: GObject.ParamSpec): GObject.ValueArray
    vfunc_needs_probe(prop_id: number, pspec: GObject.ParamSpec): boolean
    vfunc_probe_property(prop_id: number, pspec: GObject.ParamSpec): void
    /* Signals of GstInterfaces-0.10.GstInterfaces.PropertyProbe */
    connect(sigName: "probe-needed", callback: (($obj: PropertyProbe, object: object) => void)): number
    connect_after(sigName: "probe-needed", callback: (($obj: PropertyProbe, object: object) => void)): number
    emit(sigName: "probe-needed", object: object): void
    static name: string
}
class StreamVolume {
    /* Properties of GstInterfaces-0.10.GstInterfaces.StreamVolume */
    mute: boolean
    volume: number
    /* Methods of GstInterfaces-0.10.GstInterfaces.StreamVolume */
    get_mute(): boolean
    get_volume(format: StreamVolumeFormat): number
    set_mute(mute: boolean): void
    set_volume(format: StreamVolumeFormat, val: number): void
    static name: string
}
interface Tuner_ConstructProps extends Gst.Element_ConstructProps {
}
class Tuner {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.Tuner */
    channel_changed(channel: TunerChannel): void
    frequency_changed(channel: TunerChannel, frequency: number): void
    get_frequency(channel: TunerChannel): number
    list_channels(): object[]
    list_norms(): object[]
    norm_changed(norm: TunerNorm): void
    set_channel(channel: TunerChannel): void
    set_frequency(channel: TunerChannel, frequency: number): void
    set_norm(norm: TunerNorm): void
    signal_changed(channel: TunerChannel, signal: number): void
    signal_strength(channel: TunerChannel): number
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): boolean
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): boolean
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): boolean
    remove_pad(pad: Gst.Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: number, stop_type: Gst.SeekType, stop: number): boolean
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): boolean
    post_message(message: Gst.Message): boolean
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of GstInterfaces-0.10.GstInterfaces.Tuner */
    vfunc_supported(iface_type: GObject.Type): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): boolean
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstInterfaces-0.10.GstInterfaces.Tuner */
    connect(sigName: "channel-changed", callback: (($obj: Tuner, object: TunerChannel) => void)): number
    connect_after(sigName: "channel-changed", callback: (($obj: Tuner, object: TunerChannel) => void)): number
    emit(sigName: "channel-changed", object: TunerChannel): void
    connect(sigName: "frequency-changed", callback: (($obj: Tuner, object: TunerChannel, p0: number) => void)): number
    connect_after(sigName: "frequency-changed", callback: (($obj: Tuner, object: TunerChannel, p0: number) => void)): number
    emit(sigName: "frequency-changed", object: TunerChannel, p0: number): void
    connect(sigName: "norm-changed", callback: (($obj: Tuner, object: TunerNorm) => void)): number
    connect_after(sigName: "norm-changed", callback: (($obj: Tuner, object: TunerNorm) => void)): number
    emit(sigName: "norm-changed", object: TunerNorm): void
    connect(sigName: "signal-changed", callback: (($obj: Tuner, object: TunerChannel, p0: number) => void)): number
    connect_after(sigName: "signal-changed", callback: (($obj: Tuner, object: TunerChannel, p0: number) => void)): number
    emit(sigName: "signal-changed", object: TunerChannel, p0: number): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Tuner) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Tuner) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Tuner, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Tuner, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Tuner, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Tuner, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Tuner, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Tuner, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Tuner, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Tuner, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Tuner, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Tuner, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: Tuner, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Tuner, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tuner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tuner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tuner_ConstructProps)
    _init (config?: Tuner_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoOrientation_ConstructProps extends Gst.Element_ConstructProps {
}
class VideoOrientation {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.VideoOrientation */
    get_hcenter(center: number): boolean
    get_hflip(flip: boolean): boolean
    get_vcenter(center: number): boolean
    get_vflip(flip: boolean): boolean
    set_hcenter(center: number): boolean
    set_hflip(flip: boolean): boolean
    set_vcenter(center: number): boolean
    set_vflip(flip: boolean): boolean
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): boolean
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): boolean
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): boolean
    remove_pad(pad: Gst.Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: number, stop_type: Gst.SeekType, stop: number): boolean
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): boolean
    post_message(message: Gst.Message): boolean
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of GstInterfaces-0.10.GstInterfaces.VideoOrientation */
    vfunc_get_hcenter(center: number): boolean
    vfunc_get_hflip(flip: boolean): boolean
    vfunc_get_vcenter(center: number): boolean
    vfunc_get_vflip(flip: boolean): boolean
    vfunc_set_hcenter(center: number): boolean
    vfunc_set_hflip(flip: boolean): boolean
    vfunc_set_vcenter(center: number): boolean
    vfunc_set_vflip(flip: boolean): boolean
    vfunc_supported(iface_type: GObject.Type): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): boolean
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: VideoOrientation) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: VideoOrientation) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: VideoOrientation, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: VideoOrientation, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: VideoOrientation, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: VideoOrientation, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: VideoOrientation, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: VideoOrientation, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: VideoOrientation, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: VideoOrientation, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: VideoOrientation, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: VideoOrientation, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: VideoOrientation, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: VideoOrientation, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: VideoOrientation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: VideoOrientation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: VideoOrientation_ConstructProps)
    _init (config?: VideoOrientation_ConstructProps): void
    static $gtype: GObject.Type
}
interface XOverlay_ConstructProps extends Gst.Element_ConstructProps {
}
class XOverlay {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Gst.Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: Gst.State
    readonly next_state: Gst.State
    readonly pending_state: Gst.State
    readonly last_return: Gst.StateChangeReturn
    readonly bus: Gst.Bus
    readonly clock: Gst.Clock
    readonly base_time: Gst.ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Gst.Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GstInterfaces-0.10.GstInterfaces.XOverlay */
    expose(): void
    got_xwindow_id(xwindow_id: number): void
    handle_events(handle_events: boolean): void
    prepare_xwindow_id(): void
    set_render_rectangle(x: number, y: number, width: number, height: number): boolean
    set_xwindow_id(xwindow_id: number): void
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Gst.Clock
    get_clock(): Gst.Clock
    set_clock(clock: Gst.Clock): boolean
    set_base_time(time: Gst.ClockTime): void
    get_base_time(): Gst.ClockTime
    set_start_time(time: Gst.ClockTime): void
    get_start_time(): Gst.ClockTime
    is_indexable(): boolean
    set_index(index: Gst.Index): void
    get_index(): Gst.Index
    set_bus(bus: Gst.Bus): void
    get_bus(): Gst.Bus
    add_pad(pad: Gst.Pad): boolean
    remove_pad(pad: Gst.Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Gst.Pad
    get_static_pad(name: string): Gst.Pad
    get_request_pad(name: string): Gst.Pad
    release_request_pad(pad: Gst.Pad): void
    iterate_pads(): Gst.Iterator
    iterate_src_pads(): Gst.Iterator
    iterate_sink_pads(): Gst.Iterator
    send_event(event: Gst.Event): boolean
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, cur_type: Gst.SeekType, cur: number, stop_type: Gst.SeekType, stop: number): boolean
    get_query_types(): Gst.QueryType
    query(query: Gst.Query): boolean
    post_message(message: Gst.Message): boolean
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    set_state(state: Gst.State): Gst.StateChangeReturn
    abort_state(): void
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): Gst.ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Gst.Pad, caps: Gst.Caps): Gst.Pad
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate
    link(dest: Gst.Element): boolean
    link_filtered(dest: Gst.Element, filter: Gst.Caps): boolean
    unlink(dest: Gst.Element): void
    link_pads(srcpadname: string, dest: Gst.Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Gst.Element, destpadname: string, flags: Gst.PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Gst.Element, destpadname: string, filter: Gst.Caps): boolean
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Gst.Pad, list: Gst.TagList): void
    found_tags(list: Gst.TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Gst.Object): boolean
    get_parent(): Gst.Object
    unparent(): void
    has_ancestor(ancestor: Gst.Object): boolean
    replace(newobj: Gst.Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of GstInterfaces-0.10.GstInterfaces.XOverlay */
    vfunc_supported(iface_type: GObject.Type): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name: string): Gst.Pad
    vfunc_release_pad(pad: Gst.Pad): void
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State, /* pending */ Gst.State ]
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    vfunc_set_bus(bus: Gst.Bus): void
    vfunc_provide_clock(): Gst.Clock
    vfunc_set_clock(clock: Gst.Clock): boolean
    vfunc_get_index(): Gst.Index
    vfunc_set_index(index: Gst.Index): void
    vfunc_send_event(event: Gst.Event): boolean
    vfunc_get_query_types(): Gst.QueryType
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: XOverlay) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: XOverlay) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: XOverlay, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: XOverlay, object: Gst.Pad) => void)): number
    emit(sigName: "pad-added", object: Gst.Pad): void
    connect(sigName: "pad-removed", callback: (($obj: XOverlay, object: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: XOverlay, object: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", object: Gst.Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: XOverlay, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: XOverlay, object: Gst.Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Gst.Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: XOverlay, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: XOverlay, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: XOverlay, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: XOverlay, object: Gst.Object) => void)): number
    emit(sigName: "parent-set", object: Gst.Object): void
    connect(sigName: "parent-unset", callback: (($obj: XOverlay, object: Gst.Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: XOverlay, object: Gst.Object) => void)): number
    emit(sigName: "parent-unset", object: Gst.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XOverlay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XOverlay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XOverlay_ConstructProps)
    _init (config?: XOverlay_ConstructProps): void
    static $gtype: GObject.Type
}
interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}
class ColorBalanceChannel {
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannel */
    connect(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, object: number) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: ColorBalanceChannel, object: number) => void)): number
    emit(sigName: "value-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColorBalanceChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ColorBalanceChannel_ConstructProps)
    _init (config?: ColorBalanceChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface MixerOptions_ConstructProps extends MixerTrack_ConstructProps {
}
class MixerOptions {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    readonly parent: GObject.Object
    readonly label: string
    readonly flags: MixerTrackFlags
    readonly num_channels: number
    readonly min_volume: number
    readonly max_volume: number
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerOptions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerOptions_ConstructProps)
    _init (config?: MixerOptions_ConstructProps): void
    static $gtype: GObject.Type
}
interface MixerTrack_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    index?: number
    untranslated_label?: string
}
class MixerTrack {
    /* Properties of GstInterfaces-0.10.GstInterfaces.MixerTrack */
    readonly flags: number
    readonly label: string
    readonly max_volume: number
    readonly min_volume: number
    readonly num_channels: number
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-volume", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-volume", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-volume", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-volume", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-channels", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-channels", callback: (($obj: MixerTrack, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MixerTrack_ConstructProps)
    _init (config?: MixerTrack_ConstructProps): void
    static $gtype: GObject.Type
}
interface TunerChannel_ConstructProps extends GObject.Object_ConstructProps {
}
class TunerChannel {
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstInterfaces-0.10.GstInterfaces.TunerChannel */
    connect(sigName: "frequency-changed", callback: (($obj: TunerChannel, object: number) => void)): number
    connect_after(sigName: "frequency-changed", callback: (($obj: TunerChannel, object: number) => void)): number
    emit(sigName: "frequency-changed", object: number): void
    connect(sigName: "signal-changed", callback: (($obj: TunerChannel, object: number) => void)): number
    connect_after(sigName: "signal-changed", callback: (($obj: TunerChannel, object: number) => void)): number
    emit(sigName: "signal-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TunerChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TunerChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TunerChannel_ConstructProps)
    _init (config?: TunerChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface TunerNorm_ConstructProps extends GObject.Object_ConstructProps {
}
class TunerNorm {
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TunerNorm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TunerNorm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TunerNorm_ConstructProps)
    _init (config?: TunerNorm_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ColorBalanceChannelClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceChannelClass */
    readonly parent: GObject.ObjectClass
    readonly value_changed: (channel: ColorBalanceChannel, value: number) => void
    readonly _gst_reserved: object[]
    static name: string
}
class ColorBalanceClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.ColorBalanceClass */
    readonly klass: GObject.TypeInterface
    readonly balance_type: ColorBalanceType
    readonly list_channels: (balance: ColorBalance) => object[]
    readonly set_value: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    readonly get_value: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    readonly value_changed: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    readonly _gst_reserved: object[]
    static name: string
}
class MixerClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerClass */
    readonly klass: GObject.TypeInterface
    readonly mixer_type: MixerType
    readonly list_tracks: (mixer: Mixer) => object[]
    readonly set_volume: (mixer: Mixer, track: MixerTrack, volumes: number) => void
    readonly get_volume: (mixer: Mixer, track: MixerTrack, volumes: number) => void
    readonly set_mute: (mixer: Mixer, track: MixerTrack, mute: boolean) => void
    readonly set_record: (mixer: Mixer, track: MixerTrack, record: boolean) => void
    readonly mute_toggled: (mixer: Mixer, channel: MixerTrack, mute: boolean) => void
    readonly record_toggled: (mixer: Mixer, channel: MixerTrack, record: boolean) => void
    readonly volume_changed: (mixer: Mixer, channel: MixerTrack, volumes: number) => void
    readonly set_option: (mixer: Mixer, opts: MixerOptions, value: string) => void
    readonly get_option: (mixer: Mixer, opts: MixerOptions) => string
    readonly option_changed: (mixer: Mixer, opts: MixerOptions, option: string) => void
    readonly get_mixer_flags: (mixer: Mixer) => MixerFlags
    readonly _gst_reserved: object[]
    static name: string
}
abstract class MixerOptionsClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerOptionsClass */
    readonly parent: MixerTrackClass
    readonly _gst_reserved: object[]
    static name: string
}
abstract class MixerTrackClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.MixerTrackClass */
    readonly parent: GObject.ObjectClass
    readonly _gst_reserved: object[]
    static name: string
}
abstract class NavigationInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.NavigationInterface */
    readonly g_iface: GObject.TypeInterface
    readonly send_event: (navigation: Navigation, structure: Gst.Structure) => void
    readonly _gst_reserved: object[]
    static name: string
}
abstract class PropertyProbeInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.PropertyProbeInterface */
    readonly klass: GObject.TypeInterface
    readonly probe_needed: (probe: PropertyProbe, pspec: GObject.ParamSpec) => void
    readonly get_properties: (probe: PropertyProbe) => object[]
    readonly needs_probe: (probe: PropertyProbe, prop_id: number, pspec: GObject.ParamSpec) => boolean
    readonly probe_property: (probe: PropertyProbe, prop_id: number, pspec: GObject.ParamSpec) => void
    readonly get_values: (probe: PropertyProbe, prop_id: number, pspec: GObject.ParamSpec) => GObject.ValueArray
    readonly _gst_reserved: object[]
    static name: string
}
abstract class StreamVolumeInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.StreamVolumeInterface */
    readonly parent: GObject.TypeInterface
    readonly _gst_reserved: object[]
    static name: string
}
abstract class TunerChannelClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerChannelClass */
    readonly parent: GObject.ObjectClass
    readonly frequency_changed: (channel: TunerChannel, frequency: number) => void
    readonly signal_changed: (channel: TunerChannel, signal: number) => void
    readonly _gst_reserved: object[]
    static name: string
}
class TunerClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerClass */
    readonly klass: GObject.TypeInterface
    readonly list_channels: (tuner: Tuner) => object[]
    readonly set_channel: (tuner: Tuner, channel: TunerChannel) => void
    readonly list_norms: (tuner: Tuner) => object[]
    readonly set_norm: (tuner: Tuner, norm: TunerNorm) => void
    readonly set_frequency: (tuner: Tuner, channel: TunerChannel, frequency: number) => void
    readonly get_frequency: (tuner: Tuner, channel: TunerChannel) => number
    readonly signal_strength: (tuner: Tuner, channel: TunerChannel) => number
    readonly channel_changed: (tuner: Tuner, channel: TunerChannel) => void
    readonly norm_changed: (tuner: Tuner, norm: TunerNorm) => void
    readonly frequency_changed: (tuner: Tuner, channel: TunerChannel, frequency: number) => void
    readonly signal_changed: (tuner: Tuner, channel: TunerChannel, signal: number) => void
    readonly _gst_reserved: object[]
    static name: string
}
abstract class TunerNormClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.TunerNormClass */
    readonly parent: GObject.ObjectClass
    readonly _gst_reserved: object[]
    static name: string
}
abstract class VideoOrientationInterface {
    /* Fields of GstInterfaces-0.10.GstInterfaces.VideoOrientationInterface */
    readonly parent: GObject.TypeInterface
    readonly get_hflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    readonly get_vflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    readonly get_hcenter: (video_orientation: VideoOrientation, center: number) => boolean
    readonly get_vcenter: (video_orientation: VideoOrientation, center: number) => boolean
    readonly set_hflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    readonly set_vflip: (video_orientation: VideoOrientation, flip: boolean) => boolean
    readonly set_hcenter: (video_orientation: VideoOrientation, center: number) => boolean
    readonly set_vcenter: (video_orientation: VideoOrientation, center: number) => boolean
    static name: string
}
class XOverlayClass {
    /* Fields of GstInterfaces-0.10.GstInterfaces.XOverlayClass */
    readonly klass: GObject.TypeInterface
    readonly set_xwindow_id: (overlay: XOverlay, xwindow_id: number) => void
    readonly expose: (overlay: XOverlay) => void
    readonly handle_events: (overlay: XOverlay, handle_events: boolean) => void
    readonly set_render_rectangle: (overlay: XOverlay, x: number, y: number, width: number, height: number) => void
    readonly _gst_reserved: object[]
    static name: string
}
}
export default GstInterfaces;