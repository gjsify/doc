/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Peas-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GIRepository from './GIRepository-2.0';

export namespace Peas {

enum PluginInfoError {
    LOADING_FAILED,
    LOADER_NOT_FOUND,
    DEP_NOT_FOUND,
    DEP_LOADING_FAILED,
}
function cclosure_marshal_VOID__BOXED_OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function plugin_info_error_quark(): GLib.Quark
interface ExtensionSetForeachFunc {
    (set: ExtensionSet, info: PluginInfo, exten: Extension, data?: object | null): void
}
interface FactoryFunc {
    (parameters: GObject.Parameter[]): GObject.Object
}
class Activatable {
    /* Methods of Peas-1.0.Peas.Activatable */
    activate(): void
    deactivate(): void
    update_state(): void
    /* Virtual methods of Peas-1.0.Peas.Activatable */
    vfunc_activate(): void
    vfunc_deactivate(): void
    vfunc_update_state(): void
    static name: string
}
interface Engine_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Peas-1.0.Peas.Engine */
    loaded_plugins?: string[]
    nonglobal_loaders?: boolean
}
class Engine {
    /* Properties of Peas-1.0.Peas.Engine */
    loaded_plugins: string[]
    readonly plugin_list: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Peas-1.0.Peas.Engine */
    add_search_path(module_dir: string, data_dir?: string | null): void
    create_extension(info: PluginInfo, extension_type: GObject.Type, prop_names: string[], prop_values: any[]): Extension
    enable_loader(loader_name: string): void
    garbage_collect(): void
    get_loaded_plugins(): string[]
    get_plugin_info(plugin_name: string): PluginInfo
    get_plugin_list(): PluginInfo[]
    load_plugin(info: PluginInfo): boolean
    prepend_search_path(module_dir: string, data_dir?: string | null): void
    provides_extension(info: PluginInfo, extension_type: GObject.Type): boolean
    rescan_plugins(): void
    set_loaded_plugins(plugin_names?: string[] | null): void
    unload_plugin(info: PluginInfo): boolean
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
    /* Virtual methods of Peas-1.0.Peas.Engine */
    vfunc_load_plugin(info: PluginInfo): void
    vfunc_unload_plugin(info: PluginInfo): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Peas-1.0.Peas.Engine */
    connect(sigName: "load-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    connect_after(sigName: "load-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    emit(sigName: "load-plugin", info: PluginInfo): void
    connect(sigName: "unload-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    connect_after(sigName: "unload-plugin", callback: (($obj: Engine, info: PluginInfo) => void)): number
    emit(sigName: "unload-plugin", info: PluginInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loaded-plugins", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded-plugins", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::plugin-list", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugin-list", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Engine
    static new_with_nonglobal_loaders(): Engine
    static get_default(): Engine
    static $gtype: GObject.Type
}
interface ExtensionBase_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Peas-1.0.Peas.ExtensionBase */
    plugin_info?: PluginInfo
}
class ExtensionBase {
    /* Properties of Peas-1.0.Peas.ExtensionBase */
    readonly data_dir: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Peas-1.0.Peas.ExtensionBase */
    get_data_dir(): string
    get_plugin_info(): PluginInfo
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
    connect(sigName: "notify", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data-dir", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-dir", callback: (($obj: ExtensionBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtensionBase_ConstructProps)
    _init (config?: ExtensionBase_ConstructProps): void
    static $gtype: GObject.Type
}
interface ExtensionSet_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Peas-1.0.Peas.ExtensionSet */
    construct_properties?: object
    engine?: Engine
    extension_type?: GObject.Type
}
class ExtensionSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Peas-1.0.Peas.ExtensionSet */
    foreach(func: ExtensionSetForeachFunc): void
    get_extension(info: PluginInfo): Extension
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
    /* Virtual methods of Peas-1.0.Peas.ExtensionSet */
    vfunc_call(method_name: string, args: GIRepository.Argument): boolean
    vfunc_extension_added(info: PluginInfo, exten: Extension): void
    vfunc_extension_removed(info: PluginInfo, exten: Extension): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Peas-1.0.Peas.ExtensionSet */
    connect(sigName: "extension-added", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    connect_after(sigName: "extension-added", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    emit(sigName: "extension-added", info: PluginInfo, exten: GObject.Object): void
    connect(sigName: "extension-removed", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    connect_after(sigName: "extension-removed", callback: (($obj: ExtensionSet, info: PluginInfo, exten: GObject.Object) => void)): number
    emit(sigName: "extension-removed", info: PluginInfo, exten: GObject.Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ExtensionSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ExtensionSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ExtensionSet_ConstructProps)
    _init (config?: ExtensionSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engine: Engine | null, exten_type: GObject.Type, prop_names: string[], prop_values: any[]): ExtensionSet
    static $gtype: GObject.Type
}
interface ObjectModule_ConstructProps extends GObject.TypeModule_ConstructProps {
    /* Constructor properties of Peas-1.0.Peas.ObjectModule */
    local_linkage?: boolean
    module_name?: string
    path?: string
    resident?: boolean
    symbol?: string
}
class ObjectModule {
    /* Fields of GObject-2.0.GObject.TypeModule */
    readonly parent_instance: GObject.Object
    readonly use_count: number
    readonly type_infos: object[]
    readonly interface_infos: object[]
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Peas-1.0.Peas.ObjectModule */
    register_extension_factory(exten_type: GObject.Type, factory_func: FactoryFunc): void
    register_extension_type(exten_type: GObject.Type, impl_type: GObject.Type): void
    /* Methods of GObject-2.0.GObject.TypeModule */
    add_interface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    register_type(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    set_name(name: string): void
    unuse(): void
    use(): boolean
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
    /* Methods of GObject-2.0.GObject.TypePlugin */
    complete_interface_info(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    complete_type_info(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    use(): void
    /* Virtual methods of GObject-2.0.GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectModule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectModule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectModule_ConstructProps)
    _init (config?: ObjectModule_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ActivatableInterface {
    /* Fields of Peas-1.0.Peas.ActivatableInterface */
    readonly g_iface: GObject.TypeInterface
    readonly activate: (activatable: Activatable) => void
    readonly deactivate: (activatable: Activatable) => void
    readonly update_state: (activatable: Activatable) => void
    static name: string
}
abstract class EngineClass {
    /* Fields of Peas-1.0.Peas.EngineClass */
    readonly parent_class: GObject.ObjectClass
    readonly load_plugin: (engine: Engine, info: PluginInfo) => void
    readonly unload_plugin: (engine: Engine, info: PluginInfo) => void
    static name: string
}
class EnginePrivate {
    static name: string
}
abstract class ExtensionBaseClass {
    /* Fields of Peas-1.0.Peas.ExtensionBaseClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class ExtensionBasePrivate {
    static name: string
}
abstract class ExtensionSetClass {
    /* Fields of Peas-1.0.Peas.ExtensionSetClass */
    readonly parent_class: GObject.ObjectClass
    readonly call: (set: ExtensionSet, method_name: string, args: GIRepository.Argument) => boolean
    readonly extension_added: (set: ExtensionSet, info: PluginInfo, exten: Extension) => void
    readonly extension_removed: (set: ExtensionSet, info: PluginInfo, exten: Extension) => void
    static name: string
}
class ExtensionSetPrivate {
    static name: string
}
abstract class ObjectModuleClass {
    /* Fields of Peas-1.0.Peas.ObjectModuleClass */
    readonly parent_class: GObject.TypeModuleClass
    static name: string
}
class ObjectModulePrivate {
    static name: string
}
class PluginInfo {
    /* Methods of Peas-1.0.Peas.PluginInfo */
    get_authors(): string[]
    get_copyright(): string
    get_data_dir(): string
    get_dependencies(): string[]
    get_description(): string
    get_external_data(key: string): string
    get_help_uri(): string
    get_icon_name(): string
    get_module_dir(): string
    get_module_name(): string
    get_name(): string
    get_settings(schema_id?: string | null): Gio.Settings
    get_version(): string
    get_website(): string
    has_dependency(module_name: string): boolean
    is_available(): boolean
    is_builtin(): boolean
    is_hidden(): boolean
    is_loaded(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static error_quark(): GLib.Quark
}
    type Extension = GObject.Object
}
export default Peas;