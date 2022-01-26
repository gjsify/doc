/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPDLNA-1.0
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstAudio from './GstAudio-1.0';

export namespace GUPnPDLNA {

interface Discoverer_ConstructProps extends GstPbutils.Discoverer_ConstructProps {
    /* Constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer */
    extended_mode?: boolean
    relaxed_mode?: boolean
}
class Discoverer {
    /* Properties of GstPbutils-1.0.GstPbutils.Discoverer */
    timeout: number
    use_cache: boolean
    /* Fields of GstPbutils-1.0.GstPbutils.Discoverer */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer */
    discover_uri(uri: string): boolean
    discover_uri_sync(uri: string): Information
    get_extended_mode(): boolean
    get_profile(name: string): Profile
    get_relaxed_mode(): boolean
    list_profiles(): Profile[]
    /* Methods of GstPbutils-1.0.GstPbutils.Discoverer */
    discover_uri(uri: string): GstPbutils.DiscovererInfo
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
    /* Virtual methods of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer */
    vfunc_done(dlna: Information, err: GLib.Error): void
    /* Virtual methods of GstPbutils-1.0.GstPbutils.Discoverer */
    vfunc_discovered(info: GstPbutils.DiscovererInfo, err: GLib.Error): void
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
    /* Signals of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer */
    connect(sigName: "done", callback: (($obj: Discoverer, dlna: Information, err: GLib.Error) => void)): number
    connect_after(sigName: "done", callback: (($obj: Discoverer, dlna: Information, err: GLib.Error) => void)): number
    emit(sigName: "done", dlna: Information, err: GLib.Error): void
    /* Signals of GstPbutils-1.0.GstPbutils.Discoverer */
    connect(sigName: "discovered", callback: (($obj: Discoverer, info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void)): number
    connect_after(sigName: "discovered", callback: (($obj: Discoverer, info: GstPbutils.DiscovererInfo, error?: GLib.Error | null) => void)): number
    emit(sigName: "discovered", info: GstPbutils.DiscovererInfo, error?: GLib.Error | null): void
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
    static new(timeout: Gst.ClockTime, relaxed_mode: boolean, extended_mode: boolean): Discoverer
    /* Function overloads */
    static new(timeout: Gst.ClockTime): Discoverer
    static $gtype: GObject.Type
}
interface Information_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Information */
    info?: GstPbutils.DiscovererInfo
    mime?: string
    name?: string
}
class Information {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-1.0.GUPnPDLNA.Information */
    get_info(): GstPbutils.DiscovererInfo
    get_mime(): string
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Information, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Information_ConstructProps)
    _init (config?: Information_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, mime: string, info: GstPbutils.DiscovererInfo): Information
    static $gtype: GObject.Type
}
interface Profile_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile */
    extended?: boolean
    mime?: string
    name?: string
}
class Profile {
    /* Properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile */
    readonly encoding_profile: GstPbutils.EncodingProfile
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of GUPnPDLNA-1.0.GUPnPDLNA.Profile */
    get_encoding_profile(): GstPbutils.EncodingProfile
    get_extended(): boolean
    get_mime(): string
    get_name(): string
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
    connect(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::encoding-profile", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding-profile", callback: (($obj: Profile, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Profile_ConstructProps)
    _init (config?: Profile_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class DiscovererClass {
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.DiscovererClass */
    readonly parent_class: GstPbutils.DiscovererClass
    readonly done: (discoverer: Discoverer, dlna: Information, err: GLib.Error) => void
    static name: string
}
abstract class InformationClass {
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.InformationClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ProfileClass {
    /* Fields of GUPnPDLNA-1.0.GUPnPDLNA.ProfileClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
}
export default GUPnPDLNA;