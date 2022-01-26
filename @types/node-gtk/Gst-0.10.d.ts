/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gst-0.10
 */

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
function allocTraceAvailable(): boolean
function allocTraceGet(name: string): AllocTrace
function allocTraceLiveAll(): number
function allocTracePrintAll(): void
function allocTracePrintLive(): void
function allocTraceSetFlagsAll(flags: AllocTraceFlags): void
function atomicIntSet(value: number): /* atomicInt */ number
function capsFromString(string: string): Caps
function capsLoadThyself(parent: libxml2.NodePtr): Caps
function childProxyChildAdded(object: Object, child: Object): void
function childProxyChildRemoved(object: Object, child: Object): void
function childProxyGetProperty(object: Object, name: string, value: any): void
function childProxyLookup(object: Object, name: string, target: Object, pspec: GObject.ParamSpec): boolean
function childProxySetProperty(object: Object, name: string, value: any): void
function classSignalConnect(klass: ObjectClass, name: string, func: object, funcData: object): number
function classSignalEmitByName(object: Object, name: string, self: libxml2.NodePtr): void
function debugAddLogFunction(func: LogFunction): void
function debugConstructTermColor(colorinfo: number): string
function debugConstructWinColor(colorinfo: number): number
function debugGetAllCategories(): object[]
function debugGetDefaultThreshold(): DebugLevel
function debugIsActive(): boolean
function debugIsColored(): boolean
function debugLevelGetName(level: DebugLevel): string
function debugLogDefault(category: DebugCategory, level: DebugLevel, file: string, function_: string, line: number, object: GObject.Object, message: DebugMessage, unused: object): void
function debugPrintStackTrace(): void
function debugRemoveLogFunction(func: LogFunction): number
function debugRemoveLogFunctionByData(data: object): number
function debugSetActive(active: boolean): void
function debugSetColored(colored: boolean): void
function debugSetDefaultThreshold(level: DebugLevel): void
function debugSetThresholdForName(name: string, level: DebugLevel): void
function debugUnsetThresholdForName(name: string): void
function defaultRegistryCheckFeatureVersion(featureName: string, minMajor: number, minMinor: number, minMicro: number): boolean
function deinit(): void
function errorGetMessage(domain: GLib.Quark, code: number): string
function flowGetName(ret: FlowReturn): string
function flowToQuark(ret: FlowReturn): GLib.Quark
function formatGetByNick(nick: string): Format
function formatGetDetails(format: Format): FormatDefinition
function formatGetName(format: Format): string
function formatIterateDefinitions(): Iterator
function formatRegister(nick: string, description: string): Format
function formatToQuark(format: Format): GLib.Quark
function formatsContains(formats: Format, format: Format): boolean
function implementsInterfaceCast(from: object, type: GObject.Type): object
function implementsInterfaceCheck(from: object, type: GObject.Type): boolean
function init(argv?: string[] | null): /* argv */ string[] | null
function initCheck(argv: string[]): [ /* returnType */ boolean, /* argc */ number ]
function initGetOptionGroup(): GLib.OptionGroup
function isTagList(p: object): boolean
function paramSpecFraction(name: string, nick: string, blurb: string, minNum: number, minDenom: number, maxNum: number, maxDenom: number, defaultNum: number, defaultDenom: number, flags: GObject.ParamFlags): GObject.ParamSpec
function paramSpecMiniObject(name: string, nick: string, blurb: string, objectType: GObject.Type, flags: GObject.ParamFlags): GObject.ParamSpec
function parseBinFromDescription(binDescription: string, ghostUnlinkedPads: boolean): Element
function parseBinFromDescriptionFull(binDescription: string, ghostUnlinkedPads: boolean, context: ParseContext, flags: ParseFlags): Element
function parseLaunch(pipelineDescription: string): Element
function parseLaunchFull(pipelineDescription: string, context: ParseContext, flags: ParseFlags): Element
function parseLaunchv(argv: string[]): Element
function parseLaunchvFull(argv: string[], context: ParseContext, flags: ParseFlags): Element
function printElementArgs(buf: GLib.String, indent: number, element: Element): void
function printPadCaps(buf: GLib.String, indent: number, pad: Pad): void
function segtrapIsEnabled(): boolean
function segtrapSetEnabled(enabled: boolean): void
function structureEmptyNew(name: string): Structure
function structureFromString(string: string, end: string[]): Structure
function structureIdEmptyNew(quark: GLib.Quark): Structure
function tagExists(tag: string): boolean
function tagGetDescription(tag: string): string
function tagGetFlag(tag: string): TagFlag
function tagGetNick(tag: string): string
function tagGetType(tag: string): GObject.Type
function tagIsFixed(tag: string): boolean
function tagListCopyValue(dest: any, list: TagList, tag: string): boolean
function tagMergeStringsWithComma(dest: any, src: any): void
function tagMergeUseFirst(dest: any, src: any): void
function tagRegister(name: string, flag: TagFlag, type: GObject.Type, nick: string, blurb: string, func: TagMergeFunc): void
function traceReadTsc(): /* dst */ number
function typeFindHelper(src: Pad, size: number): Caps
function typeFindHelperForBuffer(obj: Object, buf: Buffer, prob: TypeFindProbability): Caps
function typeFindHelperForExtension(obj: Object, extension: string): Caps
function typeFindHelperGetRange(obj: Object, func: TypeFindHelperGetRangeFunction, size: number, prob: TypeFindProbability): Caps
function typeFindHelperGetRangeExt(obj: Object, func: TypeFindHelperGetRangeFunction, size: number, extension: string, prob: TypeFindProbability): Caps
function typeFindRegister(plugin: Plugin, name: string, rank: number, func: TypeFindFunction, extensions: string[], possibleCaps: Caps, data: object, dataNotify: GLib.DestroyNotify): boolean
function typeRegisterStaticFull(parentType: GObject.Type, typeName: string, classSize: number, baseInit: GObject.BaseInitFunc, baseFinalize: GObject.BaseFinalizeFunc, classInit: GObject.ClassInitFunc, classFinalize: GObject.ClassFinalizeFunc, instanceSize: number, nPreallocs: number, instanceInit: GObject.InstanceInitFunc, valueTable: GObject.TypeValueTable, flags: GObject.TypeFlags): GObject.Type
function updateRegistry(): boolean
function uriConstruct(protocol: string, location: string): string
function uriGetLocation(uri: string): string
function uriGetProtocol(uri: string): string
function uriHasProtocol(uri: string, protocol: string): boolean
function uriIsValid(uri: string): boolean
function uriProtocolIsSupported(type: URIType, protocol: string): boolean
function uriProtocolIsValid(protocol: string): boolean
function utilArrayBinarySearch(array: object, numElements: number, elementSize: number, searchFunc: GLib.CompareDataFunc, mode: SearchMode, searchData: object, userData: object): object
function utilDoubleToFraction(src: number): [ /* destN */ number, /* destD */ number ]
function utilDumpMem(mem: any[], size: number): void
function utilFractionAdd(aN: number, aD: number, bN: number, bD: number): [ /* returnType */ boolean, /* resN */ number, /* resD */ number ]
function utilFractionMultiply(aN: number, aD: number, bN: number, bD: number): [ /* returnType */ boolean, /* resN */ number, /* resD */ number ]
function utilFractionToDouble(srcN: number, srcD: number): /* dest */ number
function utilGdoubleToGuint64(value: number): number
function utilGetTimestamp(): ClockTime
function utilGreatestCommonDivisor(a: number, b: number): number
function utilGuint64ToGdouble(value: number): number
function utilSeqnumCompare(s1: number, s2: number): number
function utilSeqnumNext(): number
function utilSetObjectArg(object: GObject.Object, name: string, value: string): void
function utilSetValueFromString(value: any, valueStr: string): void
function utilUint64Scale(val: number, num: number, denom: number): number
function utilUint64ScaleCeil(val: number, num: number, denom: number): number
function utilUint64ScaleInt(val: number, num: number, denom: number): number
function utilUint64ScaleIntCeil(val: number, num: number, denom: number): number
function utilUint64ScaleIntRound(val: number, num: number, denom: number): number
function utilUint64ScaleRound(val: number, num: number, denom: number): number
function valueArrayAppendValue(value: any, appendValue: any): void
function valueArrayGetSize(value: any): number
function valueArrayGetValue(value: any, index: number): any
function valueArrayPrependValue(value: any, prependValue: any): void
function valueCanCompare(value1: any, value2: any): boolean
function valueCanIntersect(value1: any, value2: any): boolean
function valueCanSubtract(minuend: any, subtrahend: any): boolean
function valueCanUnion(value1: any, value2: any): boolean
function valueCompare(value1: any, value2: any): number
function valueDeserialize(dest: any, src: string): boolean
function valueDupMiniObject(value: any): MiniObject
function valueFractionMultiply(product: any, factor1: any, factor2: any): boolean
function valueFractionSubtract(dest: any, minuend: any, subtrahend: any): boolean
function valueGetCaps(value: any): Caps
function valueGetDate(value: any): GLib.Date
function valueGetDoubleRangeMax(value: any): number
function valueGetDoubleRangeMin(value: any): number
function valueGetFourcc(value: any): number
function valueGetFractionDenominator(value: any): number
function valueGetFractionNumerator(value: any): number
function valueGetFractionRangeMax(value: any): any
function valueGetFractionRangeMin(value: any): any
function valueGetIntRangeMax(value: any): number
function valueGetIntRangeMin(value: any): number
function valueGetMiniObject(value: any): MiniObject
function valueGetStructure(value: any): Structure
function valueInitAndCopy(dest: any, src: any): void
function valueIntersect(dest: any, value1: any, value2: any): boolean
function valueIsFixed(value: any): boolean
function valueListAppendValue(value: any, appendValue: any): void
function valueListConcat(dest: any, value1: any, value2: any): void
function valueListGetSize(value: any): number
function valueListGetValue(value: any, index: number): any
function valueListPrependValue(value: any, prependValue: any): void
function valueRegister(table: ValueTable): void
function valueRegisterIntersectFunc(type1: GObject.Type, type2: GObject.Type, func: ValueIntersectFunc): void
function valueRegisterSubtractFunc(minuendType: GObject.Type, subtrahendType: GObject.Type, func: ValueSubtractFunc): void
function valueRegisterUnionFunc(type1: GObject.Type, type2: GObject.Type, func: ValueUnionFunc): void
function valueSerialize(value: any): string
function valueSetCaps(value: any, caps: Caps): void
function valueSetDate(value: any, date: GLib.Date): void
function valueSetDoubleRange(value: any, start: number, end: number): void
function valueSetFourcc(value: any, fourcc: number): void
function valueSetFraction(value: any, numerator: number, denominator: number): void
function valueSetFractionRange(value: any, start: any, end: any): void
function valueSetFractionRangeFull(value: any, numeratorStart: number, denominatorStart: number, numeratorEnd: number, denominatorEnd: number): void
function valueSetIntRange(value: any, start: number, end: number): void
function valueSetMiniObject(value: any, miniObject: MiniObject): void
function valueSetStructure(value: any, structure: Structure): void
function valueSubtract(dest: any, minuend: any, subtrahend: any): boolean
function valueTakeMiniObject(value: any, miniObject: MiniObject): void
function valueUnion(dest: any, value1: any, value2: any): boolean
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
function versionString(): string
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
    (index: Index, writer: Object, writerString: string[]): boolean
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.ChildProxy */
    getChildByName(name: string): Object
    getChildByIndex(index: number): Object
    getChildrenCount(): number
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: ((object: GObject.Object) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: ((object: GObject.Object) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    constructor (config?: ChildProxy_ConstructProps)
    _init (config?: ChildProxy_ConstructProps): void
    static $gtype: GObject.Type
}
interface ImplementsInterface_ConstructProps extends Element_ConstructProps {
}
class ImplementsInterface {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    constructor (config?: ImplementsInterface_ConstructProps)
    _init (config?: ImplementsInterface_ConstructProps): void
    static $gtype: GObject.Type
}
interface TagSetter_ConstructProps extends Element_ConstructProps {
}
class TagSetter {
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TagSetter */
    resetTags(): void
    mergeTags(list: TagList, mode: TagMergeMode): void
    addTagValue(mode: TagMergeMode, tag: string, value: any): void
    getTagList(): TagList
    setTagMergeMode(mode: TagMergeMode): void
    getTagMergeMode(): TagMergeMode
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
class URIHandler {
    /* Methods of Gst-0.10.Gst.URIHandler */
    getUriType(): number
    getProtocols(): string[]
    getUri(): string
    setUri(uri: string): boolean
    newUri(uri: string): void
    /* Signals of Gst-0.10.Gst.URIHandler */
    connect(sigName: "new-uri", callback: ((object: string) => void)): number
    on(sigName: "new-uri", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-uri", callback: (object: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-uri", callback: (object: string) => void): NodeJS.EventEmitter
    emit(sigName: "new-uri", object: string): void
    static name: string
}
interface Adapter_ConstructProps extends GObject.Object_ConstructProps {
}
class Adapter {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Adapter */
    clear(): void
    push(buf: Buffer): void
    peek(size: number): any[]
    copy(dest: any[], offset: number, size: number): void
    flush(flush: number): void
    take(nbytes: number): any[]
    takeBuffer(nbytes: number): Buffer
    available(): number
    availableFast(): number
    prevTimestamp(): [ /* returnType */ ClockTime, /* distance */ number ]
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
    maskedScanUint32Peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]
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
    enableLastBuffer?: boolean
    maxLateness?: number
    prerollQueueLen?: number
    qos?: boolean
    renderDelay?: number
    sync?: boolean
    tsOffset?: number
}
class BaseSink {
    /* Properties of Gst-0.10.Gst.BaseSink */
    async: boolean
    blocksize: number
    enableLastBuffer: boolean
    readonly lastBuffer: Buffer
    maxLateness: number
    prerollQueueLen: number
    qos: boolean
    renderDelay: number
    sync: boolean
    tsOffset: number
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSink */
    doPreroll(obj: MiniObject): FlowReturn
    waitPreroll(): FlowReturn
    setSync(sync: boolean): void
    getSync(): boolean
    setMaxLateness(maxLateness: number): void
    getMaxLateness(): number
    setQosEnabled(enabled: boolean): void
    isQosEnabled(): boolean
    setAsyncEnabled(enabled: boolean): void
    isAsyncEnabled(): boolean
    setTsOffset(offset: ClockTimeDiff): void
    getTsOffset(): ClockTimeDiff
    getLastBuffer(): Buffer
    setLastBufferEnabled(enable: boolean): void
    isLastBufferEnabled(): boolean
    queryLatency(minLatency: ClockTime, maxLatency: ClockTime): [ /* returnType */ boolean, /* live */ boolean, /* upstreamLive */ boolean ]
    getLatency(): ClockTime
    setRenderDelay(delay: ClockTime): void
    getRenderDelay(): ClockTime
    setBlocksize(blocksize: number): void
    getBlocksize(): number
    waitClock(time: ClockTime, jitter: ClockTimeDiff): ClockReturn
    waitEos(time: ClockTime, jitter: ClockTimeDiff): FlowReturn
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::preroll-queue-len", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseSink_ConstructProps)
    _init (config?: BaseSink_ConstructProps): void
    static $gtype: GObject.Type
}
interface BaseSrc_ConstructProps extends Element_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.BaseSrc */
    blocksize?: number
    doTimestamp?: boolean
    numBuffers?: number
    typefind?: boolean
}
class BaseSrc {
    /* Properties of Gst-0.10.Gst.BaseSrc */
    blocksize: number
    doTimestamp: boolean
    numBuffers: number
    typefind: boolean
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSrc */
    waitPlaying(): FlowReturn
    setLive(live: boolean): void
    isLive(): boolean
    setFormat(format: Format): void
    queryLatency(minLatency: ClockTime, maxLatency: ClockTime): [ /* returnType */ boolean, /* live */ boolean ]
    setBlocksize(blocksize: number): void
    getBlocksize(): number
    setDoTimestamp(timestamp: boolean): void
    getDoTimestamp(): boolean
    newSeamlessSegment(start: number, stop: number, position: number): boolean
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::do-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-buffers", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-buffers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseTransform */
    setPassthrough(passthrough: boolean): void
    isPassthrough(): boolean
    setInPlace(inPlace: boolean): void
    isInPlace(): boolean
    updateQos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): void
    setQosEnabled(enabled: boolean): void
    isQosEnabled(): boolean
    setGapAware(gapAware: boolean): void
    suggest(caps: Caps, size: number): void
    reconfigure(): void
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: BaseTransform_ConstructProps)
    _init (config?: BaseTransform_ConstructProps): void
    static $gtype: GObject.Type
}
interface Bin_ConstructProps extends Element_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.Bin */
    asyncHandling?: boolean
}
class Bin {
    /* Properties of Gst-0.10.Gst.Bin */
    asyncHandling: boolean
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Element): boolean
    remove(element: Element): boolean
    getByName(name: string): Element
    getByNameRecurseUp(name: string): Element
    getByInterface(iface: GObject.Type): Element
    iterateElements(): Iterator
    iterateSorted(): Iterator
    iterateRecurse(): Iterator
    iterateSinks(): Iterator
    iterateSources(): Iterator
    iterateAllByInterface(iface: GObject.Type): Iterator
    recalculateLatency(): boolean
    findUnlinkedPad(direction: PadDirection): Pad
    findUnconnectedPad(direction: PadDirection): Pad
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (() => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: ((object: Element) => void)): number
    on(sigName: "element-added", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (object: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", object: Element): void
    connect(sigName: "element-removed", callback: ((object: Element) => void)): number
    on(sigName: "element-removed", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (object: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", object: Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static new(name: string): Bin
    static $gtype: GObject.Type
}
class Buffer {
    /* Fields of Gst-0.10.Gst.MiniObject */
    readonly instance: GObject.TypeInstance
    readonly refcount: number
    readonly flags: number
    readonly gstReserved: object
    /* Methods of Gst-0.10.Gst.Buffer */
    copyMetadata(src: Buffer, flags: BufferCopyFlags): void
    isMetadataWritable(): boolean
    makeMetadataWritable(): Buffer
    getCaps(): Caps
    setCaps(caps: Caps): void
    createSub(offset: number, size: number): Buffer
    isSpanFast(buf2: Buffer): boolean
    span(offset: number, buf2: Buffer, len: number): Buffer
    merge(buf2: Buffer): Buffer
    join(buf2: Buffer): Buffer
    stamp(src: Buffer): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): boolean
    makeWritable(): MiniObject
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
    static newAndAlloc(size: number): Buffer
    static tryNewAndAlloc(size: number): Buffer
}
class BufferList {
    /* Fields of Gst-0.10.Gst.MiniObject */
    readonly instance: GObject.TypeInstance
    readonly refcount: number
    readonly flags: number
    readonly gstReserved: object
    /* Methods of Gst-0.10.Gst.BufferList */
    nGroups(): number
    foreach(func: BufferListFunc, userData: object): void
    get(group: number, idx: number): Buffer
    iterate(): BufferListIterator
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): boolean
    makeWritable(): MiniObject
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Bus */
    post(message: Message): boolean
    havePending(): boolean
    peek(): Message
    pop(): Message
    popFiltered(types: MessageType): Message
    timedPop(timeout: ClockTime): Message
    timedPopFiltered(timeout: ClockTime, types: MessageType): Message
    setFlushing(flushing: boolean): void
    setSyncHandler(func: BusSyncHandler, data: object): void
    createWatch(): GLib.Source
    addWatchFull(priority: number, func: BusFunc, userData: object): number
    addWatch(func: BusFunc, userData: object): number
    poll(events: MessageType, timeout: ClockTimeDiff): Message
    asyncSignalFunc(message: Message, data: object): boolean
    syncSignalHandler(message: Message, data: object): BusSyncReply
    addSignalWatch(): void
    addSignalWatchFull(priority: number): void
    removeSignalWatch(): void
    enableSyncMessageEmission(): void
    disableSyncMessageEmission(): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Bus */
    connect(sigName: "message", callback: ((object: Message) => void)): number
    on(sigName: "message", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message", callback: (object: Message) => void): NodeJS.EventEmitter
    emit(sigName: "message", object: Message): void
    connect(sigName: "sync-message", callback: ((object: Message) => void)): number
    on(sigName: "sync-message", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sync-message", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sync-message", callback: (object: Message) => void): NodeJS.EventEmitter
    emit(sigName: "sync-message", object: Message): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    /* Constructor properties of Gst-0.10.Gst.Clock */
    stats?: boolean
    timeout?: number
    windowSize?: number
    windowThreshold?: number
}
class Clock {
    /* Properties of Gst-0.10.Gst.Clock */
    stats: boolean
    timeout: number
    windowSize: number
    windowThreshold: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Clock */
    setResolution(resolution: ClockTime): ClockTime
    getResolution(): ClockTime
    getTime(): ClockTime
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    getCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master: Clock): boolean
    getMaster(): Clock
    addObservation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number ]
    getInternalTime(): ClockTime
    adjustUnlocked(internal: ClockTime): ClockTime
    unadjustUnlocked(external: ClockTime): ClockTime
    newSingleShotId(time: ClockTime): ClockID
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static idRef(id: ClockID): ClockID
    static idUnref(id: ClockID): void
    static idCompareFunc(id1: object, id2: object): number
    static idGetTime(id: ClockID): ClockTime
    static idWait(id: ClockID, jitter: ClockTimeDiff): ClockReturn
    static idWaitAsync(id: ClockID, func: ClockCallback): ClockReturn
    static idWaitAsyncFull(id: ClockID, func: ClockCallback): ClockReturn
    static idUnschedule(id: ClockID): void
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.CollectPads */
    setFunction(func: CollectPadsFunction, userData: object): void
    setClipFunction(clipfunc: CollectPadsClipFunction, userData: object): void
    addPad(pad: Pad, size: number): CollectData
    addPadFull(pad: Pad, size: number, destroyNotify: CollectDataDestroyNotify): CollectData
    removePad(pad: Pad): boolean
    isActive(pad: Pad): boolean
    collect(): FlowReturn
    collectRange(offset: number, length: number): FlowReturn
    start(): void
    stop(): void
    setFlushing(flushing: boolean): void
    peek(data: CollectData): Buffer
    pop(data: CollectData): Buffer
    available(): number
    read(data: CollectData, size: number): [ /* returnType */ number, /* bytes */ number ]
    readBuffer(data: CollectData, size: number): Buffer
    takeBuffer(data: CollectData, size: number): Buffer
    flush(data: CollectData, size: number): number
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    readonly currentLevelBytes: number
    readonly currentLevelTime: number
    readonly currentLevelVisible: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.DataQueue */
    push(item: DataQueueItem): boolean
    pop(item: DataQueueItem): boolean
    flush(): void
    setFlushing(flushing: boolean): void
    dropHead(type: GObject.Type): boolean
    isFull(): boolean
    isEmpty(): boolean
    getLevel(level: DataQueueSize): void
    limitsChanged(): void
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
    /* Signals of Gst-0.10.Gst.DataQueue */
    connect(sigName: "empty", callback: (() => void)): number
    on(sigName: "empty", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "empty", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "empty", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "empty"): void
    connect(sigName: "full", callback: (() => void)): number
    on(sigName: "full", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "full", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "full", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "full"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::current-level-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::current-level-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DataQueue_ConstructProps)
    _init (config?: DataQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(checkfull: DataQueueCheckFullFunction): DataQueue
    static newFull(checkfull: DataQueueCheckFullFunction, fullcallback: DataQueueFullCallback, emptycallback: DataQueueEmptyCallback): DataQueue
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static register(plugin: Plugin, name: string, rank: number, type: GObject.Type): boolean
    static makeFromUri(type: URIType, uri: string, elementname: string): Element
    static stateGetName(state: State): string
    static stateChangeReturnGetName(stateRet: StateChangeReturn): string
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
    readonly pluginName: string
    readonly gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.ElementFactory */
    getElementType(): GObject.Type
    getLongname(): string
    getKlass(): string
    getDescription(): string
    getAuthor(): string
    getNumPadTemplates(): number
    getUriType(): number
    getUriProtocols(): string[]
    hasInterface(interfacename: string): boolean
    create(name: string): Element
    canSrcCaps(caps: Caps): boolean
    canSinkCaps(caps: Caps): boolean
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    typeNameFilter(data: TypeNameData): boolean
    setRank(rank: number): void
    setName(name: string): void
    getRank(): number
    getName(): string
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static find(name: string): ElementFactory
    static make(factoryname: string, name: string): Element
    static $gtype: GObject.Type
}
class Event {
    /* Fields of Gst-0.10.Gst.MiniObject */
    readonly instance: GObject.TypeInstance
    readonly refcount: number
    readonly flags: number
    readonly gstReserved: object
    /* Methods of Gst-0.10.Gst.Event */
    getStructure(): Structure
    hasName(name: string): boolean
    getSeqnum(): number
    setSeqnum(seqnum: number): void
    parseNewSegment(format: Format): [ /* update */ boolean, /* rate */ number, /* start */ number, /* stop */ number, /* position */ number ]
    parseNewSegmentFull(format: Format): [ /* update */ boolean, /* rate */ number, /* appliedRate */ number, /* start */ number, /* stop */ number, /* position */ number ]
    parseTag(taglist: TagList): void
    parseBufferSize(format: Format): [ /* minsize */ number, /* maxsize */ number, /* async */ boolean ]
    parseQos(diff: ClockTimeDiff, timestamp: ClockTime): /* proportion */ number
    parseSeek(format: Format, flags: SeekFlags, startType: SeekType, stopType: SeekType): [ /* rate */ number, /* start */ number, /* stop */ number ]
    parseLatency(latency: ClockTime): void
    parseStep(format: Format): [ /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    parseSinkMessage(msg: Message): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): boolean
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newCustom(type: EventType, structure: Structure): Event
    static newFlushStart(): Event
    static newFlushStop(): Event
    static newEos(): Event
    static newNewSegment(update: boolean, rate: number, format: Format, start: number, stop: number, position: number): Event
    static newNewSegmentFull(update: boolean, rate: number, appliedRate: number, format: Format, start: number, stop: number, position: number): Event
    static newTag(taglist: TagList): Event
    static newBufferSize(format: Format, minsize: number, maxsize: number, async: boolean): Event
    static newQos(proportion: number, diff: ClockTimeDiff, timestamp: ClockTime): Event
    static newSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): Event
    static newNavigation(structure: Structure): Event
    static newLatency(latency: ClockTime): Event
    static newStep(format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Event
    static newSinkMessage(msg: Message): Event
    static typeGetName(type: EventType): string
    static typeToQuark(type: EventType): GLib.Quark
    static typeGetFlags(type: EventType): EventTypeFlags
}
interface GParamSpecMiniObject_ConstructProps extends GObject.Object_ConstructProps {
}
class GParamSpecMiniObject {
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
    readonly elementPrivate: object
    readonly padtemplate: PadTemplate
    readonly direction: PadDirection
    readonly streamRecLock: any
    readonly task: Task
    readonly prerollLock: GLib.Mutex
    readonly prerollCond: GLib.Cond
    readonly blockCond: GLib.Cond
    readonly blockCallback: PadBlockCallback
    readonly blockData: object
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
    readonly schedPrivate: object
    readonly chainfunc: PadChainFunction
    readonly checkgetrangefunc: PadCheckGetRangeFunction
    readonly getrangefunc: PadGetRangeFunction
    readonly eventfunc: PadEventFunction
    readonly mode: ActivateMode
    readonly querytypefunc: PadQueryTypeFunction
    readonly queryfunc: PadQueryFunction
    readonly intlinkfunc: PadIntLinkFunction
    readonly bufferallocfunc: PadBufferAllocFunction
    readonly doBufferSignals: number
    readonly doEventSignals: number
    readonly iterintlinkfunc: PadIterIntLinkFunction
    readonly blockDestroyData: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.GhostPad */
    getTarget(): Pad
    setTarget(newtarget: Pad): boolean
    construct(): boolean
    /* Methods of Gst-0.10.Gst.Pad */
    getDirection(): PadDirection
    setActive(active: boolean): boolean
    isActive(): boolean
    activatePull(active: boolean): boolean
    activatePush(active: boolean): boolean
    setBlocked(blocked: boolean): boolean
    setBlockedAsync(blocked: boolean, callback: PadBlockCallback, userData: object): boolean
    setBlockedAsyncFull(blocked: boolean, callback: PadBlockCallback, userData: object): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    setElementPrivate(priv: object): void
    getElementPrivate(): object
    getPadTemplate(): PadTemplate
    setBufferallocFunction(bufalloc: PadBufferAllocFunction): void
    allocBuffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    allocBufferAndSetCaps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    setActivateFunction(activate: PadActivateFunction): void
    setActivatepullFunction(activatepull: PadActivateModeFunction): void
    setActivatepushFunction(activatepush: PadActivateModeFunction): void
    setChainFunction(chain: PadChainFunction): void
    setChainListFunction(chainlist: PadChainListFunction): void
    setGetrangeFunction(get: PadGetRangeFunction): void
    setCheckgetrangeFunction(check: PadCheckGetRangeFunction): void
    setEventFunction(event: PadEventFunction): void
    setLinkFunction(link: PadLinkFunction): void
    setUnlinkFunction(unlink: PadUnlinkFunction): void
    canLink(sinkpad: Pad): boolean
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): boolean
    isLinked(): boolean
    getPeer(): Pad
    setGetcapsFunction(getcaps: PadGetCapsFunction): void
    setAcceptcapsFunction(acceptcaps: PadAcceptCapsFunction): void
    setFixatecapsFunction(fixatecaps: PadFixateCapsFunction): void
    setSetcapsFunction(setcaps: PadSetCapsFunction): void
    getPadTemplateCaps(): Caps
    getCapsReffed(): Caps
    getCaps(): Caps
    fixateCaps(caps: Caps): void
    acceptCaps(caps: Caps): boolean
    setCaps(caps: Caps): boolean
    peerGetCapsReffed(): Caps
    peerGetCaps(): Caps
    peerAcceptCaps(caps: Caps): boolean
    getAllowedCaps(): Caps
    getNegotiatedCaps(): Caps
    push(buffer: Buffer): FlowReturn
    pushList(list: BufferList): FlowReturn
    checkPullRange(): boolean
    pullRange(offset: number, size: number, buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    eventDefault(event: Event): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    getRange(offset: number, size: number, buffer: Buffer): FlowReturn
    sendEvent(event: Event): boolean
    startTask(func: TaskFunction, data: object): boolean
    pauseTask(): boolean
    stopTask(): boolean
    setInternalLinkFunction(intlink: PadIntLinkFunction): void
    setIterateInternalLinksFunction(iterintlink: PadIterIntLinkFunction): void
    iterateInternalLinks(): Iterator
    iterateInternalLinksDefault(): Iterator
    setQueryTypeFunction(typeFunc: PadQueryTypeFunction): void
    getQueryTypes(): QueryType
    getQueryTypesDefault(): QueryType
    query(query: Query): boolean
    peerQuery(query: Query): boolean
    setQueryFunction(query: PadQueryFunction): void
    queryDefault(query: Query): boolean
    dispatcher(dispatch: PadDispatcherFunction, data: object): boolean
    useFixedCaps(): void
    getFixedCapsFunc(): Caps
    proxyGetcaps(): Caps
    proxySetcaps(caps: Caps): boolean
    getParentElement(): Element
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryPeerPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryPeerDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryPeerConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    addDataProbe(handler: GObject.Callback, data: object): number
    addDataProbeFull(handler: GObject.Callback, data: object): number
    removeDataProbe(handlerId: number): void
    addEventProbe(handler: GObject.Callback, data: object): number
    addEventProbeFull(handler: GObject.Callback, data: object): number
    removeEventProbe(handlerId: number): void
    addBufferProbe(handler: GObject.Callback, data: object): number
    addBufferProbeFull(handler: GObject.Callback, data: object): number
    removeBufferProbe(handlerId: number): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: ((object: MiniObject) => boolean)): number
    on(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "have-data", callback: (object: MiniObject) => void): NodeJS.EventEmitter
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: ((object: Pad) => void)): number
    on(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (() => void)): number
    on(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-link", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: ((object: Pad) => void)): number
    on(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    static new(name: string, target: Pad): GhostPad
    /* Function overloads */
    static new(name: string, direction: PadDirection): GhostPad
    static newNoTarget(name: string, dir: PadDirection): GhostPad
    static newFromTemplate(name: string, target: Pad, templ: PadTemplate): GhostPad
    /* Function overloads */
    static newFromTemplate(templ: PadTemplate, name: string): GhostPad
    static newNoTargetFromTemplate(name: string, templ: PadTemplate): GhostPad
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Index */
    commit(id: number): void
    getGroup(): number
    newGroup(): number
    setGroup(groupnum: number): boolean
    setCertainty(certainty: IndexCertainty): void
    getCertainty(): IndexCertainty
    setFilter(filter: IndexFilter, userData: object): void
    setFilterFull(filter: IndexFilter, userData: object): void
    setResolver(resolver: IndexResolver, userData: object): void
    setResolverFull(resolver: IndexResolver, userData: object): void
    getWriterId(writer: Object): [ /* returnType */ boolean, /* id */ number ]
    addFormat(id: number, format: Format): IndexEntry
    addAssociationv(id: number, flags: AssocFlags, n: number, list: IndexAssociation): IndexEntry
    addObject(id: number, key: string, type: GObject.Type, object: object): IndexEntry
    addId(id: number, description: string): IndexEntry
    getAssocEntry(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number): IndexEntry
    getAssocEntryFull(id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc, userData: object): IndexEntry
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Index */
    connect(sigName: "entry-added", callback: ((object: IndexEntry) => void)): number
    on(sigName: "entry-added", callback: (object: IndexEntry) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "entry-added", callback: (object: IndexEntry) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "entry-added", callback: (object: IndexEntry) => void): NodeJS.EventEmitter
    emit(sigName: "entry-added", object: IndexEntry): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly pluginName: string
    readonly gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.IndexFactory */
    destroy(): void
    create(): Index
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    typeNameFilter(data: TypeNameData): boolean
    setRank(rank: number): void
    setName(name: string): void
    getRank(): number
    getName(): string
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    readonly gstReserved: object
    /* Methods of Gst-0.10.Gst.Message */
    getSeqnum(): number
    setSeqnum(seqnum: number): void
    parseError(gerror: GLib.Error, debug: string[]): void
    parseWarning(gerror: GLib.Error, debug: string[]): void
    parseInfo(gerror: GLib.Error, debug: string[]): void
    parseTag(tagList: TagList): void
    parseTagFull(pad: Pad, tagList: TagList): void
    parseBuffering(): /* percent */ number
    setBufferingStats(mode: BufferingMode, avgIn: number, avgOut: number, bufferingLeft: number): void
    parseBufferingStats(mode: BufferingMode): [ /* avgIn */ number, /* avgOut */ number, /* bufferingLeft */ number ]
    parseStateChanged(oldstate: State, newstate: State, pending: State): void
    parseStepDone(format: Format): [ /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean, /* duration */ number, /* eos */ boolean ]
    parseClockProvide(clock: Clock): /* ready */ boolean
    parseClockLost(clock: Clock): void
    parseNewClock(clock: Clock): void
    parseSegmentStart(format: Format): /* position */ number
    parseSegmentDone(format: Format): /* position */ number
    parseDuration(format: Format): /* duration */ number
    parseAsyncStart(): /* newBaseTime */ boolean
    parseStructureChange(type: StructureChangeType, owner: Element): /* busy */ boolean
    parseStreamStatus(type: StreamStatusType, owner: Element): void
    setStreamStatusObject(object: any): void
    getStreamStatusObject(): any
    parseRequestState(state: State): void
    parseStepStart(format: Format): [ /* active */ boolean, /* amount */ number, /* rate */ number, /* flush */ boolean, /* intermediate */ boolean ]
    setQosValues(jitter: number, proportion: number, quality: number): void
    setQosStats(format: Format, processed: number, dropped: number): void
    parseQos(): [ /* live */ boolean, /* runningTime */ number, /* streamTime */ number, /* timestamp */ number, /* duration */ number ]
    parseQosValues(): [ /* jitter */ number, /* proportion */ number, /* quality */ number ]
    parseQosStats(format: Format): [ /* processed */ number, /* dropped */ number ]
    getStructure(): Structure
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): boolean
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newEos(src: Object): Message
    static newError(src: Object, error: GLib.Error, debug: string): Message
    static newWarning(src: Object, error: GLib.Error, debug: string): Message
    static newInfo(src: Object, error: GLib.Error, debug: string): Message
    static newTag(src: Object, tagList: TagList): Message
    static newTagFull(src: Object, pad: Pad, tagList: TagList): Message
    static newBuffering(src: Object, percent: number): Message
    static newStateChanged(src: Object, oldstate: State, newstate: State, pending: State): Message
    static newStateDirty(src: Object): Message
    static newStepDone(src: Object, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean, duration: number, eos: boolean): Message
    static newClockProvide(src: Object, clock: Clock, ready: boolean): Message
    static newClockLost(src: Object, clock: Clock): Message
    static newNewClock(src: Object, clock: Clock): Message
    static newApplication(src: Object, structure: Structure): Message
    static newElement(src: Object, structure: Structure): Message
    static newSegmentStart(src: Object, format: Format, position: number): Message
    static newSegmentDone(src: Object, format: Format, position: number): Message
    static newDuration(src: Object, format: Format, duration: number): Message
    static newLatency(src: Object): Message
    static newAsyncStart(src: Object, newBaseTime: boolean): Message
    static newAsyncDone(src: Object): Message
    static newStructureChange(src: Object, type: StructureChangeType, owner: Element, busy: boolean): Message
    static newStreamStatus(src: Object, type: StreamStatusType, owner: Element): Message
    static newRequestState(src: Object, state: State): Message
    static newStepStart(src: Object, active: boolean, format: Format, amount: number, rate: number, flush: boolean, intermediate: boolean): Message
    static newQos(src: Object, live: boolean, runningTime: number, streamTime: number, timestamp: number, duration: number): Message
    static newCustom(type: MessageType, src: Object, structure: Structure): Message
    static typeGetName(type: MessageType): string
    static typeToQuark(type: MessageType): GLib.Quark
}
class MiniObject {
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): boolean
    makeWritable(): MiniObject
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static defaultDeepNotify(object: GObject.Object, orig: Object, pspec: GObject.ParamSpec, excludedProps: string[]): void
    static ref(object: object): object
    static unref(object: object): void
    static refSink(object: object): void
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pad */
    getDirection(): PadDirection
    setActive(active: boolean): boolean
    isActive(): boolean
    activatePull(active: boolean): boolean
    activatePush(active: boolean): boolean
    setBlocked(blocked: boolean): boolean
    setBlockedAsync(blocked: boolean, callback: PadBlockCallback, userData: object): boolean
    setBlockedAsyncFull(blocked: boolean, callback: PadBlockCallback, userData: object): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    setElementPrivate(priv: object): void
    getElementPrivate(): object
    getPadTemplate(): PadTemplate
    setBufferallocFunction(bufalloc: PadBufferAllocFunction): void
    allocBuffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    allocBufferAndSetCaps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    setActivateFunction(activate: PadActivateFunction): void
    setActivatepullFunction(activatepull: PadActivateModeFunction): void
    setActivatepushFunction(activatepush: PadActivateModeFunction): void
    setChainFunction(chain: PadChainFunction): void
    setChainListFunction(chainlist: PadChainListFunction): void
    setGetrangeFunction(get: PadGetRangeFunction): void
    setCheckgetrangeFunction(check: PadCheckGetRangeFunction): void
    setEventFunction(event: PadEventFunction): void
    setLinkFunction(link: PadLinkFunction): void
    setUnlinkFunction(unlink: PadUnlinkFunction): void
    canLink(sinkpad: Pad): boolean
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): boolean
    isLinked(): boolean
    getPeer(): Pad
    setGetcapsFunction(getcaps: PadGetCapsFunction): void
    setAcceptcapsFunction(acceptcaps: PadAcceptCapsFunction): void
    setFixatecapsFunction(fixatecaps: PadFixateCapsFunction): void
    setSetcapsFunction(setcaps: PadSetCapsFunction): void
    getPadTemplateCaps(): Caps
    getCapsReffed(): Caps
    getCaps(): Caps
    fixateCaps(caps: Caps): void
    acceptCaps(caps: Caps): boolean
    setCaps(caps: Caps): boolean
    peerGetCapsReffed(): Caps
    peerGetCaps(): Caps
    peerAcceptCaps(caps: Caps): boolean
    getAllowedCaps(): Caps
    getNegotiatedCaps(): Caps
    push(buffer: Buffer): FlowReturn
    pushList(list: BufferList): FlowReturn
    checkPullRange(): boolean
    pullRange(offset: number, size: number, buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    eventDefault(event: Event): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    getRange(offset: number, size: number, buffer: Buffer): FlowReturn
    sendEvent(event: Event): boolean
    startTask(func: TaskFunction, data: object): boolean
    pauseTask(): boolean
    stopTask(): boolean
    setInternalLinkFunction(intlink: PadIntLinkFunction): void
    setIterateInternalLinksFunction(iterintlink: PadIterIntLinkFunction): void
    iterateInternalLinks(): Iterator
    iterateInternalLinksDefault(): Iterator
    setQueryTypeFunction(typeFunc: PadQueryTypeFunction): void
    getQueryTypes(): QueryType
    getQueryTypesDefault(): QueryType
    query(query: Query): boolean
    peerQuery(query: Query): boolean
    setQueryFunction(query: PadQueryFunction): void
    queryDefault(query: Query): boolean
    dispatcher(dispatch: PadDispatcherFunction, data: object): boolean
    useFixedCaps(): void
    getFixedCapsFunc(): Caps
    proxyGetcaps(): Caps
    proxySetcaps(caps: Caps): boolean
    getParentElement(): Element
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryPeerPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryPeerDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryPeerConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    addDataProbe(handler: GObject.Callback, data: object): number
    addDataProbeFull(handler: GObject.Callback, data: object): number
    removeDataProbe(handlerId: number): void
    addEventProbe(handler: GObject.Callback, data: object): number
    addEventProbeFull(handler: GObject.Callback, data: object): number
    removeEventProbe(handlerId: number): void
    addBufferProbe(handler: GObject.Callback, data: object): number
    addBufferProbeFull(handler: GObject.Callback, data: object): number
    removeBufferProbe(handlerId: number): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: ((object: MiniObject) => boolean)): number
    on(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "have-data", callback: (object: MiniObject) => void): NodeJS.EventEmitter
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: ((object: Pad) => void)): number
    on(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (() => void)): number
    on(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-link", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: ((object: Pad) => void)): number
    on(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static new(name: string, direction: PadDirection): Pad
    static newFromTemplate(templ: PadTemplate, name: string): Pad
    static newFromStaticTemplate(templ: StaticPadTemplate, name: string): Pad
    static loadAndLink(self: libxml2.NodePtr, parent: Object): void
    static $gtype: GObject.Type
}
interface PadTemplate_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.PadTemplate */
    caps?: Caps
    direction?: PadDirection
    nameTemplate?: string
    presence?: PadPresence
}
class PadTemplate {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.PadTemplate */
    getCaps(): Caps
    padCreated(pad: Pad): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.PadTemplate */
    connect(sigName: "pad-created", callback: ((object: Pad) => void)): number
    on(sigName: "pad-created", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-created", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-created", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-created", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static $gtype: GObject.Type
}
interface ParamFraction_ConstructProps extends GObject.Object_ConstructProps {
}
class ParamFraction {
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
    constructor (config?: ParamFraction_ConstructProps)
    _init (config?: ParamFraction_ConstructProps): void
    static $gtype: GObject.Type
}
interface Pipeline_ConstructProps extends Bin_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.Pipeline */
    autoFlushBus?: boolean
    delay?: number
}
class Pipeline {
    /* Properties of Gst-0.10.Gst.Pipeline */
    autoFlushBus: boolean
    delay: number
    /* Properties of Gst-0.10.Gst.Bin */
    asyncHandling: boolean
    /* Fields of Gst-0.10.Gst.Bin */
    readonly element: Element
    readonly numchildren: number
    readonly children: object[]
    readonly childrenCookie: number
    readonly childBus: Bus
    readonly messages: object[]
    readonly polling: boolean
    readonly stateDirty: boolean
    readonly clockDirty: boolean
    readonly providedClock: Clock
    readonly clockProvider: Element
    readonly priv: BinPrivate
    readonly gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pipeline */
    getBus(): Bus
    setNewStreamTime(time: ClockTime): void
    getLastStreamTime(): ClockTime
    useClock(clock: Clock): void
    setClock(clock: Clock): boolean
    getClock(): Clock
    autoClock(): void
    setDelay(delay: ClockTime): void
    getDelay(): ClockTime
    setAutoFlushBus(autoFlush: boolean): void
    getAutoFlushBus(): boolean
    /* Methods of Gst-0.10.Gst.Bin */
    add(element: Element): boolean
    remove(element: Element): boolean
    getByName(name: string): Element
    getByNameRecurseUp(name: string): Element
    getByInterface(iface: GObject.Type): Element
    iterateElements(): Iterator
    iterateSorted(): Iterator
    iterateRecurse(): Iterator
    iterateSinks(): Iterator
    iterateSources(): Iterator
    iterateAllByInterface(iface: GObject.Type): Iterator
    recalculateLatency(): boolean
    findUnlinkedPad(direction: PadDirection): Pad
    findUnconnectedPad(direction: PadDirection): Pad
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Methods of Gst-0.10.Gst.ChildProxy */
    getChildByName(name: string): Object
    getChildByIndex(index: number): Object
    getChildrenCount(): number
    /* Signals of Gst-0.10.Gst.Bin */
    connect(sigName: "do-latency", callback: (() => boolean)): number
    on(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "do-latency", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "do-latency", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "do-latency"): void
    connect(sigName: "element-added", callback: ((object: Element) => void)): number
    on(sigName: "element-added", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-added", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-added", callback: (object: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-added", object: Element): void
    connect(sigName: "element-removed", callback: ((object: Element) => void)): number
    on(sigName: "element-removed", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "element-removed", callback: (object: Element) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "element-removed", callback: (object: Element) => void): NodeJS.EventEmitter
    emit(sigName: "element-removed", object: Element): void
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Gst-0.10.Gst.ChildProxy */
    connect(sigName: "child-added", callback: ((object: GObject.Object) => void)): number
    on(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-added", object: GObject.Object): void
    connect(sigName: "child-removed", callback: ((object: GObject.Object) => void)): number
    on(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: (object: GObject.Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: (object: GObject.Object) => void): NodeJS.EventEmitter
    emit(sigName: "child-removed", object: GObject.Object): void
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
    connect(sigName: "notify::async-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async-handling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Plugin */
    getName(): string
    getDescription(): string
    getFilename(): string
    getVersion(): string
    getLicense(): string
    getSource(): string
    getPackage(): string
    getOrigin(): string
    getCacheData(): Structure
    setCacheData(cacheData: Structure): void
    getModule(): GModule.Module
    isLoaded(): boolean
    nameFilter(name: string): boolean
    load(): Plugin
    addDependency(envVars: string[], paths: string[], names: string[], flags: PluginDependencyFlags): void
    addDependencySimple(envVars: string, paths: string, names: string, flags: PluginDependencyFlags): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static registerStatic(majorVersion: number, minorVersion: number, name: string, description: string, initFunc: PluginInitFunc, version: string, license: string, source: string, package: string, origin: string): boolean
    static registerStaticFull(majorVersion: number, minorVersion: number, name: string, description: string, initFullFunc: PluginInitFullFunc, version: string, license: string, source: string, package: string, origin: string, userData: object): boolean
    static loadFile(filename: string): Plugin
    static loadByName(name: string): Plugin
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    typeNameFilter(data: TypeNameData): boolean
    setRank(rank: number): void
    setName(name: string): void
    getRank(): number
    getName(): string
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static $gtype: GObject.Type
}
interface ProxyPad_ConstructProps extends Pad_ConstructProps {
}
class ProxyPad {
    /* Properties of Gst-0.10.Gst.Pad */
    template: PadTemplate
    /* Fields of Gst-0.10.Gst.Pad */
    readonly object: Object
    readonly elementPrivate: object
    readonly padtemplate: PadTemplate
    readonly direction: PadDirection
    readonly streamRecLock: any
    readonly task: Task
    readonly prerollLock: GLib.Mutex
    readonly prerollCond: GLib.Cond
    readonly blockCond: GLib.Cond
    readonly blockCallback: PadBlockCallback
    readonly blockData: object
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
    readonly schedPrivate: object
    readonly chainfunc: PadChainFunction
    readonly checkgetrangefunc: PadCheckGetRangeFunction
    readonly getrangefunc: PadGetRangeFunction
    readonly eventfunc: PadEventFunction
    readonly mode: ActivateMode
    readonly querytypefunc: PadQueryTypeFunction
    readonly queryfunc: PadQueryFunction
    readonly intlinkfunc: PadIntLinkFunction
    readonly bufferallocfunc: PadBufferAllocFunction
    readonly doBufferSignals: number
    readonly doEventSignals: number
    readonly iterintlinkfunc: PadIterIntLinkFunction
    readonly blockDestroyData: GLib.DestroyNotify
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Pad */
    getDirection(): PadDirection
    setActive(active: boolean): boolean
    isActive(): boolean
    activatePull(active: boolean): boolean
    activatePush(active: boolean): boolean
    setBlocked(blocked: boolean): boolean
    setBlockedAsync(blocked: boolean, callback: PadBlockCallback, userData: object): boolean
    setBlockedAsyncFull(blocked: boolean, callback: PadBlockCallback, userData: object): boolean
    isBlocked(): boolean
    isBlocking(): boolean
    setElementPrivate(priv: object): void
    getElementPrivate(): object
    getPadTemplate(): PadTemplate
    setBufferallocFunction(bufalloc: PadBufferAllocFunction): void
    allocBuffer(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    allocBufferAndSetCaps(offset: number, size: number, caps: Caps, buf: Buffer): FlowReturn
    setActivateFunction(activate: PadActivateFunction): void
    setActivatepullFunction(activatepull: PadActivateModeFunction): void
    setActivatepushFunction(activatepush: PadActivateModeFunction): void
    setChainFunction(chain: PadChainFunction): void
    setChainListFunction(chainlist: PadChainListFunction): void
    setGetrangeFunction(get: PadGetRangeFunction): void
    setCheckgetrangeFunction(check: PadCheckGetRangeFunction): void
    setEventFunction(event: PadEventFunction): void
    setLinkFunction(link: PadLinkFunction): void
    setUnlinkFunction(unlink: PadUnlinkFunction): void
    canLink(sinkpad: Pad): boolean
    link(sinkpad: Pad): PadLinkReturn
    linkFull(sinkpad: Pad, flags: PadLinkCheck): PadLinkReturn
    unlink(sinkpad: Pad): boolean
    isLinked(): boolean
    getPeer(): Pad
    setGetcapsFunction(getcaps: PadGetCapsFunction): void
    setAcceptcapsFunction(acceptcaps: PadAcceptCapsFunction): void
    setFixatecapsFunction(fixatecaps: PadFixateCapsFunction): void
    setSetcapsFunction(setcaps: PadSetCapsFunction): void
    getPadTemplateCaps(): Caps
    getCapsReffed(): Caps
    getCaps(): Caps
    fixateCaps(caps: Caps): void
    acceptCaps(caps: Caps): boolean
    setCaps(caps: Caps): boolean
    peerGetCapsReffed(): Caps
    peerGetCaps(): Caps
    peerAcceptCaps(caps: Caps): boolean
    getAllowedCaps(): Caps
    getNegotiatedCaps(): Caps
    push(buffer: Buffer): FlowReturn
    pushList(list: BufferList): FlowReturn
    checkPullRange(): boolean
    pullRange(offset: number, size: number, buffer: Buffer): FlowReturn
    pushEvent(event: Event): boolean
    eventDefault(event: Event): boolean
    chain(buffer: Buffer): FlowReturn
    chainList(list: BufferList): FlowReturn
    getRange(offset: number, size: number, buffer: Buffer): FlowReturn
    sendEvent(event: Event): boolean
    startTask(func: TaskFunction, data: object): boolean
    pauseTask(): boolean
    stopTask(): boolean
    setInternalLinkFunction(intlink: PadIntLinkFunction): void
    setIterateInternalLinksFunction(iterintlink: PadIterIntLinkFunction): void
    iterateInternalLinks(): Iterator
    iterateInternalLinksDefault(): Iterator
    setQueryTypeFunction(typeFunc: PadQueryTypeFunction): void
    getQueryTypes(): QueryType
    getQueryTypesDefault(): QueryType
    query(query: Query): boolean
    peerQuery(query: Query): boolean
    setQueryFunction(query: PadQueryFunction): void
    queryDefault(query: Query): boolean
    dispatcher(dispatch: PadDispatcherFunction, data: object): boolean
    useFixedCaps(): void
    getFixedCapsFunc(): Caps
    proxyGetcaps(): Caps
    proxySetcaps(caps: Caps): boolean
    getParentElement(): Element
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    queryPeerPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryPeerDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryPeerConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    addDataProbe(handler: GObject.Callback, data: object): number
    addDataProbeFull(handler: GObject.Callback, data: object): number
    removeDataProbe(handlerId: number): void
    addEventProbe(handler: GObject.Callback, data: object): number
    addEventProbeFull(handler: GObject.Callback, data: object): number
    removeEventProbe(handlerId: number): void
    addBufferProbe(handler: GObject.Callback, data: object): number
    addBufferProbeFull(handler: GObject.Callback, data: object): number
    removeBufferProbe(handlerId: number): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Pad */
    connect(sigName: "have-data", callback: ((object: MiniObject) => boolean)): number
    on(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "have-data", callback: (object: MiniObject) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "have-data", callback: (object: MiniObject) => void): NodeJS.EventEmitter
    emit(sigName: "have-data", object: MiniObject): void
    connect(sigName: "linked", callback: ((object: Pad) => void)): number
    on(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", object: Pad): void
    connect(sigName: "request-link", callback: (() => void)): number
    on(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-link", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-link", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "request-link"): void
    connect(sigName: "unlinked", callback: ((object: Pad) => void)): number
    on(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
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
    static $gtype: GObject.Type
}
interface PushSrc_ConstructProps extends BaseSrc_ConstructProps {
}
class PushSrc {
    /* Properties of Gst-0.10.Gst.BaseSrc */
    doTimestamp: boolean
    typefind: boolean
    /* Fields of Gst-0.10.Gst.BaseSrc */
    readonly element: Element
    readonly srcpad: Pad
    readonly liveLock: GLib.Mutex
    readonly liveCond: GLib.Cond
    readonly isLive: boolean
    readonly liveRunning: boolean
    readonly blocksize: number
    readonly canActivatePush: boolean
    readonly padMode: ActivateMode
    readonly seekable: boolean
    readonly randomAccess: boolean
    readonly clockId: ClockID
    readonly endTime: ClockTime
    readonly segment: Segment
    readonly needNewsegment: boolean
    readonly offset: number
    readonly size: number
    readonly numBuffers: number
    readonly numBuffersLeft: number
    readonly priv: BaseSrcPrivate
    /* Fields of Gst-0.10.Gst.Element */
    readonly object: Object
    readonly stateLock: any
    readonly stateCond: GLib.Cond
    readonly stateCookie: number
    readonly currentState: State
    readonly nextState: State
    readonly pendingState: State
    readonly lastReturn: StateChangeReturn
    readonly bus: Bus
    readonly clock: Clock
    readonly baseTime: ClockTimeDiff
    readonly numpads: number
    readonly pads: object[]
    readonly numsrcpads: number
    readonly srcpads: object[]
    readonly numsinkpads: number
    readonly sinkpads: object[]
    readonly padsCookie: number
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.BaseSrc */
    waitPlaying(): FlowReturn
    setLive(live: boolean): void
    setFormat(format: Format): void
    queryLatency(minLatency: ClockTime, maxLatency: ClockTime): [ /* returnType */ boolean, /* live */ boolean ]
    setBlocksize(blocksize: number): void
    getBlocksize(): number
    setDoTimestamp(timestamp: boolean): void
    getDoTimestamp(): boolean
    newSeamlessSegment(start: number, stop: number, position: number): boolean
    /* Methods of Gst-0.10.Gst.Element */
    requiresClock(): boolean
    providesClock(): boolean
    provideClock(): Clock
    getClock(): Clock
    setClock(clock: Clock): boolean
    setBaseTime(time: ClockTime): void
    getBaseTime(): ClockTime
    setStartTime(time: ClockTime): void
    getStartTime(): ClockTime
    isIndexable(): boolean
    setIndex(index: Index): void
    getIndex(): Index
    setBus(bus: Bus): void
    getBus(): Bus
    addPad(pad: Pad): boolean
    removePad(pad: Pad): boolean
    noMorePads(): void
    getPad(name: string): Pad
    getStaticPad(name: string): Pad
    getRequestPad(name: string): Pad
    releaseRequestPad(pad: Pad): void
    iteratePads(): Iterator
    iterateSrcPads(): Iterator
    iterateSinkPads(): Iterator
    sendEvent(event: Event): boolean
    seek(rate: number, format: Format, flags: SeekFlags, curType: SeekType, cur: number, stopType: SeekType, stop: number): boolean
    getQueryTypes(): QueryType
    query(query: Query): boolean
    postMessage(message: Message): boolean
    messageFull(type: MessageType, domain: GLib.Quark, code: number, text: string, debug: string, file: string, function_: string, line: number): void
    isLockedState(): boolean
    setLockedState(lockedState: boolean): boolean
    syncStateWithParent(): boolean
    getState(timeout: ClockTime): [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    setState(state: State): StateChangeReturn
    abortState(): void
    changeState(transition: StateChange): StateChangeReturn
    continueState(ret: StateChangeReturn): StateChangeReturn
    lostState(): void
    lostStateFull(newBaseTime: boolean): void
    getFactory(): ElementFactory
    implementsInterface(ifaceType: GObject.Type): boolean
    createAllPads(): void
    getCompatiblePad(pad: Pad, caps: Caps): Pad
    getCompatiblePadTemplate(compattempl: PadTemplate): PadTemplate
    link(dest: Element): boolean
    linkFiltered(dest: Element, filter: Caps): boolean
    unlink(dest: Element): void
    linkPads(srcpadname: string, dest: Element, destpadname: string): boolean
    linkPadsFull(srcpadname: string, dest: Element, destpadname: string, flags: PadLinkCheck): boolean
    unlinkPads(srcpadname: string, dest: Element, destpadname: string): void
    linkPadsFiltered(srcpadname: string, dest: Element, destpadname: string, filter: Caps): boolean
    seekSimple(format: Format, seekFlags: SeekFlags, seekPos: number): boolean
    queryPosition(format: Format): [ /* returnType */ boolean, /* cur */ number ]
    queryDuration(format: Format): [ /* returnType */ boolean, /* duration */ number ]
    queryConvert(srcFormat: Format, srcVal: number, destFormat: Format): [ /* returnType */ boolean, /* destVal */ number ]
    foundTagsForPad(pad: Pad, list: TagList): void
    foundTags(list: TagList): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Element */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    connect(sigName: "pad-added", callback: ((object: Pad) => void)): number
    on(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", object: Pad): void
    connect(sigName: "pad-removed", callback: ((object: Pad) => void)): number
    on(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (object: Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (object: Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", object: Pad): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::do-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::typefind", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly gstReserved: object
    /* Methods of Gst-0.10.Gst.Query */
    setPosition(format: Format, cur: number): void
    parsePosition(format: Format): /* cur */ number
    setDuration(format: Format, duration: number): void
    parseDuration(format: Format): /* duration */ number
    setLatency(live: boolean, minLatency: ClockTime, maxLatency: ClockTime): void
    parseLatency(minLatency: ClockTime, maxLatency: ClockTime): /* live */ boolean
    setConvert(srcFormat: Format, srcValue: number, destFormat: Format, destValue: number): void
    parseConvert(srcFormat: Format, destFormat: Format): [ /* srcValue */ number, /* destValue */ number ]
    setSegment(rate: number, format: Format, startValue: number, stopValue: number): void
    parseSegment(format: Format): [ /* rate */ number, /* startValue */ number, /* stopValue */ number ]
    getStructure(): Structure
    setSeeking(format: Format, seekable: boolean, segmentStart: number, segmentEnd: number): void
    parseSeeking(format: Format): [ /* seekable */ boolean, /* segmentStart */ number, /* segmentEnd */ number ]
    setFormatsv(nFormats: number, formats: Format): void
    parseFormatsLength(): /* nFormats */ number
    parseFormatsNth(nth: number, format: Format): void
    setBufferingPercent(busy: boolean, percent: number): void
    parseBufferingPercent(): [ /* busy */ boolean, /* percent */ number ]
    setBufferingStats(mode: BufferingMode, avgIn: number, avgOut: number, bufferingLeft: number): void
    parseBufferingStats(mode: BufferingMode): [ /* avgIn */ number, /* avgOut */ number, /* bufferingLeft */ number ]
    setBufferingRange(format: Format, start: number, stop: number, estimatedTotal: number): void
    parseBufferingRange(format: Format): [ /* start */ number, /* stop */ number, /* estimatedTotal */ number ]
    parseUri(uri: string[]): void
    setUri(uri: string): void
    /* Methods of Gst-0.10.Gst.MiniObject */
    copy(): MiniObject
    isWritable(): boolean
    makeWritable(): MiniObject
    ref(): MiniObject
    unref(): void
    replace(newdata: MiniObject): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newPosition(format: Format): Query
    static newDuration(format: Format): Query
    static newLatency(): Query
    static newConvert(srcFormat: Format, value: number, destFormat: Format): Query
    static newSegment(format: Format): Query
    static newApplication(type: QueryType, structure: Structure): Query
    static newSeeking(format: Format): Query
    static newFormats(): Query
    static newBuffering(format: Format): Query
    static newUri(): Query
    static typeGetName(query: QueryType): string
    static typeToQuark(query: QueryType): GLib.Quark
    static typeRegister(nick: string, description: string): QueryType
    static typeGetByNick(nick: string): QueryType
    static typesContains(types: QueryType, type: QueryType): boolean
    static typeGetDetails(type: QueryType): QueryTypeDefinition
    static typeIterateDefinitions(): Iterator
}
interface Registry_ConstructProps extends Object_ConstructProps {
}
class Registry {
    /* Fields of Gst-0.10.Gst.Object */
    readonly object: GObject.Object
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Registry */
    scanPath(path: string): boolean
    addPath(path: string): void
    addPlugin(plugin: Plugin): boolean
    removePlugin(plugin: Plugin): void
    addFeature(feature: PluginFeature): boolean
    removeFeature(feature: PluginFeature): void
    getFeatureListCookie(): number
    findPlugin(name: string): Plugin
    findFeature(name: string, type: GObject.Type): PluginFeature
    lookup(filename: string): Plugin
    lookupFeature(name: string): PluginFeature
    xmlReadCache(location: string): boolean
    xmlWriteCache(location: string): boolean
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Registry */
    connect(sigName: "feature-added", callback: ((object: object) => void)): number
    on(sigName: "feature-added", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "feature-added", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "feature-added", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "feature-added", object: object): void
    connect(sigName: "plugin-added", callback: ((object: object) => void)): number
    on(sigName: "plugin-added", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "plugin-added", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "plugin-added", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "plugin-added", object: object): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static getDefault(): Registry
    static forkIsEnabled(): boolean
    static forkSetEnabled(enabled: boolean): void
    static $gtype: GObject.Type
}
interface SystemClock_ConstructProps extends Clock_ConstructProps {
    /* Constructor properties of Gst-0.10.Gst.SystemClock */
    clockType?: ClockType
}
class SystemClock {
    /* Properties of Gst-0.10.Gst.SystemClock */
    clockType: ClockType
    /* Fields of Gst-0.10.Gst.Clock */
    readonly object: Object
    readonly slaveLock: GLib.Mutex
    readonly internalCalibration: ClockTime
    readonly externalCalibration: ClockTime
    readonly rateNumerator: ClockTime
    readonly rateDenominator: ClockTime
    readonly lastTime: ClockTime
    readonly entries: object[]
    readonly entriesChanged: GLib.Cond
    readonly resolution: ClockTime
    readonly stats: boolean
    readonly master: Clock
    readonly filling: boolean
    readonly windowSize: number
    readonly windowThreshold: number
    readonly timeIndex: number
    readonly timeout: ClockTime
    readonly times: ClockTime
    readonly clockid: ClockID
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly name: string
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Clock */
    setResolution(resolution: ClockTime): ClockTime
    getResolution(): ClockTime
    getTime(): ClockTime
    setCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    getCalibration(internal: ClockTime, external: ClockTime, rateNum: ClockTime, rateDenom: ClockTime): void
    setMaster(master: Clock): boolean
    getMaster(): Clock
    addObservation(slave: ClockTime, master: ClockTime): [ /* returnType */ boolean, /* rSquared */ number ]
    getInternalTime(): ClockTime
    adjustUnlocked(internal: ClockTime): ClockTime
    unadjustUnlocked(external: ClockTime): ClockTime
    newSingleShotId(time: ClockTime): ClockID
    newPeriodicId(startTime: ClockTime, interval: ClockTime): ClockID
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.Task */
    setLock(mutex: any): void
    setPriority(priority: any): void
    getPool(): TaskPool
    setPool(pool: TaskPool): void
    setThreadCallbacks(callbacks: TaskThreadCallbacks, userData: object, notify: GLib.DestroyNotify): void
    getState(): TaskState
    setState(state: TaskState): boolean
    start(): boolean
    stop(): boolean
    pause(): boolean
    join(): boolean
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    static cleanupAll(): void
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TaskPool */
    prepare(): void
    push(func: TaskPoolFunction, userData: object): object
    join(id: object): void
    cleanup(): void
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
interface TypeFindFactory_ConstructProps extends PluginFeature_ConstructProps {
}
class TypeFindFactory {
    /* Fields of Gst-0.10.Gst.PluginFeature */
    readonly object: Object
    readonly loaded: boolean
    readonly name: string
    readonly rank: number
    readonly pluginName: string
    readonly gstReserved: any[]
    /* Fields of Gst-0.10.Gst.Object */
    readonly refcount: number
    readonly lock: GLib.Mutex
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.TypeFindFactory */
    getExtensions(): string[]
    getCaps(): Caps
    callFunction(find: TypeFind): void
    /* Methods of Gst-0.10.Gst.PluginFeature */
    load(): PluginFeature
    typeNameFilter(data: TypeNameData): boolean
    setRank(rank: number): void
    setName(name: string): void
    getRank(): number
    getName(): string
    checkVersion(minMajor: number, minMinor: number, minMicro: number): boolean
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    readonly namePrefix: string
    readonly parent: Object
    readonly flags: number
    readonly gstReserved: object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-0.10.Gst.XML */
    parseDoc(doc: libxml2.DocPtr, root: any[]): boolean
    parseFile(fname: any[], root: any[]): boolean
    parseMemory(buffer: any[], size: number, root: string): boolean
    getElement(name: any[]): Element
    /* Methods of Gst-0.10.Gst.Object */
    setName(name: string): boolean
    getName(): string
    setNamePrefix(namePrefix: string): void
    getNamePrefix(): string
    setParent(parent: Object): boolean
    getParent(): Object
    unparent(): void
    hasAncestor(ancestor: Object): boolean
    replace(newobj: Object): void
    getPathString(): string
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    restoreThyself(self: libxml2.NodePtr): void
    defaultError(error: GLib.Error, debug: string): void
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
    /* Signals of Gst-0.10.Gst.XML */
    connect(sigName: "object-loaded", callback: ((object: Object, p0: object) => void)): number
    on(sigName: "object-loaded", callback: (object: Object, p0: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-loaded", callback: (object: Object, p0: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-loaded", callback: (object: Object, p0: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-loaded", object: Object, p0: object): void
    /* Signals of Gst-0.10.Gst.Object */
    connect(sigName: "deep-notify", callback: ((object: Object, p0: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (object: Object, p0: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", object: Object, p0: GObject.ParamSpec): void
    connect(sigName: "object-saved", callback: ((object: object) => void)): number
    on(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-saved", callback: (object: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-saved", callback: (object: object) => void): NodeJS.EventEmitter
    emit(sigName: "object-saved", object: object): void
    connect(sigName: "parent-set", callback: ((object: Object) => void)): number
    on(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", object: Object): void
    connect(sigName: "parent-unset", callback: ((object: Object) => void)): number
    on(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-unset", callback: (object: Object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-unset", callback: (object: Object) => void): NodeJS.EventEmitter
    emit(sigName: "parent-unset", object: Object): void
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
    constructor (config?: XML_ConstructProps)
    _init (config?: XML_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): XML
    static write(element: Element): libxml2.DocPtr
    static makeElement(cur: libxml2.NodePtr, parent: Object): Element
    static $gtype: GObject.Type
}
abstract class AdapterClass {
    /* Fields of Gst-0.10.Gst.AdapterClass */
    readonly parentClass: GObject.ObjectClass
    readonly gstReserved: any[]
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
    readonly memLive: object[]
    /* Methods of Gst-0.10.Gst.AllocTrace */
    print(): void
    setFlags(flags: AllocTraceFlags): void
    static name: string
}
abstract class BaseSinkClass {
    /* Fields of Gst-0.10.Gst.BaseSinkClass */
    readonly parentClass: ElementClass
    readonly getCaps: (sink: BaseSink) => Caps
    readonly setCaps: (sink: BaseSink, caps: Caps) => boolean
    readonly bufferAlloc: (sink: BaseSink, offset: number, size: number, caps: Caps, buf: Buffer) => FlowReturn
    readonly getTimes: (sink: BaseSink, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    readonly start: (sink: BaseSink) => boolean
    readonly stop: (sink: BaseSink) => boolean
    readonly unlock: (sink: BaseSink) => boolean
    readonly event: (sink: BaseSink, event: Event) => boolean
    readonly preroll: (sink: BaseSink, buffer: Buffer) => FlowReturn
    readonly render: (sink: BaseSink, buffer: Buffer) => FlowReturn
    readonly asyncPlay: (sink: BaseSink) => StateChangeReturn
    readonly activatePull: (sink: BaseSink, active: boolean) => boolean
    readonly fixate: (sink: BaseSink, caps: Caps) => void
    readonly unlockStop: (sink: BaseSink) => boolean
    readonly renderList: (sink: BaseSink, bufferList: BufferList) => FlowReturn
    readonly gstReserved: any[]
    static name: string
}
class BaseSinkPrivate {
    static name: string
}
abstract class BaseSrcClass {
    /* Fields of Gst-0.10.Gst.BaseSrcClass */
    readonly parentClass: ElementClass
    readonly getCaps: (src: BaseSrc) => Caps
    readonly setCaps: (src: BaseSrc, caps: Caps) => boolean
    readonly negotiate: (src: BaseSrc) => boolean
    readonly newsegment: (src: BaseSrc) => boolean
    readonly start: (src: BaseSrc) => boolean
    readonly stop: (src: BaseSrc) => boolean
    readonly getTimes: (src: BaseSrc, buffer: Buffer, start: ClockTime, end: ClockTime) => void
    readonly getSize: (src: BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    readonly isSeekable: (src: BaseSrc) => boolean
    readonly unlock: (src: BaseSrc) => boolean
    readonly event: (src: BaseSrc, event: Event) => boolean
    readonly create: (src: BaseSrc, offset: number, size: number, buf: Buffer) => FlowReturn
    readonly doSeek: (src: BaseSrc, segment: Segment) => boolean
    readonly query: (src: BaseSrc, query: Query) => boolean
    readonly checkGetRange: (src: BaseSrc) => boolean
    readonly fixate: (src: BaseSrc, caps: Caps) => void
    readonly unlockStop: (src: BaseSrc) => boolean
    readonly prepareSeekSegment: (src: BaseSrc, seek: Event, segment: Segment) => boolean
    readonly gstReserved: any[]
    static name: string
}
class BaseSrcPrivate {
    static name: string
}
abstract class BaseTransformClass {
    /* Fields of Gst-0.10.Gst.BaseTransformClass */
    readonly parentClass: ElementClass
    readonly transformCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => Caps
    readonly fixateCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps, othercaps: Caps) => void
    readonly transformSize: (trans: BaseTransform, direction: PadDirection, caps: Caps, size: number, othercaps: Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    readonly getUnitSize: (trans: BaseTransform, caps: Caps) => [ /* returnType */ boolean, /* size */ number ]
    readonly setCaps: (trans: BaseTransform, incaps: Caps, outcaps: Caps) => boolean
    readonly start: (trans: BaseTransform) => boolean
    readonly stop: (trans: BaseTransform) => boolean
    readonly event: (trans: BaseTransform, event: Event) => boolean
    readonly transform: (trans: BaseTransform, inbuf: Buffer, outbuf: Buffer) => FlowReturn
    readonly transformIp: (trans: BaseTransform, buf: Buffer) => FlowReturn
    readonly passthroughOnSameCaps: boolean
    readonly prepareOutputBuffer: (trans: BaseTransform, input: Buffer, size: number, caps: Caps, buf: Buffer) => FlowReturn
    readonly srcEvent: (trans: BaseTransform, event: Event) => boolean
    readonly beforeTransform: (trans: BaseTransform, buffer: Buffer) => void
    readonly acceptCaps: (trans: BaseTransform, direction: PadDirection, caps: Caps) => boolean
    readonly gstReserved: any[]
    static name: string
}
class BaseTransformPrivate {
    static name: string
}
abstract class BinClass {
    /* Fields of Gst-0.10.Gst.BinClass */
    readonly parentClass: ElementClass
    readonly pool: GLib.ThreadPool
    readonly elementAdded: (bin: Bin, child: Element) => void
    readonly elementRemoved: (bin: Bin, child: Element) => void
    readonly addElement: (bin: Bin, element: Element) => boolean
    readonly removeElement: (bin: Bin, element: Element) => boolean
    readonly handleMessage: (bin: Bin, message: Message) => void
    readonly doLatency: (bin: Bin) => boolean
    readonly gstReserved: any[]
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
    initFromBuffer(buffer: Buffer): void
    setPos(pos: number): boolean
    getPos(): number
    getRemaining(): number
    getSize(): number
    skip(nbits: number): boolean
    skipToByte(): boolean
    getBitsUint8(val: any[], nbits: number): boolean
    getBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint8(val: any[], nbits: number): boolean
    peekBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    static name: string
    static new(data: any[], size: number): BitReader
    constructor(data: any[], size: number)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: number): BitReader
    static newFromBuffer(buffer: Buffer): BitReader
}
abstract class BufferClass {
    /* Fields of Gst-0.10.Gst.BufferClass */
    readonly miniObjectClass: MiniObjectClass
    static name: string
}
abstract class BufferListClass {
    static name: string
}
class BufferListIterator {
    /* Methods of Gst-0.10.Gst.BufferListIterator */
    free(): void
    nBuffers(): number
    next(): Buffer
    nextGroup(): boolean
    add(buffer: Buffer): void
    addGroup(): void
    remove(): void
    steal(): Buffer
    take(buffer: Buffer): void
    do(doFunc: BufferListDoFunction, userData: object): Buffer
    mergeGroup(): Buffer
    static name: string
}
abstract class BusClass {
    /* Fields of Gst-0.10.Gst.BusClass */
    readonly parentClass: ObjectClass
    readonly message: (bus: Bus, message: Message) => void
    readonly syncMessage: (bus: Bus, message: Message) => void
    readonly gstReserved: any[]
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
    initFromBuffer(buffer: Buffer): void
    setPos(pos: number): boolean
    getPos(): number
    getRemaining(): number
    getSize(): number
    skip(nbytes: number): boolean
    getUint8(val: any[]): boolean
    getInt8(): [ /* returnType */ boolean, /* val */ number ]
    getUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint8(val: any[]): boolean
    peekInt8(): [ /* returnType */ boolean, /* val */ number ]
    peekUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    getFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    getFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    getFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    getFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    dupData(size: number): [ /* returnType */ boolean, /* val */ number ]
    getData(size: number): [ /* returnType */ boolean, /* val */ number ]
    peekData(size: number): [ /* returnType */ boolean, /* val */ number ]
    dupStringUtf8(str: string[]): boolean
    dupStringUtf16(): [ /* returnType */ boolean, /* str */ any ]
    dupStringUtf32(): [ /* returnType */ boolean, /* str */ any ]
    skipStringUtf8(): boolean
    skipStringUtf16(): boolean
    skipStringUtf32(): boolean
    getStringUtf8(str: string[]): boolean
    peekStringUtf8(str: string[]): boolean
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
    static name: string
    static new(data: any[], size: number): ByteReader
    constructor(data: any[], size: number)
    /* Static methods and pseudo-constructors */
    static new(data: any[], size: number): ByteReader
    static newFromBuffer(buffer: Buffer): ByteReader
}
class ByteWriter {
    /* Fields of Gst-0.10.Gst.ByteWriter */
    readonly parent: ByteReader
    readonly allocSize: number
    readonly fixed: boolean
    readonly owned: boolean
    /* Methods of Gst-0.10.Gst.ByteWriter */
    init(): void
    initWithSize(size: number, fixed: boolean): void
    initWithData(data: any[], size: number, initialized: boolean): void
    initWithBuffer(buffer: Buffer, initialized: boolean): void
    free(): void
    freeAndGetData(): any[]
    freeAndGetBuffer(): Buffer
    reset(): void
    resetAndGetData(): any[]
    resetAndGetBuffer(): Buffer
    getRemaining(): number
    ensureFreeSpace(size: number): boolean
    putUint8(val: number): boolean
    putInt8(val: number): boolean
    putUint16Be(val: number): boolean
    putUint16Le(val: number): boolean
    putInt16Be(val: number): boolean
    putInt16Le(val: number): boolean
    putUint24Be(val: number): boolean
    putUint24Le(val: number): boolean
    putInt24Be(val: number): boolean
    putInt24Le(val: number): boolean
    putUint32Be(val: number): boolean
    putUint32Le(val: number): boolean
    putInt32Be(val: number): boolean
    putInt32Le(val: number): boolean
    putUint64Be(val: number): boolean
    putUint64Le(val: number): boolean
    putInt64Be(val: number): boolean
    putInt64Le(val: number): boolean
    putFloat32Be(val: number): boolean
    putFloat32Le(val: number): boolean
    putFloat64Be(val: number): boolean
    putFloat64Le(val: number): boolean
    putData(data: any[], size: number): boolean
    fill(value: number, size: number): boolean
    putStringUtf8(data: string): boolean
    putStringUtf16(): [ /* returnType */ boolean, /* data */ number ]
    putStringUtf32(): [ /* returnType */ boolean, /* data */ number ]
    static name: string
    static new(): ByteWriter
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ByteWriter
    static newWithSize(size: number, fixed: boolean): ByteWriter
    static newWithData(data: any[], size: number, initialized: boolean): ByteWriter
    static newWithBuffer(buffer: Buffer, initialized: boolean): ByteWriter
}
class Caps {
    /* Fields of Gst-0.10.Gst.Caps */
    readonly type: GObject.Type
    readonly refcount: number
    readonly flags: CapsFlags
    readonly structs: GLib.PtrArray
    readonly gstReserved: any[]
    /* Methods of Gst-0.10.Gst.Caps */
    ref(): Caps
    copy(): Caps
    makeWritable(): Caps
    unref(): void
    append(caps2: Caps): void
    merge(caps2: Caps): void
    appendStructure(structure: Structure): void
    removeStructure(idx: number): void
    mergeStructure(structure: Structure): void
    getSize(): number
    getStructure(index: number): Structure
    stealStructure(index: number): Structure
    copyNth(nth: number): Caps
    truncate(): void
    setValue(field: string, value: any): void
    isAny(): boolean
    isEmpty(): boolean
    isFixed(): boolean
    isAlwaysCompatible(caps2: Caps): boolean
    isSubset(superset: Caps): boolean
    isEqual(caps2: Caps): boolean
    isEqualFixed(caps2: Caps): boolean
    canIntersect(caps2: Caps): boolean
    intersect(caps2: Caps): Caps
    subtract(subtrahend: Caps): Caps
    union(caps2: Caps): Caps
    normalize(): Caps
    doSimplify(): boolean
    saveThyself(parent: libxml2.NodePtr): libxml2.NodePtr
    replace(newcaps: Caps): void
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    static newEmpty(): Caps
    static newAny(): Caps
}
abstract class ChildProxyInterface {
    /* Fields of Gst-0.10.Gst.ChildProxyInterface */
    readonly parent: GObject.TypeInterface
    readonly getChildByIndex: (parent: ChildProxy, index: number) => Object
    readonly getChildrenCount: (parent: ChildProxy) => number
    readonly childAdded: (parent: ChildProxy, child: Object) => void
    readonly childRemoved: (parent: ChildProxy, child: Object) => void
    readonly gstReserved: any[]
    static name: string
}
abstract class ClockClass {
    /* Fields of Gst-0.10.Gst.ClockClass */
    readonly parentClass: ObjectClass
    readonly changeResolution: (clock: Clock, oldResolution: ClockTime, newResolution: ClockTime) => ClockTime
    readonly getResolution: (clock: Clock) => ClockTime
    readonly getInternalTime: (clock: Clock) => ClockTime
    readonly wait: (clock: Clock, entry: ClockEntry) => ClockReturn
    readonly waitAsync: (clock: Clock, entry: ClockEntry) => ClockReturn
    readonly unschedule: (clock: Clock, entry: ClockEntry) => void
    readonly waitJitter: (clock: Clock, entry: ClockEntry, jitter: ClockTimeDiff) => ClockReturn
    readonly gstReserved: any[]
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
    readonly userData: object
    readonly destroyData: GLib.DestroyNotify
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
    readonly parentClass: ObjectClass
    readonly gstReserved: any[]
    static name: string
}
class CollectPadsPrivate {
    static name: string
}
abstract class DataQueueClass {
    /* Fields of Gst-0.10.Gst.DataQueueClass */
    readonly parentClass: GObject.ObjectClass
    readonly empty: (queue: DataQueue) => void
    readonly full: (queue: DataQueue) => void
    readonly gstReserved: any[]
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
    setThreshold(level: DebugLevel): void
    resetThreshold(): void
    getThreshold(): DebugLevel
    getName(): string
    getColor(): number
    getDescription(): string
    static name: string
}
class DebugMessage {
    /* Methods of Gst-0.10.Gst.DebugMessage */
    get(): string
    static name: string
}
abstract class ElementClass {
    /* Fields of Gst-0.10.Gst.ElementClass */
    readonly parentClass: ObjectClass
    readonly details: ElementDetails
    readonly elementfactory: ElementFactory
    readonly padtemplates: object[]
    readonly numpadtemplates: number
    readonly padTemplCookie: number
    readonly padAdded: (element: Element, pad: Pad) => void
    readonly padRemoved: (element: Element, pad: Pad) => void
    readonly noMorePads: (element: Element) => void
    readonly requestNewPad: (element: Element, templ: PadTemplate, name: string) => Pad
    readonly releasePad: (element: Element, pad: Pad) => void
    readonly getState: (element: Element, timeout: ClockTime) => [ /* returnType */ StateChangeReturn, /* state */ State, /* pending */ State ]
    readonly setState: (element: Element, state: State) => StateChangeReturn
    readonly changeState: (element: Element, transition: StateChange) => StateChangeReturn
    readonly setBus: (element: Element, bus: Bus) => void
    readonly provideClock: (element: Element) => Clock
    readonly setClock: (element: Element, clock: Clock) => boolean
    readonly getIndex: (element: Element) => Index
    readonly setIndex: (element: Element, index: Index) => void
    readonly sendEvent: (element: Element, event: Event) => boolean
    readonly getQueryTypes: (element: Element) => QueryType
    readonly query: (element: Element, query: Query) => boolean
    readonly gstReserved: any[]
    /* Methods of Gst-0.10.Gst.ElementClass */
    static addPadTemplate(templ: PadTemplate): void
    static getPadTemplate(name: string): PadTemplate
    static setDetails(details: ElementDetails): void
    static setDetailsSimple(longname: string, classification: string, description: string, author: string): void
    static name: string
}
class ElementDetails {
    /* Fields of Gst-0.10.Gst.ElementDetails */
    readonly longname: string
    readonly klass: string
    readonly description: string
    readonly author: string
    readonly gstReserved: any[]
    static name: string
}
abstract class ElementFactoryClass {
    /* Fields of Gst-0.10.Gst.ElementFactoryClass */
    readonly parentClass: PluginFeatureClass
    readonly gstReserved: any[]
    static name: string
}
abstract class EventClass {
    /* Fields of Gst-0.10.Gst.EventClass */
    readonly miniObjectClass: MiniObjectClass
    readonly gstReserved: any[]
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
    readonly parentClass: ProxyPadClass
    readonly gstReserved: any[]
    static name: string
}
class GhostPadPrivate {
    static name: string
}
abstract class ImplementsInterfaceClass {
    /* Fields of Gst-0.10.Gst.ImplementsInterfaceClass */
    readonly parent: GObject.TypeInterface
    readonly supported: (iface: ImplementsInterface, ifaceType: GObject.Type) => boolean
    readonly gstReserved: any[]
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
    readonly parentClass: ObjectClass
    readonly getWriterId: (index: Index, writerString: string) => [ /* returnType */ boolean, /* writerId */ number ]
    readonly commit: (index: Index, id: number) => void
    readonly addEntry: (index: Index, entry: IndexEntry) => void
    readonly getAssocEntry: (index: Index, id: number, method: IndexLookupMethod, flags: AssocFlags, format: Format, value: number, func: GLib.CompareDataFunc) => IndexEntry
    readonly entryAdded: (index: Index, entry: IndexEntry) => void
    readonly gstReserved: any[]
    static name: string
}
class IndexEntry {
    /* Fields of Gst-0.10.Gst.IndexEntry */
    readonly type: IndexEntryType
    readonly id: number
    /* Methods of Gst-0.10.Gst.IndexEntry */
    copy(): IndexEntry
    free(): void
    assocMap(format: Format): [ /* returnType */ boolean, /* value */ number ]
    static name: string
}
abstract class IndexFactoryClass {
    /* Fields of Gst-0.10.Gst.IndexFactoryClass */
    readonly parent: PluginFeatureClass
    readonly gstReserved: any[]
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
    readonly masterCookie: number
    readonly gstReserved: any[]
    /* Methods of Gst-0.10.Gst.Iterator */
    push(other: Iterator): void
    filter(func: GLib.CompareFunc, userData: object): Iterator
    fold(func: IteratorFoldFunction, ret: any, userData: object): IteratorResult
    foreach(func: GLib.Func, userData: object): IteratorResult
    findCustom(func: GLib.CompareFunc, userData: object): object
    static name: string
    static new(size: number, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    constructor(size: number, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction)
    /* Static methods and pseudo-constructors */
    static new(size: number, type: GObject.Type, lock: GLib.Mutex, next: IteratorNextFunction, item: IteratorItemFunction, resync: IteratorResyncFunction, free: IteratorFreeFunction): Iterator
    static newSingle(type: GObject.Type, object: object, copy: CopyFunction, free: GLib.FreeFunc): Iterator
}
abstract class MessageClass {
    /* Fields of Gst-0.10.Gst.MessageClass */
    readonly miniObjectClass: MiniObjectClass
    readonly gstReserved: any[]
    static name: string
}
abstract class MiniObjectClass {
    /* Fields of Gst-0.10.Gst.MiniObjectClass */
    readonly typeClass: GObject.TypeClass
    readonly copy: MiniObjectCopyFunction
    readonly finalize: MiniObjectFinalizeFunction
    readonly gstReserved: object
    static name: string
}
abstract class ObjectClass {
    /* Fields of Gst-0.10.Gst.ObjectClass */
    readonly parentClass: GObject.ObjectClass
    readonly pathStringSeparator: string
    readonly signalObject: GObject.Object
    readonly lock: any
    readonly parentSet: (object: Object, parent: Object) => void
    readonly parentUnset: (object: Object, parent: Object) => void
    readonly objectSaved: (object: Object, parent: libxml2.NodePtr) => void
    readonly deepNotify: (object: Object, orig: Object, pspec: GObject.ParamSpec) => void
    readonly saveThyself: (object: Object, parent: libxml2.NodePtr) => libxml2.NodePtr
    readonly restoreThyself: (object: Object, self: libxml2.NodePtr) => void
    readonly gstReserved: any[]
    static name: string
}
abstract class PadClass {
    /* Fields of Gst-0.10.Gst.PadClass */
    readonly parentClass: ObjectClass
    readonly linked: (pad: Pad, peer: Pad) => void
    readonly unlinked: (pad: Pad, peer: Pad) => void
    readonly requestLink: (pad: Pad) => void
    readonly haveData: (pad: Pad, data: MiniObject) => boolean
    readonly gstReserved: any[]
    static name: string
}
class PadPrivate {
    static name: string
}
abstract class PadTemplateClass {
    /* Fields of Gst-0.10.Gst.PadTemplateClass */
    readonly parentClass: ObjectClass
    readonly padCreated: (templ: PadTemplate, pad: Pad) => void
    readonly gstReserved: any[]
    static name: string
}
class ParamSpecFraction {
    /* Fields of Gst-0.10.Gst.ParamSpecFraction */
    readonly parentInstance: GObject.ParamSpec
    readonly minNum: number
    readonly minDen: number
    readonly maxNum: number
    readonly maxDen: number
    readonly defNum: number
    readonly defDen: number
    static name: string
}
class ParamSpecMiniObject {
    /* Fields of Gst-0.10.Gst.ParamSpecMiniObject */
    readonly parentInstance: GObject.ParamSpec
    static name: string
}
class ParseContext {
    /* Methods of Gst-0.10.Gst.ParseContext */
    getMissingElements(): string[]
    free(): void
    static name: string
    static new(): ParseContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ParseContext
}
abstract class PipelineClass {
    /* Fields of Gst-0.10.Gst.PipelineClass */
    readonly parentClass: BinClass
    readonly gstReserved: any[]
    static name: string
}
class PipelinePrivate {
    static name: string
}
abstract class PluginClass {
    /* Fields of Gst-0.10.Gst.PluginClass */
    readonly objectClass: ObjectClass
    readonly gstReserved: any[]
    static name: string
}
class PluginDesc {
    /* Fields of Gst-0.10.Gst.PluginDesc */
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
    readonly gstReserved: any[]
    static name: string
}
abstract class PluginFeatureClass {
    /* Fields of Gst-0.10.Gst.PluginFeatureClass */
    readonly parentClass: ObjectClass
    readonly gstReserved: any[]
    static name: string
}
class PluginPrivate {
    static name: string
}
class Poll {
    /* Methods of Gst-0.10.Gst.Poll */
    free(): void
    addFd(fd: PollFD): boolean
    removeFd(fd: PollFD): boolean
    fdCtlWrite(fd: PollFD, active: boolean): boolean
    fdCtlRead(fd: PollFD, active: boolean): boolean
    fdIgnored(fd: PollFD): void
    fdHasClosed(fd: PollFD): boolean
    fdHasError(fd: PollFD): boolean
    fdCanRead(fd: PollFD): boolean
    fdCanWrite(fd: PollFD): boolean
    wait(timeout: ClockTime): number
    setControllable(controllable: boolean): boolean
    restart(): void
    setFlushing(flushing: boolean): void
    writeControl(): boolean
    readControl(): boolean
    static name: string
    static new(controllable: boolean): Poll
    constructor(controllable: boolean)
    /* Static methods and pseudo-constructors */
    static new(controllable: boolean): Poll
    static newTimer(): Poll
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
    readonly parentClass: PadClass
    readonly gstReserved: any[]
    static name: string
}
class ProxyPadPrivate {
    static name: string
}
abstract class PushSrcClass {
    /* Fields of Gst-0.10.Gst.PushSrcClass */
    readonly parentClass: BaseSrcClass
    readonly create: (src: PushSrc, buf: Buffer) => FlowReturn
    readonly gstReserved: any[]
    static name: string
}
abstract class QueryClass {
    /* Fields of Gst-0.10.Gst.QueryClass */
    readonly miniObjectClass: MiniObjectClass
    readonly gstReserved: any[]
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
    readonly parentClass: ObjectClass
    readonly pluginAdded: (registry: Registry, plugin: Plugin) => void
    readonly featureAdded: (registry: Registry, feature: PluginFeature) => void
    readonly gstReserved: any[]
    static name: string
}
class RegistryPrivate {
    static name: string
}
class Segment {
    /* Fields of Gst-0.10.Gst.Segment */
    readonly rate: number
    readonly absRate: number
    readonly format: Format
    readonly flags: SeekFlags
    readonly start: number
    readonly stop: number
    readonly time: number
    readonly accum: number
    readonly lastStop: number
    readonly duration: number
    readonly appliedRate: number
    readonly gstReserved: any[]
    /* Methods of Gst-0.10.Gst.Segment */
    copy(): Segment
    free(): void
    init(format: Format): void
    setDuration(format: Format, duration: number): void
    setLastStop(format: Format, position: number): void
    setSeek(rate: number, format: Format, flags: SeekFlags, startType: SeekType, start: number, stopType: SeekType, stop: number): /* update */ boolean
    setNewsegment(update: boolean, rate: number, format: Format, start: number, stop: number, time: number): void
    setNewsegmentFull(update: boolean, rate: number, appliedRate: number, format: Format, start: number, stop: number, time: number): void
    toStreamTime(format: Format, position: number): number
    toRunningTime(format: Format, position: number): number
    toPosition(format: Format, runningTime: number): number
    clip(format: Format, start: number, stop: number): [ /* returnType */ boolean, /* clipStart */ number, /* clipStop */ number ]
    setRunningTime(format: Format, runningTime: number): boolean
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
    readonly gstReserved: any[]
    /* Methods of Gst-0.10.Gst.StaticCaps */
    get(): Caps
    static name: string
}
class StaticPadTemplate {
    /* Fields of Gst-0.10.Gst.StaticPadTemplate */
    readonly nameTemplate: string
    readonly direction: PadDirection
    readonly presence: PadPresence
    readonly staticCaps: StaticCaps
    /* Methods of Gst-0.10.Gst.StaticPadTemplate */
    get(): PadTemplate
    getCaps(): Caps
    static name: string
}
class Structure {
    /* Fields of Gst-0.10.Gst.Structure */
    readonly type: GObject.Type
    readonly name: GLib.Quark
    readonly parentRefcount: number
    readonly fields: GLib.Array
    readonly gstReserved: object
    /* Methods of Gst-0.10.Gst.Structure */
    copy(): Structure
    setParentRefcount(): /* refcount */ number
    free(): void
    getName(): string
    getNameId(): GLib.Quark
    hasName(name: string): boolean
    setName(name: string): void
    idSetValue(field: GLib.Quark, value: any): void
    setValue(fieldname: string, value: any): void
    idGetValue(field: GLib.Quark): any
    getValue(fieldname: string): any
    removeField(fieldname: string): void
    removeAllFields(): void
    getFieldType(fieldname: string): GObject.Type
    foreach(func: StructureForeachFunc, userData: object): boolean
    mapInPlace(func: StructureMapFunc, userData: object): boolean
    nFields(): number
    nthFieldName(index: number): string
    idHasField(field: GLib.Quark): boolean
    idHasFieldTyped(field: GLib.Quark, type: GObject.Type): boolean
    hasField(fieldname: string): boolean
    hasFieldTyped(fieldname: string, type: GObject.Type): boolean
    getBoolean(fieldname: string): [ /* returnType */ boolean, /* value */ boolean ]
    getInt(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getUint(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getFourcc(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getDouble(fieldname: string): [ /* returnType */ boolean, /* value */ number ]
    getDate(fieldname: string, value: GLib.Date): boolean
    getClockTime(fieldname: string, value: ClockTime): boolean
    getString(fieldname: string): string
    getEnum(fieldname: string, enumtype: GObject.Type): [ /* returnType */ boolean, /* value */ number ]
    getFraction(fieldname: string): [ /* returnType */ boolean, /* valueNumerator */ number, /* valueDenominator */ number ]
    toString(): string
    fixateFieldNearestInt(fieldName: string, target: number): boolean
    fixateFieldNearestDouble(fieldName: string, target: number): boolean
    fixateFieldBoolean(fieldName: string, target: boolean): boolean
    fixateFieldString(fieldName: string, target: string): boolean
    fixateFieldNearestFraction(fieldName: string, targetNumerator: number, targetDenominator: number): boolean
    static name: string
}
abstract class SystemClockClass {
    /* Fields of Gst-0.10.Gst.SystemClockClass */
    readonly parentClass: ClockClass
    readonly gstReserved: any[]
    static name: string
}
class SystemClockPrivate {
    static name: string
}
class TagSetterIFace {
    /* Fields of Gst-0.10.Gst.TagSetterIFace */
    readonly gIface: GObject.TypeInterface
    static name: string
}
abstract class TaskClass {
    /* Fields of Gst-0.10.Gst.TaskClass */
    readonly parentClass: ObjectClass
    readonly pool: TaskPool
    readonly gstReserved: any[]
    static name: string
}
abstract class TaskPoolClass {
    /* Fields of Gst-0.10.Gst.TaskPoolClass */
    readonly parentClass: ObjectClass
    readonly prepare: (pool: TaskPool) => void
    readonly cleanup: (pool: TaskPool) => void
    readonly push: (pool: TaskPool, func: TaskPoolFunction) => object
    readonly join: (pool: TaskPool, id: object) => void
    readonly gstReserved: any[]
    static name: string
}
class TaskPrivate {
    static name: string
}
class TaskThreadCallbacks {
    /* Fields of Gst-0.10.Gst.TaskThreadCallbacks */
    readonly enterThread: any
    readonly leaveThread: any
    readonly gstReserved: any[]
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
    textFlush(): void
    setDefault(): void
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
    readonly getLength: any
    readonly gstReserved: any[]
    static name: string
}
abstract class TypeFindFactoryClass {
    /* Fields of Gst-0.10.Gst.TypeFindFactoryClass */
    readonly parent: PluginFeatureClass
    readonly gstReserved: any[]
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
    readonly newUri: (handler: URIHandler, uri: string) => void
    readonly getType: () => URIType
    readonly getProtocols: () => string[]
    readonly getUri: (handler: URIHandler) => string
    readonly setUri: (handler: URIHandler, uri: string) => boolean
    readonly getTypeFull: (type: GObject.Type) => URIType
    readonly getProtocolsFull: (type: GObject.Type) => string[]
    readonly gstReserved: any[]
    static name: string
}
class ValueTable {
    /* Fields of Gst-0.10.Gst.ValueTable */
    readonly type: GObject.Type
    readonly compare: ValueCompareFunc
    readonly serialize: ValueSerializeFunc
    readonly deserialize: ValueDeserializeFunc
    readonly gstReserved: any[]
    static name: string
}
abstract class XMLClass {
    /* Fields of Gst-0.10.Gst.XMLClass */
    readonly parentClass: ObjectClass
    readonly objectLoaded: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    readonly objectSaved: (xml: XML, object: Object, self: libxml2.NodePtr) => void
    readonly gstReserved: any[]
    static name: string
}
    type ClockID = any
    type ClockTime = any
    type ClockTimeDiff = any
    type TagList = any
}
export default Gst;