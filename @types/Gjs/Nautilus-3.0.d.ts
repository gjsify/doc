/**
 * Nautilus-3.0
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

export namespace Nautilus {

enum OperationResult {
    COMPLETE,
    FAILED,
    IN_PROGRESS,
}
function file_info_create(location: Gio.File): FileInfo
function file_info_create_for_uri(uri: string): FileInfo
function file_info_list_copy(files: FileInfo[]): FileInfo[]
function file_info_list_free(files: FileInfo[]): void
function file_info_lookup(location: Gio.File): FileInfo
function file_info_lookup_for_uri(uri: string): FileInfo
function info_provider_update_complete_invoke(update_complete: Function, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
class ColumnProvider {
    /* Methods of Nautilus-3.0.Nautilus.ColumnProvider */
    get_columns(): Column[]
    static name: string
}
class FileInfo {
    /* Methods of Nautilus-3.0.Nautilus.FileInfo */
    add_emblem(emblem_name: string): void
    add_string_attribute(attribute_name: string, value: string): void
    can_write(): boolean
    get_activation_uri(): string
    get_file_type(): Gio.FileType
    get_location(): Gio.File
    get_mime_type(): string
    get_mount(): Gio.Mount | null
    get_name(): string
    get_parent_info(): FileInfo | null
    get_parent_location(): Gio.File | null
    get_parent_uri(): string
    get_string_attribute(attribute_name: string): string
    get_uri(): string
    get_uri_scheme(): string
    invalidate_extension_info(): void
    is_directory(): boolean
    is_gone(): boolean
    is_mime_type(mime_type: string): boolean
    /* Virtual methods of Nautilus-3.0.Nautilus.FileInfo */
    vfunc_add_emblem(emblem_name: string): void
    vfunc_add_string_attribute(attribute_name: string, value: string): void
    vfunc_can_write(): boolean
    vfunc_get_activation_uri(): string
    vfunc_get_file_type(): Gio.FileType
    vfunc_get_location(): Gio.File
    vfunc_get_mime_type(): string
    vfunc_get_mount(): Gio.Mount | null
    vfunc_get_name(): string
    vfunc_get_parent_info(): FileInfo | null
    vfunc_get_parent_location(): Gio.File | null
    vfunc_get_parent_uri(): string
    vfunc_get_string_attribute(attribute_name: string): string
    vfunc_get_uri(): string
    vfunc_get_uri_scheme(): string
    vfunc_invalidate_extension_info(): void
    vfunc_is_directory(): boolean
    vfunc_is_gone(): boolean
    vfunc_is_mime_type(mime_type: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static create(location: Gio.File): FileInfo
    static create_for_uri(uri: string): FileInfo
    static list_copy(files: FileInfo[]): FileInfo[]
    static list_free(files: FileInfo[]): void
    static lookup(location: Gio.File): FileInfo
    static lookup_for_uri(uri: string): FileInfo
}
class InfoProvider {
    /* Methods of Nautilus-3.0.Nautilus.InfoProvider */
    cancel_update(handle: OperationHandle): void
    update_file_info(file: FileInfo, update_complete: Function, handle: OperationHandle): OperationResult
    static name: string
    /* Static methods and pseudo-constructors */
    static update_complete_invoke(update_complete: Function, provider: InfoProvider, handle: OperationHandle, result: OperationResult): void
}
class LocationWidgetProvider {
    /* Methods of Nautilus-3.0.Nautilus.LocationWidgetProvider */
    get_widget(uri: string, window: Gtk.Widget): Gtk.Widget
    static name: string
}
class MenuProvider {
    /* Methods of Nautilus-3.0.Nautilus.MenuProvider */
    emit_items_updated_signal(): void
    get_background_items(window: Gtk.Widget, current_folder: FileInfo): MenuItem[] | null
    get_file_items(window: Gtk.Widget, files: FileInfo[]): MenuItem[] | null
    /* Signals of Nautilus-3.0.Nautilus.MenuProvider */
    connect(sigName: "items-updated", callback: (($obj: MenuProvider) => void)): number
    connect_after(sigName: "items-updated", callback: (($obj: MenuProvider) => void)): number
    emit(sigName: "items-updated"): void
    static name: string
}
class PropertyPageProvider {
    /* Methods of Nautilus-3.0.Nautilus.PropertyPageProvider */
    get_pages(files: FileInfo[]): PropertyPage[]
    static name: string
}
export interface Column_ConstructProps extends GObject.Object_ConstructProps {
    attribute?: string
    default_sort_order?: Gtk.SortType
    description?: string
    label?: string
    name?: string
    xalign?: number
}
class Column {
    /* Properties of Nautilus-3.0.Nautilus.Column */
    attribute: string
    readonly attribute_q: number
    default_sort_order: Gtk.SortType
    description: string
    label: string
    xalign: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attribute", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attribute-q", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attribute-q", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-sort-order", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-sort-order", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::description", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::xalign", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Column, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Column_ConstructProps)
    _init (config?: Column_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, attribute: string, label: string, description: string): Column
    static $gtype: GObject.Type
}
export interface Menu_ConstructProps extends GObject.Object_ConstructProps {
}
class Menu {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Nautilus-3.0.Nautilus.Menu */
    append_item(item: MenuItem): void
    get_items(): MenuItem[]
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
    connect(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Menu_ConstructProps)
    _init (config?: Menu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menu
    static $gtype: GObject.Type
}
export interface MenuItem_ConstructProps extends GObject.Object_ConstructProps {
    icon?: string
    label?: string
    menu?: Menu
    name?: string
    priority?: boolean
    sensitive?: boolean
    tip?: string
}
class MenuItem {
    /* Properties of Nautilus-3.0.Nautilus.MenuItem */
    icon: string
    label: string
    menu: Menu
    priority: boolean
    sensitive: boolean
    tip: string
    /* Fields of Nautilus-3.0.Nautilus.MenuItem */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Nautilus-3.0.Nautilus.MenuItem */
    activate(): void
    set_submenu(menu: Menu): void
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
    /* Virtual methods of Nautilus-3.0.Nautilus.MenuItem */
    vfunc_activate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Nautilus-3.0.Nautilus.MenuItem */
    connect(sigName: "activate", callback: (($obj: MenuItem) => void)): number
    connect_after(sigName: "activate", callback: (($obj: MenuItem) => void)): number
    emit(sigName: "activate"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::menu", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tip", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tip", callback: (($obj: MenuItem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuItem_ConstructProps)
    _init (config?: MenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, label: string, tip: string, icon: string): MenuItem
    static list_free(item_list: MenuItem[]): void
    static $gtype: GObject.Type
}
export interface PropertyPage_ConstructProps extends GObject.Object_ConstructProps {
    label?: Gtk.Widget
    name?: string
    page?: Gtk.Widget
}
class PropertyPage {
    /* Properties of Nautilus-3.0.Nautilus.PropertyPage */
    label: Gtk.Widget
    page: Gtk.Widget
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::label", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: PropertyPage, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PropertyPage_ConstructProps)
    _init (config?: PropertyPage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, label: Gtk.Widget, page: Gtk.Widget): PropertyPage
    static $gtype: GObject.Type
}
abstract class ColumnClass {
    /* Fields of Nautilus-3.0.Nautilus.ColumnClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class ColumnProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.ColumnProviderInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
class File {
    static name: string
}
abstract class FileInfoInterface {
    /* Fields of Nautilus-3.0.Nautilus.FileInfoInterface */
    g_iface: GObject.TypeInterface
    is_gone: (file_info: FileInfo) => boolean
    get_name: (file_info: FileInfo) => string
    get_uri: (file_info: FileInfo) => string
    get_parent_uri: (file_info: FileInfo) => string
    get_uri_scheme: (file_info: FileInfo) => string
    get_mime_type: (file_info: FileInfo) => string
    is_mime_type: (file_info: FileInfo, mime_type: string) => boolean
    is_directory: (file_info: FileInfo) => boolean
    add_emblem: (file_info: FileInfo, emblem_name: string) => void
    get_string_attribute: (file_info: FileInfo, attribute_name: string) => string
    add_string_attribute: (file_info: FileInfo, attribute_name: string, value: string) => void
    invalidate_extension_info: (file_info: FileInfo) => void
    get_activation_uri: (file_info: FileInfo) => string
    get_file_type: (file_info: FileInfo) => Gio.FileType
    get_location: (file_info: FileInfo) => Gio.File
    get_parent_location: (file_info: FileInfo) => Gio.File | null
    get_parent_info: (file_info: FileInfo) => FileInfo | null
    get_mount: (file_info: FileInfo) => Gio.Mount | null
    can_write: (file_info: FileInfo) => boolean
    static name: string
}
class InfoProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.InfoProviderInterface */
    g_iface: GObject.TypeInterface
    update_file_info: (provider: InfoProvider, file: FileInfo, update_complete: Function, handle: OperationHandle) => OperationResult
    cancel_update: (provider: InfoProvider, handle: OperationHandle) => void
    static name: string
}
class LocationWidgetProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.LocationWidgetProviderInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
abstract class MenuClass {
    /* Fields of Nautilus-3.0.Nautilus.MenuClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class MenuItemClass {
    /* Fields of Nautilus-3.0.Nautilus.MenuItemClass */
    parent: GObject.ObjectClass
    activate: (item: MenuItem) => void
    static name: string
}
class MenuProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.MenuProviderInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
class OperationHandle {
    static name: string
}
abstract class PropertyPageClass {
    /* Fields of Nautilus-3.0.Nautilus.PropertyPageClass */
    parent_class: GObject.ObjectClass
    static name: string
}
class PropertyPageProviderInterface {
    /* Fields of Nautilus-3.0.Nautilus.PropertyPageProviderInterface */
    g_iface: GObject.TypeInterface
    static name: string
}
type ColumnProviderIface = ColumnProviderInterface
type InfoProviderIface = InfoProviderInterface
type LocationWidgetProviderIface = LocationWidgetProviderInterface
type MenuProviderIface = MenuProviderInterface
type PropertyPageProviderIface = PropertyPageProviderInterface
}
export default Nautilus;