/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gpseq-1.0
 */

import type * as Gjs from './Gjs';
import type Gee from './Gee-0.8';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gpseq {

enum ChannelError {
    CLOSED,
    TIMEOUT,
    TRY_FAILED,
}
enum MapError {
    DUPLICATE_KEY,
}
enum OptionalError {
    NOT_PRESENT,
}
enum CollectorFeatures {
    CONCURRENT,
    UNORDERED,
}
function collectors_to_generic_array(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collector
function collectors_to_collection(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, factory: Supplier): Collector
function collectors_to_list(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collector
function collectors_to_set(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Collector
function collectors_to_map(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, key_mapper: MapFunc, val_mapper: MapFunc, merger: CombineFunc | null, key_hash: Gee.HashDataFunc | null, key_equal: Gee.EqualDataFunc | null, value_equal: Gee.EqualDataFunc | null): Collector
function collectors_sum_int(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_uint(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_long(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_ulong(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_float(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_double(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_int32(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_uint32(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_int64(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_sum_uint64(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_average_float(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_average_double(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Collector
function collectors_group_by(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, classifier: MapFunc): Collector
function collectors_group_by_with(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, classifier: MapFunc, downstream: Collector): Collector
function collectors_partition(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, pred: Predicate): Collector
function collectors_partition_with(v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
function collectors_max(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
function collectors_min(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare: GLib.CompareDataFunc | null): Collector
function collectors_count(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Collector
function collectors_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Collector
function collectors_reduce(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, accumulator: CombineFunc): Collector
function collectors_join(delimiter: string): Collector
function collectors_filter(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, pred: Predicate, downstream: Collector): Collector
function collectors_tee(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, downstreams: Collector[], merger: TeeMergeFunc): Collector
function collectors_map(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, mapper: MapFunc, downstream: Collector): Collector
function collectors_wrap(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, collector: Collector): Collector
function compares_reverse(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, cmp: GLib.CompareDataFunc | null): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
function compares_join(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, cmp: GLib.CompareDataFunc, cmp2: GLib.CompareDataFunc): [ /* returnType */ GLib.CompareDataFunc, /* result_target */ object | null, /* result_target_destroy_notify */ GLib.DestroyNotify ]
function overflow_int_add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int_sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int_mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_long_add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_long_sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_long_mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int32_add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int32_sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int32_mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int64_add(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int64_sub(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function overflow_int64_mul(a: number, b: number): [ /* returnType */ boolean, /* result */ number ]
function parallel_sort(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], compare: GLib.CompareDataFunc | null): Future
function task(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): Future
function run(func: VoidTaskFunc): Future
function blocking(func: VoidTaskFunc): void
function blocking_get(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): object | null
function join(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, left: TaskFunc): [ /* returnType */ object[], /* result_length1 */ number ]
function atomic_int64_get(atomic: number): [ /* returnType */ number, /* atomic */ number ]
function atomic_int64_set(atomic: number, newval: number): /* atomic */ number
function atomic_int64_inc(atomic: number): /* atomic */ number
function atomic_int64_dec_and_test(atomic: number): [ /* returnType */ boolean, /* atomic */ number ]
function atomic_int64_compare_and_exchange(atomic: number, oldval: number, newval: number): [ /* returnType */ boolean, /* atomic */ number ]
function atomic_int64_add(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomic_int64_and(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomic_int64_or(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
function atomic_int64_xor(atomic: number, val: number): [ /* returnType */ number, /* atomic */ number ]
interface CombineFunc {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, a: object | null, b: object | null): object | null
}
interface EachChunkFunc {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, chunk: object[]): boolean
}
interface FlatMapFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): Gee.Iterator
}
interface FoldFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null, a: object | null): object | null
}
interface Func {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): void
}
interface MapFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): object | null
}
interface Predicate {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, g: object | null): boolean
}
interface SupplyFunc {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): object | null
}
interface TaskFunc {
    (g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): object | null
}
interface TeeMergeFunc {
    (a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, results: GObject.Object[]): object | null
}
interface VoidFunc {
    (): void
}
interface VoidTaskFunc {
    (): void
}
interface Channel_ConstructProps extends Sender_ConstructProps {
}
class Channel {
    /* Properties of Gpseq-1.0.Gpseq.ChannelBase */
    readonly capacity: Optional
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Sender */
    send(data?: object | null): Result
    send_until(data: object | null, end_time: number): Result
    try_send(data?: object | null): Result
    /* Methods of Gpseq-1.0.Gpseq.ChannelBase */
    get_capacity(): Optional
    get_length(): number
    get_is_full(): boolean
    get_is_empty(): boolean
    close(): void
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
    /* Methods of Gpseq-1.0.Gpseq.Receiver */
    recv(): Result
    recv_until(end_time: number): Result
    try_recv(): Result
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    first_match(pred: Gee.Predicate): object | null
    any_match(pred: Gee.Predicate): boolean
    all_match(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    get_element_type(): GObject.Type
    /* Virtual methods of Gpseq-1.0.Gpseq.Channel */
    vfunc_send(data?: object | null): Result
    vfunc_send_until(data: object | null, end_time: number): Result
    vfunc_try_send(data?: object | null): Result
    vfunc_recv(): Result
    vfunc_recv_until(end_time: number): Result
    vfunc_try_recv(): Result
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    /* Virtual methods of Gpseq-1.0.Gpseq.Sender */
    vfunc_send(data?: object | null): Result
    vfunc_send_until(data: object | null, end_time: number): Result
    vfunc_try_send(data?: object | null): Result
    vfunc_get_capacity(): Optional
    vfunc_get_length(): number
    vfunc_get_is_full(): boolean
    vfunc_get_is_empty(): boolean
    vfunc_close(): void
    /* Virtual methods of Gpseq-1.0.Gpseq.ChannelBase */
    vfunc_get_capacity(): Optional
    vfunc_get_length(): number
    vfunc_get_is_full(): boolean
    vfunc_get_is_empty(): boolean
    vfunc_close(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Channel_ConstructProps)
    _init (config?: Channel_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static bounded(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, proposed_capacity: number): Channel
    static unbounded(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Channel
    static $gtype: GObject.Type
}
interface ChannelBase_ConstructProps extends GObject.Object_ConstructProps {
}
class ChannelBase {
    /* Properties of Gpseq-1.0.Gpseq.ChannelBase */
    readonly capacity: Optional
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.ChannelBase */
    get_capacity(): Optional
    get_length(): number
    get_is_full(): boolean
    get_is_empty(): boolean
    close(): void
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
    /* Virtual methods of Gpseq-1.0.Gpseq.ChannelBase */
    vfunc_get_capacity(): Optional
    vfunc_get_length(): number
    vfunc_get_is_full(): boolean
    vfunc_get_is_empty(): boolean
    vfunc_close(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: ChannelBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChannelBase_ConstructProps)
    _init (config?: ChannelBase_ConstructProps): void
    static $gtype: GObject.Type
}
interface Collector_ConstructProps extends GObject.Object_ConstructProps {
}
class Collector {
    /* Properties of Gpseq-1.0.Gpseq.Collector */
    readonly features: CollectorFeatures
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Collector */
    get_features(): CollectorFeatures
    create_accumulator(): object | null
    accumulate(g?: object | null, a?: object | null): void
    combine(a?: object | null, b?: object | null): object | null
    finish(a?: object | null): object | null
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
    /* Virtual methods of Gpseq-1.0.Gpseq.Collector */
    vfunc_get_features(): CollectorFeatures
    vfunc_create_accumulator(): object | null
    vfunc_accumulate(g?: object | null, a?: object | null): void
    vfunc_combine(a?: object | null, b?: object | null): object | null
    vfunc_finish(a?: object | null): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::features", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Collector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Collector_ConstructProps)
    _init (config?: Collector_ConstructProps): void
    static $gtype: GObject.Type
}
interface Executor_ConstructProps extends GObject.Object_ConstructProps {
}
class Executor {
    /* Properties of Gpseq-1.0.Gpseq.Executor */
    readonly parallels: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Executor */
    submit(task: Task): void
    get_parallels(): number
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
    /* Virtual methods of Gpseq-1.0.Gpseq.Executor */
    vfunc_submit(task: Task): void
    vfunc_get_parallels(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parallels", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallels", callback: (($obj: Executor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Executor_ConstructProps)
    _init (config?: Executor_ConstructProps): void
    static $gtype: GObject.Type
}
interface Receiver_ConstructProps extends ChannelBase_ConstructProps {
}
class Receiver {
    /* Properties of Gpseq-1.0.Gpseq.ChannelBase */
    readonly capacity: Optional
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Receiver */
    recv(): Result
    recv_until(end_time: number): Result
    try_recv(): Result
    /* Methods of Gpseq-1.0.Gpseq.ChannelBase */
    get_capacity(): Optional
    get_length(): number
    get_is_full(): boolean
    get_is_empty(): boolean
    close(): void
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
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    first_match(pred: Gee.Predicate): object | null
    any_match(pred: Gee.Predicate): boolean
    all_match(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    get_element_type(): GObject.Type
    /* Virtual methods of Gpseq-1.0.Gpseq.Receiver */
    vfunc_recv(): Result
    vfunc_recv_until(end_time: number): Result
    vfunc_try_recv(): Result
    vfunc_get_capacity(): Optional
    vfunc_get_length(): number
    vfunc_get_is_full(): boolean
    vfunc_get_is_empty(): boolean
    vfunc_close(): void
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    /* Virtual methods of Gpseq-1.0.Gpseq.ChannelBase */
    vfunc_get_capacity(): Optional
    vfunc_get_length(): number
    vfunc_get_is_full(): boolean
    vfunc_get_is_empty(): boolean
    vfunc_close(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Receiver, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Receiver_ConstructProps)
    _init (config?: Receiver_ConstructProps): void
    static $gtype: GObject.Type
}
interface Result_ConstructProps extends Gee.Hashable_ConstructProps {
}
class Result {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Result */
    get_value_type(): GObject.Type
    get_value(): object | null
    get_exception(): GLib.Error | null
    get_is_err(): boolean
    ok(): Result
    ok_with(expected: object | null, equal: Gee.EqualDataFunc | null): Result
    future(): Future
    get(): object | null
    transform(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    map_err(func: any): Result
    zip(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Result): Result
    then(func: GLib.Func): Result
    and_then(func: Func): Result
    /* Methods of Gee-0.8.Gee.Hashable */
    hash(): number
    equal_to(object?: object | null): boolean
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
    /* Virtual methods of Gpseq-1.0.Gpseq.Result */
    vfunc_future(): Future
    vfunc_get(): object | null
    vfunc_transform(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_map_err(func: any): Result
    vfunc_zip(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Result): Result
    vfunc_then(func: GLib.Func): Result
    vfunc_and_then(func: Func): Result
    vfunc_hash(): number
    vfunc_equal_to(object?: object | null): boolean
    /* Virtual methods of Gee-0.8.Gee.Hashable */
    vfunc_hash(): number
    vfunc_equal_to(object?: object | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Result, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Result_ConstructProps)
    _init (config?: Result_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static of(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, value?: object | null): Result
    static err(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, exception: GLib.Error): Result
    static $gtype: GObject.Type
}
interface Sender_ConstructProps extends ChannelBase_ConstructProps {
}
class Sender {
    /* Properties of Gpseq-1.0.Gpseq.ChannelBase */
    readonly capacity: Optional
    readonly length: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Sender */
    send(data?: object | null): Result
    send_until(data: object | null, end_time: number): Result
    try_send(data?: object | null): Result
    /* Methods of Gpseq-1.0.Gpseq.ChannelBase */
    get_capacity(): Optional
    get_length(): number
    get_is_full(): boolean
    get_is_empty(): boolean
    close(): void
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
    /* Virtual methods of Gpseq-1.0.Gpseq.Sender */
    vfunc_send(data?: object | null): Result
    vfunc_send_until(data: object | null, end_time: number): Result
    vfunc_try_send(data?: object | null): Result
    vfunc_get_capacity(): Optional
    vfunc_get_length(): number
    vfunc_get_is_full(): boolean
    vfunc_get_is_empty(): boolean
    vfunc_close(): void
    /* Virtual methods of Gpseq-1.0.Gpseq.ChannelBase */
    vfunc_get_capacity(): Optional
    vfunc_get_length(): number
    vfunc_get_is_full(): boolean
    vfunc_get_is_empty(): boolean
    vfunc_close(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::capacity", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::length", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Sender, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Sender_ConstructProps)
    _init (config?: Sender_ConstructProps): void
    static $gtype: GObject.Type
}
interface Spliterator_ConstructProps extends GObject.Object_ConstructProps {
}
class Spliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimated_size: number
    readonly is_size_known: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    get_element_type(): GObject.Type
    try_split(): Spliterator | null
    try_advance(consumer: Func): boolean
    get_estimated_size(): number
    get_is_size_known(): boolean
    each(f: Func): void
    each_chunk(f: EachChunkFunc): boolean
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
    /* Virtual methods of Gpseq-1.0.Gpseq.Spliterator */
    vfunc_try_split(): Spliterator | null
    vfunc_try_advance(consumer: Func): boolean
    vfunc_get_estimated_size(): number
    vfunc_get_is_size_known(): boolean
    vfunc_each(f: Func): void
    vfunc_each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-size-known", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: Spliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Spliterator_ConstructProps)
    _init (config?: Spliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
interface Supplier_ConstructProps extends GObject.Object_ConstructProps {
}
class Supplier {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Supplier */
    supply(): object | null
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
    /* Virtual methods of Gpseq-1.0.Gpseq.Supplier */
    vfunc_supply(): object | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Supplier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Supplier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Supplier_ConstructProps)
    _init (config?: Supplier_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static from_func(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: SupplyFunc): Supplier
    static $gtype: GObject.Type
}
interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
class Task {
    /* Properties of Gpseq-1.0.Gpseq.Task */
    readonly future: Future
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Task */
    get_future(): Future
    compute(): void
    invoke(): void
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
    /* Virtual methods of Gpseq-1.0.Gpseq.Task */
    vfunc_get_future(): Future
    vfunc_compute(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::future", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    static $gtype: GObject.Type
}
interface ThreadFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class ThreadFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.ThreadFactory */
    create_thread(pool: WorkerPool): WorkerThread
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
    /* Virtual methods of Gpseq-1.0.Gpseq.ThreadFactory */
    vfunc_create_thread(pool: WorkerPool): WorkerThread
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ThreadFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ThreadFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ThreadFactory_ConstructProps)
    _init (config?: ThreadFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface ArraySpliterator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.ArraySpliterator */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class ArraySpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimated_size: number
    readonly is_size_known: boolean
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    get_element_type(): GObject.Type
    try_split(): Spliterator | null
    try_advance(consumer: Func): boolean
    get_estimated_size(): number
    get_is_size_known(): boolean
    each(f: Func): void
    each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of Gpseq-1.0.Gpseq.ArraySpliterator */
    vfunc_try_split(): Spliterator | null
    vfunc_try_advance(consumer: Func): boolean
    vfunc_get_estimated_size(): number
    vfunc_get_is_size_known(): boolean
    vfunc_each(f: Func): void
    vfunc_each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-size-known", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: ArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ArraySpliterator_ConstructProps)
    _init (config?: ArraySpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], start: number, stop: number): ArraySpliterator
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
interface ForkJoinTask_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.ForkJoinTask */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
    depth?: number
}
class ForkJoinTask {
    /* Properties of Gpseq-1.0.Gpseq.ForkJoinTask */
    readonly parent: ForkJoinTask
    readonly root: ForkJoinTask
    readonly is_root: boolean
    readonly threshold: number
    readonly max_depth: number
    depth: number
    readonly executor: Executor
    readonly promise: Promise
    readonly shared_result: ForkJoinTaskSharedResult
    readonly is_cancelled: boolean
    /* Properties of Gpseq-1.0.Gpseq.Task */
    readonly future: Future
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.ForkJoinTask */
    get_parent(): ForkJoinTask | null
    get_root(): ForkJoinTask
    get_is_root(): boolean
    get_threshold(): number
    get_max_depth(): number
    get_depth(): number
    set_depth(value: number): void
    get_executor(): Executor
    get_promise(): Promise
    join(): object | null
    fork(): void
    get_shared_result(): ForkJoinTaskSharedResult
    cancel(): void
    get_is_cancelled(): boolean
    compute(): void
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
    /* Methods of Gpseq-1.0.Gpseq.Task */
    get_future(): Future
    invoke(): void
    /* Virtual methods of Gpseq-1.0.Gpseq.ForkJoinTask */
    vfunc_compute(): void
    vfunc_get_future(): Future
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::parent", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-root", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::threshold", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threshold", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::executor", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::promise", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::promise", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-result", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-result", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::future", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: ForkJoinTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ForkJoinTask_ConstructProps)
    _init (config?: ForkJoinTask_ConstructProps): void
    static $gtype: GObject.Type
}
class ForkJoinTaskSharedResult {
    /* Methods of Gpseq-1.0.Gpseq.ForkJoinTaskSharedResult */
    get_ready(): boolean
    get_value(): object | null
    set_value(value?: object | null): void
    get_error(): GLib.Error | null
    set_error(value?: GLib.Error | null): void
    bake_promise(promise: Promise): void
    static name: string
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): ForkJoinTaskSharedResult
    constructor(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): ForkJoinTaskSharedResult
}
interface FuncTask_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.FuncTask */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class FuncTask {
    /* Properties of Gpseq-1.0.Gpseq.Task */
    readonly future: Future
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
    /* Methods of Gpseq-1.0.Gpseq.Task */
    get_future(): Future
    compute(): void
    invoke(): void
    /* Virtual methods of Gpseq-1.0.Gpseq.FuncTask */
    vfunc_get_future(): Future
    vfunc_compute(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::future", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::future", callback: (($obj: FuncTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FuncTask_ConstructProps)
    _init (config?: FuncTask_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): FuncTask
    static $gtype: GObject.Type
}
interface Future_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.Future */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class Future {
    /* Properties of Gpseq-1.0.Gpseq.Future */
    readonly ready: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Future */
    get_ready(): boolean
    wait(): object | null
    wait_until(end_time: number): [ /* returnType */ boolean, /* value */ object | null ]
    transform(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
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
    /* Methods of Gee-0.8.Gee.Hashable */
    hash(): number
    equal_to(object?: object | null): boolean
    /* Methods of Gpseq-1.0.Gpseq.Result */
    get_value_type(): GObject.Type
    get_value(): object | null
    get_exception(): GLib.Error | null
    get_is_err(): boolean
    ok(): Result
    ok_with(expected: object | null, equal: Gee.EqualDataFunc | null): Result
    future(): Future
    get(): object | null
    transform(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    map_err(func: any): Result
    zip(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Result): Result
    then(func: GLib.Func): Result
    and_then(func: Func): Result
    /* Virtual methods of Gpseq-1.0.Gpseq.Future */
    vfunc_get_ready(): boolean
    vfunc_wait(): object | null
    vfunc_wait_until(end_time: number): [ /* returnType */ boolean, /* value */ object | null ]
    vfunc_transform(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    /* Function overloads */
    vfunc_transform(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_hash(): number
    vfunc_equal_to(object?: object | null): boolean
    vfunc_future(): Future
    vfunc_get(): object | null
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any): Result
    vfunc_map_err(func: any): Result
    vfunc_zip(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Result): Result
    vfunc_then(func: GLib.Func): Result
    vfunc_and_then(func: Func): Result
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: Future, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Future_ConstructProps)
    _init (config?: Future_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static of(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, value?: object | null): Future
    /* Function overloads */
    static of(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, value?: object | null): Result
    static err(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, exception: GLib.Error): Future
    /* Function overloads */
    static err(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, exception: GLib.Error): Result
    static done(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, result: Result): Future
    static $gtype: GObject.Type
}
interface GenericArraySpliterator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.GenericArraySpliterator */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class GenericArraySpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimated_size: number
    readonly is_size_known: boolean
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    get_element_type(): GObject.Type
    try_split(): Spliterator | null
    try_advance(consumer: Func): boolean
    get_estimated_size(): number
    get_is_size_known(): boolean
    each(f: Func): void
    each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of Gpseq-1.0.Gpseq.GenericArraySpliterator */
    vfunc_try_split(): Spliterator | null
    vfunc_try_advance(consumer: Func): boolean
    vfunc_get_estimated_size(): number
    vfunc_get_is_size_known(): boolean
    vfunc_each(f: Func): void
    vfunc_each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-size-known", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: GenericArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GenericArraySpliterator_ConstructProps)
    _init (config?: GenericArraySpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], start: number, stop: number): GenericArraySpliterator
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
interface IteratorSpliterator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.IteratorSpliterator */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class IteratorSpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimated_size: number
    readonly is_size_known: boolean
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    get_element_type(): GObject.Type
    try_split(): Spliterator | null
    try_advance(consumer: Func): boolean
    get_estimated_size(): number
    get_is_size_known(): boolean
    each(f: Func): void
    each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of Gpseq-1.0.Gpseq.IteratorSpliterator */
    vfunc_try_split(): Spliterator | null
    vfunc_try_advance(consumer: Func): boolean
    vfunc_get_estimated_size(): number
    vfunc_get_is_size_known(): boolean
    vfunc_each(f: Func): void
    vfunc_each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-size-known", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: IteratorSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IteratorSpliterator_ConstructProps)
    _init (config?: IteratorSpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iterator: Gee.Iterator, estimated_size: number, size_known: boolean): IteratorSpliterator
    static from_collection(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, collection: Gee.Collection): IteratorSpliterator
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
interface ListSpliterator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.ListSpliterator */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class ListSpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimated_size: number
    readonly is_size_known: boolean
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    get_element_type(): GObject.Type
    try_split(): Spliterator | null
    try_advance(consumer: Func): boolean
    get_estimated_size(): number
    get_is_size_known(): boolean
    each(f: Func): void
    each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of Gpseq-1.0.Gpseq.ListSpliterator */
    vfunc_try_split(): Spliterator | null
    vfunc_try_advance(consumer: Func): boolean
    vfunc_get_estimated_size(): number
    vfunc_get_is_size_known(): boolean
    vfunc_each(f: Func): void
    vfunc_each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-size-known", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: ListSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ListSpliterator_ConstructProps)
    _init (config?: ListSpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, list: Gee.List, start: number, stop: number): ListSpliterator
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
interface Optional_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.Optional */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class Optional {
    /* Properties of Gpseq-1.0.Gpseq.Optional */
    readonly value_type: GObject.Type
    readonly value: object
    readonly is_present: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Optional */
    get_value_type(): GObject.Type
    get_value(): object | null
    get_is_present(): boolean
    to_string(): string
    if_present(consumer: GLib.Func): void
    or_else(other?: object | null): object | null
    or_else_get(supplier: SupplyFunc): object | null
    or_else_throw(error_supplier?: SupplyFunc | null): object | null
    or_else_fail(): object | null
    filter(pred: Gee.Predicate): Optional
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, mapper: Gee.MapFunc): Optional
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
    connect(sigName: "notify", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value-type", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-present", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-present", callback: (($obj: Optional, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Optional_ConstructProps)
    _init (config?: Optional_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Optional
    static of(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, value?: object | null): Optional
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Optional
    static $gtype: GObject.Type
}
class Promise {
    /* Methods of Gpseq-1.0.Gpseq.Promise */
    get_future(): Future
    set_value(value?: object | null): void
    set_exception(exception: GLib.Error): void
    static name: string
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Promise
    constructor(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Promise
}
interface Seq_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.Seq */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class Seq {
    /* Properties of Gpseq-1.0.Gpseq.Seq */
    readonly element_type: GObject.Type
    readonly task_env: TaskEnv
    readonly is_closed: boolean
    readonly is_parallel: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Seq */
    get_element_type(): GObject.Type
    get_task_env(): TaskEnv
    get_is_closed(): boolean
    close(): void
    get_is_parallel(): boolean
    sequential(): Seq
    parallel(): Seq
    iterator(): Gee.Iterator
    spliterator(): Spliterator
    count(): Future
    distinct(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Seq
    all_match(pred: Predicate): Future
    any_match(pred: Predicate): Future
    none_match(pred: Predicate): Future
    find_any(pred: Predicate): Future
    find_first(pred: Predicate): Future
    skip(n: number): Seq
    limit(n: number): Seq
    chop(offset: number, length: number): Seq
    skip_ordered(n: number): Seq
    limit_ordered(n: number): Seq
    chop_ordered(offset: number, length: number): Seq
    filter(pred: Predicate): Seq
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, accumulator: FoldFunc, combiner: CombineFunc, identity?: object | null): Future
    reduce(accumulator: CombineFunc): Future
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, mapper: MapFunc): Seq
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, mapper: FlatMapFunc): Seq
    max(compare: GLib.CompareDataFunc | null): Future
    min(compare: GLib.CompareDataFunc | null): Future
    order_by(compare: GLib.CompareDataFunc | null): Seq
    reverse_order_by(compare: GLib.CompareDataFunc | null): Seq
    foreach(f: Func): Future
    collect(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, collector: Collector): Future
    collect_ordered(r_type: GObject.Type, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, collector: Collector): Future
    group_by(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, classifier: MapFunc): Future
    partition(pred: Predicate): Future
    to_generic_array(): Future
    to_list(): Future
    to_set(hash: Gee.HashDataFunc | null, equal: Gee.EqualDataFunc | null): Future
    to_map(k_type: GObject.Type, k_dup_func: GObject.BoxedCopyFunc, k_destroy_func: GLib.DestroyNotify, v_type: GObject.Type, v_dup_func: GObject.BoxedCopyFunc, v_destroy_func: GLib.DestroyNotify, key_mapper: MapFunc, val_mapper: MapFunc, merger: CombineFunc | null, key_hash: Gee.HashDataFunc | null, key_equal: Gee.EqualDataFunc | null, value_equal: Gee.EqualDataFunc | null): Future
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
    connect(sigName: "notify", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::element-type", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::element-type", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::task-env", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::task-env", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-closed", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-closed", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-parallel", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-parallel", callback: (($obj: Seq, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Seq_ConstructProps)
    _init (config?: Seq_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, spliterator: Spliterator, env?: TaskEnv | null): Seq
    static of_array(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static of_owned_array(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static of_generic_array(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: object[], env?: TaskEnv | null): Seq
    static of_iterator(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, iterator: Gee.Iterator, estimated_size: number, size_known: boolean, env?: TaskEnv | null): Seq
    static of_collection(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, collection: Gee.Collection, env?: TaskEnv | null): Seq
    static of_list(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, list: Gee.List, env?: TaskEnv | null): Seq
    static of_supplier(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, supplier: Supplier, env?: TaskEnv | null): Seq
    static of_supply_func(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: SupplyFunc, env?: TaskEnv | null): Seq
    static iterate(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, seed: object | null, pred: Gee.Predicate, next: Gee.MapFunc, env?: TaskEnv | null): Seq
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Seq
    static $gtype: GObject.Type
}
interface SpliteratorTask_ConstructProps extends ForkJoinTask_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.SpliteratorTask */
    r_type?: GObject.Type
    r_dup_func?: GObject.BoxedCopyFunc
    r_destroy_func?: GLib.DestroyNotify
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class SpliteratorTask {
    /* Properties of Gpseq-1.0.Gpseq.SpliteratorTask */
    readonly spliterator: Spliterator
    readonly left_child: SpliteratorTask
    readonly right_child: SpliteratorTask
    readonly is_leaf: boolean
    readonly is_leftmost: boolean
    readonly empty_result: object
    /* Properties of Gpseq-1.0.Gpseq.ForkJoinTask */
    readonly parent: ForkJoinTask
    readonly root: ForkJoinTask
    readonly is_root: boolean
    readonly threshold: number
    readonly max_depth: number
    depth: number
    readonly executor: Executor
    readonly promise: Promise
    readonly shared_result: ForkJoinTaskSharedResult
    readonly is_cancelled: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.SpliteratorTask */
    get_spliterator(): Spliterator
    get_left_child(): SpliteratorTask | null
    get_right_child(): SpliteratorTask | null
    get_is_leaf(): boolean
    get_is_leftmost(): boolean
    cancel_later_nodes(): void
    get_empty_result(): object | null
    leaf_compute(): object | null
    merge_results(left?: object | null, right?: object | null): object | null
    make_child(spliterator: Spliterator): SpliteratorTask
    /* Methods of Gpseq-1.0.Gpseq.ForkJoinTask */
    get_parent(): ForkJoinTask | null
    get_root(): ForkJoinTask
    get_is_root(): boolean
    get_threshold(): number
    get_max_depth(): number
    get_depth(): number
    set_depth(value: number): void
    get_executor(): Executor
    get_promise(): Promise
    join(): object | null
    fork(): void
    get_shared_result(): ForkJoinTaskSharedResult
    cancel(): void
    get_is_cancelled(): boolean
    compute(): void
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
    /* Virtual methods of Gpseq-1.0.Gpseq.SpliteratorTask */
    vfunc_get_empty_result(): object | null
    vfunc_leaf_compute(): object | null
    vfunc_merge_results(left?: object | null, right?: object | null): object | null
    vfunc_make_child(spliterator: Spliterator): SpliteratorTask
    /* Virtual methods of Gpseq-1.0.Gpseq.ForkJoinTask */
    vfunc_compute(): void
    vfunc_get_future(): Future
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::spliterator", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spliterator", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::left-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::right-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-child", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-leaf", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-leaf", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-leftmost", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-leftmost", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::empty-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-root", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::threshold", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::threshold", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::executor", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::promise", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::promise", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-result", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-cancelled", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-cancelled", callback: (($obj: SpliteratorTask, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SpliteratorTask_ConstructProps)
    _init (config?: SpliteratorTask_ConstructProps): void
    static $gtype: GObject.Type
}
interface SubArray_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.SubArray */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class SubArray {
    /* Properties of Gpseq-1.0.Gpseq.SubArray */
    readonly size: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.SubArray */
    get_data(): object[]
    get_size(): number
    get(index: number): object | null
    set(index: number, item?: object | null): void
    sort(compare_func: GLib.CompareDataFunc | null): void
    copy(start: number, src: SubArray, src_start: number, count: number): void
    copy_array(start: number, src: object[], src_start: number, count: number): void
    sub_array(start: number, stop: number): SubArray
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
    /* Methods of Gee-0.8.Gee.Traversable */
    foreach(f: Gee.ForallFunc): boolean
    stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    filter(pred: Gee.Predicate): Gee.Iterator
    chop(offset: number, length: number): Gee.Iterator
    flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    tee(forks: number): Gee.Iterator[]
    first_match(pred: Gee.Predicate): object | null
    any_match(pred: Gee.Predicate): boolean
    all_match(pred: Gee.Predicate): boolean
    max(compare: GLib.CompareDataFunc): object | null
    min(compare: GLib.CompareDataFunc): object | null
    order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    get_element_type(): GObject.Type
    /* Methods of Gee-0.8.Gee.Iterable */
    iterator(): Gee.Iterator
    /* Virtual methods of Gpseq-1.0.Gpseq.SubArray */
    vfunc_foreach(f: Gee.ForallFunc): boolean
    vfunc_stream(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    vfunc_fold(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): object | null
    vfunc_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.MapFunc): Gee.Iterator
    vfunc_scan(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FoldFunc, seed?: object | null): Gee.Iterator
    vfunc_filter(pred: Gee.Predicate): Gee.Iterator
    vfunc_chop(offset: number, length: number): Gee.Iterator
    vfunc_flat_map(a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, f: Gee.FlatMapFunc): Gee.Iterator
    vfunc_tee(forks: number): Gee.Iterator[]
    vfunc_first_match(pred: Gee.Predicate): object | null
    vfunc_any_match(pred: Gee.Predicate): boolean
    vfunc_all_match(pred: Gee.Predicate): boolean
    vfunc_max(compare: GLib.CompareDataFunc): object | null
    vfunc_min(compare: GLib.CompareDataFunc): object | null
    vfunc_order_by(compare: GLib.CompareDataFunc | null): Gee.Iterator
    vfunc_get_element_type(): GObject.Type
    vfunc_iterator(): Gee.Iterator
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::size", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: SubArray, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubArray_ConstructProps)
    _init (config?: SubArray_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, data: object[]): SubArray
    static from_sub_array(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArray
    static $gtype: GObject.Type
}
interface SubArraySpliterator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.SubArraySpliterator */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class SubArraySpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimated_size: number
    readonly is_size_known: boolean
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    get_element_type(): GObject.Type
    try_split(): Spliterator | null
    try_advance(consumer: Func): boolean
    get_estimated_size(): number
    get_is_size_known(): boolean
    each(f: Func): void
    each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of Gpseq-1.0.Gpseq.SubArraySpliterator */
    vfunc_try_split(): Spliterator | null
    vfunc_try_advance(consumer: Func): boolean
    vfunc_get_estimated_size(): number
    vfunc_get_is_size_known(): boolean
    vfunc_each(f: Func): void
    vfunc_each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-size-known", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: SubArraySpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SubArraySpliterator_ConstructProps)
    _init (config?: SubArraySpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, array: SubArray, start: number, stop: number): SubArraySpliterator
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
interface SupplierSpliterator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.SupplierSpliterator */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class SupplierSpliterator {
    /* Properties of Gpseq-1.0.Gpseq.Spliterator */
    readonly estimated_size: number
    readonly is_size_known: boolean
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
    /* Methods of Gpseq-1.0.Gpseq.Spliterator */
    get_element_type(): GObject.Type
    try_split(): Spliterator | null
    try_advance(consumer: Func): boolean
    get_estimated_size(): number
    get_is_size_known(): boolean
    each(f: Func): void
    each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of Gpseq-1.0.Gpseq.SupplierSpliterator */
    vfunc_try_split(): Spliterator | null
    vfunc_try_advance(consumer: Func): boolean
    vfunc_get_estimated_size(): number
    vfunc_get_is_size_known(): boolean
    vfunc_each(f: Func): void
    vfunc_each_chunk(f: EachChunkFunc): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::estimated-size", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-size", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-size-known", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-size-known", callback: (($obj: SupplierSpliterator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SupplierSpliterator_ConstructProps)
    _init (config?: SupplierSpliterator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, supplier: Supplier): SupplierSpliterator
    static empty(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): Spliterator
    static $gtype: GObject.Type
}
interface TaskEnv_ConstructProps extends GObject.Object_ConstructProps {
}
class TaskEnv {
    /* Properties of Gpseq-1.0.Gpseq.TaskEnv */
    readonly executor: Executor
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.TaskEnv */
    get_executor(): Executor
    resolve_threshold(elements: number, threads: number): number
    resolve_max_depth(elements: number, threads: number): number
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
    /* Virtual methods of Gpseq-1.0.Gpseq.TaskEnv */
    vfunc_get_executor(): Executor
    vfunc_resolve_threshold(elements: number, threads: number): number
    vfunc_resolve_max_depth(elements: number, threads: number): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::executor", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::executor", callback: (($obj: TaskEnv, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TaskEnv_ConstructProps)
    _init (config?: TaskEnv_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_default_task_env(): TaskEnv
    static set_default_task_env(task_env: TaskEnv): void
    static get_common_task_env(): TaskEnv
    static push(task_env: TaskEnv): void
    static pop(): void
    static apply(task_env: TaskEnv, func: VoidFunc): void
    static $gtype: GObject.Type
}
interface WaitGroup_ConstructProps extends GObject.Object_ConstructProps {
}
class WaitGroup {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.WaitGroup */
    add(delta: number): void
    done(): void
    task(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): Future
    run(func: VoidTaskFunc): Future
    wait(): void
    wait_until(end_time: number): boolean
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
    connect(sigName: "notify", callback: (($obj: WaitGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WaitGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WaitGroup_ConstructProps)
    _init (config?: WaitGroup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WaitGroup
    static $gtype: GObject.Type
}
interface WorkerPool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.WorkerPool */
    max_threads?: number
}
class WorkerPool {
    /* Properties of Gpseq-1.0.Gpseq.WorkerPool */
    max_threads: number
    readonly num_threads: number
    readonly factory: ThreadFactory
    readonly is_terminating: boolean
    readonly is_terminated: boolean
    readonly is_terminating_started: boolean
    /* Properties of Gpseq-1.0.Gpseq.Executor */
    readonly parallels: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.WorkerPool */
    get_max_threads(): number
    set_max_threads(value: number): void
    get_num_threads(): number
    get_factory(): ThreadFactory
    get_is_terminating(): boolean
    get_is_terminated(): boolean
    get_is_terminating_started(): boolean
    terminate(): void
    terminate_now(): void
    wait_termination(): void
    wait_termination_until(end_time: number): void
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
    /* Methods of Gpseq-1.0.Gpseq.Executor */
    submit(task: Task): void
    get_parallels(): number
    /* Virtual methods of Gpseq-1.0.Gpseq.WorkerPool */
    vfunc_submit(task: Task): void
    vfunc_get_parallels(): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-threads", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::factory", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::factory", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-terminating", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminating", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-terminated", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminated", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-terminating-started", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminating-started", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parallels", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parallels", callback: (($obj: WorkerPool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WorkerPool_ConstructProps)
    _init (config?: WorkerPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static with_defaults(): WorkerPool
    static new(parallels: number, factory: ThreadFactory): WorkerPool
    static get_default_factory(): ThreadFactory
    static $gtype: GObject.Type
}
interface WorkerThread_ConstructProps extends GObject.Object_ConstructProps {
}
class WorkerThread {
    /* Properties of Gpseq-1.0.Gpseq.WorkerThread */
    readonly thread: GLib.Thread
    readonly pool: WorkerPool
    readonly name: string
    readonly is_started: boolean
    readonly is_terminated: boolean
    readonly is_alive: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.WorkerThread */
    get_thread(): GLib.Thread | null
    get_pool(): WorkerPool
    get_name(): string
    get_is_started(): boolean
    get_is_terminated(): boolean
    get_is_alive(): boolean
    start(): void
    join(): void
    blocking(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: TaskFunc): object | null
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
    connect(sigName: "notify", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::thread", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thread", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pool", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-started", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-started", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-terminated", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-terminated", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-alive", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-alive", callback: (($obj: WorkerThread, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WorkerThread_ConstructProps)
    _init (config?: WorkerThread_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pool: WorkerPool): WorkerThread
    static get_by(thread: GLib.Thread): WorkerThread | null
    static self(): WorkerThread | null
    static $gtype: GObject.Type
}
interface Wrapper_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gpseq-1.0.Gpseq.Wrapper */
    g_type?: GObject.Type
    g_dup_func?: GObject.BoxedCopyFunc
    g_destroy_func?: GLib.DestroyNotify
}
class Wrapper {
    /* Properties of Gpseq-1.0.Gpseq.Wrapper */
    readonly value: object
    readonly value_type: GObject.Type
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gpseq-1.0.Gpseq.Wrapper */
    get_value(): object | null
    get_value_type(): GObject.Type
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
    connect(sigName: "notify", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::value", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::value-type", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value-type", callback: (($obj: Wrapper, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Wrapper_ConstructProps)
    _init (config?: Wrapper_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(g_type: GObject.Type, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, value?: object | null): Wrapper
    static $gtype: GObject.Type
}
abstract class ArraySpliteratorClass {
    static name: string
}
class ArraySpliteratorPrivate {
    static name: string
}
abstract class ForkJoinTaskClass {
    /* Fields of Gpseq-1.0.Gpseq.ForkJoinTaskClass */
    readonly compute: (self: ForkJoinTask) => void
    static name: string
}
class ForkJoinTaskPrivate {
    static name: string
}
abstract class ForkJoinTaskSharedResultClass {
    static name: string
}
class ForkJoinTaskSharedResultPrivate {
    static name: string
}
abstract class FuncTaskClass {
    static name: string
}
class FuncTaskPrivate {
    static name: string
}
abstract class FutureClass {
    /* Fields of Gpseq-1.0.Gpseq.FutureClass */
    readonly wait: (self: Future) => object | null
    readonly wait_until: (self: Future, end_time: number) => [ /* returnType */ boolean, /* value */ object | null ]
    readonly transform: (self: Future, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Result
    static name: string
}
class FuturePrivate {
    static name: string
}
abstract class GenericArraySpliteratorClass {
    static name: string
}
class GenericArraySpliteratorPrivate {
    static name: string
}
abstract class IteratorSpliteratorClass {
    static name: string
}
class IteratorSpliteratorPrivate {
    static name: string
}
abstract class ListSpliteratorClass {
    static name: string
}
class ListSpliteratorPrivate {
    static name: string
}
abstract class OptionalClass {
    static name: string
}
class OptionalPrivate {
    static name: string
}
abstract class PromiseClass {
    static name: string
}
class PromisePrivate {
    static name: string
}
abstract class SeqClass {
    static name: string
}
class SeqPrivate {
    static name: string
}
abstract class SpliteratorTaskClass {
    /* Fields of Gpseq-1.0.Gpseq.SpliteratorTaskClass */
    readonly leaf_compute: (self: SpliteratorTask) => object | null
    readonly merge_results: (self: SpliteratorTask, left?: object | null, right?: object | null) => object | null
    readonly make_child: (self: SpliteratorTask, spliterator: Spliterator) => SpliteratorTask
    static name: string
}
class SpliteratorTaskPrivate {
    static name: string
}
abstract class SubArrayClass {
    static name: string
}
class SubArrayPrivate {
    static name: string
}
abstract class SubArraySpliteratorClass {
    static name: string
}
class SubArraySpliteratorPrivate {
    static name: string
}
abstract class SupplierSpliteratorClass {
    static name: string
}
class SupplierSpliteratorPrivate {
    static name: string
}
abstract class TaskEnvClass {
    /* Fields of Gpseq-1.0.Gpseq.TaskEnvClass */
    readonly resolve_threshold: (self: TaskEnv, elements: number, threads: number) => number
    readonly resolve_max_depth: (self: TaskEnv, elements: number, threads: number) => number
    static name: string
}
class TaskEnvPrivate {
    static name: string
}
abstract class WaitGroupClass {
    static name: string
}
class WaitGroupPrivate {
    static name: string
}
abstract class WorkerPoolClass {
    static name: string
}
class WorkerPoolPrivate {
    static name: string
}
abstract class WorkerThreadClass {
    static name: string
}
class WorkerThreadPrivate {
    static name: string
}
abstract class WrapperClass {
    static name: string
}
class WrapperPrivate {
    static name: string
}
abstract class ChannelIface {
    static name: string
}
abstract class ChannelBaseIface {
    /* Fields of Gpseq-1.0.Gpseq.ChannelBaseIface */
    readonly close: (self: ChannelBase) => void
    readonly get_capacity: (self: ChannelBase) => Optional
    readonly get_length: (self: ChannelBase) => number
    readonly get_is_full: (self: ChannelBase) => boolean
    readonly get_is_empty: (self: ChannelBase) => boolean
    static name: string
}
abstract class CollectorIface {
    /* Fields of Gpseq-1.0.Gpseq.CollectorIface */
    readonly create_accumulator: (self: Collector) => object | null
    readonly accumulate: (self: Collector, g?: object | null, a?: object | null) => void
    readonly combine: (self: Collector, a?: object | null, b?: object | null) => object | null
    readonly finish: (self: Collector, a?: object | null) => object | null
    readonly get_features: (self: Collector) => CollectorFeatures
    static name: string
}
abstract class ExecutorIface {
    /* Fields of Gpseq-1.0.Gpseq.ExecutorIface */
    readonly submit: (self: Executor, task: Task) => void
    readonly get_parallels: (self: Executor) => number
    static name: string
}
abstract class ReceiverIface {
    /* Fields of Gpseq-1.0.Gpseq.ReceiverIface */
    readonly recv: (self: Receiver) => Result
    readonly recv_until: (self: Receiver, end_time: number) => Result
    readonly try_recv: (self: Receiver) => Result
    static name: string
}
abstract class ResultIface {
    /* Fields of Gpseq-1.0.Gpseq.ResultIface */
    readonly future: (self: Result) => Future
    readonly get: (self: Result) => object | null
    readonly transform: (self: Result, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Result
    readonly flat_map: (self: Result, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Result
    readonly map: (self: Result, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, func: any) => Result
    readonly map_err: (self: Result, func: any) => Result
    readonly zip: (self: Result, a_type: GObject.Type, a_dup_func: GObject.BoxedCopyFunc, a_destroy_func: GLib.DestroyNotify, b_type: GObject.Type, b_dup_func: GObject.BoxedCopyFunc, b_destroy_func: GLib.DestroyNotify, zip_func: any, second: Result) => Result
    readonly then: (self: Result, func: GLib.Func) => Result
    readonly and_then: (self: Result, func: Func) => Result
    static name: string
}
abstract class SenderIface {
    /* Fields of Gpseq-1.0.Gpseq.SenderIface */
    readonly send: (self: Sender, data?: object | null) => Result
    readonly send_until: (self: Sender, data: object | null, end_time: number) => Result
    readonly try_send: (self: Sender, data?: object | null) => Result
    static name: string
}
abstract class SpliteratorIface {
    /* Fields of Gpseq-1.0.Gpseq.SpliteratorIface */
    readonly try_split: (self: Spliterator) => Spliterator | null
    readonly try_advance: (self: Spliterator, consumer: Func) => boolean
    readonly each: (self: Spliterator, f: Func) => void
    readonly each_chunk: (self: Spliterator, f: EachChunkFunc) => boolean
    readonly get_estimated_size: (self: Spliterator) => number
    readonly get_is_size_known: (self: Spliterator) => boolean
    static name: string
}
abstract class SupplierIface {
    /* Fields of Gpseq-1.0.Gpseq.SupplierIface */
    readonly supply: (self: Supplier) => object | null
    static name: string
}
abstract class TaskIface {
    /* Fields of Gpseq-1.0.Gpseq.TaskIface */
    readonly compute: (self: Task) => void
    readonly get_future: (self: Task) => Future
    static name: string
}
abstract class ThreadFactoryIface {
    /* Fields of Gpseq-1.0.Gpseq.ThreadFactoryIface */
    readonly create_thread: (self: ThreadFactory, pool: WorkerPool) => WorkerThread
    static name: string
}
class CacheLinePad {
    static name: string
}
}
export default Gpseq;