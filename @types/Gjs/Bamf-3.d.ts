/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Bamf-3
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Bamf {

enum ClickBehavior {
    NONE,
    OPEN,
    FOCUS,
    FOCUS_ALL,
    MINIMIZE,
    RESTORE,
    RESTORE_ALL,
    PICKER,
}
enum WindowMaximizationType {
    FLOATING,
    HORIZONTAL_MAXIMIZED,
    VERTICAL_MAXIMIZED,
    MAXIMIZED,
}
enum WindowType {
    NORMAL,
    DESKTOP,
    DOCK,
    DIALOG,
    TOOLBAR,
    MENU,
    UTILITY,
    SPLASHSCREEN,
    UNKNOWN,
}
const APPLICATION_SIGNAL_DESKTOP_FILE_UPDATED: string
const APPLICATION_SIGNAL_WINDOW_ADDED: string
const APPLICATION_SIGNAL_WINDOW_REMOVED: string
const MATCHER_SIGNAL_ACTIVE_APPLICATION_CHANGED: string
const MATCHER_SIGNAL_ACTIVE_WINDOW_CHANGED: string
const MATCHER_SIGNAL_STACKING_ORDER_CHANGED: string
const MATCHER_SIGNAL_VIEW_CLOSED: string
const MATCHER_SIGNAL_VIEW_OPENED: string
const VIEW_SIGNAL_ACTIVE_CHANGED: string
const VIEW_SIGNAL_CHILD_ADDED: string
const VIEW_SIGNAL_CHILD_MOVED: string
const VIEW_SIGNAL_CHILD_REMOVED: string
const VIEW_SIGNAL_CLOSED: string
const VIEW_SIGNAL_ICON_CHANGED: string
const VIEW_SIGNAL_NAME_CHANGED: string
const VIEW_SIGNAL_RUNNING_CHANGED: string
const VIEW_SIGNAL_STARTING_CHANGED: string
const VIEW_SIGNAL_URGENT_CHANGED: string
const VIEW_SIGNAL_USER_VISIBLE_CHANGED: string
const WINDOW_SIGNAL_MAXIMIZED_CHANGED: string
const WINDOW_SIGNAL_MONITOR_CHANGED: string
interface TabPreviewReadyCallback {
    (self: Tab, preview_data: string): void
}
interface Application_ConstructProps extends View_ConstructProps {
}
class Application {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    /* Fields of Bamf-3.Bamf.View */
    readonly parent: GObject.InitiallyUnowned
    readonly priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Application */
    get_application_menu(): [ /* returnType */ boolean, /* name */ string, /* object_path */ string ]
    get_application_type(): string
    get_desktop_file(): string
    get_focusable_child(): View
    get_show_menu_stubs(): boolean
    get_supported_mime_types(): string[]
    get_window_for_xid(xid: number): Window
    get_windows(): Window[]
    get_xids(): number[]
    /* Methods of Bamf-3.Bamf.View */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    get_icon(): string
    get_name(): string
    get_view_type(): string
    has_child(child: View): boolean
    is_active(): boolean
    is_closed(): boolean
    is_running(): boolean
    is_starting(): boolean
    is_sticky(): boolean
    is_urgent(): boolean
    is_user_visible(): boolean
    peek_children(): View[]
    set_sticky(value: boolean): void
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
    /* Virtual methods of Bamf-3.Bamf.View */
    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    vfunc_get_children(): View[]
    vfunc_get_icon(): string
    vfunc_get_name(): string
    vfunc_icon_changed(icon: string): void
    vfunc_is_active(): boolean
    vfunc_is_running(): boolean
    vfunc_is_starting(): boolean
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string, new_name: string): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    vfunc_view_type(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Bamf-3.Bamf.Application */
    connect(sigName: "desktop-file-updated", callback: (($obj: Application, object: string) => void)): number
    connect_after(sigName: "desktop-file-updated", callback: (($obj: Application, object: string) => void)): number
    emit(sigName: "desktop-file-updated", object: string): void
    connect(sigName: "window-added", callback: (($obj: Application, object: Window) => void)): number
    connect_after(sigName: "window-added", callback: (($obj: Application, object: Window) => void)): number
    emit(sigName: "window-added", object: Window): void
    connect(sigName: "window-removed", callback: (($obj: Application, object: Window) => void)): number
    connect_after(sigName: "window-removed", callback: (($obj: Application, object: Window) => void)): number
    emit(sigName: "window-removed", object: Window): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Application, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Application, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Application) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Application) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Application, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Application, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Application, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Application, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Application, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Application, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::starting", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-visible", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
interface Control_ConstructProps extends GObject.Object_ConstructProps {
}
class Control {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Control */
    create_local_desktop_file(application: Application): void
    insert_desktop_file(desktop_file: string): void
    register_application_for_pid(desktop_file: string, pid: number): void
    set_approver_behavior(behavior: number): void
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
    connect(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Control, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Control_ConstructProps)
    _init (config?: Control_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Control
    static $gtype: GObject.Type
}
interface Matcher_ConstructProps extends GObject.Object_ConstructProps {
}
class Matcher {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Matcher */
    application_is_running(desktop_file: string): boolean
    get_active_application(): Application
    get_active_window(): Window
    get_application_for_desktop_file(desktop_file_path: string, create_if_not_found: boolean): Application
    get_application_for_window(window: Window): Application
    get_application_for_xid(xid: number): Application
    get_applications(): Application[]
    get_running_applications(): Application[]
    get_tabs(): Tab[]
    get_window_for_xid(xid: number): Window
    get_window_stack_for_monitor(monitor: number): Window[]
    get_windows(): Window[]
    get_xids_for_application(desktop_file: string): number[]
    register_favorites(favorites: string[]): void
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
    /* Signals of Bamf-3.Bamf.Matcher */
    connect(sigName: "active-application-changed", callback: (($obj: Matcher, object: Application, p0: Application) => void)): number
    connect_after(sigName: "active-application-changed", callback: (($obj: Matcher, object: Application, p0: Application) => void)): number
    emit(sigName: "active-application-changed", object: Application, p0: Application): void
    connect(sigName: "active-window-changed", callback: (($obj: Matcher, object: Window, p0: Window) => void)): number
    connect_after(sigName: "active-window-changed", callback: (($obj: Matcher, object: Window, p0: Window) => void)): number
    emit(sigName: "active-window-changed", object: Window, p0: Window): void
    connect(sigName: "stacking-order-changed", callback: (($obj: Matcher) => void)): number
    connect_after(sigName: "stacking-order-changed", callback: (($obj: Matcher) => void)): number
    emit(sigName: "stacking-order-changed"): void
    connect(sigName: "view-closed", callback: (($obj: Matcher, object: View) => void)): number
    connect_after(sigName: "view-closed", callback: (($obj: Matcher, object: View) => void)): number
    emit(sigName: "view-closed", object: View): void
    connect(sigName: "view-opened", callback: (($obj: Matcher, object: View) => void)): number
    connect_after(sigName: "view-opened", callback: (($obj: Matcher, object: View) => void)): number
    emit(sigName: "view-opened", object: View): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Matcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Matcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Matcher_ConstructProps)
    _init (config?: Matcher_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default(): Matcher
    static $gtype: GObject.Type
}
interface Tab_ConstructProps extends View_ConstructProps {
}
class Tab {
    /* Properties of Bamf-3.Bamf.Tab */
    readonly desktop_id: string
    readonly is_foreground_tab: boolean
    readonly location: string
    readonly xid: number
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    /* Fields of Bamf-3.Bamf.View */
    readonly parent: GObject.InitiallyUnowned
    readonly priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Tab */
    close(): boolean
    get_desktop_name(): string
    get_is_foreground_tab(): boolean
    get_location(): string
    get_xid(): number
    raise(): boolean
    request_preview(callback: TabPreviewReadyCallback): void
    /* Methods of Bamf-3.Bamf.View */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    get_icon(): string
    get_name(): string
    get_view_type(): string
    has_child(child: View): boolean
    is_active(): boolean
    is_closed(): boolean
    is_running(): boolean
    is_starting(): boolean
    is_sticky(): boolean
    is_urgent(): boolean
    is_user_visible(): boolean
    peek_children(): View[]
    set_sticky(value: boolean): void
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
    /* Virtual methods of Bamf-3.Bamf.Tab */
    vfunc_get_desktop_name(): string
    vfunc_get_is_foreground_tab(): boolean
    vfunc_get_location(): string
    vfunc_get_xid(): number
    /* Virtual methods of Bamf-3.Bamf.View */
    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    vfunc_get_children(): View[]
    vfunc_get_icon(): string
    vfunc_get_name(): string
    vfunc_icon_changed(icon: string): void
    vfunc_is_active(): boolean
    vfunc_is_running(): boolean
    vfunc_is_starting(): boolean
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string, new_name: string): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    vfunc_view_type(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Tab, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Tab, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Tab) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Tab) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Tab, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Tab, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Tab, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Tab, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Tab, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Tab, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::desktop-id", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-id", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-foreground-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-foreground-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::location", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xid", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xid", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::active", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::starting", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tab_ConstructProps)
    _init (config?: Tab_ConstructProps): void
    static $gtype: GObject.Type
}
interface View_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class View {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.View */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    get_icon(): string
    get_name(): string
    get_view_type(): string
    has_child(child: View): boolean
    is_active(): boolean
    is_closed(): boolean
    is_running(): boolean
    is_starting(): boolean
    is_sticky(): boolean
    is_urgent(): boolean
    is_user_visible(): boolean
    peek_children(): View[]
    set_sticky(value: boolean): void
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
    /* Virtual methods of Bamf-3.Bamf.View */
    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    vfunc_get_children(): View[]
    vfunc_get_icon(): string
    vfunc_get_name(): string
    vfunc_icon_changed(icon: string): void
    vfunc_is_active(): boolean
    vfunc_is_running(): boolean
    vfunc_is_starting(): boolean
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string, new_name: string): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    vfunc_view_type(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: View, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: View, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: View) => void)): number
    connect_after(sigName: "closed", callback: (($obj: View) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: View, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: View, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: View, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: View, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: View, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: View, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::starting", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    static $gtype: GObject.Type
}
interface Window_ConstructProps extends View_ConstructProps {
}
class Window {
    /* Properties of Bamf-3.Bamf.View */
    readonly active: boolean
    readonly path: string
    readonly running: boolean
    readonly starting: boolean
    readonly urgent: boolean
    readonly user_visible: boolean
    /* Fields of Bamf-3.Bamf.View */
    readonly parent: GObject.InitiallyUnowned
    readonly priv: ViewPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Bamf-3.Bamf.Window */
    get_monitor(): number
    get_pid(): number
    get_transient(): Window
    get_utf8_prop(prop: string): string
    get_window_type(): WindowType
    get_xid(): number
    last_active(): number
    maximized(): WindowMaximizationType
    /* Methods of Bamf-3.Bamf.View */
    get_children(): View[]
    get_click_suggestion(): ClickBehavior
    get_icon(): string
    get_name(): string
    get_view_type(): string
    has_child(child: View): boolean
    is_active(): boolean
    is_closed(): boolean
    is_running(): boolean
    is_starting(): boolean
    is_sticky(): boolean
    is_urgent(): boolean
    is_user_visible(): boolean
    peek_children(): View[]
    set_sticky(value: boolean): void
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
    /* Virtual methods of Bamf-3.Bamf.Window */
    vfunc_get_monitor(): number
    vfunc_get_pid(): number
    vfunc_get_transient(): Window
    vfunc_get_utf8_prop(prop: string): string
    vfunc_get_window_type(): WindowType
    vfunc_get_xid(): number
    vfunc_last_active(): number
    vfunc_maximized(): WindowMaximizationType
    vfunc_maximized_changed(old_value: number, new_value: number): void
    vfunc_monitor_changed(old_value: number, new_value: number): void
    /* Virtual methods of Bamf-3.Bamf.View */
    vfunc_active_changed(active: boolean): void
    vfunc_child_added(child: View): void
    vfunc_child_moved(child: View): void
    vfunc_child_removed(child: View): void
    vfunc_click_behavior(): ClickBehavior
    vfunc_closed(): void
    vfunc_get_children(): View[]
    vfunc_get_icon(): string
    vfunc_get_name(): string
    vfunc_icon_changed(icon: string): void
    vfunc_is_active(): boolean
    vfunc_is_running(): boolean
    vfunc_is_starting(): boolean
    vfunc_is_urgent(): boolean
    vfunc_is_user_visible(): boolean
    vfunc_name_changed(old_name: string, new_name: string): void
    vfunc_running_changed(running: boolean): void
    vfunc_set_path(path: string): void
    vfunc_set_sticky(value: boolean): void
    vfunc_starting_changed(starting: boolean): void
    vfunc_urgent_changed(urgent: boolean): void
    vfunc_user_visible_changed(user_visible: boolean): void
    vfunc_view_type(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Bamf-3.Bamf.Window */
    connect(sigName: "maximized-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    connect_after(sigName: "maximized-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    emit(sigName: "maximized-changed", object: number, p0: number): void
    connect(sigName: "monitor-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    connect_after(sigName: "monitor-changed", callback: (($obj: Window, object: number, p0: number) => void)): number
    emit(sigName: "monitor-changed", object: number, p0: number): void
    /* Signals of Bamf-3.Bamf.View */
    connect(sigName: "active-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "active-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "active-changed", object: boolean): void
    connect(sigName: "child-added", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-added", object: View): void
    connect(sigName: "child-moved", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-moved", object: View): void
    connect(sigName: "child-removed", callback: (($obj: Window, object: View) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Window, object: View) => void)): number
    emit(sigName: "child-removed", object: View): void
    connect(sigName: "closed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Window) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "icon-changed", callback: (($obj: Window, object: string) => void)): number
    connect_after(sigName: "icon-changed", callback: (($obj: Window, object: string) => void)): number
    emit(sigName: "icon-changed", object: string): void
    connect(sigName: "name-changed", callback: (($obj: Window, object: string, p0: string) => void)): number
    connect_after(sigName: "name-changed", callback: (($obj: Window, object: string, p0: string) => void)): number
    emit(sigName: "name-changed", object: string, p0: string): void
    connect(sigName: "running-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "running-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "running-changed", object: boolean): void
    connect(sigName: "starting-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "starting-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "starting-changed", object: boolean): void
    connect(sigName: "urgent-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "urgent-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "urgent-changed", object: boolean): void
    connect(sigName: "user-visible-changed", callback: (($obj: Window, object: boolean) => void)): number
    connect_after(sigName: "user-visible-changed", callback: (($obj: Window, object: boolean) => void)): number
    emit(sigName: "user-visible-changed", object: boolean): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::running", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::running", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::starting", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::starting", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ApplicationClass {
    /* Fields of Bamf-3.Bamf.ApplicationClass */
    readonly parent_class: ViewClass
    static name: string
}
class ApplicationPrivate {
    static name: string
}
abstract class ControlClass {
    /* Fields of Bamf-3.Bamf.ControlClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ControlPrivate {
    static name: string
}
abstract class MatcherClass {
    /* Fields of Bamf-3.Bamf.MatcherClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class MatcherPrivate {
    static name: string
}
abstract class TabClass {
    /* Fields of Bamf-3.Bamf.TabClass */
    readonly parent_class: ViewClass
    readonly get_desktop_name: (self: Tab) => string
    readonly get_location: (self: Tab) => string
    readonly get_xid: (self: Tab) => number
    readonly get_is_foreground_tab: (self: Tab) => boolean
    static name: string
}
class TabPrivate {
    static name: string
}
abstract class ViewClass {
    /* Fields of Bamf-3.Bamf.ViewClass */
    readonly parent_class: GObject.InitiallyUnownedClass
    readonly get_children: (view: View) => View[]
    readonly is_active: (view: View) => boolean
    readonly is_running: (view: View) => boolean
    readonly is_urgent: (view: View) => boolean
    readonly is_user_visible: (view: View) => boolean
    readonly get_name: (view: View) => string
    readonly get_icon: (view: View) => string
    readonly view_type: (view: View) => string
    readonly set_path: (view: View, path: string) => void
    readonly set_sticky: (view: View, value: boolean) => void
    readonly click_behavior: (view: View) => ClickBehavior
    readonly active_changed: (view: View, active: boolean) => void
    readonly closed: (view: View) => void
    readonly child_added: (view: View, child: View) => void
    readonly child_removed: (view: View, child: View) => void
    readonly running_changed: (view: View, running: boolean) => void
    readonly urgent_changed: (view: View, urgent: boolean) => void
    readonly user_visible_changed: (view: View, user_visible: boolean) => void
    readonly name_changed: (view: View, old_name: string, new_name: string) => void
    readonly icon_changed: (view: View, icon: string) => void
    readonly child_moved: (view: View, child: View) => void
    readonly is_starting: (view: View) => boolean
    readonly starting_changed: (view: View, starting: boolean) => void
    static name: string
}
class ViewPrivate {
    static name: string
}
abstract class WindowClass {
    /* Fields of Bamf-3.Bamf.WindowClass */
    readonly parent_class: ViewClass
    readonly get_transient: (self: Window) => Window
    readonly get_window_type: (self: Window) => WindowType
    readonly get_xid: (self: Window) => number
    readonly get_pid: (self: Window) => number
    readonly get_monitor: (self: Window) => number
    readonly get_utf8_prop: (self: Window, prop: string) => string
    readonly maximized: (self: Window) => WindowMaximizationType
    readonly last_active: (self: Window) => number
    readonly monitor_changed: (window: Window, old_value: number, new_value: number) => void
    readonly maximized_changed: (window: Window, old_value: number, new_value: number) => void
    static name: string
}
class WindowPrivate {
    static name: string
}
}
export default Bamf;