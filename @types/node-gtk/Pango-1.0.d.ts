/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Pango-1.0
 */

import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Pango {

enum Alignment {
    LEFT,
    CENTER,
    RIGHT,
}
enum AttrType {
    INVALID,
    LANGUAGE,
    FAMILY,
    STYLE,
    WEIGHT,
    VARIANT,
    STRETCH,
    SIZE,
    FONT_DESC,
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
    RISE,
    SHAPE,
    SCALE,
    FALLBACK,
    LETTER_SPACING,
    UNDERLINE_COLOR,
    STRIKETHROUGH_COLOR,
    ABSOLUTE_SIZE,
    GRAVITY,
    GRAVITY_HINT,
    FONT_FEATURES,
    FOREGROUND_ALPHA,
    BACKGROUND_ALPHA,
    ALLOW_BREAKS,
    SHOW,
    INSERT_HYPHENS,
    OVERLINE,
    OVERLINE_COLOR,
    LINE_HEIGHT,
    ABSOLUTE_LINE_HEIGHT,
    TEXT_TRANSFORM,
    WORD,
    SENTENCE,
    BASELINE_SHIFT,
    FONT_SCALE,
}
enum BaselineShift {
    NONE,
    SUPERSCRIPT,
    SUBSCRIPT,
}
enum BidiType {
    L,
    LRE,
    LRO,
    R,
    AL,
    RLE,
    RLO,
    PDF,
    EN,
    ES,
    ET,
    AN,
    CS,
    NSM,
    BN,
    B,
    S,
    WS,
    ON,
    LRI,
    RLI,
    FSI,
    PDI,
}
enum CoverageLevel {
    NONE,
    FALLBACK,
    APPROXIMATE,
    EXACT,
}
enum Direction {
    LTR,
    RTL,
    TTB_LTR,
    TTB_RTL,
    WEAK_LTR,
    WEAK_RTL,
    NEUTRAL,
}
enum EllipsizeMode {
    NONE,
    START,
    MIDDLE,
    END,
}
enum FontScale {
    NONE,
    SUPERSCRIPT,
    SUBSCRIPT,
    SMALL_CAPS,
}
enum Gravity {
    SOUTH,
    EAST,
    NORTH,
    WEST,
    AUTO,
}
enum GravityHint {
    NATURAL,
    STRONG,
    LINE,
}
enum LayoutDeserializeError {
    INVALID,
    INVALID_VALUE,
    MISSING_VALUE,
}
enum Overline {
    NONE,
    SINGLE,
}
enum RenderPart {
    FOREGROUND,
    BACKGROUND,
    UNDERLINE,
    STRIKETHROUGH,
    OVERLINE,
}
enum Script {
    INVALID_CODE,
    COMMON,
    INHERITED,
    ARABIC,
    ARMENIAN,
    BENGALI,
    BOPOMOFO,
    CHEROKEE,
    COPTIC,
    CYRILLIC,
    DESERET,
    DEVANAGARI,
    ETHIOPIC,
    GEORGIAN,
    GOTHIC,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HAN,
    HANGUL,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    KHMER,
    LAO,
    LATIN,
    MALAYALAM,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    OLD_ITALIC,
    ORIYA,
    RUNIC,
    SINHALA,
    SYRIAC,
    TAMIL,
    TELUGU,
    THAANA,
    THAI,
    TIBETAN,
    CANADIAN_ABORIGINAL,
    YI,
    TAGALOG,
    HANUNOO,
    BUHID,
    TAGBANWA,
    BRAILLE,
    CYPRIOT,
    LIMBU,
    OSMANYA,
    SHAVIAN,
    LINEAR_B,
    TAI_LE,
    UGARITIC,
    NEW_TAI_LUE,
    BUGINESE,
    GLAGOLITIC,
    TIFINAGH,
    SYLOTI_NAGRI,
    OLD_PERSIAN,
    KHAROSHTHI,
    UNKNOWN,
    BALINESE,
    CUNEIFORM,
    PHOENICIAN,
    PHAGS_PA,
    NKO,
    KAYAH_LI,
    LEPCHA,
    REJANG,
    SUNDANESE,
    SAURASHTRA,
    CHAM,
    OL_CHIKI,
    VAI,
    CARIAN,
    LYCIAN,
    LYDIAN,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
}
enum Stretch {
    ULTRA_CONDENSED,
    EXTRA_CONDENSED,
    CONDENSED,
    SEMI_CONDENSED,
    NORMAL,
    SEMI_EXPANDED,
    EXPANDED,
    EXTRA_EXPANDED,
    ULTRA_EXPANDED,
}
enum Style {
    NORMAL,
    OBLIQUE,
    ITALIC,
}
enum TabAlign {
    LEFT,
    RIGHT,
    CENTER,
    DECIMAL,
}
enum TextTransform {
    NONE,
    LOWERCASE,
    UPPERCASE,
    CAPITALIZE,
}
enum Underline {
    NONE,
    SINGLE,
    DOUBLE,
    LOW,
    ERROR,
    SINGLE_LINE,
    DOUBLE_LINE,
    ERROR_LINE,
}
enum Variant {
    NORMAL,
    SMALL_CAPS,
    ALL_SMALL_CAPS,
    PETITE_CAPS,
    ALL_PETITE_CAPS,
    UNICASE,
    TITLE_CAPS,
}
enum Weight {
    THIN,
    ULTRALIGHT,
    LIGHT,
    SEMILIGHT,
    BOOK,
    NORMAL,
    MEDIUM,
    SEMIBOLD,
    BOLD,
    ULTRABOLD,
    HEAVY,
    ULTRAHEAVY,
}
enum WrapMode {
    WORD,
    CHAR,
    WORD_CHAR,
}
enum FontMask {
    FAMILY,
    STYLE,
    VARIANT,
    WEIGHT,
    STRETCH,
    SIZE,
    GRAVITY,
    VARIATIONS,
}
enum LayoutDeserializeFlags {
    DEFAULT,
    CONTEXT,
}
enum LayoutSerializeFlags {
    DEFAULT,
    CONTEXT,
    OUTPUT,
}
enum ShapeFlags {
    NONE,
    ROUND_POSITIONS,
}
enum ShowFlags {
    NONE,
    SPACES,
    LINE_BREAKS,
    IGNORABLES,
}
const ANALYSIS_FLAG_CENTERED_BASELINE: number
const ANALYSIS_FLAG_IS_ELLIPSIS: number
const ANALYSIS_FLAG_NEED_HYPHEN: number
const ATTR_INDEX_FROM_TEXT_BEGINNING: number
const ATTR_INDEX_TO_TEXT_END: number
const GLYPH_EMPTY: Glyph
const GLYPH_INVALID_INPUT: Glyph
const GLYPH_UNKNOWN_FLAG: Glyph
const SCALE: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
const VERSION_STRING: string
function attrAllowBreaksNew(allowBreaks: boolean): Attribute
function attrBackgroundAlphaNew(alpha: number): Attribute
function attrBackgroundNew(red: number, green: number, blue: number): Attribute
function attrBaselineShiftNew(shift: number): Attribute
function attrBreak(text: string, length: number, attrList: AttrList, offset: number, attrs: LogAttr[]): void
function attrFallbackNew(enableFallback: boolean): Attribute
function attrFamilyNew(family: string): Attribute
function attrFontDescNew(desc: FontDescription): Attribute
function attrFontFeaturesNew(features: string): Attribute
function attrFontScaleNew(scale: FontScale): Attribute
function attrForegroundAlphaNew(alpha: number): Attribute
function attrForegroundNew(red: number, green: number, blue: number): Attribute
function attrGravityHintNew(hint: GravityHint): Attribute
function attrGravityNew(gravity: Gravity): Attribute
function attrInsertHyphensNew(insertHyphens: boolean): Attribute
function attrLanguageNew(language: Language): Attribute
function attrLetterSpacingNew(letterSpacing: number): Attribute
function attrLineHeightNew(factor: number): Attribute
function attrLineHeightNewAbsolute(height: number): Attribute
function attrListFromString(text: string): AttrList | null
function attrOverlineColorNew(red: number, green: number, blue: number): Attribute
function attrOverlineNew(overline: Overline): Attribute
function attrRiseNew(rise: number): Attribute
function attrScaleNew(scaleFactor: number): Attribute
function attrSentenceNew(): Attribute
function attrShapeNew(inkRect: Rectangle, logicalRect: Rectangle): Attribute
function attrShapeNewWithData(inkRect: Rectangle, logicalRect: Rectangle, data?: object | null, copyFunc?: AttrDataCopyFunc | null): Attribute
function attrShowNew(flags: ShowFlags): Attribute
function attrSizeNew(size: number): Attribute
function attrSizeNewAbsolute(size: number): Attribute
function attrStretchNew(stretch: Stretch): Attribute
function attrStrikethroughColorNew(red: number, green: number, blue: number): Attribute
function attrStrikethroughNew(strikethrough: boolean): Attribute
function attrStyleNew(style: Style): Attribute
function attrTextTransformNew(transform: TextTransform): Attribute
function attrTypeGetName(type: AttrType): string | null
function attrTypeRegister(name: string): AttrType
function attrUnderlineColorNew(red: number, green: number, blue: number): Attribute
function attrUnderlineNew(underline: Underline): Attribute
function attrVariantNew(variant: Variant): Attribute
function attrWeightNew(weight: Weight): Attribute
function attrWordNew(): Attribute
function bidiTypeForUnichar(ch: number): BidiType
function break_TODO(text: string, length: number, analysis: Analysis, attrs: LogAttr[]): void
function defaultBreak(text: string, length: number, analysis: Analysis | null, attrs: LogAttr, attrsLen: number): void
function extentsToPixels(inclusive?: Rectangle | null, nearest?: Rectangle | null): void
function findBaseDir(text: string, length: number): Direction
function findParagraphBoundary(text: string, length: number): [ /* paragraphDelimiterIndex */ number, /* nextParagraphStart */ number ]
function fontDescriptionFromString(str: string): FontDescription
function getLogAttrs(text: string, length: number, level: number, language: Language, attrs: LogAttr[]): void
function getMirrorChar(ch: number, mirroredCh: number): boolean
function gravityGetForMatrix(matrix?: Matrix | null): Gravity
function gravityGetForScript(script: Script, baseGravity: Gravity, hint: GravityHint): Gravity
function gravityGetForScriptAndWidth(script: Script, wide: boolean, baseGravity: Gravity, hint: GravityHint): Gravity
function gravityToRotation(gravity: Gravity): number
function isZeroWidth(ch: number): boolean
function itemize(context: Context, text: string, startIndex: number, length: number, attrs: AttrList, cachedIter?: AttrIterator | null): Item[]
function itemizeWithBaseDir(context: Context, baseDir: Direction, text: string, startIndex: number, length: number, attrs: AttrList, cachedIter?: AttrIterator | null): Item[]
function languageFromString(language?: string | null): Language | null
function languageGetDefault(): Language
function languageGetPreferred(): Language | null
function layoutDeserializeErrorQuark(): GLib.Quark
function log2visGetEmbeddingLevels(text: string, length: number, pbaseDir: Direction): number
function markupParserFinish(context: GLib.MarkupParseContext): [ /* returnType */ boolean, /* attrList */ AttrList | null, /* text */ string | null, /* accelChar */ number | null ]
function markupParserNew(accelMarker: number): GLib.MarkupParseContext
function parseEnum(type: GObject.Type, str: string | null, warn: boolean): [ /* returnType */ boolean, /* value */ number | null, /* possibleValues */ string | null ]
function parseMarkup(markupText: string, length: number, accelMarker: number): [ /* returnType */ boolean, /* attrList */ AttrList | null, /* text */ string | null, /* accelChar */ number | null ]
function parseStretch(str: string, warn: boolean): [ /* returnType */ boolean, /* stretch */ Stretch ]
function parseStyle(str: string, warn: boolean): [ /* returnType */ boolean, /* style */ Style ]
function parseVariant(str: string, warn: boolean): [ /* returnType */ boolean, /* variant */ Variant ]
function parseWeight(str: string, warn: boolean): [ /* returnType */ boolean, /* weight */ Weight ]
function quantizeLineGeometry(thickness: number, position: number): [ /* thickness */ number, /* position */ number ]
function readLine(stream: object | null, str: GLib.String): number
function reorderItems(items: Item[]): Item[]
function scanInt(pos: string): [ /* returnType */ boolean, /* pos */ string, /* out */ number ]
function scanString(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
function scanWord(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
function scriptForUnichar(ch: number): Script
function scriptGetSampleLanguage(script: Script): Language | null
function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void
function shapeFull(itemText: string, itemLength: number, paragraphText: string | null, paragraphLength: number, analysis: Analysis, glyphs: GlyphString): void
function shapeItem(item: Item, paragraphText: string | null, paragraphLength: number, logAttrs: LogAttr | null, glyphs: GlyphString, flags: ShapeFlags): void
function shapeWithFlags(itemText: string, itemLength: number, paragraphText: string | null, paragraphLength: number, analysis: Analysis, glyphs: GlyphString, flags: ShapeFlags): void
function skipSpace(pos: string): [ /* returnType */ boolean, /* pos */ string ]
function splitFileList(str: string): string[]
function tabArrayFromString(text: string): TabArray | null
function tailorBreak(text: string, length: number, analysis: Analysis, offset: number, attrs: LogAttr[]): void
function trimString(str: string): string
function unicharDirection(ch: number): Direction
function unitsFromDouble(d: number): number
function unitsToDouble(i: number): number
function version(): number
function versionCheck(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
function versionString(): string
interface AttrDataCopyFunc {
    (): object | null
}
interface AttrFilterFunc {
    (attribute: Attribute): boolean
}
interface FontsetForeachFunc {
    (fontset: Fontset, font: Font): boolean
}
interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
class Context {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Context */
    changed(): void
    getBaseDir(): Direction
    getBaseGravity(): Gravity
    getFontDescription(): FontDescription
    getFontMap(): FontMap
    getGravity(): Gravity
    getGravityHint(): GravityHint
    getLanguage(): Language
    getMatrix(): Matrix | null
    getMetrics(desc?: FontDescription | null, language?: Language | null): FontMetrics
    getRoundGlyphPositions(): boolean
    getSerial(): number
    listFamilies(): /* families */ FontFamily[]
    loadFont(desc: FontDescription): Font | null
    loadFontset(desc: FontDescription, language: Language): Fontset | null
    setBaseDir(direction: Direction): void
    setBaseGravity(gravity: Gravity): void
    setFontDescription(desc: FontDescription): void
    setFontMap(fontMap: FontMap): void
    setGravityHint(hint: GravityHint): void
    setLanguage(language: Language): void
    setMatrix(matrix?: Matrix | null): void
    setRoundGlyphPositions(roundPositions: boolean): void
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
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static $gtype: GObject.Type
}
interface Coverage_ConstructProps extends GObject.Object_ConstructProps {
}
class Coverage {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Coverage */
    copy(): Coverage
    get(index: number): CoverageLevel
    max(other: Coverage): void
    ref(): Coverage
    set(index: number, level: CoverageLevel): void
    toBytes(): /* bytes */ Uint8Array
    unref(): void
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
    constructor (config?: Coverage_ConstructProps)
    _init (config?: Coverage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Coverage
    static fromBytes(bytes: Uint8Array): Coverage | null
    static $gtype: GObject.Type
}
interface Font_ConstructProps extends GObject.Object_ConstructProps {
}
class Font {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Font */
    describe(): FontDescription
    describeWithAbsoluteSize(): FontDescription
    getCoverage(language: Language): Coverage
    getFace(): FontFace
    getFeatures(numFeatures: number): [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    getFontMap(): FontMap | null
    getGlyphExtents(glyph: Glyph): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getLanguages(): Language[] | null
    getMetrics(language?: Language | null): FontMetrics
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
    static descriptionsFree(descs: FontDescription[] | null): void
    static deserialize(context: Context, bytes: any): Font | null
    static $gtype: GObject.Type
}
interface FontFace_ConstructProps extends GObject.Object_ConstructProps {
}
class FontFace {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.FontFace */
    describe(): FontDescription
    getFaceName(): string
    getFamily(): FontFamily
    isSynthesized(): boolean
    listSizes(): /* sizes */ number[] | null
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
    constructor (config?: FontFace_ConstructProps)
    _init (config?: FontFace_ConstructProps): void
    static $gtype: GObject.Type
}
interface FontFamily_ConstructProps extends GObject.Object_ConstructProps {
}
class FontFamily {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.FontFamily */
    getFace(name?: string | null): FontFace | null
    getName(): string
    isMonospace(): boolean
    isVariable(): boolean
    listFaces(): /* faces */ FontFace[] | null
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
    constructor (config?: FontFamily_ConstructProps)
    _init (config?: FontFamily_ConstructProps): void
    static $gtype: GObject.Type
}
interface FontMap_ConstructProps extends GObject.Object_ConstructProps {
}
class FontMap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.FontMap */
    changed(): void
    createContext(): Context
    getFamily(name: string): FontFamily
    getSerial(): number
    listFamilies(): /* families */ FontFamily[]
    loadFont(context: Context, desc: FontDescription): Font | null
    loadFontset(context: Context, desc: FontDescription, language: Language): Fontset | null
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
interface Fontset_ConstructProps extends GObject.Object_ConstructProps {
}
class Fontset {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Fontset */
    foreach(func: FontsetForeachFunc): void
    getFont(wc: number): Font
    getMetrics(): FontMetrics
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
    constructor (config?: Fontset_ConstructProps)
    _init (config?: Fontset_ConstructProps): void
    static $gtype: GObject.Type
}
interface FontsetSimple_ConstructProps extends Fontset_ConstructProps {
}
class FontsetSimple {
    /* Fields of Pango-1.0.Pango.Fontset */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.FontsetSimple */
    append(font: Font): void
    size(): number
    /* Methods of Pango-1.0.Pango.Fontset */
    foreach(func: FontsetForeachFunc): void
    getFont(wc: number): Font
    getMetrics(): FontMetrics
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
    constructor (config?: FontsetSimple_ConstructProps)
    _init (config?: FontsetSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(language: Language): FontsetSimple
    static $gtype: GObject.Type
}
interface Layout_ConstructProps extends GObject.Object_ConstructProps {
}
class Layout {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Layout */
    contextChanged(): void
    copy(): Layout
    getAlignment(): Alignment
    getAttributes(): AttrList | null
    getAutoDir(): boolean
    getBaseline(): number
    getCaretPos(index: number): [ /* strongPos */ Rectangle | null, /* weakPos */ Rectangle | null ]
    getCharacterCount(): number
    getContext(): Context
    getCursorPos(index: number): [ /* strongPos */ Rectangle | null, /* weakPos */ Rectangle | null ]
    getDirection(index: number): Direction
    getEllipsize(): EllipsizeMode
    getExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getFontDescription(): FontDescription | null
    getHeight(): number
    getIndent(): number
    getIter(): LayoutIter
    getJustify(): boolean
    getJustifyLastLine(): boolean
    getLine(line: number): LayoutLine | null
    getLineCount(): number
    getLineReadonly(line: number): LayoutLine | null
    getLineSpacing(): number
    getLines(): LayoutLine[]
    getLinesReadonly(): LayoutLine[]
    getLogAttrs(): /* attrs */ LogAttr[]
    getLogAttrsReadonly(): LogAttr[]
    getPixelExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getPixelSize(): [ /* width */ number | null, /* height */ number | null ]
    getSerial(): number
    getSingleParagraphMode(): boolean
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getSpacing(): number
    getTabs(): TabArray | null
    getText(): string
    getUnknownGlyphsCount(): number
    getWidth(): number
    getWrap(): WrapMode
    indexToLineX(index: number, trailing: boolean): [ /* line */ number | null, /* xPos */ number | null ]
    indexToPos(index: number): /* pos */ Rectangle
    isEllipsized(): boolean
    isWrapped(): boolean
    moveCursorVisually(strong: boolean, oldIndex: number, oldTrailing: number, direction: number): [ /* newIndex */ number, /* newTrailing */ number ]
    serialize(flags: LayoutSerializeFlags): any
    setAlignment(alignment: Alignment): void
    setAttributes(attrs?: AttrList | null): void
    setAutoDir(autoDir: boolean): void
    setEllipsize(ellipsize: EllipsizeMode): void
    setFontDescription(desc?: FontDescription | null): void
    setHeight(height: number): void
    setIndent(indent: number): void
    setJustify(justify: boolean): void
    setJustifyLastLine(justify: boolean): void
    setLineSpacing(factor: number): void
    setMarkup(markup: string, length: number): string
    setMarkupWithAccel(markup: string, length: number, accelMarker: number): /* accelChar */ number | null
    setSingleParagraphMode(setting: boolean): void
    setSpacing(spacing: number): void
    setTabs(tabs?: TabArray | null): void
    setText(text: string, length: number): string
    setWidth(width: number): void
    setWrap(wrap: WrapMode): void
    writeToFile(flags: LayoutSerializeFlags, filename: string): boolean
    xyToIndex(x: number, y: number): [ /* returnType */ boolean, /* index */ number, /* trailing */ number ]
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
    constructor (config?: Layout_ConstructProps)
    _init (config?: Layout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context): Layout
    static deserialize(context: Context, bytes: any, flags: LayoutDeserializeFlags): Layout | null
    static $gtype: GObject.Type
}
interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
class Renderer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Renderer */
    activate(): void
    deactivate(): void
    drawErrorUnderline(x: number, y: number, width: number, height: number): void
    drawGlyph(font: Font, glyph: Glyph, x: number, y: number): void
    drawGlyphItem(text: string | null, glyphItem: GlyphItem, x: number, y: number): void
    drawGlyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    drawLayout(layout: Layout, x: number, y: number): void
    drawLayoutLine(line: LayoutLine, x: number, y: number): void
    drawRectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    drawTrapezoid(part: RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    getAlpha(part: RenderPart): number
    getColor(part: RenderPart): Color | null
    getLayout(): Layout | null
    getLayoutLine(): LayoutLine | null
    getMatrix(): Matrix | null
    partChanged(part: RenderPart): void
    setAlpha(part: RenderPart, alpha: number): void
    setColor(part: RenderPart, color?: Color | null): void
    setMatrix(matrix?: Matrix | null): void
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
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static $gtype: GObject.Type
}
class Analysis {
    /* Fields of Pango-1.0.Pango.Analysis */
    readonly shapeEngine: object
    readonly langEngine: object
    readonly font: Font
    readonly level: number
    readonly gravity: number
    readonly flags: number
    readonly script: number
    readonly language: Language
    readonly extraAttrs: object[]
    static name: string
}
class AttrClass {
    /* Fields of Pango-1.0.Pango.AttrClass */
    readonly type: AttrType
    readonly copy: (attr: Attribute) => Attribute
    readonly destroy: (attr: Attribute) => void
    readonly equal: (attr1: Attribute, attr2: Attribute) => boolean
    static name: string
}
class AttrColor {
    /* Fields of Pango-1.0.Pango.AttrColor */
    readonly attr: Attribute
    readonly color: Color
    static name: string
}
class AttrFloat {
    /* Fields of Pango-1.0.Pango.AttrFloat */
    readonly attr: Attribute
    readonly value: number
    static name: string
}
class AttrFontDesc {
    /* Fields of Pango-1.0.Pango.AttrFontDesc */
    readonly attr: Attribute
    readonly desc: FontDescription
    static name: string
}
class AttrFontFeatures {
    /* Fields of Pango-1.0.Pango.AttrFontFeatures */
    readonly attr: Attribute
    readonly features: string
    static name: string
}
class AttrInt {
    /* Fields of Pango-1.0.Pango.AttrInt */
    readonly attr: Attribute
    readonly value: number
    static name: string
}
class AttrIterator {
    /* Methods of Pango-1.0.Pango.AttrIterator */
    copy(): AttrIterator
    destroy(): void
    get(type: AttrType): Attribute | null
    getAttrs(): Attribute[]
    getFont(desc: FontDescription): [ /* language */ Language | null, /* extraAttrs */ Attribute[] | null ]
    next(): boolean
    range(): [ /* start */ number, /* end */ number ]
    static name: string
}
class AttrLanguage {
    /* Fields of Pango-1.0.Pango.AttrLanguage */
    readonly attr: Attribute
    readonly value: Language
    static name: string
}
class AttrList {
    /* Methods of Pango-1.0.Pango.AttrList */
    change(attr: Attribute): void
    copy(): AttrList | null
    equal(otherList: AttrList): boolean
    filter(func: AttrFilterFunc): AttrList | null
    getAttributes(): Attribute[]
    getIterator(): AttrIterator
    insert(attr: Attribute): void
    insertBefore(attr: Attribute): void
    ref(): AttrList
    splice(other: AttrList, pos: number, len: number): void
    toString(): string
    unref(): void
    update(pos: number, remove: number, add: number): void
    static name: string
    static new(): AttrList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AttrList
    static fromString(text: string): AttrList | null
}
class AttrShape {
    /* Fields of Pango-1.0.Pango.AttrShape */
    readonly attr: Attribute
    readonly inkRect: Rectangle
    readonly logicalRect: Rectangle
    readonly data: object
    readonly copyFunc: AttrDataCopyFunc
    readonly destroyFunc: GLib.DestroyNotify
    static name: string
    /* Static methods and pseudo-constructors */
    static newWithData(inkRect: Rectangle, logicalRect: Rectangle, data?: object | null, copyFunc?: AttrDataCopyFunc | null): Attribute
}
class AttrSize {
    /* Fields of Pango-1.0.Pango.AttrSize */
    readonly attr: Attribute
    readonly size: number
    readonly absolute: number
    static name: string
    /* Static methods and pseudo-constructors */
    static newAbsolute(size: number): Attribute
}
class AttrString {
    /* Fields of Pango-1.0.Pango.AttrString */
    readonly attr: Attribute
    readonly value: string
    static name: string
}
class Attribute {
    /* Fields of Pango-1.0.Pango.Attribute */
    readonly klass: AttrClass
    readonly startIndex: number
    readonly endIndex: number
    /* Methods of Pango-1.0.Pango.Attribute */
    asColor(): AttrColor | null
    asFloat(): AttrFloat | null
    asFontDesc(): AttrFontDesc | null
    asFontFeatures(): AttrFontFeatures | null
    asInt(): AttrInt | null
    asLanguage(): AttrLanguage | null
    asShape(): AttrShape | null
    asSize(): AttrSize | null
    asString(): AttrString | null
    copy(): Attribute
    destroy(): void
    equal(attr2: Attribute): boolean
    init(klass: AttrClass): void
    static name: string
}
class Color {
    /* Fields of Pango-1.0.Pango.Color */
    readonly red: number
    readonly green: number
    readonly blue: number
    /* Methods of Pango-1.0.Pango.Color */
    copy(): Color | null
    free(): void
    parse(spec: string): boolean
    parseWithAlpha(spec: string): [ /* returnType */ boolean, /* alpha */ number | null ]
    toString(): string
    static name: string
}
abstract class ContextClass {
    static name: string
}
abstract class FontClass {
    /* Fields of Pango-1.0.Pango.FontClass */
    readonly parentClass: GObject.ObjectClass
    readonly describe: (font: Font) => FontDescription
    readonly getCoverage: (font: Font, language: Language) => Coverage
    readonly getGlyphExtents: (font: Font | null, glyph: Glyph) => [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    readonly getMetrics: (font?: Font | null, language?: Language | null) => FontMetrics
    readonly getFontMap: (font?: Font | null) => FontMap | null
    readonly describeAbsolute: (font: Font) => FontDescription
    readonly getFeatures: (font: Font, numFeatures: number) => [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    readonly createHbFont: (font: Font) => HarfBuzz.font_t
    static name: string
}
class FontDescription {
    /* Methods of Pango-1.0.Pango.FontDescription */
    betterMatch(oldMatch: FontDescription | null, newMatch: FontDescription): boolean
    copy(): FontDescription | null
    copyStatic(): FontDescription | null
    equal(desc2: FontDescription): boolean
    free(): void
    getFamily(): string | null
    getGravity(): Gravity
    getSetFields(): FontMask
    getSize(): number
    getSizeIsAbsolute(): boolean
    getStretch(): Stretch
    getStyle(): Style
    getVariant(): Variant
    getVariations(): string | null
    getWeight(): Weight
    hash(): number
    merge(descToMerge: FontDescription | null, replaceExisting: boolean): void
    mergeStatic(descToMerge: FontDescription, replaceExisting: boolean): void
    setAbsoluteSize(size: number): void
    setFamily(family: string): void
    setFamilyStatic(family: string): void
    setGravity(gravity: Gravity): void
    setSize(size: number): void
    setStretch(stretch: Stretch): void
    setStyle(style: Style): void
    setVariant(variant: Variant): void
    setVariations(variations?: string | null): void
    setVariationsStatic(variations: string): void
    setWeight(weight: Weight): void
    toFilename(): string
    toString(): string
    unsetFields(toUnset: FontMask): void
    static name: string
    static new(): FontDescription
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FontDescription
    static fromString(str: string): FontDescription
}
abstract class FontFaceClass {
    /* Fields of Pango-1.0.Pango.FontFaceClass */
    readonly parentClass: GObject.ObjectClass
    readonly getFaceName: (face: FontFace) => string
    readonly describe: (face: FontFace) => FontDescription
    readonly listSizes: (face: FontFace) => /* sizes */ number[] | null
    readonly isSynthesized: (face: FontFace) => boolean
    readonly getFamily: (face: FontFace) => FontFamily
    static name: string
}
abstract class FontFamilyClass {
    /* Fields of Pango-1.0.Pango.FontFamilyClass */
    readonly parentClass: GObject.ObjectClass
    readonly listFaces: (family: FontFamily) => /* faces */ FontFace[] | null
    readonly getName: (family: FontFamily) => string
    readonly isMonospace: (family: FontFamily) => boolean
    readonly isVariable: (family: FontFamily) => boolean
    readonly getFace: (family: FontFamily, name?: string | null) => FontFace | null
    static name: string
}
abstract class FontMapClass {
    /* Fields of Pango-1.0.Pango.FontMapClass */
    readonly parentClass: GObject.ObjectClass
    readonly loadFont: (fontmap: FontMap, context: Context, desc: FontDescription) => Font | null
    readonly listFamilies: (fontmap: FontMap) => /* families */ FontFamily[]
    readonly loadFontset: (fontmap: FontMap, context: Context, desc: FontDescription, language: Language) => Fontset | null
    readonly shapeEngineType: string
    readonly getSerial: (fontmap: FontMap) => number
    readonly changed: (fontmap: FontMap) => void
    readonly getFamily: (fontmap: FontMap, name: string) => FontFamily
    static name: string
}
class FontMetrics {
    /* Methods of Pango-1.0.Pango.FontMetrics */
    getApproximateCharWidth(): number
    getApproximateDigitWidth(): number
    getAscent(): number
    getDescent(): number
    getHeight(): number
    getStrikethroughPosition(): number
    getStrikethroughThickness(): number
    getUnderlinePosition(): number
    getUnderlineThickness(): number
    ref(): FontMetrics | null
    unref(): void
    static name: string
}
abstract class FontsetClass {
    /* Fields of Pango-1.0.Pango.FontsetClass */
    readonly parentClass: GObject.ObjectClass
    readonly getFont: (fontset: Fontset, wc: number) => Font
    readonly getMetrics: (fontset: Fontset) => FontMetrics
    readonly getLanguage: (fontset: Fontset) => Language
    readonly foreach: (fontset: Fontset, func: FontsetForeachFunc) => void
    static name: string
}
abstract class FontsetSimpleClass {
    static name: string
}
class GlyphGeometry {
    /* Fields of Pango-1.0.Pango.GlyphGeometry */
    readonly width: GlyphUnit
    readonly xOffset: GlyphUnit
    readonly yOffset: GlyphUnit
    static name: string
}
class GlyphInfo {
    /* Fields of Pango-1.0.Pango.GlyphInfo */
    readonly glyph: Glyph
    readonly geometry: GlyphGeometry
    readonly attr: GlyphVisAttr
    static name: string
}
class GlyphItem {
    /* Fields of Pango-1.0.Pango.GlyphItem */
    readonly item: Item
    readonly glyphs: GlyphString
    readonly yOffset: number
    readonly startXOffset: number
    readonly endXOffset: number
    /* Methods of Pango-1.0.Pango.GlyphItem */
    applyAttrs(text: string, list: AttrList): GlyphItem[]
    copy(): GlyphItem | null
    free(): void
    getLogicalWidths(text: string, logicalWidths: number[]): void
    letterSpace(text: string, logAttrs: LogAttr[], letterSpacing: number): void
    split(text: string, splitIndex: number): GlyphItem
    static name: string
}
class GlyphItemIter {
    /* Fields of Pango-1.0.Pango.GlyphItemIter */
    readonly glyphItem: GlyphItem
    readonly text: string
    readonly startGlyph: number
    readonly startIndex: number
    readonly startChar: number
    readonly endGlyph: number
    readonly endIndex: number
    readonly endChar: number
    /* Methods of Pango-1.0.Pango.GlyphItemIter */
    copy(): GlyphItemIter | null
    free(): void
    initEnd(glyphItem: GlyphItem, text: string): boolean
    initStart(glyphItem: GlyphItem, text: string): boolean
    nextCluster(): boolean
    prevCluster(): boolean
    static name: string
}
class GlyphString {
    /* Fields of Pango-1.0.Pango.GlyphString */
    readonly numGlyphs: number
    readonly glyphs: GlyphInfo[]
    readonly logClusters: number
    /* Methods of Pango-1.0.Pango.GlyphString */
    copy(): GlyphString | null
    extents(font: Font): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    extentsRange(start: number, end: number, font: Font): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    free(): void
    getLogicalWidths(text: string, length: number, embeddingLevel: number, logicalWidths: number[]): void
    getWidth(): number
    indexToX(text: string, length: number, analysis: Analysis, index: number, trailing: boolean): /* xPos */ number
    indexToXFull(text: string, length: number, analysis: Analysis, attrs: LogAttr | null, index: number, trailing: boolean): /* xPos */ number
    setSize(newLen: number): void
    xToIndex(text: string, length: number, analysis: Analysis, xPos: number): [ /* index */ number, /* trailing */ number ]
    static name: string
    static new(): GlyphString
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GlyphString
}
class GlyphVisAttr {
    /* Fields of Pango-1.0.Pango.GlyphVisAttr */
    readonly isClusterStart: number
    readonly isColor: number
    static name: string
}
class Item {
    /* Fields of Pango-1.0.Pango.Item */
    readonly offset: number
    readonly length: number
    readonly numChars: number
    readonly analysis: Analysis
    /* Methods of Pango-1.0.Pango.Item */
    applyAttrs(iter: AttrIterator): void
    copy(): Item | null
    free(): void
    split(splitIndex: number, splitOffset: number): Item
    static name: string
    static new(): Item
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Item
}
class Language {
    /* Methods of Pango-1.0.Pango.Language */
    getSampleString(): string
    getScripts(): Script[] | null
    includesScript(script: Script): boolean
    matches(rangeList: string): boolean
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static fromString(language?: string | null): Language | null
    static getDefault(): Language
    static getPreferred(): Language | null
}
abstract class LayoutClass {
    static name: string
}
class LayoutIter {
    /* Methods of Pango-1.0.Pango.LayoutIter */
    atLastLine(): boolean
    copy(): LayoutIter | null
    free(): void
    getBaseline(): number
    getCharExtents(): /* logicalRect */ Rectangle
    getClusterExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getIndex(): number
    getLayout(): Layout
    getLayoutExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getLine(): LayoutLine
    getLineExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getLineReadonly(): LayoutLine
    getLineYrange(): [ /* y0 */ number | null, /* y1 */ number | null ]
    getRun(): LayoutRun | null
    getRunBaseline(): number
    getRunExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getRunReadonly(): LayoutRun | null
    nextChar(): boolean
    nextCluster(): boolean
    nextLine(): boolean
    nextRun(): boolean
    static name: string
}
class LayoutLine {
    /* Fields of Pango-1.0.Pango.LayoutLine */
    readonly layout: Layout
    readonly startIndex: number
    readonly length: number
    readonly runs: LayoutRun[]
    readonly isParagraphStart: number
    readonly resolvedDir: number
    /* Methods of Pango-1.0.Pango.LayoutLine */
    getExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getHeight(): /* height */ number | null
    getLength(): number
    getPixelExtents(): [ /* inkRect */ Rectangle | null, /* logicalRect */ Rectangle | null ]
    getResolvedDirection(): Direction
    getStartIndex(): number
    getXRanges(startIndex: number, endIndex: number): /* ranges */ number[]
    indexToX(index: number, trailing: boolean): /* xPos */ number
    ref(): LayoutLine
    unref(): void
    xToIndex(xPos: number): [ /* returnType */ boolean, /* index */ number, /* trailing */ number ]
    static name: string
}
class LogAttr {
    /* Fields of Pango-1.0.Pango.LogAttr */
    readonly isLineBreak: number
    readonly isMandatoryBreak: number
    readonly isCharBreak: number
    readonly isWhite: number
    readonly isCursorPosition: number
    readonly isWordStart: number
    readonly isWordEnd: number
    readonly isSentenceBoundary: number
    readonly isSentenceStart: number
    readonly isSentenceEnd: number
    readonly backspaceDeletesCharacter: number
    readonly isExpandableSpace: number
    readonly isWordBoundary: number
    readonly breakInsertsHyphen: number
    readonly breakRemovesPreceding: number
    readonly reserved: number
    static name: string
}
class Matrix {
    /* Fields of Pango-1.0.Pango.Matrix */
    readonly xx: number
    readonly xy: number
    readonly yx: number
    readonly yy: number
    readonly x0: number
    readonly y0: number
    /* Methods of Pango-1.0.Pango.Matrix */
    concat(newMatrix: Matrix): void
    copy(): Matrix | null
    free(): void
    getFontScaleFactor(): number
    getFontScaleFactors(): [ /* xscale */ number | null, /* yscale */ number | null ]
    getSlantRatio(): number
    rotate(degrees: number): void
    scale(scaleX: number, scaleY: number): void
    transformDistance(dx: number, dy: number): [ /* dx */ number, /* dy */ number ]
    transformPixelRectangle(rect?: Rectangle | null): /* rect */ Rectangle | null
    transformPoint(x: number, y: number): [ /* x */ number, /* y */ number ]
    transformRectangle(rect?: Rectangle | null): /* rect */ Rectangle | null
    translate(tx: number, ty: number): void
    static name: string
}
class Rectangle {
    /* Fields of Pango-1.0.Pango.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
abstract class RendererClass {
    /* Fields of Pango-1.0.Pango.RendererClass */
    readonly drawGlyphs: (renderer: Renderer, font: Font, glyphs: GlyphString, x: number, y: number) => void
    readonly drawRectangle: (renderer: Renderer, part: RenderPart, x: number, y: number, width: number, height: number) => void
    readonly drawErrorUnderline: (renderer: Renderer, x: number, y: number, width: number, height: number) => void
    readonly drawShape: (renderer: Renderer, attr: AttrShape, x: number, y: number) => void
    readonly drawTrapezoid: (renderer: Renderer, part: RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number) => void
    readonly drawGlyph: (renderer: Renderer, font: Font, glyph: Glyph, x: number, y: number) => void
    readonly partChanged: (renderer: Renderer, part: RenderPart) => void
    readonly begin: (renderer: Renderer) => void
    readonly end: (renderer: Renderer) => void
    readonly prepareRun: (renderer: Renderer, run: LayoutRun) => void
    readonly drawGlyphItem: (renderer: Renderer, text: string | null, glyphItem: GlyphItem, x: number, y: number) => void
    static name: string
}
class RendererPrivate {
    static name: string
}
class ScriptIter {
    /* Methods of Pango-1.0.Pango.ScriptIter */
    free(): void
    getRange(): [ /* start */ string | null, /* end */ string | null, /* script */ Script | null ]
    next(): boolean
    static name: string
    static new(text: string, length: number): ScriptIter
    constructor(text: string, length: number)
    /* Static methods and pseudo-constructors */
    static new(text: string, length: number): ScriptIter
}
class TabArray {
    /* Methods of Pango-1.0.Pango.TabArray */
    copy(): TabArray
    free(): void
    getDecimalPoint(tabIndex: number): number
    getPositionsInPixels(): boolean
    getSize(): number
    getTab(tabIndex: number): [ /* alignment */ TabAlign | null, /* location */ number | null ]
    getTabs(): [ /* alignments */ TabAlign | null, /* locations */ number[] | null ]
    resize(newSize: number): void
    setDecimalPoint(tabIndex: number, decimalPoint: number): void
    setPositionsInPixels(positionsInPixels: boolean): void
    setTab(tabIndex: number, alignment: TabAlign, location: number): void
    sort(): void
    toString(): string
    static name: string
    static new(initialSize: number, positionsInPixels: boolean): TabArray
    constructor(initialSize: number, positionsInPixels: boolean)
    /* Static methods and pseudo-constructors */
    static new(initialSize: number, positionsInPixels: boolean): TabArray
    static fromString(text: string): TabArray | null
}
    type Glyph = number
    type GlyphUnit = number
    type LayoutRun = GlyphItem
}
export default Pango;