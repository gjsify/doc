/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GLib-2.0
 */

import type GObject from './GObject-2.0';

export namespace GLib {

enum BookmarkFileError {
    INVALID_URI,
    INVALID_VALUE,
    APP_NOT_REGISTERED,
    URI_NOT_FOUND,
    READ,
    UNKNOWN_ENCODING,
    WRITE,
    FILE_NOT_FOUND,
}
enum ChecksumType {
    MD5,
    SHA1,
    SHA256,
    SHA512,
    SHA384,
}
enum ConvertError {
    NO_CONVERSION,
    ILLEGAL_SEQUENCE,
    FAILED,
    PARTIAL_INPUT,
    BAD_URI,
    NOT_ABSOLUTE_PATH,
    NO_MEMORY,
    EMBEDDED_NUL,
}
enum DateDMY {
    DAY,
    MONTH,
    YEAR,
}
enum DateMonth {
    BAD_MONTH,
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    MAY,
    JUNE,
    JULY,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER,
}
enum DateWeekday {
    BAD_WEEKDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}
enum ErrorType {
    UNKNOWN,
    UNEXP_EOF,
    UNEXP_EOF_IN_STRING,
    UNEXP_EOF_IN_COMMENT,
    NON_DIGIT_IN_CONST,
    DIGIT_RADIX,
    FLOAT_RADIX,
    FLOAT_MALFORMED,
}
enum FileError {
    EXIST,
    ISDIR,
    ACCES,
    NAMETOOLONG,
    NOENT,
    NOTDIR,
    NXIO,
    NODEV,
    ROFS,
    TXTBSY,
    FAULT,
    LOOP,
    NOSPC,
    NOMEM,
    MFILE,
    NFILE,
    BADF,
    INVAL,
    PIPE,
    AGAIN,
    INTR,
    IO,
    PERM,
    NOSYS,
    FAILED,
}
enum IOChannelError {
    FBIG,
    INVAL,
    IO,
    ISDIR,
    NOSPC,
    NXIO,
    OVERFLOW,
    PIPE,
    FAILED,
}
enum IOError {
    NONE,
    AGAIN,
    INVAL,
    UNKNOWN,
}
enum IOStatus {
    ERROR,
    NORMAL,
    EOF,
    AGAIN,
}
enum KeyFileError {
    UNKNOWN_ENCODING,
    PARSE,
    NOT_FOUND,
    KEY_NOT_FOUND,
    GROUP_NOT_FOUND,
    INVALID_VALUE,
}
enum LogWriterOutput {
    HANDLED,
    UNHANDLED,
}
enum MarkupError {
    BAD_UTF8,
    EMPTY,
    PARSE,
    UNKNOWN_ELEMENT,
    UNKNOWN_ATTRIBUTE,
    INVALID_CONTENT,
    MISSING_ATTRIBUTE,
}
enum NormalizeMode {
    DEFAULT,
    NFD,
    DEFAULT_COMPOSE,
    NFC,
    ALL,
    NFKD,
    ALL_COMPOSE,
    NFKC,
}
enum NumberParserError {
    INVALID,
    OUT_OF_BOUNDS,
}
enum OnceStatus {
    NOTCALLED,
    PROGRESS,
    READY,
}
enum OptionArg {
    NONE,
    STRING,
    INT,
    CALLBACK,
    FILENAME,
    STRING_ARRAY,
    FILENAME_ARRAY,
    DOUBLE,
    INT64,
}
enum OptionError {
    UNKNOWN_OPTION,
    BAD_VALUE,
    FAILED,
}
enum RegexError {
    COMPILE,
    OPTIMIZE,
    REPLACE,
    MATCH,
    INTERNAL,
    STRAY_BACKSLASH,
    MISSING_CONTROL_CHAR,
    UNRECOGNIZED_ESCAPE,
    QUANTIFIERS_OUT_OF_ORDER,
    QUANTIFIER_TOO_BIG,
    UNTERMINATED_CHARACTER_CLASS,
    INVALID_ESCAPE_IN_CHARACTER_CLASS,
    RANGE_OUT_OF_ORDER,
    NOTHING_TO_REPEAT,
    UNRECOGNIZED_CHARACTER,
    POSIX_NAMED_CLASS_OUTSIDE_CLASS,
    UNMATCHED_PARENTHESIS,
    INEXISTENT_SUBPATTERN_REFERENCE,
    UNTERMINATED_COMMENT,
    EXPRESSION_TOO_LARGE,
    MEMORY_ERROR,
    VARIABLE_LENGTH_LOOKBEHIND,
    MALFORMED_CONDITION,
    TOO_MANY_CONDITIONAL_BRANCHES,
    ASSERTION_EXPECTED,
    UNKNOWN_POSIX_CLASS_NAME,
    POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED,
    HEX_CODE_TOO_LARGE,
    INVALID_CONDITION,
    SINGLE_BYTE_MATCH_IN_LOOKBEHIND,
    INFINITE_LOOP,
    MISSING_SUBPATTERN_NAME_TERMINATOR,
    DUPLICATE_SUBPATTERN_NAME,
    MALFORMED_PROPERTY,
    UNKNOWN_PROPERTY,
    SUBPATTERN_NAME_TOO_LONG,
    TOO_MANY_SUBPATTERNS,
    INVALID_OCTAL_VALUE,
    TOO_MANY_BRANCHES_IN_DEFINE,
    DEFINE_REPETION,
    INCONSISTENT_NEWLINE_OPTIONS,
    MISSING_BACK_REFERENCE,
    INVALID_RELATIVE_REFERENCE,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN,
    UNKNOWN_BACKTRACKING_CONTROL_VERB,
    NUMBER_TOO_BIG,
    MISSING_SUBPATTERN_NAME,
    MISSING_DIGIT,
    INVALID_DATA_CHARACTER,
    EXTRA_SUBPATTERN_NAME,
    BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED,
    INVALID_CONTROL_CHAR,
    MISSING_NAME,
    NOT_SUPPORTED_IN_CLASS,
    TOO_MANY_FORWARD_REFERENCES,
    NAME_TOO_LONG,
    CHARACTER_VALUE_TOO_LARGE,
}
enum SeekType {
    CUR,
    SET,
    END,
}
enum ShellError {
    BAD_QUOTING,
    EMPTY_STRING,
    FAILED,
}
enum SliceConfig {
    ALWAYS_MALLOC,
    BYPASS_MAGAZINES,
    WORKING_SET_MSECS,
    COLOR_INCREMENT,
    CHUNK_SIZES,
    CONTENTION_COUNTER,
}
enum SpawnError {
    FORK,
    READ,
    CHDIR,
    ACCES,
    PERM,
    TOO_BIG,
    TODO_2BIG,
    NOEXEC,
    NAMETOOLONG,
    NOENT,
    NOMEM,
    NOTDIR,
    LOOP,
    TXTBUSY,
    IO,
    NFILE,
    MFILE,
    INVAL,
    ISDIR,
    LIBBAD,
    FAILED,
}
enum TestFileType {
    DIST,
    BUILT,
}
enum TestLogType {
    NONE,
    ERROR,
    START_BINARY,
    LIST_CASE,
    SKIP_CASE,
    START_CASE,
    STOP_CASE,
    MIN_RESULT,
    MAX_RESULT,
    MESSAGE,
    START_SUITE,
    STOP_SUITE,
}
enum TestResult {
    SUCCESS,
    SKIPPED,
    FAILURE,
    INCOMPLETE,
}
enum ThreadError {
    THREAD_ERROR_AGAIN,
}
enum TimeType {
    STANDARD,
    DAYLIGHT,
    UNIVERSAL,
}
enum TokenType {
    EOF,
    LEFT_PAREN,
    RIGHT_PAREN,
    LEFT_CURLY,
    RIGHT_CURLY,
    LEFT_BRACE,
    RIGHT_BRACE,
    EQUAL_SIGN,
    COMMA,
    NONE,
    ERROR,
    CHAR,
    BINARY,
    OCTAL,
    INT,
    HEX,
    FLOAT,
    STRING,
    SYMBOL,
    IDENTIFIER,
    IDENTIFIER_NULL,
    COMMENT_SINGLE,
    COMMENT_MULTI,
}
enum TraverseType {
    IN_ORDER,
    PRE_ORDER,
    POST_ORDER,
    LEVEL_ORDER,
}
enum UnicodeBreakType {
    MANDATORY,
    CARRIAGE_RETURN,
    LINE_FEED,
    COMBINING_MARK,
    SURROGATE,
    ZERO_WIDTH_SPACE,
    INSEPARABLE,
    NON_BREAKING_GLUE,
    CONTINGENT,
    SPACE,
    AFTER,
    BEFORE,
    BEFORE_AND_AFTER,
    HYPHEN,
    NON_STARTER,
    OPEN_PUNCTUATION,
    CLOSE_PUNCTUATION,
    QUOTATION,
    EXCLAMATION,
    IDEOGRAPHIC,
    NUMERIC,
    INFIX_SEPARATOR,
    SYMBOL,
    ALPHABETIC,
    PREFIX,
    POSTFIX,
    COMPLEX_CONTEXT,
    AMBIGUOUS,
    UNKNOWN,
    NEXT_LINE,
    WORD_JOINER,
    HANGUL_L_JAMO,
    HANGUL_V_JAMO,
    HANGUL_T_JAMO,
    HANGUL_LV_SYLLABLE,
    HANGUL_LVT_SYLLABLE,
    CLOSE_PARANTHESIS,
    CLOSE_PARENTHESIS,
    CONDITIONAL_JAPANESE_STARTER,
    HEBREW_LETTER,
    REGIONAL_INDICATOR,
    EMOJI_BASE,
    EMOJI_MODIFIER,
    ZERO_WIDTH_JOINER,
}
enum UnicodeScript {
    INVALID_CODE,
    COMMON,
    INHERITED,
    ARABIC,
    ARMENIAN,
    BENGALI,
    BOPOMOFO,
    CHEROKEE,
    COPTIC,
    CYRILLIC,
    DESERET,
    DEVANAGARI,
    ETHIOPIC,
    GEORGIAN,
    GOTHIC,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HAN,
    HANGUL,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    KHMER,
    LAO,
    LATIN,
    MALAYALAM,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    OLD_ITALIC,
    ORIYA,
    RUNIC,
    SINHALA,
    SYRIAC,
    TAMIL,
    TELUGU,
    THAANA,
    THAI,
    TIBETAN,
    CANADIAN_ABORIGINAL,
    YI,
    TAGALOG,
    HANUNOO,
    BUHID,
    TAGBANWA,
    BRAILLE,
    CYPRIOT,
    LIMBU,
    OSMANYA,
    SHAVIAN,
    LINEAR_B,
    TAI_LE,
    UGARITIC,
    NEW_TAI_LUE,
    BUGINESE,
    GLAGOLITIC,
    TIFINAGH,
    SYLOTI_NAGRI,
    OLD_PERSIAN,
    KHAROSHTHI,
    UNKNOWN,
    BALINESE,
    CUNEIFORM,
    PHOENICIAN,
    PHAGS_PA,
    NKO,
    KAYAH_LI,
    LEPCHA,
    REJANG,
    SUNDANESE,
    SAURASHTRA,
    CHAM,
    OL_CHIKI,
    VAI,
    CARIAN,
    LYCIAN,
    LYDIAN,
    AVESTAN,
    BAMUM,
    EGYPTIAN_HIEROGLYPHS,
    IMPERIAL_ARAMAIC,
    INSCRIPTIONAL_PAHLAVI,
    INSCRIPTIONAL_PARTHIAN,
    JAVANESE,
    KAITHI,
    LISU,
    MEETEI_MAYEK,
    OLD_SOUTH_ARABIAN,
    OLD_TURKIC,
    SAMARITAN,
    TAI_THAM,
    TAI_VIET,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
    ADLAM,
    BHAIKSUKI,
    MARCHEN,
    NEWA,
    OSAGE,
    TANGUT,
    MASARAM_GONDI,
    NUSHU,
    SOYOMBO,
    ZANABAZAR_SQUARE,
    DOGRA,
    GUNJALA_GONDI,
    HANIFI_ROHINGYA,
    MAKASAR,
    MEDEFAIDRIN,
    OLD_SOGDIAN,
    SOGDIAN,
    ELYMAIC,
    NANDINAGARI,
    NYIAKENG_PUACHUE_HMONG,
    WANCHO,
    CHORASMIAN,
    DIVES_AKURU,
    KHITAN_SMALL_SCRIPT,
    YEZIDI,
    CYPRO_MINOAN,
    OLD_UYGHUR,
    TANGSA,
    TOTO,
    VITHKUQI,
}
enum UnicodeType {
    CONTROL,
    FORMAT,
    UNASSIGNED,
    PRIVATE_USE,
    SURROGATE,
    LOWERCASE_LETTER,
    MODIFIER_LETTER,
    OTHER_LETTER,
    TITLECASE_LETTER,
    UPPERCASE_LETTER,
    SPACING_MARK,
    ENCLOSING_MARK,
    NON_SPACING_MARK,
    DECIMAL_NUMBER,
    LETTER_NUMBER,
    OTHER_NUMBER,
    CONNECT_PUNCTUATION,
    DASH_PUNCTUATION,
    CLOSE_PUNCTUATION,
    FINAL_PUNCTUATION,
    INITIAL_PUNCTUATION,
    OTHER_PUNCTUATION,
    OPEN_PUNCTUATION,
    CURRENCY_SYMBOL,
    MODIFIER_SYMBOL,
    MATH_SYMBOL,
    OTHER_SYMBOL,
    LINE_SEPARATOR,
    PARAGRAPH_SEPARATOR,
    SPACE_SEPARATOR,
}
enum UriError {
    FAILED,
    BAD_SCHEME,
    BAD_USER,
    BAD_PASSWORD,
    BAD_AUTH_PARAMS,
    BAD_HOST,
    BAD_PORT,
    BAD_PATH,
    BAD_QUERY,
    BAD_FRAGMENT,
}
enum UserDirectory {
    DIRECTORY_DESKTOP,
    DIRECTORY_DOCUMENTS,
    DIRECTORY_DOWNLOAD,
    DIRECTORY_MUSIC,
    DIRECTORY_PICTURES,
    DIRECTORY_PUBLIC_SHARE,
    DIRECTORY_TEMPLATES,
    DIRECTORY_VIDEOS,
    N_DIRECTORIES,
}
enum VariantClass {
    BOOLEAN,
    BYTE,
    INT16,
    UINT16,
    INT32,
    UINT32,
    INT64,
    UINT64,
    HANDLE,
    DOUBLE,
    STRING,
    OBJECT_PATH,
    SIGNATURE,
    VARIANT,
    MAYBE,
    ARRAY,
    TUPLE,
    DICT_ENTRY,
}
enum VariantParseError {
    FAILED,
    BASIC_TYPE_EXPECTED,
    CANNOT_INFER_TYPE,
    DEFINITE_TYPE_EXPECTED,
    INPUT_NOT_AT_END,
    INVALID_CHARACTER,
    INVALID_FORMAT_STRING,
    INVALID_OBJECT_PATH,
    INVALID_SIGNATURE,
    INVALID_TYPE_STRING,
    NO_COMMON_TYPE,
    NUMBER_OUT_OF_RANGE,
    NUMBER_TOO_BIG,
    TYPE_ERROR,
    UNEXPECTED_TOKEN,
    UNKNOWN_KEYWORD,
    UNTERMINATED_STRING_CONSTANT,
    VALUE_EXPECTED,
    RECURSION,
}
enum AsciiType {
    ALNUM,
    ALPHA,
    CNTRL,
    DIGIT,
    GRAPH,
    LOWER,
    PRINT,
    PUNCT,
    SPACE,
    UPPER,
    XDIGIT,
}
enum FileSetContentsFlags {
    NONE,
    CONSISTENT,
    DURABLE,
    ONLY_EXISTING,
}
enum FileTest {
    IS_REGULAR,
    IS_SYMLINK,
    IS_DIR,
    IS_EXECUTABLE,
    EXISTS,
}
enum FormatSizeFlags {
    DEFAULT,
    LONG_FORMAT,
    IEC_UNITS,
    BITS,
}
enum HookFlagMask {
    ACTIVE,
    IN_CALL,
    MASK,
}
enum IOCondition {
    IN,
    OUT,
    PRI,
    ERR,
    HUP,
    NVAL,
}
enum IOFlags {
    APPEND,
    NONBLOCK,
    IS_READABLE,
    IS_WRITABLE,
    IS_WRITEABLE,
    IS_SEEKABLE,
    MASK,
    GET_MASK,
    SET_MASK,
}
enum KeyFileFlags {
    NONE,
    KEEP_COMMENTS,
    KEEP_TRANSLATIONS,
}
enum LogLevelFlags {
    FLAG_RECURSION,
    FLAG_FATAL,
    LEVEL_ERROR,
    LEVEL_CRITICAL,
    LEVEL_WARNING,
    LEVEL_MESSAGE,
    LEVEL_INFO,
    LEVEL_DEBUG,
    LEVEL_MASK,
}
enum MainContextFlags {
    NONE,
    OWNERLESS_POLLING,
}
enum MarkupCollectType {
    INVALID,
    STRING,
    STRDUP,
    BOOLEAN,
    TRISTATE,
    OPTIONAL,
}
enum MarkupParseFlags {
    DO_NOT_USE_THIS_UNSUPPORTED_FLAG,
    TREAT_CDATA_AS_TEXT,
    PREFIX_ERROR_POSITION,
    IGNORE_QUALIFIED,
}
enum OptionFlags {
    NONE,
    HIDDEN,
    IN_MAIN,
    REVERSE,
    NO_ARG,
    FILENAME,
    OPTIONAL_ARG,
    NOALIAS,
}
enum RegexCompileFlags {
    CASELESS,
    MULTILINE,
    DOTALL,
    EXTENDED,
    ANCHORED,
    DOLLAR_ENDONLY,
    UNGREEDY,
    RAW,
    NO_AUTO_CAPTURE,
    OPTIMIZE,
    FIRSTLINE,
    DUPNAMES,
    NEWLINE_CR,
    NEWLINE_LF,
    NEWLINE_CRLF,
    NEWLINE_ANYCRLF,
    BSR_ANYCRLF,
    JAVASCRIPT_COMPAT,
}
enum RegexMatchFlags {
    ANCHORED,
    NOTBOL,
    NOTEOL,
    NOTEMPTY,
    PARTIAL,
    NEWLINE_CR,
    NEWLINE_LF,
    NEWLINE_CRLF,
    NEWLINE_ANY,
    NEWLINE_ANYCRLF,
    BSR_ANYCRLF,
    BSR_ANY,
    PARTIAL_SOFT,
    PARTIAL_HARD,
    NOTEMPTY_ATSTART,
}
enum SpawnFlags {
    DEFAULT,
    LEAVE_DESCRIPTORS_OPEN,
    DO_NOT_REAP_CHILD,
    SEARCH_PATH,
    STDOUT_TO_DEV_NULL,
    STDERR_TO_DEV_NULL,
    CHILD_INHERITS_STDIN,
    FILE_AND_ARGV_ZERO,
    SEARCH_PATH_FROM_ENVP,
    CLOEXEC_PIPES,
}
enum TestSubprocessFlags {
    STDIN,
    STDOUT,
    STDERR,
}
enum TestTrapFlags {
    SILENCE_STDOUT,
    SILENCE_STDERR,
    INHERIT_STDIN,
}
enum TraverseFlags {
    LEAVES,
    NON_LEAVES,
    ALL,
    MASK,
    LEAFS,
    NON_LEAFS,
}
enum UriFlags {
    NONE,
    PARSE_RELAXED,
    HAS_PASSWORD,
    HAS_AUTH_PARAMS,
    ENCODED,
    NON_DNS,
    ENCODED_QUERY,
    ENCODED_PATH,
    ENCODED_FRAGMENT,
    SCHEME_NORMALIZE,
}
enum UriHideFlags {
    NONE,
    USERINFO,
    PASSWORD,
    AUTH_PARAMS,
    QUERY,
    FRAGMENT,
}
enum UriParamsFlags {
    NONE,
    CASE_INSENSITIVE,
    WWW_FORM,
    PARSE_RELAXED,
}
const ANALYZER_ANALYZING: number
const ASCII_DTOSTR_BUF_SIZE: number
const BIG_ENDIAN: number
const CSET_A_2_Z: string
const CSET_DIGITS: string
const CSET_a_2_z: string
const DATALIST_FLAGS_MASK: number
const DATE_BAD_DAY: number
const DATE_BAD_JULIAN: number
const DATE_BAD_YEAR: number
const DIR_SEPARATOR: number
const DIR_SEPARATOR_S: string
const E: number
const GINT16_FORMAT: string
const GINT16_MODIFIER: string
const GINT32_FORMAT: string
const GINT32_MODIFIER: string
const GINT64_FORMAT: string
const GINT64_MODIFIER: string
const GINTPTR_FORMAT: string
const GINTPTR_MODIFIER: string
const GNUC_FUNCTION: string
const GNUC_PRETTY_FUNCTION: string
const GSIZE_FORMAT: string
const GSIZE_MODIFIER: string
const GSSIZE_FORMAT: string
const GSSIZE_MODIFIER: string
const GUINT16_FORMAT: string
const GUINT32_FORMAT: string
const GUINT64_FORMAT: string
const GUINTPTR_FORMAT: string
const HAVE_GINT64: number
const HAVE_GNUC_VARARGS: number
const HAVE_GNUC_VISIBILITY: number
const HAVE_GROWING_STACK: number
const HAVE_ISO_VARARGS: number
const HOOK_FLAG_USER_SHIFT: number
const IEEE754_DOUBLE_BIAS: number
const IEEE754_FLOAT_BIAS: number
const KEY_FILE_DESKTOP_GROUP: string
const KEY_FILE_DESKTOP_KEY_ACTIONS: string
const KEY_FILE_DESKTOP_KEY_CATEGORIES: string
const KEY_FILE_DESKTOP_KEY_COMMENT: string
const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE: string
const KEY_FILE_DESKTOP_KEY_EXEC: string
const KEY_FILE_DESKTOP_KEY_GENERIC_NAME: string
const KEY_FILE_DESKTOP_KEY_HIDDEN: string
const KEY_FILE_DESKTOP_KEY_ICON: string
const KEY_FILE_DESKTOP_KEY_MIME_TYPE: string
const KEY_FILE_DESKTOP_KEY_NAME: string
const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN: string
const KEY_FILE_DESKTOP_KEY_NO_DISPLAY: string
const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN: string
const KEY_FILE_DESKTOP_KEY_PATH: string
const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY: string
const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS: string
const KEY_FILE_DESKTOP_KEY_TERMINAL: string
const KEY_FILE_DESKTOP_KEY_TRY_EXEC: string
const KEY_FILE_DESKTOP_KEY_TYPE: string
const KEY_FILE_DESKTOP_KEY_URL: string
const KEY_FILE_DESKTOP_KEY_VERSION: string
const KEY_FILE_DESKTOP_TYPE_APPLICATION: string
const KEY_FILE_DESKTOP_TYPE_DIRECTORY: string
const KEY_FILE_DESKTOP_TYPE_LINK: string
const LITTLE_ENDIAN: number
const LN10: number
const LN2: number
const LOG_2_BASE_10: number
const LOG_DOMAIN: number
const LOG_FATAL_MASK: number
const LOG_LEVEL_USER_SHIFT: number
const MAJOR_VERSION: number
const MAXINT16: number
const MAXINT32: number
const MAXINT64: number
const MAXINT8: number
const MAXUINT16: number
const MAXUINT32: number
const MAXUINT64: number
const MAXUINT8: number
const MICRO_VERSION: number
const MININT16: number
const MININT32: number
const MININT64: number
const MININT8: number
const MINOR_VERSION: number
const MODULE_SUFFIX: string
const OPTION_REMAINING: string
const PDP_ENDIAN: number
const PI: number
const PID_FORMAT: string
const PI_2: number
const PI_4: number
const POLLFD_FORMAT: string
const PRIORITY_DEFAULT: number
const PRIORITY_DEFAULT_IDLE: number
const PRIORITY_HIGH: number
const PRIORITY_HIGH_IDLE: number
const PRIORITY_LOW: number
const SEARCHPATH_SEPARATOR: number
const SEARCHPATH_SEPARATOR_S: string
const SIZEOF_LONG: number
const SIZEOF_SIZE_T: number
const SIZEOF_SSIZE_T: number
const SIZEOF_VOID_P: number
const SOURCE_CONTINUE: boolean
const SOURCE_REMOVE: boolean
const SQRT2: number
const STR_DELIMITERS: string
const SYSDEF_AF_INET: number
const SYSDEF_AF_INET6: number
const SYSDEF_AF_UNIX: number
const SYSDEF_MSG_DONTROUTE: number
const SYSDEF_MSG_OOB: number
const SYSDEF_MSG_PEEK: number
const TEST_OPTION_ISOLATE_DIRS: string
const TIME_SPAN_DAY: number
const TIME_SPAN_HOUR: number
const TIME_SPAN_MILLISECOND: number
const TIME_SPAN_MINUTE: number
const TIME_SPAN_SECOND: number
const UNICHAR_MAX_DECOMPOSITION_LENGTH: number
const URI_RESERVED_CHARS_GENERIC_DELIMITERS: string
const URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS: string
const USEC_PER_SEC: number
const VA_COPY_AS_ARRAY: number
const VERSION_MIN_REQUIRED: number
const WIN32_MSG_HANDLE: number
const macro__has_attribute___noreturn__: number
function access(filename: string, mode: number): number
function asciiDigitValue(c: number): number
function asciiDtostr(buffer: string, bufLen: number, d: number): string
function asciiFormatd(buffer: string, bufLen: number, format: string, d: number): string
function asciiStrcasecmp(s1: string, s2: string): number
function asciiStrdown(str: string, len: number): string
function asciiStringToSigned(str: string, base: number, min: number, max: number): [ /* returnType */ boolean, /* outNum */ number | null ]
function asciiStringToUnsigned(str: string, base: number, min: number, max: number): [ /* returnType */ boolean, /* outNum */ number | null ]
function asciiStrncasecmp(s1: string, s2: string, n: number): number
function asciiStrtod(nptr: string): [ /* returnType */ number, /* endptr */ string | null ]
function asciiStrtoll(nptr: string, base: number): [ /* returnType */ number, /* endptr */ string | null ]
function asciiStrtoull(nptr: string, base: number): [ /* returnType */ number, /* endptr */ string | null ]
function asciiStrup(str: string, len: number): string
function asciiTolower(c: number): number
function asciiToupper(c: number): number
function asciiXdigitValue(c: number): number
function assertWarning(logDomain: string, file: string, line: number, prettyFunction: string, expression: string): void
function assertionMessage(domain: string, file: string, line: number, func: string, message: string): void
function assertionMessageCmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string): void
function assertionMessageCmpstrv(domain: string, file: string, line: number, func: string, expr: string, arg1: string, arg2: string, firstWrongIdx: number): void
function assertionMessageError(domain: string, file: string, line: number, func: string, expr: string, error: Error, errorDomain: Quark, errorCode: number): void
function atexit(func: VoidFunc): void
function atomicIntAdd(atomic: number, val: number): number
function atomicIntAnd(atomic: number, val: number): number
function atomicIntCompareAndExchange(atomic: number, oldval: number, newval: number): boolean
function atomicIntDecAndTest(atomic: number): boolean
function atomicIntExchangeAndAdd(atomic: number, val: number): number
function atomicIntGet(atomic: number): number
function atomicIntInc(atomic: number): void
function atomicIntOr(atomic: number, val: number): number
function atomicIntSet(atomic: number, newval: number): void
function atomicIntXor(atomic: number, val: number): number
function atomicPointerAdd(atomic: object, val: number): number
function atomicPointerAnd(atomic: object, val: number): number
function atomicPointerCompareAndExchange(atomic: object, oldval?: object | null, newval?: object | null): boolean
function atomicPointerGet(atomic: object): object | null
function atomicPointerOr(atomic: object, val: number): number
function atomicPointerSet(atomic: object, newval?: object | null): void
function atomicPointerXor(atomic: object, val: number): number
function atomicRcBoxAcquire(memBlock: object): object
function atomicRcBoxAlloc(blockSize: number): object
function atomicRcBoxAlloc0(blockSize: number): object
function atomicRcBoxDup(blockSize: number, memBlock: object): object
function atomicRcBoxGetSize(memBlock: object): number
function atomicRcBoxRelease(memBlock: object): void
function atomicRcBoxReleaseFull(memBlock: object, clearFunc: DestroyNotify): void
function atomicRefCountCompare(arc: number, val: number): boolean
function atomicRefCountDec(arc: number): boolean
function atomicRefCountInc(arc: number): void
function atomicRefCountInit(arc: number): void
function base64Decode(text: string): Uint8Array
function base64DecodeInplace(text: Uint8Array): [ /* returnType */ number, /* text */ Uint8Array ]
function base64Encode(data: Uint8Array | null): string
function base64EncodeClose(breakLines: boolean, state: number, save: number): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* save */ number ]
function base64EncodeStep(in_: Uint8Array, breakLines: boolean, state: number, save: number): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* save */ number ]
function basename(fileName: string): string
function bitLock(address: number, lockBit: number): void
function bitNthLsf(mask: number, nthBit: number): number
function bitNthMsf(mask: number, nthBit: number): number
function bitStorage(number: number): number
function bitTrylock(address: number, lockBit: number): boolean
function bitUnlock(address: number, lockBit: number): void
function bookmarkFileErrorQuark(): Quark
function buildFilenamev(args: string[]): string
function buildPathv(separator: string, args: string[]): string
function byteArrayFree(array: Uint8Array, freeSegment: boolean): number
function byteArrayFreeToBytes(array: Uint8Array): any
function byteArrayNew(): Uint8Array
function byteArrayNewTake(data: Uint8Array): Uint8Array
function byteArraySteal(array: Uint8Array): [ /* returnType */ number, /* len */ number | null ]
function byteArrayUnref(array: Uint8Array): void
function canonicalizeFilename(filename: string, relativeTo?: string | null): string
function chdir(path: string): number
function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
function checksumTypeGetLength(checksumType: ChecksumType): number
function childWatchAdd(priority: number, pid: Pid, function_: ChildWatchFunc): number
function childWatchSourceNew(pid: Pid): Source
function clearError(): void
function close(fd: number): boolean
function computeChecksumForBytes(checksumType: ChecksumType, data: any): string | null
function computeChecksumForData(checksumType: ChecksumType, data: Uint8Array): string | null
function computeChecksumForString(checksumType: ChecksumType, str: string, length: number): string | null
function computeHmacForBytes(digestType: ChecksumType, key: any, data: any): string
function computeHmacForData(digestType: ChecksumType, key: Uint8Array, data: Uint8Array): string
function computeHmacForString(digestType: ChecksumType, key: Uint8Array, str: string, length: number): string
function convert(str: Uint8Array, toCodeset: string, fromCodeset: string): [ /* returnType */ Uint8Array, /* bytesRead */ number | null ]
function convertErrorQuark(): Quark
function convertWithFallback(str: Uint8Array, toCodeset: string, fromCodeset: string, fallback: string): [ /* returnType */ Uint8Array, /* bytesRead */ number | null ]
function datalistForeach(datalist: Data, func: DataForeachFunc): void
function datalistGetData(datalist: Data, key: string): object | null
function datalistGetFlags(datalist: Data): number
function datalistIdGetData(datalist: Data, keyId: Quark): object | null
function datalistSetFlags(datalist: Data, flags: number): void
function datalistUnsetFlags(datalist: Data, flags: number): void
function datasetDestroy(datasetLocation: object): void
function datasetForeach(datasetLocation: object, func: DataForeachFunc): void
function datasetIdGetData(datasetLocation: object, keyId: Quark): object | null
function dateGetDaysInMonth(month: DateMonth, year: DateYear): number
function dateGetMondayWeeksInYear(year: DateYear): number
function dateGetSundayWeeksInYear(year: DateYear): number
function dateIsLeapYear(year: DateYear): boolean
function dateStrftime(s: string, slen: number, format: string, date: Date): number
function dateValidDay(day: DateDay): boolean
function dateValidDmy(day: DateDay, month: DateMonth, year: DateYear): boolean
function dateValidJulian(julianDate: number): boolean
function dateValidMonth(month: DateMonth): boolean
function dateValidWeekday(weekday: DateWeekday): boolean
function dateValidYear(year: DateYear): boolean
function dcgettext(domain: string | null, msgid: string, category: number): string
function dgettext(domain: string | null, msgid: string): string
function dirMakeTmp(tmpl?: string | null): string
function directEqual(v1?: object | null, v2?: object | null): boolean
function directHash(v?: object | null): number
function dngettext(domain: string | null, msgid: string, msgidPlural: string, n: number): string
function doubleEqual(v1: object, v2: object): boolean
function doubleHash(v: object): number
function dpgettext(domain: string | null, msgctxtid: string, msgidoffset: number): string
function dpgettext2(domain: string | null, context: string, msgid: string): string
function environGetenv(envp: string[] | null, variable: string): string | null
function environSetenv(envp: string[] | null, variable: string, value: string, overwrite: boolean): string[]
function environUnsetenv(envp: string[] | null, variable: string): string[]
function fileErrorFromErrno(errNo: number): FileError
function fileErrorQuark(): Quark
function fileGetContents(filename: string): [ /* returnType */ boolean, /* contents */ Uint8Array ]
function fileOpenTmp(tmpl?: string | null): [ /* returnType */ number, /* nameUsed */ string ]
function fileReadLink(filename: string): string
function fileSetContents(filename: string, contents: Uint8Array): boolean
function fileSetContentsFull(filename: string, contents: Uint8Array, flags: FileSetContentsFlags, mode: number): boolean
function fileTest(filename: string, test: FileTest): boolean
function filenameDisplayBasename(filename: string): string
function filenameDisplayName(filename: string): string
function filenameFromUri(uri: string): [ /* returnType */ string, /* hostname */ string | null ]
function filenameFromUtf8(utf8string: string, len: number): [ /* returnType */ string, /* bytesRead */ number | null, /* bytesWritten */ number | null ]
function filenameToUri(filename: string, hostname?: string | null): string
function filenameToUtf8(opsysstring: string, len: number): [ /* returnType */ string, /* bytesRead */ number | null, /* bytesWritten */ number | null ]
function findProgramInPath(program: string): string | null
function formatSize(size: number): string
function formatSizeForDisplay(size: number): string
function formatSizeFull(size: number, flags: FormatSizeFlags): string
function free(mem?: object | null): void
function getApplicationName(): string | null
function getCharset(): [ /* returnType */ boolean, /* charset */ string | null ]
function getCodeset(): string
function getConsoleCharset(): [ /* returnType */ boolean, /* charset */ string | null ]
function getCurrentDir(): string
function getCurrentTime(result: TimeVal): void
function getEnviron(): string[]
function getFilenameCharsets(): [ /* returnType */ boolean, /* filenameCharsets */ string[] ]
function getHomeDir(): string
function getHostName(): string
function getLanguageNames(): string[]
function getLanguageNamesWithCategory(categoryName: string): string[]
function getLocaleVariants(locale: string): string[]
function getMonotonicTime(): number
function getNumProcessors(): number
function getOsInfo(keyName: string): string | null
function getPrgname(): string | null
function getRealName(): string
function getRealTime(): number
function getSystemConfigDirs(): string[]
function getSystemDataDirs(): string[]
function getTmpDir(): string
function getUserCacheDir(): string
function getUserConfigDir(): string
function getUserDataDir(): string
function getUserName(): string
function getUserRuntimeDir(): string
function getUserSpecialDir(directory: UserDirectory): string | null
function getUserStateDir(): string
function getenv(variable: string): string | null
function hashTableAdd(hashTable: HashTable, key?: object | null): boolean
function hashTableContains(hashTable: HashTable, key?: object | null): boolean
function hashTableDestroy(hashTable: HashTable): void
function hashTableInsert(hashTable: HashTable, key?: object | null, value?: object | null): boolean
function hashTableLookup(hashTable: HashTable, key?: object | null): object | null
function hashTableLookupExtended(hashTable: HashTable, lookupKey?: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
function hashTableRemove(hashTable: HashTable, key?: object | null): boolean
function hashTableRemoveAll(hashTable: HashTable): void
function hashTableReplace(hashTable: HashTable, key?: object | null, value?: object | null): boolean
function hashTableSize(hashTable: HashTable): number
function hashTableSteal(hashTable: HashTable, key?: object | null): boolean
function hashTableStealAll(hashTable: HashTable): void
function hashTableStealExtended(hashTable: HashTable, lookupKey?: object | null): [ /* returnType */ boolean, /* stolenKey */ object | null, /* stolenValue */ object | null ]
function hashTableUnref(hashTable: HashTable): void
function hookDestroy(hookList: HookList, hookId: number): boolean
function hookDestroyLink(hookList: HookList, hook: Hook): void
function hookFree(hookList: HookList, hook: Hook): void
function hookInsertBefore(hookList: HookList, sibling: Hook | null, hook: Hook): void
function hookPrepend(hookList: HookList, hook: Hook): void
function hookUnref(hookList: HookList, hook: Hook): void
function hostnameIsAsciiEncoded(hostname: string): boolean
function hostnameIsIpAddress(hostname: string): boolean
function hostnameIsNonAscii(hostname: string): boolean
function hostnameToAscii(hostname: string): string | null
function hostnameToUnicode(hostname: string): string | null
function idleAdd(priority: number, function_: SourceFunc): number
function idleRemoveByData(data?: object | null): boolean
function idleSourceNew(): Source
function int64Equal(v1: object, v2: object): boolean
function int64Hash(v: object): number
function intEqual(v1: object, v2: object): boolean
function intHash(v: object): number
function internStaticString(string?: string | null): string
function internString(string?: string | null): string
function ioAddWatch(channel: IOChannel, priority: number, condition: IOCondition, func: IOFunc): number
function ioChannelErrorFromErrno(en: number): IOChannelError
function ioChannelErrorQuark(): Quark
function ioCreateWatch(channel: IOChannel, condition: IOCondition): Source
function keyFileErrorQuark(): Quark
function listenv(): string[]
function localeFromUtf8(utf8string: string, len: number): [ /* returnType */ Uint8Array, /* bytesRead */ number | null ]
function localeToUtf8(opsysstring: Uint8Array): [ /* returnType */ string, /* bytesRead */ number | null, /* bytesWritten */ number | null ]
function logDefaultHandler(logDomain: string | null, logLevel: LogLevelFlags, message?: string | null, unusedData?: object | null): void
function logRemoveHandler(logDomain: string, handlerId: number): void
function logSetAlwaysFatal(fatalMask: LogLevelFlags): LogLevelFlags
function logSetFatalMask(logDomain: string, fatalMask: LogLevelFlags): LogLevelFlags
function logSetHandler(logDomain: string | null, logLevels: LogLevelFlags, logFunc: LogFunc): number
function logSetWriterFunc(): void
function logStructuredArray(logLevel: LogLevelFlags, fields: LogField[]): void
function logVariant(logDomain: string | null, logLevel: LogLevelFlags, fields: Variant): void
function logWriterDefault(logLevel: LogLevelFlags, fields: LogField[], userData?: object | null): LogWriterOutput
function logWriterDefaultSetUseStderr(useStderr: boolean): void
function logWriterDefaultWouldDrop(logLevel: LogLevelFlags, logDomain?: string | null): boolean
function logWriterFormatFields(logLevel: LogLevelFlags, fields: LogField[], useColor: boolean): string
function logWriterIsJournald(outputFd: number): boolean
function logWriterJournald(logLevel: LogLevelFlags, fields: LogField[], userData?: object | null): LogWriterOutput
function logWriterStandardStreams(logLevel: LogLevelFlags, fields: LogField[], userData?: object | null): LogWriterOutput
function logWriterSupportsColor(outputFd: number): boolean
function mainContextDefault(): MainContext
function mainContextGetThreadDefault(): MainContext | null
function mainContextRefThreadDefault(): MainContext
function mainCurrentSource(): Source | null
function mainDepth(): number
function malloc(nBytes: number): object | null
function malloc0(nBytes: number): object | null
function malloc0N(nBlocks: number, nBlockBytes: number): object | null
function mallocN(nBlocks: number, nBlockBytes: number): object | null
function markupErrorQuark(): Quark
function markupEscapeText(text: string, length: number): string
function memIsSystemMalloc(): boolean
function memProfile(): void
function memSetVtable(vtable: MemVTable): void
function memdup(mem: object | null, byteSize: number): object | null
function memdup2(mem: object | null, byteSize: number): object | null
function mkdirWithParents(pathname: string, mode: number): number
function nullifyPointer(nullifyLocation: object): void
function numberParserErrorQuark(): Quark
function onErrorQuery(prgName: string): void
function onErrorStackTrace(prgName: string): void
function onceInitEnter(location: object): boolean
function onceInitLeave(location: object, result: number): void
function optionErrorQuark(): Quark
function parseDebugString(string: string | null, keys: DebugKey[]): number
function pathGetBasename(fileName: string): string
function pathGetDirname(fileName: string): string
function pathIsAbsolute(fileName: string): boolean
function pathSkipRoot(fileName: string): string | null
function patternMatchSimple(pattern: string, string: string): boolean
function pointerBitLock(address: object, lockBit: number): void
function pointerBitTrylock(address: object, lockBit: number): boolean
function pointerBitUnlock(address: object, lockBit: number): void
function poll(fds: PollFD, nfds: number, timeout: number): number
function prefixErrorLiteral(err: Error | null, prefix: string): void
function propagateError(src: Error): /* dest */ Error | null
function quarkFromStaticString(string?: string | null): Quark
function quarkFromString(string?: string | null): Quark
function quarkToString(quark: Quark): string
function quarkTryString(string?: string | null): Quark
function randomDouble(): number
function randomDoubleRange(begin: number, end: number): number
function randomInt(): number
function randomIntRange(begin: number, end: number): number
function randomSetSeed(seed: number): void
function rcBoxAcquire(memBlock: object): object
function rcBoxAlloc(blockSize: number): object
function rcBoxAlloc0(blockSize: number): object
function rcBoxDup(blockSize: number, memBlock: object): object
function rcBoxGetSize(memBlock: object): number
function rcBoxRelease(memBlock: object): void
function rcBoxReleaseFull(memBlock: object, clearFunc: DestroyNotify): void
function realloc(mem: object | null, nBytes: number): object | null
function reallocN(mem: object | null, nBlocks: number, nBlockBytes: number): object | null
function refCountCompare(rc: number, val: number): boolean
function refCountDec(rc: number): boolean
function refCountInc(rc: number): void
function refCountInit(rc: number): void
function refStringAcquire(str: string): string
function refStringLength(str: string): number
function refStringNew(str: string): string
function refStringNewIntern(str: string): string
function refStringNewLen(str: string, len: number): string
function refStringRelease(str: string): void
function regexCheckReplacement(replacement: string): [ /* returnType */ boolean, /* hasReferences */ boolean | null ]
function regexErrorQuark(): Quark
function regexEscapeNul(string: string, length: number): string
function regexEscapeString(string: string[]): string
function regexMatchSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): boolean
function regexSplitSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): string[]
function reloadUserSpecialDirsCache(): void
function rmdir(filename: string): number
function sequenceGet(iter: SequenceIter): object | null
function sequenceInsertBefore(iter: SequenceIter, data?: object | null): SequenceIter
function sequenceMove(src: SequenceIter, dest: SequenceIter): void
function sequenceMoveRange(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void
function sequenceRangeGetMidpoint(begin: SequenceIter, end: SequenceIter): SequenceIter
function sequenceRemove(iter: SequenceIter): void
function sequenceRemoveRange(begin: SequenceIter, end: SequenceIter): void
function sequenceSet(iter: SequenceIter, data?: object | null): void
function sequenceSwap(a: SequenceIter, b: SequenceIter): void
function setApplicationName(applicationName: string): void
function setErrorLiteral(domain: Quark, code: number, message: string): /* err */ Error | null
function setPrgname(prgname: string): void
function setenv(variable: string, value: string, overwrite: boolean): boolean
function shellErrorQuark(): Quark
function shellParseArgv(commandLine: string): [ /* returnType */ boolean, /* argvp */ string[] | null ]
function shellQuote(unquotedString: string): string
function shellUnquote(quotedString: string): string
function sliceAlloc(blockSize: number): object | null
function sliceAlloc0(blockSize: number): object | null
function sliceCopy(blockSize: number, memBlock?: object | null): object | null
function sliceFree1(blockSize: number, memBlock?: object | null): void
function sliceFreeChainWithOffset(blockSize: number, memChain: object | null, nextOffset: number): void
function sliceGetConfig(ckey: SliceConfig): number
function sliceGetConfigState(ckey: SliceConfig, address: number, nValues: number): number
function sliceSetConfig(ckey: SliceConfig, value: number): void
function sourceRemove(tag: number): boolean
function sourceRemoveByFuncsUserData(funcs: SourceFuncs, userData?: object | null): boolean
function sourceRemoveByUserData(userData?: object | null): boolean
function sourceSetNameById(tag: number, name: string): void
function spacedPrimesClosest(num: number): number
function spawnAsync(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* childPid */ Pid | null ]
function spawnAsyncWithFds(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null, stdinFd: number, stdoutFd: number, stderrFd: number): [ /* returnType */ boolean, /* childPid */ Pid | null ]
function spawnAsyncWithPipes(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* childPid */ Pid | null, /* standardInput */ number | null, /* standardOutput */ number | null, /* standardError */ number | null ]
function spawnAsyncWithPipesAndFds(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null, stdinFd: number, stdoutFd: number, stderrFd: number, sourceFds: number[] | null, targetFds: number[] | null): [ /* returnType */ boolean, /* childPidOut */ Pid | null, /* stdinPipeOut */ number | null, /* stdoutPipeOut */ number | null, /* stderrPipeOut */ number | null ]
function spawnCheckExitStatus(waitStatus: number): boolean
function spawnCheckWaitStatus(waitStatus: number): boolean
function spawnClosePid(pid: Pid): void
function spawnCommandLineAsync(commandLine: string): boolean
function spawnCommandLineSync(commandLine: string): [ /* returnType */ boolean, /* standardOutput */ Uint8Array | null, /* standardError */ Uint8Array | null, /* waitStatus */ number | null ]
function spawnErrorQuark(): Quark
function spawnExitErrorQuark(): Quark
function spawnSync(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup?: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* standardOutput */ Uint8Array | null, /* standardError */ Uint8Array | null, /* waitStatus */ number | null ]
function stpcpy(dest: string, src: string): string
function strEqual(v1: object, v2: object): boolean
function strHasPrefix(str: string, prefix: string): boolean
function strHasSuffix(str: string, suffix: string): boolean
function strHash(v: object): number
function strIsAscii(str: string): boolean
function strMatchString(searchTerm: string, potentialHit: string, acceptAlternates: boolean): boolean
function strToAscii(str: string, fromLocale?: string | null): string
function strTokenizeAndFold(string: string, translitLocale?: string | null): [ /* returnType */ string[], /* asciiAlternates */ string[] ]
function strcanon(string: string, validChars: string, substitutor: number): string
function strcasecmp(s1: string, s2: string): number
function strchomp(string: string): string
function strchug(string: string): string
function strcmp0(str1?: string | null, str2?: string | null): number
function strcompress(source: string): string
function strdelimit(string: string, delimiters: string | null, newDelimiter: number): string
function strdown(string: string): string
function strdup(str?: string | null): string
function strerror(errnum: number): string
function strescape(source: string, exceptions?: string | null): string
function strfreev(strArray?: string | null): void
function stripContext(msgid: string, msgval: string): string
function strjoinv(separator: string | null, strArray: string): string
function strlcat(dest: string, src: string, destSize: number): number
function strlcpy(dest: string, src: string, destSize: number): number
function strncasecmp(s1: string, s2: string, n: number): number
function strndup(str: string, n: number): string
function strnfill(length: number, fillChar: number): string
function strreverse(string: string): string
function strrstr(haystack: string, needle: string): string
function strrstrLen(haystack: string, haystackLen: number, needle: string): string
function strsignal(signum: number): string
function strstrLen(haystack: string, haystackLen: number, needle: string): string
function strtod(nptr: string): [ /* returnType */ number, /* endptr */ string | null ]
function strup(string: string): string
function strvContains(strv: string, str: string): boolean
function strvEqual(strv1: string, strv2: string): boolean
function strvGetType(): GObject.Type
function strvLength(strArray: string): number
function testAddDataFunc(testpath: string, testData: object | null, testFunc: TestDataFunc): void
function testAddDataFuncFull(testpath: string, testData: object | null, testFunc: TestDataFunc): void
function testAddFunc(testpath: string, testFunc: TestFunc): void
function testAssertExpectedMessagesInternal(domain: string, file: string, line: number, func: string): void
function testBug(bugUriSnippet: string): void
function testBugBase(uriPattern: string): void
function testExpectMessage(logDomain: string | null, logLevel: LogLevelFlags, pattern: string): void
function testFail(): void
function testFailed(): boolean
function testGetDir(fileType: TestFileType): string
function testGetPath(): string
function testIncomplete(msg?: string | null): void
function testLogTypeName(logType: TestLogType): string
function testQueueDestroy(destroyFunc: DestroyNotify, destroyData?: object | null): void
function testQueueFree(gfreePointer?: object | null): void
function testRandDouble(): number
function testRandDoubleRange(rangeStart: number, rangeEnd: number): number
function testRandInt(): number
function testRandIntRange(begin: number, end: number): number
function testRun(): number
function testRunSuite(suite: TestSuite): number
function testSetNonfatalAssertions(): void
function testSkip(msg?: string | null): void
function testSubprocess(): boolean
function testSummary(summary: string): void
function testTimerElapsed(): number
function testTimerLast(): number
function testTimerStart(): void
function testTrapAssertions(domain: string, file: string, line: number, func: string, assertionFlags: number, pattern: string): void
function testTrapFork(usecTimeout: number, testTrapFlags: TestTrapFlags): boolean
function testTrapHasPassed(): boolean
function testTrapReachedTimeout(): boolean
function testTrapSubprocess(testPath: string | null, usecTimeout: number, testFlags: TestSubprocessFlags): void
function threadErrorQuark(): Quark
function threadExit(retval?: object | null): void
function threadPoolGetMaxIdleTime(): number
function threadPoolGetMaxUnusedThreads(): number
function threadPoolGetNumUnusedThreads(): number
function threadPoolSetMaxIdleTime(interval: number): void
function threadPoolSetMaxUnusedThreads(maxThreads: number): void
function threadPoolStopUnusedThreads(): void
function threadSelf(): Thread
function threadYield(): void
function timeValFromIso8601(isoDate: string): [ /* returnType */ boolean, /* time */ TimeVal ]
function timeoutAdd(priority: number, interval: number, function_: SourceFunc): number
function timeoutAddSeconds(priority: number, interval: number, function_: SourceFunc): number
function timeoutSourceNew(interval: number): Source
function timeoutSourceNewSeconds(interval: number): Source
function trashStackHeight(stackP: TrashStack): number
function trashStackPeek(stackP: TrashStack): object | null
function trashStackPop(stackP: TrashStack): object | null
function trashStackPush(stackP: TrashStack, dataP: object): void
function tryMalloc(nBytes: number): object | null
function tryMalloc0(nBytes: number): object | null
function tryMalloc0N(nBlocks: number, nBlockBytes: number): object | null
function tryMallocN(nBlocks: number, nBlockBytes: number): object | null
function tryRealloc(mem: object | null, nBytes: number): object | null
function tryReallocN(mem: object | null, nBlocks: number, nBlockBytes: number): object | null
function ucs4ToUtf16(str: number, len: number): [ /* returnType */ number, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
function ucs4ToUtf8(str: number, len: number): [ /* returnType */ string, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
function unicharBreakType(c: number): UnicodeBreakType
function unicharCombiningClass(uc: number): number
function unicharCompose(a: number, b: number): [ /* returnType */ boolean, /* ch */ number ]
function unicharDecompose(ch: number): [ /* returnType */ boolean, /* a */ number, /* b */ number ]
function unicharDigitValue(c: number): number
function unicharFullyDecompose(ch: number, compat: boolean, resultLen: number): [ /* returnType */ number, /* result */ number | null ]
function unicharGetMirrorChar(ch: number, mirroredCh: number): boolean
function unicharGetScript(ch: number): UnicodeScript
function unicharIsalnum(c: number): boolean
function unicharIsalpha(c: number): boolean
function unicharIscntrl(c: number): boolean
function unicharIsdefined(c: number): boolean
function unicharIsdigit(c: number): boolean
function unicharIsgraph(c: number): boolean
function unicharIslower(c: number): boolean
function unicharIsmark(c: number): boolean
function unicharIsprint(c: number): boolean
function unicharIspunct(c: number): boolean
function unicharIsspace(c: number): boolean
function unicharIstitle(c: number): boolean
function unicharIsupper(c: number): boolean
function unicharIswide(c: number): boolean
function unicharIswideCjk(c: number): boolean
function unicharIsxdigit(c: number): boolean
function unicharIszerowidth(c: number): boolean
function unicharToUtf8(c: number): [ /* returnType */ number, /* outbuf */ string | null ]
function unicharTolower(c: number): number
function unicharTotitle(c: number): number
function unicharToupper(c: number): number
function unicharType(c: number): UnicodeType
function unicharValidate(ch: number): boolean
function unicharXdigitValue(c: number): number
function unicodeCanonicalDecomposition(ch: number, resultLen: number): number
function unicodeCanonicalOrdering(string: number, len: number): void
function unicodeScriptFromIso15924(iso15924: number): UnicodeScript
function unicodeScriptToIso15924(script: UnicodeScript): number
function unixErrorQuark(): Quark
function unixFdAddFull(priority: number, fd: number, condition: IOCondition, function_: UnixFDSourceFunc): number
function unixFdSourceNew(fd: number, condition: IOCondition): Source
function unixGetPasswdEntry(userName: string): object | null
function unixOpenPipe(fds: number, flags: number): boolean
function unixSetFdNonblocking(fd: number, nonblock: boolean): boolean
function unixSignalAdd(priority: number, signum: number, handler: SourceFunc): number
function unixSignalSourceNew(signum: number): Source
function unlink(filename: string): number
function unsetenv(variable: string): void
function uriBuild(flags: UriFlags, scheme: string, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
function uriBuildWithUser(flags: UriFlags, scheme: string, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
function uriErrorQuark(): Quark
function uriEscapeBytes(unescaped: Uint8Array, reservedCharsAllowed?: string | null): string
function uriEscapeString(unescaped: string, reservedCharsAllowed: string | null, allowUtf8: boolean): string
function uriIsValid(uriString: string, flags: UriFlags): boolean
function uriJoin(flags: UriFlags, scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
function uriJoinWithUser(flags: UriFlags, scheme: string | null, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
function uriListExtractUris(uriList: string): string[]
function uriParse(uriString: string, flags: UriFlags): Uri
function uriParseParams(params: string, length: number, separators: string, flags: UriParamsFlags): HashTable
function uriParseScheme(uri: string): string | null
function uriPeekScheme(uri: string): string | null
function uriResolveRelative(baseUriString: string | null, uriRef: string, flags: UriFlags): string
function uriSplit(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* userinfo */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
function uriSplitNetwork(uriString: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* host */ string | null, /* port */ number | null ]
function uriSplitWithUser(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* password */ string | null, /* authParams */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
function uriUnescapeBytes(escapedString: string, length: number, illegalCharacters?: string | null): any
function uriUnescapeSegment(escapedString?: string | null, escapedStringEnd?: string | null, illegalCharacters?: string | null): string | null
function uriUnescapeString(escapedString: string, illegalCharacters?: string | null): string | null
function usleep(microseconds: number): void
function utf16ToUcs4(str: number, len: number): [ /* returnType */ number, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
function utf16ToUtf8(str: number, len: number): [ /* returnType */ string, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
function utf8Casefold(str: string, len: number): string
function utf8Collate(str1: string, str2: string): number
function utf8CollateKey(str: string, len: number): string
function utf8CollateKeyForFilename(str: string, len: number): string
function utf8FindNextChar(p: string, end?: string | null): string | null
function utf8FindPrevChar(str: string, p: string): string | null
function utf8GetChar(p: string): number
function utf8GetCharValidated(p: string, maxLen: number): number
function utf8MakeValid(str: string, len: number): string
function utf8Normalize(str: string, len: number, mode: NormalizeMode): string | null
function utf8OffsetToPointer(str: string, offset: number): string
function utf8PointerToOffset(str: string, pos: string): number
function utf8PrevChar(p: string): string
function utf8Strchr(p: string, len: number, c: number): string | null
function utf8Strdown(str: string, len: number): string
function utf8Strlen(p: string, max: number): number
function utf8Strncpy(dest: string, src: string, n: number): string
function utf8Strrchr(p: string, len: number, c: number): string | null
function utf8Strreverse(str: string, len: number): string
function utf8Strup(str: string, len: number): string
function utf8Substring(str: string, startPos: number, endPos: number): string
function utf8ToUcs4(str: string, len: number): [ /* returnType */ number, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
function utf8ToUcs4Fast(str: string, len: number): [ /* returnType */ number, /* itemsWritten */ number | null ]
function utf8ToUtf16(str: string, len: number): [ /* returnType */ number, /* itemsRead */ number | null, /* itemsWritten */ number | null ]
function utf8Validate(str: Uint8Array): [ /* returnType */ boolean, /* end */ string | null ]
function utf8ValidateLen(str: Uint8Array): [ /* returnType */ boolean, /* end */ string | null ]
function uuidStringIsValid(str: string): boolean
function uuidStringRandom(): string
function variantGetGtype(): GObject.Type
function variantIsObjectPath(string: string): boolean
function variantIsSignature(string: string): boolean
function variantParse(type: VariantType | null, text: string, limit?: string | null, endptr?: string | null): Variant
function variantParseErrorPrintContext(error: Error, sourceStr: string): string
function variantParseErrorQuark(): Quark
function variantParserGetErrorQuark(): Quark
function variantTypeChecked(arg0: string): VariantType
function variantTypeStringGetDepth(typeString: string): number
function variantTypeStringIsValid(typeString: string): boolean
function variantTypeStringScan(string: string, limit?: string | null): [ /* returnType */ boolean, /* endptr */ string | null ]
interface ChildWatchFunc {
    (pid: Pid, waitStatus: number): void
}
interface ClearHandleFunc {
    (handleId: number): void
}
interface CompareDataFunc {
    (a?: object | null, b?: object | null): number
}
interface CompareFunc {
    (a?: object | null, b?: object | null): number
}
interface CopyFunc {
    (src: object, data?: object | null): object
}
interface DataForeachFunc {
    (keyId: Quark, data?: object | null): void
}
interface DestroyNotify {
    (data?: object | null): void
}
interface DuplicateFunc {
    (data?: object | null): object | null
}
interface EqualFunc {
    (a?: object | null, b?: object | null): boolean
}
interface ErrorClearFunc {
    (error: Error): void
}
interface ErrorCopyFunc {
    (srcError: Error, destError: Error): void
}
interface ErrorInitFunc {
    (error: Error): void
}
interface FreeFunc {
    (data?: object | null): void
}
interface Func {
    (data?: object | null): void
}
interface HFunc {
    (key?: object | null, value?: object | null): void
}
interface HRFunc {
    (key?: object | null, value?: object | null): boolean
}
interface HashFunc {
    (key?: object | null): number
}
interface HookCheckFunc {
    (data?: object | null): boolean
}
interface HookCheckMarshaller {
    (hook: Hook, marshalData?: object | null): boolean
}
interface HookCompareFunc {
    (newHook: Hook, sibling: Hook): number
}
interface HookFinalizeFunc {
    (hookList: HookList, hook: Hook): void
}
interface HookFindFunc {
    (hook: Hook, data?: object | null): boolean
}
interface HookFunc {
    (data?: object | null): void
}
interface HookMarshaller {
    (hook: Hook, marshalData?: object | null): void
}
interface IOFunc {
    (source: IOChannel, condition: IOCondition, data?: object | null): boolean
}
interface LogFunc {
    (logDomain: string, logLevel: LogLevelFlags, message: string): void
}
interface LogWriterFunc {
    (logLevel: LogLevelFlags, fields: LogField[]): LogWriterOutput
}
interface NodeForeachFunc {
    (node: Node, data?: object | null): void
}
interface NodeTraverseFunc {
    (node: Node, data?: object | null): boolean
}
interface OptionArgFunc {
    (optionName: string, value: string, data?: object | null): boolean
}
interface OptionErrorFunc {
    (context: OptionContext, group: OptionGroup, data?: object | null): void
}
interface OptionParseFunc {
    (context: OptionContext, group: OptionGroup, data?: object | null): boolean
}
interface PollFunc {
    (ufds: PollFD, nfsd: number, timeout: number): number
}
interface PrintFunc {
    (string: string): void
}
interface RegexEvalCallback {
    (matchInfo: MatchInfo, result: String): boolean
}
interface ScannerMsgFunc {
    (scanner: Scanner, message: string, error: boolean): void
}
interface SequenceIterCompareFunc {
    (a: SequenceIter, b: SequenceIter, data?: object | null): number
}
interface SourceDisposeFunc {
    (source: Source): void
}
interface SourceDummyMarshal {
    (): void
}
interface SourceFunc {
    (): boolean
}
interface SpawnChildSetupFunc {
    (): void
}
interface TestDataFunc {
    (): void
}
interface TestFixtureFunc {
    (fixture: object): void
}
interface TestFunc {
    (): void
}
interface TestLogFatalFunc {
    (logDomain: string, logLevel: LogLevelFlags, message: string): boolean
}
interface ThreadFunc {
    (data?: object | null): object | null
}
interface TranslateFunc {
    (str: string, data?: object | null): string
}
interface TraverseFunc {
    (key?: object | null, value?: object | null, data?: object | null): boolean
}
interface TraverseNodeFunc {
    (node: TreeNode, data?: object | null): boolean
}
interface UnixFDSourceFunc {
    (fd: number, condition: IOCondition): boolean
}
interface VoidFunc {
    (): void
}
class Array {
    /* Fields of GLib-2.0.GLib.Array */
    readonly data: string
    readonly len: number
    static name: string
}
class AsyncQueue {
    /* Methods of GLib-2.0.GLib.AsyncQueue */
    length(): number
    lengthUnlocked(): number
    lock(): void
    pop(): object | null
    popUnlocked(): object | null
    push(data?: object | null): void
    pushFront(item?: object | null): void
    pushFrontUnlocked(item?: object | null): void
    pushUnlocked(data?: object | null): void
    refUnlocked(): void
    remove(item?: object | null): boolean
    removeUnlocked(item?: object | null): boolean
    timedPop(endTime: TimeVal): object | null
    timedPopUnlocked(endTime: TimeVal): object | null
    timeoutPop(timeout: number): object | null
    timeoutPopUnlocked(timeout: number): object | null
    tryPop(): object | null
    tryPopUnlocked(): object | null
    unlock(): void
    unref(): void
    unrefAndUnlock(): void
    static name: string
}
class BookmarkFile {
    /* Methods of GLib-2.0.GLib.BookmarkFile */
    addApplication(uri: string, name?: string | null, exec?: string | null): void
    addGroup(uri: string, group: string): void
    free(): void
    getAdded(uri: string): number
    getAddedDateTime(uri: string): DateTime
    getAppInfo(uri: string, name: string): [ /* returnType */ boolean, /* exec */ string | null, /* count */ number | null, /* stamp */ number | null ]
    getApplicationInfo(uri: string, name: string): [ /* returnType */ boolean, /* exec */ string | null, /* count */ number | null, /* stamp */ DateTime | null ]
    getApplications(uri: string): string[]
    getDescription(uri: string): string
    getGroups(uri: string): string[]
    getIcon(uri: string): [ /* returnType */ boolean, /* href */ string | null, /* mimeType */ string | null ]
    getIsPrivate(uri: string): boolean
    getMimeType(uri: string): string
    getModified(uri: string): number
    getModifiedDateTime(uri: string): DateTime
    getSize(): number
    getTitle(uri?: string | null): string
    getUris(): string[]
    getVisited(uri: string): number
    getVisitedDateTime(uri: string): DateTime
    hasApplication(uri: string, name: string): boolean
    hasGroup(uri: string, group: string): boolean
    hasItem(uri: string): boolean
    loadFromData(data: Uint8Array): boolean
    loadFromDataDirs(file: string): [ /* returnType */ boolean, /* fullPath */ string | null ]
    loadFromFile(filename: string): boolean
    moveItem(oldUri: string, newUri?: string | null): boolean
    removeApplication(uri: string, name: string): boolean
    removeGroup(uri: string, group: string): boolean
    removeItem(uri: string): boolean
    setAdded(uri: string, added: number): void
    setAddedDateTime(uri: string, added: DateTime): void
    setAppInfo(uri: string, name: string, exec: string, count: number, stamp: number): boolean
    setApplicationInfo(uri: string, name: string, exec: string, count: number, stamp?: DateTime | null): boolean
    setDescription(uri: string | null, description: string): void
    setGroups(uri: string, groups: string[] | null): void
    setIcon(uri: string, href: string | null, mimeType: string): void
    setIsPrivate(uri: string, isPrivate: boolean): void
    setMimeType(uri: string, mimeType: string): void
    setModified(uri: string, modified: number): void
    setModifiedDateTime(uri: string, modified: DateTime): void
    setTitle(uri: string | null, title: string): void
    setVisited(uri: string, visited: number): void
    setVisitedDateTime(uri: string, visited: DateTime): void
    toData(): Uint8Array
    toFile(filename: string): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static errorQuark(): Quark
}
class ByteArray {
    /* Fields of GLib-2.0.GLib.ByteArray */
    readonly data: number
    readonly len: number
    static name: string
    /* Static methods and pseudo-constructors */
    static free(array: Uint8Array, freeSegment: boolean): number
    static freeToBytes(array: Uint8Array): any
    static newTake(data: Uint8Array): Uint8Array
    static steal(array: Uint8Array): [ /* returnType */ number, /* len */ number | null ]
    static unref(array: Uint8Array): void
}
class Bytes {
    /* Methods of GLib-2.0.GLib.Bytes */
    compare(bytes2: any): number
    equal(bytes2: any): boolean
    getData(): Uint8Array | null
    getRegion(elementSize: number, offset: number, nElements: number): object | null
    getSize(): number
    hash(): number
    newFromBytes(offset: number, length: number): any
    ref(): any
    unref(): void
    unrefToArray(): Uint8Array
    unrefToData(): Uint8Array
    static name: string
    static new(data: Uint8Array | null): Bytes
    constructor(data: Uint8Array | null)
    /* Static methods and pseudo-constructors */
    static new(data: Uint8Array | null): Bytes
    static newTake(data: Uint8Array | null): Bytes
}
class Checksum {
    /* Methods of GLib-2.0.GLib.Checksum */
    copy(): Checksum
    free(): void
    getString(): string
    reset(): void
    update(data: Uint8Array): void
    static name: string
    static new(checksumType: ChecksumType): Checksum
    constructor(checksumType: ChecksumType)
    /* Static methods and pseudo-constructors */
    static new(checksumType: ChecksumType): Checksum
    static typeGetLength(checksumType: ChecksumType): number
}
class Cond {
    /* Methods of GLib-2.0.GLib.Cond */
    broadcast(): void
    clear(): void
    init(): void
    signal(): void
    wait(mutex: Mutex): void
    waitUntil(mutex: Mutex, endTime: number): boolean
    static name: string
}
class Data {
    static name: string
}
class Date {
    /* Fields of GLib-2.0.GLib.Date */
    readonly julianDays: number
    readonly julian: number
    readonly dmy: number
    readonly day: number
    readonly month: number
    readonly year: number
    /* Methods of GLib-2.0.GLib.Date */
    addDays(nDays: number): void
    addMonths(nMonths: number): void
    addYears(nYears: number): void
    clamp(minDate: Date, maxDate: Date): void
    clear(nDates: number): void
    compare(rhs: Date): number
    copy(): Date
    daysBetween(date2: Date): number
    free(): void
    getDay(): DateDay
    getDayOfYear(): number
    getIso8601WeekOfYear(): number
    getJulian(): number
    getMondayWeekOfYear(): number
    getMonth(): DateMonth
    getSundayWeekOfYear(): number
    getWeekday(): DateWeekday
    getYear(): DateYear
    isFirstOfMonth(): boolean
    isLastOfMonth(): boolean
    order(date2: Date): void
    setDay(day: DateDay): void
    setDmy(day: DateDay, month: DateMonth, y: DateYear): void
    setJulian(julianDate: number): void
    setMonth(month: DateMonth): void
    setParse(str: string): void
    setTime(time: Time): void
    setTimeT(timet: number): void
    setTimeVal(timeval: TimeVal): void
    setYear(year: DateYear): void
    subtractDays(nDays: number): void
    subtractMonths(nMonths: number): void
    subtractYears(nYears: number): void
    toStructTm(tm: object): void
    valid(): boolean
    static name: string
    static new(): Date
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Date
    static newDmy(day: DateDay, month: DateMonth, year: DateYear): Date
    static newJulian(julianDay: number): Date
    static getDaysInMonth(month: DateMonth, year: DateYear): number
    static getMondayWeeksInYear(year: DateYear): number
    static getSundayWeeksInYear(year: DateYear): number
    static isLeapYear(year: DateYear): boolean
    static strftime(s: string, slen: number, format: string, date: Date): number
    static validDay(day: DateDay): boolean
    static validDmy(day: DateDay, month: DateMonth, year: DateYear): boolean
    static validJulian(julianDate: number): boolean
    static validMonth(month: DateMonth): boolean
    static validWeekday(weekday: DateWeekday): boolean
    static validYear(year: DateYear): boolean
}
class DateTime {
    /* Methods of GLib-2.0.GLib.DateTime */
    add(timespan: TimeSpan): DateTime | null
    addDays(days: number): DateTime | null
    addFull(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): DateTime | null
    addHours(hours: number): DateTime | null
    addMinutes(minutes: number): DateTime | null
    addMonths(months: number): DateTime | null
    addSeconds(seconds: number): DateTime | null
    addWeeks(weeks: number): DateTime | null
    addYears(years: number): DateTime | null
    compare(dt2: DateTime): number
    difference(begin: DateTime): TimeSpan
    equal(dt2: DateTime): boolean
    format(format: string): string | null
    formatIso8601(): string | null
    getDayOfMonth(): number
    getDayOfWeek(): number
    getDayOfYear(): number
    getHour(): number
    getMicrosecond(): number
    getMinute(): number
    getMonth(): number
    getSecond(): number
    getSeconds(): number
    getTimezone(): TimeZone
    getTimezoneAbbreviation(): string
    getUtcOffset(): TimeSpan
    getWeekNumberingYear(): number
    getWeekOfYear(): number
    getYear(): number
    getYmd(): [ /* year */ number | null, /* month */ number | null, /* day */ number | null ]
    hash(): number
    isDaylightSavings(): boolean
    ref(): DateTime
    toLocal(): DateTime | null
    toTimeval(tv: TimeVal): boolean
    toTimezone(tz: TimeZone): DateTime | null
    toUnix(): number
    toUtc(): DateTime | null
    unref(): void
    static name: string
    static new(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    constructor(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number)
    /* Static methods and pseudo-constructors */
    static new(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static newFromIso8601(text: string, defaultTz?: TimeZone | null): DateTime
    static newFromTimevalLocal(tv: TimeVal): DateTime
    static newFromTimevalUtc(tv: TimeVal): DateTime
    static newFromUnixLocal(t: number): DateTime
    static newFromUnixUtc(t: number): DateTime
    static newLocal(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    static newNow(tz: TimeZone): DateTime
    static newNowLocal(): DateTime
    static newNowUtc(): DateTime
    static newUtc(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
}
class DebugKey {
    /* Fields of GLib-2.0.GLib.DebugKey */
    readonly key: string
    readonly value: number
    static name: string
}
class Dir {
    /* Methods of GLib-2.0.GLib.Dir */
    close(): void
    readName(): string
    rewind(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static makeTmp(tmpl?: string | null): string
}
class Error {
    /* Fields of GLib-2.0.GLib.Error */
    readonly domain: Quark
    readonly code: number
    readonly message: string
    /* Methods of GLib-2.0.GLib.Error */
    copy(): Error
    free(): void
    matches(domain: Quark, code: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static newLiteral(domain: Quark, code: number, message: string): Error
}
class HashTable {
    static name: string
    /* Static methods and pseudo-constructors */
    static add(hashTable: HashTable, key?: object | null): boolean
    static contains(hashTable: HashTable, key?: object | null): boolean
    static destroy(hashTable: HashTable): void
    static insert(hashTable: HashTable, key?: object | null, value?: object | null): boolean
    static lookup(hashTable: HashTable, key?: object | null): object | null
    static lookupExtended(hashTable: HashTable, lookupKey?: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
    static remove(hashTable: HashTable, key?: object | null): boolean
    static removeAll(hashTable: HashTable): void
    static replace(hashTable: HashTable, key?: object | null, value?: object | null): boolean
    static size(hashTable: HashTable): number
    static steal(hashTable: HashTable, key?: object | null): boolean
    static stealAll(hashTable: HashTable): void
    static stealExtended(hashTable: HashTable, lookupKey?: object | null): [ /* returnType */ boolean, /* stolenKey */ object | null, /* stolenValue */ object | null ]
    static unref(hashTable: HashTable): void
}
class HashTableIter {
    /* Methods of GLib-2.0.GLib.HashTableIter */
    init(hashTable: HashTable): void
    next(): [ /* returnType */ boolean, /* key */ object | null, /* value */ object | null ]
    remove(): void
    replace(value?: object | null): void
    steal(): void
    static name: string
}
class Hmac {
    /* Methods of GLib-2.0.GLib.Hmac */
    getDigest(buffer: Uint8Array): void
    getString(): string
    unref(): void
    update(data: Uint8Array): void
    static name: string
}
class Hook {
    /* Fields of GLib-2.0.GLib.Hook */
    readonly data: object
    readonly next: Hook
    readonly prev: Hook
    readonly refCount: number
    readonly hookId: number
    readonly flags: number
    readonly func: object
    readonly destroy: DestroyNotify
    /* Methods of GLib-2.0.GLib.Hook */
    compareIds(sibling: Hook): number
    static name: string
    /* Static methods and pseudo-constructors */
    static destroy(hookList: HookList, hookId: number): boolean
    static destroyLink(hookList: HookList, hook: Hook): void
    static free(hookList: HookList, hook: Hook): void
    static insertBefore(hookList: HookList, sibling: Hook | null, hook: Hook): void
    static prepend(hookList: HookList, hook: Hook): void
    static unref(hookList: HookList, hook: Hook): void
}
class HookList {
    /* Fields of GLib-2.0.GLib.HookList */
    readonly seqId: number
    readonly hookSize: number
    readonly isSetup: number
    readonly hooks: Hook
    readonly dummy3: object
    readonly finalizeHook: HookFinalizeFunc
    readonly dummy: object[]
    /* Methods of GLib-2.0.GLib.HookList */
    clear(): void
    init(hookSize: number): void
    invoke(mayRecurse: boolean): void
    invokeCheck(mayRecurse: boolean): void
    static name: string
}
class IConv {
    static name: string
}
class IOChannel {
    /* Methods of GLib-2.0.GLib.IOChannel */
    close(): void
    flush(): IOStatus
    getBufferCondition(): IOCondition
    getBufferSize(): number
    getBuffered(): boolean
    getCloseOnUnref(): boolean
    getEncoding(): string
    getFlags(): IOFlags
    getLineTerm(length: number): string
    init(): void
    read(buf: string, count: number, bytesRead: number): IOError
    readChars(): [ /* returnType */ IOStatus, /* buf */ Uint8Array, /* bytesRead */ number | null ]
    readLine(): [ /* returnType */ IOStatus, /* strReturn */ string, /* length */ number | null, /* terminatorPos */ number | null ]
    readLineString(buffer: String, terminatorPos?: number | null): IOStatus
    readToEnd(): [ /* returnType */ IOStatus, /* strReturn */ Uint8Array ]
    readUnichar(): [ /* returnType */ IOStatus, /* thechar */ number ]
    ref(): IOChannel
    seek(offset: number, type: SeekType): IOError
    seekPosition(offset: number, type: SeekType): IOStatus
    setBufferSize(size: number): void
    setBuffered(buffered: boolean): void
    setCloseOnUnref(doClose: boolean): void
    setEncoding(encoding?: string | null): IOStatus
    setFlags(flags: IOFlags): IOStatus
    setLineTerm(lineTerm: string | null, length: number): void
    shutdown(flush: boolean): IOStatus
    unixGetFd(): number
    unref(): void
    write(buf: string, count: number, bytesWritten: number): IOError
    writeChars(buf: Uint8Array, count: number): [ /* returnType */ IOStatus, /* bytesWritten */ number ]
    writeUnichar(thechar: number): IOStatus
    static name: string
    /* Static methods and pseudo-constructors */
    static newFile(filename: string, mode: string): IOChannel
    static unixNew(fd: number): IOChannel
    static errorFromErrno(en: number): IOChannelError
    static errorQuark(): Quark
}
class IOFuncs {
    /* Fields of GLib-2.0.GLib.IOFuncs */
    readonly ioRead: (channel: IOChannel, buf: string, count: number, bytesRead: number) => IOStatus
    readonly ioWrite: (channel: IOChannel, buf: string, count: number, bytesWritten: number) => IOStatus
    readonly ioSeek: (channel: IOChannel, offset: number, type: SeekType) => IOStatus
    readonly ioClose: (channel: IOChannel) => IOStatus
    readonly ioCreateWatch: (channel: IOChannel, condition: IOCondition) => Source
    readonly ioFree: (channel: IOChannel) => void
    readonly ioSetFlags: (channel: IOChannel, flags: IOFlags) => IOStatus
    readonly ioGetFlags: (channel: IOChannel) => IOFlags
    static name: string
}
class KeyFile {
    /* Methods of GLib-2.0.GLib.KeyFile */
    getBoolean(groupName: string, key: string): boolean
    getBooleanList(groupName: string, key: string): boolean[]
    getComment(groupName?: string | null, key?: string | null): string
    getDouble(groupName: string, key: string): number
    getDoubleList(groupName: string, key: string): number[]
    getGroups(): [ /* returnType */ string[], /* length */ number | null ]
    getInt64(groupName: string, key: string): number
    getInteger(groupName: string, key: string): number
    getIntegerList(groupName: string, key: string): number[]
    getKeys(groupName: string): [ /* returnType */ string[], /* length */ number | null ]
    getLocaleForKey(groupName: string, key: string, locale?: string | null): string | null
    getLocaleString(groupName: string, key: string, locale?: string | null): string
    getLocaleStringList(groupName: string, key: string, locale?: string | null): string[]
    getStartGroup(): string | null
    getString(groupName: string, key: string): string
    getStringList(groupName: string, key: string): string[]
    getUint64(groupName: string, key: string): number
    getValue(groupName: string, key: string): string
    hasGroup(groupName: string): boolean
    loadFromBytes(bytes: any, flags: KeyFileFlags): boolean
    loadFromData(data: string, length: number, flags: KeyFileFlags): boolean
    loadFromDataDirs(file: string, flags: KeyFileFlags): [ /* returnType */ boolean, /* fullPath */ string | null ]
    loadFromDirs(file: string, searchDirs: string[], flags: KeyFileFlags): [ /* returnType */ boolean, /* fullPath */ string | null ]
    loadFromFile(file: string, flags: KeyFileFlags): boolean
    removeComment(groupName?: string | null, key?: string | null): boolean
    removeGroup(groupName: string): boolean
    removeKey(groupName: string, key: string): boolean
    saveToFile(filename: string): boolean
    setBoolean(groupName: string, key: string, value: boolean): void
    setBooleanList(groupName: string, key: string, list: boolean[]): void
    setComment(groupName: string | null, key: string | null, comment: string): boolean
    setDouble(groupName: string, key: string, value: number): void
    setDoubleList(groupName: string, key: string, list: number[]): void
    setInt64(groupName: string, key: string, value: number): void
    setInteger(groupName: string, key: string, value: number): void
    setIntegerList(groupName: string, key: string, list: number[]): void
    setListSeparator(separator: number): void
    setLocaleString(groupName: string, key: string, locale: string, string: string): void
    setLocaleStringList(groupName: string, key: string, locale: string, list: string[]): void
    setString(groupName: string, key: string, string: string): void
    setStringList(groupName: string, key: string, list: string[]): void
    setUint64(groupName: string, key: string, value: number): void
    setValue(groupName: string, key: string, value: string): void
    toData(): [ /* returnType */ string, /* length */ number | null ]
    unref(): void
    static name: string
    static new(): KeyFile
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): KeyFile
    static errorQuark(): Quark
}
class List {
    /* Fields of GLib-2.0.GLib.List */
    readonly data: object
    readonly next: object[]
    readonly prev: object[]
    static name: string
}
class LogField {
    /* Fields of GLib-2.0.GLib.LogField */
    readonly key: string
    readonly value: object
    readonly length: number
    static name: string
}
class MainContext {
    /* Methods of GLib-2.0.GLib.MainContext */
    acquire(): boolean
    addPoll(fd: PollFD, priority: number): void
    check(maxPriority: number, fds: PollFD[]): boolean
    dispatch(): void
    findSourceByFuncsUserData(funcs: SourceFuncs, userData?: object | null): Source
    findSourceById(sourceId: number): Source
    findSourceByUserData(userData?: object | null): Source
    invokeFull(priority: number, function_: SourceFunc): void
    isOwner(): boolean
    iteration(mayBlock: boolean): boolean
    pending(): boolean
    popThreadDefault(): void
    prepare(): [ /* returnType */ boolean, /* priority */ number | null ]
    pushThreadDefault(): void
    query(maxPriority: number): [ /* returnType */ number, /* timeout */ number, /* fds */ PollFD[] ]
    ref(): MainContext
    release(): void
    removePoll(fd: PollFD): void
    unref(): void
    wait(cond: Cond, mutex: Mutex): boolean
    wakeup(): void
    static name: string
    static new(): MainContext
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MainContext
    static newWithFlags(flags: MainContextFlags): MainContext
    static default(): MainContext
    static getThreadDefault(): MainContext | null
    static refThreadDefault(): MainContext
}
class MainLoop {
    /* Methods of GLib-2.0.GLib.MainLoop */
    getContext(): MainContext
    isRunning(): boolean
    quit(): void
    ref(): MainLoop
    run(): void
    unref(): void
    static name: string
    static new(context: MainContext | null, isRunning: boolean): MainLoop
    constructor(context: MainContext | null, isRunning: boolean)
    /* Static methods and pseudo-constructors */
    static new(context: MainContext | null, isRunning: boolean): MainLoop
}
class MappedFile {
    /* Methods of GLib-2.0.GLib.MappedFile */
    free(): void
    getBytes(): any
    getContents(): string
    getLength(): number
    ref(): MappedFile
    unref(): void
    static name: string
    static new(filename: string, writable: boolean): MappedFile
    constructor(filename: string, writable: boolean)
    /* Static methods and pseudo-constructors */
    static new(filename: string, writable: boolean): MappedFile
    static newFromFd(fd: number, writable: boolean): MappedFile
}
class MarkupParseContext {
    /* Methods of GLib-2.0.GLib.MarkupParseContext */
    endParse(): boolean
    free(): void
    getElement(): string
    getPosition(): [ /* lineNumber */ number | null, /* charNumber */ number | null ]
    getUserData(): object | null
    parse(text: string, textLen: number): boolean
    pop(): object | null
    push(parser: MarkupParser, userData?: object | null): void
    ref(): MarkupParseContext
    unref(): void
    static name: string
    static new(parser: MarkupParser, flags: MarkupParseFlags, userData: object | null, userDataDnotify: DestroyNotify): MarkupParseContext
    constructor(parser: MarkupParser, flags: MarkupParseFlags, userData: object | null, userDataDnotify: DestroyNotify)
    /* Static methods and pseudo-constructors */
    static new(parser: MarkupParser, flags: MarkupParseFlags, userData: object | null, userDataDnotify: DestroyNotify): MarkupParseContext
}
class MarkupParser {
    /* Fields of GLib-2.0.GLib.MarkupParser */
    readonly startElement: (context: MarkupParseContext, elementName: string, attributeNames: string, attributeValues: string) => void
    readonly endElement: (context: MarkupParseContext, elementName: string) => void
    readonly text: (context: MarkupParseContext, text: string, textLen: number) => void
    readonly passthrough: (context: MarkupParseContext, passthroughText: string, textLen: number) => void
    readonly error: (context: MarkupParseContext, error: Error) => void
    static name: string
}
class MatchInfo {
    /* Methods of GLib-2.0.GLib.MatchInfo */
    expandReferences(stringToExpand: string): string | null
    fetch(matchNum: number): string | null
    fetchAll(): string[]
    fetchNamed(name: string): string | null
    fetchNamedPos(name: string): [ /* returnType */ boolean, /* startPos */ number | null, /* endPos */ number | null ]
    fetchPos(matchNum: number): [ /* returnType */ boolean, /* startPos */ number | null, /* endPos */ number | null ]
    free(): void
    getMatchCount(): number
    getRegex(): Regex
    getString(): string
    isPartialMatch(): boolean
    matches(): boolean
    next(): boolean
    ref(): MatchInfo
    unref(): void
    static name: string
}
class MemVTable {
    /* Fields of GLib-2.0.GLib.MemVTable */
    readonly malloc: (nBytes: number) => object
    readonly realloc: (mem: object, nBytes: number) => object
    readonly free: (mem: object) => void
    readonly calloc: (nBlocks: number, nBlockBytes: number) => object
    readonly tryMalloc: (nBytes: number) => object
    readonly tryRealloc: (mem: object, nBytes: number) => object
    static name: string
}
class Node {
    /* Fields of GLib-2.0.GLib.Node */
    readonly data: object
    readonly next: Node
    readonly prev: Node
    readonly parent: Node
    readonly children: Node
    /* Methods of GLib-2.0.GLib.Node */
    childIndex(data?: object | null): number
    childPosition(child: Node): number
    depth(): number
    destroy(): void
    isAncestor(descendant: Node): boolean
    maxHeight(): number
    nChildren(): number
    nNodes(flags: TraverseFlags): number
    reverseChildren(): void
    unlink(): void
    static name: string
}
class Once {
    /* Fields of GLib-2.0.GLib.Once */
    readonly status: OnceStatus
    readonly retval: object
    static name: string
    /* Static methods and pseudo-constructors */
    static initEnter(location: object): boolean
    static initLeave(location: object, result: number): void
}
class OptionContext {
    /* Methods of GLib-2.0.GLib.OptionContext */
    addGroup(group: OptionGroup): void
    addMainEntries(entries: OptionEntry[], translationDomain?: string | null): void
    free(): void
    getDescription(): string
    getHelp(mainHelp: boolean, group?: OptionGroup | null): string
    getHelpEnabled(): boolean
    getIgnoreUnknownOptions(): boolean
    getMainGroup(): OptionGroup
    getStrictPosix(): boolean
    getSummary(): string
    parse(argv?: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
    parseStrv(arguments_?: string[] | null): [ /* returnType */ boolean, /* arguments_ */ string[] | null ]
    setDescription(description?: string | null): void
    setHelpEnabled(helpEnabled: boolean): void
    setIgnoreUnknownOptions(ignoreUnknown: boolean): void
    setMainGroup(group: OptionGroup): void
    setStrictPosix(strictPosix: boolean): void
    setSummary(summary?: string | null): void
    setTranslateFunc(func?: TranslateFunc | null): void
    setTranslationDomain(domain: string): void
    static name: string
}
class OptionEntry {
    /* Fields of GLib-2.0.GLib.OptionEntry */
    readonly longName: string
    readonly shortName: number
    readonly flags: number
    readonly arg: OptionArg
    readonly argData: object
    readonly description: string
    readonly argDescription: string
    static name: string
}
class OptionGroup {
    /* Methods of GLib-2.0.GLib.OptionGroup */
    addEntries(entries: OptionEntry[]): void
    free(): void
    ref(): OptionGroup
    setTranslateFunc(func?: TranslateFunc | null): void
    setTranslationDomain(domain: string): void
    unref(): void
    static name: string
    static new(name: string, description: string, helpDescription: string, userData?: object | null, destroy?: DestroyNotify | null): OptionGroup
    constructor(name: string, description: string, helpDescription: string, userData?: object | null, destroy?: DestroyNotify | null)
    /* Static methods and pseudo-constructors */
    static new(name: string, description: string, helpDescription: string, userData?: object | null, destroy?: DestroyNotify | null): OptionGroup
}
class PatternSpec {
    /* Methods of GLib-2.0.GLib.PatternSpec */
    copy(): PatternSpec
    equal(pspec2: PatternSpec): boolean
    free(): void
    match(stringLength: number, string: string, stringReversed?: string | null): boolean
    matchString(string: string): boolean
    static name: string
    static new(pattern: string): PatternSpec
    constructor(pattern: string)
    /* Static methods and pseudo-constructors */
    static new(pattern: string): PatternSpec
}
class PollFD {
    /* Fields of GLib-2.0.GLib.PollFD */
    readonly fd: number
    readonly events: number
    readonly revents: number
    static name: string
}
class Private {
    /* Methods of GLib-2.0.GLib.Private */
    get(): object | null
    replace(value?: object | null): void
    set(value?: object | null): void
    static name: string
}
class PtrArray {
    /* Fields of GLib-2.0.GLib.PtrArray */
    readonly pdata: object
    readonly len: number
    static name: string
}
class Queue {
    /* Fields of GLib-2.0.GLib.Queue */
    readonly head: object[]
    readonly tail: object[]
    readonly length: number
    /* Methods of GLib-2.0.GLib.Queue */
    clear(): void
    clearFull(freeFunc?: DestroyNotify | null): void
    free(): void
    freeFull(freeFunc: DestroyNotify): void
    getLength(): number
    index(data?: object | null): number
    init(): void
    isEmpty(): boolean
    peekHead(): object | null
    peekNth(n: number): object | null
    peekTail(): object | null
    popHead(): object | null
    popNth(n: number): object | null
    popTail(): object | null
    pushHead(data?: object | null): void
    pushNth(data: object | null, n: number): void
    pushTail(data?: object | null): void
    remove(data?: object | null): boolean
    removeAll(data?: object | null): number
    reverse(): void
    static name: string
}
class RWLock {
    /* Methods of GLib-2.0.GLib.RWLock */
    clear(): void
    init(): void
    readerLock(): void
    readerTrylock(): boolean
    readerUnlock(): void
    writerLock(): void
    writerTrylock(): boolean
    writerUnlock(): void
    static name: string
}
class Rand {
    /* Methods of GLib-2.0.GLib.Rand */
    double(): number
    doubleRange(begin: number, end: number): number
    free(): void
    int(): number
    intRange(begin: number, end: number): number
    setSeed(seed: number): void
    setSeedArray(seed: number, seedLength: number): void
    static name: string
}
class RecMutex {
    /* Methods of GLib-2.0.GLib.RecMutex */
    clear(): void
    init(): void
    lock(): void
    trylock(): boolean
    unlock(): void
    static name: string
}
class Regex {
    /* Methods of GLib-2.0.GLib.Regex */
    getCaptureCount(): number
    getCompileFlags(): RegexCompileFlags
    getHasCrOrLf(): boolean
    getMatchFlags(): RegexMatchFlags
    getMaxBackref(): number
    getMaxLookbehind(): number
    getPattern(): string
    getStringNumber(name: string): number
    match(string: string, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo | null ]
    matchAll(string: string, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo | null ]
    matchAllFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo | null ]
    matchFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo | null ]
    ref(): Regex
    replace(string: string[], startPosition: number, replacement: string, matchOptions: RegexMatchFlags): string
    replaceLiteral(string: string[], startPosition: number, replacement: string, matchOptions: RegexMatchFlags): string
    split(string: string, matchOptions: RegexMatchFlags): string[]
    splitFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags, maxTokens: number): string[]
    unref(): void
    static name: string
    static new(pattern: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): Regex
    constructor(pattern: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags)
    /* Static methods and pseudo-constructors */
    static new(pattern: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): Regex
    static checkReplacement(replacement: string): [ /* returnType */ boolean, /* hasReferences */ boolean | null ]
    static errorQuark(): Quark
    static escapeNul(string: string, length: number): string
    static escapeString(string: string[]): string
    static matchSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): boolean
    static splitSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): string[]
}
class SList {
    /* Fields of GLib-2.0.GLib.SList */
    readonly data: object
    readonly next: object[]
    static name: string
}
class Scanner {
    /* Fields of GLib-2.0.GLib.Scanner */
    readonly userData: object
    readonly maxParseErrors: number
    readonly parseErrors: number
    readonly inputName: string
    readonly qdata: Data
    readonly config: ScannerConfig
    readonly token: TokenType
    readonly value: TokenValue
    readonly line: number
    readonly position: number
    readonly nextToken: TokenType
    readonly nextValue: TokenValue
    readonly nextLine: number
    readonly nextPosition: number
    readonly msgHandler: ScannerMsgFunc
    /* Methods of GLib-2.0.GLib.Scanner */
    curLine(): number
    curPosition(): number
    curToken(): TokenType
    destroy(): void
    eof(): boolean
    getNextToken(): TokenType
    inputFile(inputFd: number): void
    inputText(text: string, textLen: number): void
    lookupSymbol(symbol: string): object | null
    peekNextToken(): TokenType
    scopeAddSymbol(scopeId: number, symbol: string, value?: object | null): void
    scopeLookupSymbol(scopeId: number, symbol: string): object | null
    scopeRemoveSymbol(scopeId: number, symbol: string): void
    setScope(scopeId: number): number
    syncFileOffset(): void
    unexpToken(expectedToken: TokenType, identifierSpec: string, symbolSpec: string, symbolName: string, message: string, isError: number): void
    static name: string
}
class ScannerConfig {
    /* Fields of GLib-2.0.GLib.ScannerConfig */
    readonly csetSkipCharacters: string
    readonly csetIdentifierFirst: string
    readonly csetIdentifierNth: string
    readonly cpairCommentSingle: string
    readonly caseSensitive: number
    readonly skipCommentMulti: number
    readonly skipCommentSingle: number
    readonly scanCommentMulti: number
    readonly scanIdentifier: number
    readonly scanIdentifier1char: number
    readonly scanIdentifierNULL: number
    readonly scanSymbols: number
    readonly scanBinary: number
    readonly scanOctal: number
    readonly scanFloat: number
    readonly scanHex: number
    readonly scanHexDollar: number
    readonly scanStringSq: number
    readonly scanStringDq: number
    readonly numbers2Int: number
    readonly int2Float: number
    readonly identifier2String: number
    readonly char2Token: number
    readonly symbol2Token: number
    readonly scope0Fallback: number
    readonly storeInt64: number
    static name: string
}
class Sequence {
    /* Methods of GLib-2.0.GLib.Sequence */
    append(data?: object | null): SequenceIter
    free(): void
    getBeginIter(): SequenceIter
    getEndIter(): SequenceIter
    getIterAtPos(pos: number): SequenceIter
    getLength(): number
    isEmpty(): boolean
    prepend(data?: object | null): SequenceIter
    static name: string
    /* Static methods and pseudo-constructors */
    static get(iter: SequenceIter): object | null
    static insertBefore(iter: SequenceIter, data?: object | null): SequenceIter
    static move(src: SequenceIter, dest: SequenceIter): void
    static moveRange(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void
    static rangeGetMidpoint(begin: SequenceIter, end: SequenceIter): SequenceIter
    static remove(iter: SequenceIter): void
    static removeRange(begin: SequenceIter, end: SequenceIter): void
    static set(iter: SequenceIter, data?: object | null): void
    static swap(a: SequenceIter, b: SequenceIter): void
}
class SequenceIter {
    /* Methods of GLib-2.0.GLib.SequenceIter */
    compare(b: SequenceIter): number
    getPosition(): number
    getSequence(): Sequence
    isBegin(): boolean
    isEnd(): boolean
    move(delta: number): SequenceIter
    next(): SequenceIter
    prev(): SequenceIter
    static name: string
}
class Source {
    /* Methods of GLib-2.0.GLib.Source */
    addChildSource(childSource: Source): void
    addPoll(fd: PollFD): void
    addUnixFd(fd: number, events: IOCondition): object
    attach(context?: MainContext | null): number
    destroy(): void
    getCanRecurse(): boolean
    getContext(): MainContext | null
    getCurrentTime(timeval: TimeVal): void
    getId(): number
    getName(): string | null
    getPriority(): number
    getReadyTime(): number
    getTime(): number
    isDestroyed(): boolean
    modifyUnixFd(tag: object, newEvents: IOCondition): void
    queryUnixFd(tag: object): IOCondition
    ref(): Source
    removeChildSource(childSource: Source): void
    removePoll(fd: PollFD): void
    removeUnixFd(tag: object): void
    setCallback(func: SourceFunc): void
    setCallbackIndirect(callbackData: object | null, callbackFuncs: SourceCallbackFuncs): void
    setCanRecurse(canRecurse: boolean): void
    setFuncs(funcs: SourceFuncs): void
    setName(name: string): void
    setPriority(priority: number): void
    setReadyTime(readyTime: number): void
    setStaticName(name: string): void
    unref(): void
    static name: string
    static new(sourceFuncs: SourceFuncs, structSize: number): Source
    constructor(sourceFuncs: SourceFuncs, structSize: number)
    /* Static methods and pseudo-constructors */
    static new(sourceFuncs: SourceFuncs, structSize: number): Source
    static remove(tag: number): boolean
    static removeByFuncsUserData(funcs: SourceFuncs, userData?: object | null): boolean
    static removeByUserData(userData?: object | null): boolean
    static setNameById(tag: number, name: string): void
}
class SourceCallbackFuncs {
    /* Fields of GLib-2.0.GLib.SourceCallbackFuncs */
    readonly ref: (cbData: object) => void
    readonly unref: (cbData: object) => void
    static name: string
}
class SourceFuncs {
    /* Fields of GLib-2.0.GLib.SourceFuncs */
    readonly prepare: (source: Source, timeout: number) => boolean
    readonly check: (source: Source) => boolean
    readonly finalize: (source: Source) => void
    static name: string
}
class SourcePrivate {
    static name: string
}
class StatBuf {
    static name: string
}
class String {
    /* Fields of GLib-2.0.GLib.String */
    readonly str: string
    readonly len: number
    readonly allocatedLen: number
    /* Methods of GLib-2.0.GLib.String */
    append(val: string): String
    appendC(c: number): String
    appendLen(val: string, len: number): String
    appendUnichar(wc: number): String
    appendUriEscaped(unescaped: string, reservedCharsAllowed: string, allowUtf8: boolean): String
    asciiDown(): String
    asciiUp(): String
    assign(rval: string): String
    down(): String
    equal(v2: String): boolean
    erase(pos: number, len: number): String
    free(freeSegment: boolean): string | null
    freeToBytes(): any
    hash(): number
    insert(pos: number, val: string): String
    insertC(pos: number, c: number): String
    insertLen(pos: number, val: string, len: number): String
    insertUnichar(pos: number, wc: number): String
    overwrite(pos: number, val: string): String
    overwriteLen(pos: number, val: string, len: number): String
    prepend(val: string): String
    prependC(c: number): String
    prependLen(val: string, len: number): String
    prependUnichar(wc: number): String
    replace(find: string, replace: string, limit: number): number
    setSize(len: number): String
    truncate(len: number): String
    up(): String
    static name: string
    static new(init?: string | null): String
    constructor(init?: string | null)
    /* Static methods and pseudo-constructors */
    static new(init?: string | null): String
    static newLen(init: string, len: number): String
    static sizedNew(dflSize: number): String
}
class StringChunk {
    /* Methods of GLib-2.0.GLib.StringChunk */
    clear(): void
    free(): void
    insert(string: string): string
    insertConst(string: string): string
    insertLen(string: string, len: number): string
    static name: string
}
class StrvBuilder {
    /* Methods of GLib-2.0.GLib.StrvBuilder */
    add(value: string): void
    addv(value: string[]): void
    end(): string[]
    unref(): void
    static name: string
}
class TestCase {
    /* Methods of GLib-2.0.GLib.TestCase */
    free(): void
    static name: string
}
class TestConfig {
    /* Fields of GLib-2.0.GLib.TestConfig */
    readonly testInitialized: boolean
    readonly testQuick: boolean
    readonly testPerf: boolean
    readonly testVerbose: boolean
    readonly testQuiet: boolean
    readonly testUndefined: boolean
    static name: string
}
class TestLogBuffer {
    /* Methods of GLib-2.0.GLib.TestLogBuffer */
    free(): void
    push(nBytes: number, bytes: number): void
    static name: string
}
class TestLogMsg {
    /* Fields of GLib-2.0.GLib.TestLogMsg */
    readonly logType: TestLogType
    readonly nStrings: number
    readonly strings: string
    readonly nNums: number
    /* Methods of GLib-2.0.GLib.TestLogMsg */
    free(): void
    static name: string
}
class TestSuite {
    /* Methods of GLib-2.0.GLib.TestSuite */
    add(testCase: TestCase): void
    addSuite(nestedsuite: TestSuite): void
    free(): void
    static name: string
}
class Thread {
    /* Methods of GLib-2.0.GLib.Thread */
    join(): object | null
    ref(): Thread
    unref(): void
    static name: string
    static new(name: string | null, func: ThreadFunc): Thread
    constructor(name: string | null, func: ThreadFunc)
    /* Static methods and pseudo-constructors */
    static new(name: string | null, func: ThreadFunc): Thread
    static tryNew(name: string | null, func: ThreadFunc): Thread
    static errorQuark(): Quark
    static exit(retval?: object | null): void
    static self(): Thread
    static yield(): void
}
class ThreadPool {
    /* Fields of GLib-2.0.GLib.ThreadPool */
    readonly func: Func
    readonly userData: object
    readonly exclusive: boolean
    /* Methods of GLib-2.0.GLib.ThreadPool */
    free(immediate: boolean, wait: boolean): void
    getMaxThreads(): number
    getNumThreads(): number
    moveToFront(data?: object | null): boolean
    push(data?: object | null): boolean
    setMaxThreads(maxThreads: number): boolean
    unprocessed(): number
    static name: string
    /* Static methods and pseudo-constructors */
    static getMaxIdleTime(): number
    static getMaxUnusedThreads(): number
    static getNumUnusedThreads(): number
    static setMaxIdleTime(interval: number): void
    static setMaxUnusedThreads(maxThreads: number): void
    static stopUnusedThreads(): void
}
class TimeVal {
    /* Fields of GLib-2.0.GLib.TimeVal */
    readonly tvSec: number
    readonly tvUsec: number
    /* Methods of GLib-2.0.GLib.TimeVal */
    add(microseconds: number): void
    toIso8601(): string | null
    static name: string
    /* Static methods and pseudo-constructors */
    static fromIso8601(isoDate: string): [ /* returnType */ boolean, /* time */ TimeVal ]
}
class TimeZone {
    /* Methods of GLib-2.0.GLib.TimeZone */
    adjustTime(type: TimeType, time: number): number
    findInterval(type: TimeType, time: number): number
    getAbbreviation(interval: number): string
    getIdentifier(): string
    getOffset(interval: number): number
    isDst(interval: number): boolean
    ref(): TimeZone
    unref(): void
    static name: string
    static new(identifier?: string | null): TimeZone
    constructor(identifier?: string | null)
    /* Static methods and pseudo-constructors */
    static new(identifier?: string | null): TimeZone
    static newIdentifier(identifier?: string | null): TimeZone
    static newLocal(): TimeZone
    static newOffset(seconds: number): TimeZone
    static newUtc(): TimeZone
}
class Timer {
    /* Methods of GLib-2.0.GLib.Timer */
    continue(): void
    destroy(): void
    elapsed(microseconds: number): number
    isActive(): boolean
    reset(): void
    start(): void
    stop(): void
    static name: string
}
class TrashStack {
    /* Fields of GLib-2.0.GLib.TrashStack */
    readonly next: TrashStack
    static name: string
    /* Static methods and pseudo-constructors */
    static height(stackP: TrashStack): number
    static peek(stackP: TrashStack): object | null
    static pop(stackP: TrashStack): object | null
    static push(stackP: TrashStack, dataP: object): void
}
class Tree {
    /* Methods of GLib-2.0.GLib.Tree */
    destroy(): void
    height(): number
    insert(key?: object | null, value?: object | null): void
    insertNode(key?: object | null, value?: object | null): TreeNode
    lookup(key?: object | null): object | null
    lookupExtended(lookupKey?: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
    lookupNode(key?: object | null): TreeNode | null
    lowerBound(key?: object | null): TreeNode | null
    nnodes(): number
    nodeFirst(): TreeNode | null
    nodeLast(): TreeNode | null
    ref(): Tree
    remove(key?: object | null): boolean
    removeAll(): void
    replace(key?: object | null, value?: object | null): void
    replaceNode(key?: object | null, value?: object | null): TreeNode
    steal(key?: object | null): boolean
    unref(): void
    upperBound(key?: object | null): TreeNode | null
    static name: string
    /* Static methods and pseudo-constructors */
    static newFull(keyCompareFunc: CompareDataFunc, keyDestroyFunc: DestroyNotify): Tree
}
class TreeNode {
    /* Methods of GLib-2.0.GLib.TreeNode */
    key(): object | null
    next(): TreeNode | null
    previous(): TreeNode | null
    value(): object | null
    static name: string
}
class Uri {
    /* Methods of GLib-2.0.GLib.Uri */
    getAuthParams(): string | null
    getFlags(): UriFlags
    getFragment(): string | null
    getHost(): string | null
    getPassword(): string | null
    getPath(): string
    getPort(): number
    getQuery(): string | null
    getScheme(): string
    getUser(): string | null
    getUserinfo(): string | null
    parseRelative(uriRef: string, flags: UriFlags): Uri
    toString(): string
    toStringPartial(flags: UriHideFlags): string
    static name: string
    /* Static methods and pseudo-constructors */
    static build(flags: UriFlags, scheme: string, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
    static buildWithUser(flags: UriFlags, scheme: string, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): Uri
    static errorQuark(): Quark
    static escapeBytes(unescaped: Uint8Array, reservedCharsAllowed?: string | null): string
    static escapeString(unescaped: string, reservedCharsAllowed: string | null, allowUtf8: boolean): string
    static isValid(uriString: string, flags: UriFlags): boolean
    static join(flags: UriFlags, scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
    static joinWithUser(flags: UriFlags, scheme: string | null, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query?: string | null, fragment?: string | null): string
    static listExtractUris(uriList: string): string[]
    static parse(uriString: string, flags: UriFlags): Uri
    static parseParams(params: string, length: number, separators: string, flags: UriParamsFlags): HashTable
    static parseScheme(uri: string): string | null
    static peekScheme(uri: string): string | null
    static resolveRelative(baseUriString: string | null, uriRef: string, flags: UriFlags): string
    static split(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* userinfo */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
    static splitNetwork(uriString: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* host */ string | null, /* port */ number | null ]
    static splitWithUser(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* password */ string | null, /* authParams */ string | null, /* host */ string | null, /* port */ number | null, /* path */ string | null, /* query */ string | null, /* fragment */ string | null ]
    static unescapeBytes(escapedString: string, length: number, illegalCharacters?: string | null): any
    static unescapeSegment(escapedString?: string | null, escapedStringEnd?: string | null, illegalCharacters?: string | null): string | null
    static unescapeString(escapedString: string, illegalCharacters?: string | null): string | null
}
class UriParamsIter {
    /* Methods of GLib-2.0.GLib.UriParamsIter */
    init(params: string, length: number, separators: string, flags: UriParamsFlags): void
    next(): [ /* returnType */ boolean, /* attribute */ string | null, /* value */ string | null ]
    static name: string
}
class Variant {
    /* Methods of GLib-2.0.GLib.Variant */
    byteswap(): Variant
    checkFormatString(formatString: string, copyOnly: boolean): boolean
    classify(): VariantClass
    compare(two: Variant): number
    dupBytestring(): Uint8Array
    dupBytestringArray(): string[]
    dupObjv(): string[]
    dupString(): [ /* returnType */ string, /* length */ number ]
    dupStrv(): string[]
    equal(two: Variant): boolean
    getBoolean(): boolean
    getByte(): number
    getBytestring(): Uint8Array
    getBytestringArray(): string[]
    getChildValue(index: number): Variant
    getData(): object | null
    getDataAsBytes(): any
    getDouble(): number
    getHandle(): number
    getInt16(): number
    getInt32(): number
    getInt64(): number
    getMaybe(): Variant | null
    getNormalForm(): Variant
    getObjv(): string[]
    getSize(): number
    getString(): [ /* returnType */ string, /* length */ number | null ]
    getStrv(): string[]
    getType(): VariantType
    getTypeString(): string
    getUint16(): number
    getUint32(): number
    getUint64(): number
    getVariant(): Variant
    hash(): number
    isContainer(): boolean
    isFloating(): boolean
    isNormalForm(): boolean
    isOfType(type: VariantType): boolean
    lookupValue(key: string, expectedType?: VariantType | null): Variant
    nChildren(): number
    print(typeAnnotate: boolean): string
    ref(): Variant
    refSink(): Variant
    store(data: object): void
    takeRef(): Variant
    unref(): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newArray(childType: VariantType | null, children: Variant[] | null): Variant
    static newBoolean(value: boolean): Variant
    static newByte(value: number): Variant
    static newBytestring(string: Uint8Array): Variant
    static newBytestringArray(strv: string[]): Variant
    static newDictEntry(key: Variant, value: Variant): Variant
    static newDouble(value: number): Variant
    static newFixedArray(elementType: VariantType, elements: object | null, nElements: number, elementSize: number): Variant
    static newFromBytes(type: VariantType, bytes: any, trusted: boolean): Variant
    static newFromData(type: VariantType, data: Uint8Array, trusted: boolean, notify: DestroyNotify, userData?: object | null): Variant
    static newHandle(value: number): Variant
    static newInt16(value: number): Variant
    static newInt32(value: number): Variant
    static newInt64(value: number): Variant
    static newMaybe(childType?: VariantType | null, child?: Variant | null): Variant
    static newObjectPath(objectPath: string): Variant
    static newObjv(strv: string[]): Variant
    static newSignature(signature: string): Variant
    static newString(string: string): Variant
    static newStrv(strv: string[]): Variant
    static newTuple(children: Variant[]): Variant
    static newUint16(value: number): Variant
    static newUint32(value: number): Variant
    static newUint64(value: number): Variant
    static newVariant(value: Variant): Variant
    static isObjectPath(string: string): boolean
    static isSignature(string: string): boolean
    static parse(type: VariantType | null, text: string, limit?: string | null, endptr?: string | null): Variant
    static parseErrorPrintContext(error: Error, sourceStr: string): string
    static parseErrorQuark(): Quark
    static parserGetErrorQuark(): Quark
}
class VariantBuilder {
    /* Methods of GLib-2.0.GLib.VariantBuilder */
    addValue(value: Variant): void
    close(): void
    end(): Variant
    open(type: VariantType): void
    ref(): VariantBuilder
    unref(): void
    static name: string
    static new(type: VariantType): VariantBuilder
    constructor(type: VariantType)
    /* Static methods and pseudo-constructors */
    static new(type: VariantType): VariantBuilder
}
class VariantDict {
    /* Methods of GLib-2.0.GLib.VariantDict */
    clear(): void
    contains(key: string): boolean
    end(): Variant
    insertValue(key: string, value: Variant): void
    lookupValue(key: string, expectedType?: VariantType | null): Variant
    ref(): VariantDict
    remove(key: string): boolean
    unref(): void
    static name: string
    static new(fromAsv?: Variant | null): VariantDict
    constructor(fromAsv?: Variant | null)
    /* Static methods and pseudo-constructors */
    static new(fromAsv?: Variant | null): VariantDict
}
class VariantIter {
    /* Methods of GLib-2.0.GLib.VariantIter */
    free(): void
    nChildren(): number
    nextValue(): Variant | null
    static name: string
}
class VariantType {
    /* Methods of GLib-2.0.GLib.VariantType */
    copy(): VariantType
    dupString(): string
    element(): VariantType
    equal(type2: VariantType): boolean
    first(): VariantType
    free(): void
    getStringLength(): number
    hash(): number
    isArray(): boolean
    isBasic(): boolean
    isContainer(): boolean
    isDefinite(): boolean
    isDictEntry(): boolean
    isMaybe(): boolean
    isSubtypeOf(supertype: VariantType): boolean
    isTuple(): boolean
    isVariant(): boolean
    key(): VariantType
    nItems(): number
    next(): VariantType
    value(): VariantType
    static name: string
    static new(typeString: string): VariantType
    constructor(typeString: string)
    /* Static methods and pseudo-constructors */
    static new(typeString: string): VariantType
    static newArray(element: VariantType): VariantType
    static newDictEntry(key: VariantType, value: VariantType): VariantType
    static newMaybe(element: VariantType): VariantType
    static newTuple(items: VariantType[]): VariantType
    static checked(arg0: string): VariantType
    static stringGetDepth(typeString: string): number
    static stringIsValid(typeString: string): boolean
    static stringScan(string: string, limit?: string | null): [ /* returnType */ boolean, /* endptr */ string | null ]
}
class DoubleIEEE754 {
    static name: string
}
class FloatIEEE754 {
    static name: string
}
class Mutex {
    /* Methods of GLib-2.0.GLib.Mutex */
    clear(): void
    init(): void
    lock(): void
    trylock(): boolean
    unlock(): void
    static name: string
}
class TokenValue {
    static name: string
}
    type DateDay = number
    type DateYear = number
    type MainContextPusher = void
    type MutexLocker = void
    type Pid = number
    type Quark = number
    type RWLockReaderLocker = void
    type RWLockWriterLocker = void
    type RecMutexLocker = void
    type RefString = number
    type Strv = string
    type Time = number
    type TimeSpan = number
    type Type = number
}
export default GLib;