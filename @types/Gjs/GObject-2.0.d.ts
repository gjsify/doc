/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GObject-2.0
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';

export namespace GObject {

enum BindingFlags {
    DEFAULT,
    BIDIRECTIONAL,
    SYNC_CREATE,
    INVERT_BOOLEAN,
}
enum ConnectFlags {
    AFTER,
    SWAPPED,
}
enum ParamFlags {
    READABLE,
    WRITABLE,
    READWRITE,
    CONSTRUCT,
    CONSTRUCT_ONLY,
    LAX_VALIDATION,
    STATIC_NAME,
    PRIVATE,
    STATIC_NICK,
    STATIC_BLURB,
    EXPLICIT_NOTIFY,
    DEPRECATED,
}
enum SignalFlags {
    RUN_FIRST,
    RUN_LAST,
    RUN_CLEANUP,
    NO_RECURSE,
    DETAILED,
    ACTION,
    NO_HOOKS,
    MUST_COLLECT,
    DEPRECATED,
    ACCUMULATOR_FIRST_RUN,
}
enum SignalMatchType {
    ID,
    DETAIL,
    CLOSURE,
    FUNC,
    DATA,
    UNBLOCKED,
}
enum TypeDebugFlags {
    NONE,
    OBJECTS,
    SIGNALS,
    INSTANCE_COUNT,
    MASK,
}
enum TypeFlags {
    ABSTRACT,
    VALUE_ABSTRACT,
    FINAL,
}
enum TypeFundamentalFlags {
    CLASSED,
    INSTANTIATABLE,
    DERIVABLE,
    DEEP_DERIVABLE,
}
const PARAM_MASK: number
const PARAM_STATIC_STRINGS: number
const PARAM_USER_SHIFT: number
const SIGNAL_FLAGS_MASK: number
const SIGNAL_MATCH_MASK: number
const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type
const TYPE_FUNDAMENTAL_MAX: number
const TYPE_FUNDAMENTAL_SHIFT: number
const TYPE_RESERVED_BSE_FIRST: number
const TYPE_RESERVED_BSE_LAST: number
const TYPE_RESERVED_GLIB_FIRST: number
const TYPE_RESERVED_GLIB_LAST: number
const TYPE_RESERVED_USER_FIRST: number
const VALUE_INTERNED_STRING: number
const VALUE_NOCOPY_CONTENTS: number
function boxed_copy(boxed_type: Type, src_boxed: object): object
function boxed_free(boxed_type: Type, boxed: object): void
function cclosure_marshal_BOOLEAN__BOXED_BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_BOOLEAN__FLAGS(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_STRING__OBJECT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__CHAR(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__DOUBLE(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__ENUM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__FLAGS(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__FLOAT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__LONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__PARAM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__STRING(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__UCHAR(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__UINT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__ULONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__VARIANT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_VOID__VOID(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function cclosure_marshal_generic(closure: Function, return_gvalue: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
function clear_signal_handler(handler_id_ptr: number, instance: Object): void
function enum_complete_type_info(g_enum_type: Type, const_values: EnumValue): /* info */ TypeInfo
function enum_get_value(enum_class: EnumClass, value: number): EnumValue | null
function enum_get_value_by_name(enum_class: EnumClass, name: string): EnumValue | null
function enum_get_value_by_nick(enum_class: EnumClass, nick: string): EnumValue | null
function enum_register_static(name: string, const_static_values: EnumValue): Type
function enum_to_string(g_enum_type: Type, value: number): string
function flags_complete_type_info(g_flags_type: Type, const_values: FlagsValue): /* info */ TypeInfo
function flags_get_first_value(flags_class: FlagsClass, value: number): FlagsValue | null
function flags_get_value_by_name(flags_class: FlagsClass, name: string): FlagsValue | null
function flags_get_value_by_nick(flags_class: FlagsClass, nick: string): FlagsValue | null
function flags_register_static(name: string, const_static_values: FlagsValue): Type
function flags_to_string(flags_type: Type, value: number): string
function gtype_get_type(): Type
function param_spec_boolean(name: string, nick: string, blurb: string, default_value: boolean, flags: ParamFlags): ParamSpec
function param_spec_boxed(name: string, nick: string, blurb: string, boxed_type: Type, flags: ParamFlags): ParamSpec
function param_spec_char(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_double(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_enum(name: string, nick: string, blurb: string, enum_type: Type, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_flags(name: string, nick: string, blurb: string, flags_type: Type, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_float(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_gtype(name: string, nick: string, blurb: string, is_a_type: Type, flags: ParamFlags): ParamSpec
function param_spec_int(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_int64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_long(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_object(name: string, nick: string, blurb: string, object_type: Type, flags: ParamFlags): ParamSpec
function param_spec_param(name: string, nick: string, blurb: string, param_type: Type, flags: ParamFlags): ParamSpec
function param_spec_pointer(name: string, nick: string, blurb: string, flags: ParamFlags): ParamSpec
function param_spec_string(name: string, nick: string, blurb: string, default_value: string | null, flags: ParamFlags): ParamSpec
function param_spec_uchar(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_uint(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_uint64(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_ulong(name: string, nick: string, blurb: string, minimum: number, maximum: number, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_unichar(name: string, nick: string, blurb: string, default_value: number, flags: ParamFlags): ParamSpec
function param_spec_variant(name: string, nick: string, blurb: string, type: GLib.VariantType, default_value: GLib.Variant | null, flags: ParamFlags): ParamSpec
function param_type_register_static(name: string, pspec_info: ParamSpecTypeInfo): Type
function param_value_convert(pspec: ParamSpec, src_value: any, dest_value: any, strict_validation: boolean): boolean
function param_value_defaults(pspec: ParamSpec, value: any): boolean
function param_value_set_default(pspec: ParamSpec, value: any): void
function param_value_validate(pspec: ParamSpec, value: any): boolean
function param_values_cmp(pspec: ParamSpec, value1: any, value2: any): number
function pointer_type_register_static(name: string): Type
function signal_accumulator_first_wins(ihint: SignalInvocationHint, return_accu: any, handler_return: any, dummy?: object | null): boolean
function signal_accumulator_true_handled(ihint: SignalInvocationHint, return_accu: any, handler_return: any, dummy?: object | null): boolean
function signal_add_emission_hook(signal_id: number, detail: GLib.Quark): number
function signal_chain_from_overridden(instance_and_params: any[], return_value: any): void
function signal_connect_closure(instance: Object, detailed_signal: string, closure: Function, after: boolean): number
function signal_connect_closure_by_id(instance: Object, signal_id: number, detail: GLib.Quark, closure: Function, after: boolean): number
function signal_emitv(instance_and_params: any[], signal_id: number, detail: GLib.Quark, return_value?: any | null): /* return_value */ any | null
function signal_get_invocation_hint(instance: Object): SignalInvocationHint | null
function signal_handler_block(instance: Object, handler_id: number): void
function signal_handler_disconnect(instance: Object, handler_id: number): void
function signal_handler_find(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signal_handler_is_connected(instance: Object, handler_id: number): boolean
function signal_handler_unblock(instance: Object, handler_id: number): void
function signal_handlers_block_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signal_handlers_destroy(instance: Object): void
function signal_handlers_disconnect_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signal_handlers_unblock_matched(instance: Object, mask: SignalMatchType, signal_id: number, detail: GLib.Quark, func?: object | null, data?: object | null): number
function signal_has_handler_pending(instance: Object, signal_id: number, detail: GLib.Quark, may_be_blocked: boolean): boolean
function signal_is_valid_name(name: string): boolean
function signal_list_ids(itype: Type): number[]
function signal_lookup(name: string, itype: Type): number
function signal_name(signal_id: number): string | null
function signal_override_class_closure(signal_id: number, instance_type: Type, class_closure: Function): void
function signal_parse_name(detailed_signal: string, itype: Type, force_detail_quark: boolean): [ /* returnType */ boolean, /* signal_id_p */ number, /* detail_p */ GLib.Quark ]
function signal_query(signal_id: number): /* query */ SignalQuery
function signal_remove_emission_hook(signal_id: number, hook_id: number): void
function signal_set_va_marshaller(signal_id: number, instance_type: Type, va_marshaller: SignalCVaMarshaller): void
function signal_stop_emission(instance: Object, signal_id: number, detail: GLib.Quark): void
function signal_stop_emission_by_name(instance: Object, detailed_signal: string): void
function signal_type_cclosure_new(itype: Type, struct_offset: number): Function
function source_set_closure(source: GLib.Source, closure: Function): void
function source_set_dummy_callback(source: GLib.Source): void
function strdup_value_contents(value: any): string
function type_add_class_private(class_type: Type, private_size: number): void
function type_add_instance_private(class_type: Type, private_size: number): number
function type_add_interface_dynamic(instance_type: Type, interface_type: Type, plugin: TypePlugin): void
function type_add_interface_static(instance_type: Type, interface_type: Type, info: InterfaceInfo): void
function type_check_class_is_a(g_class: TypeClass, is_a_type: Type): boolean
function type_check_instance(instance: TypeInstance): boolean
function type_check_instance_is_a(instance: TypeInstance, iface_type: Type): boolean
function type_check_instance_is_fundamentally_a(instance: TypeInstance, fundamental_type: Type): boolean
function type_check_is_value_type(type: Type): boolean
function type_check_value(value: any): boolean
function type_check_value_holds(value: any, type: Type): boolean
function type_children(type: Type): Type[]
function type_class_adjust_private_offset(g_class: object | null, private_size_or_offset: number): void
function type_class_peek(type: Type): TypeClass
function type_class_peek_static(type: Type): TypeClass
function type_class_ref(type: Type): TypeClass
function type_default_interface_peek(g_type: Type): TypeInterface
function type_default_interface_ref(g_type: Type): TypeInterface
function type_default_interface_unref(g_iface: TypeInterface): void
function type_depth(type: Type): number
function type_ensure(type: Type): void
function type_free_instance(instance: TypeInstance): void
function type_from_name(name: string): Type
function type_fundamental(type_id: Type): Type
function type_fundamental_next(): Type
function type_get_instance_count(type: Type): number
function type_get_plugin(type: Type): TypePlugin
function type_get_qdata(type: Type, quark: GLib.Quark): object | null
function type_get_type_registration_serial(): number
function type_init(): void
function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void
function type_interface_add_prerequisite(interface_type: Type, prerequisite_type: Type): void
function type_interface_get_plugin(instance_type: Type, interface_type: Type): TypePlugin
function type_interface_instantiatable_prerequisite(interface_type: Type): Type
function type_interface_peek(instance_class: TypeClass, iface_type: Type): TypeInterface
function type_interface_prerequisites(interface_type: Type): Type[]
function type_interfaces(type: Type): Type[]
function type_is_a(type: Type, is_a_type: Type): boolean
function type_name(type: Type): string
function type_name_from_class(g_class: TypeClass): string
function type_name_from_instance(instance: TypeInstance): string
function type_next_base(leaf_type: Type, root_type: Type): Type
function type_parent(type: Type): Type
function type_qname(type: Type): GLib.Quark
function type_query(type: Type): /* query */ TypeQuery
function type_register_dynamic(parent_type: Type, type_name: string, plugin: TypePlugin, flags: TypeFlags): Type
function type_register_fundamental(type_id: Type, type_name: string, info: TypeInfo, finfo: TypeFundamentalInfo, flags: TypeFlags): Type
function type_register_static(parent_type: Type, type_name: string, info: TypeInfo, flags: TypeFlags): Type
function type_set_qdata(type: Type, quark: GLib.Quark, data?: object | null): void
function type_test_flags(type: Type, flags: number): boolean
function value_type_compatible(src_type: Type, dest_type: Type): boolean
function value_type_transformable(src_type: Type, dest_type: Type): boolean
interface BaseFinalizeFunc {
    (g_class: TypeClass): void
}
interface BaseInitFunc {
    (g_class: TypeClass): void
}
interface BindingTransformFunc {
    (binding: Binding, from_value: any, to_value: any): boolean
}
interface BoxedCopyFunc {
    (boxed: object): object
}
interface BoxedFreeFunc {
    (boxed: object): void
}
interface Callback {
    (): void
}
interface ClassFinalizeFunc {
    (g_class: TypeClass, class_data?: object | null): void
}
interface ClassInitFunc {
    (g_class: TypeClass, class_data?: object | null): void
}
interface ClosureMarshal {
    (closure: Function, return_value: any | null, param_values: any[], invocation_hint?: object | null, marshal_data?: object | null): void
}
interface ClosureNotify {
    (data: object | null, closure: Function): void
}
interface InstanceInitFunc {
    (instance: TypeInstance, g_class: TypeClass): void
}
interface InterfaceFinalizeFunc {
    (g_iface: TypeInterface, iface_data?: object | null): void
}
interface InterfaceInitFunc {
    (g_iface: TypeInterface, iface_data?: object | null): void
}
interface ObjectFinalizeFunc {
    (object: Object): void
}
interface ObjectGetPropertyFunc {
    (object: Object, property_id: number, value: any, pspec: ParamSpec): void
}
interface ObjectSetPropertyFunc {
    (object: Object, property_id: number, value: any, pspec: ParamSpec): void
}
interface SignalAccumulator {
    (ihint: SignalInvocationHint, return_accu: any, handler_return: any, data?: object | null): boolean
}
interface SignalEmissionHook {
    (ihint: SignalInvocationHint, param_values: any[], data?: object | null): boolean
}
interface ToggleNotify {
    (data: object | null, object: Object, is_last_ref: boolean): void
}
interface TypeClassCacheFunc {
    (cache_data: object | null, g_class: TypeClass): boolean
}
interface TypeInterfaceCheckFunc {
    (check_data: object | null, g_iface: TypeInterface): void
}
interface TypePluginCompleteInterfaceInfo {
    (plugin: TypePlugin, instance_type: Type, interface_type: Type, info: InterfaceInfo): void
}
interface TypePluginCompleteTypeInfo {
    (plugin: TypePlugin, g_type: Type, info: TypeInfo, value_table: TypeValueTable): void
}
interface TypePluginUnuse {
    (plugin: TypePlugin): void
}
interface TypePluginUse {
    (plugin: TypePlugin): void
}
interface ValueTransform {
    (src_value: any, dest_value: any): void
}
interface WeakNotify {
    (data: object | null, where_the_object_was: Object): void
}
class TypePlugin {
    /* Methods of GObject-2.0.GObject.TypePlugin */
    complete_interface_info(instance_type: Type, interface_type: Type, info: InterfaceInfo): void
    complete_type_info(g_type: Type, info: TypeInfo, value_table: TypeValueTable): void
    unuse(): void
    use(): void
    static name: string
}
// Extra interfaces used to help define GObject classes in js; these
// aren't part of gi.
export interface SignalDefinition {
    flags?: SignalFlags
    accumulator: number
    return_type?: Type
    param_types?: Type[]
}

export interface MetaInfo {
    GTypeName: string
    GTypeFlags?: TypeFlags
    Implements?: Function[]
    Properties?: { [K: string]: ParamSpec }
    Signals?: { [K: string]: SignalDefinition }
    Requires?: Function[]
    CssName?: string
    Template?: string
    Children?: string[]
    InternalChildren?: string[]
}

export const GTypeName: symbol
export const requires: symbol
export const interfaces: symbol
export const properties: symbol
export const signals: symbol
export function registerClass(metaInfo: MetaInfo, cls: Function): Function
export function registerClass(cls: Function): Function
export function registerClass<T extends MetaInfo | Function>(a: T, b?: Function): Function

interface Binding_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of GObject-2.0.GObject.Binding */
    flags?: BindingFlags
    source?: Object
    source_property?: string
    target?: Object
    target_property?: string
}
class Binding {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: TypeInstance
    /* Methods of GObject-2.0.GObject.Binding */
    dup_source(): Object | null
    dup_target(): Object | null
    get_flags(): BindingFlags
    get_source(): Object | null
    get_source_property(): string
    get_target(): Object | null
    get_target_property(): string
    unbind(): void
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
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
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Binding, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Binding_ConstructProps)
    _init (config?: Binding_ConstructProps): void
    static $gtype: Type
}
interface InitiallyUnowned_ConstructProps extends Object_ConstructProps {
}
class InitiallyUnowned {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
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
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InitiallyUnowned, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InitiallyUnowned, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InitiallyUnowned_ConstructProps)
    _init (config?: InitiallyUnowned_ConstructProps): void
    static $gtype: Type
}
interface Object_ConstructProps  {
}
class Object {
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
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
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newv(object_type: Type, parameters: Parameter[]): Object
    static compat_control(what: number, data?: object | null): number
    static interface_find_property(g_iface: TypeInterface, property_name: string): ParamSpec
    static interface_install_property(g_iface: TypeInterface, pspec: ParamSpec): void
    static interface_list_properties(g_iface: TypeInterface): ParamSpec[]
    static $gtype: Type
}
class ParamSpec {
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
    /* Static methods and pseudo-constructors */
    static is_valid_name(name: string): boolean
}
class ParamSpecBoolean {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecBoxed {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecChar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecDouble {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecEnum {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecFlags {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecFloat {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecGType {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecInt {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecLong {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecObject {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecOverride {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecParam {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecPointer {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecString {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecUChar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecUInt {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecUInt64 {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecULong {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecUnichar {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecValueArray {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamSpecVariant {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: TypeInstance
    readonly name: string
    readonly flags: ParamFlags
    readonly value_type: Type
    readonly owner_type: Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
interface TypeModule_ConstructProps extends Object_ConstructProps {
}
class TypeModule {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: TypeInstance
    /* Methods of GObject-2.0.GObject.TypeModule */
    add_interface(instance_type: Type, interface_type: Type, interface_info: InterfaceInfo): void
    register_enum(name: string, const_static_values: EnumValue): Type
    register_flags(name: string, const_static_values: FlagsValue): Type
    register_type(parent_type: Type, type_name: string, type_info: TypeInfo, flags: TypeFlags): Type
    set_name(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: Object, target_property: string, flags: BindingFlags): Binding
    bind_property_full(source_property: string, target: Object, target_property: string, flags: BindingFlags, transform_to: Function, transform_from: Function): Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: ParamSpec): void
    ref(): Object
    ref_sink(): Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: ParamSpec): void
    vfunc_notify(pspec: ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TypeModule, pspec: ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TypeModule, pspec: ParamSpec) => void)): number
    emit(sigName: "notify", pspec: ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TypeModule_ConstructProps)
    _init (config?: TypeModule_ConstructProps): void
    static $gtype: Type
}
class CClosure {
    /* Fields of GObject-2.0.GObject.CClosure */
    readonly closure: Function
    readonly callback: object
    static name: string
    /* Static methods and pseudo-constructors */
    static marshal_BOOLEAN__BOXED_BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_BOOLEAN__FLAGS(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_STRING__OBJECT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__BOOLEAN(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__BOXED(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__CHAR(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__DOUBLE(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__ENUM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__FLAGS(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__FLOAT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__INT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__LONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__OBJECT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__PARAM(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__STRING(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__UCHAR(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__UINT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__UINT_POINTER(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__ULONG(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__VARIANT(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_VOID__VOID(closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
    static marshal_generic(closure: Function, return_gvalue: any, n_param_values: number, param_values: any, invocation_hint?: object | null, marshal_data?: object | null): void
}
class Closure {
    /* Fields of GObject-2.0.GObject.Closure */
    readonly in_marshal: number
    readonly is_invalid: number
    readonly marshal: (closure: Function, return_value: any, n_param_values: number, param_values: any, invocation_hint: object, marshal_data: object) => void
    /* Methods of GObject-2.0.GObject.Closure */
    invalidate(): void
    invoke(param_values: any[], invocation_hint?: object | null): /* return_value */ any | null
    ref(): Function
    sink(): void
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_object(sizeof_closure: number, object: Object): Closure
    static new_simple(sizeof_closure: number, data?: object | null): Closure
}
class ClosureNotifyData {
    /* Fields of GObject-2.0.GObject.ClosureNotifyData */
    readonly data: object
    readonly notify: ClosureNotify
    static name: string
}
class EnumClass {
    /* Fields of GObject-2.0.GObject.EnumClass */
    readonly g_type_class: TypeClass
    readonly minimum: number
    readonly maximum: number
    readonly n_values: number
    readonly values: EnumValue
    static name: string
}
class EnumValue {
    /* Fields of GObject-2.0.GObject.EnumValue */
    readonly value: number
    readonly value_name: string
    readonly value_nick: string
    static name: string
}
class FlagsClass {
    /* Fields of GObject-2.0.GObject.FlagsClass */
    readonly g_type_class: TypeClass
    readonly mask: number
    readonly n_values: number
    readonly values: FlagsValue
    static name: string
}
class FlagsValue {
    /* Fields of GObject-2.0.GObject.FlagsValue */
    readonly value: number
    readonly value_name: string
    readonly value_nick: string
    static name: string
}
abstract class InitiallyUnownedClass {
    /* Fields of GObject-2.0.GObject.InitiallyUnownedClass */
    readonly g_type_class: TypeClass
    readonly set_property: (object: Object, property_id: number, value: any, pspec: ParamSpec) => void
    readonly get_property: (object: Object, property_id: number, value: any, pspec: ParamSpec) => void
    readonly dispose: (object: Object) => void
    readonly finalize: (object: Object) => void
    readonly dispatch_properties_changed: (object: Object, n_pspecs: number, pspecs: ParamSpec) => void
    readonly notify: (object: Object, pspec: ParamSpec) => void
    readonly constructed: (object: Object) => void
    static name: string
}
class InterfaceInfo {
    /* Fields of GObject-2.0.GObject.InterfaceInfo */
    readonly interface_init: InterfaceInitFunc
    readonly interface_finalize: InterfaceFinalizeFunc
    readonly interface_data: object
    static name: string
}
abstract class ObjectClass {
    /* Fields of GObject-2.0.GObject.ObjectClass */
    readonly g_type_class: TypeClass
    readonly set_property: (object: Object, property_id: number, value: any, pspec: ParamSpec) => void
    readonly get_property: (object: Object, property_id: number, value: any, pspec: ParamSpec) => void
    readonly dispose: (object: Object) => void
    readonly finalize: (object: Object) => void
    readonly dispatch_properties_changed: (object: Object, n_pspecs: number, pspecs: ParamSpec) => void
    readonly notify: (object: Object, pspec: ParamSpec) => void
    readonly constructed: (object: Object) => void
    /* Methods of GObject-2.0.GObject.ObjectClass */
    static find_property(oclass: Object | Function | Type, property_name: string): ParamSpec
    static install_properties(oclass: Object | Function | Type, pspecs: ParamSpec[]): void
    static install_property(oclass: Object | Function | Type, property_id: number, pspec: ParamSpec): void
    static list_properties(oclass: Object | Function | Type): ParamSpec[]
    static override_property(oclass: Object | Function | Type, property_id: number, name: string): void
    static name: string
}
class ObjectConstructParam {
    /* Fields of GObject-2.0.GObject.ObjectConstructParam */
    readonly pspec: ParamSpec
    readonly value: any
    static name: string
}
abstract class ParamSpecClass {
    /* Fields of GObject-2.0.GObject.ParamSpecClass */
    readonly g_type_class: TypeClass
    readonly value_type: Type
    readonly finalize: (pspec: ParamSpec) => void
    readonly value_set_default: (pspec: ParamSpec, value: any) => void
    readonly value_validate: (pspec: ParamSpec, value: any) => boolean
    readonly values_cmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
class ParamSpecPool {
    /* Methods of GObject-2.0.GObject.ParamSpecPool */
    insert(pspec: ParamSpec, owner_type: Type): void
    list(owner_type: Type): ParamSpec[]
    list_owned(owner_type: Type): ParamSpec[]
    lookup(param_name: string, owner_type: Type, walk_ancestors: boolean): ParamSpec | null
    remove(pspec: ParamSpec): void
    static name: string
}
class ParamSpecTypeInfo {
    /* Fields of GObject-2.0.GObject.ParamSpecTypeInfo */
    readonly instance_size: number
    readonly n_preallocs: number
    readonly instance_init: (pspec: ParamSpec) => void
    readonly value_type: Type
    readonly finalize: (pspec: ParamSpec) => void
    readonly value_set_default: (pspec: ParamSpec, value: any) => void
    readonly value_validate: (pspec: ParamSpec, value: any) => boolean
    readonly values_cmp: (pspec: ParamSpec, value1: any, value2: any) => number
    static name: string
}
class Parameter {
    /* Fields of GObject-2.0.GObject.Parameter */
    readonly name: string
    readonly value: any
    static name: string
}
class SignalInvocationHint {
    /* Fields of GObject-2.0.GObject.SignalInvocationHint */
    readonly signal_id: number
    readonly detail: GLib.Quark
    readonly run_type: SignalFlags
    static name: string
}
class SignalQuery {
    /* Fields of GObject-2.0.GObject.SignalQuery */
    readonly signal_id: number
    readonly signal_name: string
    readonly itype: Type
    readonly signal_flags: SignalFlags
    readonly return_type: Type
    readonly n_params: number
    readonly param_types: Type[]
    static name: string
}
class TypeClass {
    /* Methods of GObject-2.0.GObject.TypeClass */
    add_private(private_size: number): void
    get_private(private_type: Type): object | null
    peek_parent(): TypeClass
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static adjust_private_offset(g_class: object | null, private_size_or_offset: number): void
    static peek(type: Type): TypeClass
    static peek_static(type: Type): TypeClass
    static ref(type: Type): TypeClass
}
class TypeFundamentalInfo {
    /* Fields of GObject-2.0.GObject.TypeFundamentalInfo */
    readonly type_flags: TypeFundamentalFlags
    static name: string
}
class TypeInfo {
    /* Fields of GObject-2.0.GObject.TypeInfo */
    readonly class_size: number
    readonly base_init: BaseInitFunc
    readonly base_finalize: BaseFinalizeFunc
    readonly class_init: ClassInitFunc
    readonly class_finalize: ClassFinalizeFunc
    readonly class_data: object
    readonly instance_size: number
    readonly n_preallocs: number
    readonly instance_init: InstanceInitFunc
    readonly value_table: TypeValueTable
    static name: string
}
class TypeInstance {
    /* Methods of GObject-2.0.GObject.TypeInstance */
    get_private(private_type: Type): object | null
    static name: string
}
class TypeInterface {
    /* Methods of GObject-2.0.GObject.TypeInterface */
    peek_parent(): TypeInterface
    static name: string
    /* Static methods and pseudo-constructors */
    static add_prerequisite(interface_type: Type, prerequisite_type: Type): void
    static get_plugin(instance_type: Type, interface_type: Type): TypePlugin
    static instantiatable_prerequisite(interface_type: Type): Type
    static peek(instance_class: TypeClass, iface_type: Type): TypeInterface
    static prerequisites(interface_type: Type): Type[]
}
abstract class TypeModuleClass {
    /* Fields of GObject-2.0.GObject.TypeModuleClass */
    readonly parent_class: ObjectClass
    readonly load: (module: TypeModule) => boolean
    readonly unload: (module: TypeModule) => void
    readonly reserved1: () => void
    readonly reserved2: () => void
    readonly reserved3: () => void
    readonly reserved4: () => void
    static name: string
}
class TypePluginClass {
    /* Fields of GObject-2.0.GObject.TypePluginClass */
    readonly use_plugin: TypePluginUse
    readonly unuse_plugin: TypePluginUnuse
    readonly complete_type_info: TypePluginCompleteTypeInfo
    readonly complete_interface_info: TypePluginCompleteInterfaceInfo
    static name: string
}
class TypeQuery {
    /* Fields of GObject-2.0.GObject.TypeQuery */
    readonly type: Type
    readonly type_name: string
    readonly class_size: number
    readonly instance_size: number
    static name: string
}
class TypeValueTable {
    /* Fields of GObject-2.0.GObject.TypeValueTable */
    readonly value_init: (value: any) => void
    readonly value_free: (value: any) => void
    readonly value_copy: (src_value: any, dest_value: any) => void
    readonly value_peek_pointer: (value: any) => object
    readonly collect_format: string
    readonly collect_value: (value: any, n_collect_values: number, collect_values: TypeCValue, collect_flags: number) => string
    readonly lcopy_format: string
    readonly lcopy_value: (value: any, n_collect_values: number, collect_values: TypeCValue, collect_flags: number) => string
    static name: string
}
class Value {
    /* Fields of GObject-2.0.GObject.Value */
    readonly data: _Value__data__union[]
    /* Methods of GObject-2.0.GObject.Value */
    copy(dest_value: any): void
    dup_object(): Object
    dup_string(): string
    dup_variant(): GLib.Variant | null
    fits_pointer(): boolean
    get_boolean(): boolean
    get_boxed(): object | null
    get_char(): number
    get_double(): number
    get_enum(): number
    get_flags(): number
    get_float(): number
    get_gtype(): Type
    get_int(): number
    get_int64(): number
    get_long(): number
    get_object(): Object
    get_param(): ParamSpec
    get_pointer(): object | null
    get_schar(): number
    get_string(): string
    get_uchar(): number
    get_uint(): number
    get_uint64(): number
    get_ulong(): number
    get_variant(): GLib.Variant | null
    init(g_type: Type): any
    init_from_instance(instance: TypeInstance): void
    peek_pointer(): object | null
    reset(): any
    set_boolean(v_boolean: boolean): void
    set_boxed(v_boxed?: object | null): void
    set_boxed_take_ownership(v_boxed?: object | null): void
    set_char(v_char: number): void
    set_double(v_double: number): void
    set_enum(v_enum: number): void
    set_flags(v_flags: number): void
    set_float(v_float: number): void
    set_gtype(v_gtype: Type): void
    set_instance(instance?: object | null): void
    set_int(v_int: number): void
    set_int64(v_int64: number): void
    set_interned_string(v_string?: string | null): void
    set_long(v_long: number): void
    set_object(v_object?: Object | null): void
    set_param(param?: ParamSpec | null): void
    set_pointer(v_pointer?: object | null): void
    set_schar(v_char: number): void
    set_static_boxed(v_boxed?: object | null): void
    set_static_string(v_string?: string | null): void
    set_string(v_string?: string | null): void
    set_string_take_ownership(v_string?: string | null): void
    set_uchar(v_uchar: number): void
    set_uint(v_uint: number): void
    set_uint64(v_uint64: number): void
    set_ulong(v_ulong: number): void
    set_variant(variant?: GLib.Variant | null): void
    take_boxed(v_boxed?: object | null): void
    take_string(v_string?: string | null): void
    take_variant(variant?: GLib.Variant | null): void
    transform(dest_value: any): boolean
    unset(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static type_compatible(src_type: Type, dest_type: Type): boolean
    static type_transformable(src_type: Type, dest_type: Type): boolean
}
class ValueArray {
    /* Fields of GObject-2.0.GObject.ValueArray */
    readonly n_values: number
    readonly values: any
    /* Methods of GObject-2.0.GObject.ValueArray */
    append(value?: any | null): ValueArray
    copy(): ValueArray
    get_nth(index_: number): any
    insert(index_: number, value?: any | null): ValueArray
    prepend(value?: any | null): ValueArray
    remove(index_: number): ValueArray
    sort(compare_func: GLib.CompareDataFunc): ValueArray
    static name: string
    static new(n_prealloced: number): ValueArray
    constructor(n_prealloced: number)
    /* Static methods and pseudo-constructors */
    static new(n_prealloced: number): ValueArray
}
class WeakRef {
    static name: string
}
class TypeCValue {
    static name: string
}
class _Value__data__union {
    static name: string
}
    type SignalCMarshaller = ClosureMarshal
    type SignalCVaMarshaller = any
export interface Type {
    name: string
}
}
export default GObject;