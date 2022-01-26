/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoFc-1.0
 */

import type * as Gjs from './Gjs';
import type fontconfig from './fontconfig-2.0';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PangoFc {

const FONT_FEATURES: string
const FONT_VARIATIONS: string
const GRAVITY: string
const PRGNAME: string
const VERSION: string
interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data?: object | null): void
}
interface Decoder_ConstructProps extends GObject.Object_ConstructProps {
}
class Decoder {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of PangoFc-1.0.PangoFc.Decoder */
    get_charset(fcfont: Font): fontconfig.CharSet
    get_glyph(fcfont: Font, wc: number): Pango.Glyph
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
    /* Virtual methods of PangoFc-1.0.PangoFc.Decoder */
    vfunc_get_charset(fcfont: Font): fontconfig.CharSet
    vfunc_get_glyph(fcfont: Font, wc: number): Pango.Glyph
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decoder_ConstructProps)
    _init (config?: Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface Font_ConstructProps extends Pango.Font_ConstructProps {
    /* Constructor properties of PangoFc-1.0.PangoFc.Font */
    fontmap?: FontMap
    pattern?: object
}
class Font {
    /* Properties of PangoFc-1.0.PangoFc.Font */
    fontmap: FontMap
    /* Fields of Pango-1.0.Pango.Font */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of PangoFc-1.0.PangoFc.Font */
    get_glyph(wc: number): number
    get_languages(): Pango.Language | null
    get_unknown_glyph(wc: number): Pango.Glyph
    has_char(wc: number): boolean
    kern_glyphs(glyphs: Pango.GlyphString): void
    unlock_face(): void
    /* Methods of Pango-1.0.Pango.Font */
    describe(): Pango.FontDescription
    describe_with_absolute_size(): Pango.FontDescription
    get_coverage(language: Pango.Language): Pango.Coverage
    get_face(): Pango.FontFace
    get_features(num_features: number): [ /* features */ HarfBuzz.feature_t[], /* num_features */ number ]
    get_font_map(): Pango.FontMap | null
    get_glyph_extents(glyph: Pango.Glyph): [ /* ink_rect */ Pango.Rectangle | null, /* logical_rect */ Pango.Rectangle | null ]
    get_languages(): Pango.Language[] | null
    get_metrics(language?: Pango.Language | null): Pango.FontMetrics
    has_char(wc: number): boolean
    serialize(): GLib.Bytes
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
    /* Virtual methods of Pango-1.0.Pango.Font */
    vfunc_create_hb_font(): HarfBuzz.font_t
    vfunc_describe(): Pango.FontDescription
    vfunc_describe_absolute(): Pango.FontDescription
    vfunc_get_coverage(language: Pango.Language): Pango.Coverage
    vfunc_get_features(num_features: number): [ /* features */ HarfBuzz.feature_t[], /* num_features */ number ]
    vfunc_get_font_map(): Pango.FontMap | null
    vfunc_get_glyph_extents(glyph: Pango.Glyph): [ /* ink_rect */ Pango.Rectangle | null, /* logical_rect */ Pango.Rectangle | null ]
    vfunc_get_metrics(language?: Pango.Language | null): Pango.FontMetrics
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fontmap", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fontmap", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static description_from_pattern(pattern: fontconfig.Pattern, include_size: boolean): Pango.FontDescription
    static $gtype: GObject.Type
}
interface FontMap_ConstructProps extends Pango.FontMap_ConstructProps {
}
class FontMap {
    /* Fields of Pango-1.0.Pango.FontMap */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of PangoFc-1.0.PangoFc.FontMap */
    cache_clear(): void
    config_changed(): void
    create_context(): Pango.Context
    find_decoder(pattern: fontconfig.Pattern): Decoder | null
    set_default_substitute(func: SubstituteFunc): void
    shutdown(): void
    substitute_changed(): void
    /* Methods of Pango-1.0.Pango.FontMap */
    changed(): void
    get_family(name: string): Pango.FontFamily
    get_serial(): number
    list_families(): /* families */ Pango.FontFamily[]
    load_font(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    load_fontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
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
    /* Virtual methods of Pango-1.0.Pango.FontMap */
    vfunc_changed(): void
    vfunc_get_family(name: string): Pango.FontFamily
    vfunc_get_serial(): number
    vfunc_list_families(): /* families */ Pango.FontFamily[]
    vfunc_load_font(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    vfunc_load_fontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class DecoderClass {
    /* Fields of PangoFc-1.0.PangoFc.DecoderClass */
    readonly get_charset: (decoder: Decoder, fcfont: Font) => fontconfig.CharSet
    readonly get_glyph: (decoder: Decoder, fcfont: Font, wc: number) => Pango.Glyph
    static name: string
}
abstract class FontClass {
    static name: string
}
abstract class FontMapClass {
    static name: string
}
class FontMapPrivate {
    static name: string
}
}
export default PangoFc;