/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoXft-1.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type xft from './xft-2.0';
import type PangoOT from './PangoOT-1.0';
import type freetype2 from './freetype2-2.0';
import type PangoFc from './PangoFc-1.0';
import type fontconfig from './fontconfig-2.0';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type PangoFT2 from './PangoFT2-1.0';

export namespace PangoXft {

function get_font_map(display: xlib.Display, screen: number): Pango.FontMap
function picture_render(display: xlib.Display, src_picture: xlib.Picture, dest_picture: xlib.Picture, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
function render(draw: xft.Draw, color: xft.Color, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
function render_layout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void
function render_layout_line(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void
function render_transformed(draw: xft.Draw, color: xft.Color, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
function set_default_substitute(display: xlib.Display, screen: number, func: SubstituteFunc): void
function shutdown_display(display: xlib.Display, screen: number): void
function substitute_changed(display: xlib.Display, screen: number): void
interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data?: object | null): void
}
interface Font_ConstructProps extends PangoFc.Font_ConstructProps {
}
class Font {
    /* Fields of PangoFc-1.0.PangoFc.Font */
    readonly parent_instance: Pango.Font
    readonly font_pattern: fontconfig.Pattern
    readonly fontmap: Pango.FontMap
    readonly priv: object
    readonly matrix: Pango.Matrix
    readonly description: Pango.FontDescription
    readonly metrics_by_lang: object[]
    readonly is_hinted: number
    readonly is_transformed: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of PangoXft-1.0.PangoXft.Font */
    get_glyph(wc: number): number
    get_unknown_glyph(wc: number): Pango.Glyph
    has_char(wc: number): boolean
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    static $gtype: GObject.Type
}
interface FontMap_ConstructProps extends PangoFc.FontMap_ConstructProps {
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
    find_decoder(pattern: fontconfig.Pattern): PangoFc.Decoder | null
    set_default_substitute(func: PangoFc.SubstituteFunc): void
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
interface Renderer_ConstructProps extends Pango.Renderer_ConstructProps {
    /* Constructor properties of PangoXft-1.0.PangoXft.Renderer */
    display?: object
    screen?: number
}
class Renderer {
    /* Fields of Pango-1.0.Pango.Renderer */
    readonly matrix: Pango.Matrix
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of PangoXft-1.0.PangoXft.Renderer */
    set_default_color(default_color: Pango.Color): void
    set_draw(draw: xft.Draw): void
    /* Methods of Pango-1.0.Pango.Renderer */
    activate(): void
    deactivate(): void
    draw_error_underline(x: number, y: number, width: number, height: number): void
    draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    draw_layout(layout: Pango.Layout, x: number, y: number): void
    draw_layout_line(line: Pango.LayoutLine, x: number, y: number): void
    draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    get_alpha(part: Pango.RenderPart): number
    get_color(part: Pango.RenderPart): Pango.Color | null
    get_layout(): Pango.Layout | null
    get_layout_line(): Pango.LayoutLine | null
    get_matrix(): Pango.Matrix | null
    part_changed(part: Pango.RenderPart): void
    set_alpha(part: Pango.RenderPart, alpha: number): void
    set_color(part: Pango.RenderPart, color?: Pango.Color | null): void
    set_matrix(matrix?: Pango.Matrix | null): void
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
    /* Virtual methods of PangoXft-1.0.PangoXft.Renderer */
    vfunc_composite_glyphs(xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number): void
    vfunc_composite_trapezoids(part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number): void
    /* Virtual methods of Pango-1.0.Pango.Renderer */
    vfunc_begin(): void
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void
    vfunc_draw_glyph(font: Pango.Font, glyph: Pango.Glyph, x: number, y: number): void
    vfunc_draw_glyph_item(text: string | null, glyph_item: Pango.GlyphItem, x: number, y: number): void
    vfunc_draw_glyphs(font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
    vfunc_draw_rectangle(part: Pango.RenderPart, x: number, y: number, width: number, height: number): void
    vfunc_draw_shape(attr: Pango.AttrShape, x: number, y: number): void
    vfunc_draw_trapezoid(part: Pango.RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfunc_end(): void
    vfunc_part_changed(part: Pango.RenderPart): void
    vfunc_prepare_run(run: Pango.LayoutRun): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(display: xlib.Display, screen: number): Renderer
    static $gtype: GObject.Type
}
abstract class RendererClass {
    /* Fields of PangoXft-1.0.PangoXft.RendererClass */
    readonly composite_trapezoids: (xftrenderer: Renderer, part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number) => void
    readonly composite_glyphs: (xftrenderer: Renderer, xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number) => void
    static name: string
}
class RendererPrivate {
    static name: string
}
}
export default PangoXft;