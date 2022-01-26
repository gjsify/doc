/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoFc-1.0
 */

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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PangoFc-1.0.PangoFc.Decoder */
    getCharset(fcfont: Font): fontconfig.CharSet
    getGlyph(fcfont: Font, wc: number): Pango.Glyph
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PangoFc-1.0.PangoFc.Font */
    getGlyph(wc: number): number
    getLanguages(): Pango.Language | null
    getUnknownGlyph(wc: number): Pango.Glyph
    hasChar(wc: number): boolean
    kernGlyphs(glyphs: Pango.GlyphString): void
    unlockFace(): void
    /* Methods of Pango-1.0.Pango.Font */
    describe(): Pango.FontDescription
    describeWithAbsoluteSize(): Pango.FontDescription
    getCoverage(language: Pango.Language): Pango.Coverage
    getFace(): Pango.FontFace
    getFeatures(numFeatures: number): [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    getFontMap(): Pango.FontMap | null
    getGlyphExtents(glyph: Pango.Glyph): [ /* inkRect */ Pango.Rectangle | null, /* logicalRect */ Pango.Rectangle | null ]
    getLanguages(): Pango.Language[] | null
    getMetrics(language?: Pango.Language | null): Pango.FontMetrics
    hasChar(wc: number): boolean
    serialize(): any
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::fontmap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fontmap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fontmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fontmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fontmap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static descriptionFromPattern(pattern: fontconfig.Pattern, includeSize: boolean): Pango.FontDescription
    static $gtype: GObject.Type
}
interface FontMap_ConstructProps extends Pango.FontMap_ConstructProps {
}
class FontMap {
    /* Fields of Pango-1.0.Pango.FontMap */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of PangoFc-1.0.PangoFc.FontMap */
    cacheClear(): void
    configChanged(): void
    createContext(): Pango.Context
    findDecoder(pattern: fontconfig.Pattern): Decoder | null
    setDefaultSubstitute(func: SubstituteFunc): void
    shutdown(): void
    substituteChanged(): void
    /* Methods of Pango-1.0.Pango.FontMap */
    changed(): void
    getFamily(name: string): Pango.FontFamily
    getSerial(): number
    listFamilies(): /* families */ Pango.FontFamily[]
    loadFont(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    loadFontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
    /* Methods of GObject-2.0.GObject.Object */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    forceFloating(): void
    freezeNotify(): void
    getData(key: string): object | null
    getProperty(propertyName: string, value: any): void
    getQdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    isFloating(): boolean
    notify(propertyName: string): void
    notifyByPspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    refSink(): GObject.Object
    runDispose(): void
    setData(key: string, data?: object | null): void
    setProperty(propertyName: string, value: any): void
    stealData(key: string): object | null
    stealQdata(quark: GLib.Quark): object | null
    thawNotify(): void
    unref(): void
    watchClosure(closure: Function): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class DecoderClass {
    /* Fields of PangoFc-1.0.PangoFc.DecoderClass */
    readonly getCharset: (decoder: Decoder, fcfont: Font) => fontconfig.CharSet
    readonly getGlyph: (decoder: Decoder, fcfont: Font, wc: number) => Pango.Glyph
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