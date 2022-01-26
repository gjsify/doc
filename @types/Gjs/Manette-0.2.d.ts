/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Manette-0.2
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GUdev from './GUdev-1.0';

export namespace Manette {

enum EventType {
    EVENT_NOTHING,
    EVENT_BUTTON_PRESS,
    EVENT_BUTTON_RELEASE,
    EVENT_ABSOLUTE,
    EVENT_HAT,
}
function get_resource(): Gio.Resource
interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
class Device {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Manette-0.2.Manette.Device */
    get_name(): string
    has_input(type: number, code: number): boolean
    has_rumble(): boolean
    has_user_mapping(): boolean
    remove_user_mapping(): void
    rumble(strong_magnitude: number, weak_magnitude: number, milliseconds: number): boolean
    save_user_mapping(mapping_string: string): void
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
    /* Signals of Manette-0.2.Manette.Device */
    connect(sigName: "absolute-axis-event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "absolute-axis-event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "absolute-axis-event", event: Event): void
    connect(sigName: "button-press-event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "button-press-event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "button-press-event", event: Event): void
    connect(sigName: "button-release-event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "button-release-event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "button-release-event", event: Event): void
    connect(sigName: "disconnected", callback: (($obj: Device) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Device) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "event", event: Event): void
    connect(sigName: "hat-axis-event", callback: (($obj: Device, event: Event) => void)): number
    connect_after(sigName: "hat-axis-event", callback: (($obj: Device, event: Event) => void)): number
    emit(sigName: "hat-axis-event", event: Event): void
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
    static $gtype: GObject.Type
}
interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
}
class Monitor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Manette-0.2.Manette.Monitor */
    iterate(): MonitorIter
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
    /* Signals of Manette-0.2.Manette.Monitor */
    connect(sigName: "device-connected", callback: (($obj: Monitor, device: Device) => void)): number
    connect_after(sigName: "device-connected", callback: (($obj: Monitor, device: Device) => void)): number
    emit(sigName: "device-connected", device: Device): void
    connect(sigName: "device-disconnected", callback: (($obj: Monitor, device: Device) => void)): number
    connect_after(sigName: "device-disconnected", callback: (($obj: Monitor, device: Device) => void)): number
    emit(sigName: "device-disconnected", device: Device): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Monitor
    static $gtype: GObject.Type
}
abstract class DeviceClass {
    /* Fields of Manette-0.2.Manette.DeviceClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class MonitorClass {
    /* Fields of Manette-0.2.Manette.MonitorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MonitorIter {
    /* Methods of Manette-0.2.Manette.MonitorIter */
    next(): [ /* returnType */ boolean, /* device */ Device | null ]
    static name: string
}
class Event {
    /* Methods of Manette-0.2.Manette.Event */
    get_absolute(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    get_button(): [ /* returnType */ boolean, /* button */ number ]
    get_device(): Device
    get_event_type(): EventType
    get_hardware_code(): number
    get_hardware_index(): number
    get_hardware_type(): number
    get_hardware_value(): number
    get_hat(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    get_time(): number
    static name: string
}
}
export default Manette;