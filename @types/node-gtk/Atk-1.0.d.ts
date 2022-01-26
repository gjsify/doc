/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Atk-1.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Atk {

enum CoordType {
    SCREEN,
    WINDOW,
    PARENT,
}
enum KeyEventType {
    PRESS,
    RELEASE,
    LAST_DEFINED,
}
enum Layer {
    INVALID,
    BACKGROUND,
    CANVAS,
    WIDGET,
    MDI,
    POPUP,
    OVERLAY,
    WINDOW,
}
enum RelationType {
    NULL,
    CONTROLLED_BY,
    CONTROLLER_FOR,
    LABEL_FOR,
    LABELLED_BY,
    MEMBER_OF,
    NODE_CHILD_OF,
    FLOWS_TO,
    FLOWS_FROM,
    SUBWINDOW_OF,
    EMBEDS,
    EMBEDDED_BY,
    POPUP_FOR,
    PARENT_WINDOW_OF,
    DESCRIBED_BY,
    DESCRIPTION_FOR,
    NODE_PARENT_OF,
    DETAILS,
    DETAILS_FOR,
    ERROR_MESSAGE,
    ERROR_FOR,
    LAST_DEFINED,
}
enum Role {
    INVALID,
    ACCELERATOR_LABEL,
    ALERT,
    ANIMATION,
    ARROW,
    CALENDAR,
    CANVAS,
    CHECK_BOX,
    CHECK_MENU_ITEM,
    COLOR_CHOOSER,
    COLUMN_HEADER,
    COMBO_BOX,
    DATE_EDITOR,
    DESKTOP_ICON,
    DESKTOP_FRAME,
    DIAL,
    DIALOG,
    DIRECTORY_PANE,
    DRAWING_AREA,
    FILE_CHOOSER,
    FILLER,
    FONT_CHOOSER,
    FRAME,
    GLASS_PANE,
    HTML_CONTAINER,
    ICON,
    IMAGE,
    INTERNAL_FRAME,
    LABEL,
    LAYERED_PANE,
    LIST,
    LIST_ITEM,
    MENU,
    MENU_BAR,
    MENU_ITEM,
    OPTION_PANE,
    PAGE_TAB,
    PAGE_TAB_LIST,
    PANEL,
    PASSWORD_TEXT,
    POPUP_MENU,
    PROGRESS_BAR,
    PUSH_BUTTON,
    RADIO_BUTTON,
    RADIO_MENU_ITEM,
    ROOT_PANE,
    ROW_HEADER,
    SCROLL_BAR,
    SCROLL_PANE,
    SEPARATOR,
    SLIDER,
    SPLIT_PANE,
    SPIN_BUTTON,
    STATUSBAR,
    TABLE,
    TABLE_CELL,
    TABLE_COLUMN_HEADER,
    TABLE_ROW_HEADER,
    TEAR_OFF_MENU_ITEM,
    TERMINAL,
    TEXT,
    TOGGLE_BUTTON,
    TOOL_BAR,
    TOOL_TIP,
    TREE,
    TREE_TABLE,
    UNKNOWN,
    VIEWPORT,
    WINDOW,
    HEADER,
    FOOTER,
    PARAGRAPH,
    RULER,
    APPLICATION,
    AUTOCOMPLETE,
    EDIT_BAR,
    EMBEDDED,
    ENTRY,
    CHART,
    CAPTION,
    DOCUMENT_FRAME,
    HEADING,
    PAGE,
    SECTION,
    REDUNDANT_OBJECT,
    FORM,
    LINK,
    INPUT_METHOD_WINDOW,
    TABLE_ROW,
    TREE_ITEM,
    DOCUMENT_SPREADSHEET,
    DOCUMENT_PRESENTATION,
    DOCUMENT_TEXT,
    DOCUMENT_WEB,
    DOCUMENT_EMAIL,
    COMMENT,
    LIST_BOX,
    GROUPING,
    IMAGE_MAP,
    NOTIFICATION,
    INFO_BAR,
    LEVEL_BAR,
    TITLE_BAR,
    BLOCK_QUOTE,
    AUDIO,
    VIDEO,
    DEFINITION,
    ARTICLE,
    LANDMARK,
    LOG,
    MARQUEE,
    MATH,
    RATING,
    TIMER,
    DESCRIPTION_LIST,
    DESCRIPTION_TERM,
    DESCRIPTION_VALUE,
    STATIC,
    MATH_FRACTION,
    MATH_ROOT,
    SUBSCRIPT,
    SUPERSCRIPT,
    FOOTNOTE,
    CONTENT_DELETION,
    CONTENT_INSERTION,
    MARK,
    SUGGESTION,
    LAST_DEFINED,
}
enum ScrollType {
    TOP_LEFT,
    BOTTOM_RIGHT,
    TOP_EDGE,
    BOTTOM_EDGE,
    LEFT_EDGE,
    RIGHT_EDGE,
    ANYWHERE,
}
enum StateType {
    INVALID,
    ACTIVE,
    ARMED,
    BUSY,
    CHECKED,
    DEFUNCT,
    EDITABLE,
    ENABLED,
    EXPANDABLE,
    EXPANDED,
    FOCUSABLE,
    FOCUSED,
    HORIZONTAL,
    ICONIFIED,
    MODAL,
    MULTI_LINE,
    MULTISELECTABLE,
    OPAQUE,
    PRESSED,
    RESIZABLE,
    SELECTABLE,
    SELECTED,
    SENSITIVE,
    SHOWING,
    SINGLE_LINE,
    STALE,
    TRANSIENT,
    VERTICAL,
    VISIBLE,
    MANAGES_DESCENDANTS,
    INDETERMINATE,
    TRUNCATED,
    REQUIRED,
    INVALID_ENTRY,
    SUPPORTS_AUTOCOMPLETION,
    SELECTABLE_TEXT,
    DEFAULT,
    ANIMATED,
    VISITED,
    CHECKABLE,
    HAS_POPUP,
    HAS_TOOLTIP,
    READ_ONLY,
    COLLAPSED,
    LAST_DEFINED,
}
enum TextAttribute {
    INVALID,
    LEFT_MARGIN,
    RIGHT_MARGIN,
    INDENT,
    INVISIBLE,
    EDITABLE,
    PIXELS_ABOVE_LINES,
    PIXELS_BELOW_LINES,
    PIXELS_INSIDE_WRAP,
    BG_FULL_HEIGHT,
    RISE,
    UNDERLINE,
    STRIKETHROUGH,
    SIZE,
    SCALE,
    WEIGHT,
    LANGUAGE,
    FAMILY_NAME,
    BG_COLOR,
    FG_COLOR,
    BG_STIPPLE,
    FG_STIPPLE,
    WRAP_MODE,
    DIRECTION,
    JUSTIFICATION,
    STRETCH,
    VARIANT,
    STYLE,
    TEXT_POSITION,
    LAST_DEFINED,
}
enum TextBoundary {
    CHAR,
    WORD_START,
    WORD_END,
    SENTENCE_START,
    SENTENCE_END,
    LINE_START,
    LINE_END,
}
enum TextClipType {
    NONE,
    MIN,
    MAX,
    BOTH,
}
enum TextGranularity {
    CHAR,
    WORD,
    SENTENCE,
    LINE,
    PARAGRAPH,
}
enum ValueType {
    VERY_WEAK,
    WEAK,
    ACCEPTABLE,
    STRONG,
    VERY_STRONG,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    VERY_BAD,
    BAD,
    GOOD,
    VERY_GOOD,
    BEST,
    LAST_DEFINED,
}
enum HyperlinkStateFlags {
    INLINE,
}
const BINARY_AGE: number
const INTERFACE_AGE: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
const VERSION_MIN_REQUIRED: number
function attributeSetFree(attribSet: AttributeSet): void
function focusTrackerNotify(object: Object): void
function getBinaryAge(): number
function getDefaultRegistry(): Registry
function getFocusObject(): Object
function getInterfaceAge(): number
function getMajorVersion(): number
function getMicroVersion(): number
function getMinorVersion(): number
function getRoot(): Object
function getToolkitName(): string
function getToolkitVersion(): string
function getVersion(): string
function relationTypeForName(name: string): RelationType
function relationTypeGetName(type: RelationType): string
function relationTypeRegister(name: string): RelationType
function removeFocusTracker(trackerId: number): void
function removeGlobalEventListener(listenerId: number): void
function removeKeyEventListener(listenerId: number): void
function roleForName(name: string): Role
function roleGetLocalizedName(role: Role): string
function roleGetName(role: Role): string
function roleRegister(name: string): Role
function stateTypeForName(name: string): StateType
function stateTypeGetName(type: StateType): string
function stateTypeRegister(name: string): StateType
function textAttributeForName(name: string): TextAttribute
function textAttributeGetName(attr: TextAttribute): string
function textAttributeGetValue(attr: TextAttribute, index: number): string | null
function textAttributeRegister(name: string): TextAttribute
function textFreeRanges(ranges: TextRange[]): void
function valueTypeGetLocalizedName(valueType: ValueType): string
function valueTypeGetName(valueType: ValueType): string
interface EventListener {
    (obj: Object): void
}
interface EventListenerInit {
    (): void
}
interface FocusHandler {
    (object: Object, focusIn: boolean): void
}
interface Function {
    (): boolean
}
interface KeySnoopFunc {
    (event: KeyEventStruct): number
}
interface PropertyChangeHandler {
    (obj: Object, vals: PropertyValues): void
}
class Action {
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    static name: string
}
class Component {
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: CoordType): boolean
    getAlpha(): number
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getLayer(): Layer
    getMdiZorder(): number
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    setPosition(x: number, y: number, coordType: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    static name: string
}
class Document {
    /* Methods of Atk-1.0.Atk.Document */
    getAttributeValue(attributeName: string): string | null
    getAttributes(): AttributeSet
    getCurrentPageNumber(): number
    getDocument(): object | null
    getDocumentType(): string
    getLocale(): string
    getPageCount(): number
    setAttributeValue(attributeName: string, attributeValue: string): boolean
    /* Signals of Atk-1.0.Atk.Document */
    connect(sigName: "load-complete", callback: (() => void)): number
    on(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-complete"): void
    connect(sigName: "load-stopped", callback: (() => void)): number
    on(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-stopped"): void
    connect(sigName: "page-changed", callback: ((pageNumber: number) => void)): number
    on(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (pageNumber: number) => void): NodeJS.EventEmitter
    emit(sigName: "page-changed", pageNumber: number): void
    connect(sigName: "reload", callback: (() => void)): number
    on(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reload", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reload"): void
    static name: string
}
class EditableText {
    /* Methods of Atk-1.0.Atk.EditableText */
    copyText(startPos: number, endPos: number): void
    cutText(startPos: number, endPos: number): void
    deleteText(startPos: number, endPos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    setTextContents(string: string): void
    static name: string
}
class HyperlinkImpl {
    /* Methods of Atk-1.0.Atk.HyperlinkImpl */
    getHyperlink(): Hyperlink
    static name: string
}
class Hypertext {
    /* Methods of Atk-1.0.Atk.Hypertext */
    getLink(linkIndex: number): Hyperlink
    getLinkIndex(charIndex: number): number
    getNLinks(): number
    /* Signals of Atk-1.0.Atk.Hypertext */
    connect(sigName: "link-selected", callback: ((arg1: number) => void)): number
    on(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "link-selected", arg1: number): void
    static name: string
}
class Image {
    /* Methods of Atk-1.0.Atk.Image */
    getImageDescription(): string
    getImageLocale(): string | null
    getImagePosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getImageSize(): [ /* width */ number | null, /* height */ number | null ]
    setImageDescription(description: string): boolean
    static name: string
}
class ImplementorIface {
    static name: string
}
class Selection {
    /* Methods of Atk-1.0.Atk.Selection */
    addSelection(i: number): boolean
    clearSelection(): boolean
    getSelectionCount(): number
    isChildSelected(i: number): boolean
    refSelection(i: number): Object | null
    removeSelection(i: number): boolean
    selectAllSelection(): boolean
    /* Signals of Atk-1.0.Atk.Selection */
    connect(sigName: "selection-changed", callback: (() => void)): number
    on(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-changed"): void
    static name: string
}
class StreamableContent {
    /* Methods of Atk-1.0.Atk.StreamableContent */
    getMimeType(i: number): string
    getNMimeTypes(): number
    getStream(mimeType: string): GLib.IOChannel
    getUri(mimeType: string): string | null
    static name: string
}
class Table {
    /* Methods of Atk-1.0.Atk.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getCaption(): Object | null
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Object | null
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getRowAtIndex(index: number): number
    getRowDescription(row: number): string | null
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Object | null
    getSelectedColumns(selected: number): number
    getSelectedRows(selected: number): number
    getSummary(): Object
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    refAt(row: number, column: number): Object
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    setCaption(caption: Object): void
    setColumnDescription(column: number, description: string): void
    setColumnHeader(column: number, header: Object): void
    setRowDescription(row: number, description: string): void
    setRowHeader(row: number, header: Object): void
    setSummary(accessible: Object): void
    /* Signals of Atk-1.0.Atk.Table */
    connect(sigName: "column-deleted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    connect(sigName: "column-inserted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    connect(sigName: "column-reordered", callback: (() => void)): number
    on(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "column-reordered"): void
    connect(sigName: "model-changed", callback: (() => void)): number
    on(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "model-changed"): void
    connect(sigName: "row-deleted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    connect(sigName: "row-inserted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    connect(sigName: "row-reordered", callback: (() => void)): number
    on(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "row-reordered"): void
    static name: string
}
interface TableCell_ConstructProps extends Object_ConstructProps {
}
class TableCell {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.TableCell */
    getColumnHeaderCells(): Object[]
    getColumnSpan(): number
    getPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    getRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    getRowHeaderCells(): Object[]
    getRowSpan(): number
    getTable(): Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: TableCell_ConstructProps)
    _init (config?: TableCell_ConstructProps): void
    static $gtype: GObject.Type
}
class Text {
    /* Methods of Atk-1.0.Atk.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getDefaultAttributes(): AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, coordType: CoordType): /* rect */ TextRectangle
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    getSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Signals of Atk-1.0.Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (() => void)): number
    on(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-attributes-changed"): void
    connect(sigName: "text-caret-moved", callback: ((arg1: number) => void)): number
    on(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-caret-moved", arg1: number): void
    connect(sigName: "text-changed", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    connect(sigName: "text-insert", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-remove", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-selection-changed", callback: (() => void)): number
    on(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-selection-changed"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static freeRanges(ranges: TextRange[]): void
}
class Value {
    /* Methods of Atk-1.0.Atk.Value */
    getCurrentValue(): /* value */ any
    getIncrement(): number
    getMaximumValue(): /* value */ any
    getMinimumIncrement(): /* value */ any
    getMinimumValue(): /* value */ any
    getRange(): Range | null
    getSubRanges(): Range[]
    getValueAndText(): [ /* value */ number, /* text */ string | null ]
    setCurrentValue(value: any): boolean
    setValue(newValue: number): void
    /* Signals of Atk-1.0.Atk.Value */
    connect(sigName: "value-changed", callback: ((value: number, text: string) => void)): number
    on(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (value: number, text: string) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", value: number, text: string): void
    static name: string
}
interface Window_ConstructProps extends Object_ConstructProps {
}
class Window {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Signals of Atk-1.0.Atk.Window */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "create", callback: (() => void)): number
    on(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "create"): void
    connect(sigName: "deactivate", callback: (() => void)): number
    on(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deactivate"): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "maximize", callback: (() => void)): number
    on(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "maximize"): void
    connect(sigName: "minimize", callback: (() => void)): number
    on(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "minimize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "minimize"): void
    connect(sigName: "move", callback: (() => void)): number
    on(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "move"): void
    connect(sigName: "resize", callback: (() => void)): number
    on(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resize"): void
    connect(sigName: "restore", callback: (() => void)): number
    on(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restore", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restore"): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
interface GObjectAccessible_ConstructProps extends Object_ConstructProps {
}
class GObjectAccessible {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    getObject(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GObjectAccessible_ConstructProps)
    _init (config?: GObjectAccessible_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static forObject(obj: GObject.Object): Object
    static $gtype: GObject.Type
}
interface Hyperlink_ConstructProps extends GObject.Object_ConstructProps {
}
class Hyperlink {
    /* Properties of Atk-1.0.Atk.Hyperlink */
    readonly endIndex: number
    readonly numberOfAnchors: number
    readonly selectedLink: boolean
    readonly startIndex: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Hyperlink */
    getEndIndex(): number
    getNAnchors(): number
    getObject(i: number): Object
    getStartIndex(): number
    getUri(i: number): string
    isInline(): boolean
    isSelectedLink(): boolean
    isValid(): boolean
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Signals of Atk-1.0.Atk.Hyperlink */
    connect(sigName: "link-activated", callback: (() => void)): number
    on(sigName: "link-activated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-activated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-activated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "link-activated"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::end-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::end-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number-of-anchors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-of-anchors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number-of-anchors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected-link", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-link", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected-link", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.Type
}
interface Misc_ConstructProps extends GObject.Object_ConstructProps {
}
class Misc {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Misc */
    threadsEnter(): void
    threadsLeave(): void
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
    constructor (config?: Misc_ConstructProps)
    _init (config?: Misc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getInstance(): Misc
    static $gtype: GObject.Type
}
interface NoOpObject_ConstructProps extends Object_ConstructProps {
}
class NoOpObject {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    doAction(i: number): boolean
    getDescription(i: number): string | null
    getKeybinding(i: number): string | null
    getLocalizedName(i: number): string | null
    getNActions(): number
    getName(i: number): string | null
    setDescription(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: CoordType): boolean
    getAlpha(): number
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    setPosition(x: number, y: number, coordType: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Methods of Atk-1.0.Atk.Document */
    getAttributeValue(attributeName: string): string | null
    getCurrentPageNumber(): number
    getDocument(): object | null
    getDocumentType(): string
    getLocale(): string
    getPageCount(): number
    setAttributeValue(attributeName: string, attributeValue: string): boolean
    /* Methods of Atk-1.0.Atk.EditableText */
    copyText(startPos: number, endPos: number): void
    cutText(startPos: number, endPos: number): void
    deleteText(startPos: number, endPos: number): void
    insertText(string: string, length: number, position: number): void
    pasteText(position: number): void
    setRunAttributes(attribSet: AttributeSet, startOffset: number, endOffset: number): boolean
    setTextContents(string: string): void
    /* Methods of Atk-1.0.Atk.Hypertext */
    getLink(linkIndex: number): Hyperlink
    getLinkIndex(charIndex: number): number
    getNLinks(): number
    /* Methods of Atk-1.0.Atk.Image */
    getImageDescription(): string
    getImageLocale(): string | null
    getImagePosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getImageSize(): [ /* width */ number | null, /* height */ number | null ]
    setImageDescription(description: string): boolean
    /* Methods of Atk-1.0.Atk.Selection */
    addSelection(i: number): boolean
    clearSelection(): boolean
    getSelectionCount(): number
    isChildSelected(i: number): boolean
    refSelection(i: number): Object | null
    removeSelection(i: number): boolean
    selectAllSelection(): boolean
    /* Methods of Atk-1.0.Atk.Table */
    addColumnSelection(column: number): boolean
    addRowSelection(row: number): boolean
    getCaption(): Object | null
    getColumnAtIndex(index: number): number
    getColumnDescription(column: number): string
    getColumnExtentAt(row: number, column: number): number
    getColumnHeader(column: number): Object | null
    getIndexAt(row: number, column: number): number
    getNColumns(): number
    getNRows(): number
    getRowAtIndex(index: number): number
    getRowDescription(row: number): string | null
    getRowExtentAt(row: number, column: number): number
    getRowHeader(row: number): Object | null
    getSelectedColumns(selected: number): number
    getSelectedRows(selected: number): number
    getSummary(): Object
    isColumnSelected(column: number): boolean
    isRowSelected(row: number): boolean
    isSelected(row: number, column: number): boolean
    refAt(row: number, column: number): Object
    removeColumnSelection(column: number): boolean
    removeRowSelection(row: number): boolean
    setCaption(caption: Object): void
    setColumnDescription(column: number, description: string): void
    setColumnHeader(column: number, header: Object): void
    setRowDescription(row: number, description: string): void
    setRowHeader(row: number, header: Object): void
    setSummary(accessible: Object): void
    /* Methods of Atk-1.0.Atk.TableCell */
    getColumnHeaderCells(): Object[]
    getColumnSpan(): number
    getPosition(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    getRowColumnSpan(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    getRowHeaderCells(): Object[]
    getRowSpan(): number
    getTable(): Object
    /* Methods of Atk-1.0.Atk.Text */
    addSelection(startOffset: number, endOffset: number): boolean
    getBoundedRanges(rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType): TextRange[]
    getCaretOffset(): number
    getCharacterAtOffset(offset: number): number
    getCharacterCount(): number
    getCharacterExtents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getDefaultAttributes(): AttributeSet
    getNSelections(): number
    getOffsetAtPoint(x: number, y: number, coords: CoordType): number
    getRangeExtents(startOffset: number, endOffset: number, coordType: CoordType): /* rect */ TextRectangle
    getRunAttributes(offset: number): [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    getSelection(selectionNum: number): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getStringAtOffset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    getText(startOffset: number, endOffset: number): string
    getTextAfterOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextAtOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    getTextBeforeOffset(offset: number, boundaryType: TextBoundary): [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    removeSelection(selectionNum: number): boolean
    scrollSubstringTo(startOffset: number, endOffset: number, type: ScrollType): boolean
    scrollSubstringToPoint(startOffset: number, endOffset: number, coords: CoordType, x: number, y: number): boolean
    setCaretOffset(offset: number): boolean
    setSelection(selectionNum: number, startOffset: number, endOffset: number): boolean
    /* Methods of Atk-1.0.Atk.Value */
    getCurrentValue(): /* value */ any
    getIncrement(): number
    getMaximumValue(): /* value */ any
    getMinimumIncrement(): /* value */ any
    getMinimumValue(): /* value */ any
    getRange(): Range | null
    getSubRanges(): Range[]
    getValueAndText(): [ /* value */ number, /* text */ string | null ]
    setCurrentValue(value: any): boolean
    setValue(newValue: number): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    /* Signals of Atk-1.0.Atk.Document */
    connect(sigName: "load-complete", callback: (() => void)): number
    on(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-complete", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-complete", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-complete"): void
    connect(sigName: "load-stopped", callback: (() => void)): number
    on(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-stopped", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "load-stopped"): void
    connect(sigName: "page-changed", callback: ((pageNumber: number) => void)): number
    on(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-changed", callback: (pageNumber: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-changed", callback: (pageNumber: number) => void): NodeJS.EventEmitter
    emit(sigName: "page-changed", pageNumber: number): void
    connect(sigName: "reload", callback: (() => void)): number
    on(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reload", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reload", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reload"): void
    /* Signals of Atk-1.0.Atk.Hypertext */
    connect(sigName: "link-selected", callback: ((arg1: number) => void)): number
    on(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "link-selected", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "link-selected", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "link-selected", arg1: number): void
    /* Signals of Atk-1.0.Atk.Selection */
    connect(sigName: "selection-changed", callback: (() => void)): number
    on(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "selection-changed"): void
    /* Signals of Atk-1.0.Atk.Table */
    connect(sigName: "column-deleted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    connect(sigName: "column-inserted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    connect(sigName: "column-reordered", callback: (() => void)): number
    on(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "column-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "column-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "column-reordered"): void
    connect(sigName: "model-changed", callback: (() => void)): number
    on(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "model-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "model-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "model-changed"): void
    connect(sigName: "row-deleted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-deleted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    connect(sigName: "row-inserted", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-inserted", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    connect(sigName: "row-reordered", callback: (() => void)): number
    on(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "row-reordered", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "row-reordered", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "row-reordered"): void
    /* Signals of Atk-1.0.Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (() => void)): number
    on(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-attributes-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-attributes-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-attributes-changed"): void
    connect(sigName: "text-caret-moved", callback: ((arg1: number) => void)): number
    on(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-caret-moved", callback: (arg1: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-caret-moved", callback: (arg1: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-caret-moved", arg1: number): void
    connect(sigName: "text-changed", callback: ((arg1: number, arg2: number) => void)): number
    on(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-changed", callback: (arg1: number, arg2: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-changed", callback: (arg1: number, arg2: number) => void): NodeJS.EventEmitter
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    connect(sigName: "text-insert", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-insert", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-remove", callback: ((arg1: number, arg2: number, arg3: string) => void)): number
    on(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-remove", callback: (arg1: number, arg2: number, arg3: string) => void): NodeJS.EventEmitter
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-selection-changed", callback: (() => void)): number
    on(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "text-selection-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "text-selection-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "text-selection-changed"): void
    /* Signals of Atk-1.0.Atk.Value */
    connect(sigName: "value-changed", callback: ((value: number, text: string) => void)): number
    on(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (value: number, text: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (value: number, text: string) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", value: number, text: string): void
    /* Signals of Atk-1.0.Atk.Window */
    connect(sigName: "activate", callback: (() => void)): number
    on(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "activate"): void
    connect(sigName: "create", callback: (() => void)): number
    on(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "create"): void
    connect(sigName: "deactivate", callback: (() => void)): number
    on(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "deactivate"): void
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    connect(sigName: "maximize", callback: (() => void)): number
    on(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "maximize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "maximize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "maximize"): void
    connect(sigName: "minimize", callback: (() => void)): number
    on(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "minimize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "minimize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "minimize"): void
    connect(sigName: "move", callback: (() => void)): number
    on(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "move", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "move", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "move"): void
    connect(sigName: "resize", callback: (() => void)): number
    on(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resize"): void
    connect(sigName: "restore", callback: (() => void)): number
    on(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restore", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restore", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "restore"): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: NoOpObject_ConstructProps)
    _init (config?: NoOpObject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(obj: GObject.Object): NoOpObject
    static freeRanges(ranges: TextRange[]): void
    static $gtype: GObject.Type
}
interface NoOpObjectFactory_ConstructProps extends ObjectFactory_ConstructProps {
}
class NoOpObjectFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    constructor (config?: NoOpObjectFactory_ConstructProps)
    _init (config?: NoOpObjectFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NoOpObjectFactory
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Atk-1.0.Atk.Object */
    accessibleDescription?: string
    accessibleName?: string
    accessibleParent?: Object
    accessibleRole?: Role
    accessibleTableCaption?: string
    accessibleTableCaptionObject?: Object
    accessibleTableColumnDescription?: string
    accessibleTableColumnHeader?: Object
    accessibleTableRowDescription?: string
    accessibleTableRowHeader?: Object
    accessibleTableSummary?: Object
    accessibleValue?: number
}
class Object {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleParent: Object
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class ObjectFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    createAccessible(obj: GObject.Object): Object
    getAccessibleType(): GObject.Type
    invalidate(): void
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
    constructor (config?: ObjectFactory_ConstructProps)
    _init (config?: ObjectFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface Plug_ConstructProps extends Object_ConstructProps {
}
class Plug {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Plug */
    getId(): string
    setChild(child: Object): void
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: CoordType): boolean
    getAlpha(): number
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    setPosition(x: number, y: number, coordType: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Plug_ConstructProps)
    _init (config?: Plug_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Plug
    static $gtype: GObject.Type
}
interface Registry_ConstructProps extends GObject.Object_ConstructProps {
}
class Registry {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Registry */
    getFactory(type: GObject.Type): ObjectFactory
    getFactoryType(type: GObject.Type): GObject.Type
    setFactoryType(type: GObject.Type, factoryType: GObject.Type): void
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
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    static $gtype: GObject.Type
}
interface Relation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Atk-1.0.Atk.Relation */
    relationType?: RelationType
    target?: GObject.ValueArray
}
class Relation {
    /* Properties of Atk-1.0.Atk.Relation */
    relationType: RelationType
    target: GObject.ValueArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Relation */
    addTarget(target: Object): void
    getRelationType(): RelationType
    getTarget(): Object[]
    removeTarget(target: Object): boolean
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
    connect(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::relation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(targets: Object[], relationship: RelationType): Relation
    static $gtype: GObject.Type
}
interface RelationSet_ConstructProps extends GObject.Object_ConstructProps {
}
class RelationSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.RelationSet */
    add(relation: Relation): void
    addRelationByType(relationship: RelationType, target: Object): void
    contains(relationship: RelationType): boolean
    containsTarget(relationship: RelationType, target: Object): boolean
    getNRelations(): number
    getRelation(i: number): Relation
    getRelationByType(relationship: RelationType): Relation
    remove(relation: Relation): void
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
    constructor (config?: RelationSet_ConstructProps)
    _init (config?: RelationSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): RelationSet
    static $gtype: GObject.Type
}
interface Socket_ConstructProps extends Object_ConstructProps {
}
class Socket {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessibleComponentLayer: number
    readonly accessibleComponentMdiZorder: number
    accessibleDescription: string
    readonly accessibleHypertextNlinks: number
    accessibleName: string
    accessibleRole: Role
    accessibleTableCaption: string
    accessibleTableCaptionObject: Object
    accessibleTableColumnDescription: string
    accessibleTableColumnHeader: Object
    accessibleTableRowDescription: string
    accessibleTableRowHeader: Object
    accessibleTableSummary: Object
    accessibleValue: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessibleParent: Object
    readonly role: Role
    readonly relationSet: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Socket */
    embed(plugId: string): void
    isOccupied(): boolean
    /* Methods of Atk-1.0.Atk.Object */
    addRelationship(relationship: RelationType, target: Object): boolean
    getAccessibleId(): string
    getAttributes(): AttributeSet
    getDescription(): string
    getIndexInParent(): number
    getLayer(): Layer
    getMdiZorder(): number
    getNAccessibleChildren(): number
    getName(): string
    getObjectLocale(): string
    getParent(): Object
    getRole(): Role
    initialize(data?: object | null): void
    notifyStateChange(state: State, value: boolean): void
    peekParent(): Object
    refAccessibleChild(i: number): Object
    refRelationSet(): RelationSet
    refStateSet(): StateSet
    removePropertyChangeHandler(handlerId: number): void
    removeRelationship(relationship: RelationType, target: Object): boolean
    setAccessibleId(name: string): void
    setDescription(description: string): void
    setName(name: string): void
    setParent(parent: Object): void
    setRole(role: Role): void
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
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coordType: CoordType): boolean
    getAlpha(): number
    getExtents(coordType: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    getPosition(coordType: CoordType): [ /* x */ number | null, /* y */ number | null ]
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    grabFocus(): boolean
    refAccessibleAtPoint(x: number, y: number, coordType: CoordType): Object | null
    removeFocusHandler(handlerId: number): void
    scrollTo(type: ScrollType): boolean
    scrollToPoint(coords: CoordType, x: number, y: number): boolean
    setExtents(x: number, y: number, width: number, height: number, coordType: CoordType): boolean
    setPosition(x: number, y: number, coordType: CoordType): boolean
    setSize(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: ((arg1: Object) => void)): number
    on(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-descendant-changed", callback: (arg1: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-descendant-changed", callback: (arg1: Object) => void): NodeJS.EventEmitter
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: ((arg1: number, arg2: Object) => void)): number
    on(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "children-changed", callback: (arg1: number, arg2: Object) => void): NodeJS.EventEmitter
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: ((arg1: boolean) => void)): number
    on(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-event", callback: (arg1: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-event", callback: (arg1: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: ((arg1: PropertyValues) => void)): number
    on(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-change", callback: (arg1: PropertyValues) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-change", callback: (arg1: PropertyValues) => void): NodeJS.EventEmitter
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: ((arg1: string, arg2: boolean) => void)): number
    on(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-change", callback: (arg1: string, arg2: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (() => void)): number
    on(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible-data-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible-data-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: ((arg1: Rectangle) => void)): number
    on(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bounds-changed", callback: (arg1: Rectangle) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bounds-changed", callback: (arg1: Rectangle) => void): NodeJS.EventEmitter
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-component-mdi-zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-hypertext-nlinks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-caption-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-column-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-row-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-table-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::accessible-value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Socket_ConstructProps)
    _init (config?: Socket_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Socket
    static $gtype: GObject.Type
}
interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
class StateSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.StateSet */
    addState(type: StateType): boolean
    addStates(types: StateType[]): void
    andSets(compareSet: StateSet): StateSet
    clearStates(): void
    containsState(type: StateType): boolean
    containsStates(types: StateType[]): boolean
    isEmpty(): boolean
    orSets(compareSet: StateSet): StateSet | null
    removeState(type: StateType): boolean
    xorSets(compareSet: StateSet): StateSet
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
    constructor (config?: StateSet_ConstructProps)
    _init (config?: StateSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): StateSet
    static $gtype: GObject.Type
}
interface Util_ConstructProps extends GObject.Object_ConstructProps {
}
class Util {
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
    constructor (config?: Util_ConstructProps)
    _init (config?: Util_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ActionIface {
    /* Fields of Atk-1.0.Atk.ActionIface */
    readonly doAction: (action: Action, i: number) => boolean
    readonly getNActions: (action: Action) => number
    readonly getDescription: (action: Action, i: number) => string | null
    readonly getName: (action: Action, i: number) => string | null
    readonly getKeybinding: (action: Action, i: number) => string | null
    readonly setDescription: (action: Action, i: number, desc: string) => boolean
    readonly getLocalizedName: (action: Action, i: number) => string | null
    static name: string
}
class Attribute {
    /* Fields of Atk-1.0.Atk.Attribute */
    readonly name: string
    readonly value: string
    static name: string
    /* Static methods and pseudo-constructors */
    static setFree(attribSet: AttributeSet): void
}
abstract class ComponentIface {
    /* Fields of Atk-1.0.Atk.ComponentIface */
    readonly contains: (component: Component, x: number, y: number, coordType: CoordType) => boolean
    readonly refAccessibleAtPoint: (component: Component, x: number, y: number, coordType: CoordType) => Object | null
    readonly getExtents: (component: Component, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    readonly getPosition: (component: Component, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null ]
    readonly getSize: (component: Component) => [ /* width */ number | null, /* height */ number | null ]
    readonly grabFocus: (component: Component) => boolean
    readonly removeFocusHandler: (component: Component, handlerId: number) => void
    readonly setExtents: (component: Component, x: number, y: number, width: number, height: number, coordType: CoordType) => boolean
    readonly setPosition: (component: Component, x: number, y: number, coordType: CoordType) => boolean
    readonly setSize: (component: Component, width: number, height: number) => boolean
    readonly getLayer: (component: Component) => Layer
    readonly getMdiZorder: (component: Component) => number
    readonly boundsChanged: (component: Component, bounds: Rectangle) => void
    readonly getAlpha: (component: Component) => number
    readonly scrollTo: (component: Component, type: ScrollType) => boolean
    readonly scrollToPoint: (component: Component, coords: CoordType, x: number, y: number) => boolean
    static name: string
}
abstract class DocumentIface {
    /* Fields of Atk-1.0.Atk.DocumentIface */
    readonly parent: GObject.TypeInterface
    readonly getDocumentType: (document: Document) => string
    readonly getDocument: (document: Document) => object | null
    readonly getDocumentLocale: (document: Document) => string
    readonly getDocumentAttributes: (document: Document) => AttributeSet
    readonly getDocumentAttributeValue: (document: Document, attributeName: string) => string | null
    readonly setDocumentAttribute: (document: Document, attributeName: string, attributeValue: string) => boolean
    readonly getCurrentPageNumber: (document: Document) => number
    readonly getPageCount: (document: Document) => number
    static name: string
}
abstract class EditableTextIface {
    /* Fields of Atk-1.0.Atk.EditableTextIface */
    readonly parentInterface: GObject.TypeInterface
    readonly setRunAttributes: (text: EditableText, attribSet: AttributeSet, startOffset: number, endOffset: number) => boolean
    readonly setTextContents: (text: EditableText, string: string) => void
    readonly insertText: (text: EditableText, string: string, length: number, position: number) => void
    readonly copyText: (text: EditableText, startPos: number, endPos: number) => void
    readonly cutText: (text: EditableText, startPos: number, endPos: number) => void
    readonly deleteText: (text: EditableText, startPos: number, endPos: number) => void
    readonly pasteText: (text: EditableText, position: number) => void
    static name: string
}
abstract class GObjectAccessibleClass {
    /* Fields of Atk-1.0.Atk.GObjectAccessibleClass */
    readonly parentClass: ObjectClass
    readonly pad1: Function
    readonly pad2: Function
    static name: string
}
abstract class HyperlinkClass {
    /* Fields of Atk-1.0.Atk.HyperlinkClass */
    readonly parent: GObject.ObjectClass
    readonly getUri: (link: Hyperlink, i: number) => string
    readonly getObject: (link: Hyperlink, i: number) => Object
    readonly getEndIndex: (link: Hyperlink) => number
    readonly getStartIndex: (link: Hyperlink) => number
    readonly isValid: (link: Hyperlink) => boolean
    readonly getNAnchors: (link: Hyperlink) => number
    readonly linkState: (link: Hyperlink) => number
    readonly isSelectedLink: (link: Hyperlink) => boolean
    readonly linkActivated: (link: Hyperlink) => void
    readonly pad1: Function
    static name: string
}
abstract class HyperlinkImplIface {
    /* Fields of Atk-1.0.Atk.HyperlinkImplIface */
    readonly parent: GObject.TypeInterface
    readonly getHyperlink: (impl: HyperlinkImpl) => Hyperlink
    static name: string
}
abstract class HypertextIface {
    /* Fields of Atk-1.0.Atk.HypertextIface */
    readonly parent: GObject.TypeInterface
    readonly getLink: (hypertext: Hypertext, linkIndex: number) => Hyperlink
    readonly getNLinks: (hypertext: Hypertext) => number
    readonly getLinkIndex: (hypertext: Hypertext, charIndex: number) => number
    readonly linkSelected: (hypertext: Hypertext, linkIndex: number) => void
    static name: string
}
abstract class ImageIface {
    /* Fields of Atk-1.0.Atk.ImageIface */
    readonly parent: GObject.TypeInterface
    readonly getImagePosition: (image: Image, coordType: CoordType) => [ /* x */ number | null, /* y */ number | null ]
    readonly getImageDescription: (image: Image) => string
    readonly getImageSize: (image: Image) => [ /* width */ number | null, /* height */ number | null ]
    readonly setImageDescription: (image: Image, description: string) => boolean
    readonly getImageLocale: (image: Image) => string | null
    static name: string
}
class Implementor {
    /* Methods of Atk-1.0.Atk.Implementor */
    refAccessible(): Object
    static name: string
}
class KeyEventStruct {
    /* Fields of Atk-1.0.Atk.KeyEventStruct */
    readonly type: number
    readonly state: number
    readonly keyval: number
    readonly length: number
    readonly string: string
    readonly keycode: number
    readonly timestamp: number
    static name: string
}
abstract class MiscClass {
    /* Fields of Atk-1.0.Atk.MiscClass */
    readonly parent: GObject.ObjectClass
    readonly threadsEnter: (misc: Misc) => void
    readonly threadsLeave: (misc: Misc) => void
    readonly vfuncs: object[]
    static name: string
}
abstract class NoOpObjectClass {
    /* Fields of Atk-1.0.Atk.NoOpObjectClass */
    readonly parentClass: ObjectClass
    static name: string
}
abstract class NoOpObjectFactoryClass {
    /* Fields of Atk-1.0.Atk.NoOpObjectFactoryClass */
    readonly parentClass: ObjectFactoryClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of Atk-1.0.Atk.ObjectClass */
    readonly parent: GObject.ObjectClass
    readonly getName: (accessible: Object) => string
    readonly getDescription: (accessible: Object) => string
    readonly getParent: (accessible: Object) => Object
    readonly getNChildren: (accessible: Object) => number
    readonly getIndexInParent: (accessible: Object) => number
    readonly refRelationSet: (accessible: Object) => RelationSet
    readonly getRole: (accessible: Object) => Role
    readonly getLayer: (accessible: Object) => Layer
    readonly getMdiZorder: (accessible: Object) => number
    readonly refStateSet: (accessible: Object) => StateSet
    readonly setName: (accessible: Object, name: string) => void
    readonly setDescription: (accessible: Object, description: string) => void
    readonly setParent: (accessible: Object, parent: Object) => void
    readonly setRole: (accessible: Object, role: Role) => void
    readonly removePropertyChangeHandler: (accessible: Object, handlerId: number) => void
    readonly initialize: (accessible: Object, data?: object | null) => void
    readonly childrenChanged: (accessible: Object, changeIndex: number, changedChild?: object | null) => void
    readonly focusEvent: (accessible: Object, focusIn: boolean) => void
    readonly propertyChange: (accessible: Object, values: PropertyValues) => void
    readonly stateChange: (accessible: Object, name: string, stateSet: boolean) => void
    readonly visibleDataChanged: (accessible: Object) => void
    readonly activeDescendantChanged: (accessible: Object, child?: object | null) => void
    readonly getAttributes: (accessible: Object) => AttributeSet
    readonly getObjectLocale: (accessible: Object) => string
    readonly pad1: Function
    static name: string
}
abstract class ObjectFactoryClass {
    /* Fields of Atk-1.0.Atk.ObjectFactoryClass */
    readonly parentClass: GObject.ObjectClass
    readonly invalidate: (factory: ObjectFactory) => void
    readonly getAccessibleType: () => GObject.Type
    readonly pad1: Function
    readonly pad2: Function
    static name: string
}
abstract class PlugClass {
    /* Fields of Atk-1.0.Atk.PlugClass */
    readonly parentClass: ObjectClass
    readonly getObjectId: (obj: Plug) => string
    static name: string
}
class PropertyValues {
    /* Fields of Atk-1.0.Atk.PropertyValues */
    readonly propertyName: string
    readonly oldValue: any
    readonly newValue: any
    static name: string
}
class Range {
    /* Methods of Atk-1.0.Atk.Range */
    copy(): Range
    free(): void
    getDescription(): string
    getLowerLimit(): number
    getUpperLimit(): number
    static name: string
    static new(lowerLimit: number, upperLimit: number, description: string): Range
    constructor(lowerLimit: number, upperLimit: number, description: string)
    /* Static methods and pseudo-constructors */
    static new(lowerLimit: number, upperLimit: number, description: string): Range
}
class Rectangle {
    /* Fields of Atk-1.0.Atk.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
abstract class RegistryClass {
    /* Fields of Atk-1.0.Atk.RegistryClass */
    readonly parentClass: GObject.ObjectClass
    static name: string
}
abstract class RelationClass {
    /* Fields of Atk-1.0.Atk.RelationClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
abstract class RelationSetClass {
    /* Fields of Atk-1.0.Atk.RelationSetClass */
    readonly parent: GObject.ObjectClass
    readonly pad1: Function
    readonly pad2: Function
    static name: string
}
abstract class SelectionIface {
    /* Fields of Atk-1.0.Atk.SelectionIface */
    readonly parent: GObject.TypeInterface
    readonly addSelection: (selection: Selection, i: number) => boolean
    readonly clearSelection: (selection: Selection) => boolean
    readonly refSelection: (selection: Selection, i: number) => Object | null
    readonly getSelectionCount: (selection: Selection) => number
    readonly isChildSelected: (selection: Selection, i: number) => boolean
    readonly removeSelection: (selection: Selection, i: number) => boolean
    readonly selectAllSelection: (selection: Selection) => boolean
    readonly selectionChanged: (selection: Selection) => void
    static name: string
}
abstract class SocketClass {
    /* Fields of Atk-1.0.Atk.SocketClass */
    readonly parentClass: ObjectClass
    readonly embed: (obj: Socket, plugId: string) => void
    static name: string
}
abstract class StateSetClass {
    /* Fields of Atk-1.0.Atk.StateSetClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
abstract class StreamableContentIface {
    /* Fields of Atk-1.0.Atk.StreamableContentIface */
    readonly parent: GObject.TypeInterface
    readonly getNMimeTypes: (streamable: StreamableContent) => number
    readonly getMimeType: (streamable: StreamableContent, i: number) => string
    readonly getStream: (streamable: StreamableContent, mimeType: string) => GLib.IOChannel
    readonly getUri: (streamable: StreamableContent, mimeType: string) => string | null
    readonly pad1: Function
    readonly pad2: Function
    readonly pad3: Function
    static name: string
}
abstract class TableCellIface {
    /* Fields of Atk-1.0.Atk.TableCellIface */
    readonly getColumnSpan: (cell: TableCell) => number
    readonly getColumnHeaderCells: (cell: TableCell) => Object[]
    readonly getPosition: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    readonly getRowSpan: (cell: TableCell) => number
    readonly getRowHeaderCells: (cell: TableCell) => Object[]
    readonly getRowColumnSpan: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number, /* rowSpan */ number, /* columnSpan */ number ]
    readonly getTable: (cell: TableCell) => Object
    static name: string
}
abstract class TableIface {
    /* Fields of Atk-1.0.Atk.TableIface */
    readonly parent: GObject.TypeInterface
    readonly refAt: (table: Table, row: number, column: number) => Object
    readonly getIndexAt: (table: Table, row: number, column: number) => number
    readonly getColumnAtIndex: (table: Table, index: number) => number
    readonly getRowAtIndex: (table: Table, index: number) => number
    readonly getNColumns: (table: Table) => number
    readonly getNRows: (table: Table) => number
    readonly getColumnExtentAt: (table: Table, row: number, column: number) => number
    readonly getRowExtentAt: (table: Table, row: number, column: number) => number
    readonly getCaption: (table: Table) => Object | null
    readonly getColumnDescription: (table: Table, column: number) => string
    readonly getColumnHeader: (table: Table, column: number) => Object | null
    readonly getRowDescription: (table: Table, row: number) => string | null
    readonly getRowHeader: (table: Table, row: number) => Object | null
    readonly getSummary: (table: Table) => Object
    readonly setCaption: (table: Table, caption: Object) => void
    readonly setColumnDescription: (table: Table, column: number, description: string) => void
    readonly setColumnHeader: (table: Table, column: number, header: Object) => void
    readonly setRowDescription: (table: Table, row: number, description: string) => void
    readonly setRowHeader: (table: Table, row: number, header: Object) => void
    readonly setSummary: (table: Table, accessible: Object) => void
    readonly getSelectedColumns: (table: Table, selected: number) => number
    readonly getSelectedRows: (table: Table, selected: number) => number
    readonly isColumnSelected: (table: Table, column: number) => boolean
    readonly isRowSelected: (table: Table, row: number) => boolean
    readonly isSelected: (table: Table, row: number, column: number) => boolean
    readonly addRowSelection: (table: Table, row: number) => boolean
    readonly removeRowSelection: (table: Table, row: number) => boolean
    readonly addColumnSelection: (table: Table, column: number) => boolean
    readonly removeColumnSelection: (table: Table, column: number) => boolean
    readonly rowInserted: (table: Table, row: number, numInserted: number) => void
    readonly columnInserted: (table: Table, column: number, numInserted: number) => void
    readonly rowDeleted: (table: Table, row: number, numDeleted: number) => void
    readonly columnDeleted: (table: Table, column: number, numDeleted: number) => void
    readonly rowReordered: (table: Table) => void
    readonly columnReordered: (table: Table) => void
    readonly modelChanged: (table: Table) => void
    static name: string
}
abstract class TextIface {
    /* Fields of Atk-1.0.Atk.TextIface */
    readonly parent: GObject.TypeInterface
    readonly getText: (text: Text, startOffset: number, endOffset: number) => string
    readonly getTextAfterOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    readonly getTextAtOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    readonly getCharacterAtOffset: (text: Text, offset: number) => number
    readonly getTextBeforeOffset: (text: Text, offset: number, boundaryType: TextBoundary) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    readonly getCaretOffset: (text: Text) => number
    readonly getRunAttributes: (text: Text, offset: number) => [ /* returnType */ AttributeSet, /* startOffset */ number, /* endOffset */ number ]
    readonly getDefaultAttributes: (text: Text) => AttributeSet
    readonly getCharacterExtents: (text: Text, offset: number, coords: CoordType) => [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    readonly getCharacterCount: (text: Text) => number
    readonly getOffsetAtPoint: (text: Text, x: number, y: number, coords: CoordType) => number
    readonly getNSelections: (text: Text) => number
    readonly getSelection: (text: Text, selectionNum: number) => [ /* returnType */ string, /* startOffset */ number, /* endOffset */ number ]
    readonly addSelection: (text: Text, startOffset: number, endOffset: number) => boolean
    readonly removeSelection: (text: Text, selectionNum: number) => boolean
    readonly setSelection: (text: Text, selectionNum: number, startOffset: number, endOffset: number) => boolean
    readonly setCaretOffset: (text: Text, offset: number) => boolean
    readonly textChanged: (text: Text, position: number, length: number) => void
    readonly textCaretMoved: (text: Text, location: number) => void
    readonly textSelectionChanged: (text: Text) => void
    readonly textAttributesChanged: (text: Text) => void
    readonly getRangeExtents: (text: Text, startOffset: number, endOffset: number, coordType: CoordType) => /* rect */ TextRectangle
    readonly getBoundedRanges: (text: Text, rect: TextRectangle, coordType: CoordType, xClipType: TextClipType, yClipType: TextClipType) => TextRange[]
    readonly getStringAtOffset: (text: Text, offset: number, granularity: TextGranularity) => [ /* returnType */ string | null, /* startOffset */ number, /* endOffset */ number ]
    readonly scrollSubstringTo: (text: Text, startOffset: number, endOffset: number, type: ScrollType) => boolean
    readonly scrollSubstringToPoint: (text: Text, startOffset: number, endOffset: number, coords: CoordType, x: number, y: number) => boolean
    static name: string
}
class TextRange {
    /* Fields of Atk-1.0.Atk.TextRange */
    readonly bounds: TextRectangle
    readonly startOffset: number
    readonly endOffset: number
    readonly content: string
    static name: string
}
class TextRectangle {
    /* Fields of Atk-1.0.Atk.TextRectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    static name: string
}
abstract class UtilClass {
    /* Fields of Atk-1.0.Atk.UtilClass */
    readonly parent: GObject.ObjectClass
    readonly removeGlobalEventListener: (listenerId: number) => void
    readonly removeKeyEventListener: (listenerId: number) => void
    readonly getToolkitName: () => string
    readonly getToolkitVersion: () => string
    static name: string
}
abstract class ValueIface {
    /* Fields of Atk-1.0.Atk.ValueIface */
    readonly parent: GObject.TypeInterface
    readonly getCurrentValue: (obj: Value) => /* value */ any
    readonly getMaximumValue: (obj: Value) => /* value */ any
    readonly getMinimumValue: (obj: Value) => /* value */ any
    readonly setCurrentValue: (obj: Value, value: any) => boolean
    readonly getMinimumIncrement: (obj: Value) => /* value */ any
    readonly getValueAndText: (obj: Value) => [ /* value */ number, /* text */ string | null ]
    readonly getRange: (obj: Value) => Range | null
    readonly getIncrement: (obj: Value) => number
    readonly getSubRanges: (obj: Value) => Range[]
    readonly setValue: (obj: Value, newValue: number) => void
    static name: string
}
abstract class WindowIface {
    /* Fields of Atk-1.0.Atk.WindowIface */
    readonly parent: GObject.TypeInterface
    static name: string
}
    type AttributeSet = any[]
    type State = number
}
export default Atk;