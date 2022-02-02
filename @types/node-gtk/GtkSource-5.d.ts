/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GtkSource-5
 */

import type Gtk from './Gtk-4.0';
import type Gsk from './Gsk-4.0';
import type Graphene from './Graphene-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace GtkSource {

enum BackgroundPatternType {
    NONE,
    GRID,
}
enum BracketMatchType {
    NONE,
    OUT_OF_RANGE,
    NOT_FOUND,
    FOUND,
}
enum ChangeCaseType {
    LOWER,
    UPPER,
    TOGGLE,
    TITLE,
}
enum CompletionActivation {
    NONE,
    INTERACTIVE,
    USER_REQUESTED,
}
enum CompletionColumn {
    ICON,
    BEFORE,
    TYPED_TEXT,
    AFTER,
    COMMENT,
    DETAILS,
}
enum CompressionType {
    NONE,
    GZIP,
}
enum FileLoaderError {
    TOO_BIG,
    ENCODING_AUTO_DETECTION_FAILED,
    CONVERSION_FALLBACK,
}
enum FileSaverError {
    INVALID_CHARS,
    EXTERNALLY_MODIFIED,
}
enum GutterRendererAlignmentMode {
    CELL,
    FIRST,
    LAST,
}
enum NewlineType {
    LF,
    CR,
    CR_LF,
}
enum SmartHomeEndType {
    DISABLED,
    BEFORE,
    AFTER,
    ALWAYS,
}
enum ViewGutterPosition {
    LINES,
    MARKS,
}
enum FileSaverFlags {
    NONE,
    IGNORE_INVALID_CHARS,
    IGNORE_MODIFICATION_TIME,
    CREATE_BACKUP,
}
enum SortFlags {
    NONE,
    CASE_SENSITIVE,
    REVERSE_ORDER,
    REMOVE_DUPLICATES,
}
enum SpaceLocationFlags {
    NONE,
    LEADING,
    INSIDE_TEXT,
    TRAILING,
    ALL,
}
enum SpaceTypeFlags {
    NONE,
    SPACE,
    TAB,
    NEWLINE,
    NBSP,
    ALL,
}
function encodingGetAll(): Encoding[]
function encodingGetCurrent(): Encoding
function encodingGetDefaultCandidates(): Encoding[]
function encodingGetFromCharset(charset: string): Encoding | null
function encodingGetUtf8(): Encoding
function fileLoaderErrorQuark(): GLib.Quark
function fileSaverErrorQuark(): GLib.Quark
function finalize(): void
function init(): void
function schedulerAdd(callback: SchedulerCallback): number
function schedulerAddFull(callback: SchedulerCallback): number
function schedulerRemove(handlerId: number): void
function utilsEscapeSearchText(text: string): string
function utilsUnescapeSearchText(text: string): string
interface SchedulerCallback {
    (deadline: number): boolean
}
class CompletionProposal {
    static name: string
}
class CompletionProvider {
    /* Methods of GtkSource-5.GtkSource.CompletionProvider */
    activate(context: CompletionContext, proposal: CompletionProposal): void
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    getPriority(context: CompletionContext): number
    getTitle(): string | null
    isTrigger(iter: Gtk.TextIter, ch: number): boolean
    keyActivates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    listAlternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    populateAsync(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    populateFinish(result: Gio.AsyncResult): Gio.ListModel
    refilter(context: CompletionContext, model: Gio.ListModel): void
    static name: string
}
class HoverProvider {
    /* Methods of GtkSource-5.GtkSource.HoverProvider */
    populateAsync(context: HoverContext, display: HoverDisplay, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    populateFinish(result: Gio.AsyncResult): boolean
    static name: string
}
class Indenter {
    /* Methods of GtkSource-5.GtkSource.Indenter */
    indent(view: View, iter: Gtk.TextIter): /* iter */ Gtk.TextIter
    isTrigger(view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number): boolean
    static name: string
}
class StyleSchemeChooser {
    /* Properties of GtkSource-5.GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Methods of GtkSource-5.GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    static name: string
}
interface Buffer_ConstructProps extends Gtk.TextBuffer_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Buffer */
    highlightMatchingBrackets?: boolean
    highlightSyntax?: boolean
    implicitTrailingNewline?: boolean
    language?: Language
    styleScheme?: StyleScheme
}
class Buffer {
    /* Properties of GtkSource-5.GtkSource.Buffer */
    highlightMatchingBrackets: boolean
    highlightSyntax: boolean
    implicitTrailingNewline: boolean
    language: Language
    styleScheme: StyleScheme
    /* Properties of Gtk-4.0.Gtk.TextBuffer */
    readonly canRedo: boolean
    readonly canUndo: boolean
    readonly cursorPosition: number
    enableUndo: boolean
    readonly hasSelection: boolean
    text: string
    /* Fields of Gtk-4.0.Gtk.TextBuffer */
    readonly parentInstance: GObject.Object
    readonly priv: Gtk.TextBufferPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Buffer */
    backwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    changeCase(caseType: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    createSourceMark(name: string | null, category: string, where: Gtk.TextIter): Mark
    ensureHighlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    forwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getContextClassesAtIter(iter: Gtk.TextIter): string[]
    getHighlightMatchingBrackets(): boolean
    getHighlightSyntax(): boolean
    getImplicitTrailingNewline(): boolean
    getLanguage(): Language | null
    getSourceMarksAtIter(iter: Gtk.TextIter, category?: string | null): Mark[]
    getSourceMarksAtLine(line: number, category?: string | null): Mark[]
    getStyleScheme(): StyleScheme | null
    iterBackwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iterForwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iterHasContextClass(iter: Gtk.TextIter, contextClass: string): boolean
    joinLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    removeSourceMarks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void
    setHighlightMatchingBrackets(highlight: boolean): void
    setHighlightSyntax(highlight: boolean): void
    setImplicitTrailingNewline(implicitTrailingNewline: boolean): void
    setLanguage(language?: Language | null): void
    setStyleScheme(scheme?: StyleScheme | null): void
    sortLines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    /* Methods of Gtk-4.0.Gtk.TextBuffer */
    addMark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    addSelectionClipboard(clipboard: Gdk.Clipboard): void
    applyTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    applyTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    backspace(iter: Gtk.TextIter, interactive: boolean, defaultEditable: boolean): boolean
    beginIrreversibleAction(): void
    beginUserAction(): void
    copyClipboard(clipboard: Gdk.Clipboard): void
    createChildAnchor(iter: Gtk.TextIter): Gtk.TextChildAnchor
    createMark(markName: string | null, where: Gtk.TextIter, leftGravity: boolean): Gtk.TextMark
    cutClipboard(clipboard: Gdk.Clipboard, defaultEditable: boolean): void
    delete(start: Gtk.TextIter, end: Gtk.TextIter): void
    deleteInteractive(startIter: Gtk.TextIter, endIter: Gtk.TextIter, defaultEditable: boolean): boolean
    deleteMark(mark: Gtk.TextMark): void
    deleteMarkByName(name: string): void
    deleteSelection(interactive: boolean, defaultEditable: boolean): boolean
    endIrreversibleAction(): void
    endUserAction(): void
    getBounds(): [ /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getCanRedo(): boolean
    getCanUndo(): boolean
    getCharCount(): number
    getEnableUndo(): boolean
    getEndIter(): /* iter */ Gtk.TextIter
    getHasSelection(): boolean
    getInsert(): Gtk.TextMark
    getIterAtChildAnchor(anchor: Gtk.TextChildAnchor): /* iter */ Gtk.TextIter
    getIterAtLine(lineNumber: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtLineIndex(lineNumber: number, byteIndex: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtLineOffset(lineNumber: number, charOffset: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtMark(mark: Gtk.TextMark): /* iter */ Gtk.TextIter
    getIterAtOffset(charOffset: number): /* iter */ Gtk.TextIter
    getLineCount(): number
    getMark(name: string): Gtk.TextMark | null
    getMaxUndoLevels(): number
    getModified(): boolean
    getSelectionBound(): Gtk.TextMark
    getSelectionBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getSelectionContent(): Gdk.ContentProvider
    getSlice(start: Gtk.TextIter, end: Gtk.TextIter, includeHiddenChars: boolean): string
    getStartIter(): /* iter */ Gtk.TextIter
    getTagTable(): Gtk.TextTagTable
    getText(start: Gtk.TextIter, end: Gtk.TextIter, includeHiddenChars: boolean): string
    insert(iter: Gtk.TextIter, text: string, len: number): void
    insertAtCursor(text: string, len: number): void
    insertChildAnchor(iter: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    insertInteractive(iter: Gtk.TextIter, text: string, len: number, defaultEditable: boolean): boolean
    insertInteractiveAtCursor(text: string, len: number, defaultEditable: boolean): boolean
    insertMarkup(iter: Gtk.TextIter, markup: string, len: number): void
    insertPaintable(iter: Gtk.TextIter, paintable: Gdk.Paintable): void
    insertRange(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    insertRangeInteractive(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter, defaultEditable: boolean): boolean
    moveMark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    moveMarkByName(name: string, where: Gtk.TextIter): void
    pasteClipboard(clipboard: Gdk.Clipboard, overrideLocation: Gtk.TextIter | null, defaultEditable: boolean): void
    placeCursor(where: Gtk.TextIter): void
    redo(): void
    removeAllTags(start: Gtk.TextIter, end: Gtk.TextIter): void
    removeSelectionClipboard(clipboard: Gdk.Clipboard): void
    removeTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    removeTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    selectRange(ins: Gtk.TextIter, bound: Gtk.TextIter): void
    setEnableUndo(enableUndo: boolean): void
    setMaxUndoLevels(maxUndoLevels: number): void
    setModified(setting: boolean): void
    setText(text: string, len: number): void
    undo(): void
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
    /* Signals of GtkSource-5.GtkSource.Buffer */
    connect(sigName: "bracket-matched", callback: ((iter: Gtk.TextIter | null, state: BracketMatchType) => void)): number
    on(sigName: "bracket-matched", callback: (iter: Gtk.TextIter | null, state: BracketMatchType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bracket-matched", callback: (iter: Gtk.TextIter | null, state: BracketMatchType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bracket-matched", callback: (iter: Gtk.TextIter | null, state: BracketMatchType) => void): NodeJS.EventEmitter
    emit(sigName: "bracket-matched", iter: Gtk.TextIter | null, state: BracketMatchType): void
    connect(sigName: "cursor-moved", callback: (() => void)): number
    on(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-moved", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-moved", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-moved"): void
    connect(sigName: "highlight-updated", callback: ((start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    on(sigName: "highlight-updated", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "highlight-updated", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "highlight-updated", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "highlight-updated", start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "source-mark-updated", callback: ((mark: Gtk.TextMark) => void)): number
    on(sigName: "source-mark-updated", callback: (mark: Gtk.TextMark) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-mark-updated", callback: (mark: Gtk.TextMark) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-mark-updated", callback: (mark: Gtk.TextMark) => void): NodeJS.EventEmitter
    emit(sigName: "source-mark-updated", mark: Gtk.TextMark): void
    /* Signals of Gtk-4.0.Gtk.TextBuffer */
    connect(sigName: "apply-tag", callback: ((tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    on(sigName: "apply-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "apply-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "apply-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "apply-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "begin-user-action", callback: (() => void)): number
    on(sigName: "begin-user-action", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "begin-user-action", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "begin-user-action", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "begin-user-action"): void
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "delete-range", callback: ((start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    on(sigName: "delete-range", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-range", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-range", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "delete-range", start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "end-user-action", callback: (() => void)): number
    on(sigName: "end-user-action", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-user-action", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-user-action", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "end-user-action"): void
    connect(sigName: "insert-child-anchor", callback: ((location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void)): number
    on(sigName: "insert-child-anchor", callback: (location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-child-anchor", callback: (location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-child-anchor", callback: (location: Gtk.TextIter, anchor: Gtk.TextChildAnchor) => void): NodeJS.EventEmitter
    emit(sigName: "insert-child-anchor", location: Gtk.TextIter, anchor: Gtk.TextChildAnchor): void
    connect(sigName: "insert-paintable", callback: ((location: Gtk.TextIter, paintable: Gdk.Paintable) => void)): number
    on(sigName: "insert-paintable", callback: (location: Gtk.TextIter, paintable: Gdk.Paintable) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-paintable", callback: (location: Gtk.TextIter, paintable: Gdk.Paintable) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-paintable", callback: (location: Gtk.TextIter, paintable: Gdk.Paintable) => void): NodeJS.EventEmitter
    emit(sigName: "insert-paintable", location: Gtk.TextIter, paintable: Gdk.Paintable): void
    connect(sigName: "insert-text", callback: ((location: Gtk.TextIter, text: string, len: number) => void)): number
    on(sigName: "insert-text", callback: (location: Gtk.TextIter, text: string, len: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-text", callback: (location: Gtk.TextIter, text: string, len: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-text", callback: (location: Gtk.TextIter, text: string, len: number) => void): NodeJS.EventEmitter
    emit(sigName: "insert-text", location: Gtk.TextIter, text: string, len: number): void
    connect(sigName: "mark-deleted", callback: ((mark: Gtk.TextMark) => void)): number
    on(sigName: "mark-deleted", callback: (mark: Gtk.TextMark) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mark-deleted", callback: (mark: Gtk.TextMark) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mark-deleted", callback: (mark: Gtk.TextMark) => void): NodeJS.EventEmitter
    emit(sigName: "mark-deleted", mark: Gtk.TextMark): void
    connect(sigName: "mark-set", callback: ((location: Gtk.TextIter, mark: Gtk.TextMark) => void)): number
    on(sigName: "mark-set", callback: (location: Gtk.TextIter, mark: Gtk.TextMark) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mark-set", callback: (location: Gtk.TextIter, mark: Gtk.TextMark) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mark-set", callback: (location: Gtk.TextIter, mark: Gtk.TextMark) => void): NodeJS.EventEmitter
    emit(sigName: "mark-set", location: Gtk.TextIter, mark: Gtk.TextMark): void
    connect(sigName: "modified-changed", callback: (() => void)): number
    on(sigName: "modified-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modified-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modified-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "modified-changed"): void
    connect(sigName: "paste-done", callback: ((clipboard: Gdk.Clipboard) => void)): number
    on(sigName: "paste-done", callback: (clipboard: Gdk.Clipboard) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paste-done", callback: (clipboard: Gdk.Clipboard) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paste-done", callback: (clipboard: Gdk.Clipboard) => void): NodeJS.EventEmitter
    emit(sigName: "paste-done", clipboard: Gdk.Clipboard): void
    connect(sigName: "redo", callback: (() => void)): number
    on(sigName: "redo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "redo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "redo", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "redo"): void
    connect(sigName: "remove-tag", callback: ((tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    on(sigName: "remove-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "remove-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "undo", callback: (() => void)): number
    on(sigName: "undo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "undo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "undo", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "undo"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::highlight-matching-brackets", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-matching-brackets", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-matching-brackets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-matching-brackets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-matching-brackets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-syntax", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::implicit-trailing-newline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implicit-trailing-newline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::implicit-trailing-newline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::implicit-trailing-newline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::implicit-trailing-newline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-redo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-redo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-redo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-undo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-undo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-undo", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-undo", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-undo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Buffer_ConstructProps)
    _init (config?: Buffer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(table?: Gtk.TextTagTable | null): Buffer
    /* Function overloads */
    static new(table?: Gtk.TextTagTable | null): Buffer
    static newWithLanguage(language: Language): Buffer
    static $gtype: GObject.Type
}
interface Completion_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Completion */
    pageSize?: number
    rememberInfoVisibility?: boolean
    selectOnShow?: boolean
    showIcons?: boolean
    view?: View
}
class Completion {
    /* Properties of GtkSource-5.GtkSource.Completion */
    readonly buffer: Gtk.TextView
    pageSize: number
    rememberInfoVisibility: boolean
    selectOnShow: boolean
    showIcons: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Completion */
    addProvider(provider: CompletionProvider): void
    blockInteractive(): void
    getBuffer(): Buffer
    getPageSize(): number
    getView(): View
    hide(): void
    removeProvider(provider: CompletionProvider): void
    setPageSize(pageSize: number): void
    show(): void
    unblockInteractive(): void
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
    /* Signals of GtkSource-5.GtkSource.Completion */
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "provider-added", callback: ((provider: CompletionProvider) => void)): number
    on(sigName: "provider-added", callback: (provider: CompletionProvider) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "provider-added", callback: (provider: CompletionProvider) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "provider-added", callback: (provider: CompletionProvider) => void): NodeJS.EventEmitter
    emit(sigName: "provider-added", provider: CompletionProvider): void
    connect(sigName: "provider-removed", callback: ((provider: CompletionProvider) => void)): number
    on(sigName: "provider-removed", callback: (provider: CompletionProvider) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "provider-removed", callback: (provider: CompletionProvider) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "provider-removed", callback: (provider: CompletionProvider) => void): NodeJS.EventEmitter
    emit(sigName: "provider-removed", provider: CompletionProvider): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::page-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remember-info-visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remember-info-visibility", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remember-info-visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remember-info-visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remember-info-visibility", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::select-on-show", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-on-show", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::select-on-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::select-on-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::select-on-show", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-icons", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-icons", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-icons", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Completion_ConstructProps)
    _init (config?: Completion_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static fuzzyHighlight(haystack: string, casefoldQuery: string): Pango.AttrList | null
    static fuzzyMatch(haystack: string | null, casefoldNeedle: string): [ /* returnType */ boolean, /* priority */ number | null ]
    static $gtype: GObject.Type
}
interface CompletionCell_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.CompletionCell */
    column?: CompletionColumn
    markup?: string
    paintable?: Gdk.Paintable
    text?: string
    widget?: Gtk.Widget
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
}
class CompletionCell {
    /* Properties of GtkSource-5.GtkSource.CompletionCell */
    markup: string
    paintable: Gdk.Paintable
    text: string
    widget: Gtk.Widget
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.CompletionCell */
    getColumn(): CompletionColumn
    getWidget(): Gtk.Widget | null
    setGicon(gicon: Gio.Icon): void
    setIconName(iconName: string): void
    setMarkup(markup: string): void
    setPaintable(paintable: Gdk.Paintable): void
    setText(text: string): void
    setTextWithAttributes(text: string, attrs: Pango.AttrList): void
    setWidget(child: Gtk.Widget): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::widget", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompletionCell_ConstructProps)
    _init (config?: CompletionCell_ConstructProps): void
    static $gtype: GObject.Type
}
interface CompletionContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.CompletionContext */
    completion?: Completion
}
class CompletionContext {
    /* Properties of GtkSource-5.GtkSource.CompletionContext */
    readonly busy: boolean
    readonly empty: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.CompletionContext */
    getActivation(): CompletionActivation
    getBounds(): [ /* returnType */ boolean, /* begin */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    getBuffer(): Buffer | null
    getBusy(): boolean
    getCompletion(): Completion | null
    getEmpty(): boolean
    getLanguage(): Language | null
    getView(): View | null
    getWord(): string
    setProposalsForProvider(provider: CompletionProvider, results?: Gio.ListModel | null): void
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
    /* Methods of Gio-2.0.Gio.ListModel */
    getItemType(): GObject.Type
    getNItems(): number
    getItem(position: number): GObject.Object | null
    itemsChanged(position: number, removed: number, added: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gio-2.0.Gio.ListModel */
    connect(sigName: "items-changed", callback: ((position: number, removed: number, added: number) => void)): number
    on(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-changed", callback: (position: number, removed: number, added: number) => void): NodeJS.EventEmitter
    emit(sigName: "items-changed", position: number, removed: number, added: number): void
    connect(sigName: "notify::busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::busy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::busy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompletionContext_ConstructProps)
    _init (config?: CompletionContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface CompletionSnippets_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.CompletionSnippets */
    priority?: number
    title?: string
}
class CompletionSnippets {
    /* Properties of GtkSource-5.GtkSource.CompletionSnippets */
    priority: number
    title: string
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
    /* Methods of GtkSource-5.GtkSource.CompletionProvider */
    activate(context: CompletionContext, proposal: CompletionProposal): void
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    getPriority(context: CompletionContext): number
    getTitle(): string | null
    isTrigger(iter: Gtk.TextIter, ch: number): boolean
    keyActivates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    listAlternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    populateAsync(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    populateFinish(result: Gio.AsyncResult): Gio.ListModel
    refilter(context: CompletionContext, model: Gio.ListModel): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompletionSnippets_ConstructProps)
    _init (config?: CompletionSnippets_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompletionSnippets
    static $gtype: GObject.Type
}
interface CompletionWords_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.CompletionWords */
    minimumWordSize?: number
    priority?: number
    proposalsBatchSize?: number
    scanBatchSize?: number
    title?: string
}
class CompletionWords {
    /* Properties of GtkSource-5.GtkSource.CompletionWords */
    minimumWordSize: number
    priority: number
    proposalsBatchSize: number
    scanBatchSize: number
    title: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.CompletionWords */
    register(buffer: Gtk.TextBuffer): void
    unregister(buffer: Gtk.TextBuffer): void
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
    /* Methods of GtkSource-5.GtkSource.CompletionProvider */
    activate(context: CompletionContext, proposal: CompletionProposal): void
    display(context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell): void
    getPriority(context: CompletionContext): number
    getTitle(): string | null
    isTrigger(iter: Gtk.TextIter, ch: number): boolean
    keyActivates(context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType): boolean
    listAlternates(context: CompletionContext, proposal: CompletionProposal): CompletionProposal[] | null
    populateAsync(context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    populateFinish(result: Gio.AsyncResult): Gio.ListModel
    refilter(context: CompletionContext, model: Gio.ListModel): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::minimum-word-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-word-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proposals-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposals-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proposals-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proposals-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proposals-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scan-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scan-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scan-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scan-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scan-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompletionWords_ConstructProps)
    _init (config?: CompletionWords_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(title?: string | null): CompletionWords
    static $gtype: GObject.Type
}
interface File_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.File */
    location?: Gio.File
}
class File {
    /* Properties of GtkSource-5.GtkSource.File */
    readonly compressionType: CompressionType
    readonly encoding: Encoding
    location: Gio.File
    readonly newlineType: NewlineType
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.File */
    checkFileOnDisk(): void
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    isDeleted(): boolean
    isExternallyModified(): boolean
    isLocal(): boolean
    isReadonly(): boolean
    setLocation(location?: Gio.File | null): void
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
    connect(sigName: "notify::compression-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encoding", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::location", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::newline-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: File_ConstructProps)
    _init (config?: File_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): File
    static $gtype: GObject.Type
}
interface FileLoader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.FileLoader */
    buffer?: Buffer
    file?: File
    inputStream?: Gio.InputStream
    location?: Gio.File
}
class FileLoader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.FileLoader */
    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getInputStream(): Gio.InputStream | null
    getLocation(): Gio.File | null
    getNewlineType(): NewlineType
    loadAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    loadFinish(result: Gio.AsyncResult): boolean
    setCandidateEncodings(candidateEncodings: Encoding[]): void
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
    constructor (config?: FileLoader_ConstructProps)
    _init (config?: FileLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, file: File): FileLoader
    static newFromStream(buffer: Buffer, file: File, stream: Gio.InputStream): FileLoader
    static $gtype: GObject.Type
}
interface FileSaver_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.FileSaver */
    buffer?: Buffer
    compressionType?: CompressionType
    encoding?: Encoding
    file?: File
    flags?: FileSaverFlags
    location?: Gio.File
    newlineType?: NewlineType
}
class FileSaver {
    /* Properties of GtkSource-5.GtkSource.FileSaver */
    compressionType: CompressionType
    encoding: Encoding
    flags: FileSaverFlags
    newlineType: NewlineType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.FileSaver */
    getBuffer(): Buffer
    getCompressionType(): CompressionType
    getEncoding(): Encoding
    getFile(): File
    getFlags(): FileSaverFlags
    getLocation(): Gio.File
    getNewlineType(): NewlineType
    saveAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, progressCallback?: Gio.FileProgressCallback | null, callback?: Gio.AsyncReadyCallback | null): void
    saveFinish(result: Gio.AsyncResult): boolean
    setCompressionType(compressionType: CompressionType): void
    setEncoding(encoding?: Encoding | null): void
    setFlags(flags: FileSaverFlags): void
    setNewlineType(newlineType: NewlineType): void
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
    connect(sigName: "notify::compression-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compression-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::encoding", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encoding", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::newline-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::newline-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: FileSaver_ConstructProps)
    _init (config?: FileSaver_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, file: File): FileSaver
    static newWithTarget(buffer: Buffer, file: File, targetLocation: Gio.File): FileSaver
    static $gtype: GObject.Type
}
interface Gutter_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Gutter */
    view?: View
    windowType?: Gtk.TextWindowType
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
}
class Gutter {
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Gutter */
    getView(): View
    insert(renderer: GutterRenderer, position: number): boolean
    remove(renderer: GutterRenderer): void
    reorder(renderer: GutterRenderer, position: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Gutter_ConstructProps)
    _init (config?: Gutter_ConstructProps): void
    static $gtype: GObject.Type
}
interface GutterLines_ConstructProps extends GObject.Object_ConstructProps {
}
class GutterLines {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.GutterLines */
    addClass(line: number, name: string): void
    addQclass(line: number, qname: GLib.Quark): void
    getBuffer(): Gtk.TextBuffer
    getFirst(): number
    getIterAtLine(line: number): /* iter */ Gtk.TextIter
    getLast(): number
    getLineYrange(line: number, mode: GutterRendererAlignmentMode): [ /* y */ number, /* height */ number ]
    getView(): Gtk.TextView
    getYrange(line: number, lineY: number, lineHeight: number): void
    hasClass(line: number, name: string): boolean
    hasQclass(line: number, qname: GLib.Quark): boolean
    isCursor(line: number): boolean
    isPrelit(line: number): boolean
    isSelected(line: number): boolean
    removeClass(line: number, name: string): void
    removeQclass(line: number, qname: GLib.Quark): void
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
    constructor (config?: GutterLines_ConstructProps)
    _init (config?: GutterLines_ConstructProps): void
    static $gtype: GObject.Type
}
interface GutterRenderer_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.GutterRenderer */
    alignmentMode?: GutterRendererAlignmentMode
    xalign?: number
    xpad?: number
    yalign?: number
    ypad?: number
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
}
class GutterRenderer {
    /* Properties of GtkSource-5.GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    readonly lines: GutterLines
    readonly view: Gtk.TextView
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    alignCell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBuffer(): Buffer | null
    getView(): View
    getXalign(): number
    getXpad(): number
    getYalign(): number
    getYpad(): number
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    setXalign(xalign: number): void
    setXpad(xpad: number): void
    setYalign(yalign: number): void
    setYpad(ypad: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of GtkSource-5.GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    on(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void): NodeJS.EventEmitter
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    on(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    connect(sigName: "query-data", callback: ((object: GObject.Object, p0: number) => void)): number
    on(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::alignment-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GutterRenderer_ConstructProps)
    _init (config?: GutterRenderer_ConstructProps): void
    static $gtype: GObject.Type
}
interface GutterRendererPixbuf_ConstructProps extends GutterRenderer_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.GutterRendererPixbuf */
    gicon?: Gio.Icon
    iconName?: string
    paintable?: Gdk.Paintable
    pixbuf?: GdkPixbuf.Pixbuf
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
}
class GutterRendererPixbuf {
    /* Properties of GtkSource-5.GtkSource.GutterRendererPixbuf */
    gicon: Gio.Icon
    iconName: string
    paintable: Gdk.Paintable
    pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GtkSource-5.GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    readonly lines: GutterLines
    readonly view: Gtk.TextView
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Fields of GtkSource-5.GtkSource.GutterRenderer */
    readonly parentInstance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.GutterRendererPixbuf */
    getGicon(): Gio.Icon
    getIconName(): string
    getPaintable(): Gdk.Paintable | null
    getPixbuf(): GdkPixbuf.Pixbuf
    overlayPaintable(paintable: Gdk.Paintable): void
    setGicon(icon?: Gio.Icon | null): void
    setIconName(iconName?: string | null): void
    setPaintable(paintable?: Gdk.Paintable | null): void
    setPixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void
    /* Methods of GtkSource-5.GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    alignCell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBuffer(): Buffer | null
    getView(): View
    getXalign(): number
    getXpad(): number
    getYalign(): number
    getYpad(): number
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    setXalign(xalign: number): void
    setXpad(xpad: number): void
    setYalign(yalign: number): void
    setYpad(ypad: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of GtkSource-5.GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    on(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void): NodeJS.EventEmitter
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    on(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    connect(sigName: "query-data", callback: ((object: GObject.Object, p0: number) => void)): number
    on(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::gicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GutterRendererPixbuf_ConstructProps)
    _init (config?: GutterRendererPixbuf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GutterRendererPixbuf
    static $gtype: GObject.Type
}
interface GutterRendererText_ConstructProps extends GutterRenderer_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.GutterRendererText */
    markup?: string
    text?: string
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
}
class GutterRendererText {
    /* Properties of GtkSource-5.GtkSource.GutterRendererText */
    markup: string
    text: string
    /* Properties of GtkSource-5.GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    readonly lines: GutterLines
    readonly view: Gtk.TextView
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Fields of GtkSource-5.GtkSource.GutterRenderer */
    readonly parentInstance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.GutterRendererText */
    measure(text: string): [ /* width */ number | null, /* height */ number | null ]
    measureMarkup(markup: string): [ /* width */ number | null, /* height */ number | null ]
    setMarkup(markup: string, length: number): void
    setText(text: string, length: number): void
    /* Methods of GtkSource-5.GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    alignCell(line: number, width: number, height: number): [ /* x */ number, /* y */ number ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBuffer(): Buffer | null
    getView(): View
    getXalign(): number
    getXpad(): number
    getYalign(): number
    getYpad(): number
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle): boolean
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    setXalign(xalign: number): void
    setXpad(xpad: number): void
    setYalign(yalign: number): void
    setYpad(ypad: number): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of GtkSource-5.GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    on(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void): NodeJS.EventEmitter
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number): void
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean)): number
    on(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle): void
    connect(sigName: "query-data", callback: ((object: GObject.Object, p0: number) => void)): number
    on(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (object: GObject.Object, p0: number) => void): NodeJS.EventEmitter
    emit(sigName: "query-data", object: GObject.Object, p0: number): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::alignment-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::alignment-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xpad", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xpad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ypad", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ypad", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GutterRendererText_ConstructProps)
    _init (config?: GutterRendererText_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): GutterRendererText
    static $gtype: GObject.Type
}
interface Hover_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Hover */
    hoverDelay?: number
}
class Hover {
    /* Properties of GtkSource-5.GtkSource.Hover */
    hoverDelay: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Hover */
    addProvider(provider: HoverProvider): void
    removeProvider(provider: HoverProvider): void
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
    connect(sigName: "notify::hover-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hover-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hover-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hover-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hover-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Hover_ConstructProps)
    _init (config?: Hover_ConstructProps): void
    static $gtype: GObject.Type
}
interface HoverContext_ConstructProps extends GObject.Object_ConstructProps {
}
class HoverContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.HoverContext */
    getBounds(): [ /* returnType */ boolean, /* begin */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    getBuffer(): Buffer
    getIter(iter: Gtk.TextIter): boolean
    getView(): View
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
    constructor (config?: HoverContext_ConstructProps)
    _init (config?: HoverContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface HoverDisplay_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
}
class HoverDisplay {
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.HoverDisplay */
    append(child: Gtk.Widget): void
    insertAfter(child: Gtk.Widget, sibling: Gtk.Widget): void
    prepend(child: Gtk.Widget): void
    remove(child: Gtk.Widget): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HoverDisplay_ConstructProps)
    _init (config?: HoverDisplay_ConstructProps): void
    static $gtype: GObject.Type
}
interface Language_ConstructProps extends GObject.Object_ConstructProps {
}
class Language {
    /* Properties of GtkSource-5.GtkSource.Language */
    readonly hidden: boolean
    readonly id: string
    readonly name: string
    readonly section: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Language */
    getGlobs(): string[] | null
    getHidden(): boolean
    getId(): string
    getMetadata(name: string): string | null
    getMimeTypes(): string[] | null
    getName(): string
    getSection(): string
    getStyleFallback(styleId: string): string | null
    getStyleIds(): string[] | null
    getStyleName(styleId: string): string | null
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
    connect(sigName: "notify::hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::section", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::section", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::section", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::section", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::section", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Language_ConstructProps)
    _init (config?: Language_ConstructProps): void
    static $gtype: GObject.Type
}
interface LanguageManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.LanguageManager */
    searchPath?: string[]
}
class LanguageManager {
    /* Properties of GtkSource-5.GtkSource.LanguageManager */
    readonly languageIds: string[]
    searchPath: string[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.LanguageManager */
    getLanguage(id: string): Language | null
    getLanguageIds(): string[] | null
    getSearchPath(): string[]
    guessLanguage(filename?: string | null, contentType?: string | null): Language | null
    setSearchPath(dirs?: string[] | null): void
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
    connect(sigName: "notify::language-ids", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-ids", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LanguageManager_ConstructProps)
    _init (config?: LanguageManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): LanguageManager
    static getDefault(): LanguageManager
    static $gtype: GObject.Type
}
interface Map_ConstructProps extends View_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Map */
    fontDesc?: Pango.FontDescription
    view?: View
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
    /* Constructor properties of Gtk-4.0.Gtk.Scrollable */
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
class Map {
    /* Properties of GtkSource-5.GtkSource.Map */
    fontDesc: Pango.FontDescription
    view: View
    /* Properties of GtkSource-5.GtkSource.View */
    autoIndent: boolean
    backgroundPattern: BackgroundPatternType
    readonly completion: Completion
    enableSnippets: boolean
    highlightCurrentLine: boolean
    indentOnTab: boolean
    indentWidth: number
    indenter: Indenter
    insertSpacesInsteadOfTabs: boolean
    rightMarginPosition: number
    showLineMarks: boolean
    showLineNumbers: boolean
    showRightMargin: boolean
    smartBackspace: boolean
    smartHomeEnd: SmartHomeEndType
    readonly spaceDrawer: SpaceDrawer
    tabWidth: number
    /* Properties of Gtk-4.0.Gtk.TextView */
    acceptsTab: boolean
    bottomMargin: number
    buffer: Gtk.TextBuffer
    cursorVisible: boolean
    editable: boolean
    extraMenu: Gio.MenuModel
    imModule: string
    indent: number
    inputHints: Gtk.InputHints
    inputPurpose: Gtk.InputPurpose
    justification: Gtk.Justification
    leftMargin: number
    monospace: boolean
    overwrite: boolean
    pixelsAboveLines: number
    pixelsBelowLines: number
    pixelsInsideWrap: number
    rightMargin: number
    tabs: Pango.TabArray
    topMargin: number
    wrapMode: Gtk.WrapMode
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Properties of Gtk-4.0.Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of GtkSource-5.GtkSource.View */
    readonly parentInstance: Gtk.TextView
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Map */
    getView(): View | null
    setView(view: View): void
    /* Methods of GtkSource-5.GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): BackgroundPatternType
    getCompletion(): Completion
    getEnableSnippets(): boolean
    getGutter(windowType: Gtk.TextWindowType): Gutter
    getHighlightCurrentLine(): boolean
    getHover(): Hover
    getIndentOnTab(): boolean
    getIndentWidth(): number
    getIndenter(): Indenter | null
    getInsertSpacesInsteadOfTabs(): boolean
    getMarkAttributes(category: string, priority: number): MarkAttributes
    getRightMarginPosition(): number
    getShowLineMarks(): boolean
    getShowLineNumbers(): boolean
    getShowRightMargin(): boolean
    getSmartBackspace(): boolean
    getSmartHomeEnd(): SmartHomeEndType
    getSpaceDrawer(): SpaceDrawer
    getTabWidth(): number
    getVisualColumn(iter: Gtk.TextIter): number
    indentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    pushSnippet(snippet: Snippet, location?: Gtk.TextIter | null): void
    setAutoIndent(enable: boolean): void
    setBackgroundPattern(backgroundPattern: BackgroundPatternType): void
    setEnableSnippets(enableSnippets: boolean): void
    setHighlightCurrentLine(highlight: boolean): void
    setIndentOnTab(enable: boolean): void
    setIndentWidth(width: number): void
    setIndenter(indenter?: Indenter | null): void
    setInsertSpacesInsteadOfTabs(enable: boolean): void
    setMarkAttributes(category: string, attributes: MarkAttributes, priority: number): void
    setRightMarginPosition(pos: number): void
    setShowLineMarks(show: boolean): void
    setShowLineNumbers(show: boolean): void
    setShowRightMargin(show: boolean): void
    setSmartBackspace(smartBackspace: boolean): void
    setSmartHomeEnd(smartHomeEnd: SmartHomeEndType): void
    setTabWidth(width: number): void
    unindentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Methods of Gtk-4.0.Gtk.TextView */
    addChildAtAnchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    addOverlay(child: Gtk.Widget, xpos: number, ypos: number): void
    backwardDisplayLine(iter: Gtk.TextIter): boolean
    backwardDisplayLineStart(iter: Gtk.TextIter): boolean
    bufferToWindowCoords(win: Gtk.TextWindowType, bufferX: number, bufferY: number): [ /* windowX */ number | null, /* windowY */ number | null ]
    forwardDisplayLine(iter: Gtk.TextIter): boolean
    forwardDisplayLineEnd(iter: Gtk.TextIter): boolean
    getAcceptsTab(): boolean
    getBottomMargin(): number
    getBuffer(): Gtk.TextBuffer
    getCursorLocations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    getCursorVisible(): boolean
    getEditable(): boolean
    getExtraMenu(): Gio.MenuModel
    getGutter(win: Gtk.TextWindowType): Gtk.Widget | null
    getIndent(): number
    getInputHints(): Gtk.InputHints
    getInputPurpose(): Gtk.InputPurpose
    getIterAtLocation(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtPosition(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter, /* trailing */ number | null ]
    getIterLocation(iter: Gtk.TextIter): /* location */ Gdk.Rectangle
    getJustification(): Gtk.Justification
    getLeftMargin(): number
    getLineAtY(y: number): [ /* targetIter */ Gtk.TextIter, /* lineTop */ number ]
    getLineYrange(iter: Gtk.TextIter): [ /* y */ number, /* height */ number ]
    getLtrContext(): Pango.Context
    getMonospace(): boolean
    getOverwrite(): boolean
    getPixelsAboveLines(): number
    getPixelsBelowLines(): number
    getPixelsInsideWrap(): number
    getRightMargin(): number
    getRtlContext(): Pango.Context
    getTabs(): Pango.TabArray | null
    getTopMargin(): number
    getVisibleRect(): /* visibleRect */ Gdk.Rectangle
    getWrapMode(): Gtk.WrapMode
    imContextFilterKeypress(event: Gdk.Event): boolean
    moveMarkOnscreen(mark: Gtk.TextMark): boolean
    moveOverlay(child: Gtk.Widget, xpos: number, ypos: number): void
    moveVisually(iter: Gtk.TextIter, count: number): boolean
    placeCursorOnscreen(): boolean
    remove(child: Gtk.Widget): void
    resetCursorBlink(): void
    resetImContext(): void
    scrollMarkOnscreen(mark: Gtk.TextMark): void
    scrollToIter(iter: Gtk.TextIter, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): boolean
    scrollToMark(mark: Gtk.TextMark, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): void
    setAcceptsTab(acceptsTab: boolean): void
    setBottomMargin(bottomMargin: number): void
    setBuffer(buffer?: Gtk.TextBuffer | null): void
    setCursorVisible(setting: boolean): void
    setEditable(setting: boolean): void
    setExtraMenu(model?: Gio.MenuModel | null): void
    setGutter(win: Gtk.TextWindowType, widget?: Gtk.Widget | null): void
    setIndent(indent: number): void
    setInputHints(hints: Gtk.InputHints): void
    setInputPurpose(purpose: Gtk.InputPurpose): void
    setJustification(justification: Gtk.Justification): void
    setLeftMargin(leftMargin: number): void
    setMonospace(monospace: boolean): void
    setOverwrite(overwrite: boolean): void
    setPixelsAboveLines(pixelsAboveLines: number): void
    setPixelsBelowLines(pixelsBelowLines: number): void
    setPixelsInsideWrap(pixelsInsideWrap: number): void
    setRightMargin(rightMargin: number): void
    setTabs(tabs: Pango.TabArray): void
    setTopMargin(topMargin: number): void
    setWrapMode(wrapMode: Gtk.WrapMode): void
    startsDisplayLine(iter: Gtk.TextIter): boolean
    windowToBufferCoords(win: Gtk.TextWindowType, windowX: number, windowY: number): [ /* bufferX */ number | null, /* bufferY */ number | null ]
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Methods of Gtk-4.0.Gtk.Scrollable */
    getBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    getHadjustment(): Gtk.Adjustment | null
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVadjustment(): Gtk.Adjustment | null
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Signals of GtkSource-5.GtkSource.View */
    connect(sigName: "change-case", callback: ((caseType: ChangeCaseType) => void)): number
    on(sigName: "change-case", callback: (caseType: ChangeCaseType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "change-case", callback: (caseType: ChangeCaseType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "change-case", callback: (caseType: ChangeCaseType) => void): NodeJS.EventEmitter
    emit(sigName: "change-case", caseType: ChangeCaseType): void
    connect(sigName: "change-number", callback: ((count: number) => void)): number
    on(sigName: "change-number", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "change-number", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "change-number", callback: (count: number) => void): NodeJS.EventEmitter
    emit(sigName: "change-number", count: number): void
    connect(sigName: "join-lines", callback: (() => void)): number
    on(sigName: "join-lines", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "join-lines", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "join-lines", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "join-lines"): void
    connect(sigName: "line-mark-activated", callback: ((iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    on(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number): void
    connect(sigName: "move-lines", callback: ((down: boolean) => void)): number
    on(sigName: "move-lines", callback: (down: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-lines", callback: (down: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-lines", callback: (down: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "move-lines", down: boolean): void
    connect(sigName: "move-to-matching-bracket", callback: ((extendSelection: boolean) => void)): number
    on(sigName: "move-to-matching-bracket", callback: (extendSelection: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-to-matching-bracket", callback: (extendSelection: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-to-matching-bracket", callback: (extendSelection: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "move-to-matching-bracket", extendSelection: boolean): void
    connect(sigName: "move-words", callback: ((count: number) => void)): number
    on(sigName: "move-words", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-words", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-words", callback: (count: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-words", count: number): void
    connect(sigName: "push-snippet", callback: ((snippet: Snippet, location: Gtk.TextIter) => void)): number
    on(sigName: "push-snippet", callback: (snippet: Snippet, location: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-snippet", callback: (snippet: Snippet, location: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-snippet", callback: (snippet: Snippet, location: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "push-snippet", snippet: Snippet, location: Gtk.TextIter): void
    connect(sigName: "show-completion", callback: (() => void)): number
    on(sigName: "show-completion", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-completion", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-completion", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-completion"): void
    connect(sigName: "smart-home-end", callback: ((iter: Gtk.TextIter, count: number) => void)): number
    on(sigName: "smart-home-end", callback: (iter: Gtk.TextIter, count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "smart-home-end", callback: (iter: Gtk.TextIter, count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "smart-home-end", callback: (iter: Gtk.TextIter, count: number) => void): NodeJS.EventEmitter
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number): void
    /* Signals of Gtk-4.0.Gtk.TextView */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "copy-clipboard", callback: (() => void)): number
    on(sigName: "copy-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "copy-clipboard"): void
    connect(sigName: "cut-clipboard", callback: (() => void)): number
    on(sigName: "cut-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cut-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cut-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cut-clipboard"): void
    connect(sigName: "delete-from-cursor", callback: ((type: Gtk.DeleteType, count: number) => void)): number
    on(sigName: "delete-from-cursor", callback: (type: Gtk.DeleteType, count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-from-cursor", callback: (type: Gtk.DeleteType, count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-from-cursor", callback: (type: Gtk.DeleteType, count: number) => void): NodeJS.EventEmitter
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    connect(sigName: "extend-selection", callback: ((granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    on(sigName: "extend-selection", callback: (granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "extend-selection", callback: (granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "extend-selection", callback: (granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "insert-at-cursor", callback: ((string: string) => void)): number
    on(sigName: "insert-at-cursor", callback: (string: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-at-cursor", callback: (string: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-at-cursor", callback: (string: string) => void): NodeJS.EventEmitter
    emit(sigName: "insert-at-cursor", string: string): void
    connect(sigName: "insert-emoji", callback: (() => void)): number
    on(sigName: "insert-emoji", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-emoji", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-emoji", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "insert-emoji"): void
    connect(sigName: "move-cursor", callback: ((step: Gtk.MovementStep, count: number, extendSelection: boolean) => void)): number
    on(sigName: "move-cursor", callback: (step: Gtk.MovementStep, count: number, extendSelection: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: (step: Gtk.MovementStep, count: number, extendSelection: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: (step: Gtk.MovementStep, count: number, extendSelection: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extendSelection: boolean): void
    connect(sigName: "move-viewport", callback: ((step: Gtk.ScrollStep, count: number) => void)): number
    on(sigName: "move-viewport", callback: (step: Gtk.ScrollStep, count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-viewport", callback: (step: Gtk.ScrollStep, count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-viewport", callback: (step: Gtk.ScrollStep, count: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    connect(sigName: "paste-clipboard", callback: (() => void)): number
    on(sigName: "paste-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paste-clipboard"): void
    connect(sigName: "preedit-changed", callback: ((preedit: string) => void)): number
    on(sigName: "preedit-changed", callback: (preedit: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-changed", callback: (preedit: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-changed", callback: (preedit: string) => void): NodeJS.EventEmitter
    emit(sigName: "preedit-changed", preedit: string): void
    connect(sigName: "select-all", callback: ((select: boolean) => void)): number
    on(sigName: "select-all", callback: (select: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-all", callback: (select: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-all", callback: (select: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "select-all", select: boolean): void
    connect(sigName: "set-anchor", callback: (() => void)): number
    on(sigName: "set-anchor", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-anchor", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-anchor", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "set-anchor"): void
    connect(sigName: "toggle-cursor-visible", callback: (() => void)): number
    on(sigName: "toggle-cursor-visible", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "toggle-cursor-visible", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "toggle-cursor-visible", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "toggle-cursor-visible"): void
    connect(sigName: "toggle-overwrite", callback: (() => void)): number
    on(sigName: "toggle-overwrite", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "toggle-overwrite", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "toggle-overwrite", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "toggle-overwrite"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completion", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-snippets", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-snippets", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-current-line", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-on-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indenter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indenter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indenter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indenter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indenter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-line-marks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-line-numbers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-backspace", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-home-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::space-drawer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accepts-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bottom-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extra-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-module", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-purpose", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::justification", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monospace", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overwrite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::top-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Map_ConstructProps)
    _init (config?: Map_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Map
    static newWithBuffer(buffer: Buffer): Map
    /* Function overloads */
    static newWithBuffer(buffer: Gtk.TextBuffer): Map
    static $gtype: GObject.Type
}
interface Mark_ConstructProps extends Gtk.TextMark_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Mark */
    category?: string
}
class Mark {
    /* Fields of Gtk-4.0.Gtk.TextMark */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Mark */
    getCategory(): string
    next(category?: string | null): Mark | null
    prev(category: string): Mark | null
    /* Methods of Gtk-4.0.Gtk.TextMark */
    getBuffer(): Gtk.TextBuffer | null
    getDeleted(): boolean
    getLeftGravity(): boolean
    getName(): string | null
    getVisible(): boolean
    setVisible(setting: boolean): void
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
    constructor (config?: Mark_ConstructProps)
    _init (config?: Mark_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, category: string): Mark
    /* Function overloads */
    static new(name: string | null, leftGravity: boolean): Mark
    static $gtype: GObject.Type
}
interface MarkAttributes_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.MarkAttributes */
    background?: Gdk.RGBA
    gicon?: Gio.Icon
    iconName?: string
    pixbuf?: GdkPixbuf.Pixbuf
}
class MarkAttributes {
    /* Properties of GtkSource-5.GtkSource.MarkAttributes */
    background: Gdk.RGBA
    gicon: Gio.Icon
    iconName: string
    pixbuf: GdkPixbuf.Pixbuf
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.MarkAttributes */
    getBackground(): [ /* returnType */ boolean, /* background */ Gdk.RGBA ]
    getGicon(): Gio.Icon
    getIconName(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    getTooltipMarkup(mark: Mark): string
    getTooltipText(mark: Mark): string
    renderIcon(widget: Gtk.Widget, size: number): Gdk.Paintable
    setBackground(background: Gdk.RGBA): void
    setGicon(gicon: Gio.Icon): void
    setIconName(iconName: string): void
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
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
    /* Signals of GtkSource-5.GtkSource.MarkAttributes */
    connect(sigName: "query-tooltip-markup", callback: ((mark: Mark) => string)): number
    on(sigName: "query-tooltip-markup", callback: (mark: Mark) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip-markup", callback: (mark: Mark) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip-markup", callback: (mark: Mark) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip-markup", mark: Mark): void
    connect(sigName: "query-tooltip-text", callback: ((mark: Mark) => string)): number
    on(sigName: "query-tooltip-text", callback: (mark: Mark) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip-text", callback: (mark: Mark) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip-text", callback: (mark: Mark) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip-text", mark: Mark): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixbuf", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MarkAttributes_ConstructProps)
    _init (config?: MarkAttributes_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): MarkAttributes
    static $gtype: GObject.Type
}
interface PrintCompositor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.PrintCompositor */
    bodyFontName?: string
    buffer?: Buffer
    footerFontName?: string
    headerFontName?: string
    highlightSyntax?: boolean
    lineNumbersFontName?: string
    printFooter?: boolean
    printHeader?: boolean
    printLineNumbers?: number
    tabWidth?: number
    wrapMode?: Gtk.WrapMode
}
class PrintCompositor {
    /* Properties of GtkSource-5.GtkSource.PrintCompositor */
    bodyFontName: string
    footerFontName: string
    headerFontName: string
    highlightSyntax: boolean
    lineNumbersFontName: string
    readonly nPages: number
    printFooter: boolean
    printHeader: boolean
    printLineNumbers: number
    tabWidth: number
    wrapMode: Gtk.WrapMode
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.PrintCompositor */
    drawPage(context: Gtk.PrintContext, pageNr: number): void
    getBodyFontName(): string
    getBottomMargin(unit: Gtk.Unit): number
    getBuffer(): Buffer
    getFooterFontName(): string
    getHeaderFontName(): string
    getHighlightSyntax(): boolean
    getLeftMargin(unit: Gtk.Unit): number
    getLineNumbersFontName(): string
    getNPages(): number
    getPaginationProgress(): number
    getPrintFooter(): boolean
    getPrintHeader(): boolean
    getPrintLineNumbers(): number
    getRightMargin(unit: Gtk.Unit): number
    getTabWidth(): number
    getTopMargin(unit: Gtk.Unit): number
    getWrapMode(): Gtk.WrapMode
    ignoreTag(tag: Gtk.TextTag): void
    paginate(context: Gtk.PrintContext): boolean
    setBodyFontName(fontName: string): void
    setBottomMargin(margin: number, unit: Gtk.Unit): void
    setFooterFontName(fontName?: string | null): void
    setFooterFormat(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void
    setHeaderFontName(fontName?: string | null): void
    setHeaderFormat(separator: boolean, left?: string | null, center?: string | null, right?: string | null): void
    setHighlightSyntax(highlight: boolean): void
    setLeftMargin(margin: number, unit: Gtk.Unit): void
    setLineNumbersFontName(fontName?: string | null): void
    setPrintFooter(print: boolean): void
    setPrintHeader(print: boolean): void
    setPrintLineNumbers(interval: number): void
    setRightMargin(margin: number, unit: Gtk.Unit): void
    setTabWidth(width: number): void
    setTopMargin(margin: number, unit: Gtk.Unit): void
    setWrapMode(wrapMode: Gtk.WrapMode): void
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
    connect(sigName: "notify::body-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::body-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::body-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::body-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::footer-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::footer-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::footer-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::footer-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::footer-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::header-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::header-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::header-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::header-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::header-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-syntax", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-syntax", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-numbers-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-numbers-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-numbers-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-numbers-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-numbers-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-pages", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-pages", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-pages", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-footer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-footer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-footer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-footer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-footer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::print-line-numbers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-line-numbers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::print-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::print-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::print-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PrintCompositor_ConstructProps)
    _init (config?: PrintCompositor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer): PrintCompositor
    static newFromView(view: View): PrintCompositor
    static $gtype: GObject.Type
}
interface Region_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Region */
    buffer?: Gtk.TextBuffer
}
class Region {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Region */
    addRegion(regionToAdd?: Region | null): void
    addSubregion(start: Gtk.TextIter, end: Gtk.TextIter): void
    getBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    getBuffer(): Gtk.TextBuffer | null
    getStartRegionIter(): /* iter */ RegionIter
    intersectRegion(region2?: Region | null): Region | null
    intersectSubregion(start: Gtk.TextIter, end: Gtk.TextIter): Region | null
    isEmpty(): boolean
    subtractRegion(regionToSubtract?: Region | null): void
    subtractSubregion(start: Gtk.TextIter, end: Gtk.TextIter): void
    toString(): string | null
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
    constructor (config?: Region_ConstructProps)
    _init (config?: Region_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Gtk.TextBuffer): Region
    static $gtype: GObject.Type
}
interface SearchContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.SearchContext */
    buffer?: Buffer
    highlight?: boolean
    matchStyle?: Style
    settings?: SearchSettings
}
class SearchContext {
    /* Properties of GtkSource-5.GtkSource.SearchContext */
    highlight: boolean
    matchStyle: Style
    readonly occurrencesCount: number
    readonly regexError: GLib.Error
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.SearchContext */
    backward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null, /* hasWrappedAround */ boolean | null ]
    backwardAsync(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    backwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null, /* hasWrappedAround */ boolean | null ]
    forward(iter: Gtk.TextIter): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null, /* hasWrappedAround */ boolean | null ]
    forwardAsync(iter: Gtk.TextIter, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    forwardFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* matchStart */ Gtk.TextIter | null, /* matchEnd */ Gtk.TextIter | null, /* hasWrappedAround */ boolean | null ]
    getBuffer(): Buffer
    getHighlight(): boolean
    getMatchStyle(): Style
    getOccurrencePosition(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter): number
    getOccurrencesCount(): number
    getRegexError(): GLib.Error | null
    getSettings(): SearchSettings
    replace(matchStart: Gtk.TextIter, matchEnd: Gtk.TextIter, replace: string, replaceLength: number): boolean
    replaceAll(replace: string, replaceLength: number): number
    setHighlight(highlight: boolean): void
    setMatchStyle(matchStyle?: Style | null): void
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
    connect(sigName: "notify::highlight", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::match-style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::match-style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::match-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::match-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::match-style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::occurrences-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::occurrences-count", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::occurrences-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::occurrences-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::occurrences-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::regex-error", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-error", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::regex-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::regex-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::regex-error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SearchContext_ConstructProps)
    _init (config?: SearchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(buffer: Buffer, settings?: SearchSettings | null): SearchContext
    static $gtype: GObject.Type
}
interface SearchSettings_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.SearchSettings */
    atWordBoundaries?: boolean
    caseSensitive?: boolean
    regexEnabled?: boolean
    searchText?: string
    wrapAround?: boolean
}
class SearchSettings {
    /* Properties of GtkSource-5.GtkSource.SearchSettings */
    atWordBoundaries: boolean
    caseSensitive: boolean
    regexEnabled: boolean
    searchText: string
    wrapAround: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.SearchSettings */
    getAtWordBoundaries(): boolean
    getCaseSensitive(): boolean
    getRegexEnabled(): boolean
    getSearchText(): string | null
    getWrapAround(): boolean
    setAtWordBoundaries(atWordBoundaries: boolean): void
    setCaseSensitive(caseSensitive: boolean): void
    setRegexEnabled(regexEnabled: boolean): void
    setSearchText(searchText?: string | null): void
    setWrapAround(wrapAround: boolean): void
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
    connect(sigName: "notify::at-word-boundaries", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::at-word-boundaries", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::at-word-boundaries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::at-word-boundaries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::at-word-boundaries", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::case-sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::case-sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::case-sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::case-sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::case-sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::regex-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::regex-enabled", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::regex-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::regex-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::regex-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-around", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-around", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-around", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-around", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-around", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SearchSettings_ConstructProps)
    _init (config?: SearchSettings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SearchSettings
    static $gtype: GObject.Type
}
interface Snippet_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Snippet */
    description?: string
    languageId?: string
    name?: string
    trigger?: string
}
class Snippet {
    /* Properties of GtkSource-5.GtkSource.Snippet */
    readonly buffer: Gtk.TextBuffer
    description: string
    readonly focusPosition: number
    languageId: string
    name: string
    trigger: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Snippet */
    addChunk(chunk: SnippetChunk): void
    copy(): Snippet
    getContext(): SnippetContext | null
    getDescription(): string
    getFocusPosition(): number
    getLanguageId(): string
    getNChunks(): number
    getName(): string
    getNthChunk(nth: number): SnippetChunk
    getTrigger(): string | null
    setDescription(description: string): void
    setLanguageId(languageId: string): void
    setName(name: string): void
    setTrigger(trigger: string): void
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
    connect(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::trigger", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trigger", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::trigger", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::trigger", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::trigger", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Snippet_ConstructProps)
    _init (config?: Snippet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(trigger?: string | null, languageId?: string | null): Snippet
    static $gtype: GObject.Type
}
interface SnippetChunk_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.SnippetChunk */
    context?: SnippetContext
    focusPosition?: number
    spec?: string
    text?: string
    textSet?: boolean
    tooltipText?: string
}
class SnippetChunk {
    /* Properties of GtkSource-5.GtkSource.SnippetChunk */
    context: SnippetContext
    focusPosition: number
    spec: string
    text: string
    textSet: boolean
    tooltipText: string
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.SnippetChunk */
    copy(): SnippetChunk
    getContext(): SnippetContext
    getFocusPosition(): number
    getSpec(): string | null
    getText(): string
    getTextSet(): boolean
    getTooltipText(): string
    setContext(context: SnippetContext): void
    setFocusPosition(focusPosition: number): void
    setSpec(spec: string): void
    setText(text: string): void
    setTextSet(textSet: boolean): void
    setTooltipText(tooltipText: string): void
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
    connect(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::spec", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spec", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::spec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::spec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::spec", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SnippetChunk_ConstructProps)
    _init (config?: SnippetChunk_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SnippetChunk
    static $gtype: GObject.Type
}
interface SnippetContext_ConstructProps extends GObject.Object_ConstructProps {
}
class SnippetContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.SnippetContext */
    clearVariables(): void
    expand(input: string): string
    getVariable(key: string): string | null
    setConstant(key: string, value: string): void
    setLinePrefix(linePrefix: string): void
    setTabWidth(tabWidth: number): void
    setUseSpaces(useSpaces: boolean): void
    setVariable(key: string, value: string): void
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
    /* Signals of GtkSource-5.GtkSource.SnippetContext */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
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
    constructor (config?: SnippetContext_ConstructProps)
    _init (config?: SnippetContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SnippetContext
    static $gtype: GObject.Type
}
interface SnippetManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.SnippetManager */
    searchPath?: string[]
}
class SnippetManager {
    /* Properties of GtkSource-5.GtkSource.SnippetManager */
    searchPath: string[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.SnippetManager */
    getSearchPath(): string[]
    getSnippet(group: string | null, languageId: string | null, trigger: string): Snippet | null
    listGroups(): string[]
    listMatching(group?: string | null, languageId?: string | null, triggerPrefix?: string | null): Gio.ListModel
    setSearchPath(dirs?: string[] | null): void
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
    connect(sigName: "notify::search-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SnippetManager_ConstructProps)
    _init (config?: SnippetManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getDefault(): SnippetManager
    static $gtype: GObject.Type
}
interface SpaceDrawer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.SpaceDrawer */
    enableMatrix?: boolean
    matrix?: GLib.Variant
}
class SpaceDrawer {
    /* Properties of GtkSource-5.GtkSource.SpaceDrawer */
    enableMatrix: boolean
    matrix: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.SpaceDrawer */
    bindMatrixSetting(settings: Gio.Settings, key: string, flags: Gio.SettingsBindFlags): void
    getEnableMatrix(): boolean
    getMatrix(): GLib.Variant
    getTypesForLocations(locations: SpaceLocationFlags): SpaceTypeFlags
    setEnableMatrix(enableMatrix: boolean): void
    setMatrix(matrix?: GLib.Variant | null): void
    setTypesForLocations(locations: SpaceLocationFlags, types: SpaceTypeFlags): void
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
    connect(sigName: "notify::enable-matrix", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-matrix", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::matrix", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::matrix", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::matrix", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SpaceDrawer_ConstructProps)
    _init (config?: SpaceDrawer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SpaceDrawer
    static $gtype: GObject.Type
}
interface Style_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Style */
    background?: string
    backgroundSet?: boolean
    bold?: boolean
    boldSet?: boolean
    foreground?: string
    foregroundSet?: boolean
    italic?: boolean
    italicSet?: boolean
    lineBackground?: string
    lineBackgroundSet?: boolean
    pangoUnderline?: Pango.Underline
    scale?: string
    scaleSet?: boolean
    strikethrough?: boolean
    strikethroughSet?: boolean
    underlineColor?: string
    underlineColorSet?: boolean
    underlineSet?: boolean
    weight?: Pango.Weight
    weightSet?: boolean
}
class Style {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.Style */
    apply(tag: Gtk.TextTag): void
    copy(): Style
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
    constructor (config?: Style_ConstructProps)
    _init (config?: Style_ConstructProps): void
    static $gtype: GObject.Type
}
interface StyleScheme_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.StyleScheme */
    id?: string
}
class StyleScheme {
    /* Properties of GtkSource-5.GtkSource.StyleScheme */
    readonly description: string
    readonly filename: string
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.StyleScheme */
    getAuthors(): string[] | null
    getDescription(): string | null
    getFilename(): string | null
    getId(): string
    getMetadata(name: string): string | null
    getName(): string
    getStyle(styleId: string): Style | null
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
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleScheme_ConstructProps)
    _init (config?: StyleScheme_ConstructProps): void
    static $gtype: GObject.Type
}
interface StyleSchemeChooserButton_ConstructProps extends Gtk.Button_ConstructProps {
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
    /* Constructor properties of Gtk-4.0.Gtk.Actionable */
    actionName?: string
    actionTarget?: GLib.Variant
    /* Constructor properties of GtkSource-5.GtkSource.StyleSchemeChooser */
    styleScheme?: StyleScheme
}
class StyleSchemeChooserButton {
    /* Properties of Gtk-4.0.Gtk.Button */
    child: Gtk.Widget
    hasFrame: boolean
    iconName: string
    label: string
    useUnderline: boolean
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Properties of Gtk-4.0.Gtk.Actionable */
    actionName: string
    actionTarget: GLib.Variant
    /* Properties of GtkSource-5.GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk-4.0.Gtk.Button */
    getChild(): Gtk.Widget | null
    getHasFrame(): boolean
    getIconName(): string | null
    getLabel(): string | null
    getUseUnderline(): boolean
    setChild(child?: Gtk.Widget | null): void
    setHasFrame(hasFrame: boolean): void
    setIconName(iconName: string): void
    setLabel(label: string): void
    setUseUnderline(useUnderline: boolean): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Actionable */
    getActionName(): string | null
    getActionTargetValue(): GLib.Variant | null
    setActionName(actionName?: string | null): void
    setActionTargetValue(targetValue?: GLib.Variant | null): void
    setDetailedActionName(detailedActionName: string): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Methods of GtkSource-5.GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Signals of Gtk-4.0.Gtk.Button */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "clicked", callback: (() => void)): number
    on(sigName: "clicked", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clicked", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clicked", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "clicked"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-frame", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-underline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleSchemeChooserButton_ConstructProps)
    _init (config?: StyleSchemeChooserButton_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeChooserButton
    static $gtype: GObject.Type
}
interface StyleSchemeChooserWidget_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
    /* Constructor properties of GtkSource-5.GtkSource.StyleSchemeChooser */
    styleScheme?: StyleScheme
}
class StyleSchemeChooserWidget {
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Properties of GtkSource-5.GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Methods of GtkSource-5.GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleSchemeChooserWidget_ConstructProps)
    _init (config?: StyleSchemeChooserWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeChooserWidget
    static $gtype: GObject.Type
}
interface StyleSchemeManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.StyleSchemeManager */
    searchPath?: string[]
}
class StyleSchemeManager {
    /* Properties of GtkSource-5.GtkSource.StyleSchemeManager */
    readonly schemeIds: string[]
    searchPath: string[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.StyleSchemeManager */
    appendSearchPath(path: string): void
    forceRescan(): void
    getScheme(schemeId: string): StyleScheme | null
    getSchemeIds(): string[] | null
    getSearchPath(): string[]
    prependSearchPath(path: string): void
    setSearchPath(path?: string[] | null): void
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
    connect(sigName: "notify::scheme-ids", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scheme-ids", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scheme-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scheme-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scheme-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::search-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::search-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::search-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleSchemeManager_ConstructProps)
    _init (config?: StyleSchemeManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StyleSchemeManager
    static getDefault(): StyleSchemeManager
    static $gtype: GObject.Type
}
interface StyleSchemePreview_ConstructProps extends Gtk.Widget_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.StyleSchemePreview */
    scheme?: StyleScheme
    selected?: boolean
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
    /* Constructor properties of Gtk-4.0.Gtk.Actionable */
    actionName?: string
    actionTarget?: GLib.Variant
}
class StyleSchemePreview {
    /* Properties of GtkSource-5.GtkSource.StyleSchemePreview */
    selected: boolean
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Properties of Gtk-4.0.Gtk.Actionable */
    actionName: string
    actionTarget: GLib.Variant
    /* Fields of Gtk-4.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.StyleSchemePreview */
    getScheme(): StyleScheme
    getSelected(): boolean
    setSelected(selected: boolean): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Actionable */
    getActionName(): string | null
    getActionTargetValue(): GLib.Variant | null
    setActionName(actionName?: string | null): void
    setActionTargetValue(targetValue?: GLib.Variant | null): void
    setDetailedActionName(detailedActionName: string): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Signals of GtkSource-5.GtkSource.StyleSchemePreview */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::action-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StyleSchemePreview_ConstructProps)
    _init (config?: StyleSchemePreview_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(scheme: StyleScheme): StyleSchemePreview
    static $gtype: GObject.Type
}
interface Tag_ConstructProps extends Gtk.TextTag_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.Tag */
    drawSpaces?: boolean
    drawSpacesSet?: boolean
}
class Tag {
    /* Properties of GtkSource-5.GtkSource.Tag */
    drawSpaces: boolean
    drawSpacesSet: boolean
    /* Properties of Gtk-4.0.Gtk.TextTag */
    accumulativeMargin: boolean
    allowBreaks: boolean
    allowBreaksSet: boolean
    background: string
    backgroundFullHeight: boolean
    backgroundFullHeightSet: boolean
    backgroundRgba: Gdk.RGBA
    backgroundSet: boolean
    direction: Gtk.TextDirection
    editable: boolean
    editableSet: boolean
    fallback: boolean
    fallbackSet: boolean
    family: string
    familySet: boolean
    font: string
    fontDesc: Pango.FontDescription
    fontFeatures: string
    fontFeaturesSet: boolean
    foreground: string
    foregroundRgba: Gdk.RGBA
    foregroundSet: boolean
    indent: number
    indentSet: boolean
    insertHyphens: boolean
    insertHyphensSet: boolean
    invisible: boolean
    invisibleSet: boolean
    justification: Gtk.Justification
    justificationSet: boolean
    language: string
    languageSet: boolean
    leftMargin: number
    leftMarginSet: boolean
    letterSpacing: number
    letterSpacingSet: boolean
    lineHeight: number
    lineHeightSet: boolean
    overline: Pango.Overline
    overlineRgba: Gdk.RGBA
    overlineRgbaSet: boolean
    overlineSet: boolean
    paragraphBackground: string
    paragraphBackgroundRgba: Gdk.RGBA
    paragraphBackgroundSet: boolean
    pixelsAboveLines: number
    pixelsAboveLinesSet: boolean
    pixelsBelowLines: number
    pixelsBelowLinesSet: boolean
    pixelsInsideWrap: number
    pixelsInsideWrapSet: boolean
    rightMargin: number
    rightMarginSet: boolean
    rise: number
    riseSet: boolean
    scale: number
    scaleSet: boolean
    sentence: boolean
    sentenceSet: boolean
    showSpaces: Pango.ShowFlags
    showSpacesSet: boolean
    size: number
    sizePoints: number
    sizeSet: boolean
    stretch: Pango.Stretch
    stretchSet: boolean
    strikethrough: boolean
    strikethroughRgba: Gdk.RGBA
    strikethroughRgbaSet: boolean
    strikethroughSet: boolean
    style: Pango.Style
    styleSet: boolean
    tabs: Pango.TabArray
    tabsSet: boolean
    textTransform: Pango.TextTransform
    textTransformSet: boolean
    underline: Pango.Underline
    underlineRgba: Gdk.RGBA
    underlineRgbaSet: boolean
    underlineSet: boolean
    variant: Pango.Variant
    variantSet: boolean
    weight: number
    weightSet: boolean
    word: boolean
    wordSet: boolean
    wrapMode: Gtk.WrapMode
    wrapModeSet: boolean
    /* Fields of Gtk-4.0.Gtk.TextTag */
    readonly parentInstance: GObject.Object
    readonly priv: Gtk.TextTagPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk-4.0.Gtk.TextTag */
    changed(sizeChanged: boolean): void
    getPriority(): number
    setPriority(priority: number): void
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
    connect(sigName: "notify::draw-spaces", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::draw-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::draw-spaces-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::draw-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::draw-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::draw-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accumulative-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accumulative-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accumulative-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accumulative-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accumulative-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-breaks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-breaks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-breaks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-breaks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-breaks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allow-breaks-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-breaks-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allow-breaks-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allow-breaks-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allow-breaks-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-full-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-full-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-full-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-full-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-full-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-full-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-full-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-full-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-full-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fallback", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fallback-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fallback-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fallback-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fallback-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fallback-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::family-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::family-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::family-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::family-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::family-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-features", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::font-features-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-features-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-features-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-features-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-features-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::foreground", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::foreground", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::foreground", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::foreground-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::foreground-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::foreground-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::foreground-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::foreground-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-hyphens", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-hyphens", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-hyphens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-hyphens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-hyphens", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-hyphens-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-hyphens-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-hyphens-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-hyphens-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-hyphens-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::invisible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::invisible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::invisible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::invisible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::invisible-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::invisible-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::invisible-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::invisible-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::justification", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::justification-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::justification-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::justification-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-margin-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::letter-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::letter-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::letter-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::letter-spacing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::letter-spacing-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::letter-spacing-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::letter-spacing-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::letter-spacing-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::letter-spacing-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::line-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::line-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::line-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::line-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::line-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overline-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overline-rgba-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-rgba-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overline-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overline-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paragraph-background", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paragraph-background-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paragraph-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paragraph-background-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paragraph-background-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paragraph-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paragraph-background-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-above-lines-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-above-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-above-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-below-lines-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-below-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-below-lines-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-inside-wrap-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-inside-wrap-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-inside-wrap-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rise", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rise", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rise-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rise-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rise-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rise-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rise-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sentence", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sentence", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sentence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sentence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sentence", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sentence-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sentence-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sentence-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sentence-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sentence-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-spaces", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-spaces", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-spaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-spaces-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-spaces-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-spaces-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stretch", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stretch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stretch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stretch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stretch-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stretch-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stretch-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stretch-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stretch-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strikethrough", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strikethrough-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strikethrough-rgba-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-rgba-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::strikethrough-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::strikethrough-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::strikethrough-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tabs-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tabs-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tabs-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::underline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::underline-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::underline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::underline-rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::underline-rgba-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-rgba-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::underline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::underline-rgba-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::underline-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::underline-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::underline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::underline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::underline-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::variant", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::variant-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::variant-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::variant-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::variant-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::variant-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::weight", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::weight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::weight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::weight", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::weight-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::weight-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::weight-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::weight-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::weight-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::word", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::word", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::word", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::word", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::word", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::word-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::word-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::word-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::word-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::word-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Tag_ConstructProps)
    _init (config?: Tag_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): Tag
    /* Function overloads */
    static new(name?: string | null): Tag
    static $gtype: GObject.Type
}
interface View_ConstructProps extends Gtk.TextView_ConstructProps {
    /* Constructor properties of GtkSource-5.GtkSource.View */
    autoIndent?: boolean
    backgroundPattern?: BackgroundPatternType
    enableSnippets?: boolean
    highlightCurrentLine?: boolean
    indentOnTab?: boolean
    indentWidth?: number
    indenter?: Indenter
    insertSpacesInsteadOfTabs?: boolean
    rightMarginPosition?: number
    showLineMarks?: boolean
    showLineNumbers?: boolean
    showRightMargin?: boolean
    smartBackspace?: boolean
    smartHomeEnd?: SmartHomeEndType
    tabWidth?: number
    /* Constructor properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole?: Gtk.AccessibleRole
    /* Constructor properties of Gtk-4.0.Gtk.Scrollable */
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
class View {
    /* Properties of GtkSource-5.GtkSource.View */
    autoIndent: boolean
    backgroundPattern: BackgroundPatternType
    readonly completion: Completion
    enableSnippets: boolean
    highlightCurrentLine: boolean
    indentOnTab: boolean
    indentWidth: number
    indenter: Indenter
    insertSpacesInsteadOfTabs: boolean
    rightMarginPosition: number
    showLineMarks: boolean
    showLineNumbers: boolean
    showRightMargin: boolean
    smartBackspace: boolean
    smartHomeEnd: SmartHomeEndType
    readonly spaceDrawer: SpaceDrawer
    tabWidth: number
    /* Properties of Gtk-4.0.Gtk.TextView */
    acceptsTab: boolean
    bottomMargin: number
    buffer: Gtk.TextBuffer
    cursorVisible: boolean
    editable: boolean
    extraMenu: Gio.MenuModel
    imModule: string
    indent: number
    inputHints: Gtk.InputHints
    inputPurpose: Gtk.InputPurpose
    justification: Gtk.Justification
    leftMargin: number
    monospace: boolean
    overwrite: boolean
    pixelsAboveLines: number
    pixelsBelowLines: number
    pixelsInsideWrap: number
    rightMargin: number
    tabs: Pango.TabArray
    topMargin: number
    wrapMode: Gtk.WrapMode
    /* Properties of Gtk-4.0.Gtk.Widget */
    canFocus: boolean
    canTarget: boolean
    cssClasses: string[]
    cursor: Gdk.Cursor
    focusOnClick: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly hasDefault: boolean
    readonly hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    layoutManager: Gtk.LayoutManager
    marginBottom: number
    marginEnd: number
    marginStart: number
    marginTop: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receivesDefault: boolean
    readonly root: Gtk.Root
    readonly scaleFactor: number
    sensitive: boolean
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessibleRole: Gtk.AccessibleRole
    /* Properties of Gtk-4.0.Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of Gtk-4.0.Gtk.TextView */
    readonly parentInstance: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): BackgroundPatternType
    getCompletion(): Completion
    getEnableSnippets(): boolean
    getGutter(windowType: Gtk.TextWindowType): Gutter
    getHighlightCurrentLine(): boolean
    getHover(): Hover
    getIndentOnTab(): boolean
    getIndentWidth(): number
    getIndenter(): Indenter | null
    getInsertSpacesInsteadOfTabs(): boolean
    getMarkAttributes(category: string, priority: number): MarkAttributes
    getRightMarginPosition(): number
    getShowLineMarks(): boolean
    getShowLineNumbers(): boolean
    getShowRightMargin(): boolean
    getSmartBackspace(): boolean
    getSmartHomeEnd(): SmartHomeEndType
    getSpaceDrawer(): SpaceDrawer
    getTabWidth(): number
    getVisualColumn(iter: Gtk.TextIter): number
    indentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    pushSnippet(snippet: Snippet, location?: Gtk.TextIter | null): void
    setAutoIndent(enable: boolean): void
    setBackgroundPattern(backgroundPattern: BackgroundPatternType): void
    setEnableSnippets(enableSnippets: boolean): void
    setHighlightCurrentLine(highlight: boolean): void
    setIndentOnTab(enable: boolean): void
    setIndentWidth(width: number): void
    setIndenter(indenter?: Indenter | null): void
    setInsertSpacesInsteadOfTabs(enable: boolean): void
    setMarkAttributes(category: string, attributes: MarkAttributes, priority: number): void
    setRightMarginPosition(pos: number): void
    setShowLineMarks(show: boolean): void
    setShowLineNumbers(show: boolean): void
    setShowRightMargin(show: boolean): void
    setSmartBackspace(smartBackspace: boolean): void
    setSmartHomeEnd(smartHomeEnd: SmartHomeEndType): void
    setTabWidth(width: number): void
    unindentLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Methods of Gtk-4.0.Gtk.TextView */
    addChildAtAnchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    addOverlay(child: Gtk.Widget, xpos: number, ypos: number): void
    backwardDisplayLine(iter: Gtk.TextIter): boolean
    backwardDisplayLineStart(iter: Gtk.TextIter): boolean
    bufferToWindowCoords(win: Gtk.TextWindowType, bufferX: number, bufferY: number): [ /* windowX */ number | null, /* windowY */ number | null ]
    forwardDisplayLine(iter: Gtk.TextIter): boolean
    forwardDisplayLineEnd(iter: Gtk.TextIter): boolean
    getAcceptsTab(): boolean
    getBottomMargin(): number
    getBuffer(): Gtk.TextBuffer
    getCursorLocations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    getCursorVisible(): boolean
    getEditable(): boolean
    getExtraMenu(): Gio.MenuModel
    getGutter(win: Gtk.TextWindowType): Gtk.Widget | null
    getIndent(): number
    getInputHints(): Gtk.InputHints
    getInputPurpose(): Gtk.InputPurpose
    getIterAtLocation(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getIterAtPosition(x: number, y: number): [ /* returnType */ boolean, /* iter */ Gtk.TextIter, /* trailing */ number | null ]
    getIterLocation(iter: Gtk.TextIter): /* location */ Gdk.Rectangle
    getJustification(): Gtk.Justification
    getLeftMargin(): number
    getLineAtY(y: number): [ /* targetIter */ Gtk.TextIter, /* lineTop */ number ]
    getLineYrange(iter: Gtk.TextIter): [ /* y */ number, /* height */ number ]
    getLtrContext(): Pango.Context
    getMonospace(): boolean
    getOverwrite(): boolean
    getPixelsAboveLines(): number
    getPixelsBelowLines(): number
    getPixelsInsideWrap(): number
    getRightMargin(): number
    getRtlContext(): Pango.Context
    getTabs(): Pango.TabArray | null
    getTopMargin(): number
    getVisibleRect(): /* visibleRect */ Gdk.Rectangle
    getWrapMode(): Gtk.WrapMode
    imContextFilterKeypress(event: Gdk.Event): boolean
    moveMarkOnscreen(mark: Gtk.TextMark): boolean
    moveOverlay(child: Gtk.Widget, xpos: number, ypos: number): void
    moveVisually(iter: Gtk.TextIter, count: number): boolean
    placeCursorOnscreen(): boolean
    remove(child: Gtk.Widget): void
    resetCursorBlink(): void
    resetImContext(): void
    scrollMarkOnscreen(mark: Gtk.TextMark): void
    scrollToIter(iter: Gtk.TextIter, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): boolean
    scrollToMark(mark: Gtk.TextMark, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): void
    setAcceptsTab(acceptsTab: boolean): void
    setBottomMargin(bottomMargin: number): void
    setBuffer(buffer?: Gtk.TextBuffer | null): void
    setCursorVisible(setting: boolean): void
    setEditable(setting: boolean): void
    setExtraMenu(model?: Gio.MenuModel | null): void
    setGutter(win: Gtk.TextWindowType, widget?: Gtk.Widget | null): void
    setIndent(indent: number): void
    setInputHints(hints: Gtk.InputHints): void
    setInputPurpose(purpose: Gtk.InputPurpose): void
    setJustification(justification: Gtk.Justification): void
    setLeftMargin(leftMargin: number): void
    setMonospace(monospace: boolean): void
    setOverwrite(overwrite: boolean): void
    setPixelsAboveLines(pixelsAboveLines: number): void
    setPixelsBelowLines(pixelsBelowLines: number): void
    setPixelsInsideWrap(pixelsInsideWrap: number): void
    setRightMargin(rightMargin: number): void
    setTabs(tabs: Pango.TabArray): void
    setTopMargin(topMargin: number): void
    setWrapMode(wrapMode: Gtk.WrapMode): void
    startsDisplayLine(iter: Gtk.TextIter): boolean
    windowToBufferCoords(win: Gtk.TextWindowType, windowX: number, windowY: number): [ /* bufferX */ number | null, /* bufferY */ number | null ]
    /* Methods of Gtk-4.0.Gtk.Widget */
    actionSetEnabled(actionName: string, enabled: boolean): void
    activate(): boolean
    activateAction(name: string, args?: GLib.Variant | null): boolean
    activateDefault(): void
    addController(controller: Gtk.EventController): void
    addCssClass(cssClass: string): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    childFocus(direction: Gtk.DirectionType): boolean
    computeBounds(target: Gtk.Widget): [ /* returnType */ boolean, /* outBounds */ Graphene.Rect ]
    computeExpand(orientation: Gtk.Orientation): boolean
    computePoint(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* outPoint */ Graphene.Point ]
    computeTransform(target: Gtk.Widget): [ /* returnType */ boolean, /* outTransform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    errorBell(): void
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getCanFocus(): boolean
    getCanTarget(): boolean
    getChildVisible(): boolean
    getClipboard(): Gdk.Clipboard
    getCssClasses(): string[]
    getCssName(): string
    getCursor(): Gdk.Cursor | null
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getFirstChild(): Gtk.Widget | null
    getFocusChild(): Gtk.Widget | null
    getFocusOnClick(): boolean
    getFocusable(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHeight(): number
    getHexpand(): boolean
    getHexpandSet(): boolean
    getLastChild(): Gtk.Widget | null
    getLayoutManager(): Gtk.LayoutManager | null
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginStart(): number
    getMarginTop(): number
    getName(): string
    getNative(): Gtk.Native | null
    getNextSibling(): Gtk.Widget | null
    getOpacity(): number
    getOverflow(): Gtk.Overflow
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPrevSibling(): Gtk.Widget | null
    getPrimaryClipboard(): Gdk.Clipboard
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRoot(): Gtk.Root | null
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSize(orientation: Gtk.Orientation): number
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getStateFlags(): Gtk.StateFlags
    getStyleContext(): Gtk.StyleContext
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getValign(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getWidth(): number
    grabFocus(): boolean
    hasCssClass(cssClass: string): boolean
    hasVisibleFocus(): boolean
    hide(): void
    inDestruction(): boolean
    initTemplate(): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    insertAfter(parent: Gtk.Widget, previousSibling?: Gtk.Widget | null): void
    insertBefore(parent: Gtk.Widget, nextSibling?: Gtk.Widget | null): void
    isAncestor(ancestor: Gtk.Widget): boolean
    isDrawable(): boolean
    isFocus(): boolean
    isSensitive(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, forSize: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    mnemonicActivate(groupCycling: boolean): boolean
    observeChildren(): Gio.ListModel
    observeControllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queueAllocate(): void
    queueDraw(): void
    queueResize(): void
    realize(): void
    removeController(controller: Gtk.EventController): void
    removeCssClass(cssClass: string): void
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    setCanFocus(canFocus: boolean): void
    setCanTarget(canTarget: boolean): void
    setChildVisible(childVisible: boolean): void
    setCssClasses(classes: string[]): void
    setCursor(cursor?: Gdk.Cursor | null): void
    setCursorFromName(name?: string | null): void
    setDirection(dir: Gtk.TextDirection): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusOnClick(focusOnClick: boolean): void
    setFocusable(focusable: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setLayoutManager(layoutManager?: Gtk.LayoutManager | null): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setOpacity(opacity: number): void
    setOverflow(overflow: Gtk.Overflow): void
    setParent(parent: Gtk.Widget): void
    setReceivesDefault(receivesDefault: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    shouldLayout(): boolean
    show(): void
    sizeAllocate(allocation: Gtk.Allocation, baseline: number): void
    snapshotChild(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unsetStateFlags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    getAccessibleRole(): Gtk.AccessibleRole
    resetProperty(property: Gtk.AccessibleProperty): void
    resetRelation(relation: Gtk.AccessibleRelation): void
    resetState(state: Gtk.AccessibleState): void
    updateProperty(properties: Gtk.AccessibleProperty[], values: any[]): void
    updateRelation(relations: Gtk.AccessibleRelation[], values: any[]): void
    updateState(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    getBuildableId(): string | null
    /* Methods of Gtk-4.0.Gtk.Scrollable */
    getBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    getHadjustment(): Gtk.Adjustment | null
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVadjustment(): Gtk.Adjustment | null
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Signals of GtkSource-5.GtkSource.View */
    connect(sigName: "change-case", callback: ((caseType: ChangeCaseType) => void)): number
    on(sigName: "change-case", callback: (caseType: ChangeCaseType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "change-case", callback: (caseType: ChangeCaseType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "change-case", callback: (caseType: ChangeCaseType) => void): NodeJS.EventEmitter
    emit(sigName: "change-case", caseType: ChangeCaseType): void
    connect(sigName: "change-number", callback: ((count: number) => void)): number
    on(sigName: "change-number", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "change-number", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "change-number", callback: (count: number) => void): NodeJS.EventEmitter
    emit(sigName: "change-number", count: number): void
    connect(sigName: "join-lines", callback: (() => void)): number
    on(sigName: "join-lines", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "join-lines", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "join-lines", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "join-lines"): void
    connect(sigName: "line-mark-activated", callback: ((iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void)): number
    on(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void): NodeJS.EventEmitter
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number): void
    connect(sigName: "move-lines", callback: ((down: boolean) => void)): number
    on(sigName: "move-lines", callback: (down: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-lines", callback: (down: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-lines", callback: (down: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "move-lines", down: boolean): void
    connect(sigName: "move-to-matching-bracket", callback: ((extendSelection: boolean) => void)): number
    on(sigName: "move-to-matching-bracket", callback: (extendSelection: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-to-matching-bracket", callback: (extendSelection: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-to-matching-bracket", callback: (extendSelection: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "move-to-matching-bracket", extendSelection: boolean): void
    connect(sigName: "move-words", callback: ((count: number) => void)): number
    on(sigName: "move-words", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-words", callback: (count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-words", callback: (count: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-words", count: number): void
    connect(sigName: "push-snippet", callback: ((snippet: Snippet, location: Gtk.TextIter) => void)): number
    on(sigName: "push-snippet", callback: (snippet: Snippet, location: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "push-snippet", callback: (snippet: Snippet, location: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "push-snippet", callback: (snippet: Snippet, location: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "push-snippet", snippet: Snippet, location: Gtk.TextIter): void
    connect(sigName: "show-completion", callback: (() => void)): number
    on(sigName: "show-completion", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-completion", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-completion", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-completion"): void
    connect(sigName: "smart-home-end", callback: ((iter: Gtk.TextIter, count: number) => void)): number
    on(sigName: "smart-home-end", callback: (iter: Gtk.TextIter, count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "smart-home-end", callback: (iter: Gtk.TextIter, count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "smart-home-end", callback: (iter: Gtk.TextIter, count: number) => void): NodeJS.EventEmitter
    emit(sigName: "smart-home-end", iter: Gtk.TextIter, count: number): void
    /* Signals of Gtk-4.0.Gtk.TextView */
    connect(sigName: "backspace", callback: (() => void)): number
    on(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "backspace", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "backspace", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "backspace"): void
    connect(sigName: "copy-clipboard", callback: (() => void)): number
    on(sigName: "copy-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "copy-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "copy-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "copy-clipboard"): void
    connect(sigName: "cut-clipboard", callback: (() => void)): number
    on(sigName: "cut-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cut-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cut-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cut-clipboard"): void
    connect(sigName: "delete-from-cursor", callback: ((type: Gtk.DeleteType, count: number) => void)): number
    on(sigName: "delete-from-cursor", callback: (type: Gtk.DeleteType, count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-from-cursor", callback: (type: Gtk.DeleteType, count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-from-cursor", callback: (type: Gtk.DeleteType, count: number) => void): NodeJS.EventEmitter
    emit(sigName: "delete-from-cursor", type: Gtk.DeleteType, count: number): void
    connect(sigName: "extend-selection", callback: ((granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => boolean)): number
    on(sigName: "extend-selection", callback: (granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "extend-selection", callback: (granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "extend-selection", callback: (granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "extend-selection", granularity: Gtk.TextExtendSelection, location: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "insert-at-cursor", callback: ((string: string) => void)): number
    on(sigName: "insert-at-cursor", callback: (string: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-at-cursor", callback: (string: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-at-cursor", callback: (string: string) => void): NodeJS.EventEmitter
    emit(sigName: "insert-at-cursor", string: string): void
    connect(sigName: "insert-emoji", callback: (() => void)): number
    on(sigName: "insert-emoji", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-emoji", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-emoji", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "insert-emoji"): void
    connect(sigName: "move-cursor", callback: ((step: Gtk.MovementStep, count: number, extendSelection: boolean) => void)): number
    on(sigName: "move-cursor", callback: (step: Gtk.MovementStep, count: number, extendSelection: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: (step: Gtk.MovementStep, count: number, extendSelection: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: (step: Gtk.MovementStep, count: number, extendSelection: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "move-cursor", step: Gtk.MovementStep, count: number, extendSelection: boolean): void
    connect(sigName: "move-viewport", callback: ((step: Gtk.ScrollStep, count: number) => void)): number
    on(sigName: "move-viewport", callback: (step: Gtk.ScrollStep, count: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-viewport", callback: (step: Gtk.ScrollStep, count: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-viewport", callback: (step: Gtk.ScrollStep, count: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-viewport", step: Gtk.ScrollStep, count: number): void
    connect(sigName: "paste-clipboard", callback: (() => void)): number
    on(sigName: "paste-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paste-clipboard", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paste-clipboard", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paste-clipboard"): void
    connect(sigName: "preedit-changed", callback: ((preedit: string) => void)): number
    on(sigName: "preedit-changed", callback: (preedit: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-changed", callback: (preedit: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-changed", callback: (preedit: string) => void): NodeJS.EventEmitter
    emit(sigName: "preedit-changed", preedit: string): void
    connect(sigName: "select-all", callback: ((select: boolean) => void)): number
    on(sigName: "select-all", callback: (select: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-all", callback: (select: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-all", callback: (select: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "select-all", select: boolean): void
    connect(sigName: "set-anchor", callback: (() => void)): number
    on(sigName: "set-anchor", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-anchor", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-anchor", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "set-anchor"): void
    connect(sigName: "toggle-cursor-visible", callback: (() => void)): number
    on(sigName: "toggle-cursor-visible", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "toggle-cursor-visible", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "toggle-cursor-visible", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "toggle-cursor-visible"): void
    connect(sigName: "toggle-overwrite", callback: (() => void)): number
    on(sigName: "toggle-overwrite", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "toggle-overwrite", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "toggle-overwrite", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "toggle-overwrite"): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: ((x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", x: number, y: number, keyboardMode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::completion", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::completion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-snippets", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-snippets", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-snippets", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::highlight-current-line", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::highlight-current-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-on-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-on-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indenter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indenter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indenter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indenter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indenter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::insert-spaces-instead-of-tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-line-marks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-line-marks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-line-numbers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-line-numbers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-backspace", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-backspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::smart-home-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::smart-home-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::space-drawer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::space-drawer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tab-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tab-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accepts-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accepts-tab", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bottom-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bottom-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::editable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::extra-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-menu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::extra-menu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::im-module", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::im-module", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::indent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-purpose", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::justification", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::justification", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::left-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::left-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::monospace", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::monospace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overwrite", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-above-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-above-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-below-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-below-lines", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixels-inside-wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixels-inside-wrap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::right-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tabs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::top-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::top-margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wrap-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wrap-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vadjustment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vscroll-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: View_ConstructProps)
    _init (config?: View_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): View
    static newWithBuffer(buffer: Buffer): View
    /* Function overloads */
    static newWithBuffer(buffer: Gtk.TextBuffer): View
    static $gtype: GObject.Type
}
interface VimIMContext_ConstructProps extends Gtk.IMContext_ConstructProps {
}
class VimIMContext {
    /* Properties of GtkSource-5.GtkSource.VimIMContext */
    readonly commandBarText: string
    readonly commandText: string
    /* Properties of Gtk-4.0.Gtk.IMContext */
    inputHints: Gtk.InputHints
    inputPurpose: Gtk.InputPurpose
    /* Fields of Gtk-4.0.Gtk.IMContext */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-5.GtkSource.VimIMContext */
    executeCommand(command: string): void
    getCommandBarText(): string
    getCommandText(): string
    /* Methods of Gtk-4.0.Gtk.IMContext */
    deleteSurrounding(offset: number, nChars: number): boolean
    filterKey(press: boolean, surface: Gdk.Surface, device: Gdk.Device, time: number, keycode: number, state: Gdk.ModifierType, group: number): boolean
    filterKeypress(event: Gdk.Event): boolean
    focusIn(): void
    focusOut(): void
    getPreeditString(): [ /* str */ string, /* attrs */ Pango.AttrList, /* cursorPos */ number ]
    getSurrounding(): [ /* returnType */ boolean, /* text */ string, /* cursorIndex */ number ]
    getSurroundingWithSelection(): [ /* returnType */ boolean, /* text */ string, /* cursorIndex */ number, /* anchorIndex */ number ]
    reset(): void
    setClientWidget(widget?: Gtk.Widget | null): void
    setCursorLocation(area: Gdk.Rectangle): void
    setSurrounding(text: string, len: number, cursorIndex: number): void
    setSurroundingWithSelection(text: string, len: number, cursorIndex: number, anchorIndex: number): void
    setUsePreedit(usePreedit: boolean): void
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
    /* Signals of GtkSource-5.GtkSource.VimIMContext */
    connect(sigName: "edit", callback: ((view: View, path?: string | null) => void)): number
    on(sigName: "edit", callback: (view: View, path?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "edit", callback: (view: View, path?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "edit", callback: (view: View, path?: string | null) => void): NodeJS.EventEmitter
    emit(sigName: "edit", view: View, path?: string | null): void
    connect(sigName: "execute-command", callback: ((command: string) => boolean)): number
    on(sigName: "execute-command", callback: (command: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "execute-command", callback: (command: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "execute-command", callback: (command: string) => void): NodeJS.EventEmitter
    emit(sigName: "execute-command", command: string): void
    connect(sigName: "format-text", callback: ((begin: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    on(sigName: "format-text", callback: (begin: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "format-text", callback: (begin: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "format-text", callback: (begin: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "format-text", begin: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "write", callback: ((view: View, path?: string | null) => void)): number
    on(sigName: "write", callback: (view: View, path?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "write", callback: (view: View, path?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "write", callback: (view: View, path?: string | null) => void): NodeJS.EventEmitter
    emit(sigName: "write", view: View, path?: string | null): void
    /* Signals of Gtk-4.0.Gtk.IMContext */
    connect(sigName: "commit", callback: ((str: string) => void)): number
    on(sigName: "commit", callback: (str: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commit", callback: (str: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commit", callback: (str: string) => void): NodeJS.EventEmitter
    emit(sigName: "commit", str: string): void
    connect(sigName: "delete-surrounding", callback: ((offset: number, nChars: number) => boolean)): number
    on(sigName: "delete-surrounding", callback: (offset: number, nChars: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-surrounding", callback: (offset: number, nChars: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-surrounding", callback: (offset: number, nChars: number) => void): NodeJS.EventEmitter
    emit(sigName: "delete-surrounding", offset: number, nChars: number): void
    connect(sigName: "preedit-changed", callback: (() => void)): number
    on(sigName: "preedit-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "preedit-changed"): void
    connect(sigName: "preedit-end", callback: (() => void)): number
    on(sigName: "preedit-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-end", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-end", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "preedit-end"): void
    connect(sigName: "preedit-start", callback: (() => void)): number
    on(sigName: "preedit-start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-start", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-start", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "preedit-start"): void
    connect(sigName: "retrieve-surrounding", callback: (() => boolean)): number
    on(sigName: "retrieve-surrounding", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "retrieve-surrounding", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "retrieve-surrounding", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "retrieve-surrounding"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::command-bar-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::command-bar-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::command-bar-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::command-bar-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::command-bar-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::command-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::command-text", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::command-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::command-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::command-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-purpose", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VimIMContext_ConstructProps)
    _init (config?: VimIMContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VimIMContext
    static $gtype: GObject.Type
}
abstract class BufferClass {
    /* Fields of GtkSource-5.GtkSource.BufferClass */
    readonly parentClass: Gtk.TextBufferClass
    readonly bracketMatched: (buffer: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void
    static name: string
}
abstract class CompletionCellClass {
    /* Fields of GtkSource-5.GtkSource.CompletionCellClass */
    readonly parentClass: Gtk.WidgetClass
    static name: string
}
abstract class CompletionClass {
    /* Fields of GtkSource-5.GtkSource.CompletionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CompletionContextClass {
    /* Fields of GtkSource-5.GtkSource.CompletionContextClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CompletionProposalInterface {
    /* Fields of GtkSource-5.GtkSource.CompletionProposalInterface */
    readonly parentIface: GObject.TypeInterface
    static name: string
}
abstract class CompletionProviderInterface {
    /* Fields of GtkSource-5.GtkSource.CompletionProviderInterface */
    readonly parentIface: GObject.TypeInterface
    readonly getTitle: (self: CompletionProvider) => string | null
    readonly getPriority: (self: CompletionProvider, context: CompletionContext) => number
    readonly isTrigger: (self: CompletionProvider, iter: Gtk.TextIter, ch: number) => boolean
    readonly keyActivates: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal, keyval: number, state: Gdk.ModifierType) => boolean
    readonly populateAsync: (self: CompletionProvider, context: CompletionContext, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly populateFinish: (self: CompletionProvider, result: Gio.AsyncResult) => Gio.ListModel
    readonly refilter: (self: CompletionProvider, context: CompletionContext, model: Gio.ListModel) => void
    readonly display: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal, cell: CompletionCell) => void
    readonly activate: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => void
    readonly listAlternates: (self: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => CompletionProposal[] | null
    static name: string
}
abstract class CompletionSnippetsClass {
    /* Fields of GtkSource-5.GtkSource.CompletionSnippetsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class CompletionWordsClass {
    /* Fields of GtkSource-5.GtkSource.CompletionWordsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class Encoding {
    /* Methods of GtkSource-5.GtkSource.Encoding */
    copy(): Encoding
    free(): void
    getCharset(): string
    getName(): string
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static getAll(): Encoding[]
    static getCurrent(): Encoding
    static getDefaultCandidates(): Encoding[]
    static getFromCharset(charset: string): Encoding | null
    static getUtf8(): Encoding
}
abstract class FileClass {
    /* Fields of GtkSource-5.GtkSource.FileClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FileLoaderClass {
    /* Fields of GtkSource-5.GtkSource.FileLoaderClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class FileSaverClass {
    /* Fields of GtkSource-5.GtkSource.FileSaverClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class GutterClass {
    /* Fields of GtkSource-5.GtkSource.GutterClass */
    readonly parentClass: Gtk.WidgetClass
    static name: string
}
abstract class GutterLinesClass {
    /* Fields of GtkSource-5.GtkSource.GutterLinesClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class GutterRendererClass {
    /* Fields of GtkSource-5.GtkSource.GutterRendererClass */
    readonly parentClass: Gtk.WidgetClass
    readonly queryData: (renderer: GutterRenderer, lines: GutterLines, line: number) => void
    readonly begin: (renderer: GutterRenderer, lines: GutterLines) => void
    readonly snapshotLine: (renderer: GutterRenderer, snapshot: Gtk.Snapshot, lines: GutterLines, line: number) => void
    readonly end: (renderer: GutterRenderer) => void
    readonly changeView: (renderer: GutterRenderer, oldView?: View | null) => void
    readonly changeBuffer: (renderer: GutterRenderer, oldBuffer?: Buffer | null) => void
    readonly queryActivatable: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle) => boolean
    readonly activate: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, button: number, state: Gdk.ModifierType, nPresses: number) => void
    static name: string
}
abstract class GutterRendererPixbufClass {
    /* Fields of GtkSource-5.GtkSource.GutterRendererPixbufClass */
    readonly parentClass: GutterRendererClass
    static name: string
}
abstract class GutterRendererTextClass {
    /* Fields of GtkSource-5.GtkSource.GutterRendererTextClass */
    readonly parentClass: GutterRendererClass
    static name: string
}
abstract class HoverClass {
    /* Fields of GtkSource-5.GtkSource.HoverClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class HoverContextClass {
    /* Fields of GtkSource-5.GtkSource.HoverContextClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class HoverDisplayClass {
    /* Fields of GtkSource-5.GtkSource.HoverDisplayClass */
    readonly parentClass: Gtk.WidgetClass
    static name: string
}
abstract class HoverProviderInterface {
    /* Fields of GtkSource-5.GtkSource.HoverProviderInterface */
    readonly parentIface: GObject.TypeInterface
    readonly populate: (self: HoverProvider, context: HoverContext, display: HoverDisplay) => boolean
    readonly populateAsync: (self: HoverProvider, context: HoverContext, display: HoverDisplay, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly populateFinish: (self: HoverProvider, result: Gio.AsyncResult) => boolean
    static name: string
}
abstract class IndenterInterface {
    /* Fields of GtkSource-5.GtkSource.IndenterInterface */
    readonly parentIface: GObject.TypeInterface
    readonly isTrigger: (self: Indenter, view: View, location: Gtk.TextIter, state: Gdk.ModifierType, keyval: number) => boolean
    readonly indent: (self: Indenter, view: View, iter: Gtk.TextIter) => /* iter */ Gtk.TextIter
    static name: string
}
abstract class LanguageClass {
    /* Fields of GtkSource-5.GtkSource.LanguageClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class LanguageManagerClass {
    /* Fields of GtkSource-5.GtkSource.LanguageManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MapClass {
    /* Fields of GtkSource-5.GtkSource.MapClass */
    readonly parentClass: ViewClass
    static name: string
}
abstract class MarkAttributesClass {
    /* Fields of GtkSource-5.GtkSource.MarkAttributesClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class MarkClass {
    /* Fields of GtkSource-5.GtkSource.MarkClass */
    readonly parentClass: Gtk.TextMarkClass
    static name: string
}
abstract class PrintCompositorClass {
    /* Fields of GtkSource-5.GtkSource.PrintCompositorClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RegionClass {
    /* Fields of GtkSource-5.GtkSource.RegionClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class RegionIter {
    /* Methods of GtkSource-5.GtkSource.RegionIter */
    getSubregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    isEnd(): boolean
    next(): boolean
    static name: string
}
abstract class SearchContextClass {
    /* Fields of GtkSource-5.GtkSource.SearchContextClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SearchSettingsClass {
    /* Fields of GtkSource-5.GtkSource.SearchSettingsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SnippetChunkClass {
    /* Fields of GtkSource-5.GtkSource.SnippetChunkClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    static name: string
}
abstract class SnippetClass {
    /* Fields of GtkSource-5.GtkSource.SnippetClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SnippetContextClass {
    /* Fields of GtkSource-5.GtkSource.SnippetContextClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SnippetManagerClass {
    /* Fields of GtkSource-5.GtkSource.SnippetManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class SpaceDrawerClass {
    /* Fields of GtkSource-5.GtkSource.SpaceDrawerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class StyleClass {
    /* Fields of GtkSource-5.GtkSource.StyleClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class StyleSchemeChooserButtonClass {
    /* Fields of GtkSource-5.GtkSource.StyleSchemeChooserButtonClass */
    readonly parent: Gtk.ButtonClass
    static name: string
}
abstract class StyleSchemeChooserInterface {
    /* Fields of GtkSource-5.GtkSource.StyleSchemeChooserInterface */
    readonly baseInterface: GObject.TypeInterface
    readonly getStyleScheme: (chooser: StyleSchemeChooser) => StyleScheme
    readonly setStyleScheme: (chooser: StyleSchemeChooser, scheme: StyleScheme) => void
    static name: string
}
abstract class StyleSchemeChooserWidgetClass {
    /* Fields of GtkSource-5.GtkSource.StyleSchemeChooserWidgetClass */
    readonly parent: Gtk.WidgetClass
    static name: string
}
abstract class StyleSchemeClass {
    /* Fields of GtkSource-5.GtkSource.StyleSchemeClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class StyleSchemeManagerClass {
    /* Fields of GtkSource-5.GtkSource.StyleSchemeManagerClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class StyleSchemePreviewClass {
    /* Fields of GtkSource-5.GtkSource.StyleSchemePreviewClass */
    readonly parentClass: Gtk.WidgetClass
    static name: string
}
abstract class TagClass {
    /* Fields of GtkSource-5.GtkSource.TagClass */
    readonly parentClass: Gtk.TextTagClass
    static name: string
}
abstract class ViewClass {
    /* Fields of GtkSource-5.GtkSource.ViewClass */
    readonly parentClass: Gtk.TextViewClass
    readonly lineMarkActivated: (view: View, iter: Gtk.TextIter, button: number, state: Gdk.ModifierType, nPresses: number) => void
    readonly showCompletion: (view: View) => void
    readonly moveLines: (view: View, down: boolean) => void
    readonly moveWords: (view: View, step: number) => void
    readonly pushSnippet: (view: View, snippet: Snippet, location?: Gtk.TextIter | null) => void
    static name: string
}
abstract class VimIMContextClass {
    /* Fields of GtkSource-5.GtkSource.VimIMContextClass */
    readonly parentClass: Gtk.IMContextClass
    static name: string
}
}
export default GtkSource;