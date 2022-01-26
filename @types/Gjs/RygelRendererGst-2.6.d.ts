/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelRendererGst-2.6
 */

import type * as Gjs from './Gjs';
import type RygelRenderer from './RygelRenderer-2.6';
import type RygelCore from './RygelCore-2.6';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GUPnP from './GUPnP-1.2';
import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type GSSDP from './GSSDP-1.2';
import type GUPnPAV from './GUPnPAV-1.0';
import type Gst from './Gst-1.0';
import type GModule from './GModule-2.0';

export namespace RygelRendererGst {

enum PlaybinPlayerError {
    NO_ELEMENT,
}
interface PlaybinPlayer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer */
    playbin?: Gst.Element
    /* Constructor properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer */
    playback_state?: string
    playback_speed?: string
    uri?: string
    volume?: number
    metadata?: string
    mime_type?: string
    content_features?: string
    user_agent?: string
}
class PlaybinPlayer {
    /* Properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer */
    playbin: Gst.Element
    readonly supported_profiles: RygelCore.DLNAProfile[]
    /* Properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer */
    playback_state: string
    readonly allowed_playback_speeds: string[]
    playback_speed: string
    uri: string
    volume: number
    readonly duration: number
    readonly size: number
    metadata: string
    mime_type: string
    readonly can_seek: boolean
    readonly can_seek_bytes: boolean
    content_features: string
    readonly position: number
    readonly byte_position: number
    user_agent: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer */
    get_playbin(): Gst.Element
    get_supported_profiles(): RygelCore.DLNAProfile[]
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
    /* Methods of RygelRenderer-2.6.RygelRenderer.MediaPlayer */
    seek(time: number): boolean
    seek_bytes(bytes: number): boolean
    get_protocols(): string[]
    get_mime_types(): string[]
    play_speed_to_double(speed: string): number
    get_playback_state(): string
    set_playback_state(value: string): void
    get_allowed_playback_speeds(): string[]
    get_playback_speed(): string
    set_playback_speed(value: string): void
    get_uri(): string | null
    set_uri(value?: string | null): void
    get_volume(): number
    set_volume(value: number): void
    get_duration(): number
    get_size(): number
    get_metadata(): string | null
    set_metadata(value?: string | null): void
    get_mime_type(): string | null
    set_mime_type(value?: string | null): void
    get_can_seek(): boolean
    get_can_seek_bytes(): boolean
    get_content_features(): string | null
    set_content_features(value?: string | null): void
    get_duration_as_str(): string
    get_position(): number
    get_byte_position(): number
    get_position_as_str(): string
    get_user_agent(): string | null
    set_user_agent(value?: string | null): void
    get_protocol_info(): string
    /* Virtual methods of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer */
    vfunc_seek(time: number): boolean
    vfunc_seek_bytes(bytes: number): boolean
    vfunc_get_protocols(): string[]
    vfunc_get_mime_types(): string[]
    vfunc_get_playback_state(): string
    vfunc_set_playback_state(value: string): void
    vfunc_get_allowed_playback_speeds(): string[]
    vfunc_get_playback_speed(): string
    vfunc_set_playback_speed(value: string): void
    vfunc_get_uri(): string | null
    vfunc_set_uri(value?: string | null): void
    vfunc_get_volume(): number
    vfunc_set_volume(value: number): void
    vfunc_get_duration(): number
    vfunc_get_size(): number
    vfunc_get_metadata(): string | null
    vfunc_set_metadata(value?: string | null): void
    vfunc_get_mime_type(): string | null
    vfunc_set_mime_type(value?: string | null): void
    vfunc_get_can_seek(): boolean
    vfunc_get_can_seek_bytes(): boolean
    vfunc_get_content_features(): string | null
    vfunc_set_content_features(value?: string | null): void
    vfunc_get_position(): number
    vfunc_get_byte_position(): number
    vfunc_get_user_agent(): string | null
    vfunc_set_user_agent(value?: string | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::playbin", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playbin", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::supported-profiles", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::supported-profiles", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playback-state", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allowed-playback-speeds", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-playback-speeds", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playback-speed", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-speed", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::volume", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duration", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadata", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-seek", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-seek-bytes", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek-bytes", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content-features", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-features", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::byte-position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::byte-position", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: PlaybinPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlaybinPlayer_ConstructProps)
    _init (config?: PlaybinPlayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static instance(): PlaybinPlayer
    static $gtype: GObject.Type
}
interface PlaybinRenderer_ConstructProps extends RygelRenderer.MediaRenderer_ConstructProps {
}
class PlaybinRenderer {
    /* Properties of RygelCore-2.6.RygelCore.MediaDevice */
    plugin: RygelCore.Plugin
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer */
    get_playbin(): Gst.Element | null
    /* Methods of RygelCore-2.6.RygelCore.MediaDevice */
    add_interface(iface: string): void
    remove_interface(iface: string): void
    get_interfaces(): string[]
    get_plugin(): RygelCore.Plugin
    set_plugin(value: RygelCore.Plugin): void
    get_title(): string
    get_capabilities(): RygelCore.PluginCapabilities
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
    connect(sigName: "notify", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::plugin", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: PlaybinRenderer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PlaybinRenderer_ConstructProps)
    _init (config?: PlaybinRenderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string): PlaybinRenderer
    /* Function overloads */
    static new(title: string, player: RygelRenderer.MediaPlayer, capabilities: RygelCore.PluginCapabilities): PlaybinRenderer
    static $gtype: GObject.Type
}
abstract class PlaybinPlayerClass {
    static name: string
}
class PlaybinPlayerPrivate {
    static name: string
}
abstract class PlaybinRendererClass {
    static name: string
}
class PlaybinRendererPrivate {
    static name: string
}
}
export default RygelRendererGst;