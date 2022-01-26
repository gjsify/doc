/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoOT-1.0
 */

import type * as Gjs from './Gjs';
import type freetype2 from './freetype2-2.0';
import type PangoFc from './PangoFc-1.0';
import type fontconfig from './fontconfig-2.0';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PangoOT {

enum TableType {
    GSUB,
    GPOS,
}
const ALL_GLYPHS: number
const DEFAULT_LANGUAGE: number
const NO_FEATURE: number
const NO_SCRIPT: number
function tag_from_language(language?: Pango.Language | null): Tag
function tag_from_script(script: Pango.Script): Tag
function tag_to_language(language_tag: Tag): Pango.Language
function tag_to_script(script_tag: Tag): Pango.Script
interface Info_ConstructProps extends GObject.Object_ConstructProps {
}
class Info {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of PangoOT-1.0.PangoOT.Info */
    find_feature(table_type: TableType, feature_tag: Tag, script_index: number, language_index: number): [ /* returnType */ boolean, /* feature_index */ number | null ]
    find_language(table_type: TableType, script_index: number, language_tag: Tag): [ /* returnType */ boolean, /* language_index */ number | null, /* required_feature_index */ number | null ]
    find_script(table_type: TableType, script_tag: Tag): [ /* returnType */ boolean, /* script_index */ number | null ]
    list_features(table_type: TableType, tag: Tag, script_index: number, language_index: number): Tag
    list_languages(table_type: TableType, script_index: number, language_tag: Tag): Tag
    list_scripts(table_type: TableType): Tag
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
    connect(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Info_ConstructProps)
    _init (config?: Info_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get(face: freetype2.Face): Info
    static $gtype: GObject.Type
}
interface Ruleset_ConstructProps extends GObject.Object_ConstructProps {
}
class Ruleset {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of PangoOT-1.0.PangoOT.Ruleset */
    add_feature(table_type: TableType, feature_index: number, property_bit: number): void
    get_feature_count(): [ /* returnType */ number, /* n_gsub_features */ number | null, /* n_gpos_features */ number | null ]
    maybe_add_feature(table_type: TableType, feature_tag: Tag, property_bit: number): boolean
    maybe_add_features(table_type: TableType, features: FeatureMap, n_features: number): number
    position(buffer: Buffer): void
    substitute(buffer: Buffer): void
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
    connect(sigName: "notify", callback: (($obj: Ruleset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Ruleset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Ruleset_ConstructProps)
    _init (config?: Ruleset_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(info: Info): Ruleset
    static new_for(info: Info, script: Pango.Script, language: Pango.Language): Ruleset
    static new_from_description(info: Info, desc: RulesetDescription): Ruleset
    static get_for_description(info: Info, desc: RulesetDescription): Ruleset
    static $gtype: GObject.Type
}
class Buffer {
    /* Methods of PangoOT-1.0.PangoOT.Buffer */
    add_glyph(glyph: number, properties: number, cluster: number): void
    clear(): void
    destroy(): void
    get_glyphs(): /* glyphs */ Glyph[] | null
    output(glyphs: Pango.GlyphString): void
    set_rtl(rtl: boolean): void
    set_zero_width_marks(zero_width_marks: boolean): void
    static name: string
    static new(font: PangoFc.Font): Buffer
    constructor(font: PangoFc.Font)
    /* Static methods and pseudo-constructors */
    static new(font: PangoFc.Font): Buffer
}
class FeatureMap {
    /* Fields of PangoOT-1.0.PangoOT.FeatureMap */
    readonly feature_name: number[]
    readonly property_bit: number
    static name: string
}
class Glyph {
    /* Fields of PangoOT-1.0.PangoOT.Glyph */
    readonly glyph: number
    readonly properties: number
    readonly cluster: number
    readonly component: number
    readonly ligID: number
    readonly internal: number
    static name: string
}
class RulesetDescription {
    /* Fields of PangoOT-1.0.PangoOT.RulesetDescription */
    readonly script: Pango.Script
    readonly language: Pango.Language
    readonly static_gsub_features: FeatureMap
    readonly n_static_gsub_features: number
    readonly static_gpos_features: FeatureMap
    readonly n_static_gpos_features: number
    readonly other_features: FeatureMap
    readonly n_other_features: number
    /* Methods of PangoOT-1.0.PangoOT.RulesetDescription */
    copy(): RulesetDescription
    equal(desc2: RulesetDescription): boolean
    free(): void
    hash(): number
    static name: string
}
    type Tag = number
}
export default PangoOT;