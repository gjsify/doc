/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gst-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace Gst {

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
enum CapsIntersectMode {
    ZIG_ZAG,
    FIRST,
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
    DONE,
}
enum ClockType {
    REALTIME,
    MONOTONIC,
    OTHER,
    TAI,
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
enum DebugColorMode {
    OFF,
    ON,
    UNIX,
}
enum DebugLevel {
    NONE,
    ERROR,
    WARNING,
    FIXME,
    INFO,
    DEBUG,
    LOG,
    TRACE,
    MEMDUMP,
    COUNT,
}
enum EventType {
    UNKNOWN,
    FLUSH_START,
    FLUSH_STOP,
    STREAM_START,
    CAPS,
    SEGMENT,
    STREAM_COLLECTION,
    TAG,
    BUFFERSIZE,
    SINK_MESSAGE,
    STREAM_GROUP_DONE,
    EOS,
    TOC,
    PROTECTION,
    SEGMENT_DONE,
    GAP,
    INSTANT_RATE_CHANGE,
    QOS,
    SEEK,
    NAVIGATION,
    LATENCY,
    STEP,
    RECONFIGURE,
    TOC_SELECT,
    SELECT_STREAMS,
    INSTANT_RATE_SYNC_TIME,
    CUSTOM_UPSTREAM,
    CUSTOM_DOWNSTREAM,
    CUSTOM_DOWNSTREAM_OOB,
    CUSTOM_DOWNSTREAM_STICKY,
    CUSTOM_BOTH,
    CUSTOM_BOTH_OOB,
}
enum FlowReturn {
    CUSTOM_SUCCESS_2,
    CUSTOM_SUCCESS_1,
    CUSTOM_SUCCESS,
    OK,
    NOT_LINKED,
    FLUSHING,
    EOS,
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
enum PadMode {
    NONE,
    PUSH,
    PULL,
}
enum PadPresence {
    ALWAYS,
    SOMETIMES,
    REQUEST,
}
enum PadProbeReturn {
    DROP,
    OK,
    REMOVE,
    PASS,
    HANDLED,
}
enum ParseError {
    SYNTAX,
    NO_SUCH_ELEMENT,
    NO_SUCH_PROPERTY,
    LINK,
    COULD_NOT_SET_PROPERTY,
    EMPTY_BIN,
    EMPTY,
    DELAYED_LINK,
}
enum PluginError {
    MODULE,
    DEPENDENCIES,
    NAME_MISMATCH,
}
enum ProgressType {
    START,
    CONTINUE,
    COMPLETE,
    CANCELED,
    ERROR,
}
enum PromiseResult {
    PENDING,
    INTERRUPTED,
    REPLIED,
    EXPIRED,
}
enum QOSType {
    OVERFLOW,
    UNDERFLOW,
    THROTTLE,
}
enum QueryType {
    UNKNOWN,
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
    ALLOCATION,
    SCHEDULING,
    ACCEPT_CAPS,
    CAPS,
    DRAIN,
    CONTEXT,
    BITRATE,
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
    NOT_AUTHORIZED,
    NUM_ERRORS,
}
enum SearchMode {
    EXACT,
    BEFORE,
    AFTER,
}
enum SeekType {
    NONE,
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
    NULL_TO_NULL,
    READY_TO_READY,
    PAUSED_TO_PAUSED,
    PLAYING_TO_PLAYING,
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
enum TagScope {
    STREAM,
    GLOBAL,
}
enum TaskState {
    STARTED,
    STOPPED,
    PAUSED,
}
enum TocEntryType {
    ANGLE,
    VERSION,
    EDITION,
    INVALID,
    TITLE,
    TRACK,
    CHAPTER,
}
enum TocLoopType {
    NONE,
    FORWARD,
    REVERSE,
    PING_PONG,
}
enum TocScope {
    GLOBAL,
    CURRENT,
}
enum TracerValueScope {
    PROCESS,
    THREAD,
    ELEMENT,
    PAD,
}
enum TypeFindProbability {
    NONE,
    MINIMUM,
    POSSIBLE,
    LIKELY,
    NEARLY_CERTAIN,
    MAXIMUM,
}
enum URIError {
    UNSUPPORTED_PROTOCOL,
    BAD_URI,
    BAD_STATE,
    BAD_REFERENCE,
}
enum URIType {
    UNKNOWN,
    SINK,
    SRC,
}
enum AllocatorFlags {
    CUSTOM_ALLOC,
    LAST,
}
enum BinFlags {
    NO_RESYNC,
    STREAMS_AWARE,
    LAST,
}
enum BufferCopyFlags {
    NONE,
    FLAGS,
    TIMESTAMPS,
    META,
    MEMORY,
    MERGE,
    DEEP,
}
enum BufferFlags {
    LIVE,
    DECODE_ONLY,
    DISCONT,
    RESYNC,
    CORRUPTED,
    MARKER,
    HEADER,
    GAP,
    DROPPABLE,
    DELTA_UNIT,
    TAG_MEMORY,
    SYNC_AFTER,
    NON_DROPPABLE,
    LAST,
}
enum BufferPoolAcquireFlags {
    NONE,
    KEY_UNIT,
    DONTWAIT,
    DISCONT,
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
    NEEDS_STARTUP_SYNC,
    LAST,
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
enum DebugGraphDetails {
    MEDIA_TYPE,
    CAPS_DETAILS,
    NON_DEFAULT_PARAMS,
    STATES,
    FULL_PARAMS,
    ALL,
    VERBOSE,
}
enum ElementFlags {
    LOCKED_STATE,
    SINK,
    SOURCE,
    PROVIDE_CLOCK,
    REQUIRE_CLOCK,
    INDEXABLE,
    LAST,
}
enum EventTypeFlags {
    UPSTREAM,
    DOWNSTREAM,
    SERIALIZED,
    STICKY,
    STICKY_MULTI,
}
enum GapFlags {
    DATA,
}
enum LockFlags {
    READ,
    WRITE,
    EXCLUSIVE,
    LAST,
}
enum MapFlags {
    READ,
    WRITE,
    FLAG_LAST,
}
enum MemoryFlags {
    READONLY,
    NO_SHARE,
    ZERO_PREFIXED,
    ZERO_PADDED,
    PHYSICALLY_CONTIGUOUS,
    NOT_MAPPABLE,
    LAST,
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
    DURATION_CHANGED,
    LATENCY,
    ASYNC_START,
    ASYNC_DONE,
    REQUEST_STATE,
    STEP_START,
    QOS,
    PROGRESS,
    TOC,
    RESET_TIME,
    STREAM_START,
    NEED_CONTEXT,
    HAVE_CONTEXT,
    EXTENDED,
    DEVICE_ADDED,
    DEVICE_REMOVED,
    PROPERTY_NOTIFY,
    STREAM_COLLECTION,
    STREAMS_SELECTED,
    REDIRECT,
    DEVICE_CHANGED,
    INSTANT_RATE_REQUEST,
    ANY,
}
enum MetaFlags {
    NONE,
    READONLY,
    POOLED,
    LOCKED,
    LAST,
}
enum MiniObjectFlags {
    LOCKABLE,
    LOCK_READONLY,
    MAY_BE_LEAKED,
    LAST,
}
enum ObjectFlags {
    MAY_BE_LEAKED,
    LAST,
}
enum PadFlags {
    BLOCKED,
    FLUSHING,
    EOS,
    BLOCKING,
    NEED_PARENT,
    NEED_RECONFIGURE,
    PENDING_EVENTS,
    FIXED_CAPS,
    PROXY_CAPS,
    PROXY_ALLOCATION,
    PROXY_SCHEDULING,
    ACCEPT_INTERSECT,
    ACCEPT_TEMPLATE,
    LAST,
}
enum PadLinkCheck {
    NOTHING,
    HIERARCHY,
    TEMPLATE_CAPS,
    CAPS,
    NO_RECONFIGURE,
    DEFAULT,
}
enum PadProbeType {
    INVALID,
    IDLE,
    BLOCK,
    BUFFER,
    BUFFER_LIST,
    EVENT_DOWNSTREAM,
    EVENT_UPSTREAM,
    EVENT_FLUSH,
    QUERY_DOWNSTREAM,
    QUERY_UPSTREAM,
    PUSH,
    PULL,
    BLOCKING,
    DATA_DOWNSTREAM,
    DATA_UPSTREAM,
    DATA_BOTH,
    BLOCK_DOWNSTREAM,
    BLOCK_UPSTREAM,
    EVENT_BOTH,
    QUERY_BOTH,
    ALL_BOTH,
    SCHEDULING,
}
enum PadTemplateFlags {
    LAST,
}
enum ParseFlags {
    NONE,
    FATAL_ERRORS,
    NO_SINGLE_ELEMENT_BINS,
    PLACE_IN_BIN,
}
enum PipelineFlags {
    FIXED_CLOCK,
    LAST,
}
enum PluginAPIFlags {
    MEMBERS,
}
enum PluginDependencyFlags {
    NONE,
    RECURSE,
    PATHS_ARE_DEFAULT_ONLY,
    FILE_NAME_IS_SUFFIX,
    FILE_NAME_IS_PREFIX,
    PATHS_ARE_RELATIVE_TO_EXE,
}
enum PluginFlags {
    CACHED,
    BLACKLISTED,
}
enum QueryTypeFlags {
    UPSTREAM,
    DOWNSTREAM,
    SERIALIZED,
}
enum SchedulingFlags {
    SEEKABLE,
    SEQUENTIAL,
    BANDWIDTH_LIMITED,
}
enum SeekFlags {
    NONE,
    FLUSH,
    ACCURATE,
    KEY_UNIT,
    SEGMENT,
    TRICKMODE,
    SKIP,
    SNAP_BEFORE,
    SNAP_AFTER,
    SNAP_NEAREST,
    TRICKMODE_KEY_UNITS,
    TRICKMODE_NO_AUDIO,
    TRICKMODE_FORWARD_PREDICTED,
    INSTANT_RATE_CHANGE,
}
enum SegmentFlags {
    NONE,
    RESET,
    TRICKMODE,
    SKIP,
    SEGMENT,
    TRICKMODE_KEY_UNITS,
    TRICKMODE_FORWARD_PREDICTED,
    TRICKMODE_NO_AUDIO,
}
enum SerializeFlags {
    NONE,
    BACKWARD_COMPAT,
}
enum StackTraceFlags {
    NONE,
    FULL,
}
enum StreamFlags {
    NONE,
    SPARSE,
    SELECT,
    UNSELECT,
}
enum StreamType {
    UNKNOWN,
    AUDIO,
    VIDEO,
    CONTAINER,
    TEXT,
}
enum TracerValueFlags {
    NONE,
    OPTIONAL,
    AGGREGATED,
}
const ALLOCATOR_SYSMEM: string
const BUFFER_COPY_ALL: BufferCopyFlags
const BUFFER_COPY_METADATA: BufferCopyFlags
const BUFFER_OFFSET_NONE: number
const CAN_INLINE: number
const CAPS_FEATURE_MEMORY_SYSTEM_MEMORY: string
const CLOCK_TIME_NONE: ClockTime
const DEBUG_BG_MASK: number
const DEBUG_FG_MASK: number
const DEBUG_FORMAT_MASK: number
const ELEMENT_FACTORY_KLASS_DECODER: string
const ELEMENT_FACTORY_KLASS_DECRYPTOR: string
const ELEMENT_FACTORY_KLASS_DEMUXER: string
const ELEMENT_FACTORY_KLASS_DEPAYLOADER: string
const ELEMENT_FACTORY_KLASS_ENCODER: string
const ELEMENT_FACTORY_KLASS_ENCRYPTOR: string
const ELEMENT_FACTORY_KLASS_FORMATTER: string
const ELEMENT_FACTORY_KLASS_HARDWARE: string
const ELEMENT_FACTORY_KLASS_MEDIA_AUDIO: string
const ELEMENT_FACTORY_KLASS_MEDIA_IMAGE: string
const ELEMENT_FACTORY_KLASS_MEDIA_METADATA: string
const ELEMENT_FACTORY_KLASS_MEDIA_SUBTITLE: string
const ELEMENT_FACTORY_KLASS_MEDIA_VIDEO: string
const ELEMENT_FACTORY_KLASS_MUXER: string
const ELEMENT_FACTORY_KLASS_PARSER: string
const ELEMENT_FACTORY_KLASS_PAYLOADER: string
const ELEMENT_FACTORY_KLASS_SINK: string
const ELEMENT_FACTORY_KLASS_SRC: string
const ELEMENT_FACTORY_TYPE_ANY: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_AUDIOVIDEO_SINKS: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_AUDIO_ENCODER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DECODABLE: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DECODER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DECRYPTOR: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DEMUXER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_DEPAYLOADER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_ENCODER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_ENCRYPTOR: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_FORMATTER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_HARDWARE: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MAX_ELEMENTS: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_ANY: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_AUDIO: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_IMAGE: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_METADATA: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_SUBTITLE: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MEDIA_VIDEO: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_MUXER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_PARSER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_PAYLOADER: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_SINK: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_SRC: ElementFactoryListType
const ELEMENT_FACTORY_TYPE_VIDEO_ENCODER: ElementFactoryListType
const ELEMENT_METADATA_AUTHOR: string
const ELEMENT_METADATA_DESCRIPTION: string
const ELEMENT_METADATA_DOC_URI: string
const ELEMENT_METADATA_ICON_NAME: string
const ELEMENT_METADATA_KLASS: string
const ELEMENT_METADATA_LONGNAME: string

const EVENT_NUM_SHIFT: number
const EVENT_TYPE_BOTH: EventTypeFlags
const FLAG_SET_MASK_EXACT: number
const FORMAT_PERCENT_MAX: number
const FORMAT_PERCENT_SCALE: number

const GROUP_ID_INVALID: number
const LICENSE_UNKNOWN: string
const LOCK_FLAG_READWRITE: LockFlags
const MAP_READWRITE: MapFlags
const META_TAG_MEMORY_STR: string
const MSECOND: ClockTimeDiff
const NSECOND: ClockTimeDiff
const PARAM_CONDITIONALLY_AVAILABLE: number
const PARAM_CONTROLLABLE: number
const PARAM_DOC_SHOW_DEFAULT: number
const PARAM_MUTABLE_PAUSED: number
const PARAM_MUTABLE_PLAYING: number
const PARAM_MUTABLE_READY: number
const PARAM_USER_SHIFT: number
const PROTECTION_SYSTEM_ID_CAPS_FIELD: string
const PROTECTION_UNSPECIFIED_SYSTEM_ID: string

const QUERY_NUM_SHIFT: number
const QUERY_TYPE_BOTH: QueryTypeFlags
const SECOND: ClockTimeDiff

const SEGMENT_INSTANT_FLAGS: number
const SEQNUM_INVALID: number


const TAG_ALBUM: string
const TAG_ALBUM_ARTIST: string
const TAG_ALBUM_ARTIST_SORTNAME: string
const TAG_ALBUM_GAIN: string
const TAG_ALBUM_PEAK: string
const TAG_ALBUM_SORTNAME: string
const TAG_ALBUM_VOLUME_COUNT: string
const TAG_ALBUM_VOLUME_NUMBER: string
const TAG_APPLICATION_DATA: string
const TAG_APPLICATION_NAME: string
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
const TAG_CONDUCTOR: string
const TAG_CONTACT: string
const TAG_CONTAINER_FORMAT: string
const TAG_COPYRIGHT: string
const TAG_COPYRIGHT_URI: string
const TAG_DATE: string
const TAG_DATE_TIME: string
const TAG_DESCRIPTION: string
const TAG_DEVICE_MANUFACTURER: string
const TAG_DEVICE_MODEL: string
const TAG_DURATION: string
const TAG_ENCODED_BY: string
const TAG_ENCODER: string
const TAG_ENCODER_VERSION: string
const TAG_EXTENDED_COMMENT: string
const TAG_GENRE: string
const TAG_GEO_LOCATION_CAPTURE_DIRECTION: string
const TAG_GEO_LOCATION_CITY: string
const TAG_GEO_LOCATION_COUNTRY: string
const TAG_GEO_LOCATION_ELEVATION: string
const TAG_GEO_LOCATION_HORIZONTAL_ERROR: string
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
const TAG_INTERPRETED_BY: string
const TAG_ISRC: string
const TAG_KEYWORDS: string
const TAG_LANGUAGE_CODE: string
const TAG_LANGUAGE_NAME: string
const TAG_LICENSE: string
const TAG_LICENSE_URI: string
const TAG_LOCATION: string
const TAG_LYRICS: string
const TAG_MAXIMUM_BITRATE: string
const TAG_MIDI_BASE_NOTE: string
const TAG_MINIMUM_BITRATE: string
const TAG_NOMINAL_BITRATE: string
const TAG_ORGANIZATION: string
const TAG_PERFORMER: string
const TAG_PREVIEW_IMAGE: string
const TAG_PRIVATE_DATA: string
const TAG_PUBLISHER: string
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


const TOC_REPEAT_COUNT_INFINITE: number
const URI_NO_PORT: number
const USECOND: ClockTimeDiff
const VALUE_EQUAL: number
const VALUE_GREATER_THAN: number
const VALUE_LESS_THAN: number
const VALUE_UNORDERED: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
const VERSION_NANO: number
function buffer_get_max_memory(): number
function buffer_list_replace(old_list?: BufferList | null, new_list?: BufferList | null): [ /* returnType */ boolean, /* old_list */ BufferList | null ]
function buffer_list_take(old_list: BufferList, new_list?: BufferList | null): [ /* returnType */ boolean, /* old_list */ BufferList ]
function caps_features_from_string(features: string): CapsFeatures | null
function caps_from_string(string: string): Caps | null
function context_replace(old_context: Context, new_context?: Context | null): [ /* returnType */ boolean, /* old_context */ Context ]
function core_error_quark(): GLib.Quark
function debug_add_log_function(func: LogFunction): void
function debug_add_ring_buffer_logger(max_size_per_thread: number, thread_timeout: number): void
function debug_bin_to_dot_data(bin: Bin, details: DebugGraphDetails): string
function debug_bin_to_dot_file(bin: Bin, details: DebugGraphDetails, file_name: string): void
function debug_bin_to_dot_file_with_ts(bin: Bin, details: DebugGraphDetails, file_name: string): void
function debug_construct_term_color(colorinfo: number): string
function debug_construct_win_color(colorinfo: number): number
function debug_get_all_categories(): DebugCategory[]
function debug_get_color_mode(): DebugColorMode
function debug_get_default_threshold(): DebugLevel
function debug_get_stack_trace(flags: StackTraceFlags): string | null
function debug_is_active(): boolean
function debug_is_colored(): boolean
function debug_level_get_name(level: DebugLevel): string
function debug_log_default(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message: DebugMessage, user_data?: object | null): void
function debug_log_get_line(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message: DebugMessage): string
function debug_log_literal(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message_string: string): void
function debug_print_stack_trace(): void
function debug_remove_log_function(func?: LogFunction | null): number
function debug_remove_log_function_by_data(data?: object | null): number
function debug_remove_ring_buffer_logger(): void
function debug_ring_buffer_logger_get_logs(): string[]
function debug_set_active(active: boolean): void
function debug_set_color_mode(mode: DebugColorMode): void
function debug_set_color_mode_from_string(mode: string): void
function debug_set_colored(colored: boolean): void
function debug_set_default_threshold(level: DebugLevel): void
function debug_set_threshold_for_name(name: string, level: DebugLevel): void
function debug_set_threshold_from_string(list: string, reset: boolean): void
function debug_unset_threshold_for_name(name: string): void
function deinit(): void
function dynamic_type_register(plugin: Plugin, type: GObject.Type): boolean
function error_get_message(domain: GLib.Quark, code: number): string
function event_type_get_flags(type: EventType): EventTypeFlags
function event_type_get_name(type: EventType): string
function event_type_to_quark(type: EventType): GLib.Quark
function filename_to_uri(filename: string): string
function flow_get_name(ret: FlowReturn): string
function flow_to_quark(ret: FlowReturn): GLib.Quark
function format_get_by_nick(nick: string): Format
function format_get_details(format: Format): FormatDefinition | null
function format_get_name(format: Format): string | null
function format_iterate_definitions(): Iterator
function format_register(nick: string, description: string): Format
function format_to_quark(format: Format): GLib.Quark
function formats_contains(formats: Format[], format: Format): boolean
function get_main_executable_path(): string | null
function init(argv?: string[] | null): /* argv */ string[] | null
function init_check(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
function is_caps_features(obj?: object | null): boolean
function is_initialized(): boolean
function library_error_quark(): GLib.Quark
function message_take(old_message: Message, new_message?: Message | null): [ /* returnType */ boolean, /* old_message */ Message ]
function message_type_get_name(type: MessageType): string
function message_type_to_quark(type: MessageType): GLib.Quark
function meta_api_type_get_tags(api: GObject.Type): string[]
function meta_api_type_has_tag(api: GObject.Type, tag: GLib.Quark): boolean
function meta_api_type_register(api: string, tags: string[]): GObject.Type
function meta_get_info(impl: string): MetaInfo | null
function meta_register(api: GObject.Type, impl: string, size: number, init_func: MetaInitFunction, free_func: MetaFreeFunction, transform_func: MetaTransformFunction): MetaInfo
function meta_register_custom(name: string, tags: string[], transform_func: CustomMetaTransformFunction | null): MetaInfo
function mini_object_replace(olddata?: MiniObject | null, newdata?: MiniObject | null): [ /* returnType */ boolean, /* olddata */ MiniObject | null ]
function mini_object_take(olddata: MiniObject, newdata: MiniObject): [ /* returnType */ boolean, /* olddata */ MiniObject ]
function pad_mode_get_name(mode: PadMode): string
function param_spec_array(name: string, nick: string, blurb: string, element_spec: GObject.ParamSpec, flags: GObject.ParamFlags): GObject.ParamSpec
function param_spec_fraction(name: string, nick: string, blurb: string, min_num: number, min_denom: number, max_num: number, max_denom: number, default_num: number, default_denom: number, flags: GObject.ParamFlags): GObject.ParamSpec | null
function parent_buffer_meta_api_get_type(): GObject.Type
function parent_buffer_meta_get_info(): MetaInfo
function parse_bin_from_description(bin_description: string, ghost_unlinked_pads: boolean): Bin
function parse_bin_from_description_full(bin_description: string, ghost_unlinked_pads: boolean, context: ParseContext | null, flags: ParseFlags): Element
function parse_error_quark(): GLib.Quark
function parse_launch(pipeline_description: string): Element
function parse_launch_full(pipeline_description: string, context: ParseContext | null, flags: ParseFlags): Element
function parse_launchv(argv: string[]): Element
function parse_launchv_full(argv: string[], context: ParseContext | null, flags: ParseFlags): Element
function plugin_error_quark(): GLib.Quark
function preset_get_app_dir(): string | null
function preset_set_app_dir(app_dir: string): boolean
function protection_filter_systems_by_available_decryptors(system_identifiers: string[]): string[] | null
function protection_meta_api_get_type(): GObject.Type
function protection_meta_get_info(): MetaInfo
function protection_select_system(system_identifiers: string[]): string | null
function query_take(old_query?: Query | null, new_query?: Query | null): [ /* returnType */ boolean, /* old_query */ Query | null ]
function query_type_get_flags(type: QueryType): QueryTypeFlags
function query_type_get_name(type: QueryType): string
function query_type_to_quark(type: QueryType): GLib.Quark
function reference_timestamp_meta_api_get_type(): GObject.Type
function reference_timestamp_meta_get_info(): MetaInfo
function resource_error_quark(): GLib.Quark
function segtrap_is_enabled(): boolean
function segtrap_set_enabled(enabled: boolean): void
function state_change_get_name(transition: StateChange): string
function static_caps_get_type(): GObject.Type
function static_pad_template_get_type(): GObject.Type
function stream_error_quark(): GLib.Quark
function stream_type_get_name(stype: StreamType): string
function structure_take(oldstr_ptr?: Structure | null, newstr?: Structure | null): [ /* returnType */ boolean, /* oldstr_ptr */ Structure | null ]
function tag_exists(tag: string): boolean
function tag_get_description(tag: string): string | null
function tag_get_flag(tag: string): TagFlag
function tag_get_nick(tag: string): string | null
function tag_get_type(tag: string): GObject.Type
function tag_is_fixed(tag: string): boolean
function tag_list_copy_value(list: TagList, tag: string): [ /* returnType */ boolean, /* dest */ any ]
function tag_list_replace(old_taglist?: TagList | null, new_taglist?: TagList | null): [ /* returnType */ boolean, /* old_taglist */ TagList | null ]
function tag_list_take(old_taglist: TagList, new_taglist?: TagList | null): [ /* returnType */ boolean, /* old_taglist */ TagList ]
function tag_merge_strings_with_comma(src: any): /* dest */ any
function tag_merge_use_first(src: any): /* dest */ any
function toc_entry_type_get_nick(type: TocEntryType): string
function tracing_get_active_tracers(): Tracer[]
function tracing_register_hook(tracer: Tracer, detail: string, func: GObject.Callback): void
function type_find_get_type(): GObject.Type
function type_find_register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possible_caps: Caps | null): boolean
function type_is_plugin_api(type: GObject.Type): [ /* returnType */ boolean, /* flags */ PluginAPIFlags | null ]
function type_mark_as_plugin_api(type: GObject.Type, flags: PluginAPIFlags): void
function update_registry(): boolean
function uri_construct(protocol: string, location: string): string
function uri_error_quark(): GLib.Quark
function uri_from_string(uri: string): Uri | null
function uri_from_string_escaped(uri: string): Uri | null
function uri_get_location(uri: string): string | null
function uri_get_protocol(uri: string): string | null
function uri_has_protocol(uri: string, protocol: string): boolean
function uri_is_valid(uri: string): boolean
function uri_join_strings(base_uri: string, ref_uri: string): string
function uri_protocol_is_supported(type: URIType, protocol: string): boolean
function uri_protocol_is_valid(protocol: string): boolean
function util_array_binary_search(array: object | null, num_elements: number, element_size: number, search_func: GLib.CompareDataFunc, mode: SearchMode, search_data?: object | null): object | null
function util_double_to_fraction(src: number): [ /* dest_n */ number, /* dest_d */ number ]
function util_dump_buffer(buf: Buffer): void
function util_dump_mem(mem: Uint8Array): void
function util_fraction_add(a_n: number, a_d: number, b_n: number, b_d: number): [ /* returnType */ boolean, /* res_n */ number, /* res_d */ number ]
function util_fraction_compare(a_n: number, a_d: number, b_n: number, b_d: number): number
function util_fraction_multiply(a_n: number, a_d: number, b_n: number, b_d: number): [ /* returnType */ boolean, /* res_n */ number, /* res_d */ number ]
function util_fraction_to_double(src_n: number, src_d: number): /* dest */ number
function util_gdouble_to_guint64(value: number): number
function util_get_object_array(object: GObject.Object, name: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
function util_get_timestamp(): ClockTime
function util_greatest_common_divisor(a: number, b: number): number
function util_greatest_common_divisor_int64(a: number, b: number): number
function util_group_id_next(): number
function util_guint64_to_gdouble(value: number): number
function util_seqnum_compare(s1: number, s2: number): number
function util_seqnum_next(): number
function util_set_object_arg(object: GObject.Object, name: string, value: string): void
function util_set_object_array(object: GObject.Object, name: string, array: GObject.ValueArray): boolean
function util_set_value_from_string(value_str: string): /* value */ any
function util_uint64_scale(val: number, num: number, denom: number): number
function util_uint64_scale_ceil(val: number, num: number, denom: number): number
function util_uint64_scale_int(val: number, num: number, denom: number): number
function util_uint64_scale_int_ceil(val: number, num: number, denom: number): number
function util_uint64_scale_int_round(val: number, num: number, denom: number): number
function util_uint64_scale_round(val: number, num: number, denom: number): number
function value_can_compare(value1: any, value2: any): boolean
function value_can_intersect(value1: any, value2: any): boolean
function value_can_subtract(minuend: any, subtrahend: any): boolean
function value_can_union(value1: any, value2: any): boolean
function value_compare(value1: any, value2: any): number
function value_deserialize(src: string): [ /* returnType */ boolean, /* dest */ any ]
function value_deserialize_with_pspec(src: string, pspec?: GObject.ParamSpec | null): [ /* returnType */ boolean, /* dest */ any ]
function value_fixate(dest: any, src: any): boolean
function value_fraction_multiply(product: any, factor1: any, factor2: any): boolean
function value_fraction_subtract(dest: any, minuend: any, subtrahend: any): boolean
function value_get_bitmask(value: any): number
function value_get_caps(value: any): Caps
function value_get_caps_features(value: any): CapsFeatures
function value_get_double_range_max(value: any): number
function value_get_double_range_min(value: any): number
function value_get_flagset_flags(value: any): number
function value_get_flagset_mask(value: any): number
function value_get_fraction_denominator(value: any): number
function value_get_fraction_numerator(value: any): number
function value_get_fraction_range_max(value: any): any | null
function value_get_fraction_range_min(value: any): any | null
function value_get_int64_range_max(value: any): number
function value_get_int64_range_min(value: any): number
function value_get_int64_range_step(value: any): number
function value_get_int_range_max(value: any): number
function value_get_int_range_min(value: any): number
function value_get_int_range_step(value: any): number
function value_get_structure(value: any): Structure
function value_init_and_copy(src: any): /* dest */ any
function value_intersect(value1: any, value2: any): [ /* returnType */ boolean, /* dest */ any | null ]
function value_is_fixed(value: any): boolean
function value_is_subset(value1: any, value2: any): boolean
function value_register(table: ValueTable): void
function value_serialize(value: any): string | null
function value_set_bitmask(value: any, bitmask: number): void
function value_set_caps(value: any, caps: Caps): void
function value_set_caps_features(value: any, features: CapsFeatures): void
function value_set_double_range(value: any, start: number, end: number): void
function value_set_flagset(value: any, flags: number, mask: number): void
function value_set_fraction(value: any, numerator: number, denominator: number): void
function value_set_fraction_range(value: any, start: any, end: any): void
function value_set_fraction_range_full(value: any, numerator_start: number, denominator_start: number, numerator_end: number, denominator_end: number): void
function value_set_int64_range(value: any, start: number, end: number): void
function value_set_int64_range_step(value: any, start: number, end: number, step: number): void
function value_set_int_range(value: any, start: number, end: number): void
function value_set_int_range_step(value: any, start: number, end: number, step: number): void
function value_set_structure(value: any, structure: Structure): void
function value_subtract(minuend: any, subtrahend: any): [ /* returnType */ boolean, /* dest */ any | null ]
function value_union(value1: any, value2: any): [ /* returnType */ boolean, /* dest */ any ]
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
function version_string(): string
interface BufferForeachMetaFunc {
    (buffer: Buffer): boolean
}
interface BufferListFunc {
    (idx: number): boolean
}
interface BusFunc {
    (bus: Bus, message: Message): boolean
}
interface BusSyncHandler {
    (bus: Bus, message: Message): BusSyncReply
}
interface CapsFilterMapFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
interface CapsForeachFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
interface CapsMapFunc {
    (features: CapsFeatures, structure: Structure): boolean
}
interface ClockCallback {
    (clock: Clock, time: ClockTime, id: ClockID): boolean
}
interface ControlBindingConvert {
    (binding: ControlBinding, src_value: number, dest_value: any): void
}
interface ControlSourceGetValue {
    (self: ControlSource, timestamp: ClockTime, value: number): boolean
}
interface ControlSourceGetValueArray {
    (self: ControlSource, timestamp: ClockTime, interval: ClockTime, n_values: number, values: number): boolean
}
interface CustomMetaTransformFunction {
    (transbuf: Buffer, meta: CustomMeta, buffer: Buffer, type: GLib.Quark, data?: object | null): boolean
}
interface DebugFuncPtr {
    (): void
}
interface ElementCallAsyncFunc {
    (element: Element): void
}
interface ElementForeachPadFunc {
    (element: Element, pad: Pad): boolean
}
interface IteratorCopyFunction {
    (it: Iterator, copy: Iterator): void
}
interface IteratorFoldFunction {
    (item: any, ret: any): boolean
}
interface IteratorForeachFunction {
    (item: any): void
}
interface IteratorFreeFunction {
    (it: Iterator): void
}
interface IteratorItemFunction {
    (it: Iterator, item: any): IteratorItem
}
interface IteratorNextFunction {
    (it: Iterator, result: any): IteratorResult
}
interface IteratorResyncFunction {
    (it: Iterator): void
}
interface LogFunction {
    (category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object, message: DebugMessage): void
}
interface MemoryCopyFunction {
    (mem: Memory, offset: number, size: number): Memory
}
interface MemoryIsSpanFunction {
    (mem1: Memory, mem2: Memory, offset: number): boolean
}
interface MemoryMapFullFunction {
    (mem: Memory, info: MapInfo, maxsize: number): object | null
}
interface MemoryMapFunction {
    (mem: Memory, maxsize: number, flags: MapFlags): object | null
}
interface MemoryShareFunction {
    (mem: Memory, offset: number, size: number): Memory
}
interface MemoryUnmapFullFunction {
    (mem: Memory, info: MapInfo): void
}
interface MemoryUnmapFunction {
    (mem: Memory): void
}
interface MetaFreeFunction {
    (meta: Meta, buffer: Buffer): void
}
interface MetaInitFunction {
    (meta: Meta, params: object | null, buffer: Buffer): boolean
}
interface MetaTransformFunction {
    (transbuf: Buffer, meta: Meta, buffer: Buffer, type: GLib.Quark, data?: object | null): boolean
}
interface MiniObjectCopyFunction {
    (obj: MiniObject): MiniObject
}
interface MiniObjectDisposeFunction {
    (obj: MiniObject): boolean
}
interface MiniObjectFreeFunction {
    (obj: MiniObject): void
}
interface MiniObjectNotify {
    (obj: MiniObject): void
}
interface PadActivateFunction {
    (pad: Pad, parent: Object): boolean
}
interface PadActivateModeFunction {
    (pad: Pad, parent: Object, mode: PadMode, active: boolean): boolean
}
interface PadChainFunction {
    (pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn
}
interface PadChainListFunction {
    (pad: Pad, parent: Object | null, list: BufferList): FlowReturn
}
interface PadEventFullFunction {
    (pad: Pad, parent: Object | null, event: Event): FlowReturn
}
interface PadEventFunction {
    (pad: Pad, parent: Object | null, event: Event): boolean
}
interface PadForwardFunction {
    (pad: Pad): boolean
}
interface PadGetRangeFunction {
    (pad: Pad, parent: Object | null, offset: number, length: number, buffer: Buffer): FlowReturn
}
interface PadIterIntLinkFunction {
    (pad: Pad, parent?: Object | null): Iterator
}
interface PadLinkFunction {
    (pad: Pad, parent: Object | null, peer: Pad): PadLinkReturn
}
interface PadProbeCallback {
    (pad: Pad, info: PadProbeInfo): PadProbeReturn
}
interface PadQueryFunction {
    (pad: Pad, parent: Object | null, query: Query): boolean
}
interface PadStickyEventsForeachFunction {
    (pad: Pad, event?: Event | null): boolean
}
interface PadUnlinkFunction {
    (pad: Pad, parent?: Object | null): void
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
interface PromiseChangeFunc {
    (promise: Promise): void
}
interface StructureFilterMapFunc {
    (field_id: GLib.Quark, value: any): boolean
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
    (): void
}
interface TaskPoolFunction {
    (): void
}
interface TaskThreadFunc {
    (task: Task, thread: GLib.Thread): void
}
interface TypeFindFunction {
    (find: TypeFind): void
}
interface ValueCompareFunc {
    (value1: any, value2: any): number
}
interface ValueDeserializeFunc {
    (dest: any, s: string): boolean
}
interface ValueDeserializeWithPSpecFunc {
    (dest: any, s: string, pspec: GObject.ParamSpec): boolean
}
interface ValueSerializeFunc {
    (value1: any): string
}
class ChildProxy {
    /* Methods of Gst-1.0.Gst.ChildProxy */
    child_added(child: GObject.Object, name: string): void
    child_removed(child: GObject.Object, name: string): void
    get_child_by_index(index: number): GObject.Object | null
    get_child_by_name(name: string): GObject.Object | null
    get_children_count(): number
    get_property(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    set_property(name: string, value: any): void
    /* Virtual methods of Gst-1.0.Gst.ChildProxy */
    vfunc_child_added(child: GObject.Object, name: string): void
    vfunc_child_removed(child: GObject.Object, name: string): void
    vfunc_get_child_by_index(index: number): GObject.Object | null
    vfunc_get_child_by_name(name: string): GObject.Object | null
    vfunc_get_children_count(): number
    /* Signals of Gst-1.0.Gst.ChildProxy */
    connect(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: ChildProxy, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object, name: string) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: ChildProxy, object: GObject.Object, name: string) => void)): number
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    static name: string
}
class Preset {
    /* Methods of Gst-1.0.Gst.Preset */
    delete_preset(name: string): boolean
    get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    get_preset_names(): string[]
    get_property_names(): string[]
    is_editable(): boolean
    load_preset(name: string): boolean
    rename_preset(old_name: string, new_name: string): boolean
    save_preset(name: string): boolean
    set_meta(name: string, tag: string, value?: string | null): boolean
    /* Virtual methods of Gst-1.0.Gst.Preset */
    vfunc_delete_preset(name: string): boolean
    vfunc_get_meta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    vfunc_get_preset_names(): string[]
    vfunc_get_property_names(): string[]
    vfunc_load_preset(name: string): boolean
    vfunc_rename_preset(old_name: string, new_name: string): boolean
    vfunc_save_preset(name: string): boolean
    vfunc_set_meta(name: string, tag: string, value?: string | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_app_dir(): string | null
    static set_app_dir(app_dir: string): boolean
}
interface TagSetter_ConstructProps extends Element_ConstructProps {
}
class TagSetter {
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: State
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly start_time: ClockTime
    readonly numpads: number
    readonly pads: Pad[]
    readonly numsrcpads: number
    readonly srcpads: Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Pad[]
    readonly pads_cookie: number
    readonly contexts: Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TagSetter */
    add_tag_value(mode: TagMergeMode, tag: string, value: any): void
    get_tag_list(): TagList | null
    get_tag_merge_mode(): TagMergeMode
    merge_tags(list: TagList, mode: TagMergeMode): void
    reset_tags(): void
    set_tag_merge_mode(mode: TagMergeMode): void
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: ElementCallAsyncFunc): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: ElementForeachPadFunc): boolean
    foreach_sink_pad(func: ElementForeachPadFunc): boolean
    foreach_src_pad(func: ElementForeachPadFunc): boolean
    get_base_time(): ClockTime
    get_bus(): Bus | null
    get_clock(): Clock | null
    get_compatible_pad(pad: Pad, caps?: Caps | null): Pad | null
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null
    get_context(context_type: string): Context | null
    get_context_unlocked(context_type: string): Context | null
    get_contexts(): Context[]
    get_current_clock_time(): ClockTime
    get_current_running_time(): ClockTime
    get_factory(): ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): PadTemplate | null
    get_pad_template_list(): PadTemplate[]
    get_request_pad(name: string): Pad | null
    get_start_time(): ClockTime
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    get_static_pad(name: string): Pad | null
    is_locked_state(): boolean
    iterate_pads(): Iterator
    iterate_sink_pads(): Iterator
    iterate_src_pads(): Iterator
    link(dest: Element): boolean
    link_filtered(dest: Element, filter?: Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lost_state(): void
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    no_more_pads(): void
    post_message(message: Message): boolean
    provide_clock(): Clock | null
    query(query: Query): boolean
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Pad): void
    remove_pad(pad: Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    request_pad_simple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    send_event(event: Event): boolean
    set_base_time(time: ClockTime): void
    set_bus(bus?: Bus | null): void
    set_clock(clock?: Clock | null): boolean
    set_context(context: Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: ClockTime): void
    set_state(state: State): StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Element): void
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Pad): void
    vfunc_pad_removed(pad: Pad): void
    vfunc_post_message(message: Message): boolean
    vfunc_provide_clock(): Clock | null
    vfunc_query(query: Query): boolean
    vfunc_release_pad(pad: Pad): void
    vfunc_request_new_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfunc_send_event(event: Event): boolean
    vfunc_set_bus(bus?: Bus | null): void
    vfunc_set_clock(clock?: Clock | null): boolean
    vfunc_set_context(context: Context): void
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_state_changed(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: TagSetter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: TagSetter, new_pad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: TagSetter, new_pad: Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: TagSetter, old_pad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: TagSetter, old_pad: Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TagSetter, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TagSetter, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
interface TocSetter_ConstructProps extends Element_ConstructProps {
}
class TocSetter {
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: State
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly start_time: ClockTime
    readonly numpads: number
    readonly pads: Pad[]
    readonly numsrcpads: number
    readonly srcpads: Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Pad[]
    readonly pads_cookie: number
    readonly contexts: Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TocSetter */
    get_toc(): Toc | null
    reset(): void
    set_toc(toc?: Toc | null): void
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: ElementCallAsyncFunc): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: ElementForeachPadFunc): boolean
    foreach_sink_pad(func: ElementForeachPadFunc): boolean
    foreach_src_pad(func: ElementForeachPadFunc): boolean
    get_base_time(): ClockTime
    get_bus(): Bus | null
    get_clock(): Clock | null
    get_compatible_pad(pad: Pad, caps?: Caps | null): Pad | null
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null
    get_context(context_type: string): Context | null
    get_context_unlocked(context_type: string): Context | null
    get_contexts(): Context[]
    get_current_clock_time(): ClockTime
    get_current_running_time(): ClockTime
    get_factory(): ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): PadTemplate | null
    get_pad_template_list(): PadTemplate[]
    get_request_pad(name: string): Pad | null
    get_start_time(): ClockTime
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    get_static_pad(name: string): Pad | null
    is_locked_state(): boolean
    iterate_pads(): Iterator
    iterate_sink_pads(): Iterator
    iterate_src_pads(): Iterator
    link(dest: Element): boolean
    link_filtered(dest: Element, filter?: Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lost_state(): void
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    no_more_pads(): void
    post_message(message: Message): boolean
    provide_clock(): Clock | null
    query(query: Query): boolean
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Pad): void
    remove_pad(pad: Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    request_pad_simple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    send_event(event: Event): boolean
    set_base_time(time: ClockTime): void
    set_bus(bus?: Bus | null): void
    set_clock(clock?: Clock | null): boolean
    set_context(context: Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: ClockTime): void
    set_state(state: State): StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Element): void
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Pad): void
    vfunc_pad_removed(pad: Pad): void
    vfunc_post_message(message: Message): boolean
    vfunc_provide_clock(): Clock | null
    vfunc_query(query: Query): boolean
    vfunc_release_pad(pad: Pad): void
    vfunc_request_new_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfunc_send_event(event: Event): boolean
    vfunc_set_bus(bus?: Bus | null): void
    vfunc_set_clock(clock?: Clock | null): boolean
    vfunc_set_context(context: Context): void
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_state_changed(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: TocSetter) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: TocSetter) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: TocSetter, new_pad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: TocSetter, new_pad: Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: TocSetter, old_pad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: TocSetter, old_pad: Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TocSetter, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TocSetter, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TocSetter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TocSetter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TocSetter_ConstructProps)
    _init (config?: TocSetter_ConstructProps): void
    static $gtype: GObject.Type
}
class URIHandler {
    /* Methods of Gst-1.0.Gst.URIHandler */
    get_protocols(): string[] | null
    get_uri(): string | null
    get_uri_type(): URIType
    set_uri(uri: string): boolean
    /* Virtual methods of Gst-1.0.Gst.URIHandler */
    vfunc_get_uri(): string | null
    vfunc_set_uri(uri: string): boolean
    static name: string
}
interface Allocator_ConstructProps extends Object_ConstructProps {
}
class Allocator {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: AllocationParams | null): Memory | null
    free(memory: Memory): void
    set_default(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Allocator */
    vfunc_alloc(size: number, params?: AllocationParams | null): Memory | null
    vfunc_free(memory: Memory): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Allocator, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Allocator, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Allocator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Allocator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Allocator_ConstructProps)
    _init (config?: Allocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name?: string | null): Allocator | null
    static register(name: string, allocator: Allocator): void
    static $gtype: GObject.Type
}
interface Bin_ConstructProps extends Element_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Bin */
    async_handling?: boolean
    message_forward?: boolean
}
class Bin {
    /* Properties of Gst-1.0.Gst.Bin */
    async_handling: boolean
    message_forward: boolean
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: State
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly start_time: ClockTime
    readonly numpads: number
    readonly pads: Pad[]
    readonly numsrcpads: number
    readonly srcpads: Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Pad[]
    readonly pads_cookie: number
    readonly contexts: Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Element): boolean
    find_unlinked_pad(direction: PadDirection): Pad | null
    get_by_interface(iface: GObject.Type): Element | null
    get_by_name(name: string): Element | null
    get_by_name_recurse_up(name: string): Element | null
    get_suppressed_flags(): ElementFlags
    iterate_all_by_element_factory_name(factory_name: string): Iterator | null
    iterate_all_by_interface(iface: GObject.Type): Iterator | null
    iterate_elements(): Iterator | null
    iterate_recurse(): Iterator | null
    iterate_sinks(): Iterator | null
    iterate_sorted(): Iterator | null
    iterate_sources(): Iterator | null
    recalculate_latency(): boolean
    remove(element: Element): boolean
    set_suppressed_flags(flags: ElementFlags): void
    sync_children_states(): boolean
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: ElementCallAsyncFunc): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: ElementForeachPadFunc): boolean
    foreach_sink_pad(func: ElementForeachPadFunc): boolean
    foreach_src_pad(func: ElementForeachPadFunc): boolean
    get_base_time(): ClockTime
    get_bus(): Bus | null
    get_clock(): Clock | null
    get_compatible_pad(pad: Pad, caps?: Caps | null): Pad | null
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null
    get_context(context_type: string): Context | null
    get_context_unlocked(context_type: string): Context | null
    get_contexts(): Context[]
    get_current_clock_time(): ClockTime
    get_current_running_time(): ClockTime
    get_factory(): ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): PadTemplate | null
    get_pad_template_list(): PadTemplate[]
    get_request_pad(name: string): Pad | null
    get_start_time(): ClockTime
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    get_static_pad(name: string): Pad | null
    is_locked_state(): boolean
    iterate_pads(): Iterator
    iterate_sink_pads(): Iterator
    iterate_src_pads(): Iterator
    link(dest: Element): boolean
    link_filtered(dest: Element, filter?: Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lost_state(): void
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    no_more_pads(): void
    post_message(message: Message): boolean
    provide_clock(): Clock | null
    query(query: Query): boolean
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Pad): void
    remove_pad(pad: Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    request_pad_simple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    send_event(event: Event): boolean
    set_base_time(time: ClockTime): void
    set_bus(bus?: Bus | null): void
    set_clock(clock?: Clock | null): boolean
    set_context(context: Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: ClockTime): void
    set_state(state: State): StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Element): void
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Bin */
    vfunc_add_element(element: Element): boolean
    vfunc_deep_element_added(sub_bin: Bin, child: Element): void
    vfunc_deep_element_removed(sub_bin: Bin, child: Element): void
    vfunc_do_latency(): boolean
    vfunc_element_added(child: Element): void
    vfunc_element_removed(child: Element): void
    vfunc_handle_message(message: Message): void
    vfunc_remove_element(element: Element): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Pad): void
    vfunc_pad_removed(pad: Pad): void
    vfunc_post_message(message: Message): boolean
    vfunc_provide_clock(): Clock | null
    vfunc_query(query: Query): boolean
    vfunc_release_pad(pad: Pad): void
    vfunc_request_new_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfunc_send_event(event: Event): boolean
    vfunc_set_bus(bus?: Bus | null): void
    vfunc_set_clock(clock?: Clock | null): boolean
    vfunc_set_context(context: Context): void
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_state_changed(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Bin, sub_bin: Bin, element: Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Bin, sub_bin: Bin, element: Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Bin, element: Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Bin, sub_bin: Bin, element: Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Bin, sub_bin: Bin, element: Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Bin, element: Element): void
    connect(sigName: "do-latency", callback: (($obj: Bin) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Bin) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Bin, element: Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Bin, element: Element) => void)): number
    emit(sigName: "element-added", element: Element): void
    connect(sigName: "element-removed", callback: (($obj: Bin, element: Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Bin, element: Element) => void)): number
    emit(sigName: "element-removed", element: Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Bin) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Bin, new_pad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Bin, new_pad: Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Bin, old_pad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Bin, old_pad: Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bin, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Bin, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Bin, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Bin_ConstructProps)
    _init (config?: Bin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): Bin
    static $gtype: GObject.Type
}
class Bitmask {
    static name: string
}
interface BufferPool_ConstructProps extends Object_ConstructProps {
}
class BufferPool {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.BufferPool */
    acquire_buffer(params?: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    get_config(): Structure
    get_options(): string[]
    has_option(option: string): boolean
    is_active(): boolean
    release_buffer(buffer: Buffer): void
    set_active(active: boolean): boolean
    set_config(config: Structure): boolean
    set_flushing(flushing: boolean): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.BufferPool */
    vfunc_acquire_buffer(params?: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    vfunc_alloc_buffer(params?: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    vfunc_flush_start(): void
    vfunc_flush_stop(): void
    vfunc_free_buffer(buffer: Buffer): void
    vfunc_get_options(): string[]
    vfunc_release_buffer(buffer: Buffer): void
    vfunc_reset_buffer(buffer: Buffer): void
    vfunc_set_config(config: Structure): boolean
    vfunc_start(): boolean
    vfunc_stop(): boolean
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: BufferPool, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: BufferPool, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BufferPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BufferPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BufferPool_ConstructProps)
    _init (config?: BufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BufferPool
    static config_add_option(config: Structure, option: string): void
    static config_get_allocator(config: Structure): [ /* returnType */ boolean, /* allocator */ Allocator | null, /* params */ AllocationParams | null ]
    static config_get_option(config: Structure, index: number): string | null
    static config_get_params(config: Structure): [ /* returnType */ boolean, /* caps */ Caps | null, /* size */ number | null, /* min_buffers */ number | null, /* max_buffers */ number | null ]
    static config_has_option(config: Structure, option: string): boolean
    static config_n_options(config: Structure): number
    static config_set_allocator(config: Structure, allocator?: Allocator | null, params?: AllocationParams | null): void
    static config_set_params(config: Structure, caps: Caps | null, size: number, min_buffers: number, max_buffers: number): void
    static config_validate_params(config: Structure, caps: Caps | null, size: number, min_buffers: number, max_buffers: number): boolean
    static $gtype: GObject.Type
}
interface Bus_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Bus */
    enable_async?: boolean
}
class Bus {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Bus */
    add_signal_watch(): void
    add_signal_watch_full(priority: number): void
    add_watch(priority: number, func: BusFunc): number
    async_signal_func(message: Message, data?: object | null): boolean
    create_watch(): GLib.Source | null
    disable_sync_message_emission(): void
    enable_sync_message_emission(): void
    get_pollfd(): /* fd */ GLib.PollFD
    have_pending(): boolean
    peek(): Message | null
    poll(events: MessageType, timeout: ClockTime): Message | null
    pop(): Message | null
    pop_filtered(types: MessageType): Message | null
    post(message: Message): boolean
    remove_signal_watch(): void
    remove_watch(): boolean
    set_flushing(flushing: boolean): void
    set_sync_handler(func: BusSyncHandler | null): void
    sync_signal_handler(message: Message, data?: object | null): BusSyncReply
    timed_pop(timeout: ClockTime): Message | null
    timed_pop_filtered(timeout: ClockTime, types: MessageType): Message | null
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Bus */
    vfunc_message(message: Message): void
    vfunc_sync_message(message: Message): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Bus */
    connect(sigName: "message", callback: (($obj: Bus, message: Message) => void)): number
    connect_after(sigName: "message", callback: (($obj: Bus, message: Message) => void)): number
    emit(sigName: "message", message: Message): void
    connect(sigName: "sync-message", callback: (($obj: Bus, message: Message) => void)): number
    connect_after(sigName: "sync-message", callback: (($obj: Bus, message: Message) => void)): number
    emit(sigName: "sync-message", message: Message): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Bus, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Bus, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    /* Constructor properties of Gst-1.0.Gst.Clock */
    timeout?: number
    window_size?: number
    window_threshold?: number
}
class Clock {
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    add_observation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    add_observation_unapplied(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rate_num */ ClockTime | null, /* rate_denom */ ClockTime | null ]
    adjust_unlocked(internal: ClockTime): ClockTime
    adjust_with_calibration(internal_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    get_calibration(): [ /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rate_num */ ClockTime | null, /* rate_denom */ ClockTime | null ]
    get_internal_time(): ClockTime
    get_master(): Clock | null
    get_resolution(): ClockTime
    get_time(): ClockTime
    get_timeout(): ClockTime
    is_synced(): boolean
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID
    new_single_shot_id(time: ClockTime): ClockID
    periodic_id_reinit(id: ClockID, start_time: ClockTime, interval: ClockTime): boolean
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    set_master(master?: Clock | null): boolean
    set_resolution(resolution: ClockTime): ClockTime
    set_synced(synced: boolean): void
    set_timeout(timeout: ClockTime): void
    single_shot_id_reinit(id: ClockID, time: ClockTime): boolean
    unadjust_unlocked(external: ClockTime): ClockTime
    unadjust_with_calibration(external_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    wait_for_sync(timeout: ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime
    vfunc_get_internal_time(): ClockTime
    vfunc_get_resolution(): ClockTime
    vfunc_unschedule(entry: ClockEntry): void
    vfunc_wait(entry: ClockEntry): [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff | null ]
    vfunc_wait_async(entry: ClockEntry): ClockReturn
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: Clock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: Clock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Clock, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Clock, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Clock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    static id_compare_func(id1?: object | null, id2?: object | null): number
    static id_get_clock(id: ClockID): Clock | null
    static id_get_time(id: ClockID): ClockTime
    static id_ref(id: ClockID): ClockID
    static id_unref(id: ClockID): void
    static id_unschedule(id: ClockID): void
    static id_uses_clock(id: ClockID, clock: Clock): boolean
    static id_wait(id: ClockID): [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff | null ]
    static id_wait_async(id: ClockID, func: ClockCallback): ClockReturn
    static $gtype: GObject.Type
}
interface ControlBinding_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.ControlBinding */
    name?: string
    object?: Object
}
class ControlBinding {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ControlBinding */
    get_g_value_array(timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_value(timestamp: ClockTime): any | null
    is_disabled(): boolean
    set_disabled(disabled: boolean): void
    sync_values(object: Object, timestamp: ClockTime, last_sync: ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.ControlBinding */
    vfunc_get_g_value_array(timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    vfunc_get_value(timestamp: ClockTime): any | null
    vfunc_sync_values(object: Object, timestamp: ClockTime, last_sync: ClockTime): boolean
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ControlBinding, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ControlBinding, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ControlBinding, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ControlBinding_ConstructProps)
    _init (config?: ControlBinding_ConstructProps): void
    static $gtype: GObject.Type
}
interface ControlSource_ConstructProps extends Object_ConstructProps {
}
class ControlSource {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ControlSource */
    control_source_get_value(timestamp: ClockTime): [ /* returnType */ boolean, /* value */ number ]
    control_source_get_value_array(timestamp: ClockTime, interval: ClockTime, values: number[]): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ControlSource, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ControlSource, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ControlSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ControlSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ControlSource_ConstructProps)
    _init (config?: ControlSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Device */
    caps?: Caps
    device_class?: string
    display_name?: string
    properties?: Structure
}
class Device {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Device */
    create_element(name?: string | null): Element | null
    get_caps(): Caps | null
    get_device_class(): string
    get_display_name(): string
    get_properties(): Structure | null
    has_classes(classes: string): boolean
    has_classesv(classes: string[]): boolean
    reconfigure_element(element: Element): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Device */
    vfunc_create_element(name?: string | null): Element | null
    vfunc_reconfigure_element(element: Element): boolean
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Device */
    connect(sigName: "removed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "removed", callback: (($obj: Device) => void)): number
    emit(sigName: "removed"): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Device, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Device, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    static $gtype: GObject.Type
}
interface DeviceMonitor_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.DeviceMonitor */
    show_all?: boolean
}
class DeviceMonitor {
    /* Properties of Gst-1.0.Gst.DeviceMonitor */
    show_all: boolean
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.DeviceMonitor */
    add_filter(classes?: string | null, caps?: Caps | null): number
    get_bus(): Bus
    get_devices(): Device[] | null
    get_providers(): string[]
    get_show_all_devices(): boolean
    remove_filter(filter_id: number): boolean
    set_show_all_devices(show_all: boolean): void
    start(): boolean
    stop(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DeviceMonitor, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DeviceMonitor, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::show-all", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all", callback: (($obj: DeviceMonitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceMonitor_ConstructProps)
    _init (config?: DeviceMonitor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceMonitor
    static $gtype: GObject.Type
}
interface DeviceProvider_ConstructProps extends Object_ConstructProps {
}
class DeviceProvider {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.DeviceProvider */
    can_monitor(): boolean
    device_add(device: Device): void
    device_changed(device: Device, changed_device: Device): void
    device_remove(device: Device): void
    get_bus(): Bus
    get_devices(): Device[]
    get_factory(): DeviceProviderFactory | null
    get_hidden_providers(): string[]
    get_metadata(key: string): string
    hide_provider(name: string): void
    is_started(): boolean
    start(): boolean
    stop(): void
    unhide_provider(name: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.DeviceProvider */
    vfunc_start(): boolean
    vfunc_stop(): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.DeviceProvider */
    connect(sigName: "provider-hidden", callback: (($obj: DeviceProvider, object: string) => void)): number
    connect_after(sigName: "provider-hidden", callback: (($obj: DeviceProvider, object: string) => void)): number
    emit(sigName: "provider-hidden", object: string): void
    connect(sigName: "provider-unhidden", callback: (($obj: DeviceProvider, object: string) => void)): number
    connect_after(sigName: "provider-unhidden", callback: (($obj: DeviceProvider, object: string) => void)): number
    emit(sigName: "provider-unhidden", object: string): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DeviceProvider, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DeviceProvider, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceProvider_ConstructProps)
    _init (config?: DeviceProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.Type): boolean
    static add_metadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static add_static_metadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static get_metadata(klass: DeviceProvider | Function | GObject.Type, key: string): string | null
    static set_metadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static set_static_metadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static $gtype: GObject.Type
}
interface DeviceProviderFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class DeviceProviderFactory {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.DeviceProviderFactory */
    get(): DeviceProvider | null
    get_device_provider_type(): GObject.Type
    get_metadata(key: string): string | null
    get_metadata_keys(): string[] | null
    has_classes(classes?: string | null): boolean
    has_classesv(classes?: string[] | null): boolean
    /* Methods of Gst-1.0.Gst.PluginFeature */
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    get_plugin(): Plugin | null
    get_plugin_name(): string | null
    get_rank(): number
    load(): PluginFeature | null
    set_rank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DeviceProviderFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DeviceProviderFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceProviderFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceProviderFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceProviderFactory_ConstructProps)
    _init (config?: DeviceProviderFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name: string): DeviceProviderFactory | null
    static get_by_name(factoryname: string): DeviceProvider | null
    static list_get_device_providers(minrank: Rank): DeviceProviderFactory[]
    static $gtype: GObject.Type
}
class DoubleRange {
    static name: string
}
interface DynamicTypeFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class DynamicTypeFactory {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.PluginFeature */
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    get_plugin(): Plugin | null
    get_plugin_name(): string | null
    get_rank(): number
    load(): PluginFeature | null
    set_rank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: DynamicTypeFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: DynamicTypeFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DynamicTypeFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DynamicTypeFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DynamicTypeFactory_ConstructProps)
    _init (config?: DynamicTypeFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static load(factoryname: string): GObject.Type
    static $gtype: GObject.Type
}
interface Element_ConstructProps extends Object_ConstructProps {
}
class Element {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: ElementCallAsyncFunc): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: ElementForeachPadFunc): boolean
    foreach_sink_pad(func: ElementForeachPadFunc): boolean
    foreach_src_pad(func: ElementForeachPadFunc): boolean
    get_base_time(): ClockTime
    get_bus(): Bus | null
    get_clock(): Clock | null
    get_compatible_pad(pad: Pad, caps?: Caps | null): Pad | null
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null
    get_context(context_type: string): Context | null
    get_context_unlocked(context_type: string): Context | null
    get_contexts(): Context[]
    get_current_clock_time(): ClockTime
    get_current_running_time(): ClockTime
    get_factory(): ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): PadTemplate | null
    get_pad_template_list(): PadTemplate[]
    get_request_pad(name: string): Pad | null
    get_start_time(): ClockTime
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    get_static_pad(name: string): Pad | null
    is_locked_state(): boolean
    iterate_pads(): Iterator
    iterate_sink_pads(): Iterator
    iterate_src_pads(): Iterator
    link(dest: Element): boolean
    link_filtered(dest: Element, filter?: Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lost_state(): void
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    no_more_pads(): void
    post_message(message: Message): boolean
    provide_clock(): Clock | null
    query(query: Query): boolean
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Pad): void
    remove_pad(pad: Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    request_pad_simple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    send_event(event: Event): boolean
    set_base_time(time: ClockTime): void
    set_bus(bus?: Bus | null): void
    set_clock(clock?: Clock | null): boolean
    set_context(context: Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: ClockTime): void
    set_state(state: State): StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Element): void
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Pad): void
    vfunc_pad_removed(pad: Pad): void
    vfunc_post_message(message: Message): boolean
    vfunc_provide_clock(): Clock | null
    vfunc_query(query: Query): boolean
    vfunc_release_pad(pad: Pad): void
    vfunc_request_new_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfunc_send_event(event: Event): boolean
    vfunc_set_bus(bus?: Bus | null): void
    vfunc_set_clock(clock?: Clock | null): boolean
    vfunc_set_context(context: Context): void
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_state_changed(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Element) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Element, new_pad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Element, new_pad: Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Element, old_pad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Element, old_pad: Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Element, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Element, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    static make_from_uri(type: URIType, uri: string, elementname?: string | null): Element
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.Type): boolean
    static state_change_return_get_name(state_ret: StateChangeReturn): string
    static state_get_name(state: State): string
    static type_set_skip_documentation(type: GObject.Type): void
    static $gtype: GObject.Type
}
interface ElementFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class ElementFactory {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ElementFactory */
    can_sink_all_caps(caps: Caps): boolean
    can_sink_any_caps(caps: Caps): boolean
    can_src_all_caps(caps: Caps): boolean
    can_src_any_caps(caps: Caps): boolean
    create(name?: string | null): Element | null
    create_with_properties(names?: string[] | null, values?: any[] | null): Element | null
    get_element_type(): GObject.Type
    get_metadata(key: string): string | null
    get_metadata_keys(): string[] | null
    get_num_pad_templates(): number
    get_skip_documentation(): boolean
    get_static_pad_templates(): StaticPadTemplate[]
    get_uri_protocols(): string[]
    get_uri_type(): URIType
    has_interface(interfacename: string): boolean
    list_is_type(type: ElementFactoryListType): boolean
    /* Methods of Gst-1.0.Gst.PluginFeature */
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    get_plugin(): Plugin | null
    get_plugin_name(): string | null
    get_rank(): number
    load(): PluginFeature | null
    set_rank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ElementFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ElementFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    static find(name: string): ElementFactory | null
    static list_filter(list: ElementFactory[], caps: Caps, direction: PadDirection, subsetonly: boolean): ElementFactory[]
    static list_get_elements(type: ElementFactoryListType, minrank: Rank): ElementFactory[]
    static make(factoryname: string, name?: string | null): Element | null
    static make_with_properties(factoryname: string, names?: string[] | null, values?: any[] | null): Element | null
    static $gtype: GObject.Type
}
class FlagSet {
    static name: string
    /* Static methods and pseudo-constructors */
    static register(flags_type: GObject.Type): GObject.Type
}
class Fraction {
    static name: string
}
class FractionRange {
    static name: string
}
interface GhostPad_ConstructProps extends ProxyPad_ConstructProps {
}
class GhostPad {
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Caps
    offset: number
    template: PadTemplate
    /* Fields of Gst-1.0.Gst.ProxyPad */
    readonly pad: Pad
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Object
    readonly element_private: object
    readonly padtemplate: PadTemplate
    readonly direction: PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.GhostPad */
    construct(): boolean
    get_target(): Pad | null
    set_target(newtarget?: Pad | null): boolean
    /* Methods of Gst-1.0.Gst.ProxyPad */
    get_internal(): ProxyPad | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: PadMode, active: boolean): boolean
    add_probe(mask: PadProbeType, callback: PadProbeCallback): number
    can_link(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Element, stream_id?: string | null): string
    event_default(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    get_allowed_caps(): Caps | null
    get_current_caps(): Caps | null
    get_direction(): PadDirection
    get_element_private(): object | null
    get_last_flow_return(): FlowReturn
    get_offset(): number
    get_pad_template(): PadTemplate | null
    get_pad_template_caps(): Caps
    get_parent_element(): Element | null
    get_peer(): Pad | null
    get_range(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    get_single_internal_link(): Pad | null
    get_sticky_event(event_type: EventType, idx: number): Event | null
    get_stream(): Stream | null
    get_stream_id(): string | null
    get_task_state(): TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Iterator | null
    iterate_internal_links_default(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    link_maybe_ghosting(sink: Pad): boolean
    link_maybe_ghosting_full(sink: Pad, flags: PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Query): boolean
    peer_query_accept_caps(caps: Caps): boolean
    peer_query_caps(filter?: Caps | null): Caps
    peer_query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Query): boolean
    proxy_query_caps(query: Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    push_event(event: Event): boolean
    push_list(list: BufferList): FlowReturn
    query(query: Query): boolean
    query_accept_caps(caps: Caps): boolean
    query_caps(filter?: Caps | null): Caps
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Object | null, query: Query): boolean
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Event): boolean
    set_activate_function_full(activate: PadActivateFunction): void
    set_activatemode_function_full(activatemode: PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: PadChainFunction): void
    set_chain_list_function_full(chainlist: PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: PadEventFullFunction): void
    set_event_function_full(event: PadEventFunction): void
    set_getrange_function_full(get: PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: PadIterIntLinkFunction): void
    set_link_function_full(link: PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: PadQueryFunction): void
    set_unlink_function_full(unlink: PadUnlinkFunction): void
    start_task(func: TaskFunction): boolean
    sticky_events_foreach(foreach_func: PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Pad): void
    vfunc_unlinked(peer: Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: GhostPad, peer: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: GhostPad, peer: Pad) => void)): number
    emit(sigName: "linked", peer: Pad): void
    connect(sigName: "unlinked", callback: (($obj: GhostPad, peer: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: GhostPad, peer: Pad) => void)): number
    emit(sigName: "unlinked", peer: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: GhostPad, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: GhostPad, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: GhostPad, pspec: GObject.ParamSpec) => void)): number
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
    static new(name: string | null, target: Pad): GhostPad
    /* Function overloads */
    static new(name: string | null, direction: PadDirection): GhostPad
    static new_from_template(name: string | null, target: Pad, templ: PadTemplate): GhostPad
    /* Function overloads */
    static new_from_template(templ: PadTemplate, name?: string | null): GhostPad
    static new_no_target(name: string | null, dir: PadDirection): GhostPad
    static new_no_target_from_template(name: string | null, templ: PadTemplate): GhostPad
    static activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean
    static internal_activate_mode_default(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean
    static $gtype: GObject.Type
}
class Int64Range {
    static name: string
}
class IntRange {
    static name: string
}
interface Object_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Object */
    name?: string
    parent?: Object
}
class Object {
    /* Properties of Gst-1.0.Gst.Object */
    name: string
    parent: Object
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Object, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Object, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static check_uniqueness(list: Object[], name: string): boolean
    static default_deep_notify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excluded_props?: string[] | null): void
    static replace(oldobj?: Object | null, newobj?: Object | null): [ /* returnType */ boolean, /* oldobj */ Object | null ]
    static $gtype: GObject.Type
}
interface Pad_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Pad */
    direction?: PadDirection
    offset?: number
    template?: PadTemplate
}
class Pad {
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Caps
    offset: number
    template: PadTemplate
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: PadMode, active: boolean): boolean
    add_probe(mask: PadProbeType, callback: PadProbeCallback): number
    can_link(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Element, stream_id?: string | null): string
    event_default(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    get_allowed_caps(): Caps | null
    get_current_caps(): Caps | null
    get_direction(): PadDirection
    get_element_private(): object | null
    get_last_flow_return(): FlowReturn
    get_offset(): number
    get_pad_template(): PadTemplate | null
    get_pad_template_caps(): Caps
    get_parent_element(): Element | null
    get_peer(): Pad | null
    get_range(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    get_single_internal_link(): Pad | null
    get_sticky_event(event_type: EventType, idx: number): Event | null
    get_stream(): Stream | null
    get_stream_id(): string | null
    get_task_state(): TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Iterator | null
    iterate_internal_links_default(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    link_maybe_ghosting(sink: Pad): boolean
    link_maybe_ghosting_full(sink: Pad, flags: PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Query): boolean
    peer_query_accept_caps(caps: Caps): boolean
    peer_query_caps(filter?: Caps | null): Caps
    peer_query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Query): boolean
    proxy_query_caps(query: Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    push_event(event: Event): boolean
    push_list(list: BufferList): FlowReturn
    query(query: Query): boolean
    query_accept_caps(caps: Caps): boolean
    query_caps(filter?: Caps | null): Caps
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Object | null, query: Query): boolean
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Event): boolean
    set_activate_function_full(activate: PadActivateFunction): void
    set_activatemode_function_full(activatemode: PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: PadChainFunction): void
    set_chain_list_function_full(chainlist: PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: PadEventFullFunction): void
    set_event_function_full(event: PadEventFunction): void
    set_getrange_function_full(get: PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: PadIterIntLinkFunction): void
    set_link_function_full(link: PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: PadQueryFunction): void
    set_unlink_function_full(unlink: PadUnlinkFunction): void
    start_task(func: TaskFunction): boolean
    sticky_events_foreach(foreach_func: PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Pad): void
    vfunc_unlinked(peer: Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: Pad, peer: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: Pad, peer: Pad) => void)): number
    emit(sigName: "linked", peer: Pad): void
    connect(sigName: "unlinked", callback: (($obj: Pad, peer: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: Pad, peer: Pad) => void)): number
    emit(sigName: "unlinked", peer: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pad, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pad, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: Pad, pspec: GObject.ParamSpec) => void)): number
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
    static new(name: string | null, direction: PadDirection): Pad
    static new_from_static_template(templ: StaticPadTemplate, name: string): Pad
    static new_from_template(templ: PadTemplate, name?: string | null): Pad
    static link_get_name(ret: PadLinkReturn): string
    static $gtype: GObject.Type
}
interface PadTemplate_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.PadTemplate */
    caps?: Caps
    direction?: PadDirection
    gtype?: GObject.Type
    name_template?: string
    presence?: PadPresence
}
class PadTemplate {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.PadTemplate */
    get_caps(): Caps
    get_documentation_caps(): Caps
    pad_created(pad: Pad): void
    set_documentation_caps(caps: Caps): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.PadTemplate */
    vfunc_pad_created(pad: Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.PadTemplate */
    connect(sigName: "pad-created", callback: (($obj: PadTemplate, pad: Pad) => void)): number
    connect_after(sigName: "pad-created", callback: (($obj: PadTemplate, pad: Pad) => void)): number
    emit(sigName: "pad-created", pad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PadTemplate, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PadTemplate, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    static new_from_static_pad_template_with_gtype(pad_template: StaticPadTemplate, pad_type: GObject.Type): PadTemplate
    static new_with_gtype(name_template: string, direction: PadDirection, presence: PadPresence, caps: Caps, pad_type: GObject.Type): PadTemplate
    static $gtype: GObject.Type
}
class ParamArray {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
class ParamFraction {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly g_type_instance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly value_type: GObject.Type
    readonly owner_type: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    get_blurb(): string | null
    get_default_value(): any
    get_name(): string
    get_name_quark(): GLib.Quark
    get_nick(): string
    get_qdata(quark: GLib.Quark): object | null
    get_redirect_target(): GObject.ParamSpec | null
    set_qdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    steal_qdata(quark: GLib.Quark): object | null
    /* Virtual methods of GObject-2.0.GObject.ParamSpec */
    vfunc_finalize(): void
    vfunc_value_set_default(value: any): void
    vfunc_value_validate(value: any): boolean
    vfunc_values_cmp(value1: any, value2: any): number
    static name: string
}
interface Pipeline_ConstructProps extends Bin_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Pipeline */
    auto_flush_bus?: boolean
    delay?: number
    latency?: number
}
class Pipeline {
    /* Properties of Gst-1.0.Gst.Pipeline */
    auto_flush_bus: boolean
    delay: number
    latency: number
    /* Properties of Gst-1.0.Gst.Bin */
    async_handling: boolean
    message_forward: boolean
    /* Fields of Gst-1.0.Gst.Bin */
    readonly element: Element
    readonly numchildren: number
    readonly children: Element[]
    readonly children_cookie: number
    readonly child_bus: Bus
    readonly messages: Message[]
    readonly polling: boolean
    readonly state_dirty: boolean
    readonly clock_dirty: boolean
    readonly provided_clock: Clock
    readonly clock_provider: Element
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Object
    readonly state_lock: GLib.RecMutex
    readonly state_cond: GLib.Cond
    readonly state_cookie: number
    readonly target_state: State
    readonly current_state: State
    readonly next_state: State
    readonly pending_state: State
    readonly last_return: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly base_time: ClockTimeDiff
    readonly start_time: ClockTime
    readonly numpads: number
    readonly pads: Pad[]
    readonly numsrcpads: number
    readonly srcpads: Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Pad[]
    readonly pads_cookie: number
    readonly contexts: Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Pipeline */
    auto_clock(): void
    get_auto_flush_bus(): boolean
    get_bus(): Bus
    get_delay(): ClockTime
    get_latency(): ClockTime
    get_pipeline_clock(): Clock
    set_auto_flush_bus(auto_flush: boolean): void
    set_delay(delay: ClockTime): void
    set_latency(latency: ClockTime): void
    use_clock(clock?: Clock | null): void
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Element): boolean
    find_unlinked_pad(direction: PadDirection): Pad | null
    get_by_interface(iface: GObject.Type): Element | null
    get_by_name(name: string): Element | null
    get_by_name_recurse_up(name: string): Element | null
    get_suppressed_flags(): ElementFlags
    iterate_all_by_element_factory_name(factory_name: string): Iterator | null
    iterate_all_by_interface(iface: GObject.Type): Iterator | null
    iterate_elements(): Iterator | null
    iterate_recurse(): Iterator | null
    iterate_sinks(): Iterator | null
    iterate_sorted(): Iterator | null
    iterate_sources(): Iterator | null
    recalculate_latency(): boolean
    remove(element: Element): boolean
    set_suppressed_flags(flags: ElementFlags): void
    sync_children_states(): boolean
    /* Methods of Gst-1.0.Gst.Element */
    abort_state(): void
    add_pad(pad: Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    call_async(func: ElementCallAsyncFunc): void
    change_state(transition: StateChange): StateChangeReturn
    continue_state(ret: StateChangeReturn): StateChangeReturn
    create_all_pads(): void
    foreach_pad(func: ElementForeachPadFunc): boolean
    foreach_sink_pad(func: ElementForeachPadFunc): boolean
    foreach_src_pad(func: ElementForeachPadFunc): boolean
    get_base_time(): ClockTime
    get_bus(): Bus | null
    get_clock(): Clock | null
    get_compatible_pad(pad: Pad, caps?: Caps | null): Pad | null
    get_compatible_pad_template(compattempl: PadTemplate): PadTemplate | null
    get_context(context_type: string): Context | null
    get_context_unlocked(context_type: string): Context | null
    get_contexts(): Context[]
    get_current_clock_time(): ClockTime
    get_current_running_time(): ClockTime
    get_factory(): ElementFactory | null
    get_metadata(key: string): string
    get_pad_template(name: string): PadTemplate | null
    get_pad_template_list(): PadTemplate[]
    get_request_pad(name: string): Pad | null
    get_start_time(): ClockTime
    get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    get_static_pad(name: string): Pad | null
    is_locked_state(): boolean
    iterate_pads(): Iterator
    iterate_sink_pads(): Iterator
    iterate_src_pads(): Iterator
    link(dest: Element): boolean
    link_filtered(dest: Element, filter?: Caps | null): boolean
    link_pads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    link_pads_filtered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    link_pads_full(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lost_state(): void
    message_full(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    message_full_with_details(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    no_more_pads(): void
    post_message(message: Message): boolean
    provide_clock(): Clock | null
    query(query: Query): boolean
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    release_request_pad(pad: Pad): void
    remove_pad(pad: Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    request_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    request_pad_simple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): boolean
    seek_simple(format: Format, seek_flags: SeekFlags, seek_pos: number): boolean
    send_event(event: Event): boolean
    set_base_time(time: ClockTime): void
    set_bus(bus?: Bus | null): void
    set_clock(clock?: Clock | null): boolean
    set_context(context: Context): void
    set_locked_state(locked_state: boolean): boolean
    set_start_time(time: ClockTime): void
    set_state(state: State): StateChangeReturn
    sync_state_with_parent(): boolean
    unlink(dest: Element): void
    unlink_pads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Bin */
    vfunc_add_element(element: Element): boolean
    vfunc_deep_element_added(sub_bin: Bin, child: Element): void
    vfunc_deep_element_removed(sub_bin: Bin, child: Element): void
    vfunc_do_latency(): boolean
    vfunc_element_added(child: Element): void
    vfunc_element_removed(child: Element): void
    vfunc_handle_message(message: Message): void
    vfunc_remove_element(element: Element): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    vfunc_change_state(transition: StateChange): StateChangeReturn
    vfunc_get_state(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Pad): void
    vfunc_pad_removed(pad: Pad): void
    vfunc_post_message(message: Message): boolean
    vfunc_provide_clock(): Clock | null
    vfunc_query(query: Query): boolean
    vfunc_release_pad(pad: Pad): void
    vfunc_request_new_pad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    vfunc_send_event(event: Event): boolean
    vfunc_set_bus(bus?: Bus | null): void
    vfunc_set_clock(clock?: Clock | null): boolean
    vfunc_set_context(context: Context): void
    vfunc_set_state(state: State): StateChangeReturn
    vfunc_state_changed(oldstate: State, newstate: State, pending: State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: (($obj: Pipeline, sub_bin: Bin, element: Element) => void)): number
    connect_after(sigName: "deep-element-added", callback: (($obj: Pipeline, sub_bin: Bin, element: Element) => void)): number
    emit(sigName: "deep-element-added", sub_bin: Bin, element: Element): void
    connect(sigName: "deep-element-removed", callback: (($obj: Pipeline, sub_bin: Bin, element: Element) => void)): number
    connect_after(sigName: "deep-element-removed", callback: (($obj: Pipeline, sub_bin: Bin, element: Element) => void)): number
    emit(sigName: "deep-element-removed", sub_bin: Bin, element: Element): void
    connect(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    connect_after(sigName: "do-latency", callback: (($obj: Pipeline) => boolean)): number
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: (($obj: Pipeline, element: Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: Pipeline, element: Element) => void)): number
    emit(sigName: "element-added", element: Element): void
    connect(sigName: "element-removed", callback: (($obj: Pipeline, element: Element) => void)): number
    connect_after(sigName: "element-removed", callback: (($obj: Pipeline, element: Element) => void)): number
    emit(sigName: "element-removed", element: Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: Pipeline) => void)): number
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: (($obj: Pipeline, new_pad: Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: Pipeline, new_pad: Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Pad): void
    connect(sigName: "pad-removed", callback: (($obj: Pipeline, old_pad: Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: Pipeline, old_pad: Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Pipeline, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Pipeline, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: (($obj: Pipeline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pipeline_ConstructProps)
    _init (config?: Pipeline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name?: string | null): Pipeline
    /* Function overloads */
    static new(name?: string | null): Pipeline
    static $gtype: GObject.Type
}
interface Plugin_ConstructProps extends Object_ConstructProps {
}
class Plugin {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Plugin */
    add_dependency(env_vars: string[] | null, paths: string[] | null, names: string[] | null, flags: PluginDependencyFlags): void
    add_dependency_simple(env_vars: string | null, paths: string | null, names: string | null, flags: PluginDependencyFlags): void
    get_cache_data(): Structure | null
    get_description(): string
    get_filename(): string | null
    get_license(): string
    get_name(): string
    get_origin(): string
    get_package(): string
    get_release_date_string(): string | null
    get_source(): string
    get_version(): string
    is_loaded(): boolean
    load(): Plugin | null
    set_cache_data(cache_data: Structure): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Plugin, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Plugin, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    static list_free(list: Plugin[]): void
    static load_by_name(name: string): Plugin | null
    static load_file(filename: string): Plugin
    static register_static(major_version: number, minor_version: number, name: string, description: string, init_func: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    static register_static_full(major_version: number, minor_version: number, name: string, description: string, init_full_func: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    static $gtype: GObject.Type
}
interface PluginFeature_ConstructProps extends Object_ConstructProps {
}
class PluginFeature {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.PluginFeature */
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    get_plugin(): Plugin | null
    get_plugin_name(): string | null
    get_rank(): number
    load(): PluginFeature | null
    set_rank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: PluginFeature, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PluginFeature, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    /* Static methods and pseudo-constructors */
    static list_copy(list: PluginFeature[]): PluginFeature[]
    static list_debug(list: PluginFeature[]): void
    static list_free(list: PluginFeature[]): void
    static rank_compare_func(p1?: object | null, p2?: object | null): number
    static $gtype: GObject.Type
}
interface ProxyPad_ConstructProps extends Pad_ConstructProps {
}
class ProxyPad {
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Caps
    offset: number
    template: PadTemplate
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Object
    readonly element_private: object
    readonly padtemplate: PadTemplate
    readonly direction: PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ProxyPad */
    get_internal(): ProxyPad | null
    /* Methods of Gst-1.0.Gst.Pad */
    activate_mode(mode: PadMode, active: boolean): boolean
    add_probe(mask: PadProbeType, callback: PadProbeCallback): number
    can_link(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chain_list(list: BufferList): FlowReturn
    check_reconfigure(): boolean
    create_stream_id(parent: Element, stream_id?: string | null): string
    event_default(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    get_allowed_caps(): Caps | null
    get_current_caps(): Caps | null
    get_direction(): PadDirection
    get_element_private(): object | null
    get_last_flow_return(): FlowReturn
    get_offset(): number
    get_pad_template(): PadTemplate | null
    get_pad_template_caps(): Caps
    get_parent_element(): Element | null
    get_peer(): Pad | null
    get_range(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    get_single_internal_link(): Pad | null
    get_sticky_event(event_type: EventType, idx: number): Event | null
    get_stream(): Stream | null
    get_stream_id(): string | null
    get_task_state(): TaskState
    has_current_caps(): boolean
    is_active(): boolean
    is_blocked(): boolean
    is_blocking(): boolean
    is_linked(): boolean
    iterate_internal_links(): Iterator | null
    iterate_internal_links_default(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    link_full(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    link_maybe_ghosting(sink: Pad): boolean
    link_maybe_ghosting_full(sink: Pad, flags: PadLinkCheck): boolean
    mark_reconfigure(): void
    needs_reconfigure(): boolean
    pause_task(): boolean
    peer_query(query: Query): boolean
    peer_query_accept_caps(caps: Caps): boolean
    peer_query_caps(filter?: Caps | null): Caps
    peer_query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    peer_query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peer_query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxy_query_accept_caps(query: Query): boolean
    proxy_query_caps(query: Query): boolean
    pull_range(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    push_event(event: Event): boolean
    push_list(list: BufferList): FlowReturn
    query(query: Query): boolean
    query_accept_caps(caps: Caps): boolean
    query_caps(filter?: Caps | null): Caps
    query_convert(src_format: Format, src_val: number, dest_format: Format): [ /* returnType */ boolean, /* dest_val */ number ]
    query_default(parent: Object | null, query: Query): boolean
    query_duration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    query_position(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    remove_probe(id: number): void
    send_event(event: Event): boolean
    set_activate_function_full(activate: PadActivateFunction): void
    set_activatemode_function_full(activatemode: PadActivateModeFunction): void
    set_active(active: boolean): boolean
    set_chain_function_full(chain: PadChainFunction): void
    set_chain_list_function_full(chainlist: PadChainListFunction): void
    set_element_private(priv?: object | null): void
    set_event_full_function_full(event: PadEventFullFunction): void
    set_event_function_full(event: PadEventFunction): void
    set_getrange_function_full(get: PadGetRangeFunction): void
    set_iterate_internal_links_function_full(iterintlink: PadIterIntLinkFunction): void
    set_link_function_full(link: PadLinkFunction): void
    set_offset(offset: number): void
    set_query_function_full(query: PadQueryFunction): void
    set_unlink_function_full(unlink: PadUnlinkFunction): void
    start_task(func: TaskFunction): boolean
    sticky_events_foreach(foreach_func: PadStickyEventsForeachFunction): void
    stop_task(): boolean
    store_sticky_event(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    use_fixed_caps(): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Pad */
    vfunc_linked(peer: Pad): void
    vfunc_unlinked(peer: Pad): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: (($obj: ProxyPad, peer: Pad) => void)): number
    connect_after(sigName: "linked", callback: (($obj: ProxyPad, peer: Pad) => void)): number
    emit(sigName: "linked", peer: Pad): void
    connect(sigName: "unlinked", callback: (($obj: ProxyPad, peer: Pad) => void)): number
    connect_after(sigName: "unlinked", callback: (($obj: ProxyPad, peer: Pad) => void)): number
    emit(sigName: "unlinked", peer: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: ProxyPad, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: ProxyPad, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::offset", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: (($obj: ProxyPad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ProxyPad_ConstructProps)
    _init (config?: ProxyPad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static chain_default(pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn
    static chain_list_default(pad: Pad, parent: Object | null, list: BufferList): FlowReturn
    static getrange_default(pad: Pad, parent: Object, offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    static iterate_internal_links_default(pad: Pad, parent?: Object | null): Iterator | null
    static $gtype: GObject.Type
}
interface Registry_ConstructProps extends Object_ConstructProps {
}
class Registry {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Registry */
    add_feature(feature: PluginFeature): boolean
    add_plugin(plugin: Plugin): boolean
    check_feature_version(feature_name: string, min_major: number, min_minor: number, min_micro: number): boolean
    feature_filter(filter: PluginFeatureFilter, first: boolean): PluginFeature[]
    find_feature(name: string, type: GObject.Type): PluginFeature | null
    find_plugin(name: string): Plugin | null
    get_feature_list(type: GObject.Type): PluginFeature[]
    get_feature_list_by_plugin(name: string): PluginFeature[]
    get_feature_list_cookie(): number
    get_plugin_list(): Plugin[]
    lookup(filename: string): Plugin | null
    lookup_feature(name: string): PluginFeature | null
    plugin_filter(filter: PluginFilter, first: boolean): Plugin[]
    remove_feature(feature: PluginFeature): void
    remove_plugin(plugin: Plugin): void
    scan_path(path: string): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Registry */
    connect(sigName: "feature-added", callback: (($obj: Registry, feature: PluginFeature) => void)): number
    connect_after(sigName: "feature-added", callback: (($obj: Registry, feature: PluginFeature) => void)): number
    emit(sigName: "feature-added", feature: PluginFeature): void
    connect(sigName: "plugin-added", callback: (($obj: Registry, plugin: Plugin) => void)): number
    connect_after(sigName: "plugin-added", callback: (($obj: Registry, plugin: Plugin) => void)): number
    emit(sigName: "plugin-added", plugin: Plugin): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Registry, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Registry, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    static fork_is_enabled(): boolean
    static fork_set_enabled(enabled: boolean): void
    static get(): Registry
    static $gtype: GObject.Type
}
interface SharedTaskPool_ConstructProps extends TaskPool_ConstructProps {
}
class SharedTaskPool {
    /* Fields of Gst-1.0.Gst.TaskPool */
    readonly object: Object
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.SharedTaskPool */
    get_max_threads(): number
    set_max_threads(max_threads: number): void
    /* Methods of Gst-1.0.Gst.TaskPool */
    cleanup(): void
    dispose_handle(id?: object | null): void
    join(id?: object | null): void
    prepare(): void
    push(func: TaskPoolFunction): object | null
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.TaskPool */
    vfunc_cleanup(): void
    vfunc_dispose_handle(id?: object | null): void
    vfunc_join(id?: object | null): void
    vfunc_prepare(): void
    vfunc_push(func: TaskPoolFunction): object | null
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: SharedTaskPool, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: SharedTaskPool, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SharedTaskPool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SharedTaskPool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SharedTaskPool_ConstructProps)
    _init (config?: SharedTaskPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SharedTaskPool
    static $gtype: GObject.Type
}
interface Stream_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Stream */
    caps?: Caps
    stream_flags?: StreamFlags
    stream_id?: string
    stream_type?: StreamType
    tags?: TagList
}
class Stream {
    /* Properties of Gst-1.0.Gst.Stream */
    caps: Caps
    stream_flags: StreamFlags
    stream_type: StreamType
    tags: TagList
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Stream */
    get_caps(): Caps | null
    get_stream_flags(): StreamFlags
    get_stream_id(): string | null
    get_stream_type(): StreamType
    get_tags(): TagList | null
    set_caps(caps?: Caps | null): void
    set_stream_flags(flags: StreamFlags): void
    set_stream_type(stream_type: StreamType): void
    set_tags(tags?: TagList | null): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Stream, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Stream, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stream-flags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-flags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stream-type", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-type", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(stream_id: string | null, caps: Caps | null, type: StreamType, flags: StreamFlags): Stream
    static $gtype: GObject.Type
}
interface StreamCollection_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.StreamCollection */
    upstream_id?: string
}
class StreamCollection {
    /* Properties of Gst-1.0.Gst.StreamCollection */
    upstream_id: string
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.StreamCollection */
    add_stream(stream: Stream): boolean
    get_size(): number
    get_stream(index: number): Stream | null
    get_upstream_id(): string | null
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.StreamCollection */
    vfunc_stream_notify(stream: Stream, pspec: GObject.ParamSpec): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.StreamCollection */
    connect(sigName: "stream-notify", callback: (($obj: StreamCollection, object: Stream, p0: GObject.ParamSpec) => void)): number
    connect_after(sigName: "stream-notify", callback: (($obj: StreamCollection, object: Stream, p0: GObject.ParamSpec) => void)): number
    emit(sigName: "stream-notify", object: Stream, p0: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: StreamCollection, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: StreamCollection, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::upstream-id", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upstream-id", callback: (($obj: StreamCollection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StreamCollection_ConstructProps)
    _init (config?: StreamCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(upstream_id?: string | null): StreamCollection
    static $gtype: GObject.Type
}
interface SystemClock_ConstructProps extends Clock_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.SystemClock */
    clock_type?: ClockType
}
class SystemClock {
    /* Properties of Gst-1.0.Gst.SystemClock */
    clock_type: ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Fields of Gst-1.0.Gst.Clock */
    readonly object: Object
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    add_observation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    add_observation_unapplied(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rate_num */ ClockTime | null, /* rate_denom */ ClockTime | null ]
    adjust_unlocked(internal: ClockTime): ClockTime
    adjust_with_calibration(internal_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    get_calibration(): [ /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rate_num */ ClockTime | null, /* rate_denom */ ClockTime | null ]
    get_internal_time(): ClockTime
    get_master(): Clock | null
    get_resolution(): ClockTime
    get_time(): ClockTime
    get_timeout(): ClockTime
    is_synced(): boolean
    new_periodic_id(start_time: ClockTime, interval: ClockTime): ClockID
    new_single_shot_id(time: ClockTime): ClockID
    periodic_id_reinit(id: ClockID, start_time: ClockTime, interval: ClockTime): boolean
    set_calibration(internal: ClockTime, external: ClockTime, rate_num: ClockTime, rate_denom: ClockTime): void
    set_master(master?: Clock | null): boolean
    set_resolution(resolution: ClockTime): ClockTime
    set_synced(synced: boolean): void
    set_timeout(timeout: ClockTime): void
    single_shot_id_reinit(id: ClockID, time: ClockTime): boolean
    unadjust_unlocked(external: ClockTime): ClockTime
    unadjust_with_calibration(external_target: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    wait_for_sync(timeout: ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: ClockTime, new_resolution: ClockTime): ClockTime
    vfunc_get_internal_time(): ClockTime
    vfunc_get_resolution(): ClockTime
    vfunc_unschedule(entry: ClockEntry): void
    vfunc_wait(entry: ClockEntry): [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff | null ]
    vfunc_wait_async(entry: ClockEntry): ClockReturn
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: (($obj: SystemClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: SystemClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: SystemClock, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: SystemClock, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: SystemClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SystemClock_ConstructProps)
    _init (config?: SystemClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static obtain(): Clock
    static set_default(new_clock?: Clock | null): void
    static $gtype: GObject.Type
}
interface Task_ConstructProps extends Object_ConstructProps {
}
class Task {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Task */
    get_pool(): TaskPool
    get_state(): TaskState
    join(): boolean
    pause(): boolean
    resume(): boolean
    set_enter_callback(enter_func: TaskThreadFunc): void
    set_leave_callback(leave_func: TaskThreadFunc): void
    set_lock(mutex: GLib.RecMutex): void
    set_pool(pool: TaskPool): void
    set_state(state: TaskState): boolean
    start(): boolean
    stop(): boolean
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Task, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Task, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    static new(func: TaskFunction): Task
    static cleanup_all(): void
    static $gtype: GObject.Type
}
interface TaskPool_ConstructProps extends Object_ConstructProps {
}
class TaskPool {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TaskPool */
    cleanup(): void
    dispose_handle(id?: object | null): void
    join(id?: object | null): void
    prepare(): void
    push(func: TaskPoolFunction): object | null
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.TaskPool */
    vfunc_cleanup(): void
    vfunc_dispose_handle(id?: object | null): void
    vfunc_join(id?: object | null): void
    vfunc_prepare(): void
    vfunc_push(func: TaskPoolFunction): object | null
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TaskPool, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TaskPool, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
interface Tracer_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Tracer */
    params?: string
}
class Tracer {
    /* Properties of Gst-1.0.Gst.Tracer */
    params: string
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: Tracer, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: Tracer, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::params", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::params", callback: (($obj: Tracer, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Tracer_ConstructProps)
    _init (config?: Tracer_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin | null, name: string, type: GObject.Type): boolean
    static $gtype: GObject.Type
}
interface TracerFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class TracerFactory {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TracerFactory */
    get_tracer_type(): GObject.Type
    /* Methods of Gst-1.0.Gst.PluginFeature */
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    get_plugin(): Plugin | null
    get_plugin_name(): string | null
    get_rank(): number
    load(): PluginFeature | null
    set_rank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TracerFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TracerFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TracerFactory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TracerFactory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TracerFactory_ConstructProps)
    _init (config?: TracerFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static get_list(): TracerFactory[]
    static $gtype: GObject.Type
}
interface TracerRecord_ConstructProps extends Object_ConstructProps {
}
class TracerRecord {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TracerRecord, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TracerRecord, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: TracerRecord, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TracerRecord, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TracerRecord_ConstructProps)
    _init (config?: TracerRecord_ConstructProps): void
    static $gtype: GObject.Type
}
interface TypeFindFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class TypeFindFactory {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TypeFindFactory */
    call_function(find: TypeFind): void
    get_caps(): Caps | null
    get_extensions(): string[] | null
    has_function(): boolean
    /* Methods of Gst-1.0.Gst.PluginFeature */
    check_version(min_major: number, min_minor: number, min_micro: number): boolean
    get_plugin(): Plugin | null
    get_plugin_name(): string | null
    get_rank(): number
    load(): PluginFeature | null
    set_rank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    add_control_binding(binding: ControlBinding): boolean
    default_error(error: GLib.Error, debug?: string | null): void
    get_control_binding(property_name: string): ControlBinding | null
    get_control_rate(): ClockTime
    get_g_value_array(property_name: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    get_name(): string | null
    get_parent(): Object | null
    get_path_string(): string
    get_value(property_name: string, timestamp: ClockTime): any | null
    has_active_control_bindings(): boolean
    has_ancestor(ancestor: Object): boolean
    has_as_ancestor(ancestor: Object): boolean
    has_as_parent(parent: Object): boolean
    ref(): Object
    remove_control_binding(binding: ControlBinding): boolean
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    set_control_bindings_disabled(disabled: boolean): void
    set_control_rate(control_rate: ClockTime): void
    set_name(name?: string | null): boolean
    set_parent(parent: Object): boolean
    suggest_next_sync(): ClockTime
    sync_values(timestamp: ClockTime): boolean
    unparent(): void
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: (($obj: TypeFindFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TypeFindFactory, prop_object: Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Object, prop: GObject.ParamSpec): void
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
    /* Static methods and pseudo-constructors */
    static get_list(): TypeFindFactory[]
    static $gtype: GObject.Type
}
class ValueArray {
    static name: string
    /* Static methods and pseudo-constructors */
    static append_and_take_value(value: any, append_value: any): void
    static append_value(value: any, append_value: any): void
    static get_size(value: any): number
    static get_value(value: any, index: number): any
    static init(value: any, prealloc: number): any
    static prepend_value(value: any, prepend_value: any): void
}
class ValueList {
    static name: string
    /* Static methods and pseudo-constructors */
    static append_and_take_value(value: any, append_value: any): void
    static append_value(value: any, append_value: any): void
    static concat(value1: any, value2: any): /* dest */ any
    static get_size(value: any): number
    static get_value(value: any, index: number): any
    static init(value: any, prealloc: number): any
    static merge(value1: any, value2: any): /* dest */ any
    static prepend_value(value: any, prepend_value: any): void
}
class AllocationParams {
    /* Fields of Gst-1.0.Gst.AllocationParams */
    readonly flags: MemoryFlags
    readonly align: number
    readonly prefix: number
    readonly padding: number
    /* Methods of Gst-1.0.Gst.AllocationParams */
    copy(): AllocationParams | null
    free(): void
    init(): void
    static name: string
    static new(): AllocationParams
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AllocationParams
}
abstract class AllocatorClass {
    /* Fields of Gst-1.0.Gst.AllocatorClass */
    readonly object_class: ObjectClass
    readonly alloc: (allocator: Allocator | null, size: number, params?: AllocationParams | null) => Memory | null
    readonly free: (allocator: Allocator, memory: Memory) => void
    static name: string
}
class AllocatorPrivate {
    static name: string
}
class AtomicQueue {
    /* Methods of Gst-1.0.Gst.AtomicQueue */
    length(): number
    peek(): object | null
    pop(): object | null
    push(data?: object | null): void
    ref(): void
    unref(): void
    static name: string
    static new(initial_size: number): AtomicQueue
    constructor(initial_size: number)
    /* Static methods and pseudo-constructors */
    static new(initial_size: number): AtomicQueue
}
abstract class BinClass {
    /* Fields of Gst-1.0.Gst.BinClass */
    readonly parent_class: ElementClass
    readonly element_added: (bin: Bin, child: Element) => void
    readonly element_removed: (bin: Bin, child: Element) => void
    readonly add_element: (bin: Bin, element: Element) => boolean
    readonly remove_element: (bin: Bin, element: Element) => boolean
    readonly handle_message: (bin: Bin, message: Message) => void
    readonly do_latency: (bin: Bin) => boolean
    readonly deep_element_added: (bin: Bin, sub_bin: Bin, child: Element) => void
    readonly deep_element_removed: (bin: Bin, sub_bin: Bin, child: Element) => void
    static name: string
}
class BinPrivate {
    static name: string
}
class Buffer {
    /* Fields of Gst-1.0.Gst.Buffer */
    readonly mini_object: MiniObject
    readonly pool: BufferPool
    readonly pts: ClockTime
    readonly dts: ClockTime
    readonly duration: ClockTime
    readonly offset: number
    readonly offset_end: number
    /* Methods of Gst-1.0.Gst.Buffer */
    add_custom_meta(name: string): CustomMeta | null
    add_meta(info: MetaInfo, params?: object | null): Meta | null
    add_parent_buffer_meta(ref: Buffer): ParentBufferMeta | null
    add_protection_meta(info: Structure): ProtectionMeta
    add_reference_timestamp_meta(reference: Caps, timestamp: ClockTime, duration: ClockTime): ReferenceTimestampMeta | null
    append(buf2: Buffer): Buffer
    append_memory(mem: Memory): void
    append_region(buf2: Buffer, offset: number, size: number): Buffer
    copy_deep(): Buffer
    copy_into(src: Buffer, flags: BufferCopyFlags, offset: number, size: number): boolean
    copy_region(flags: BufferCopyFlags, offset: number, size: number): Buffer
    extract(offset: number): [ /* returnType */ number, /* dest */ Uint8Array ]
    extract_dup(offset: number, size: number): /* dest */ Uint8Array
    fill(offset: number, src: Uint8Array): number
    find_memory(offset: number, size: number): [ /* returnType */ boolean, /* idx */ number, /* length */ number, /* skip */ number ]
    foreach_meta(func: BufferForeachMetaFunc): boolean
    get_all_memory(): Memory | null
    get_custom_meta(name: string): CustomMeta | null
    get_flags(): BufferFlags
    get_memory(idx: number): Memory | null
    get_memory_range(idx: number, length: number): Memory | null
    get_meta(api: GObject.Type): Meta | null
    get_n_meta(api_type: GObject.Type): number
    get_reference_timestamp_meta(reference?: Caps | null): ReferenceTimestampMeta | null
    get_size(): number
    get_sizes(): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    get_sizes_range(idx: number, length: number): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    has_flags(flags: BufferFlags): boolean
    insert_memory(idx: number, mem: Memory): void
    is_all_memory_writable(): boolean
    is_memory_range_writable(idx: number, length: number): boolean
    map(flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    map_range(idx: number, length: number, flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    memcmp(offset: number, mem: Uint8Array): number
    memset(offset: number, val: number, size: number): number
    n_memory(): number
    peek_memory(idx: number): Memory | null
    prepend_memory(mem: Memory): void
    remove_all_memory(): void
    remove_memory(idx: number): void
    remove_memory_range(idx: number, length: number): void
    remove_meta(meta: Meta): boolean
    replace_all_memory(mem: Memory): void
    replace_memory(idx: number, mem: Memory): void
    replace_memory_range(idx: number, length: number, mem: Memory): void
    resize(offset: number, size: number): void
    resize_range(idx: number, length: number, offset: number, size: number): boolean
    set_flags(flags: BufferFlags): boolean
    set_size(size: number): void
    unmap(info: MapInfo): void
    unset_flags(flags: BufferFlags): boolean
    static name: string
    static new(): Buffer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Buffer
    static new_allocate(allocator: Allocator | null, size: number, params?: AllocationParams | null): Buffer
    static new_memdup(data: Uint8Array): Buffer
    static new_wrapped(data: Uint8Array): Buffer
    static new_wrapped_bytes(bytes: GLib.Bytes): Buffer
    static new_wrapped_full(flags: MemoryFlags, data: Uint8Array, maxsize: number, offset: number, notify?: GLib.DestroyNotify | null): Buffer
    static get_max_memory(): number
}
class BufferList {
    /* Methods of Gst-1.0.Gst.BufferList */
    calculate_size(): number
    copy_deep(): BufferList
    foreach(func: BufferListFunc): boolean
    get(idx: number): Buffer | null
    get_writable(idx: number): Buffer | null
    insert(idx: number, buffer: Buffer): void
    length(): number
    remove(idx: number, length: number): void
    static name: string
    static new(): BufferList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BufferList
    static new_sized(size: number): BufferList
    static replace(old_list?: BufferList | null, new_list?: BufferList | null): [ /* returnType */ boolean, /* old_list */ BufferList | null ]
    static take(old_list: BufferList, new_list?: BufferList | null): [ /* returnType */ boolean, /* old_list */ BufferList ]
}
class BufferPoolAcquireParams {
    /* Fields of Gst-1.0.Gst.BufferPoolAcquireParams */
    readonly format: Format
    readonly start: number
    readonly stop: number
    readonly flags: BufferPoolAcquireFlags
    static name: string
}
abstract class BufferPoolClass {
    /* Fields of Gst-1.0.Gst.BufferPoolClass */
    readonly object_class: ObjectClass
    readonly get_options: (pool: BufferPool) => string[]
    readonly set_config: (pool: BufferPool, config: Structure) => boolean
    readonly start: (pool: BufferPool) => boolean
    readonly stop: (pool: BufferPool) => boolean
    readonly acquire_buffer: (pool: BufferPool, params?: BufferPoolAcquireParams | null) => [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    readonly alloc_buffer: (pool: BufferPool, params?: BufferPoolAcquireParams | null) => [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    readonly reset_buffer: (pool: BufferPool, buffer: Buffer) => void
    readonly release_buffer: (pool: BufferPool, buffer: Buffer) => void
    readonly free_buffer: (pool: BufferPool, buffer: Buffer) => void
    readonly flush_start: (pool: BufferPool) => void
    readonly flush_stop: (pool: BufferPool) => void
    static name: string
}
class BufferPoolPrivate {
    static name: string
}
abstract class BusClass {
    /* Fields of Gst-1.0.Gst.BusClass */
    readonly parent_class: ObjectClass
    readonly message: (bus: Bus, message: Message) => void
    readonly sync_message: (bus: Bus, message: Message) => void
    static name: string
}
class BusPrivate {
    static name: string
}
class Caps {
    /* Fields of Gst-1.0.Gst.Caps */
    readonly mini_object: MiniObject
    /* Methods of Gst-1.0.Gst.Caps */
    append(caps2: Caps): void
    append_structure(structure: Structure): void
    append_structure_full(structure: Structure, features?: CapsFeatures | null): void
    can_intersect(caps2: Caps): boolean
    copy(): Caps
    copy_nth(nth: number): Caps
    filter_and_map_in_place(func: CapsFilterMapFunc): void
    fixate(): Caps
    foreach(func: CapsForeachFunc): boolean
    get_features(index: number): CapsFeatures | null
    get_size(): number
    get_structure(index: number): Structure
    intersect(caps2: Caps): Caps
    intersect_full(caps2: Caps, mode: CapsIntersectMode): Caps
    is_always_compatible(caps2: Caps): boolean
    is_any(): boolean
    is_empty(): boolean
    is_equal(caps2: Caps): boolean
    is_equal_fixed(caps2: Caps): boolean
    is_fixed(): boolean
    is_strictly_equal(caps2: Caps): boolean
    is_subset(superset: Caps): boolean
    is_subset_structure(structure: Structure): boolean
    is_subset_structure_full(structure: Structure, features?: CapsFeatures | null): boolean
    map_in_place(func: CapsMapFunc): boolean
    merge(caps2: Caps): Caps
    merge_structure(structure: Structure): Caps
    merge_structure_full(structure: Structure, features?: CapsFeatures | null): Caps
    normalize(): Caps
    remove_structure(idx: number): void
    serialize(flags: SerializeFlags): string
    set_features(index: number, features?: CapsFeatures | null): void
    set_features_simple(features?: CapsFeatures | null): void
    set_value(field: string, value: any): void
    simplify(): Caps
    steal_structure(index: number): Structure | null
    subtract(subtrahend: Caps): Caps
    to_string(): string
    truncate(): Caps
    static name: string
    /* Static methods and pseudo-constructors */
    static new_any(): Caps
    static new_empty(): Caps
    static new_empty_simple(media_type: string): Caps
    static from_string(string: string): Caps | null
}
class CapsFeatures {
    /* Methods of Gst-1.0.Gst.CapsFeatures */
    add(feature: string): void
    add_id(feature: GLib.Quark): void
    contains(feature: string): boolean
    contains_id(feature: GLib.Quark): boolean
    copy(): CapsFeatures
    free(): void
    get_nth(i: number): string | null
    get_nth_id(i: number): GLib.Quark
    get_size(): number
    is_any(): boolean
    is_equal(features2: CapsFeatures): boolean
    remove(feature: string): void
    remove_id(feature: GLib.Quark): void
    set_parent_refcount(refcount: number): boolean
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static new_any(): CapsFeatures
    static new_empty(): CapsFeatures
    static new_single(feature: string): CapsFeatures
    static from_string(features: string): CapsFeatures | null
}
abstract class ChildProxyInterface {
    /* Fields of Gst-1.0.Gst.ChildProxyInterface */
    readonly parent: GObject.TypeInterface
    readonly get_child_by_name: (parent: ChildProxy, name: string) => GObject.Object | null
    readonly get_child_by_index: (parent: ChildProxy, index: number) => GObject.Object | null
    readonly get_children_count: (parent: ChildProxy) => number
    readonly child_added: (parent: ChildProxy, child: GObject.Object, name: string) => void
    readonly child_removed: (parent: ChildProxy, child: GObject.Object, name: string) => void
    static name: string
}
abstract class ClockClass {
    /* Fields of Gst-1.0.Gst.ClockClass */
    readonly parent_class: ObjectClass
    readonly change_resolution: (clock: Clock, old_resolution: ClockTime, new_resolution: ClockTime) => ClockTime
    readonly get_resolution: (clock: Clock) => ClockTime
    readonly get_internal_time: (clock: Clock) => ClockTime
    readonly wait: (clock: Clock, entry: ClockEntry) => [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff | null ]
    readonly wait_async: (clock: Clock, entry: ClockEntry) => ClockReturn
    readonly unschedule: (clock: Clock, entry: ClockEntry) => void
    static name: string
}
class ClockEntry {
    /* Fields of Gst-1.0.Gst.ClockEntry */
    readonly refcount: number
    static name: string
}
class ClockPrivate {
    static name: string
}
class Context {
    /* Methods of Gst-1.0.Gst.Context */
    copy(): Context
    get_context_type(): string
    get_structure(): Structure
    has_context_type(context_type: string): boolean
    is_persistent(): boolean
    ref(): Context
    unref(): void
    writable_structure(): Structure
    static name: string
    static new(context_type: string, persistent: boolean): Context
    constructor(context_type: string, persistent: boolean)
    /* Static methods and pseudo-constructors */
    static new(context_type: string, persistent: boolean): Context
    static replace(old_context: Context, new_context?: Context | null): [ /* returnType */ boolean, /* old_context */ Context ]
}
abstract class ControlBindingClass {
    /* Fields of Gst-1.0.Gst.ControlBindingClass */
    readonly parent_class: ObjectClass
    readonly sync_values: (binding: ControlBinding, object: Object, timestamp: ClockTime, last_sync: ClockTime) => boolean
    readonly get_value: (binding: ControlBinding, timestamp: ClockTime) => any | null
    readonly get_g_value_array: (binding: ControlBinding, timestamp: ClockTime, interval: ClockTime, values: any[]) => boolean
    static name: string
}
class ControlBindingPrivate {
    static name: string
}
abstract class ControlSourceClass {
    /* Fields of Gst-1.0.Gst.ControlSourceClass */
    readonly parent_class: ObjectClass
    static name: string
}
class CustomMeta {
    /* Fields of Gst-1.0.Gst.CustomMeta */
    readonly meta: Meta
    /* Methods of Gst-1.0.Gst.CustomMeta */
    get_structure(): Structure
    has_name(name: string): boolean
    static name: string
}
class DateTime {
    /* Methods of Gst-1.0.Gst.DateTime */
    get_day(): number
    get_hour(): number
    get_microsecond(): number
    get_minute(): number
    get_month(): number
    get_second(): number
    get_time_zone_offset(): number
    get_year(): number
    has_day(): boolean
    has_month(): boolean
    has_second(): boolean
    has_time(): boolean
    has_year(): boolean
    ref(): DateTime
    to_g_date_time(): GLib.DateTime | null
    to_iso8601_string(): string | null
    unref(): void
    static name: string
    static new(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    constructor(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number)
    /* Static methods and pseudo-constructors */
    static new(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static new_from_g_date_time(dt?: GLib.DateTime | null): DateTime
    static new_from_iso8601_string(string: string): DateTime
    static new_from_unix_epoch_local_time(secs: number): DateTime
    static new_from_unix_epoch_local_time_usecs(usecs: number): DateTime
    static new_from_unix_epoch_utc(secs: number): DateTime
    static new_from_unix_epoch_utc_usecs(usecs: number): DateTime
    static new_local_time(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static new_now_local_time(): DateTime
    static new_now_utc(): DateTime
    static new_y(year: number): DateTime
    static new_ym(year: number, month: number): DateTime
    static new_ymd(year: number, month: number, day: number): DateTime
}
class DebugCategory {
    /* Methods of Gst-1.0.Gst.DebugCategory */
    free(): void
    get_color(): number
    get_description(): string
    get_name(): string
    get_threshold(): DebugLevel
    reset_threshold(): void
    set_threshold(level: DebugLevel): void
    static name: string
}
class DebugMessage {
    /* Methods of Gst-1.0.Gst.DebugMessage */
    get(): string | null
    static name: string
}
abstract class DeviceClass {
    /* Fields of Gst-1.0.Gst.DeviceClass */
    readonly parent_class: ObjectClass
    readonly create_element: (device: Device, name?: string | null) => Element | null
    readonly reconfigure_element: (device: Device, element: Element) => boolean
    static name: string
}
abstract class DeviceMonitorClass {
    /* Fields of Gst-1.0.Gst.DeviceMonitorClass */
    readonly parent_class: ObjectClass
    static name: string
}
class DeviceMonitorPrivate {
    static name: string
}
class DevicePrivate {
    static name: string
}
abstract class DeviceProviderClass {
    /* Fields of Gst-1.0.Gst.DeviceProviderClass */
    readonly parent_class: ObjectClass
    readonly factory: DeviceProviderFactory
    readonly start: (provider: DeviceProvider) => boolean
    readonly stop: (provider: DeviceProvider) => void
    /* Methods of Gst-1.0.Gst.DeviceProviderClass */
    static add_metadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static add_static_metadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static get_metadata(klass: DeviceProvider | Function | GObject.Type, key: string): string | null
    static set_metadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static set_static_metadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static name: string
}
abstract class DeviceProviderFactoryClass {
    static name: string
}
class DeviceProviderPrivate {
    static name: string
}
abstract class DynamicTypeFactoryClass {
    static name: string
}
abstract class ElementClass {
    /* Fields of Gst-1.0.Gst.ElementClass */
    readonly parent_class: ObjectClass
    readonly metadata: object
    readonly elementfactory: ElementFactory
    readonly padtemplates: object[]
    readonly numpadtemplates: number
    readonly pad_templ_cookie: number
    readonly pad_added: (element: Element, pad: Pad) => void
    readonly pad_removed: (element: Element, pad: Pad) => void
    readonly no_more_pads: (element: Element) => void
    readonly request_new_pad: (element: Element, templ: PadTemplate, name?: string | null, caps?: Caps | null) => Pad | null
    readonly release_pad: (element: Element, pad: Pad) => void
    readonly get_state: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    readonly set_state: (element: Element, state: State) => StateChangeReturn
    readonly change_state: (element: Element, transition: StateChange) => StateChangeReturn
    readonly state_changed: (element: Element, oldstate: State, newstate: State, pending: State) => void
    readonly set_bus: (element: Element, bus?: Bus | null) => void
    readonly provide_clock: (element: Element) => Clock | null
    readonly set_clock: (element: Element, clock?: Clock | null) => boolean
    readonly send_event: (element: Element, event: Event) => boolean
    readonly query: (element: Element, query: Query) => boolean
    readonly post_message: (element: Element, message: Message) => boolean
    readonly set_context: (element: Element, context: Context) => void
    /* Methods of Gst-1.0.Gst.ElementClass */
    static add_metadata(klass: Element | Function | GObject.Type, key: string, value: string): void
    static add_pad_template(klass: Element | Function | GObject.Type, templ: PadTemplate): void
    static add_static_metadata(klass: Element | Function | GObject.Type, key: string, value: string): void
    static add_static_pad_template(klass: Element | Function | GObject.Type, static_templ: StaticPadTemplate): void
    static add_static_pad_template_with_gtype(klass: Element | Function | GObject.Type, static_templ: StaticPadTemplate, pad_type: GObject.Type): void
    static get_metadata(klass: Element | Function | GObject.Type, key: string): string
    static get_pad_template(element_class: Element | Function | GObject.Type, name: string): PadTemplate | null
    static get_pad_template_list(element_class: Element | Function | GObject.Type): PadTemplate[]
    static set_metadata(klass: Element | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static set_static_metadata(klass: Element | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static name: string
}
abstract class ElementFactoryClass {
    static name: string
}
class Event {
    /* Fields of Gst-1.0.Gst.Event */
    readonly mini_object: MiniObject
    readonly type: EventType
    readonly timestamp: number
    readonly seqnum: number
    /* Methods of Gst-1.0.Gst.Event */
    copy_segment(segment: Segment): void
    get_running_time_offset(): number
    get_seqnum(): number
    get_structure(): Structure | null
    has_name(name: string): boolean
    has_name_id(name: GLib.Quark): boolean
    parse_buffer_size(): [ /* format */ Format, /* minsize */ number, /* maxsize */ number, /* async */ boolean ]
    parse_caps(): /* caps */ Caps
    parse_flush_stop(): /* reset_time */ boolean
    parse_gap(): [ /* timestamp */ ClockTime | null, /* duration */ ClockTime | null ]
    parse_gap_flags(): /* flags */ GapFlags
    parse_group_id(): [ /* returnType */ boolean, /* group_id */ number ]
    parse_instant_rate_change(): [ /* rate_multiplier */ number | null, /* new_flags */ SegmentFlags | null ]
    parse_instant_rate_sync_time(): [ /* rate_multiplier */ number | null, /* running_time */ ClockTime | null, /* upstream_running_time */ ClockTime | null ]
    parse_latency(): /* latency */ ClockTime
    parse_protection(): [ /* system_id */ string | null, /* data */ Buffer | null, /* origin */ string | null ]
    parse_qos(): [ /* type */ QOSType, /* proportion */ number, /* diff */ ClockTimeDiff, /* timestamp */ ClockTime ]
    parse_seek(): [ /* rate */ number, /* format */ Format, /* flags */ SeekFlags, /* start_type */ SeekType, /* start */ number, /* stop_type */ SeekType, /* stop */ number ]
    parse_seek_trickmode_interval(): /* interval */ ClockTime
    parse_segment(): /* segment */ Segment
    parse_segment_done(): [ /* format */ Format | null, /* position */ number | null ]
    parse_select_streams(): /* streams */ string[]
    parse_sink_message(): /* msg */ Message
    parse_step(): [ /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null ]
    parse_stream(): /* stream */ Stream
    parse_stream_collection(): /* collection */ StreamCollection
    parse_stream_flags(): /* flags */ StreamFlags
    parse_stream_group_done(): /* group_id */ number
    parse_stream_start(): /* stream_id */ string
    parse_tag(): /* taglist */ TagList
    parse_toc(): [ /* toc */ Toc, /* updated */ boolean ]
    parse_toc_select(): /* uid */ string | null
    set_gap_flags(flags: GapFlags): void
    set_group_id(group_id: number): void
    set_running_time_offset(offset: number): void
    set_seek_trickmode_interval(interval: ClockTime): void
    set_seqnum(seqnum: number): void
    set_stream(stream: Stream): void
    set_stream_flags(flags: StreamFlags): void
    writable_structure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static new_buffer_size(format: Format, minsize: number, maxsize: number, async: boolean): Event
    static new_caps(caps: Caps): Event
    static new_custom(type: EventType, structure: Structure): Event
    static new_eos(): Event
    static new_flush_start(): Event
    static new_flush_stop(reset_time: boolean): Event
    static new_gap(timestamp: ClockTime, duration: ClockTime): Event
    static new_instant_rate_change(rate_multiplier: number, new_flags: SegmentFlags): Event
    static new_instant_rate_sync_time(rate_multiplier: number, running_time: ClockTime, upstream_running_time: ClockTime): Event
    static new_latency(latency: ClockTime): Event
    static new_navigation(structure: Structure): Event
    static new_protection(system_id: string, data: Buffer, origin: string): Event
    static new_qos(type: QOSType, proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static new_reconfigure(): Event
    static new_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): Event
    static new_segment(segment: Segment): Event
    static new_segment_done(format: Format, position: number): Event
    static new_select_streams(streams: string[]): Event
    static new_sink_message(name: string, msg: Message): Event
    static new_step(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event
    static new_stream_collection(collection: StreamCollection): Event
    static new_stream_group_done(group_id: number): Event
    static new_stream_start(stream_id: string): Event
    static new_tag(taglist: TagList): Event
    static new_toc(toc: Toc, updated: boolean): Event
    static new_toc_select(uid: string): Event
}
class FormatDefinition {
    /* Fields of Gst-1.0.Gst.FormatDefinition */
    readonly value: Format
    readonly nick: string
    readonly description: string
    readonly quark: GLib.Quark
    static name: string
}
abstract class GhostPadClass {
    /* Fields of Gst-1.0.Gst.GhostPadClass */
    readonly parent_class: ProxyPadClass
    static name: string
}
class GhostPadPrivate {
    static name: string
}
class Iterator {
    /* Fields of Gst-1.0.Gst.Iterator */
    readonly copy: IteratorCopyFunction
    readonly next: IteratorNextFunction
    readonly item: IteratorItemFunction
    readonly resync: IteratorResyncFunction
    readonly free: IteratorFreeFunction
    readonly pushed: Iterator
    readonly type: GObject.Type
    readonly lock: GLib.Mutex
    readonly cookie: number
    readonly master_cookie: number
    readonly size: number
    /* Methods of Gst-1.0.Gst.Iterator */
    filter(func: GLib.CompareFunc, user_data: any): Iterator
    find_custom(func: GLib.CompareFunc): [ /* returnType */ boolean, /* elem */ any ]
    fold(func: IteratorFoldFunction, ret: any): IteratorResult
    foreach(func: IteratorForeachFunction): IteratorResult
    push(other: Iterator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_single(type: GObject.Type, object: any): Iterator
}
class MapInfo {
    /* Fields of Gst-1.0.Gst.MapInfo */
    readonly memory: Memory
    readonly flags: MapFlags
    readonly data: Uint8Array
    readonly size: number
    readonly maxsize: number
    readonly user_data: object[]
    static name: string
}
class Memory {
    /* Fields of Gst-1.0.Gst.Memory */
    readonly mini_object: MiniObject
    readonly allocator: Allocator
    readonly parent: Memory
    readonly maxsize: number
    readonly align: number
    readonly offset: number
    readonly size: number
    /* Methods of Gst-1.0.Gst.Memory */
    copy(offset: number, size: number): Memory
    get_sizes(): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    is_span(mem2: Memory): [ /* returnType */ boolean, /* offset */ number ]
    is_type(mem_type: string): boolean
    make_mapped(flags: MapFlags): [ /* returnType */ Memory | null, /* info */ MapInfo ]
    map(flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    resize(offset: number, size: number): void
    share(offset: number, size: number): Memory
    unmap(info: MapInfo): void
    static name: string
    /* Static methods and pseudo-constructors */
    static new_wrapped(flags: MemoryFlags, data: Uint8Array, maxsize: number, offset: number, notify?: GLib.DestroyNotify | null): Memory
}
class Message {
    /* Fields of Gst-1.0.Gst.Message */
    readonly mini_object: MiniObject
    readonly type: MessageType
    readonly timestamp: number
    readonly src: Object
    readonly seqnum: number
    /* Methods of Gst-1.0.Gst.Message */
    add_redirect_entry(location: string, tag_list?: TagList | null, entry_struct?: Structure | null): void
    get_num_redirect_entries(): number
    get_seqnum(): number
    get_stream_status_object(): any | null
    get_structure(): Structure | null
    has_name(name: string): boolean
    parse_async_done(): /* running_time */ ClockTime | null
    parse_buffering(): /* percent */ number | null
    parse_buffering_stats(): [ /* mode */ BufferingMode | null, /* avg_in */ number | null, /* avg_out */ number | null, /* buffering_left */ number | null ]
    parse_clock_lost(): /* clock */ Clock | null
    parse_clock_provide(): [ /* clock */ Clock | null, /* ready */ boolean | null ]
    parse_context_type(): [ /* returnType */ boolean, /* context_type */ string | null ]
    parse_device_added(): /* device */ Device | null
    parse_device_changed(): [ /* device */ Device | null, /* changed_device */ Device | null ]
    parse_device_removed(): /* device */ Device | null
    parse_error(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parse_error_details(): /* structure */ Structure
    parse_group_id(): [ /* returnType */ boolean, /* group_id */ number | null ]
    parse_have_context(): /* context */ Context | null
    parse_info(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parse_info_details(): /* structure */ Structure
    parse_instant_rate_request(): /* rate_multiplier */ number | null
    parse_new_clock(): /* clock */ Clock | null
    parse_progress(): [ /* type */ ProgressType | null, /* code */ string | null, /* text */ string | null ]
    parse_property_notify(): [ /* object */ Object | null, /* property_name */ string | null, /* property_value */ any | null ]
    parse_qos(): [ /* live */ boolean | null, /* running_time */ number | null, /* stream_time */ number | null, /* timestamp */ number | null, /* duration */ number | null ]
    parse_qos_stats(): [ /* format */ Format | null, /* processed */ number | null, /* dropped */ number | null ]
    parse_qos_values(): [ /* jitter */ number | null, /* proportion */ number | null, /* quality */ number | null ]
    parse_redirect_entry(entry_index: number): [ /* location */ string | null, /* tag_list */ TagList | null, /* entry_struct */ Structure | null ]
    parse_request_state(): /* state */ State | null
    parse_reset_time(): /* running_time */ ClockTime | null
    parse_segment_done(): [ /* format */ Format | null, /* position */ number | null ]
    parse_segment_start(): [ /* format */ Format | null, /* position */ number | null ]
    parse_state_changed(): [ /* oldstate */ State | null, /* newstate */ State | null, /* pending */ State | null ]
    parse_step_done(): [ /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null, /* duration */ number | null, /* eos */ boolean | null ]
    parse_step_start(): [ /* active */ boolean | null, /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null ]
    parse_stream_collection(): /* collection */ StreamCollection | null
    parse_stream_status(): [ /* type */ StreamStatusType, /* owner */ Element ]
    parse_streams_selected(): /* collection */ StreamCollection | null
    parse_structure_change(): [ /* type */ StructureChangeType, /* owner */ Element | null, /* busy */ boolean | null ]
    parse_tag(): /* tag_list */ TagList
    parse_toc(): [ /* toc */ Toc, /* updated */ boolean ]
    parse_warning(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parse_warning_details(): /* structure */ Structure
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void
    set_group_id(group_id: number): void
    set_qos_stats(format: Format, processed: number, dropped: number): void
    set_qos_values(jitter: number, proportion: number, quality: number): void
    set_seqnum(seqnum: number): void
    set_stream_status_object(object: any): void
    streams_selected_add(stream: Stream): void
    streams_selected_get_size(): number
    streams_selected_get_stream(idx: number): Stream | null
    writable_structure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static new_application(src: Object | null, structure: Structure): Message
    static new_async_done(src: Object | null, running_time: ClockTime): Message
    static new_async_start(src?: Object | null): Message
    static new_buffering(src: Object | null, percent: number): Message
    static new_clock_lost(src: Object | null, clock: Clock): Message
    static new_clock_provide(src: Object | null, clock: Clock, ready: boolean): Message
    static new_custom(type: MessageType, src?: Object | null, structure?: Structure | null): Message
    static new_device_added(src: Object, device: Device): Message
    static new_device_changed(src: Object, device: Device, changed_device: Device): Message
    static new_device_removed(src: Object, device: Device): Message
    static new_duration_changed(src?: Object | null): Message
    static new_element(src: Object | null, structure: Structure): Message
    static new_eos(src?: Object | null): Message
    static new_error(src: Object | null, error: GLib.Error, debug: string): Message
    static new_error_with_details(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
    static new_have_context(src: Object | null, context: Context): Message
    static new_info(src: Object | null, error: GLib.Error, debug: string): Message
    static new_info_with_details(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
    static new_instant_rate_request(src: Object, rate_multiplier: number): Message
    static new_latency(src?: Object | null): Message
    static new_need_context(src: Object | null, context_type: string): Message
    static new_new_clock(src: Object | null, clock: Clock): Message
    static new_progress(src: Object, type: ProgressType, code: string, text: string): Message
    static new_property_notify(src: Object, property_name: string, val?: any | null): Message
    static new_qos(src: Object, live: boolean, running_time: number, stream_time: number, timestamp: number, duration: number): Message
    static new_redirect(src: Object, location: string, tag_list?: TagList | null, entry_struct?: Structure | null): Message
    static new_request_state(src: Object | null, state: State): Message
    static new_reset_time(src: Object | null, running_time: ClockTime): Message
    static new_segment_done(src: Object | null, format: Format, position: number): Message
    static new_segment_start(src: Object | null, format: Format, position: number): Message
    static new_state_changed(src: Object | null, oldstate: State, newstate: State, pending: State): Message
    static new_state_dirty(src?: Object | null): Message
    static new_step_done(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message
    static new_step_start(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message
    static new_stream_collection(src: Object, collection: StreamCollection): Message
    static new_stream_start(src?: Object | null): Message
    static new_stream_status(src: Object, type: StreamStatusType, owner: Element): Message
    static new_streams_selected(src: Object, collection: StreamCollection): Message
    static new_structure_change(src: Object | null, type: StructureChangeType, owner: Element, busy: boolean): Message
    static new_tag(src: Object | null, tag_list: TagList): Message
    static new_toc(src: Object, toc: Toc, updated: boolean): Message
    static new_warning(src: Object | null, error: GLib.Error, debug: string): Message
    static new_warning_with_details(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
    static take(old_message: Message, new_message?: Message | null): [ /* returnType */ boolean, /* old_message */ Message ]
}
class Meta {
    /* Fields of Gst-1.0.Gst.Meta */
    readonly flags: MetaFlags
    readonly info: MetaInfo
    /* Methods of Gst-1.0.Gst.Meta */
    compare_seqnum(meta2: Meta): number
    get_seqnum(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static api_type_get_tags(api: GObject.Type): string[]
    static api_type_has_tag(api: GObject.Type, tag: GLib.Quark): boolean
    static api_type_register(api: string, tags: string[]): GObject.Type
    static get_info(impl: string): MetaInfo | null
    static register(api: GObject.Type, impl: string, size: number, init_func: MetaInitFunction, free_func: MetaFreeFunction, transform_func: MetaTransformFunction): MetaInfo
    static register_custom(name: string, tags: string[], transform_func: CustomMetaTransformFunction | null): MetaInfo
}
class MetaInfo {
    /* Fields of Gst-1.0.Gst.MetaInfo */
    readonly api: GObject.Type
    readonly type: GObject.Type
    readonly size: number
    readonly init_func: MetaInitFunction
    readonly free_func: MetaFreeFunction
    readonly transform_func: MetaTransformFunction
    /* Methods of Gst-1.0.Gst.MetaInfo */
    is_custom(): boolean
    static name: string
}
class MetaTransformCopy {
    /* Fields of Gst-1.0.Gst.MetaTransformCopy */
    readonly region: boolean
    readonly offset: number
    readonly size: number
    static name: string
}
class MiniObject {
    /* Fields of Gst-1.0.Gst.MiniObject */
    readonly type: GObject.Type
    readonly refcount: number
    readonly lockstate: number
    readonly flags: number
    readonly copy: MiniObjectCopyFunction
    readonly dispose: MiniObjectDisposeFunction
    readonly free: MiniObjectFreeFunction
    /* Methods of Gst-1.0.Gst.MiniObject */
    add_parent(parent: MiniObject): void
    get_qdata(quark: GLib.Quark): object | null
    is_writable(): boolean
    lock(flags: LockFlags): boolean
    remove_parent(parent: MiniObject): void
    set_qdata(quark: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    steal_qdata(quark: GLib.Quark): object | null
    unlock(flags: LockFlags): void
    static name: string
    /* Static methods and pseudo-constructors */
    static replace(olddata?: MiniObject | null, newdata?: MiniObject | null): [ /* returnType */ boolean, /* olddata */ MiniObject | null ]
    static take(olddata: MiniObject, newdata: MiniObject): [ /* returnType */ boolean, /* olddata */ MiniObject ]
}
abstract class ObjectClass {
    /* Fields of Gst-1.0.Gst.ObjectClass */
    readonly parent_class: GObject.InitiallyUnownedClass
    readonly path_string_separator: string
    readonly deep_notify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    static name: string
}
abstract class PadClass {
    /* Fields of Gst-1.0.Gst.PadClass */
    readonly parent_class: ObjectClass
    readonly linked: (pad: Pad, peer: Pad) => void
    readonly unlinked: (pad: Pad, peer: Pad) => void
    static name: string
}
class PadPrivate {
    static name: string
}
class PadProbeInfo {
    /* Fields of Gst-1.0.Gst.PadProbeInfo */
    readonly type: PadProbeType
    readonly id: number
    readonly data: object
    readonly offset: number
    readonly size: number
    /* Methods of Gst-1.0.Gst.PadProbeInfo */
    get_buffer(): Buffer | null
    get_buffer_list(): BufferList | null
    get_event(): Event | null
    get_query(): Query | null
    static name: string
}
abstract class PadTemplateClass {
    /* Fields of Gst-1.0.Gst.PadTemplateClass */
    readonly parent_class: ObjectClass
    readonly pad_created: (templ: PadTemplate, pad: Pad) => void
    static name: string
}
class ParamSpecArray {
    /* Fields of Gst-1.0.Gst.ParamSpecArray */
    readonly parent_instance: GObject.ParamSpec
    readonly element_spec: GObject.ParamSpec
    static name: string
}
class ParamSpecFraction {
    /* Fields of Gst-1.0.Gst.ParamSpecFraction */
    readonly parent_instance: GObject.ParamSpec
    readonly min_num: number
    readonly min_den: number
    readonly max_num: number
    readonly max_den: number
    readonly def_num: number
    readonly def_den: number
    static name: string
}
class ParentBufferMeta {
    /* Fields of Gst-1.0.Gst.ParentBufferMeta */
    readonly parent: Meta
    readonly buffer: Buffer
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): MetaInfo
}
class ParseContext {
    /* Methods of Gst-1.0.Gst.ParseContext */
    copy(): ParseContext | null
    free(): void
    get_missing_elements(): string[] | null
    static name: string
    static new(): ParseContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParseContext
}
abstract class PipelineClass {
    /* Fields of Gst-1.0.Gst.PipelineClass */
    readonly parent_class: BinClass
    static name: string
}
class PipelinePrivate {
    static name: string
}
abstract class PluginClass {
    static name: string
}
class PluginDesc {
    /* Fields of Gst-1.0.Gst.PluginDesc */
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
    readonly release_datetime: string
    static name: string
}
abstract class PluginFeatureClass {
    static name: string
}
class Poll {
    /* Methods of Gst-1.0.Gst.Poll */
    add_fd(fd: PollFD): boolean
    fd_can_read(fd: PollFD): boolean
    fd_can_write(fd: PollFD): boolean
    fd_ctl_pri(fd: PollFD, active: boolean): boolean
    fd_ctl_read(fd: PollFD, active: boolean): boolean
    fd_ctl_write(fd: PollFD, active: boolean): boolean
    fd_has_closed(fd: PollFD): boolean
    fd_has_error(fd: PollFD): boolean
    fd_has_pri(fd: PollFD): boolean
    fd_ignored(fd: PollFD): void
    free(): void
    get_read_gpollfd(fd: GLib.PollFD): void
    read_control(): boolean
    remove_fd(fd: PollFD): boolean
    restart(): void
    set_controllable(controllable: boolean): boolean
    set_flushing(flushing: boolean): void
    wait(timeout: ClockTime): number
    write_control(): boolean
    static name: string
}
class PollFD {
    /* Fields of Gst-1.0.Gst.PollFD */
    readonly fd: number
    /* Methods of Gst-1.0.Gst.PollFD */
    init(): void
    static name: string
}
abstract class PresetInterface {
    /* Fields of Gst-1.0.Gst.PresetInterface */
    readonly parent: GObject.TypeInterface
    readonly get_preset_names: (preset: Preset) => string[]
    readonly get_property_names: (preset: Preset) => string[]
    readonly load_preset: (preset: Preset, name: string) => boolean
    readonly save_preset: (preset: Preset, name: string) => boolean
    readonly rename_preset: (preset: Preset, old_name: string, new_name: string) => boolean
    readonly delete_preset: (preset: Preset, name: string) => boolean
    readonly set_meta: (preset: Preset, name: string, tag: string, value?: string | null) => boolean
    readonly get_meta: (preset: Preset, name: string, tag: string) => [ /* returnType */ boolean, /* value */ string ]
    static name: string
}
class Promise {
    /* Fields of Gst-1.0.Gst.Promise */
    readonly parent: MiniObject
    /* Methods of Gst-1.0.Gst.Promise */
    expire(): void
    get_reply(): Structure | null
    interrupt(): void
    ref(): Promise
    reply(s?: Structure | null): void
    unref(): void
    wait(): PromiseResult
    static name: string
    static new(): Promise
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Promise
    static new_with_change_func(func: PromiseChangeFunc): Promise
}
class ProtectionMeta {
    /* Fields of Gst-1.0.Gst.ProtectionMeta */
    readonly meta: Meta
    readonly info: Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): MetaInfo
}
abstract class ProxyPadClass {
    /* Fields of Gst-1.0.Gst.ProxyPadClass */
    readonly parent_class: PadClass
    static name: string
}
class ProxyPadPrivate {
    static name: string
}
class Query {
    /* Fields of Gst-1.0.Gst.Query */
    readonly mini_object: MiniObject
    readonly type: QueryType
    /* Methods of Gst-1.0.Gst.Query */
    add_allocation_meta(api: GObject.Type, params?: Structure | null): void
    add_allocation_param(allocator?: Allocator | null, params?: AllocationParams | null): void
    add_allocation_pool(pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void
    add_buffering_range(start: number, stop: number): boolean
    add_scheduling_mode(mode: PadMode): void
    find_allocation_meta(api: GObject.Type): [ /* returnType */ boolean, /* index */ number | null ]
    get_n_allocation_metas(): number
    get_n_allocation_params(): number
    get_n_allocation_pools(): number
    get_n_buffering_ranges(): number
    get_n_scheduling_modes(): number
    get_structure(): Structure | null
    has_scheduling_mode(mode: PadMode): boolean
    has_scheduling_mode_with_flags(mode: PadMode, flags: SchedulingFlags): boolean
    parse_accept_caps(): /* caps */ Caps
    parse_accept_caps_result(): /* result */ boolean | null
    parse_allocation(): [ /* caps */ Caps | null, /* need_pool */ boolean | null ]
    parse_bitrate(): /* nominal_bitrate */ number | null
    parse_buffering_percent(): [ /* busy */ boolean | null, /* percent */ number | null ]
    parse_buffering_range(): [ /* format */ Format | null, /* start */ number | null, /* stop */ number | null, /* estimated_total */ number | null ]
    parse_buffering_stats(): [ /* mode */ BufferingMode | null, /* avg_in */ number | null, /* avg_out */ number | null, /* buffering_left */ number | null ]
    parse_caps(): /* filter */ Caps
    parse_caps_result(): /* caps */ Caps
    parse_context(): /* context */ Context
    parse_context_type(): [ /* returnType */ boolean, /* context_type */ string | null ]
    parse_convert(): [ /* src_format */ Format | null, /* src_value */ number | null, /* dest_format */ Format | null, /* dest_value */ number | null ]
    parse_duration(): [ /* format */ Format | null, /* duration */ number | null ]
    parse_latency(): [ /* live */ boolean | null, /* min_latency */ ClockTime | null, /* max_latency */ ClockTime | null ]
    parse_n_formats(): /* n_formats */ number | null
    parse_nth_allocation_meta(index: number): [ /* returnType */ GObject.Type, /* params */ Structure | null ]
    parse_nth_allocation_param(index: number): [ /* allocator */ Allocator | null, /* params */ AllocationParams | null ]
    parse_nth_allocation_pool(index: number): [ /* pool */ BufferPool | null, /* size */ number | null, /* min_buffers */ number | null, /* max_buffers */ number | null ]
    parse_nth_buffering_range(index: number): [ /* returnType */ boolean, /* start */ number | null, /* stop */ number | null ]
    parse_nth_format(nth: number): /* format */ Format | null
    parse_nth_scheduling_mode(index: number): PadMode
    parse_position(): [ /* format */ Format | null, /* cur */ number | null ]
    parse_scheduling(): [ /* flags */ SchedulingFlags | null, /* minsize */ number | null, /* maxsize */ number | null, /* align */ number | null ]
    parse_seeking(): [ /* format */ Format | null, /* seekable */ boolean | null, /* segment_start */ number | null, /* segment_end */ number | null ]
    parse_segment(): [ /* rate */ number | null, /* format */ Format | null, /* start_value */ number | null, /* stop_value */ number | null ]
    parse_uri(): /* uri */ string | null
    parse_uri_redirection(): /* uri */ string | null
    parse_uri_redirection_permanent(): /* permanent */ boolean | null
    ref(): Query
    remove_nth_allocation_meta(index: number): void
    remove_nth_allocation_param(index: number): void
    remove_nth_allocation_pool(index: number): void
    set_accept_caps_result(result: boolean): void
    set_bitrate(nominal_bitrate: number): void
    set_buffering_percent(busy: boolean, percent: number): void
    set_buffering_range(format: Format, start: number, stop: number, estimated_total: number): void
    set_buffering_stats(mode: BufferingMode, avg_in: number, avg_out: number, buffering_left: number): void
    set_caps_result(caps: Caps): void
    set_context(context: Context): void
    set_convert(src_format: Format, src_value: number, dest_format: Format, dest_value: number): void
    set_duration(format: Format, duration: number): void
    set_formatsv(formats: Format[]): void
    set_latency(live: boolean, min_latency: ClockTime, max_latency: ClockTime): void
    set_nth_allocation_param(index: number, allocator?: Allocator | null, params?: AllocationParams | null): void
    set_nth_allocation_pool(index: number, pool: BufferPool | null, size: number, min_buffers: number, max_buffers: number): void
    set_position(format: Format, cur: number): void
    set_scheduling(flags: SchedulingFlags, minsize: number, maxsize: number, align: number): void
    set_seeking(format: Format, seekable: boolean, segment_start: number, segment_end: number): void
    set_segment(rate: number, format: Format, start_value: number, stop_value: number): void
    set_uri(uri: string): void
    set_uri_redirection(uri: string): void
    set_uri_redirection_permanent(permanent: boolean): void
    writable_structure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static new_accept_caps(caps: Caps): Query
    static new_allocation(caps: Caps, need_pool: boolean): Query
    static new_bitrate(): Query
    static new_buffering(format: Format): Query
    static new_caps(filter: Caps): Query
    static new_context(context_type: string): Query
    static new_convert(src_format: Format, value: number, dest_format: Format): Query
    static new_custom(type: QueryType, structure?: Structure | null): Query
    static new_drain(): Query
    static new_duration(format: Format): Query
    static new_formats(): Query
    static new_latency(): Query
    static new_position(format: Format): Query
    static new_scheduling(): Query
    static new_seeking(format: Format): Query
    static new_segment(format: Format): Query
    static new_uri(): Query
    static take(old_query?: Query | null, new_query?: Query | null): [ /* returnType */ boolean, /* old_query */ Query | null ]
}
class ReferenceTimestampMeta {
    /* Fields of Gst-1.0.Gst.ReferenceTimestampMeta */
    readonly parent: Meta
    readonly reference: Caps
    readonly timestamp: ClockTime
    readonly duration: ClockTime
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): MetaInfo
}
abstract class RegistryClass {
    /* Fields of Gst-1.0.Gst.RegistryClass */
    readonly parent_class: ObjectClass
    static name: string
}
class RegistryPrivate {
    static name: string
}
class Sample {
    /* Methods of Gst-1.0.Gst.Sample */
    get_buffer(): Buffer | null
    get_buffer_list(): BufferList | null
    get_caps(): Caps | null
    get_info(): Structure | null
    get_segment(): Segment
    set_buffer(buffer: Buffer): void
    set_buffer_list(buffer_list: BufferList): void
    set_caps(caps: Caps): void
    set_info(info: Structure): boolean
    set_segment(segment: Segment): void
    static name: string
    static new(buffer?: Buffer | null, caps?: Caps | null, segment?: Segment | null, info?: Structure | null): Sample
    constructor(buffer?: Buffer | null, caps?: Caps | null, segment?: Segment | null, info?: Structure | null)
    /* Static methods and pseudo-constructors */
    static new(buffer?: Buffer | null, caps?: Caps | null, segment?: Segment | null, info?: Structure | null): Sample
}
class Segment {
    /* Fields of Gst-1.0.Gst.Segment */
    readonly flags: SegmentFlags
    readonly rate: number
    readonly applied_rate: number
    readonly format: Format
    readonly base: number
    readonly offset: number
    readonly start: number
    readonly stop: number
    readonly time: number
    readonly position: number
    readonly duration: number
    /* Methods of Gst-1.0.Gst.Segment */
    clip(format: Format, start: number, stop: number): [ /* returnType */ boolean, /* clip_start */ number | null, /* clip_stop */ number | null ]
    copy(): Segment
    copy_into(dest: Segment): void
    do_seek(rate: number, format: Format, flags: SeekFlags, start_type: SeekType, start: number, stop_type: SeekType, stop: number): [ /* returnType */ boolean, /* update */ boolean | null ]
    free(): void
    init(format: Format): void
    is_equal(s1: Segment): boolean
    offset_running_time(format: Format, offset: number): boolean
    position_from_running_time(format: Format, running_time: number): number
    position_from_running_time_full(format: Format, running_time: number): [ /* returnType */ number, /* position */ number ]
    position_from_stream_time(format: Format, stream_time: number): number
    position_from_stream_time_full(format: Format, stream_time: number): [ /* returnType */ number, /* position */ number ]
    set_running_time(format: Format, running_time: number): boolean
    to_position(format: Format, running_time: number): number
    to_running_time(format: Format, position: number): number
    to_running_time_full(format: Format, position: number): [ /* returnType */ number, /* running_time */ number | null ]
    to_stream_time(format: Format, position: number): number
    to_stream_time_full(format: Format, position: number): [ /* returnType */ number, /* stream_time */ number ]
    static name: string
    static new(): Segment
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Segment
}
abstract class SharedTaskPoolClass {
    /* Fields of Gst-1.0.Gst.SharedTaskPoolClass */
    readonly parent_class: TaskPoolClass
    static name: string
}
class SharedTaskPoolPrivate {
    static name: string
}
class StaticCaps {
    /* Fields of Gst-1.0.Gst.StaticCaps */
    readonly caps: Caps
    readonly string: string
    /* Methods of Gst-1.0.Gst.StaticCaps */
    cleanup(): void
    get(): Caps | null
    static name: string
}
class StaticPadTemplate {
    /* Fields of Gst-1.0.Gst.StaticPadTemplate */
    readonly name_template: string
    readonly direction: PadDirection
    readonly presence: PadPresence
    readonly static_caps: StaticCaps
    /* Methods of Gst-1.0.Gst.StaticPadTemplate */
    get(): PadTemplate | null
    get_caps(): Caps
    static name: string
}
abstract class StreamClass {
    /* Fields of Gst-1.0.Gst.StreamClass */
    readonly parent_class: ObjectClass
    static name: string
}
abstract class StreamCollectionClass {
    /* Fields of Gst-1.0.Gst.StreamCollectionClass */
    readonly parent_class: ObjectClass
    readonly stream_notify: (collection: StreamCollection, stream: Stream, pspec: GObject.ParamSpec) => void
    static name: string
}
class StreamCollectionPrivate {
    static name: string
}
class StreamPrivate {
    static name: string
}
class Structure {
    /* Fields of Gst-1.0.Gst.Structure */
    readonly type: GObject.Type
    /* Methods of Gst-1.0.Gst.Structure */
    can_intersect(struct2: Structure): boolean
    copy(): Structure
    filter_and_map_in_place(func: StructureFilterMapFunc): void
    fixate(): void
    fixate_field(field_name: string): boolean
    fixate_field_boolean(field_name: string, target: boolean): boolean
    fixate_field_nearest_double(field_name: string, target: number): boolean
    fixate_field_nearest_fraction(field_name: string, target_numerator: number, target_denominator: number): boolean
    fixate_field_nearest_int(field_name: string, target: number): boolean
    fixate_field_string(field_name: string, target: string): boolean
    foreach(func: StructureForeachFunc): boolean
    free(): void
    get_array(fieldname: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
    get_boolean(fieldname: string): [ /* returnType */ boolean, /* value */ boolean ]
    get_clock_time(fieldname: string): [ /* returnType */ boolean, /* value */ ClockTime ]
    get_date(fieldname: string): [ /* returnType */ boolean, /* value */ GLib.Date ]
    get_date_time(fieldname: string): [ /* returnType */ boolean, /* value */ DateTime ]
    get_double(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_enum(fieldname: string, enumtype: GObject.Type): [ /* returnType */ boolean, /* value */ number ]
    get_field_type(fieldname: string): GObject.Type
    get_flagset(fieldname: string): [ /* returnType */ boolean, /* value_flags */ number | null, /* value_mask */ number | null ]
    get_fraction(fieldname: string): [ /* returnType */ boolean, /* value_numerator */ number, /* value_denominator */ number ]
    get_int(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_int64(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_list(fieldname: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
    get_name(): string
    get_name_id(): GLib.Quark
    get_string(fieldname: string): string | null
    get_uint(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_uint64(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    get_value(fieldname: string): any | null
    has_field(fieldname: string): boolean
    has_field_typed(fieldname: string, type: GObject.Type): boolean
    has_name(name: string): boolean
    id_get_value(field: GLib.Quark): any | null
    id_has_field(field: GLib.Quark): boolean
    id_has_field_typed(field: GLib.Quark, type: GObject.Type): boolean
    id_set_value(field: GLib.Quark, value: any): void
    id_take_value(field: GLib.Quark, value: any): void
    intersect(struct2: Structure): Structure | null
    is_equal(structure2: Structure): boolean
    is_subset(superset: Structure): boolean
    map_in_place(func: StructureMapFunc): boolean
    n_fields(): number
    nth_field_name(index: number): string
    remove_all_fields(): void
    remove_field(fieldname: string): void
    serialize(flags: SerializeFlags): string
    set_array(fieldname: string, array: GObject.ValueArray): void
    set_list(fieldname: string, array: GObject.ValueArray): void
    set_name(name: string): void
    set_parent_refcount(refcount: number): boolean
    set_value(fieldname: string, value: any): void
    take_value(fieldname: string, value: any): void
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static from_string(string: string): Structure
    static new_empty(name: string): Structure
    static new_from_string(string: string): Structure
    static new_id_empty(quark: GLib.Quark): Structure
    static take(oldstr_ptr?: Structure | null, newstr?: Structure | null): [ /* returnType */ boolean, /* oldstr_ptr */ Structure | null ]
}
abstract class SystemClockClass {
    /* Fields of Gst-1.0.Gst.SystemClockClass */
    readonly parent_class: ClockClass
    static name: string
}
class SystemClockPrivate {
    static name: string
}
class TagList {
    /* Fields of Gst-1.0.Gst.TagList */
    readonly mini_object: MiniObject
    /* Methods of Gst-1.0.Gst.TagList */
    add_value(mode: TagMergeMode, tag: string, value: any): void
    copy(): TagList
    foreach(func: TagForeachFunc): void
    get_boolean(tag: string): [ /* returnType */ boolean, /* value */ boolean ]
    get_boolean_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ boolean ]
    get_date(tag: string): [ /* returnType */ boolean, /* value */ GLib.Date ]
    get_date_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    get_date_time(tag: string): [ /* returnType */ boolean, /* value */ DateTime ]
    get_date_time_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ DateTime ]
    get_double(tag: string): [ /* returnType */ boolean, /* value */ number ]
    get_double_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    get_float(tag: string): [ /* returnType */ boolean, /* value */ number ]
    get_float_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    get_int(tag: string): [ /* returnType */ boolean, /* value */ number ]
    get_int64(tag: string): [ /* returnType */ boolean, /* value */ number ]
    get_int64_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    get_int_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    get_pointer(tag: string): [ /* returnType */ boolean, /* value */ object | null ]
    get_pointer_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ object | null ]
    get_sample(tag: string): [ /* returnType */ boolean, /* sample */ Sample ]
    get_sample_index(tag: string, index: number): [ /* returnType */ boolean, /* sample */ Sample ]
    get_scope(): TagScope
    get_string(tag: string): [ /* returnType */ boolean, /* value */ string ]
    get_string_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ string ]
    get_tag_size(tag: string): number
    get_uint(tag: string): [ /* returnType */ boolean, /* value */ number ]
    get_uint64(tag: string): [ /* returnType */ boolean, /* value */ number ]
    get_uint64_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    get_uint_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    get_value_index(tag: string, index: number): any | null
    insert(from: TagList, mode: TagMergeMode): void
    is_empty(): boolean
    is_equal(list2: TagList): boolean
    merge(list2: TagList | null, mode: TagMergeMode): TagList | null
    n_tags(): number
    nth_tag_name(index: number): string
    peek_string_index(tag: string, index: number): [ /* returnType */ boolean, /* value */ string ]
    remove_tag(tag: string): void
    set_scope(scope: TagScope): void
    to_string(): string | null
    static name: string
    /* Static methods and pseudo-constructors */
    static new_empty(): TagList
    static new_from_string(str: string): TagList
    static copy_value(list: TagList, tag: string): [ /* returnType */ boolean, /* dest */ any ]
    static replace(old_taglist?: TagList | null, new_taglist?: TagList | null): [ /* returnType */ boolean, /* old_taglist */ TagList | null ]
    static take(old_taglist: TagList, new_taglist?: TagList | null): [ /* returnType */ boolean, /* old_taglist */ TagList ]
}
abstract class TagSetterInterface {
    /* Fields of Gst-1.0.Gst.TagSetterInterface */
    readonly g_iface: GObject.TypeInterface
    static name: string
}
abstract class TaskClass {
    /* Fields of Gst-1.0.Gst.TaskClass */
    readonly parent_class: ObjectClass
    static name: string
}
abstract class TaskPoolClass {
    /* Fields of Gst-1.0.Gst.TaskPoolClass */
    readonly parent_class: ObjectClass
    readonly prepare: (pool: TaskPool) => void
    readonly cleanup: (pool: TaskPool) => void
    readonly push: (pool: TaskPool, func: TaskPoolFunction) => object | null
    readonly join: (pool: TaskPool, id?: object | null) => void
    readonly dispose_handle: (pool: TaskPool, id?: object | null) => void
    static name: string
}
class TaskPrivate {
    static name: string
}
class TimedValue {
    /* Fields of Gst-1.0.Gst.TimedValue */
    readonly timestamp: ClockTime
    readonly value: number
    static name: string
}
class Toc {
    /* Methods of Gst-1.0.Gst.Toc */
    append_entry(entry: TocEntry): void
    dump(): void
    find_entry(uid: string): TocEntry | null
    get_entries(): TocEntry[]
    get_scope(): TocScope
    get_tags(): TagList
    merge_tags(tags: TagList | null, mode: TagMergeMode): void
    set_tags(tags?: TagList | null): void
    static name: string
    static new(scope: TocScope): Toc
    constructor(scope: TocScope)
    /* Static methods and pseudo-constructors */
    static new(scope: TocScope): Toc
}
class TocEntry {
    /* Methods of Gst-1.0.Gst.TocEntry */
    append_sub_entry(subentry: TocEntry): void
    get_entry_type(): TocEntryType
    get_loop(): [ /* returnType */ boolean, /* loop_type */ TocLoopType | null, /* repeat_count */ number | null ]
    get_parent(): TocEntry | null
    get_start_stop_times(): [ /* returnType */ boolean, /* start */ number | null, /* stop */ number | null ]
    get_sub_entries(): TocEntry[]
    get_tags(): TagList
    get_toc(): Toc
    get_uid(): string
    is_alternative(): boolean
    is_sequence(): boolean
    merge_tags(tags: TagList | null, mode: TagMergeMode): void
    set_loop(loop_type: TocLoopType, repeat_count: number): void
    set_start_stop_times(start: number, stop: number): void
    set_tags(tags?: TagList | null): void
    static name: string
    static new(type: TocEntryType, uid: string): TocEntry
    constructor(type: TocEntryType, uid: string)
    /* Static methods and pseudo-constructors */
    static new(type: TocEntryType, uid: string): TocEntry
}
abstract class TocSetterInterface {
    /* Fields of Gst-1.0.Gst.TocSetterInterface */
    readonly g_iface: GObject.TypeInterface
    static name: string
}
abstract class TracerClass {
    /* Fields of Gst-1.0.Gst.TracerClass */
    readonly parent_class: ObjectClass
    static name: string
}
abstract class TracerFactoryClass {
    static name: string
}
class TracerPrivate {
    static name: string
}
abstract class TracerRecordClass {
    static name: string
}
class TypeFind {
    /* Fields of Gst-1.0.Gst.TypeFind */
    readonly peek: (data: object, offset: number, size: number) => number
    readonly suggest: (data: object, probability: number, caps: Caps) => void
    readonly data: object
    readonly get_length: (data: object) => number
    /* Methods of Gst-1.0.Gst.TypeFind */
    suggest_empty_simple(probability: number, media_type: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possible_caps: Caps | null): boolean
}
abstract class TypeFindFactoryClass {
    static name: string
}
abstract class URIHandlerInterface {
    /* Fields of Gst-1.0.Gst.URIHandlerInterface */
    readonly parent: GObject.TypeInterface
    readonly get_type: (type: GObject.Type) => URIType
    readonly get_protocols: (type: GObject.Type) => string[]
    readonly get_uri: (handler: URIHandler) => string | null
    readonly set_uri: (handler: URIHandler, uri: string) => boolean
    static name: string
}
class Uri {
    /* Methods of Gst-1.0.Gst.Uri */
    append_path(relative_path: string): boolean
    append_path_segment(path_segment: string): boolean
    copy(): Uri
    equal(second: Uri): boolean
    from_string_with_base(uri: string): Uri
    get_fragment(): string | null
    get_host(): string | null
    get_media_fragment_table(): GLib.HashTable | null
    get_path(): string | null
    get_path_segments(): string[]
    get_path_string(): string | null
    get_port(): number
    get_query_keys(): string[]
    get_query_string(): string | null
    get_query_table(): GLib.HashTable | null
    get_query_value(query_key: string): string | null
    get_scheme(): string | null
    get_userinfo(): string | null
    is_normalized(): boolean
    is_writable(): boolean
    join(ref_uri?: Uri | null): Uri | null
    make_writable(): Uri
    new_with_base(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    normalize(): boolean
    query_has_key(query_key: string): boolean
    ref(): Uri
    remove_query_key(query_key: string): boolean
    set_fragment(fragment?: string | null): boolean
    set_host(host: string): boolean
    set_path(path: string): boolean
    set_path_segments(path_segments?: string[] | null): boolean
    set_path_string(path: string): boolean
    set_port(port: number): boolean
    set_query_string(query: string): boolean
    set_query_table(query_table?: GLib.HashTable | null): boolean
    set_query_value(query_key: string, query_value?: string | null): boolean
    set_scheme(scheme: string): boolean
    set_userinfo(userinfo: string): boolean
    to_string(): string
    unref(): void
    static name: string
    static new(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    constructor(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null)
    /* Static methods and pseudo-constructors */
    static new(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    static construct(protocol: string, location: string): string
    static from_string(uri: string): Uri | null
    static from_string_escaped(uri: string): Uri | null
    static get_location(uri: string): string | null
    static get_protocol(uri: string): string | null
    static has_protocol(uri: string, protocol: string): boolean
    static is_valid(uri: string): boolean
    static join_strings(base_uri: string, ref_uri: string): string
    static protocol_is_supported(type: URIType, protocol: string): boolean
    static protocol_is_valid(protocol: string): boolean
}
class ValueTable {
    /* Fields of Gst-1.0.Gst.ValueTable */
    readonly type: GObject.Type
    readonly compare: ValueCompareFunc
    readonly serialize: ValueSerializeFunc
    readonly deserialize: ValueDeserializeFunc
    readonly deserialize_with_pspec: ValueDeserializeWithPSpecFunc
    static name: string
}
    type ClockID = object
    type ClockTime = number
    type ClockTimeDiff = number
    type ElementFactoryListType = number
}
export default Gst;