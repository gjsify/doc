/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Unity-6.0
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';
import type Dbusmenu from './Dbusmenu-0.4';
import type GObject from './GObject-2.0';
import type Dee from './Dee-1.0';
import type Gio from './Gio-2.0';

export namespace Unity {

enum CategoryType {
    NONE,
    APPLICATION,
    BOOK,
    MUSIC,
    MOVIE,
    GAMES,
    ELECTRONICS,
    COMPUTERS,
    OFFICE,
    HOME,
    GARDEN,
    PETS,
    TOYS,
    CHILDREN,
    BABY,
    CLOTHES,
    SHOES,
    WATCHES,
    SPORTS,
    OUTDOORS,
    GROCERY,
    HEALTH,
    BEAUTY,
    DIY,
    TOOLS,
    CAR,
    N_CATEGORIES,
}
enum IconSizeHint {
    DEFAULT,
    SMALL,
    LARGE,
}
enum HandledType {
    NOT_HANDLED,
    SHOW_DASH,
    HIDE_DASH,
    GOTO_DASH_URI,
    SHOW_PREVIEW,
}
enum CategoryRenderer {
    VERTICAL_TILE,
    HORIZONTAL_TILE,
    LIST_TILE,
    FLOW,
}
enum FilterRenderer {
    CHECK_OPTIONS,
    RADIO_OPTIONS,
    MULTIRANGE,
    RATINGS,
    CHECK_OPTIONS_COMPACT,
}
enum LayoutHint {
    NONE,
    LEFT,
    RIGHT,
    TOP,
    BOTTOM,
}
enum SearchType {
    DEFAULT,
    GLOBAL,
    N_TYPES,
}
enum PlaybackState {
    PLAYING,
    PAUSED,
}
enum OptionsFilterSortType {
    MANUAL,
    DISPLAY_NAME,
    ID,
}
enum PreferencesManagerRemoteContent {
    ALL,
    NONE,
}
enum MusicPreviewTrackState {
    STOPPED,
    PLAYING,
    PAUSED,
}
function io_read_stream_async(input: Gio.InputStream, io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null): void
function io_read_stream_finish(_res_: Gio.AsyncResult): [ /* data */ Uint8Array, /* size */ number ]
function io_open_from_dirs(filename: string, dirs: string[], _callback_?: Gio.AsyncReadyCallback | null): void
function io_open_from_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream | null
function io_open_from_data_dirs(filename: string, _callback_?: Gio.AsyncReadyCallback | null): void
function io_open_from_data_dirs_finish(_res_: Gio.AsyncResult): Gio.FileInputStream | null
function io_get_system_data_dirs(): string[]
interface MergeStrategy_ConstructProps extends GObject.Object_ConstructProps {
}
class MergeStrategy {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MergeStrategy */
    merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null
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
    /* Virtual methods of Unity-6.0.Unity.MergeStrategy */
    vfunc_merge_result(target: Dee.Model, row: GLib.Variant[]): Dee.ModelIter | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MergeStrategy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MergeStrategy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MergeStrategy_ConstructProps)
    _init (config?: MergeStrategy_ConstructProps): void
    static $gtype: GObject.Type
}
interface AppInfoManager_ConstructProps extends GObject.Object_ConstructProps {
}
class AppInfoManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AppInfoManager */
    lookup(id: string): Gio.AppInfo | null
    get_categories(id: string): string[] | null
    get_keywords(id: string): string[] | null
    get_path(id: string): string | null
    lookup_async(id: string, _callback_?: Gio.AsyncReadyCallback | null): void
    lookup_finish(_res_: Gio.AsyncResult): Gio.AppInfo | null
    clear(): void
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
    /* Signals of Unity-6.0.Unity.AppInfoManager */
    connect(sigName: "changed", callback: (($obj: AppInfoManager, id: string, new_appinfo?: Gio.AppInfo | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: AppInfoManager, id: string, new_appinfo?: Gio.AppInfo | null) => void)): number
    emit(sigName: "changed", id: string, new_appinfo?: Gio.AppInfo | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AppInfoManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppInfoManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppInfoManager_ConstructProps)
    _init (config?: AppInfoManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_instance(): AppInfoManager
    static get_default(): AppInfoManager
    static $gtype: GObject.Type
}
interface AnnotatedIcon_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.AnnotatedIcon */
    icon?: Gio.Icon
    ribbon?: string
    category?: CategoryType
    size_hint?: IconSizeHint
}
class AnnotatedIcon {
    /* Properties of Unity-6.0.Unity.AnnotatedIcon */
    icon: Gio.Icon
    ribbon: string
    category: CategoryType
    size_hint: IconSizeHint
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AnnotatedIcon */
    to_string(): string
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
    connect(sigName: "notify", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ribbon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ribbon", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::category", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::size-hint", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-hint", callback: (($obj: AnnotatedIcon, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AnnotatedIcon_ConstructProps)
    _init (config?: AnnotatedIcon_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(base_icon: Gio.Icon): AnnotatedIcon
    static $gtype: GObject.Type
}
interface Inspector_ConstructProps extends GObject.Object_ConstructProps {
}
class Inspector {
    /* Properties of Unity-6.0.Unity.Inspector */
    readonly unity_running: boolean
    readonly unity_bus_name: string
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
    connect(sigName: "notify", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::unity-running", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-running", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::unity-bus-name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unity-bus-name", callback: (($obj: Inspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Inspector_ConstructProps)
    _init (config?: Inspector_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Inspector
    static $gtype: GObject.Type
}
interface LauncherEntry_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.LauncherEntry */
    app_uri?: string
    count?: number
    count_visible?: boolean
    progress?: number
    progress_visible?: boolean
    urgent?: boolean
    quicklist?: Dbusmenu.Menuitem
}
class LauncherEntry {
    /* Properties of Unity-6.0.Unity.LauncherEntry */
    app_uri: string
    count: number
    count_visible: boolean
    progress: number
    progress_visible: boolean
    urgent: boolean
    quicklist: Dbusmenu.Menuitem
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
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity-6.0.Unity.LauncherEntry */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-uri", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-uri", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::count", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::count-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::count-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-visible", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::quicklist", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quicklist", callback: (($obj: LauncherEntry, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LauncherEntry_ConstructProps)
    _init (config?: LauncherEntry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_for_app_uri(app_uri: string): LauncherEntry
    static get_for_desktop_id(desktop_id: string): LauncherEntry
    static get_for_desktop_file(desktop_file: string): LauncherEntry
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface LauncherFavorites_ConstructProps extends GObject.Object_ConstructProps {
}
class LauncherFavorites {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.LauncherFavorites */
    has_app_info(appinfo: Gio.AppInfo): boolean
    has_app_id(app_id: string): boolean
    lookup(app_id: string): Gio.AppInfo | null
    enumerate_ids(): string[]
    enumerate_app_infos(): Gio.AppInfo[]
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
    /* Signals of Unity-6.0.Unity.LauncherFavorites */
    connect(sigName: "changed", callback: (($obj: LauncherFavorites) => void)): number
    connect_after(sigName: "changed", callback: (($obj: LauncherFavorites) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LauncherFavorites, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LauncherFavorites, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LauncherFavorites_ConstructProps)
    _init (config?: LauncherFavorites_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): LauncherFavorites
    static $gtype: GObject.Type
}
interface ActivationResponse_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.ActivationResponse */
    handled?: HandledType
    goto_uri?: string
}
class ActivationResponse {
    /* Properties of Unity-6.0.Unity.ActivationResponse */
    goto_uri: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
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
    connect(sigName: "notify", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::goto-uri", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::goto-uri", callback: (($obj: ActivationResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActivationResponse_ConstructProps)
    _init (config?: ActivationResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(handled: HandledType, goto_uri: string): ActivationResponse
    static with_preview(preview: Preview): ActivationResponse
    static $gtype: GObject.Type
}
interface Category_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Category */
    name?: string
    icon_hint?: Gio.Icon
    default_renderer?: CategoryRenderer
}
class Category {
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
    connect(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Category, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Category_ConstructProps)
    _init (config?: Category_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, icon_hint: Gio.Icon, renderer: CategoryRenderer): Category
    static $gtype: GObject.Type
}
interface Filter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Filter */
    id?: string
    display_name?: string
    icon_hint?: Gio.Icon
    renderer?: FilterRenderer
    visible?: boolean
    collapsed?: boolean
    filtering?: boolean
}
class Filter {
    /* Properties of Unity-6.0.Unity.Filter */
    display_name: string
    visible: boolean
    filtering: boolean
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: Filter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Filter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display-name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: Filter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Filter_ConstructProps)
    _init (config?: Filter_ConstructProps): void
    static $gtype: GObject.Type
}
interface FilterOption_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.FilterOption */
    id?: string
    display_name?: string
    icon_hint?: Gio.Icon
    active?: boolean
}
class FilterOption {
    /* Properties of Unity-6.0.Unity.FilterOption */
    active: boolean
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
    connect(sigName: "notify", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: FilterOption, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FilterOption_ConstructProps)
    _init (config?: FilterOption_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, active: boolean): FilterOption
    static $gtype: GObject.Type
}
interface OptionsFilter_ConstructProps extends Filter_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.OptionsFilter */
    sort_type?: OptionsFilterSortType
}
class OptionsFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    display_name: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.Filter */
    readonly parent_instance: GObject.Object
    readonly priv: FilterPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: OptionsFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: OptionsFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: OptionsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OptionsFilter_ConstructProps)
    _init (config?: OptionsFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): OptionsFilter
    static $gtype: GObject.Type
}
interface RadioOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
class RadioOptionFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    display_name: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    readonly parent_instance: Filter
    readonly priv: OptionsFilterPrivate
    readonly options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.RadioOptionFilter */
    get_active_option(): FilterOption | null
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: RadioOptionFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RadioOptionFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: RadioOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RadioOptionFilter_ConstructProps)
    _init (config?: RadioOptionFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): RadioOptionFilter
    /* Function overloads */
    static new(): RadioOptionFilter
    static $gtype: GObject.Type
}
interface CheckOptionFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
class CheckOptionFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    display_name: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    readonly parent_instance: Filter
    readonly priv: OptionsFilterPrivate
    readonly options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: CheckOptionFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CheckOptionFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: CheckOptionFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CheckOptionFilter_ConstructProps)
    _init (config?: CheckOptionFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilter
    /* Function overloads */
    static new(): CheckOptionFilter
    static $gtype: GObject.Type
}
interface CheckOptionFilterCompact_ConstructProps extends OptionsFilter_ConstructProps {
}
class CheckOptionFilterCompact {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    display_name: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    readonly parent_instance: Filter
    readonly priv: OptionsFilterPrivate
    readonly options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: CheckOptionFilterCompact) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CheckOptionFilterCompact) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: CheckOptionFilterCompact, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CheckOptionFilterCompact_ConstructProps)
    _init (config?: CheckOptionFilterCompact_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): CheckOptionFilterCompact
    /* Function overloads */
    static new(): CheckOptionFilterCompact
    static $gtype: GObject.Type
}
interface RatingsFilter_ConstructProps extends Filter_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.RatingsFilter */
    rating?: number
}
class RatingsFilter {
    /* Properties of Unity-6.0.Unity.RatingsFilter */
    rating: number
    /* Properties of Unity-6.0.Unity.Filter */
    display_name: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.Filter */
    readonly parent_instance: GObject.Object
    readonly priv: FilterPrivate
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: RatingsFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: RatingsFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rating", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rating", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: RatingsFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RatingsFilter_ConstructProps)
    _init (config?: RatingsFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): RatingsFilter
    static $gtype: GObject.Type
}
interface MultiRangeFilter_ConstructProps extends OptionsFilter_ConstructProps {
}
class MultiRangeFilter {
    /* Properties of Unity-6.0.Unity.OptionsFilter */
    sort_type: OptionsFilterSortType
    /* Properties of Unity-6.0.Unity.Filter */
    display_name: string
    visible: boolean
    filtering: boolean
    /* Fields of Unity-6.0.Unity.OptionsFilter */
    readonly parent_instance: Filter
    readonly priv: OptionsFilterPrivate
    readonly options: FilterOption[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MultiRangeFilter */
    get_first_active(): FilterOption | null
    get_last_active(): FilterOption | null
    /* Methods of Unity-6.0.Unity.OptionsFilter */
    add_option(id: string, display_name: string, icon_hint?: Gio.Icon | null): FilterOption
    get_option(id: string): FilterOption | null
    remove_option(id: string): boolean
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
    /* Signals of Unity-6.0.Unity.Filter */
    connect(sigName: "changed", callback: (($obj: MultiRangeFilter) => void)): number
    connect_after(sigName: "changed", callback: (($obj: MultiRangeFilter) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sort-type", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-name", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filtering", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filtering", callback: (($obj: MultiRangeFilter, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MultiRangeFilter_ConstructProps)
    _init (config?: MultiRangeFilter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, collapsed: boolean): MultiRangeFilter
    /* Function overloads */
    static new(): MultiRangeFilter
    static $gtype: GObject.Type
}
interface PreferencesManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.PreferencesManager */
    remote_content_search?: PreferencesManagerRemoteContent
}
class PreferencesManager {
    /* Properties of Unity-6.0.Unity.PreferencesManager */
    remote_content_search: PreferencesManagerRemoteContent
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
    connect(sigName: "notify", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-content-search", callback: (($obj: PreferencesManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreferencesManager_ConstructProps)
    _init (config?: PreferencesManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): PreferencesManager
    static $gtype: GObject.Type
}
interface LensSearch_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.LensSearch */
    search_string?: string
    hints?: GLib.HashTable
    results_model?: Dee.SerializableModel
}
class LensSearch {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.LensSearch */
    emit_finished(): void
    equals(other?: LensSearch | null): boolean
    set_reply_hint(key: string, variant: GLib.Variant): void
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
    /* Signals of Unity-6.0.Unity.LensSearch */
    connect(sigName: "finished", callback: (($obj: LensSearch) => void)): number
    connect_after(sigName: "finished", callback: (($obj: LensSearch) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: LensSearch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: LensSearch_ConstructProps)
    _init (config?: LensSearch_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(search_string: string, hints: GLib.HashTable, results_model: Dee.SerializableModel): LensSearch
    static $gtype: GObject.Type
}
interface Lens_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Lens */
    active?: boolean
    visible?: boolean
    searching?: boolean
    exported?: boolean
    search_in_global?: boolean
    home_lens_default_name?: string
    id?: string
    dbus_path?: string
    search_hint?: string
    filters?: Filter[]
    categories?: Category[]
    merge_strategy?: MergeStrategy
    global_merge_strategy?: MergeStrategy
    sources_display_name?: string
}
class Lens {
    /* Properties of Unity-6.0.Unity.Lens */
    active: boolean
    visible: boolean
    searching: boolean
    exported: boolean
    search_in_global: boolean
    home_lens_default_name: string
    search_hint: string
    filters: Filter[]
    categories: Category[]
    merge_strategy: MergeStrategy
    global_merge_strategy: MergeStrategy
    sources_display_name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Lens */
    export(): void
    add_local_scope(scope: Scope): void
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
    connect(sigName: "notify", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::searching", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::searching", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::exported", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-in-global", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-lens-default-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-lens-default-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-hint", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-hint", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filters", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::categories", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::categories", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::global-merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-merge-strategy", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sources-display-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources-display-name", callback: (($obj: Lens, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Lens_ConstructProps)
    _init (config?: Lens_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbus_path_: string, id_: string): Lens
    static $gtype: GObject.Type
}
interface Preview_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Preview */
    title?: string
    subtitle?: string
    description_markup?: string
    image_source_uri?: string
    image?: Gio.Icon
}
class Preview {
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
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
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity-6.0.Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: Preview) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Preview) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: Preview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Preview_ConstructProps)
    _init (config?: Preview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface PreviewAction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.PreviewAction */
    id?: string
    display_name?: string
    extra_text?: string
    icon_hint?: Gio.Icon
    layout_hint?: LayoutHint
}
class PreviewAction {
    /* Properties of Unity-6.0.Unity.PreviewAction */
    extra_text: string
    readonly hints: GLib.HashTable
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
    /* Methods of Dee-1.0.Dee.Serializable */
    externalize(): GLib.Variant
    serialize(): GLib.Variant
    /* Virtual methods of Unity-6.0.Unity.PreviewAction */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unity-6.0.Unity.PreviewAction */
    connect(sigName: "activated", callback: (($obj: PreviewAction, uri: string) => ActivationResponse)): number
    connect_after(sigName: "activated", callback: (($obj: PreviewAction, uri: string) => ActivationResponse)): number
    emit(sigName: "activated", uri: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::extra-text", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-text", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hints", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hints", callback: (($obj: PreviewAction, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PreviewAction_ConstructProps)
    _init (config?: PreviewAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint?: Gio.Icon | null): PreviewAction
    static with_layout_hint(id: string, display_name: string, icon_hint: Gio.Icon | null, layout: LayoutHint): PreviewAction
    static parse(data: GLib.Variant, type: GObject.Type): GObject.Object
    static parse_external(data: GLib.Variant): GObject.Object
    static $gtype: GObject.Type
}
interface InfoHint_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.InfoHint */
    id?: string
    display_name?: string
    icon_hint?: Gio.Icon
    data?: GLib.Variant
}
class InfoHint {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
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
    connect(sigName: "notify", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InfoHint, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InfoHint_ConstructProps)
    _init (config?: InfoHint_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, display_name: string, icon_hint: Gio.Icon | null, data: string): InfoHint
    static with_variant(id: string, display_name: string, icon_hint: Gio.Icon | null, data: GLib.Variant): InfoHint
    static $gtype: GObject.Type
}
interface GenericPreview_ConstructProps extends Preview_ConstructProps {
}
class GenericPreview {
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parent_instance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
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
    /* Virtual methods of Unity-6.0.Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: GenericPreview) => void)): number
    connect_after(sigName: "closed", callback: (($obj: GenericPreview) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::title", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: GenericPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GenericPreview_ConstructProps)
    _init (config?: GenericPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, description: string, image?: Gio.Icon | null): GenericPreview
    static $gtype: GObject.Type
}
interface ApplicationPreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.ApplicationPreview */
    app_icon?: Gio.Icon
    license?: string
    copyright?: string
    last_update?: string
}
class ApplicationPreview {
    /* Properties of Unity-6.0.Unity.ApplicationPreview */
    app_icon: Gio.Icon
    license: string
    copyright: string
    last_update: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parent_instance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.ApplicationPreview */
    set_rating(rating: number, num_ratings: number): void
    /* Methods of Unity-6.0.Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
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
    /* Virtual methods of Unity-6.0.Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: ApplicationPreview) => void)): number
    connect_after(sigName: "closed", callback: (($obj: ApplicationPreview) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-icon", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-icon", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::license", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::copyright", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyright", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-update", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-update", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: ApplicationPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ApplicationPreview_ConstructProps)
    _init (config?: ApplicationPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, description: string, icon?: Gio.Icon | null, screenshot?: Gio.Icon | null): ApplicationPreview
    static $gtype: GObject.Type
}
interface MusicPreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.MusicPreview */
    current_track_uri?: string
    current_progress?: number
    current_track_state?: MusicPreviewTrackState
}
class MusicPreview {
    /* Properties of Unity-6.0.Unity.MusicPreview */
    current_track_uri: string
    current_progress: number
    current_track_state: MusicPreviewTrackState
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parent_instance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MusicPreview */
    add_track(track: TrackMetadata): void
    /* Methods of Unity-6.0.Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
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
    /* Virtual methods of Unity-6.0.Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unity-6.0.Unity.MusicPreview */
    connect(sigName: "play", callback: (($obj: MusicPreview, uri: string) => void)): number
    connect_after(sigName: "play", callback: (($obj: MusicPreview, uri: string) => void)): number
    emit(sigName: "play", uri: string): void
    connect(sigName: "pause", callback: (($obj: MusicPreview, uri: string) => void)): number
    connect_after(sigName: "pause", callback: (($obj: MusicPreview, uri: string) => void)): number
    emit(sigName: "pause", uri: string): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: MusicPreview) => void)): number
    connect_after(sigName: "closed", callback: (($obj: MusicPreview) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-track-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-progress", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-progress", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-track-state", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track-state", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: MusicPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MusicPreview_ConstructProps)
    _init (config?: MusicPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, image?: Gio.Icon | null): MusicPreview
    static $gtype: GObject.Type
}
interface MoviePreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.MoviePreview */
    year?: string
}
class MoviePreview {
    /* Properties of Unity-6.0.Unity.MoviePreview */
    year: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parent_instance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MoviePreview */
    set_rating(rating: number, num_ratings: number): void
    /* Methods of Unity-6.0.Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
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
    /* Virtual methods of Unity-6.0.Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: MoviePreview) => void)): number
    connect_after(sigName: "closed", callback: (($obj: MoviePreview) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::year", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::year", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: MoviePreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MoviePreview_ConstructProps)
    _init (config?: MoviePreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, subtitle: string, description: string, image?: Gio.Icon | null): MoviePreview
    static $gtype: GObject.Type
}
interface SocialPreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.SocialPreview */
    avatar?: Gio.Icon
    content?: string
    sender?: string
}
class SocialPreview {
    /* Properties of Unity-6.0.Unity.SocialPreview */
    avatar: Gio.Icon
    content: string
    sender: string
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parent_instance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.SocialPreview */
    add_comment(comment: SocialPreviewComment): void
    /* Methods of Unity-6.0.Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
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
    /* Virtual methods of Unity-6.0.Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: SocialPreview) => void)): number
    connect_after(sigName: "closed", callback: (($obj: SocialPreview) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::avatar", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::avatar", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::content", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sender", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: SocialPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocialPreview_ConstructProps)
    _init (config?: SocialPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(sender: string, subtitle: string, content: string, avatar?: Gio.Icon | null): SocialPreview
    static $gtype: GObject.Type
}
interface SocialPreviewComment_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.SocialPreviewComment */
    id?: string
    name?: string
    text?: string
    time?: string
}
class SocialPreviewComment {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
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
    connect(sigName: "notify", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SocialPreviewComment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SocialPreviewComment_ConstructProps)
    _init (config?: SocialPreviewComment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, name: string, text: string, time: string): SocialPreviewComment
    static $gtype: GObject.Type
}
interface AsyncPreview_ConstructProps extends Preview_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.AsyncPreview */
    cancellable?: Gio.Cancellable
}
class AsyncPreview {
    /* Properties of Unity-6.0.Unity.AsyncPreview */
    cancellable: Gio.Cancellable
    /* Properties of Unity-6.0.Unity.Preview */
    title: string
    subtitle: string
    description_markup: string
    image_source_uri: string
    image: Gio.Icon
    /* Fields of Unity-6.0.Unity.Preview */
    readonly parent_instance: GObject.Object
    readonly priv: PreviewPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.AsyncPreview */
    emit_preview_ready(preview?: Preview | null): void
    /* Methods of Unity-6.0.Unity.Preview */
    add_action(action: PreviewAction): void
    add_info(info_hint: InfoHint): void
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
    /* Virtual methods of Unity-6.0.Unity.Preview */
    vfunc_serialize(): GLib.Variant
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Unity-6.0.Unity.AsyncPreview */
    connect(sigName: "preview_ready", callback: (($obj: AsyncPreview, preview: Preview) => void)): number
    connect_after(sigName: "preview_ready", callback: (($obj: AsyncPreview, preview: Preview) => void)): number
    emit(sigName: "preview_ready", preview: Preview): void
    /* Signals of Unity-6.0.Unity.Preview */
    connect(sigName: "closed", callback: (($obj: AsyncPreview) => void)): number
    connect_after(sigName: "closed", callback: (($obj: AsyncPreview) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cancellable", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cancellable", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subtitle", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description-markup", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description-markup", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image-source-uri", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-source-uri", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::image", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: AsyncPreview, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AsyncPreview_ConstructProps)
    _init (config?: AsyncPreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AsyncPreview
    static with_cancellable(cancellable: Gio.Cancellable): AsyncPreview
    static $gtype: GObject.Type
}
interface Scope_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Scope */
    active?: boolean
    exported?: boolean
    search_in_global?: boolean
    provides_personal_content?: boolean
    dbus_path?: string
    sources?: OptionsFilter
}
class Scope {
    /* Properties of Unity-6.0.Unity.Scope */
    active: boolean
    exported: boolean
    search_in_global: boolean
    provides_personal_content: boolean
    sources: OptionsFilter
    readonly filters: Filter[]
    readonly results_model: Dee.SerializableModel
    readonly global_results_model: Dee.SerializableModel
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.Scope */
    export(): void
    get_filter(id: string): Filter | null
    queue_search_changed(search_type: SearchType): void
    invalidate_search(search_type: SearchType): void
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
    /* Signals of Unity-6.0.Unity.Scope */
    connect(sigName: "activate_uri", callback: (($obj: Scope, uri: string) => ActivationResponse | null)): number
    connect_after(sigName: "activate_uri", callback: (($obj: Scope, uri: string) => ActivationResponse | null)): number
    emit(sigName: "activate_uri", uri: string): void
    connect(sigName: "preview_uri", callback: (($obj: Scope, uri: string) => Preview | null)): number
    connect_after(sigName: "preview_uri", callback: (($obj: Scope, uri: string) => Preview | null)): number
    emit(sigName: "preview_uri", uri: string): void
    connect(sigName: "filters_changed", callback: (($obj: Scope) => void)): number
    connect_after(sigName: "filters_changed", callback: (($obj: Scope) => void)): number
    emit(sigName: "filters_changed"): void
    connect(sigName: "active_sources_changed", callback: (($obj: Scope, active_ids: string[]) => void)): number
    connect_after(sigName: "active_sources_changed", callback: (($obj: Scope, active_ids: string[]) => void)): number
    emit(sigName: "active_sources_changed", active_ids: string[]): void
    connect(sigName: "search_changed", callback: (($obj: Scope, search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable) => void)): number
    connect_after(sigName: "search_changed", callback: (($obj: Scope, search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable) => void)): number
    emit(sigName: "search_changed", search: LensSearch, search_type: SearchType, cancellable: Gio.Cancellable): void
    connect(sigName: "generate_search_key", callback: (($obj: Scope, search: LensSearch) => string)): number
    connect_after(sigName: "generate_search_key", callback: (($obj: Scope, search: LensSearch) => string)): number
    emit(sigName: "generate_search_key", search: LensSearch): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::exported", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exported", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::search-in-global", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-in-global", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::provides-personal-content", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provides-personal-content", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sources", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sources", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::filters", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filters", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::global-results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::global-results-model", callback: (($obj: Scope, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Scope_ConstructProps)
    _init (config?: Scope_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(dbus_path_: string): Scope
    static $gtype: GObject.Type
}
interface TrackMetadata_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.TrackMetadata */
    uri?: string
    track_no?: number
    artist?: string
    title?: string
    album?: string
    length?: number
    art_location?: Gio.File
    art_icon?: Gio.Icon
}
class TrackMetadata {
    /* Properties of Unity-6.0.Unity.TrackMetadata */
    uri: string
    track_no: number
    artist: string
    title: string
    album: string
    length: number
    art_location: Gio.File
    art_icon: Gio.Icon
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
    connect(sigName: "notify", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-no", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-no", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::artist", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::artist", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::album", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::album", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::art-location", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-location", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::art-icon", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::art-icon", callback: (($obj: TrackMetadata, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TrackMetadata_ConstructProps)
    _init (config?: TrackMetadata_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TrackMetadata
    static full(uri: string, track_no: number, title: string, artist: string, album: string, length: number): TrackMetadata
    static $gtype: GObject.Type
}
interface Playlist_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.Playlist */
    id?: string
    name?: string
    icon?: Gio.Icon
    creation_date?: GLib.DateTime
    modification_date?: GLib.DateTime
    last_play_date?: GLib.DateTime
}
class Playlist {
    /* Properties of Unity-6.0.Unity.Playlist */
    name: string
    icon: Gio.Icon
    creation_date: GLib.DateTime
    modification_date: GLib.DateTime
    last_play_date: GLib.DateTime
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
    connect(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::creation-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modification-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modification-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-play-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-play-date", callback: (($obj: Playlist, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Playlist_ConstructProps)
    _init (config?: Playlist_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string): Playlist
    static $gtype: GObject.Type
}
interface MusicPlayer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Unity-6.0.Unity.MusicPlayer */
    app_info?: Gio.AppInfo
    desktop_file_name?: string
    is_blacklisted?: boolean
    title?: string
    can_go_next?: boolean
    can_go_previous?: boolean
    can_play?: boolean
    can_pause?: boolean
    current_track?: TrackMetadata
    playback_state?: PlaybackState
    current_playlist?: Playlist
    track_menu?: Dbusmenu.Menuitem
    player_menu?: Dbusmenu.Menuitem
}
class MusicPlayer {
    /* Properties of Unity-6.0.Unity.MusicPlayer */
    is_blacklisted: boolean
    title: string
    can_go_next: boolean
    can_go_previous: boolean
    can_play: boolean
    can_pause: boolean
    current_track: TrackMetadata
    playback_state: PlaybackState
    current_playlist: Playlist
    track_menu: Dbusmenu.Menuitem
    player_menu: Dbusmenu.Menuitem
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Unity-6.0.Unity.MusicPlayer */
    export(): void
    unexport(): void
    add_playlist(p: Playlist): boolean
    remove_playlist(p: Playlist): boolean
    get_playlists(): Playlist[]
    edit_playlist_name(id: string, name: string): void
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
    /* Signals of Unity-6.0.Unity.MusicPlayer */
    connect(sigName: "raise", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "raise", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "raise"): void
    connect(sigName: "play_pause", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "play_pause", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "play_pause"): void
    connect(sigName: "previous", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "previous", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "previous"): void
    connect(sigName: "next", callback: (($obj: MusicPlayer) => void)): number
    connect_after(sigName: "next", callback: (($obj: MusicPlayer) => void)): number
    emit(sigName: "next"): void
    connect(sigName: "activate_playlist", callback: (($obj: MusicPlayer, playlist_id: string) => void)): number
    connect_after(sigName: "activate_playlist", callback: (($obj: MusicPlayer, playlist_id: string) => void)): number
    emit(sigName: "activate_playlist", playlist_id: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-blacklisted", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-blacklisted", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-go-next", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-next", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-go-previous", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-go-previous", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-play", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-play", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-pause", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-pause", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-track", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-track", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::playback-state", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playback-state", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-playlist", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-playlist", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::track-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::track-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::player-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::player-menu", callback: (($obj: MusicPlayer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MusicPlayer_ConstructProps)
    _init (config?: MusicPlayer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(desktop: string): MusicPlayer
    static $gtype: GObject.Type
}
abstract class AppInfoManagerClass {
    /* Fields of Unity-6.0.Unity.AppInfoManagerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class AppInfoManagerPrivate {
    static name: string
}
abstract class AnnotatedIconClass {
    /* Fields of Unity-6.0.Unity.AnnotatedIconClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class AnnotatedIconPrivate {
    static name: string
}
abstract class InspectorClass {
    /* Fields of Unity-6.0.Unity.InspectorClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class InspectorPrivate {
    static name: string
}
abstract class LauncherEntryClass {
    /* Fields of Unity-6.0.Unity.LauncherEntryClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class LauncherEntryPrivate {
    static name: string
}
abstract class LauncherFavoritesClass {
    /* Fields of Unity-6.0.Unity.LauncherFavoritesClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class LauncherFavoritesPrivate {
    static name: string
}
abstract class ActivationResponseClass {
    /* Fields of Unity-6.0.Unity.ActivationResponseClass */
    readonly parent_class: GObject.InitiallyUnownedClass
    static name: string
}
class ActivationResponsePrivate {
    static name: string
}
abstract class CategoryClass {
    /* Fields of Unity-6.0.Unity.CategoryClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class CategoryPrivate {
    static name: string
}
abstract class FilterClass {
    /* Fields of Unity-6.0.Unity.FilterClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_hints: (self: Filter) => GLib.HashTable
    readonly update: (self: Filter, properties: GLib.Variant) => void
    static name: string
}
class FilterPrivate {
    static name: string
}
abstract class FilterOptionClass {
    /* Fields of Unity-6.0.Unity.FilterOptionClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class FilterOptionPrivate {
    static name: string
}
abstract class OptionsFilterClass {
    /* Fields of Unity-6.0.Unity.OptionsFilterClass */
    readonly parent_class: FilterClass
    static name: string
}
class OptionsFilterPrivate {
    static name: string
}
abstract class RadioOptionFilterClass {
    /* Fields of Unity-6.0.Unity.RadioOptionFilterClass */
    readonly parent_class: OptionsFilterClass
    static name: string
}
class RadioOptionFilterPrivate {
    static name: string
}
abstract class CheckOptionFilterClass {
    /* Fields of Unity-6.0.Unity.CheckOptionFilterClass */
    readonly parent_class: OptionsFilterClass
    static name: string
}
class CheckOptionFilterPrivate {
    static name: string
}
abstract class CheckOptionFilterCompactClass {
    /* Fields of Unity-6.0.Unity.CheckOptionFilterCompactClass */
    readonly parent_class: OptionsFilterClass
    static name: string
}
class CheckOptionFilterCompactPrivate {
    static name: string
}
abstract class RatingsFilterClass {
    /* Fields of Unity-6.0.Unity.RatingsFilterClass */
    readonly parent_class: FilterClass
    static name: string
}
class RatingsFilterPrivate {
    static name: string
}
abstract class MultiRangeFilterClass {
    /* Fields of Unity-6.0.Unity.MultiRangeFilterClass */
    readonly parent_class: OptionsFilterClass
    static name: string
}
class MultiRangeFilterPrivate {
    static name: string
}
abstract class PreferencesManagerClass {
    /* Fields of Unity-6.0.Unity.PreferencesManagerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class PreferencesManagerPrivate {
    static name: string
}
abstract class LensSearchClass {
    /* Fields of Unity-6.0.Unity.LensSearchClass */
    readonly parent_class: GObject.InitiallyUnownedClass
    static name: string
}
class LensSearchPrivate {
    static name: string
}
abstract class LensClass {
    /* Fields of Unity-6.0.Unity.LensClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class LensPrivate {
    static name: string
}
abstract class PreviewClass {
    /* Fields of Unity-6.0.Unity.PreviewClass */
    readonly parent_class: GObject.ObjectClass
    readonly create_raw: (self: Preview) => GObject.Object
    readonly update_property: (self: Preview, values: GLib.HashTable, _callback_?: Gio.AsyncReadyCallback | null) => void
    readonly update_property_finish: (self: Preview, _res_: Gio.AsyncResult) => GLib.HashTable
    readonly dummy1: (self: Preview) => void
    readonly dummy2: (self: Preview) => void
    readonly dummy3: (self: Preview) => void
    readonly dummy4: (self: Preview) => void
    static name: string
}
class PreviewPrivate {
    static name: string
}
abstract class PreviewActionClass {
    /* Fields of Unity-6.0.Unity.PreviewActionClass */
    readonly parent_class: GObject.ObjectClass
    readonly dummy1: (self: PreviewAction) => void
    readonly dummy2: (self: PreviewAction) => void
    readonly dummy3: (self: PreviewAction) => void
    readonly dummy4: (self: PreviewAction) => void
    static name: string
}
class PreviewActionPrivate {
    static name: string
}
abstract class InfoHintClass {
    /* Fields of Unity-6.0.Unity.InfoHintClass */
    readonly parent_class: GObject.InitiallyUnownedClass
    static name: string
}
class InfoHintPrivate {
    static name: string
}
abstract class GenericPreviewClass {
    /* Fields of Unity-6.0.Unity.GenericPreviewClass */
    readonly parent_class: PreviewClass
    static name: string
}
class GenericPreviewPrivate {
    static name: string
}
abstract class ApplicationPreviewClass {
    /* Fields of Unity-6.0.Unity.ApplicationPreviewClass */
    readonly parent_class: PreviewClass
    static name: string
}
class ApplicationPreviewPrivate {
    static name: string
}
abstract class MusicPreviewClass {
    /* Fields of Unity-6.0.Unity.MusicPreviewClass */
    readonly parent_class: PreviewClass
    static name: string
}
class MusicPreviewPrivate {
    static name: string
}
abstract class MoviePreviewClass {
    /* Fields of Unity-6.0.Unity.MoviePreviewClass */
    readonly parent_class: PreviewClass
    static name: string
}
class MoviePreviewPrivate {
    static name: string
}
abstract class SocialPreviewClass {
    /* Fields of Unity-6.0.Unity.SocialPreviewClass */
    readonly parent_class: PreviewClass
    static name: string
}
class SocialPreviewPrivate {
    static name: string
}
abstract class CommentClass {
    /* Fields of Unity-6.0.Unity.CommentClass */
    readonly parent_class: GObject.InitiallyUnownedClass
    static name: string
}
class CommentPrivate {
    static name: string
}
abstract class AsyncPreviewClass {
    /* Fields of Unity-6.0.Unity.AsyncPreviewClass */
    readonly parent_class: PreviewClass
    static name: string
}
class AsyncPreviewPrivate {
    static name: string
}
abstract class ScopeClass {
    /* Fields of Unity-6.0.Unity.ScopeClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ScopePrivate {
    static name: string
}
abstract class TrackMetadataClass {
    /* Fields of Unity-6.0.Unity.TrackMetadataClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class TrackMetadataPrivate {
    static name: string
}
abstract class PlaylistClass {
    /* Fields of Unity-6.0.Unity.PlaylistClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class PlaylistPrivate {
    static name: string
}
abstract class MusicPlayerClass {
    /* Fields of Unity-6.0.Unity.MusicPlayerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MusicPlayerPrivate {
    static name: string
}
abstract class MergeStrategyIface {
    /* Fields of Unity-6.0.Unity.MergeStrategyIface */
    readonly parent_iface: GObject.TypeInterface
    readonly merge_result: (self: MergeStrategy, target: Dee.Model, row: GLib.Variant[]) => Dee.ModelIter | null
    static name: string
}
class PlaylistDetails {
    /* Fields of Unity-6.0.Unity.PlaylistDetails */
    readonly id: string
    readonly name: string
    readonly icon_name: string
    static name: string
}
class ActivePlaylistContainer {
    /* Fields of Unity-6.0.Unity.ActivePlaylistContainer */
    readonly valid: boolean
    readonly details: PlaylistDetails
    static name: string
}
}
export default Unity;