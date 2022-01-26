/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gst-0.10
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Gst {

enum ActivateMode {
    NONE,
    PUSH,
    PULL,
}
enum BufferListItem {
    CONTINUE,
    SKIP_GROUP,
    END,
}
enum BufferingMode {
    STREAM,
    DOWNLOAD,
    TIMESHIFT,
    LIVE,
}
enum BusSyncReply {
    DROP,
    PASS,
    ASYNC,
}
enum ClockEntryType {
    SINGLE,
    PERIODIC,
}
enum ClockReturn {
    OK,
    EARLY,
    UNSCHEDULED,
    BUSY,
    BADTIME,
    ERROR,
    UNSUPPORTED,
}
enum ClockType {
    REALTIME,
    MONOTONIC,
}
enum CoreError {
    FAILED,
    TOO_LAZY,
    NOT_IMPLEMENTED,
    STATE_CHANGE,
    PAD,
    THREAD,
    NEGOTIATION,
    EVENT,
    SEEK,
    CAPS,
    TAG,
    MISSING_PLUGIN,
    CLOCK,
    DISABLED,
    NUM_ERRORS,
}
enum DebugColorFlags {
    FG_BLACK,
    FG_RED,
    FG_GREEN,
    FG_YELLOW,
    FG_BLUE,
    FG_MAGENTA,
    FG_CYAN,
    FG_WHITE,
    BG_BLACK,
    BG_RED,
    BG_GREEN,
    BG_YELLOW,
    BG_BLUE,
    BG_MAGENTA,
    BG_CYAN,
    BG_WHITE,
    BOLD,
    UNDERLINE,
}
enum DebugLevel {
    NONE,
    ERROR,
    WARNING,
    INFO,
    DEBUG,
    LOG,
    FIXME,
    TRACE,
    MEMDUMP,
    COUNT,
}
enum EventType {
    UNKNOWN,
    FLUSH_START,
    FLUSH_STOP,
    EOS,
    NEWSEGMENT,
    TAG,
    BUFFERSIZE,
    SINK_MESSAGE,
    QOS,
    SEEK,
    NAVIGATION,
    LATENCY,
    STEP,
    CUSTOM_UPSTREAM,
    CUSTOM_DOWNSTREAM,
    CUSTOM_DOWNSTREAM_OOB,
    CUSTOM_BOTH,
    CUSTOM_BOTH_OOB,
}
enum FlowReturn {
    CUSTOM_SUCCESS_2,
    CUSTOM_SUCCESS_1,
    CUSTOM_SUCCESS,
    RESEND,
    OK,
    NOT_LINKED,
    WRONG_STATE,
    UNEXPECTED,
    NOT_NEGOTIATED,
    ERROR,
    NOT_SUPPORTED,
    CUSTOM_ERROR,
    CUSTOM_ERROR_1,
    CUSTOM_ERROR_2,
}
enum Format {
    UNDEFINED,
    DEFAULT,
    BYTES,
    TIME,
    BUFFERS,
    PERCENT,
}
enum IndexCertainty {
    UNKNOWN,
    CERTAIN,
    FUZZY,
}
enum IndexEntryType {
    ID,
    ASSOCIATION,
    OBJECT,
    FORMAT,
}
enum IndexLookupMethod {
    EXACT,
    BEFORE,
    AFTER,
}
enum IndexResolverMethod {
    CUSTOM,
    GTYPE,
    PATH,
}
enum IteratorItem {
    SKIP,
    PASS,
    END,
}
enum IteratorResult {
    DONE,
    OK,
    RESYNC,
    ERROR,
}
enum LibraryError {
    FAILED,
    TOO_LAZY,
    INIT,
    SHUTDOWN,
    SETTINGS,
    ENCODE,
    NUM_ERRORS,
}
enum PadDirection {
    UNKNOWN,
    SRC,
    SINK,
}
enum PadLinkReturn {
    OK,
    WRONG_HIERARCHY,
    WAS_LINKED,
    WRONG_DIRECTION,
    NOFORMAT,
    NOSCHED,
    REFUSED,
}
enum PadPresence {
    ALWAYS,
    SOMETIMES,
    REQUEST,
}
enum ParseError {
    SYNTAX,
    NO_SUCH_ELEMENT,
    NO_SUCH_PROPERTY,
    LINK,
    COULD_NOT_SET_PROPERTY,
    EMPTY_BIN,
    EMPTY,
}
enum PluginError {
    MODULE,
    DEPENDENCIES,
    NAME_MISMATCH,
}
enum QueryType {
    NONE,
    POSITION,
    DURATION,
    LATENCY,
    JITTER,
    RATE,
    SEEKING,
    SEGMENT,
    CONVERT,
    FORMATS,
    BUFFERING,
    CUSTOM,
    URI,
}
enum Rank {
    NONE,
    MARGINAL,
    SECONDARY,
    PRIMARY,
}
enum ResourceError {
    FAILED,
    TOO_LAZY,
    NOT_FOUND,
    BUSY,
    OPEN_READ,
    OPEN_WRITE,
    OPEN_READ_WRITE,
    CLOSE,
    READ,
    WRITE,
    SEEK,
    SYNC,
    SETTINGS,
    NO_SPACE_LEFT,
    NUM_ERRORS,
}
enum SearchMode {
    EXACT,
    BEFORE,
    AFTER,
}
enum SeekType {
    NONE,
    CUR,
    SET,
    END,
}
enum State {
    VOID_PENDING,
    NULL,
    READY,
    PAUSED,
    PLAYING,
}
enum StateChange {
    NULL_TO_READY,
    READY_TO_PAUSED,
    PAUSED_TO_PLAYING,
    PLAYING_TO_PAUSED,
    PAUSED_TO_READY,
    READY_TO_NULL,
}
enum StateChangeReturn {
    FAILURE,
    SUCCESS,
    ASYNC,
    NO_PREROLL,
}
enum StreamError {
    FAILED,
    TOO_LAZY,
    NOT_IMPLEMENTED,
    TYPE_NOT_FOUND,
    WRONG_TYPE,
    CODEC_NOT_FOUND,
    DECODE,
    ENCODE,
    DEMUX,
    MUX,
    FORMAT,
    DECRYPT,
    DECRYPT_NOKEY,
    NUM_ERRORS,
}
enum StreamStatusType {
    CREATE,
    ENTER,
    LEAVE,
    DESTROY,
    START,
    PAUSE,
    STOP,
}
enum StructureChangeType {
    LINK,
    UNLINK,
}
enum TagFlag {
    UNDEFINED,
    META,
    ENCODED,
    DECODED,
    COUNT,
}
enum TagMergeMode {
    UNDEFINED,
    REPLACE_ALL,
    REPLACE,
    APPEND,
    PREPEND,
    KEEP,
    KEEP_ALL,
    COUNT,
}
enum TaskState {
    STARTED,
    STOPPED,
    PAUSED,
}
enum TypeFindProbability {
    MINIMUM,
    POSSIBLE,
    LIKELY,
    NEARLY_CERTAIN,
    MAXIMUM,
}
enum URIType {
    UNKNOWN,
    SINK,
    SRC,
}
enum AllocTraceFlags {
    LIVE,
    MEM_LIVE,
}
enum AssocFlags {
    NONE,
    KEY_UNIT,
    DELTA_UNIT,
    LAST,
}
enum BaseSrcFlags {
    STARTED,
    FLAG_LAST,
}
enum BinFlags {
    LAST,
}
enum BufferCopyFlags {
    FLAGS,
    TIMESTAMPS,
    CAPS,
}
enum BufferFlag {
    READONLY,
    PREROLL,
    DISCONT,
    IN_CAPS,
    GAP,
    DELTA_UNIT,
    MEDIA1,
    MEDIA2,
    MEDIA3,
    LAST,
}
enum BusFlags {
    FLUSHING,
    FLAG_LAST,
}
enum CapsFlags {
    ANY,
}
enum ClockFlags {
    CAN_DO_SINGLE_SYNC,
    CAN_DO_SINGLE_ASYNC,
    CAN_DO_PERIODIC_SYNC,
    CAN_DO_PERIODIC_ASYNC,
    CAN_SET_RESOLUTION,
    CAN_SET_MASTER,
    LAST,
}
enum DebugGraphDetails {
    MEDIA_TYPE,
    CAPS_DETAILS,
    NON_DEFAULT_PARAMS,
    STATES,
    ALL,
}
enum ElementFlags {
    LOCKED_STATE,
    IS_SINK,
    UNPARENTING,
    FLAG_LAST,
}
enum EventTypeFlags {
    UPSTREAM,
    DOWNSTREAM,
    SERIALIZED,
}
enum IndexFlags {
    WRITABLE,
    READABLE,
    FLAG_LAST,
}
enum MessageType {
    UNKNOWN,
    EOS,
    ERROR,
    WARNING,
    INFO,
    TAG,
    BUFFERING,
    STATE_CHANGED,
    STATE_DIRTY,
    STEP_DONE,
    CLOCK_PROVIDE,
    CLOCK_LOST,
    NEW_CLOCK,
    STRUCTURE_CHANGE,
    STREAM_STATUS,
    APPLICATION,
    ELEMENT,
    SEGMENT_START,
    SEGMENT_DONE,
    DURATION,
    LATENCY,
    ASYNC_START,
    ASYNC_DONE,
    REQUEST_STATE,
    STEP_START,
    QOS,
    ANY,
}
enum MiniObjectFlags {
    READONLY,
    LAST,
}
enum ObjectFlags {
    DISPOSING,
    FLOATING,
    FLAG_LAST,
}
enum PadFlags {
    BLOCKED,
    FLUSHING,
    IN_GETCAPS,
    IN_SETCAPS,
    BLOCKING,
    FLAG_LAST,
}
enum PadLinkCheck {
    NOTHING,
    HIERARCHY,
    TEMPLATE_CAPS,
    CAPS,
}
enum PadTemplateFlags {
    FIXED,
    FLAG_LAST,
}
enum ParseFlags {
    NONE,
    FATAL_ERRORS,
}
enum PipelineFlags {
    FIXED_CLOCK,
    LAST,
}
enum PluginDependencyFlags {
    NONE,
    RECURSE,
    PATHS_ARE_DEFAULT_ONLY,
    FILE_NAME_IS_SUFFIX,
}
enum PluginFlags {
    CACHED,
    BLACKLISTED,
}
enum SeekFlags {
    NONE,
    FLUSH,
    ACCURATE,
    KEY_UNIT,
    SEGMENT,
    SKIP,
}
const BASE_TRANSFORM_SINK_NAME: string
const BASE_TRANSFORM_SRC_NAME: string
const BUFFER_COPY_ALL: any
const BUFFER_OFFSET_NONE: any
const BUFFER_TRACE_NAME: string
const CAN_INLINE: any
const CLOCK_ENTRY_TRACE_NAME: string
const CLOCK_TIME_NONE: any
const DEBUG_BG_MASK: any
const DEBUG_FG_MASK: any
const DEBUG_FORMAT_MASK: any
const DISABLE_ALLOC_TRACE: any
const DISABLE_GST_DEBUG: any
const DISABLE_LOADSAVE: any
const DISABLE_LOADSAVE_REGISTRY: any
const DISABLE_PARSE: any
const DISABLE_PLUGIN: any
const DISABLE_REGISTRY: any
const DISABLE_TRACE: any
const DISABLE_XML: any
const ERROR_SYSTEM: string
const EVENT_TRACE_NAME: string
const EVENT_TYPE_BOTH: any
const EVENT_TYPE_SHIFT: any
const FOURCC_FORMAT: string
const HAVE_GLIB_2_8: any
const HAVE_UNALIGNED_ACCESS: any
const INDEX_ID_INVALID: any
const LICENSE_UNKNOWN: string
const MESSAGE_TRACE_NAME: string
const MSECOND: any
const M_PI: number
const NSECOND: any
const PADDING: any
const PADDING_LARGE: any
const PAD_LINK_CHECK_DEFAULT: any
const PARAM_CONTROLLABLE: any
const PARAM_MUTABLE_PAUSED: any
const PARAM_MUTABLE_PLAYING: any
const PARAM_MUTABLE_READY: any
const PARAM_USER_SHIFT: any
const PTR_FORMAT: string
const SECOND: any
const SEGMENT_FORMAT: string
const TAG_ALBUM: string
const TAG_ALBUM_ARTIST: string
const TAG_ALBUM_ARTIST_SORTNAME: string
const TAG_ALBUM_GAIN: string
const TAG_ALBUM_PEAK: string
const TAG_ALBUM_SORTNAME: string
const TAG_ALBUM_VOLUME_COUNT: string
const TAG_ALBUM_VOLUME_NUMBER: string
const TAG_ARTIST: string
const TAG_ARTIST_SORTNAME: string
const TAG_ATTACHMENT: string
const TAG_AUDIO_CODEC: string
const TAG_BEATS_PER_MINUTE: string
const TAG_BITRATE: string
const TAG_CODEC: string
const TAG_COMMENT: string
const TAG_COMPOSER: string
const TAG_COMPOSER_SORTNAME: string
const TAG_CONTACT: string
const TAG_CONTAINER_FORMAT: string
const TAG_COPYRIGHT: string
const TAG_COPYRIGHT_URI: string
const TAG_DATE: string
const TAG_DESCRIPTION: string
const TAG_DEVICE_MANUFACTURER: string
const TAG_DEVICE_MODEL: string
const TAG_DURATION: string
const TAG_ENCODER: string
const TAG_ENCODER_VERSION: string
const TAG_EXTENDED_COMMENT: string
const TAG_GENRE: string
const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string
const TAG_GEO_LOCATION_CITY: string
const TAG_GEO_LOCATION_COUNTRY: string
const TAG_GEO_LOCATION_ELEVATION: string
const TAG_GEO_LOCATION_LATITUDE: string
const TAG_GEO_LOCATION_LONGITUDE: string
const TAG_GEO_LOCATION_MOVEMENT_DIRECTION: string
const TAG_GEO_LOCATION_MOVEMENT_SPEED: string
const TAG_GEO_LOCATION_NAME: string
const TAG_GEO_LOCATION_SUBLOCATION: string
const TAG_GROUPING: string
const TAG_HOMEPAGE: string
const TAG_IMAGE: string
const TAG_IMAGE_ORIENTATION: string
const TAG_ISRC: string
const TAG_KEYWORDS: string
const TAG_LANGUAGE_CODE: string
const TAG_LICENSE: string
const TAG_LICENSE_URI: string
const TAG_LOCATION: string
const TAG_LYRICS: string
const TAG_MAXIMUM_BITRATE: string
const TAG_MINIMUM_BITRATE: string
const TAG_NOMINAL_BITRATE: string
const TAG_ORGANIZATION: string
const TAG_PERFORMER: string
const TAG_PREVIEW_IMAGE: string
const TAG_REFERENCE_LEVEL: string
const TAG_SERIAL: string
const TAG_SHOW_EPISODE_NUMBER: string
const TAG_SHOW_NAME: string
const TAG_SHOW_SEASON_NUMBER: string
const TAG_SHOW_SORTNAME: string
const TAG_SUBTITLE_CODEC: string
const TAG_TITLE: string
const TAG_TITLE_SORTNAME: string
const TAG_TRACK_COUNT: string
const TAG_TRACK_GAIN: string
const TAG_TRACK_NUMBER: string
const TAG_TRACK_PEAK: string
const TAG_USER_RATING: string
const TAG_VERSION: string
const TAG_VIDEO_CODEC: string
const TIME_FORMAT: string
const USECOND: any
const VALUE_EQUAL: any
const VALUE_GREATER_THAN: any
const VALUE_LESS_THAN: any
const VALUE_UNORDERED: any
const VERSION_MAJOR: any
const VERSION_MICRO: any
const VERSION_MINOR: any
const VERSION_NANO: any
function alloc_trace_available(): boolean
function alloc_trace_get(name: string): AllocTrace
function alloc_trace_live_all(): number
function alloc_trace_print_all(): void
function alloc_trace_print_live(): void
function alloc_trace_set_flags_all(flags: AllocTraceFlags): void
function atomic_int_set(value: number): /* atomic_int */ number
function caps_from_string(string: string): Caps
function caps_load_thyself(parent: libxml2.NodePtr): Caps
function child_proxy_child_added(object: Object, child: Object): void
function child_proxy_child_removed(object: Object, child: Object): void
function child_proxy_get_property(object: Object, name: string, value: any): void
function child_proxy_lookup(object: Object, name: string, target: Object, pspec: GObject.ParamSpec): boolean
function child_proxy_set_property(object: Object, name: string, value: any): void
function class_signal_connect(klass: ObjectClass, name: string, func: object, func_data: object): number
function class_signal_emit_by_name(object: Object, name: string, self: libxml2.NodePtr): void
function debug_add_log_function(func: LogFunction): void
function debug_construct_term_color(colorinfo: number): string
function debug_construct_win_color(colorinfo: number): number
function debug_get_all_categories(): object[]
function debug_get_default_threshold(): DebugLevel
function debug_is_active(): boolean
function debug_is_colored(): boolean
function debug_level_get_name(level: DebugLevel): string
function debug_log_default(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object, message: DebugMessage, unused: object): void
function debug_print_stack_trace(): void
function debug_remove_log_function(func: LogFunction): number
function debug_remove_log_function_by_data(data: object): number
function debug_set_active(active: boolean): void
function debug_set_colored(colored: boolean): void
function debug_set_default_threshold(level: DebugLevel): void
function debug_set_threshold_for_name(name: string, level: DebugLevel): void
function debug_unset_threshold_for_name(name: string): void
function default_registry_check_feature_version(feature_name: string, min_major: number, min_minor: number, min_micro: number): boolean
function deinit(): void
function error_get_message(domain: GLib.Quark, code: number): string
function flow_get_name(ret: FlowReturn): string
function flow_to_quark(ret: FlowReturn): GLib.Quark
function format_get_by_nick(nick: string): Format
function format_get_details(format: Format): FormatDefinition
function format_get_name(format: Format): string
function format_iterate_definitions(): Iterator
function format_register(nick: string, description: string): Format
function format_to_quark(format: Format): GLib.Quark
function formats_contains(formats: Format, format: Format): boolean
function implements_interface_cast(from: object, type: GObject.Type): object
function implements_interface_check(from: object, type: GObject.Type): boolean
function init(argv?: string[] | null): /* argv */ string[] | null
function init_check(argv: string[]): [ /* returnType */ boolean, /* argc */ number ]
function init_get_option_group(): GLib.OptionGroup
function is_tag_list(p: object): boolean
function param_spec_fraction(name: string, nick: string, blurb: string, min_num: number, min_denom: number, max_num: number, max_denom: number, default_num: number, default_denom: number, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_mini_object(name: string, nick: string, blurb: string, object_type: GObject.Type, flags: GObject.ParamFlags): GObject.ParamSpec
function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: boolean): Element
function parse_bin_from_description_full(bin_description: string, ghost_unlinked_pads: boolean, context: ParseContext, flags: ParseFlags): Element
function parse_launch(pipeline_description: string): Element
function parse_launch_full(pipeline_description: string, context: ParseContext, flags: ParseFlags): Element
function parse_launchv(argv: string[]): Element
function parse_launchv_full(argv: string[], context: ParseContext, flags: ParseFlags): Element
function print_element_args(buf: GLib.String, indent: number, element: Element): void
function print_pad_caps(buf: GLib.String, indent: number, pad: Pad): void
function segtrap_is_enabled(): boolean
function segtrap_set_enabled(enabled: boolean): void
function structure_empty_new(name: string): Structure
function structure_from_string(string: string, end: string[]): Structure
function structure_id_empty_new(quark: GLib.Quark): Structure
function tag_exists(tag: string): boolean
function tag_get_description(tag: string): string
function tag_get_flag(tag: string): TagFlag
function tag_get_nick(tag: string): string
function tag_get_type(tag: string): GObject.Type
function tag_is_fixed(tag: string): boolean
function tag_list_copy_value(dest: any, list: TagList, tag: string): boolean
function tag_merge_strings_with_comma(dest: any, src: any): void
function tag_merge_use_first(dest: any, src: any): void
function tag_register(name: string, flag: TagFlag, type: GObject.Type, nick: string, blurb: string, func: TagMergeFunc): void
function trace_read_tsc(): /* dst */ number
function type_find_helper(src: Pad, size: number): Caps
function type_find_helper_for_buffer(obj: Object, buf: Buffer, prob: TypeFindProbability): Caps
function type_find_helper_for_extension(obj: Object, extension: string): Caps
function type_find_helper_get_range(obj: Object, func: TypeFindHelperGetRangeFunction, size: number, prob: TypeFindProbability): Caps
function type_find_helper_get_range_ext(obj: Object, func: TypeFindHelperGetRangeFunction, size: number, extension: string, prob: TypeFindProbability): Caps
function type_find_register(plugin: Plugin, name: string, rank: number, func: TypeFindFunction, extensions: string[], possible_caps: Caps, data: object, data_notify: GLib.DestroyNotify): boolean
function type_register_static_full(parent_type: GObject.Type, type_name: string, class_size: number, base_init: GObject.BaseInitFunc, base_finalize: GObject.BaseFinalizeFunc, class_init: GObject.ClassInitFunc, class_finalize: GObject.ClassFinalizeFunc, instance_size: number, n_preallocs: number, instance_init: GObject.InstanceInitFunc, value_table: GObject.TypeValueTable, flags: GObject.TypeFlags): GObject.Type
function update_registry(): boolean
function uri_construct(protocol: string, location: string): string
function uri_get_location(uri: string): string
function uri_get_protocol(uri: string): string
function uri_has_protocol(uri: string, protocol: string): boolean
function uri_is_valid(uri: string): boolean
function uri_protocol_is_supported(type: URIType, protocol: string): boolean
function uri_protocol_is_valid(protocol: string): boolean
function util_array_binary_search(array: object, num_elements: number, element_size: number, search_func: GLib.CompareDataFunc, mode: SearchMode, search_data: object, user_data: object): object
function util_double_to_fraction(src: number): [ /* dest_n */ number, /* dest_d */ number ]
function util_dump_mem(mem: any[], size: number): void
function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [ /* returnType */ boolean, /* res_n */ number, /* res_d */ number ]
function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [ /* returnType */ boolean, /* res_n */ number, /* res_d */ number ]
function util_fraction_to_double(src_n: number, src_d: number): /* dest */ number
function util_gdouble_to_guint64(value: number): number
function util_get_timestamp(): ClockTime
function util_greatest_common_divisor(a: number, b: number): number
function util_guint64_to_gdouble(value: number): number
function util_seqnum_compare(s1: number, s2: number): number
function util_seqnum_next(): number
function util_set_object_arg(object: GObject.Object, name: string, value: string): void
function util_set_value_from_string(value: any, value_str: string): void
function util_uint64_scale(val: number, num: number, denom: number): number
function util_uint64_scale_ceil(val: number, num: number, denom: number): number
function util_uint64_scale_int(val: number, num: number, denom: number): number
function util_uint64_scale_int_ceil(val: number, num: number, denom: number): number
function util_uint64_scale_int_round(val: number, num: number, denom: number): number
function util_uint64_scale_round(val: number, num: number, denom: number): number
function value_array_append_value(value: any, append_value: any): void
function value_array_get_size(value: any): number
function value_array_get_value(value: any, index: number): any
function value_array_prepend_value(value: any, prepend_value: any): void
function value_can_compare(value1: any, value2: any): boolean
function value_can_intersect(value1: any, value2: any): boolean
function value_can_subtract(minuend: any, subtrahend: any): boolean
function value_can_union(value1: any, value2: any): boolean
function value_compare(value1: any, value2: any): number
function value_deserialize(dest: any, src: string): boolean
function value_dup_mini_object(value: any): MiniObject
function value_fraction_multiply(product: any, factor1: any, factor2: any): boolean
function value_fraction_subtract(dest: any, minuend: any, subtrahend: any): boolean
function value_get_caps(value: any): Caps
function value_get_date(value: any): GLib.Date
function value_get_double_range_max(value: any): number
function value_get_double_range_min(value: any): number
function value_get_fourcc(value: any): number
function value_get_fraction_denominator(value: any): number
function value_get_fraction_numerator(value: any): number
function value_get_fraction_range_max(value: any): any
function value_get_fraction_range_min(value: any): any
function value_get_int_range_max(value: any): number
function value_get_int_range_min(value: any): number
function value_get_mini_object(value: any): MiniObject
function value_get_structure(value: any): Structure
function value_init_and_copy(dest: any, src: any): void
function value_intersect(dest: any, value1: any, value2: any): boolean
function value_is_fixed(value: any): boolean
function value_list_append_value(value: any, append_value: any): void
function value_list_concat(dest: any, value1: any, value2: any): void
function value_list_get_size(value: any): number
function value_list_get_value(value: any, index: number): any
function value_list_prepend_value(value: any, prepend_value: any): void
function value_register(table: ValueTable): void
function value_register_intersect_func(type1: GObject.Type, type2: GObject.Type, func: ValueIntersectFunc): void
function value_register_subtract_func(minuend_type: GObject.Type, subtrahend_type: GObject.Type, func: ValueSubtractFunc): void
function value_register_union_func(type1: GObject.Type, type2: GObject.Type, func: ValueUnionFunc): void
function value_serialize(value: any): string
function value_set_caps(value: any, caps: Caps): void
function value_set_date(value: any, date: GLib.Date): void
function value_set_double_range(value: any, start: number, end: number): void
function value_set_fourcc(value: any, fourcc: number): void
function value_set_fraction(value: any, numerator: number, denominator: number): void
function value_set_fraction_range(value: any, start: any, end: any): void
function value_set_fraction_range_full(value: any, numerator_start: number, denominator_start: number, numerator_end: number, denominator_end: number): void
function value_set_int_range(value: any, start: number, end: number): void
function value_set_mini_object(value: any, mini_object: MiniObject): void
function value_set_structure(value: any, structure: Structure): void
function value_subtract(dest: any, minuend: any, subtrahend: any): boolean
function value_take_mini_object(value: any, mini_object: MiniObject): void
function value_union(dest: any, value1: any, value2: any): boolean
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
function version_string(): string
interface BufferListDoFunction {
    (buffer: Buffer): Buffer
}
interface BufferListFunc {
    (buffer: Buffer, group: number, idx: number): BufferListItem
}
interface BusFunc {
    (bus: Bus, message: Message, data: object): boolean
}
interface BusSyncHandler {
    (bus: Bus, message: Message, data: object): BusSyncReply
}
interface ClockCallback {
    (clock: Clock, time: ClockTime, id: ClockID): boolean
}
interface CollectDataDestroyNotify {
    (data: CollectData): void
}
interface CollectPadsClipFunction {
    (pads: CollectPads, data: CollectData, buffer: Buffer): Buffer
}
interface CollectPadsFunction {
    (pads: CollectPads): FlowReturn
}
interface CopyFunction {
    (object: object): object
}
interface DataQueueCheckFullFunction {
    (queue: DataQueue, visible: number, bytes: number, time: number, checkdata: object): boolean
}
interface DataQueueEmptyCallback {
    (queue: DataQueue, checkdata: object): void
}
interface DataQueueFullCallback {
    (queue: DataQueue, checkdata: object): void
}
interface DebugFuncPtr {
    (): void
}
interface FilterFunc {
    (obj: object): boolean
}
interface IndexFilter {
    (index: Index, entry: IndexEntry): boolean
}
interface IndexResolver {
    (index: Index, writer: Object, writer_string: string[]): boolean
}
interface IteratorDisposeFunction {
    (owner: object): void
}
interface IteratorFoldFunction {
    (item: object, ret: any): boolean
}
interface IteratorFreeFunction {
    (it: Iterator): void
}
interface IteratorItemFunction {
    (it: Iterator, item: object): IteratorItem
}
interface IteratorNextFunction {
    (it: Iterator, result: object): IteratorResult
}
interface IteratorResyncFunction {
    (it: Iterator): void
}
interface LogFunction {
    (category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object, message: DebugMessage, data: object): void
}
interface MiniObjectCopyFunction {
    (obj: MiniObject): MiniObject
}
interface MiniObjectFinalizeFunction {
    (obj: MiniObject): void
}
interface PadAcceptCapsFunction {
    (pad: Pad, caps: Caps): boolean
}
interface PadActivateFunction {
    (pad: Pad): boolean
}
interface PadActivateModeFunction {
    (pad: Pad, active: boolean): boolean
}
interface PadBlockCallback {
    (pad: Pad, blocked: boolean): void
}
interface PadBufferAllocFunction {
    (pad: Pad, offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
}
interface PadChainFunction {
    (pad: Pad, buffer: Buffer): FlowReturn
}
interface PadChainListFunction {
    (pad: Pad, list: BufferList): FlowReturn
}
interface PadCheckGetRangeFunction {
    (pad: Pad): boolean
}
interface PadDispatcherFunction {
    (pad: Pad, data: object): boolean
}
interface PadEventFunction {
    (pad: Pad, event: Event): boolean
}
interface PadFixateCapsFunction {
    (pad: Pad, caps: Caps): void
}
interface PadGetCapsFunction {
    (pad: Pad): Caps
}
interface PadGetRangeFunction {
    (pad: Pad, offset: number, length: number, buffer: Buffer): FlowReturn
}
interface PadIntLinkFunction {
    (pad: Pad): Pad[]
}
interface PadIterIntLinkFunction {
    (pad: Pad): Iterator
}
interface PadLinkFunction {
    (pad: Pad, peer: Pad): PadLinkReturn
}
interface PadQueryFunction {
    (pad: Pad, query: Query): boolean
}
interface PadQueryTypeFunction {
    (pad: Pad): QueryType
}
interface PadSetCapsFunction {
    (pad: Pad, caps: Caps): boolean
}
interface PadUnlinkFunction {
    (pad: Pad): void
}
interface PluginFeatureFilter {
    (feature: PluginFeature): boolean
}
interface PluginFilter {
    (plugin: Plugin): boolean
}
interface PluginInitFullFunc {
    (plugin: Plugin): boolean
}
interface PluginInitFunc {
    (plugin: Plugin): boolean
}
interface StructureForeachFunc {
    (field_id: GLib.Quark, value: any): boolean
}
interface StructureMapFunc {
    (field_id: GLib.Quark, value: any): boolean
}
interface TagForeachFunc {
    (list: TagList, tag: string): void
}
interface TagMergeFunc {
    (dest: any, src: any): void
}
interface TaskFunction {
    (data: any): void
}
interface TaskPoolFunction {
    (data: any): void
}
interface TypeFindFunction {
    (find: TypeFind, data: object): void
}
interface TypeFindHelperGetRangeFunction {
    (obj: Object, offset: number, length: number, buffer: Buffer): FlowReturn
}
interface ValueCompareFunc {
    (value1: any, value2: any): number
}
interface ValueDeserializeFunc {
    (dest: any, s: string): boolean
}
interface ValueIntersectFunc {
    (dest: any, value1: any, value2: any): boolean
}
interface ValueSerializeFunc {
    (value1: any): string
}
interface ValueSubtractFunc {
    (dest: any, minuend: any, subtrahend: any): boolean
}
interface ValueUnionFunc {
    (dest: any, value1: any, value2: any): boolean
}
interface ChildProxy_ConstructProps extends Object_ConstructProps {
}
class ChildProxy {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.ChildProxy */
    get_child_by_name(name: string): Object
    get_child_by_index(index: number): Object
    get_children_count(): number
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.ChildProxy */
    vfunc_get_child_by_index(index: number): Object
    vfunc_get_children_count(): number
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object) => void)): number
    emit(sigName: "child-removed", object: GObject.Object): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ChildProxy, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ChildProxy, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ChildProxy, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ChildProxy, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: ChildProxy, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ChildProxy, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ChildProxy, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ChildProxy, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ChildProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ChildProxy_ConstructProps)
    _init (config?: ChildProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface ImplementsInterface_ConstructProps extends Element_ConstructProps {
}
class ImplementsInterface {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.ImplementsInterface */
    vfunc_supported(iface_type: GObject.Type): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: ImplementsInterface) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: ImplementsInterface) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: ImplementsInterface, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ImplementsInterface, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ImplementsInterface, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ImplementsInterface, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ImplementsInterface, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ImplementsInterface, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ImplementsInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ImplementsInterface_ConstructProps)
    _init (config?: ImplementsInterface_ConstructProps): void
    static $gtype: GObject.Type
}
interface TagSetter_ConstructProps extends Element_ConstructProps {
}
class TagSetter {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TagSetter */
    reset_tags(): void
    merge_tags(list: TagList, mode: TagMergeMode): void
    add_tag_value(mode: TagMergeMode, tag: string, value: any): void
    get_tag_list(): TagList
    set_tag_merge_mode(mode: TagMergeMode): void
    get_tag_merge_mode(): TagMergeMode
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: TagSetter, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: TagSetter, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: TagSetter, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: TagSetter, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TagSetter, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TagSetter, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TagSetter, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: TagSetter, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: TagSetter, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: TagSetter, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TagSetter, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: TagSetter, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TagSetter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TagSetter_ConstructProps)
    _init (config?: TagSetter_ConstructProps): void
    static $gtype: GObject.Type
}
class URIHandler {
    /* Methods of Gst-0.10.Gst.URIHandler */
    get_uri_type(): number
    get_protocols(): string[]
    get_uri(): string
    set_uri(uri: string): boolean
    new_uri(uri: string): void
    /* Virtual methods of Gst-0.10.Gst.URIHandler */
    vfunc_get_uri(): string
    vfunc_set_uri(uri: string): boolean
    /* Signals of Gst-0.10.Gst.URIHandler */
    connect(sigName: "new-uri", callback: (($obj: URIHandler, object: string) => void)): number
    connect_after(sigName: "new-uri", callback: (($obj: URIHandler, object: string) => void)): number
    emit(sigName: "new-uri", object: string): void
    static name: string
}
interface Adapter_ConstructProps extends GObject.Object_ConstructProps {
}
class Adapter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Adapter */
    clear(): void
    push(buf: Buffer): void
    peek(size: number): any[]
    copy(dest: any[], offset: number, size: number): void
    flush(flush: number): void
    take(nbytes: number): any[]
    take_buffer(nbytes: number): Buffer
    available(): number
    available_fast(): number
    prev_timestamp(): [ /* returnType */ ClockTime, /* distance */ number ]
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]
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
    connect(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Adapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Adapter_ConstructProps)
    _init (config?: Adapter_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Adapter
    static $gtype: GObject.Type
}
interface BaseSink_ConstructProps extends Element_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.BaseSink */
    async?: boolean
    blocksize?: number
    enable_last_buffer?: boolean
    max_lateness?: number
    preroll_queue_len?: number
    qos?: boolean
    render_delay?: number
    sync?: boolean
    ts_offset?: number
}
class BaseSink {
    /* Properties of Gst-0.10.Gst.BaseSink */
    async: boolean
    blocksize: number
    enable_last_buffer: boolean
    readonly last_buffer: Buffer
    max_lateness: number
    preroll_queue_len: number
    qos: boolean
    render_delay: number
    sync: boolean
    ts_offset: number
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSink */
    do_preroll(obj: MiniObject): FlowReturn
    wait_preroll(): FlowReturn
    set_sync(sync: boolean): void
    get_sync(): boolean
    set_max_lateness(max_lateness: number): void
    get_max_lateness(): number
    set_qos_enabled(enabled: boolean): void
    is_qos_enabled(): boolean
    set_async_enabled(enabled: boolean): void
    is_async_enabled(): boolean
    set_ts_offset(offset: ClockTimeDiff): void
    get_ts_offset(): ClockTimeDiff
    get_last_buffer(): Buffer
    set_last_buffer_enabled(enable: boolean): void
    is_last_buffer_enabled(): boolean
    query_latency(min_latency: ClockTime, max_latency: ClockTime): [ /* returnType */ boolean, /* live */ boolean, /* upstream_live */ boolean ]
    get_latency(): ClockTime
    set_render_delay(delay: ClockTime): void
    get_render_delay(): ClockTime
    set_blocksize(blocksize: number): void
    get_blocksize(): number
    wait_clock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn
    wait_eos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.BaseSink */
    vfunc_get_caps(): Caps
    vfunc_set_caps(caps: Caps): boolean
    vfunc_buffer_alloc(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_unlock(): boolean
    vfunc_event(event: Event): boolean
    vfunc_preroll(buffer: Buffer): FlowReturn
    vfunc_render(buffer: Buffer): FlowReturn
    vfunc_async_play(): StateChangeReturn
    vfunc_activate_pull(active: boolean): boolean
    vfunc_fixate(caps: Caps): void
    vfunc_unlock_stop(): boolean
    vfunc_render_list(buffer_list: BufferList): FlowReturn
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseSink) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSink, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseSink, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSink, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseSink, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSink, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseSink, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseSink, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: BaseSink, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: BaseSink, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BaseSink, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseSink, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: BaseSink, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: BaseSink, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseSink_ConstructProps)
    _init (config?: BaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseSrc_ConstructProps extends Element_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.BaseSrc */
    blocksize?: number
    do_timestamp?: boolean
    num_buffers?: number
    typefind?: boolean
}
class BaseSrc {
    /* Properties of Gst-0.10.Gst.BaseSrc */
    blocksize: number
    do_timestamp: boolean
    num_buffers: number
    typefind: boolean
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSrc */
    wait_playing(): FlowReturn
    set_live(live: boolean): void
    is_live(): boolean
    set_format(format: Format): void
    query_latency(min_latency: ClockTime, max_latency: ClockTime): [ /* returnType */ boolean, /* live */ boolean ]
    set_blocksize(blocksize: number): void
    get_blocksize(): number
    set_do_timestamp(timestamp: boolean): void
    get_do_timestamp(): boolean
    new_seamless_segment(start: number, stop: number, position: number): boolean
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.BaseSrc */
    vfunc_get_caps(): Caps
    vfunc_set_caps(caps: Caps): boolean
    vfunc_negotiate(): boolean
    vfunc_newsegment(): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void
    vfunc_get_size(): [ /* returnType */ boolean, /* size */ number ]
    vfunc_is_seekable(): boolean
    vfunc_unlock(): boolean
    vfunc_event(event: Event): boolean
    vfunc_create(offset: number, size: number, buf: Buffer): FlowReturn
    vfunc_do_seek(segment: Segment): boolean
    vfunc_query(query: Query): boolean
    /* Function overloads */
    vfunc_query(query: Query): boolean
    vfunc_check_get_range(): boolean
    vfunc_fixate(caps: Caps): void
    vfunc_unlock_stop(): boolean
    vfunc_prepare_seek_segment(seek: Event, segment: Segment): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseSrc, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseSrc, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseSrc, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseSrc, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseSrc, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: BaseSrc, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: BaseSrc, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BaseSrc, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseSrc, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: BaseSrc, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: BaseSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseSrc_ConstructProps)
    _init (config?: BaseSrc_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseTransform_ConstructProps extends Element_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.BaseTransform */
    qos?: boolean
}
class BaseTransform {
    /* Properties of Gst-0.10.Gst.BaseTransform */
    qos: boolean
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseTransform */
    set_passthrough(passthrough: boolean): void
    is_passthrough(): boolean
    set_in_place(in_place: boolean): void
    is_in_place(): boolean
    update_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void
    set_qos_enabled(enabled: boolean): void
    is_qos_enabled(): boolean
    set_gap_aware(gap_aware: boolean): void
    suggest(caps: Caps, size: number): void
    reconfigure(): void
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.BaseTransform */
    vfunc_transform_caps(direction: PadDirection, caps: Caps): Caps
    vfunc_fixate_caps(direction: PadDirection, caps: Caps, othercaps: Caps): void
    vfunc_transform_size(direction: PadDirection, caps: Caps, size: number, othercaps: Caps): [ /* returnType */ boolean, /* othersize */ number ]
    vfunc_get_unit_size(caps: Caps): [ /* returnType */ boolean, /* size */ number ]
    vfunc_set_caps(incaps: Caps, outcaps: Caps): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_event(event: Event): boolean
    vfunc_transform(inbuf: Buffer, outbuf: Buffer): FlowReturn
    vfunc_transform_ip(buf: Buffer): FlowReturn
    vfunc_prepare_output_buffer(input: Buffer, size: number, caps: Caps, buf: Buffer): FlowReturn
    vfunc_src_event(event: Event): boolean
    vfunc_before_transform(buffer: Buffer): void
    vfunc_accept_caps(direction: PadDirection, caps: Caps): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: BaseTransform) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: BaseTransform, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: BaseTransform, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: BaseTransform, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: BaseTransform, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BaseTransform, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BaseTransform, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: BaseTransform, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: BaseTransform, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: BaseTransform, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: BaseTransform, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: BaseTransform, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: BaseTransform, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: BaseTransform, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BaseTransform_ConstructProps)
    _init (config?: BaseTransform_ConstructProps): void
    static $gtype: GObject.Type
}
interface Bin_ConstructProps extends Element_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.Bin */
    async_handling?: boolean
}
class Bin {
    /* Properties of Gst-0.10.Gst.Bin */
    async_handling: boolean
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Element): boolean
    remove(element: Element): boolean
    get_by_name(name: string): Element
    get_by_name_recurse_up(name: string): Element
    get_by_interface(iface: GObject.Type): Element
    iterate_elements(): Iterator
    iterate_sorted(): Iterator
    iterate_recurse(): Iterator
    iterate_sinks(): Iterator
    iterate_sources(): Iterator
    iterate_all_by_interface(iface: GObject.Type): Iterator
    recalculate_latency(): boolean
    find_unlinked_pad(direction: PadDirection): Pad
    find_unconnected_pad(direction: PadDirection): Pad
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Bin */
    vfunc_add_element(element: Element): boolean
    vfunc_remove_element(element: Element): boolean
    vfunc_handle_message(message: Message): void
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (($obj: Bin) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Bin) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Bin, object: Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Bin, object: Element) => void)): number
    emit(sigName: "element-added", object: Element): void
    connect(sigName: "element-removed", callback: (($obj: Bin, object: Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Bin, object: Element) => void)): number
    emit(sigName: "element-removed", object: Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Bin, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Bin, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Bin, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Bin, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bin, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Bin, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Bin, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Bin, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Bin, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Bin, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Bin, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Bin, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bin_ConstructProps)
    _init (config?: Bin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Bin
    static $gtype: GObject.Type
}
class Buffer {
    /* Fields of Gst-0.10.Gst.MiniObject */
    readonly instance: GObject.TypeInstance
    readonly refcount: number
    readonly flags: number
    readonly _gst_reserved: object
    /* Methods of Gst-0.10.Gst.Buffer */
    copy_metadata(src: Buffer, flags: BufferCopyFlags): void
    is_metadata_writable(): boolean
    make_metadata_writable(): Buffer
    get_caps(): Caps
    set_caps(caps: Caps): void
    create_sub(offset: number, size: number): Buffer
    is_span_fast(buf2: Buffer): boolean
    span(offset: number, buf2: Buffer, len: number): Buffer
    merge(buf2: Buffer): Buffer
    join(buf2: Buffer): Buffer
    stamp(src: Buffer): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): boolean
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    static new(): Buffer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Buffer
    /* Function overloads */
    static new(type: GObject.Type): Buffer
    static new_and_alloc(size: number): Buffer
    static try_new_and_alloc(size: number): Buffer
}
class BufferList {
    /* Fields of Gst-0.10.Gst.MiniObject */
    readonly instance: GObject.TypeInstance
    readonly refcount: number
    readonly flags: number
    readonly _gst_reserved: object
    /* Methods of Gst-0.10.Gst.BufferList */
    n_groups(): number
    foreach(func: BufferListFunc, user_data: object): void
    get(group: number, idx: number): Buffer
    iterate(): BufferListIterator
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): boolean
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    static new(): BufferList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BufferList
    /* Function overloads */
    static new(type: GObject.Type): BufferList
}
interface Bus_ConstructProps extends Object_ConstructProps {
}
class Bus {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Bus */
    post(message: Message): boolean
    have_pending(): boolean
    peek(): Message
    pop(): Message
    pop_filtered(types: MessageType): Message
    timed_pop(timeout: ClockTime): Message
    timed_pop_filtered(timeout: ClockTime, types: MessageType): Message
    set_flushing(flushing: boolean): void
    set_sync_handler(func: BusSyncHandler, data: object): void
    create_watch(): GLib.Source
    add_watch_full(priority: number, func: BusFunc, user_data: object): number
    add_watch(func: BusFunc, user_data: object): number
    poll(events: MessageType, timeout: ClockTimeDiff): Message
    async_signal_func(message: Message, data: object): boolean
    sync_signal_handler(message: Message, data: object): BusSyncReply
    add_signal_watch(): void
    add_signal_watch_full(priority: number): void
    remove_signal_watch(): void
    enable_sync_message_emission(): void
    disable_sync_message_emission(): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Bus */
    connect(sigName: "message", callback: (($obj: Bus, object: Message) => void)): number
    connect_after(sigName: "message", callback: (($obj: Bus, object: Message) => void)): number
    emit(sigName: "message", object: Message): void
    connect(sigName: "sync-message", callback: (($obj: Bus, object: Message) => void)): number
    connect_after(sigName: "sync-message", callback: (($obj: Bus, object: Message) => void)): number
    emit(sigName: "sync-message", object: Message): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bus, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Bus, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Bus, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Bus, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Bus, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Bus, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Bus, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Bus, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bus_ConstructProps)
    _init (config?: Bus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Bus
    static $gtype: GObject.Type
}
interface Clock_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.Clock */
    stats?: boolean
    timeout?: number
    window_size?: number
    window_threshold?: number
}
class Clock {
    /* Properties of Gst-0.10.Gst.Clock */
    stats: boolean
    timeout: number
    window_size: number
    window_threshold: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Clock */
    set_resolution(resolution: ClockTime): ClockTime
    get_resolution(): ClockTime
    get_time(): ClockTime
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    get_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    set_master(master: Clock): boolean
    get_master(): Clock
    add_observation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    get_internal_time(): ClockTime
    adjust_unlocked(internal: ClockTime): ClockTime
    unadjust_unlocked(external: ClockTime): ClockTime
    new_single_shot_id(time: ClockTime): ClockID
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Clock */
    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime
    vfunc_get_resolution(): ClockTime
    vfunc_get_internal_time(): ClockTime
    vfunc_wait(entry: ClockEntry): ClockReturn
    vfunc_wait_async(entry: ClockEntry): ClockReturn
    vfunc_unschedule(entry: ClockEntry): void
    vfunc_wait_jitter(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Clock, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Clock, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Clock, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Clock, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Clock, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Clock, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Clock, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Clock, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::stats", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Clock_ConstructProps)
    _init (config?: Clock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static id_ref(id: ClockID): ClockID
    static id_unref(id: ClockID): void
    static id_compare_func(id1: object, id2: object): number
    static id_get_time(id: ClockID): ClockTime
    static id_wait(id: ClockID, jitter: ClockTimeDiff): ClockReturn
    static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn
    static id_wait_async_full(id: ClockID, func: ClockCallback): ClockReturn
    static id_unschedule(id: ClockID): void
    static $gtype: GObject.Type
}
interface CollectPads_ConstructProps extends Object_ConstructProps {
}
class CollectPads {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.CollectPads */
    set_function(func: CollectPadsFunction, user_data: object): void
    set_clip_function(clipfunc: CollectPadsClipFunction, user_data: object): void
    add_pad(pad: Pad, size: number): CollectData
    add_pad_full(pad: Pad, size: number, destroy_notify: CollectDataDestroyNotify): CollectData
    remove_pad(pad: Pad): boolean
    is_active(pad: Pad): boolean
    collect(): FlowReturn
    collect_range(offset: number, length: number): FlowReturn
    start(): void
    stop(): void
    set_flushing(flushing: boolean): void
    peek(data: CollectData): Buffer
    pop(data: CollectData): Buffer
    available(): number
    read(data: CollectData, size: number): [ /* returnType */ number, /* bytes */ number ]
    read_buffer(data: CollectData, size: number): Buffer
    take_buffer(data: CollectData, size: number): Buffer
    flush(data: CollectData, size: number): number
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: CollectPads, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: CollectPads, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: CollectPads, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: CollectPads, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: CollectPads, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: CollectPads, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: CollectPads, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: CollectPads, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CollectPads, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CollectPads_ConstructProps)
    _init (config?: CollectPads_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): CollectPads
    static $gtype: GObject.Type
}
interface DataQueue_ConstructProps extends GObject.Object_ConstructProps {
}
class DataQueue {
    /* Properties of Gst-0.10.Gst.DataQueue */
    readonly current_level_bytes: number
    readonly current_level_time: number
    readonly current_level_visible: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.DataQueue */
    push(item: DataQueueItem): boolean
    pop(item: DataQueueItem): boolean
    flush(): void
    set_flushing(flushing: boolean): void
    drop_head(type: GObject.Type): boolean
    is_full(): boolean
    is_empty(): boolean
    get_level(level: DataQueueSize): void
    limits_changed(): void
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
    /* Signals of Gst-0.10.Gst.DataQueue */
    connect(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    connect_after(sigName: "empty", callback: (($obj: DataQueue) => void)): number
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (($obj: DataQueue) => void)): number
    connect_after(sigName: "full", callback: (($obj: DataQueue) => void)): number
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: DataQueue, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DataQueue_ConstructProps)
    _init (config?: DataQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(checkfull: DataQueueCheckFullFunction): DataQueue
    static new_full(checkfull: DataQueueCheckFullFunction, fullcallback: DataQueueFullCallback, emptycallback: DataQueueEmptyCallback): DataQueue
    static $gtype: GObject.Type
}
interface Element_ConstructProps extends Object_ConstructProps {
}
class Element {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Element, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Element, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Element, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Element, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Element, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Element, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Element, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Element, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Element, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Element, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Element, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Element, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Element, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Element_ConstructProps)
    _init (config?: Element_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin, name: string, rank: number, type: GObject.Type): boolean
    static make_from_uri(type: URIType, uri: string, elementname: string): Element
    static state_get_name(state: State): string
    static state_change_return_get_name(state_ret: StateChangeReturn): string
    static $gtype: GObject.Type
}
interface ElementFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class ElementFactory {
    /* Fields of Gst-0.10.Gst.PluginFeature */
    readonly object: Object
    readonly loaded: boolean
    readonly name: string
    readonly rank: number
    readonly plugin_name: string
    readonly _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.ElementFactory */
    get_element_type(): GObject.Type
    get_longname(): string
    get_klass(): string
    get_description(): string
    get_author(): string
    get_num_pad_templates(): number
    get_uri_type(): number
    get_uri_protocols(): string[]
    has_interface(interfacename: string): boolean
    create(name: string): Element
    can_src_caps(caps: Caps): boolean
    can_sink_caps(caps: Caps): boolean
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    type_name_filter(data: TypeNameData): boolean
    set_rank(rank: number): void
    set_name(name: string): void
    get_rank(): number
    get_name(): string
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ElementFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ElementFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ElementFactory, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ElementFactory, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: ElementFactory, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ElementFactory, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ElementFactory, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ElementFactory, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ElementFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ElementFactory_ConstructProps)
    _init (config?: ElementFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name: string): ElementFactory
    static make(factoryname: string, name: string): Element
    static $gtype: GObject.Type
}
class Event {
    /* Fields of Gst-0.10.Gst.MiniObject */
    readonly instance: GObject.TypeInstance
    readonly refcount: number
    readonly flags: number
    readonly _gst_reserved: object
    /* Methods of Gst-0.10.Gst.Event */
    get_structure(): Structure
    has_name(name: string): boolean
    get_seqnum(): number
    set_seqnum(seqnum: number): void
    parse_new_segment(format: Format): [ /* update */ boolean, /* rate */ number, /* start */ number, /* stop */ number, /* position */ number ]
    parse_new_segment_full(format: Format): [ /* update */ boolean, /* rate */ number, /* applied_rate */ number, /* start */ number, /* stop */ number, /* position */ number ]
    parse_tag(taglist: TagList): void
    parse_buffer_size(format: Format): [ /* minsize */ number, /* maxsize */ number, /* async */ boolean ]
    parse_qos(diff: ClockTimeDiff, timestamp: ClockTime): /* proportion */ number
    parse_seek(format: Format, flags: SeekFlags, start_type: SeekType, stop_type: SeekType): [ /* rate */ number, /* start */ number, /* stop */ number ]
    parse_latency(latency: ClockTime): void
    parse_step(format: Format): [ /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    parse_sink_message(msg: Message): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): boolean
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_custom(type: EventType, structure: Structure): Event
    static new_flush_start(): Event
    static new_flush_stop(): Event
    static new_eos(): Event
    static new_new_segment(update: boolean, rate: number, format: Format, start: number, stop: number, position: number): Event
    static new_new_segment_full(update: boolean, rate: number, applied_rate: number, format: Format, start: number, stop: number, position: number): Event
    static new_tag(taglist: TagList): Event
    static new_buffer_size(format: Format, minsize: number, maxsize: number, async: boolean): Event
    static new_qos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static new_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): Event
    static new_navigation(structure: Structure): Event
    static new_latency(latency: ClockTime): Event
    static new_step(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event
    static new_sink_message(msg: Message): Event
    static type_get_name(type: EventType): string
    static type_to_quark(type: EventType): GLib.Quark
    static type_get_flags(type: EventType): EventTypeFlags
}
interface GParamSpecMiniObject_ConstructProps extends GObject.Object_ConstructProps {
}
class GParamSpecMiniObject {
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
    connect(sigName: "notify", callback: (($obj: GParamSpecMiniObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GParamSpecMiniObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GParamSpecMiniObject_ConstructProps)
    _init (config?: GParamSpecMiniObject_ConstructProps): void
    static $gtype: GObject.Type
}
interface GhostPad_ConstructProps extends ProxyPad_ConstructProps {
}
class GhostPad {
    /* Properties of Gst-0.10.Gst.Pad */
    template: PadTemplate
    /* Fields of Gst-0.10.Gst.ProxyPad */
    readonly pad: Pad
    readonly priv: ProxyPadPrivate
    /* Fields of Gst-0.10.Gst.Pad */
    readonly object: Object
    readonly element_private: object
    readonly padtemplate: PadTemplate
    readonly direction: PadDirection
    readonly stream_rec_lock: any
    readonly task: Task
    readonly preroll_lock: GLib.Mutex
    readonly preroll_cond: GLib.Cond
    readonly block_cond: GLib.Cond
    readonly block_callback: PadBlockCallback
    readonly block_data: object
    readonly caps: Caps
    readonly getcapsfunc: PadGetCapsFunction
    readonly setcapsfunc: PadSetCapsFunction
    readonly acceptcapsfunc: PadAcceptCapsFunction
    readonly fixatecapsfunc: PadFixateCapsFunction
    readonly activatefunc: PadActivateFunction
    readonly activatepushfunc: PadActivateModeFunction
    readonly activatepullfunc: PadActivateModeFunction
    readonly linkfunc: PadLinkFunction
    readonly unlinkfunc: PadUnlinkFunction
    readonly peer: Pad
    readonly sched_private: object
    readonly chainfunc: PadChainFunction
    readonly checkgetrangefunc: PadCheckGetRangeFunction
    readonly getrangefunc: PadGetRangeFunction
    readonly eventfunc: PadEventFunction
    readonly mode: ActivateMode
    readonly querytypefunc: PadQueryTypeFunction
    readonly queryfunc: PadQueryFunction
    readonly intlinkfunc: PadIntLinkFunction
    readonly bufferallocfunc: PadBufferAllocFunction
    readonly do_buffer_signals: number
    readonly do_event_signals: number
    readonly iterintlinkfunc: PadIterIntLinkFunction
    readonly block_destroy_data: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.GhostPad */
    get_target(): Pad
    set_target(newtarget: Pad): boolean
    construct(): boolean
    /* Methods of Gst-0.10.Gst.Pad */
    get_direction(): PadDirection
    set_active(active: boolean): boolean
    is_active(): boolean
    activate_pull(active: boolean): boolean
    activate_push(active: boolean): boolean
    set_blocked(blocked: boolean): boolean
    set_blocked_async(blocked: boolean, callback: PadBlockCallback, user_data: object): boolean
    set_blocked_async_full(blocked: boolean, callback: PadBlockCallback, user_data: object): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    set_element_private(priv: object): void
    get_element_private(): object
    get_pad_template(): PadTemplate
    set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void
    alloc_buffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    alloc_buffer_and_set_caps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    set_activate_function(activate: PadActivateFunction): void
    set_activatepull_function(activatepull: PadActivateModeFunction): void
    set_activatepush_function(activatepush: PadActivateModeFunction): void
    set_chain_function(chain: PadChainFunction): void
    set_chain_list_function(chainlist: PadChainListFunction): void
    set_getrange_function(get: PadGetRangeFunction): void
    set_checkgetrange_function(check: PadCheckGetRangeFunction): void
    set_event_function(event: PadEventFunction): void
    set_link_function(link: PadLinkFunction): void
    set_unlink_function(unlink: PadUnlinkFunction): void
    can_link(sinkpad: Pad): boolean
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): boolean
    is_linked(): boolean
    get_peer(): Pad
    set_getcaps_function(getcaps: PadGetCapsFunction): void
    set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void
    set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void
    set_setcaps_function(setcaps: PadSetCapsFunction): void
    get_pad_template_caps(): Caps
    get_caps_reffed(): Caps
    get_caps(): Caps
    fixate_caps(caps: Caps): void
    accept_caps(caps: Caps): boolean
    set_caps(caps: Caps): boolean
    peer_get_caps_reffed(): Caps
    peer_get_caps(): Caps
    peer_accept_caps(caps: Caps): boolean
    get_allowed_caps(): Caps
    get_negotiated_caps(): Caps
    push(buffer: Buffer): FlowReturn
    push_list(list: BufferList): FlowReturn
    check_pull_range(): boolean
    pull_range(offset: number, size: number, buffer: Buffer): FlowReturn
    push_event(event: Event): boolean
    event_default(event: Event): boolean
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    get_range(offset: number, size: number, buffer: Buffer): FlowReturn
    send_event(event: Event): boolean
    start_task(func: TaskFunction, data: object): boolean
    pause_task(): boolean
    stop_task(): boolean
    set_internal_link_function(intlink: PadIntLinkFunction): void
    set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void
    iterate_internal_links(): Iterator
    iterate_internal_links_default(): Iterator
    set_query_type_function(type_func: PadQueryTypeFunction): void
    get_query_types(): QueryType
    get_query_types_default(): QueryType
    query(query: Query): boolean
    peer_query(query: Query): boolean
    set_query_function(query: PadQueryFunction): void
    query_default(query: Query): boolean
    dispatcher(dispatch: PadDispatcherFunction, data: object): boolean
    use_fixed_caps(): void
    get_fixed_caps_func(): Caps
    proxy_getcaps(): Caps
    proxy_setcaps(caps: Caps): boolean
    get_parent_element(): Element
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_peer_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_peer_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_peer_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    add_data_probe(handler: GObject.Callback, data: object): number
    add_data_probe_full(handler: GObject.Callback, data: object): number
    remove_data_probe(handler_id: number): void
    add_event_probe(handler: GObject.Callback, data: object): number
    add_event_probe_full(handler: GObject.Callback, data: object): number
    remove_event_probe(handler_id: number): void
    add_buffer_probe(handler: GObject.Callback, data: object): number
    add_buffer_probe_full(handler: GObject.Callback, data: object): number
    remove_buffer_probe(handler_id: number): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: GhostPad, object: MiniObject) => boolean)): number
    connect_after(sigName: "have-data", callback: (($obj: GhostPad, object: MiniObject) => boolean)): number
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: GhostPad, object: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: GhostPad, object: Pad) => void)): number
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: GhostPad) => void)): number
    connect_after(sigName: "request-link", callback: (($obj: GhostPad) => void)): number
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: GhostPad, object: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: GhostPad, object: Pad) => void)): number
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GhostPad, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GhostPad, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: GhostPad, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: GhostPad, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: GhostPad, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: GhostPad, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: GhostPad, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: GhostPad, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GhostPad_ConstructProps)
    _init (config?: GhostPad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, target: Pad): GhostPad
    /* Function overloads */
    static new(name: string, direction: PadDirection): GhostPad
    static new_no_target(name: string, dir: PadDirection): GhostPad
    static new_from_template(name: string, target: Pad, templ: PadTemplate): GhostPad
    /* Function overloads */
    static new_from_template(templ: PadTemplate, name: string): GhostPad
    static new_no_target_from_template(name: string, templ: PadTemplate): GhostPad
    static $gtype: GObject.Type
}
interface Index_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.Index */
    resolver?: IndexResolver
}
class Index {
    /* Properties of Gst-0.10.Gst.Index */
    resolver: IndexResolver
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Index */
    commit(id: number): void
    get_group(): number
    new_group(): number
    set_group(groupnum: number): boolean
    set_certainty(certainty: IndexCertainty): void
    get_certainty(): IndexCertainty
    set_filter(filter: IndexFilter, user_data: object): void
    set_filter_full(filter: IndexFilter, user_data: object): void
    set_resolver(resolver: IndexResolver, user_data: object): void
    set_resolver_full(resolver: IndexResolver, user_data: object): void
    get_writer_id(writer: Object): [ /* returnType */ boolean, /* id */ number ]
    add_format(id: number, format: Format): IndexEntry
    add_associationv(id: number, flags: AssocFlags, n: number, list: IndexAssociation): IndexEntry
    add_object(id: number, key: string, type: GObject.Type, object: object): IndexEntry
    add_id(id: number, description: string): IndexEntry
    get_assoc_entry(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number): IndexEntry
    get_assoc_entry_full(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc, user_data: object): IndexEntry
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Index */
    vfunc_get_writer_id(writer_string: string): [ /* returnType */ boolean, /* writer_id */ number ]
    vfunc_commit(id: number): void
    vfunc_add_entry(entry: IndexEntry): void
    vfunc_get_assoc_entry(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc, user_data: object): IndexEntry
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Index */
    connect(sigName: "entry-added", callback: (($obj: Index, object: IndexEntry) => void)): number
    connect_after(sigName: "entry-added", callback: (($obj: Index, object: IndexEntry) => void)): number
    emit(sigName: "entry-added", object: IndexEntry): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Index, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Index, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Index, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Index, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Index, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Index, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Index, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Index, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::resolver", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolver", callback: (($obj: Index, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Index_ConstructProps)
    _init (config?: Index_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Index
    static $gtype: GObject.Type
}
interface IndexFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class IndexFactory {
    /* Fields of Gst-0.10.Gst.PluginFeature */
    readonly object: Object
    readonly loaded: boolean
    readonly name: string
    readonly rank: number
    readonly plugin_name: string
    readonly _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.IndexFactory */
    destroy(): void
    create(): Index
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    type_name_filter(data: TypeNameData): boolean
    set_rank(rank: number): void
    set_name(name: string): void
    get_rank(): number
    get_name(): string
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: IndexFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: IndexFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: IndexFactory, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: IndexFactory, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: IndexFactory, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: IndexFactory, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: IndexFactory, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: IndexFactory, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndexFactory_ConstructProps)
    _init (config?: IndexFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, longdesc: string, type: GObject.Type): IndexFactory
    static find(name: string): IndexFactory
    static make(name: string): Index
    static $gtype: GObject.Type
}
class Message {
    /* Fields of Gst-0.10.Gst.MiniObject */
    readonly instance: GObject.TypeInstance
    readonly refcount: number
    readonly flags: number
    readonly _gst_reserved: object
    /* Methods of Gst-0.10.Gst.Message */
    get_seqnum(): number
    set_seqnum(seqnum: number): void
    parse_error(gerror: GLib.Error, debug: string[]): void
    parse_warning(gerror: GLib.Error, debug: string[]): void
    parse_info(gerror: GLib.Error, debug: string[]): void
    parse_tag(tag_list: TagList): void
    parse_tag_full(pad: Pad, tag_list: TagList): void
    parse_buffering(): /* percent */ number
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void
    parse_buffering_stats(mode: BufferingMode): [ /* avg_in */ number, /* avg_out */ number, /* buffering_left */ number ]
    parse_state_changed(oldstate: State, newstate: State, pending: State): void
    parse_step_done(format: Format): [ /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean, /* duration */ number, /* eos */ boolean ]
    parse_clock_provide(clock: Clock): /* ready */ boolean
    parse_clock_lost(clock: Clock): void
    parse_new_clock(clock: Clock): void
    parse_segment_start(format: Format): /* position */ number
    parse_segment_done(format: Format): /* position */ number
    parse_duration(format: Format): /* duration */ number
    parse_async_start(): /* new_base_time */ boolean
    parse_structure_change(type: StructureChangeType, owner: Element): /* busy */ boolean
    parse_stream_status(type: StreamStatusType, owner: Element): void
    set_stream_status_object(object: any): void
    get_stream_status_object(): any
    parse_request_state(state: State): void
    parse_step_start(format: Format): [ /* active */ boolean, /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    set_qos_values(jitter: number, proportion: number, quality: number): void
    set_qos_stats(format: Format, processed: number, dropped: number): void
    parse_qos(): [ /* live */ boolean, /* running_time */ number, /* stream_time */ number, /* timestamp */ number, /* duration */ number ]
    parse_qos_values(): [ /* jitter */ number, /* proportion */ number, /* quality */ number ]
    parse_qos_stats(format: Format): [ /* processed */ number, /* dropped */ number ]
    get_structure(): Structure
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): boolean
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_eos(src: Object): Message
    static new_error(src: Object, error: GLib.Error, debug: string): Message
    static new_warning(src: Object, error: GLib.Error, debug: string): Message
    static new_info(src: Object, error: GLib.Error, debug: string): Message
    static new_tag(src: Object, tag_list: TagList): Message
    static new_tag_full(src: Object, pad: Pad, tag_list: TagList): Message
    static new_buffering(src: Object, percent: number): Message
    static new_state_changed(src: Object, oldstate: State, newstate: State, pending: State): Message
    static new_state_dirty(src: Object): Message
    static new_step_done(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message
    static new_clock_provide(src: Object, clock: Clock, ready: boolean): Message
    static new_clock_lost(src: Object, clock: Clock): Message
    static new_new_clock(src: Object, clock: Clock): Message
    static new_application(src: Object, structure: Structure): Message
    static new_element(src: Object, structure: Structure): Message
    static new_segment_start(src: Object, format: Format, position: number): Message
    static new_segment_done(src: Object, format: Format, position: number): Message
    static new_duration(src: Object, format: Format, duration: number): Message
    static new_latency(src: Object): Message
    static new_async_start(src: Object, new_base_time: boolean): Message
    static new_async_done(src: Object): Message
    static new_structure_change(src: Object, type: StructureChangeType, owner: Element, busy: boolean): Message
    static new_stream_status(src: Object, type: StreamStatusType, owner: Element): Message
    static new_request_state(src: Object, state: State): Message
    static new_step_start(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message
    static new_qos(src: Object, live: boolean, running_time: number, stream_time: number, timestamp: number, duration: number): Message
    static new_custom(type: MessageType, src: Object, structure: Structure): Message
    static type_get_name(type: MessageType): string
    static type_to_quark(type: MessageType): GLib.Quark
}
class MiniObject {
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): boolean
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    static new(type: GObject.Type): MiniObject
    constructor(type: GObject.Type)
    /* Static methods and pseudo-constructors */
    static new(type: GObject.Type): MiniObject
}
interface Object_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.Object */
    name?: string
}
class Object {
    /* Properties of Gst-0.10.Gst.Object */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Object, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Object, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Object, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Object, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Object, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Object, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Object, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Object, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static default_deep_notify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excluded_props: string[]): void
    static ref(object: object): object
    static unref(object: object): void
    static ref_sink(object: object): void
    static sink(object: object): void
    static $gtype: GObject.Type
}
interface Pad_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.Pad */
    direction?: PadDirection
    template?: PadTemplate
}
class Pad {
    /* Properties of Gst-0.10.Gst.Pad */
    readonly caps: Caps
    template: PadTemplate
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pad */
    get_direction(): PadDirection
    set_active(active: boolean): boolean
    is_active(): boolean
    activate_pull(active: boolean): boolean
    activate_push(active: boolean): boolean
    set_blocked(blocked: boolean): boolean
    set_blocked_async(blocked: boolean, callback: PadBlockCallback, user_data: object): boolean
    set_blocked_async_full(blocked: boolean, callback: PadBlockCallback, user_data: object): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    set_element_private(priv: object): void
    get_element_private(): object
    get_pad_template(): PadTemplate
    set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void
    alloc_buffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    alloc_buffer_and_set_caps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    set_activate_function(activate: PadActivateFunction): void
    set_activatepull_function(activatepull: PadActivateModeFunction): void
    set_activatepush_function(activatepush: PadActivateModeFunction): void
    set_chain_function(chain: PadChainFunction): void
    set_chain_list_function(chainlist: PadChainListFunction): void
    set_getrange_function(get: PadGetRangeFunction): void
    set_checkgetrange_function(check: PadCheckGetRangeFunction): void
    set_event_function(event: PadEventFunction): void
    set_link_function(link: PadLinkFunction): void
    set_unlink_function(unlink: PadUnlinkFunction): void
    can_link(sinkpad: Pad): boolean
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): boolean
    is_linked(): boolean
    get_peer(): Pad
    set_getcaps_function(getcaps: PadGetCapsFunction): void
    set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void
    set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void
    set_setcaps_function(setcaps: PadSetCapsFunction): void
    get_pad_template_caps(): Caps
    get_caps_reffed(): Caps
    get_caps(): Caps
    fixate_caps(caps: Caps): void
    accept_caps(caps: Caps): boolean
    set_caps(caps: Caps): boolean
    peer_get_caps_reffed(): Caps
    peer_get_caps(): Caps
    peer_accept_caps(caps: Caps): boolean
    get_allowed_caps(): Caps
    get_negotiated_caps(): Caps
    push(buffer: Buffer): FlowReturn
    push_list(list: BufferList): FlowReturn
    check_pull_range(): boolean
    pull_range(offset: number, size: number, buffer: Buffer): FlowReturn
    push_event(event: Event): boolean
    event_default(event: Event): boolean
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    get_range(offset: number, size: number, buffer: Buffer): FlowReturn
    send_event(event: Event): boolean
    start_task(func: TaskFunction, data: object): boolean
    pause_task(): boolean
    stop_task(): boolean
    set_internal_link_function(intlink: PadIntLinkFunction): void
    set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void
    iterate_internal_links(): Iterator
    iterate_internal_links_default(): Iterator
    set_query_type_function(type_func: PadQueryTypeFunction): void
    get_query_types(): QueryType
    get_query_types_default(): QueryType
    query(query: Query): boolean
    peer_query(query: Query): boolean
    set_query_function(query: PadQueryFunction): void
    query_default(query: Query): boolean
    dispatcher(dispatch: PadDispatcherFunction, data: object): boolean
    use_fixed_caps(): void
    get_fixed_caps_func(): Caps
    proxy_getcaps(): Caps
    proxy_setcaps(caps: Caps): boolean
    get_parent_element(): Element
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_peer_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_peer_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_peer_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    add_data_probe(handler: GObject.Callback, data: object): number
    add_data_probe_full(handler: GObject.Callback, data: object): number
    remove_data_probe(handler_id: number): void
    add_event_probe(handler: GObject.Callback, data: object): number
    add_event_probe_full(handler: GObject.Callback, data: object): number
    remove_event_probe(handler_id: number): void
    add_buffer_probe(handler: GObject.Callback, data: object): number
    add_buffer_probe_full(handler: GObject.Callback, data: object): number
    remove_buffer_probe(handler_id: number): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: Pad, object: MiniObject) => boolean)): number
    connect_after(sigName: "have-data", callback: (($obj: Pad, object: MiniObject) => boolean)): number
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: Pad, object: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: Pad, object: Pad) => void)): number
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: Pad) => void)): number
    connect_after(sigName: "request-link", callback: (($obj: Pad) => void)): number
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: Pad, object: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: Pad, object: Pad) => void)): number
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pad, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pad, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Pad, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Pad, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Pad, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Pad, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Pad, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Pad, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pad_ConstructProps)
    _init (config?: Pad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, direction: PadDirection): Pad
    static new_from_template(templ: PadTemplate, name: string): Pad
    static new_from_static_template(templ: StaticPadTemplate, name: string): Pad
    static load_and_link(self: libxml2.NodePtr, parent: Object): void
    static $gtype: GObject.Type
}
interface PadTemplate_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.PadTemplate */
    caps?: Caps
    direction?: PadDirection
    name_template?: string
    presence?: PadPresence
}
class PadTemplate {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.PadTemplate */
    get_caps(): Caps
    pad_created(pad: Pad): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.PadTemplate */
    connect(sigName: "pad-created", callback: (($obj: PadTemplate, object: Pad) => void)): number
    connect_after(sigName: "pad-created", callback: (($obj: PadTemplate, object: Pad) => void)): number
    emit(sigName: "pad-created", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PadTemplate, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PadTemplate, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PadTemplate, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: PadTemplate, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: PadTemplate, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PadTemplate, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PadTemplate, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: PadTemplate, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PadTemplate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PadTemplate_ConstructProps)
    _init (config?: PadTemplate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate
    static $gtype: GObject.Type
}
interface ParamFraction_ConstructProps extends GObject.Object_ConstructProps {
}
class ParamFraction {
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
    connect(sigName: "notify", callback: (($obj: ParamFraction, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ParamFraction, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ParamFraction_ConstructProps)
    _init (config?: ParamFraction_ConstructProps): void
    static $gtype: GObject.Type
}
interface Pipeline_ConstructProps extends Bin_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.Pipeline */
    auto_flush_bus?: boolean
    delay?: number
}
class Pipeline {
    /* Properties of Gst-0.10.Gst.Pipeline */
    auto_flush_bus: boolean
    delay: number
    /* Properties of Gst-0.10.Gst.Bin */
    async_handling: boolean
    /* Fields of Gst-0.10.Gst.Bin */
    readonly element: Element
    readonly numchildren: number
    readonly children: object[]
    readonly children_cookie: number
    readonly child_bus: Bus
    readonly messages: object[]
    readonly polling: boolean
    readonly state_dirty: boolean
    readonly clock_dirty: boolean
    readonly provided_clock: Clock
    readonly clock_provider: Element
    readonly priv: BinPrivate
    readonly _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pipeline */
    get_bus(): Bus
    set_new_stream_time(time: ClockTime): void
    get_last_stream_time(): ClockTime
    use_clock(clock: Clock): void
    set_clock(clock: Clock): boolean
    get_clock(): Clock
    auto_clock(): void
    set_delay(delay: ClockTime): void
    get_delay(): ClockTime
    set_auto_flush_bus(auto_flush: boolean): void
    get_auto_flush_bus(): boolean
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Element): boolean
    remove(element: Element): boolean
    get_by_name(name: string): Element
    get_by_name_recurse_up(name: string): Element
    get_by_interface(iface: GObject.Type): Element
    iterate_elements(): Iterator
    iterate_sorted(): Iterator
    iterate_recurse(): Iterator
    iterate_sinks(): Iterator
    iterate_sources(): Iterator
    iterate_all_by_interface(iface: GObject.Type): Iterator
    recalculate_latency(): boolean
    find_unlinked_pad(direction: PadDirection): Pad
    find_unconnected_pad(direction: PadDirection): Pad
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Methods of Gst-0.10.Gst.ChildProxy */
    get_child_by_name(name: string): Object
    get_child_by_index(index: number): Object
    get_children_count(): number
    /* Virtual methods of Gst-0.10.Gst.Pipeline */
    vfunc_get_child_by_index(index: number): Object
    vfunc_get_children_count(): number
    /* Virtual methods of Gst-0.10.Gst.Bin */
    vfunc_add_element(element: Element): boolean
    vfunc_remove_element(element: Element): boolean
    vfunc_handle_message(message: Message): void
    vfunc_get_child_by_index(index: number): Object
    vfunc_get_children_count(): number
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Pipeline, object: Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Pipeline, object: Element) => void)): number
    emit(sigName: "element-added", object: Element): void
    connect(sigName: "element-removed", callback: (($obj: Pipeline, object: Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Pipeline, object: Element) => void)): number
    emit(sigName: "element-removed", object: Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Pipeline, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Pipeline, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Pipeline, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Pipeline, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pipeline, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pipeline, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Pipeline, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Pipeline, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Pipeline, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Pipeline, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Pipeline, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Pipeline, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Pipeline, object: GObject.Object) => void)): number
    emit(sigName: "child-removed", object: GObject.Object): void
    connect(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pipeline_ConstructProps)
    _init (config?: Pipeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Pipeline
    /* Function overloads */
    static new(name: string): Pipeline
    static $gtype: GObject.Type
}
interface Plugin_ConstructProps extends Object_ConstructProps {
}
class Plugin {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Plugin */
    get_name(): string
    get_description(): string
    get_filename(): string
    get_version(): string
    get_license(): string
    get_source(): string
    get_package(): string
    get_origin(): string
    get_cache_data(): Structure
    set_cache_data(cache_data: Structure): void
    get_module(): GModule.Module
    is_loaded(): boolean
    name_filter(name: string): boolean
    load(): Plugin
    add_dependency(env_vars: string[], paths: string[], names: string[], flags: PluginDependencyFlags): void
    add_dependency_simple(env_vars: string, paths: string, names: string, flags: PluginDependencyFlags): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Plugin, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Plugin, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Plugin, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Plugin, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Plugin, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Plugin, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Plugin, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Plugin, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register_static(major_version: number, minor_version: number, name: string, description: string, init_func: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    static register_static_full(major_version: number, minor_version: number, name: string, description: string, init_full_func: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string, user_data: object): boolean
    static load_file(filename: string): Plugin
    static load_by_name(name: string): Plugin
    static $gtype: GObject.Type
}
interface PluginFeature_ConstructProps extends Object_ConstructProps {
}
class PluginFeature {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    type_name_filter(data: TypeNameData): boolean
    set_rank(rank: number): void
    set_name(name: string): void
    get_rank(): number
    get_name(): string
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PluginFeature, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PluginFeature, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PluginFeature, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: PluginFeature, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: PluginFeature, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PluginFeature, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PluginFeature, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: PluginFeature, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PluginFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PluginFeature_ConstructProps)
    _init (config?: PluginFeature_ConstructProps): void
    static $gtype: GObject.Type
}
interface ProxyPad_ConstructProps extends Pad_ConstructProps {
}
class ProxyPad {
    /* Properties of Gst-0.10.Gst.Pad */
    template: PadTemplate
    /* Fields of Gst-0.10.Gst.Pad */
    readonly object: Object
    readonly element_private: object
    readonly padtemplate: PadTemplate
    readonly direction: PadDirection
    readonly stream_rec_lock: any
    readonly task: Task
    readonly preroll_lock: GLib.Mutex
    readonly preroll_cond: GLib.Cond
    readonly block_cond: GLib.Cond
    readonly block_callback: PadBlockCallback
    readonly block_data: object
    readonly caps: Caps
    readonly getcapsfunc: PadGetCapsFunction
    readonly setcapsfunc: PadSetCapsFunction
    readonly acceptcapsfunc: PadAcceptCapsFunction
    readonly fixatecapsfunc: PadFixateCapsFunction
    readonly activatefunc: PadActivateFunction
    readonly activatepushfunc: PadActivateModeFunction
    readonly activatepullfunc: PadActivateModeFunction
    readonly linkfunc: PadLinkFunction
    readonly unlinkfunc: PadUnlinkFunction
    readonly peer: Pad
    readonly sched_private: object
    readonly chainfunc: PadChainFunction
    readonly checkgetrangefunc: PadCheckGetRangeFunction
    readonly getrangefunc: PadGetRangeFunction
    readonly eventfunc: PadEventFunction
    readonly mode: ActivateMode
    readonly querytypefunc: PadQueryTypeFunction
    readonly queryfunc: PadQueryFunction
    readonly intlinkfunc: PadIntLinkFunction
    readonly bufferallocfunc: PadBufferAllocFunction
    readonly do_buffer_signals: number
    readonly do_event_signals: number
    readonly iterintlinkfunc: PadIterIntLinkFunction
    readonly block_destroy_data: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pad */
    get_direction(): PadDirection
    set_active(active: boolean): boolean
    is_active(): boolean
    activate_pull(active: boolean): boolean
    activate_push(active: boolean): boolean
    set_blocked(blocked: boolean): boolean
    set_blocked_async(blocked: boolean, callback: PadBlockCallback, user_data: object): boolean
    set_blocked_async_full(blocked: boolean, callback: PadBlockCallback, user_data: object): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    set_element_private(priv: object): void
    get_element_private(): object
    get_pad_template(): PadTemplate
    set_bufferalloc_function(bufalloc: PadBufferAllocFunction): void
    alloc_buffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    alloc_buffer_and_set_caps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    set_activate_function(activate: PadActivateFunction): void
    set_activatepull_function(activatepull: PadActivateModeFunction): void
    set_activatepush_function(activatepush: PadActivateModeFunction): void
    set_chain_function(chain: PadChainFunction): void
    set_chain_list_function(chainlist: PadChainListFunction): void
    set_getrange_function(get: PadGetRangeFunction): void
    set_checkgetrange_function(check: PadCheckGetRangeFunction): void
    set_event_function(event: PadEventFunction): void
    set_link_function(link: PadLinkFunction): void
    set_unlink_function(unlink: PadUnlinkFunction): void
    can_link(sinkpad: Pad): boolean
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): boolean
    is_linked(): boolean
    get_peer(): Pad
    set_getcaps_function(getcaps: PadGetCapsFunction): void
    set_acceptcaps_function(acceptcaps: PadAcceptCapsFunction): void
    set_fixatecaps_function(fixatecaps: PadFixateCapsFunction): void
    set_setcaps_function(setcaps: PadSetCapsFunction): void
    get_pad_template_caps(): Caps
    get_caps_reffed(): Caps
    get_caps(): Caps
    fixate_caps(caps: Caps): void
    accept_caps(caps: Caps): boolean
    set_caps(caps: Caps): boolean
    peer_get_caps_reffed(): Caps
    peer_get_caps(): Caps
    peer_accept_caps(caps: Caps): boolean
    get_allowed_caps(): Caps
    get_negotiated_caps(): Caps
    push(buffer: Buffer): FlowReturn
    push_list(list: BufferList): FlowReturn
    check_pull_range(): boolean
    pull_range(offset: number, size: number, buffer: Buffer): FlowReturn
    push_event(event: Event): boolean
    event_default(event: Event): boolean
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    get_range(offset: number, size: number, buffer: Buffer): FlowReturn
    send_event(event: Event): boolean
    start_task(func: TaskFunction, data: object): boolean
    pause_task(): boolean
    stop_task(): boolean
    set_internal_link_function(intlink: PadIntLinkFunction): void
    set_iterate_internal_links_function(iterintlink: PadIterIntLinkFunction): void
    iterate_internal_links(): Iterator
    iterate_internal_links_default(): Iterator
    set_query_type_function(type_func: PadQueryTypeFunction): void
    get_query_types(): QueryType
    get_query_types_default(): QueryType
    query(query: Query): boolean
    peer_query(query: Query): boolean
    set_query_function(query: PadQueryFunction): void
    query_default(query: Query): boolean
    dispatcher(dispatch: PadDispatcherFunction, data: object): boolean
    use_fixed_caps(): void
    get_fixed_caps_func(): Caps
    proxy_getcaps(): Caps
    proxy_setcaps(caps: Caps): boolean
    get_parent_element(): Element
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_peer_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_peer_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_peer_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    add_data_probe(handler: GObject.Callback, data: object): number
    add_data_probe_full(handler: GObject.Callback, data: object): number
    remove_data_probe(handler_id: number): void
    add_event_probe(handler: GObject.Callback, data: object): number
    add_event_probe_full(handler: GObject.Callback, data: object): number
    remove_event_probe(handler_id: number): void
    add_buffer_probe(handler: GObject.Callback, data: object): number
    add_buffer_probe_full(handler: GObject.Callback, data: object): number
    remove_buffer_probe(handler_id: number): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: (($obj: ProxyPad, object: MiniObject) => boolean)): number
    connect_after(sigName: "have-data", callback: (($obj: ProxyPad, object: MiniObject) => boolean)): number
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (($obj: ProxyPad) => void)): number
    connect_after(sigName: "request-link", callback: (($obj: ProxyPad) => void)): number
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: ProxyPad, object: Pad) => void)): number
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ProxyPad, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ProxyPad, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: ProxyPad, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: ProxyPad, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: ProxyPad, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: ProxyPad, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: ProxyPad, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: ProxyPad, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyPad_ConstructProps)
    _init (config?: ProxyPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface PushSrc_ConstructProps extends BaseSrc_ConstructProps {
}
class PushSrc {
    /* Properties of Gst-0.10.Gst.BaseSrc */
    do_timestamp: boolean
    typefind: boolean
    /* Fields of Gst-0.10.Gst.BaseSrc */
    readonly element: Element
    readonly srcpad: Pad
    readonly live_lock: GLib.Mutex
    readonly live_cond: GLib.Cond
    readonly is_live: boolean
    readonly live_running: boolean
    readonly blocksize: number
    readonly can_activate_push: boolean
    readonly pad_mode: ActivateMode
    readonly seekable: boolean
    readonly random_access: boolean
    readonly clock_id: ClockID
    readonly end_time: ClockTime
    readonly segment: Segment
    readonly need_newsegment: boolean
    readonly offset: number
    readonly size: number
    readonly num_buffers: number
    readonly num_buffers_left: number
    readonly priv: BaseSrcPrivate
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly state_lock: any
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly pads_cookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSrc */
    wait_playing(): FlowReturn
    set_live(live: boolean): void
    set_format(format: Format): void
    query_latency(min_latency: ClockTime, max_latency: ClockTime): [ /* returnType */ boolean, /* live */ boolean ]
    set_blocksize(blocksize: number): void
    get_blocksize(): number
    set_do_timestamp(timestamp: boolean): void
    get_do_timestamp(): boolean
    new_seamless_segment(start: number, stop: number, position: number): boolean
    /* Methods of Gst-0.10.Gst.Element */
    requires_clock(): boolean
    provides_clock(): boolean
    provide_clock(): Clock
    get_clock(): Clock
    set_clock(clock: Clock): boolean
    set_base_time(time: ClockTime): void
    get_base_time(): ClockTime
    set_start_time(time: ClockTime): void
    get_start_time(): ClockTime
    is_indexable(): boolean
    set_index(index: Index): void
    get_index(): Index
    set_bus(bus: Bus): void
    get_bus(): Bus
    add_pad(pad: Pad): boolean
    remove_pad(pad: Pad): boolean
    no_more_pads(): void
    get_pad(name: string): Pad
    get_static_pad(name: string): Pad
    get_request_pad(name: string): Pad
    release_request_pad(pad: Pad): void
    iterate_pads(): Iterator
    iterate_src_pads(): Iterator
    iterate_sink_pads(): Iterator
    send_event(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, cur_type: SeekType, cur: number, stop_type: SeekType, stop: number): boolean
    get_query_types(): QueryType
    query(query: Query): boolean
    post_message(message: Message): boolean
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    is_locked_state(): boolean
    set_locked_state(locked_state: boolean): boolean
    sync_state_with_parent(): boolean
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    set_state(state: State): StateChangeReturn
    abort_state(): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    lost_state(): void
    lost_state_full(new_base_time: boolean): void
    get_factory(): ElementFactory
    implements_interface(iface_type: GObject.Type): boolean
    create_all_pads(): void
    get_compatible_pad(pad: Pad, caps: Caps): Pad
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    link_filtered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    link_pads(srcpadname: string, dest: Element, destpadname: string): boolean
    link_pads_full(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    link_pads_filtered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    found_tags_for_pad(pad: Pad, list: TagList): void
    found_tags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.PushSrc */
    vfunc_create(buf: Buffer): FlowReturn
    /* Function overloads */
    vfunc_create(offset: number, size: number, buf: Buffer): FlowReturn
    vfunc_query(query: Query): boolean
    /* Function overloads */
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.BaseSrc */
    vfunc_get_caps(): Caps
    vfunc_set_caps(caps: Caps): boolean
    vfunc_negotiate(): boolean
    vfunc_newsegment(): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    vfunc_get_times(buffer: Buffer, start: ClockTime, end: ClockTime): void
    vfunc_get_size(): [ /* returnType */ boolean, /* size */ number ]
    vfunc_is_seekable(): boolean
    vfunc_unlock(): boolean
    vfunc_event(event: Event): boolean
    vfunc_create(offset: number, size: number, buf: Buffer): FlowReturn
    vfunc_do_seek(segment: Segment): boolean
    vfunc_query(query: Query): boolean
    /* Function overloads */
    vfunc_query(query: Query): boolean
    vfunc_check_get_range(): boolean
    vfunc_fixate(caps: Caps): void
    vfunc_unlock_stop(): boolean
    vfunc_prepare_seek_segment(seek: Event, segment: Segment): boolean
    /* Virtual methods of Gst-0.10.Gst.Element */
    vfunc_request_new_pad(templ: PadTemplate, name: string): Pad
    vfunc_release_pad(pad: Pad): void
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_set_bus(bus: Bus): void
    vfunc_provide_clock(): Clock
    vfunc_set_clock(clock: Clock): boolean
    vfunc_get_index(): Index
    vfunc_set_index(index: Index): void
    vfunc_send_event(event: Event): boolean
    vfunc_get_query_types(): QueryType
    vfunc_query(query: Query): boolean
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: PushSrc) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: PushSrc, object: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: PushSrc, object: Pad) => void)): number
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: PushSrc, object: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: PushSrc, object: Pad) => void)): number
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PushSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PushSrc, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: PushSrc, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: PushSrc, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: PushSrc, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: PushSrc, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: PushSrc, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: PushSrc, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: PushSrc, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PushSrc_ConstructProps)
    _init (config?: PushSrc_ConstructProps): void
    static $gtype: GObject.Type
}
class Query {
    /* Fields of Gst-0.10.Gst.MiniObject */
    readonly instance: GObject.TypeInstance
    readonly refcount: number
    readonly flags: number
    readonly _gst_reserved: object
    /* Methods of Gst-0.10.Gst.Query */
    set_position(format: Format, cur: number): void
    parse_position(format: Format): /* cur */ number
    set_duration(format: Format, duration: number): void
    parse_duration(format: Format): /* duration */ number
    set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void
    parse_latency(min_latency: ClockTime, max_latency: ClockTime): /* live */ boolean
    set_convert(src_format: Format, src_value: number, dest_format: Format, dest_value: number): void
    parse_convert(src_format: Format, dest_format: Format): [ /* src_value */ number, /* dest_value */ number ]
    set_segment(rate: number, format: Format, start_value: number, stop_value: number): void
    parse_segment(format: Format): [ /* rate */ number, /* start_value */ number, /* stop_value */ number ]
    get_structure(): Structure
    set_seeking(format: Format, seekable: boolean, segment_start: number, segment_end: number): void
    parse_seeking(format: Format): [ /* seekable */ boolean, /* segment_start */ number, /* segment_end */ number ]
    set_formatsv(n_formats: number, formats: Format): void
    parse_formats_length(): /* n_formats */ number
    parse_formats_nth(nth: number, format: Format): void
    set_buffering_percent(busy: boolean, percent: number): void
    parse_buffering_percent(): [ /* busy */ boolean, /* percent */ number ]
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void
    parse_buffering_stats(mode: BufferingMode): [ /* avg_in */ number, /* avg_out */ number, /* buffering_left */ number ]
    set_buffering_range(format: Format, start: number, stop: number, estimated_total: number): void
    parse_buffering_range(format: Format): [ /* start */ number, /* stop */ number, /* estimated_total */ number ]
    parse_uri(uri: string[]): void
    set_uri(uri: string): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    is_writable(): boolean
    make_writable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_position(format: Format): Query
    static new_duration(format: Format): Query
    static new_latency(): Query
    static new_convert(src_format: Format, value: number, dest_format: Format): Query
    static new_segment(format: Format): Query
    static new_application(type: QueryType, structure: Structure): Query
    static new_seeking(format: Format): Query
    static new_formats(): Query
    static new_buffering(format: Format): Query
    static new_uri(): Query
    static type_get_name(query: QueryType): string
    static type_to_quark(query: QueryType): GLib.Quark
    static type_register(nick: string, description: string): QueryType
    static type_get_by_nick(nick: string): QueryType
    static types_contains(types: QueryType, type: QueryType): boolean
    static type_get_details(type: QueryType): QueryTypeDefinition
    static type_iterate_definitions(): Iterator
}
interface Registry_ConstructProps extends Object_ConstructProps {
}
class Registry {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Registry */
    scan_path(path: string): boolean
    add_path(path: string): void
    add_plugin(plugin: Plugin): boolean
    remove_plugin(plugin: Plugin): void
    add_feature(feature: PluginFeature): boolean
    remove_feature(feature: PluginFeature): void
    get_feature_list_cookie(): number
    find_plugin(name: string): Plugin
    find_feature(name: string, type: GObject.Type): PluginFeature
    lookup(filename: string): Plugin
    lookup_feature(name: string): PluginFeature
    xml_read_cache(location: string): boolean
    xml_write_cache(location: string): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Registry */
    connect(sigName: "feature-added", callback: (($obj: Registry, object: object) => void)): number
    connect_after(sigName: "feature-added", callback: (($obj: Registry, object: object) => void)): number
    emit(sigName: "feature-added", object: object): void
    connect(sigName: "plugin-added", callback: (($obj: Registry, object: object) => void)): number
    connect_after(sigName: "plugin-added", callback: (($obj: Registry, object: object) => void)): number
    emit(sigName: "plugin-added", object: object): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Registry, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Registry, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Registry, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Registry, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Registry, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Registry, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Registry, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Registry, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
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
    /* Static methods and pseudo-constructors */
    static get_default(): Registry
    static fork_is_enabled(): boolean
    static fork_set_enabled(enabled: boolean): void
    static $gtype: GObject.Type
}
interface SystemClock_ConstructProps extends Clock_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.SystemClock */
    clock_type?: ClockType
}
class SystemClock {
    /* Properties of Gst-0.10.Gst.SystemClock */
    clock_type: ClockType
    /* Fields of Gst-0.10.Gst.Clock */
    readonly object: Object
    readonly slave_lock: GLib.Mutex
    readonly internal_calibration: ClockTime
    readonly external_calibration: ClockTime
    readonly rate_numerator: ClockTime
    readonly rate_denominator: ClockTime
    readonly last_time: ClockTime
    readonly entries: object[]
    readonly entries_changed: GLib.Cond
    readonly resolution: ClockTime
    readonly stats: boolean
    readonly master: Clock
    readonly filling: boolean
    readonly window_size: number
    readonly window_threshold: number
    readonly time_index: number
    readonly timeout: ClockTime
    readonly times: ClockTime
    readonly clockid: ClockID
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Clock */
    set_resolution(resolution: ClockTime): ClockTime
    get_resolution(): ClockTime
    get_time(): ClockTime
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    get_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    set_master(master: Clock): boolean
    get_master(): Clock
    add_observation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    get_internal_time(): ClockTime
    adjust_unlocked(internal: ClockTime): ClockTime
    unadjust_unlocked(external: ClockTime): ClockTime
    new_single_shot_id(time: ClockTime): ClockID
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Clock */
    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime
    vfunc_get_resolution(): ClockTime
    vfunc_get_internal_time(): ClockTime
    vfunc_wait(entry: ClockEntry): ClockReturn
    vfunc_wait_async(entry: ClockEntry): ClockReturn
    vfunc_unschedule(entry: ClockEntry): void
    vfunc_wait_jitter(entry: ClockEntry, jitter: ClockTimeDiff): ClockReturn
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: SystemClock, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: SystemClock, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: SystemClock, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: SystemClock, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: SystemClock, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: SystemClock, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: SystemClock, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: SystemClock, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemClock_ConstructProps)
    _init (config?: SystemClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static obtain(): Clock
    static $gtype: GObject.Type
}
interface Task_ConstructProps extends Object_ConstructProps {
}
class Task {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Task */
    set_lock(mutex: any): void
    set_priority(priority: any): void
    get_pool(): TaskPool
    set_pool(pool: TaskPool): void
    set_thread_callbacks(callbacks: TaskThreadCallbacks, user_data: object, notify: GLib.DestroyNotify): void
    get_state(): TaskState
    set_state(state: TaskState): boolean
    start(): boolean
    stop(): boolean
    pause(): boolean
    join(): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Task, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Task, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: Task, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: Task, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: Task, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: Task, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: Task, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: Task, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static cleanup_all(): void
    static create(func: TaskFunction): Task
    static $gtype: GObject.Type
}
interface TaskPool_ConstructProps extends Object_ConstructProps {
}
class TaskPool {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TaskPool */
    prepare(): void
    push(func: TaskPoolFunction, user_data: object): object
    join(id: object): void
    cleanup(): void
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.TaskPool */
    vfunc_prepare(): void
    vfunc_cleanup(): void
    vfunc_push(func: TaskPoolFunction, user_data: object): object
    vfunc_join(id: object): void
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TaskPool, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TaskPool, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TaskPool, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: TaskPool, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: TaskPool, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: TaskPool, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TaskPool, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: TaskPool, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TaskPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TaskPool_ConstructProps)
    _init (config?: TaskPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TaskPool
    static $gtype: GObject.Type
}
interface TypeFindFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class TypeFindFactory {
    /* Fields of Gst-0.10.Gst.PluginFeature */
    readonly object: Object
    readonly loaded: boolean
    readonly name: string
    readonly rank: number
    readonly plugin_name: string
    readonly _gst_reserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TypeFindFactory */
    get_extensions(): string[]
    get_caps(): Caps
    call_function(find: TypeFind): void
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    type_name_filter(data: TypeNameData): boolean
    set_rank(rank: number): void
    set_name(name: string): void
    get_rank(): number
    get_name(): string
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TypeFindFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TypeFindFactory, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: TypeFindFactory, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: TypeFindFactory, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: TypeFindFactory, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TypeFindFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TypeFindFactory_ConstructProps)
    _init (config?: TypeFindFactory_ConstructProps): void
    static $gtype: GObject.Type
}
interface XML_ConstructProps extends Object_ConstructProps {
}
class XML {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly name_prefix: string
    readonly parent: Object
    readonly flags: number
    readonly _gst_reserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.XML */
    parse_doc(doc: libxml2.DocPtr, root: any[]): boolean
    parse_file(fname: any[], root: any[]): boolean
    parse_memory(buffer: any[], size: number, root: string): boolean
    get_element(name: any[]): Element
    /* Methods of Gst-0.10.Gst.Object */
    set_name(name: string): boolean
    get_name(): string
    set_name_prefix(name_prefix: string): void
    get_name_prefix(): string
    set_parent(parent: Object): boolean
    get_parent(): Object
    unparent(): void
    has_ancestor(ancestor: Object): boolean
    replace(newobj: Object): void
    get_path_string(): string
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restore_thyself(self: libxml2.NodePtr): void
    default_error(error: GLib.Error, debug: string): void
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
    /* Virtual methods of Gst-0.10.Gst.XML */
    vfunc_object_saved(object: Object, self: libxml2.NodePtr): void
    /* Virtual methods of Gst-0.10.Gst.Object */
    vfunc_save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    vfunc_restore_thyself(self: libxml2.NodePtr): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.XML */
    connect(sigName: "object-loaded", callback: (($obj: XML, object: Object, p0: object) => void)): number
    connect_after(sigName: "object-loaded", callback: (($obj: XML, object: Object, p0: object) => void)): number
    emit(sigName: "object-loaded", object: Object, p0: object): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: XML, object: Object, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: XML, object: Object, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: (($obj: XML, object: object) => void)): number
    connect_after(sigName: "object-saved", callback: (($obj: XML, object: object) => void)): number
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: (($obj: XML, object: Object) => void)): number
    connect_after(sigName: "parent-set", callback: (($obj: XML, object: Object) => void)): number
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: (($obj: XML, object: Object) => void)): number
    connect_after(sigName: "parent-unset", callback: (($obj: XML, object: Object) => void)): number
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: XML, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: XML_ConstructProps)
    _init (config?: XML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XML
    static write(element: Element): libxml2.DocPtr
    static make_element(cur: libxml2.NodePtr, parent: Object): Element
    static $gtype: GObject.Type
}
abstract class AdapterClass {
    /* Fields of Gst-0.10.Gst.AdapterClass */
    readonly parent_class: GObject.ObjectClass
    readonly _gst_reserved: any[]
    static name: string
}
class AdapterPrivate {
    static name: string
}
class AllocTrace {
    /* Fields of Gst-0.10.Gst.AllocTrace */
    readonly name: string
    readonly flags: number
    readonly live: number
    readonly mem_live: object[]
    /* Methods of Gst-0.10.Gst.AllocTrace */
    print(): void
    set_flags(flags: AllocTraceFlags): void
    static name: string
}
abstract class BaseSinkClass {
    /* Fields of Gst-0.10.Gst.BaseSinkClass */
    readonly parent_class: ElementClass
    readonly get_caps: (sink: BaseSink) => Caps
    readonly set_caps: (sink: BaseSink, caps: Caps) => boolean
    readonly buffer_alloc: (sink: BaseSink, offset: number, size: number, caps: Caps, buf: Buffer) => FlowReturn
    readonly get_times: (sink: BaseSink, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    readonly start: (sink: BaseSink) => boolean
    readonly stop: (sink: BaseSink) => boolean
    readonly unlock: (sink: BaseSink) => boolean
    readonly event: (sink: BaseSink, event: Event) => boolean
    readonly preroll: (sink: BaseSink, buffer: Buffer) => FlowReturn
    readonly render: (sink: BaseSink, buffer: Buffer) => FlowReturn
    readonly async_play: (sink: BaseSink) => StateChangeReturn
    readonly activate_pull: (sink: BaseSink, active: boolean) => boolean
    readonly fixate: (sink: BaseSink, caps: Caps) => void
    readonly unlock_stop: (sink: BaseSink) => boolean
    readonly render_list: (sink: BaseSink, buffer_list: BufferList) => FlowReturn
    readonly _gst_reserved: any[]
    static name: string
}
class BaseSinkPrivate {
    static name: string
}
abstract class BaseSrcClass {
    /* Fields of Gst-0.10.Gst.BaseSrcClass */
    readonly parent_class: ElementClass
    readonly get_caps: (src: BaseSrc) => Caps
    readonly set_caps: (src: BaseSrc, caps: Caps) => boolean
    readonly negotiate: (src: BaseSrc) => boolean
    readonly newsegment: (src: BaseSrc) => boolean
    readonly start: (src: BaseSrc) => boolean
    readonly stop: (src: BaseSrc) => boolean
    readonly get_times: (src: BaseSrc, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    readonly get_size: (src: BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    readonly is_seekable: (src: BaseSrc) => boolean
    readonly unlock: (src: BaseSrc) => boolean
    readonly event: (src: BaseSrc, event: Event) => boolean
    readonly create: (src: BaseSrc, offset: number, size: number, buf: Buffer) => FlowReturn
    readonly do_seek: (src: BaseSrc, segment: Segment) => boolean
    readonly query: (src: BaseSrc, query: Query) => boolean
    readonly check_get_range: (src: BaseSrc) => boolean
    readonly fixate: (src: BaseSrc, caps: Caps) => void
    readonly unlock_stop: (src: BaseSrc) => boolean
    readonly prepare_seek_segment: (src: BaseSrc, seek: Event, segment: Segment) => boolean
    readonly _gst_reserved: any[]
    static name: string
}
class BaseSrcPrivate {
    static name: string
}
abstract class BaseTransformClass {
    /* Fields of Gst-0.10.Gst.BaseTransformClass */
    readonly parent_class: ElementClass
    readonly transform_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => Caps
    readonly fixate_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps, othercaps: Caps) => void
    readonly transform_size: (trans: BaseTransform, direction: PadDirection, caps: Caps, size: number, othercaps: Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    readonly get_unit_size: (trans: BaseTransform, caps: Caps) => [ /* returnType */ boolean, /* size */ number ]
    readonly set_caps: (trans: BaseTransform, incaps: Caps, outcaps: Caps) => boolean
    readonly start: (trans: BaseTransform) => boolean
    readonly stop: (trans: BaseTransform) => boolean
    readonly event: (trans: BaseTransform, event: Event) => boolean
    readonly transform: (trans: BaseTransform, inbuf: Buffer, outbuf: Buffer) => FlowReturn
    readonly transform_ip: (trans: BaseTransform, buf: Buffer) => FlowReturn
    readonly passthrough_on_same_caps: boolean
    readonly prepare_output_buffer: (trans: BaseTransform, input: Buffer, size: number, caps: Caps, buf: Buffer) => FlowReturn
    readonly src_event: (trans: BaseTransform, event: Event) => boolean
    readonly before_transform: (trans: BaseTransform, buffer: Buffer) => void
    readonly accept_caps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => boolean
    readonly _gst_reserved: any[]
    static name: string
}
class BaseTransformPrivate {
    static name: string
}
abstract class BinClass {
    /* Fields of Gst-0.10.Gst.BinClass */
    readonly parent_class: ElementClass
    readonly pool: GLib.ThreadPool
    readonly element_added: (bin: Bin, child: Element) => void
    readonly element_removed: (bin: Bin, child: Element) => void
    readonly add_element: (bin: Bin, element: Element) => boolean
    readonly remove_element: (bin: Bin, element: Element) => boolean
    readonly handle_message: (bin: Bin, message: Message) => void
    readonly do_latency: (bin: Bin) => boolean
    readonly _gst_reserved: any[]
    static name: string
}
class BinPrivate {
    static name: string
}
class BitReader {
    /* Fields of Gst-0.10.Gst.BitReader */
    readonly data: number
    readonly size: number
    readonly byte: number
    readonly bit: number
    /* Methods of Gst-0.10.Gst.BitReader */
    free(): void
    init(data: any[], size: number): void
    init_from_buffer(buffer: Buffer): void
    set_pos(pos: number): boolean
    get_pos(): number
    get_remaining(): number
    get_size(): number
    skip(nbits: number): boolean
    skip_to_byte(): boolean
    get_bits_uint8(val: any[], nbits: number): boolean
    get_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint8(val: any[], nbits: number): boolean
    peek_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    static name: string
    static new(data: any[], size: number): BitReader
    constructor(data: any[], size: number)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: number): BitReader
    static new_from_buffer(buffer: Buffer): BitReader
}
abstract class BufferClass {
    /* Fields of Gst-0.10.Gst.BufferClass */
    readonly mini_object_class: MiniObjectClass
    static name: string
}
abstract class BufferListClass {
    static name: string
}
class BufferListIterator {
    /* Methods of Gst-0.10.Gst.BufferListIterator */
    free(): void
    n_buffers(): number
    next(): Buffer
    next_group(): boolean
    add(buffer: Buffer): void
    add_group(): void
    remove(): void
    steal(): Buffer
    take(buffer: Buffer): void
    do(do_func: BufferListDoFunction, user_data: object): Buffer
    merge_group(): Buffer
    static name: string
}
abstract class BusClass {
    /* Fields of Gst-0.10.Gst.BusClass */
    readonly parent_class: ObjectClass
    readonly message: (bus: Bus, message: Message) => void
    readonly sync_message: (bus: Bus, message: Message) => void
    readonly _gst_reserved: any[]
    static name: string
}
class BusPrivate {
    static name: string
}
class ByteReader {
    /* Fields of Gst-0.10.Gst.ByteReader */
    readonly data: number
    readonly size: number
    readonly byte: number
    /* Methods of Gst-0.10.Gst.ByteReader */
    free(): void
    init(data: any[], size: number): void
    init_from_buffer(buffer: Buffer): void
    set_pos(pos: number): boolean
    get_pos(): number
    get_remaining(): number
    get_size(): number
    skip(nbytes: number): boolean
    get_uint8(val: any[]): boolean
    get_int8(): [ /* returnType */ boolean, /* val */ number ]
    get_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint8(val: any[]): boolean
    peek_int8(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    dup_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    get_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    peek_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    dup_string_utf8(str: string[]): boolean
    dup_string_utf16(): [ /* returnType */ boolean, /* str */ any ]
    dup_string_utf32(): [ /* returnType */ boolean, /* str */ any ]
    skip_string_utf8(): boolean
    skip_string_utf16(): boolean
    skip_string_utf32(): boolean
    get_string_utf8(str: string[]): boolean
    peek_string_utf8(str: string[]): boolean
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
    static name: string
    static new(data: any[], size: number): ByteReader
    constructor(data: any[], size: number)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: number): ByteReader
    static new_from_buffer(buffer: Buffer): ByteReader
}
class ByteWriter {
    /* Fields of Gst-0.10.Gst.ByteWriter */
    readonly parent: ByteReader
    readonly alloc_size: number
    readonly fixed: boolean
    readonly owned: boolean
    /* Methods of Gst-0.10.Gst.ByteWriter */
    init(): void
    init_with_size(size: number, fixed: boolean): void
    init_with_data(data: any[], size: number, initialized: boolean): void
    init_with_buffer(buffer: Buffer, initialized: boolean): void
    free(): void
    free_and_get_data(): any[]
    free_and_get_buffer(): Buffer
    reset(): void
    reset_and_get_data(): any[]
    reset_and_get_buffer(): Buffer
    get_remaining(): number
    ensure_free_space(size: number): boolean
    put_uint8(val: number): boolean
    put_int8(val: number): boolean
    put_uint16_be(val: number): boolean
    put_uint16_le(val: number): boolean
    put_int16_be(val: number): boolean
    put_int16_le(val: number): boolean
    put_uint24_be(val: number): boolean
    put_uint24_le(val: number): boolean
    put_int24_be(val: number): boolean
    put_int24_le(val: number): boolean
    put_uint32_be(val: number): boolean
    put_uint32_le(val: number): boolean
    put_int32_be(val: number): boolean
    put_int32_le(val: number): boolean
    put_uint64_be(val: number): boolean
    put_uint64_le(val: number): boolean
    put_int64_be(val: number): boolean
    put_int64_le(val: number): boolean
    put_float32_be(val: number): boolean
    put_float32_le(val: number): boolean
    put_float64_be(val: number): boolean
    put_float64_le(val: number): boolean
    put_data(data: any[], size: number): boolean
    fill(value: number, size: number): boolean
    put_string_utf8(data: string): boolean
    put_string_utf16(): [ /* returnType */ boolean, /* data */ number ]
    put_string_utf32(): [ /* returnType */ boolean, /* data */ number ]
    static name: string
    static new(): ByteWriter
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ByteWriter
    static new_with_size(size: number, fixed: boolean): ByteWriter
    static new_with_data(data: any[], size: number, initialized: boolean): ByteWriter
    static new_with_buffer(buffer: Buffer, initialized: boolean): ByteWriter
}
class Caps {
    /* Fields of Gst-0.10.Gst.Caps */
    readonly type: GObject.Type
    readonly refcount: number
    readonly flags: CapsFlags
    readonly structs: GLib.PtrArray
    readonly _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.Caps */
    ref(): Caps
    copy(): Caps
    make_writable(): Caps
    unref(): void
    append(caps2: Caps): void
    merge(caps2: Caps): void
    append_structure(structure: Structure): void
    remove_structure(idx: number): void
    merge_structure(structure: Structure): void
    get_size(): number
    get_structure(index: number): Structure
    steal_structure(index: number): Structure
    copy_nth(nth: number): Caps
    truncate(): void
    set_value(field: string, value: any): void
    is_any(): boolean
    is_empty(): boolean
    is_fixed(): boolean
    is_always_compatible(caps2: Caps): boolean
    is_subset(superset: Caps): boolean
    is_equal(caps2: Caps): boolean
    is_equal_fixed(caps2: Caps): boolean
    can_intersect(caps2: Caps): boolean
    intersect(caps2: Caps): Caps
    subtract(subtrahend: Caps): Caps
    union(caps2: Caps): Caps
    normalize(): Caps
    do_simplify(): boolean
    save_thyself(parent: libxml2.NodePtr): libxml2.NodePtr
    replace(newcaps: Caps): void
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static new_empty(): Caps
    static new_any(): Caps
}
abstract class ChildProxyInterface {
    /* Fields of Gst-0.10.Gst.ChildProxyInterface */
    readonly parent: GObject.TypeInterface
    readonly get_child_by_index: (parent: ChildProxy, index: number) => Object
    readonly get_children_count: (parent: ChildProxy) => number
    readonly child_added: (parent: ChildProxy, child: Object) => void
    readonly child_removed: (parent: ChildProxy, child: Object) => void
    readonly _gst_reserved: any[]
    static name: string
}
abstract class ClockClass {
    /* Fields of Gst-0.10.Gst.ClockClass */
    readonly parent_class: ObjectClass
    readonly change_resolution: (clock: Clock, old_resolution: ClockTime, new_resolution: ClockTime) => ClockTime
    readonly get_resolution: (clock: Clock) => ClockTime
    readonly get_internal_time: (clock: Clock) => ClockTime
    readonly wait: (clock: Clock, entry: ClockEntry) => ClockReturn
    readonly wait_async: (clock: Clock, entry: ClockEntry) => ClockReturn
    readonly unschedule: (clock: Clock, entry: ClockEntry) => void
    readonly wait_jitter: (clock: Clock, entry: ClockEntry, jitter: ClockTimeDiff) => ClockReturn
    readonly _gst_reserved: any[]
    static name: string
}
class ClockEntry {
    /* Fields of Gst-0.10.Gst.ClockEntry */
    readonly refcount: number
    readonly clock: Clock
    readonly type: ClockEntryType
    readonly time: ClockTime
    readonly interval: ClockTime
    readonly status: ClockReturn
    readonly func: ClockCallback
    readonly user_data: object
    readonly destroy_data: GLib.DestroyNotify
    static name: string
}
class ClockPrivate {
    static name: string
}
class CollectData {
    /* Fields of Gst-0.10.Gst.CollectData */
    readonly collect: CollectPads
    readonly pad: Pad
    readonly buffer: Buffer
    readonly pos: number
    readonly segment: Segment
    static name: string
}
abstract class CollectPadsClass {
    /* Fields of Gst-0.10.Gst.CollectPadsClass */
    readonly parent_class: ObjectClass
    readonly _gst_reserved: any[]
    static name: string
}
class CollectPadsPrivate {
    static name: string
}
abstract class DataQueueClass {
    /* Fields of Gst-0.10.Gst.DataQueueClass */
    readonly parent_class: GObject.ObjectClass
    readonly empty: (queue: DataQueue) => void
    readonly full: (queue: DataQueue) => void
    readonly _gst_reserved: any[]
    static name: string
}
class DataQueueItem {
    /* Fields of Gst-0.10.Gst.DataQueueItem */
    readonly object: MiniObject
    readonly size: number
    readonly duration: number
    readonly visible: boolean
    readonly destroy: GLib.DestroyNotify
    static name: string
}
class DataQueueSize {
    /* Fields of Gst-0.10.Gst.DataQueueSize */
    readonly visible: number
    readonly bytes: number
    readonly time: number
    static name: string
}
class DebugCategory {
    /* Fields of Gst-0.10.Gst.DebugCategory */
    readonly threshold: number
    readonly color: number
    readonly name: string
    readonly description: string
    /* Methods of Gst-0.10.Gst.DebugCategory */
    free(): void
    set_threshold(level: DebugLevel): void
    reset_threshold(): void
    get_threshold(): DebugLevel
    get_name(): string
    get_color(): number
    get_description(): string
    static name: string
}
class DebugMessage {
    /* Methods of Gst-0.10.Gst.DebugMessage */
    get(): string
    static name: string
}
abstract class ElementClass {
    /* Fields of Gst-0.10.Gst.ElementClass */
    readonly parent_class: ObjectClass
    readonly details: ElementDetails
    readonly elementfactory: ElementFactory
    readonly padtemplates: object[]
    readonly numpadtemplates: number
    readonly pad_templ_cookie: number
    readonly pad_added: (element: Element, pad: Pad) => void
    readonly pad_removed: (element: Element, pad: Pad) => void
    readonly no_more_pads: (element: Element) => void
    readonly request_new_pad: (element: Element, templ: PadTemplate, name: string) => Pad
    readonly release_pad: (element: Element, pad: Pad) => void
    readonly get_state: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    readonly set_state: (element: Element, state: State) => StateChangeReturn
    readonly change_state: (element: Element, transition: StateChange) => StateChangeReturn
    readonly set_bus: (element: Element, bus: Bus) => void
    readonly provide_clock: (element: Element) => Clock
    readonly set_clock: (element: Element, clock: Clock) => boolean
    readonly get_index: (element: Element) => Index
    readonly set_index: (element: Element, index: Index) => void
    readonly send_event: (element: Element, event: Event) => boolean
    readonly get_query_types: (element: Element) => QueryType
    readonly query: (element: Element, query: Query) => boolean
    readonly _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.ElementClass */
    static add_pad_template(templ: PadTemplate): void
    static get_pad_template(name: string): PadTemplate
    static set_details(details: ElementDetails): void
    static set_details_simple(longname: string, classification: string, description: string, author: string): void
    static name: string
}
class ElementDetails {
    /* Fields of Gst-0.10.Gst.ElementDetails */
    readonly longname: string
    readonly klass: string
    readonly description: string
    readonly author: string
    readonly _gst_reserved: any[]
    static name: string
}
abstract class ElementFactoryClass {
    /* Fields of Gst-0.10.Gst.ElementFactoryClass */
    readonly parent_class: PluginFeatureClass
    readonly _gst_reserved: any[]
    static name: string
}
abstract class EventClass {
    /* Fields of Gst-0.10.Gst.EventClass */
    readonly mini_object_class: MiniObjectClass
    readonly _gst_reserved: any[]
    static name: string
}
class FormatDefinition {
    /* Fields of Gst-0.10.Gst.FormatDefinition */
    readonly value: Format
    readonly nick: string
    readonly description: string
    readonly quark: GLib.Quark
    static name: string
}
abstract class GhostPadClass {
    /* Fields of Gst-0.10.Gst.GhostPadClass */
    readonly parent_class: ProxyPadClass
    readonly _gst_reserved: any[]
    static name: string
}
class GhostPadPrivate {
    static name: string
}
abstract class ImplementsInterfaceClass {
    /* Fields of Gst-0.10.Gst.ImplementsInterfaceClass */
    readonly parent: GObject.TypeInterface
    readonly supported: (iface: ImplementsInterface, iface_type: GObject.Type) => boolean
    readonly _gst_reserved: any[]
    static name: string
}
class IndexAssociation {
    /* Fields of Gst-0.10.Gst.IndexAssociation */
    readonly format: Format
    readonly value: number
    static name: string
}
abstract class IndexClass {
    /* Fields of Gst-0.10.Gst.IndexClass */
    readonly parent_class: ObjectClass
    readonly get_writer_id: (index: Index, writer_string: string) => [ /* returnType */ boolean, /* writer_id */ number ]
    readonly commit: (index: Index, id: number) => void
    readonly add_entry: (index: Index, entry: IndexEntry) => void
    readonly get_assoc_entry: (index: Index, id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc) => IndexEntry
    readonly entry_added: (index: Index, entry: IndexEntry) => void
    readonly _gst_reserved: any[]
    static name: string
}
class IndexEntry {
    /* Fields of Gst-0.10.Gst.IndexEntry */
    readonly type: IndexEntryType
    readonly id: number
    /* Methods of Gst-0.10.Gst.IndexEntry */
    copy(): IndexEntry
    free(): void
    assoc_map(format: Format): [ /* returnType */ boolean, /* value */ number ]
    static name: string
}
abstract class IndexFactoryClass {
    /* Fields of Gst-0.10.Gst.IndexFactoryClass */
    readonly parent: PluginFeatureClass
    readonly _gst_reserved: any[]
    static name: string
}
class IndexGroup {
    /* Fields of Gst-0.10.Gst.IndexGroup */
    readonly groupnum: number
    readonly entries: object[]
    readonly certainty: IndexCertainty
    readonly peergroup: number
    static name: string
}
class Iterator {
    /* Fields of Gst-0.10.Gst.Iterator */
    readonly next: IteratorNextFunction
    readonly item: IteratorItemFunction
    readonly resync: IteratorResyncFunction
    readonly free: IteratorFreeFunction
    readonly pushed: Iterator
    readonly type: GObject.Type
    readonly lock: GLib.Mutex
    readonly cookie: number
    readonly master_cookie: number
    readonly _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.Iterator */
    push(other: Iterator): void
    filter(func: GLib.CompareFunc, user_data: object): Iterator
    fold(func: IteratorFoldFunction, ret: any, user_data: object): IteratorResult
    foreach(func: GLib.Func, user_data: object): IteratorResult
    find_custom(func: GLib.CompareFunc, user_data: object): object
    static name: string
    static new(size: number, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    constructor(size: number, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction)
    /* Static methods and pseudo-constructors */
    static new(size: number, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    static new_single(type: GObject.Type, object: object, copy: CopyFunction, free: GLib.FreeFunc): Iterator
}
abstract class MessageClass {
    /* Fields of Gst-0.10.Gst.MessageClass */
    readonly mini_object_class: MiniObjectClass
    readonly _gst_reserved: any[]
    static name: string
}
abstract class MiniObjectClass {
    /* Fields of Gst-0.10.Gst.MiniObjectClass */
    readonly type_class: GObject.TypeClass
    readonly copy: MiniObjectCopyFunction
    readonly finalize: MiniObjectFinalizeFunction
    readonly _gst_reserved: object
    static name: string
}
abstract class ObjectClass {
    /* Fields of Gst-0.10.Gst.ObjectClass */
    readonly parent_class: GObject.ObjectClass
    readonly path_string_separator: string
    readonly signal_object: GObject.Object
    readonly lock: any
    readonly parent_set: (object: Object, parent: Object) => void
    readonly parent_unset: (object: Object, parent: Object) => void
    readonly object_saved: (object: Object, parent: libxml2.NodePtr) => void
    readonly deep_notify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    readonly save_thyself: (object: Object, parent: libxml2.NodePtr) => libxml2.NodePtr
    readonly restore_thyself: (object: Object, self: libxml2.NodePtr) => void
    readonly _gst_reserved: any[]
    static name: string
}
abstract class PadClass {
    /* Fields of Gst-0.10.Gst.PadClass */
    readonly parent_class: ObjectClass
    readonly linked: (pad: Pad, peer: Pad) => void
    readonly unlinked: (pad: Pad, peer: Pad) => void
    readonly request_link: (pad: Pad) => void
    readonly have_data: (pad: Pad, data: MiniObject) => boolean
    readonly _gst_reserved: any[]
    static name: string
}
class PadPrivate {
    static name: string
}
abstract class PadTemplateClass {
    /* Fields of Gst-0.10.Gst.PadTemplateClass */
    readonly parent_class: ObjectClass
    readonly pad_created: (templ: PadTemplate, pad: Pad) => void
    readonly _gst_reserved: any[]
    static name: string
}
class ParamSpecFraction {
    /* Fields of Gst-0.10.Gst.ParamSpecFraction */
    readonly parent_instance: GObject.ParamSpec
    readonly min_num: number
    readonly min_den: number
    readonly max_num: number
    readonly max_den: number
    readonly def_num: number
    readonly def_den: number
    static name: string
}
class ParamSpecMiniObject {
    /* Fields of Gst-0.10.Gst.ParamSpecMiniObject */
    readonly parent_instance: GObject.ParamSpec
    static name: string
}
class ParseContext {
    /* Methods of Gst-0.10.Gst.ParseContext */
    get_missing_elements(): string[]
    free(): void
    static name: string
    static new(): ParseContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParseContext
}
abstract class PipelineClass {
    /* Fields of Gst-0.10.Gst.PipelineClass */
    readonly parent_class: BinClass
    readonly _gst_reserved: any[]
    static name: string
}
class PipelinePrivate {
    static name: string
}
abstract class PluginClass {
    /* Fields of Gst-0.10.Gst.PluginClass */
    readonly object_class: ObjectClass
    readonly _gst_reserved: any[]
    static name: string
}
class PluginDesc {
    /* Fields of Gst-0.10.Gst.PluginDesc */
    readonly major_version: number
    readonly minor_version: number
    readonly name: string
    readonly description: string
    readonly plugin_init: PluginInitFunc
    readonly version: string
    readonly license: string
    readonly source: string
    readonly package: string
    readonly origin: string
    readonly _gst_reserved: any[]
    static name: string
}
abstract class PluginFeatureClass {
    /* Fields of Gst-0.10.Gst.PluginFeatureClass */
    readonly parent_class: ObjectClass
    readonly _gst_reserved: any[]
    static name: string
}
class PluginPrivate {
    static name: string
}
class Poll {
    /* Methods of Gst-0.10.Gst.Poll */
    free(): void
    add_fd(fd: PollFD): boolean
    remove_fd(fd: PollFD): boolean
    fd_ctl_write(fd: PollFD, active: boolean): boolean
    fd_ctl_read(fd: PollFD, active: boolean): boolean
    fd_ignored(fd: PollFD): void
    fd_has_closed(fd: PollFD): boolean
    fd_has_error(fd: PollFD): boolean
    fd_can_read(fd: PollFD): boolean
    fd_can_write(fd: PollFD): boolean
    wait(timeout: ClockTime): number
    set_controllable(controllable: boolean): boolean
    restart(): void
    set_flushing(flushing: boolean): void
    write_control(): boolean
    read_control(): boolean
    static name: string
    static new(controllable: boolean): Poll
    constructor(controllable: boolean)
    /* Static methods and pseudo-constructors */
    static new(controllable: boolean): Poll
    static new_timer(): Poll
}
class PollFD {
    /* Fields of Gst-0.10.Gst.PollFD */
    readonly fd: number
    readonly idx: number
    /* Methods of Gst-0.10.Gst.PollFD */
    init(): void
    static name: string
}
abstract class ProxyPadClass {
    /* Fields of Gst-0.10.Gst.ProxyPadClass */
    readonly parent_class: PadClass
    readonly _gst_reserved: any[]
    static name: string
}
class ProxyPadPrivate {
    static name: string
}
abstract class PushSrcClass {
    /* Fields of Gst-0.10.Gst.PushSrcClass */
    readonly parent_class: BaseSrcClass
    readonly create: (src: PushSrc, buf: Buffer) => FlowReturn
    readonly _gst_reserved: any[]
    static name: string
}
abstract class QueryClass {
    /* Fields of Gst-0.10.Gst.QueryClass */
    readonly mini_object_class: MiniObjectClass
    readonly _gst_reserved: any[]
    static name: string
}
class QueryTypeDefinition {
    /* Fields of Gst-0.10.Gst.QueryTypeDefinition */
    readonly value: QueryType
    readonly nick: string
    readonly description: string
    readonly quark: GLib.Quark
    static name: string
}
abstract class RegistryClass {
    /* Fields of Gst-0.10.Gst.RegistryClass */
    readonly parent_class: ObjectClass
    readonly plugin_added: (registry: Registry, plugin: Plugin) => void
    readonly feature_added: (registry: Registry, feature: PluginFeature) => void
    readonly _gst_reserved: any[]
    static name: string
}
class RegistryPrivate {
    static name: string
}
class Segment {
    /* Fields of Gst-0.10.Gst.Segment */
    readonly rate: number
    readonly abs_rate: number
    readonly format: Format
    readonly flags: SeekFlags
    readonly start: number
    readonly stop: number
    readonly time: number
    readonly accum: number
    readonly last_stop: number
    readonly duration: number
    readonly applied_rate: number
    readonly _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.Segment */
    copy(): Segment
    free(): void
    init(format: Format): void
    set_duration(format: Format, duration: number): void
    set_last_stop(format: Format, position: number): void
    set_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): /* update */ boolean
    set_newsegment(update: boolean, rate: number, format: Format, start: number, stop: number, time: number): void
    set_newsegment_full(update: boolean, rate: number, applied_rate: number, format: Format, start: number, stop: number, time: number): void
    to_stream_time(format: Format, position: number): number
    to_running_time(format: Format, position: number): number
    to_position(format: Format, running_time: number): number
    clip(format: Format, start: number, stop: number): [ /* returnType */ boolean, /* clip_start */ number, /* clip_stop */ number ]
    set_running_time(format: Format, running_time: number): boolean
    static name: string
    static new(): Segment
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Segment
}
class StaticCaps {
    /* Fields of Gst-0.10.Gst.StaticCaps */
    readonly caps: Caps
    readonly string: string
    readonly _gst_reserved: any[]
    /* Methods of Gst-0.10.Gst.StaticCaps */
    get(): Caps
    static name: string
}
class StaticPadTemplate {
    /* Fields of Gst-0.10.Gst.StaticPadTemplate */
    readonly name_template: string
    readonly direction: PadDirection
    readonly presence: PadPresence
    readonly static_caps: StaticCaps
    /* Methods of Gst-0.10.Gst.StaticPadTemplate */
    get(): PadTemplate
    get_caps(): Caps
    static name: string
}
class Structure {
    /* Fields of Gst-0.10.Gst.Structure */
    readonly type: GObject.Type
    readonly name: GLib.Quark
    readonly parent_refcount: number
    readonly fields: GLib.Array
    readonly _gst_reserved: object
    /* Methods of Gst-0.10.Gst.Structure */
    copy(): Structure
    set_parent_refcount(): /* refcount */ number
    free(): void
    get_name(): string
    get_name_id(): GLib.Quark
    has_name(name: string): boolean
    set_name(name: string): void
    id_set_value(field: GLib.Quark, value: any): void
    set_value(fieldname: string, value: any): void
    id_get_value(field: GLib.Quark): any
    get_value(fieldname: string): any
    remove_field(fieldname: string): void
    remove_all_fields(): void
    get_field_type(fieldname: string): GObject.Type
    foreach(func: StructureForeachFunc, user_data: object): boolean
    map_in_place(func: StructureMapFunc, user_data: object): boolean
    n_fields(): number
    nth_field_name(index: number): string
    id_has_field(field: GLib.Quark): boolean
    id_has_field_typed(field: GLib.Quark, type: GObject.Type): boolean
    has_field(fieldname: string): boolean
    has_field_typed(fieldname: string, type: GObject.Type): boolean
    get_boolean(fieldname: string): [ /* returnType */ boolean, /* value */ boolean ]
    get_int(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_uint(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_fourcc(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_double(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_date(fieldname: string, value: GLib.Date): boolean
    get_clock_time(fieldname: string, value: ClockTime): boolean
    get_string(fieldname: string): string
    get_enum(fieldname: string, enumtype: GObject.Type): [ /* returnType */ boolean, /* value */ number ]
    get_fraction(fieldname: string): [ /* returnType */ boolean, /* value_numerator */ number, /* value_denominator */ number ]
    to_string(): string
    fixate_field_nearest_int(field_name: string, target: number): boolean
    fixate_field_nearest_double(field_name: string, target: number): boolean
    fixate_field_boolean(field_name: string, target: boolean): boolean
    fixate_field_string(field_name: string, target: string): boolean
    fixate_field_nearest_fraction(field_name: string, target_numerator: number, target_denominator: number): boolean
    static name: string
}
abstract class SystemClockClass {
    /* Fields of Gst-0.10.Gst.SystemClockClass */
    readonly parent_class: ClockClass
    readonly _gst_reserved: any[]
    static name: string
}
class SystemClockPrivate {
    static name: string
}
class TagSetterIFace {
    /* Fields of Gst-0.10.Gst.TagSetterIFace */
    readonly g_iface: GObject.TypeInterface
    static name: string
}
abstract class TaskClass {
    /* Fields of Gst-0.10.Gst.TaskClass */
    readonly parent_class: ObjectClass
    readonly pool: TaskPool
    readonly _gst_reserved: any[]
    static name: string
}
abstract class TaskPoolClass {
    /* Fields of Gst-0.10.Gst.TaskPoolClass */
    readonly parent_class: ObjectClass
    readonly prepare: (pool: TaskPool) => void
    readonly cleanup: (pool: TaskPool) => void
    readonly push: (pool: TaskPool, func: TaskPoolFunction) => object
    readonly join: (pool: TaskPool, id: object) => void
    readonly _gst_reserved: any[]
    static name: string
}
class TaskPrivate {
    static name: string
}
class TaskThreadCallbacks {
    /* Fields of Gst-0.10.Gst.TaskThreadCallbacks */
    readonly enter_thread: any
    readonly leave_thread: any
    readonly _gst_reserved: any[]
    static name: string
}
class Trace {
    /* Fields of Gst-0.10.Gst.Trace */
    readonly filename: string
    readonly fd: number
    readonly buf: TraceEntry
    readonly bufsize: number
    readonly bufoffset: number
    /* Methods of Gst-0.10.Gst.Trace */
    destroy(): void
    flush(): void
    text_flush(): void
    set_default(): void
    static name: string
    static new(filename: string, size: number): Trace
    constructor(filename: string, size: number)
    /* Static methods and pseudo-constructors */
    static new(filename: string, size: number): Trace
}
class TraceEntry {
    /* Fields of Gst-0.10.Gst.TraceEntry */
    readonly timestamp: number
    readonly sequence: number
    readonly data: number
    readonly message: any[]
    static name: string
}
class TypeFind {
    /* Fields of Gst-0.10.Gst.TypeFind */
    readonly peek: any
    readonly suggest: any
    readonly data: object
    readonly get_length: any
    readonly _gst_reserved: any[]
    static name: string
}
abstract class TypeFindFactoryClass {
    /* Fields of Gst-0.10.Gst.TypeFindFactoryClass */
    readonly parent: PluginFeatureClass
    readonly _gst_reserved: any[]
    static name: string
}
class TypeNameData {
    /* Fields of Gst-0.10.Gst.TypeNameData */
    readonly name: string
    readonly type: GObject.Type
    static name: string
}
abstract class URIHandlerInterface {
    /* Fields of Gst-0.10.Gst.URIHandlerInterface */
    readonly parent: GObject.TypeInterface
    readonly new_uri: (handler: URIHandler, uri: string) => void
    readonly get_type: () => URIType
    readonly get_protocols: () => string[]
    readonly get_uri: (handler: URIHandler) => string
    readonly set_uri: (handler: URIHandler, uri: string) => boolean
    readonly get_type_full: (type: GObject.Type) => URIType
    readonly get_protocols_full: (type: GObject.Type) => string[]
    readonly _gst_reserved: any[]
    static name: string
}
class ValueTable {
    /* Fields of Gst-0.10.Gst.ValueTable */
    readonly type: GObject.Type
    readonly compare: ValueCompareFunc
    readonly serialize: ValueSerializeFunc
    readonly deserialize: ValueDeserializeFunc
    readonly _gst_reserved: any[]
    static name: string
}
abstract class XMLClass {
    /* Fields of Gst-0.10.Gst.XMLClass */
    readonly parent_class: ObjectClass
    readonly object_loaded: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    readonly object_saved: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    readonly _gst_reserved: any[]
    static name: string
}
    type ClockID = any
    type ClockTime = any
    type ClockTimeDiff = any
    type TagList = any
}
export default Gst;