/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Atk-1.0
 */

import type * as Gjs from './Gjs';
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
function attribute_set_free(attrib_set: AttributeSet): void
function focus_tracker_notify(object: Object): void
function get_binary_age(): number
function get_default_registry(): Registry
function get_focus_object(): Object
function get_interface_age(): number
function get_major_version(): number
function get_micro_version(): number
function get_minor_version(): number
function get_root(): Object
function get_toolkit_name(): string
function get_toolkit_version(): string
function get_version(): string
function relation_type_for_name(name: string): RelationType
function relation_type_get_name(type: RelationType): string
function relation_type_register(name: string): RelationType
function remove_focus_tracker(tracker_id: number): void
function remove_global_event_listener(listener_id: number): void
function remove_key_event_listener(listener_id: number): void
function role_for_name(name: string): Role
function role_get_localized_name(role: Role): string
function role_get_name(role: Role): string
function role_register(name: string): Role
function state_type_for_name(name: string): StateType
function state_type_get_name(type: StateType): string
function state_type_register(name: string): StateType
function text_attribute_for_name(name: string): TextAttribute
function text_attribute_get_name(attr: TextAttribute): string
function text_attribute_get_value(attr: TextAttribute, index_: number): string | null
function text_attribute_register(name: string): TextAttribute
function text_free_ranges(ranges: TextRange[]): void
function value_type_get_localized_name(value_type: ValueType): string
function value_type_get_name(value_type: ValueType): string
interface EventListener {
    (obj: Object): void
}
interface EventListenerInit {
    (): void
}
interface FocusHandler {
    (object: Object, focus_in: boolean): void
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
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Virtual methods of Atk-1.0.Atk.Action */
    vfunc_do_action(i: number): boolean
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    vfunc_get_description(): string
    vfunc_get_keybinding(i: number): string | null
    vfunc_get_localized_name(i: number): string | null
    vfunc_get_n_actions(): number
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    vfunc_get_name(): string
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    vfunc_set_description(description: string): void
    static name: string
}
class Component {
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    get_alpha(): number
    get_extents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_layer(): Layer
    get_mdi_zorder(): number
    get_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    remove_focus_handler(handler_id: number): void
    scroll_to(type: ScrollType): boolean
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    set_position(x: number, y: number, coord_type: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Component */
    vfunc_bounds_changed(bounds: Rectangle): void
    vfunc_contains(x: number, y: number, coord_type: CoordType): boolean
    vfunc_get_alpha(): number
    vfunc_get_extents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_grab_focus(): boolean
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    vfunc_remove_focus_handler(handler_id: number): void
    vfunc_scroll_to(type: ScrollType): boolean
    vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean
    vfunc_set_size(width: number, height: number): boolean
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Component, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Component, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    static name: string
}
class Document {
    /* Methods of Atk-1.0.Atk.Document */
    get_attribute_value(attribute_name: string): string | null
    get_attributes(): AttributeSet
    get_current_page_number(): number
    get_document(): object | null
    get_document_type(): string
    get_locale(): string
    get_page_count(): number
    set_attribute_value(attribute_name: string, attribute_value: string): boolean
    /* Virtual methods of Atk-1.0.Atk.Document */
    vfunc_get_current_page_number(): number
    vfunc_get_document(): object | null
    vfunc_get_document_attribute_value(attribute_name: string): string | null
    vfunc_get_document_attributes(): AttributeSet
    vfunc_get_document_locale(): string
    vfunc_get_document_type(): string
    vfunc_get_page_count(): number
    vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean
    /* Signals of Atk-1.0.Atk.Document */
    connect(sigName: "load-complete", callback: (($obj: Document) => void)): number
    connect_after(sigName: "load-complete", callback: (($obj: Document) => void)): number
    emit(sigName: "load-complete"): void
    connect(sigName: "load-stopped", callback: (($obj: Document) => void)): number
    connect_after(sigName: "load-stopped", callback: (($obj: Document) => void)): number
    emit(sigName: "load-stopped"): void
    connect(sigName: "page-changed", callback: (($obj: Document, page_number: number) => void)): number
    connect_after(sigName: "page-changed", callback: (($obj: Document, page_number: number) => void)): number
    emit(sigName: "page-changed", page_number: number): void
    connect(sigName: "reload", callback: (($obj: Document) => void)): number
    connect_after(sigName: "reload", callback: (($obj: Document) => void)): number
    emit(sigName: "reload"): void
    static name: string
}
class EditableText {
    /* Methods of Atk-1.0.Atk.EditableText */
    copy_text(start_pos: number, end_pos: number): void
    cut_text(start_pos: number, end_pos: number): void
    delete_text(start_pos: number, end_pos: number): void
    insert_text(string: string, length: number, position: number): void
    paste_text(position: number): void
    set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    set_text_contents(string: string): void
    /* Virtual methods of Atk-1.0.Atk.EditableText */
    vfunc_copy_text(start_pos: number, end_pos: number): void
    vfunc_cut_text(start_pos: number, end_pos: number): void
    vfunc_delete_text(start_pos: number, end_pos: number): void
    vfunc_insert_text(string: string, length: number, position: number): void
    vfunc_paste_text(position: number): void
    vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    vfunc_set_text_contents(string: string): void
    static name: string
}
class HyperlinkImpl {
    /* Methods of Atk-1.0.Atk.HyperlinkImpl */
    get_hyperlink(): Hyperlink
    /* Virtual methods of Atk-1.0.Atk.HyperlinkImpl */
    vfunc_get_hyperlink(): Hyperlink
    static name: string
}
class Hypertext {
    /* Methods of Atk-1.0.Atk.Hypertext */
    get_link(link_index: number): Hyperlink
    get_link_index(char_index: number): number
    get_n_links(): number
    /* Virtual methods of Atk-1.0.Atk.Hypertext */
    vfunc_get_link(link_index: number): Hyperlink
    vfunc_get_link_index(char_index: number): number
    vfunc_get_n_links(): number
    vfunc_link_selected(link_index: number): void
    /* Signals of Atk-1.0.Atk.Hypertext */
    connect(sigName: "link-selected", callback: (($obj: Hypertext, arg1: number) => void)): number
    connect_after(sigName: "link-selected", callback: (($obj: Hypertext, arg1: number) => void)): number
    emit(sigName: "link-selected", arg1: number): void
    static name: string
}
class Image {
    /* Methods of Atk-1.0.Atk.Image */
    get_image_description(): string
    get_image_locale(): string | null
    get_image_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_image_size(): [ /* width */ number | null, /* height */ number | null ]
    set_image_description(description: string): boolean
    /* Virtual methods of Atk-1.0.Atk.Image */
    vfunc_get_image_description(): string
    vfunc_get_image_locale(): string | null
    vfunc_get_image_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_image_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_set_image_description(description: string): boolean
    static name: string
}
class ImplementorIface {
    static name: string
}
class Selection {
    /* Methods of Atk-1.0.Atk.Selection */
    add_selection(i: number): boolean
    clear_selection(): boolean
    get_selection_count(): number
    is_child_selected(i: number): boolean
    ref_selection(i: number): Object | null
    remove_selection(i: number): boolean
    select_all_selection(): boolean
    /* Virtual methods of Atk-1.0.Atk.Selection */
    vfunc_add_selection(i: number): boolean
    /* Function overloads */
    vfunc_add_selection(start_offset: number, end_offset: number): boolean
    vfunc_clear_selection(): boolean
    vfunc_get_selection_count(): number
    vfunc_is_child_selected(i: number): boolean
    vfunc_ref_selection(i: number): Object | null
    vfunc_remove_selection(i: number): boolean
    /* Function overloads */
    vfunc_remove_selection(selection_num: number): boolean
    vfunc_select_all_selection(): boolean
    vfunc_selection_changed(): void
    /* Signals of Atk-1.0.Atk.Selection */
    connect(sigName: "selection-changed", callback: (($obj: Selection) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: Selection) => void)): number
    emit(sigName: "selection-changed"): void
    static name: string
}
class StreamableContent {
    /* Methods of Atk-1.0.Atk.StreamableContent */
    get_mime_type(i: number): string
    get_n_mime_types(): number
    get_stream(mime_type: string): GLib.IOChannel
    get_uri(mime_type: string): string | null
    /* Virtual methods of Atk-1.0.Atk.StreamableContent */
    vfunc_get_mime_type(i: number): string
    vfunc_get_n_mime_types(): number
    vfunc_get_stream(mime_type: string): GLib.IOChannel
    vfunc_get_uri(mime_type: string): string | null
    static name: string
}
class Table {
    /* Methods of Atk-1.0.Atk.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_caption(): Object | null
    get_column_at_index(index_: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Object | null
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_row_at_index(index_: number): number
    get_row_description(row: number): string | null
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Object | null
    get_selected_columns(selected: number): number
    get_selected_rows(selected: number): number
    get_summary(): Object
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    ref_at(row: number, column: number): Object
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    set_caption(caption: Object): void
    set_column_description(column: number, description: string): void
    set_column_header(column: number, header: Object): void
    set_row_description(row: number, description: string): void
    set_row_header(row: number, header: Object): void
    set_summary(accessible: Object): void
    /* Virtual methods of Atk-1.0.Atk.Table */
    vfunc_add_column_selection(column: number): boolean
    vfunc_add_row_selection(row: number): boolean
    vfunc_column_deleted(column: number, num_deleted: number): void
    vfunc_column_inserted(column: number, num_inserted: number): void
    vfunc_column_reordered(): void
    vfunc_get_caption(): Object | null
    vfunc_get_column_at_index(index_: number): number
    vfunc_get_column_description(column: number): string
    vfunc_get_column_extent_at(row: number, column: number): number
    vfunc_get_column_header(column: number): Object | null
    vfunc_get_index_at(row: number, column: number): number
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_row_at_index(index_: number): number
    vfunc_get_row_description(row: number): string | null
    vfunc_get_row_extent_at(row: number, column: number): number
    vfunc_get_row_header(row: number): Object | null
    vfunc_get_selected_columns(selected: number): number
    vfunc_get_selected_rows(selected: number): number
    vfunc_get_summary(): Object
    vfunc_is_column_selected(column: number): boolean
    vfunc_is_row_selected(row: number): boolean
    vfunc_is_selected(row: number, column: number): boolean
    vfunc_model_changed(): void
    vfunc_ref_at(row: number, column: number): Object
    vfunc_remove_column_selection(column: number): boolean
    vfunc_remove_row_selection(row: number): boolean
    vfunc_row_deleted(row: number, num_deleted: number): void
    vfunc_row_inserted(row: number, num_inserted: number): void
    vfunc_row_reordered(): void
    vfunc_set_caption(caption: Object): void
    vfunc_set_column_description(column: number, description: string): void
    vfunc_set_column_header(column: number, header: Object): void
    vfunc_set_row_description(row: number, description: string): void
    vfunc_set_row_header(row: number, header: Object): void
    vfunc_set_summary(accessible: Object): void
    /* Signals of Atk-1.0.Atk.Table */
    connect(sigName: "column-deleted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-deleted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    connect(sigName: "column-inserted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-inserted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    connect(sigName: "column-reordered", callback: (($obj: Table) => void)): number
    connect_after(sigName: "column-reordered", callback: (($obj: Table) => void)): number
    emit(sigName: "column-reordered"): void
    connect(sigName: "model-changed", callback: (($obj: Table) => void)): number
    connect_after(sigName: "model-changed", callback: (($obj: Table) => void)): number
    emit(sigName: "model-changed"): void
    connect(sigName: "row-deleted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    connect(sigName: "row-inserted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: Table, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    connect(sigName: "row-reordered", callback: (($obj: Table) => void)): number
    connect_after(sigName: "row-reordered", callback: (($obj: Table) => void)): number
    emit(sigName: "row-reordered"): void
    static name: string
}
interface TableCell_ConstructProps extends Object_ConstructProps {
}
class TableCell {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Role
    accessible_table_caption: string
    accessible_table_caption_object: Object
    accessible_table_column_description: string
    accessible_table_column_header: Object
    accessible_table_row_description: string
    accessible_table_row_header: Object
    accessible_table_summary: Object
    accessible_value: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessible_parent: Object
    readonly role: Role
    readonly relation_set: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.TableCell */
    get_column_header_cells(): Object[]
    get_column_span(): number
    get_position(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    get_row_column_span(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Object[]
    get_row_span(): number
    get_table(): Object
    /* Methods of Atk-1.0.Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_accessible_id(): string
    get_attributes(): AttributeSet
    get_description(): string
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data?: object | null): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): void
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
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
    /* Virtual methods of Atk-1.0.Atk.TableCell */
    vfunc_get_column_header_cells(): Object[]
    vfunc_get_column_span(): number
    vfunc_get_position(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    vfunc_get_row_column_span(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    vfunc_get_row_header_cells(): Object[]
    vfunc_get_row_span(): number
    vfunc_get_table(): Object
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): AttributeSet
    vfunc_get_description(): string
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Object
    vfunc_get_role(): Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: PropertyValues): void
    vfunc_ref_relation_set(): RelationSet
    vfunc_ref_state_set(): StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): void
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Object): void
    vfunc_set_role(role: Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: TableCell, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: TableCell, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: (($obj: TableCell, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: TableCell, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: (($obj: TableCell, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: TableCell, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: TableCell, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: TableCell, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: TableCell, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: TableCell, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: TableCell) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: TableCell) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TableCell_ConstructProps)
    _init (config?: TableCell_ConstructProps): void
    static $gtype: GObject.Type
}
class Text {
    /* Methods of Atk-1.0.Atk.Text */
    add_selection(start_offset: number, end_offset: number): boolean
    get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_default_attributes(): AttributeSet
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, coords: CoordType): number
    get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): /* rect */ TextRectangle
    get_run_attributes(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_string_at_offset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_at_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_before_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    remove_selection(selection_num: number): boolean
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    set_caret_offset(offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Text */
    vfunc_add_selection(start_offset: number, end_offset: number): boolean
    vfunc_get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    vfunc_get_caret_offset(): number
    vfunc_get_character_at_offset(offset: number): number
    vfunc_get_character_count(): number
    vfunc_get_character_extents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_default_attributes(): AttributeSet
    vfunc_get_n_selections(): number
    vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): /* rect */ TextRectangle
    vfunc_get_run_attributes(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text(start_offset: number, end_offset: number): string
    vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_remove_selection(selection_num: number): boolean
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    vfunc_scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    vfunc_set_caret_offset(offset: number): boolean
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    vfunc_text_attributes_changed(): void
    vfunc_text_caret_moved(location: number): void
    vfunc_text_changed(position: number, length: number): void
    vfunc_text_selection_changed(): void
    /* Signals of Atk-1.0.Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "text-attributes-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "text-attributes-changed"): void
    connect(sigName: "text-caret-moved", callback: (($obj: Text, arg1: number) => void)): number
    connect_after(sigName: "text-caret-moved", callback: (($obj: Text, arg1: number) => void)): number
    emit(sigName: "text-caret-moved", arg1: number): void
    connect(sigName: "text-changed", callback: (($obj: Text, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "text-changed", callback: (($obj: Text, arg1: number, arg2: number) => void)): number
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    connect(sigName: "text-insert", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-insert", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-remove", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-remove", callback: (($obj: Text, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-selection-changed", callback: (($obj: Text) => void)): number
    connect_after(sigName: "text-selection-changed", callback: (($obj: Text) => void)): number
    emit(sigName: "text-selection-changed"): void
    static name: string
    /* Static methods and pseudo-constructors */
    static free_ranges(ranges: TextRange[]): void
}
class Value {
    /* Methods of Atk-1.0.Atk.Value */
    get_current_value(): /* value */ any
    get_increment(): number
    get_maximum_value(): /* value */ any
    get_minimum_increment(): /* value */ any
    get_minimum_value(): /* value */ any
    get_range(): Range | null
    get_sub_ranges(): Range[]
    get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    set_current_value(value: any): boolean
    set_value(new_value: number): void
    /* Virtual methods of Atk-1.0.Atk.Value */
    vfunc_get_current_value(): /* value */ any
    vfunc_get_increment(): number
    vfunc_get_maximum_value(): /* value */ any
    vfunc_get_minimum_increment(): /* value */ any
    vfunc_get_minimum_value(): /* value */ any
    vfunc_get_range(): Range | null
    vfunc_get_sub_ranges(): Range[]
    vfunc_get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    vfunc_set_current_value(value: any): boolean
    vfunc_set_value(new_value: number): void
    /* Signals of Atk-1.0.Atk.Value */
    connect(sigName: "value-changed", callback: (($obj: Value, value: number, text: string) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: Value, value: number, text: string) => void)): number
    emit(sigName: "value-changed", value: number, text: string): void
    static name: string
}
interface Window_ConstructProps extends Object_ConstructProps {
}
class Window {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Role
    accessible_table_caption: string
    accessible_table_caption_object: Object
    accessible_table_column_description: string
    accessible_table_column_header: Object
    accessible_table_row_description: string
    accessible_table_row_header: Object
    accessible_table_summary: Object
    accessible_value: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessible_parent: Object
    readonly role: Role
    readonly relation_set: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_accessible_id(): string
    get_attributes(): AttributeSet
    get_description(): string
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data?: object | null): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): void
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
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
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): AttributeSet
    vfunc_get_description(): string
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Object
    vfunc_get_role(): Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: PropertyValues): void
    vfunc_ref_relation_set(): RelationSet
    vfunc_ref_state_set(): StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): void
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Object): void
    vfunc_set_role(role: Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Window */
    connect(sigName: "activate", callback: (($obj: Window) => void)): number
    connect_after(sigName: "activate", callback: (($obj: Window) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "create", callback: (($obj: Window) => void)): number
    connect_after(sigName: "create", callback: (($obj: Window) => void)): number
    emit(sigName: "create"): void
    connect(sigName: "deactivate", callback: (($obj: Window) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: Window) => void)): number
    emit(sigName: "deactivate"): void
    connect(sigName: "destroy", callback: (($obj: Window) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: Window) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "maximize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "maximize", callback: (($obj: Window) => void)): number
    emit(sigName: "maximize"): void
    connect(sigName: "minimize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "minimize", callback: (($obj: Window) => void)): number
    emit(sigName: "minimize"): void
    connect(sigName: "move", callback: (($obj: Window) => void)): number
    connect_after(sigName: "move", callback: (($obj: Window) => void)): number
    emit(sigName: "move"): void
    connect(sigName: "resize", callback: (($obj: Window) => void)): number
    connect_after(sigName: "resize", callback: (($obj: Window) => void)): number
    emit(sigName: "resize"): void
    connect(sigName: "restore", callback: (($obj: Window) => void)): number
    connect_after(sigName: "restore", callback: (($obj: Window) => void)): number
    emit(sigName: "restore"): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: Window, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Window, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: (($obj: Window, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Window, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: (($obj: Window, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Window, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: Window, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Window, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: Window, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Window, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: Window) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Window) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    static $gtype: GObject.Type
}
interface GObjectAccessible_ConstructProps extends Object_ConstructProps {
}
class GObjectAccessible {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Role
    accessible_table_caption: string
    accessible_table_caption_object: Object
    accessible_table_column_description: string
    accessible_table_column_header: Object
    accessible_table_row_description: string
    accessible_table_row_header: Object
    accessible_table_summary: Object
    accessible_value: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessible_parent: Object
    readonly role: Role
    readonly relation_set: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.GObjectAccessible */
    get_object(): GObject.Object
    /* Methods of Atk-1.0.Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_accessible_id(): string
    get_attributes(): AttributeSet
    get_description(): string
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data?: object | null): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): void
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
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
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): AttributeSet
    vfunc_get_description(): string
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Object
    vfunc_get_role(): Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: PropertyValues): void
    vfunc_ref_relation_set(): RelationSet
    vfunc_ref_state_set(): StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): void
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Object): void
    vfunc_set_role(role: Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: GObjectAccessible, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: GObjectAccessible, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: (($obj: GObjectAccessible, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: GObjectAccessible, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: (($obj: GObjectAccessible, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: GObjectAccessible, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: GObjectAccessible, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: GObjectAccessible, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: GObjectAccessible, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: GObjectAccessible, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: GObjectAccessible) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: GObjectAccessible) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: GObjectAccessible, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GObjectAccessible_ConstructProps)
    _init (config?: GObjectAccessible_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static for_object(obj: GObject.Object): Object
    static $gtype: GObject.Type
}
interface Hyperlink_ConstructProps extends GObject.Object_ConstructProps {
}
class Hyperlink {
    /* Properties of Atk-1.0.Atk.Hyperlink */
    readonly end_index: number
    readonly number_of_anchors: number
    readonly selected_link: boolean
    readonly start_index: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Hyperlink */
    get_end_index(): number
    get_n_anchors(): number
    get_object(i: number): Object
    get_start_index(): number
    get_uri(i: number): string
    is_inline(): boolean
    is_selected_link(): boolean
    is_valid(): boolean
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
    /* Methods of Atk-1.0.Atk.Action */
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Virtual methods of Atk-1.0.Atk.Hyperlink */
    vfunc_get_end_index(): number
    vfunc_get_n_anchors(): number
    vfunc_get_object(i: number): Object
    vfunc_get_start_index(): number
    vfunc_get_uri(i: number): string
    vfunc_is_selected_link(): boolean
    vfunc_is_valid(): boolean
    vfunc_link_activated(): void
    vfunc_link_state(): number
    vfunc_do_action(i: number): boolean
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    vfunc_get_description(): string
    vfunc_get_keybinding(i: number): string | null
    vfunc_get_localized_name(i: number): string | null
    vfunc_get_n_actions(): number
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    vfunc_get_name(): string
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    vfunc_set_description(description: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Hyperlink */
    connect(sigName: "link-activated", callback: (($obj: Hyperlink) => void)): number
    connect_after(sigName: "link-activated", callback: (($obj: Hyperlink) => void)): number
    emit(sigName: "link-activated"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::end-index", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::end-index", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number-of-anchors", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number-of-anchors", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected-link", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-link", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-index", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-index", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.Type
}
interface Misc_ConstructProps extends GObject.Object_ConstructProps {
}
class Misc {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Misc */
    threads_enter(): void
    threads_leave(): void
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
    /* Virtual methods of Atk-1.0.Atk.Misc */
    vfunc_threads_enter(): void
    vfunc_threads_leave(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Misc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Misc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Misc_ConstructProps)
    _init (config?: Misc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_instance(): Misc
    static $gtype: GObject.Type
}
interface NoOpObject_ConstructProps extends Object_ConstructProps {
}
class NoOpObject {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Role
    accessible_table_caption: string
    accessible_table_caption_object: Object
    accessible_table_column_description: string
    accessible_table_column_header: Object
    accessible_table_row_description: string
    accessible_table_row_header: Object
    accessible_table_summary: Object
    accessible_value: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessible_parent: Object
    readonly role: Role
    readonly relation_set: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_accessible_id(): string
    get_attributes(): AttributeSet
    get_description(): string
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data?: object | null): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): void
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
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
    /* Methods of Atk-1.0.Atk.Action */
    do_action(i: number): boolean
    get_description(i: number): string | null
    get_keybinding(i: number): string | null
    get_localized_name(i: number): string | null
    get_n_actions(): number
    get_name(i: number): string | null
    set_description(i: number, desc: string): boolean
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    get_alpha(): number
    get_extents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    remove_focus_handler(handler_id: number): void
    scroll_to(type: ScrollType): boolean
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    set_position(x: number, y: number, coord_type: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Methods of Atk-1.0.Atk.Document */
    get_attribute_value(attribute_name: string): string | null
    get_current_page_number(): number
    get_document(): object | null
    get_document_type(): string
    get_locale(): string
    get_page_count(): number
    set_attribute_value(attribute_name: string, attribute_value: string): boolean
    /* Methods of Atk-1.0.Atk.EditableText */
    copy_text(start_pos: number, end_pos: number): void
    cut_text(start_pos: number, end_pos: number): void
    delete_text(start_pos: number, end_pos: number): void
    insert_text(string: string, length: number, position: number): void
    paste_text(position: number): void
    set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    set_text_contents(string: string): void
    /* Methods of Atk-1.0.Atk.Hypertext */
    get_link(link_index: number): Hyperlink
    get_link_index(char_index: number): number
    get_n_links(): number
    /* Methods of Atk-1.0.Atk.Image */
    get_image_description(): string
    get_image_locale(): string | null
    get_image_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_image_size(): [ /* width */ number | null, /* height */ number | null ]
    set_image_description(description: string): boolean
    /* Methods of Atk-1.0.Atk.Selection */
    add_selection(i: number): boolean
    clear_selection(): boolean
    get_selection_count(): number
    is_child_selected(i: number): boolean
    ref_selection(i: number): Object | null
    remove_selection(i: number): boolean
    select_all_selection(): boolean
    /* Methods of Atk-1.0.Atk.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_caption(): Object | null
    get_column_at_index(index_: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Object | null
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_row_at_index(index_: number): number
    get_row_description(row: number): string | null
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Object | null
    get_selected_columns(selected: number): number
    get_selected_rows(selected: number): number
    get_summary(): Object
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    ref_at(row: number, column: number): Object
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    set_caption(caption: Object): void
    set_column_description(column: number, description: string): void
    set_column_header(column: number, header: Object): void
    set_row_description(row: number, description: string): void
    set_row_header(row: number, header: Object): void
    set_summary(accessible: Object): void
    /* Methods of Atk-1.0.Atk.TableCell */
    get_column_header_cells(): Object[]
    get_column_span(): number
    get_position(): [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    get_row_column_span(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Object[]
    get_row_span(): number
    get_table(): Object
    /* Methods of Atk-1.0.Atk.Text */
    add_selection(start_offset: number, end_offset: number): boolean
    get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_default_attributes(): AttributeSet
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, coords: CoordType): number
    get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): /* rect */ TextRectangle
    get_run_attributes(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_string_at_offset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_at_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    get_text_before_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    remove_selection(selection_num: number): boolean
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    set_caret_offset(offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Methods of Atk-1.0.Atk.Value */
    get_current_value(): /* value */ any
    get_increment(): number
    get_maximum_value(): /* value */ any
    get_minimum_increment(): /* value */ any
    get_minimum_value(): /* value */ any
    get_range(): Range | null
    get_sub_ranges(): Range[]
    get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    set_current_value(value: any): boolean
    set_value(new_value: number): void
    /* Virtual methods of Atk-1.0.Atk.NoOpObject */
    vfunc_do_action(i: number): boolean
    vfunc_get_description(i: number): string | null
    /* Function overloads */
    vfunc_get_description(): string
    vfunc_get_keybinding(i: number): string | null
    vfunc_get_localized_name(i: number): string | null
    vfunc_get_n_actions(): number
    vfunc_get_name(i: number): string | null
    /* Function overloads */
    vfunc_get_name(): string
    vfunc_set_description(i: number, desc: string): boolean
    /* Function overloads */
    vfunc_set_description(description: string): void
    vfunc_bounds_changed(bounds: Rectangle): void
    vfunc_contains(x: number, y: number, coord_type: CoordType): boolean
    vfunc_get_alpha(): number
    vfunc_get_extents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_grab_focus(): boolean
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    vfunc_remove_focus_handler(handler_id: number): void
    vfunc_scroll_to(type: ScrollType): boolean
    vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean
    vfunc_set_size(width: number, height: number): boolean
    vfunc_get_current_page_number(): number
    vfunc_get_document(): object | null
    vfunc_get_document_attribute_value(attribute_name: string): string | null
    vfunc_get_document_attributes(): AttributeSet
    vfunc_get_document_locale(): string
    vfunc_get_document_type(): string
    vfunc_get_page_count(): number
    vfunc_set_document_attribute(attribute_name: string, attribute_value: string): boolean
    vfunc_copy_text(start_pos: number, end_pos: number): void
    vfunc_cut_text(start_pos: number, end_pos: number): void
    vfunc_delete_text(start_pos: number, end_pos: number): void
    vfunc_insert_text(string: string, length: number, position: number): void
    vfunc_paste_text(position: number): void
    vfunc_set_run_attributes(attrib_set: AttributeSet, start_offset: number, end_offset: number): boolean
    vfunc_set_text_contents(string: string): void
    vfunc_get_link(link_index: number): Hyperlink
    vfunc_get_link_index(char_index: number): number
    vfunc_get_n_links(): number
    vfunc_link_selected(link_index: number): void
    vfunc_get_image_description(): string
    vfunc_get_image_locale(): string | null
    vfunc_get_image_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_image_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_set_image_description(description: string): boolean
    vfunc_add_selection(i: number): boolean
    /* Function overloads */
    vfunc_add_selection(start_offset: number, end_offset: number): boolean
    vfunc_clear_selection(): boolean
    vfunc_get_selection_count(): number
    vfunc_is_child_selected(i: number): boolean
    vfunc_ref_selection(i: number): Object | null
    vfunc_remove_selection(i: number): boolean
    /* Function overloads */
    vfunc_remove_selection(selection_num: number): boolean
    vfunc_select_all_selection(): boolean
    vfunc_selection_changed(): void
    vfunc_add_column_selection(column: number): boolean
    vfunc_add_row_selection(row: number): boolean
    vfunc_column_deleted(column: number, num_deleted: number): void
    vfunc_column_inserted(column: number, num_inserted: number): void
    vfunc_column_reordered(): void
    vfunc_get_caption(): Object | null
    vfunc_get_column_at_index(index_: number): number
    vfunc_get_column_description(column: number): string
    vfunc_get_column_extent_at(row: number, column: number): number
    vfunc_get_column_header(column: number): Object | null
    vfunc_get_index_at(row: number, column: number): number
    vfunc_get_n_columns(): number
    vfunc_get_n_rows(): number
    vfunc_get_row_at_index(index_: number): number
    vfunc_get_row_description(row: number): string | null
    vfunc_get_row_extent_at(row: number, column: number): number
    vfunc_get_row_header(row: number): Object | null
    vfunc_get_selected_columns(selected: number): number
    vfunc_get_selected_rows(selected: number): number
    vfunc_get_summary(): Object
    vfunc_is_column_selected(column: number): boolean
    vfunc_is_row_selected(row: number): boolean
    vfunc_is_selected(row: number, column: number): boolean
    vfunc_model_changed(): void
    vfunc_ref_at(row: number, column: number): Object
    vfunc_remove_column_selection(column: number): boolean
    vfunc_remove_row_selection(row: number): boolean
    vfunc_row_deleted(row: number, num_deleted: number): void
    vfunc_row_inserted(row: number, num_inserted: number): void
    vfunc_row_reordered(): void
    vfunc_set_caption(caption: Object): void
    vfunc_set_column_description(column: number, description: string): void
    vfunc_set_column_header(column: number, header: Object): void
    vfunc_set_row_description(row: number, description: string): void
    vfunc_set_row_header(row: number, header: Object): void
    vfunc_set_summary(accessible: Object): void
    vfunc_get_column_header_cells(): Object[]
    vfunc_get_column_span(): number
    vfunc_get_row_column_span(): [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    vfunc_get_row_header_cells(): Object[]
    vfunc_get_row_span(): number
    vfunc_get_table(): Object
    vfunc_get_bounded_ranges(rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType): TextRange[]
    vfunc_get_caret_offset(): number
    vfunc_get_character_at_offset(offset: number): number
    vfunc_get_character_count(): number
    vfunc_get_character_extents(offset: number, coords: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_default_attributes(): AttributeSet
    vfunc_get_n_selections(): number
    vfunc_get_offset_at_point(x: number, y: number, coords: CoordType): number
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: CoordType): /* rect */ TextRectangle
    vfunc_get_run_attributes(offset: number): [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_selection(selection_num: number): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_string_at_offset(offset: number, granularity: TextGranularity): [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text(start_offset: number, end_offset: number): string
    vfunc_get_text_after_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text_at_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_get_text_before_offset(offset: number, boundary_type: TextBoundary): [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    vfunc_scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    vfunc_set_caret_offset(offset: number): boolean
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    vfunc_text_attributes_changed(): void
    vfunc_text_caret_moved(location: number): void
    vfunc_text_changed(position: number, length: number): void
    vfunc_text_selection_changed(): void
    vfunc_get_current_value(): /* value */ any
    vfunc_get_increment(): number
    vfunc_get_maximum_value(): /* value */ any
    vfunc_get_minimum_increment(): /* value */ any
    vfunc_get_minimum_value(): /* value */ any
    vfunc_get_range(): Range | null
    vfunc_get_sub_ranges(): Range[]
    vfunc_get_value_and_text(): [ /* value */ number, /* text */ string | null ]
    vfunc_set_current_value(value: any): boolean
    vfunc_set_value(new_value: number): void
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): AttributeSet
    vfunc_get_description(): string
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Object
    vfunc_get_role(): Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: PropertyValues): void
    vfunc_ref_relation_set(): RelationSet
    vfunc_ref_state_set(): StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): void
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Object): void
    vfunc_set_role(role: Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: NoOpObject, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: NoOpObject, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: (($obj: NoOpObject, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: NoOpObject, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: (($obj: NoOpObject, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: NoOpObject, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: NoOpObject, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: NoOpObject, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: NoOpObject, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: NoOpObject, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: NoOpObject, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: NoOpObject, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    /* Signals of Atk-1.0.Atk.Document */
    connect(sigName: "load-complete", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "load-complete", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "load-complete"): void
    connect(sigName: "load-stopped", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "load-stopped", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "load-stopped"): void
    connect(sigName: "page-changed", callback: (($obj: NoOpObject, page_number: number) => void)): number
    connect_after(sigName: "page-changed", callback: (($obj: NoOpObject, page_number: number) => void)): number
    emit(sigName: "page-changed", page_number: number): void
    connect(sigName: "reload", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "reload", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "reload"): void
    /* Signals of Atk-1.0.Atk.Hypertext */
    connect(sigName: "link-selected", callback: (($obj: NoOpObject, arg1: number) => void)): number
    connect_after(sigName: "link-selected", callback: (($obj: NoOpObject, arg1: number) => void)): number
    emit(sigName: "link-selected", arg1: number): void
    /* Signals of Atk-1.0.Atk.Selection */
    connect(sigName: "selection-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "selection-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "selection-changed"): void
    /* Signals of Atk-1.0.Atk.Table */
    connect(sigName: "column-deleted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-deleted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-deleted", arg1: number, arg2: number): void
    connect(sigName: "column-inserted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "column-inserted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "column-inserted", arg1: number, arg2: number): void
    connect(sigName: "column-reordered", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "column-reordered", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "column-reordered"): void
    connect(sigName: "model-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "model-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "model-changed"): void
    connect(sigName: "row-deleted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-deleted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-deleted", arg1: number, arg2: number): void
    connect(sigName: "row-inserted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "row-inserted", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "row-inserted", arg1: number, arg2: number): void
    connect(sigName: "row-reordered", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "row-reordered", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "row-reordered"): void
    /* Signals of Atk-1.0.Atk.Text */
    connect(sigName: "text-attributes-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "text-attributes-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "text-attributes-changed"): void
    connect(sigName: "text-caret-moved", callback: (($obj: NoOpObject, arg1: number) => void)): number
    connect_after(sigName: "text-caret-moved", callback: (($obj: NoOpObject, arg1: number) => void)): number
    emit(sigName: "text-caret-moved", arg1: number): void
    connect(sigName: "text-changed", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "text-changed", callback: (($obj: NoOpObject, arg1: number, arg2: number) => void)): number
    emit(sigName: "text-changed", arg1: number, arg2: number): void
    connect(sigName: "text-insert", callback: (($obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-insert", callback: (($obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-insert", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-remove", callback: (($obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    connect_after(sigName: "text-remove", callback: (($obj: NoOpObject, arg1: number, arg2: number, arg3: string) => void)): number
    emit(sigName: "text-remove", arg1: number, arg2: number, arg3: string): void
    connect(sigName: "text-selection-changed", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "text-selection-changed", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "text-selection-changed"): void
    /* Signals of Atk-1.0.Atk.Value */
    connect(sigName: "value-changed", callback: (($obj: NoOpObject, value: number, text: string) => void)): number
    connect_after(sigName: "value-changed", callback: (($obj: NoOpObject, value: number, text: string) => void)): number
    emit(sigName: "value-changed", value: number, text: string): void
    /* Signals of Atk-1.0.Atk.Window */
    connect(sigName: "activate", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "activate", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "activate"): void
    connect(sigName: "create", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "create", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "create"): void
    connect(sigName: "deactivate", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "deactivate", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "deactivate"): void
    connect(sigName: "destroy", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "maximize", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "maximize", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "maximize"): void
    connect(sigName: "minimize", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "minimize", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "minimize"): void
    connect(sigName: "move", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "move", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "move"): void
    connect(sigName: "resize", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "resize", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "resize"): void
    connect(sigName: "restore", callback: (($obj: NoOpObject) => void)): number
    connect_after(sigName: "restore", callback: (($obj: NoOpObject) => void)): number
    emit(sigName: "restore"): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: NoOpObject, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NoOpObject_ConstructProps)
    _init (config?: NoOpObject_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(obj: GObject.Object): NoOpObject
    static free_ranges(ranges: TextRange[]): void
    static $gtype: GObject.Type
}
interface NoOpObjectFactory_ConstructProps extends ObjectFactory_ConstructProps {
}
class NoOpObjectFactory {
    /* Fields of Atk-1.0.Atk.ObjectFactory */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    create_accessible(obj: GObject.Object): Object
    get_accessible_type(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk-1.0.Atk.ObjectFactory */
    vfunc_invalidate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NoOpObjectFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NoOpObjectFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NoOpObjectFactory_ConstructProps)
    _init (config?: NoOpObjectFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): NoOpObjectFactory
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Atk-1.0.Atk.Object */
    accessible_description?: string
    accessible_name?: string
    accessible_parent?: Object
    accessible_role?: Role
    accessible_table_caption?: string
    accessible_table_caption_object?: Object
    accessible_table_column_description?: string
    accessible_table_column_header?: Object
    accessible_table_row_description?: string
    accessible_table_row_header?: Object
    accessible_table_summary?: Object
    accessible_value?: number
}
class Object {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_parent: Object
    accessible_role: Role
    accessible_table_caption: string
    accessible_table_caption_object: Object
    accessible_table_column_description: string
    accessible_table_column_header: Object
    accessible_table_row_description: string
    accessible_table_row_header: Object
    accessible_table_summary: Object
    accessible_value: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_accessible_id(): string
    get_attributes(): AttributeSet
    get_description(): string
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data?: object | null): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): void
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
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
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): AttributeSet
    vfunc_get_description(): string
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Object
    vfunc_get_role(): Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: PropertyValues): void
    vfunc_ref_relation_set(): RelationSet
    vfunc_ref_state_set(): StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): void
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Object): void
    vfunc_set_role(role: Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: Object, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Object, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: (($obj: Object, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Object, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: (($obj: Object, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Object, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: Object, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Object, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: Object, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Object, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: Object) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Object) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-parent", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-parent", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
interface ObjectFactory_ConstructProps extends GObject.Object_ConstructProps {
}
class ObjectFactory {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.ObjectFactory */
    create_accessible(obj: GObject.Object): Object
    get_accessible_type(): GObject.Type
    invalidate(): void
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
    /* Virtual methods of Atk-1.0.Atk.ObjectFactory */
    vfunc_invalidate(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ObjectFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ObjectFactory_ConstructProps)
    _init (config?: ObjectFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface Plug_ConstructProps extends Object_ConstructProps {
}
class Plug {
    /* Properties of Atk-1.0.Atk.Object */
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Role
    accessible_table_caption: string
    accessible_table_caption_object: Object
    accessible_table_column_description: string
    accessible_table_column_header: Object
    accessible_table_row_description: string
    accessible_table_row_header: Object
    accessible_table_summary: Object
    accessible_value: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessible_parent: Object
    readonly role: Role
    readonly relation_set: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Plug */
    get_id(): string
    set_child(child: Object): void
    /* Methods of Atk-1.0.Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_accessible_id(): string
    get_attributes(): AttributeSet
    get_description(): string
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data?: object | null): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): void
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
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
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    get_alpha(): number
    get_extents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    remove_focus_handler(handler_id: number): void
    scroll_to(type: ScrollType): boolean
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    set_position(x: number, y: number, coord_type: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Plug */
    vfunc_get_object_id(): string
    vfunc_bounds_changed(bounds: Rectangle): void
    vfunc_contains(x: number, y: number, coord_type: CoordType): boolean
    vfunc_get_alpha(): number
    vfunc_get_extents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_grab_focus(): boolean
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    vfunc_remove_focus_handler(handler_id: number): void
    vfunc_scroll_to(type: ScrollType): boolean
    vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): AttributeSet
    vfunc_get_description(): string
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Object
    vfunc_get_role(): Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: PropertyValues): void
    vfunc_ref_relation_set(): RelationSet
    vfunc_ref_state_set(): StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): void
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Object): void
    vfunc_set_role(role: Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: Plug, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Plug, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: (($obj: Plug, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Plug, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: (($obj: Plug, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Plug, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: Plug, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Plug, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: Plug, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Plug, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: Plug) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Plug) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Plug, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Plug, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Registry */
    get_factory(type: GObject.Type): ObjectFactory
    get_factory_type(type: GObject.Type): GObject.Type
    set_factory_type(type: GObject.Type, factory_type: GObject.Type): void
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
    connect(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Registry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    static $gtype: GObject.Type
}
interface Relation_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Atk-1.0.Atk.Relation */
    relation_type?: RelationType
    target?: GObject.ValueArray
}
class Relation {
    /* Properties of Atk-1.0.Atk.Relation */
    relation_type: RelationType
    target: GObject.ValueArray
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Relation */
    add_target(target: Object): void
    get_relation_type(): RelationType
    get_target(): Object[]
    remove_target(target: Object): boolean
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
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::relation-type", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::relation-type", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::target", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::target", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.RelationSet */
    add(relation: Relation): void
    add_relation_by_type(relationship: RelationType, target: Object): void
    contains(relationship: RelationType): boolean
    contains_target(relationship: RelationType, target: Object): boolean
    get_n_relations(): number
    get_relation(i: number): Relation
    get_relation_by_type(relationship: RelationType): Relation
    remove(relation: Relation): void
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
    connect(sigName: "notify", callback: (($obj: RelationSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RelationSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly accessible_component_layer: number
    readonly accessible_component_mdi_zorder: number
    accessible_description: string
    readonly accessible_hypertext_nlinks: number
    accessible_name: string
    accessible_role: Role
    accessible_table_caption: string
    accessible_table_caption_object: Object
    accessible_table_column_description: string
    accessible_table_column_header: Object
    accessible_table_row_description: string
    accessible_table_row_header: Object
    accessible_table_summary: Object
    accessible_value: number
    /* Fields of Atk-1.0.Atk.Object */
    readonly parent: GObject.Object
    readonly description: string
    readonly name: string
    readonly accessible_parent: Object
    readonly role: Role
    readonly relation_set: RelationSet
    readonly layer: Layer
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.Socket */
    embed(plug_id: string): void
    is_occupied(): boolean
    /* Methods of Atk-1.0.Atk.Object */
    add_relationship(relationship: RelationType, target: Object): boolean
    get_accessible_id(): string
    get_attributes(): AttributeSet
    get_description(): string
    get_index_in_parent(): number
    get_layer(): Layer
    get_mdi_zorder(): number
    get_n_accessible_children(): number
    get_name(): string
    get_object_locale(): string
    get_parent(): Object
    get_role(): Role
    initialize(data?: object | null): void
    notify_state_change(state: State, value: boolean): void
    peek_parent(): Object
    ref_accessible_child(i: number): Object
    ref_relation_set(): RelationSet
    ref_state_set(): StateSet
    remove_property_change_handler(handler_id: number): void
    remove_relationship(relationship: RelationType, target: Object): boolean
    set_accessible_id(name: string): void
    set_description(description: string): void
    set_name(name: string): void
    set_parent(parent: Object): void
    set_role(role: Role): void
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
    /* Methods of Atk-1.0.Atk.Component */
    contains(x: number, y: number, coord_type: CoordType): boolean
    get_alpha(): number
    get_extents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    get_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    grab_focus(): boolean
    ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    remove_focus_handler(handler_id: number): void
    scroll_to(type: ScrollType): boolean
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    set_position(x: number, y: number, coord_type: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Socket */
    vfunc_embed(plug_id: string): void
    vfunc_bounds_changed(bounds: Rectangle): void
    vfunc_contains(x: number, y: number, coord_type: CoordType): boolean
    vfunc_get_alpha(): number
    vfunc_get_extents(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_position(coord_type: CoordType): [ /* x */ number | null, /* y */ number | null ]
    vfunc_get_size(): [ /* width */ number | null, /* height */ number | null ]
    vfunc_grab_focus(): boolean
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: CoordType): Object | null
    vfunc_remove_focus_handler(handler_id: number): void
    vfunc_scroll_to(type: ScrollType): boolean
    vfunc_scroll_to_point(coords: CoordType, x: number, y: number): boolean
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: CoordType): boolean
    vfunc_set_position(x: number, y: number, coord_type: CoordType): boolean
    vfunc_set_size(width: number, height: number): boolean
    /* Virtual methods of Atk-1.0.Atk.Object */
    vfunc_active_descendant_changed(child?: object | null): void
    vfunc_children_changed(change_index: number, changed_child?: object | null): void
    vfunc_focus_event(focus_in: boolean): void
    vfunc_get_attributes(): AttributeSet
    vfunc_get_description(): string
    vfunc_get_index_in_parent(): number
    vfunc_get_layer(): Layer
    vfunc_get_mdi_zorder(): number
    vfunc_get_n_children(): number
    vfunc_get_name(): string
    vfunc_get_object_locale(): string
    vfunc_get_parent(): Object
    vfunc_get_role(): Role
    vfunc_initialize(data?: object | null): void
    vfunc_property_change(values: PropertyValues): void
    vfunc_ref_relation_set(): RelationSet
    vfunc_ref_state_set(): StateSet
    vfunc_remove_property_change_handler(handler_id: number): void
    vfunc_set_description(description: string): void
    vfunc_set_name(name: string): void
    vfunc_set_parent(parent: Object): void
    vfunc_set_role(role: Role): void
    vfunc_state_change(name: string, state_set: boolean): void
    vfunc_visible_data_changed(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Object */
    connect(sigName: "active-descendant-changed", callback: (($obj: Socket, arg1: Object) => void)): number
    connect_after(sigName: "active-descendant-changed", callback: (($obj: Socket, arg1: Object) => void)): number
    emit(sigName: "active-descendant-changed", arg1: Object): void
    connect(sigName: "children-changed", callback: (($obj: Socket, arg1: number, arg2: Object) => void)): number
    connect_after(sigName: "children-changed", callback: (($obj: Socket, arg1: number, arg2: Object) => void)): number
    emit(sigName: "children-changed", arg1: number, arg2: Object): void
    connect(sigName: "focus-event", callback: (($obj: Socket, arg1: boolean) => void)): number
    connect_after(sigName: "focus-event", callback: (($obj: Socket, arg1: boolean) => void)): number
    emit(sigName: "focus-event", arg1: boolean): void
    connect(sigName: "property-change", callback: (($obj: Socket, arg1: PropertyValues) => void)): number
    connect_after(sigName: "property-change", callback: (($obj: Socket, arg1: PropertyValues) => void)): number
    emit(sigName: "property-change", arg1: PropertyValues): void
    connect(sigName: "state-change", callback: (($obj: Socket, arg1: string, arg2: boolean) => void)): number
    connect_after(sigName: "state-change", callback: (($obj: Socket, arg1: string, arg2: boolean) => void)): number
    emit(sigName: "state-change", arg1: string, arg2: boolean): void
    connect(sigName: "visible-data-changed", callback: (($obj: Socket) => void)): number
    connect_after(sigName: "visible-data-changed", callback: (($obj: Socket) => void)): number
    emit(sigName: "visible-data-changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Atk-1.0.Atk.Component */
    connect(sigName: "bounds-changed", callback: (($obj: Socket, arg1: Rectangle) => void)): number
    connect_after(sigName: "bounds-changed", callback: (($obj: Socket, arg1: Rectangle) => void)): number
    emit(sigName: "bounds-changed", arg1: Rectangle): void
    connect(sigName: "notify::accessible-component-layer", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-layer", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-component-mdi-zorder", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-hypertext-nlinks", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-name", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-name", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-caption-object", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-caption-object", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-column-header", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-column-header", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-description", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-row-header", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-row-header", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-table-summary", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-table-summary", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-value", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-value", callback: (($obj: Socket, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atk-1.0.Atk.StateSet */
    add_state(type: StateType): boolean
    add_states(types: StateType[]): void
    and_sets(compare_set: StateSet): StateSet
    clear_states(): void
    contains_state(type: StateType): boolean
    contains_states(types: StateType[]): boolean
    is_empty(): boolean
    or_sets(compare_set: StateSet): StateSet | null
    remove_state(type: StateType): boolean
    xor_sets(compare_set: StateSet): StateSet
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
    connect(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    readonly g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Util, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Util, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Util_ConstructProps)
    _init (config?: Util_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class ActionIface {
    /* Fields of Atk-1.0.Atk.ActionIface */
    readonly do_action: (action: Action, i: number) => boolean
    readonly get_n_actions: (action: Action) => number
    readonly get_description: (action: Action, i: number) => string | null
    readonly get_name: (action: Action, i: number) => string | null
    readonly get_keybinding: (action: Action, i: number) => string | null
    readonly set_description: (action: Action, i: number, desc: string) => boolean
    readonly get_localized_name: (action: Action, i: number) => string | null
    static name: string
}
class Attribute {
    /* Fields of Atk-1.0.Atk.Attribute */
    readonly name: string
    readonly value: string
    static name: string
    /* Static methods and pseudo-constructors */
    static set_free(attrib_set: AttributeSet): void
}
abstract class ComponentIface {
    /* Fields of Atk-1.0.Atk.ComponentIface */
    readonly contains: (component: Component, x: number, y: number, coord_type: CoordType) => boolean
    readonly ref_accessible_at_point: (component: Component, x: number, y: number, coord_type: CoordType) => Object | null
    readonly get_extents: (component: Component, coord_type: CoordType) => [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    readonly get_position: (component: Component, coord_type: CoordType) => [ /* x */ number | null, /* y */ number | null ]
    readonly get_size: (component: Component) => [ /* width */ number | null, /* height */ number | null ]
    readonly grab_focus: (component: Component) => boolean
    readonly remove_focus_handler: (component: Component, handler_id: number) => void
    readonly set_extents: (component: Component, x: number, y: number, width: number, height: number, coord_type: CoordType) => boolean
    readonly set_position: (component: Component, x: number, y: number, coord_type: CoordType) => boolean
    readonly set_size: (component: Component, width: number, height: number) => boolean
    readonly get_layer: (component: Component) => Layer
    readonly get_mdi_zorder: (component: Component) => number
    readonly bounds_changed: (component: Component, bounds: Rectangle) => void
    readonly get_alpha: (component: Component) => number
    readonly scroll_to: (component: Component, type: ScrollType) => boolean
    readonly scroll_to_point: (component: Component, coords: CoordType, x: number, y: number) => boolean
    static name: string
}
abstract class DocumentIface {
    /* Fields of Atk-1.0.Atk.DocumentIface */
    readonly parent: GObject.TypeInterface
    readonly get_document_type: (document: Document) => string
    readonly get_document: (document: Document) => object | null
    readonly get_document_locale: (document: Document) => string
    readonly get_document_attributes: (document: Document) => AttributeSet
    readonly get_document_attribute_value: (document: Document, attribute_name: string) => string | null
    readonly set_document_attribute: (document: Document, attribute_name: string, attribute_value: string) => boolean
    readonly get_current_page_number: (document: Document) => number
    readonly get_page_count: (document: Document) => number
    static name: string
}
abstract class EditableTextIface {
    /* Fields of Atk-1.0.Atk.EditableTextIface */
    readonly parent_interface: GObject.TypeInterface
    readonly set_run_attributes: (text: EditableText, attrib_set: AttributeSet, start_offset: number, end_offset: number) => boolean
    readonly set_text_contents: (text: EditableText, string: string) => void
    readonly insert_text: (text: EditableText, string: string, length: number, position: number) => void
    readonly copy_text: (text: EditableText, start_pos: number, end_pos: number) => void
    readonly cut_text: (text: EditableText, start_pos: number, end_pos: number) => void
    readonly delete_text: (text: EditableText, start_pos: number, end_pos: number) => void
    readonly paste_text: (text: EditableText, position: number) => void
    static name: string
}
abstract class GObjectAccessibleClass {
    /* Fields of Atk-1.0.Atk.GObjectAccessibleClass */
    readonly parent_class: ObjectClass
    readonly pad1: Function
    readonly pad2: Function
    static name: string
}
abstract class HyperlinkClass {
    /* Fields of Atk-1.0.Atk.HyperlinkClass */
    readonly parent: GObject.ObjectClass
    readonly get_uri: (link_: Hyperlink, i: number) => string
    readonly get_object: (link_: Hyperlink, i: number) => Object
    readonly get_end_index: (link_: Hyperlink) => number
    readonly get_start_index: (link_: Hyperlink) => number
    readonly is_valid: (link_: Hyperlink) => boolean
    readonly get_n_anchors: (link_: Hyperlink) => number
    readonly link_state: (link_: Hyperlink) => number
    readonly is_selected_link: (link_: Hyperlink) => boolean
    readonly link_activated: (link_: Hyperlink) => void
    readonly pad1: Function
    static name: string
}
abstract class HyperlinkImplIface {
    /* Fields of Atk-1.0.Atk.HyperlinkImplIface */
    readonly parent: GObject.TypeInterface
    readonly get_hyperlink: (impl: HyperlinkImpl) => Hyperlink
    static name: string
}
abstract class HypertextIface {
    /* Fields of Atk-1.0.Atk.HypertextIface */
    readonly parent: GObject.TypeInterface
    readonly get_link: (hypertext: Hypertext, link_index: number) => Hyperlink
    readonly get_n_links: (hypertext: Hypertext) => number
    readonly get_link_index: (hypertext: Hypertext, char_index: number) => number
    readonly link_selected: (hypertext: Hypertext, link_index: number) => void
    static name: string
}
abstract class ImageIface {
    /* Fields of Atk-1.0.Atk.ImageIface */
    readonly parent: GObject.TypeInterface
    readonly get_image_position: (image: Image, coord_type: CoordType) => [ /* x */ number | null, /* y */ number | null ]
    readonly get_image_description: (image: Image) => string
    readonly get_image_size: (image: Image) => [ /* width */ number | null, /* height */ number | null ]
    readonly set_image_description: (image: Image, description: string) => boolean
    readonly get_image_locale: (image: Image) => string | null
    static name: string
}
class Implementor {
    /* Methods of Atk-1.0.Atk.Implementor */
    ref_accessible(): Object
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
    readonly threads_enter: (misc: Misc) => void
    readonly threads_leave: (misc: Misc) => void
    readonly vfuncs: object[]
    static name: string
}
abstract class NoOpObjectClass {
    /* Fields of Atk-1.0.Atk.NoOpObjectClass */
    readonly parent_class: ObjectClass
    static name: string
}
abstract class NoOpObjectFactoryClass {
    /* Fields of Atk-1.0.Atk.NoOpObjectFactoryClass */
    readonly parent_class: ObjectFactoryClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of Atk-1.0.Atk.ObjectClass */
    readonly parent: GObject.ObjectClass
    readonly get_name: (accessible: Object) => string
    readonly get_description: (accessible: Object) => string
    readonly get_parent: (accessible: Object) => Object
    readonly get_n_children: (accessible: Object) => number
    readonly get_index_in_parent: (accessible: Object) => number
    readonly ref_relation_set: (accessible: Object) => RelationSet
    readonly get_role: (accessible: Object) => Role
    readonly get_layer: (accessible: Object) => Layer
    readonly get_mdi_zorder: (accessible: Object) => number
    readonly ref_state_set: (accessible: Object) => StateSet
    readonly set_name: (accessible: Object, name: string) => void
    readonly set_description: (accessible: Object, description: string) => void
    readonly set_parent: (accessible: Object, parent: Object) => void
    readonly set_role: (accessible: Object, role: Role) => void
    readonly remove_property_change_handler: (accessible: Object, handler_id: number) => void
    readonly initialize: (accessible: Object, data?: object | null) => void
    readonly children_changed: (accessible: Object, change_index: number, changed_child?: object | null) => void
    readonly focus_event: (accessible: Object, focus_in: boolean) => void
    readonly property_change: (accessible: Object, values: PropertyValues) => void
    readonly state_change: (accessible: Object, name: string, state_set: boolean) => void
    readonly visible_data_changed: (accessible: Object) => void
    readonly active_descendant_changed: (accessible: Object, child?: object | null) => void
    readonly get_attributes: (accessible: Object) => AttributeSet
    readonly get_object_locale: (accessible: Object) => string
    readonly pad1: Function
    static name: string
}
abstract class ObjectFactoryClass {
    /* Fields of Atk-1.0.Atk.ObjectFactoryClass */
    readonly parent_class: GObject.ObjectClass
    readonly invalidate: (factory: ObjectFactory) => void
    readonly get_accessible_type: () => GObject.Type
    readonly pad1: Function
    readonly pad2: Function
    static name: string
}
abstract class PlugClass {
    /* Fields of Atk-1.0.Atk.PlugClass */
    readonly parent_class: ObjectClass
    readonly get_object_id: (obj: Plug) => string
    static name: string
}
class PropertyValues {
    /* Fields of Atk-1.0.Atk.PropertyValues */
    readonly property_name: string
    readonly old_value: any
    readonly new_value: any
    static name: string
}
class Range {
    /* Methods of Atk-1.0.Atk.Range */
    copy(): Range
    free(): void
    get_description(): string
    get_lower_limit(): number
    get_upper_limit(): number
    static name: string
    static new(lower_limit: number, upper_limit: number, description: string): Range
    constructor(lower_limit: number, upper_limit: number, description: string)
    /* Static methods and pseudo-constructors */
    static new(lower_limit: number, upper_limit: number, description: string): Range
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
    readonly parent_class: GObject.ObjectClass
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
    readonly add_selection: (selection: Selection, i: number) => boolean
    readonly clear_selection: (selection: Selection) => boolean
    readonly ref_selection: (selection: Selection, i: number) => Object | null
    readonly get_selection_count: (selection: Selection) => number
    readonly is_child_selected: (selection: Selection, i: number) => boolean
    readonly remove_selection: (selection: Selection, i: number) => boolean
    readonly select_all_selection: (selection: Selection) => boolean
    readonly selection_changed: (selection: Selection) => void
    static name: string
}
abstract class SocketClass {
    /* Fields of Atk-1.0.Atk.SocketClass */
    readonly parent_class: ObjectClass
    readonly embed: (obj: Socket, plug_id: string) => void
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
    readonly get_n_mime_types: (streamable: StreamableContent) => number
    readonly get_mime_type: (streamable: StreamableContent, i: number) => string
    readonly get_stream: (streamable: StreamableContent, mime_type: string) => GLib.IOChannel
    readonly get_uri: (streamable: StreamableContent, mime_type: string) => string | null
    readonly pad1: Function
    readonly pad2: Function
    readonly pad3: Function
    static name: string
}
abstract class TableCellIface {
    /* Fields of Atk-1.0.Atk.TableCellIface */
    readonly get_column_span: (cell: TableCell) => number
    readonly get_column_header_cells: (cell: TableCell) => Object[]
    readonly get_position: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number ]
    readonly get_row_span: (cell: TableCell) => number
    readonly get_row_header_cells: (cell: TableCell) => Object[]
    readonly get_row_column_span: (cell: TableCell) => [ /* returnType */ boolean, /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    readonly get_table: (cell: TableCell) => Object
    static name: string
}
abstract class TableIface {
    /* Fields of Atk-1.0.Atk.TableIface */
    readonly parent: GObject.TypeInterface
    readonly ref_at: (table: Table, row: number, column: number) => Object
    readonly get_index_at: (table: Table, row: number, column: number) => number
    readonly get_column_at_index: (table: Table, index_: number) => number
    readonly get_row_at_index: (table: Table, index_: number) => number
    readonly get_n_columns: (table: Table) => number
    readonly get_n_rows: (table: Table) => number
    readonly get_column_extent_at: (table: Table, row: number, column: number) => number
    readonly get_row_extent_at: (table: Table, row: number, column: number) => number
    readonly get_caption: (table: Table) => Object | null
    readonly get_column_description: (table: Table, column: number) => string
    readonly get_column_header: (table: Table, column: number) => Object | null
    readonly get_row_description: (table: Table, row: number) => string | null
    readonly get_row_header: (table: Table, row: number) => Object | null
    readonly get_summary: (table: Table) => Object
    readonly set_caption: (table: Table, caption: Object) => void
    readonly set_column_description: (table: Table, column: number, description: string) => void
    readonly set_column_header: (table: Table, column: number, header: Object) => void
    readonly set_row_description: (table: Table, row: number, description: string) => void
    readonly set_row_header: (table: Table, row: number, header: Object) => void
    readonly set_summary: (table: Table, accessible: Object) => void
    readonly get_selected_columns: (table: Table, selected: number) => number
    readonly get_selected_rows: (table: Table, selected: number) => number
    readonly is_column_selected: (table: Table, column: number) => boolean
    readonly is_row_selected: (table: Table, row: number) => boolean
    readonly is_selected: (table: Table, row: number, column: number) => boolean
    readonly add_row_selection: (table: Table, row: number) => boolean
    readonly remove_row_selection: (table: Table, row: number) => boolean
    readonly add_column_selection: (table: Table, column: number) => boolean
    readonly remove_column_selection: (table: Table, column: number) => boolean
    readonly row_inserted: (table: Table, row: number, num_inserted: number) => void
    readonly column_inserted: (table: Table, column: number, num_inserted: number) => void
    readonly row_deleted: (table: Table, row: number, num_deleted: number) => void
    readonly column_deleted: (table: Table, column: number, num_deleted: number) => void
    readonly row_reordered: (table: Table) => void
    readonly column_reordered: (table: Table) => void
    readonly model_changed: (table: Table) => void
    static name: string
}
abstract class TextIface {
    /* Fields of Atk-1.0.Atk.TextIface */
    readonly parent: GObject.TypeInterface
    readonly get_text: (text: Text, start_offset: number, end_offset: number) => string
    readonly get_text_after_offset: (text: Text, offset: number, boundary_type: TextBoundary) => [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    readonly get_text_at_offset: (text: Text, offset: number, boundary_type: TextBoundary) => [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    readonly get_character_at_offset: (text: Text, offset: number) => number
    readonly get_text_before_offset: (text: Text, offset: number, boundary_type: TextBoundary) => [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    readonly get_caret_offset: (text: Text) => number
    readonly get_run_attributes: (text: Text, offset: number) => [ /* returnType */ AttributeSet, /* start_offset */ number, /* end_offset */ number ]
    readonly get_default_attributes: (text: Text) => AttributeSet
    readonly get_character_extents: (text: Text, offset: number, coords: CoordType) => [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    readonly get_character_count: (text: Text) => number
    readonly get_offset_at_point: (text: Text, x: number, y: number, coords: CoordType) => number
    readonly get_n_selections: (text: Text) => number
    readonly get_selection: (text: Text, selection_num: number) => [ /* returnType */ string, /* start_offset */ number, /* end_offset */ number ]
    readonly add_selection: (text: Text, start_offset: number, end_offset: number) => boolean
    readonly remove_selection: (text: Text, selection_num: number) => boolean
    readonly set_selection: (text: Text, selection_num: number, start_offset: number, end_offset: number) => boolean
    readonly set_caret_offset: (text: Text, offset: number) => boolean
    readonly text_changed: (text: Text, position: number, length: number) => void
    readonly text_caret_moved: (text: Text, location: number) => void
    readonly text_selection_changed: (text: Text) => void
    readonly text_attributes_changed: (text: Text) => void
    readonly get_range_extents: (text: Text, start_offset: number, end_offset: number, coord_type: CoordType) => /* rect */ TextRectangle
    readonly get_bounded_ranges: (text: Text, rect: TextRectangle, coord_type: CoordType, x_clip_type: TextClipType, y_clip_type: TextClipType) => TextRange[]
    readonly get_string_at_offset: (text: Text, offset: number, granularity: TextGranularity) => [ /* returnType */ string | null, /* start_offset */ number, /* end_offset */ number ]
    readonly scroll_substring_to: (text: Text, start_offset: number, end_offset: number, type: ScrollType) => boolean
    readonly scroll_substring_to_point: (text: Text, start_offset: number, end_offset: number, coords: CoordType, x: number, y: number) => boolean
    static name: string
}
class TextRange {
    /* Fields of Atk-1.0.Atk.TextRange */
    readonly bounds: TextRectangle
    readonly start_offset: number
    readonly end_offset: number
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
    readonly remove_global_event_listener: (listener_id: number) => void
    readonly remove_key_event_listener: (listener_id: number) => void
    readonly get_toolkit_name: () => string
    readonly get_toolkit_version: () => string
    static name: string
}
abstract class ValueIface {
    /* Fields of Atk-1.0.Atk.ValueIface */
    readonly parent: GObject.TypeInterface
    readonly get_current_value: (obj: Value) => /* value */ any
    readonly get_maximum_value: (obj: Value) => /* value */ any
    readonly get_minimum_value: (obj: Value) => /* value */ any
    readonly set_current_value: (obj: Value, value: any) => boolean
    readonly get_minimum_increment: (obj: Value) => /* value */ any
    readonly get_value_and_text: (obj: Value) => [ /* value */ number, /* text */ string | null ]
    readonly get_range: (obj: Value) => Range | null
    readonly get_increment: (obj: Value) => number
    readonly get_sub_ranges: (obj: Value) => Range[]
    readonly set_value: (obj: Value, new_value: number) => void
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