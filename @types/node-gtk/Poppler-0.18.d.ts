/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Poppler-0.18
 */

import type cairo from './cairo-1.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Poppler {

enum ActionLayerAction {
    ON,
    OFF,
    TOGGLE,
}
enum ActionMovieOperation {
    PLAY,
    PAUSE,
    RESUME,
    STOP,
}
enum ActionType {
    UNKNOWN,
    NONE,
    GOTO_DEST,
    GOTO_REMOTE,
    LAUNCH,
    URI,
    NAMED,
    MOVIE,
    RENDITION,
    OCG_STATE,
    JAVASCRIPT,
    RESET_FORM,
}
enum AdditionalActionType {
    FIELD_MODIFIED,
    FORMAT_FIELD,
    VALIDATE_FIELD,
    CALCULATE_FIELD,
}
enum AnnotExternalDataType {
    TODO_3D,
    UNKNOWN,
}
enum AnnotFreeTextQuadding {
    LEFT_JUSTIFIED,
    CENTERED,
    RIGHT_JUSTIFIED,
}
enum AnnotMarkupReplyType {
    R,
    GROUP,
}
enum AnnotTextState {
    MARKED,
    UNMARKED,
    ACCEPTED,
    REJECTED,
    CANCELLED,
    COMPLETED,
    NONE,
    UNKNOWN,
}
enum AnnotType {
    UNKNOWN,
    TEXT,
    LINK,
    FREE_TEXT,
    LINE,
    SQUARE,
    CIRCLE,
    POLYGON,
    POLY_LINE,
    HIGHLIGHT,
    UNDERLINE,
    SQUIGGLY,
    STRIKE_OUT,
    STAMP,
    CARET,
    INK,
    POPUP,
    FILE_ATTACHMENT,
    SOUND,
    MOVIE,
    WIDGET,
    SCREEN,
    PRINTER_MARK,
    TRAP_NET,
    WATERMARK,
    TODO_3D,
}
enum Backend {
    UNKNOWN,
    SPLASH,
    CAIRO,
}
enum DestType {
    UNKNOWN,
    XYZ,
    FIT,
    FITH,
    FITV,
    FITR,
    FITB,
    FITBH,
    FITBV,
    NAMED,
}
enum Error {
    INVALID,
    ENCRYPTED,
    OPEN_FILE,
    BAD_CATALOG,
    DAMAGED,
}
enum FontType {
    UNKNOWN,
    TYPE1,
    TYPE1C,
    TYPE1COT,
    TYPE3,
    TRUETYPE,
    TRUETYPEOT,
    CID_TYPE0,
    CID_TYPE0C,
    CID_TYPE0COT,
    CID_TYPE2,
    CID_TYPE2OT,
}
enum FormButtonType {
    PUSH,
    CHECK,
    RADIO,
}
enum FormChoiceType {
    COMBO,
    LIST,
}
enum FormFieldType {
    UNKNOWN,
    BUTTON,
    TEXT,
    CHOICE,
    SIGNATURE,
}
enum FormTextType {
    NORMAL,
    MULTILINE,
    FILE_SELECT,
}
enum MoviePlayMode {
    ONCE,
    OPEN,
    REPEAT,
    PALINDROME,
}
enum PDFConformance {
    UNSET,
    A,
    B,
    G,
    N,
    P,
    PG,
    U,
    NONE,
}
enum PDFPart {
    UNSET,
    TODO_1,
    TODO_2,
    TODO_3,
    TODO_4,
    TODO_5,
    TODO_6,
    TODO_7,
    TODO_8,
    NONE,
}
enum PDFSubtype {
    UNSET,
    PDF_A,
    PDF_E,
    PDF_UA,
    PDF_VT,
    PDF_X,
    NONE,
}
enum PageLayout {
    UNSET,
    SINGLE_PAGE,
    ONE_COLUMN,
    TWO_COLUMN_LEFT,
    TWO_COLUMN_RIGHT,
    TWO_PAGE_LEFT,
    TWO_PAGE_RIGHT,
}
enum PageMode {
    UNSET,
    NONE,
    USE_OUTLINES,
    USE_THUMBS,
    FULL_SCREEN,
    USE_OC,
    USE_ATTACHMENTS,
}
enum PageTransitionAlignment {
    HORIZONTAL,
    VERTICAL,
}
enum PageTransitionDirection {
    INWARD,
    OUTWARD,
}
enum PageTransitionType {
    REPLACE,
    SPLIT,
    BLINDS,
    BOX,
    WIPE,
    DISSOLVE,
    GLITTER,
    FLY,
    PUSH,
    COVER,
    UNCOVER,
    FADE,
}
enum PrintDuplex {
    NONE,
    SIMPLEX,
    DUPLEX_FLIP_SHORT_EDGE,
    DUPLEX_FLIP_LONG_EDGE,
}
enum PrintScaling {
    APP_DEFAULT,
    NONE,
}
enum SelectionStyle {
    GLYPH,
    WORD,
    LINE,
}
enum StructureBlockAlign {
    BEFORE,
    MIDDLE,
    AFTER,
    JUSTIFY,
}
enum StructureBorderStyle {
    NONE,
    HIDDEN,
    DOTTED,
    DASHED,
    SOLID,
    DOUBLE,
    GROOVE,
    INSET,
    OUTSET,
}
enum StructureElementKind {
    CONTENT,
    OBJECT_REFERENCE,
    DOCUMENT,
    PART,
    ARTICLE,
    SECTION,
    DIV,
    SPAN,
    QUOTE,
    NOTE,
    REFERENCE,
    BIBENTRY,
    CODE,
    LINK,
    ANNOT,
    BLOCKQUOTE,
    CAPTION,
    NONSTRUCT,
    TOC,
    TOC_ITEM,
    INDEX,
    PRIVATE,
    PARAGRAPH,
    HEADING,
    HEADING_1,
    HEADING_2,
    HEADING_3,
    HEADING_4,
    HEADING_5,
    HEADING_6,
    LIST,
    LIST_ITEM,
    LIST_LABEL,
    LIST_BODY,
    TABLE,
    TABLE_ROW,
    TABLE_HEADING,
    TABLE_DATA,
    TABLE_HEADER,
    TABLE_FOOTER,
    TABLE_BODY,
    RUBY,
    RUBY_BASE_TEXT,
    RUBY_ANNOT_TEXT,
    RUBY_PUNCTUATION,
    WARICHU,
    WARICHU_TEXT,
    WARICHU_PUNCTUATION,
    FIGURE,
    FORMULA,
    FORM,
}
enum StructureFormRole {
    UNDEFINED,
    RADIO_BUTTON,
    PUSH_BUTTON,
    TEXT_VALUE,
    CHECKBOX,
}
enum StructureFormState {
    ON,
    OFF,
    NEUTRAL,
}
enum StructureGlyphOrientation {
    AUTO,
    TODO_0,
    TODO_90,
    TODO_180,
    TODO_270,
}
enum StructureInlineAlign {
    START,
    CENTER,
    END,
}
enum StructureListNumbering {
    NONE,
    DISC,
    CIRCLE,
    SQUARE,
    DECIMAL,
    UPPER_ROMAN,
    LOWER_ROMAN,
    UPPER_ALPHA,
    LOWER_ALPHA,
}
enum StructurePlacement {
    BLOCK,
    INLINE,
    BEFORE,
    START,
    END,
}
enum StructureRubyAlign {
    START,
    CENTER,
    END,
    JUSTIFY,
    DISTRIBUTE,
}
enum StructureRubyPosition {
    BEFORE,
    AFTER,
    WARICHU,
    INLINE,
}
enum StructureTableScope {
    ROW,
    COLUMN,
    BOTH,
}
enum StructureTextAlign {
    START,
    CENTER,
    END,
    JUSTIFY,
}
enum StructureTextDecoration {
    NONE,
    UNDERLINE,
    OVERLINE,
    LINETHROUGH,
}
enum StructureWritingMode {
    LR_TB,
    RL_TB,
    TB_RL,
}
enum AnnotFlag {
    UNKNOWN,
    INVISIBLE,
    HIDDEN,
    PRINT,
    NO_ZOOM,
    NO_ROTATE,
    NO_VIEW,
    READ_ONLY,
    LOCKED,
    TOGGLE_NO_VIEW,
    LOCKED_CONTENTS,
}
enum FindFlags {
    DEFAULT,
    CASE_SENSITIVE,
    BACKWARDS,
    WHOLE_WORDS_ONLY,
    IGNORE_DIACRITICS,
}
enum Permissions {
    OK_TO_PRINT,
    OK_TO_MODIFY,
    OK_TO_COPY,
    OK_TO_ADD_NOTES,
    OK_TO_FILL_FORM,
    OK_TO_EXTRACT_CONTENTS,
    OK_TO_ASSEMBLE,
    OK_TO_PRINT_HIGH_RESOLUTION,
    FULL,
}
enum PrintFlags {
    DOCUMENT,
    MARKUP_ANNOTS,
    STAMP_ANNOTS_ONLY,
    ALL,
}
enum StructureGetTextFlags {
    NONE,
    RECURSIVE,
}
enum ViewerPreferences {
    UNSET,
    HIDE_TOOLBAR,
    HIDE_MENUBAR,
    HIDE_WINDOWUI,
    FIT_WINDOW,
    CENTER_WINDOW,
    DISPLAY_DOC_TITLE,
    DIRECTION_RTL,
}
const ANNOT_TEXT_ICON_CIRCLE: string
const ANNOT_TEXT_ICON_COMMENT: string
const ANNOT_TEXT_ICON_CROSS: string
const ANNOT_TEXT_ICON_HELP: string
const ANNOT_TEXT_ICON_INSERT: string
const ANNOT_TEXT_ICON_KEY: string
const ANNOT_TEXT_ICON_NEW_PARAGRAPH: string
const ANNOT_TEXT_ICON_NOTE: string
const ANNOT_TEXT_ICON_PARAGRAPH: string
const HAS_CAIRO: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
function dateParse(date: string, timet: number): boolean
function errorQuark(): GLib.Quark
function getBackend(): Backend
function getVersion(): string
function namedDestFromBytestring(data: Uint8Array): string
function namedDestToBytestring(name: string): Uint8Array | null
interface AttachmentSaveFunc {
    (buf: Uint8Array): boolean
}
interface MediaSaveFunc {
    (buf: Uint8Array): boolean
}
interface Annot_ConstructProps extends GObject.Object_ConstructProps {
}
class Annot {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: Annot_ConstructProps)
    _init (config?: Annot_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotCircle_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotCircle {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotCircle */
    getInteriorColor(): Color
    setInteriorColor(popplerColor?: Color | null): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotCircle_ConstructProps)
    _init (config?: AnnotCircle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotCircle
    static $gtype: GObject.Type
}
interface AnnotFileAttachment_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotFileAttachment {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotFileAttachment */
    getAttachment(): Attachment
    getName(): string
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotFileAttachment_ConstructProps)
    _init (config?: AnnotFileAttachment_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotFreeText_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotFreeText {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotFreeText */
    getCalloutLine(): AnnotCalloutLine
    getQuadding(): AnnotFreeTextQuadding
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotFreeText_ConstructProps)
    _init (config?: AnnotFreeText_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotLine_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotLine {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotLine */
    setVertices(start: Point, end: Point): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotLine_ConstructProps)
    _init (config?: AnnotLine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle, start: Point, end: Point): AnnotLine
    static $gtype: GObject.Type
}
interface AnnotMarkup_ConstructProps extends Annot_ConstructProps {
}
class AnnotMarkup {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotMarkup_ConstructProps)
    _init (config?: AnnotMarkup_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotMovie_ConstructProps extends Annot_ConstructProps {
}
class AnnotMovie {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotMovie */
    getMovie(): Movie
    getTitle(): string
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotMovie_ConstructProps)
    _init (config?: AnnotMovie_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotScreen_ConstructProps extends Annot_ConstructProps {
}
class AnnotScreen {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotScreen */
    getAction(): Action
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotScreen_ConstructProps)
    _init (config?: AnnotScreen_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotSquare_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotSquare {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotSquare */
    getInteriorColor(): Color
    setInteriorColor(popplerColor?: Color | null): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotSquare_ConstructProps)
    _init (config?: AnnotSquare_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotSquare
    static $gtype: GObject.Type
}
interface AnnotText_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotText {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotText */
    getIcon(): string
    getIsOpen(): boolean
    getState(): AnnotTextState
    setIcon(icon: string): void
    setIsOpen(isOpen: boolean): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotText_ConstructProps)
    _init (config?: AnnotText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(doc: Document, rect: Rectangle): AnnotText
    static $gtype: GObject.Type
}
interface AnnotTextMarkup_ConstructProps extends AnnotMarkup_ConstructProps {
}
class AnnotTextMarkup {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.AnnotTextMarkup */
    getQuadrilaterals(): Quadrilateral[]
    setQuadrilaterals(quadrilaterals: Quadrilateral[]): void
    /* Methods of Poppler-0.18.Poppler.AnnotMarkup */
    getDate(): GLib.Date
    getExternalData(): AnnotExternalDataType
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getPopupRectangle(): [ /* returnType */ boolean, /* popplerRect */ Rectangle ]
    getReplyTo(): AnnotMarkupReplyType
    getSubject(): string
    hasPopup(): boolean
    setLabel(label?: string | null): void
    setOpacity(opacity: number): void
    setPopup(popupRect: Rectangle): void
    setPopupIsOpen(isOpen: boolean): void
    setPopupRectangle(popplerRect: Rectangle): void
    /* Methods of Poppler-0.18.Poppler.Annot */
    getAnnotType(): AnnotType
    getColor(): Color
    getContents(): string
    getFlags(): AnnotFlag
    getModified(): string
    getName(): string
    getPageIndex(): number
    getRectangle(): /* popplerRect */ Rectangle
    setColor(popplerColor?: Color | null): void
    setContents(contents: string): void
    setFlags(flags: AnnotFlag): void
    setRectangle(popplerRect: Rectangle): void
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
    constructor (config?: AnnotTextMarkup_ConstructProps)
    _init (config?: AnnotTextMarkup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newHighlight(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newSquiggly(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newStrikeout(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static newUnderline(doc: Document, rect: Rectangle, quadrilaterals: Quadrilateral[]): AnnotTextMarkup
    static $gtype: GObject.Type
}
interface Attachment_ConstructProps extends GObject.Object_ConstructProps {
}
class Attachment {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Attachment */
    getChecksum(): GLib.String
    getCtime(): GLib.DateTime | null
    getDescription(): string
    getMtime(): GLib.DateTime | null
    getName(): string
    getSize(): number
    save(filename: string): boolean
    saveToCallback(saveFunc: AttachmentSaveFunc): boolean
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
    constructor (config?: Attachment_ConstructProps)
    _init (config?: Attachment_ConstructProps): void
    static $gtype: GObject.Type
}
interface Document_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Poppler-0.18.Poppler.Document */
    author?: string
    creationDate?: number
    creationDatetime?: GLib.DateTime
    creator?: string
    keywords?: string
    modDate?: number
    modDatetime?: GLib.DateTime
    producer?: string
    subject?: string
    title?: string
}
class Document {
    /* Properties of Poppler-0.18.Poppler.Document */
    author: string
    creationDate: number
    creationDatetime: GLib.DateTime
    creator: string
    readonly format: string
    readonly formatMajor: number
    readonly formatMinor: number
    keywords: string
    readonly linearized: boolean
    readonly metadata: string
    modDate: number
    modDatetime: GLib.DateTime
    readonly pageLayout: PageLayout
    readonly pageMode: PageMode
    readonly permissions: Permissions
    readonly printDuplex: PrintDuplex
    readonly printNCopies: number
    readonly printScaling: PrintScaling
    producer: string
    subject: string
    readonly subtype: PDFSubtype
    readonly subtypeConformance: PDFConformance
    readonly subtypePart: PDFPart
    readonly subtypeString: string
    title: string
    readonly viewerPreferences: ViewerPreferences
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Document */
    findDest(linkName: string): Dest
    getAttachments(): Attachment[]
    getAuthor(): string
    getCreationDate(): number
    getCreationDateTime(): GLib.DateTime | null
    getCreator(): string
    getFormField(id: number): FormField
    getId(): [ /* returnType */ boolean, /* permanentId */ string | null, /* updateId */ string | null ]
    getKeywords(): string
    getMetadata(): string
    getModificationDate(): number
    getModificationDateTime(): GLib.DateTime | null
    getNAttachments(): number
    getNPages(): number
    getPage(index: number): Page
    getPageByLabel(label: string): Page
    getPageLayout(): PageLayout
    getPageMode(): PageMode
    getPdfConformance(): PDFConformance
    getPdfPart(): PDFPart
    getPdfSubtype(): PDFSubtype
    getPdfSubtypeString(): string | null
    getPdfVersion(): [ /* majorVersion */ number | null, /* minorVersion */ number | null ]
    getPdfVersionString(): string
    getPermissions(): Permissions
    getPrintDuplex(): PrintDuplex
    getPrintNCopies(): number
    getPrintPageRanges(): PageRange[]
    getPrintScaling(): PrintScaling
    getProducer(): string
    getSubject(): string
    getTitle(): string
    hasAttachments(): boolean
    hasJavascript(): boolean
    isLinearized(): boolean
    save(uri: string): boolean
    saveACopy(uri: string): boolean
    setAuthor(author: string): void
    setCreationDate(creationDate: number): void
    setCreationDateTime(creationDatetime?: GLib.DateTime | null): void
    setCreator(creator: string): void
    setKeywords(keywords: string): void
    setModificationDate(modificationDate: number): void
    setModificationDateTime(modificationDatetime?: GLib.DateTime | null): void
    setProducer(producer: string): void
    setSubject(subject: string): void
    setTitle(title: string): void
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
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creation-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creation-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creation-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creation-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creation-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::creator", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creator", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::creator", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format-major", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-major", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format-major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::format-minor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format-minor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::format-minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keywords", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keywords", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keywords", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::linearized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::linearized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::linearized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mod-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-date", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mod-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mod-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mod-datetime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mod-datetime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::permissions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::permissions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::permissions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-duplex", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-duplex", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-n-copies", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-n-copies", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-n-copies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-scaling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-scaling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-scaling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::producer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::producer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::producer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-conformance", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-conformance", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-conformance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-part", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-part", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-part", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtype-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtype-string", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtype-string", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::viewer-preferences", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::viewer-preferences", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::viewer-preferences", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromBytes(bytes: any, password?: string | null): Document
    static newFromData(data: Uint8Array, password?: string | null): Document
    static newFromFile(uri: string, password?: string | null): Document
    static newFromGfile(file: Gio.File, password?: string | null, cancellable?: Gio.Cancellable | null): Document
    static newFromStream(stream: Gio.InputStream, length: number, password?: string | null, cancellable?: Gio.Cancellable | null): Document
    static $gtype: GObject.Type
}
interface FontInfo_ConstructProps extends GObject.Object_ConstructProps {
}
class FontInfo {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.FontInfo */
    free(): void
    scan(nPages: number): [ /* returnType */ boolean, /* iter */ FontsIter ]
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
    constructor (config?: FontInfo_ConstructProps)
    _init (config?: FontInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: Document): FontInfo
    static $gtype: GObject.Type
}
interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}
class FormField {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.FormField */
    buttonGetButtonType(): FormButtonType
    buttonGetState(): boolean
    buttonSetState(state: boolean): void
    choiceCanSelectMultiple(): boolean
    choiceCommitOnChange(): boolean
    choiceDoSpellCheck(): boolean
    choiceGetChoiceType(): FormChoiceType
    choiceGetItem(index: number): string
    choiceGetNItems(): number
    choiceGetText(): string
    choiceIsEditable(): boolean
    choiceIsItemSelected(index: number): boolean
    choiceSelectItem(index: number): void
    choiceSetText(text: string): void
    choiceToggleItem(index: number): void
    choiceUnselectAll(): void
    getAction(): Action
    getAdditionalAction(type: AdditionalActionType): Action
    getAlternateUiName(): string
    getFieldType(): FormFieldType
    getFontSize(): number
    getId(): number
    getMappingName(): string
    getName(): string
    getPartialName(): string
    isReadOnly(): boolean
    textDoScroll(): boolean
    textDoSpellCheck(): boolean
    textGetMaxLen(): number
    textGetText(): string
    textGetTextType(): FormTextType
    textIsPassword(): boolean
    textIsRichText(): boolean
    textSetText(text: string): void
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
    constructor (config?: FormField_ConstructProps)
    _init (config?: FormField_ConstructProps): void
    static $gtype: GObject.Type
}
interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}
class Layer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Layer */
    getRadioButtonGroupId(): number
    getTitle(): string
    hide(): void
    isParent(): boolean
    isVisible(): boolean
    show(): void
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
    constructor (config?: Layer_ConstructProps)
    _init (config?: Layer_ConstructProps): void
    static $gtype: GObject.Type
}
interface Media_ConstructProps extends GObject.Object_ConstructProps {
}
class Media {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Media */
    getFilename(): string
    getMimeType(): string
    isEmbedded(): boolean
    save(filename: string): boolean
    saveToCallback(saveFunc: MediaSaveFunc): boolean
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
    constructor (config?: Media_ConstructProps)
    _init (config?: Media_ConstructProps): void
    static $gtype: GObject.Type
}
interface Movie_ConstructProps extends GObject.Object_ConstructProps {
}
class Movie {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Movie */
    getAspect(width: number, height: number): void
    getDuration(): number
    getFilename(): string
    getPlayMode(): MoviePlayMode
    getRate(): number
    getRotationAngle(): number
    getStart(): number
    getVolume(): number
    isSynchronous(): boolean
    needPoster(): boolean
    showControls(): boolean
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
    constructor (config?: Movie_ConstructProps)
    _init (config?: Movie_ConstructProps): void
    static $gtype: GObject.Type
}
interface PSFile_ConstructProps extends GObject.Object_ConstructProps {
}
class PSFile {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.PSFile */
    free(): void
    setDuplex(duplex: boolean): void
    setPaperSize(width: number, height: number): void
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
    constructor (config?: PSFile_ConstructProps)
    _init (config?: PSFile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(document: Document, filename: string, firstPage: number, nPages: number): PSFile
    static $gtype: GObject.Type
}
interface Page_ConstructProps extends GObject.Object_ConstructProps {
}
class Page {
    /* Properties of Poppler-0.18.Poppler.Page */
    readonly label: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.Page */
    addAnnot(annot: Annot): void
    findText(text: string): Rectangle[]
    findTextWithOptions(text: string, options: FindFlags): Rectangle[]
    getAnnotMapping(): AnnotMapping[]
    getBoundingBox(rect: Rectangle): boolean
    getCropBox(): /* rect */ Rectangle
    getDuration(): number
    getFormFieldMapping(): FormFieldMapping[]
    getImage(imageId: number): cairo.Surface
    getImageMapping(): ImageMapping[]
    getIndex(): number
    getLabel(): string
    getLinkMapping(): LinkMapping[]
    getSelectedRegion(scale: number, style: SelectionStyle, selection: Rectangle): cairo.Region
    getSelectedText(style: SelectionStyle, selection: Rectangle): string
    getSelectionRegion(scale: number, style: SelectionStyle, selection: Rectangle): Rectangle[]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getText(): string
    getTextAttributes(): TextAttributes[]
    getTextAttributesForArea(area: Rectangle): TextAttributes[]
    getTextForArea(area: Rectangle): string
    getTextLayout(): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    getTextLayoutForArea(area: Rectangle): [ /* returnType */ boolean, /* rectangles */ Rectangle[] ]
    getThumbnail(): cairo.Surface
    getThumbnailSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
    getTransition(): PageTransition
    removeAnnot(annot: Annot): void
    render(cairo: cairo.Context): void
    renderForPrinting(cairo: cairo.Context): void
    renderForPrintingWithOptions(cairo: cairo.Context, options: PrintFlags): void
    renderSelection(cairo: cairo.Context, selection: Rectangle, oldSelection: Rectangle, style: SelectionStyle, glyphColor: Color, backgroundColor: Color): void
    renderToPs(psFile: PSFile): void
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
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Page_ConstructProps)
    _init (config?: Page_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static freeAnnotMapping(list: AnnotMapping[]): void
    static freeFormFieldMapping(list: FormFieldMapping[]): void
    static freeImageMapping(list: ImageMapping[]): void
    static freeLinkMapping(list: LinkMapping[]): void
    static freeTextAttributes(list: TextAttributes[]): void
    static selectionRegionFree(region: Rectangle[]): void
    static $gtype: GObject.Type
}
interface StructureElement_ConstructProps extends GObject.Object_ConstructProps {
}
class StructureElement {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Poppler-0.18.Poppler.StructureElement */
    getAbbreviation(): string
    getActualText(): string
    getAltText(): string
    getBackgroundColor(): [ /* returnType */ boolean, /* color */ Color ]
    getBaselineShift(): number
    getBlockAlign(): StructureBlockAlign
    getBorderColor(): [ /* returnType */ boolean, /* colors */ Color[] ]
    getBorderStyle(): /* borderStyles */ StructureBorderStyle[]
    getBorderThickness(): [ /* returnType */ boolean, /* borderThicknesses */ number[] ]
    getBoundingBox(): [ /* returnType */ boolean, /* boundingBox */ Rectangle ]
    getColor(): [ /* returnType */ boolean, /* color */ Color ]
    getColumnCount(): number
    getColumnGaps(): number[]
    getColumnWidths(): number[]
    getEndIndent(): number
    getFormDescription(): string
    getFormRole(): StructureFormRole
    getFormState(): StructureFormState
    getGlyphOrientation(): StructureGlyphOrientation
    getHeight(): number
    getId(): string
    getInlineAlign(): StructureInlineAlign
    getKind(): StructureElementKind
    getLanguage(): string
    getLineHeight(): number
    getListNumbering(): StructureListNumbering
    getPadding(): /* paddings */ number[]
    getPage(): number
    getPlacement(): StructurePlacement
    getRubyAlign(): StructureRubyAlign
    getRubyPosition(): StructureRubyPosition
    getSpaceAfter(): number
    getSpaceBefore(): number
    getStartIndent(): number
    getTableBorderStyle(): /* borderStyles */ StructureBorderStyle[]
    getTableColumnSpan(): number
    getTableHeaders(): string[]
    getTablePadding(): /* paddings */ number[]
    getTableRowSpan(): number
    getTableScope(): StructureTableScope
    getTableSummary(): string
    getText(flags: StructureGetTextFlags): string
    getTextAlign(): StructureTextAlign
    getTextDecorationColor(): [ /* returnType */ boolean, /* color */ Color ]
    getTextDecorationThickness(): number
    getTextDecorationType(): StructureTextDecoration
    getTextIndent(): number
    getTextSpans(): TextSpan[]
    getTitle(): string
    getWidth(): number
    getWritingMode(): StructureWritingMode
    isBlock(): boolean
    isContent(): boolean
    isGrouping(): boolean
    isInline(): boolean
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
    constructor (config?: StructureElement_ConstructProps)
    _init (config?: StructureElement_ConstructProps): void
    static $gtype: GObject.Type
}
class ActionAny {
    /* Fields of Poppler-0.18.Poppler.ActionAny */
    readonly type: ActionType
    readonly title: string
    static name: string
}
class ActionGotoDest {
    /* Fields of Poppler-0.18.Poppler.ActionGotoDest */
    readonly type: ActionType
    readonly title: string
    readonly dest: Dest
    static name: string
}
class ActionGotoRemote {
    /* Fields of Poppler-0.18.Poppler.ActionGotoRemote */
    readonly type: ActionType
    readonly title: string
    readonly fileName: string
    readonly dest: Dest
    static name: string
}
class ActionJavascript {
    /* Fields of Poppler-0.18.Poppler.ActionJavascript */
    readonly type: ActionType
    readonly title: string
    readonly script: string
    static name: string
}
class ActionLaunch {
    /* Fields of Poppler-0.18.Poppler.ActionLaunch */
    readonly type: ActionType
    readonly title: string
    readonly fileName: string
    readonly params: string
    static name: string
}
class ActionLayer {
    /* Fields of Poppler-0.18.Poppler.ActionLayer */
    readonly action: ActionLayerAction
    readonly layers: object[]
    static name: string
}
class ActionMovie {
    /* Fields of Poppler-0.18.Poppler.ActionMovie */
    readonly type: ActionType
    readonly title: string
    readonly operation: ActionMovieOperation
    readonly movie: Movie
    static name: string
}
class ActionNamed {
    /* Fields of Poppler-0.18.Poppler.ActionNamed */
    readonly type: ActionType
    readonly title: string
    readonly namedDest: string
    static name: string
}
class ActionOCGState {
    /* Fields of Poppler-0.18.Poppler.ActionOCGState */
    readonly type: ActionType
    readonly title: string
    readonly stateList: object[]
    static name: string
}
class ActionRendition {
    /* Fields of Poppler-0.18.Poppler.ActionRendition */
    readonly type: ActionType
    readonly title: string
    readonly op: number
    readonly media: Media
    static name: string
}
class ActionResetForm {
    /* Fields of Poppler-0.18.Poppler.ActionResetForm */
    readonly type: ActionType
    readonly title: string
    readonly fields: object[]
    readonly exclude: boolean
    static name: string
}
class ActionUri {
    /* Fields of Poppler-0.18.Poppler.ActionUri */
    readonly type: ActionType
    readonly title: string
    readonly uri: string
    static name: string
}
class AnnotCalloutLine {
    /* Fields of Poppler-0.18.Poppler.AnnotCalloutLine */
    readonly multiline: boolean
    readonly x1: number
    readonly y1: number
    readonly x2: number
    readonly y2: number
    readonly x3: number
    readonly y3: number
    /* Methods of Poppler-0.18.Poppler.AnnotCalloutLine */
    copy(): AnnotCalloutLine
    free(): void
    static name: string
    static new(): AnnotCalloutLine
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AnnotCalloutLine
}
class AnnotMapping {
    /* Fields of Poppler-0.18.Poppler.AnnotMapping */
    readonly area: Rectangle
    readonly annot: Annot
    /* Methods of Poppler-0.18.Poppler.AnnotMapping */
    copy(): AnnotMapping
    free(): void
    static name: string
    static new(): AnnotMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AnnotMapping
}
abstract class AttachmentClass {
    /* Fields of Poppler-0.18.Poppler.AttachmentClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Color {
    /* Fields of Poppler-0.18.Poppler.Color */
    readonly red: number
    readonly green: number
    readonly blue: number
    /* Methods of Poppler-0.18.Poppler.Color */
    copy(): Color
    free(): void
    static name: string
    static new(): Color
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Color
}
class Dest {
    /* Fields of Poppler-0.18.Poppler.Dest */
    readonly type: DestType
    readonly pageNum: number
    readonly left: number
    readonly bottom: number
    readonly right: number
    readonly top: number
    readonly zoom: number
    readonly namedDest: string
    readonly changeLeft: number
    readonly changeTop: number
    readonly changeZoom: number
    /* Methods of Poppler-0.18.Poppler.Dest */
    copy(): Dest
    free(): void
    static name: string
}
class FontsIter {
    /* Methods of Poppler-0.18.Poppler.FontsIter */
    copy(): FontsIter
    free(): void
    getEncoding(): string
    getFileName(): string
    getFontType(): FontType
    getFullName(): string
    getName(): string
    getSubstituteName(): string
    isEmbedded(): boolean
    isSubset(): boolean
    next(): boolean
    static name: string
}
class FormFieldMapping {
    /* Fields of Poppler-0.18.Poppler.FormFieldMapping */
    readonly area: Rectangle
    readonly field: FormField
    /* Methods of Poppler-0.18.Poppler.FormFieldMapping */
    copy(): FormFieldMapping
    free(): void
    static name: string
    static new(): FormFieldMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FormFieldMapping
}
class ImageMapping {
    /* Fields of Poppler-0.18.Poppler.ImageMapping */
    readonly area: Rectangle
    readonly imageId: number
    /* Methods of Poppler-0.18.Poppler.ImageMapping */
    copy(): ImageMapping
    free(): void
    static name: string
    static new(): ImageMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ImageMapping
}
class IndexIter {
    /* Methods of Poppler-0.18.Poppler.IndexIter */
    copy(): IndexIter
    free(): void
    getAction(): Action
    getChild(): IndexIter
    isOpen(): boolean
    next(): boolean
    static name: string
    static new(document: Document): IndexIter
    constructor(document: Document)
    /* Static methods and pseudo-constructors */
    static new(document: Document): IndexIter
}
class LayersIter {
    /* Methods of Poppler-0.18.Poppler.LayersIter */
    copy(): LayersIter
    free(): void
    getChild(): LayersIter
    getLayer(): Layer
    getTitle(): string
    next(): boolean
    static name: string
    static new(document: Document): LayersIter
    constructor(document: Document)
    /* Static methods and pseudo-constructors */
    static new(document: Document): LayersIter
}
class LinkMapping {
    /* Fields of Poppler-0.18.Poppler.LinkMapping */
    readonly area: Rectangle
    readonly action: Action
    /* Methods of Poppler-0.18.Poppler.LinkMapping */
    copy(): LinkMapping
    free(): void
    static name: string
    static new(): LinkMapping
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): LinkMapping
}
class PageRange {
    /* Fields of Poppler-0.18.Poppler.PageRange */
    readonly startPage: number
    readonly endPage: number
    static name: string
}
class PageTransition {
    /* Fields of Poppler-0.18.Poppler.PageTransition */
    readonly type: PageTransitionType
    readonly alignment: PageTransitionAlignment
    readonly direction: PageTransitionDirection
    readonly duration: number
    readonly angle: number
    readonly scale: number
    readonly rectangular: boolean
    readonly durationReal: number
    /* Methods of Poppler-0.18.Poppler.PageTransition */
    copy(): PageTransition
    free(): void
    static name: string
    static new(): PageTransition
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PageTransition
}
class Point {
    /* Fields of Poppler-0.18.Poppler.Point */
    readonly x: number
    readonly y: number
    /* Methods of Poppler-0.18.Poppler.Point */
    copy(): Point
    free(): void
    static name: string
    static new(): Point
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Point
}
class Quadrilateral {
    /* Fields of Poppler-0.18.Poppler.Quadrilateral */
    readonly p1: Point
    readonly p2: Point
    readonly p3: Point
    readonly p4: Point
    /* Methods of Poppler-0.18.Poppler.Quadrilateral */
    copy(): Quadrilateral
    free(): void
    static name: string
    static new(): Quadrilateral
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Quadrilateral
}
class Rectangle {
    /* Fields of Poppler-0.18.Poppler.Rectangle */
    readonly x1: number
    readonly y1: number
    readonly x2: number
    readonly y2: number
    /* Methods of Poppler-0.18.Poppler.Rectangle */
    copy(): Rectangle
    free(): void
    static name: string
    static new(): Rectangle
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Rectangle
}
class StructureElementIter {
    /* Methods of Poppler-0.18.Poppler.StructureElementIter */
    copy(): StructureElementIter
    free(): void
    getChild(): StructureElementIter
    getElement(): StructureElement
    next(): boolean
    static name: string
    static new(popplerDocument: Document): StructureElementIter
    constructor(popplerDocument: Document)
    /* Static methods and pseudo-constructors */
    static new(popplerDocument: Document): StructureElementIter
}
class TextAttributes {
    /* Fields of Poppler-0.18.Poppler.TextAttributes */
    readonly fontName: string
    readonly fontSize: number
    readonly isUnderlined: boolean
    readonly color: Color
    readonly startIndex: number
    readonly endIndex: number
    /* Methods of Poppler-0.18.Poppler.TextAttributes */
    copy(): TextAttributes
    free(): void
    static name: string
    static new(): TextAttributes
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): TextAttributes
}
class TextSpan {
    /* Methods of Poppler-0.18.Poppler.TextSpan */
    copy(): TextSpan
    free(): void
    getColor(): /* color */ Color
    getFontName(): string
    getText(): string
    isBoldFont(): boolean
    isFixedWidthFont(): boolean
    isSerifFont(): boolean
    static name: string
}
class Action {
    /* Methods of Poppler-0.18.Poppler.Action */
    copy(): Action
    free(): void
    static name: string
}
}
export default Poppler;