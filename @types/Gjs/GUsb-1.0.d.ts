/**
 * GUsb-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUsb {

enum ContextError {
    CONTEXT_ERROR_INTERNAL,
}
enum DeviceClassCode {
    INTERFACE_DESC,
    AUDIO,
    COMMUNICATIONS,
    HID,
    PHYSICAL,
    IMAGE,
    PRINTER,
    MASS_STORAGE,
    HUB,
    CDC_DATA,
    SMART_CARD,
    CONTENT_SECURITY,
    VIDEO,
    PERSONAL_HEALTHCARE,
    AUDIO_VIDEO,
    BILLBOARD,
    DIAGNOSTIC,
    WIRELESS_CONTROLLER,
    MISCELLANEOUS,
    APPLICATION_SPECIFIC,
    VENDOR_SPECIFIC,
}
enum DeviceDirection {
    DEVICE_TO_HOST,
    HOST_TO_DEVICE,
}
enum DeviceError {
    INTERNAL,
    IO,
    TIMED_OUT,
    NOT_SUPPORTED,
    NO_DEVICE,
    NOT_OPEN,
    ALREADY_OPEN,
    CANCELLED,
    FAILED,
    PERMISSION_DENIED,
    LAST,
}
enum DeviceLangid {
    INVALID,
    ENGLISH_UNITED_STATES,
}
enum DeviceRecipient {
    DEVICE,
    INTERFACE,
    ENDPOINT,
    OTHER,
}
enum DeviceRequestType {
    STANDARD,
    CLASS,
    VENDOR,
    RESERVED,
}
enum SourceError {
    SOURCE_ERROR_INTERNAL,
}
enum ContextFlags {
    NONE,
    AUTO_OPEN_DEVICES,
}
enum DeviceClaimInterfaceFlags {
    NONE,
    BIND_KERNEL_DRIVER,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
function source_error_quark(): GLib.Quark
function strerror(error_code: number): string
function version_string(): string
export interface Context_ConstructProps extends GObject.Object_ConstructProps {
    debug_level?: number
}
class Context {
    /* Properties of GUsb-1.0.GUsb.Context */
    debug_level: number
    readonly libusb_context: object
    /* Fields of GUsb-1.0.GUsb.Context */
    parent: GObject.Object
    priv: ContextPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.Context */
    enumerate(): void
    find_by_bus_address(bus: number, address: number): Device
    find_by_platform_id(platform_id: string): Device
    find_by_vid_pid(vid: number, pid: number): Device
    get_devices(): Device[]
    get_flags(): ContextFlags
    get_main_context(): GLib.MainContext
    get_source(main_ctx: GLib.MainContext): Source
    set_debug(flags: GLib.LogLevelFlags): void
    set_flags(flags: ContextFlags): void
    set_main_context(main_ctx: GLib.MainContext): void
    wait_for_replug(device: Device, timeout_ms: number): Device
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
    /* Virtual methods of GUsb-1.0.GUsb.Context */
    vfunc_device_added(device: Device): void
    vfunc_device_removed(device: Device): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GUsb-1.0.GUsb.Context */
    connect(sigName: "device-added", callback: (($obj: Context, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Context, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: (($obj: Context, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Context, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::debug-level", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug-level", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::libusb-context", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libusb-context", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static error_quark(): GLib.Quark
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
    libusb_device?: object
    platform_id?: string
}
class Device {
    /* Fields of GUsb-1.0.GUsb.Device */
    parent: GObject.Object
    priv: DevicePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.Device */
    bulk_transfer(endpoint: number, data: Uint8Array[], timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actual_length */ number | null ]
    bulk_transfer_async(endpoint: number, data: Uint8Array[], timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    bulk_transfer_finish(res: Gio.AsyncResult): number
    claim_interface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    close(): boolean
    control_transfer(direction: DeviceDirection, request_type: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array[], timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actual_length */ number | null ]
    control_transfer_async(direction: DeviceDirection, request_type: DeviceRequestType, recipient: DeviceRecipient, request: number, value: number, idx: number, data: Uint8Array[], timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    control_transfer_finish(res: Gio.AsyncResult): number
    get_address(): number
    get_bus(): number
    get_children(): Device[]
    get_configuration(): number
    get_configuration_index(): number
    get_custom_index(class_id: number, subclass_id: number, protocol_id: number): number
    get_device_class(): number
    get_device_protocol(): number
    get_device_subclass(): number
    get_interface(class_id: number, subclass_id: number, protocol_id: number): Interface
    get_interfaces(): Interface[]
    get_manufacturer_index(): number
    get_parent(): Device
    get_pid(): number
    get_pid_as_str(): string
    get_platform_id(): string
    get_port_number(): number
    get_product_index(): number
    get_release(): number
    get_serial_number_index(): number
    get_spec(): number
    get_string_descriptor(desc_index: number): string
    get_string_descriptor_bytes(desc_index: number, langid: number): GLib.Bytes
    get_string_descriptor_bytes_full(desc_index: number, langid: number, length: number): GLib.Bytes
    get_vid(): number
    get_vid_as_str(): string
    interrupt_transfer(endpoint: number, data: Uint8Array[], timeout: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* actual_length */ number | null ]
    interrupt_transfer_async(endpoint: number, data: Uint8Array[], timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    interrupt_transfer_finish(res: Gio.AsyncResult): number
    open(): boolean
    release_interface(interface: number, flags: DeviceClaimInterfaceFlags): boolean
    reset(): boolean
    set_configuration(configuration: number): boolean
    set_interface_alt(interface: number, alt: number): boolean
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
    /* Virtual methods of GUsb-1.0.GUsb.Device */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface DeviceList_ConstructProps extends GObject.Object_ConstructProps {
    context?: Context
}
class DeviceList {
    /* Fields of GUsb-1.0.GUsb.DeviceList */
    parent: GObject.Object
    priv: DeviceListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.DeviceList */
    coldplug(): void
    find_by_bus_address(bus: number, address: number): Device
    find_by_vid_pid(vid: number, pid: number): Device
    get_devices(): Device[]
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
    /* Virtual methods of GUsb-1.0.GUsb.DeviceList */
    vfunc_device_added(device: Device): void
    vfunc_device_removed(device: Device): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GUsb-1.0.GUsb.DeviceList */
    connect(sigName: "device-added", callback: (($obj: DeviceList, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: DeviceList, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    connect(sigName: "device-removed", callback: (($obj: DeviceList, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: DeviceList, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceList_ConstructProps)
    _init (config?: DeviceList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context): DeviceList
    static $gtype: GObject.Type
}
export interface Endpoint_ConstructProps extends GObject.Object_ConstructProps {
}
class Endpoint {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.Endpoint */
    get_address(): number
    get_direction(): DeviceDirection
    get_extra(): GLib.Bytes
    get_kind(): number
    get_maximum_packet_size(): number
    get_number(): number
    get_polling_interval(): number
    get_refresh(): number
    get_synch_address(): number
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
    connect(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Endpoint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Endpoint_ConstructProps)
    _init (config?: Endpoint_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Interface_ConstructProps extends GObject.Object_ConstructProps {
}
class Interface {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUsb-1.0.GUsb.Interface */
    get_alternate(): number
    get_class(): number
    get_endpoints(): Endpoint[]
    get_extra(): GLib.Bytes
    get_index(): number
    get_kind(): number
    get_length(): number
    get_number(): number
    get_protocol(): number
    get_subclass(): number
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
    connect(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Interface_ConstructProps)
    _init (config?: Interface_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ContextClass {
    /* Fields of GUsb-1.0.GUsb.ContextClass */
    parent_class: GObject.ObjectClass
    device_added: (context: Context, device: Device) => void
    device_removed: (context: Context, device: Device) => void
    static name: string
}
class ContextPrivate {
    static name: string
}
abstract class DeviceClass {
    /* Fields of GUsb-1.0.GUsb.DeviceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class DeviceListClass {
    /* Fields of GUsb-1.0.GUsb.DeviceListClass */
    parent_class: GObject.ObjectClass
    device_added: (list: DeviceList, device: Device) => void
    device_removed: (list: DeviceList, device: Device) => void
    static name: string
}
class DeviceListPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class EndpointClass {
    /* Fields of GUsb-1.0.GUsb.EndpointClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class InterfaceClass {
    /* Fields of GUsb-1.0.GUsb.InterfaceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class Source {
    /* Methods of GUsb-1.0.GUsb.Source */
    set_callback(func: GLib.SourceFunc): void
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
}
export default GUsb;