/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Atspi-2.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type DBus from './DBus-1.0';

export namespace Atspi {

enum CollectionMatchType {
    INVALID,
    ALL,
    ANY,
    NONE,
    EMPTY,
    LAST_DEFINED,
}
enum CollectionSortOrder {
    INVALID,
    CANONICAL,
    FLOW,
    TAB,
    REVERSE_CANONICAL,
    REVERSE_FLOW,
    REVERSE_TAB,
    LAST_DEFINED,
}
enum CollectionTreeTraversalType {
    RESTRICT_CHILDREN,
    RESTRICT_SIBLING,
    INORDER,
    LAST_DEFINED,
}
enum ComponentLayer {
    INVALID,
    BACKGROUND,
    CANVAS,
    WIDGET,
    MDI,
    POPUP,
    OVERLAY,
    WINDOW,
    LAST_DEFINED,
}
enum CoordType {
    SCREEN,
    WINDOW,
    PARENT,
}
enum EventType {
    KEY_PRESSED_EVENT,
    KEY_RELEASED_EVENT,
    BUTTON_PRESSED_EVENT,
    BUTTON_RELEASED_EVENT,
}
enum KeyEventType {
    PRESSED,
    RELEASED,
}
enum KeySynthType {
    PRESS,
    RELEASE,
    PRESSRELEASE,
    SYM,
    STRING,
    LOCKMODIFIERS,
    UNLOCKMODIFIERS,
}
enum LocaleType {
    MESSAGES,
    COLLATE,
    CTYPE,
    MONETARY,
    NUMERIC,
    TIME,
}
enum ModifierType {
    SHIFT,
    SHIFTLOCK,
    CONTROL,
    ALT,
    META,
    META2,
    META3,
    NUMLOCK,
}
enum RelationType {
    NULL,
    LABEL_FOR,
    LABELLED_BY,
    CONTROLLER_FOR,
    CONTROLLED_BY,
    MEMBER_OF,
    TOOLTIP_FOR,
    NODE_CHILD_OF,
    NODE_PARENT_OF,
    EXTENDED,
    FLOWS_TO,
    FLOWS_FROM,
    SUBWINDOW_OF,
    EMBEDS,
    EMBEDDED_BY,
    POPUP_FOR,
    PARENT_WINDOW_OF,
    DESCRIPTION_FOR,
    DESCRIBED_BY,
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
    FOCUS_TRAVERSABLE,
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
    SPIN_BUTTON,
    SPLIT_PANE,
    STATUS_BAR,
    TABLE,
    TABLE_CELL,
    TABLE_COLUMN_HEADER,
    TABLE_ROW_HEADER,
    TEAROFF_MENU_ITEM,
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
    EXTENDED,
    HEADER,
    FOOTER,
    PARAGRAPH,
    RULER,
    APPLICATION,
    AUTOCOMPLETE,
    EDITBAR,
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
    STATIC,
    MATH_FRACTION,
    MATH_ROOT,
    SUBSCRIPT,
    SUPERSCRIPT,
    DESCRIPTION_LIST,
    DESCRIPTION_TERM,
    DESCRIPTION_VALUE,
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
    COLLAPSED,
    DEFUNCT,
    EDITABLE,
    ENABLED,
    EXPANDABLE,
    EXPANDED,
    FOCUSABLE,
    FOCUSED,
    HAS_TOOLTIP,
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
    REQUIRED,
    TRUNCATED,
    ANIMATED,
    INVALID_ENTRY,
    SUPPORTS_AUTOCOMPLETION,
    SELECTABLE_TEXT,
    IS_DEFAULT,
    VISITED,
    CHECKABLE,
    HAS_POPUP,
    READ_ONLY,
    LAST_DEFINED,
}
enum TextBoundaryType {
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
enum Cache {
    NONE,
    PARENT,
    CHILDREN,
    NAME,
    DESCRIPTION,
    STATES,
    ROLE,
    INTERFACES,
    ATTRIBUTES,
    ALL,
    DEFAULT,
    UNDEFINED,
}
enum KeyListenerSyncType {
    NOSYNC,
    SYNCHRONOUS,
    CANCONSUME,
    ALL_WINDOWS,
}
const COMPONENTLAYER_COUNT: number
const COORD_TYPE_COUNT: number
const DBUS_INTERFACE_ACCESSIBLE: string
const DBUS_INTERFACE_ACTION: string
const DBUS_INTERFACE_APPLICATION: string
const DBUS_INTERFACE_CACHE: string
const DBUS_INTERFACE_COLLECTION: string
const DBUS_INTERFACE_COMPONENT: string
const DBUS_INTERFACE_DEC: string
const DBUS_INTERFACE_DEVICE_EVENT_LISTENER: string
const DBUS_INTERFACE_DOCUMENT: string
const DBUS_INTERFACE_EDITABLE_TEXT: string
const DBUS_INTERFACE_EVENT_KEYBOARD: string
const DBUS_INTERFACE_EVENT_MOUSE: string
const DBUS_INTERFACE_EVENT_OBJECT: string
const DBUS_INTERFACE_EVENT_SCREEN_READER: string
const DBUS_INTERFACE_HYPERLINK: string
const DBUS_INTERFACE_HYPERTEXT: string
const DBUS_INTERFACE_IMAGE: string
const DBUS_INTERFACE_REGISTRY: string
const DBUS_INTERFACE_SELECTION: string
const DBUS_INTERFACE_SOCKET: string
const DBUS_INTERFACE_TABLE: string
const DBUS_INTERFACE_TABLE_CELL: string
const DBUS_INTERFACE_TEXT: string
const DBUS_INTERFACE_VALUE: string
const DBUS_NAME_REGISTRY: string
const DBUS_PATH_DEC: string
const DBUS_PATH_NULL: string
const DBUS_PATH_REGISTRY: string
const DBUS_PATH_ROOT: string
const DBUS_PATH_SCREEN_READER: string
const EVENTTYPE_COUNT: number
const KEYEVENTTYPE_COUNT: number
const KEYSYNTHTYPE_COUNT: number
const LOCALE_TYPE_COUNT: number
const MATCHTYPES_COUNT: number
const MODIFIERTYPE_COUNT: number
const RELATIONTYPE_COUNT: number
const ROLE_COUNT: number
const SCROLLTYPE_COUNT: number
const SORTORDER_COUNT: number
const STATETYPE_COUNT: number
const TEXT_BOUNDARY_TYPE_COUNT: number
const TEXT_CLIP_TYPE_COUNT: number
const TREETRAVERSALTYPE_COUNT: number
function deregister_device_event_listener(listener: DeviceListener, filter?: object | null): boolean
function deregister_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask): boolean
function event_main(): void
function event_quit(): void
function exit(): number
function generate_keyboard_event(keyval: number, keystring: string | null, synth_type: KeySynthType): boolean
function generate_mouse_event(x: number, y: number, name: string): boolean
function get_desktop(i: number): Accessible
function get_desktop_count(): number
function get_desktop_list(): Accessible[]
function init(): number
function is_initialized(): boolean
function register_device_event_listener(listener: DeviceListener, event_types: DeviceEventMask, filter?: object | null): boolean
function register_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask, sync_type: KeyListenerSyncType): boolean
function role_get_name(role: Role): string
function set_main_context(cnx: GLib.MainContext): void
function set_reference_window(accessible: Accessible): void
function set_timeout(val: number, startup_time: number): void
interface DeviceListenerCB {
    (stroke: DeviceEvent): boolean
}
interface DeviceListenerSimpleCB {
    (stroke: DeviceEvent): boolean
}
interface EventListenerCB {
    (event: Event): void
}
interface EventListenerSimpleCB {
    (event: Event): void
}
interface KeyCallback {
    (device: Device, pressed: boolean, keycode: number, keysym: number, modifiers: number, keystring: string): void
}
class Action {
    /* Methods of Atspi-2.0.Atspi.Action */
    do_action(i: number): boolean
    get_action_description(i: number): string
    get_key_binding(i: number): string
    get_localized_name(i: number): string
    get_n_actions(): number
    get_action_name(i: number): string
    static name: string
}
class Collection {
    /* Methods of Atspi-2.0.Atspi.Collection */
    get_active_descendant(): Accessible
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[]
    is_ancestor_of(test: Accessible): boolean
    static name: string
}
class Component {
    /* Methods of Atspi-2.0.Atspi.Component */
    contains(x: number, y: number, ctype: CoordType): boolean
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null
    get_alpha(): number
    get_extents(ctype: CoordType): Rect
    get_layer(): ComponentLayer
    get_mdi_z_order(): number
    get_position(ctype: CoordType): Point
    get_size(): Point
    grab_focus(): boolean
    scroll_to(type: ScrollType): boolean
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    set_position(x: number, y: number, ctype: CoordType): boolean
    set_size(width: number, height: number): boolean
    static name: string
}
class Document {
    /* Methods of Atspi-2.0.Atspi.Document */
    get_document_attribute_value(attribute: string): string
    get_document_attributes(): GLib.HashTable
    get_current_page_number(): number
    get_locale(): string
    get_page_count(): number
    static name: string
}
class EditableText {
    /* Methods of Atspi-2.0.Atspi.EditableText */
    copy_text(start_pos: number, end_pos: number): boolean
    cut_text(start_pos: number, end_pos: number): boolean
    delete_text(start_pos: number, end_pos: number): boolean
    insert_text(position: number, text: string, length: number): boolean
    paste_text(position: number): boolean
    set_text_contents(new_contents: string): boolean
    static name: string
}
class Hypertext {
    /* Methods of Atspi-2.0.Atspi.Hypertext */
    get_link(link_index: number): Hyperlink | null
    get_link_index(character_offset: number): number
    get_n_links(): number
    static name: string
}
class Image {
    /* Methods of Atspi-2.0.Atspi.Image */
    get_image_description(): string
    get_image_extents(ctype: CoordType): Rect
    get_image_locale(): string
    get_image_position(ctype: CoordType): Point
    get_image_size(): Point
    static name: string
}
class Selection {
    /* Methods of Atspi-2.0.Atspi.Selection */
    clear_selection(): boolean
    deselect_child(child_index: number): boolean
    deselect_selected_child(selected_child_index: number): boolean
    get_n_selected_children(): number
    get_selected_child(selected_child_index: number): Accessible
    is_child_selected(child_index: number): boolean
    select_all(): boolean
    select_child(child_index: number): boolean
    static name: string
}
class Table {
    /* Methods of Atspi-2.0.Atspi.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_accessible_at(row: number, column: number): Accessible
    get_caption(): Accessible
    get_column_at_index(index: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Accessible
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_n_selected_columns(): number
    get_n_selected_rows(): number
    get_row_at_index(index: number): number
    get_row_column_extents_at_index(index: number): [ /* returnType */ boolean, /* row */ number, /* col */ number, /* row_extents */ number, /* col_extents */ number, /* is_selected */ boolean ]
    get_row_description(row: number): string
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Accessible
    get_selected_columns(): number[]
    get_selected_rows(): number[]
    get_summary(): Accessible
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    static name: string
}
class TableCell {
    /* Methods of Atspi-2.0.Atspi.TableCell */
    get_column_header_cells(): Accessible[]
    get_column_index(): number
    get_column_span(): number
    get_position(): [ /* returnType */ number, /* row */ number, /* column */ number ]
    get_row_column_span(): [ /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Accessible[]
    get_row_span(): number
    get_table(): Accessible
    static name: string
}
class Text {
    /* Methods of Atspi-2.0.Atspi.Text */
    add_selection(start_offset: number, end_offset: number): boolean
    get_attribute_run(offset: number, include_defaults: boolean): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    get_text_attribute_value(offset: number, attribute_name: string): string | null
    get_text_attributes(offset: number): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, type: CoordType): Rect
    get_default_attributes(): GLib.HashTable
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, type: CoordType): number
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect
    get_selection(selection_num: number): Range
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange
    remove_selection(selection_num: number): boolean
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    set_caret_offset(new_offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    static name: string
}
class Value {
    /* Methods of Atspi-2.0.Atspi.Value */
    get_current_value(): number
    get_maximum_value(): number
    get_minimum_increment(): number
    get_minimum_value(): number
    set_current_value(new_value: number): boolean
    static name: string
}
interface Accessible_ConstructProps extends Object_ConstructProps {
}
class Accessible {
    /* Fields of Atspi-2.0.Atspi.Object */
    readonly parent: GObject.Object
    readonly app: Application
    readonly path: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Accessible */
    clear_cache(): void
    get_accessible_id(): string
    get_action_iface(): Action
    get_application(): Accessible
    get_atspi_version(): string
    get_attributes(): GLib.HashTable
    get_attributes_as_array(): string[]
    get_child_at_index(child_index: number): Accessible
    get_child_count(): number
    get_collection_iface(): Collection
    get_component_iface(): Component
    get_description(): string
    get_document_iface(): Document
    get_editable_text_iface(): EditableText
    get_hyperlink(): Hyperlink
    get_hypertext_iface(): Hypertext
    get_id(): number
    get_image_iface(): Image
    get_index_in_parent(): number
    get_interfaces(): string[]
    get_localized_role_name(): string
    get_name(): string
    get_object_locale(): string
    get_parent(): Accessible | null
    get_process_id(): number
    get_relation_set(): Relation[]
    get_role(): Role
    get_role_name(): string
    get_selection_iface(): Selection
    get_state_set(): StateSet
    get_table_iface(): Table
    get_table_cell(): TableCell
    get_text_iface(): Text
    get_toolkit_name(): string
    get_toolkit_version(): string
    get_value_iface(): Value
    set_cache_mask(mask: Cache): void
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
    /* Methods of Atspi-2.0.Atspi.Action */
    do_action(i: number): boolean
    get_action_description(i: number): string
    get_key_binding(i: number): string
    get_localized_name(i: number): string
    get_n_actions(): number
    get_action_name(i: number): string
    /* Methods of Atspi-2.0.Atspi.Collection */
    get_active_descendant(): Accessible
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[]
    is_ancestor_of(test: Accessible): boolean
    /* Methods of Atspi-2.0.Atspi.Component */
    contains(x: number, y: number, ctype: CoordType): boolean
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null
    get_alpha(): number
    get_extents(ctype: CoordType): Rect
    get_layer(): ComponentLayer
    get_mdi_z_order(): number
    get_position(ctype: CoordType): Point
    get_size(): Point
    grab_focus(): boolean
    scroll_to(type: ScrollType): boolean
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    set_position(x: number, y: number, ctype: CoordType): boolean
    set_size(width: number, height: number): boolean
    /* Methods of Atspi-2.0.Atspi.Document */
    get_document_attribute_value(attribute: string): string
    get_document_attributes(): GLib.HashTable
    get_current_page_number(): number
    get_locale(): string
    get_page_count(): number
    /* Methods of Atspi-2.0.Atspi.EditableText */
    copy_text(start_pos: number, end_pos: number): boolean
    cut_text(start_pos: number, end_pos: number): boolean
    delete_text(start_pos: number, end_pos: number): boolean
    insert_text(position: number, text: string, length: number): boolean
    paste_text(position: number): boolean
    set_text_contents(new_contents: string): boolean
    /* Methods of Atspi-2.0.Atspi.Hypertext */
    get_link(link_index: number): Hyperlink | null
    get_link_index(character_offset: number): number
    get_n_links(): number
    /* Methods of Atspi-2.0.Atspi.Image */
    get_image_description(): string
    get_image_extents(ctype: CoordType): Rect
    get_image_locale(): string
    get_image_position(ctype: CoordType): Point
    get_image_size(): Point
    /* Methods of Atspi-2.0.Atspi.Selection */
    clear_selection(): boolean
    deselect_child(child_index: number): boolean
    deselect_selected_child(selected_child_index: number): boolean
    get_n_selected_children(): number
    get_selected_child(selected_child_index: number): Accessible
    is_child_selected(child_index: number): boolean
    select_all(): boolean
    select_child(child_index: number): boolean
    /* Methods of Atspi-2.0.Atspi.Table */
    add_column_selection(column: number): boolean
    add_row_selection(row: number): boolean
    get_accessible_at(row: number, column: number): Accessible
    get_caption(): Accessible
    get_column_at_index(index: number): number
    get_column_description(column: number): string
    get_column_extent_at(row: number, column: number): number
    get_column_header(column: number): Accessible
    get_index_at(row: number, column: number): number
    get_n_columns(): number
    get_n_rows(): number
    get_n_selected_columns(): number
    get_n_selected_rows(): number
    get_row_at_index(index: number): number
    get_row_column_extents_at_index(index: number): [ /* returnType */ boolean, /* row */ number, /* col */ number, /* row_extents */ number, /* col_extents */ number, /* is_selected */ boolean ]
    get_row_description(row: number): string
    get_row_extent_at(row: number, column: number): number
    get_row_header(row: number): Accessible
    get_selected_columns(): number[]
    get_selected_rows(): number[]
    get_summary(): Accessible
    is_column_selected(column: number): boolean
    is_row_selected(row: number): boolean
    is_selected(row: number, column: number): boolean
    remove_column_selection(column: number): boolean
    remove_row_selection(row: number): boolean
    /* Methods of Atspi-2.0.Atspi.TableCell */
    get_column_header_cells(): Accessible[]
    get_column_index(): number
    get_column_span(): number
    get_position(): [ /* returnType */ number, /* row */ number, /* column */ number ]
    get_row_column_span(): [ /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    get_row_header_cells(): Accessible[]
    get_row_span(): number
    get_table(): Accessible
    /* Methods of Atspi-2.0.Atspi.Text */
    add_selection(start_offset: number, end_offset: number): boolean
    get_attribute_run(offset: number, include_defaults: boolean): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    get_text_attribute_value(offset: number, attribute_name: string): string | null
    get_text_attributes(offset: number): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    get_caret_offset(): number
    get_character_at_offset(offset: number): number
    get_character_count(): number
    get_character_extents(offset: number, type: CoordType): Rect
    get_default_attributes(): GLib.HashTable
    get_n_selections(): number
    get_offset_at_point(x: number, y: number, type: CoordType): number
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect
    get_selection(selection_num: number): Range
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange
    get_text(start_offset: number, end_offset: number): string
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange
    remove_selection(selection_num: number): boolean
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    set_caret_offset(new_offset: number): boolean
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Methods of Atspi-2.0.Atspi.Value */
    get_current_value(): number
    get_maximum_value(): number
    get_minimum_increment(): number
    get_minimum_value(): number
    set_current_value(new_value: number): boolean
    /* Virtual methods of Atspi-2.0.Atspi.Accessible */
    vfunc_mode_changed(enabled: boolean): void
    vfunc_region_changed(current_offset: number, last_offset: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Atspi-2.0.Atspi.Accessible */
    connect(sigName: "mode-changed", callback: (($obj: Accessible, arg1: number, why: string) => void)): number
    connect_after(sigName: "mode-changed", callback: (($obj: Accessible, arg1: number, why: string) => void)): number
    emit(sigName: "mode-changed", arg1: number, why: string): void
    connect(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "region-changed", arg1: number, arg2: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Accessible_ConstructProps)
    _init (config?: Accessible_ConstructProps): void
    static $gtype: GObject.Type
}
interface Application_ConstructProps extends GObject.Object_ConstructProps {
}
class Application {
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
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
}
class Device {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Device */
    add_key_grab(kd: KeyDefinition, callback: KeyCallback | null): number
    add_key_watcher(): void
    get_grab_by_id(id: number): KeyDefinition
    get_locked_modifiers(): number
    get_modifier(keycode: number): number
    grab_keyboard(): boolean
    map_modifier(keycode: number): number
    notify_key(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    remove_key_grab(id: number): void
    ungrab_keyboard(): void
    unmap_modifier(keycode: number): void
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
    /* Virtual methods of Atspi-2.0.Atspi.Device */
    vfunc_add_key_grab(kd: KeyDefinition): void
    vfunc_get_locked_modifiers(): number
    vfunc_get_modifier(keycode: number): number
    vfunc_grab_keyboard(): boolean
    vfunc_map_modifier(keycode: number): number
    vfunc_remove_key_grab(id: number): void
    vfunc_ungrab_keyboard(): void
    vfunc_unmap_modifier(keycode: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Device
    static $gtype: GObject.Type
}
interface DeviceLegacy_ConstructProps extends Device_ConstructProps {
}
class DeviceLegacy {
    /* Fields of Atspi-2.0.Atspi.Device */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Device */
    add_key_grab(kd: KeyDefinition, callback: KeyCallback | null): number
    add_key_watcher(): void
    get_grab_by_id(id: number): KeyDefinition
    get_locked_modifiers(): number
    get_modifier(keycode: number): number
    grab_keyboard(): boolean
    map_modifier(keycode: number): number
    notify_key(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    remove_key_grab(id: number): void
    ungrab_keyboard(): void
    unmap_modifier(keycode: number): void
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
    /* Virtual methods of Atspi-2.0.Atspi.Device */
    vfunc_add_key_grab(kd: KeyDefinition): void
    vfunc_get_locked_modifiers(): number
    vfunc_get_modifier(keycode: number): number
    vfunc_grab_keyboard(): boolean
    vfunc_map_modifier(keycode: number): number
    vfunc_remove_key_grab(id: number): void
    vfunc_ungrab_keyboard(): void
    vfunc_unmap_modifier(keycode: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceLegacy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceLegacy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceLegacy_ConstructProps)
    _init (config?: DeviceLegacy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceLegacy
    /* Function overloads */
    static new(): DeviceLegacy
    static $gtype: GObject.Type
}
interface DeviceListener_ConstructProps extends GObject.Object_ConstructProps {
}
class DeviceListener {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.DeviceListener */
    add_callback(callback: DeviceListenerCB): void
    remove_callback(callback: DeviceListenerCB): void
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
    /* Virtual methods of Atspi-2.0.Atspi.DeviceListener */
    vfunc_device_event(event: DeviceEvent): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceListener_ConstructProps)
    _init (config?: DeviceListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: DeviceListenerCB): DeviceListener
    static $gtype: GObject.Type
}
interface DeviceX11_ConstructProps extends Device_ConstructProps {
}
class DeviceX11 {
    /* Fields of Atspi-2.0.Atspi.Device */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Device */
    add_key_grab(kd: KeyDefinition, callback: KeyCallback | null): number
    add_key_watcher(): void
    get_grab_by_id(id: number): KeyDefinition
    get_locked_modifiers(): number
    get_modifier(keycode: number): number
    grab_keyboard(): boolean
    map_modifier(keycode: number): number
    notify_key(pressed: boolean, keycode: number, keysym: number, state: number, text: string): boolean
    remove_key_grab(id: number): void
    ungrab_keyboard(): void
    unmap_modifier(keycode: number): void
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
    /* Virtual methods of Atspi-2.0.Atspi.Device */
    vfunc_add_key_grab(kd: KeyDefinition): void
    vfunc_get_locked_modifiers(): number
    vfunc_get_modifier(keycode: number): number
    vfunc_grab_keyboard(): boolean
    vfunc_map_modifier(keycode: number): number
    vfunc_remove_key_grab(id: number): void
    vfunc_ungrab_keyboard(): void
    vfunc_unmap_modifier(keycode: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceX11, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceX11, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceX11_ConstructProps)
    _init (config?: DeviceX11_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceX11
    /* Function overloads */
    static new(): DeviceX11
    static $gtype: GObject.Type
}
interface EventListener_ConstructProps extends GObject.Object_ConstructProps {
}
class EventListener {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.EventListener */
    deregister(event_type: string): boolean
    register(event_type: string): boolean
    register_full(event_type: string, properties?: string[] | null): boolean
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
    connect(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EventListener_ConstructProps)
    _init (config?: EventListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: EventListenerCB): EventListener
    static deregister_from_callback(callback: EventListenerCB, event_type: string): boolean
    static register_from_callback(callback: EventListenerCB, event_type: string): boolean
    static register_from_callback_full(event_type: string, properties: string[]): boolean
    static $gtype: GObject.Type
}
interface Hyperlink_ConstructProps extends Object_ConstructProps {
}
class Hyperlink {
    /* Fields of Atspi-2.0.Atspi.Object */
    readonly parent: GObject.Object
    readonly app: Application
    readonly path: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Hyperlink */
    get_end_index(): number
    get_index_range(): Range
    get_n_anchors(): number
    get_object(i: number): Accessible
    get_start_index(): number
    get_uri(i: number): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.Type
}
interface MatchRule_ConstructProps extends GObject.Object_ConstructProps {
}
class MatchRule {
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
    connect(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MatchRule_ConstructProps)
    _init (config?: MatchRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(states: StateSet, statematchtype: CollectionMatchType, attributes: GLib.HashTable, attributematchtype: CollectionMatchType, roles: Role[], rolematchtype: CollectionMatchType, interfaces: string[], interfacematchtype: CollectionMatchType, invert: boolean): MatchRule
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
}
class Object {
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.Type
}
interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}
class Relation {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.Relation */
    get_n_targets(): number
    get_relation_type(): RelationType
    get_target(i: number): Accessible
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    static $gtype: GObject.Type
}
interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
class StateSet {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Atspi-2.0.Atspi.StateSet */
    add(state: StateType): void
    compare(set2: StateSet): StateSet
    contains(state: StateType): boolean
    equals(set2: StateSet): boolean
    get_states(): StateType[]
    is_empty(): boolean
    remove(state: StateType): void
    set_by_name(name: string, enabled: boolean): void
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
    static new(states: StateType[]): StateSet
    static $gtype: GObject.Type
}
abstract class AccessibleClass {
    /* Fields of Atspi-2.0.Atspi.AccessibleClass */
    readonly parent_class: ObjectClass
    readonly region_changed: (accessible: Accessible, current_offset: number, last_offset: number) => void
    readonly mode_changed: (accessible: Accessible, enabled: boolean) => void
    static name: string
}
class AccessiblePrivate {
    static name: string
}
abstract class ApplicationClass {
    /* Fields of Atspi-2.0.Atspi.ApplicationClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class DeviceClass {
    /* Fields of Atspi-2.0.Atspi.DeviceClass */
    readonly parent_class: GObject.ObjectClass
    readonly add_key_grab: (device: Device, kd: KeyDefinition) => void
    readonly remove_key_grab: (device: Device, id: number) => void
    readonly map_modifier: (device: Device, keycode: number) => number
    readonly unmap_modifier: (device: Device, keycode: number) => void
    readonly get_modifier: (device: Device, keycode: number) => number
    readonly grab_keyboard: (device: Device) => boolean
    readonly ungrab_keyboard: (device: Device) => void
    readonly get_locked_modifiers: (device: Device) => number
    static name: string
}
class DeviceEvent {
    /* Fields of Atspi-2.0.Atspi.DeviceEvent */
    readonly type: EventType
    readonly id: number
    readonly hw_code: number
    readonly modifiers: number
    readonly timestamp: number
    readonly event_string: string
    readonly is_text: boolean
    static name: string
}
abstract class DeviceLegacyClass {
    /* Fields of Atspi-2.0.Atspi.DeviceLegacyClass */
    readonly parent_class: DeviceClass
    static name: string
}
abstract class DeviceListenerClass {
    /* Fields of Atspi-2.0.Atspi.DeviceListenerClass */
    readonly parent_class: GObject.ObjectClass
    readonly device_event: (listener: DeviceListener, event: DeviceEvent) => boolean
    static name: string
}
abstract class DeviceX11Class {
    /* Fields of Atspi-2.0.Atspi.DeviceX11Class */
    readonly parent_class: DeviceClass
    static name: string
}
class Event {
    /* Fields of Atspi-2.0.Atspi.Event */
    readonly type: string
    readonly source: Accessible
    readonly detail1: number
    readonly detail2: number
    readonly any_data: any
    readonly sender: Accessible
    static name: string
    /* Static methods and pseudo-constructors */
    static main(): void
    static quit(): void
}
abstract class EventListenerClass {
    /* Fields of Atspi-2.0.Atspi.EventListenerClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class EventListenerMode {
    /* Fields of Atspi-2.0.Atspi.EventListenerMode */
    readonly synchronous: boolean
    readonly preemptive: boolean
    readonly global: boolean
    static name: string
}
abstract class HyperlinkClass {
    /* Fields of Atspi-2.0.Atspi.HyperlinkClass */
    readonly parent_class: ObjectClass
    static name: string
}
class KeyDefinition {
    /* Fields of Atspi-2.0.Atspi.KeyDefinition */
    readonly keycode: number
    readonly keysym: number
    readonly keystring: string
    readonly modifiers: number
    static name: string
}
class KeySet {
    /* Fields of Atspi-2.0.Atspi.KeySet */
    readonly keysyms: number
    readonly keycodes: number
    readonly keystrings: string
    readonly len: number
    static name: string
}
abstract class MatchRuleClass {
    /* Fields of Atspi-2.0.Atspi.MatchRuleClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of Atspi-2.0.Atspi.ObjectClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class Point {
    /* Fields of Atspi-2.0.Atspi.Point */
    readonly x: number
    readonly y: number
    /* Methods of Atspi-2.0.Atspi.Point */
    copy(): Point
    static name: string
}
class Range {
    /* Fields of Atspi-2.0.Atspi.Range */
    readonly start_offset: number
    readonly end_offset: number
    /* Methods of Atspi-2.0.Atspi.Range */
    copy(): Range
    static name: string
}
class Rect {
    /* Fields of Atspi-2.0.Atspi.Rect */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    /* Methods of Atspi-2.0.Atspi.Rect */
    copy(): Rect
    static name: string
}
abstract class RelationClass {
    /* Fields of Atspi-2.0.Atspi.RelationClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
abstract class StateSetClass {
    /* Fields of Atspi-2.0.Atspi.StateSetClass */
    readonly parent_class: GObject.ObjectClass
    static name: string
}
class TextRange {
    /* Fields of Atspi-2.0.Atspi.TextRange */
    readonly start_offset: number
    readonly end_offset: number
    readonly content: string
    static name: string
}
    type ControllerEventMask = number
    type DeviceEventMask = number
    type KeyEventMask = number
    type KeyMaskType = number
    type KeystrokeListener = void
}
export default Atspi;