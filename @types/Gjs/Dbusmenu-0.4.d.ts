/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Dbusmenu-0.4
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Dbusmenu {

enum Status {
    NORMAL,
    NOTICE,
}
enum TextDirection {
    NONE,
    LTR,
    RTL,
}
const CLIENT_PROP_DBUS_NAME: string
const CLIENT_PROP_DBUS_OBJECT: string
const CLIENT_PROP_GROUP_EVENTS: string
const CLIENT_PROP_STATUS: string
const CLIENT_PROP_TEXT_DIRECTION: string
const CLIENT_SIGNAL_EVENT_RESULT: string
const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string
const CLIENT_SIGNAL_ITEM_ACTIVATE: string
const CLIENT_SIGNAL_LAYOUT_UPDATED: string
const CLIENT_SIGNAL_NEW_MENUITEM: string
const CLIENT_SIGNAL_ROOT_CHANGED: string
const CLIENT_TYPES_DEFAULT: string
const CLIENT_TYPES_IMAGE: string
const CLIENT_TYPES_SEPARATOR: string
const MENUITEM_CHILD_DISPLAY_SUBMENU: string
const MENUITEM_DISPOSITION_ALERT: string
const MENUITEM_DISPOSITION_INFORMATIVE: string
const MENUITEM_DISPOSITION_NORMAL: string
const MENUITEM_DISPOSITION_WARNING: string
const MENUITEM_EVENT_ACTIVATED: string
const MENUITEM_EVENT_CLOSED: string
const MENUITEM_EVENT_OPENED: string
const MENUITEM_ICON_NAME_BLANK: string
const MENUITEM_PROP_ACCESSIBLE_DESC: string
const MENUITEM_PROP_CHILD_DISPLAY: string
const MENUITEM_PROP_DISPOSITION: string
const MENUITEM_PROP_ENABLED: string
const MENUITEM_PROP_ICON_DATA: string
const MENUITEM_PROP_ICON_NAME: string
const MENUITEM_PROP_LABEL: string
const MENUITEM_PROP_SHORTCUT: string
const MENUITEM_PROP_TOGGLE_STATE: string
const MENUITEM_PROP_TOGGLE_TYPE: string
const MENUITEM_PROP_TYPE: string
const MENUITEM_PROP_VISIBLE: string
const MENUITEM_SHORTCUT_ALT: string
const MENUITEM_SHORTCUT_CONTROL: string
const MENUITEM_SHORTCUT_SHIFT: string
const MENUITEM_SHORTCUT_SUPER: string
const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string
const MENUITEM_SIGNAL_CHILD_ADDED: string
const MENUITEM_SIGNAL_CHILD_MOVED: string
const MENUITEM_SIGNAL_CHILD_REMOVED: string
const MENUITEM_SIGNAL_EVENT: string
const MENUITEM_SIGNAL_ITEM_ACTIVATED: string
const MENUITEM_SIGNAL_PROPERTY_CHANGED: string
const MENUITEM_SIGNAL_REALIZED: string
const MENUITEM_SIGNAL_SHOW_TO_USER: string
const MENUITEM_TOGGLE_CHECK: string
const MENUITEM_TOGGLE_RADIO: string
const MENUITEM_TOGGLE_STATE_CHECKED: number
const MENUITEM_TOGGLE_STATE_UNCHECKED: number
const MENUITEM_TOGGLE_STATE_UNKNOWN: number
const SERVER_PROP_DBUS_OBJECT: string
const SERVER_PROP_ROOT_NODE: string
const SERVER_PROP_STATUS: string
const SERVER_PROP_TEXT_DIRECTION: string
const SERVER_PROP_VERSION: string
const SERVER_SIGNAL_ID_PROP_UPDATE: string
const SERVER_SIGNAL_ID_UPDATE: string
const SERVER_SIGNAL_ITEM_ACTIVATION: string
const SERVER_SIGNAL_LAYOUT_UPDATED: string
interface ClientTypeHandler {
    (newitem: Menuitem, parent: Menuitem, client: Client): boolean
}
interface menuitem_about_to_show_cb {
    (mi: Menuitem): void
}
interface menuitem_buildvariant_slot_t {
    (mi: Menuitem, properties?: string | null): GLib.Variant
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dbusmenu-0.4.Dbusmenu.Client */
    dbus_name?: string
    dbus_object?: string
    group_events?: boolean
}
class Client {
    /* Properties of Dbusmenu-0.4.Dbusmenu.Client */
    group_events: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Client */
    add_type_handler(type: string, newfunc: ClientTypeHandler): boolean
    add_type_handler_full(type: string, newfunc: ClientTypeHandler): boolean
    get_icon_paths(): string[]
    get_root(): Menuitem
    get_status(): Status
    get_text_direction(): TextDirection
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
    /* Signals of Dbusmenu-0.4.Dbusmenu.Client */
    connect(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    connect_after(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    emit(sigName: "event-result", object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null): void
    connect(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    connect_after(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    emit(sigName: "icon-theme-dirs-changed", arg1?: object | null): void
    connect(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "item-activate", arg1: GObject.Object, arg2: number): void
    connect(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    connect_after(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    emit(sigName: "layout-updated"): void
    connect(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "new-menuitem", arg1: GObject.Object): void
    connect(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "root-changed", arg1: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, object: string): Client
    static $gtype: GObject.Type
}
interface Menuitem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dbusmenu-0.4.Dbusmenu.Menuitem */
    id?: number
}
class Menuitem {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    child_add_position(child: Menuitem, position: number): boolean
    child_append(child: Menuitem): boolean
    child_delete(child: Menuitem): boolean
    child_find(id: number): Menuitem
    child_prepend(child: Menuitem): boolean
    child_reorder(child: Menuitem, position: number): boolean
    find_id(id: number): Menuitem
    foreach(func?: object | null, data?: object | null): void
    get_children(): Menuitem[]
    get_id(): number
    get_parent(): Menuitem
    get_position(parent: Menuitem): number
    get_position_realized(parent: Menuitem): number
    get_root(): boolean
    handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    properties_copy(): GLib.HashTable
    properties_list(): string[]
    property_exist(property: string): boolean
    property_get(property: string): string
    property_get_bool(property: string): boolean
    property_get_byte_array(property: string): Uint8Array
    property_get_int(property: string): number
    property_get_variant(property: string): GLib.Variant
    property_remove(property: string): void
    property_set(property: string, value: string): boolean
    property_set_bool(property: string, value: boolean): boolean
    property_set_byte_array(property: string, value: number, nelements: number): boolean
    property_set_int(property: string, value: number): boolean
    property_set_variant(property: string, value: GLib.Variant): boolean
    send_about_to_show(cb?: object | null, cb_data?: object | null): void
    set_parent(parent: Menuitem): boolean
    set_root(root: boolean): void
    show_to_user(timestamp: number): void
    take_children(): Menuitem[]
    unparent(): boolean
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
    /* Virtual methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    vfunc_child_added(position: number): void
    vfunc_child_moved(newpos: number, oldpos: number): void
    vfunc_child_removed(): void
    vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    vfunc_show_to_user(timestamp: number, cb_data?: object | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Dbusmenu-0.4.Dbusmenu.Menuitem */
    connect(sigName: "about-to-show", callback: (($obj: Menuitem) => boolean)): number
    connect_after(sigName: "about-to-show", callback: (($obj: Menuitem) => boolean)): number
    emit(sigName: "about-to-show"): void
    connect(sigName: "child-added", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number): void
    connect(sigName: "child-moved", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number): void
    connect(sigName: "child-removed", callback: (($obj: Menuitem, arg1: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Menuitem, arg1: GObject.Object) => void)): number
    emit(sigName: "child-removed", arg1: GObject.Object): void
    connect(sigName: "event", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number): void
    connect(sigName: "item-activated", callback: (($obj: Menuitem, arg1: number) => void)): number
    connect_after(sigName: "item-activated", callback: (($obj: Menuitem, arg1: number) => void)): number
    emit(sigName: "item-activated", arg1: number): void
    connect(sigName: "property-changed", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant) => void)): number
    connect_after(sigName: "property-changed", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant) => void)): number
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant): void
    connect(sigName: "realized", callback: (($obj: Menuitem) => void)): number
    connect_after(sigName: "realized", callback: (($obj: Menuitem) => void)): number
    emit(sigName: "realized"): void
    connect(sigName: "show-to-user", callback: (($obj: Menuitem, arg1: number) => void)): number
    connect_after(sigName: "show-to-user", callback: (($obj: Menuitem, arg1: number) => void)): number
    emit(sigName: "show-to-user", arg1: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Menuitem_ConstructProps)
    _init (config?: Menuitem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menuitem
    static new_with_id(id: number): Menuitem
    static $gtype: GObject.Type
}
interface MenuitemProxy_ConstructProps extends Menuitem_ConstructProps {
    /* Constructor properties of Dbusmenu-0.4.Dbusmenu.MenuitemProxy */
    menu_item?: Menuitem
}
class MenuitemProxy {
    /* Fields of Dbusmenu-0.4.Dbusmenu.Menuitem */
    readonly parent: GObject.Object
    readonly priv: MenuitemPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.MenuitemProxy */
    get_wrapped(): Menuitem
    /* Methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    child_add_position(child: Menuitem, position: number): boolean
    child_append(child: Menuitem): boolean
    child_delete(child: Menuitem): boolean
    child_find(id: number): Menuitem
    child_prepend(child: Menuitem): boolean
    child_reorder(child: Menuitem, position: number): boolean
    find_id(id: number): Menuitem
    foreach(func?: object | null, data?: object | null): void
    get_children(): Menuitem[]
    get_id(): number
    get_parent(): Menuitem
    get_position(parent: Menuitem): number
    get_position_realized(parent: Menuitem): number
    get_root(): boolean
    handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    properties_copy(): GLib.HashTable
    properties_list(): string[]
    property_exist(property: string): boolean
    property_get(property: string): string
    property_get_bool(property: string): boolean
    property_get_byte_array(property: string): Uint8Array
    property_get_int(property: string): number
    property_get_variant(property: string): GLib.Variant
    property_remove(property: string): void
    property_set(property: string, value: string): boolean
    property_set_bool(property: string, value: boolean): boolean
    property_set_byte_array(property: string, value: number, nelements: number): boolean
    property_set_int(property: string, value: number): boolean
    property_set_variant(property: string, value: GLib.Variant): boolean
    send_about_to_show(cb?: object | null, cb_data?: object | null): void
    set_parent(parent: Menuitem): boolean
    set_root(root: boolean): void
    show_to_user(timestamp: number): void
    take_children(): Menuitem[]
    unparent(): boolean
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
    /* Virtual methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    vfunc_child_added(position: number): void
    vfunc_child_moved(newpos: number, oldpos: number): void
    vfunc_child_removed(): void
    vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    vfunc_show_to_user(timestamp: number, cb_data?: object | null): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Dbusmenu-0.4.Dbusmenu.Menuitem */
    connect(sigName: "about-to-show", callback: (($obj: MenuitemProxy) => boolean)): number
    connect_after(sigName: "about-to-show", callback: (($obj: MenuitemProxy) => boolean)): number
    emit(sigName: "about-to-show"): void
    connect(sigName: "child-added", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number): void
    connect(sigName: "child-moved", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number): void
    connect(sigName: "child-removed", callback: (($obj: MenuitemProxy, arg1: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: MenuitemProxy, arg1: GObject.Object) => void)): number
    emit(sigName: "child-removed", arg1: GObject.Object): void
    connect(sigName: "event", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number): void
    connect(sigName: "item-activated", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    connect_after(sigName: "item-activated", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    emit(sigName: "item-activated", arg1: number): void
    connect(sigName: "property-changed", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant) => void)): number
    connect_after(sigName: "property-changed", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant) => void)): number
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant): void
    connect(sigName: "realized", callback: (($obj: MenuitemProxy) => void)): number
    connect_after(sigName: "realized", callback: (($obj: MenuitemProxy) => void)): number
    emit(sigName: "realized"): void
    connect(sigName: "show-to-user", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    connect_after(sigName: "show-to-user", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    emit(sigName: "show-to-user", arg1: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuitemProxy_ConstructProps)
    _init (config?: MenuitemProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mi: Menuitem): MenuitemProxy
    /* Function overloads */
    static new(): MenuitemProxy
    static $gtype: GObject.Type
}
interface Server_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dbusmenu-0.4.Dbusmenu.Server */
    dbus_object?: string
    root_node?: Menuitem
}
class Server {
    /* Properties of Dbusmenu-0.4.Dbusmenu.Server */
    root_node: Menuitem
    readonly version: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Server */
    get_icon_paths(): string[]
    get_status(): Status
    get_text_direction(): TextDirection
    set_icon_paths(icon_paths: string[]): void
    set_root(root: Menuitem): void
    set_status(status: Status): void
    set_text_direction(dir: TextDirection): void
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
    /* Signals of Dbusmenu-0.4.Dbusmenu.Server */
    connect(sigName: "item-activation-requested", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "item-activation-requested", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    emit(sigName: "item-activation-requested", arg1: number, arg2: number): void
    connect(sigName: "item-property-updated", callback: (($obj: Server, object: number, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "item-property-updated", callback: (($obj: Server, object: number, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "item-property-updated", object: number, p0: string, p1: GLib.Variant): void
    connect(sigName: "item-updated", callback: (($obj: Server, object: number) => void)): number
    connect_after(sigName: "item-updated", callback: (($obj: Server, object: number) => void)): number
    emit(sigName: "item-updated", object: number): void
    connect(sigName: "layout-updated", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "layout-updated", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    emit(sigName: "layout-updated", arg1: number, arg2: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::root-node", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-node", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: string): Server
    static $gtype: GObject.Type
}
abstract class ClientClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.ClientClass */
    readonly parent_class: GObject.ObjectClass
    readonly layout_updated: () => void
    readonly root_changed: (newroot: Menuitem) => void
    readonly new_menuitem: (newitem: Menuitem) => void
    readonly item_activate: (item: Menuitem, timestamp: number) => void
    readonly event_result: (item: Menuitem, event: string, data: GLib.Variant, timestamp: number, error: GLib.Error) => void
    readonly icon_theme_dirs: (item: Menuitem, theme_dirs: object, error: GLib.Error) => void
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    readonly reserved5: () => void
    static name: string
}
class ClientPrivate {
    static name: string
}
abstract class MenuitemClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.MenuitemClass */
    readonly parent_class: GObject.ObjectClass
    readonly property_changed: (property: string, value: GLib.Variant) => void
    readonly item_activated: (timestamp: number) => void
    readonly child_added: (child: Menuitem, position: number) => void
    readonly child_removed: (child: Menuitem) => void
    readonly child_moved: (child: Menuitem, newpos: number, oldpos: number) => void
    readonly realized: () => void
    readonly handle_event: (mi: Menuitem, name: string, variant: GLib.Variant, timestamp: number) => void
    readonly show_to_user: (mi: Menuitem, timestamp: number, cb_data?: object | null) => void
    readonly about_to_show: () => boolean
    readonly event: (name: string, value: GLib.Variant, timestamp: number) => void
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    readonly reserved5: () => void
    static name: string
}
class MenuitemPrivate {
    static name: string
}
abstract class MenuitemProxyClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.MenuitemProxyClass */
    readonly parent_class: MenuitemClass
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    static name: string
}
class MenuitemProxyPrivate {
    static name: string
}
abstract class ServerClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.ServerClass */
    readonly parent_class: GObject.ObjectClass
    readonly id_prop_update: (id: number, property: string, value: string) => void
    readonly id_update: (id: number) => void
    readonly layout_updated: (revision: number) => void
    readonly item_activation: (id: number, timestamp: number) => void
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    readonly reserved5: () => void
    readonly reserved6: () => void
    static name: string
}
class ServerPrivate {
    static name: string
}
}
export default Dbusmenu;