/**
 * UPowerGlib-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export enum DeviceKind {
    UNKNOWN,
    LINE_POWER,
    BATTERY,
    UPS,
    MONITOR,
    MOUSE,
    KEYBOARD,
    PDA,
    PHONE,
    MEDIA_PLAYER,
    TABLET,
    COMPUTER,
    LAST,
}
export enum DeviceLevel {
    UNKNOWN,
    NONE,
    DISCHARGING,
    LOW,
    CRITICAL,
    ACTION,
    LAST,
}
export enum DeviceState {
    UNKNOWN,
    CHARGING,
    DISCHARGING,
    EMPTY,
    FULLY_CHARGED,
    PENDING_CHARGE,
    PENDING_DISCHARGE,
    LAST,
}
export enum DeviceTechnology {
    UNKNOWN,
    LITHIUM_ION,
    LITHIUM_POLYMER,
    LITHIUM_IRON_PHOSPHATE,
    LEAD_ACID,
    NICKEL_CADMIUM,
    NICKEL_METAL_HYDRIDE,
    LAST,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function client_glue_interface_info(): Gio.DBusInterfaceInfo
export function client_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function device_glue_interface_info(): Gio.DBusInterfaceInfo
export function device_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export function wakeups_glue_interface_info(): Gio.DBusInterfaceInfo
export function wakeups_glue_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
export class ClientGlue {
    /* Properties of UPowerGlib.ClientGlue */
    daemon_version: string
    lid_is_closed: boolean
    lid_is_present: boolean
    on_battery: boolean
    /* Methods of UPowerGlib.ClientGlue */
    call_enumerate_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_enumerate_devices_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_devices */ string ]
    call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_devices */ string ]
    call_get_critical_action(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_critical_action_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_action */ string ]
    call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_action */ string ]
    call_get_display_device(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_display_device_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_device */ string ]
    call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_device */ string ]
    complete_enumerate_devices(invocation: Gio.DBusMethodInvocation, devices: string): void
    complete_get_critical_action(invocation: Gio.DBusMethodInvocation, action: string): void
    complete_get_display_device(invocation: Gio.DBusMethodInvocation, device: string): void
    emit_device_added(arg_device: string): void
    emit_device_removed(arg_device: string): void
    /* Virtual methods of UPowerGlib.ClientGlue */
    vfunc_device_added(arg_device: string): void
    vfunc_device_removed(arg_device: string): void
    vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: (($obj: ClientGlue, arg_device: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlue, arg_device: string) => void)): number
    emit(sigName: "device-added", arg_device: string): void
    connect(sigName: "device-removed", callback: (($obj: ClientGlue, arg_device: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlue, arg_device: string) => void)): number
    emit(sigName: "device-removed", arg_device: string): void
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class DeviceGlue {
    /* Properties of UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energy_empty: number
    energy_full: number
    energy_full_design: number
    energy_rate: number
    has_history: boolean
    has_statistics: boolean
    icon_name: string
    is_present: boolean
    is_rechargeable: boolean
    luminosity: number
    model: string
    native_path: string
    online: boolean
    percentage: number
    power_supply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    time_to_empty: number
    time_to_full: number
    type: number
    update_time: number
    vendor: string
    voltage: number
    warning_level: number
    /* Methods of UPowerGlib.DeviceGlue */
    call_get_history(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_history_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_history_sync(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_statistics(arg_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_statistics_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_refresh_finish(res: Gio.AsyncResult): boolean
    call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_get_history(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_get_statistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_refresh(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UPowerGlib.DeviceGlue */
    vfunc_handle_get_history(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): boolean
    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean
    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean
    /* Signals of UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): void
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, arg_type: string): void
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export class WakeupsGlue {
    /* Properties of UPowerGlib.WakeupsGlue */
    has_capability: boolean
    /* Methods of UPowerGlib.WakeupsGlue */
    call_get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_data_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_data_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_total(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_total_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_value */ number ]
    call_get_total_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_value */ number ]
    complete_get_data(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_get_total(invocation: Gio.DBusMethodInvocation, value: number): void
    emit_data_changed(): void
    emit_total_changed(arg_value: number): void
    /* Virtual methods of UPowerGlib.WakeupsGlue */
    vfunc_data_changed(): void
    vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_total_changed(arg_value: number): void
    /* Signals of UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlue) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlue) => void)): number
    emit(sigName: "data-changed"): void
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlue, arg_value: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlue, arg_value: number) => void)): number
    emit(sigName: "total-changed", arg_value: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
}
export class Client {
    /* Properties of UPowerGlib.Client */
    readonly daemon_version: string
    readonly lid_is_closed: boolean
    readonly lid_is_present: boolean
    readonly on_battery: boolean
    /* Fields of UPowerGlib.Client */
    parent: GObject.Object
    priv: ClientPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib.Client */
    get_critical_action(): string
    get_daemon_version(): string
    get_devices(): Device[]
    get_display_device(): Device
    get_lid_is_closed(): boolean
    get_lid_is_present(): boolean
    get_on_battery(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of UPowerGlib.Client */
    vfunc_device_added(device: Device): void
    vfunc_device_removed(object_path: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.Client */
    connect(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Client, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: (($obj: Client, object_path: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Client, object_path: string) => void)): number
    emit(sigName: "device-removed", object_path: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-closed", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-present", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::on-battery", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Client
    static $gtype: GObject.Type
}
export interface ClientGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    daemon_version?: string
    lid_is_closed?: boolean
    lid_is_present?: boolean
    on_battery?: boolean
}
export class ClientGlueProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UPowerGlib.ClientGlue */
    daemon_version: string
    lid_is_closed: boolean
    lid_is_present: boolean
    on_battery: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UPowerGlib.ClientGlue */
    call_enumerate_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_enumerate_devices_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_devices */ string ]
    call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_devices */ string ]
    call_get_critical_action(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_critical_action_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_action */ string ]
    call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_action */ string ]
    call_get_display_device(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_display_device_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_device */ string ]
    call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_device */ string ]
    complete_enumerate_devices(invocation: Gio.DBusMethodInvocation, devices: string): void
    complete_get_critical_action(invocation: Gio.DBusMethodInvocation, action: string): void
    complete_get_display_device(invocation: Gio.DBusMethodInvocation, device: string): void
    emit_device_added(arg_device: string): void
    emit_device_removed(arg_device: string): void
    /* Virtual methods of UPowerGlib.ClientGlueProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_device_added(arg_device: string): void
    vfunc_device_removed(arg_device: string): void
    vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: ClientGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: ClientGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: ClientGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: ClientGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: (($obj: ClientGlueProxy, arg_device: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlueProxy, arg_device: string) => void)): number
    emit(sigName: "device-added", arg_device: string): void
    connect(sigName: "device-removed", callback: (($obj: ClientGlueProxy, arg_device: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlueProxy, arg_device: string) => void)): number
    emit(sigName: "device-removed", arg_device: string): void
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientGlueProxy_ConstructProps)
    _init (config?: ClientGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): ClientGlueProxy
    static new_for_bus_finish(res: Gio.AsyncResult): ClientGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): ClientGlueProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface ClientGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    daemon_version?: string
    lid_is_closed?: boolean
    lid_is_present?: boolean
    on_battery?: boolean
}
export class ClientGlueSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib.ClientGlue */
    daemon_version: string
    lid_is_closed: boolean
    lid_is_present: boolean
    on_battery: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UPowerGlib.ClientGlue */
    call_enumerate_devices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_enumerate_devices_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_devices */ string ]
    call_enumerate_devices_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_devices */ string ]
    call_get_critical_action(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_critical_action_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_action */ string ]
    call_get_critical_action_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_action */ string ]
    call_get_display_device(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_display_device_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_device */ string ]
    call_get_display_device_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_device */ string ]
    complete_enumerate_devices(invocation: Gio.DBusMethodInvocation, devices: string): void
    complete_get_critical_action(invocation: Gio.DBusMethodInvocation, action: string): void
    complete_get_display_device(invocation: Gio.DBusMethodInvocation, device: string): void
    emit_device_added(arg_device: string): void
    emit_device_removed(arg_device: string): void
    /* Virtual methods of UPowerGlib.ClientGlueSkeleton */
    vfunc_dup_object(): Gio.DBusObject
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_device_added(arg_device: string): void
    vfunc_device_removed(arg_device: string): void
    vfunc_handle_enumerate_devices(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_critical_action(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_display_device(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.ClientGlue */
    connect(sigName: "device-added", callback: (($obj: ClientGlueSkeleton, arg_device: string) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: ClientGlueSkeleton, arg_device: string) => void)): number
    emit(sigName: "device-added", arg_device: string): void
    connect(sigName: "device-removed", callback: (($obj: ClientGlueSkeleton, arg_device: string) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: ClientGlueSkeleton, arg_device: string) => void)): number
    emit(sigName: "device-removed", arg_device: string): void
    connect(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-enumerate-devices", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-enumerate-devices", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-critical-action", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-critical-action", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-display-device", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-display-device", callback: (($obj: ClientGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-display-device", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::daemon-version", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-version", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-closed", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lid-is-present", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::on-battery", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-battery", callback: (($obj: ClientGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ClientGlueSkeleton_ConstructProps)
    _init (config?: ClientGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ClientGlueSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    capacity?: number
    energy?: number
    energy_empty?: number
    energy_full?: number
    energy_full_design?: number
    energy_rate?: number
    has_history?: boolean
    has_statistics?: boolean
    icon_name?: string
    is_present?: boolean
    is_rechargeable?: boolean
    kind?: number
    luminosity?: number
    model?: string
    native_path?: string
    online?: boolean
    percentage?: number
    power_supply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    time_to_empty?: number
    time_to_full?: number
    update_time?: number
    vendor?: string
    voltage?: number
    warning_level?: number
}
export class Device {
    /* Properties of UPowerGlib.Device */
    capacity: number
    energy: number
    energy_empty: number
    energy_full: number
    energy_full_design: number
    energy_rate: number
    has_history: boolean
    has_statistics: boolean
    icon_name: string
    is_present: boolean
    is_rechargeable: boolean
    kind: number
    luminosity: number
    model: string
    native_path: string
    online: boolean
    percentage: number
    power_supply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    time_to_empty: number
    time_to_full: number
    update_time: number
    vendor: string
    voltage: number
    warning_level: number
    /* Fields of UPowerGlib.Device */
    parent: GObject.Object
    priv: DevicePrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib.Device */
    get_history_sync(type: string, timespec: number, resolution: number, cancellable?: Gio.Cancellable | null): HistoryItem[]
    get_object_path(): string
    get_statistics_sync(type: string, cancellable?: Gio.Cancellable | null): StatsItem[]
    refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    set_object_path_sync(object_path: string, cancellable?: Gio.Cancellable | null): boolean
    to_text(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full-design", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-rate", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-history", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-statistics", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-present", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-rechargeable", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::luminosity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-supply", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::technology", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::temperature", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-time", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::voltage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning-level", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Device
    static kind_from_string(type: string): DeviceKind
    static kind_to_string(type_enum: DeviceKind): string
    static level_from_string(level: string): DeviceLevel
    static level_to_string(level_enum: DeviceLevel): string
    static state_from_string(state: string): DeviceState
    static state_to_string(state_enum: DeviceState): string
    static technology_from_string(technology: string): DeviceTechnology
    static technology_to_string(technology_enum: DeviceTechnology): string
    static $gtype: GObject.Type
}
export interface DeviceGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    capacity?: number
    energy?: number
    energy_empty?: number
    energy_full?: number
    energy_full_design?: number
    energy_rate?: number
    has_history?: boolean
    has_statistics?: boolean
    icon_name?: string
    is_present?: boolean
    is_rechargeable?: boolean
    luminosity?: number
    model?: string
    native_path?: string
    online?: boolean
    percentage?: number
    power_supply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    time_to_empty?: number
    time_to_full?: number
    type?: number
    update_time?: number
    vendor?: string
    voltage?: number
    warning_level?: number
}
export class DeviceGlueProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energy_empty: number
    energy_full: number
    energy_full_design: number
    energy_rate: number
    has_history: boolean
    has_statistics: boolean
    icon_name: string
    is_present: boolean
    is_rechargeable: boolean
    luminosity: number
    model: string
    native_path: string
    online: boolean
    percentage: number
    power_supply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    time_to_empty: number
    time_to_full: number
    type: number
    update_time: number
    vendor: string
    voltage: number
    warning_level: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UPowerGlib.DeviceGlue */
    call_get_history(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_history_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_history_sync(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_statistics(arg_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_statistics_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_refresh_finish(res: Gio.AsyncResult): boolean
    call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_get_history(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_get_statistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_refresh(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UPowerGlib.DeviceGlueProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_handle_get_history(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): boolean
    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean
    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: DeviceGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: DeviceGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: DeviceGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: DeviceGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): void
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, arg_type: string): void
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceGlueProxy_ConstructProps)
    _init (config?: DeviceGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): DeviceGlueProxy
    static new_for_bus_finish(res: Gio.AsyncResult): DeviceGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): DeviceGlueProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface DeviceGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    capacity?: number
    energy?: number
    energy_empty?: number
    energy_full?: number
    energy_full_design?: number
    energy_rate?: number
    has_history?: boolean
    has_statistics?: boolean
    icon_name?: string
    is_present?: boolean
    is_rechargeable?: boolean
    luminosity?: number
    model?: string
    native_path?: string
    online?: boolean
    percentage?: number
    power_supply?: boolean
    serial?: string
    state?: number
    technology?: number
    temperature?: number
    time_to_empty?: number
    time_to_full?: number
    type?: number
    update_time?: number
    vendor?: string
    voltage?: number
    warning_level?: number
}
export class DeviceGlueSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib.DeviceGlue */
    capacity: number
    energy: number
    energy_empty: number
    energy_full: number
    energy_full_design: number
    energy_rate: number
    has_history: boolean
    has_statistics: boolean
    icon_name: string
    is_present: boolean
    is_rechargeable: boolean
    luminosity: number
    model: string
    native_path: string
    online: boolean
    percentage: number
    power_supply: boolean
    serial: string
    state: number
    technology: number
    temperature: number
    time_to_empty: number
    time_to_full: number
    type: number
    update_time: number
    vendor: string
    voltage: number
    warning_level: number
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UPowerGlib.DeviceGlue */
    call_get_history(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_history_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_history_sync(arg_type: string, arg_timespan: number, arg_resolution: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_statistics(arg_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_statistics_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_statistics_sync(arg_type: string, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_refresh(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_refresh_finish(res: Gio.AsyncResult): boolean
    call_refresh_sync(cancellable?: Gio.Cancellable | null): boolean
    complete_get_history(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_get_statistics(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_refresh(invocation: Gio.DBusMethodInvocation): void
    /* Virtual methods of UPowerGlib.DeviceGlueSkeleton */
    vfunc_dup_object(): Gio.DBusObject
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_handle_get_history(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): boolean
    vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean
    vfunc_handle_refresh(invocation: Gio.DBusMethodInvocation): boolean
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.DeviceGlue */
    connect(sigName: "handle-get-history", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    connect_after(sigName: "handle-get-history", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean)): number
    emit(sigName: "handle-get-history", invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number): void
    connect(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    connect_after(sigName: "handle-get-statistics", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean)): number
    emit(sigName: "handle-get-statistics", invocation: Gio.DBusMethodInvocation, arg_type: string): void
    connect(sigName: "handle-refresh", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-refresh", callback: (($obj: DeviceGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-refresh", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "notify::g-flags", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::capacity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-full-design", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::energy-rate", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-history", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-history", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-statistics", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-present", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-rechargeable", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::luminosity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::luminosity", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::native-path", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::native-path", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::online", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::online", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::percentage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::percentage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::power-supply", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::power-supply", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::state", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::technology", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::technology", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::temperature", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::temperature", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-empty", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-to-full", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::update-time", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-time", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::voltage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::voltage", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::warning-level", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::warning-level", callback: (($obj: DeviceGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceGlueSkeleton_ConstructProps)
    _init (config?: DeviceGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceGlueSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface HistoryItem_ConstructProps extends GObject.Object_ConstructProps {
    state?: number
    time?: number
    value?: number
}
export class HistoryItem {
    /* Properties of UPowerGlib.HistoryItem */
    state: number
    time: number
    value: number
    /* Fields of UPowerGlib.HistoryItem */
    parent: GObject.Object
    priv: HistoryItemPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib.HistoryItem */
    get_state(): DeviceState
    get_time(): number
    get_value(): number
    set_from_string(text: string): boolean
    set_state(state: DeviceState): void
    set_time(time: number): void
    set_time_to_present(): void
    set_value(value: number): void
    to_string(): string
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::state", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::time", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: HistoryItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HistoryItem_ConstructProps)
    _init (config?: HistoryItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HistoryItem
    static $gtype: GObject.Type
}
export interface StatsItem_ConstructProps extends GObject.Object_ConstructProps {
    accuracy?: number
    value?: number
}
export class StatsItem {
    /* Properties of UPowerGlib.StatsItem */
    accuracy: number
    value: number
    /* Fields of UPowerGlib.StatsItem */
    parent: GObject.Object
    priv: StatsItemPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib.StatsItem */
    get_accuracy(): number
    get_value(): number
    set_accuracy(accuracy: number): void
    set_value(value: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accuracy", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accuracy", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: StatsItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StatsItem_ConstructProps)
    _init (config?: StatsItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StatsItem
    static $gtype: GObject.Type
}
export interface WakeupItem_ConstructProps extends GObject.Object_ConstructProps {
    cmdline?: string
    details?: string
    id?: number
    is_userspace?: boolean
    old?: number
    value?: number
}
export class WakeupItem {
    /* Properties of UPowerGlib.WakeupItem */
    cmdline: string
    details: string
    id: number
    is_userspace: boolean
    old: number
    value: number
    /* Fields of UPowerGlib.WakeupItem */
    parent: GObject.Object
    priv: WakeupItemPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib.WakeupItem */
    get_cmdline(): string
    get_details(): string
    get_id(): number
    get_is_userspace(): boolean
    get_old(): number
    get_value(): number
    set_cmdline(cmdline: string): void
    set_details(details: string): void
    set_id(id: number): void
    set_is_userspace(is_userspace: boolean): void
    set_old(old: number): void
    set_value(value: number): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cmdline", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cmdline", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::details", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-userspace", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-userspace", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::old", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::old", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: WakeupItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WakeupItem_ConstructProps)
    _init (config?: WakeupItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WakeupItem
    static $gtype: GObject.Type
}
export interface Wakeups_ConstructProps extends GObject.Object_ConstructProps {
}
export class Wakeups {
    /* Fields of UPowerGlib.Wakeups */
    parent: GObject.Object
    priv: WakeupsPrivate
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of UPowerGlib.Wakeups */
    get_data_sync(cancellable?: Gio.Cancellable | null): WakeupItem[]
    get_has_capability(): boolean
    get_properties_sync(cancellable?: Gio.Cancellable | null): boolean
    get_total_sync(cancellable?: Gio.Cancellable | null): number
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of UPowerGlib.Wakeups */
    vfunc_data_changed(): void
    vfunc_total_changed(value: number): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.Wakeups */
    connect(sigName: "data-changed", callback: (($obj: Wakeups) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: Wakeups) => void)): number
    emit(sigName: "data-changed"): void
    connect(sigName: "total-changed", callback: (($obj: Wakeups, object: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: Wakeups, object: number) => void)): number
    emit(sigName: "total-changed", object: number): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Wakeups, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Wakeups, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Wakeups_ConstructProps)
    _init (config?: Wakeups_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Wakeups
    static $gtype: GObject.Type
}
export interface WakeupsGlueProxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
    has_capability?: boolean
}
export class WakeupsGlueProxy {
    /* Properties of Gio.DBusProxy */
    g_default_timeout: number
    g_interface_info: Gio.DBusInterfaceInfo
    readonly g_name_owner: string
    /* Properties of UPowerGlib.WakeupsGlue */
    has_capability: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusProxy */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_finish(res: Gio.AsyncResult): GLib.Variant
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    get_cached_property(property_name: string): GLib.Variant | null
    get_cached_property_names(): string[] | null
    get_connection(): Gio.DBusConnection
    get_default_timeout(): number
    get_flags(): Gio.DBusProxyFlags
    get_interface_info(): Gio.DBusInterfaceInfo | null
    get_interface_name(): string
    get_name(): string
    get_name_owner(): string | null
    get_object_path(): string
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    set_default_timeout(timeout_msec: number): void
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.AsyncInitable */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    init_finish(res: Gio.AsyncResult): boolean
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject
    get_info(): Gio.DBusInterfaceInfo
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Methods of UPowerGlib.WakeupsGlue */
    call_get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_data_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_data_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_total(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_total_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_value */ number ]
    call_get_total_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_value */ number ]
    complete_get_data(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_get_total(invocation: Gio.DBusMethodInvocation, value: number): void
    emit_data_changed(): void
    emit_total_changed(arg_value: number): void
    /* Virtual methods of UPowerGlib.WakeupsGlueProxy */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    vfunc_dup_object(): Gio.DBusObject
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    vfunc_data_changed(): void
    vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_total_changed(arg_value: number): void
    /* Virtual methods of Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusProxy */
    connect(sigName: "g-properties-changed", callback: (($obj: WakeupsGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: WakeupsGlueProxy, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    connect(sigName: "g-signal", callback: (($obj: WakeupsGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: WakeupsGlueProxy, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlueProxy) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlueProxy) => void)): number
    emit(sigName: "data-changed"): void
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlueProxy, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlueProxy, arg_value: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlueProxy, arg_value: number) => void)): number
    emit(sigName: "total-changed", arg_value: number): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WakeupsGlueProxy_ConstructProps)
    _init (config?: WakeupsGlueProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): WakeupsGlueProxy
    static new_for_bus_finish(res: Gio.AsyncResult): WakeupsGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null): WakeupsGlueProxy
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export interface WakeupsGlueSkeleton_ConstructProps extends Gio.DBusInterfaceSkeleton_ConstructProps {
    has_capability?: boolean
}
export class WakeupsGlueSkeleton {
    /* Properties of Gio.DBusInterfaceSkeleton */
    g_flags: Gio.DBusInterfaceSkeletonFlags
    /* Properties of UPowerGlib.WakeupsGlue */
    has_capability: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gio.DBusInterfaceSkeleton */
    export(connection: Gio.DBusConnection, object_path: string): boolean
    flush(): void
    get_connection(): Gio.DBusConnection
    get_connections(): Gio.DBusConnection[]
    get_flags(): Gio.DBusInterfaceSkeletonFlags
    get_info(): Gio.DBusInterfaceInfo
    get_object_path(): string
    get_properties(): GLib.Variant
    has_connection(connection: Gio.DBusConnection): boolean
    set_flags(flags: Gio.DBusInterfaceSkeletonFlags): void
    unexport(): void
    unexport_from_connection(connection: Gio.DBusConnection): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of Gio.DBusInterface */
    get_object(): Gio.DBusObject
    set_object(object?: Gio.DBusObject | null): void
    /* Methods of UPowerGlib.WakeupsGlue */
    call_get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_data_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_data_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_data */ GLib.Variant ]
    call_get_total(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_total_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_value */ number ]
    call_get_total_sync(cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_value */ number ]
    complete_get_data(invocation: Gio.DBusMethodInvocation, data: GLib.Variant): void
    complete_get_total(invocation: Gio.DBusMethodInvocation, value: number): void
    emit_data_changed(): void
    emit_total_changed(arg_value: number): void
    /* Virtual methods of UPowerGlib.WakeupsGlueSkeleton */
    vfunc_dup_object(): Gio.DBusObject
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_set_object(object?: Gio.DBusObject | null): void
    vfunc_data_changed(): void
    vfunc_handle_get_data(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_get_total(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_total_changed(arg_value: number): void
    /* Virtual methods of Gio.DBusInterfaceSkeleton */
    vfunc_flush(): void
    vfunc_g_authorize_method(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_get_info(): Gio.DBusInterfaceInfo
    vfunc_get_properties(): GLib.Variant
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Gio.DBusInterfaceSkeleton */
    connect(sigName: "g-authorize-method", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "g-authorize-method", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "g-authorize-method", invocation: Gio.DBusMethodInvocation): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of UPowerGlib.WakeupsGlue */
    connect(sigName: "data-changed", callback: (($obj: WakeupsGlueSkeleton) => void)): number
    connect_after(sigName: "data-changed", callback: (($obj: WakeupsGlueSkeleton) => void)): number
    emit(sigName: "data-changed"): void
    connect(sigName: "handle-get-data", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-data", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-data", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "handle-get-total", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    connect_after(sigName: "handle-get-total", callback: (($obj: WakeupsGlueSkeleton, invocation: Gio.DBusMethodInvocation) => boolean)): number
    emit(sigName: "handle-get-total", invocation: Gio.DBusMethodInvocation): void
    connect(sigName: "total-changed", callback: (($obj: WakeupsGlueSkeleton, arg_value: number) => void)): number
    connect_after(sigName: "total-changed", callback: (($obj: WakeupsGlueSkeleton, arg_value: number) => void)): number
    emit(sigName: "total-changed", arg_value: number): void
    connect(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-capability", callback: (($obj: WakeupsGlueSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WakeupsGlueSkeleton_ConstructProps)
    _init (config?: WakeupsGlueSkeleton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WakeupsGlueSkeleton
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of UPowerGlib.ClientClass */
    parent_class: GObject.ObjectClass
    device_added: (client: Client, device: Device) => void
    device_removed: (client: Client, object_path: string) => void
    static name: string
}
export abstract class ClientGlueIface {
    /* Fields of UPowerGlib.ClientGlueIface */
    parent_iface: GObject.TypeInterface
    handle_enumerate_devices: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_critical_action: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_display_device: (object: ClientGlue, invocation: Gio.DBusMethodInvocation) => boolean
    get_daemon_version: (object: ClientGlue) => string
    get_lid_is_closed: (object: ClientGlue) => boolean
    get_lid_is_present: (object: ClientGlue) => boolean
    get_on_battery: (object: ClientGlue) => boolean
    device_added: (object: ClientGlue, arg_device: string) => void
    device_removed: (object: ClientGlue, arg_device: string) => void
    static name: string
}
export abstract class ClientGlueProxyClass {
    /* Fields of UPowerGlib.ClientGlueProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class ClientGlueProxyPrivate {
    static name: string
}
export abstract class ClientGlueSkeletonClass {
    /* Fields of UPowerGlib.ClientGlueSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class ClientGlueSkeletonPrivate {
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class DeviceClass {
    /* Fields of UPowerGlib.DeviceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class DeviceGlueIface {
    /* Fields of UPowerGlib.DeviceGlueIface */
    parent_iface: GObject.TypeInterface
    handle_get_history: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string, arg_timespan: number, arg_resolution: number) => boolean
    handle_get_statistics: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation, arg_type: string) => boolean
    handle_refresh: (object: DeviceGlue, invocation: Gio.DBusMethodInvocation) => boolean
    get_capacity: (object: DeviceGlue) => number
    get_energy: (object: DeviceGlue) => number
    get_energy_empty: (object: DeviceGlue) => number
    get_energy_full: (object: DeviceGlue) => number
    get_energy_full_design: (object: DeviceGlue) => number
    get_energy_rate: (object: DeviceGlue) => number
    get_has_history: (object: DeviceGlue) => boolean
    get_has_statistics: (object: DeviceGlue) => boolean
    get_icon_name: (object: DeviceGlue) => string
    get_is_present: (object: DeviceGlue) => boolean
    get_is_rechargeable: (object: DeviceGlue) => boolean
    get_luminosity: (object: DeviceGlue) => number
    get_model: (object: DeviceGlue) => string
    get_native_path: (object: DeviceGlue) => string
    get_online: (object: DeviceGlue) => boolean
    get_percentage: (object: DeviceGlue) => number
    get_power_supply: (object: DeviceGlue) => boolean
    get_serial: (object: DeviceGlue) => string
    get_state: (object: DeviceGlue) => number
    get_technology: (object: DeviceGlue) => number
    get_temperature: (object: DeviceGlue) => number
    get_time_to_empty: (object: DeviceGlue) => number
    get_time_to_full: (object: DeviceGlue) => number
    get_type_: (object: DeviceGlue) => number
    get_update_time: (object: DeviceGlue) => number
    get_vendor: (object: DeviceGlue) => string
    get_voltage: (object: DeviceGlue) => number
    get_warning_level: (object: DeviceGlue) => number
    static name: string
}
export abstract class DeviceGlueProxyClass {
    /* Fields of UPowerGlib.DeviceGlueProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class DeviceGlueProxyPrivate {
    static name: string
}
export abstract class DeviceGlueSkeletonClass {
    /* Fields of UPowerGlib.DeviceGlueSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class DeviceGlueSkeletonPrivate {
    static name: string
}
export class DevicePrivate {
    static name: string
}
export abstract class HistoryItemClass {
    /* Fields of UPowerGlib.HistoryItemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HistoryItemPrivate {
    static name: string
}
export abstract class StatsItemClass {
    /* Fields of UPowerGlib.StatsItemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class StatsItemPrivate {
    static name: string
}
export abstract class WakeupItemClass {
    /* Fields of UPowerGlib.WakeupItemClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WakeupItemPrivate {
    static name: string
}
export abstract class WakeupsClass {
    /* Fields of UPowerGlib.WakeupsClass */
    parent_class: GObject.ObjectClass
    data_changed: (wakeups: Wakeups) => void
    total_changed: (wakeups: Wakeups, value: number) => void
    static name: string
}
export abstract class WakeupsGlueIface {
    /* Fields of UPowerGlib.WakeupsGlueIface */
    parent_iface: GObject.TypeInterface
    handle_get_data: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    handle_get_total: (object: WakeupsGlue, invocation: Gio.DBusMethodInvocation) => boolean
    get_has_capability: (object: WakeupsGlue) => boolean
    data_changed: (object: WakeupsGlue) => void
    total_changed: (object: WakeupsGlue, arg_value: number) => void
    static name: string
}
export abstract class WakeupsGlueProxyClass {
    /* Fields of UPowerGlib.WakeupsGlueProxyClass */
    parent_class: Gio.DBusProxyClass
    static name: string
}
export class WakeupsGlueProxyPrivate {
    static name: string
}
export abstract class WakeupsGlueSkeletonClass {
    /* Fields of UPowerGlib.WakeupsGlueSkeletonClass */
    parent_class: Gio.DBusInterfaceSkeletonClass
    static name: string
}
export class WakeupsGlueSkeletonPrivate {
    static name: string
}
export class WakeupsPrivate {
    static name: string
}