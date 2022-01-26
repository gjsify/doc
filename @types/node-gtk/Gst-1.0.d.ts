/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gst-1.0
 */

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
function bufferGetMaxMemory(): number
function bufferListReplace(oldList?: BufferList | null, newList?: BufferList | null): [ /* returnType */ boolean, /* oldList */ BufferList | null ]
function bufferListTake(oldList: BufferList, newList?: BufferList | null): [ /* returnType */ boolean, /* oldList */ BufferList ]
function capsFeaturesFromString(features: string): CapsFeatures | null
function capsFromString(string: string): Caps | null
function contextReplace(oldContext: Context, newContext?: Context | null): [ /* returnType */ boolean, /* oldContext */ Context ]
function coreErrorQuark(): GLib.Quark
function debugAddLogFunction(func: LogFunction): void
function debugAddRingBufferLogger(maxSizePerThread: number, threadTimeout: number): void
function debugBinToDotData(bin: Bin, details: DebugGraphDetails): string
function debugBinToDotFile(bin: Bin, details: DebugGraphDetails, fileName: string): void
function debugBinToDotFileWithTs(bin: Bin, details: DebugGraphDetails, fileName: string): void
function debugConstructTermColor(colorinfo: number): string
function debugConstructWinColor(colorinfo: number): number
function debugGetAllCategories(): DebugCategory[]
function debugGetColorMode(): DebugColorMode
function debugGetDefaultThreshold(): DebugLevel
function debugGetStackTrace(flags: StackTraceFlags): string | null
function debugIsActive(): boolean
function debugIsColored(): boolean
function debugLevelGetName(level: DebugLevel): string
function debugLogDefault(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message: DebugMessage, userData?: object | null): void
function debugLogGetLine(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, message: DebugMessage): string
function debugLogLiteral(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object | null, messageString: string): void
function debugPrintStackTrace(): void
function debugRemoveLogFunction(func?: LogFunction | null): number
function debugRemoveLogFunctionByData(data?: object | null): number
function debugRemoveRingBufferLogger(): void
function debugRingBufferLoggerGetLogs(): string[]
function debugSetActive(active: boolean): void
function debugSetColorMode(mode: DebugColorMode): void
function debugSetColorModeFromString(mode: string): void
function debugSetColored(colored: boolean): void
function debugSetDefaultThreshold(level: DebugLevel): void
function debugSetThresholdForName(name: string, level: DebugLevel): void
function debugSetThresholdFromString(list: string, reset: boolean): void
function debugUnsetThresholdForName(name: string): void
function deinit(): void
function dynamicTypeRegister(plugin: Plugin, type: GObject.Type): boolean
function errorGetMessage(domain: GLib.Quark, code: number): string
function eventTypeGetFlags(type: EventType): EventTypeFlags
function eventTypeGetName(type: EventType): string
function eventTypeToQuark(type: EventType): GLib.Quark
function filenameToUri(filename: string): string
function flowGetName(ret: FlowReturn): string
function flowToQuark(ret: FlowReturn): GLib.Quark
function formatGetByNick(nick: string): Format
function formatGetDetails(format: Format): FormatDefinition | null
function formatGetName(format: Format): string | null
function formatIterateDefinitions(): Iterator
function formatRegister(nick: string, description: string): Format
function formatToQuark(format: Format): GLib.Quark
function formatsContains(formats: Format[], format: Format): boolean
function getMainExecutablePath(): string | null
function init(argv?: string[] | null): /* argv */ string[] | null
function initCheck(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
function isCapsFeatures(obj?: object | null): boolean
function isInitialized(): boolean
function libraryErrorQuark(): GLib.Quark
function messageTake(oldMessage: Message, newMessage?: Message | null): [ /* returnType */ boolean, /* oldMessage */ Message ]
function messageTypeGetName(type: MessageType): string
function messageTypeToQuark(type: MessageType): GLib.Quark
function metaApiTypeGetTags(api: GObject.Type): string[]
function metaApiTypeHasTag(api: GObject.Type, tag: GLib.Quark): boolean
function metaApiTypeRegister(api: string, tags: string[]): GObject.Type
function metaGetInfo(impl: string): MetaInfo | null
function metaRegister(api: GObject.Type, impl: string, size: number, initFunc: MetaInitFunction, freeFunc: MetaFreeFunction, transformFunc: MetaTransformFunction): MetaInfo
function metaRegisterCustom(name: string, tags: string[], transformFunc: CustomMetaTransformFunction | null): MetaInfo
function miniObjectReplace(olddata?: MiniObject | null, newdata?: MiniObject | null): [ /* returnType */ boolean, /* olddata */ MiniObject | null ]
function miniObjectTake(olddata: MiniObject, newdata: MiniObject): [ /* returnType */ boolean, /* olddata */ MiniObject ]
function padModeGetName(mode: PadMode): string
function paramSpecArray(name: string, nick: string, blurb: string, elementSpec: GObject.ParamSpec, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecFraction(name: string, nick: string, blurb: string, minNum: number, minDenom: number, maxNum: number, maxDenom: number, defaultNum: number, defaultDenom: number, flags: GObject.ParamFlags): GObject.ParamSpec | null
function parentBufferMetaApiGetType(): GObject.Type
function parentBufferMetaGetInfo(): MetaInfo
function parseBinFromDescription(binDescription: string, ghostUnlinkedPads: boolean): Bin
function parseBinFromDescriptionFull(binDescription: string, ghostUnlinkedPads: boolean, context: ParseContext | null, flags: ParseFlags): Element
function parseErrorQuark(): GLib.Quark
function parseLaunch(pipelineDescription: string): Element
function parseLaunchFull(pipelineDescription: string, context: ParseContext | null, flags: ParseFlags): Element
function parseLaunchv(argv: string[]): Element
function parseLaunchvFull(argv: string[], context: ParseContext | null, flags: ParseFlags): Element
function pluginErrorQuark(): GLib.Quark
function presetGetAppDir(): string | null
function presetSetAppDir(appDir: string): boolean
function protectionFilterSystemsByAvailableDecryptors(systemIdentifiers: string[]): string[] | null
function protectionMetaApiGetType(): GObject.Type
function protectionMetaGetInfo(): MetaInfo
function protectionSelectSystem(systemIdentifiers: string[]): string | null
function queryTake(oldQuery?: Query | null, newQuery?: Query | null): [ /* returnType */ boolean, /* oldQuery */ Query | null ]
function queryTypeGetFlags(type: QueryType): QueryTypeFlags
function queryTypeGetName(type: QueryType): string
function queryTypeToQuark(type: QueryType): GLib.Quark
function referenceTimestampMetaApiGetType(): GObject.Type
function referenceTimestampMetaGetInfo(): MetaInfo
function resourceErrorQuark(): GLib.Quark
function segtrapIsEnabled(): boolean
function segtrapSetEnabled(enabled: boolean): void
function stateChangeGetName(transition: StateChange): string
function staticCapsGetType(): GObject.Type
function staticPadTemplateGetType(): GObject.Type
function streamErrorQuark(): GLib.Quark
function streamTypeGetName(stype: StreamType): string
function structureTake(oldstrPtr?: Structure | null, newstr?: Structure | null): [ /* returnType */ boolean, /* oldstrPtr */ Structure | null ]
function tagExists(tag: string): boolean
function tagGetDescription(tag: string): string | null
function tagGetFlag(tag: string): TagFlag
function tagGetNick(tag: string): string | null
function tagGetType(tag: string): GObject.Type
function tagIsFixed(tag: string): boolean
function tagListCopyValue(list: TagList, tag: string): [ /* returnType */ boolean, /* dest */ any ]
function tagListReplace(oldTaglist?: TagList | null, newTaglist?: TagList | null): [ /* returnType */ boolean, /* oldTaglist */ TagList | null ]
function tagListTake(oldTaglist: TagList, newTaglist?: TagList | null): [ /* returnType */ boolean, /* oldTaglist */ TagList ]
function tagMergeStringsWithComma(src: any): /* dest */ any
function tagMergeUseFirst(src: any): /* dest */ any
function tocEntryTypeGetNick(type: TocEntryType): string
function tracingGetActiveTracers(): Tracer[]
function tracingRegisterHook(tracer: Tracer, detail: string, func: GObject.Callback): void
function typeFindGetType(): GObject.Type
function typeFindRegister(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possibleCaps: Caps | null): boolean
function typeIsPluginApi(type: GObject.Type): [ /* returnType */ boolean, /* flags */ PluginAPIFlags | null ]
function typeMarkAsPluginApi(type: GObject.Type, flags: PluginAPIFlags): void
function updateRegistry(): boolean
function uriConstruct(protocol: string, location: string): string
function uriErrorQuark(): GLib.Quark
function uriFromString(uri: string): Uri | null
function uriFromStringEscaped(uri: string): Uri | null
function uriGetLocation(uri: string): string | null
function uriGetProtocol(uri: string): string | null
function uriHasProtocol(uri: string, protocol: string): boolean
function uriIsValid(uri: string): boolean
function uriJoinStrings(baseUri: string, refUri: string): string
function uriProtocolIsSupported(type: URIType, protocol: string): boolean
function uriProtocolIsValid(protocol: string): boolean
function utilArrayBinarySearch(array: object | null, numElements: number, elementSize: number, searchFunc: GLib.CompareDataFunc, mode: SearchMode, searchData?: object | null): object | null
function utilDoubleToFraction(src: number): [ /* destN */ number, /* destD */ number ]
function utilDumpBuffer(buf: Buffer): void
function utilDumpMem(mem: Uint8Array): void
function utilFractionAdd(aN: number, aD: number, bN: number, bD: number): [ /* returnType */ boolean, /* resN */ number, /* resD */ number ]
function utilFractionCompare(aN: number, aD: number, bN: number, bD: number): number
function utilFractionMultiply(aN: number, aD: number, bN: number, bD: number): [ /* returnType */ boolean, /* resN */ number, /* resD */ number ]
function utilFractionToDouble(srcN: number, srcD: number): /* dest */ number
function utilGdoubleToGuint64(value: number): number
function utilGetObjectArray(object: GObject.Object, name: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
function utilGetTimestamp(): ClockTime
function utilGreatestCommonDivisor(a: number, b: number): number
function utilGreatestCommonDivisorInt64(a: number, b: number): number
function utilGroupIdNext(): number
function utilGuint64ToGdouble(value: number): number
function utilSeqnumCompare(s1: number, s2: number): number
function utilSeqnumNext(): number
function utilSetObjectArg(object: GObject.Object, name: string, value: string): void
function utilSetObjectArray(object: GObject.Object, name: string, array: GObject.ValueArray): boolean
function utilSetValueFromString(valueStr: string): /* value */ any
function utilUint64Scale(val: number, num: number, denom: number): number
function utilUint64ScaleCeil(val: number, num: number, denom: number): number
function utilUint64ScaleInt(val: number, num: number, denom: number): number
function utilUint64ScaleIntCeil(val: number, num: number, denom: number): number
function utilUint64ScaleIntRound(val: number, num: number, denom: number): number
function utilUint64ScaleRound(val: number, num: number, denom: number): number
function valueCanCompare(value1: any, value2: any): boolean
function valueCanIntersect(value1: any, value2: any): boolean
function valueCanSubtract(minuend: any, subtrahend: any): boolean
function valueCanUnion(value1: any, value2: any): boolean
function valueCompare(value1: any, value2: any): number
function valueDeserialize(src: string): [ /* returnType */ boolean, /* dest */ any ]
function valueDeserializeWithPspec(src: string, pspec?: GObject.ParamSpec | null): [ /* returnType */ boolean, /* dest */ any ]
function valueFixate(dest: any, src: any): boolean
function valueFractionMultiply(product: any, factor1: any, factor2: any): boolean
function valueFractionSubtract(dest: any, minuend: any, subtrahend: any): boolean
function valueGetBitmask(value: any): number
function valueGetCaps(value: any): Caps
function valueGetCapsFeatures(value: any): CapsFeatures
function valueGetDoubleRangeMax(value: any): number
function valueGetDoubleRangeMin(value: any): number
function valueGetFlagsetFlags(value: any): number
function valueGetFlagsetMask(value: any): number
function valueGetFractionDenominator(value: any): number
function valueGetFractionNumerator(value: any): number
function valueGetFractionRangeMax(value: any): any | null
function valueGetFractionRangeMin(value: any): any | null
function valueGetInt64RangeMax(value: any): number
function valueGetInt64RangeMin(value: any): number
function valueGetInt64RangeStep(value: any): number
function valueGetIntRangeMax(value: any): number
function valueGetIntRangeMin(value: any): number
function valueGetIntRangeStep(value: any): number
function valueGetStructure(value: any): Structure
function valueInitAndCopy(src: any): /* dest */ any
function valueIntersect(value1: any, value2: any): [ /* returnType */ boolean, /* dest */ any | null ]
function valueIsFixed(value: any): boolean
function valueIsSubset(value1: any, value2: any): boolean
function valueRegister(table: ValueTable): void
function valueSerialize(value: any): string | null
function valueSetBitmask(value: any, bitmask: number): void
function valueSetCaps(value: any, caps: Caps): void
function valueSetCapsFeatures(value: any, features: CapsFeatures): void
function valueSetDoubleRange(value: any, start: number, end: number): void
function valueSetFlagset(value: any, flags: number, mask: number): void
function valueSetFraction(value: any, numerator: number, denominator: number): void
function valueSetFractionRange(value: any, start: any, end: any): void
function valueSetFractionRangeFull(value: any, numeratorStart: number, denominatorStart: number, numeratorEnd: number, denominatorEnd: number): void
function valueSetInt64Range(value: any, start: number, end: number): void
function valueSetInt64RangeStep(value: any, start: number, end: number, step: number): void
function valueSetIntRange(value: any, start: number, end: number): void
function valueSetIntRangeStep(value: any, start: number, end: number, step: number): void
function valueSetStructure(value: any, structure: Structure): void
function valueSubtract(minuend: any, subtrahend: any): [ /* returnType */ boolean, /* dest */ any | null ]
function valueUnion(value1: any, value2: any): [ /* returnType */ boolean, /* dest */ any ]
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
function versionString(): string
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
    (binding: ControlBinding, srcValue: number, destValue: any): void
}
interface ControlSourceGetValue {
    (self: ControlSource, timestamp: ClockTime, value: number): boolean
}
interface ControlSourceGetValueArray {
    (self: ControlSource, timestamp: ClockTime, interval: ClockTime, nValues: number, values: number): boolean
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
    (fieldId: GLib.Quark, value: any): boolean
}
interface StructureForeachFunc {
    (fieldId: GLib.Quark, value: any): boolean
}
interface StructureMapFunc {
    (fieldId: GLib.Quark, value: any): boolean
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
    childAdded(child: GObject.Object, name: string): void
    childRemoved(child: GObject.Object, name: string): void
    getChildByIndex(index: number): GObject.Object | null
    getChildByName(name: string): GObject.Object | null
    getChildrenCount(): number
    getProperty(name: string): /* value */ any
    lookup(name: string): [ /* returnType */ boolean, /* target */ GObject.Object | null, /* pspec */ GObject.ParamSpec | null ]
    setProperty(name: string, value: any): void
    /* Signals of Gst-1.0.Gst.ChildProxy */
    connect(sigName: "child-added", callback: ((object: GObject.Object, name: string) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object, name: string): void
    connect(sigName: "child-removed", callback: ((object: GObject.Object, name: string) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object, name: string) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object, name: string): void
    static name: string
}
class Preset {
    /* Methods of Gst-1.0.Gst.Preset */
    deletePreset(name: string): boolean
    getMeta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    getPresetNames(): string[]
    getPropertyNames(): string[]
    isEditable(): boolean
    loadPreset(name: string): boolean
    renamePreset(oldName: string, newName: string): boolean
    savePreset(name: string): boolean
    setMeta(name: string, tag: string, value?: string | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getAppDir(): string | null
    static setAppDir(appDir: string): boolean
}
interface TagSetter_ConstructProps extends Element_ConstructProps {
}
class TagSetter {
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: State
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly startTime: ClockTime
    readonly numpads: number
    readonly pads: Pad[]
    readonly numsrcpads: number
    readonly srcpads: Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Pad[]
    readonly padsCookie: number
    readonly contexts: Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TagSetter */
    addTagValue(mode: TagMergeMode, tag: string, value: any): void
    getTagList(): TagList | null
    getTagMergeMode(): TagMergeMode
    mergeTags(list: TagList, mode: TagMergeMode): void
    resetTags(): void
    setTagMergeMode(mode: TagMergeMode): void
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    requestPadSimple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: TagSetter_ConstructProps)
    _init (config?: TagSetter_ConstructProps): void
    static $gtype: GObject.Type
}
interface TocSetter_ConstructProps extends Element_ConstructProps {
}
class TocSetter {
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: State
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly startTime: ClockTime
    readonly numpads: number
    readonly pads: Pad[]
    readonly numsrcpads: number
    readonly srcpads: Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Pad[]
    readonly padsCookie: number
    readonly contexts: Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TocSetter */
    getToc(): Toc | null
    reset(): void
    setToc(toc?: Toc | null): void
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    requestPadSimple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: TocSetter_ConstructProps)
    _init (config?: TocSetter_ConstructProps): void
    static $gtype: GObject.Type
}
class URIHandler {
    /* Methods of Gst-1.0.Gst.URIHandler */
    getProtocols(): string[] | null
    getUri(): string | null
    getUriType(): URIType
    setUri(uri: string): boolean
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Allocator */
    alloc(size: number, params?: AllocationParams | null): Memory | null
    free(memory: Memory): void
    setDefault(): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: Allocator_ConstructProps)
    _init (config?: Allocator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name?: string | null): Allocator | null
    static register(name: string, allocator: Allocator): void
    static $gtype: GObject.Type
}
interface Bin_ConstructProps extends Element_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Bin */
    asyncHandling?: boolean
    messageForward?: boolean
}
class Bin {
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: State
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly startTime: ClockTime
    readonly numpads: number
    readonly pads: Pad[]
    readonly numsrcpads: number
    readonly srcpads: Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Pad[]
    readonly padsCookie: number
    readonly contexts: Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Element): boolean
    findUnlinkedPad(direction: PadDirection): Pad | null
    getByInterface(iface: GObject.Type): Element | null
    getByName(name: string): Element | null
    getByNameRecurseUp(name: string): Element | null
    getSuppressedFlags(): ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Iterator | null
    iterateAllByInterface(iface: GObject.Type): Iterator | null
    iterateElements(): Iterator | null
    iterateRecurse(): Iterator | null
    iterateSinks(): Iterator | null
    iterateSorted(): Iterator | null
    iterateSources(): Iterator | null
    recalculateLatency(): boolean
    remove(element: Element): boolean
    setSuppressedFlags(flags: ElementFlags): void
    syncChildrenStates(): boolean
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    requestPadSimple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: ((subBin: Bin, element: Element) => void)): number
    on(sigName: "deep-element-added", callback: (subBin: Bin, element: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (subBin: Bin, element: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (subBin: Bin, element: Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-added", subBin: Bin, element: Element): void
    connect(sigName: "deep-element-removed", callback: ((subBin: Bin, element: Element) => void)): number
    on(sigName: "deep-element-removed", callback: (subBin: Bin, element: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (subBin: Bin, element: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (subBin: Bin, element: Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-removed", subBin: Bin, element: Element): void
    connect(sigName: "do-latency", callback: (() => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: ((element: Element) => void)): number
    on(sigName: "element-added", callback: (element: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (element: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (element: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", element: Element): void
    connect(sigName: "element-removed", callback: ((element: Element) => void)): number
    on(sigName: "element-removed", callback: (element: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (element: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (element: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", element: Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.BufferPool */
    acquireBuffer(params?: BufferPoolAcquireParams | null): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    getConfig(): Structure
    getOptions(): string[]
    hasOption(option: string): boolean
    isActive(): boolean
    releaseBuffer(buffer: Buffer): void
    setActive(active: boolean): boolean
    setConfig(config: Structure): boolean
    setFlushing(flushing: boolean): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: BufferPool_ConstructProps)
    _init (config?: BufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): BufferPool
    static configAddOption(config: Structure, option: string): void
    static configGetAllocator(config: Structure): [ /* returnType */ boolean, /* allocator */ Allocator | null, /* params */ AllocationParams | null ]
    static configGetOption(config: Structure, index: number): string | null
    static configGetParams(config: Structure): [ /* returnType */ boolean, /* caps */ Caps | null, /* size */ number | null, /* minBuffers */ number | null, /* maxBuffers */ number | null ]
    static configHasOption(config: Structure, option: string): boolean
    static configNOptions(config: Structure): number
    static configSetAllocator(config: Structure, allocator?: Allocator | null, params?: AllocationParams | null): void
    static configSetParams(config: Structure, caps: Caps | null, size: number, minBuffers: number, maxBuffers: number): void
    static configValidateParams(config: Structure, caps: Caps | null, size: number, minBuffers: number, maxBuffers: number): boolean
    static $gtype: GObject.Type
}
interface Bus_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Bus */
    enableAsync?: boolean
}
class Bus {
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Bus */
    addSignalWatch(): void
    addSignalWatchFull(priority: number): void
    addWatch(priority: number, func: BusFunc): number
    asyncSignalFunc(message: Message, data?: object | null): boolean
    createWatch(): GLib.Source | null
    disableSyncMessageEmission(): void
    enableSyncMessageEmission(): void
    getPollfd(): /* fd */ GLib.PollFD
    havePending(): boolean
    peek(): Message | null
    poll(events: MessageType, timeout: ClockTime): Message | null
    pop(): Message | null
    popFiltered(types: MessageType): Message | null
    post(message: Message): boolean
    removeSignalWatch(): void
    removeWatch(): boolean
    setFlushing(flushing: boolean): void
    setSyncHandler(func: BusSyncHandler | null): void
    syncSignalHandler(message: Message, data?: object | null): BusSyncReply
    timedPop(timeout: ClockTime): Message | null
    timedPopFiltered(timeout: ClockTime, types: MessageType): Message | null
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Bus */
    connect(sigName: "message", callback: ((message: Message) => void)): number
    on(sigName: "message", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message", callback: (message: Message) => void): NodeJS.EventEmitter
    emit(sigName: "message", message: Message): void
    connect(sigName: "sync-message", callback: ((message: Message) => void)): number
    on(sigName: "sync-message", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sync-message", callback: (message: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sync-message", callback: (message: Message) => void): NodeJS.EventEmitter
    emit(sigName: "sync-message", message: Message): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: Bus_ConstructProps)
    _init (config?: Bus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Bus
    static $gtype: GObject.Type
}
interface Clock_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Clock */
    timeout?: number
    windowSize?: number
    windowThreshold?: number
}
class Clock {
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    addObservation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number ]
    addObservationUnapplied(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number, /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rateNum */ ClockTime | null, /* rateDenom */ ClockTime | null ]
    adjustUnlocked(internal: ClockTime): ClockTime
    adjustWithCalibration(internalTarget: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    getCalibration(): [ /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rateNum */ ClockTime | null, /* rateDenom */ ClockTime | null ]
    getInternalTime(): ClockTime
    getMaster(): Clock | null
    getResolution(): ClockTime
    getTime(): ClockTime
    getTimeout(): ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID
    newSingleShotId(time: ClockTime): ClockID
    periodicIdReinit(id: ClockID, startTime: ClockTime, interval: ClockTime): boolean
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master?: Clock | null): boolean
    setResolution(resolution: ClockTime): ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: ClockTime): void
    singleShotIdReinit(id: ClockID, time: ClockTime): boolean
    unadjustUnlocked(external: ClockTime): ClockTime
    unadjustWithCalibration(externalTarget: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    waitForSync(timeout: ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: ((synced: boolean) => void)): number
    on(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "synced", callback: (synced: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Clock_ConstructProps)
    _init (config?: Clock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static idCompareFunc(id1?: object | null, id2?: object | null): number
    static idGetClock(id: ClockID): Clock | null
    static idGetTime(id: ClockID): ClockTime
    static idRef(id: ClockID): ClockID
    static idUnref(id: ClockID): void
    static idUnschedule(id: ClockID): void
    static idUsesClock(id: ClockID, clock: Clock): boolean
    static idWait(id: ClockID): [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff | null ]
    static idWaitAsync(id: ClockID, func: ClockCallback): ClockReturn
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ControlBinding */
    getGValueArray(timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getValue(timestamp: ClockTime): any | null
    isDisabled(): boolean
    setDisabled(disabled: boolean): void
    syncValues(object: Object, timestamp: ClockTime, lastSync: ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ControlSource */
    controlSourceGetValue(timestamp: ClockTime): [ /* returnType */ boolean, /* value */ number ]
    controlSourceGetValueArray(timestamp: ClockTime, interval: ClockTime, values: number[]): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: ControlSource_ConstructProps)
    _init (config?: ControlSource_ConstructProps): void
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Device */
    caps?: Caps
    deviceClass?: string
    displayName?: string
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Device */
    createElement(name?: string | null): Element | null
    getCaps(): Caps | null
    getDeviceClass(): string
    getDisplayName(): string
    getProperties(): Structure | null
    hasClasses(classes: string): boolean
    hasClassesv(classes: string[]): boolean
    reconfigureElement(element: Element): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Device */
    connect(sigName: "removed", callback: (() => void)): number
    on(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "removed"): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceMonitor_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.DeviceMonitor */
    showAll?: boolean
}
class DeviceMonitor {
    /* Properties of Gst-1.0.Gst.DeviceMonitor */
    showAll: boolean
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.DeviceMonitor */
    addFilter(classes?: string | null, caps?: Caps | null): number
    getBus(): Bus
    getDevices(): Device[] | null
    getProviders(): string[]
    getShowAllDevices(): boolean
    removeFilter(filterId: number): boolean
    setShowAllDevices(showAll: boolean): void
    start(): boolean
    stop(): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-all", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.DeviceProvider */
    canMonitor(): boolean
    deviceAdd(device: Device): void
    deviceChanged(device: Device, changedDevice: Device): void
    deviceRemove(device: Device): void
    getBus(): Bus
    getDevices(): Device[]
    getFactory(): DeviceProviderFactory | null
    getHiddenProviders(): string[]
    getMetadata(key: string): string
    hideProvider(name: string): void
    isStarted(): boolean
    start(): boolean
    stop(): void
    unhideProvider(name: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.DeviceProvider */
    connect(sigName: "provider-hidden", callback: ((object: string) => void)): number
    on(sigName: "provider-hidden", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "provider-hidden", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "provider-hidden", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "provider-hidden", object: string): void
    connect(sigName: "provider-unhidden", callback: ((object: string) => void)): number
    on(sigName: "provider-unhidden", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "provider-unhidden", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "provider-unhidden", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "provider-unhidden", object: string): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: DeviceProvider_ConstructProps)
    _init (config?: DeviceProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.Type): boolean
    static addMetadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static addStaticMetadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static getMetadata(klass: DeviceProvider | Function | GObject.Type, key: string): string | null
    static setMetadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static setStaticMetadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.DeviceProviderFactory */
    get(): DeviceProvider | null
    getDeviceProviderType(): GObject.Type
    getMetadata(key: string): string | null
    getMetadataKeys(): string[] | null
    hasClasses(classes?: string | null): boolean
    hasClassesv(classes?: string[] | null): boolean
    /* Methods of Gst-1.0.Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: DeviceProviderFactory_ConstructProps)
    _init (config?: DeviceProviderFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name: string): DeviceProviderFactory | null
    static getByName(factoryname: string): DeviceProvider | null
    static listGetDeviceProviders(minrank: Rank): DeviceProviderFactory[]
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    requestPadSimple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: Element_ConstructProps)
    _init (config?: Element_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static makeFromUri(type: URIType, uri: string, elementname?: string | null): Element
    static register(plugin: Plugin | null, name: string, rank: number, type: GObject.Type): boolean
    static stateChangeReturnGetName(stateRet: StateChangeReturn): string
    static stateGetName(state: State): string
    static typeSetSkipDocumentation(type: GObject.Type): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ElementFactory */
    canSinkAllCaps(caps: Caps): boolean
    canSinkAnyCaps(caps: Caps): boolean
    canSrcAllCaps(caps: Caps): boolean
    canSrcAnyCaps(caps: Caps): boolean
    create(name?: string | null): Element | null
    createWithProperties(names?: string[] | null, values?: any[] | null): Element | null
    getElementType(): GObject.Type
    getMetadata(key: string): string | null
    getMetadataKeys(): string[] | null
    getNumPadTemplates(): number
    getSkipDocumentation(): boolean
    getStaticPadTemplates(): StaticPadTemplate[]
    getUriProtocols(): string[]
    getUriType(): URIType
    hasInterface(interfacename: string): boolean
    listIsType(type: ElementFactoryListType): boolean
    /* Methods of Gst-1.0.Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: ElementFactory_ConstructProps)
    _init (config?: ElementFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static find(name: string): ElementFactory | null
    static listFilter(list: ElementFactory[], caps: Caps, direction: PadDirection, subsetonly: boolean): ElementFactory[]
    static listGetElements(type: ElementFactoryListType, minrank: Rank): ElementFactory[]
    static make(factoryname: string, name?: string | null): Element | null
    static makeWithProperties(factoryname: string, names?: string[] | null, values?: any[] | null): Element | null
    static $gtype: GObject.Type
}
class FlagSet {
    static name: string
    /* Static methods and pseudo-constructors */
    static register(flagsType: GObject.Type): GObject.Type
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
    readonly elementPrivate: object
    readonly padtemplate: PadTemplate
    readonly direction: PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.GhostPad */
    construct(): boolean
    getTarget(): Pad | null
    setTarget(newtarget?: Pad | null): boolean
    /* Methods of Gst-1.0.Gst.ProxyPad */
    getInternal(): ProxyPad | null
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: PadMode, active: boolean): boolean
    addProbe(mask: PadProbeType, callback: PadProbeCallback): number
    canLink(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Element, streamId?: string | null): string
    eventDefault(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    getAllowedCaps(): Caps | null
    getCurrentCaps(): Caps | null
    getDirection(): PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): FlowReturn
    getOffset(): number
    getPadTemplate(): PadTemplate | null
    getPadTemplateCaps(): Caps
    getParentElement(): Element | null
    getPeer(): Pad | null
    getRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    getSingleInternalLink(): Pad | null
    getStickyEvent(eventType: EventType, idx: number): Event | null
    getStream(): Stream | null
    getStreamId(): string | null
    getTaskState(): TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Iterator | null
    iterateInternalLinksDefault(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    linkMaybeGhosting(sink: Pad): boolean
    linkMaybeGhostingFull(sink: Pad, flags: PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Query): boolean
    peerQueryAcceptCaps(caps: Caps): boolean
    peerQueryCaps(filter?: Caps | null): Caps
    peerQueryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Query): boolean
    proxyQueryCaps(query: Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    pushList(list: BufferList): FlowReturn
    query(query: Query): boolean
    queryAcceptCaps(caps: Caps): boolean
    queryCaps(filter?: Caps | null): Caps
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Object | null, query: Query): boolean
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Event): boolean
    setActivateFunctionFull(activate: PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: PadChainFunction): void
    setChainListFunctionFull(chainlist: PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: PadEventFullFunction): void
    setEventFunctionFull(event: PadEventFunction): void
    setGetrangeFunctionFull(get: PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: PadIterIntLinkFunction): void
    setLinkFunctionFull(link: PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: PadQueryFunction): void
    setUnlinkFunctionFull(unlink: PadUnlinkFunction): void
    startTask(func: TaskFunction): boolean
    stickyEventsForeach(foreachFunc: PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: ((peer: Pad) => void)): number
    on(sigName: "linked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Pad): void
    connect(sigName: "unlinked", callback: ((peer: Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GhostPad_ConstructProps)
    _init (config?: GhostPad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, target: Pad): GhostPad
    /* Function overloads */
    static new(name: string | null, direction: PadDirection): GhostPad
    static newFromTemplate(name: string | null, target: Pad, templ: PadTemplate): GhostPad
    /* Function overloads */
    static newFromTemplate(templ: PadTemplate, name?: string | null): GhostPad
    static newNoTarget(name: string | null, dir: PadDirection): GhostPad
    static newNoTargetFromTemplate(name: string | null, templ: PadTemplate): GhostPad
    static activateModeDefault(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean
    static internalActivateModeDefault(pad: Pad, parent: Object | null, mode: PadMode, active: boolean): boolean
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    static checkUniqueness(list: Object[], name: string): boolean
    static defaultDeepNotify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excludedProps?: string[] | null): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: PadMode, active: boolean): boolean
    addProbe(mask: PadProbeType, callback: PadProbeCallback): number
    canLink(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Element, streamId?: string | null): string
    eventDefault(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    getAllowedCaps(): Caps | null
    getCurrentCaps(): Caps | null
    getDirection(): PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): FlowReturn
    getOffset(): number
    getPadTemplate(): PadTemplate | null
    getPadTemplateCaps(): Caps
    getParentElement(): Element | null
    getPeer(): Pad | null
    getRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    getSingleInternalLink(): Pad | null
    getStickyEvent(eventType: EventType, idx: number): Event | null
    getStream(): Stream | null
    getStreamId(): string | null
    getTaskState(): TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Iterator | null
    iterateInternalLinksDefault(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    linkMaybeGhosting(sink: Pad): boolean
    linkMaybeGhostingFull(sink: Pad, flags: PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Query): boolean
    peerQueryAcceptCaps(caps: Caps): boolean
    peerQueryCaps(filter?: Caps | null): Caps
    peerQueryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Query): boolean
    proxyQueryCaps(query: Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    pushList(list: BufferList): FlowReturn
    query(query: Query): boolean
    queryAcceptCaps(caps: Caps): boolean
    queryCaps(filter?: Caps | null): Caps
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Object | null, query: Query): boolean
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Event): boolean
    setActivateFunctionFull(activate: PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: PadChainFunction): void
    setChainListFunctionFull(chainlist: PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: PadEventFullFunction): void
    setEventFunctionFull(event: PadEventFunction): void
    setGetrangeFunctionFull(get: PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: PadIterIntLinkFunction): void
    setLinkFunctionFull(link: PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: PadQueryFunction): void
    setUnlinkFunctionFull(unlink: PadUnlinkFunction): void
    startTask(func: TaskFunction): boolean
    stickyEventsForeach(foreachFunc: PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: ((peer: Pad) => void)): number
    on(sigName: "linked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Pad): void
    connect(sigName: "unlinked", callback: ((peer: Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Pad_ConstructProps)
    _init (config?: Pad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string | null, direction: PadDirection): Pad
    static newFromStaticTemplate(templ: StaticPadTemplate, name: string): Pad
    static newFromTemplate(templ: PadTemplate, name?: string | null): Pad
    static linkGetName(ret: PadLinkReturn): string
    static $gtype: GObject.Type
}
interface PadTemplate_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.PadTemplate */
    caps?: Caps
    direction?: PadDirection
    gtype?: GObject.Type
    nameTemplate?: string
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.PadTemplate */
    getCaps(): Caps
    getDocumentationCaps(): Caps
    padCreated(pad: Pad): void
    setDocumentationCaps(caps: Caps): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.PadTemplate */
    connect(sigName: "pad-created", callback: ((pad: Pad) => void)): number
    on(sigName: "pad-created", callback: (pad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-created", callback: (pad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-created", callback: (pad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-created", pad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: PadTemplate_ConstructProps)
    _init (config?: PadTemplate_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(nameTemplate: string, direction: PadDirection, presence: PadPresence, caps: Caps): PadTemplate
    static newFromStaticPadTemplateWithGtype(padTemplate: StaticPadTemplate, padType: GObject.Type): PadTemplate
    static newWithGtype(nameTemplate: string, direction: PadDirection, presence: PadPresence, caps: Caps, padType: GObject.Type): PadTemplate
    static $gtype: GObject.Type
}
class ParamArray {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
class ParamFraction {
    /* Fields of GObject-2.0.GObject.ParamSpec */
    readonly gTypeInstance: GObject.TypeInstance
    readonly name: string
    readonly flags: GObject.ParamFlags
    readonly valueType: GObject.Type
    readonly ownerType: GObject.Type
    /* Methods of GObject-2.0.GObject.ParamSpec */
    getBlurb(): string | null
    getDefaultValue(): any
    getName(): string
    getNameQuark(): GLib.Quark
    getNick(): string
    getQdata(quark: GLib.Quark): object | null
    getRedirectTarget(): GObject.ParamSpec | null
    setQdata(quark: GLib.Quark, data?: object | null): void
    sink(): void
    stealQdata(quark: GLib.Quark): object | null
    static name: string
}
interface Pipeline_ConstructProps extends Bin_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Pipeline */
    autoFlushBus?: boolean
    delay?: number
    latency?: number
}
class Pipeline {
    /* Properties of Gst-1.0.Gst.Pipeline */
    autoFlushBus: boolean
    delay: number
    latency: number
    /* Properties of Gst-1.0.Gst.Bin */
    asyncHandling: boolean
    messageForward: boolean
    /* Fields of Gst-1.0.Gst.Bin */
    readonly element: Element
    readonly numchildren: number
    readonly children: Element[]
    readonly childrenCookie: number
    readonly childBus: Bus
    readonly messages: Message[]
    readonly polling: boolean
    readonly stateDirty: boolean
    readonly clockDirty: boolean
    readonly providedClock: Clock
    readonly clockProvider: Element
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Object
    readonly stateLock: GLib.RecMutex
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly targetState: State
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly startTime: ClockTime
    readonly numpads: number
    readonly pads: Pad[]
    readonly numsrcpads: number
    readonly srcpads: Pad[]
    readonly numsinkpads: number
    readonly sinkpads: Pad[]
    readonly padsCookie: number
    readonly contexts: Context[]
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Pipeline */
    autoClock(): void
    getAutoFlushBus(): boolean
    getBus(): Bus
    getDelay(): ClockTime
    getLatency(): ClockTime
    getPipelineClock(): Clock
    setAutoFlushBus(autoFlush: boolean): void
    setDelay(delay: ClockTime): void
    setLatency(latency: ClockTime): void
    useClock(clock?: Clock | null): void
    /* Methods of Gst-1.0.Gst.Bin */
    add(element: Element): boolean
    findUnlinkedPad(direction: PadDirection): Pad | null
    getByInterface(iface: GObject.Type): Element | null
    getByName(name: string): Element | null
    getByNameRecurseUp(name: string): Element | null
    getSuppressedFlags(): ElementFlags
    iterateAllByElementFactoryName(factoryName: string): Iterator | null
    iterateAllByInterface(iface: GObject.Type): Iterator | null
    iterateElements(): Iterator | null
    iterateRecurse(): Iterator | null
    iterateSinks(): Iterator | null
    iterateSorted(): Iterator | null
    iterateSources(): Iterator | null
    recalculateLatency(): boolean
    remove(element: Element): boolean
    setSuppressedFlags(flags: ElementFlags): void
    syncChildrenStates(): boolean
    /* Methods of Gst-1.0.Gst.Element */
    abortState(): void
    addPad(pad: Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    callAsync(func: ElementCallAsyncFunc): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    createAllPads(): void
    foreachPad(func: ElementForeachPadFunc): boolean
    foreachSinkPad(func: ElementForeachPadFunc): boolean
    foreachSrcPad(func: ElementForeachPadFunc): boolean
    getBaseTime(): ClockTime
    getBus(): Bus | null
    getClock(): Clock | null
    getCompatiblePad(pad: Pad, caps?: Caps | null): Pad | null
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate | null
    getContext(contextType: string): Context | null
    getContextUnlocked(contextType: string): Context | null
    getContexts(): Context[]
    getCurrentClockTime(): ClockTime
    getCurrentRunningTime(): ClockTime
    getFactory(): ElementFactory | null
    getMetadata(key: string): string
    getPadTemplate(name: string): PadTemplate | null
    getPadTemplateList(): PadTemplate[]
    getRequestPad(name: string): Pad | null
    getStartTime(): ClockTime
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    getStaticPad(name: string): Pad | null
    isLockedState(): boolean
    iteratePads(): Iterator
    iterateSinkPads(): Iterator
    iterateSrcPads(): Iterator
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter?: Caps | null): boolean
    linkPads(srcpadname: string | null, dest: Element, destpadname?: string | null): boolean
    linkPadsFiltered(srcpadname: string | null, dest: Element, destpadname?: string | null, filter?: Caps | null): boolean
    linkPadsFull(srcpadname: string | null, dest: Element, destpadname: string | null, flags: PadLinkCheck): boolean
    lostState(): void
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    messageFullWithDetails(type: MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Structure): void
    noMorePads(): void
    postMessage(message: Message): boolean
    provideClock(): Clock | null
    query(query: Query): boolean
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    releaseRequestPad(pad: Pad): void
    removePad(pad: Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    requestPad(templ: PadTemplate, name?: string | null, caps?: Caps | null): Pad | null
    requestPadSimple(name: string): Pad | null
    seek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    sendEvent(event: Event): boolean
    setBaseTime(time: ClockTime): void
    setBus(bus?: Bus | null): void
    setClock(clock?: Clock | null): boolean
    setContext(context: Context): void
    setLockedState(lockedState: boolean): boolean
    setStartTime(time: ClockTime): void
    setState(state: State): StateChangeReturn
    syncStateWithParent(): boolean
    unlink(dest: Element): void
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Bin */
    connect(sigName: "deep-element-added", callback: ((subBin: Bin, element: Element) => void)): number
    on(sigName: "deep-element-added", callback: (subBin: Bin, element: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-added", callback: (subBin: Bin, element: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-added", callback: (subBin: Bin, element: Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-added", subBin: Bin, element: Element): void
    connect(sigName: "deep-element-removed", callback: ((subBin: Bin, element: Element) => void)): number
    on(sigName: "deep-element-removed", callback: (subBin: Bin, element: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-element-removed", callback: (subBin: Bin, element: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-element-removed", callback: (subBin: Bin, element: Element) => void): NodeJS.EventEmitter
    emit(sigName: "deep-element-removed", subBin: Bin, element: Element): void
    connect(sigName: "do-latency", callback: (() => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: ((element: Element) => void)): number
    on(sigName: "element-added", callback: (element: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (element: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (element: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", element: Element): void
    connect(sigName: "element-removed", callback: ((element: Element) => void)): number
    on(sigName: "element-removed", callback: (element: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (element: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (element: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", element: Element): void
    /* Signals of Gst-1.0.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((newPad: Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Pad): void
    connect(sigName: "pad-removed", callback: ((oldPad: Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-flush-bus", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-flush-bus", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::message-forward", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-forward", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Plugin */
    addDependency(envVars: string[] | null, paths: string[] | null, names: string[] | null, flags: PluginDependencyFlags): void
    addDependencySimple(envVars: string | null, paths: string | null, names: string | null, flags: PluginDependencyFlags): void
    getCacheData(): Structure | null
    getDescription(): string
    getFilename(): string | null
    getLicense(): string
    getName(): string
    getOrigin(): string
    getPackage(): string
    getReleaseDateString(): string | null
    getSource(): string
    getVersion(): string
    isLoaded(): boolean
    load(): Plugin | null
    setCacheData(cacheData: Structure): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static listFree(list: Plugin[]): void
    static loadByName(name: string): Plugin | null
    static loadFile(filename: string): Plugin
    static registerStatic(majorVersion: number, minorVersion: number, name: string, description: string, initFunc: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    static registerStaticFull(majorVersion: number, minorVersion: number, name: string, description: string, initFullFunc: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string): boolean
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: PluginFeature_ConstructProps)
    _init (config?: PluginFeature_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static listCopy(list: PluginFeature[]): PluginFeature[]
    static listDebug(list: PluginFeature[]): void
    static listFree(list: PluginFeature[]): void
    static rankCompareFunc(p1?: object | null, p2?: object | null): number
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
    readonly elementPrivate: object
    readonly padtemplate: PadTemplate
    readonly direction: PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.ProxyPad */
    getInternal(): ProxyPad | null
    /* Methods of Gst-1.0.Gst.Pad */
    activateMode(mode: PadMode, active: boolean): boolean
    addProbe(mask: PadProbeType, callback: PadProbeCallback): number
    canLink(sinkpad: Pad): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    checkReconfigure(): boolean
    createStreamId(parent: Element, streamId?: string | null): string
    eventDefault(parent: Object | null, event: Event): boolean
    forward(forward: PadForwardFunction): boolean
    getAllowedCaps(): Caps | null
    getCurrentCaps(): Caps | null
    getDirection(): PadDirection
    getElementPrivate(): object | null
    getLastFlowReturn(): FlowReturn
    getOffset(): number
    getPadTemplate(): PadTemplate | null
    getPadTemplateCaps(): Caps
    getParentElement(): Element | null
    getPeer(): Pad | null
    getRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    getSingleInternalLink(): Pad | null
    getStickyEvent(eventType: EventType, idx: number): Event | null
    getStream(): Stream | null
    getStreamId(): string | null
    getTaskState(): TaskState
    hasCurrentCaps(): boolean
    isActive(): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    isLinked(): boolean
    iterateInternalLinks(): Iterator | null
    iterateInternalLinksDefault(parent?: Object | null): Iterator | null
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    linkMaybeGhosting(sink: Pad): boolean
    linkMaybeGhostingFull(sink: Pad, flags: PadLinkCheck): boolean
    markReconfigure(): void
    needsReconfigure(): boolean
    pauseTask(): boolean
    peerQuery(query: Query): boolean
    peerQueryAcceptCaps(caps: Caps): boolean
    peerQueryCaps(filter?: Caps | null): Caps
    peerQueryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    peerQueryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    peerQueryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    proxyQueryAcceptCaps(query: Query): boolean
    proxyQueryCaps(query: Query): boolean
    pullRange(offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    push(buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    pushList(list: BufferList): FlowReturn
    query(query: Query): boolean
    queryAcceptCaps(caps: Caps): boolean
    queryCaps(filter?: Caps | null): Caps
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryDefault(parent: Object | null, query: Query): boolean
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number | null ]
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number | null ]
    removeProbe(id: number): void
    sendEvent(event: Event): boolean
    setActivateFunctionFull(activate: PadActivateFunction): void
    setActivatemodeFunctionFull(activatemode: PadActivateModeFunction): void
    setActive(active: boolean): boolean
    setChainFunctionFull(chain: PadChainFunction): void
    setChainListFunctionFull(chainlist: PadChainListFunction): void
    setElementPrivate(priv?: object | null): void
    setEventFullFunctionFull(event: PadEventFullFunction): void
    setEventFunctionFull(event: PadEventFunction): void
    setGetrangeFunctionFull(get: PadGetRangeFunction): void
    setIterateInternalLinksFunctionFull(iterintlink: PadIterIntLinkFunction): void
    setLinkFunctionFull(link: PadLinkFunction): void
    setOffset(offset: number): void
    setQueryFunctionFull(query: PadQueryFunction): void
    setUnlinkFunctionFull(unlink: PadUnlinkFunction): void
    startTask(func: TaskFunction): boolean
    stickyEventsForeach(foreachFunc: PadStickyEventsForeachFunction): void
    stopTask(): boolean
    storeStickyEvent(event: Event): FlowReturn
    unlink(sinkpad: Pad): boolean
    useFixedCaps(): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Pad */
    connect(sigName: "linked", callback: ((peer: Pad) => void)): number
    on(sigName: "linked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Pad): void
    connect(sigName: "unlinked", callback: ((peer: Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ProxyPad_ConstructProps)
    _init (config?: ProxyPad_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static chainDefault(pad: Pad, parent: Object | null, buffer: Buffer): FlowReturn
    static chainListDefault(pad: Pad, parent: Object | null, list: BufferList): FlowReturn
    static getrangeDefault(pad: Pad, parent: Object, offset: number, size: number): [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    static iterateInternalLinksDefault(pad: Pad, parent?: Object | null): Iterator | null
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Registry */
    addFeature(feature: PluginFeature): boolean
    addPlugin(plugin: Plugin): boolean
    checkFeatureVersion(featureName: string, minMajor: number, minMinor: number, minMicro: number): boolean
    featureFilter(filter: PluginFeatureFilter, first: boolean): PluginFeature[]
    findFeature(name: string, type: GObject.Type): PluginFeature | null
    findPlugin(name: string): Plugin | null
    getFeatureList(type: GObject.Type): PluginFeature[]
    getFeatureListByPlugin(name: string): PluginFeature[]
    getFeatureListCookie(): number
    getPluginList(): Plugin[]
    lookup(filename: string): Plugin | null
    lookupFeature(name: string): PluginFeature | null
    pluginFilter(filter: PluginFilter, first: boolean): Plugin[]
    removeFeature(feature: PluginFeature): void
    removePlugin(plugin: Plugin): void
    scanPath(path: string): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Registry */
    connect(sigName: "feature-added", callback: ((feature: PluginFeature) => void)): number
    on(sigName: "feature-added", callback: (feature: PluginFeature) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feature-added", callback: (feature: PluginFeature) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feature-added", callback: (feature: PluginFeature) => void): NodeJS.EventEmitter
    emit(sigName: "feature-added", feature: PluginFeature): void
    connect(sigName: "plugin-added", callback: ((plugin: Plugin) => void)): number
    on(sigName: "plugin-added", callback: (plugin: Plugin) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "plugin-added", callback: (plugin: Plugin) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "plugin-added", callback: (plugin: Plugin) => void): NodeJS.EventEmitter
    emit(sigName: "plugin-added", plugin: Plugin): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    /* Static methods and pseudo-constructors */
    static forkIsEnabled(): boolean
    static forkSetEnabled(enabled: boolean): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.SharedTaskPool */
    getMaxThreads(): number
    setMaxThreads(maxThreads: number): void
    /* Methods of Gst-1.0.Gst.TaskPool */
    cleanup(): void
    disposeHandle(id?: object | null): void
    join(id?: object | null): void
    prepare(): void
    push(func: TaskPoolFunction): object | null
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: SharedTaskPool_ConstructProps)
    _init (config?: SharedTaskPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SharedTaskPool
    static $gtype: GObject.Type
}
interface Stream_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.Stream */
    caps?: Caps
    streamFlags?: StreamFlags
    streamId?: string
    streamType?: StreamType
    tags?: TagList
}
class Stream {
    /* Properties of Gst-1.0.Gst.Stream */
    caps: Caps
    streamFlags: StreamFlags
    streamType: StreamType
    tags: TagList
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Stream */
    getCaps(): Caps | null
    getStreamFlags(): StreamFlags
    getStreamId(): string | null
    getStreamType(): StreamType
    getTags(): TagList | null
    setCaps(caps?: Caps | null): void
    setStreamFlags(flags: StreamFlags): void
    setStreamType(streamType: StreamType): void
    setTags(tags?: TagList | null): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stream-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stream-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Stream_ConstructProps)
    _init (config?: Stream_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(streamId: string | null, caps: Caps | null, type: StreamType, flags: StreamFlags): Stream
    static $gtype: GObject.Type
}
interface StreamCollection_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.StreamCollection */
    upstreamId?: string
}
class StreamCollection {
    /* Properties of Gst-1.0.Gst.StreamCollection */
    upstreamId: string
    /* Fields of Gst-1.0.Gst.Object */
    readonly object: GObject.InitiallyUnowned
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.StreamCollection */
    addStream(stream: Stream): boolean
    getSize(): number
    getStream(index: number): Stream | null
    getUpstreamId(): string | null
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.StreamCollection */
    connect(sigName: "stream-notify", callback: ((object: Stream, p0: GObject.ParamSpec) => void)): number
    on(sigName: "stream-notify", callback: (object: Stream, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stream-notify", callback: (object: Stream, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stream-notify", callback: (object: Stream, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "stream-notify", object: Stream, p0: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::upstream-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upstream-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::upstream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::upstream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::upstream-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: StreamCollection_ConstructProps)
    _init (config?: StreamCollection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(upstreamId?: string | null): StreamCollection
    static $gtype: GObject.Type
}
interface SystemClock_ConstructProps extends Clock_ConstructProps {
    /* Constructor properties of Gst-1.0.Gst.SystemClock */
    clockType?: ClockType
}
class SystemClock {
    /* Properties of Gst-1.0.Gst.SystemClock */
    clockType: ClockType
    /* Properties of Gst-1.0.Gst.Clock */
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Fields of Gst-1.0.Gst.Clock */
    readonly object: Object
    /* Fields of Gst-1.0.Gst.Object */
    readonly lock: GLib.Mutex
    readonly name: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Clock */
    addObservation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number ]
    addObservationUnapplied(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number, /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rateNum */ ClockTime | null, /* rateDenom */ ClockTime | null ]
    adjustUnlocked(internal: ClockTime): ClockTime
    adjustWithCalibration(internalTarget: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    getCalibration(): [ /* internal */ ClockTime | null, /* external */ ClockTime | null, /* rateNum */ ClockTime | null, /* rateDenom */ ClockTime | null ]
    getInternalTime(): ClockTime
    getMaster(): Clock | null
    getResolution(): ClockTime
    getTime(): ClockTime
    getTimeout(): ClockTime
    isSynced(): boolean
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID
    newSingleShotId(time: ClockTime): ClockID
    periodicIdReinit(id: ClockID, startTime: ClockTime, interval: ClockTime): boolean
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master?: Clock | null): boolean
    setResolution(resolution: ClockTime): ClockTime
    setSynced(synced: boolean): void
    setTimeout(timeout: ClockTime): void
    singleShotIdReinit(id: ClockID, time: ClockTime): boolean
    unadjustUnlocked(external: ClockTime): ClockTime
    unadjustWithCalibration(externalTarget: ClockTime, cinternal: ClockTime, cexternal: ClockTime, cnum: ClockTime, cdenom: ClockTime): ClockTime
    waitForSync(timeout: ClockTime): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Clock */
    connect(sigName: "synced", callback: ((synced: boolean) => void)): number
    on(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "synced", callback: (synced: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "synced", callback: (synced: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "synced", synced: boolean): void
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::window-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SystemClock_ConstructProps)
    _init (config?: SystemClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static obtain(): Clock
    static setDefault(newClock?: Clock | null): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Task */
    getPool(): TaskPool
    getState(): TaskState
    join(): boolean
    pause(): boolean
    resume(): boolean
    setEnterCallback(enterFunc: TaskThreadFunc): void
    setLeaveCallback(leaveFunc: TaskThreadFunc): void
    setLock(mutex: GLib.RecMutex): void
    setPool(pool: TaskPool): void
    setState(state: TaskState): boolean
    start(): boolean
    stop(): boolean
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(func: TaskFunction): Task
    static cleanupAll(): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TaskPool */
    cleanup(): void
    disposeHandle(id?: object | null): void
    join(id?: object | null): void
    prepare(): void
    push(func: TaskPoolFunction): object | null
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::params", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::params", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::params", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TracerFactory */
    getTracerType(): GObject.Type
    /* Methods of Gst-1.0.Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: TracerFactory_ConstructProps)
    _init (config?: TracerFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getList(): TracerFactory[]
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.TypeFindFactory */
    callFunction(find: TypeFind): void
    getCaps(): Caps | null
    getExtensions(): string[] | null
    hasFunction(): boolean
    /* Methods of Gst-1.0.Gst.PluginFeature */
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    getPlugin(): Plugin | null
    getPluginName(): string | null
    getRank(): number
    load(): PluginFeature | null
    setRank(rank: number): void
    /* Methods of Gst-1.0.Gst.Object */
    addControlBinding(binding: ControlBinding): boolean
    defaultError(error: GLib.Error, debug?: string | null): void
    getControlBinding(propertyName: string): ControlBinding | null
    getControlRate(): ClockTime
    getGValueArray(propertyName: string, timestamp: ClockTime, interval: ClockTime, values: any[]): boolean
    getName(): string | null
    getParent(): Object | null
    getPathString(): string
    getValue(propertyName: string, timestamp: ClockTime): any | null
    hasActiveControlBindings(): boolean
    hasAncestor(ancestor: Object): boolean
    hasAsAncestor(ancestor: Object): boolean
    hasAsParent(parent: Object): boolean
    ref(): Object
    removeControlBinding(binding: ControlBinding): boolean
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    setControlBindingsDisabled(disabled: boolean): void
    setControlRate(controlRate: ClockTime): void
    setName(name?: string | null): boolean
    setParent(parent: Object): boolean
    suggestNextSync(): ClockTime
    syncValues(timestamp: ClockTime): boolean
    unparent(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    connect(sigName: "deep-notify", callback: ((propObject: Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Object, prop: GObject.ParamSpec): void
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
    constructor (config?: TypeFindFactory_ConstructProps)
    _init (config?: TypeFindFactory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static getList(): TypeFindFactory[]
    static $gtype: GObject.Type
}
class ValueArray {
    static name: string
    /* Static methods and pseudo-constructors */
    static appendAndTakeValue(value: any, appendValue: any): void
    static appendValue(value: any, appendValue: any): void
    static getSize(value: any): number
    static getValue(value: any, index: number): any
    static init(value: any, prealloc: number): any
    static prependValue(value: any, prependValue: any): void
}
class ValueList {
    static name: string
    /* Static methods and pseudo-constructors */
    static appendAndTakeValue(value: any, appendValue: any): void
    static appendValue(value: any, appendValue: any): void
    static concat(value1: any, value2: any): /* dest */ any
    static getSize(value: any): number
    static getValue(value: any, index: number): any
    static init(value: any, prealloc: number): any
    static merge(value1: any, value2: any): /* dest */ any
    static prependValue(value: any, prependValue: any): void
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
    readonly objectClass: ObjectClass
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
    static new(initialSize: number): AtomicQueue
    constructor(initialSize: number)
    /* Static methods and pseudo-constructors */
    static new(initialSize: number): AtomicQueue
}
abstract class BinClass {
    /* Fields of Gst-1.0.Gst.BinClass */
    readonly parentClass: ElementClass
    readonly elementAdded: (bin: Bin, child: Element) => void
    readonly elementRemoved: (bin: Bin, child: Element) => void
    readonly addElement: (bin: Bin, element: Element) => boolean
    readonly removeElement: (bin: Bin, element: Element) => boolean
    readonly handleMessage: (bin: Bin, message: Message) => void
    readonly doLatency: (bin: Bin) => boolean
    readonly deepElementAdded: (bin: Bin, subBin: Bin, child: Element) => void
    readonly deepElementRemoved: (bin: Bin, subBin: Bin, child: Element) => void
    static name: string
}
class BinPrivate {
    static name: string
}
class Buffer {
    /* Fields of Gst-1.0.Gst.Buffer */
    readonly miniObject: MiniObject
    readonly pool: BufferPool
    readonly pts: ClockTime
    readonly dts: ClockTime
    readonly duration: ClockTime
    readonly offset: number
    readonly offsetEnd: number
    /* Methods of Gst-1.0.Gst.Buffer */
    addCustomMeta(name: string): CustomMeta | null
    addMeta(info: MetaInfo, params?: object | null): Meta | null
    addParentBufferMeta(ref: Buffer): ParentBufferMeta | null
    addProtectionMeta(info: Structure): ProtectionMeta
    addReferenceTimestampMeta(reference: Caps, timestamp: ClockTime, duration: ClockTime): ReferenceTimestampMeta | null
    append(buf2: Buffer): Buffer
    appendMemory(mem: Memory): void
    appendRegion(buf2: Buffer, offset: number, size: number): Buffer
    copyDeep(): Buffer
    copyInto(src: Buffer, flags: BufferCopyFlags, offset: number, size: number): boolean
    copyRegion(flags: BufferCopyFlags, offset: number, size: number): Buffer
    extract(offset: number): [ /* returnType */ number, /* dest */ Uint8Array ]
    extractDup(offset: number, size: number): /* dest */ Uint8Array
    fill(offset: number, src: Uint8Array): number
    findMemory(offset: number, size: number): [ /* returnType */ boolean, /* idx */ number, /* length */ number, /* skip */ number ]
    foreachMeta(func: BufferForeachMetaFunc): boolean
    getAllMemory(): Memory | null
    getCustomMeta(name: string): CustomMeta | null
    getFlags(): BufferFlags
    getMemory(idx: number): Memory | null
    getMemoryRange(idx: number, length: number): Memory | null
    getMeta(api: GObject.Type): Meta | null
    getNMeta(apiType: GObject.Type): number
    getReferenceTimestampMeta(reference?: Caps | null): ReferenceTimestampMeta | null
    getSize(): number
    getSizes(): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    getSizesRange(idx: number, length: number): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    hasFlags(flags: BufferFlags): boolean
    insertMemory(idx: number, mem: Memory): void
    isAllMemoryWritable(): boolean
    isMemoryRangeWritable(idx: number, length: number): boolean
    map(flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    mapRange(idx: number, length: number, flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    memcmp(offset: number, mem: Uint8Array): number
    memset(offset: number, val: number, size: number): number
    nMemory(): number
    peekMemory(idx: number): Memory | null
    prependMemory(mem: Memory): void
    removeAllMemory(): void
    removeMemory(idx: number): void
    removeMemoryRange(idx: number, length: number): void
    removeMeta(meta: Meta): boolean
    replaceAllMemory(mem: Memory): void
    replaceMemory(idx: number, mem: Memory): void
    replaceMemoryRange(idx: number, length: number, mem: Memory): void
    resize(offset: number, size: number): void
    resizeRange(idx: number, length: number, offset: number, size: number): boolean
    setFlags(flags: BufferFlags): boolean
    setSize(size: number): void
    unmap(info: MapInfo): void
    unsetFlags(flags: BufferFlags): boolean
    static name: string
    static new(): Buffer
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Buffer
    static newAllocate(allocator: Allocator | null, size: number, params?: AllocationParams | null): Buffer
    static newMemdup(data: Uint8Array): Buffer
    static newWrapped(data: Uint8Array): Buffer
    static newWrappedBytes(bytes: any): Buffer
    static newWrappedFull(flags: MemoryFlags, data: Uint8Array, maxsize: number, offset: number, notify?: GLib.DestroyNotify | null): Buffer
    static getMaxMemory(): number
}
class BufferList {
    /* Methods of Gst-1.0.Gst.BufferList */
    calculateSize(): number
    copyDeep(): BufferList
    foreach(func: BufferListFunc): boolean
    get(idx: number): Buffer | null
    getWritable(idx: number): Buffer | null
    insert(idx: number, buffer: Buffer): void
    length(): number
    remove(idx: number, length: number): void
    static name: string
    static new(): BufferList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): BufferList
    static newSized(size: number): BufferList
    static replace(oldList?: BufferList | null, newList?: BufferList | null): [ /* returnType */ boolean, /* oldList */ BufferList | null ]
    static take(oldList: BufferList, newList?: BufferList | null): [ /* returnType */ boolean, /* oldList */ BufferList ]
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
    readonly objectClass: ObjectClass
    readonly getOptions: (pool: BufferPool) => string[]
    readonly setConfig: (pool: BufferPool, config: Structure) => boolean
    readonly start: (pool: BufferPool) => boolean
    readonly stop: (pool: BufferPool) => boolean
    readonly acquireBuffer: (pool: BufferPool, params?: BufferPoolAcquireParams | null) => [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    readonly allocBuffer: (pool: BufferPool, params?: BufferPoolAcquireParams | null) => [ /* returnType */ FlowReturn, /* buffer */ Buffer ]
    readonly resetBuffer: (pool: BufferPool, buffer: Buffer) => void
    readonly releaseBuffer: (pool: BufferPool, buffer: Buffer) => void
    readonly freeBuffer: (pool: BufferPool, buffer: Buffer) => void
    readonly flushStart: (pool: BufferPool) => void
    readonly flushStop: (pool: BufferPool) => void
    static name: string
}
class BufferPoolPrivate {
    static name: string
}
abstract class BusClass {
    /* Fields of Gst-1.0.Gst.BusClass */
    readonly parentClass: ObjectClass
    readonly message: (bus: Bus, message: Message) => void
    readonly syncMessage: (bus: Bus, message: Message) => void
    static name: string
}
class BusPrivate {
    static name: string
}
class Caps {
    /* Fields of Gst-1.0.Gst.Caps */
    readonly miniObject: MiniObject
    /* Methods of Gst-1.0.Gst.Caps */
    append(caps2: Caps): void
    appendStructure(structure: Structure): void
    appendStructureFull(structure: Structure, features?: CapsFeatures | null): void
    canIntersect(caps2: Caps): boolean
    copy(): Caps
    copyNth(nth: number): Caps
    filterAndMapInPlace(func: CapsFilterMapFunc): void
    fixate(): Caps
    foreach(func: CapsForeachFunc): boolean
    getFeatures(index: number): CapsFeatures | null
    getSize(): number
    getStructure(index: number): Structure
    intersect(caps2: Caps): Caps
    intersectFull(caps2: Caps, mode: CapsIntersectMode): Caps
    isAlwaysCompatible(caps2: Caps): boolean
    isAny(): boolean
    isEmpty(): boolean
    isEqual(caps2: Caps): boolean
    isEqualFixed(caps2: Caps): boolean
    isFixed(): boolean
    isStrictlyEqual(caps2: Caps): boolean
    isSubset(superset: Caps): boolean
    isSubsetStructure(structure: Structure): boolean
    isSubsetStructureFull(structure: Structure, features?: CapsFeatures | null): boolean
    mapInPlace(func: CapsMapFunc): boolean
    merge(caps2: Caps): Caps
    mergeStructure(structure: Structure): Caps
    mergeStructureFull(structure: Structure, features?: CapsFeatures | null): Caps
    normalize(): Caps
    removeStructure(idx: number): void
    serialize(flags: SerializeFlags): string
    setFeatures(index: number, features?: CapsFeatures | null): void
    setFeaturesSimple(features?: CapsFeatures | null): void
    setValue(field: string, value: any): void
    simplify(): Caps
    stealStructure(index: number): Structure | null
    subtract(subtrahend: Caps): Caps
    toString(): string
    truncate(): Caps
    static name: string
    /* Static methods and pseudo-constructors */
    static newAny(): Caps
    static newEmpty(): Caps
    static newEmptySimple(mediaType: string): Caps
    static fromString(string: string): Caps | null
}
class CapsFeatures {
    /* Methods of Gst-1.0.Gst.CapsFeatures */
    add(feature: string): void
    addId(feature: GLib.Quark): void
    contains(feature: string): boolean
    containsId(feature: GLib.Quark): boolean
    copy(): CapsFeatures
    free(): void
    getNth(i: number): string | null
    getNthId(i: number): GLib.Quark
    getSize(): number
    isAny(): boolean
    isEqual(features2: CapsFeatures): boolean
    remove(feature: string): void
    removeId(feature: GLib.Quark): void
    setParentRefcount(refcount: number): boolean
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static newAny(): CapsFeatures
    static newEmpty(): CapsFeatures
    static newSingle(feature: string): CapsFeatures
    static fromString(features: string): CapsFeatures | null
}
abstract class ChildProxyInterface {
    /* Fields of Gst-1.0.Gst.ChildProxyInterface */
    readonly parent: GObject.TypeInterface
    readonly getChildByName: (parent: ChildProxy, name: string) => GObject.Object | null
    readonly getChildByIndex: (parent: ChildProxy, index: number) => GObject.Object | null
    readonly getChildrenCount: (parent: ChildProxy) => number
    readonly childAdded: (parent: ChildProxy, child: GObject.Object, name: string) => void
    readonly childRemoved: (parent: ChildProxy, child: GObject.Object, name: string) => void
    static name: string
}
abstract class ClockClass {
    /* Fields of Gst-1.0.Gst.ClockClass */
    readonly parentClass: ObjectClass
    readonly changeResolution: (clock: Clock, oldResolution: ClockTime, newResolution: ClockTime) => ClockTime
    readonly getResolution: (clock: Clock) => ClockTime
    readonly getInternalTime: (clock: Clock) => ClockTime
    readonly wait: (clock: Clock, entry: ClockEntry) => [ /* returnType */ ClockReturn, /* jitter */ ClockTimeDiff | null ]
    readonly waitAsync: (clock: Clock, entry: ClockEntry) => ClockReturn
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
    getContextType(): string
    getStructure(): Structure
    hasContextType(contextType: string): boolean
    isPersistent(): boolean
    ref(): Context
    unref(): void
    writableStructure(): Structure
    static name: string
    static new(contextType: string, persistent: boolean): Context
    constructor(contextType: string, persistent: boolean)
    /* Static methods and pseudo-constructors */
    static new(contextType: string, persistent: boolean): Context
    static replace(oldContext: Context, newContext?: Context | null): [ /* returnType */ boolean, /* oldContext */ Context ]
}
abstract class ControlBindingClass {
    /* Fields of Gst-1.0.Gst.ControlBindingClass */
    readonly parentClass: ObjectClass
    readonly syncValues: (binding: ControlBinding, object: Object, timestamp: ClockTime, lastSync: ClockTime) => boolean
    readonly getValue: (binding: ControlBinding, timestamp: ClockTime) => any | null
    readonly getGValueArray: (binding: ControlBinding, timestamp: ClockTime, interval: ClockTime, values: any[]) => boolean
    static name: string
}
class ControlBindingPrivate {
    static name: string
}
abstract class ControlSourceClass {
    /* Fields of Gst-1.0.Gst.ControlSourceClass */
    readonly parentClass: ObjectClass
    static name: string
}
class CustomMeta {
    /* Fields of Gst-1.0.Gst.CustomMeta */
    readonly meta: Meta
    /* Methods of Gst-1.0.Gst.CustomMeta */
    getStructure(): Structure
    hasName(name: string): boolean
    static name: string
}
class DateTime {
    /* Methods of Gst-1.0.Gst.DateTime */
    getDay(): number
    getHour(): number
    getMicrosecond(): number
    getMinute(): number
    getMonth(): number
    getSecond(): number
    getTimeZoneOffset(): number
    getYear(): number
    hasDay(): boolean
    hasMonth(): boolean
    hasSecond(): boolean
    hasTime(): boolean
    hasYear(): boolean
    ref(): DateTime
    toGDateTime(): GLib.DateTime | null
    toIso8601String(): string | null
    unref(): void
    static name: string
    static new(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    constructor(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number)
    /* Static methods and pseudo-constructors */
    static new(tzoffset: number, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static newFromGDateTime(dt?: GLib.DateTime | null): DateTime
    static newFromIso8601String(string: string): DateTime
    static newFromUnixEpochLocalTime(secs: number): DateTime
    static newFromUnixEpochLocalTimeUsecs(usecs: number): DateTime
    static newFromUnixEpochUtc(secs: number): DateTime
    static newFromUnixEpochUtcUsecs(usecs: number): DateTime
    static newLocalTime(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static newNowLocalTime(): DateTime
    static newNowUtc(): DateTime
    static newY(year: number): DateTime
    static newYm(year: number, month: number): DateTime
    static newYmd(year: number, month: number, day: number): DateTime
}
class DebugCategory {
    /* Methods of Gst-1.0.Gst.DebugCategory */
    free(): void
    getColor(): number
    getDescription(): string
    getName(): string
    getThreshold(): DebugLevel
    resetThreshold(): void
    setThreshold(level: DebugLevel): void
    static name: string
}
class DebugMessage {
    /* Methods of Gst-1.0.Gst.DebugMessage */
    get(): string | null
    static name: string
}
abstract class DeviceClass {
    /* Fields of Gst-1.0.Gst.DeviceClass */
    readonly parentClass: ObjectClass
    readonly createElement: (device: Device, name?: string | null) => Element | null
    readonly reconfigureElement: (device: Device, element: Element) => boolean
    static name: string
}
abstract class DeviceMonitorClass {
    /* Fields of Gst-1.0.Gst.DeviceMonitorClass */
    readonly parentClass: ObjectClass
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
    readonly parentClass: ObjectClass
    readonly factory: DeviceProviderFactory
    readonly start: (provider: DeviceProvider) => boolean
    readonly stop: (provider: DeviceProvider) => void
    /* Methods of Gst-1.0.Gst.DeviceProviderClass */
    static addMetadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static addStaticMetadata(klass: DeviceProvider | Function | GObject.Type, key: string, value: string): void
    static getMetadata(klass: DeviceProvider | Function | GObject.Type, key: string): string | null
    static setMetadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static setStaticMetadata(klass: DeviceProvider | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
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
    readonly parentClass: ObjectClass
    readonly metadata: object
    readonly elementfactory: ElementFactory
    readonly padtemplates: object[]
    readonly numpadtemplates: number
    readonly padTemplCookie: number
    readonly padAdded: (element: Element, pad: Pad) => void
    readonly padRemoved: (element: Element, pad: Pad) => void
    readonly noMorePads: (element: Element) => void
    readonly requestNewPad: (element: Element, templ: PadTemplate, name?: string | null, caps?: Caps | null) => Pad | null
    readonly releasePad: (element: Element, pad: Pad) => void
    readonly getState: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State | null, /* pending */ State | null ]
    readonly setState: (element: Element, state: State) => StateChangeReturn
    readonly changeState: (element: Element, transition: StateChange) => StateChangeReturn
    readonly stateChanged: (element: Element, oldstate: State, newstate: State, pending: State) => void
    readonly setBus: (element: Element, bus?: Bus | null) => void
    readonly provideClock: (element: Element) => Clock | null
    readonly setClock: (element: Element, clock?: Clock | null) => boolean
    readonly sendEvent: (element: Element, event: Event) => boolean
    readonly query: (element: Element, query: Query) => boolean
    readonly postMessage: (element: Element, message: Message) => boolean
    readonly setContext: (element: Element, context: Context) => void
    /* Methods of Gst-1.0.Gst.ElementClass */
    static addMetadata(klass: Element | Function | GObject.Type, key: string, value: string): void
    static addPadTemplate(klass: Element | Function | GObject.Type, templ: PadTemplate): void
    static addStaticMetadata(klass: Element | Function | GObject.Type, key: string, value: string): void
    static addStaticPadTemplate(klass: Element | Function | GObject.Type, staticTempl: StaticPadTemplate): void
    static addStaticPadTemplateWithGtype(klass: Element | Function | GObject.Type, staticTempl: StaticPadTemplate, padType: GObject.Type): void
    static getMetadata(klass: Element | Function | GObject.Type, key: string): string
    static getPadTemplate(element_class: Element | Function | GObject.Type, name: string): PadTemplate | null
    static getPadTemplateList(element_class: Element | Function | GObject.Type): PadTemplate[]
    static setMetadata(klass: Element | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static setStaticMetadata(klass: Element | Function | GObject.Type, longname: string, classification: string, description: string, author: string): void
    static name: string
}
abstract class ElementFactoryClass {
    static name: string
}
class Event {
    /* Fields of Gst-1.0.Gst.Event */
    readonly miniObject: MiniObject
    readonly type: EventType
    readonly timestamp: number
    readonly seqnum: number
    /* Methods of Gst-1.0.Gst.Event */
    copySegment(segment: Segment): void
    getRunningTimeOffset(): number
    getSeqnum(): number
    getStructure(): Structure | null
    hasName(name: string): boolean
    hasNameId(name: GLib.Quark): boolean
    parseBufferSize(): [ /* format */ Format, /* minsize */ number, /* maxsize */ number, /* async */ boolean ]
    parseCaps(): /* caps */ Caps
    parseFlushStop(): /* resetTime */ boolean
    parseGap(): [ /* timestamp */ ClockTime | null, /* duration */ ClockTime | null ]
    parseGapFlags(): /* flags */ GapFlags
    parseGroupId(): [ /* returnType */ boolean, /* groupId */ number ]
    parseInstantRateChange(): [ /* rateMultiplier */ number | null, /* newFlags */ SegmentFlags | null ]
    parseInstantRateSyncTime(): [ /* rateMultiplier */ number | null, /* runningTime */ ClockTime | null, /* upstreamRunningTime */ ClockTime | null ]
    parseLatency(): /* latency */ ClockTime
    parseProtection(): [ /* systemId */ string | null, /* data */ Buffer | null, /* origin */ string | null ]
    parseQos(): [ /* type */ QOSType, /* proportion */ number, /* diff */ ClockTimeDiff, /* timestamp */ ClockTime ]
    parseSeek(): [ /* rate */ number, /* format */ Format, /* flags */ SeekFlags, /* startType */ SeekType, /* start */ number, /* stopType */ SeekType, /* stop */ number ]
    parseSeekTrickmodeInterval(): /* interval */ ClockTime
    parseSegment(): /* segment */ Segment
    parseSegmentDone(): [ /* format */ Format | null, /* position */ number | null ]
    parseSelectStreams(): /* streams */ string[]
    parseSinkMessage(): /* msg */ Message
    parseStep(): [ /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null ]
    parseStream(): /* stream */ Stream
    parseStreamCollection(): /* collection */ StreamCollection
    parseStreamFlags(): /* flags */ StreamFlags
    parseStreamGroupDone(): /* groupId */ number
    parseStreamStart(): /* streamId */ string
    parseTag(): /* taglist */ TagList
    parseToc(): [ /* toc */ Toc, /* updated */ boolean ]
    parseTocSelect(): /* uid */ string | null
    setGapFlags(flags: GapFlags): void
    setGroupId(groupId: number): void
    setRunningTimeOffset(offset: number): void
    setSeekTrickmodeInterval(interval: ClockTime): void
    setSeqnum(seqnum: number): void
    setStream(stream: Stream): void
    setStreamFlags(flags: StreamFlags): void
    writableStructure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static newBufferSize(format: Format, minsize: number, maxsize: number, async: boolean): Event
    static newCaps(caps: Caps): Event
    static newCustom(type: EventType, structure: Structure): Event
    static newEos(): Event
    static newFlushStart(): Event
    static newFlushStop(resetTime: boolean): Event
    static newGap(timestamp: ClockTime, duration: ClockTime): Event
    static newInstantRateChange(rateMultiplier: number, newFlags: SegmentFlags): Event
    static newInstantRateSyncTime(rateMultiplier: number, runningTime: ClockTime, upstreamRunningTime: ClockTime): Event
    static newLatency(latency: ClockTime): Event
    static newNavigation(structure: Structure): Event
    static newProtection(systemId: string, data: Buffer, origin: string): Event
    static newQos(type: QOSType, proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static newReconfigure(): Event
    static newSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): Event
    static newSegment(segment: Segment): Event
    static newSegmentDone(format: Format, position: number): Event
    static newSelectStreams(streams: string[]): Event
    static newSinkMessage(name: string, msg: Message): Event
    static newStep(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event
    static newStreamCollection(collection: StreamCollection): Event
    static newStreamGroupDone(groupId: number): Event
    static newStreamStart(streamId: string): Event
    static newTag(taglist: TagList): Event
    static newToc(toc: Toc, updated: boolean): Event
    static newTocSelect(uid: string): Event
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
    readonly parentClass: ProxyPadClass
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
    readonly masterCookie: number
    readonly size: number
    /* Methods of Gst-1.0.Gst.Iterator */
    filter(func: GLib.CompareFunc, userData: any): Iterator
    findCustom(func: GLib.CompareFunc): [ /* returnType */ boolean, /* elem */ any ]
    fold(func: IteratorFoldFunction, ret: any): IteratorResult
    foreach(func: IteratorForeachFunction): IteratorResult
    push(other: Iterator): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newSingle(type: GObject.Type, object: any): Iterator
}
class MapInfo {
    /* Fields of Gst-1.0.Gst.MapInfo */
    readonly memory: Memory
    readonly flags: MapFlags
    readonly data: Uint8Array
    readonly size: number
    readonly maxsize: number
    readonly userData: object[]
    static name: string
}
class Memory {
    /* Fields of Gst-1.0.Gst.Memory */
    readonly miniObject: MiniObject
    readonly allocator: Allocator
    readonly parent: Memory
    readonly maxsize: number
    readonly align: number
    readonly offset: number
    readonly size: number
    /* Methods of Gst-1.0.Gst.Memory */
    copy(offset: number, size: number): Memory
    getSizes(): [ /* returnType */ number, /* offset */ number | null, /* maxsize */ number | null ]
    isSpan(mem2: Memory): [ /* returnType */ boolean, /* offset */ number ]
    isType(memType: string): boolean
    makeMapped(flags: MapFlags): [ /* returnType */ Memory | null, /* info */ MapInfo ]
    map(flags: MapFlags): [ /* returnType */ boolean, /* info */ MapInfo ]
    resize(offset: number, size: number): void
    share(offset: number, size: number): Memory
    unmap(info: MapInfo): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newWrapped(flags: MemoryFlags, data: Uint8Array, maxsize: number, offset: number, notify?: GLib.DestroyNotify | null): Memory
}
class Message {
    /* Fields of Gst-1.0.Gst.Message */
    readonly miniObject: MiniObject
    readonly type: MessageType
    readonly timestamp: number
    readonly src: Object
    readonly seqnum: number
    /* Methods of Gst-1.0.Gst.Message */
    addRedirectEntry(location: string, tagList?: TagList | null, entryStruct?: Structure | null): void
    getNumRedirectEntries(): number
    getSeqnum(): number
    getStreamStatusObject(): any | null
    getStructure(): Structure | null
    hasName(name: string): boolean
    parseAsyncDone(): /* runningTime */ ClockTime | null
    parseBuffering(): /* percent */ number | null
    parseBufferingStats(): [ /* mode */ BufferingMode | null, /* avgIn */ number | null, /* avgOut */ number | null, /* bufferingLeft */ number | null ]
    parseClockLost(): /* clock */ Clock | null
    parseClockProvide(): [ /* clock */ Clock | null, /* ready */ boolean | null ]
    parseContextType(): [ /* returnType */ boolean, /* contextType */ string | null ]
    parseDeviceAdded(): /* device */ Device | null
    parseDeviceChanged(): [ /* device */ Device | null, /* changedDevice */ Device | null ]
    parseDeviceRemoved(): /* device */ Device | null
    parseError(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parseErrorDetails(): /* structure */ Structure
    parseGroupId(): [ /* returnType */ boolean, /* groupId */ number | null ]
    parseHaveContext(): /* context */ Context | null
    parseInfo(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parseInfoDetails(): /* structure */ Structure
    parseInstantRateRequest(): /* rateMultiplier */ number | null
    parseNewClock(): /* clock */ Clock | null
    parseProgress(): [ /* type */ ProgressType | null, /* code */ string | null, /* text */ string | null ]
    parsePropertyNotify(): [ /* object */ Object | null, /* propertyName */ string | null, /* propertyValue */ any | null ]
    parseQos(): [ /* live */ boolean | null, /* runningTime */ number | null, /* streamTime */ number | null, /* timestamp */ number | null, /* duration */ number | null ]
    parseQosStats(): [ /* format */ Format | null, /* processed */ number | null, /* dropped */ number | null ]
    parseQosValues(): [ /* jitter */ number | null, /* proportion */ number | null, /* quality */ number | null ]
    parseRedirectEntry(entryIndex: number): [ /* location */ string | null, /* tagList */ TagList | null, /* entryStruct */ Structure | null ]
    parseRequestState(): /* state */ State | null
    parseResetTime(): /* runningTime */ ClockTime | null
    parseSegmentDone(): [ /* format */ Format | null, /* position */ number | null ]
    parseSegmentStart(): [ /* format */ Format | null, /* position */ number | null ]
    parseStateChanged(): [ /* oldstate */ State | null, /* newstate */ State | null, /* pending */ State | null ]
    parseStepDone(): [ /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null, /* duration */ number | null, /* eos */ boolean | null ]
    parseStepStart(): [ /* active */ boolean | null, /* format */ Format | null, /* amount */ number | null, /* rate */ number | null, /* flush */ boolean | null, /* intermediate */ boolean | null ]
    parseStreamCollection(): /* collection */ StreamCollection | null
    parseStreamStatus(): [ /* type */ StreamStatusType, /* owner */ Element ]
    parseStreamsSelected(): /* collection */ StreamCollection | null
    parseStructureChange(): [ /* type */ StructureChangeType, /* owner */ Element | null, /* busy */ boolean | null ]
    parseTag(): /* tagList */ TagList
    parseToc(): [ /* toc */ Toc, /* updated */ boolean ]
    parseWarning(): [ /* gerror */ GLib.Error | null, /* debug */ string | null ]
    parseWarningDetails(): /* structure */ Structure
    setBufferingStats(mode: BufferingMode, avgIn: number, avgOut: number, bufferingLeft: number): void
    setGroupId(groupId: number): void
    setQosStats(format: Format, processed: number, dropped: number): void
    setQosValues(jitter: number, proportion: number, quality: number): void
    setSeqnum(seqnum: number): void
    setStreamStatusObject(object: any): void
    streamsSelectedAdd(stream: Stream): void
    streamsSelectedGetSize(): number
    streamsSelectedGetStream(idx: number): Stream | null
    writableStructure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static newApplication(src: Object | null, structure: Structure): Message
    static newAsyncDone(src: Object | null, runningTime: ClockTime): Message
    static newAsyncStart(src?: Object | null): Message
    static newBuffering(src: Object | null, percent: number): Message
    static newClockLost(src: Object | null, clock: Clock): Message
    static newClockProvide(src: Object | null, clock: Clock, ready: boolean): Message
    static newCustom(type: MessageType, src?: Object | null, structure?: Structure | null): Message
    static newDeviceAdded(src: Object, device: Device): Message
    static newDeviceChanged(src: Object, device: Device, changedDevice: Device): Message
    static newDeviceRemoved(src: Object, device: Device): Message
    static newDurationChanged(src?: Object | null): Message
    static newElement(src: Object | null, structure: Structure): Message
    static newEos(src?: Object | null): Message
    static newError(src: Object | null, error: GLib.Error, debug: string): Message
    static newErrorWithDetails(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
    static newHaveContext(src: Object | null, context: Context): Message
    static newInfo(src: Object | null, error: GLib.Error, debug: string): Message
    static newInfoWithDetails(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
    static newInstantRateRequest(src: Object, rateMultiplier: number): Message
    static newLatency(src?: Object | null): Message
    static newNeedContext(src: Object | null, contextType: string): Message
    static newNewClock(src: Object | null, clock: Clock): Message
    static newProgress(src: Object, type: ProgressType, code: string, text: string): Message
    static newPropertyNotify(src: Object, propertyName: string, val?: any | null): Message
    static newQos(src: Object, live: boolean, runningTime: number, streamTime: number, timestamp: number, duration: number): Message
    static newRedirect(src: Object, location: string, tagList?: TagList | null, entryStruct?: Structure | null): Message
    static newRequestState(src: Object | null, state: State): Message
    static newResetTime(src: Object | null, runningTime: ClockTime): Message
    static newSegmentDone(src: Object | null, format: Format, position: number): Message
    static newSegmentStart(src: Object | null, format: Format, position: number): Message
    static newStateChanged(src: Object | null, oldstate: State, newstate: State, pending: State): Message
    static newStateDirty(src?: Object | null): Message
    static newStepDone(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message
    static newStepStart(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message
    static newStreamCollection(src: Object, collection: StreamCollection): Message
    static newStreamStart(src?: Object | null): Message
    static newStreamStatus(src: Object, type: StreamStatusType, owner: Element): Message
    static newStreamsSelected(src: Object, collection: StreamCollection): Message
    static newStructureChange(src: Object | null, type: StructureChangeType, owner: Element, busy: boolean): Message
    static newTag(src: Object | null, tagList: TagList): Message
    static newToc(src: Object, toc: Toc, updated: boolean): Message
    static newWarning(src: Object | null, error: GLib.Error, debug: string): Message
    static newWarningWithDetails(src: Object | null, error: GLib.Error, debug: string, details?: Structure | null): Message
    static take(oldMessage: Message, newMessage?: Message | null): [ /* returnType */ boolean, /* oldMessage */ Message ]
}
class Meta {
    /* Fields of Gst-1.0.Gst.Meta */
    readonly flags: MetaFlags
    readonly info: MetaInfo
    /* Methods of Gst-1.0.Gst.Meta */
    compareSeqnum(meta2: Meta): number
    getSeqnum(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static apiTypeGetTags(api: GObject.Type): string[]
    static apiTypeHasTag(api: GObject.Type, tag: GLib.Quark): boolean
    static apiTypeRegister(api: string, tags: string[]): GObject.Type
    static getInfo(impl: string): MetaInfo | null
    static register(api: GObject.Type, impl: string, size: number, initFunc: MetaInitFunction, freeFunc: MetaFreeFunction, transformFunc: MetaTransformFunction): MetaInfo
    static registerCustom(name: string, tags: string[], transformFunc: CustomMetaTransformFunction | null): MetaInfo
}
class MetaInfo {
    /* Fields of Gst-1.0.Gst.MetaInfo */
    readonly api: GObject.Type
    readonly type: GObject.Type
    readonly size: number
    readonly initFunc: MetaInitFunction
    readonly freeFunc: MetaFreeFunction
    readonly transformFunc: MetaTransformFunction
    /* Methods of Gst-1.0.Gst.MetaInfo */
    isCustom(): boolean
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
    addParent(parent: MiniObject): void
    getQdata(quark: GLib.Quark): object | null
    isWritable(): boolean
    lock(flags: LockFlags): boolean
    removeParent(parent: MiniObject): void
    setQdata(quark: GLib.Quark, data: object | null, destroy: GLib.DestroyNotify): void
    stealQdata(quark: GLib.Quark): object | null
    unlock(flags: LockFlags): void
    static name: string
    /* Static methods and pseudo-constructors */
    static replace(olddata?: MiniObject | null, newdata?: MiniObject | null): [ /* returnType */ boolean, /* olddata */ MiniObject | null ]
    static take(olddata: MiniObject, newdata: MiniObject): [ /* returnType */ boolean, /* olddata */ MiniObject ]
}
abstract class ObjectClass {
    /* Fields of Gst-1.0.Gst.ObjectClass */
    readonly parentClass: GObject.InitiallyUnownedClass
    readonly pathStringSeparator: string
    readonly deepNotify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    static name: string
}
abstract class PadClass {
    /* Fields of Gst-1.0.Gst.PadClass */
    readonly parentClass: ObjectClass
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
    getBuffer(): Buffer | null
    getBufferList(): BufferList | null
    getEvent(): Event | null
    getQuery(): Query | null
    static name: string
}
abstract class PadTemplateClass {
    /* Fields of Gst-1.0.Gst.PadTemplateClass */
    readonly parentClass: ObjectClass
    readonly padCreated: (templ: PadTemplate, pad: Pad) => void
    static name: string
}
class ParamSpecArray {
    /* Fields of Gst-1.0.Gst.ParamSpecArray */
    readonly parentInstance: GObject.ParamSpec
    readonly elementSpec: GObject.ParamSpec
    static name: string
}
class ParamSpecFraction {
    /* Fields of Gst-1.0.Gst.ParamSpecFraction */
    readonly parentInstance: GObject.ParamSpec
    readonly minNum: number
    readonly minDen: number
    readonly maxNum: number
    readonly maxDen: number
    readonly defNum: number
    readonly defDen: number
    static name: string
}
class ParentBufferMeta {
    /* Fields of Gst-1.0.Gst.ParentBufferMeta */
    readonly parent: Meta
    readonly buffer: Buffer
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): MetaInfo
}
class ParseContext {
    /* Methods of Gst-1.0.Gst.ParseContext */
    copy(): ParseContext | null
    free(): void
    getMissingElements(): string[] | null
    static name: string
    static new(): ParseContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParseContext
}
abstract class PipelineClass {
    /* Fields of Gst-1.0.Gst.PipelineClass */
    readonly parentClass: BinClass
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
    readonly majorVersion: number
    readonly minorVersion: number
    readonly name: string
    readonly description: string
    readonly pluginInit: PluginInitFunc
    readonly version: string
    readonly license: string
    readonly source: string
    readonly package: string
    readonly origin: string
    readonly releaseDatetime: string
    static name: string
}
abstract class PluginFeatureClass {
    static name: string
}
class Poll {
    /* Methods of Gst-1.0.Gst.Poll */
    addFd(fd: PollFD): boolean
    fdCanRead(fd: PollFD): boolean
    fdCanWrite(fd: PollFD): boolean
    fdCtlPri(fd: PollFD, active: boolean): boolean
    fdCtlRead(fd: PollFD, active: boolean): boolean
    fdCtlWrite(fd: PollFD, active: boolean): boolean
    fdHasClosed(fd: PollFD): boolean
    fdHasError(fd: PollFD): boolean
    fdHasPri(fd: PollFD): boolean
    fdIgnored(fd: PollFD): void
    free(): void
    getReadGpollfd(fd: GLib.PollFD): void
    readControl(): boolean
    removeFd(fd: PollFD): boolean
    restart(): void
    setControllable(controllable: boolean): boolean
    setFlushing(flushing: boolean): void
    wait(timeout: ClockTime): number
    writeControl(): boolean
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
    readonly getPresetNames: (preset: Preset) => string[]
    readonly getPropertyNames: (preset: Preset) => string[]
    readonly loadPreset: (preset: Preset, name: string) => boolean
    readonly savePreset: (preset: Preset, name: string) => boolean
    readonly renamePreset: (preset: Preset, oldName: string, newName: string) => boolean
    readonly deletePreset: (preset: Preset, name: string) => boolean
    readonly setMeta: (preset: Preset, name: string, tag: string, value?: string | null) => boolean
    readonly getMeta: (preset: Preset, name: string, tag: string) => [ /* returnType */ boolean, /* value */ string ]
    static name: string
}
class Promise {
    /* Fields of Gst-1.0.Gst.Promise */
    readonly parent: MiniObject
    /* Methods of Gst-1.0.Gst.Promise */
    expire(): void
    getReply(): Structure | null
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
    static newWithChangeFunc(func: PromiseChangeFunc): Promise
}
class ProtectionMeta {
    /* Fields of Gst-1.0.Gst.ProtectionMeta */
    readonly meta: Meta
    readonly info: Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): MetaInfo
}
abstract class ProxyPadClass {
    /* Fields of Gst-1.0.Gst.ProxyPadClass */
    readonly parentClass: PadClass
    static name: string
}
class ProxyPadPrivate {
    static name: string
}
class Query {
    /* Fields of Gst-1.0.Gst.Query */
    readonly miniObject: MiniObject
    readonly type: QueryType
    /* Methods of Gst-1.0.Gst.Query */
    addAllocationMeta(api: GObject.Type, params?: Structure | null): void
    addAllocationParam(allocator?: Allocator | null, params?: AllocationParams | null): void
    addAllocationPool(pool: BufferPool | null, size: number, minBuffers: number, maxBuffers: number): void
    addBufferingRange(start: number, stop: number): boolean
    addSchedulingMode(mode: PadMode): void
    findAllocationMeta(api: GObject.Type): [ /* returnType */ boolean, /* index */ number | null ]
    getNAllocationMetas(): number
    getNAllocationParams(): number
    getNAllocationPools(): number
    getNBufferingRanges(): number
    getNSchedulingModes(): number
    getStructure(): Structure | null
    hasSchedulingMode(mode: PadMode): boolean
    hasSchedulingModeWithFlags(mode: PadMode, flags: SchedulingFlags): boolean
    parseAcceptCaps(): /* caps */ Caps
    parseAcceptCapsResult(): /* result */ boolean | null
    parseAllocation(): [ /* caps */ Caps | null, /* needPool */ boolean | null ]
    parseBitrate(): /* nominalBitrate */ number | null
    parseBufferingPercent(): [ /* busy */ boolean | null, /* percent */ number | null ]
    parseBufferingRange(): [ /* format */ Format | null, /* start */ number | null, /* stop */ number | null, /* estimatedTotal */ number | null ]
    parseBufferingStats(): [ /* mode */ BufferingMode | null, /* avgIn */ number | null, /* avgOut */ number | null, /* bufferingLeft */ number | null ]
    parseCaps(): /* filter */ Caps
    parseCapsResult(): /* caps */ Caps
    parseContext(): /* context */ Context
    parseContextType(): [ /* returnType */ boolean, /* contextType */ string | null ]
    parseConvert(): [ /* srcFormat */ Format | null, /* srcValue */ number | null, /* destFormat */ Format | null, /* destValue */ number | null ]
    parseDuration(): [ /* format */ Format | null, /* duration */ number | null ]
    parseLatency(): [ /* live */ boolean | null, /* minLatency */ ClockTime | null, /* maxLatency */ ClockTime | null ]
    parseNFormats(): /* nFormats */ number | null
    parseNthAllocationMeta(index: number): [ /* returnType */ GObject.Type, /* params */ Structure | null ]
    parseNthAllocationParam(index: number): [ /* allocator */ Allocator | null, /* params */ AllocationParams | null ]
    parseNthAllocationPool(index: number): [ /* pool */ BufferPool | null, /* size */ number | null, /* minBuffers */ number | null, /* maxBuffers */ number | null ]
    parseNthBufferingRange(index: number): [ /* returnType */ boolean, /* start */ number | null, /* stop */ number | null ]
    parseNthFormat(nth: number): /* format */ Format | null
    parseNthSchedulingMode(index: number): PadMode
    parsePosition(): [ /* format */ Format | null, /* cur */ number | null ]
    parseScheduling(): [ /* flags */ SchedulingFlags | null, /* minsize */ number | null, /* maxsize */ number | null, /* align */ number | null ]
    parseSeeking(): [ /* format */ Format | null, /* seekable */ boolean | null, /* segmentStart */ number | null, /* segmentEnd */ number | null ]
    parseSegment(): [ /* rate */ number | null, /* format */ Format | null, /* startValue */ number | null, /* stopValue */ number | null ]
    parseUri(): /* uri */ string | null
    parseUriRedirection(): /* uri */ string | null
    parseUriRedirectionPermanent(): /* permanent */ boolean | null
    ref(): Query
    removeNthAllocationMeta(index: number): void
    removeNthAllocationParam(index: number): void
    removeNthAllocationPool(index: number): void
    setAcceptCapsResult(result: boolean): void
    setBitrate(nominalBitrate: number): void
    setBufferingPercent(busy: boolean, percent: number): void
    setBufferingRange(format: Format, start: number, stop: number, estimatedTotal: number): void
    setBufferingStats(mode: BufferingMode, avgIn: number, avgOut: number, bufferingLeft: number): void
    setCapsResult(caps: Caps): void
    setContext(context: Context): void
    setConvert(srcFormat: Format, srcValue: number, destFormat: Format, destValue: number): void
    setDuration(format: Format, duration: number): void
    setFormatsv(formats: Format[]): void
    setLatency(live: boolean, minLatency: ClockTime, maxLatency: ClockTime): void
    setNthAllocationParam(index: number, allocator?: Allocator | null, params?: AllocationParams | null): void
    setNthAllocationPool(index: number, pool: BufferPool | null, size: number, minBuffers: number, maxBuffers: number): void
    setPosition(format: Format, cur: number): void
    setScheduling(flags: SchedulingFlags, minsize: number, maxsize: number, align: number): void
    setSeeking(format: Format, seekable: boolean, segmentStart: number, segmentEnd: number): void
    setSegment(rate: number, format: Format, startValue: number, stopValue: number): void
    setUri(uri: string): void
    setUriRedirection(uri: string): void
    setUriRedirectionPermanent(permanent: boolean): void
    writableStructure(): Structure
    static name: string
    /* Static methods and pseudo-constructors */
    static newAcceptCaps(caps: Caps): Query
    static newAllocation(caps: Caps, needPool: boolean): Query
    static newBitrate(): Query
    static newBuffering(format: Format): Query
    static newCaps(filter: Caps): Query
    static newContext(contextType: string): Query
    static newConvert(srcFormat: Format, value: number, destFormat: Format): Query
    static newCustom(type: QueryType, structure?: Structure | null): Query
    static newDrain(): Query
    static newDuration(format: Format): Query
    static newFormats(): Query
    static newLatency(): Query
    static newPosition(format: Format): Query
    static newScheduling(): Query
    static newSeeking(format: Format): Query
    static newSegment(format: Format): Query
    static newUri(): Query
    static take(oldQuery?: Query | null, newQuery?: Query | null): [ /* returnType */ boolean, /* oldQuery */ Query | null ]
}
class ReferenceTimestampMeta {
    /* Fields of Gst-1.0.Gst.ReferenceTimestampMeta */
    readonly parent: Meta
    readonly reference: Caps
    readonly timestamp: ClockTime
    readonly duration: ClockTime
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): MetaInfo
}
abstract class RegistryClass {
    /* Fields of Gst-1.0.Gst.RegistryClass */
    readonly parentClass: ObjectClass
    static name: string
}
class RegistryPrivate {
    static name: string
}
class Sample {
    /* Methods of Gst-1.0.Gst.Sample */
    getBuffer(): Buffer | null
    getBufferList(): BufferList | null
    getCaps(): Caps | null
    getInfo(): Structure | null
    getSegment(): Segment
    setBuffer(buffer: Buffer): void
    setBufferList(bufferList: BufferList): void
    setCaps(caps: Caps): void
    setInfo(info: Structure): boolean
    setSegment(segment: Segment): void
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
    readonly appliedRate: number
    readonly format: Format
    readonly base: number
    readonly offset: number
    readonly start: number
    readonly stop: number
    readonly time: number
    readonly position: number
    readonly duration: number
    /* Methods of Gst-1.0.Gst.Segment */
    clip(format: Format, start: number, stop: number): [ /* returnType */ boolean, /* clipStart */ number | null, /* clipStop */ number | null ]
    copy(): Segment
    copyInto(dest: Segment): void
    doSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): [ /* returnType */ boolean, /* update */ boolean | null ]
    free(): void
    init(format: Format): void
    isEqual(s1: Segment): boolean
    offsetRunningTime(format: Format, offset: number): boolean
    positionFromRunningTime(format: Format, runningTime: number): number
    positionFromRunningTimeFull(format: Format, runningTime: number): [ /* returnType */ number, /* position */ number ]
    positionFromStreamTime(format: Format, streamTime: number): number
    positionFromStreamTimeFull(format: Format, streamTime: number): [ /* returnType */ number, /* position */ number ]
    setRunningTime(format: Format, runningTime: number): boolean
    toPosition(format: Format, runningTime: number): number
    toRunningTime(format: Format, position: number): number
    toRunningTimeFull(format: Format, position: number): [ /* returnType */ number, /* runningTime */ number | null ]
    toStreamTime(format: Format, position: number): number
    toStreamTimeFull(format: Format, position: number): [ /* returnType */ number, /* streamTime */ number ]
    static name: string
    static new(): Segment
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Segment
}
abstract class SharedTaskPoolClass {
    /* Fields of Gst-1.0.Gst.SharedTaskPoolClass */
    readonly parentClass: TaskPoolClass
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
    readonly nameTemplate: string
    readonly direction: PadDirection
    readonly presence: PadPresence
    readonly staticCaps: StaticCaps
    /* Methods of Gst-1.0.Gst.StaticPadTemplate */
    get(): PadTemplate | null
    getCaps(): Caps
    static name: string
}
abstract class StreamClass {
    /* Fields of Gst-1.0.Gst.StreamClass */
    readonly parentClass: ObjectClass
    static name: string
}
abstract class StreamCollectionClass {
    /* Fields of Gst-1.0.Gst.StreamCollectionClass */
    readonly parentClass: ObjectClass
    readonly streamNotify: (collection: StreamCollection, stream: Stream, pspec: GObject.ParamSpec) => void
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
    canIntersect(struct2: Structure): boolean
    copy(): Structure
    filterAndMapInPlace(func: StructureFilterMapFunc): void
    fixate(): void
    fixateField(fieldName: string): boolean
    fixateFieldBoolean(fieldName: string, target: boolean): boolean
    fixateFieldNearestDouble(fieldName: string, target: number): boolean
    fixateFieldNearestFraction(fieldName: string, targetNumerator: number, targetDenominator: number): boolean
    fixateFieldNearestInt(fieldName: string, target: number): boolean
    fixateFieldString(fieldName: string, target: string): boolean
    foreach(func: StructureForeachFunc): boolean
    free(): void
    getArray(fieldname: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
    getBoolean(fieldname: string): [ /* returnType */ boolean, /* value */ boolean ]
    getClockTime(fieldname: string): [ /* returnType */ boolean, /* value */ ClockTime ]
    getDate(fieldname: string): [ /* returnType */ boolean, /* value */ GLib.Date ]
    getDateTime(fieldname: string): [ /* returnType */ boolean, /* value */ DateTime ]
    getDouble(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getEnum(fieldname: string, enumtype: GObject.Type): [ /* returnType */ boolean, /* value */ number ]
    getFieldType(fieldname: string): GObject.Type
    getFlagset(fieldname: string): [ /* returnType */ boolean, /* valueFlags */ number | null, /* valueMask */ number | null ]
    getFraction(fieldname: string): [ /* returnType */ boolean, /* valueNumerator */ number, /* valueDenominator */ number ]
    getInt(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getList(fieldname: string): [ /* returnType */ boolean, /* array */ GObject.ValueArray ]
    getName(): string
    getNameId(): GLib.Quark
    getString(fieldname: string): string | null
    getUint(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getValue(fieldname: string): any | null
    hasField(fieldname: string): boolean
    hasFieldTyped(fieldname: string, type: GObject.Type): boolean
    hasName(name: string): boolean
    idGetValue(field: GLib.Quark): any | null
    idHasField(field: GLib.Quark): boolean
    idHasFieldTyped(field: GLib.Quark, type: GObject.Type): boolean
    idSetValue(field: GLib.Quark, value: any): void
    idTakeValue(field: GLib.Quark, value: any): void
    intersect(struct2: Structure): Structure | null
    isEqual(structure2: Structure): boolean
    isSubset(superset: Structure): boolean
    mapInPlace(func: StructureMapFunc): boolean
    nFields(): number
    nthFieldName(index: number): string
    removeAllFields(): void
    removeField(fieldname: string): void
    serialize(flags: SerializeFlags): string
    setArray(fieldname: string, array: GObject.ValueArray): void
    setList(fieldname: string, array: GObject.ValueArray): void
    setName(name: string): void
    setParentRefcount(refcount: number): boolean
    setValue(fieldname: string, value: any): void
    takeValue(fieldname: string, value: any): void
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static fromString(string: string): Structure
    static newEmpty(name: string): Structure
    static newFromString(string: string): Structure
    static newIdEmpty(quark: GLib.Quark): Structure
    static take(oldstrPtr?: Structure | null, newstr?: Structure | null): [ /* returnType */ boolean, /* oldstrPtr */ Structure | null ]
}
abstract class SystemClockClass {
    /* Fields of Gst-1.0.Gst.SystemClockClass */
    readonly parentClass: ClockClass
    static name: string
}
class SystemClockPrivate {
    static name: string
}
class TagList {
    /* Fields of Gst-1.0.Gst.TagList */
    readonly miniObject: MiniObject
    /* Methods of Gst-1.0.Gst.TagList */
    addValue(mode: TagMergeMode, tag: string, value: any): void
    copy(): TagList
    foreach(func: TagForeachFunc): void
    getBoolean(tag: string): [ /* returnType */ boolean, /* value */ boolean ]
    getBooleanIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ boolean ]
    getDate(tag: string): [ /* returnType */ boolean, /* value */ GLib.Date ]
    getDateIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ GLib.Date ]
    getDateTime(tag: string): [ /* returnType */ boolean, /* value */ DateTime ]
    getDateTimeIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ DateTime ]
    getDouble(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getDoubleIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getFloat(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getFloatIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getInt(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getInt64Index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getIntIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getPointer(tag: string): [ /* returnType */ boolean, /* value */ object | null ]
    getPointerIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ object | null ]
    getSample(tag: string): [ /* returnType */ boolean, /* sample */ Sample ]
    getSampleIndex(tag: string, index: number): [ /* returnType */ boolean, /* sample */ Sample ]
    getScope(): TagScope
    getString(tag: string): [ /* returnType */ boolean, /* value */ string ]
    getStringIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ string ]
    getTagSize(tag: string): number
    getUint(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64(tag: string): [ /* returnType */ boolean, /* value */ number ]
    getUint64Index(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getUintIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ number ]
    getValueIndex(tag: string, index: number): any | null
    insert(from: TagList, mode: TagMergeMode): void
    isEmpty(): boolean
    isEqual(list2: TagList): boolean
    merge(list2: TagList | null, mode: TagMergeMode): TagList | null
    nTags(): number
    nthTagName(index: number): string
    peekStringIndex(tag: string, index: number): [ /* returnType */ boolean, /* value */ string ]
    removeTag(tag: string): void
    setScope(scope: TagScope): void
    toString(): string | null
    static name: string
    /* Static methods and pseudo-constructors */
    static newEmpty(): TagList
    static newFromString(str: string): TagList
    static copyValue(list: TagList, tag: string): [ /* returnType */ boolean, /* dest */ any ]
    static replace(oldTaglist?: TagList | null, newTaglist?: TagList | null): [ /* returnType */ boolean, /* oldTaglist */ TagList | null ]
    static take(oldTaglist: TagList, newTaglist?: TagList | null): [ /* returnType */ boolean, /* oldTaglist */ TagList ]
}
abstract class TagSetterInterface {
    /* Fields of Gst-1.0.Gst.TagSetterInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class TaskClass {
    /* Fields of Gst-1.0.Gst.TaskClass */
    readonly parentClass: ObjectClass
    static name: string
}
abstract class TaskPoolClass {
    /* Fields of Gst-1.0.Gst.TaskPoolClass */
    readonly parentClass: ObjectClass
    readonly prepare: (pool: TaskPool) => void
    readonly cleanup: (pool: TaskPool) => void
    readonly push: (pool: TaskPool, func: TaskPoolFunction) => object | null
    readonly join: (pool: TaskPool, id?: object | null) => void
    readonly disposeHandle: (pool: TaskPool, id?: object | null) => void
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
    appendEntry(entry: TocEntry): void
    dump(): void
    findEntry(uid: string): TocEntry | null
    getEntries(): TocEntry[]
    getScope(): TocScope
    getTags(): TagList
    mergeTags(tags: TagList | null, mode: TagMergeMode): void
    setTags(tags?: TagList | null): void
    static name: string
    static new(scope: TocScope): Toc
    constructor(scope: TocScope)
    /* Static methods and pseudo-constructors */
    static new(scope: TocScope): Toc
}
class TocEntry {
    /* Methods of Gst-1.0.Gst.TocEntry */
    appendSubEntry(subentry: TocEntry): void
    getEntryType(): TocEntryType
    getLoop(): [ /* returnType */ boolean, /* loopType */ TocLoopType | null, /* repeatCount */ number | null ]
    getParent(): TocEntry | null
    getStartStopTimes(): [ /* returnType */ boolean, /* start */ number | null, /* stop */ number | null ]
    getSubEntries(): TocEntry[]
    getTags(): TagList
    getToc(): Toc
    getUid(): string
    isAlternative(): boolean
    isSequence(): boolean
    mergeTags(tags: TagList | null, mode: TagMergeMode): void
    setLoop(loopType: TocLoopType, repeatCount: number): void
    setStartStopTimes(start: number, stop: number): void
    setTags(tags?: TagList | null): void
    static name: string
    static new(type: TocEntryType, uid: string): TocEntry
    constructor(type: TocEntryType, uid: string)
    /* Static methods and pseudo-constructors */
    static new(type: TocEntryType, uid: string): TocEntry
}
abstract class TocSetterInterface {
    /* Fields of Gst-1.0.Gst.TocSetterInterface */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class TracerClass {
    /* Fields of Gst-1.0.Gst.TracerClass */
    readonly parentClass: ObjectClass
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
    readonly getLength: (data: object) => number
    /* Methods of Gst-1.0.Gst.TypeFind */
    suggestEmptySimple(probability: number, mediaType: string): void
    static name: string
    /* Static methods and pseudo-constructors */
    static register(plugin: Plugin | null, name: string, rank: number, func: TypeFindFunction, extensions: string | null, possibleCaps: Caps | null): boolean
}
abstract class TypeFindFactoryClass {
    static name: string
}
abstract class URIHandlerInterface {
    /* Fields of Gst-1.0.Gst.URIHandlerInterface */
    readonly parent: GObject.TypeInterface
    readonly getType: (type: GObject.Type) => URIType
    readonly getProtocols: (type: GObject.Type) => string[]
    readonly getUri: (handler: URIHandler) => string | null
    readonly setUri: (handler: URIHandler, uri: string) => boolean
    static name: string
}
class Uri {
    /* Methods of Gst-1.0.Gst.Uri */
    appendPath(relativePath: string): boolean
    appendPathSegment(pathSegment: string): boolean
    copy(): Uri
    equal(second: Uri): boolean
    fromStringWithBase(uri: string): Uri
    getFragment(): string | null
    getHost(): string | null
    getMediaFragmentTable(): GLib.HashTable | null
    getPath(): string | null
    getPathSegments(): string[]
    getPathString(): string | null
    getPort(): number
    getQueryKeys(): string[]
    getQueryString(): string | null
    getQueryTable(): GLib.HashTable | null
    getQueryValue(queryKey: string): string | null
    getScheme(): string | null
    getUserinfo(): string | null
    isNormalized(): boolean
    isWritable(): boolean
    join(refUri?: Uri | null): Uri | null
    makeWritable(): Uri
    newWithBase(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    normalize(): boolean
    queryHasKey(queryKey: string): boolean
    ref(): Uri
    removeQueryKey(queryKey: string): boolean
    setFragment(fragment?: string | null): boolean
    setHost(host: string): boolean
    setPath(path: string): boolean
    setPathSegments(pathSegments?: string[] | null): boolean
    setPathString(path: string): boolean
    setPort(port: number): boolean
    setQueryString(query: string): boolean
    setQueryTable(queryTable?: GLib.HashTable | null): boolean
    setQueryValue(queryKey: string, queryValue?: string | null): boolean
    setScheme(scheme: string): boolean
    setUserinfo(userinfo: string): boolean
    toString(): string
    unref(): void
    static name: string
    static new(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    constructor(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null)
    /* Static methods and pseudo-constructors */
    static new(scheme: string | null, userinfo: string | null, host: string | null, port: number, path?: string | null, query?: string | null, fragment?: string | null): Uri
    static construct(protocol: string, location: string): string
    static fromString(uri: string): Uri | null
    static fromStringEscaped(uri: string): Uri | null
    static getLocation(uri: string): string | null
    static getProtocol(uri: string): string | null
    static hasProtocol(uri: string, protocol: string): boolean
    static isValid(uri: string): boolean
    static joinStrings(baseUri: string, refUri: string): string
    static protocolIsSupported(type: URIType, protocol: string): boolean
    static protocolIsValid(protocol: string): boolean
}
class ValueTable {
    /* Fields of Gst-1.0.Gst.ValueTable */
    readonly type: GObject.Type
    readonly compare: ValueCompareFunc
    readonly serialize: ValueSerializeFunc
    readonly deserialize: ValueDeserializeFunc
    readonly deserializeWithPspec: ValueDeserializeWithPSpecFunc
    static name: string
}
    type ClockID = object
    type ClockTime = number
    type ClockTimeDiff = number
    type ElementFactoryListType = number
}
export default Gst;