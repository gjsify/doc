/**
 * RygelCore-2.6
 */

import type * as Gjs from './Gjs';
import type * as GLib from './GLib-2.0';
import type * as Gee from './Gee-0.8';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GUPnP from './GUPnP-1.2';
import type * as libxml2 from './libxml2-2.0';
import type * as Soup from './Soup-2.4';
import type * as GSSDP from './GSSDP-1.2';

export enum LogLevel {
    INVALID,
    ERROR,
    CRITICAL,
    WARNING,
    INFO,
    DEFAULT,
    DEBUG,
}
export enum ConfigurationEntry {
    INTERFACE,
    PORT,
    TRANSCODING,
    ALLOW_UPLOAD,
    ALLOW_DELETION,
    LOG_LEVELS,
    PLUGIN_PATH,
    VIDEO_UPLOAD_FOLDER,
    MUSIC_UPLOAD_FOLDER,
    PICTURE_UPLOAD_FOLDER,
}
export enum SectionEntry {
    TITLE,
    ENABLED,
}
export enum ConfigurationError {
    NO_VALUE_SET,
    VALUE_OUT_OF_RANGE,
}
export enum CmdlineConfigError {
    VERSION_ONLY,
}
export enum PluginCapabilities {
    NONE,
    IMAGE_UPLOAD,
    VIDEO_UPLOAD,
    AUDIO_UPLOAD,
    UPLOAD,
    TRACK_CHANGES,
    CREATE_CONTAINERS,
    DIAGNOSTICS,
    ENERGY_MANAGEMENT,
}
export function get_pretty_host_name(): string
export interface DBusInterface_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusInterface {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.DBusInterface */
    shutdown(): void
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
    /* Virtual methods of RygelCore.DBusInterface */
    vfunc_shutdown(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusInterface_ConstructProps)
    _init (config?: DBusInterface_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DBusAclProvider_ConstructProps extends GObject.Object_ConstructProps {
}
export class DBusAclProvider {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.DBusAclProvider */
    is_allowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    is_allowed_finish(_res_: Gio.AsyncResult): boolean
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
    /* Virtual methods of RygelCore.DBusAclProvider */
    vfunc_is_allowed(device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent?: string | null, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_is_allowed_finish(_res_: Gio.AsyncResult): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: DBusAclProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DBusAclProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DBusAclProvider_ConstructProps)
    _init (config?: DBusAclProvider_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Configuration_ConstructProps extends GObject.Object_ConstructProps {
}
export class Configuration {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.Configuration */
    get_interface(): string
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string
    get_plugin_path(): string
    get_engine_path(): string
    get_media_engine(): string
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string): boolean
    get_title(section: string): string
    get_string(section: string, key: string): string
    get_string_list(section: string, key: string): Gee.ArrayList
    get_int(section: string, key: string, min: number, max: number): number
    get_int_list(section: string, key: string): Gee.ArrayList
    get_bool(section: string, key: string): boolean
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
    /* Virtual methods of RygelCore.Configuration */
    vfunc_get_interface(): string
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string
    vfunc_get_plugin_path(): string
    vfunc_get_engine_path(): string
    vfunc_get_media_engine(): string
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string): boolean
    vfunc_get_title(section: string): string
    vfunc_get_string(section: string, key: string): string
    vfunc_get_string_list(section: string, key: string): Gee.ArrayList
    vfunc_get_int(section: string, key: string, min: number, max: number): number
    vfunc_get_int_list(section: string, key: string): Gee.ArrayList
    vfunc_get_bool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: Configuration, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: Configuration, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: Configuration, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: Configuration, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: Configuration, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: Configuration, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Configuration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Configuration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Configuration_ConstructProps)
    _init (config?: Configuration_ConstructProps): void
    static $gtype: GObject.Type
}
export interface StateMachine_ConstructProps extends GObject.Object_ConstructProps {
    cancellable?: Gio.Cancellable
}
export class StateMachine {
    /* Properties of RygelCore.StateMachine */
    cancellable: Gio.Cancellable
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.StateMachine */
    run(_callback_?: Gio.AsyncReadyCallback | null): void
    run_finish(_res_: Gio.AsyncResult): void
    get_cancellable(): Gio.Cancellable
    set_cancellable(value: Gio.Cancellable): void
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
    /* Virtual methods of RygelCore.StateMachine */
    vfunc_run(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_run_finish(_res_: Gio.AsyncResult): void
    vfunc_get_cancellable(): Gio.Cancellable
    vfunc_set_cancellable(value: Gio.Cancellable): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.StateMachine */
    connect(sigName: "completed", callback: (($obj: StateMachine) => void)): number
    connect_after(sigName: "completed", callback: (($obj: StateMachine) => void)): number
    emit(sigName: "completed"): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancellable", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: StateMachine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StateMachine_ConstructProps)
    _init (config?: StateMachine_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ConnectionManager_ConstructProps extends GUPnP.Service_ConstructProps {
}
export class ConnectionManager {
    /* Fields of RygelCore.ConnectionManager */
    sink_protocol_info: string
    connection_ids: string
    source_protocol_info: string
    rcs_id: number
    av_transport_id: number
    direction: string
    /* Fields of GUPnP.Service */
    parent_instance: GUPnP.ServiceInfo
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.ConnectionManager */
    get_current_protocol_info(): string
    /* Methods of GUPnP.Service */
    freeze_notify(): void
    notify_value(variable: string, value: any): void
    signals_autoconnect(user_data?: object | null): void
    thaw_notify(): void
    /* Methods of GUPnP.ServiceInfo */
    get_context(): GUPnP.Context
    get_control_url(): string
    get_event_subscription_url(): string
    get_id(): string
    get_introspection_async(callback: GUPnP.ServiceIntrospectionCallback): void
    get_introspection_async_full(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    get_location(): string
    get_scpd_url(): string
    get_service_type(): string
    get_udn(): string
    get_url_base(): Soup.URI
    introspect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspect_finish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
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
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of RygelCore.ConnectionManager */
    vfunc_get_current_protocol_info(): string
    /* Virtual methods of GUPnP.Service */
    vfunc_action_invoked(action: GUPnP.ServiceAction): void
    vfunc_query_variable(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: ConnectionManager, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: ConnectionManager, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: ConnectionManager, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: ConnectionManager, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callback_url: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: ConnectionManager, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: ConnectionManager, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ConnectionManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ConnectionManager_ConstructProps)
    _init (config?: ConnectionManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ConnectionManager
    static $gtype: GObject.Type
}
export interface BasicManagement_ConstructProps extends GUPnP.Service_ConstructProps {
    max_history_size?: number
}
export class BasicManagement {
    /* Properties of RygelCore.BasicManagement */
    max_history_size: number
    /* Fields of RygelCore.BasicManagement */
    device_status: string
    /* Fields of GUPnP.Service */
    parent_instance: GUPnP.ServiceInfo
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.BasicManagement */
    get_max_history_size(): number
    set_max_history_size(value: number): void
    /* Methods of GUPnP.Service */
    freeze_notify(): void
    notify_value(variable: string, value: any): void
    signals_autoconnect(user_data?: object | null): void
    thaw_notify(): void
    /* Methods of GUPnP.ServiceInfo */
    get_context(): GUPnP.Context
    get_control_url(): string
    get_event_subscription_url(): string
    get_id(): string
    get_introspection_async(callback: GUPnP.ServiceIntrospectionCallback): void
    get_introspection_async_full(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    get_location(): string
    get_scpd_url(): string
    get_service_type(): string
    get_udn(): string
    get_url_base(): Soup.URI
    introspect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspect_finish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
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
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GUPnP.Service */
    vfunc_action_invoked(action: GUPnP.ServiceAction): void
    vfunc_query_variable(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: BasicManagement, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: BasicManagement, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: BasicManagement, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: BasicManagement, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callback_url: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: BasicManagement, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: BasicManagement, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-history-size", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-history-size", callback: (($obj: BasicManagement, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BasicManagement_ConstructProps)
    _init (config?: BasicManagement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BasicManagement
    static $gtype: GObject.Type
}
export interface DescriptionFile_ConstructProps extends GObject.Object_ConstructProps {
}
export class DescriptionFile {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.DescriptionFile */
    set_device_type(device_type: string): void
    set_model_description(model_description: string): void
    set_model_name(model_name: string): void
    set_model_number(model_number: string): void
    set_friendly_name(friendly_name: string): void
    get_friendly_name(): string
    set_udn(udn: string): void
    get_udn(): string | null
    set_serial_number(serial: string): void
    set_dlna_caps(capabilities: PluginCapabilities): void
    clear_service_list(): void
    add_dlna_doc_element(dlnadoc_xpath: string, dlnadoc_non_xpath: string, dev_cap: string): void
    remove_dlna_doc_element(dlnadoc_xpath: string): void
    add_service(device_name: string, resource_info: ResourceInfo): void
    clear_icon_list(): void
    add_icon(device_name: string, icon_info: IconInfo, url: string): void
    modify_service_type(old_type: string, new_type: string): void
    save(path: string): void
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
    connect(sigName: "notify", callback: (($obj: DescriptionFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DescriptionFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DescriptionFile_ConstructProps)
    _init (config?: DescriptionFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(template_file: string): DescriptionFile
    static from_xml_document(doc: GUPnP.XMLDoc): DescriptionFile
    static $gtype: GObject.Type
}
export class DLNAProfile {
    /* Fields of RygelCore.DLNAProfile */
    ref_count: number
    mime: string
    name: string
    static name: string
    static new(name: string, mime: string): DLNAProfile
    constructor(name: string, mime: string)
    /* Static methods and pseudo-constructors */
    static new(name: string, mime: string): DLNAProfile
    static compare_by_name(a: DLNAProfile, b: DLNAProfile): number
}
export interface EnergyManagement_ConstructProps extends GUPnP.Service_ConstructProps {
}
export class EnergyManagement {
    /* Fields of GUPnP.Service */
    parent_instance: GUPnP.ServiceInfo
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GUPnP.Service */
    freeze_notify(): void
    notify_value(variable: string, value: any): void
    signals_autoconnect(user_data?: object | null): void
    thaw_notify(): void
    /* Methods of GUPnP.ServiceInfo */
    get_context(): GUPnP.Context
    get_control_url(): string
    get_event_subscription_url(): string
    get_id(): string
    get_introspection_async(callback: GUPnP.ServiceIntrospectionCallback): void
    get_introspection_async_full(callback: GUPnP.ServiceIntrospectionCallback, cancellable?: Gio.Cancellable | null): void
    get_location(): string
    get_scpd_url(): string
    get_service_type(): string
    get_udn(): string
    get_url_base(): Soup.URI
    introspect_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    introspect_finish(res: Gio.AsyncResult): GUPnP.ServiceIntrospection
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
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
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GUPnP.Service */
    vfunc_action_invoked(action: GUPnP.ServiceAction): void
    vfunc_query_variable(variable: string, value: any): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GUPnP.Service */
    connect(sigName: "action-invoked", callback: (($obj: EnergyManagement, action: GUPnP.ServiceAction) => void)): number
    connect_after(sigName: "action-invoked", callback: (($obj: EnergyManagement, action: GUPnP.ServiceAction) => void)): number
    emit(sigName: "action-invoked", action: GUPnP.ServiceAction): void
    connect(sigName: "notify-failed", callback: (($obj: EnergyManagement, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    connect_after(sigName: "notify-failed", callback: (($obj: EnergyManagement, callback_url: Soup.URI[], reason: GLib.Error) => void)): number
    emit(sigName: "notify-failed", callback_url: Soup.URI[], reason: GLib.Error): void
    connect(sigName: "query-variable", callback: (($obj: EnergyManagement, variable: string, value: any) => void)): number
    connect_after(sigName: "query-variable", callback: (($obj: EnergyManagement, variable: string, value: any) => void)): number
    emit(sigName: "query-variable", variable: string, value: any): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EnergyManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EnergyManagement_ConstructProps)
    _init (config?: EnergyManagement_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EnergyManagement
    static $gtype: GObject.Type
}
export interface RootDevice_ConstructProps extends GUPnP.RootDevice_ConstructProps {
    services?: Gee.ArrayList
}
export class RootDevice {
    /* Properties of RygelCore.RootDevice */
    services: Gee.ArrayList
    /* Properties of GUPnP.RootDevice */
    available: boolean
    /* Properties of GUPnP.DeviceInfo */
    element: object
    location: string
    url_base: Soup.URI
    /* Fields of GUPnP.RootDevice */
    parent_instance: GUPnP.Device
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.RootDevice */
    get_services(): Gee.ArrayList
    /* Methods of GUPnP.RootDevice */
    get_available(): boolean
    get_description_dir(): string
    get_description_path(): string
    get_relative_location(): string
    get_ssdp_resource_group(): GSSDP.ResourceGroup
    set_available(available: boolean): void
    /* Methods of GUPnP.DeviceInfo */
    get_context(): GUPnP.Context
    get_description_value(element: string): string
    get_device(type: string): GUPnP.DeviceInfo | null
    get_device_type(): string
    get_friendly_name(): string
    get_icon_url(requested_mime_type: string | null, requested_depth: number, requested_width: number, requested_height: number, prefer_bigger: boolean): [ /* returnType */ string, /* mime_type */ string | null, /* depth */ number | null, /* width */ number | null, /* height */ number | null ]
    get_location(): string
    get_manufacturer(): string
    get_manufacturer_url(): string
    get_model_description(): string
    get_model_name(): string
    get_model_number(): string
    get_model_url(): string
    get_presentation_url(): string
    get_resource_factory(): GUPnP.ResourceFactory
    get_serial_number(): string
    get_service(type: string): GUPnP.ServiceInfo
    get_udn(): string
    get_upc(): string
    get_url_base(): Soup.URI
    list_device_types(): string[]
    list_devices(): GUPnP.DeviceInfo[]
    list_dlna_capabilities(): string[]
    list_dlna_device_class_identifier(): string[]
    list_service_types(): string[]
    list_services(): GUPnP.ServiceInfo[]
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GUPnP.RootDevice */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::services", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::services", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::available", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url-base", callback: (($obj: RootDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RootDevice_ConstructProps)
    _init (config?: RootDevice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GUPnP.Context, plugin: Plugin, description_doc: GUPnP.XMLDoc, description_path: string, description_dir: string): RootDevice
    static new(context: GUPnP.Context, description_path: string, description_dir: string): RootDevice
    static $gtype: GObject.Type
}
export interface RootDeviceFactory_ConstructProps extends GObject.Object_ConstructProps {
    context?: GUPnP.Context
}
export class RootDeviceFactory {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.RootDeviceFactory */
    create(plugin: Plugin): RootDevice
    get_context(): GUPnP.Context
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
    /* Methods of Gio.Initable */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of RygelCore.RootDeviceFactory */
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RootDeviceFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RootDeviceFactory_ConstructProps)
    _init (config?: RootDeviceFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GUPnP.Context): RootDeviceFactory
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
export interface LogHandler_ConstructProps extends GObject.Object_ConstructProps {
}
export class LogHandler {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: LogHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LogHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LogHandler_ConstructProps)
    _init (config?: LogHandler_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): LogHandler
    static $gtype: GObject.Type
}
export interface MetaConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class MetaConfig {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of RygelCore.Configuration */
    get_interface(): string
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string
    get_plugin_path(): string
    get_engine_path(): string
    get_media_engine(): string
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string): boolean
    get_title(section: string): string
    get_string(section: string, key: string): string
    get_string_list(section: string, key: string): Gee.ArrayList
    get_int(section: string, key: string, min: number, max: number): number
    get_int_list(section: string, key: string): Gee.ArrayList
    get_bool(section: string, key: string): boolean
    /* Virtual methods of RygelCore.MetaConfig */
    vfunc_get_interface(): string
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string
    vfunc_get_plugin_path(): string
    vfunc_get_engine_path(): string
    vfunc_get_media_engine(): string
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string): boolean
    vfunc_get_title(section: string): string
    vfunc_get_string(section: string, key: string): string
    vfunc_get_string_list(section: string, key: string): Gee.ArrayList
    vfunc_get_int(section: string, key: string, min: number, max: number): number
    vfunc_get_int_list(section: string, key: string): Gee.ArrayList
    vfunc_get_bool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: MetaConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MetaConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: MetaConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: MetaConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: MetaConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MetaConfig_ConstructProps)
    _init (config?: MetaConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MetaConfig
    static get_default(): MetaConfig
    static register_configuration(config: Configuration): void
    static cleanup(): void
    static $gtype: GObject.Type
}
export interface PluginLoader_ConstructProps extends RecursiveModuleLoader_ConstructProps {
}
export class PluginLoader {
    /* Properties of RygelCore.RecursiveModuleLoader */
    base_path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.PluginLoader */
    plugin_disabled(name: string): boolean
    add_plugin(plugin: Plugin): void
    get_plugin_by_name(name: string): Plugin | null
    list_plugins(): Gee.Collection
    /* Methods of RygelCore.RecursiveModuleLoader */
    load_modules(): void
    load_modules_sync(cancellable?: Gio.Cancellable | null): void
    load_module_from_file(file: Gio.File): boolean
    load_module_from_info(info: PluginInformation): boolean
    get_base_path(): string
    set_base_path(value: string): void
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
    /* Virtual methods of RygelCore.RecursiveModuleLoader */
    vfunc_load_module_from_file(file: Gio.File): boolean
    vfunc_load_module_from_info(info: PluginInformation): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.PluginLoader */
    connect(sigName: "plugin-available", callback: (($obj: PluginLoader, plugin: Plugin) => void)): number
    connect_after(sigName: "plugin-available", callback: (($obj: PluginLoader, plugin: Plugin) => void)): number
    emit(sigName: "plugin-available", plugin: Plugin): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-path", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-path", callback: (($obj: PluginLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PluginLoader_ConstructProps)
    _init (config?: PluginLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PluginLoader
    static $gtype: GObject.Type
}
export interface RecursiveModuleLoader_ConstructProps extends GObject.Object_ConstructProps {
    base_path?: string
}
export class RecursiveModuleLoader {
    /* Properties of RygelCore.RecursiveModuleLoader */
    base_path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.RecursiveModuleLoader */
    load_modules(): void
    load_modules_sync(cancellable?: Gio.Cancellable | null): void
    load_module_from_file(file: Gio.File): boolean
    load_module_from_info(info: PluginInformation): boolean
    get_base_path(): string
    set_base_path(value: string): void
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
    /* Virtual methods of RygelCore.RecursiveModuleLoader */
    vfunc_load_module_from_file(file: Gio.File): boolean
    vfunc_load_module_from_info(info: PluginInformation): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-path", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-path", callback: (($obj: RecursiveModuleLoader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RecursiveModuleLoader_ConstructProps)
    _init (config?: RecursiveModuleLoader_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GUPnP.ResourceFactory_ConstructProps {
    capabilities?: PluginCapabilities
    name?: string
    title?: string
    description?: string
    desc_path?: string
    active?: boolean
    resource_infos?: Gee.ArrayList
    icon_infos?: Gee.ArrayList
    default_icons?: Gee.ArrayList
}
export class Plugin {
    /* Properties of RygelCore.Plugin */
    capabilities: PluginCapabilities
    title: string
    active: boolean
    resource_infos: Gee.ArrayList
    icon_infos: Gee.ArrayList
    default_icons: Gee.ArrayList
    /* Fields of GUPnP.ResourceFactory */
    parent_instance: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.Plugin */
    add_resource(resource_info: ResourceInfo): void
    add_icon(icon_info: IconInfo): void
    apply_hacks(device: RootDevice, description_path: string): void
    get_capabilities(): PluginCapabilities
    set_capabilities(value: PluginCapabilities): void
    get_name(): string
    get_title(): string
    set_title(value: string): void
    get_description(): string
    get_desc_path(): string
    get_active(): boolean
    set_active(value: boolean): void
    get_resource_infos(): Gee.ArrayList
    get_icon_infos(): Gee.ArrayList
    get_default_icons(): Gee.ArrayList
    /* Methods of GUPnP.ResourceFactory */
    register_resource_proxy_type(upnp_type: string, type: GObject.Type): void
    register_resource_type(upnp_type: string, type: GObject.Type): void
    unregister_resource_proxy_type(upnp_type: string): boolean
    unregister_resource_type(upnp_type: string): boolean
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
    /* Virtual methods of RygelCore.Plugin */
    vfunc_apply_hacks(device: RootDevice, description_path: string): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capabilities", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resource-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-infos", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-icons", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-icons", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desc_path: string, name: string, title: string | null, description: string | null, capabilities: PluginCapabilities): Plugin
    static new(): Plugin
    static $gtype: GObject.Type
}
export class ResourceInfo {
    /* Fields of RygelCore.ResourceInfo */
    ref_count: number
    upnp_type: string
    upnp_id: string
    description_path: string
    type: GObject.Type
    static name: string
    static new(upnp_id: string, upnp_type: string, description_path: string, type: GObject.Type): ResourceInfo
    constructor(upnp_id: string, upnp_type: string, description_path: string, type: GObject.Type)
    /* Static methods and pseudo-constructors */
    static new(upnp_id: string, upnp_type: string, description_path: string, type: GObject.Type): ResourceInfo
}
export interface MediaDevice_ConstructProps extends GObject.Object_ConstructProps {
    plugin?: Plugin
    title?: string
    capabilities?: PluginCapabilities
}
export class MediaDevice {
    /* Properties of RygelCore.MediaDevice */
    plugin: Plugin
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.MediaDevice */
    add_interface(iface: string): void
    remove_interface(iface: string): void
    get_interfaces(): string[]
    get_plugin(): Plugin
    set_plugin(value: Plugin): void
    get_title(): string
    get_capabilities(): PluginCapabilities
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
    connect(sigName: "notify", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::plugin", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin", callback: (($obj: MediaDevice, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaDevice_ConstructProps)
    _init (config?: MediaDevice_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BaseConfiguration_ConstructProps extends GObject.Object_ConstructProps {
}
export class BaseConfiguration {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.BaseConfiguration */
    get_interface(): string
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string
    get_plugin_path(): string
    get_engine_path(): string
    get_media_engine(): string
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string): boolean
    get_title(section: string): string
    get_string(section: string, key: string): string
    get_string_list(section: string, key: string): Gee.ArrayList
    get_int(section: string, key: string, min: number, max: number): number
    get_int_list(section: string, key: string): Gee.ArrayList
    get_bool(section: string, key: string): boolean
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
    /* Virtual methods of RygelCore.BaseConfiguration */
    vfunc_get_interface(): string
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string
    vfunc_get_plugin_path(): string
    vfunc_get_engine_path(): string
    vfunc_get_media_engine(): string
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string): boolean
    vfunc_get_title(section: string): string
    vfunc_get_string(section: string, key: string): string
    vfunc_get_string_list(section: string, key: string): Gee.ArrayList
    vfunc_get_int(section: string, key: string, min: number, max: number): number
    vfunc_get_int_list(section: string, key: string): Gee.ArrayList
    vfunc_get_bool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseConfiguration, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseConfiguration, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: BaseConfiguration, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: BaseConfiguration, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: BaseConfiguration, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseConfiguration_ConstructProps)
    _init (config?: BaseConfiguration_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BaseConfiguration
    static $gtype: GObject.Type
}
export interface CmdlineConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class CmdlineConfig {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.CmdlineConfig */
    get_config_file(): string
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
    /* Methods of RygelCore.Configuration */
    get_interface(): string
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string
    get_plugin_path(): string
    get_engine_path(): string
    get_media_engine(): string
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string): boolean
    get_title(section: string): string
    get_string(section: string, key: string): string
    get_string_list(section: string, key: string): Gee.ArrayList
    get_int(section: string, key: string, min: number, max: number): number
    get_int_list(section: string, key: string): Gee.ArrayList
    get_bool(section: string, key: string): boolean
    /* Virtual methods of RygelCore.CmdlineConfig */
    vfunc_get_interface(): string
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string
    vfunc_get_plugin_path(): string
    vfunc_get_engine_path(): string
    vfunc_get_media_engine(): string
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string): boolean
    vfunc_get_title(section: string): string
    vfunc_get_string(section: string, key: string): string
    vfunc_get_string_list(section: string, key: string): Gee.ArrayList
    vfunc_get_int(section: string, key: string, min: number, max: number): number
    vfunc_get_int_list(section: string, key: string): Gee.ArrayList
    vfunc_get_bool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: CmdlineConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CmdlineConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: CmdlineConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: CmdlineConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: CmdlineConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: CmdlineConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: CmdlineConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: CmdlineConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CmdlineConfig_ConstructProps)
    _init (config?: CmdlineConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CmdlineConfig
    static get_default(): CmdlineConfig
    static parse_args(args: string[]): /* args */ string[]
    static $gtype: GObject.Type
}
export interface EnvironmentConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class EnvironmentConfig {
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of RygelCore.Configuration */
    get_interface(): string
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string
    get_plugin_path(): string
    get_engine_path(): string
    get_media_engine(): string
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string): boolean
    get_title(section: string): string
    get_string(section: string, key: string): string
    get_string_list(section: string, key: string): Gee.ArrayList
    get_int(section: string, key: string, min: number, max: number): number
    get_int_list(section: string, key: string): Gee.ArrayList
    get_bool(section: string, key: string): boolean
    /* Virtual methods of RygelCore.EnvironmentConfig */
    vfunc_get_interface(): string
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string
    vfunc_get_plugin_path(): string
    vfunc_get_engine_path(): string
    vfunc_get_media_engine(): string
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string): boolean
    vfunc_get_title(section: string): string
    vfunc_get_string(section: string, key: string): string
    vfunc_get_string_list(section: string, key: string): Gee.ArrayList
    vfunc_get_int(section: string, key: string, min: number, max: number): number
    vfunc_get_int_list(section: string, key: string): Gee.ArrayList
    vfunc_get_bool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: EnvironmentConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EnvironmentConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: EnvironmentConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: EnvironmentConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: EnvironmentConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: EnvironmentConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: EnvironmentConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: EnvironmentConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EnvironmentConfig_ConstructProps)
    _init (config?: EnvironmentConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): EnvironmentConfig
    static get_default(): EnvironmentConfig
    static $gtype: GObject.Type
}
export interface UserConfig_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserConfig {
    /* Fields of RygelCore.UserConfig */
    key_file: GLib.KeyFile
    sys_key_file: GLib.KeyFile
    key_file_monitor: Gio.FileMonitor
    sys_key_file_monitor: Gio.FileMonitor
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    /* Methods of RygelCore.Configuration */
    get_interface(): string
    get_interfaces(): string[]
    get_port(): number
    get_transcoding(): boolean
    get_allow_upload(): boolean
    get_allow_deletion(): boolean
    get_log_levels(): string
    get_plugin_path(): string
    get_engine_path(): string
    get_media_engine(): string
    get_video_upload_folder(): string | null
    get_music_upload_folder(): string | null
    get_picture_upload_folder(): string | null
    get_enabled(section: string): boolean
    get_title(section: string): string
    get_string(section: string, key: string): string
    get_string_list(section: string, key: string): Gee.ArrayList
    get_int(section: string, key: string, min: number, max: number): number
    get_int_list(section: string, key: string): Gee.ArrayList
    get_bool(section: string, key: string): boolean
    /* Virtual methods of RygelCore.UserConfig */
    vfunc_get_interface(): string
    vfunc_get_interfaces(): string[]
    vfunc_get_port(): number
    vfunc_get_transcoding(): boolean
    vfunc_get_allow_upload(): boolean
    vfunc_get_allow_deletion(): boolean
    vfunc_get_log_levels(): string
    vfunc_get_plugin_path(): string
    vfunc_get_engine_path(): string
    vfunc_get_media_engine(): string
    vfunc_get_video_upload_folder(): string | null
    vfunc_get_music_upload_folder(): string | null
    vfunc_get_picture_upload_folder(): string | null
    vfunc_get_enabled(section: string): boolean
    vfunc_get_title(section: string): string
    vfunc_get_string(section: string, key: string): string
    vfunc_get_string_list(section: string, key: string): Gee.ArrayList
    vfunc_get_int(section: string, key: string, min: number, max: number): number
    vfunc_get_int_list(section: string, key: string): Gee.ArrayList
    vfunc_get_bool(section: string, key: string): boolean
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of RygelCore.Configuration */
    connect(sigName: "configuration-changed", callback: (($obj: UserConfig, entry: ConfigurationEntry) => void)): number
    connect_after(sigName: "configuration-changed", callback: (($obj: UserConfig, entry: ConfigurationEntry) => void)): number
    emit(sigName: "configuration-changed", entry: ConfigurationEntry): void
    connect(sigName: "section-changed", callback: (($obj: UserConfig, section: string, entry: SectionEntry) => void)): number
    connect_after(sigName: "section-changed", callback: (($obj: UserConfig, section: string, entry: SectionEntry) => void)): number
    emit(sigName: "section-changed", section: string, entry: SectionEntry): void
    connect(sigName: "setting-changed", callback: (($obj: UserConfig, section: string, key: string) => void)): number
    connect_after(sigName: "setting-changed", callback: (($obj: UserConfig, section: string, key: string) => void)): number
    emit(sigName: "setting-changed", section: string, key: string): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserConfig_ConstructProps)
    _init (config?: UserConfig_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(local_path: string): UserConfig
    static with_paths(local_path: string, system_path: string): UserConfig
    static get_default(): UserConfig
    static $gtype: GObject.Type
}
export interface V1Hacks_ConstructProps extends GObject.Object_ConstructProps {
    device_type?: string
    service_types?: string[]
}
export class V1Hacks {
    /* Properties of RygelCore.V1Hacks */
    device_type: string
    /* Fields of RygelCore.V1Hacks */
    description_path: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.V1Hacks */
    apply_on_device(device: RootDevice, template_path?: string | null): void
    get_device_type(): string
    set_device_type(value: string): void
    get_service_types(): string[]
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
    connect(sigName: "notify", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-type", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-type", callback: (($obj: V1Hacks, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: V1Hacks_ConstructProps)
    _init (config?: V1Hacks_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(device_type: string, service_types: string[]): V1Hacks
    static $gtype: GObject.Type
}
export class IconInfo {
    /* Fields of RygelCore.IconInfo */
    ref_count: number
    mime_type: string
    uri: string
    file_extension: string
    size: number
    width: number
    height: number
    depth: number
    static name: string
    static new(mime_type: string, file_extension: string): IconInfo
    constructor(mime_type: string, file_extension: string)
    /* Static methods and pseudo-constructors */
    static new(mime_type: string, file_extension: string): IconInfo
}
export class XMLUtils {
    /* Fields of RygelCore.XMLUtils */
    ref_count: number
    static name: string
    static new(): XMLUtils
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): XMLUtils
}
export class XMLUtilsIterator {
    /* Fields of RygelCore.XMLUtilsIterator */
    ref_count: number
    /* Methods of RygelCore.XMLUtilsIterator */
    iterator(): XMLUtilsIterator
    next(): boolean
    get(): object | null
    static name: string
    static new(node?: object | null): XMLUtilsIterator
    constructor(node?: object | null)
    /* Static methods and pseudo-constructors */
    static new(node?: object | null): XMLUtilsIterator
}
export class XMLUtilsChildIterator {
    /* Fields of RygelCore.XMLUtilsIterator */
    ref_count: number
    /* Methods of RygelCore.XMLUtilsIterator */
    iterator(): XMLUtilsIterator
    next(): boolean
    get(): object | null
    static name: string
    static new(node?: object | null): XMLUtilsChildIterator
    constructor(node?: object | null)
    /* Static methods and pseudo-constructors */
    static new(node?: object | null): XMLUtilsChildIterator
}
export interface PluginInformation_ConstructProps extends GObject.Object_ConstructProps {
    module_path?: string
    name?: string
    conflicts?: any
    module_loaded?: boolean
}
export class PluginInformation {
    /* Properties of RygelCore.PluginInformation */
    module_loaded: boolean
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of RygelCore.PluginInformation */
    get_module_path(): string
    get_name(): string
    get_conflicts(): any
    get_module_loaded(): boolean
    set_module_loaded(value: boolean): void
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
    connect(sigName: "notify", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::module-loaded", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::module-loaded", callback: (($obj: PluginInformation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PluginInformation_ConstructProps)
    _init (config?: PluginInformation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_file(file: Gio.File): PluginInformation
    static $gtype: GObject.Type
}
export abstract class ConnectionManagerClass {
    /* Fields of RygelCore.ConnectionManagerClass */
    get_current_protocol_info: (self: ConnectionManager) => string
    static name: string
}
export class ConnectionManagerPrivate {
    static name: string
}
export abstract class BasicManagementClass {
    static name: string
}
export class BasicManagementPrivate {
    static name: string
}
export abstract class DescriptionFileClass {
    static name: string
}
export class DescriptionFilePrivate {
    static name: string
}
export abstract class DLNAProfileClass {
    static name: string
}
export class DLNAProfilePrivate {
    static name: string
}
export abstract class EnergyManagementClass {
    static name: string
}
export class EnergyManagementPrivate {
    static name: string
}
export abstract class RootDeviceClass {
    static name: string
}
export class RootDevicePrivate {
    static name: string
}
export abstract class RootDeviceFactoryClass {
    static name: string
}
export class RootDeviceFactoryPrivate {
    static name: string
}
export abstract class LogHandlerClass {
    static name: string
}
export class LogHandlerPrivate {
    static name: string
}
export abstract class MetaConfigClass {
    static name: string
}
export class MetaConfigPrivate {
    static name: string
}
export abstract class PluginLoaderClass {
    static name: string
}
export class PluginLoaderPrivate {
    static name: string
}
export abstract class RecursiveModuleLoaderClass {
    /* Fields of RygelCore.RecursiveModuleLoaderClass */
    load_module_from_file: (self: RecursiveModuleLoader, file: Gio.File) => boolean
    load_module_from_info: (self: RecursiveModuleLoader, info: PluginInformation) => boolean
    static name: string
}
export class RecursiveModuleLoaderPrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of RygelCore.PluginClass */
    apply_hacks: (self: Plugin, device: RootDevice, description_path: string) => void
    static name: string
}
export class PluginPrivate {
    static name: string
}
export abstract class ResourceInfoClass {
    static name: string
}
export class ResourceInfoPrivate {
    static name: string
}
export abstract class MediaDeviceClass {
    static name: string
}
export class MediaDevicePrivate {
    static name: string
}
export abstract class BaseConfigurationClass {
    /* Fields of RygelCore.BaseConfigurationClass */
    get_interface: (self: BaseConfiguration) => string
    get_interfaces: (self: BaseConfiguration) => string[]
    get_port: (self: BaseConfiguration) => number
    get_transcoding: (self: BaseConfiguration) => boolean
    get_allow_upload: (self: BaseConfiguration) => boolean
    get_allow_deletion: (self: BaseConfiguration) => boolean
    get_log_levels: (self: BaseConfiguration) => string
    get_plugin_path: (self: BaseConfiguration) => string
    get_engine_path: (self: BaseConfiguration) => string
    get_media_engine: (self: BaseConfiguration) => string
    get_video_upload_folder: (self: BaseConfiguration) => string | null
    get_music_upload_folder: (self: BaseConfiguration) => string | null
    get_picture_upload_folder: (self: BaseConfiguration) => string | null
    get_enabled: (self: BaseConfiguration, section: string) => boolean
    get_title: (self: BaseConfiguration, section: string) => string
    get_string: (self: BaseConfiguration, section: string, key: string) => string
    get_string_list: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    get_int: (self: BaseConfiguration, section: string, key: string, min: number, max: number) => number
    get_int_list: (self: BaseConfiguration, section: string, key: string) => Gee.ArrayList
    get_bool: (self: BaseConfiguration, section: string, key: string) => boolean
    static name: string
}
export class BaseConfigurationPrivate {
    static name: string
}
export abstract class CmdlineConfigClass {
    static name: string
}
export class CmdlineConfigPrivate {
    static name: string
}
export abstract class EnvironmentConfigClass {
    static name: string
}
export class EnvironmentConfigPrivate {
    static name: string
}
export abstract class UserConfigClass {
    static name: string
}
export class UserConfigPrivate {
    static name: string
}
export abstract class V1HacksClass {
    static name: string
}
export class V1HacksPrivate {
    static name: string
}
export abstract class IconInfoClass {
    static name: string
}
export class IconInfoPrivate {
    static name: string
}
export abstract class XMLUtilsClass {
    static name: string
}
export class XMLUtilsPrivate {
    static name: string
}
export abstract class XMLUtilsIteratorClass {
    static name: string
}
export class XMLUtilsIteratorPrivate {
    static name: string
}
export abstract class XMLUtilsChildIteratorClass {
    static name: string
}
export class XMLUtilsChildIteratorPrivate {
    static name: string
}
export abstract class PluginInformationClass {
    static name: string
}
export class PluginInformationPrivate {
    static name: string
}
export abstract class DBusInterfaceIface {
    /* Fields of RygelCore.DBusInterfaceIface */
    shutdown: (self: DBusInterface) => void
    static name: string
}
export abstract class DBusAclProviderIface {
    /* Fields of RygelCore.DBusAclProviderIface */
    is_allowed: (self: DBusAclProvider, device: GLib.HashTable, service: GLib.HashTable, path: string, address: string, agent?: string | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    is_allowed_finish: (self: DBusAclProvider, _res_: Gio.AsyncResult) => boolean
    static name: string
}
export abstract class ConfigurationIface {
    /* Fields of RygelCore.ConfigurationIface */
    get_interface: (self: Configuration) => string
    get_interfaces: (self: Configuration) => string[]
    get_port: (self: Configuration) => number
    get_transcoding: (self: Configuration) => boolean
    get_allow_upload: (self: Configuration) => boolean
    get_allow_deletion: (self: Configuration) => boolean
    get_log_levels: (self: Configuration) => string
    get_plugin_path: (self: Configuration) => string
    get_engine_path: (self: Configuration) => string
    get_media_engine: (self: Configuration) => string
    get_video_upload_folder: (self: Configuration) => string | null
    get_music_upload_folder: (self: Configuration) => string | null
    get_picture_upload_folder: (self: Configuration) => string | null
    get_enabled: (self: Configuration, section: string) => boolean
    get_title: (self: Configuration, section: string) => string
    get_string: (self: Configuration, section: string, key: string) => string
    get_string_list: (self: Configuration, section: string, key: string) => Gee.ArrayList
    get_int: (self: Configuration, section: string, key: string, min: number, max: number) => number
    get_int_list: (self: Configuration, section: string, key: string) => Gee.ArrayList
    get_bool: (self: Configuration, section: string, key: string) => boolean
    static name: string
}
export abstract class StateMachineIface {
    /* Fields of RygelCore.StateMachineIface */
    run: (self: StateMachine, _callback_?: Gio.AsyncReadyCallback | null) => void
    run_finish: (self: StateMachine, _res_: Gio.AsyncResult) => void
    get_cancellable: (self: StateMachine) => Gio.Cancellable
    set_cancellable: (self: StateMachine, value: Gio.Cancellable) => void
    static name: string
}