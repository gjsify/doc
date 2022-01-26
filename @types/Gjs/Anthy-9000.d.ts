/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Anthy-9000
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Anthy {

const COMPILED_ENCODING: number
const EUC_JP_ENCODING: number
const NTH_HALFKANA_CANDIDATE: number
const NTH_HIRAGANA_CANDIDATE: number
const NTH_KATAKANA_CANDIDATE: number
const NTH_UNCONVERTED_CANDIDATE: number
const RECONVERT_ALWAYS: number
const RECONVERT_AUTO: number
const RECONVERT_DISABLE: number
const UTF8_ENCODING: number
function commit_prediction(arg0: anthy_context_t, arg1: number): number
function commit_segment(arg0: anthy_context_t, arg1: number, arg2: number): number
function conf_override(arg0: string, arg1: string): void
function context_set_encoding(ac: anthy_context_t, encoding: number): number
function get_prediction(arg0: anthy_context_t, arg1: number, arg2: string, arg3: number): number
function get_prediction_stat(arg0: anthy_context_t, arg1: object): number
function get_segment(arg0: anthy_context_t, arg1: number, arg2: number, arg3: string, arg4: number): number
function get_segment_stat(arg0: anthy_context_t, arg1: number, arg2: object): number
function get_stat(arg0: anthy_context_t, arg1: object): number
function get_version_string(): string
function init(): number
function print_context(arg0: anthy_context_t): void
function quit(): void
function release_context(arg0: anthy_context_t): void
function reset_context(arg0: anthy_context_t): void
function resize_segment(arg0: anthy_context_t, arg1: number, arg2: number): void
function set_personality(arg0: string): number
function set_prediction_string(arg0: anthy_context_t, arg1: string): number
function set_reconversion_mode(ac: anthy_context_t, mode: number): number
function set_string(arg0: anthy_context_t, arg1: string): number
interface logger {
    (level: number, arg1: string): void
}
interface GContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class GContext {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Anthy-9000.Anthy.GContext */
    commit_prediction(nth_seg: number): number
    commit_segment(nth_seg: number, nth_lookup: number): number
    do_set_personality(dict_name: string): number
    get_nr_candidates(nth_seg: number): number
    get_nr_predictions(): number
    get_nr_segments(): number
    get_prediction(nth_seg: number): string
    get_segment(nth_seg: number, nth_lookup: number): string
    init_personality(): void
    resize_segment(nth: number, resize: number): void
    set_encoding(encoding: number): number
    set_prediction_string(string: string): number
    set_string(string: string): number
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
    connect(sigName: "notify", callback: (($obj: GContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GContext_ConstructProps)
    _init (config?: GContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GContext
    static $gtype: GObject.Type
}
abstract class GContextClass {
    /* Fields of Anthy-9000.Anthy.GContextClass */
    readonly parent: GObject.InitiallyUnownedClass
    static name: string
}
class GContextPrivate {
    static name: string
}
class anthy_context_t {
    static name: string
}
class anthy_conv_stat {
    /* Fields of Anthy-9000.Anthy.anthy_conv_stat */
    readonly nr_segment: number
    static name: string
}
class anthy_prediction_stat {
    /* Fields of Anthy-9000.Anthy.anthy_prediction_stat */
    readonly nr_prediction: number
    static name: string
}
class anthy_segment_stat {
    /* Fields of Anthy-9000.Anthy.anthy_segment_stat */
    readonly nr_candidate: number
    readonly seg_len: number
    static name: string
}
}
export default Anthy;