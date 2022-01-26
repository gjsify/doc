/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Amtk-5
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Amtk {

enum FactoryFlags {
    FLAGS_NONE,
    IGNORE_GACTION,
    IGNORE_ICON,
    IGNORE_LABEL,
    IGNORE_TOOLTIP,
    IGNORE_ACCELS,
    IGNORE_ACCELS_FOR_DOC,
    IGNORE_ACCELS_FOR_APP,
}
function action_map_add_action_entries_check_dups(action_map: Gio.ActionMap, entries: Gio.ActionEntry[], user_data?: object | null): void
function finalize(): void
function gmenu_append_item(menu: Gio.Menu, item: Gio.MenuItem): void
function gmenu_append_section(menu: Gio.Menu, label: string | null, section: Gio.Menu): void
function init(): void
function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null
function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string): void
function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description?: string | null): void
function shortcuts_group_new(title: string): Gtk.Container
function shortcuts_section_new(title: string): Gtk.Container
function shortcuts_window_new(parent: Gtk.Window): Gtk.ShortcutsWindow
function utils_bind_g_action_to_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_without_prefix: string, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string): void
function utils_create_gtk_action(g_action_map: Gio.ActionMap, detailed_g_action_name_with_prefix: string, gtk_action_group: Gtk.ActionGroup, gtk_action_name: string): void
function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string
function utils_remove_mnemonic(str: string): string
interface ActionInfoCentralStore_ConstructProps extends GObject.Object_ConstructProps {
}
class ActionInfoCentralStore {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.ActionInfoCentralStore */
    lookup(action_name: string): ActionInfo
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
    connect(sigName: "notify", callback: (($obj: ActionInfoCentralStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActionInfoCentralStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActionInfoCentralStore_ConstructProps)
    _init (config?: ActionInfoCentralStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_singleton(): ActionInfoCentralStore
    static $gtype: GObject.Type
}
interface ActionInfoStore_ConstructProps extends GObject.Object_ConstructProps {
}
class ActionInfoStore {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.ActionInfoStore */
    add(info: ActionInfo): void
    add_entries(entries: ActionInfoEntry[], translation_domain?: string | null): void
    check_all_used(): void
    lookup(action_name: string): ActionInfo
    set_all_accels_to_app(application: Gtk.Application): void
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
    connect(sigName: "notify", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ActionInfoStore_ConstructProps)
    _init (config?: ActionInfoStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ActionInfoStore
    static $gtype: GObject.Type
}
interface ApplicationWindow_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Amtk-5.Amtk.ApplicationWindow */
    application_window?: Gtk.ApplicationWindow
    statusbar?: Gtk.Statusbar
}
class ApplicationWindow {
    /* Properties of Amtk-5.Amtk.ApplicationWindow */
    statusbar: Gtk.Statusbar
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.ApplicationWindow */
    connect_menu_to_statusbar(menu_shell: Gtk.MenuShell): void
    connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void
    create_open_recent_menu(): Gtk.Widget
    create_open_recent_menu_item(): Gtk.Widget
    get_application_window(): Gtk.ApplicationWindow
    get_statusbar(): Gtk.Statusbar | null
    set_statusbar(statusbar?: Gtk.Statusbar | null): void
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
    connect(sigName: "notify", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ApplicationWindow_ConstructProps)
    _init (config?: ApplicationWindow_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow
    static $gtype: GObject.Type
}
interface Factory_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Amtk-5.Amtk.Factory */
    application?: Gtk.Application
    default_flags?: FactoryFlags
}
class Factory {
    /* Properties of Amtk-5.Amtk.Factory */
    default_flags: FactoryFlags
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.Factory */
    create_check_menu_item(action_name: string): Gtk.Widget
    create_check_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    create_gmenu_item(action_name: string): Gio.MenuItem
    create_gmenu_item_full(action_name: string, flags: FactoryFlags): Gio.MenuItem
    create_menu_item(action_name: string): Gtk.Widget
    create_menu_item_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    create_menu_tool_button(action_name: string): Gtk.MenuToolButton
    create_menu_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.MenuToolButton
    create_shortcut(action_name: string): Gtk.Widget
    create_shortcut_full(action_name: string, flags: FactoryFlags): Gtk.Widget
    create_simple_menu(entries: ActionInfoEntry[]): Gtk.Widget
    create_simple_menu_full(entries: ActionInfoEntry[], flags: FactoryFlags): Gtk.Widget
    create_tool_button(action_name: string): Gtk.ToolItem
    create_tool_button_full(action_name: string, flags: FactoryFlags): Gtk.ToolItem
    get_application(): Gtk.Application | null
    get_default_flags(): FactoryFlags
    set_default_flags(default_flags: FactoryFlags): void
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
    connect(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-flags", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-flags", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Factory_ConstructProps)
    _init (config?: Factory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(application?: Gtk.Application | null): Factory
    static new_with_default_application(): Factory
    static $gtype: GObject.Type
}
interface MenuShell_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Amtk-5.Amtk.MenuShell */
    menu_shell?: Gtk.MenuShell
}
class MenuShell {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Amtk-5.Amtk.MenuShell */
    get_menu_shell(): Gtk.MenuShell
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
    /* Virtual methods of Amtk-5.Amtk.MenuShell */
    vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void
    vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Amtk-5.Amtk.MenuShell */
    connect(sigName: "menu-item-deselected", callback: (($obj: MenuShell, menu_item: Gtk.MenuItem) => void)): number
    connect_after(sigName: "menu-item-deselected", callback: (($obj: MenuShell, menu_item: Gtk.MenuItem) => void)): number
    emit(sigName: "menu-item-deselected", menu_item: Gtk.MenuItem): void
    connect(sigName: "menu-item-selected", callback: (($obj: MenuShell, menu_item: Gtk.MenuItem) => void)): number
    connect_after(sigName: "menu-item-selected", callback: (($obj: MenuShell, menu_item: Gtk.MenuItem) => void)): number
    emit(sigName: "menu-item-selected", menu_item: Gtk.MenuItem): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuShell_ConstructProps)
    _init (config?: MenuShell_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell
    static $gtype: GObject.Type
}
class ActionInfo {
    /* Methods of Amtk-5.Amtk.ActionInfo */
    copy(): ActionInfo
    get_accels(): string[]
    get_action_name(): string | null
    get_icon_name(): string | null
    get_label(): string | null
    get_tooltip(): string | null
    has_been_used(): boolean
    mark_as_used(): void
    ref(): ActionInfo
    set_accels(accels: string[]): void
    set_action_name(action_name: string): void
    set_icon_name(icon_name?: string | null): void
    set_label(label?: string | null): void
    set_tooltip(tooltip?: string | null): void
    unref(): void
    static name: string
    static new(): ActionInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ActionInfo
    static new_from_entry(info_entry: ActionInfoEntry, translation_domain?: string | null): ActionInfo
}
abstract class ActionInfoCentralStoreClass {
    /* Fields of Amtk-5.Amtk.ActionInfoCentralStoreClass */
    readonly parent_class: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class ActionInfoCentralStorePrivate {
    static name: string
}
class ActionInfoEntry {
    /* Fields of Amtk-5.Amtk.ActionInfoEntry */
    readonly action_name: string
    readonly icon_name: string
    readonly label: string
    readonly accel: string
    readonly tooltip: string
    static name: string
}
abstract class ActionInfoStoreClass {
    /* Fields of Amtk-5.Amtk.ActionInfoStoreClass */
    readonly parent_class: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class ActionInfoStorePrivate {
    static name: string
}
abstract class ApplicationWindowClass {
    /* Fields of Amtk-5.Amtk.ApplicationWindowClass */
    readonly parent_class: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class ApplicationWindowPrivate {
    static name: string
}
abstract class FactoryClass {
    /* Fields of Amtk-5.Amtk.FactoryClass */
    readonly parent_class: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class FactoryPrivate {
    static name: string
}
abstract class MenuShellClass {
    /* Fields of Amtk-5.Amtk.MenuShellClass */
    readonly parent_class: GObject.ObjectClass
    readonly menu_item_selected: (amtk_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    readonly menu_item_deselected: (amtk_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    readonly padding: object[]
    static name: string
}
class MenuShellPrivate {
    static name: string
}
}
export default Amtk;