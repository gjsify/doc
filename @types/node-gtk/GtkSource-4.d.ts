/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GtkSource-4
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
enum CompletionError {
    ALREADY_BOUND,
    NOT_BOUND,
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
enum CompletionActivation {
    NONE,
    INTERACTIVE,
    USER_REQUESTED,
}
enum FileSaverFlags {
    NONE,
    IGNORE_INVALID_CHARS,
    IGNORE_MODIFICATION_TIME,
    CREATE_BACKUP,
}
enum GutterRendererState {
    NORMAL,
    CURSOR,
    PRELIT,
    SELECTED,
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
function completionErrorQuark(): GLib.Quark
function encodingGetAll(): Encoding[]
function encodingGetCurrent(): Encoding
function encodingGetDefaultCandidates(): Encoding[]
function encodingGetFromCharset(charset: string): Encoding | null
function encodingGetUtf8(): Encoding
function fileLoaderErrorQuark(): GLib.Quark
function fileSaverErrorQuark(): GLib.Quark
function finalize(): void
function init(): void
function utilsEscapeSearchText(text: string): string
function utilsUnescapeSearchText(text: string): string
class CompletionProposal {
    /* Methods of GtkSource-4.GtkSource.CompletionProposal */
    changed(): void
    equal(other: CompletionProposal): boolean
    getGicon(): Gio.Icon | null
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconName(): string | null
    getInfo(): string | null
    getLabel(): string
    getMarkup(): string
    getText(): string
    hash(): number
    /* Signals of GtkSource-4.GtkSource.CompletionProposal */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    static name: string
}
class CompletionProvider {
    /* Methods of GtkSource-4.GtkSource.CompletionProvider */
    activateProposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    getActivation(): CompletionActivation
    getGicon(): Gio.Icon | null
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconName(): string | null
    getInfoWidget(proposal: CompletionProposal): Gtk.Widget | null
    getInteractiveDelay(): number
    getName(): string
    getPriority(): number
    getStartIter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    match(context: CompletionContext): boolean
    populate(context: CompletionContext): void
    updateInfo(proposal: CompletionProposal, info: CompletionInfo): void
    static name: string
}
class StyleSchemeChooser {
    /* Properties of GtkSource-4.GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Methods of GtkSource-4.GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    static name: string
}
class UndoManager {
    /* Methods of GtkSource-4.GtkSource.UndoManager */
    beginNotUndoableAction(): void
    canRedo(): boolean
    canRedoChanged(): void
    canUndo(): boolean
    canUndoChanged(): void
    endNotUndoableAction(): void
    redo(): void
    undo(): void
    /* Signals of GtkSource-4.GtkSource.UndoManager */
    connect(sigName: "can-redo-changed", callback: (() => void)): number
    on(sigName: "can-redo-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-redo-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-redo-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "can-redo-changed"): void
    connect(sigName: "can-undo-changed", callback: (() => void)): number
    on(sigName: "can-undo-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-undo-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-undo-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "can-undo-changed"): void
    static name: string
}
interface Buffer_ConstructProps extends Gtk.TextBuffer_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.Buffer */
    highlightMatchingBrackets?: boolean
    highlightSyntax?: boolean
    implicitTrailingNewline?: boolean
    language?: Language
    maxUndoLevels?: number
    styleScheme?: StyleScheme
    undoManager?: UndoManager
}
class Buffer {
    /* Properties of GtkSource-4.GtkSource.Buffer */
    readonly canRedo: boolean
    readonly canUndo: boolean
    highlightMatchingBrackets: boolean
    highlightSyntax: boolean
    implicitTrailingNewline: boolean
    language: Language
    maxUndoLevels: number
    styleScheme: StyleScheme
    undoManager: UndoManager
    /* Properties of Gtk-3.0.Gtk.TextBuffer */
    readonly copyTargetList: Gtk.TargetList
    readonly cursorPosition: number
    readonly hasSelection: boolean
    readonly pasteTargetList: Gtk.TargetList
    text: string
    /* Fields of Gtk-3.0.Gtk.TextBuffer */
    readonly parentInstance: GObject.Object
    readonly priv: Gtk.TextBufferPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.Buffer */
    backwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    beginNotUndoableAction(): void
    changeCase(caseType: ChangeCaseType, start: Gtk.TextIter, end: Gtk.TextIter): void
    createSourceMark(name: string | null, category: string, where: Gtk.TextIter): Mark
    endNotUndoableAction(): void
    ensureHighlight(start: Gtk.TextIter, end: Gtk.TextIter): void
    forwardIterToSourceMark(iter: Gtk.TextIter, category?: string | null): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    getContextClassesAtIter(iter: Gtk.TextIter): string[]
    getHighlightMatchingBrackets(): boolean
    getHighlightSyntax(): boolean
    getImplicitTrailingNewline(): boolean
    getLanguage(): Language | null
    getMaxUndoLevels(): number
    getSourceMarksAtIter(iter: Gtk.TextIter, category?: string | null): Mark[]
    getSourceMarksAtLine(line: number, category?: string | null): Mark[]
    getStyleScheme(): StyleScheme | null
    getUndoManager(): UndoManager | null
    iterBackwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iterForwardToContextClassToggle(iter: Gtk.TextIter, contextClass: string): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    iterHasContextClass(iter: Gtk.TextIter, contextClass: string): boolean
    joinLines(start: Gtk.TextIter, end: Gtk.TextIter): void
    redo(): void
    removeSourceMarks(start: Gtk.TextIter, end: Gtk.TextIter, category?: string | null): void
    setHighlightMatchingBrackets(highlight: boolean): void
    setHighlightSyntax(highlight: boolean): void
    setImplicitTrailingNewline(implicitTrailingNewline: boolean): void
    setLanguage(language?: Language | null): void
    setMaxUndoLevels(maxUndoLevels: number): void
    setStyleScheme(scheme?: StyleScheme | null): void
    setUndoManager(manager?: UndoManager | null): void
    sortLines(start: Gtk.TextIter, end: Gtk.TextIter, flags: SortFlags, column: number): void
    undo(): void
    /* Methods of Gtk-3.0.Gtk.TextBuffer */
    addMark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    addSelectionClipboard(clipboard: Gtk.Clipboard): void
    applyTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    applyTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    backspace(iter: Gtk.TextIter, interactive: boolean, defaultEditable: boolean): boolean
    beginUserAction(): void
    copyClipboard(clipboard: Gtk.Clipboard): void
    createChildAnchor(iter: Gtk.TextIter): Gtk.TextChildAnchor
    createMark(markName: string | null, where: Gtk.TextIter, leftGravity: boolean): Gtk.TextMark
    cutClipboard(clipboard: Gtk.Clipboard, defaultEditable: boolean): void
    delete(start: Gtk.TextIter, end: Gtk.TextIter): void
    deleteInteractive(startIter: Gtk.TextIter, endIter: Gtk.TextIter, defaultEditable: boolean): boolean
    deleteMark(mark: Gtk.TextMark): void
    deleteMarkByName(name: string): void
    deleteSelection(interactive: boolean, defaultEditable: boolean): boolean
    deserialize(contentBuffer: Gtk.TextBuffer, format: Gdk.Atom, iter: Gtk.TextIter, data: Uint8Array): boolean
    deserializeGetCanCreateTags(format: Gdk.Atom): boolean
    deserializeSetCanCreateTags(format: Gdk.Atom, canCreateTags: boolean): void
    endUserAction(): void
    getBounds(): [ /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getCharCount(): number
    getCopyTargetList(): Gtk.TargetList
    getDeserializeFormats(): Gdk.Atom[]
    getEndIter(): /* iter */ Gtk.TextIter
    getHasSelection(): boolean
    getInsert(): Gtk.TextMark
    getIterAtChildAnchor(anchor: Gtk.TextChildAnchor): /* iter */ Gtk.TextIter
    getIterAtLine(lineNumber: number): /* iter */ Gtk.TextIter
    getIterAtLineIndex(lineNumber: number, byteIndex: number): /* iter */ Gtk.TextIter
    getIterAtLineOffset(lineNumber: number, charOffset: number): /* iter */ Gtk.TextIter
    getIterAtMark(mark: Gtk.TextMark): /* iter */ Gtk.TextIter
    getIterAtOffset(charOffset: number): /* iter */ Gtk.TextIter
    getLineCount(): number
    getMark(name: string): Gtk.TextMark | null
    getModified(): boolean
    getPasteTargetList(): Gtk.TargetList
    getSelectionBound(): Gtk.TextMark
    getSelectionBounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    getSerializeFormats(): Gdk.Atom[]
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
    insertPixbuf(iter: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf): void
    insertRange(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter): void
    insertRangeInteractive(iter: Gtk.TextIter, start: Gtk.TextIter, end: Gtk.TextIter, defaultEditable: boolean): boolean
    moveMark(mark: Gtk.TextMark, where: Gtk.TextIter): void
    moveMarkByName(name: string, where: Gtk.TextIter): void
    pasteClipboard(clipboard: Gtk.Clipboard, overrideLocation: Gtk.TextIter | null, defaultEditable: boolean): void
    placeCursor(where: Gtk.TextIter): void
    registerDeserializeFormat(mimeType: string, function_: Gtk.TextBufferDeserializeFunc): Gdk.Atom
    registerDeserializeTagset(tagsetName?: string | null): Gdk.Atom
    registerSerializeFormat(mimeType: string, function_: Gtk.TextBufferSerializeFunc): Gdk.Atom
    registerSerializeTagset(tagsetName?: string | null): Gdk.Atom
    removeAllTags(start: Gtk.TextIter, end: Gtk.TextIter): void
    removeSelectionClipboard(clipboard: Gtk.Clipboard): void
    removeTag(tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    removeTagByName(name: string, start: Gtk.TextIter, end: Gtk.TextIter): void
    selectRange(ins: Gtk.TextIter, bound: Gtk.TextIter): void
    serialize(contentBuffer: Gtk.TextBuffer, format: Gdk.Atom, start: Gtk.TextIter, end: Gtk.TextIter): Uint8Array
    setModified(setting: boolean): void
    setText(text: string, len: number): void
    unregisterDeserializeFormat(format: Gdk.Atom): void
    unregisterSerializeFormat(format: Gdk.Atom): void
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
    /* Signals of GtkSource-4.GtkSource.Buffer */
    connect(sigName: "bracket-matched", callback: ((iter: Gtk.TextIter | null, state: BracketMatchType) => void)): number
    on(sigName: "bracket-matched", callback: (iter: Gtk.TextIter | null, state: BracketMatchType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bracket-matched", callback: (iter: Gtk.TextIter | null, state: BracketMatchType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bracket-matched", callback: (iter: Gtk.TextIter | null, state: BracketMatchType) => void): NodeJS.EventEmitter
    emit(sigName: "bracket-matched", iter: Gtk.TextIter | null, state: BracketMatchType): void
    connect(sigName: "highlight-updated", callback: ((start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    on(sigName: "highlight-updated", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "highlight-updated", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "highlight-updated", callback: (start: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "highlight-updated", start: Gtk.TextIter, end: Gtk.TextIter): void
    connect(sigName: "redo", callback: (() => void)): number
    on(sigName: "redo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "redo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "redo", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "redo"): void
    connect(sigName: "source-mark-updated", callback: ((mark: Gtk.TextMark) => void)): number
    on(sigName: "source-mark-updated", callback: (mark: Gtk.TextMark) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-mark-updated", callback: (mark: Gtk.TextMark) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-mark-updated", callback: (mark: Gtk.TextMark) => void): NodeJS.EventEmitter
    emit(sigName: "source-mark-updated", mark: Gtk.TextMark): void
    connect(sigName: "undo", callback: (() => void)): number
    on(sigName: "undo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "undo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "undo", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "undo"): void
    /* Signals of Gtk-3.0.Gtk.TextBuffer */
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
    connect(sigName: "insert-pixbuf", callback: ((location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void)): number
    on(sigName: "insert-pixbuf", callback: (location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insert-pixbuf", callback: (location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insert-pixbuf", callback: (location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf) => void): NodeJS.EventEmitter
    emit(sigName: "insert-pixbuf", location: Gtk.TextIter, pixbuf: GdkPixbuf.Pixbuf): void
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
    connect(sigName: "paste-done", callback: ((clipboard: Gtk.Clipboard) => void)): number
    on(sigName: "paste-done", callback: (clipboard: Gtk.Clipboard) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paste-done", callback: (clipboard: Gtk.Clipboard) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paste-done", callback: (clipboard: Gtk.Clipboard) => void): NodeJS.EventEmitter
    emit(sigName: "paste-done", clipboard: Gtk.Clipboard): void
    connect(sigName: "remove-tag", callback: ((tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void)): number
    on(sigName: "remove-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove-tag", callback: (tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "remove-tag", tag: Gtk.TextTag, start: Gtk.TextIter, end: Gtk.TextIter): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    connect(sigName: "notify::max-undo-levels", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-undo-levels", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-undo-levels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-undo-levels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-undo-levels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::style-scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style-scheme", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::undo-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::undo-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::undo-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::undo-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::undo-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::copy-target-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-target-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::copy-target-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::copy-target-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::copy-target-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paste-target-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paste-target-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paste-target-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paste-target-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paste-target-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Constructor properties of GtkSource-4.GtkSource.Completion */
    accelerators?: number
    autoCompleteDelay?: number
    proposalPageSize?: number
    providerPageSize?: number
    rememberInfoVisibility?: boolean
    selectOnShow?: boolean
    showHeaders?: boolean
    showIcons?: boolean
    view?: View
}
class Completion {
    /* Properties of GtkSource-4.GtkSource.Completion */
    accelerators: number
    autoCompleteDelay: number
    proposalPageSize: number
    providerPageSize: number
    rememberInfoVisibility: boolean
    selectOnShow: boolean
    showHeaders: boolean
    showIcons: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.Completion */
    addProvider(provider: CompletionProvider): boolean
    blockInteractive(): void
    createContext(position?: Gtk.TextIter | null): CompletionContext
    getInfoWindow(): CompletionInfo
    getProviders(): CompletionProvider[]
    getView(): View | null
    hide(): void
    removeProvider(provider: CompletionProvider): boolean
    start(providers: CompletionProvider[] | null, context: CompletionContext): boolean
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    getName(): string
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Signals of GtkSource-4.GtkSource.Completion */
    connect(sigName: "activate-proposal", callback: (() => void)): number
    on(sigName: "activate-proposal", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-proposal", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-proposal", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate-proposal"): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "move-cursor", callback: ((step: Gtk.ScrollStep, num: number) => void)): number
    on(sigName: "move-cursor", callback: (step: Gtk.ScrollStep, num: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-cursor", callback: (step: Gtk.ScrollStep, num: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-cursor", callback: (step: Gtk.ScrollStep, num: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-cursor", step: Gtk.ScrollStep, num: number): void
    connect(sigName: "move-page", callback: ((step: Gtk.ScrollStep, num: number) => void)): number
    on(sigName: "move-page", callback: (step: Gtk.ScrollStep, num: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-page", callback: (step: Gtk.ScrollStep, num: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-page", callback: (step: Gtk.ScrollStep, num: number) => void): NodeJS.EventEmitter
    emit(sigName: "move-page", step: Gtk.ScrollStep, num: number): void
    connect(sigName: "populate-context", callback: ((context: CompletionContext) => void)): number
    on(sigName: "populate-context", callback: (context: CompletionContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "populate-context", callback: (context: CompletionContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "populate-context", callback: (context: CompletionContext) => void): NodeJS.EventEmitter
    emit(sigName: "populate-context", context: CompletionContext): void
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
    connect(sigName: "notify::accelerators", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accelerators", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accelerators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accelerators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accelerators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-complete-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-complete-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-complete-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-complete-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-complete-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::proposal-page-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proposal-page-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::proposal-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::proposal-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::proposal-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::provider-page-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-page-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::provider-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::provider-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::provider-page-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::show-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-headers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
interface CompletionContext_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.CompletionContext */
    activation?: CompletionActivation
    completion?: Completion
    iter?: Gtk.TextIter
}
class CompletionContext {
    /* Properties of GtkSource-4.GtkSource.CompletionContext */
    activation: CompletionActivation
    iter: Gtk.TextIter
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.CompletionContext */
    addProposals(provider: CompletionProvider, proposals: CompletionProposal[] | null, finished: boolean): void
    getActivation(): CompletionActivation
    getIter(): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
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
    /* Signals of GtkSource-4.GtkSource.CompletionContext */
    connect(sigName: "cancelled", callback: (() => void)): number
    on(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cancelled"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::iter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::iter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::iter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::iter", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
interface CompletionInfo_ConstructProps extends Gtk.Window_ConstructProps {
}
class CompletionInfo {
    /* Properties of Gtk-3.0.Gtk.Window */
    acceptFocus: boolean
    application: Gtk.Application
    attachedTo: Gtk.Widget
    decorated: boolean
    defaultHeight: number
    defaultWidth: number
    deletable: boolean
    destroyWithParent: boolean
    focusOnMap: boolean
    focusVisible: boolean
    gravity: Gdk.Gravity
    hasResizeGrip: boolean
    readonly hasToplevelFocus: boolean
    hideTitlebarWhenMaximized: boolean
    icon: GdkPixbuf.Pixbuf
    iconName: string
    readonly isActive: boolean
    readonly isMaximized: boolean
    mnemonicsVisible: boolean
    modal: boolean
    resizable: boolean
    readonly resizeGripVisible: boolean
    role: string
    screen: Gdk.Screen
    skipPagerHint: boolean
    skipTaskbarHint: boolean
    startupId: string
    title: string
    transientFor: Gtk.Window
    typeHint: Gdk.WindowTypeHint
    urgencyHint: boolean
    windowPosition: Gtk.WindowPosition
    /* Properties of Gtk-3.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Fields of Gtk-3.0.Gtk.Window */
    readonly bin: Gtk.Bin
    readonly priv: Gtk.WindowPrivate
    /* Fields of Gtk-3.0.Gtk.Bin */
    readonly container: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    readonly widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.CompletionInfo */
    moveToIter(view: Gtk.TextView, iter?: Gtk.TextIter | null): void
    /* Methods of Gtk-3.0.Gtk.Window */
    activateDefault(): boolean
    activateFocus(): boolean
    activateKey(event: Gdk.EventKey): boolean
    addAccelGroup(accelGroup: Gtk.AccelGroup): void
    addMnemonic(keyval: number, target: Gtk.Widget): void
    beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void
    beginResizeDrag(edge: Gdk.WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void
    close(): void
    deiconify(): void
    fullscreen(): void
    fullscreenOnMonitor(screen: Gdk.Screen, monitor: number): void
    getAcceptFocus(): boolean
    getApplication(): Gtk.Application | null
    getAttachedTo(): Gtk.Widget | null
    getDecorated(): boolean
    getDefaultSize(): [ /* width */ number | null, /* height */ number | null ]
    getDefaultWidget(): Gtk.Widget | null
    getDeletable(): boolean
    getDestroyWithParent(): boolean
    getFocus(): Gtk.Widget | null
    getFocusOnMap(): boolean
    getFocusVisible(): boolean
    getGravity(): Gdk.Gravity
    getGroup(): Gtk.WindowGroup
    getHasResizeGrip(): boolean
    getHideTitlebarWhenMaximized(): boolean
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconList(): GdkPixbuf.Pixbuf[]
    getIconName(): string | null
    getMnemonicModifier(): Gdk.ModifierType
    getMnemonicsVisible(): boolean
    getModal(): boolean
    getOpacity(): number
    getPosition(): [ /* rootX */ number | null, /* rootY */ number | null ]
    getResizable(): boolean
    getResizeGripArea(): [ /* returnType */ boolean, /* rect */ Gdk.Rectangle ]
    getRole(): string | null
    getScreen(): Gdk.Screen
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    getSkipPagerHint(): boolean
    getSkipTaskbarHint(): boolean
    getTitle(): string | null
    getTitlebar(): Gtk.Widget | null
    getTransientFor(): Gtk.Window | null
    getTypeHint(): Gdk.WindowTypeHint
    getUrgencyHint(): boolean
    getWindowType(): Gtk.WindowType
    hasGroup(): boolean
    iconify(): void
    maximize(): void
    mnemonicActivate(keyval: number, modifier: Gdk.ModifierType): boolean
    move(x: number, y: number): void
    parseGeometry(geometry: string): boolean
    present(): void
    presentWithTime(timestamp: number): void
    propagateKeyEvent(event: Gdk.EventKey): boolean
    removeAccelGroup(accelGroup: Gtk.AccelGroup): void
    removeMnemonic(keyval: number, target: Gtk.Widget): void
    reshowWithInitialSize(): void
    resize(width: number, height: number): void
    resizeGripIsVisible(): boolean
    resizeToGeometry(width: number, height: number): void
    setAcceptFocus(setting: boolean): void
    setApplication(application?: Gtk.Application | null): void
    setAttachedTo(attachWidget?: Gtk.Widget | null): void
    setDecorated(setting: boolean): void
    setDefault(defaultWidget?: Gtk.Widget | null): void
    setDefaultGeometry(width: number, height: number): void
    setDefaultSize(width: number, height: number): void
    setDeletable(setting: boolean): void
    setDestroyWithParent(setting: boolean): void
    setFocus(focus?: Gtk.Widget | null): void
    setFocusOnMap(setting: boolean): void
    setFocusVisible(setting: boolean): void
    setGeometryHints(geometryWidget: Gtk.Widget | null, geometry: Gdk.Geometry | null, geomMask: Gdk.WindowHints): void
    setGravity(gravity: Gdk.Gravity): void
    setHasResizeGrip(value: boolean): void
    setHasUserRefCount(setting: boolean): void
    setHideTitlebarWhenMaximized(setting: boolean): void
    setIcon(icon?: GdkPixbuf.Pixbuf | null): void
    setIconFromFile(filename: string): boolean
    setIconList(list: GdkPixbuf.Pixbuf[]): void
    setIconName(name?: string | null): void
    setKeepAbove(setting: boolean): void
    setKeepBelow(setting: boolean): void
    setMnemonicModifier(modifier: Gdk.ModifierType): void
    setMnemonicsVisible(setting: boolean): void
    setModal(modal: boolean): void
    setOpacity(opacity: number): void
    setPosition(position: Gtk.WindowPosition): void
    setResizable(resizable: boolean): void
    setRole(role: string): void
    setScreen(screen: Gdk.Screen): void
    setSkipPagerHint(setting: boolean): void
    setSkipTaskbarHint(setting: boolean): void
    setStartupId(startupId: string): void
    setTitle(title: string): void
    setTitlebar(titlebar?: Gtk.Widget | null): void
    setTransientFor(parent?: Gtk.Window | null): void
    setTypeHint(hint: Gdk.WindowTypeHint): void
    setUrgencyHint(setting: boolean): void
    setWmclass(wmclassName: string, wmclassClass: string): void
    stick(): void
    unfullscreen(): void
    unmaximize(): void
    unstick(): void
    /* Methods of Gtk-3.0.Gtk.Bin */
    getChild(): Gtk.Widget | null
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotify(child: Gtk.Widget, childProperty: string): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Signals of Gtk-3.0.Gtk.Window */
    connect(sigName: "activate-default", callback: (() => void)): number
    on(sigName: "activate-default", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-default", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-default", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate-default"): void
    connect(sigName: "activate-focus", callback: (() => void)): number
    on(sigName: "activate-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate-focus"): void
    connect(sigName: "enable-debugging", callback: ((toggle: boolean) => boolean)): number
    on(sigName: "enable-debugging", callback: (toggle: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enable-debugging", callback: (toggle: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enable-debugging", callback: (toggle: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "enable-debugging", toggle: boolean): void
    connect(sigName: "keys-changed", callback: (() => void)): number
    on(sigName: "keys-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "keys-changed"): void
    connect(sigName: "set-focus", callback: ((widget?: Gtk.Widget | null) => void)): number
    on(sigName: "set-focus", callback: (widget?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus", callback: (widget?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus", callback: (widget?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus", widget?: Gtk.Widget | null): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (() => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: ((signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: ((childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (() => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: ((wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: ((previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: ((oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (() => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
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
    connect(sigName: "screen-changed", callback: ((previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: ((previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (() => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accept-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accept-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accept-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accept-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::application", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::attached-to", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::attached-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::attached-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::attached-to", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::decorated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::default-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::destroy-with-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::destroy-with-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-map", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-map", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-resize-grip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-resize-grip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-toplevel-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-toplevel-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hide-titlebar-when-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-active", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::is-maximized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-maximized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mnemonics-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mnemonics-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resizable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-grip-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-grip-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::screen", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::skip-pager-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::skip-pager-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::skip-taskbar-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::skip-taskbar-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::urgency-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::urgency-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::urgency-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::urgency-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompletionInfo_ConstructProps)
    _init (config?: CompletionInfo_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompletionInfo
    /* Function overloads */
    static new(type: Gtk.WindowType): CompletionInfo
    static $gtype: GObject.Type
}
interface CompletionItem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.CompletionItem */
    gicon?: Gio.Icon
    icon?: GdkPixbuf.Pixbuf
    iconName?: string
    info?: string
    label?: string
    markup?: string
    text?: string
}
class CompletionItem {
    /* Properties of GtkSource-4.GtkSource.CompletionItem */
    gicon: Gio.Icon
    icon: GdkPixbuf.Pixbuf
    iconName: string
    info: string
    label: string
    markup: string
    text: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.CompletionItem */
    setGicon(gicon?: Gio.Icon | null): void
    setIcon(icon?: GdkPixbuf.Pixbuf | null): void
    setIconName(iconName?: string | null): void
    setInfo(info?: string | null): void
    setLabel(label?: string | null): void
    setMarkup(markup?: string | null): void
    setText(text?: string | null): void
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
    /* Methods of GtkSource-4.GtkSource.CompletionProposal */
    changed(): void
    equal(other: CompletionProposal): boolean
    getGicon(): Gio.Icon | null
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconName(): string | null
    getInfo(): string | null
    getLabel(): string
    getMarkup(): string
    getText(): string
    hash(): number
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of GtkSource-4.GtkSource.CompletionProposal */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    connect(sigName: "notify::gicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gicon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CompletionItem_ConstructProps)
    _init (config?: CompletionItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CompletionItem
    static $gtype: GObject.Type
}
interface CompletionWords_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.CompletionWords */
    activation?: CompletionActivation
    icon?: GdkPixbuf.Pixbuf
    interactiveDelay?: number
    minimumWordSize?: number
    name?: string
    priority?: number
    proposalsBatchSize?: number
    scanBatchSize?: number
}
class CompletionWords {
    /* Properties of GtkSource-4.GtkSource.CompletionWords */
    activation: CompletionActivation
    icon: GdkPixbuf.Pixbuf
    interactiveDelay: number
    minimumWordSize: number
    name: string
    priority: number
    proposalsBatchSize: number
    scanBatchSize: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.CompletionWords */
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
    /* Methods of GtkSource-4.GtkSource.CompletionProvider */
    activateProposal(proposal: CompletionProposal, iter: Gtk.TextIter): boolean
    getActivation(): CompletionActivation
    getGicon(): Gio.Icon | null
    getIcon(): GdkPixbuf.Pixbuf | null
    getIconName(): string | null
    getInfoWidget(proposal: CompletionProposal): Gtk.Widget | null
    getInteractiveDelay(): number
    getName(): string
    getPriority(): number
    getStartIter(context: CompletionContext, proposal: CompletionProposal): [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    match(context: CompletionContext): boolean
    populate(context: CompletionContext): void
    updateInfo(proposal: CompletionProposal, info: CompletionInfo): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::activation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::activation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interactive-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interactive-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interactive-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interactive-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interactive-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minimum-word-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-word-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minimum-word-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static new(name?: string | null, icon?: GdkPixbuf.Pixbuf | null): CompletionWords
    static $gtype: GObject.Type
}
interface File_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.File */
    location?: Gio.File
}
class File {
    /* Properties of GtkSource-4.GtkSource.File */
    readonly compressionType: CompressionType
    readonly encoding: Encoding
    location: Gio.File
    readonly newlineType: NewlineType
    readonly readOnly: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.File */
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
    /* Constructor properties of GtkSource-4.GtkSource.FileLoader */
    buffer?: Buffer
    file?: File
    inputStream?: Gio.InputStream
    location?: Gio.File
}
class FileLoader {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.FileLoader */
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
    /* Constructor properties of GtkSource-4.GtkSource.FileSaver */
    buffer?: Buffer
    compressionType?: CompressionType
    encoding?: Encoding
    file?: File
    flags?: FileSaverFlags
    location?: Gio.File
    newlineType?: NewlineType
}
class FileSaver {
    /* Properties of GtkSource-4.GtkSource.FileSaver */
    compressionType: CompressionType
    encoding: Encoding
    flags: FileSaverFlags
    newlineType: NewlineType
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.FileSaver */
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
interface Gutter_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.Gutter */
    view?: View
    windowType?: Gtk.TextWindowType
}
class Gutter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.Gutter */
    getRendererAtPos(x: number, y: number): GutterRenderer | null
    getView(): View
    getWindowType(): Gtk.TextWindowType
    insert(renderer: GutterRenderer, position: number): boolean
    queueDraw(): void
    remove(renderer: GutterRenderer): void
    reorder(renderer: GutterRenderer, position: number): void
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
    constructor (config?: Gutter_ConstructProps)
    _init (config?: Gutter_ConstructProps): void
    static $gtype: GObject.Type
}
interface GutterRenderer_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.GutterRenderer */
    alignmentMode?: GutterRendererAlignmentMode
    backgroundRgba?: Gdk.RGBA
    backgroundSet?: boolean
    size?: number
    visible?: boolean
    xalign?: number
    xpad?: number
    yalign?: number
    ypad?: number
}
class GutterRenderer {
    /* Properties of GtkSource-4.GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    backgroundRgba: Gdk.RGBA
    backgroundSet: boolean
    size: number
    readonly view: Gtk.TextView
    visible: boolean
    readonly windowType: Gtk.TextWindowType
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    begin(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    draw(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    end(): void
    getAlignment(): [ /* xalign */ number | null, /* yalign */ number | null ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBackground(): [ /* returnType */ boolean, /* color */ Gdk.RGBA | null ]
    getPadding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    getSize(): number
    getView(): Gtk.TextView
    getVisible(): boolean
    getWindowType(): Gtk.TextWindowType
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    queryData(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    queryTooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    queueDraw(): void
    setAlignment(xalign: number, yalign: number): void
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    setBackground(color?: Gdk.RGBA | null): void
    setPadding(xpad: number, ypad: number): void
    setSize(size: number): void
    setVisible(visible: boolean): void
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
    /* Signals of GtkSource-4.GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    on(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    on(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    connect(sigName: "query-data", callback: ((start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    on(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void): NodeJS.EventEmitter
    emit(sigName: "query-data", start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    connect(sigName: "query-tooltip", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): void
    connect(sigName: "queue-draw", callback: (() => void)): number
    on(sigName: "queue-draw", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "queue-draw", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "queue-draw", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "queue-draw"): void
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Constructor properties of GtkSource-4.GtkSource.GutterRendererPixbuf */
    gicon?: Gio.Icon
    iconName?: string
    pixbuf?: GdkPixbuf.Pixbuf
}
class GutterRendererPixbuf {
    /* Properties of GtkSource-4.GtkSource.GutterRendererPixbuf */
    gicon: Gio.Icon
    iconName: string
    pixbuf: GdkPixbuf.Pixbuf
    /* Properties of GtkSource-4.GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    backgroundRgba: Gdk.RGBA
    backgroundSet: boolean
    size: number
    readonly view: Gtk.TextView
    visible: boolean
    readonly windowType: Gtk.TextWindowType
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Fields of GtkSource-4.GtkSource.GutterRenderer */
    readonly parent: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.GutterRendererPixbuf */
    getGicon(): Gio.Icon
    getIconName(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    setGicon(icon?: Gio.Icon | null): void
    setIconName(iconName?: string | null): void
    setPixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void
    /* Methods of GtkSource-4.GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    begin(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    draw(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    end(): void
    getAlignment(): [ /* xalign */ number | null, /* yalign */ number | null ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBackground(): [ /* returnType */ boolean, /* color */ Gdk.RGBA | null ]
    getPadding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    getSize(): number
    getView(): Gtk.TextView
    getVisible(): boolean
    getWindowType(): Gtk.TextWindowType
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    queryData(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    queryTooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    queueDraw(): void
    setAlignment(xalign: number, yalign: number): void
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    setBackground(color?: Gdk.RGBA | null): void
    setPadding(xpad: number, ypad: number): void
    setSize(size: number): void
    setVisible(visible: boolean): void
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
    /* Signals of GtkSource-4.GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    on(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    on(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    connect(sigName: "query-data", callback: ((start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    on(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void): NodeJS.EventEmitter
    emit(sigName: "query-data", start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    connect(sigName: "query-tooltip", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): void
    connect(sigName: "queue-draw", callback: (() => void)): number
    on(sigName: "queue-draw", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "queue-draw", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "queue-draw", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "queue-draw"): void
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Constructor properties of GtkSource-4.GtkSource.GutterRendererText */
    markup?: string
    text?: string
}
class GutterRendererText {
    /* Properties of GtkSource-4.GtkSource.GutterRendererText */
    markup: string
    text: string
    /* Properties of GtkSource-4.GtkSource.GutterRenderer */
    alignmentMode: GutterRendererAlignmentMode
    backgroundRgba: Gdk.RGBA
    backgroundSet: boolean
    size: number
    readonly view: Gtk.TextView
    visible: boolean
    readonly windowType: Gtk.TextWindowType
    xalign: number
    xpad: number
    yalign: number
    ypad: number
    /* Fields of GtkSource-4.GtkSource.GutterRenderer */
    readonly parent: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.GutterRendererText */
    measure(text: string): [ /* width */ number | null, /* height */ number | null ]
    measureMarkup(markup: string): [ /* width */ number | null, /* height */ number | null ]
    setMarkup(markup: string, length: number): void
    setText(text: string, length: number): void
    /* Methods of GtkSource-4.GtkSource.GutterRenderer */
    activate(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    begin(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter): void
    draw(cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    end(): void
    getAlignment(): [ /* xalign */ number | null, /* yalign */ number | null ]
    getAlignmentMode(): GutterRendererAlignmentMode
    getBackground(): [ /* returnType */ boolean, /* color */ Gdk.RGBA | null ]
    getPadding(): [ /* xpad */ number | null, /* ypad */ number | null ]
    getSize(): number
    getView(): Gtk.TextView
    getVisible(): boolean
    getWindowType(): Gtk.TextWindowType
    queryActivatable(iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): boolean
    queryData(start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    queryTooltip(iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): boolean
    queueDraw(): void
    setAlignment(xalign: number, yalign: number): void
    setAlignmentMode(mode: GutterRendererAlignmentMode): void
    setBackground(color?: Gdk.RGBA | null): void
    setPadding(xpad: number, ypad: number): void
    setSize(size: number): void
    setVisible(visible: boolean): void
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
    /* Signals of GtkSource-4.GtkSource.GutterRenderer */
    connect(sigName: "activate", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void)): number
    on(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "activate", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    connect(sigName: "query-activatable", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean)): number
    on(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-activatable", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "query-activatable", iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event): void
    connect(sigName: "query-data", callback: ((start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void)): number
    on(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-data", callback: (start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void): NodeJS.EventEmitter
    emit(sigName: "query-data", start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState): void
    connect(sigName: "query-tooltip", callback: ((iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean)): number
    on(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-tooltip", callback: (iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => void): NodeJS.EventEmitter
    emit(sigName: "query-tooltip", iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip): void
    connect(sigName: "queue-draw", callback: (() => void)): number
    on(sigName: "queue-draw", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "queue-draw", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "queue-draw", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "queue-draw"): void
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
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
interface Language_ConstructProps extends GObject.Object_ConstructProps {
}
class Language {
    /* Properties of GtkSource-4.GtkSource.Language */
    readonly hidden: boolean
    readonly id: string
    readonly name: string
    readonly section: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.Language */
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
    /* Constructor properties of GtkSource-4.GtkSource.LanguageManager */
    searchPath?: string[]
}
class LanguageManager {
    /* Properties of GtkSource-4.GtkSource.LanguageManager */
    readonly languageIds: string[]
    searchPath: string[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.LanguageManager */
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
    /* Constructor properties of GtkSource-4.GtkSource.Map */
    fontDesc?: Pango.FontDescription
    view?: View
    /* Constructor properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
class Map {
    /* Properties of GtkSource-4.GtkSource.Map */
    fontDesc: Pango.FontDescription
    view: View
    /* Properties of GtkSource-4.GtkSource.View */
    autoIndent: boolean
    backgroundPattern: BackgroundPatternType
    readonly completion: Completion
    highlightCurrentLine: boolean
    indentOnTab: boolean
    indentWidth: number
    insertSpacesInsteadOfTabs: boolean
    rightMarginPosition: number
    showLineMarks: boolean
    showLineNumbers: boolean
    showRightMargin: boolean
    smartBackspace: boolean
    smartHomeEnd: SmartHomeEndType
    readonly spaceDrawer: SpaceDrawer
    tabWidth: number
    /* Properties of Gtk-3.0.Gtk.TextView */
    acceptsTab: boolean
    bottomMargin: number
    buffer: Gtk.TextBuffer
    cursorVisible: boolean
    editable: boolean
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
    populateAll: boolean
    rightMargin: number
    tabs: Pango.TabArray
    topMargin: number
    wrapMode: Gtk.WrapMode
    /* Properties of Gtk-3.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of GtkSource-4.GtkSource.View */
    readonly parent: Gtk.TextView
    readonly priv: ViewPrivate
    /* Fields of Gtk-3.0.Gtk.TextView */
    readonly parentInstance: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    readonly widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.Map */
    getView(): View | null
    setView(view: View): void
    /* Methods of GtkSource-4.GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): BackgroundPatternType
    getCompletion(): Completion
    getGutter(windowType: Gtk.TextWindowType): Gutter
    getHighlightCurrentLine(): boolean
    getIndentOnTab(): boolean
    getIndentWidth(): number
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
    setAutoIndent(enable: boolean): void
    setBackgroundPattern(backgroundPattern: BackgroundPatternType): void
    setHighlightCurrentLine(highlight: boolean): void
    setIndentOnTab(enable: boolean): void
    setIndentWidth(width: number): void
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
    /* Methods of Gtk-3.0.Gtk.TextView */
    addChildAtAnchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    addChildInWindow(child: Gtk.Widget, whichWindow: Gtk.TextWindowType, xpos: number, ypos: number): void
    backwardDisplayLine(iter: Gtk.TextIter): boolean
    backwardDisplayLineStart(iter: Gtk.TextIter): boolean
    bufferToWindowCoords(win: Gtk.TextWindowType, bufferX: number, bufferY: number): [ /* windowX */ number | null, /* windowY */ number | null ]
    forwardDisplayLine(iter: Gtk.TextIter): boolean
    forwardDisplayLineEnd(iter: Gtk.TextIter): boolean
    getAcceptsTab(): boolean
    getBorderWindowSize(type: Gtk.TextWindowType): number
    getBottomMargin(): number
    getBuffer(): Gtk.TextBuffer
    getCursorLocations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    getCursorVisible(): boolean
    getDefaultAttributes(): Gtk.TextAttributes
    getEditable(): boolean
    getHadjustment(): Gtk.Adjustment
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
    getMonospace(): boolean
    getOverwrite(): boolean
    getPixelsAboveLines(): number
    getPixelsBelowLines(): number
    getPixelsInsideWrap(): number
    getRightMargin(): number
    getTabs(): Pango.TabArray | null
    getTopMargin(): number
    getVadjustment(): Gtk.Adjustment
    getVisibleRect(): /* visibleRect */ Gdk.Rectangle
    getWindow(win: Gtk.TextWindowType): Gdk.Window | null
    getWindowType(window: Gdk.Window): Gtk.TextWindowType
    getWrapMode(): Gtk.WrapMode
    imContextFilterKeypress(event: Gdk.EventKey): boolean
    moveChild(child: Gtk.Widget, xpos: number, ypos: number): void
    moveMarkOnscreen(mark: Gtk.TextMark): boolean
    moveVisually(iter: Gtk.TextIter, count: number): boolean
    placeCursorOnscreen(): boolean
    resetCursorBlink(): void
    resetImContext(): void
    scrollMarkOnscreen(mark: Gtk.TextMark): void
    scrollToIter(iter: Gtk.TextIter, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): boolean
    scrollToMark(mark: Gtk.TextMark, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): void
    setAcceptsTab(acceptsTab: boolean): void
    setBorderWindowSize(type: Gtk.TextWindowType, size: number): void
    setBottomMargin(bottomMargin: number): void
    setBuffer(buffer?: Gtk.TextBuffer | null): void
    setCursorVisible(setting: boolean): void
    setEditable(setting: boolean): void
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
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotify(child: Gtk.Widget, childProperty: string): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Methods of Gtk-3.0.Gtk.Scrollable */
    getBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Signals of GtkSource-4.GtkSource.View */
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
    connect(sigName: "line-mark-activated", callback: ((iter: Gtk.TextIter, event: Gdk.Event) => void)): number
    on(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, event: Gdk.Event): void
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
    connect(sigName: "redo", callback: (() => void)): number
    on(sigName: "redo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "redo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "redo", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "redo"): void
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
    connect(sigName: "undo", callback: (() => void)): number
    on(sigName: "undo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "undo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "undo", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "undo"): void
    /* Signals of Gtk-3.0.Gtk.TextView */
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
    connect(sigName: "populate-popup", callback: ((popup: Gtk.Widget) => void)): number
    on(sigName: "populate-popup", callback: (popup: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "populate-popup", callback: (popup: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "populate-popup", callback: (popup: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "populate-popup", popup: Gtk.Widget): void
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
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (() => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: ((signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: ((childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (() => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: ((wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: ((previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: ((oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (() => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
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
    connect(sigName: "screen-changed", callback: ((previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: ((previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (() => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
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
    connect(sigName: "notify::populate-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::populate-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::populate-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::populate-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Constructor properties of GtkSource-4.GtkSource.Mark */
    category?: string
}
class Mark {
    /* Fields of Gtk-3.0.Gtk.TextMark */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.Mark */
    getCategory(): string
    next(category?: string | null): Mark | null
    prev(category: string): Mark | null
    /* Methods of Gtk-3.0.Gtk.TextMark */
    getBuffer(): Gtk.TextBuffer
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
    /* Constructor properties of GtkSource-4.GtkSource.MarkAttributes */
    background?: Gdk.RGBA
    gicon?: Gio.Icon
    iconName?: string
    pixbuf?: GdkPixbuf.Pixbuf
}
class MarkAttributes {
    /* Properties of GtkSource-4.GtkSource.MarkAttributes */
    background: Gdk.RGBA
    gicon: Gio.Icon
    iconName: string
    pixbuf: GdkPixbuf.Pixbuf
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.MarkAttributes */
    getBackground(): [ /* returnType */ boolean, /* background */ Gdk.RGBA ]
    getGicon(): Gio.Icon
    getIconName(): string
    getPixbuf(): GdkPixbuf.Pixbuf
    getTooltipMarkup(mark: Mark): string
    getTooltipText(mark: Mark): string
    renderIcon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf
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
    /* Signals of GtkSource-4.GtkSource.MarkAttributes */
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
    /* Constructor properties of GtkSource-4.GtkSource.PrintCompositor */
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
    /* Properties of GtkSource-4.GtkSource.PrintCompositor */
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
    /* Methods of GtkSource-4.GtkSource.PrintCompositor */
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
    /* Constructor properties of GtkSource-4.GtkSource.Region */
    buffer?: Gtk.TextBuffer
}
class Region {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.Region */
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
    /* Constructor properties of GtkSource-4.GtkSource.SearchContext */
    buffer?: Buffer
    highlight?: boolean
    matchStyle?: Style
    settings?: SearchSettings
}
class SearchContext {
    /* Properties of GtkSource-4.GtkSource.SearchContext */
    highlight: boolean
    matchStyle: Style
    readonly occurrencesCount: number
    readonly regexError: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.SearchContext */
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
    /* Constructor properties of GtkSource-4.GtkSource.SearchSettings */
    atWordBoundaries?: boolean
    caseSensitive?: boolean
    regexEnabled?: boolean
    searchText?: string
    wrapAround?: boolean
}
class SearchSettings {
    /* Properties of GtkSource-4.GtkSource.SearchSettings */
    atWordBoundaries: boolean
    caseSensitive: boolean
    regexEnabled: boolean
    searchText: string
    wrapAround: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.SearchSettings */
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
interface SpaceDrawer_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.SpaceDrawer */
    enableMatrix?: boolean
    matrix?: GLib.Variant
}
class SpaceDrawer {
    /* Properties of GtkSource-4.GtkSource.SpaceDrawer */
    enableMatrix: boolean
    matrix: GLib.Variant
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.SpaceDrawer */
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
    /* Constructor properties of GtkSource-4.GtkSource.Style */
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
}
class Style {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.Style */
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
    /* Constructor properties of GtkSource-4.GtkSource.StyleScheme */
    id?: string
}
class StyleScheme {
    /* Properties of GtkSource-4.GtkSource.StyleScheme */
    readonly description: string
    readonly filename: string
    readonly name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.StyleScheme */
    getAuthors(): string[] | null
    getDescription(): string | null
    getFilename(): string | null
    getId(): string
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
    /* Constructor properties of Gtk-3.0.Gtk.Actionable */
    actionName?: string
    actionTarget?: GLib.Variant
    /* Constructor properties of Gtk-3.0.Gtk.Activatable */
    relatedAction?: Gtk.Action
    useActionAppearance?: boolean
    /* Constructor properties of GtkSource-4.GtkSource.StyleSchemeChooser */
    styleScheme?: StyleScheme
}
class StyleSchemeChooserButton {
    /* Properties of Gtk-3.0.Gtk.Button */
    alwaysShowImage: boolean
    image: Gtk.Widget
    imagePosition: Gtk.PositionType
    label: string
    relief: Gtk.ReliefStyle
    useStock: boolean
    useUnderline: boolean
    xalign: number
    yalign: number
    /* Properties of Gtk-3.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Actionable */
    actionName: string
    actionTarget: GLib.Variant
    /* Properties of Gtk-3.0.Gtk.Activatable */
    relatedAction: Gtk.Action
    useActionAppearance: boolean
    /* Properties of GtkSource-4.GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Fields of Gtk-3.0.Gtk.Bin */
    readonly container: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    readonly widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk-3.0.Gtk.Button */
    clicked(): void
    enter(): void
    getAlignment(): [ /* xalign */ number, /* yalign */ number ]
    getAlwaysShowImage(): boolean
    getEventWindow(): Gdk.Window
    getFocusOnClick(): boolean
    getImage(): Gtk.Widget | null
    getImagePosition(): Gtk.PositionType
    getLabel(): string
    getRelief(): Gtk.ReliefStyle
    getUseStock(): boolean
    getUseUnderline(): boolean
    leave(): void
    pressed(): void
    released(): void
    setAlignment(xalign: number, yalign: number): void
    setAlwaysShowImage(alwaysShow: boolean): void
    setFocusOnClick(focusOnClick: boolean): void
    setImage(image?: Gtk.Widget | null): void
    setImagePosition(position: Gtk.PositionType): void
    setLabel(label: string): void
    setRelief(relief: Gtk.ReliefStyle): void
    setUseStock(useStock: boolean): void
    setUseUnderline(useUnderline: boolean): void
    /* Methods of Gtk-3.0.Gtk.Bin */
    getChild(): Gtk.Widget | null
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotify(child: Gtk.Widget, childProperty: string): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
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
    /* Methods of Gtk-3.0.Gtk.Actionable */
    getActionName(): string | null
    getActionTargetValue(): GLib.Variant
    setActionName(actionName?: string | null): void
    setActionTargetValue(targetValue?: GLib.Variant | null): void
    setDetailedActionName(detailedActionName: string): void
    /* Methods of Gtk-3.0.Gtk.Activatable */
    doSetRelatedAction(action: Gtk.Action): void
    getRelatedAction(): Gtk.Action
    getUseActionAppearance(): boolean
    setRelatedAction(action: Gtk.Action): void
    setUseActionAppearance(useAppearance: boolean): void
    syncActionProperties(action?: Gtk.Action | null): void
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Methods of GtkSource-4.GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Signals of Gtk-3.0.Gtk.Button */
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
    connect(sigName: "enter", callback: (() => void)): number
    on(sigName: "enter", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "enter"): void
    connect(sigName: "leave", callback: (() => void)): number
    on(sigName: "leave", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "leave"): void
    connect(sigName: "pressed", callback: (() => void)): number
    on(sigName: "pressed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pressed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pressed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pressed"): void
    connect(sigName: "released", callback: (() => void)): number
    on(sigName: "released", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "released", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "released", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "released"): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (() => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: ((signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: ((childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (() => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: ((wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: ((previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: ((oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (() => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
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
    connect(sigName: "screen-changed", callback: ((previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: ((previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (() => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::always-show-image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::always-show-image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::always-show-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::always-show-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::always-show-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::image-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::image-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::image-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::image-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::relief", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relief", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relief", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relief", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relief", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-stock", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-stock", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-stock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-stock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-stock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-underline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::xalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::yalign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::related-action", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::related-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::related-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::related-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::use-action-appearance", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
interface StyleSchemeChooserWidget_ConstructProps extends Gtk.Bin_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.StyleSchemeChooser */
    styleScheme?: StyleScheme
}
class StyleSchemeChooserWidget {
    /* Properties of Gtk-3.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of GtkSource-4.GtkSource.StyleSchemeChooser */
    styleScheme: StyleScheme
    /* Fields of Gtk-3.0.Gtk.Bin */
    readonly container: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    readonly widget: Gtk.Widget
    /* Fields of Gtk-3.0.Gtk.Widget */
    readonly parentInstance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk-3.0.Gtk.Bin */
    getChild(): Gtk.Widget | null
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotify(child: Gtk.Widget, childProperty: string): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Methods of GtkSource-4.GtkSource.StyleSchemeChooser */
    getStyleScheme(): StyleScheme
    setStyleScheme(scheme: StyleScheme): void
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (() => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: ((signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: ((childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (() => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: ((wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: ((previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: ((oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (() => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
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
    connect(sigName: "screen-changed", callback: ((previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: ((previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (() => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Constructor properties of GtkSource-4.GtkSource.StyleSchemeManager */
    searchPath?: string[]
}
class StyleSchemeManager {
    /* Properties of GtkSource-4.GtkSource.StyleSchemeManager */
    readonly schemeIds: string[]
    searchPath: string[]
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.StyleSchemeManager */
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
interface Tag_ConstructProps extends Gtk.TextTag_ConstructProps {
    /* Constructor properties of GtkSource-4.GtkSource.Tag */
    drawSpaces?: boolean
    drawSpacesSet?: boolean
}
class Tag {
    /* Properties of GtkSource-4.GtkSource.Tag */
    drawSpaces: boolean
    drawSpacesSet: boolean
    /* Properties of Gtk-3.0.Gtk.TextTag */
    accumulativeMargin: boolean
    background: string
    backgroundFullHeight: boolean
    backgroundFullHeightSet: boolean
    backgroundGdk: Gdk.Color
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
    foregroundGdk: Gdk.Color
    foregroundRgba: Gdk.RGBA
    foregroundSet: boolean
    indent: number
    indentSet: boolean
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
    paragraphBackground: string
    paragraphBackgroundGdk: Gdk.Color
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
    underline: Pango.Underline
    underlineRgba: Gdk.RGBA
    underlineRgbaSet: boolean
    underlineSet: boolean
    variant: Pango.Variant
    variantSet: boolean
    weight: number
    weightSet: boolean
    wrapMode: Gtk.WrapMode
    wrapModeSet: boolean
    /* Fields of Gtk-3.0.Gtk.TextTag */
    readonly parentInstance: GObject.Object
    readonly priv: Gtk.TextTagPrivate
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gtk-3.0.Gtk.TextTag */
    changed(sizeChanged: boolean): void
    event(eventObject: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter): boolean
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
    /* Signals of Gtk-3.0.Gtk.TextTag */
    connect(sigName: "event", callback: ((object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => boolean)): number
    on(sigName: "event", callback: (object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter) => void): NodeJS.EventEmitter
    emit(sigName: "event", object: GObject.Object, event: Gdk.Event, iter: Gtk.TextIter): void
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
    connect(sigName: "notify::background-gdk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-gdk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::foreground-gdk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreground-gdk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::foreground-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::foreground-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::foreground-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::paragraph-background", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paragraph-background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::paragraph-background-gdk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paragraph-background-gdk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::paragraph-background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::paragraph-background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::paragraph-background-gdk", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Constructor properties of GtkSource-4.GtkSource.View */
    autoIndent?: boolean
    backgroundPattern?: BackgroundPatternType
    highlightCurrentLine?: boolean
    indentOnTab?: boolean
    indentWidth?: number
    insertSpacesInsteadOfTabs?: boolean
    rightMarginPosition?: number
    showLineMarks?: boolean
    showLineNumbers?: boolean
    showRightMargin?: boolean
    smartBackspace?: boolean
    smartHomeEnd?: SmartHomeEndType
    tabWidth?: number
    /* Constructor properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment?: Gtk.Adjustment
    hscrollPolicy?: Gtk.ScrollablePolicy
    vadjustment?: Gtk.Adjustment
    vscrollPolicy?: Gtk.ScrollablePolicy
}
class View {
    /* Properties of GtkSource-4.GtkSource.View */
    autoIndent: boolean
    backgroundPattern: BackgroundPatternType
    readonly completion: Completion
    highlightCurrentLine: boolean
    indentOnTab: boolean
    indentWidth: number
    insertSpacesInsteadOfTabs: boolean
    rightMarginPosition: number
    showLineMarks: boolean
    showLineNumbers: boolean
    showRightMargin: boolean
    smartBackspace: boolean
    smartHomeEnd: SmartHomeEndType
    readonly spaceDrawer: SpaceDrawer
    tabWidth: number
    /* Properties of Gtk-3.0.Gtk.TextView */
    acceptsTab: boolean
    bottomMargin: number
    buffer: Gtk.TextBuffer
    cursorVisible: boolean
    editable: boolean
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
    populateAll: boolean
    rightMargin: number
    tabs: Pango.TabArray
    topMargin: number
    wrapMode: Gtk.WrapMode
    /* Properties of Gtk-3.0.Gtk.Container */
    borderWidth: number
    child: Gtk.Widget
    resizeMode: Gtk.ResizeMode
    /* Properties of Gtk-3.0.Gtk.Widget */
    appPaintable: boolean
    canDefault: boolean
    canFocus: boolean
    readonly compositeChild: boolean
    doubleBuffered: boolean
    events: Gdk.EventMask
    expand: boolean
    focusOnClick: boolean
    halign: Gtk.Align
    hasDefault: boolean
    hasFocus: boolean
    hasTooltip: boolean
    heightRequest: number
    hexpand: boolean
    hexpandSet: boolean
    isFocus: boolean
    margin: number
    marginBottom: number
    marginEnd: number
    marginLeft: number
    marginRight: number
    marginStart: number
    marginTop: number
    name: string
    noShowAll: boolean
    opacity: number
    parent: Gtk.Container
    receivesDefault: boolean
    readonly scaleFactor: number
    sensitive: boolean
    style: Gtk.Style
    tooltipMarkup: string
    tooltipText: string
    valign: Gtk.Align
    vexpand: boolean
    vexpandSet: boolean
    visible: boolean
    widthRequest: number
    readonly window: Gdk.Window
    /* Properties of Gtk-3.0.Gtk.Scrollable */
    hadjustment: Gtk.Adjustment
    hscrollPolicy: Gtk.ScrollablePolicy
    vadjustment: Gtk.Adjustment
    vscrollPolicy: Gtk.ScrollablePolicy
    /* Fields of Gtk-3.0.Gtk.TextView */
    readonly parentInstance: Gtk.Container
    /* Fields of Gtk-3.0.Gtk.Container */
    readonly widget: Gtk.Widget
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GtkSource-4.GtkSource.View */
    getAutoIndent(): boolean
    getBackgroundPattern(): BackgroundPatternType
    getCompletion(): Completion
    getGutter(windowType: Gtk.TextWindowType): Gutter
    getHighlightCurrentLine(): boolean
    getIndentOnTab(): boolean
    getIndentWidth(): number
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
    setAutoIndent(enable: boolean): void
    setBackgroundPattern(backgroundPattern: BackgroundPatternType): void
    setHighlightCurrentLine(highlight: boolean): void
    setIndentOnTab(enable: boolean): void
    setIndentWidth(width: number): void
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
    /* Methods of Gtk-3.0.Gtk.TextView */
    addChildAtAnchor(child: Gtk.Widget, anchor: Gtk.TextChildAnchor): void
    addChildInWindow(child: Gtk.Widget, whichWindow: Gtk.TextWindowType, xpos: number, ypos: number): void
    backwardDisplayLine(iter: Gtk.TextIter): boolean
    backwardDisplayLineStart(iter: Gtk.TextIter): boolean
    bufferToWindowCoords(win: Gtk.TextWindowType, bufferX: number, bufferY: number): [ /* windowX */ number | null, /* windowY */ number | null ]
    forwardDisplayLine(iter: Gtk.TextIter): boolean
    forwardDisplayLineEnd(iter: Gtk.TextIter): boolean
    getAcceptsTab(): boolean
    getBorderWindowSize(type: Gtk.TextWindowType): number
    getBottomMargin(): number
    getBuffer(): Gtk.TextBuffer
    getCursorLocations(iter?: Gtk.TextIter | null): [ /* strong */ Gdk.Rectangle | null, /* weak */ Gdk.Rectangle | null ]
    getCursorVisible(): boolean
    getDefaultAttributes(): Gtk.TextAttributes
    getEditable(): boolean
    getHadjustment(): Gtk.Adjustment
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
    getMonospace(): boolean
    getOverwrite(): boolean
    getPixelsAboveLines(): number
    getPixelsBelowLines(): number
    getPixelsInsideWrap(): number
    getRightMargin(): number
    getTabs(): Pango.TabArray | null
    getTopMargin(): number
    getVadjustment(): Gtk.Adjustment
    getVisibleRect(): /* visibleRect */ Gdk.Rectangle
    getWindow(win: Gtk.TextWindowType): Gdk.Window | null
    getWindowType(window: Gdk.Window): Gtk.TextWindowType
    getWrapMode(): Gtk.WrapMode
    imContextFilterKeypress(event: Gdk.EventKey): boolean
    moveChild(child: Gtk.Widget, xpos: number, ypos: number): void
    moveMarkOnscreen(mark: Gtk.TextMark): boolean
    moveVisually(iter: Gtk.TextIter, count: number): boolean
    placeCursorOnscreen(): boolean
    resetCursorBlink(): void
    resetImContext(): void
    scrollMarkOnscreen(mark: Gtk.TextMark): void
    scrollToIter(iter: Gtk.TextIter, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): boolean
    scrollToMark(mark: Gtk.TextMark, withinMargin: number, useAlign: boolean, xalign: number, yalign: number): void
    setAcceptsTab(acceptsTab: boolean): void
    setBorderWindowSize(type: Gtk.TextWindowType, size: number): void
    setBottomMargin(bottomMargin: number): void
    setBuffer(buffer?: Gtk.TextBuffer | null): void
    setCursorVisible(setting: boolean): void
    setEditable(setting: boolean): void
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
    /* Methods of Gtk-3.0.Gtk.Container */
    add(widget: Gtk.Widget): void
    checkResize(): void
    childGetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childNotify(child: Gtk.Widget, childProperty: string): void
    childNotifyByPspec(child: Gtk.Widget, pspec: GObject.ParamSpec): void
    childSetProperty(child: Gtk.Widget, propertyName: string, value: any): void
    childType(): GObject.Type
    forall(callback: Gtk.Callback): void
    foreach(callback: Gtk.Callback): void
    getBorderWidth(): number
    getChildren(): Gtk.Widget[]
    getFocusChain(): [ /* returnType */ boolean, /* focusableWidgets */ Gtk.Widget[] ]
    getFocusChild(): Gtk.Widget | null
    getFocusHadjustment(): Gtk.Adjustment | null
    getFocusVadjustment(): Gtk.Adjustment | null
    getPathForChild(child: Gtk.Widget): Gtk.WidgetPath
    getResizeMode(): Gtk.ResizeMode
    propagateDraw(child: Gtk.Widget, cr: cairo.Context): void
    remove(widget: Gtk.Widget): void
    resizeChildren(): void
    setBorderWidth(borderWidth: number): void
    setFocusChain(focusableWidgets: Gtk.Widget[]): void
    setFocusChild(child?: Gtk.Widget | null): void
    setFocusHadjustment(adjustment: Gtk.Adjustment): void
    setFocusVadjustment(adjustment: Gtk.Adjustment): void
    setReallocateRedraws(needsRedraws: boolean): void
    setResizeMode(resizeMode: Gtk.ResizeMode): void
    unsetFocusChain(): void
    /* Methods of Gtk-3.0.Gtk.Widget */
    activate(): boolean
    addAccelerator(accelSignal: string, accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType, accelFlags: Gtk.AccelFlags): void
    addDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    addEvents(events: number): void
    addMnemonicLabel(label: Gtk.Widget): void
    addTickCallback(callback: Gtk.TickCallback): number
    canActivateAccel(signalId: number): boolean
    childFocus(direction: Gtk.DirectionType): boolean
    childNotify(childProperty: string): void
    classPath(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    computeExpand(orientation: Gtk.Orientation): boolean
    createPangoContext(): Pango.Context
    createPangoLayout(text?: string | null): Pango.Layout
    destroy(): void
    destroyed(widgetPointer: Gtk.Widget): /* widgetPointer */ Gtk.Widget
    deviceIsShadowed(device: Gdk.Device): boolean
    dragBegin(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext
    dragBeginWithCoordinates(targets: Gtk.TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext
    dragCheckThreshold(startX: number, startY: number, currentX: number, currentY: number): boolean
    dragDestAddImageTargets(): void
    dragDestAddTextTargets(): void
    dragDestAddUriTargets(): void
    dragDestFindTarget(context: Gdk.DragContext, targetList?: Gtk.TargetList | null): Gdk.Atom
    dragDestGetTargetList(): Gtk.TargetList | null
    dragDestGetTrackMotion(): boolean
    dragDestSet(flags: Gtk.DestDefaults, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragDestSetProxy(proxyWindow: Gdk.Window, protocol: Gdk.DragProtocol, useCoordinates: boolean): void
    dragDestSetTargetList(targetList?: Gtk.TargetList | null): void
    dragDestSetTrackMotion(trackMotion: boolean): void
    dragDestUnset(): void
    dragGetData(context: Gdk.DragContext, target: Gdk.Atom, time: number): void
    dragHighlight(): void
    dragSourceAddImageTargets(): void
    dragSourceAddTextTargets(): void
    dragSourceAddUriTargets(): void
    dragSourceGetTargetList(): Gtk.TargetList | null
    dragSourceSet(startButtonMask: Gdk.ModifierType, targets: Gtk.TargetEntry[] | null, actions: Gdk.DragAction): void
    dragSourceSetIconGicon(icon: Gio.Icon): void
    dragSourceSetIconName(iconName: string): void
    dragSourceSetIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    dragSourceSetIconStock(stockId: string): void
    dragSourceSetTargetList(targetList?: Gtk.TargetList | null): void
    dragSourceUnset(): void
    dragUnhighlight(): void
    draw(cr: cairo.Context): void
    ensureStyle(): void
    errorBell(): void
    event(event: Gdk.Event): boolean
    freezeChildNotify(): void
    getAccessible(): Atk.Object
    getActionGroup(prefix: string): Gio.ActionGroup | null
    getAllocatedBaseline(): number
    getAllocatedHeight(): number
    getAllocatedSize(): [ /* allocation */ Gtk.Allocation, /* baseline */ number | null ]
    getAllocatedWidth(): number
    getAllocation(): /* allocation */ Gtk.Allocation
    getAncestor(widgetType: GObject.Type): Gtk.Widget | null
    getAppPaintable(): boolean
    getCanDefault(): boolean
    getCanFocus(): boolean
    getChildRequisition(): /* requisition */ Gtk.Requisition
    getChildVisible(): boolean
    getClip(): /* clip */ Gtk.Allocation
    getClipboard(selection: Gdk.Atom): Gtk.Clipboard
    getCompositeName(): string
    getDeviceEnabled(device: Gdk.Device): boolean
    getDeviceEvents(device: Gdk.Device): Gdk.EventMask
    getDirection(): Gtk.TextDirection
    getDisplay(): Gdk.Display
    getDoubleBuffered(): boolean
    getEvents(): number
    getFocusOnClick(): boolean
    getFontMap(): Pango.FontMap | null
    getFontOptions(): cairo.FontOptions | null
    getFrameClock(): Gdk.FrameClock | null
    getHalign(): Gtk.Align
    getHasTooltip(): boolean
    getHasWindow(): boolean
    getHexpand(): boolean
    getHexpandSet(): boolean
    getMapped(): boolean
    getMarginBottom(): number
    getMarginEnd(): number
    getMarginLeft(): number
    getMarginRight(): number
    getMarginStart(): number
    getMarginTop(): number
    getModifierMask(intent: Gdk.ModifierIntent): Gdk.ModifierType
    getModifierStyle(): Gtk.RcStyle
    getName(): string
    getNoShowAll(): boolean
    getOpacity(): number
    getPangoContext(): Pango.Context
    getParent(): Gtk.Widget | null
    getParentWindow(): Gdk.Window | null
    getPath(): Gtk.WidgetPath
    getPointer(): [ /* x */ number | null, /* y */ number | null ]
    getPreferredHeight(): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredHeightAndBaselineForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null, /* minimumBaseline */ number | null, /* naturalBaseline */ number | null ]
    getPreferredHeightForWidth(width: number): [ /* minimumHeight */ number | null, /* naturalHeight */ number | null ]
    getPreferredSize(): [ /* minimumSize */ Gtk.Requisition | null, /* naturalSize */ Gtk.Requisition | null ]
    getPreferredWidth(): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getPreferredWidthForHeight(height: number): [ /* minimumWidth */ number | null, /* naturalWidth */ number | null ]
    getRealized(): boolean
    getReceivesDefault(): boolean
    getRequestMode(): Gtk.SizeRequestMode
    getRequisition(): /* requisition */ Gtk.Requisition
    getRootWindow(): Gdk.Window
    getScaleFactor(): number
    getScreen(): Gdk.Screen
    getSensitive(): boolean
    getSettings(): Gtk.Settings
    getSizeRequest(): [ /* width */ number | null, /* height */ number | null ]
    getState(): Gtk.StateType
    getStateFlags(): Gtk.StateFlags
    getStyle(): Gtk.Style
    getStyleContext(): Gtk.StyleContext
    getSupportMultidevice(): boolean
    getTemplateChild(widgetType: GObject.Type, name: string): GObject.Object
    getTooltipMarkup(): string | null
    getTooltipText(): string | null
    getTooltipWindow(): Gtk.Window
    getToplevel(): Gtk.Widget
    getValign(): Gtk.Align
    getValignWithBaseline(): Gtk.Align
    getVexpand(): boolean
    getVexpandSet(): boolean
    getVisible(): boolean
    getVisual(): Gdk.Visual
    getWindow(): Gdk.Window | null
    grabAdd(): void
    grabDefault(): void
    grabFocus(): void
    grabRemove(): void
    hasGrab(): boolean
    hasRcStyle(): boolean
    hasScreen(): boolean
    hasVisibleFocus(): boolean
    hide(): void
    hideOnDelete(): boolean
    inDestruction(): boolean
    initTemplate(): void
    inputShapeCombineRegion(region?: cairo.Region | null): void
    insertActionGroup(name: string, group?: Gio.ActionGroup | null): void
    intersect(area: Gdk.Rectangle): [ /* returnType */ boolean, /* intersection */ Gdk.Rectangle | null ]
    isAncestor(ancestor: Gtk.Widget): boolean
    isComposited(): boolean
    isDrawable(): boolean
    isSensitive(): boolean
    isToplevel(): boolean
    isVisible(): boolean
    keynavFailed(direction: Gtk.DirectionType): boolean
    listAccelClosures(): Function[]
    listActionPrefixes(): string[]
    listMnemonicLabels(): Gtk.Widget[]
    map(): void
    mnemonicActivate(groupCycling: boolean): boolean
    modifyBase(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyBg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyCursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void
    modifyFg(state: Gtk.StateType, color?: Gdk.Color | null): void
    modifyFont(fontDesc?: Pango.FontDescription | null): void
    modifyStyle(style: Gtk.RcStyle): void
    modifyText(state: Gtk.StateType, color?: Gdk.Color | null): void
    overrideBackgroundColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideColor(state: Gtk.StateFlags, color?: Gdk.RGBA | null): void
    overrideCursor(cursor?: Gdk.RGBA | null, secondaryCursor?: Gdk.RGBA | null): void
    overrideFont(fontDesc?: Pango.FontDescription | null): void
    overrideSymbolicColor(name: string, color?: Gdk.RGBA | null): void
    path(): [ /* pathLength */ number | null, /* path */ string | null, /* pathReversed */ string | null ]
    queueAllocate(): void
    queueComputeExpand(): void
    queueDraw(): void
    queueDrawArea(x: number, y: number, width: number, height: number): void
    queueDrawRegion(region: cairo.Region): void
    queueResize(): void
    queueResizeNoRedraw(): void
    realize(): void
    regionIntersect(region: cairo.Region): cairo.Region
    registerWindow(window: Gdk.Window): void
    removeAccelerator(accelGroup: Gtk.AccelGroup, accelKey: number, accelMods: Gdk.ModifierType): boolean
    removeMnemonicLabel(label: Gtk.Widget): void
    removeTickCallback(id: number): void
    renderIcon(stockId: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null
    renderIconPixbuf(stockId: string, size: number): GdkPixbuf.Pixbuf | null
    reparent(newParent: Gtk.Widget): void
    resetRcStyles(): void
    resetStyle(): void
    sendExpose(event: Gdk.Event): number
    sendFocusChange(event: Gdk.Event): boolean
    setAccelPath(accelPath?: string | null, accelGroup?: Gtk.AccelGroup | null): void
    setAllocation(allocation: Gtk.Allocation): void
    setAppPaintable(appPaintable: boolean): void
    setCanDefault(canDefault: boolean): void
    setCanFocus(canFocus: boolean): void
    setChildVisible(isVisible: boolean): void
    setClip(clip: Gtk.Allocation): void
    setCompositeName(name: string): void
    setDeviceEnabled(device: Gdk.Device, enabled: boolean): void
    setDeviceEvents(device: Gdk.Device, events: Gdk.EventMask): void
    setDirection(dir: Gtk.TextDirection): void
    setDoubleBuffered(doubleBuffered: boolean): void
    setEvents(events: number): void
    setFocusOnClick(focusOnClick: boolean): void
    setFontMap(fontMap?: Pango.FontMap | null): void
    setFontOptions(options?: cairo.FontOptions | null): void
    setHalign(align: Gtk.Align): void
    setHasTooltip(hasTooltip: boolean): void
    setHasWindow(hasWindow: boolean): void
    setHexpand(expand: boolean): void
    setHexpandSet(set: boolean): void
    setMapped(mapped: boolean): void
    setMarginBottom(margin: number): void
    setMarginEnd(margin: number): void
    setMarginLeft(margin: number): void
    setMarginRight(margin: number): void
    setMarginStart(margin: number): void
    setMarginTop(margin: number): void
    setName(name: string): void
    setNoShowAll(noShowAll: boolean): void
    setOpacity(opacity: number): void
    setParent(parent: Gtk.Widget): void
    setParentWindow(parentWindow: Gdk.Window): void
    setRealized(realized: boolean): void
    setReceivesDefault(receivesDefault: boolean): void
    setRedrawOnAllocate(redrawOnAllocate: boolean): void
    setSensitive(sensitive: boolean): void
    setSizeRequest(width: number, height: number): void
    setState(state: Gtk.StateType): void
    setStateFlags(flags: Gtk.StateFlags, clear: boolean): void
    setStyle(style?: Gtk.Style | null): void
    setSupportMultidevice(supportMultidevice: boolean): void
    setTooltipMarkup(markup?: string | null): void
    setTooltipText(text?: string | null): void
    setTooltipWindow(customWindow?: Gtk.Window | null): void
    setValign(align: Gtk.Align): void
    setVexpand(expand: boolean): void
    setVexpandSet(set: boolean): void
    setVisible(visible: boolean): void
    setVisual(visual?: Gdk.Visual | null): void
    setWindow(window: Gdk.Window): void
    shapeCombineRegion(region?: cairo.Region | null): void
    show(): void
    showAll(): void
    showNow(): void
    sizeAllocate(allocation: Gtk.Allocation): void
    sizeAllocateWithBaseline(allocation: Gtk.Allocation, baseline: number): void
    sizeRequest(): /* requisition */ Gtk.Requisition
    styleAttach(): void
    styleGetProperty(propertyName: string, value: any): void
    thawChildNotify(): void
    translateCoordinates(destWidget: Gtk.Widget, srcX: number, srcY: number): [ /* returnType */ boolean, /* destX */ number | null, /* destY */ number | null ]
    triggerTooltipQuery(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unregisterWindow(window: Gdk.Window): void
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
    /* Methods of Gtk-3.0.Gtk.Buildable */
    addChild(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    constructChild(builder: Gtk.Builder, name: string): GObject.Object
    customFinished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagEnd(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    customTagStart(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ GLib.MarkupParser, /* data */ object | null ]
    getInternalChild(builder: Gtk.Builder, childname: string): GObject.Object
    parserFinished(builder: Gtk.Builder): void
    setBuildableProperty(builder: Gtk.Builder, name: string, value: any): void
    setName(name: string): void
    /* Methods of Gtk-3.0.Gtk.Scrollable */
    getBorder(): [ /* returnType */ boolean, /* border */ Gtk.Border ]
    getHscrollPolicy(): Gtk.ScrollablePolicy
    getVscrollPolicy(): Gtk.ScrollablePolicy
    setHadjustment(hadjustment?: Gtk.Adjustment | null): void
    setHscrollPolicy(policy: Gtk.ScrollablePolicy): void
    setVadjustment(vadjustment?: Gtk.Adjustment | null): void
    setVscrollPolicy(policy: Gtk.ScrollablePolicy): void
    /* Signals of GtkSource-4.GtkSource.View */
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
    connect(sigName: "line-mark-activated", callback: ((iter: Gtk.TextIter, event: Gdk.Event) => void)): number
    on(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "line-mark-activated", callback: (iter: Gtk.TextIter, event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "line-mark-activated", iter: Gtk.TextIter, event: Gdk.Event): void
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
    connect(sigName: "redo", callback: (() => void)): number
    on(sigName: "redo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "redo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "redo", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "redo"): void
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
    connect(sigName: "undo", callback: (() => void)): number
    on(sigName: "undo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "undo", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "undo", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "undo"): void
    /* Signals of Gtk-3.0.Gtk.TextView */
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
    connect(sigName: "populate-popup", callback: ((popup: Gtk.Widget) => void)): number
    on(sigName: "populate-popup", callback: (popup: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "populate-popup", callback: (popup: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "populate-popup", callback: (popup: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "populate-popup", popup: Gtk.Widget): void
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
    /* Signals of Gtk-3.0.Gtk.Container */
    connect(sigName: "add", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "add", object: Gtk.Widget): void
    connect(sigName: "check-resize", callback: (() => void)): number
    on(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "check-resize"): void
    connect(sigName: "remove", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "remove", object: Gtk.Widget): void
    connect(sigName: "set-focus-child", callback: ((object: Gtk.Widget) => void)): number
    on(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-focus-child", callback: (object: Gtk.Widget) => void): NodeJS.EventEmitter
    emit(sigName: "set-focus-child", object: Gtk.Widget): void
    /* Signals of Gtk-3.0.Gtk.Widget */
    connect(sigName: "accel-closures-changed", callback: (() => void)): number
    on(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accel-closures-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accel-closures-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "accel-closures-changed"): void
    connect(sigName: "button-press-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Gdk.EventButton): void
    connect(sigName: "button-release-event", callback: ((event: Gdk.EventButton) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Gdk.EventButton) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Gdk.EventButton): void
    connect(sigName: "can-activate-accel", callback: ((signalId: number) => boolean)): number
    on(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "can-activate-accel", callback: (signalId: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "can-activate-accel", callback: (signalId: number) => void): NodeJS.EventEmitter
    emit(sigName: "can-activate-accel", signalId: number): void
    connect(sigName: "child-notify", callback: ((childProperty: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (childProperty: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", childProperty: GObject.ParamSpec): void
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    connect(sigName: "configure-event", callback: ((event: Gdk.EventConfigure) => boolean)): number
    on(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "configure-event", callback: (event: Gdk.EventConfigure) => void): NodeJS.EventEmitter
    emit(sigName: "configure-event", event: Gdk.EventConfigure): void
    connect(sigName: "damage-event", callback: ((event: Gdk.EventExpose) => boolean)): number
    on(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damage-event", callback: (event: Gdk.EventExpose) => void): NodeJS.EventEmitter
    emit(sigName: "damage-event", event: Gdk.EventExpose): void
    connect(sigName: "delete-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "delete-event", event: Gdk.Event): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "destroy-event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-event", event: Gdk.Event): void
    connect(sigName: "direction-changed", callback: ((previousDirection: Gtk.TextDirection) => void)): number
    on(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: (previousDirection: Gtk.TextDirection) => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed", previousDirection: Gtk.TextDirection): void
    connect(sigName: "drag-begin", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-begin", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-begin", context: Gdk.DragContext): void
    connect(sigName: "drag-data-delete", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-delete", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-delete", context: Gdk.DragContext): void
    connect(sigName: "drag-data-get", callback: ((context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-get", callback: (context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-get", context: Gdk.DragContext, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-data-received", callback: ((context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-data-received", callback: (context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-data-received", context: Gdk.DragContext, x: number, y: number, data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "drag-drop", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-drop", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "drag-end", callback: ((context: Gdk.DragContext) => void)): number
    on(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-end", callback: (context: Gdk.DragContext) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-end", callback: (context: Gdk.DragContext) => void): NodeJS.EventEmitter
    emit(sigName: "drag-end", context: Gdk.DragContext): void
    connect(sigName: "drag-failed", callback: ((context: Gdk.DragContext, result: Gtk.DragResult) => boolean)): number
    on(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-failed", callback: (context: Gdk.DragContext, result: Gtk.DragResult) => void): NodeJS.EventEmitter
    emit(sigName: "drag-failed", context: Gdk.DragContext, result: Gtk.DragResult): void
    connect(sigName: "drag-leave", callback: ((context: Gdk.DragContext, time: number) => void)): number
    on(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-leave", callback: (context: Gdk.DragContext, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-leave", context: Gdk.DragContext, time: number): void
    connect(sigName: "drag-motion", callback: ((context: Gdk.DragContext, x: number, y: number, time: number) => boolean)): number
    on(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drag-motion", callback: (context: Gdk.DragContext, x: number, y: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void
    connect(sigName: "draw", callback: ((cr: cairo.Context) => boolean)): number
    on(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "draw", callback: (cr: cairo.Context) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "draw", callback: (cr: cairo.Context) => void): NodeJS.EventEmitter
    emit(sigName: "draw", cr: cairo.Context): void
    connect(sigName: "enter-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "enter-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "event", callback: ((event: Gdk.Event) => boolean)): number
    on(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Gdk.Event): void
    connect(sigName: "event-after", callback: ((event: Gdk.Event) => void)): number
    on(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event-after", callback: (event: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event-after", callback: (event: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event-after", event: Gdk.Event): void
    connect(sigName: "focus", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "focus", direction: Gtk.DirectionType): void
    connect(sigName: "focus-in-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in-event", event: Gdk.EventFocus): void
    connect(sigName: "focus-out-event", callback: ((event: Gdk.EventFocus) => boolean)): number
    on(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out-event", callback: (event: Gdk.EventFocus) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out-event", event: Gdk.EventFocus): void
    connect(sigName: "grab-broken-event", callback: ((event: Gdk.EventGrabBroken) => boolean)): number
    on(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-broken-event", callback: (event: Gdk.EventGrabBroken) => void): NodeJS.EventEmitter
    emit(sigName: "grab-broken-event", event: Gdk.EventGrabBroken): void
    connect(sigName: "grab-focus", callback: (() => void)): number
    on(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-focus", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-focus", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "grab-focus"): void
    connect(sigName: "grab-notify", callback: ((wasGrabbed: boolean) => void)): number
    on(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-notify", callback: (wasGrabbed: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "grab-notify", wasGrabbed: boolean): void
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    connect(sigName: "hierarchy-changed", callback: ((previousToplevel?: Gtk.Widget | null) => void)): number
    on(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hierarchy-changed", callback: (previousToplevel?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "hierarchy-changed", previousToplevel?: Gtk.Widget | null): void
    connect(sigName: "key-press-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Gdk.EventKey): void
    connect(sigName: "key-release-event", callback: ((event: Gdk.EventKey) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Gdk.EventKey) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Gdk.EventKey): void
    connect(sigName: "keynav-failed", callback: ((direction: Gtk.DirectionType) => boolean)): number
    on(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keynav-failed", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "leave-notify-event", callback: ((event: Gdk.EventCrossing) => boolean)): number
    on(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-notify-event", callback: (event: Gdk.EventCrossing) => void): NodeJS.EventEmitter
    emit(sigName: "leave-notify-event", event: Gdk.EventCrossing): void
    connect(sigName: "map", callback: (() => void)): number
    on(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "map"): void
    connect(sigName: "map-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "map-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "map-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "map-event", event: Gdk.EventAny): void
    connect(sigName: "mnemonic-activate", callback: ((groupCycling: boolean) => boolean)): number
    on(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mnemonic-activate", callback: (groupCycling: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "mnemonic-activate", groupCycling: boolean): void
    connect(sigName: "motion-notify-event", callback: ((event: Gdk.EventMotion) => boolean)): number
    on(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-notify-event", callback: (event: Gdk.EventMotion) => void): NodeJS.EventEmitter
    emit(sigName: "motion-notify-event", event: Gdk.EventMotion): void
    connect(sigName: "move-focus", callback: ((direction: Gtk.DirectionType) => void)): number
    on(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move-focus", callback: (direction: Gtk.DirectionType) => void): NodeJS.EventEmitter
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "parent-set", callback: ((oldParent?: Gtk.Widget | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Gtk.Widget | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Gtk.Widget | null): void
    connect(sigName: "popup-menu", callback: (() => boolean)): number
    on(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "popup-menu", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "popup-menu", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "popup-menu"): void
    connect(sigName: "property-notify-event", callback: ((event: Gdk.EventProperty) => boolean)): number
    on(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-notify-event", callback: (event: Gdk.EventProperty) => void): NodeJS.EventEmitter
    emit(sigName: "property-notify-event", event: Gdk.EventProperty): void
    connect(sigName: "proximity-in-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-in-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-in-event", event: Gdk.EventProximity): void
    connect(sigName: "proximity-out-event", callback: ((event: Gdk.EventProximity) => boolean)): number
    on(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "proximity-out-event", callback: (event: Gdk.EventProximity) => void): NodeJS.EventEmitter
    emit(sigName: "proximity-out-event", event: Gdk.EventProximity): void
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
    connect(sigName: "screen-changed", callback: ((previousScreen?: Gdk.Screen | null) => void)): number
    on(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "screen-changed", callback: (previousScreen?: Gdk.Screen | null) => void): NodeJS.EventEmitter
    emit(sigName: "screen-changed", previousScreen?: Gdk.Screen | null): void
    connect(sigName: "scroll-event", callback: ((event: Gdk.EventScroll) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Gdk.EventScroll) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Gdk.EventScroll): void
    connect(sigName: "selection-clear-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-clear-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-clear-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-get", callback: ((data: Gtk.SelectionData, info: number, time: number) => void)): number
    on(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-get", callback: (data: Gtk.SelectionData, info: number, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-get", data: Gtk.SelectionData, info: number, time: number): void
    connect(sigName: "selection-notify-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-notify-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-notify-event", event: Gdk.EventSelection): void
    connect(sigName: "selection-received", callback: ((data: Gtk.SelectionData, time: number) => void)): number
    on(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-received", callback: (data: Gtk.SelectionData, time: number) => void): NodeJS.EventEmitter
    emit(sigName: "selection-received", data: Gtk.SelectionData, time: number): void
    connect(sigName: "selection-request-event", callback: ((event: Gdk.EventSelection) => boolean)): number
    on(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-request-event", callback: (event: Gdk.EventSelection) => void): NodeJS.EventEmitter
    emit(sigName: "selection-request-event", event: Gdk.EventSelection): void
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    connect(sigName: "show-help", callback: ((helpType: Gtk.WidgetHelpType) => boolean)): number
    on(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-help", callback: (helpType: Gtk.WidgetHelpType) => void): NodeJS.EventEmitter
    emit(sigName: "show-help", helpType: Gtk.WidgetHelpType): void
    connect(sigName: "size-allocate", callback: ((allocation: Gtk.Allocation) => void)): number
    on(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-allocate", callback: (allocation: Gtk.Allocation) => void): NodeJS.EventEmitter
    emit(sigName: "size-allocate", allocation: Gtk.Allocation): void
    connect(sigName: "state-changed", callback: ((state: Gtk.StateType) => void)): number
    on(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: (state: Gtk.StateType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: (state: Gtk.StateType) => void): NodeJS.EventEmitter
    emit(sigName: "state-changed", state: Gtk.StateType): void
    connect(sigName: "state-flags-changed", callback: ((flags: Gtk.StateFlags) => void)): number
    on(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-flags-changed", callback: (flags: Gtk.StateFlags) => void): NodeJS.EventEmitter
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "style-set", callback: ((previousStyle?: Gtk.Style | null) => void)): number
    on(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-set", callback: (previousStyle?: Gtk.Style | null) => void): NodeJS.EventEmitter
    emit(sigName: "style-set", previousStyle?: Gtk.Style | null): void
    connect(sigName: "style-updated", callback: (() => void)): number
    on(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "style-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "style-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "style-updated"): void
    connect(sigName: "touch-event", callback: ((object: Gdk.Event) => boolean)): number
    on(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (object: Gdk.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (object: Gdk.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", object: Gdk.Event): void
    connect(sigName: "unmap", callback: (() => void)): number
    on(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unmap"): void
    connect(sigName: "unmap-event", callback: ((event: Gdk.EventAny) => boolean)): number
    on(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmap-event", callback: (event: Gdk.EventAny) => void): NodeJS.EventEmitter
    emit(sigName: "unmap-event", event: Gdk.EventAny): void
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
    connect(sigName: "visibility-notify-event", callback: ((event: Gdk.EventVisibility) => boolean)): number
    on(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-notify-event", callback: (event: Gdk.EventVisibility) => void): NodeJS.EventEmitter
    emit(sigName: "visibility-notify-event", event: Gdk.EventVisibility): void
    connect(sigName: "window-state-event", callback: ((event: Gdk.EventWindowState) => boolean)): number
    on(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-state-event", callback: (event: Gdk.EventWindowState) => void): NodeJS.EventEmitter
    emit(sigName: "window-state-event", event: Gdk.EventWindowState): void
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
    connect(sigName: "notify::populate-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::populate-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::populate-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::populate-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
abstract class BufferClass {
    /* Fields of GtkSource-4.GtkSource.BufferClass */
    readonly parentClass: Gtk.TextBufferClass
    readonly undo: (buffer: Buffer) => void
    readonly redo: (buffer: Buffer) => void
    readonly bracketMatched: (buffer: Buffer, iter: Gtk.TextIter, state: BracketMatchType) => void
    readonly padding: object[]
    static name: string
}
class BufferPrivate {
    static name: string
}
abstract class CompletionClass {
    /* Fields of GtkSource-4.GtkSource.CompletionClass */
    readonly parentClass: GObject.ObjectClass
    readonly proposalActivated: (completion: Completion, provider: CompletionProvider, proposal: CompletionProposal) => boolean
    readonly show: (completion: Completion) => void
    readonly hide: (completion: Completion) => void
    readonly populateContext: (completion: Completion, context: CompletionContext) => void
    readonly moveCursor: (completion: Completion, step: Gtk.ScrollStep, num: number) => void
    readonly movePage: (completion: Completion, step: Gtk.ScrollStep, num: number) => void
    readonly activateProposal: (completion: Completion) => void
    readonly padding: object[]
    static name: string
}
abstract class CompletionContextClass {
    /* Fields of GtkSource-4.GtkSource.CompletionContextClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    readonly cancelled: (context: CompletionContext) => void
    readonly padding: object[]
    static name: string
}
class CompletionContextPrivate {
    static name: string
}
abstract class CompletionInfoClass {
    /* Fields of GtkSource-4.GtkSource.CompletionInfoClass */
    readonly parentClass: Gtk.WindowClass
    readonly padding: object[]
    static name: string
}
class CompletionInfoPrivate {
    static name: string
}
abstract class CompletionItemClass {
    /* Fields of GtkSource-4.GtkSource.CompletionItemClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class CompletionItemPrivate {
    static name: string
}
class CompletionPrivate {
    static name: string
}
abstract class CompletionProposalIface {
    /* Fields of GtkSource-4.GtkSource.CompletionProposalIface */
    readonly parent: GObject.TypeInterface
    readonly getLabel: (proposal: CompletionProposal) => string
    readonly getMarkup: (proposal: CompletionProposal) => string
    readonly getText: (proposal: CompletionProposal) => string
    readonly getIcon: (proposal: CompletionProposal) => GdkPixbuf.Pixbuf | null
    readonly getIconName: (proposal: CompletionProposal) => string | null
    readonly getGicon: (proposal: CompletionProposal) => Gio.Icon | null
    readonly getInfo: (proposal: CompletionProposal) => string | null
    readonly hash: (proposal: CompletionProposal) => number
    readonly equal: (proposal: CompletionProposal, other: CompletionProposal) => boolean
    readonly changed: (proposal: CompletionProposal) => void
    static name: string
}
abstract class CompletionProviderIface {
    /* Fields of GtkSource-4.GtkSource.CompletionProviderIface */
    readonly gIface: GObject.TypeInterface
    readonly getName: (provider: CompletionProvider) => string
    readonly getIcon: (provider: CompletionProvider) => GdkPixbuf.Pixbuf | null
    readonly getIconName: (provider: CompletionProvider) => string | null
    readonly getGicon: (provider: CompletionProvider) => Gio.Icon | null
    readonly populate: (provider: CompletionProvider, context: CompletionContext) => void
    readonly match: (provider: CompletionProvider, context: CompletionContext) => boolean
    readonly getActivation: (provider: CompletionProvider) => CompletionActivation
    readonly getInfoWidget: (provider: CompletionProvider, proposal: CompletionProposal) => Gtk.Widget | null
    readonly updateInfo: (provider: CompletionProvider, proposal: CompletionProposal, info: CompletionInfo) => void
    readonly getStartIter: (provider: CompletionProvider, context: CompletionContext, proposal: CompletionProposal) => [ /* returnType */ boolean, /* iter */ Gtk.TextIter ]
    readonly activateProposal: (provider: CompletionProvider, proposal: CompletionProposal, iter: Gtk.TextIter) => boolean
    readonly getInteractiveDelay: (provider: CompletionProvider) => number
    readonly getPriority: (provider: CompletionProvider) => number
    static name: string
}
abstract class CompletionWordsClass {
    /* Fields of GtkSource-4.GtkSource.CompletionWordsClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
class CompletionWordsPrivate {
    static name: string
}
class Encoding {
    /* Methods of GtkSource-4.GtkSource.Encoding */
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
    /* Fields of GtkSource-4.GtkSource.FileClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class FileLoaderClass {
    /* Fields of GtkSource-4.GtkSource.FileLoaderClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class FileLoaderPrivate {
    static name: string
}
class FilePrivate {
    static name: string
}
abstract class FileSaverClass {
    /* Fields of GtkSource-4.GtkSource.FileSaverClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class FileSaverPrivate {
    static name: string
}
abstract class GutterClass {
    /* Fields of GtkSource-4.GtkSource.GutterClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class GutterPrivate {
    static name: string
}
abstract class GutterRendererClass {
    /* Fields of GtkSource-4.GtkSource.GutterRendererClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    readonly begin: (renderer: GutterRenderer, cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter) => void
    readonly draw: (renderer: GutterRenderer, cr: cairo.Context, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void
    readonly end: (renderer: GutterRenderer) => void
    readonly changeView: (renderer: GutterRenderer, oldView?: Gtk.TextView | null) => void
    readonly changeBuffer: (renderer: GutterRenderer, oldBuffer?: Gtk.TextBuffer | null) => void
    readonly queryActivatable: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => boolean
    readonly activate: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, event: Gdk.Event) => void
    readonly queueDraw: (renderer: GutterRenderer) => void
    readonly queryTooltip: (renderer: GutterRenderer, iter: Gtk.TextIter, area: Gdk.Rectangle, x: number, y: number, tooltip: Gtk.Tooltip) => boolean
    readonly queryData: (renderer: GutterRenderer, start: Gtk.TextIter, end: Gtk.TextIter, state: GutterRendererState) => void
    readonly padding: object[]
    static name: string
}
abstract class GutterRendererPixbufClass {
    static name: string
}
class GutterRendererPixbufPrivate {
    static name: string
}
class GutterRendererPrivate {
    static name: string
}
abstract class GutterRendererTextClass {
    static name: string
}
class GutterRendererTextPrivate {
    static name: string
}
abstract class LanguageClass {
    /* Fields of GtkSource-4.GtkSource.LanguageClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class LanguageManagerClass {
    /* Fields of GtkSource-4.GtkSource.LanguageManagerClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class LanguageManagerPrivate {
    static name: string
}
class LanguagePrivate {
    static name: string
}
abstract class MapClass {
    /* Fields of GtkSource-4.GtkSource.MapClass */
    readonly parentClass: ViewClass
    readonly padding: object[]
    static name: string
}
abstract class MarkAttributesClass {
    static name: string
}
class MarkAttributesPrivate {
    static name: string
}
abstract class MarkClass {
    /* Fields of GtkSource-4.GtkSource.MarkClass */
    readonly parentClass: Gtk.TextMarkClass
    readonly padding: object[]
    static name: string
}
class MarkPrivate {
    static name: string
}
abstract class PrintCompositorClass {
    /* Fields of GtkSource-4.GtkSource.PrintCompositorClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class PrintCompositorPrivate {
    static name: string
}
abstract class RegionClass {
    /* Fields of GtkSource-4.GtkSource.RegionClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class RegionIter {
    /* Methods of GtkSource-4.GtkSource.RegionIter */
    getSubregion(): [ /* returnType */ boolean, /* start */ Gtk.TextIter | null, /* end */ Gtk.TextIter | null ]
    isEnd(): boolean
    next(): boolean
    static name: string
}
abstract class SearchContextClass {
    /* Fields of GtkSource-4.GtkSource.SearchContextClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class SearchContextPrivate {
    static name: string
}
abstract class SearchSettingsClass {
    /* Fields of GtkSource-4.GtkSource.SearchSettingsClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class SearchSettingsPrivate {
    static name: string
}
abstract class SpaceDrawerClass {
    /* Fields of GtkSource-4.GtkSource.SpaceDrawerClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class SpaceDrawerPrivate {
    static name: string
}
abstract class StyleClass {
    static name: string
}
abstract class StyleSchemeChooserButtonClass {
    /* Fields of GtkSource-4.GtkSource.StyleSchemeChooserButtonClass */
    readonly parent: Gtk.ButtonClass
    readonly padding: object[]
    static name: string
}
abstract class StyleSchemeChooserInterface {
    /* Fields of GtkSource-4.GtkSource.StyleSchemeChooserInterface */
    readonly baseInterface: GObject.TypeInterface
    readonly getStyleScheme: (chooser: StyleSchemeChooser) => StyleScheme
    readonly setStyleScheme: (chooser: StyleSchemeChooser, scheme: StyleScheme) => void
    readonly padding: object[]
    static name: string
}
abstract class StyleSchemeChooserWidgetClass {
    /* Fields of GtkSource-4.GtkSource.StyleSchemeChooserWidgetClass */
    readonly parent: Gtk.BinClass
    readonly padding: object[]
    static name: string
}
abstract class StyleSchemeClass {
    /* Fields of GtkSource-4.GtkSource.StyleSchemeClass */
    readonly baseClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
abstract class StyleSchemeManagerClass {
    /* Fields of GtkSource-4.GtkSource.StyleSchemeManagerClass */
    readonly parentClass: GObject.ObjectClass
    readonly padding: object[]
    static name: string
}
class StyleSchemeManagerPrivate {
    static name: string
}
class StyleSchemePrivate {
    static name: string
}
abstract class TagClass {
    /* Fields of GtkSource-4.GtkSource.TagClass */
    readonly parentClass: Gtk.TextTagClass
    readonly padding: object[]
    static name: string
}
abstract class UndoManagerIface {
    /* Fields of GtkSource-4.GtkSource.UndoManagerIface */
    readonly parent: GObject.TypeInterface
    readonly canUndo: (manager: UndoManager) => boolean
    readonly canRedo: (manager: UndoManager) => boolean
    readonly undo: (manager: UndoManager) => void
    readonly redo: (manager: UndoManager) => void
    readonly beginNotUndoableAction: (manager: UndoManager) => void
    readonly endNotUndoableAction: (manager: UndoManager) => void
    readonly canUndoChanged: (manager: UndoManager) => void
    readonly canRedoChanged: (manager: UndoManager) => void
    static name: string
}
abstract class ViewClass {
    /* Fields of GtkSource-4.GtkSource.ViewClass */
    readonly parentClass: Gtk.TextViewClass
    readonly undo: (view: View) => void
    readonly redo: (view: View) => void
    readonly lineMarkActivated: (view: View, iter: Gtk.TextIter, event: Gdk.Event) => void
    readonly showCompletion: (view: View) => void
    readonly moveLines: (view: View, down: boolean) => void
    readonly moveWords: (view: View, step: number) => void
    readonly padding: object[]
    static name: string
}
class ViewPrivate {
    static name: string
}
}
export default GtkSource;