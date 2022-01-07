/**
 * GstNet-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type Gio from './Gio-2.0';

export namespace GstNet {

export const NET_TIME_PACKET_SIZE: number
export const PTP_CLOCK_ID_NONE: number
export const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string
export const PTP_STATISTICS_NEW_DOMAIN_FOUND: string
export const PTP_STATISTICS_PATH_DELAY_MEASURED: string
export const PTP_STATISTICS_TIME_UPDATED: string
function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta
function buffer_add_net_control_message_meta(buffer: Gst.Buffer, message: Gio.SocketControlMessage): NetControlMessageMeta
function buffer_get_net_address_meta(buffer: Gst.Buffer): NetAddressMeta
function net_address_meta_api_get_type(): GObject.Type
function net_address_meta_get_info(): Gst.MetaInfo
function net_control_message_meta_api_get_type(): GObject.Type
function net_control_message_meta_get_info(): Gst.MetaInfo
function net_time_packet_receive(socket: Gio.Socket): [ /* returnType */ NetTimePacket, /* src_address */ Gio.SocketAddress ]
function net_utils_set_socket_tos(socket: Gio.Socket, qos_dscp: number): boolean
function ptp_deinit(): void
function ptp_init(clock_id: number, interfaces?: string[] | null): boolean
function ptp_is_initialized(): boolean
function ptp_is_supported(): boolean
function ptp_statistics_callback_add(callback: PtpStatisticsCallback): number
function ptp_statistics_callback_remove(id: number): void
interface PtpStatisticsCallback {
    (domain: number, stats: Gst.Structure): boolean
}
export interface NetClientClock_ConstructProps extends Gst.SystemClock_ConstructProps {
    address?: string
    base_time?: number
    bus?: Gst.Bus
    minimum_update_interval?: number
    port?: number
    qos_dscp?: number
    round_trip_limit?: number
}
class NetClientClock {
    /* Properties of GstNet-1.0.GstNet.NetClientClock */
    address: string
    bus: Gst.Bus
    readonly internal_clock: Gst.Clock
    minimum_update_interval: number
    port: number
    qos_dscp: number
    round_trip_limit: number
    /* Properties of Gst-1.0.Gst.SystemClock */
    clock_type: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstNet-1.0.GstNet.NetClientClock */
    clock: Gst.SystemClock
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    add_observation(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    add_observation_unapplied(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    adjust_unlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjust_with_calibration(internal_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    get_calibration(): [ /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    get_internal_time(): Gst.ClockTime
    get_master(): Gst.Clock | null
    get_resolution(): Gst.ClockTime
    get_time(): Gst.ClockTime
    get_timeout(): Gst.ClockTime
    is_synced(): boolean
    new_periodic_id(start_time: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    new_single_shot_id(time: Gst.ClockTime): Gst.ClockID
    periodic_id_reinit(id: Gst.ClockID, start_time: Gst.ClockTime, interval: Gst.ClockTime): boolean
    set_calibration(internal: Gst.ClockTime, external: Gst.ClockTime, rate_num: Gst.ClockTime, rate_denom: Gst.ClockTime): void
    set_master(master?: Gst.Clock | null): boolean
    set_resolution(resolution: Gst.ClockTime): Gst.ClockTime
    set_synced(synced: boolean): void
    set_timeout(timeout: Gst.ClockTime): void
    single_shot_id_reinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjust_unlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjust_with_calibration(external_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    wait_for_sync(timeout: Gst.ClockTime): boolean
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
    /* Virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: Gst.ClockTime, new_resolution: Gst.ClockTime): Gst.ClockTime
    vfunc_get_internal_time(): Gst.ClockTime
    vfunc_get_resolution(): Gst.ClockTime
    vfunc_unschedule(entry: Gst.ClockEntry): void
    vfunc_wait(entry: Gst.ClockEntry): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    vfunc_wait_async(entry: Gst.ClockEntry): Gst.ClockReturn
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
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: NetClientClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: NetClientClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: NetClientClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: NetClientClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bus", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::internal-clock", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimum-update-interval", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-update-interval", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos-dscp", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::round-trip-limit", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::round-trip-limit", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock-type", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetClientClock_ConstructProps)
    _init (config?: NetClientClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NetClientClock
    static $gtype: GObject.Type
}
export interface NetTimeProvider_ConstructProps extends Gst.Object_ConstructProps {
    active?: boolean
    address?: string
    clock?: Gst.Clock
    port?: number
    qos_dscp?: number
}
class NetTimeProvider {
    /* Properties of GstNet-1.0.GstNet.NetTimeProvider */
    active: boolean
    qos_dscp: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of Gio-2.0.Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GstNet-1.0.GstNet.NetTimeProvider */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
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
    connect(sigName: "deep-notify", callback: (($obj: NetTimeProvider, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: NetTimeProvider, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos-dscp", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetTimeProvider_ConstructProps)
    _init (config?: NetTimeProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(clock: Gst.Clock, address: string | null, port: number): NetTimeProvider
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface NtpClock_ConstructProps extends NetClientClock_ConstructProps {
}
class NtpClock {
    /* Properties of GstNet-1.0.GstNet.NetClientClock */
    address: string
    bus: Gst.Bus
    readonly internal_clock: Gst.Clock
    minimum_update_interval: number
    port: number
    qos_dscp: number
    round_trip_limit: number
    /* Properties of Gst-1.0.Gst.SystemClock */
    clock_type: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstNet-1.0.GstNet.NtpClock */
    clock: Gst.SystemClock
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    add_observation(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    add_observation_unapplied(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    adjust_unlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjust_with_calibration(internal_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    get_calibration(): [ /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    get_internal_time(): Gst.ClockTime
    get_master(): Gst.Clock | null
    get_resolution(): Gst.ClockTime
    get_time(): Gst.ClockTime
    get_timeout(): Gst.ClockTime
    is_synced(): boolean
    new_periodic_id(start_time: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    new_single_shot_id(time: Gst.ClockTime): Gst.ClockID
    periodic_id_reinit(id: Gst.ClockID, start_time: Gst.ClockTime, interval: Gst.ClockTime): boolean
    set_calibration(internal: Gst.ClockTime, external: Gst.ClockTime, rate_num: Gst.ClockTime, rate_denom: Gst.ClockTime): void
    set_master(master?: Gst.Clock | null): boolean
    set_resolution(resolution: Gst.ClockTime): Gst.ClockTime
    set_synced(synced: boolean): void
    set_timeout(timeout: Gst.ClockTime): void
    single_shot_id_reinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjust_unlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjust_with_calibration(external_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    wait_for_sync(timeout: Gst.ClockTime): boolean
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
    /* Virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: Gst.ClockTime, new_resolution: Gst.ClockTime): Gst.ClockTime
    vfunc_get_internal_time(): Gst.ClockTime
    vfunc_get_resolution(): Gst.ClockTime
    vfunc_unschedule(entry: Gst.ClockEntry): void
    vfunc_wait(entry: Gst.ClockEntry): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    vfunc_wait_async(entry: Gst.ClockEntry): Gst.ClockReturn
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
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: NtpClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: NtpClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: NtpClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: NtpClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bus", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::internal-clock", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimum-update-interval", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-update-interval", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos-dscp", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::round-trip-limit", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::round-trip-limit", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock-type", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NtpClock_ConstructProps)
    _init (config?: NtpClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NtpClock
    static $gtype: GObject.Type
}
export interface PtpClock_ConstructProps extends Gst.SystemClock_ConstructProps {
    domain?: number
}
class PtpClock {
    /* Properties of GstNet-1.0.GstNet.PtpClock */
    readonly grandmaster_clock_id: number
    readonly internal_clock: Gst.Clock
    readonly master_clock_id: number
    /* Properties of Gst-1.0.Gst.SystemClock */
    clock_type: Gst.ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Gst.Object
    /* Fields of GstNet-1.0.GstNet.PtpClock */
    clock: Gst.SystemClock
    /* Fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Fields of Gst-1.0.Gst.Object */
    lock: GLib.Mutex
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    add_observation(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    add_observation_unapplied(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    adjust_unlocked(internal: Gst.ClockTime): Gst.ClockTime
    adjust_with_calibration(internal_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    get_calibration(): [ /* internal */ Gst.ClockTime | null, /* external */ Gst.ClockTime | null, /* rate_num */ Gst.ClockTime | null, /* rate_denom */ Gst.ClockTime | null ]
    get_internal_time(): Gst.ClockTime
    get_master(): Gst.Clock | null
    get_resolution(): Gst.ClockTime
    get_time(): Gst.ClockTime
    get_timeout(): Gst.ClockTime
    is_synced(): boolean
    new_periodic_id(start_time: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    new_single_shot_id(time: Gst.ClockTime): Gst.ClockID
    periodic_id_reinit(id: Gst.ClockID, start_time: Gst.ClockTime, interval: Gst.ClockTime): boolean
    set_calibration(internal: Gst.ClockTime, external: Gst.ClockTime, rate_num: Gst.ClockTime, rate_denom: Gst.ClockTime): void
    set_master(master?: Gst.Clock | null): boolean
    set_resolution(resolution: Gst.ClockTime): Gst.ClockTime
    set_synced(synced: boolean): void
    set_timeout(timeout: Gst.ClockTime): void
    single_shot_id_reinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    unadjust_unlocked(external: Gst.ClockTime): Gst.ClockTime
    unadjust_with_calibration(external_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    wait_for_sync(timeout: Gst.ClockTime): boolean
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
    /* Virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: Gst.ClockTime, new_resolution: Gst.ClockTime): Gst.ClockTime
    vfunc_get_internal_time(): Gst.ClockTime
    vfunc_get_resolution(): Gst.ClockTime
    vfunc_unschedule(entry: Gst.ClockEntry): void
    vfunc_wait(entry: Gst.ClockEntry): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    vfunc_wait_async(entry: Gst.ClockEntry): Gst.ClockReturn
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
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: PtpClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: PtpClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PtpClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PtpClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::grandmaster-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grandmaster-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::internal-clock", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::master-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock-type", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PtpClock_ConstructProps)
    _init (config?: PtpClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, domain: number): PtpClock
    static $gtype: GObject.Type
}
class NetAddressMeta {
    /* Fields of GstNet-1.0.GstNet.NetAddressMeta */
    meta: Gst.Meta
    addr: Gio.SocketAddress
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
abstract class NetClientClockClass {
    /* Fields of GstNet-1.0.GstNet.NetClientClockClass */
    parent_class: Gst.SystemClockClass
    static name: string
}
class NetClientClockPrivate {
    static name: string
}
class NetControlMessageMeta {
    /* Fields of GstNet-1.0.GstNet.NetControlMessageMeta */
    meta: Gst.Meta
    message: Gio.SocketControlMessage
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
class NetTimePacket {
    /* Fields of GstNet-1.0.GstNet.NetTimePacket */
    local_time: Gst.ClockTime
    remote_time: Gst.ClockTime
    /* Methods of GstNet-1.0.GstNet.NetTimePacket */
    copy(): NetTimePacket
    free(): void
    send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean
    serialize(): number
    static name: string
    static new(buffer: Uint8Array[]): NetTimePacket
    constructor(buffer: Uint8Array[])
    /* Static methods and pseudo-constructors */
    static new(buffer: Uint8Array[]): NetTimePacket
    static receive(socket: Gio.Socket): [ /* returnType */ NetTimePacket, /* src_address */ Gio.SocketAddress ]
}
abstract class NetTimeProviderClass {
    /* Fields of GstNet-1.0.GstNet.NetTimeProviderClass */
    parent_class: Gst.ObjectClass
    _gst_reserved: object[]
    static name: string
}
class NetTimeProviderPrivate {
    static name: string
}
abstract class NtpClockClass {
    /* Fields of GstNet-1.0.GstNet.NtpClockClass */
    parent_class: Gst.SystemClockClass
    static name: string
}
abstract class PtpClockClass {
    /* Fields of GstNet-1.0.GstNet.PtpClockClass */
    parent_class: Gst.SystemClockClass
    static name: string
}
class PtpClockPrivate {
    static name: string
}
}
export default GstNet;