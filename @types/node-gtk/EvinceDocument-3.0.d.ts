/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EvinceDocument-3.0
 */

import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace EvinceDocument {

enum AnnotationTextIcon {
    NOTE,
    COMMENT,
    KEY,
    HELP,
    NEW_PARAGRAPH,
    PARAGRAPH,
    INSERT,
    CROSS,
    CIRCLE,
    UNKNOWN,
}
enum AnnotationTextMarkupType {
    HIGHLIGHT,
    STRIKE_OUT,
    UNDERLINE,
    SQUIGGLY,
}
enum AnnotationType {
    UNKNOWN,
    TEXT,
    ATTACHMENT,
    TEXT_MARKUP,
}
enum AnnotationsOverMarkup {
    NOT_IMPLEMENTED,
    UNKNOWN,
    YES,
    NOT,
}
enum CompressionType {
    NONE,
    BZIP2,
    GZIP,
    LZMA,
}
enum DocumentContainsJS {
    UNKNOWN,
    NO,
    YES,
}
enum DocumentError {
    INVALID,
    UNSUPPORTED_CONTENT,
    ENCRYPTED,
}
enum DocumentLayout {
    SINGLE_PAGE,
    ONE_COLUMN,
    TWO_COLUMN_LEFT,
    TWO_COLUMN_RIGHT,
    TWO_PAGE_LEFT,
    TWO_PAGE_RIGHT,
}
enum DocumentMode {
    NONE,
    USE_OC,
    USE_THUMBS,
    FULL_SCREEN,
    USE_ATTACHMENTS,
    PRESENTATION,
}
enum FileExporterFormat {
    UNKNOWN,
    PS,
    PDF,
}
enum FormFieldButtonType {
    PUSH,
    CHECK,
    RADIO,
}
enum FormFieldChoiceType {
    COMBO,
    LIST,
}
enum FormFieldTextType {
    NORMAL,
    MULTILINE,
    FILE_SELECT,
}
enum LinkActionType {
    GOTO_DEST,
    GOTO_REMOTE,
    EXTERNAL_URI,
    LAUNCH,
    NAMED,
    LAYERS_STATE,
    RESET_FORM,
}
enum LinkDestType {
    PAGE,
    XYZ,
    FIT,
    FITH,
    FITV,
    FITR,
    NAMED,
    PAGE_LABEL,
    UNKNOWN,
}
enum SelectionStyle {
    GLYPH,
    WORD,
    LINE,
}
enum TransitionEffectAlignment {
    HORIZONTAL,
    VERTICAL,
}
enum TransitionEffectDirection {
    INWARD,
    OUTWARD,
}
enum TransitionEffectType {
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
enum AnnotationsSaveMask {
    NONE,
    CONTENTS,
    COLOR,
    AREA,
    LABEL,
    OPACITY,
    POPUP_RECT,
    POPUP_IS_OPEN,
    TEXT_IS_OPEN,
    TEXT_ICON,
    ATTACHMENT,
    TEXT_MARKUP_TYPE,
    ALL,
}
enum DocumentInfoFields {
    TITLE,
    FORMAT,
    AUTHOR,
    SUBJECT,
    KEYWORDS,
    LAYOUT,
    CREATOR,
    PRODUCER,
    CREATION_DATE,
    MOD_DATE,
    LINEARIZED,
    START_MODE,
    UI_HINTS,
    PERMISSIONS,
    N_PAGES,
    SECURITY,
    PAPER_SIZE,
    LICENSE,
    CONTAINS_JS,
}
enum DocumentLoadFlags {
    NONE,
    NO_CACHE,
}
enum DocumentPermissions {
    OK_TO_PRINT,
    OK_TO_MODIFY,
    OK_TO_COPY,
    OK_TO_ADD_NOTES,
    FULL,
}
enum DocumentUIHints {
    HIDE_TOOLBAR,
    HIDE_MENUBAR,
    HIDE_WINDOWUI,
    FIT_WINDOW,
    CENTER_WINDOW,
    DISPLAY_DOC_TITLE,
    DIRECTION_RTL,
}
enum FileExporterCapabilities {
    PAGE_SET,
    COPIES,
    COLLATE,
    REVERSE,
    SCALE,
    GENERATE_PDF,
    GENERATE_PS,
    PREVIEW,
    NUMBER_UP,
}
enum FindOptions {
    DEFAULT,
    CASE_SENSITIVE,
    WHOLE_WORDS_ONLY,
}
const MAJOR_VERSION: number
const MINOR_VERSION: number
function backendsManagerGetDocument(mimeType: string): Document
function backendsManagerGetDocumentModuleName(document: Document): string
function documentErrorQuark(): GLib.Quark
function fileCompress(uri: string, type: CompressionType): string
function fileCopyMetadata(from: string, to: string): boolean
function fileGetMimeType(uri: string, fast: boolean): string
function fileGetMimeTypeFromFd(fd: number): string
function fileIsTemp(file: Gio.File): boolean
function fileUncompress(uri: string, type: CompressionType): string
function getLocaleDir(): string
function init(): boolean
function mkdtemp(tmpl: string): string
function mkstemp(tmpl: string, fileName: string): number
function mkstempFile(tmpl: string): Gio.File
function rectCmp(a: Rectangle, b: Rectangle): number
function shouldUsePortal(): boolean
function shutdown(): void
function tmpFileUnlink(file: Gio.File): void
function tmpFilenameUnlink(filename: string): void
function tmpUriUnlink(uri: string): void
function xferUriSimple(from: string, to: string): boolean
function xmpParse(xmp: string, size: number, info: DocumentInfo): boolean
interface AnnotationMarkup_ConstructProps extends Annotation_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    canHavePopup?: boolean
    hasPopup?: boolean
    label?: string
    opacity?: number
    popupIsOpen?: boolean
    rectangle?: Rectangle
}
class AnnotationMarkup {
    /* Properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle
    /* Properties of EvinceDocument-3.0.EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean
    /* Methods of EvinceDocument-3.0.EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ Gdk.Color
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: Gdk.Color): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setModifiedFromTimeT(utime: number): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    connect(sigName: "notify::can-have-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotationMarkup_ConstructProps)
    _init (config?: AnnotationMarkup_ConstructProps): void
    static $gtype: GObject.Type
}
class AsyncRenderer {
    /* Methods of EvinceDocument-3.0.EvinceDocument.AsyncRenderer */
    renderPixbuf(page: number, scale: number, rotation: number): void
    /* Signals of EvinceDocument-3.0.EvinceDocument.AsyncRenderer */
    connect(sigName: "render-finished", callback: ((object: GdkPixbuf.Pixbuf) => void)): number
    on(sigName: "render-finished", callback: (object: GdkPixbuf.Pixbuf) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render-finished", callback: (object: GdkPixbuf.Pixbuf) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render-finished", callback: (object: GdkPixbuf.Pixbuf) => void): NodeJS.EventEmitter
    emit(sigName: "render-finished", object: GdkPixbuf.Pixbuf): void
    static name: string
}
class DocumentAnnotations {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentAnnotations */
    addAnnotation(annot: Annotation, rect: Rectangle): void
    canAddAnnotation(): boolean
    canRemoveAnnotation(): boolean
    documentIsModified(): boolean
    getAnnotations(page: Page): MappingList
    overMarkup(annot: Annotation, x: number, y: number): AnnotationsOverMarkup
    removeAnnotation(annot: Annotation): void
    saveAnnotation(annot: Annotation, mask: AnnotationsSaveMask): void
    static name: string
}
class DocumentAttachments {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentAttachments */
    getAttachments(): Attachment[]
    hasAttachments(): boolean
    static name: string
}
class DocumentFind {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentFind */
    findText(page: Page, text: string, caseSensitive: boolean): Rectangle[]
    findTextWithOptions(page: Page, text: string, options: FindOptions): Rectangle[]
    getSupportedOptions(): FindOptions
    static name: string
}
class DocumentFonts {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentFonts */
    fillModel(model: Gtk.TreeModel): void
    getFontsSummary(): string
    getProgress(): number
    scan(nPages: number): boolean
    static name: string
}
class DocumentForms {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentForms */
    documentIsModified(): boolean
    formFieldButtonGetState(field: FormField): boolean
    formFieldButtonSetState(field: FormField, state: boolean): void
    formFieldChoiceGetItem(field: FormField, index: number): string
    formFieldChoiceGetNItems(field: FormField): number
    formFieldChoiceGetText(field: FormField): string
    formFieldChoiceIsItemSelected(field: FormField, index: number): boolean
    formFieldChoiceSelectItem(field: FormField, index: number): void
    formFieldChoiceSetText(field: FormField, text: string): void
    formFieldChoiceToggleItem(field: FormField, index: number): void
    formFieldChoiceUnselectAll(field: FormField): void
    formFieldTextGetText(field: FormField): string
    formFieldTextSetText(field: FormField, text: string): void
    getFormFields(page: Page): MappingList
    resetForm(action: LinkAction): void
    static name: string
}
class DocumentImages {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentImages */
    getImage(image: Image): GdkPixbuf.Pixbuf
    getImageMapping(page: Page): MappingList
    static name: string
}
class DocumentLayers {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentLayers */
    getLayers(): Gtk.TreeModel
    hasLayers(): boolean
    hideLayer(layer: Layer): void
    layerIsVisible(layer: Layer): boolean
    showLayer(layer: Layer): void
    static name: string
}
class DocumentLinks {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentLinks */
    findLinkDest(linkName: string): LinkDest
    findLinkPage(linkName: string): number
    getDestPage(dest: LinkDest): number
    getDestPageLabel(dest: LinkDest): string
    getLinkPage(link: Link): number
    getLinkPageLabel(link: Link): string
    getLinks(page: Page): MappingList
    getLinksModel(): Gtk.TreeModel
    hasDocumentLinks(): boolean
    static name: string
}
class DocumentMedia {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentMedia */
    getMediaMapping(page: Page): MappingList
    static name: string
}
class DocumentPrint {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentPrint */
    printPage(page: Page, cr: cairo.Context): void
    static name: string
}
class DocumentSecurity {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentSecurity */
    hasDocumentSecurity(): boolean
    setPassword(password: string): void
    static name: string
}
class DocumentText {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentText */
    getText(page: Page): string
    getTextAttrs(page: Page): Pango.AttrList
    getTextLayout(page: Page, areas: Rectangle, nAreas: number): boolean
    getTextMapping(page: Page): cairo.Region
    static name: string
}
class DocumentTransition {
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentTransition */
    getEffect(page: number): TransitionEffect
    getPageDuration(page: number): number
    static name: string
}
class FileExporter {
    /* Methods of EvinceDocument-3.0.EvinceDocument.FileExporter */
    begin(fc: FileExporterContext): void
    beginPage(): void
    doPage(rc: RenderContext): void
    end(): void
    endPage(): void
    getCapabilities(): FileExporterCapabilities
    static name: string
}
class Selection {
    /* Methods of EvinceDocument-3.0.EvinceDocument.Selection */
    getSelectedText(page: Page, style: SelectionStyle, points: Rectangle): string
    getSelectionRegion(rc: RenderContext, style: SelectionStyle, points: Rectangle): cairo.Region
    renderSelection(rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color): void
    static name: string
}
interface Annotation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.Annotation */
    area?: Rectangle
    color?: object
    contents?: string
    modified?: string
    name?: string
    page?: Page
    rgba?: Gdk.RGBA
}
class Annotation {
    /* Properties of EvinceDocument-3.0.EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ Gdk.Color
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: Gdk.Color): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setModifiedFromTimeT(utime: number): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    connect(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Annotation_ConstructProps)
    _init (config?: Annotation_ConstructProps): void
    static $gtype: GObject.Type
}
interface AnnotationAttachment_ConstructProps extends Annotation_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment */
    attachment?: Attachment
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    canHavePopup?: boolean
    hasPopup?: boolean
    label?: string
    opacity?: number
    popupIsOpen?: boolean
    rectangle?: Rectangle
}
class AnnotationAttachment {
    /* Properties of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment */
    attachment: Attachment
    /* Properties of EvinceDocument-3.0.EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.AnnotationAttachment */
    getAttachment(): Attachment
    setAttachment(attachment: Attachment): boolean
    /* Methods of EvinceDocument-3.0.EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ Gdk.Color
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: Gdk.Color): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setModifiedFromTimeT(utime: number): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attachment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attachment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attachment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attachment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attachment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-have-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotationAttachment_ConstructProps)
    _init (config?: AnnotationAttachment_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page: Page, attachment: Attachment): AnnotationAttachment
    static $gtype: GObject.Type
}
interface AnnotationText_ConstructProps extends Annotation_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationText */
    icon?: AnnotationTextIcon
    isOpen?: boolean
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    canHavePopup?: boolean
    hasPopup?: boolean
    label?: string
    opacity?: number
    popupIsOpen?: boolean
    rectangle?: Rectangle
}
class AnnotationText {
    /* Properties of EvinceDocument-3.0.EvinceDocument.AnnotationText */
    icon: AnnotationTextIcon
    isOpen: boolean
    /* Properties of EvinceDocument-3.0.EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.AnnotationText */
    getIcon(): AnnotationTextIcon
    getIsOpen(): boolean
    setIcon(icon: AnnotationTextIcon): boolean
    setIsOpen(isOpen: boolean): boolean
    /* Methods of EvinceDocument-3.0.EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ Gdk.Color
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: Gdk.Color): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setModifiedFromTimeT(utime: number): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-have-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotationText_ConstructProps)
    _init (config?: AnnotationText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page: Page): AnnotationText
    static $gtype: GObject.Type
}
interface AnnotationTextMarkup_ConstructProps extends Annotation_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup */
    type?: AnnotationTextMarkupType
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    canHavePopup?: boolean
    hasPopup?: boolean
    label?: string
    opacity?: number
    popupIsOpen?: boolean
    rectangle?: Rectangle
}
class AnnotationTextMarkup {
    /* Properties of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup */
    type: AnnotationTextMarkupType
    /* Properties of EvinceDocument-3.0.EvinceDocument.Annotation */
    area: Rectangle
    color: object
    contents: string
    modified: string
    name: string
    rgba: Gdk.RGBA
    /* Properties of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    canHavePopup: boolean
    hasPopup: boolean
    label: string
    opacity: number
    popupIsOpen: boolean
    rectangle: Rectangle
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.AnnotationTextMarkup */
    getMarkupType(): AnnotationTextMarkupType
    setMarkupType(markupType: AnnotationTextMarkupType): boolean
    /* Methods of EvinceDocument-3.0.EvinceDocument.Annotation */
    equal(other: Annotation): boolean
    getAnnotationType(): AnnotationType
    getArea(area: Rectangle): void
    getColor(): /* color */ Gdk.Color
    getContents(): string
    getModified(): string
    getName(): string
    getPage(): Page
    getPageIndex(): number
    getRgba(): /* rgba */ Gdk.RGBA
    setArea(area: Rectangle): boolean
    setColor(color: Gdk.Color): boolean
    setContents(contents: string): boolean
    setModified(modified: string): boolean
    setModifiedFromTime(utime: GLib.Time): boolean
    setModifiedFromTimeT(utime: number): boolean
    setName(name: string): boolean
    setRgba(rgba: Gdk.RGBA): boolean
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
    /* Methods of EvinceDocument-3.0.EvinceDocument.AnnotationMarkup */
    getLabel(): string
    getOpacity(): number
    getPopupIsOpen(): boolean
    getRectangle(evRect: Rectangle): void
    setHasPopup(hasPopup: boolean): boolean
    setLabel(label: string): boolean
    setOpacity(opacity: number): boolean
    setPopupIsOpen(isOpen: boolean): boolean
    setRectangle(evRect: Rectangle): boolean
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::area", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::area", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contents", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::contents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-have-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-have-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-have-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-popup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-popup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::popup-is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-is-open", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::popup-is-open", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AnnotationTextMarkup_ConstructProps)
    _init (config?: AnnotationTextMarkup_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static highlightNew(page: Page): AnnotationTextMarkup
    static squigglyNew(page: Page): AnnotationTextMarkup
    static strikeOutNew(page: Page): AnnotationTextMarkup
    static underlineNew(page: Page): AnnotationTextMarkup
    static $gtype: GObject.Type
}
interface Attachment_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.Attachment */
    ctime?: number
    data?: object
    description?: string
    mtime?: number
    name?: string
    size?: number
}
class Attachment {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.Attachment */
    getCreationDate(): GLib.Time
    getDescription(): string
    getMimeType(): string
    getModificationDate(): GLib.Time
    getName(): string
    open(screen: Gdk.Screen, timestamp: number): boolean
    save(file: Gio.File): boolean
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
    /* Static methods and pseudo-constructors */
    static new(name: string, description: string, mtime: GLib.Time, ctime: GLib.Time, size: number, data?: object | null): Attachment
    static errorQuark(): GLib.Quark
    static $gtype: GObject.Type
}
interface Document_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.Document */
    modified?: boolean
}
class Document {
    /* Properties of EvinceDocument-3.0.EvinceDocument.Document */
    modified: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.Document */
    checkDimensions(): boolean
    findPageByLabel(pageLabel: string, pageIndex: number): boolean
    getBackendInfo(info: DocumentBackendInfo): boolean
    getInfo(): DocumentInfo
    getMaxLabelLen(): number
    getMaxPageSize(width: number, height: number): void
    getMinPageSize(width: number, height: number): void
    getModified(): boolean
    getNPages(): number
    getPage(index: number): Page
    getPageLabel(pageIndex: number): string
    getPageSize(pageIndex: number): [ /* width */ number | null, /* height */ number | null ]
    getSize(): number
    getThumbnail(rc: RenderContext): GdkPixbuf.Pixbuf
    getThumbnailSurface(rc: RenderContext): cairo.Surface
    getTitle(): string
    getUri(): string
    hasSynctex(): boolean
    hasTextPageLabels(): boolean
    isPageSizeUniform(): boolean
    load(uri: string): boolean
    loadFd(fd: number, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    loadFull(uri: string, flags: DocumentLoadFlags): boolean
    loadGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    loadStream(stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): boolean
    render(rc: RenderContext): cairo.Surface
    save(uri: string): boolean
    setModified(modified: boolean): void
    synctexBackwardSearch(pageIndex: number, x: number, y: number): SourceLink
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
    connect(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modified", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static docMutexLock(): void
    static docMutexTrylock(): boolean
    static docMutexUnlock(): void
    static factoryAddFilters(chooser: Gtk.Widget, document: Document): void
    static factoryGetDocument(uri: string): Document
    static factoryGetDocumentForFd(fd: number, mimeType: string, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): Document
    static factoryGetDocumentForGfile(file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): Document
    static factoryGetDocumentForStream(stream: Gio.InputStream, mimeType: string | null, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null): Document
    static factoryGetDocumentFull(uri: string, flags: DocumentLoadFlags): Document
    static fcMutexLock(): void
    static fcMutexTrylock(): boolean
    static fcMutexUnlock(): void
    static miscFormatDate(utime: GLib.Time): string
    static miscFormatDatetime(dt: GLib.DateTime): string
    static miscGetLoadingThumbnail(width: number, height: number, invertedColors: boolean): GdkPixbuf.Pixbuf
    static miscGetPageBorderSize(pageWidth: number, pageHeight: number, border: Gtk.Border): void
    static miscGetPointerPosition(widget: Gtk.Widget): [ /* x */ number, /* y */ number ]
    static miscGetScreenDpi(screen: Gdk.Screen): number
    static miscGetThumbnailFrame(width: number, height: number, sourcePixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static miscGetWidgetDpi(widget: Gtk.Widget): number
    static miscInvertPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    static miscInvertSurface(surface: cairo.Surface): void
    static miscPaintOnePage(cr: cairo.Context, widget: Gtk.Widget, area: Gdk.Rectangle, border: Gtk.Border, highlight: boolean, invertedColors: boolean): void
    static miscPixbufFromSurface(surface: cairo.Surface): GdkPixbuf.Pixbuf
    static miscRenderLoadingThumbnail(widget: Gtk.Widget, width: number, height: number, invertedColors: boolean): GdkPixbuf.Pixbuf
    static miscRenderLoadingThumbnailSurface(widget: Gtk.Widget, width: number, height: number, invertedColors: boolean): cairo.Surface
    static miscRenderThumbnailSurfaceWithFrame(widget: Gtk.Widget, sourceSurface: cairo.Surface, width: number, height: number): cairo.Surface
    static miscRenderThumbnailWithFrame(widget: Gtk.Widget, sourcePixbuf: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
    static miscSurfaceFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface
    static miscSurfaceRotateAndScale(surface: cairo.Surface, destWidth: number, destHeight: number, destRotation: number): cairo.Surface
    static $gtype: GObject.Type
}
interface FormField_ConstructProps extends GObject.Object_ConstructProps {
}
class FormField {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
interface FormFieldButton_ConstructProps extends FormField_ConstructProps {
}
class FormFieldButton {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormField */
    readonly parent: GObject.Object
    readonly id: number
    readonly isReadOnly: boolean
    readonly fontSize: number
    readonly activationLink: Link
    readonly page: Page
    readonly changed: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    constructor (config?: FormFieldButton_ConstructProps)
    _init (config?: FormFieldButton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, type: FormFieldButtonType): FormFieldButton
    static $gtype: GObject.Type
}
interface FormFieldChoice_ConstructProps extends FormField_ConstructProps {
}
class FormFieldChoice {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormField */
    readonly parent: GObject.Object
    readonly id: number
    readonly isReadOnly: boolean
    readonly fontSize: number
    readonly activationLink: Link
    readonly page: Page
    readonly changed: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    constructor (config?: FormFieldChoice_ConstructProps)
    _init (config?: FormFieldChoice_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, type: FormFieldChoiceType): FormFieldChoice
    static $gtype: GObject.Type
}
interface FormFieldSignature_ConstructProps extends FormField_ConstructProps {
}
class FormFieldSignature {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormField */
    readonly parent: GObject.Object
    readonly id: number
    readonly isReadOnly: boolean
    readonly fontSize: number
    readonly activationLink: Link
    readonly page: Page
    readonly changed: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    constructor (config?: FormFieldSignature_ConstructProps)
    _init (config?: FormFieldSignature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number): FormFieldSignature
    static $gtype: GObject.Type
}
interface FormFieldText_ConstructProps extends FormField_ConstructProps {
}
class FormFieldText {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormField */
    readonly parent: GObject.Object
    readonly id: number
    readonly isReadOnly: boolean
    readonly fontSize: number
    readonly activationLink: Link
    readonly page: Page
    readonly changed: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    constructor (config?: FormFieldText_ConstructProps)
    _init (config?: FormFieldText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: number, type: FormFieldTextType): FormFieldText
    static $gtype: GObject.Type
}
interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
class Image {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.Image */
    getId(): number
    getPage(): number
    getPixbuf(): GdkPixbuf.Pixbuf
    getTmpUri(): string
    saveTmp(pixbuf: GdkPixbuf.Pixbuf): string
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
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page: number, imgId: number): Image
    static newFromPixbuf(pixbuf: GdkPixbuf.Pixbuf): Image
    static $gtype: GObject.Type
}
interface Layer_ConstructProps extends GObject.Object_ConstructProps {
}
class Layer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.Layer */
    getRbGroup(): number
    isParent(): boolean
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
    /* Static methods and pseudo-constructors */
    static new(isParent: boolean, rbGroup: number): Layer
    static $gtype: GObject.Type
}
interface Link_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.Link */
    action?: LinkAction
    title?: string
}
class Link {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.Link */
    getAction(): LinkAction
    getTitle(): string
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
    constructor (config?: Link_ConstructProps)
    _init (config?: Link_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title: string, action: LinkAction): Link
    static $gtype: GObject.Type
}
interface LinkAction_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.LinkAction */
    dest?: LinkDest
    excludeResetFields?: boolean
    filename?: string
    hideList?: object
    name?: string
    params?: string
    resetFields?: object
    showList?: object
    toggleList?: object
    type?: LinkActionType
    uri?: string
}
class LinkAction {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.LinkAction */
    equal(b: LinkAction): boolean
    getActionType(): LinkActionType
    getDest(): LinkDest
    getExcludeResetFields(): boolean
    getFilename(): string
    getHideList(): Layer[]
    getName(): string
    getParams(): string
    getShowList(): Layer[]
    getToggleList(): Layer[]
    getUri(): string
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
    constructor (config?: LinkAction_ConstructProps)
    _init (config?: LinkAction_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newDest(dest: LinkDest): LinkAction
    static newExternalUri(uri: string): LinkAction
    static newLaunch(filename: string, params: string): LinkAction
    static newLayersState(showList: Layer[], hideList: Layer[], toggleList: Layer[]): LinkAction
    static newNamed(name: string): LinkAction
    static newRemote(dest: LinkDest, filename: string): LinkAction
    static $gtype: GObject.Type
}
interface LinkDest_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.LinkDest */
    bottom?: number
    change?: number
    left?: number
    named?: string
    page?: number
    pageLabel?: string
    right?: number
    top?: number
    type?: LinkDestType
    zoom?: number
}
class LinkDest {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.LinkDest */
    equal(b: LinkDest): boolean
    getBottom(): number
    getDestType(): LinkDestType
    getLeft(changeLeft: boolean): number
    getNamedDest(): string
    getPage(): number
    getPageLabel(): string
    getRight(): number
    getTop(changeTop: boolean): number
    getZoom(changeZoom: boolean): number
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
    constructor (config?: LinkDest_ConstructProps)
    _init (config?: LinkDest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFit(page: number): LinkDest
    static newFith(page: number, top: number, changeTop: boolean): LinkDest
    static newFitr(page: number, left: number, bottom: number, right: number, top: number): LinkDest
    static newFitv(page: number, left: number, changeLeft: boolean): LinkDest
    static newNamed(namedDest: string): LinkDest
    static newPage(page: number): LinkDest
    static newPageLabel(pageLabel: string): LinkDest
    static newXyz(page: number, left: number, top: number, zoom: number, changeLeft: boolean, changeTop: boolean, changeZoom: boolean): LinkDest
    static $gtype: GObject.Type
}
interface Media_ConstructProps extends GObject.Object_ConstructProps {
}
class Media {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.Media */
    getPageIndex(): number
    getShowControls(): boolean
    getUri(): string
    setShowControls(showControls: boolean): void
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
    /* Static methods and pseudo-constructors */
    static newForUri(page: Page, uri: string): Media
    static $gtype: GObject.Type
}
interface Page_ConstructProps extends GObject.Object_ConstructProps {
}
class Page {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    constructor (config?: Page_ConstructProps)
    _init (config?: Page_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(index: number): Page
    static $gtype: GObject.Type
}
interface RenderContext_ConstructProps extends GObject.Object_ConstructProps {
}
class RenderContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of EvinceDocument-3.0.EvinceDocument.RenderContext */
    computeScaledSize(widthPoints: number, heightPoints: number, scaledWidth: number, scaledHeight: number): void
    computeScales(widthPoints: number, heightPoints: number, scaleX: number, scaleY: number): void
    computeTransformedSize(widthPoints: number, heightPoints: number, transformedWidth: number, transformedHeight: number): void
    setPage(page: Page): void
    setRotation(rotation: number): void
    setScale(scale: number): void
    setTargetSize(targetWidth: number, targetHeight: number): void
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
    constructor (config?: RenderContext_ConstructProps)
    _init (config?: RenderContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(page: Page, rotation: number, scale: number): RenderContext
    static $gtype: GObject.Type
}
interface TransitionEffect_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of EvinceDocument-3.0.EvinceDocument.TransitionEffect */
    alignment?: TransitionEffectAlignment
    angle?: number
    direction?: TransitionEffectDirection
    duration?: number
    durationReal?: number
    rectangular?: boolean
    scale?: number
    type?: TransitionEffectType
}
class TransitionEffect {
    /* Properties of EvinceDocument-3.0.EvinceDocument.TransitionEffect */
    alignment: TransitionEffectAlignment
    angle: number
    direction: TransitionEffectDirection
    duration: number
    durationReal: number
    rectangular: boolean
    scale: number
    type: TransitionEffectType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify::alignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::angle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::angle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::angle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::angle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::angle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration-real", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-real", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration-real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration-real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration-real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rectangular", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rectangular", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rectangular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rectangular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rectangular", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TransitionEffect_ConstructProps)
    _init (config?: TransitionEffect_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AnnotationAttachmentClass {
    static name: string
}
abstract class AnnotationClass {
    static name: string
}
abstract class AnnotationMarkupInterface {
    static name: string
}
abstract class AnnotationTextClass {
    static name: string
}
abstract class AnnotationTextMarkupClass {
    static name: string
}
abstract class AsyncRendererInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.AsyncRendererInterface */
    readonly baseIface: GObject.TypeInterface
    readonly renderFinished: (renderer: AsyncRenderer, pixbuf: GdkPixbuf.Pixbuf) => void
    readonly renderPixbuf: (renderer: AsyncRenderer, page: number, scale: number, rotation: number) => void
    static name: string
}
abstract class AttachmentClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.AttachmentClass */
    readonly baseClass: GObject.ObjectClass
    static name: string
}
abstract class DocumentAnnotationsInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentAnnotationsInterface */
    readonly baseIface: GObject.TypeInterface
    readonly getAnnotations: (documentAnnots: DocumentAnnotations, page: Page) => MappingList
    readonly documentIsModified: (documentAnnots: DocumentAnnotations) => boolean
    readonly addAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation, rect: Rectangle) => void
    readonly saveAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation, mask: AnnotationsSaveMask) => void
    readonly removeAnnotation: (documentAnnots: DocumentAnnotations, annot: Annotation) => void
    readonly overMarkup: (documentAnnots: DocumentAnnotations, annot: Annotation, x: number, y: number) => AnnotationsOverMarkup
    static name: string
}
abstract class DocumentAttachmentsInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentAttachmentsInterface */
    readonly baseIface: GObject.TypeInterface
    readonly hasAttachments: (documentAttachments: DocumentAttachments) => boolean
    readonly getAttachments: (documentAttachments: DocumentAttachments) => Attachment[]
    static name: string
}
class DocumentBackendInfo {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentBackendInfo */
    readonly name: string
    readonly version: string
    static name: string
}
abstract class DocumentClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentClass */
    readonly baseClass: GObject.ObjectClass
    readonly load: (document: Document, uri: string) => boolean
    readonly save: (document: Document, uri: string) => boolean
    readonly getNPages: (document: Document) => number
    readonly getPage: (document: Document, index: number) => Page
    readonly getPageSize: (document: Document, page: Page) => [ /* width */ number | null, /* height */ number | null ]
    readonly getPageLabel: (document: Document, page: Page) => string
    readonly render: (document: Document, rc: RenderContext) => cairo.Surface
    readonly getThumbnail: (document: Document, rc: RenderContext) => GdkPixbuf.Pixbuf
    readonly getInfo: (document: Document) => DocumentInfo
    readonly getBackendInfo: (document: Document, info: DocumentBackendInfo) => boolean
    readonly supportSynctex: (document: Document) => boolean
    readonly loadStream: (document: Document, stream: Gio.InputStream, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null) => boolean
    readonly loadGfile: (document: Document, file: Gio.File, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null) => boolean
    readonly getThumbnailSurface: (document: Document, rc: RenderContext) => cairo.Surface
    readonly loadFd: (document: Document, fd: number, flags: DocumentLoadFlags, cancellable?: Gio.Cancellable | null) => boolean
    static name: string
}
abstract class DocumentFindInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentFindInterface */
    readonly baseIface: GObject.TypeInterface
    readonly findText: (documentFind: DocumentFind, page: Page, text: string, caseSensitive: boolean) => Rectangle[]
    readonly findTextWithOptions: (documentFind: DocumentFind, page: Page, text: string, options: FindOptions) => Rectangle[]
    readonly getSupportedOptions: (documentFind: DocumentFind) => FindOptions
    static name: string
}
abstract class DocumentFontsInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentFontsInterface */
    readonly baseIface: GObject.TypeInterface
    readonly scan: (documentFonts: DocumentFonts, nPages: number) => boolean
    readonly getProgress: (documentFonts: DocumentFonts) => number
    readonly fillModel: (documentFonts: DocumentFonts, model: Gtk.TreeModel) => void
    readonly getFontsSummary: (documentFonts: DocumentFonts) => string
    static name: string
}
abstract class DocumentFormsInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentFormsInterface */
    readonly baseIface: GObject.TypeInterface
    readonly getFormFields: (documentForms: DocumentForms, page: Page) => MappingList
    readonly documentIsModified: (documentForms: DocumentForms) => boolean
    readonly formFieldTextGetText: (documentForms: DocumentForms, field: FormField) => string
    readonly formFieldTextSetText: (documentForms: DocumentForms, field: FormField, text: string) => void
    readonly formFieldButtonGetState: (documentForms: DocumentForms, field: FormField) => boolean
    readonly formFieldButtonSetState: (documentForms: DocumentForms, field: FormField, state: boolean) => void
    readonly formFieldChoiceGetItem: (documentForms: DocumentForms, field: FormField, index: number) => string
    readonly formFieldChoiceGetNItems: (documentForms: DocumentForms, field: FormField) => number
    readonly formFieldChoiceIsItemSelected: (documentForms: DocumentForms, field: FormField, index: number) => boolean
    readonly formFieldChoiceSelectItem: (documentForms: DocumentForms, field: FormField, index: number) => void
    readonly formFieldChoiceToggleItem: (documentForms: DocumentForms, field: FormField, index: number) => void
    readonly formFieldChoiceUnselectAll: (documentForms: DocumentForms, field: FormField) => void
    readonly formFieldChoiceSetText: (documentForms: DocumentForms, field: FormField, text: string) => void
    readonly formFieldChoiceGetText: (documentForms: DocumentForms, field: FormField) => string
    readonly resetForm: (documentForms: DocumentForms, action: LinkAction) => void
    static name: string
}
abstract class DocumentImagesInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentImagesInterface */
    readonly baseIface: GObject.TypeInterface
    readonly getImageMapping: (documentImages: DocumentImages, page: Page) => MappingList
    readonly getImage: (documentImages: DocumentImages, image: Image) => GdkPixbuf.Pixbuf
    static name: string
}
class DocumentInfo {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentInfo */
    readonly title: string
    readonly format: string
    readonly author: string
    readonly subject: string
    readonly keywords: string
    readonly creator: string
    readonly producer: string
    readonly linearized: string
    readonly security: string
    readonly creationDate: GLib.Time
    readonly modifiedDate: GLib.Time
    readonly layout: DocumentLayout
    readonly mode: DocumentMode
    readonly uiHints: number
    readonly permissions: number
    readonly nPages: number
    readonly paperHeight: number
    readonly paperWidth: number
    readonly license: DocumentLicense
    readonly containsJs: DocumentContainsJS
    readonly fieldsMask: number
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentInfo */
    copy(): DocumentInfo
    free(): void
    getCreatedDatetime(): GLib.DateTime | null
    getModifiedDatetime(): GLib.DateTime | null
    setFromXmp(xmp: string, size: number): boolean
    takeCreatedDatetime(datetime: GLib.DateTime): void
    takeModifiedDatetime(datetime: GLib.DateTime): void
    static name: string
    static new(): DocumentInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): DocumentInfo
}
abstract class DocumentLayersInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentLayersInterface */
    readonly baseIface: GObject.TypeInterface
    readonly hasLayers: (documentLayers: DocumentLayers) => boolean
    readonly getLayers: (documentLayers: DocumentLayers) => Gtk.TreeModel
    readonly showLayer: (documentLayers: DocumentLayers, layer: Layer) => void
    readonly hideLayer: (documentLayers: DocumentLayers, layer: Layer) => void
    readonly layerIsVisible: (documentLayers: DocumentLayers, layer: Layer) => boolean
    static name: string
}
class DocumentLicense {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentLicense */
    readonly text: string
    readonly uri: string
    readonly webStatement: string
    /* Methods of EvinceDocument-3.0.EvinceDocument.DocumentLicense */
    copy(): DocumentLicense
    free(): void
    getText(): string | null
    getUri(): string | null
    getWebStatement(): string | null
    static name: string
    static new(): DocumentLicense
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): DocumentLicense
}
abstract class DocumentLinksInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentLinksInterface */
    readonly baseIface: GObject.TypeInterface
    readonly hasDocumentLinks: (documentLinks: DocumentLinks) => boolean
    readonly getLinksModel: (documentLinks: DocumentLinks) => Gtk.TreeModel
    readonly getLinks: (documentLinks: DocumentLinks, page: Page) => MappingList
    readonly findLinkDest: (documentLinks: DocumentLinks, linkName: string) => LinkDest
    readonly findLinkPage: (documentLinks: DocumentLinks, linkName: string) => number
    static name: string
}
abstract class DocumentMediaInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentMediaInterface */
    readonly baseIface: GObject.TypeInterface
    readonly getMediaMapping: (documentMedia: DocumentMedia, page: Page) => MappingList
    static name: string
}
abstract class DocumentPrintInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentPrintInterface */
    readonly baseIface: GObject.TypeInterface
    readonly printPage: (documentPrint: DocumentPrint, page: Page, cr: cairo.Context) => void
    static name: string
}
class DocumentPrivate {
    static name: string
}
abstract class DocumentSecurityInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentSecurityInterface */
    readonly baseIface: GObject.TypeInterface
    readonly hasDocumentSecurity: (documentSecurity: DocumentSecurity) => boolean
    readonly setPassword: (documentSecurity: DocumentSecurity, password: string) => void
    static name: string
}
abstract class DocumentTextInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentTextInterface */
    readonly baseIface: GObject.TypeInterface
    readonly getTextMapping: (documentText: DocumentText, page: Page) => cairo.Region
    readonly getText: (documentText: DocumentText, page: Page) => string
    readonly getTextLayout: (documentText: DocumentText, page: Page, areas: Rectangle, nAreas: number) => boolean
    readonly getTextAttrs: (documentText: DocumentText, page: Page) => Pango.AttrList
    static name: string
}
abstract class DocumentTransitionInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.DocumentTransitionInterface */
    readonly baseIface: GObject.TypeInterface
    readonly getPageDuration: (documentTrans: DocumentTransition, page: number) => number
    readonly getEffect: (documentTrans: DocumentTransition, page: number) => TransitionEffect
    static name: string
}
class FileExporterContext {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FileExporterContext */
    readonly format: FileExporterFormat
    readonly filename: string
    readonly firstPage: number
    readonly lastPage: number
    readonly paperWidth: number
    readonly paperHeight: number
    readonly duplex: boolean
    readonly pagesPerSheet: number
    static name: string
}
abstract class FileExporterInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FileExporterInterface */
    readonly baseIface: GObject.TypeInterface
    readonly begin: (exporter: FileExporter, fc: FileExporterContext) => void
    readonly beginPage: (exporter: FileExporter) => void
    readonly doPage: (exporter: FileExporter, rc: RenderContext) => void
    readonly endPage: (exporter: FileExporter) => void
    readonly end: (exporter: FileExporter) => void
    readonly getCapabilities: (exporter: FileExporter) => FileExporterCapabilities
    static name: string
}
abstract class FormFieldButtonClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormFieldButtonClass */
    readonly parentClass: FormFieldClass
    static name: string
}
abstract class FormFieldChoiceClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormFieldChoiceClass */
    readonly parentClass: FormFieldClass
    static name: string
}
abstract class FormFieldClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormFieldClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FormFieldSignatureClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormFieldSignatureClass */
    readonly parentClass: FormFieldClass
    static name: string
}
abstract class FormFieldTextClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.FormFieldTextClass */
    readonly parentClass: FormFieldClass
    static name: string
}
abstract class ImageClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.ImageClass */
    readonly baseClass: GObject.ObjectClass
    static name: string
}
class ImagePrivate {
    static name: string
}
abstract class LayerClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.LayerClass */
    readonly baseClass: GObject.ObjectClass
    static name: string
}
class LayerPrivate {
    static name: string
}
abstract class LinkActionClass {
    static name: string
}
class LinkActionPrivate {
    static name: string
}
abstract class LinkClass {
    static name: string
}
abstract class LinkDestClass {
    static name: string
}
class LinkDestPrivate {
    static name: string
}
class LinkPrivate {
    static name: string
}
class Mapping {
    /* Fields of EvinceDocument-3.0.EvinceDocument.Mapping */
    readonly area: Rectangle
    readonly data: object
    static name: string
}
class MappingList {
    /* Methods of EvinceDocument-3.0.EvinceDocument.MappingList */
    find(data?: object | null): Mapping
    findCustom(data: object | null, func: GLib.CompareFunc): Mapping
    get(x: number, y: number): Mapping
    getData(x: number, y: number): object | null
    getList(): Mapping[]
    getPage(): number
    length(): number
    nth(n: number): Mapping
    ref(): MappingList
    remove(mapping: Mapping): void
    unref(): void
    static name: string
    static new(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify): MappingList
    constructor(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(page: number, list: Mapping[], dataDestroyFunc: GLib.DestroyNotify): MappingList
}
abstract class MediaClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.MediaClass */
    readonly baseClass: GObject.ObjectClass
    static name: string
}
class MediaPrivate {
    static name: string
}
abstract class PageClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.PageClass */
    readonly baseClass: GObject.ObjectClass
    static name: string
}
class Point {
    /* Fields of EvinceDocument-3.0.EvinceDocument.Point */
    readonly x: number
    readonly y: number
    static name: string
}
class Rectangle {
    /* Fields of EvinceDocument-3.0.EvinceDocument.Rectangle */
    readonly x1: number
    readonly y1: number
    readonly x2: number
    readonly y2: number
    /* Methods of EvinceDocument-3.0.EvinceDocument.Rectangle */
    copy(): Rectangle
    free(): void
    static name: string
    static new(): Rectangle
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Rectangle
}
abstract class RenderContextClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.RenderContextClass */
    readonly klass: GObject.ObjectClass
    static name: string
}
abstract class SelectionInterface {
    /* Fields of EvinceDocument-3.0.EvinceDocument.SelectionInterface */
    readonly baseIface: GObject.TypeInterface
    readonly renderSelection: (selection: Selection, rc: RenderContext, surface: cairo.Surface, points: Rectangle, oldPoints: Rectangle, style: SelectionStyle, text: Gdk.Color, base: Gdk.Color) => void
    readonly getSelectedText: (selection: Selection, page: Page, style: SelectionStyle, points: Rectangle) => string
    readonly getSelectionRegion: (selection: Selection, rc: RenderContext, style: SelectionStyle, points: Rectangle) => cairo.Region
    static name: string
}
class SourceLink {
    /* Fields of EvinceDocument-3.0.EvinceDocument.SourceLink */
    readonly filename: string
    readonly line: number
    readonly col: number
    /* Methods of EvinceDocument-3.0.EvinceDocument.SourceLink */
    copy(): SourceLink
    free(): void
    static name: string
    static new(filename: string, line: number, col: number): SourceLink
    constructor(filename: string, line: number, col: number)
    /* Static methods and pseudo-constructors */
    static new(filename: string, line: number, col: number): SourceLink
}
abstract class TransitionEffectClass {
    /* Fields of EvinceDocument-3.0.EvinceDocument.TransitionEffectClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class TypeInfo {
    /* Fields of EvinceDocument-3.0.EvinceDocument.TypeInfo */
    readonly desc: string
    readonly mimeTypes: string
    static name: string
}
    type BackendPage = object
    type BackendPageDestroyFunc = GLib.DestroyNotify
}
export default EvinceDocument;